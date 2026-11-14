/**
 * FeatureGrid — the home page's feature section on wide screens.
 *
 * Each card shows the feature doing its job (a tiny drawn UI), then says in
 * one plain sentence what it does and who it is for. A picture of the thing
 * beats a one-line slogan: "Board-exact papers" means little until you see
 * sections A to E with their marks. All sample data.
 */
import type { ReactNode } from 'react';
import { Camera, Check, X, Mic, BellRing, FileText, Sparkles, TrendingUp } from 'lucide-react';

type Who = 'Teachers' | 'Parents' | 'Both';

function Tag({ who }: { who: Who }) {
  const cls =
    who === 'Teachers' ? 'bg-primary/10 text-primary'
    : who === 'Parents' ? 'bg-[var(--color-highlight-soft)] text-[var(--color-highlight-on-soft)]'
    : 'bg-success/15 text-success';
  return <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${cls}`}>For {who === 'Both' ? 'teachers & parents' : who.toLowerCase()}</span>;
}

function Card({ who, icon: Icon, title, text, children }: { who: Who; icon: typeof FileText; title: string; text: string; children: ReactNode }) {
  return (
    <li className="mm-glass group flex flex-col overflow-hidden rounded-3xl transition hover:-translate-y-0.5 hover:shadow-[0_24px_48px_-28px_rgba(15,23,51,0.4)]">
      {/* The picture: what the feature looks like when it runs. */}
      <div className="mm-tint relative h-40 overflow-hidden border-b border-border/60 p-4" aria-hidden>
        {children}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="grid size-9 place-items-center rounded-xl bg-card text-primary ring-1 ring-border/70"><Icon className="size-[18px]" /></span>
          <Tag who={who} />
        </div>
        <p className="mt-3 text-base font-semibold">{title}</p>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
      </div>
    </li>
  );
}

const chip = 'rounded-lg bg-card px-2 py-1 text-[11px] font-semibold shadow-sm ring-1 ring-border/60';

/** Sections A–E with their marks, the way a CBSE paper is laid out. */
function PaperVisual() {
  const sections = [
    { s: 'A', q: '20 × 1', w: 'w-[25%]' },
    { s: 'B', q: '5 × 2', w: 'w-[12.5%]' },
    { s: 'C', q: '6 × 3', w: 'w-[22.5%]' },
    { s: 'D', q: '4 × 5', w: 'w-[25%]' },
    { s: 'E', q: '3 × 4', w: 'w-[15%]' },
  ];
  return (
    <div className="flex h-full flex-col justify-center gap-3">
      <div className="flex items-center justify-between text-xs font-semibold"><span>Mathematics (Standard)</span><span className="text-muted-foreground">80 marks · 3 h</span></div>
      <div className="flex h-3 gap-0.5 overflow-hidden rounded-full">
        {sections.map((x, i) => <span key={x.s} className={`${x.w} ${['bg-primary','bg-primary/80','bg-primary/60','bg-primary/45','bg-primary/30'][i]}`} />)}
      </div>
      <div className="grid grid-cols-5 gap-1.5">
        {sections.map((x) => (
          <span key={x.s} className="rounded-lg bg-card py-1.5 text-center shadow-sm ring-1 ring-border/60">
            <span className="block text-sm font-bold">{x.s}</span>
            <span className="block text-[10px] text-muted-foreground">{x.q}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/** A phone photographing pages. */
function SnapVisual() {
  return (
    <div className="flex h-full items-center justify-center gap-4">
      <div className="relative h-32 w-20 rounded-2xl border-[3px] border-foreground/80 bg-card p-1.5 shadow-lg">
        <div className="relative h-full overflow-hidden rounded-lg bg-[oklch(0.985_0.006_95)]">
          {Array.from({ length: 7 }, (_, i) => <span key={i} className="absolute inset-x-1.5 h-px bg-[oklch(0.85_0.04_240)]" style={{ top: 10 + i * 12 }} />)}
          <span className="absolute inset-1 rounded border-2 border-dashed border-primary/70" />
        </div>
        <span className="absolute -bottom-2.5 left-1/2 grid size-6 -translate-x-1/2 place-items-center rounded-full bg-primary text-primary-foreground ring-2 ring-card"><Camera className="size-3" /></span>
      </div>
      <div className="flex flex-col gap-1.5">
        {[1, 2, 3, 4].map((n) => (
          <span key={n} className={`${chip} flex items-center gap-1.5`}>
            <Check className="size-3 text-success" strokeWidth={3} /> Page {n}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Two marked answers, with the reason beside each. */
function MarkVisual() {
  return (
    <div className="flex h-full flex-col justify-center gap-2">
      {[
        { q: 'Q7 · Find the HCF', n: 'Correct method and answer', m: '2/2', ok: true },
        { q: 'Q8 · Prove √5 is irrational', n: 'Contradiction step missing', m: '1/3', ok: false },
      ].map((r) => (
        <div key={r.q} className="flex items-center gap-2.5 rounded-xl bg-card p-2.5 shadow-sm ring-1 ring-border/60">
          <span className={`grid size-6 shrink-0 place-items-center rounded-lg ${r.ok ? 'bg-success/15 text-success' : 'bg-destructive/10 text-destructive'}`}>
            {r.ok ? <Check className="size-3.5" strokeWidth={3} /> : <X className="size-3.5" strokeWidth={3} />}
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-xs font-semibold">{r.q}</span>
            <span className="block truncate text-[11px] text-muted-foreground">{r.n}</span>
          </span>
          <span className={`text-xs font-bold ${r.ok ? 'text-success' : 'text-warning'}`}>{r.m}</span>
        </div>
      ))}
      <span className="self-end text-[11px] font-medium text-muted-foreground">Marked in 3 min</span>
    </div>
  );
}

/** A spoken request turning into a paper. */
function VoiceVisual() {
  return (
    <div className="flex h-full flex-col justify-center gap-2.5">
      <div className="flex items-center gap-2 self-end rounded-2xl rounded-br-md bg-primary px-3 py-2 text-xs font-medium text-primary-foreground shadow">
        <Mic className="size-3.5" />
        <span className="flex h-4 items-end gap-0.5" aria-hidden>
          {[6, 12, 8, 14, 10, 5, 11, 7].map((h, i) => <span key={i} className="w-0.5 rounded-full bg-white/80" style={{ height: h }} />)}
        </span>
        “40-mark trig test, due Friday”
      </div>
      <div className="flex items-center gap-2 self-start rounded-2xl rounded-bl-md bg-card px-3 py-2 text-xs shadow-sm ring-1 ring-border/60">
        <FileText className="size-3.5 text-primary" />
        <span><b>Trigonometry test</b> · 40 marks · due Fri</span>
      </div>
    </div>
  );
}

/** Chapter bars showing what to revise. */
function ProgressVisual() {
  const ch = [
    { n: 'Real Numbers', v: 92 },
    { n: 'Triangles', v: 74 },
    { n: 'Circles', v: 41 },
  ];
  return (
    <div className="flex h-full flex-col justify-center gap-2.5">
      {ch.map((c) => (
        <div key={c.n}>
          <div className="mb-1 flex justify-between text-[11px] font-semibold"><span>{c.n}</span><span className="tabular-nums">{c.v}%</span></div>
          <div className="h-2 overflow-hidden rounded-full bg-card ring-1 ring-border/60">
            <span className={`block h-full rounded-full ${c.v >= 70 ? 'bg-success' : 'bg-warning'}`} style={{ width: `${c.v}%` }} />
          </div>
        </div>
      ))}
      <span className="mt-0.5 self-start rounded-full bg-warning/15 px-2 py-0.5 text-[11px] font-semibold text-[oklch(0.5_0.13_70)]">Revise next: Circles</span>
    </div>
  );
}

/** Notifications as answers arrive and marks are approved. */
function NotifyVisual() {
  return (
    <div className="flex h-full flex-col justify-center gap-2">
      {[
        { t: 'Aarav sent 4 pages', s: 'Unit Test 3 · just now', i: Camera },
        { t: '2 sheets ready to check', s: 'Review and approve marks', i: BellRing },
      ].map((n) => (
        <div key={n.t} className="flex items-center gap-2.5 rounded-xl bg-card p-2.5 shadow-sm ring-1 ring-border/60">
          <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary"><n.i className="size-3.5" /></span>
          <span className="min-w-0">
            <span className="block truncate text-xs font-semibold">{n.t}</span>
            <span className="block truncate text-[11px] text-muted-foreground">{n.s}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

export function FeatureGrid() {
  return (
    <ul className="mt-10 grid grid-cols-3 gap-5">
      <Card who="Teachers" icon={FileText} title="Board-pattern papers in a minute"
        text="Pick the chapters. You get a full CBSE paper with sections A to E, the right marks per question and internal choices, ready to print.">
        <PaperVisual />
      </Card>
      <Card who="Parents" icon={Camera} title="Photograph the answer sheet"
        text="Your child writes on paper as in the exam. You take a photo of each page on your phone. That's the whole upload.">
        <SnapVisual />
      </Card>
      <Card who="Both" icon={Sparkles} title="Every question marked, with a reason"
        text="Each answer is checked against the answer key and gets its marks and a one-line reason, so you know what went wrong, not just the total.">
        <MarkVisual />
      </Card>
      <Card who="Teachers" icon={Mic} title="Ask for a test in your own words"
        text="Type or say what you need, like “40-mark trig test, due Friday”. The paper is built and set for the class.">
        <VoiceVisual />
      </Card>
      <Card who="Parents" icon={TrendingUp} title="See which chapter to revise"
        text="Marks add up chapter by chapter, so it's clear where your child is strong and what to practise next.">
        <ProgressVisual />
      </Card>
      <Card who="Teachers" icon={BellRing} title="You stay in charge of the marks"
        text="You're told when answers arrive. Nothing reaches parents as final until you've checked the marks and approved them.">
        <NotifyVisual />
      </Card>
    </ul>
  );
}
