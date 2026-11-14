/**
 * /how-it-works — the whole journey of one test, from setting the paper to
 * the parent seeing what to revise. Six steps, each with who does it.
 */
import { Link } from 'react-router-dom';
import { Button } from '@bloomneo/uikit';
import { FileText, Link2, Camera, Sparkles, ClipboardCheck, TrendingUp } from 'lucide-react';
import { SEO } from '@/shared/SEO';
import { PageHero, SectionTitle, CtaBanner } from '../components/SitePage';

const STEPS = [
  { icon: FileText, who: 'Teacher', title: 'Set a board-pattern paper', text: 'Choose the chapters and the paper pattern. The paper is filled from the question bank with sections A to E, the right marks per question and internal choices. Print it, or save it as a PDF with or without the answer key.' },
  { icon: Link2, who: 'Parent', title: 'Link to your child once', text: 'The teacher shares a short invite code. The parent enters it once, and from then on every test set for that class shows up on their phone.' },
  { icon: Camera, who: 'Student & parent', title: 'Write on paper, send photos', text: 'The student answers on paper, exactly as in the exam hall. The parent photographs each page and sends them. No typing, no new app for the student.' },
  { icon: Sparkles, who: 'AI marker', title: 'Every question is marked', text: 'The handwriting is read, each answer is matched to its question and checked against the answer key. Every question gets its marks and a one-line reason. Answers that are hard to read are pointed out.' },
  { icon: ClipboardCheck, who: 'Teacher', title: 'The teacher checks and approves', text: 'Marked sheets wait in the teacher’s review queue, hardest-to-read answers first. The teacher can change any mark. Until they approve, parents see the marks labelled “Faculty checking”.' },
  { icon: TrendingUp, who: 'Parent', title: 'See the result and what to practise', text: 'The parent sees the total, the marks for each question with the reason, and how each chapter is going, so it’s clear what to revise before the next test.' },
];

export default function HowItWorksPage() {
  return (
    <>
      <SEO title="How it works" description="How Quick Correction works: the teacher sets a CBSE Class 10 Maths board-pattern paper, the student writes on paper, parents send photos, and every answer is marked and teacher-approved." />

      <PageHero
        eyebrow="How it works"
        title={<>From the question paper <span className="mm-gradient-text">to the parent’s phone</span></>}
        lead="One test, six steps. The student writes on paper as usual, and the marks come back question by question, checked by the teacher."
      >
        <Button asChild size="lg" className="h-11 rounded-xl"><Link to="/demo">Try it with sample data</Link></Button>
        <Button asChild size="lg" variant="outline" className="h-11 rounded-xl"><Link to="/faq">Read the FAQ</Link></Button>
      </PageHero>

      <section className="mt-10">
        <SectionTitle eyebrow="The journey" title="What happens to one test" />
        <ol className="relative mt-8 space-y-4 before:absolute before:bottom-6 before:left-[27px] before:top-6 before:w-0.5 before:bg-border sm:before:left-[31px]">
          {STEPS.map(({ icon: Icon, who, title, text }, i) => (
            <li key={title} className="relative flex gap-4 sm:gap-6">
              <span className="mm-gradient relative z-10 grid size-14 shrink-0 place-items-center rounded-2xl shadow-md sm:size-16">
                <Icon className="size-6" />
              </span>
              <div className="mm-glass flex-1 rounded-3xl p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-muted-foreground">Step {i + 1}</span>
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary">{who}</span>
                </div>
                <h3 className="mt-1.5 text-lg font-semibold">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <CtaBanner title="See it with your own eyes" text="Click through as a parent or a teacher. No sign-up, sample data only." to="/demo" label="Open the demo" />
    </>
  );
}
