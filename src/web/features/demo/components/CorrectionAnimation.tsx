/**
 * CorrectionAnimation — the home page hero on wide screens.
 *
 * Plays the product in one loop: a handwritten page is SCANNED, each question
 * is MARKED with a tick or cross and a reason, then the SCORE counts up while
 * the ring fills. A stepper on top says which stage is playing.
 *
 * One clock drives everything (elapsed ms in a fixed loop), so the stages can
 * never drift out of step. Sample data only. With reduced motion it shows the
 * finished result and does not move.
 */
import * as React from 'react';
import { Check, X, ScanLine, ListChecks, Trophy, Loader2 } from 'lucide-react';

const ROWS = [
  { q: 'Q1. Basic proportionality', note: 'Correct.', got: 1, of: 1, ok: true },
  { q: 'Q2. Areas of similar triangles', note: 'Ratio of areas, not sides. Square it.', got: 0, of: 1, ok: false },
  { q: 'Q3. Pythagoras theorem', note: 'Clear working, right answer.', got: 2, of: 2, ok: true },
  { q: 'Q4. Prove the converse', note: 'Last step missing. Partial marks.', got: 2, of: 3, ok: false },
];
const SCORE = 24;
const OUT_OF = 31;
const PCT = Math.round((SCORE / OUT_OF) * 100);

// Timeline, in ms from the start of each loop.
const SCAN_END = 3200;
const ROW_GAP = 650;
const MARK_END = SCAN_END + ROWS.length * ROW_GAP + 300;
const COUNT_MS = 1300;
const LOOP = MARK_END + COUNT_MS + 3200;

type Phase = 'scan' | 'mark' | 'score';

function useLoopClock(): number {
  const reduced = React.useMemo(
    () => typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches,
    [],
  );
  const [t, setT] = React.useState(reduced ? LOOP - 1 : 0);
  React.useEffect(() => {
    if (reduced) return;
    const start = performance.now();
    const id = window.setInterval(() => setT((performance.now() - start) % LOOP), 80);
    return () => window.clearInterval(id);
  }, [reduced]);
  return t;
}

const STEPS: { key: Phase; label: string; icon: typeof ScanLine }[] = [
  { key: 'scan', label: 'Scan', icon: ScanLine },
  { key: 'mark', label: 'Mark', icon: ListChecks },
  { key: 'score', label: 'Score', icon: Trophy },
];

function Stepper({ phase }: { phase: Phase }) {
  const at = STEPS.findIndex((s) => s.key === phase);
  return (
    <ol className="flex items-center gap-2">
      {STEPS.map((s, i) => {
        const done = i < at;
        const on = i === at;
        return (
          <React.Fragment key={s.key}>
            <li
              className={[
                'flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-300',
                on ? 'mm-gradient shadow-md' : done ? 'bg-success/15 text-success' : 'bg-muted text-muted-foreground',
              ].join(' ')}
            >
              {done ? <Check className="size-3.5" /> : <s.icon className="size-3.5" />}
              {s.label}
            </li>
            {i < STEPS.length - 1 && (
              <span className="h-0.5 flex-1 overflow-hidden rounded-full bg-muted">
                <span className="block h-full bg-success transition-all duration-500" style={{ width: done ? '100%' : '0%' }} />
              </span>
            )}
          </React.Fragment>
        );
      })}
    </ol>
  );
}

/** A photographed answer page: ruled paper, handwritten working, a scanning beam. */
function Paper({ t }: { t: number }) {
  const page = Math.min(4, Math.floor(t / (SCAN_END / 4)) + 1);
  const hand = { fontFamily: "'Segoe Print','Bradley Hand','Comic Sans MS',cursive", fill: 'oklch(0.32 0.09 262)' };
  return (
    <div className="mm-fade flex h-full flex-col">
      <div className="relative flex-1 overflow-hidden rounded-2xl bg-[oklch(0.985_0.006_95)] ring-1 ring-black/5">
        <svg viewBox="0 0 400 250" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
          {Array.from({ length: 11 }, (_, i) => (
            <line key={i} x1="0" x2="400" y1={28 + i * 21} y2={28 + i * 21} stroke="oklch(0.85 0.04 240)" strokeWidth="0.8" />
          ))}
          <line x1="44" x2="44" y1="0" y2="250" stroke="oklch(0.75 0.12 20)" strokeWidth="1" />
          <g style={hand} fontSize="14">
            <text x="14" y="45">1.</text><text x="56" y="45">DE ∥ BC ⇒ AD/DB = AE/EC</text>
            <text x="56" y="66">2/3 = AE/4.5  ⇒  AE = 3 cm</text>
            <text x="14" y="108">2.</text><text x="56" y="108">ar(ABC)/ar(PQR) = AB/PQ = 3/4</text>
            <text x="14" y="150">3.</text><text x="56" y="150">AC² = AB² + BC² = 36 + 64</text>
            <text x="56" y="171">AC = 10 cm</text>
            <text x="14" y="213">4.</text><text x="56" y="213">Let AC² = AB² + BC² ... ∠B = 90°</text>
          </g>
        </svg>
        <span className="mm-scan-beam" />
        <span className="absolute left-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
          Page {page} of 4
        </span>
      </div>
      <p className="mt-3 flex items-center gap-2 text-sm font-medium text-muted-foreground">
        <Loader2 className="size-4 animate-spin text-primary" /> Reading the handwriting…
      </p>
    </div>
  );
}

