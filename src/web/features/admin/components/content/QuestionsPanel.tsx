/**
 * Question bank — `/admin/questions`.
 *
 * Every question is tagged to a topic of the categories, with a type,
 * complexity and marks. The paper generator fills a pattern's sections from
 * here. Data comes from `/api/questions`; topics from `/api/library`.
 */
import * as React from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Button, Input, Textarea, FormField,
  Popover, PopoverContent, PopoverTrigger,
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator,
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter,
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
  Alert, AlertDescription, AlertTitle, toast, useConfirm,
} from '@bloomneo/uikit';
import { Plus, Pencil, Trash2, Eye, EyeOff, Search, Loader2, AlertTriangle, FileQuestion, ChevronLeft, ChevronRight, ChevronDown, Check, X, FolderTree, BookOpen, SlidersHorizontal, MoreHorizontal, Image as ImageIcon } from 'lucide-react';
import { api } from '@/shared/api';
import { MathText } from '@/shared/MathText';
import { QuestionFigure } from '@/shared/QuestionFigure';
import { PanelTop } from './PanelTop';
import { PageLoading } from '../PageLoading';

type QType = 'mcq' | 'assertion_reason' | 'short' | 'long' | 'case';
type Complexity = 'easy' | 'medium' | 'hard';
type Review = 'draft' | 'approved' | 'rejected' | 'flagged';
type Question = {
  id: string; topicId: string; topicPath: string[]; type: QType; complexity: Complexity; marks: number;
  text: string; options: string[] | null; answer: string | null; isActive: boolean; used?: boolean;
  source: 'seed' | 'ai' | 'manual'; reviewStatus: Review; reviewNote: string | null;
  figureSvg: string | null; figureAlt: string | null; askedIn: string[]; lastAsked: number | null;
  parts: { label: string; marks: number; text: string; answer?: string }[] | null;
  markingSteps: { step: string; marks: number }[] | null;
  /** Pointer to where this lines up with the textbook; the question itself is our own. */
  textbookRef: string | null;
};
type Counts = Record<Review, number>;
type LibNode = { id: string; kind: string; name: string; questionCount?: number; children: LibNode[] };
type Choice = { id: string; label: string; chapterId: string };

const TYPE_LABEL: Record<QType, string> = { mcq: 'Multiple choice', assertion_reason: 'Assertion-reason', short: 'Short answer', long: 'Long answer', case: 'Case study' };
const REVIEW_TABS: { id: 'all' | Review; label: string }[] = [
  { id: 'draft', label: 'To review' }, { id: 'flagged', label: 'Flagged' }, { id: 'approved', label: 'Approved' }, { id: 'rejected', label: 'Rejected' }, { id: 'all', label: 'All' },
];
const COMPLEXITY_LABEL: Record<Complexity, string> = { easy: 'Easy', medium: 'Medium', hard: 'Hard' };


/** The question in full: text, options, figure, answer and marking steps. */
function QuestionBody({ q }: { q: Question }) {
  return (
    <>
      {q.reviewNote && (
        <Alert className="border-destructive/40 bg-destructive/8"><AlertTriangle className="size-4 text-destructive" /><AlertTitle>Reviewer note</AlertTitle><AlertDescription>{q.reviewNote}</AlertDescription></Alert>
      )}
      <div className="space-y-3 text-sm">
        <p className="whitespace-pre-wrap"><MathText text={q.text} /></p>
        <QuestionFigure svg={q.figureSvg} alt={q.figureAlt} />
        {q.parts && <ol className="space-y-1">{q.parts.map((p) => <li key={p.label}><span className="text-muted-foreground">({p.label}) [{p.marks}] </span><MathText text={p.text} />{p.answer && <span className="block text-xs text-muted-foreground">Key: <MathText text={p.answer} /></span>}</li>)}</ol>}
        {q.options && (
          <ol className="list-[upper-alpha] space-y-1 pl-6">{q.options.map((o, i) => <li key={i}><MathText text={String(o)} /></li>)}</ol>
        )}
        <div className="rounded-lg border border-border bg-muted p-3">
          <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">Answer</p>
          <p className="whitespace-pre-wrap">{q.answer ? <MathText text={q.answer} /> : 'No answer recorded.'}</p>
          {!!q.markingSteps?.length && <ul className="mt-2 space-y-0.5">{q.markingSteps.map((m, i) => <li key={i} className="flex justify-between gap-3"><span><MathText text={m.step} /></span><span className="shrink-0 tabular-nums text-muted-foreground">{m.marks}</span></li>)}</ul>}
          {q.askedIn.length > 0 && <p className="mt-2 text-xs text-muted-foreground">This type asked: {q.askedIn.join(', ')}</p>}
        </div>
      </div>
    </>
  );
}

function questionMeta(q: Question) {
  return `${TYPE_LABEL[q.type]} · ${COMPLEXITY_LABEL[q.complexity]} · ${q.marks} mark${q.marks === 1 ? '' : 's'}${q.source === 'ai' ? ' · written by AI' : ''}`;
}

