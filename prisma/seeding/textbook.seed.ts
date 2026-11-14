/**
 * Loads the textbook-style questions (textbook-questions.data.ts) into the
 * question bank as hidden drafts, each with its textbook pointer. Safe to
 * re-run: it skips ids that already exist, so admin edits are kept.
 * Run: npm run db:seed:textbook   (after db:seed:library and db:seed:topics)
 */
import 'dotenv/config';
import { databaseClass } from '@bloomneo/appkit/database';
import { ALL_TEXTBOOK_QUESTIONS } from './textbook-questions.data.js';

async function main() {
  const db = await databaseClass.get();
  const subject = await db.curriculumNode.findFirst({ where: { kind: 'subject', name: 'Mathematics (Standard)' } });
  if (!subject) throw new Error('Run npm run db:seed:library first');

  let added = 0;
  for (const q of ALL_TEXTBOOK_QUESTIONS) {
    if (await db.question.findUnique({ where: { id: q.id } })) continue;
    const chapter = await db.curriculumNode.findFirst({ where: { kind: 'chapter', name: q.chapter, parentId: subject.id } });
    const topic = chapter && await db.curriculumNode.findFirst({ where: { kind: 'topic', name: q.topic, parentId: chapter.id } });
    if (!topic) { console.warn(`No topic "${q.topic}" under "${q.chapter}"; skipped ${q.id}`); continue; }
    await db.question.create({
      data: {
        id: q.id, topicId: topic.id, type: q.type, complexity: q.complexity, marks: q.marks, text: q.text,
        options: q.options ?? undefined, answer: q.answer, markingSteps: q.steps ?? undefined,
        textbookRef: q.ref, source: 'ai', reviewStatus: 'draft', isActive: false,
      },
    });
    added++;
  }
  console.log(`✅ Textbook-style questions: ${added} added as drafts for review.`);
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
