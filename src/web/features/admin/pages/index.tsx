/**
 * /admin — the overview. What needs the admin's attention, the few numbers
 * that show whether the product is working, and what has happened lately.
 *
 * Built phone-first: KPI cards sit two to a row on a phone, three on a
 * tablet, six across on a wide screen. Data comes from one call,
 * `/api/admin/overview`.
 */
import { Link } from 'react-router-dom';
import { Alert, AlertDescription } from '@bloomneo/uikit';
import {
  GraduationCap, HeartHandshake, Users, FileText, ClipboardCheck, FileQuestion,
  ChevronRight, CheckCircle2, AlertTriangle, UserCheck, Flag, Sparkles, Loader2, Layers, type LucideIcon,
} from 'lucide-react';
import { SEO } from '@/shared/SEO';
import { api } from '@/shared/api';
import { useLoad } from '@/shared/useLoad';
import { AdminPageHeader } from '../components/AdminPageHeader';

type Overview = {
  teachers: { active: number; pending: number; disabled: number };
  parents: { total: number };
  students: { total: number; linked: number };
  papers: { total: number; last7d: number };
  submissions: { assigned: number; evaluating: number; evaluated: number; failed: number; toCheck: number; sentLast7d: number };
  questions: { live: number; draft: number; flagged: number };
  sentPerDay: { day: string; count: number }[];
  recent: { id: string; actorName: string | null; actorEmail: string | null; actorType: string; action: string; entityType: string | null; createdAt: string }[];
};

/** Plain-language names for the audit actions the app writes. */
const ACTION: Record<string, string> = {
  'people.create': 'Created a login',
  'people.approve': 'Approved a teacher',
  'people.reject': 'Rejected a teacher',
  'people.enable': 'Enabled an account',
  'people.disable': 'Disabled an account',
  'people.password_reset': 'Reset a password',
  'people.sign_in_as': 'Signed in as someone',
  'library.create': 'Added to Categories',
  'library.update': 'Changed Categories',
  'library.delete': 'Removed from Categories',
  'pattern.create': 'Added a paper pattern',
  'pattern.update': 'Changed a paper pattern',
  'pattern.delete': 'Removed a paper pattern',
  'question.create': 'Added a question',
  'question.update': 'Edited a question',
  'question.delete': 'Deleted a question',
  'question.approved': 'Approved questions',
  'question.rejected': 'Rejected questions',
};

function ago(iso: string): string {
  const s = Math.max(0, (Date.now() - new Date(iso).getTime()) / 1000);
  if (s < 60) return 'just now';
  if (s < 3600) return `${Math.floor(s / 60)} min ago`;
  if (s < 86400) return `${Math.floor(s / 3600)} h ago`;
  if (s < 7 * 86400) return `${Math.floor(s / 86400)} d ago`;
  return new Date(iso).toLocaleDateString(undefined, { day: 'numeric', month: 'short' });
}

function greeting(): string {
  const h = new Date().getHours();
  const part = h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening';
  return `${part} · ${new Date().toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'long' })}`;
}

const plural = (n: number, one: string, many = `${one}s`) => `${n} ${n === 1 ? one : many}`;

/** Soft card used across the overview: no hard border, a gentle lift. */
const CARD = 'rounded-[20px] bg-card shadow-[0_1px_2px_rgba(15,23,51,0.04),0_10px_24px_-14px_rgba(15,23,51,0.14)] ring-1 ring-border/60 dark:ring-border';

type Tone = 'blue' | 'red' | 'green' | 'purple' | 'amber';
const TONE: Record<Tone, string> = {
  blue: 'text-primary bg-primary/10',
  red: 'text-destructive bg-destructive/10',
  green: 'text-success bg-success/10',
  purple: 'text-[oklch(0.52_0.2_295)] bg-[oklch(0.52_0.2_295/0.1)] dark:text-[oklch(0.75_0.15_295)]',
  amber: 'text-warning bg-warning/15',
};

/** One number card. A link when it has somewhere to go. */
function Kpi({ label, value, sub, icon: Icon, to, tone }: { label: string; value: string | number; sub: string; icon: LucideIcon; to?: string; tone: Tone }) {
  const body = (
    <>
      <span className="flex items-center justify-between gap-2">
        <span className="truncate text-xs font-semibold text-muted-foreground">{label}</span>
        <span className={`grid size-8 shrink-0 place-items-center rounded-xl ${TONE[tone]}`}><Icon className="size-4" aria-hidden /></span>
      </span>
      <span className="mt-2 block text-[26px] font-extrabold leading-tight tracking-[-0.03em] tabular-nums sm:text-3xl">{value}</span>
      <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">{sub}</span>
    </>
  );
  const cls = `${CARD} block min-w-0 p-3.5 sm:p-4`;
  return to
    ? <Link to={to} className={`${cls} transition hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-14px_rgba(15,23,51,0.25)]`}>{body}</Link>
    : <div className={cls}>{body}</div>;
}