/** Every topic with its "Class › Subject › Chapter › Topic" label, and every chapter. */
function flatten(nodes: LibNode[], trail: string[] = [], chapterId = ''): { topics: Choice[]; chapters: { id: string; label: string }[] } {
  const topics: Choice[] = [];
  const chapters: { id: string; label: string }[] = [];
  for (const n of nodes) {
    const here = n.kind === 'board' ? [] : [...trail, n.name];
    if (n.kind === 'chapter') chapters.push({ id: n.id, label: here.slice(-2).join(' › ') });
    if (n.kind === 'topic') topics.push({ id: n.id, label: here.slice(-3).join(' › '), chapterId });
    const sub = flatten(n.children, here, n.kind === 'chapter' ? n.id : chapterId);
    topics.push(...sub.topics);
    chapters.push(...sub.chapters);
  }
  return { topics, chapters };
}

/** The secondary filters, kept behind the Filters button. The first option is "off". */
const FILTERS = [
  { key: 'type', label: 'Type', options: [['all', 'Any type'], ...(Object.keys(TYPE_LABEL) as QType[]).map((t) => [t, TYPE_LABEL[t]] as const)] },
  { key: 'complexity', label: 'Level', options: [['all', 'Any level'], ...(Object.keys(COMPLEXITY_LABEL) as Complexity[]).map((c) => [c, COMPLEXITY_LABEL[c]] as const)] },
  { key: 'textbook', label: 'Source', options: [['all', 'Any source'], ['yes', 'Linked to the textbook'], ['mapped', 'Matched to a book question']] },
  { key: 'asked', label: 'Board history', options: [['all', 'Any'], ['recent', 'Asked in the last 3 years'], ['never', 'Never asked']] },
  { key: 'status', label: 'Visibility', options: [['all', 'Shown and hidden'], ['active', 'Shown in papers'], ['hidden', 'Hidden']] },
] as const satisfies readonly { key: string; label: string; options: readonly (readonly [string, string])[] }[];
const STATUS_LABEL: Record<Review, string> = { draft: 'To review', flagged: 'Flagged', approved: 'Approved', rejected: 'Rejected' };

/** Every node's path from the board down, and its parent, so a selection can show where it sits. */
function indexTree(nodes: LibNode[]): Map<string, { node: LibNode; path: string[]; parent: string | null }> {
  const m = new Map<string, { node: LibNode; path: string[]; parent: string | null }>();
  const walk = (list: LibNode[], path: string[], parent: string | null) => {
    for (const n of list) { const here = [...path, n.name]; m.set(n.id, { node: n, path: here, parent }); walk(n.children, here, n.id); }
  };
  walk(nodes, [], null);
  return m;
}

