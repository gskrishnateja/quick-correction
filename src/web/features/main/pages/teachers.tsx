/**
 * /teachers — what Quick Correction does for a teacher or tutor.
 */
import { Link } from 'react-router-dom';
import { Button } from '@bloomneo/uikit';
import { FileText, Shuffle, Printer, ClipboardCheck, Users, Mic, Check } from 'lucide-react';
import { SEO } from '@/shared/SEO';
import { PageHero, SectionTitle, InfoCard, CtaBanner } from '../components/SitePage';

const GAINS = [
  'Board-pattern papers without typing a single question',
  'No stack of answer sheets to carry home',
  'Every mark comes with a reason you can check',
  'You approve before anything is final',
];

export default function TeachersPage() {
  return (
    <>
      <SEO title="For teachers" description="For teachers and tutors: generate CBSE Class 10 Maths papers in the 80-mark board pattern in a minute, print or save as PDF, and get handwritten answer sheets marked. You approve every mark." />

      <PageHero
        eyebrow="For teachers and tutors"
        title={<>Spend your evenings teaching, <span className="mm-gradient-text">not correcting</span></>}
        lead="Set a full CBSE Class 10 Maths paper in a minute. Students write on paper, the answers are marked question by question, and you check and approve."
      >
        <Button asChild size="lg" className="h-11 rounded-xl"><Link to="/demo">Try the teacher demo</Link></Button>
        <Button asChild size="lg" variant="outline" className="h-11 rounded-xl"><Link to="/contact">Talk to us</Link></Button>
      </PageHero>

      <ul className="mx-auto mt-4 grid max-w-3xl gap-2 sm:grid-cols-2">
        {GAINS.map((g) => (
          <li key={g} className="flex items-center gap-2.5 rounded-2xl bg-card px-4 py-3 text-sm font-medium ring-1 ring-border/70">
            <span className="grid size-6 shrink-0 place-items-center rounded-full bg-success/15 text-success"><Check className="size-3.5" strokeWidth={3} /></span>
            {g}
          </li>
        ))}
      </ul>

      <section className="mt-16">
        <SectionTitle eyebrow="Setting papers" title="A paper that looks like the board’s" lead="The paper is filled from a question bank organised by chapter, topic and question type." />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <InfoCard icon={FileText} title="Sections A to E">The 80-mark board pattern: 20 one-mark questions, then 2, 3, 5 and 4-mark case-study sections, with internal choices where the board has them.</InfoCard>
          <InfoCard icon={Shuffle} title="Pick chapters, shuffle sets">Choose the chapters you have covered. Shuffle to get a different set of questions for another section or a retest.</InfoCard>
          <InfoCard icon={Printer} title="Print or save as PDF">Print the paper for the class, or save it as a PDF. Add the answer key to your copy when you need it.</InfoCard>
          <InfoCard icon={Mic} title="Or just ask">Type or say what you need, such as “40-mark trig test, due Friday”, and the paper is built and set.</InfoCard>
        </div>
      </section>

      <section className="mt-16">
        <SectionTitle eyebrow="Marking" title="You keep the final say" lead="AI does the first pass. Nothing is final until you approve it." />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <InfoCard icon={ClipboardCheck} title="A review queue">Marked sheets wait for you, with answers that were hard to read shown first. Change any mark with a tap, then approve.</InfoCard>
          <InfoCard icon={Users} title="Your students in one place">Each student’s tests and marks over time. Parents join with an invite code you share, so you don’t manage their logins.</InfoCard>
        </div>
      </section>

      <CtaBanner title="Try it on sample papers" text="Build a paper and review marked sheets with sample data. No sign-up." to="/demo" label="Open the demo" />
    </>
  );
}