function ScoreBanner({ phase, t, shown }: { phase: Phase; t: number; shown: number }) {
  const progress = phase === 'score' ? Math.min(1, (t - MARK_END) / COUNT_MS) : 0;
  const eased = 1 - Math.pow(1 - progress, 3);
  const value = Math.round(SCORE * eased);
  const r = 26;
  const c = 2 * Math.PI * r;

  return (
    <div className="mm-gradient mm-glow flex items-center gap-4 rounded-2xl p-4">
      <span className="relative grid size-16 shrink-0 place-items-center">
        <svg viewBox="0 0 64 64" className="absolute inset-0 -rotate-90" aria-hidden>
          <circle cx="32" cy="32" r={r} fill="none" stroke="rgb(255 255 255 / 0.25)" strokeWidth="6" />
          <circle cx="32" cy="32" r={r} fill="none" stroke="white" strokeWidth="6" strokeLinecap="round"
            strokeDasharray={c} strokeDashoffset={c * (1 - (PCT / 100) * eased)} />
        </svg>
        <span className="text-sm font-bold tabular-nums">
          {phase === 'score' ? `${Math.round(PCT * eased)}%` : <Loader2 className="size-5 animate-spin" />}
        </span>
      </span>
      {phase === 'score' ? (
        <span className="min-w-0">
          <span className="block text-3xl font-extrabold tabular-nums tracking-tight">
            {value}<span className="text-base font-semibold text-white/75">/{OUT_OF}</span>
          </span>
          <span className={`block text-sm text-white/85 transition-opacity duration-500 ${progress >= 1 ? 'opacity-100' : 'opacity-0'}`}>
            Strong on similar triangles. Practise proofs next.
          </span>
        </span>
      ) : (
        <span className="min-w-0">
          <span className="block text-lg font-bold">Marking question {Math.max(1, shown)} of {ROWS.length}</span>
          <span className="block text-sm text-white/85">Checked against the answer key</span>
        </span>
      )}
    </div>
  );
}

export function CorrectionAnimation() {
  const t = useLoopClock();
  const phase: Phase = t < SCAN_END ? 'scan' : t < MARK_END ? 'mark' : 'score';
  const shown = phase === 'scan' ? 0 : Math.min(ROWS.length, Math.floor((t - SCAN_END) / ROW_GAP) + 1);

  return (
    <div className="relative" aria-hidden>
      <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-primary/10 blur-3xl" />
      <div className="mm-glass rounded-[28px] p-5 shadow-[0_30px_60px_-30px_rgba(15,23,51,0.45)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-bold tracking-tight">Unit Test 3 · Triangles</p>
            <p className="text-xs text-muted-foreground">Aarav Sharma · Class 10-A</p>
          </div>
          <span className="rounded-full bg-[var(--color-highlight-soft)] px-2.5 py-1 text-[11px] font-semibold text-[var(--color-highlight-on-soft)]">
            {phase === 'score' ? 'Faculty checking' : 'Being marked'}
          </span>
        </div>

        <div className="mt-4"><Stepper phase={phase} /></div>

        {/* Fixed height, so moving between stages never shifts the page. */}
        <div className="mt-4 h-[348px]">
          {phase === 'scan' ? (
            <Paper t={t} />
          ) : (
            <div key="results" className="mm-fade flex h-full flex-col gap-3">
              <ScoreBanner phase={phase} t={t} shown={shown} />
              <ul className="space-y-2">
                {ROWS.slice(0, shown).map((r) => (
                  <li key={r.q} className="mm-pop flex items-start gap-3 rounded-2xl bg-card/85 p-3 ring-1 ring-border/60">
                    <span className={`mm-stamp mt-0.5 grid size-6 shrink-0 place-items-center rounded-lg ${r.ok ? 'bg-success/15 text-success' : 'bg-destructive/10 text-destructive'}`}>
                      {r.ok ? <Check className="size-3.5" strokeWidth={3} /> : <X className="size-3.5" strokeWidth={3} />}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold">{r.q}</span>
                      <span className="block text-xs text-muted-foreground">{r.note}</span>
                    </span>
                    <span className={`text-sm font-bold tabular-nums ${r.ok ? 'text-success' : r.got ? 'text-warning' : 'text-destructive'}`}>
                      {r.got}/{r.of}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