function iconFor(action: string): LucideIcon {
  if (action.startsWith('people.')) return UserCheck;
  if (action.startsWith('question.')) return FileQuestion;
  if (action.startsWith('pattern.')) return FileText;
  return Layers;
}
function toneFor(action: string): Tone {
  if (action.endsWith('.delete') || action.endsWith('.rejected') || action.endsWith('.reject') || action.endsWith('.disable')) return 'red';
  if (action.endsWith('.approved') || action.endsWith('.approve') || action.endsWith('.enable')) return 'green';
  if (action.startsWith('people.')) return 'amber';
  if (action.startsWith('pattern.')) return 'purple';
  return 'blue';
}

type Attention = { key: string; icon: LucideIcon; text: string; sub: string; tone: Tone; to?: string };

export default function AdminOverview() {
  const { data, error, loading } = useLoad(() => api.get<Overview>('/api/admin/overview'));

  if (loading) return <><AdminPageHeader title="Overview" /><div className="grid place-items-center py-20"><Loader2 className="size-5 animate-spin text-muted-foreground" aria-label="Loading" /></div></>;
  if (error || !data) {
    return (
      <>
        <AdminPageHeader title="Overview" />
        <Alert variant="destructive"><AlertTriangle className="size-4" /><AlertDescription>{error ?? 'Could not load the overview.'}</AlertDescription></Alert>
      </>
    );
  }

  const { teachers, parents, students, papers, submissions: sub, questions: q, sentPerDay, recent } = data;
  const sentTotal = sentPerDay.reduce((n, d) => n + d.count, 0);
  const peak = Math.max(1, ...sentPerDay.map((d) => d.count));
  const assignedAll = sub.assigned + sub.evaluating + sub.evaluated + sub.failed;
  const linkedPct = students.total ? Math.round((students.linked / students.total) * 100) : 0;

  // Only things the admin can act on, in the order they matter.
  const attention: Attention[] = [
    teachers.pending > 0 && { key: 'pending', icon: UserCheck, tone: 'amber', text: `${plural(teachers.pending, 'teacher')} waiting`, sub: 'Needs your approval', to: '/admin/users?tab=pending' },
    sub.failed > 0 && { key: 'failed', icon: AlertTriangle, tone: 'red', text: `${plural(sub.failed, 'answer sheet')} failed marking`, sub: 'The teacher can try again from the sheet' },
    q.flagged > 0 && { key: 'flagged', icon: Flag, tone: 'red', text: `${plural(q.flagged, 'flagged question')}`, sub: 'Held out of papers until you look', to: '/admin/content?tab=questions&review=flagged' },
    q.draft > 0 && { key: 'draft', icon: Sparkles, tone: 'blue', text: `${plural(q.draft, 'new question')} to review`, sub: 'Written by AI, not live until approved', to: '/admin/content?tab=questions&review=draft' },
  ].filter(Boolean) as Attention[];

  return (
    <>
      <SEO title="Overview" />
      <AdminPageHeader eyebrow={greeting()} title="Overview" description="How Quick Correction is doing, and what needs you." />

      {/* Needs you */}
      <section aria-labelledby="attention" className="mb-6 md:mb-8">
        <h2 id="attention" className="mb-2.5 text-sm font-semibold">Needs your attention</h2>
        {attention.length === 0 ? (
          <p className={`${CARD} flex items-center gap-3 p-4 text-sm text-muted-foreground`}>
            <span className={`grid size-10 shrink-0 place-items-center rounded-[14px] ${TONE.green}`}><CheckCircle2 className="size-5" aria-hidden /></span>
            All clear. Nothing is waiting on you.
          </p>
        ) : (
          <ul className={`${CARD} grid divide-y divide-border/70 overflow-hidden px-1.5 md:grid-cols-2 md:divide-y-0 md:gap-px md:bg-border/60 md:px-0`}>
            {attention.map((a) => {
              const row = (
                <>
                  <span className={`grid size-10 shrink-0 place-items-center rounded-[14px] ${TONE[a.tone]}`}><a.icon className="size-[18px]" aria-hidden /></span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold">{a.text}</span>
                    <span className="block truncate text-xs text-muted-foreground">{a.sub}</span>
                  </span>
                  {a.to && <ChevronRight className="size-4 shrink-0 text-muted-foreground" aria-hidden />}
                </>
              );
              return (
                <li key={a.key} className="md:bg-card">
                  {a.to
                    ? <Link to={a.to} className="flex items-center gap-3 rounded-2xl px-2.5 py-3 transition-colors hover:bg-muted/60 md:rounded-none md:px-4 md:py-4">{row}</Link>
                    : <div className="flex items-center gap-3 px-2.5 py-3 md:px-4 md:py-4">{row}</div>}
                </li>
              );
            })}
          </ul>
        )}
      </section>

      {/* The numbers: two across on a phone, three on a tablet, six on a wide screen */}
      <section aria-label="Key numbers" className="mb-6 grid grid-cols-2 gap-2.5 sm:gap-3 md:mb-8 md:grid-cols-3 xl:grid-cols-6">
        <Kpi tone="blue" label="Teachers" icon={GraduationCap} value={teachers.active} to="/admin/users"
          sub={teachers.pending ? `${teachers.pending} waiting for approval` : teachers.disabled ? `${teachers.disabled} disabled` : 'all approved'} />
        <Kpi tone="red" label="Parents" icon={HeartHandshake} value={parents.total} to="/admin/users" sub="signed up" />
        <Kpi tone="green" label="Students" icon={Users} value={students.total}
          sub={students.total ? `${linkedPct}% have a parent linked` : 'none added yet'} />
        <Kpi tone="purple" label="Papers" icon={FileText} value={papers.total}
          sub={papers.last7d ? `${papers.last7d} made this week` : 'none this week'} />
        <Kpi tone="amber" label="Marked" icon={ClipboardCheck} value={`${sub.evaluated}/${assignedAll}`}
          sub={sub.toCheck ? `${sub.toCheck} waiting for a teacher's check` : assignedAll ? 'all checked' : 'no papers set yet'} />
        <Kpi tone="blue" label="Question bank" icon={FileQuestion} value={q.live} to="/admin/content?tab=questions"
          sub={q.draft || q.flagged ? `${q.draft} to review · ${q.flagged} flagged` : 'all reviewed'} />
      </section>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* Usage */}
        <section className={`${CARD} p-4 sm:p-5`} aria-labelledby="sent">
          <div className="mb-3 flex items-baseline justify-between gap-2">
            <h2 id="sent" className="text-sm font-semibold">Answer sheets sent for marking</h2>
            <span className="text-xs text-muted-foreground">last 14 days</span>
          </div>
          {sentTotal === 0 ? (
            <div className="flex flex-col items-center gap-2 py-10 text-center">
              <span className={`grid size-12 place-items-center rounded-2xl ${TONE.blue}`}><ClipboardCheck className="size-5" aria-hidden /></span>
              <p className="text-sm font-medium">No answer sheets in the last 14 days</p>
              <p className="max-w-60 text-xs text-muted-foreground">When parents send photos for marking, the daily count shows here.</p>
            </div>
          ) : (
            <>
              <p className="mb-2 text-2xl font-semibold tabular-nums">{sentTotal}</p>
              <div className="flex h-24 items-end gap-1" role="img" aria-label={`Answer sheets sent per day, most in one day ${peak}`}>
                {sentPerDay.map((d) => (
                  <span key={d.day} title={`${new Date(d.day).toLocaleDateString(undefined, { day: 'numeric', month: 'short' })}: ${d.count}`}
                    className="min-h-0.5 flex-1 rounded-t-md bg-gradient-to-t from-primary/70 to-primary" style={{ height: `${Math.max(2, (d.count / peak) * 100)}%` }} />
                ))}
              </div>
              <div className="mt-1 flex justify-between text-[11px] text-muted-foreground">
                <span>{new Date(sentPerDay[0].day).toLocaleDateString(undefined, { day: 'numeric', month: 'short' })}</span>
                <span>Today</span>
              </div>
            </>
          )}
        </section>

        {/* Recent activity */}
        <section className={`${CARD} p-4 sm:p-5`} aria-labelledby="recent">
          <div className="mb-3 flex items-baseline justify-between gap-2">
            <h2 id="recent" className="text-sm font-semibold">Recent activity</h2>
            <Link to="/admin/audit" className="text-xs text-primary hover:underline">All activity</Link>
          </div>
          {recent.length === 0 ? (
            <p className="py-8 text-center text-sm text-muted-foreground">Nothing yet.</p>
          ) : (
            <ul className="divide-y divide-border/70">
              {recent.map((r) => (
                <li key={r.id} className="flex items-center gap-3 py-2.5 text-sm first:pt-0 last:pb-0">
                  <span className={`grid size-8 shrink-0 place-items-center rounded-xl ${TONE[toneFor(r.action)]}`}>{(() => { const I = iconFor(r.action); return <I className="size-4" aria-hidden />; })()}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-medium">{ACTION[r.action] ?? r.action}</span>
                    <span className="block truncate text-xs text-muted-foreground">{r.actorName || r.actorEmail || (r.actorType === 'system' ? 'System' : 'Unknown')}</span>
                  </span>
                  <span className="shrink-0 text-xs text-muted-foreground">{ago(r.createdAt)}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </>
  );
}
