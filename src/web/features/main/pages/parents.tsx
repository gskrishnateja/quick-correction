/**
 * /parents — what Quick Correction does for a parent.
 */
import { Link } from 'react-router-dom';
import { Button } from '@bloomneo/uikit';
import { Link2, Camera, MessageSquareText, TrendingUp, ShieldCheck, Clock } from 'lucide-react';
import { SEO } from '@/shared/SEO';
import { PageHero, SectionTitle, InfoCard, CtaBanner } from '../components/SitePage';

const STEPS = [
  { n: 1, title: 'Enter the invite code', text: 'Your child’s teacher gives you a short code. Enter it once to link your child.' },
  { n: 2, title: 'Send photos of the answers', text: 'After the test, photograph each page your child wrote and send them.' },
  { n: 3, title: 'Read the marks', text: 'See the marks for every question, why, and which chapter to practise next.' },
];

export default function ParentsPage() {
  return (
    <>
      <SEO title="For parents" description="For parents: photograph your child's handwritten CBSE Class 10 Maths answers and see marks for every question, a plain reason for each, and which chapters to revise before the board exam." />

      <PageHero
        eyebrow="For parents"
        title={<>Know how your child did <span className="mm-gradient-text">on every question</span></>}
        lead="Not just a total. The marks for each question, a plain reason, and the chapters to revise before the board exam."
      >
        <Button asChild size="lg" className="h-11 rounded-xl"><Link to="/demo">Try the parent demo</Link></Button>
        <Button asChild size="lg" variant="outline" className="h-11 rounded-xl"><Link to="/auth/login">Sign in</Link></Button>
      </PageHero>

      <section className="mt-10">
        <SectionTitle eyebrow="Three steps" title="Nothing new for your child to learn" lead="They write on paper, just as in the exam. You only take the photos." />
        <ol className="mt-8 grid gap-4 md:grid-cols-3">
          {STEPS.map((s) => (
            <li key={s.n} className="mm-glass rounded-3xl p-6">
              <span className="mm-gradient grid size-10 place-items-center rounded-2xl text-base font-bold">{s.n}</span>
              <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16">
        <SectionTitle eyebrow="What you see" title="Clear enough to act on" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <InfoCard icon={MessageSquareText} title="A reason for every mark">“Ratio of areas, not sides.” Each question says what went right or wrong, in plain words.</InfoCard>
          <InfoCard icon={TrendingUp} title="Chapter by chapter">Marks add up per chapter over every test, so you can see which ones need more practice.</InfoCard>
          <InfoCard icon={ShieldCheck} title="Checked by the teacher">Marks show as “Faculty checking” until the teacher has reviewed and approved them.</InfoCard>
          <InfoCard icon={Clock} title="Back in minutes">You see that the pages arrived and are being marked. The marks appear as soon as they are ready.</InfoCard>
          <InfoCard icon={Camera} title="Just your phone">No scanner. A clear photo of each page is enough.</InfoCard>
          <InfoCard icon={Link2} title="One link per child">Link once with the teacher’s code. Every test set for the class then shows up for you.</InfoCard>
        </div>
      </section>

      <CtaBanner title="See what a marked test looks like" text="Open the parent demo with sample answers and marks." to="/demo" label="Open the demo" />
    </>
  );
}
