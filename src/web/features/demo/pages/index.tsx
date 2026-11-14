/**
 * /demo — the Quick Correction homepage. Phone first: one column, big tap targets,
 * three steps and two doors. Picking a door stands in for signing in.
 *
 * From lg up the same content spreads into a two-column hero with a product
 * preview on the right, then a feature grid, the three steps and a footer.
 * The phone layout is unchanged.
 */
import { Link, useNavigate } from 'react-router-dom';
import { Button, useTheme } from '@bloomneo/uikit';
import { HeartHandshake, School, ChevronRight, FileText, Camera, Sparkles, Mic, TrendingUp, BellRing, Moon, Sun, LogIn, LogOut, Check, X } from 'lucide-react';
import { SEO } from '@/shared/SEO';
import { LogoMark, Wordmark } from '@/shared/Logo';
import { useAuth } from '@/features/auth';
import { homeFor } from '@/features/auth/lib/home';
import { useDemo, type Role } from '../data/store';

/** Shown as a slowly moving strip of cards under the two doors. */
const FEATURES = [
  { icon: FileText, title: 'Board-exact papers', text: 'CBSE sections A–E, made in a minute' },
  { icon: Camera, title: 'Snap & upload', text: 'A photo of each page from the phone' },
  { icon: Sparkles, title: 'Marked in minutes', text: 'Question-wise marks and feedback' },
  { icon: Mic, title: 'Just say it', text: '“40-mark trig test, due Friday”' },
  { icon: TrendingUp, title: 'Chapter progress', text: 'See exactly what to revise next' },
  { icon: BellRing, title: 'Teacher in the loop', text: 'Notified the moment answers land' },
];

const DOORS: { role: Role; label: string; hint: string; icon: typeof School }[] = [
  { role: 'parent', label: 'I’m a parent', hint: 'Upload answers, see marks', icon: HeartHandshake },
  { role: 'school', label: 'I’m a teacher', hint: 'Make papers just by chatting', icon: School },
];

const STEPS = [
  { n: 1, title: 'The teacher sets a paper', text: 'Pick chapters and a board pattern. The paper is ready to print in a minute.' },
  { n: 2, title: 'The student writes on paper', text: 'Exactly like the exam hall. The parent photographs each page.' },
  { n: 3, title: 'Marks come back in minutes', text: 'Every question marked with a reason. The teacher checks and approves.' },
];

