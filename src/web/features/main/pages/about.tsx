/**
 * /about — what Quick Correction is, the problem it solves and how it works
 * with teachers rather than around them. AppLayoutRoute supplies the chrome.
 */
import { Link } from 'react-router-dom';
import { Button } from '@bloomneo/uikit';
import { ArrowRight, PenLine, ShieldCheck, Target } from 'lucide-react';
import { SEO } from '@/shared/SEO';
import { PageHero, InfoCard } from '../components/SitePage';

const PRINCIPLES = [
  {
    icon: PenLine,
    title: 'Paper first',
    body: 'The board exam is written by hand, so practice should be too. Students write on paper; the only screen involved is the parent’s phone camera.',
  },
  {
    icon: ShieldCheck,
    title: 'The teacher decides',
    body: 'AI does the first pass so the teacher doesn’t have to. Every mark can be changed, and nothing is final until the teacher approves it.',
  },
  {
    icon: Target,
    title: 'A reason for every mark',
    body: 'A total tells a student how they did. A reason for each question tells them what to do next, which is the part that improves the next score.',
  },
];

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About"
        description="Quick Correction helps teachers and parents run CBSE Class 10 Maths practice tests in the board pattern, with handwritten answers marked question by question and approved by the teacher."
      />

      <PageHero
        eyebrow="About us"
        title={<>More practice tests, <span className="mm-gradient-text">less correcting</span></>}
        lead="Quick Correction helps teachers and parents run CBSE Class 10 Maths practice tests in the board pattern, and get the answers marked in minutes."
      />

      <div className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
        <p>
          Students get better at the board exam by writing full papers under exam conditions and
          learning from their mistakes. The bottleneck is marking. A teacher with three batches
          spends whole evenings correcting answer sheets, and by the time the marks come back the
          class has moved on. So fewer tests get set, and the feedback arrives too late to help.
        </p>
        <p>
          Quick Correction takes the marking off the teacher’s desk without taking the teacher out
          of it. The teacher sets a paper that follows the CBSE pattern, from sections A to E with
          internal choices. Students write on paper. Parents photograph the pages. Each answer is
          read, checked against the answer key and marked with a short reason, and the teacher
          reviews and approves before the marks are final.
        </p>
        <p>
          We started with CBSE Class 10 Mathematics (Standard) because it is the paper most
          students and parents worry about, and because doing one subject properly beats doing
          many badly.
        </p>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-3">
        {PRINCIPLES.map(({ icon, title, body }) => (
          <InfoCard key={title} icon={icon} title={title}>{body}</InfoCard>
        ))}
      </div>

      <div className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-3 border-t border-border pt-8">
        <Button asChild size="lg" className="h-11 rounded-xl">
          <Link to="/how-it-works">See how it works <ArrowRight className="size-4" /></Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="h-11 rounded-xl">
          <Link to="/contact">Talk to us</Link>
        </Button>
      </div>
    </>
  );
}
