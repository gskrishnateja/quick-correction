/**
 * Building blocks for the public site pages (How it works, Teachers, Parents,
 * FAQ). AppLayoutRoute supplies the header and footer; these give every page
 * the same hero, card and closing call to action, so the pages read as one
 * site.
 */
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@bloomneo/uikit';

export function PageHero({ eyebrow, title, lead, children }: { eyebrow: string; title: ReactNode; lead: ReactNode; children?: ReactNode }) {
  return (
    <header className="mx-auto max-w-3xl py-6 text-center sm:py-10">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-highlight-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-highlight-on-soft)]">
        <span className="size-1.5 rounded-full bg-[var(--color-highlight)]" /> {eyebrow}
      </span>
      <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.03em] sm:text-5xl">{title}</h1>
      <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">{lead}</p>
      {children && <div className="mt-7 flex flex-wrap justify-center gap-3">{children}</div>}
    </header>
  );
}

export function SectionTitle({ eyebrow, title, lead }: { eyebrow?: string; title: string; lead?: string }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <p className="text-sm font-semibold text-primary">{eyebrow}</p>}
      <h2 className="mt-1.5 text-2xl font-bold tracking-[-0.02em] sm:text-3xl">{title}</h2>
      {lead && <p className="mt-2 text-muted-foreground">{lead}</p>}
    </div>
  );
}

export function InfoCard({ icon: Icon, title, children }: { icon: React.ComponentType<{ className?: string }>; title: string; children: ReactNode }) {
  return (
    <div className="mm-glass rounded-3xl p-6">
      <span className="mm-tint grid size-11 place-items-center rounded-2xl text-primary"><Icon className="size-5" /></span>
      <h3 className="mt-4 text-base font-semibold">{title}</h3>
      <div className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}

export function CtaBanner({ title, text, to, label }: { title: string; text: string; to: string; label: string }) {
  return (
    <section className="mm-gradient mm-glow mt-16 flex flex-col items-start justify-between gap-5 rounded-[2rem] px-7 py-8 sm:flex-row sm:items-center sm:px-10">
      <div>
        <p className="text-2xl font-bold tracking-tight">{title}</p>
        <p className="mt-1 text-white/85">{text}</p>
      </div>
      <Button asChild size="lg" variant="secondary" className="h-11 shrink-0 rounded-xl">
        <Link to={to}>{label} <ArrowRight className="size-4" /></Link>
      </Button>
    </section>
  );
}