/** A marked paper, drawn in HTML: what a parent sees when marks come back. Sample data. */
function ResultPreview() {
  const rows = [
    { q: 'Q1. Basic proportionality', note: 'Correct.', got: 1, of: 1, ok: true },
    { q: 'Q2. Areas of similar triangles', note: 'Ratio of areas, not sides. Square the ratio.', got: 0, of: 1, ok: false },
    { q: 'Q3. Pythagoras theorem', note: 'Clear working, right answer.', got: 2, of: 2, ok: true },
    { q: 'Q4. Prove the converse', note: 'Last step missing. Partial marks.', got: 2, of: 3, ok: false },
  ];
  return (
    <div className="relative" aria-hidden>
      <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-primary/10 blur-3xl" />
      <div className="mm-glass rounded-[28px] p-5 shadow-[0_30px_60px_-30px_rgba(15,23,51,0.45)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-bold tracking-tight">Unit Test 3 · Triangles</p>
            <p className="text-xs text-muted-foreground">Aarav Sharma · Class 10-A</p>
          </div>
          <span className="rounded-full bg-[var(--color-highlight-soft)] px-2.5 py-1 text-[11px] font-semibold text-[var(--color-highlight-on-soft)]">Faculty checking</span>
        </div>

        <div className="mm-gradient mm-glow mt-4 flex items-center gap-4 rounded-2xl p-4">
          <span className="grid size-16 shrink-0 place-items-center rounded-full border-4 border-white/30 text-lg font-bold">77%</span>
          <span>
            <span className="block text-3xl font-extrabold tracking-tight">24<span className="text-base font-semibold text-white/75">/31</span></span>
            <span className="block text-sm text-white/85">Strong on similar triangles. Practise circle proofs next.</span>
          </span>
        </div>

        <ul className="mt-4 space-y-2">
          {rows.map((r) => (
            <li key={r.q} className="flex items-start gap-3 rounded-2xl bg-card/80 p-3 ring-1 ring-border/60">
              <span className={`mt-0.5 grid size-6 shrink-0 place-items-center rounded-lg ${r.ok ? 'bg-success/15 text-success' : 'bg-destructive/10 text-destructive'}`}>
                {r.ok ? <Check className="size-3.5" /> : <X className="size-3.5" />}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold">{r.q}</span>
                <span className="block text-xs text-muted-foreground">{r.note}</span>
              </span>
              <span className="text-sm font-semibold tabular-nums">{r.got}/{r.of}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mm-glass absolute -bottom-12 -left-10 hidden items-center gap-3 rounded-2xl px-4 py-3 shadow-lg xl:flex">
        <span className="mm-tint grid size-9 place-items-center rounded-xl text-primary"><Camera className="size-[18px]" /></span>
        <span>
          <span className="block text-sm font-semibold">4 pages received</span>
          <span className="block text-xs text-muted-foreground">Marked in 3 minutes</span>
        </span>
      </div>
    </div>
  );
}

export default function Home() {
  const { setRole } = useDemo();
  const navigate = useNavigate();
  const { mode, setMode } = useTheme();
  const { isAuthenticated, isLoading, user, logout } = useAuth();
  const go = (r: Role) => { setRole(r); navigate(`/demo/${r}`); };

  return (
    <>
      <SEO title="Quick Correction" description="Board-pattern tests, written by hand, marked by AI." />

      <div className="mm-mesh relative min-h-screen overflow-hidden">
        <div className="relative mx-auto flex min-h-screen w-full max-w-md flex-col px-5 pb-8 pt-[max(1rem,env(safe-area-inset-top))] lg:max-w-6xl lg:px-8">
          <header className="flex h-14 items-center justify-between lg:h-20">
            <span className="flex items-center gap-2.5">
              <LogoMark className="size-9" />
              <Wordmark className="text-lg" />
            </span>
            <span className="flex items-center gap-1">
            <nav className="mr-3 hidden items-center gap-6 text-sm font-medium text-muted-foreground lg:flex" aria-label="Site">
              <a href="#features" className="hover:text-foreground">Features</a>
              <a href="#how" className="hover:text-foreground">How it works</a>
              <Link to="/about" className="hover:text-foreground">About</Link>
            </nav>
            {!isLoading && (isAuthenticated ? (
              <>
                <Button size="sm" className="h-9" asChild>
                  <Link to={homeFor(user)}>Open app</Link>
                </Button>
                <Button variant="ghost" size="icon" className="size-10 rounded-full" aria-label="Sign out" title="Sign out" onClick={() => logout()}>
                  <LogOut className="size-5" />
                </Button>
              </>
            ) : (
              <Button variant="outline" size="sm" className="h-9" asChild>
                <Link to="/auth/login"><LogIn className="size-4" /> Sign in</Link>
              </Button>
            ))}
            <Button
              variant="ghost"
              size="icon"
              className="size-10 rounded-full"
              aria-label={mode === 'dark' ? 'Light mode' : 'Dark mode'}
              onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
            >
              {mode === 'dark' ? <Sun className="size-5" /> : <Moon className="size-5" />}
            </Button>
            </span>
          </header>

          <div className="lg:grid lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:pt-10 lg:pb-8">
          <div>
          <section className="pt-8 lg:pt-0">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-highlight-soft)] px-3 py-1 text-xs font-medium text-[var(--color-highlight-on-soft)]">
              <span className="size-1.5 rounded-full bg-[var(--color-highlight)]" /> CBSE Class 10 · Board practice
            </span>
            <h1 className="mt-4 text-[2.25rem] font-bold leading-[1.08] tracking-[-0.03em] lg:text-6xl lg:leading-[1.04]">
              Practice like the board exam.{' '}
              <span className="mm-gradient-text">Get marked in minutes.</span>
            </h1>
            <p className="mt-3 text-base text-muted-foreground lg:mt-5 lg:max-w-lg lg:text-lg">
              Write answers on paper, upload a photo, and Quick Correction checks every question.
            </p>
          </section>

          <section className="mt-8 space-y-3 lg:max-w-md" aria-label="Continue as">
            {DOORS.map(({ role, label, hint, icon: Icon }, i) => (
              <button
                key={role}
                onClick={() => go(role)}
                className={[
                  'flex w-full cursor-pointer items-center gap-4 rounded-2xl p-4 text-left transition active:scale-[0.98]',
                  i === 0
                    ? 'mm-gradient mm-glow'
                    : 'mm-glass hover:-translate-y-px',
                ].join(' ')}
              >
                <span
                  className={[
                    'grid size-12 shrink-0 place-items-center rounded-xl',
                    i === 0 ? 'bg-white/20' : 'mm-tint text-primary',
                  ].join(' ')}
                >
                  <Icon className="size-6" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-base font-semibold">{label}</span>
                  <span className={`block text-sm ${i === 0 ? 'text-white/85' : 'text-muted-foreground'}`}>{hint}</span>
                </span>
                <ChevronRight className={`size-5 shrink-0 ${i === 0 ? '' : 'text-muted-foreground'}`} />
              </button>
            ))}
          </section>
          </div>

          <div className="hidden lg:block">
            <ResultPreview />
          </div>
          </div>

          {/* Moving feature strip. The list is rendered twice so the loop is seamless;
              the copy is hidden from screen readers. Stops for reduced motion. */}
          <section className="mm-marquee -mx-5 mt-10 lg:hidden" aria-label="What Quick Correction does">
            <div className="mm-marquee-track">
              {[0, 1].map((copy) => (
                <ul key={copy} className="flex shrink-0 gap-3 pr-3" aria-hidden={copy === 1 || undefined}>
                  {FEATURES.map(({ icon: Icon, title, text }) => (
                    <li key={title} className="mm-glass flex w-56 shrink-0 items-start gap-3 rounded-2xl p-3.5">
                      <span className="mm-tint grid size-9 shrink-0 place-items-center rounded-xl text-primary">
                        <Icon className="size-[18px]" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold">{title}</span>
                        <span className="block text-xs leading-snug text-muted-foreground">{text}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </section>

          {/* Desktop: the features as a grid, then the three steps. */}
          <section id="features" className="hidden scroll-mt-8 pt-24 lg:block" aria-labelledby="features-title">
            <p className="text-sm font-semibold text-primary">Features</p>
            <h2 id="features-title" className="mt-2 max-w-xl text-4xl font-bold tracking-[-0.03em]">Everything between the paper and the marks</h2>
            <ul className="mt-10 grid grid-cols-3 gap-4">
              {FEATURES.map(({ icon: Icon, title, text }) => (
                <li key={title} className="mm-glass rounded-3xl p-6 transition hover:-translate-y-0.5">
                  <span className="mm-tint grid size-11 place-items-center rounded-2xl text-primary"><Icon className="size-5" /></span>
                  <p className="mt-4 text-base font-semibold">{title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                </li>
              ))}
            </ul>
          </section>

          <section id="how" className="hidden scroll-mt-8 pt-24 lg:block" aria-labelledby="how-title">
            <p className="text-sm font-semibold text-primary">How it works</p>
            <h2 id="how-title" className="mt-2 text-4xl font-bold tracking-[-0.03em]">Three steps, no new habits</h2>
            <ol className="mt-10 grid grid-cols-3 gap-4">
              {STEPS.map((st) => (
                <li key={st.n} className="relative rounded-3xl border border-border/70 bg-card/60 p-6">
                  <span className="mm-gradient grid size-10 place-items-center rounded-2xl text-base font-bold">{st.n}</span>
                  <p className="mt-4 text-base font-semibold">{st.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{st.text}</p>
                </li>
              ))}
            </ol>
            <div className="mm-gradient mm-glow mt-16 flex items-center justify-between gap-6 rounded-[2rem] px-10 py-9">
              <div>
                <p className="text-2xl font-bold tracking-tight">Try it with sample data</p>
                <p className="mt-1 text-white/85">No sign-up. Pick a role and click through.</p>
              </div>
              <div className="flex gap-3">
                {DOORS.map(({ role, label }) => (
                  <Button key={role} size="lg" variant="secondary" className="h-11 rounded-xl" onClick={() => go(role)}>{label}</Button>
                ))}
              </div>
            </div>
          </section>

          <footer className="mt-auto pt-10 text-center text-xs text-muted-foreground lg:mt-20 lg:flex lg:items-center lg:justify-between lg:border-t lg:border-border/70 lg:py-8 lg:text-left">
            <span>Prototype · sample data · AI marking is simulated</span>
            <nav className="hidden gap-5 lg:flex" aria-label="Legal">
              <Link to="/about" className="hover:text-foreground">About</Link>
              <Link to="/contact" className="hover:text-foreground">Contact</Link>
              <Link to="/privacy" className="hover:text-foreground">Privacy</Link>
              <Link to="/terms" className="hover:text-foreground">Terms</Link>
            </nav>
          </footer>
        </div>
      </div>
    </>
  );
}