/** The side tree: pick any board, class, subject, chapter or topic to see just its questions. */
function CategoryTree({ nodes, selected, open, onToggle, onPick, total }: {
  nodes: LibNode[]; selected: string; open: Set<string>; onToggle: (id: string) => void; onPick: (id: string) => void; total: number;
}) {
  const row = (n: LibNode, depth: number): React.ReactNode => {
    const expandable = n.children.length > 0;
    const isOpen = open.has(n.id);
    const on = selected === n.id;
    return (
      <li key={n.id}>
        <div className={`flex items-center gap-0.5 rounded-md ${on ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`} style={{ paddingLeft: depth * 12 }}>
          {expandable
            ? <button type="button" className="grid size-7 shrink-0 place-items-center text-muted-foreground" aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${n.name}`} aria-expanded={isOpen} onClick={() => onToggle(n.id)}>
                {isOpen ? <ChevronDown className="size-4" /> : <ChevronRight className="size-4" />}
              </button>
            : <span className="size-7 shrink-0" aria-hidden />}
          <button type="button" className={`flex min-w-0 flex-1 items-center justify-between gap-2 py-1.5 pr-2 text-left text-sm ${on ? 'font-medium' : ''}`} aria-current={on ? 'true' : undefined} onClick={() => onPick(n.id)}>
            <span className="truncate" title={n.name}>{n.name}</span>
            <span className="shrink-0 text-xs tabular-nums text-muted-foreground">{n.questionCount ?? 0}</span>
          </button>
        </div>
        {expandable && isOpen && <ul>{n.children.map((c) => row(c, depth + 1))}</ul>}
      </li>
    );
  };
  return (
    <nav aria-label="Categories">
      <button type="button" className={`mb-1 flex w-full items-center justify-between gap-2 rounded-md px-2 py-1.5 text-left text-sm ${selected === '' ? 'bg-primary/10 font-medium text-primary' : 'hover:bg-muted'}`} onClick={() => onPick('')}>
        <span>All questions</span><span className="text-xs tabular-nums text-muted-foreground">{total}</span>
      </button>
      <ul>{nodes.map((n) => row(n, 0))}</ul>
    </nav>
  );
}

type PartRow = { label: string; marks: string; text: string; answer: string };
type StepRow = { step: string; marks: string };
type Form = { id: string | null; topicId: string; type: QType; complexity: Complexity; marks: string; text: string; options: string[]; answer: string; figureSvg: string; figureAlt: string; parts: PartRow[]; steps: StepRow[]; textbookRef: string };
const blank = (topicId = ''): Form => ({ id: null, topicId, type: 'short', complexity: 'medium', marks: '2', text: '', options: ['', '', '', ''], answer: '', figureSvg: '', figureAlt: '', parts: [], steps: [], textbookRef: '' });
const hasOptions = (t: QType) => t === 'mcq' || t === 'assertion_reason';
/** Short list of when the board asked this kind of question: the latest few years. */
const askedLabel = (l: string[]) => { const y = [...new Set(l.map((s) => s.split(' ')[0]))]; return `Asked ${y.slice(-3).join(', ')}`; };

export function QuestionsPanel() {
  const confirm = useConfirm();
  const [rows, setRows] = React.useState<Question[] | null>(null);
  const [total, setTotal] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(50);
  const [page, setPage] = React.useState(1);
  const [params] = useSearchParams();
  const [filters, setFilters] = React.useState({ q: '', nodeId: params.get('topic') ?? params.get('chapter') ?? '', type: 'all', complexity: 'all', status: 'all', asked: 'all', textbook: ['yes', 'mapped'].includes(params.get('textbook') ?? '') ? params.get('textbook')! : 'all', review: ['draft', 'flagged', 'approved', 'rejected'].includes(params.get('review') ?? '') ? params.get('review')! : 'all' });
  const [counts, setCounts] = React.useState<Counts>({ draft: 0, approved: 0, rejected: 0, flagged: 0 });
  const [picked, setPicked] = React.useState<Set<string>>(new Set());
  const [reviewing, setReviewing] = React.useState(false);
  const [preview, setPreview] = React.useState<Question | null>(null);
  const [topics, setTopics] = React.useState<Choice[]>([]);
  const [tree, setTree] = React.useState<LibNode[]>([]);
  const [open, setOpen] = React.useState<Set<string>>(new Set());
  const [treeShown, setTreeShown] = React.useState(false);
  const [loadError, setLoadError] = React.useState<string | null>(null);
  const [form, setForm] = React.useState<Form | null>(null);
  const [saving, setSaving] = React.useState(false);
  const [formError, setFormError] = React.useState<string | null>(null);
  // An opened question shows in a side panel: a third column from 1024px up,
  // a panel sliding over from the right on smaller screens.
  const sidePreview = preview !== null;

  React.useEffect(() => {
    api.get<{ nodes: LibNode[] }>('/api/library').then((r) => {
      const f = flatten(r.nodes);
      setTopics(f.topics);
      setTree(r.nodes);
      // Open down to subjects, and to wherever the page was opened at.
      const idx = indexTree(r.nodes);
      const o = new Set<string>();
      for (const [id, e] of idx) if (e.node.kind !== 'chapter' && e.node.kind !== 'topic') o.add(id);
      for (let cur = idx.get(filters.nodeId)?.parent; cur; cur = idx.get(cur)?.parent ?? null) o.add(cur);
      setOpen(o);
    }).catch(() => { /* the list's own error covers a dead API */ });
  }, []);

  const load = React.useCallback(async () => {
    setLoadError(null);
    try {
      const query: Record<string, string> = { page: String(page) };
      if (filters.q.trim()) query.q = filters.q.trim();
      for (const k of ['type', 'complexity', 'status', 'review', 'asked', 'textbook'] as const) if (filters[k] !== 'all') query[k] = filters[k];
      if (filters.nodeId) query.nodeId = filters.nodeId;
      const r = await api.get<{ questions: Question[]; total: number; pageSize: number; counts: Counts }>('/api/questions', { query });
      setRows(r.questions);
      setCounts(r.counts);
      setPicked(new Set());
      setTotal(r.total);
      setPageSize(r.pageSize);
      return r.questions;
    } catch (err) {
      setLoadError(err instanceof Error ? err.message : 'Could not load questions.');
      return null;
    }
  }, [filters, page]);

  // Typing in the search box waits a beat; the selects load straight away.
  React.useEffect(() => {
    const t = setTimeout(() => void load(), filters.q ? 250 : 0);
    return () => clearTimeout(t);
  }, [load, filters.q]);

  async function review(ids: string[], status: 'approved' | 'rejected') {
    if (!ids.length || reviewing) return;
    setReviewing(true);
    // Reviewing from the side panel moves on to the next question, so a run of
    // drafts can be worked through without going back to the list each time.
    const at = preview && rows ? rows.findIndex((r) => r.id === preview.id) : -1;
    const nextIds = at >= 0 && rows ? [rows[at + 1]?.id, rows[at - 1]?.id] : [];
    try {
      const r = await api.post<{ updated: number }>('/api/questions/review', { ids, status });
      toast.success(`${r.updated} question${r.updated === 1 ? '' : 's'} ${status}`);
      const fresh = await load();
      if (preview && ids.length === 1 && ids[0] === preview.id && fresh) {
        const stay = fresh.find((q) => q.id === preview.id);
        const next = stay ? fresh[fresh.indexOf(stay) + 1] : nextIds.map((id) => fresh.find((q) => q.id === id)).find(Boolean);
        setPreview(next ?? stay ?? null);
      } else {
        setPreview(null);
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Could not update the review.');
    } finally {
      setReviewing(false);
    }
  }

  const setFilter = (patch: Partial<typeof filters>) => { setPage(1); setFilters((f) => ({ ...f, ...patch })); };

  function edit(q: Question) {
    setFormError(null);
    setForm({ id: q.id, topicId: q.topicId, type: q.type, complexity: q.complexity, marks: String(q.marks), text: q.text, options: [...(q.options ?? []), '', '', '', ''].slice(0, Math.max(4, q.options?.length ?? 0)), answer: q.answer ?? '', figureSvg: q.figureSvg ?? '', figureAlt: q.figureAlt ?? '', parts: (q.parts ?? []).map((p) => ({ label: p.label, marks: String(p.marks), text: p.text, answer: p.answer ?? '' })), steps: (q.markingSteps ?? []).map((m) => ({ step: m.step, marks: String(m.marks) })), textbookRef: q.textbookRef ?? '' });
  }

  async function save(e: React.FormEvent) {
    e.preventDefault();
    if (!form || saving) return;
    setSaving(true);
    setFormError(null);
    const body = {
      topicId: form.topicId, type: form.type, complexity: form.complexity, marks: Number(form.marks), text: form.text,
      options: hasOptions(form.type) ? form.options : null, answer: form.answer,
      figureSvg: form.figureSvg || null, figureAlt: form.figureAlt || null,
      textbookRef: form.textbookRef.trim() || null,
      parts: form.type === 'case' && form.parts.length ? form.parts.map((p) => ({ ...p, marks: Number(p.marks) })) : null,
      markingSteps: form.steps.length ? form.steps.map((m) => ({ step: m.step, marks: Number(m.marks) })) : null,
    };
    try {
      if (form.id) await api.patch(`/api/questions/${form.id}`, body);
      else await api.post('/api/questions', body);
      setForm(null);
      toast.success('Question saved');
      await load();
    } catch (err) {
      setFormError(err instanceof Error ? err.message : 'Could not save the question.');
    } finally {
      setSaving(false);
    }
  }

  async function toggle(q: Question) {
    try { await api.patch(`/api/questions/${q.id}`, { isActive: !q.isActive }); await load(); }
    catch (err) { toast.error(err instanceof Error ? err.message : 'Could not update it.'); }
  }

  async function remove(q: Question) {
    const ok = await confirm({ title: 'Delete this question?', description: q.text.slice(0, 120), confirmLabel: 'Delete', tone: 'destructive' });
    if (!ok) return;
    try { await api.delete(`/api/questions/${q.id}`); await load(); }
    catch (err) { toast.error(err instanceof Error ? err.message : 'Could not delete it.'); }
  }

  // The filters that are on, as removable chips; the review tab and search sit apart.
  const activeFilters = FILTERS.filter((f) => filters[f.key] !== 'all')
    .map((f) => ({ key: f.key, text: f.options.find(([id]) => id === filters[f.key])?.[1] ?? filters[f.key] }));
  const clearFilters = () => setFilter(Object.fromEntries(FILTERS.map((f) => [f.key, 'all'])));

  const pages = Math.max(1, Math.ceil(total / pageSize));
  const index = React.useMemo(() => indexTree(tree), [tree]);
  const here = filters.nodeId ? index.get(filters.nodeId) : undefined;
  const allCount = counts.draft + counts.approved + counts.rejected + counts.flagged;
  const toggleNode = (id: string) => setOpen((s) => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n; });
  const pickNode = (id: string) => { setFilter({ nodeId: id }); setTreeShown(false); };
  // New questions start in the topic being browsed, or the first topic beneath it.
  function startTopic(): string {
    const sel = here?.node;
    const first = (n: LibNode): string | undefined => (n.kind === 'topic' ? n.id : n.children.map(first).find(Boolean));
    return (sel && first(sel)) || topics[0]?.id || '';
  }

  return (
    <>
      <PanelTop
        description="Every question is tagged to a topic in Categories. Pick a chapter, then open a question to check it."
        actions={<Button onClick={() => { setFormError(null); setForm(blank(startTopic())); }} disabled={topics.length === 0}><Plus className="size-4" /> Add question</Button>}
      />

      <div className={`lg:grid lg:gap-6 ${sidePreview ? 'lg:grid-cols-[13rem_minmax(0,1fr)_21rem] xl:grid-cols-[15rem_minmax(0,1fr)_25rem] 2xl:grid-cols-[16rem_minmax(0,1fr)_30rem]' : 'lg:grid-cols-[16rem_minmax(0,1fr)]'}`}>
        {/* Side tree: a drawer-style panel under a button on a phone, always open on a wide screen */}
        <aside className="mb-4 lg:mb-0">
          <Button variant="outline" className="w-full justify-between lg:hidden" aria-expanded={treeShown} onClick={() => setTreeShown((v) => !v)}>
            <span className="flex min-w-0 items-center gap-2"><FolderTree className="size-4 shrink-0" /><span className="truncate">{here ? here.path.slice(-2).join(' › ') : 'All questions'}</span></span>
            <ChevronDown className={`size-4 shrink-0 transition-transform ${treeShown ? 'rotate-180' : ''}`} />
          </Button>
          <div className={`${treeShown ? 'mt-2 block' : 'hidden'} max-h-[60vh] overflow-y-auto rounded-xl border border-border bg-card p-2 lg:sticky lg:top-20 lg:mt-0 lg:block lg:max-h-[calc(100vh-6rem)]`}>
            <CategoryTree nodes={tree} selected={filters.nodeId} open={open} onToggle={toggleNode} onPick={pickNode} total={allCount} />
          </div>
        </aside>

        <div className="min-w-0">
          {/* Review status: the one primary switch on this page */}
          <div className="mb-3 flex gap-5 overflow-x-auto border-b border-border" role="tablist" aria-label="Review status">
            {REVIEW_TABS.map((t) => {
              const n = t.id === 'all' ? allCount : counts[t.id];
              const on = filters.review === t.id;
              return (
                <button key={t.id} type="button" role="tab" aria-selected={on} onClick={() => setFilter({ review: t.id })}
                  className={`-mb-px flex shrink-0 items-center gap-1.5 border-b-2 pb-2 pt-1 text-sm transition-colors ${on ? 'border-primary font-medium text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground'}`}>
                  {t.label}
                  <span className={`rounded-full px-1.5 text-xs tabular-nums ${on ? 'bg-primary/10 text-primary' : 'bg-muted'}`}>{n}</span>
                </button>
              );
            })}
          </div>

          {/* Search, and every other filter behind one button */}
          <div className="mb-3 flex gap-2">
            <div className="relative min-w-0 flex-1">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
              <Input className="pl-9" placeholder="Search questions" aria-label="Search question text" value={filters.q} onChange={(e) => setFilter({ q: e.target.value })} />
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="shrink-0">
                  <SlidersHorizontal className="size-4" /> <span className="hidden sm:inline">Filters</span>
                  {activeFilters.length > 0 && <span className="rounded-full bg-primary px-1.5 text-xs tabular-nums text-primary-foreground">{activeFilters.length}</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-72 space-y-3">
                {FILTERS.map((f) => (
                  <label key={f.key} className="block space-y-1">
                    <span className="text-xs font-medium text-muted-foreground">{f.label}</span>
                    <Select value={filters[f.key]} onValueChange={(v) => setFilter({ [f.key]: v })}>
                      <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                      <SelectContent>{f.options.map(([id, name]) => <SelectItem key={id} value={id}>{name}</SelectItem>)}</SelectContent>
                    </Select>
                  </label>
                ))}
                {activeFilters.length > 0 && <Button variant="ghost" size="sm" className="w-full" onClick={clearFilters}>Clear filters</Button>}
              </PopoverContent>
            </Popover>
          </div>

          {/* Only the filters that are on, each removable */}
          {activeFilters.length > 0 && (
            <div className="mb-3 flex flex-wrap items-center gap-1.5">
              {activeFilters.map((f) => (
                <span key={f.key} className="inline-flex items-center gap-1 rounded-full border border-border bg-muted/50 py-0.5 pl-2.5 pr-1 text-xs">
                  {f.text}
                  <button type="button" className="rounded-full p-0.5 text-muted-foreground hover:bg-muted hover:text-foreground" aria-label={`Remove filter ${f.text}`} onClick={() => setFilter({ [f.key]: 'all' })}><X className="size-3" /></button>
                </span>
              ))}
              <button type="button" className="px-1 text-xs text-muted-foreground hover:text-foreground" onClick={clearFilters}>Clear all</button>
            </div>
          )}

          {loadError ? (
            <Alert variant="destructive"><AlertTriangle className="size-4" /><AlertTitle>Could not load questions</AlertTitle><AlertDescription>{loadError}</AlertDescription></Alert>
          ) : !rows ? (
            <PageLoading />
          ) : (
            <div className="overflow-hidden rounded-xl border border-border bg-card">
              {/* List header: what is shown, or the bulk actions once something is ticked */}
              <div className="flex min-h-11 items-center gap-3 border-b border-border bg-muted/40 px-4 py-2 text-sm">
                <input type="checkbox" aria-label="Select all on this page" disabled={rows.length === 0} checked={rows.length > 0 && picked.size === rows.length}
                  onChange={(e) => setPicked(e.target.checked ? new Set(rows.map((r) => r.id)) : new Set())} />
                {picked.size > 0 ? (
                  <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2">
                    <span className="font-medium">{picked.size} selected</span>
                    <Button size="sm" className="h-7" disabled={reviewing} onClick={() => review([...picked], 'approved')}><Check className="size-4" /> Approve</Button>
                    <Button size="sm" variant="outline" className="h-7" disabled={reviewing} onClick={() => review([...picked], 'rejected')}><X className="size-4" /> Reject</Button>
                    <Button size="sm" variant="ghost" className="ml-auto h-7" onClick={() => setPicked(new Set())}>Cancel</Button>
                  </div>
                ) : (
                  <div className="flex min-w-0 flex-1 items-center gap-2 text-muted-foreground">
                    <span className="truncate">
                      {total} question{total === 1 ? '' : 's'}
                      {here && <> in <span className="font-medium text-foreground">{here.node.name}</span></>}
                    </span>
                    {here && <button type="button" aria-label="Show all questions" className="rounded p-0.5 hover:text-foreground" onClick={() => pickNode('')}><X className="size-3.5" /></button>}
                    {pages > 1 && <span className="ml-auto shrink-0 tabular-nums">{(page - 1) * pageSize + 1}–{Math.min(page * pageSize, total)}</span>}
                  </div>
                )}
              </div>

              {rows.length === 0 ? (
                <div className="flex flex-col items-center gap-2 px-4 py-16 text-center text-sm text-muted-foreground">
                  <FileQuestion className="size-8" aria-hidden />
                  <p>No questions here{activeFilters.length || filters.q ? ' with these filters' : ''}.</p>
                  {(activeFilters.length > 0 || filters.q) && <Button variant="outline" size="sm" onClick={() => { clearFilters(); setFilter({ q: '' }); }}>Clear search and filters</Button>}
                </div>
              ) : (
                <ul className="divide-y divide-border">
                  {rows.map((q) => {
                    const on = preview?.id === q.id;
                    const dim = !q.isActive && q.reviewStatus === 'approved';
                    const topic = q.topicPath[q.topicPath.length - 1];
                    return (
                      <li key={q.id} aria-selected={on}
                        onClick={(e) => { if (!(e.target as HTMLElement).closest('button, input, a, [role="menuitem"]')) setPreview(q); }}
                        className={`group flex cursor-pointer gap-3 px-4 py-3 transition-colors ${on ? 'bg-primary/10 shadow-[inset_3px_0_0_var(--primary)]' : 'hover:bg-muted/40'}`}>
                        <input type="checkbox" className="mt-1 shrink-0" aria-label="Select question" checked={picked.has(q.id)}
                          onChange={(e) => setPicked((s) => { const n = new Set(s); e.target.checked ? n.add(q.id) : n.delete(q.id); return n; })} />
                        <div className={`min-w-0 flex-1 ${dim ? 'opacity-60' : ''}`}>
                          <button type="button" className="block w-full text-left text-sm leading-snug" onClick={() => setPreview(q)} aria-label="Open question">
                            <span className="line-clamp-2"><MathText text={q.text} /></span>
                          </button>
                          <p className="mt-1.5 flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-xs text-muted-foreground">
                            <span>{TYPE_LABEL[q.type]}</span><span aria-hidden>·</span>
                            <span>{COMPLEXITY_LABEL[q.complexity]}</span>
                            {here?.node.kind !== 'topic' && <><span aria-hidden>·</span><span className="max-w-[16rem] truncate" title={q.topicPath.slice(-2).join(' › ')}>{topic}</span></>}
                            {q.textbookRef && <span className="inline-flex items-center gap-1" title={q.textbookRef}><span aria-hidden>·</span><BookOpen className="size-3" />Textbook</span>}
                            {q.figureSvg && <span className="inline-flex items-center gap-1"><span aria-hidden>·</span><ImageIcon className="size-3" />Figure</span>}
                            {q.askedIn.length > 0 && <span title={`This type asked: ${q.askedIn.join(', ')}`}><span aria-hidden>· </span>{askedLabel(q.askedIn)}</span>}
                            {filters.review === 'all' && q.reviewStatus !== 'approved' && <span className={`ml-1 rounded px-1.5 py-px ${q.reviewStatus === 'flagged' ? 'bg-destructive/10 text-destructive' : 'bg-muted text-foreground'}`}>{STATUS_LABEL[q.reviewStatus]}</span>}
                            {dim && <span className="ml-1 rounded bg-muted px-1.5 py-px text-foreground">Hidden</span>}
                          </p>
                        </div>
                        <div className="flex shrink-0 items-start gap-0.5">
                          <span className="mr-1 mt-0.5 rounded-md bg-muted px-1.5 py-0.5 text-xs font-medium tabular-nums" title={`${q.marks} mark${q.marks === 1 ? '' : 's'}`}>{q.marks}m</span>
                          {(q.reviewStatus === 'draft' || q.reviewStatus === 'flagged') && (
                            <Button size="icon" variant="ghost" className="size-7 lg:opacity-0 lg:group-hover:opacity-100 lg:focus-visible:opacity-100" aria-label="Approve question" title="Approve — makes it live" disabled={reviewing} onClick={() => review([q.id], 'approved')}><Check className="size-4 text-success" /></Button>
                          )}
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button size="icon" variant="ghost" className="size-7" aria-label="More actions"><MoreHorizontal className="size-4" /></Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-48">
                              <DropdownMenuItem onSelect={() => edit(q)}><Pencil className="size-4" /> Edit</DropdownMenuItem>
                              {q.reviewStatus !== 'rejected' && <DropdownMenuItem onSelect={() => review([q.id], 'rejected')}><X className="size-4" /> Reject</DropdownMenuItem>}
                              <DropdownMenuItem onSelect={() => toggle(q)}>{q.isActive ? <><EyeOff className="size-4" /> Hide from papers</> : <><Eye className="size-4" /> Show in papers</>}</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem disabled={q.used} className="text-destructive focus:text-destructive" onSelect={() => remove(q)}><Trash2 className="size-4" /> {q.used ? 'Used in a paper' : 'Delete'}</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}

              {pages > 1 && (
                <div className="flex items-center justify-between border-t border-border px-4 py-2 text-sm text-muted-foreground">
                  <span>Page {page} of {pages}</span>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" className="size-8" aria-label="Previous page" disabled={page <= 1} onClick={() => setPage(page - 1)}><ChevronLeft className="size-4" /></Button>
                    <Button variant="ghost" size="icon" className="size-8" aria-label="Next page" disabled={page >= pages} onClick={() => setPage(page + 1)}><ChevronRight className="size-4" /></Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Preview panel: a third column on a wide screen. Closing it gives the list the room back. */}
        {sidePreview && preview && (
          <aside aria-label="Question preview" className="fixed inset-y-0 right-0 z-40 w-full max-w-md lg:static lg:z-auto lg:w-auto lg:max-w-none lg:min-w-0">
            <div className="flex h-full flex-col overflow-hidden border-l border-border bg-card shadow-xl lg:sticky lg:top-20 lg:h-auto lg:max-h-[calc(100vh-6rem)] lg:rounded-xl lg:border lg:shadow-none">
              <div className="flex items-start gap-2 border-b border-border px-4 py-3">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium leading-snug">{preview.topicPath.slice(-2).join(' › ')}</p>
                  <p className="text-xs text-muted-foreground">{questionMeta(preview)}</p>
                </div>
                {rows && (() => {
                  const at = rows.findIndex((r) => r.id === preview.id);
                  return (
                    <div className="flex shrink-0 items-center">
                      <Button variant="ghost" size="icon" className="size-8" aria-label="Previous question" disabled={at <= 0} onClick={() => setPreview(rows[at - 1])}><ChevronLeft className="size-4" /></Button>
                      <Button variant="ghost" size="icon" className="size-8" aria-label="Next question" disabled={at < 0 || at >= rows.length - 1} onClick={() => setPreview(rows[at + 1])}><ChevronRight className="size-4" /></Button>
                      <Button variant="ghost" size="icon" className="size-8" aria-label="Close preview" onClick={() => setPreview(null)}><X className="size-4" /></Button>
                    </div>
                  );
                })()}
              </div>
              <div className="min-h-0 flex-1 space-y-3 overflow-y-auto px-4 py-4">
                {preview.textbookRef && <p className="flex items-start gap-1.5 text-xs text-muted-foreground"><BookOpen className="mt-0.5 size-3.5 shrink-0" /> Lines up with {preview.textbookRef}</p>}
                <QuestionBody q={preview} />
              </div>
              <div className="flex flex-wrap items-center justify-end gap-2 border-t border-border px-4 py-3">
                <Button variant="ghost" size="sm" className="mr-auto" onClick={() => edit(preview)}><Pencil className="size-4" /> Edit</Button>
                <Button variant="outline" size="sm" disabled={reviewing || preview.reviewStatus === 'rejected'} onClick={() => review([preview.id], 'rejected')}><X className="size-4" /> Reject</Button>
                <Button size="sm" disabled={reviewing || preview.reviewStatus === 'approved'} onClick={() => review([preview.id], 'approved')}><Check className="size-4" /> Approve</Button>
              </div>
            </div>
          </aside>
        )}
      </div>

      <Dialog open={form !== null} onOpenChange={(o) => !o && setForm(null)}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
          {form && (
            <form onSubmit={save}>
              <DialogHeader>
                <DialogTitle>{form.id ? 'Edit question' : 'Add question'}</DialogTitle>
                <DialogDescription>Tag it to a topic so papers pick it up for that chapter.</DialogDescription>
              </DialogHeader>
              {formError && (
                <Alert className="my-4 border-destructive/40 bg-destructive/8"><AlertTriangle className="size-4 text-destructive" /><AlertDescription>{formError}</AlertDescription></Alert>
              )}
              <div className="grid gap-4 py-4 sm:grid-cols-3">
                <div className="sm:col-span-3">
                  <FormField label="Topic" required>
                    <Select value={form.topicId} onValueChange={(v) => setForm({ ...form, topicId: v })}>
                      <SelectTrigger><SelectValue placeholder="Pick a topic" /></SelectTrigger>
                      <SelectContent>{topics.map((t) => <SelectItem key={t.id} value={t.id}>{t.label}</SelectItem>)}</SelectContent>
                    </Select>
                  </FormField>
                </div>
                <FormField label="Type" required>
                  <Select value={form.type} onValueChange={(v) => setForm({ ...form, type: v as QType })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>{(Object.keys(TYPE_LABEL) as QType[]).map((t) => <SelectItem key={t} value={t}>{TYPE_LABEL[t]}</SelectItem>)}</SelectContent>
                  </Select>
                </FormField>
                <FormField label="Complexity" required>
                  <Select value={form.complexity} onValueChange={(v) => setForm({ ...form, complexity: v as Complexity })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>{(Object.keys(COMPLEXITY_LABEL) as Complexity[]).map((c) => <SelectItem key={c} value={c}>{COMPLEXITY_LABEL[c]}</SelectItem>)}</SelectContent>
                  </Select>
                </FormField>
                <FormField label="Marks" required>
                  <Input required type="number" min={1} max={20} value={form.marks} onChange={(e) => setForm({ ...form, marks: e.target.value })} />
                </FormField>
                <div className="sm:col-span-3">
                  <FormField label="Question" required helper="Put maths between dollar signs, for example $x^2 - 3x - 10 = 0$ or $\frac{a}{b}$.">
                    <Textarea required rows={4} value={form.text} onChange={(e) => setForm({ ...form, text: e.target.value })} />
                  </FormField>
                  {form.text.includes('$') && (
                    <div className="mt-2 rounded-lg border border-border bg-muted/50 p-3 text-sm" aria-label="Preview">
                      <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">Preview</p>
                      <p className="whitespace-pre-wrap"><MathText text={form.text} /></p>
                    </div>
                  )}
                </div>
                <div className="sm:col-span-3">
                  <FormField label="Figure (optional)" helper="An SVG file with drawing shapes only. Describe it too, for anyone who can't see it.">
                    <input type="file" accept=".svg,image/svg+xml" aria-label="Figure file" className="block w-full text-sm" onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (file) { const svg = await file.text(); setForm((f) => f && { ...f, figureSvg: svg }); }
                    }} />
                  </FormField>
                  {form.figureSvg && (
                    <div className="mt-2 space-y-2">
                      <QuestionFigure svg={form.figureSvg} alt={form.figureAlt} />
                      <Input aria-label="Describe the figure" placeholder="Describe the figure" value={form.figureAlt} onChange={(e) => setForm({ ...form, figureAlt: e.target.value })} />
                      <Button type="button" variant="ghost" size="sm" onClick={() => setForm({ ...form, figureSvg: '', figureAlt: '' })}>Remove figure</Button>
                    </div>
                  )}
                </div>
                {form.type === 'case' && (
                  <div className="space-y-2 sm:col-span-3">
                    <p className="text-sm font-medium">Parts</p>
                    {form.parts.map((p, i) => (
                      <div key={i} className="grid grid-cols-[4rem_4rem_1fr_auto] gap-2 rounded-lg border border-border p-2">
                        <Input aria-label="Part label" placeholder="i" value={p.label} onChange={(e) => setForm({ ...form, parts: form.parts.map((x, j) => (j === i ? { ...x, label: e.target.value } : x)) })} />
                        <Input aria-label="Part marks" type="number" min={1} placeholder="1" value={p.marks} onChange={(e) => setForm({ ...form, parts: form.parts.map((x, j) => (j === i ? { ...x, marks: e.target.value } : x)) })} />
                        <Input aria-label="Part question" placeholder="Part question" value={p.text} onChange={(e) => setForm({ ...form, parts: form.parts.map((x, j) => (j === i ? { ...x, text: e.target.value } : x)) })} />
                        <Button type="button" variant="ghost" size="icon" aria-label="Remove part" onClick={() => setForm({ ...form, parts: form.parts.filter((_, j) => j !== i) })}><X className="size-4" /></Button>
                        <div className="col-span-4"><Input aria-label="Part answer" placeholder="Answer key" value={p.answer} onChange={(e) => setForm({ ...form, parts: form.parts.map((x, j) => (j === i ? { ...x, answer: e.target.value } : x)) })} /></div>
                      </div>
                    ))}
                    <Button type="button" variant="outline" size="sm" onClick={() => setForm({ ...form, parts: [...form.parts, { label: '', marks: '1', text: '', answer: '' }] })}><Plus className="size-4" /> Add part</Button>
                  </div>
                )}
                {hasOptions(form.type) && (
                  <div className="grid gap-2 sm:col-span-3 sm:grid-cols-2">
                    {form.options.map((o, i) => (
                      <Input key={i} aria-label={`Option ${i + 1}`} placeholder={`Option ${String.fromCharCode(65 + i)}`} value={o}
                        onChange={(e) => setForm({ ...form, options: form.options.map((x, j) => (j === i ? e.target.value : x)) })} />
                    ))}
                  </div>
                )}
                <div className="space-y-2 sm:col-span-3">
                  <p className="text-sm font-medium">Marks by step (optional)</p>
                  {form.steps.map((m, i) => (
                    <div key={i} className="grid grid-cols-[1fr_4.5rem_auto] gap-2">
                      <Input aria-label="Step" placeholder="What earns these marks" value={m.step} onChange={(e) => setForm({ ...form, steps: form.steps.map((x, j) => (j === i ? { ...x, step: e.target.value } : x)) })} />
                      <Input aria-label="Step marks" type="number" min={0.5} step={0.5} value={m.marks} onChange={(e) => setForm({ ...form, steps: form.steps.map((x, j) => (j === i ? { ...x, marks: e.target.value } : x)) })} />
                      <Button type="button" variant="ghost" size="icon" aria-label="Remove step" onClick={() => setForm({ ...form, steps: form.steps.filter((_, j) => j !== i) })}><X className="size-4" /></Button>
                    </div>
                  ))}
                  <Button type="button" variant="outline" size="sm" onClick={() => setForm({ ...form, steps: [...form.steps, { step: '', marks: '1' }] })}><Plus className="size-4" /> Add step</Button>
                </div>
                <div className="sm:col-span-3">
                  <FormField label="Answer / marking scheme" helper="Used when marking. Never shown to students or parents.">
                    <Textarea rows={3} value={form.answer} onChange={(e) => setForm({ ...form, answer: e.target.value })} />
                  </FormField>
                </div>
                <div className="sm:col-span-3">
                  <FormField label="Textbook reference" helper="Optional. Where this lines up with the class textbook, e.g. NCERT Class 10 · Ch 4 Quadratic Equations · Nature of roots. Write the question in your own words, never copied from the book.">
                    <Input value={form.textbookRef} maxLength={160} onChange={(e) => setForm({ ...form, textbookRef: e.target.value })} placeholder="NCERT Class 10 · Ch 4 Quadratic Equations · Nature of roots" />
                  </FormField>
                </div>
              </div>
              <DialogFooter className="mt-2">
                <Button type="button" variant="ghost" onClick={() => setForm(null)}>Cancel</Button>
                <Button type="submit" disabled={saving || !form.topicId || !form.text.trim()}>{saving && <Loader2 className="size-4 animate-spin" />} Save question</Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
