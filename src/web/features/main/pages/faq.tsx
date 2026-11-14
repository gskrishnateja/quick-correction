/**
 * /faq — common questions, grouped. Native <details> so it works without
 * JavaScript and is keyboard accessible for free.
 */
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { SEO } from '@/shared/SEO';
import { PageHero, CtaBanner } from '../components/SitePage';

const GROUPS: { title: string; items: { q: string; a: React.ReactNode; plain?: string }[] }[] = [
  {
    title: 'Getting started',
    items: [
      { q: 'Which classes and subjects does it cover?', a: 'CBSE Class 10 Mathematics (Standard) for now. Papers follow the board’s 80-mark pattern.' },
      { q: 'Does my child need a phone or a laptop?', a: 'No. Your child writes the answers on paper, as in the exam. A parent photographs the pages and sends them.' },
      { q: 'How does a parent join?', a: 'The teacher shares a short invite code. The parent enters it once to link their child.' },
      { q: 'Can I try it before signing up?', a: <>Yes. The <Link to="/demo" className="font-medium text-primary hover:underline">demo</Link> lets you click through as a parent or a teacher with sample data.</>, plain: 'Yes. The demo lets you click through as a parent or a teacher with sample data, with no sign-up.' },
    ],
  },
  {
    title: 'Marking',
    items: [
      { q: 'How are the answers marked?', a: 'The handwriting is read and each answer is checked against the answer key for its question. Every question gets its marks and a short reason.' },
      { q: 'What if the AI gets a mark wrong?', a: 'The teacher reviews every marked sheet and can change any mark before approving it. Until then, parents see the marks labelled “Faculty checking”.' },
      { q: 'What about messy handwriting?', a: 'Answers that are hard to read are pointed out to the teacher first, so a person looks at them.' },
      { q: 'How long does marking take?', a: 'Usually a few minutes after the photos arrive. The parent can see that the pages were received and are being marked.' },
    ],
  },
  {
    title: 'Papers and questions',
    items: [
      { q: 'Where do the questions come from?', a: 'From a question bank organised by chapter, topic and question type. New questions are checked and approved by a teacher before they are used in papers.' },
      { q: 'Can I print a paper?', a: 'Yes. Print it, or save it as a PDF. Teachers can add the answer key to their copy.' },
      { q: 'Can two sections get different papers?', a: 'Yes. Shuffle to get a different set of questions on the same chapters and pattern.' },
    ],
  },
  {
    title: 'Privacy',
    items: [
      { q: 'Who can see my child’s answers and marks?', a: <>Your child’s teacher and you. For how data is handled, see the <Link to="/privacy" className="font-medium text-primary hover:underline">privacy page</Link>.</>, plain: 'Your child’s teacher and you. The privacy page explains how data is handled.' },
    ],
  },
];

/** FAQPage structured data, so search results can show these answers directly. */
const FAQ_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: GROUPS.flatMap((g) => g.items).map((it) => ({
    '@type': 'Question',
    name: it.q,
    acceptedAnswer: { '@type': 'Answer', text: it.plain ?? (typeof it.a === 'string' ? it.a : '') },
  })),
};

export default function FaqPage() {
  return (
    <>
      <SEO
        title="FAQ"
        description="Answers about Quick Correction for CBSE Class 10 Maths: how answer sheets are marked, messy handwriting, teacher approval, printing papers and privacy."
        jsonLd={FAQ_LD}
      />

      <PageHero eyebrow="FAQ" title="Questions, answered" lead="Can’t find yours? Send us a message from the contact page." />

      <div className="mx-auto mt-6 max-w-3xl space-y-10">
        {GROUPS.map((g) => (
          <section key={g.title}>
            <h2 className="text-sm font-semibold uppercase tracking-[0.08em] text-muted-foreground">{g.title}</h2>
            <div className="mt-3 space-y-2">
              {g.items.map((it) => (
                <details key={it.q} className="group mm-glass rounded-2xl px-5 py-4 open:pb-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold [&::-webkit-details-marker]:hidden">
                    {it.q}
                    <ChevronDown className="size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{it.a}</p>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>

      <CtaBanner title="Still have a question?" text="Send us a message from the contact page." to="/contact" label="Contact us" />
    </>
  );
}
