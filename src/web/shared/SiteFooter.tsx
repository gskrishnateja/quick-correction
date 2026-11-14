/**
 * SiteFooter — the footer on every public page (home, the site pages, legal).
 *
 * Link columns come from `brand.footer`, so adding a page to the footer is one
 * line there. One component for the home page and AppLayoutRoute means the two
 * can no longer drift apart, which is how the home page ended up with its own
 * one-line footer.
 */
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { brand } from './brand';
import { LogoMark } from './Logo';

export function SiteFooter({ className = '' }: { className?: string }) {
  const year = new Date().getFullYear();
  return (
    <footer className={`border-t border-border/70 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="max-w-xs">
            <Link to="/" className="flex items-center gap-2.5" aria-label={`${brand.name} home`}>
              <LogoMark className="size-8 shrink-0" />
              <span className="font-semibold tracking-tight">{brand.name}</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Board-pattern tests for CBSE Class 10 Mathematics. Students write on paper, answers are marked in minutes, and the teacher has the final say.
            </p>
            <Link to="/demo" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
              Try it with sample data <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-4">
            {brand.footer.map((col) => (
              <nav key={col.heading} aria-label={col.heading}>
                <h2 className="text-xs font-semibold uppercase tracking-[0.08em] text-foreground/70">{col.heading}</h2>
                <ul className="mt-3.5 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border/70 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} {brand.name}. Made for CBSE Class 10 Mathematics (Standard).</span>
          <span>Prototype · the demo uses sample data and simulated marking</span>
        </div>
      </div>
    </footer>
  );
}
