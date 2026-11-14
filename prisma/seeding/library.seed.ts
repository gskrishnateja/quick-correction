/**
 * Categories starter: the boards, classes and maths subjects in BOARDS, then
 * CBSE > Class 10 > Mathematics (Standard) with its
 * thirteen chapters, a "General" topic in each, the board and unit-test paper
 * patterns, and the starter question bank tagged to those topics.
 * Safe to re-run: it only adds what is missing.
 * Run: npm run db:seed:library
 */
import 'dotenv/config';
import { databaseClass } from '@bloomneo/appkit/database';
import { CHAPTERS, SECTIONS, QUESTION_BANK } from './question-bank.data.js';
import { SYLLABUS } from './syllabus.data.js';

async function node(db: any, kind: string, name: string, parentId: string | null, position: number) {
  const found = await db.curriculumNode.findFirst({ where: { parentId, name } });
  return found ?? db.curriculumNode.create({ data: { kind, name, parentId, position } });
}

const TYPE = { A: 'mcq', B: 'short', C: 'short', D: 'long', E: 'case' } as const;

/**
 * The boards, classes and maths subjects we cover. Chapters for the subjects
 * other than CBSE Class 10 come from SYLLABUS (syllabus.data.ts); only CBSE
 * Class 10 has questions and paper patterns so far. Teachers don't see a
 * subject until it has chapters and a pattern.
 *
 * Names follow what each board calls its course: CISCE runs ICSE for Class 10
 * and ISC for Class 12; Cambridge's Class 12 course is AS & A Level, not
 * IGCSE; IB's Class 10 is MYP Year 5 and Class 12 is the Diploma, which has
 * two maths courses.
 */
export const BOARDS: { name: string; classes: { name: string; subjects: string[] }[] }[] = [
  { name: 'CBSE', classes: [
    { name: 'Class 10', subjects: ['Mathematics (Standard)'] },
    { name: 'Class 12', subjects: ['Mathematics'] },
  ] },
  { name: 'ICSE', classes: [
    { name: 'Class 10', subjects: ['Mathematics (ICSE)'] },
    { name: 'Class 12', subjects: ['Mathematics (ISC)'] },
  ] },
  { name: 'IGCSE', classes: [
    { name: 'Class 10', subjects: ['Mathematics (IGCSE)'] },
    { name: 'Class 12', subjects: ['Mathematics (AS & A Level)'] },
  ] },
  { name: 'IB', classes: [
    { name: 'Class 10', subjects: ['Mathematics (MYP)'] },
    { name: 'Class 12', subjects: ['Mathematics: Analysis and Approaches (DP)', 'Mathematics: Applications and Interpretation (DP)'] },
  ] },
];

export async function seedBoards(db: any) {
  for (const [b, board] of BOARDS.entries()) {
    const bn = await node(db, 'board', board.name, null, b);
    for (const [c, cls] of board.classes.entries()) {
      const cn = await node(db, 'class', cls.name, bn.id, c);
      for (const [s, subject] of cls.subjects.entries()) {
        const sn = await node(db, 'subject', subject, cn.id, s);
        for (const [i, ch] of (SYLLABUS[subject] ?? []).entries()) {
          const chapter = await node(db, 'chapter', typeof ch === 'string' ? ch : ch.name, sn.id, i);
          if (typeof ch !== 'string') for (const [t, topic] of ch.topics.entries()) await node(db, 'topic', topic, chapter.id, t);
        }
      }
    }
  }
}

export async function seedLibrary(db: any) {
  await seedBoards(db);
  const board = await node(db, 'board', 'CBSE', null, 0);
  const cls = await node(db, 'class', 'Class 10', board.id, 0);
  const subject = await node(db, 'subject', 'Mathematics (Standard)', cls.id, 0);

  const topicByChapter = new Map<string, string>();
  for (const [i, name] of CHAPTERS.entries()) {
    const chapter = await node(db, 'chapter', name, subject.id, i);
    const topic = await node(db, 'topic', 'General', chapter.id, 0);
    topicByChapter.set(name, topic.id);
  }

  // The two layouts the generator has always used, now as editable patterns.
  const sectionsFor = (div: number) => (Object.keys(SECTIONS) as (keyof typeof SECTIONS)[]).map((k) => ({
    title: SECTIONS[k].title, type: TYPE[k], count: Math.ceil(SECTIONS[k].count / div), marksEach: SECTIONS[k].marks, note: SECTIONS[k].note,
  }));
  const patterns = [
    { name: 'Board paper', description: 'Full 80-mark CBSE board layout.', durationMins: 180, sections: sectionsFor(1) },
    { name: 'Unit test', description: 'A third of the board layout, for one or a few chapters.', durationMins: 60, sections: sectionsFor(3) },
  ];
  for (const [i, p] of patterns.entries()) {
    if (!(await db.paperPattern.findFirst({ where: { subjectId: subject.id, name: p.name } }))) {
      await db.paperPattern.create({ data: { ...p, subjectId: subject.id, position: i } });
    }
  }

  // Keep the original ids (a1, b3 …) so papers made before the bank moved to
  // the database still resolve.
  for (const q of QUESTION_BANK) {
    if (await db.question.findUnique({ where: { id: q.id } })) continue;
    await db.question.create({
      data: { id: q.id, topicId: topicByChapter.get(q.chapter)!, type: TYPE[q.section], complexity: 'medium', marks: q.marks, text: q.text, options: q.options ?? undefined, source: 'seed' },
    });
  }
}

async function main() {
  const db = await databaseClass.get();
  await seedLibrary(db);
  console.log('✅ Categories ready: CBSE, ICSE, IGCSE and IB (Class 10 and 12 maths), with chapters, patterns and questions for CBSE Class 10.');
}

if (process.argv[1]?.endsWith('library.seed.ts')) {
  main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
}
