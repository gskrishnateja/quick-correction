/**
 * Categories — `/admin/library`.
 *
 * The curriculum papers are built from: board > class > subject > chapter >
 * topic. The admin adds, renames, hides and removes nodes; teachers will pick
 * from what is here. Data comes from `/api/library`.
 */
import * as React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Button, Input, FormField, Badge, Card, CardContent, Alert, AlertTitle, AlertDescription, toast, useConfirm,
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter,
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@bloomneo/uikit';
import { Plus, ChevronRight, Pencil, Trash2, Eye, EyeOff, Check, X, Loader2, AlertTriangle, BookOpen } from 'lucide-react';
import { api } from '@/shared/api';
import { PanelTop } from './PanelTop';
import { PageLoading } from '../PageLoading';

const KINDS = ['board', 'class', 'subject', 'chapter', 'topic'] as const;
type Kind = (typeof KINDS)[number];
const LABEL: Record<Kind, string> = { board: 'Board', class: 'Class', subject: 'Subject', chapter: 'Chapter', topic: 'Topic' };

type QType = 'mcq' | 'short' | 'long' | 'case';
type Complexity = 'easy' | 'medium' | 'hard';
const QTYPES: { id: QType; label: string }[] = [
  { id: 'mcq', label: 'Multiple choice' }, { id: 'short', label: 'Short answer' },
  { id: 'long', label: 'Long answer' }, { id: 'case', label: 'Case study' },
];
const COMPLEXITIES: { id: Complexity; label: string }[] = [
  { id: 'easy', label: 'Easy' }, { id: 'medium', label: 'Medium' }, { id: 'hard', label: 'Hard' },
];

type NodeT = {
  id: string; kind: Kind; name: string; parentId: string | null; isActive: boolean; children: NodeT[];
  questionTypes: QType[] | null; complexity: Complexity | null; marks: number | null;
  /** Questions under this node (all topics beneath it). */
  questionCount: number;
  /** Subjects only: active paper patterns. */
  patternCount?: number;
};

/** Teachers see a subject only when it has chapters and an active pattern (tutorService.setup). */
const usable = (s: NodeT) => s.children.length > 0 && (s.patternCount ?? 0) > 0;

/** The line under a subject: what it has, and what it still needs before teachers can use it. */
function subjectLine(n: NodeT) {
  const parts = [plural(n.children.length, 'chapter', 'chapters'), plural(n.questionCount, 'question', 'questions'), plural(n.patternCount ?? 0, 'paper pattern', 'paper patterns')];
  const missing = [!n.children.length && 'chapters', !n.patternCount && 'a paper pattern'].filter(Boolean).join(' and ');
  return missing ? `${parts.join(' · ')} — hidden from teachers until it has ${missing}` : parts.join(' · ');
}

type TopicForm = { id: string | null; parentId: string; name: string; types: QType[]; complexity: Complexity | ''; marks: string };

function count(nodes: NodeT[], kind: Kind): number {
  return nodes.reduce((n, x) => n + (x.kind === kind ? 1 : 0) + count(x.children, kind), 0);
}

const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;
const tally = (nodes: NodeT[], kind: Kind, one: string, many: string) => plural(count(nodes, kind), one, many);

/** What each board is, shown under its name. Boards the admin adds get none. */
const BOARD_INFO: Record<string, string> = {
  CBSE: 'Central Board of Secondary Education',
  ICSE: 'CISCE · ICSE in Class 10, ISC in Class 12',
  IGCSE: 'Cambridge · IGCSE, then AS & A Level',
  IB: 'International Baccalaureate · MYP, then DP',
};

/** One line to type a name into: used for adding and renaming. */
function NameInput({ initial = '', placeholder, onSave, onCancel }: {
  initial?: string; placeholder: string; onSave: (name: string) => Promise<void>; onCancel: () => void;
}) {
  const [value, setValue] = React.useState(initial);
  const [busy, setBusy] = React.useState(false);
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!value.trim() || busy) return;
    setBusy(true);
    try { await onSave(value.trim()); } finally { setBusy(false); }
  }
  return (
    <form onSubmit={submit} className="flex items-center gap-1.5">
      <Input autoFocus value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder}
        onKeyDown={(e) => e.key === 'Escape' && onCancel()} className="h-8 min-w-0 flex-1" aria-label={placeholder} />
      <Button type="submit" size="icon" className="size-8 shrink-0" aria-label="Save" disabled={busy || !value.trim()}>
        {busy ? <Loader2 className="size-4 animate-spin" /> : <Check className="size-4" />}
      </Button>
      <Button type="button" size="icon" variant="ghost" className="size-8 shrink-0" aria-label="Cancel" onClick={onCancel}><X className="size-4" /></Button>
    </form>
  );
}

export function LibraryPanel() {
  const confirm = useConfirm();
  const [params, setParams] = useSearchParams();
  const [nodes, setNodes] = React.useState<NodeT[] | null>(null);
  const [loadError, setLoadError] = React.useState<string | null>(null);
  const [open, setOpen] = React.useState<Set<string>>(new Set());
  // Which row is being edited ("rename:<id>"), or where a child is being added ("add:<parentId|root>").
  const [editing, setEditing] = React.useState<string | null>(null);
  // Topics carry extra fields, so they are added and edited in a dialog rather than inline.
  const [topic, setTopic] = React.useState<TopicForm | null>(null);
  const [saving, setSaving] = React.useState(false);
  const [topicError, setTopicError] = React.useState<string | null>(null);

  const load = React.useCallback(async () => {
    setLoadError(null);
    try {
      setNodes((await api.get<{ nodes: NodeT[] }>('/api/library')).nodes);
    } catch (err) {
      setLoadError(err instanceof Error ? err.message : 'Could not load the library.');
    }
  }, []);
  React.useEffect(() => { void load(); }, [load]);

  // One board at a time. It lives in the address (`&board=`) so a link or a
  // reload lands on the same board.
  const board = nodes?.find((n) => n.id === params.get('board')) ?? nodes?.[0] ?? null;
  const pickBoard = (id: string) => setParams((p) => { p.set('board', id); return p; }, { replace: true });

  // Open the board's classes and subjects, so its subjects show at a glance.
  React.useEffect(() => {
    if (!board) return;
    setOpen((s) => {
      const n = new Set(s);
      for (const c of board.children) { n.add(c.id); for (const sub of c.children) n.add(sub.id); }
      return n;
    });
  }, [board?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  const toggle = (id: string) => setOpen((s) => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n; });

  async function run(fn: () => Promise<unknown>, failed: string) {
    try { await fn(); await load(); } catch (err) { toast.error(err instanceof Error ? err.message : failed); throw err; }
  }

  const add = (kind: Kind, parentId: string | null) => async (name: string) => {
    let id = '';
    await run(async () => { id = (await api.post<{ node: { id: string } }>('/api/library', { kind, name, parentId })).node.id; }, 'Could not add it.');
    if (parentId) setOpen((s) => new Set(s).add(parentId));
    if (kind === 'board' && id) pickBoard(id);
    setEditing(null);
  };
  const openTopic = (t: NodeT | null, parentId: string) => {
    setTopicError(null);
    setTopic(t
      ? { id: t.id, parentId, name: t.name, types: t.questionTypes ?? [], complexity: t.complexity ?? '', marks: t.marks ? String(t.marks) : '' }
      : { id: null, parentId, name: '', types: [], complexity: '', marks: '' });
  };

  async function saveTopic(e: React.FormEvent) {
    e.preventDefault();
    if (!topic || saving) return;
    setSaving(true);
    setTopicError(null);
    const fields = {
      name: topic.name,
      questionTypes: topic.types.length ? topic.types : null,
      complexity: topic.complexity || null,
      marks: topic.marks ? Number(topic.marks) : null,
    };
    try {
      if (topic.id) await api.patch(`/api/library/${topic.id}`, fields);
      else await api.post('/api/library', { kind: 'topic', parentId: topic.parentId, ...fields });
      setOpen((o) => new Set(o).add(topic.parentId));
      setTopic(null);
      await load();
    } catch (err) {
      setTopicError(err instanceof Error ? err.message : 'Could not save the topic.');
    } finally {
      setSaving(false);
    }
  }

  const rename = (n: NodeT) => async (name: string) => {
    await run(() => api.patch(`/api/library/${n.id}`, { name }), 'Could not rename it.');
    setEditing(null);
  };
  const setActive = (n: NodeT) => run(() => api.patch(`/api/library/${n.id}`, { isActive: !n.isActive }), 'Could not update it.').catch(() => {});
  async function remove(n: NodeT) {
    const inside = n.children.length;
    const ok = await confirm({
      title: `Delete ${LABEL[n.kind].toLowerCase()} "${n.name}"?`,
      description: inside ? `Everything under it (${inside} item${inside > 1 ? 's' : ''} and what they contain) is deleted too. This cannot be undone.` : 'This cannot be undone.',
      confirmLabel: 'Delete',
      tone: 'destructive',
    });
    if (ok) await run(() => api.delete(`/api/library/${n.id}`), 'Could not delete it.').catch(() => {});
  }

  const renderRow = (n: NodeT, depth: number): React.ReactNode => {
    const next = KINDS[KINDS.indexOf(n.kind) + 1] as Kind | undefined;
    const expanded = open.has(n.id);
    const renaming = editing === `rename:${n.id}`;
    return (
      <li key={n.id}>
        <div className="group flex items-center gap-1 rounded-md py-1 pr-1 hover:bg-muted/50" style={{ paddingLeft: depth * 20 + 4 }}>
          {next ? (
            <Button variant="ghost" size="icon" className="size-7 shrink-0" aria-label={expanded ? 'Collapse' : 'Expand'} aria-expanded={expanded} onClick={() => toggle(n.id)}>
              <ChevronRight className={`size-4 transition-transform ${expanded ? 'rotate-90' : ''}`} />
            </Button>
          ) : <span className="size-7 shrink-0" />}
          {renaming ? (
            <div className="flex-1"><NameInput initial={n.name} placeholder="Name" onSave={rename(n)} onCancel={() => setEditing(null)} /></div>
          ) : (
            <>
              <span className="min-w-0 flex-1">
                <span className={`line-clamp-2 block break-words leading-tight ${n.isActive ? '' : 'text-muted-foreground line-through'}`}>{n.name}</span>
                {n.kind === 'subject' && (
                  <span className="block text-xs leading-tight text-muted-foreground">
                    {subjectLine(n)}
                  </span>
                )}
                {(n.kind === 'chapter' || n.kind === 'topic') && (
                  <Link to={`/admin/content?tab=questions&${n.kind}=${n.id}`} className="block w-fit text-xs leading-tight text-muted-foreground hover:text-primary hover:underline" aria-label={`${n.questionCount} questions in ${n.name}`}>
                    {n.questionCount} {n.questionCount === 1 ? 'question' : 'questions'}
                  </Link>
                )}
              </span>
              {n.kind === 'topic' && (
                <span className="hidden shrink-0 items-center gap-1 md:flex">
                  {n.questionTypes?.map((t) => <Badge key={t} variant="outline">{QTYPES.find((q) => q.id === t)?.label}</Badge>)}
                  {n.complexity && <Badge variant="secondary">{COMPLEXITIES.find((c) => c.id === n.complexity)?.label}</Badge>}
                  {n.marks && <Badge variant="secondary">{n.marks} {n.marks === 1 ? 'mark' : 'marks'}</Badge>}
                </span>
              )}
              <Badge variant="outline" className="hidden shrink-0 sm:inline-flex">{LABEL[n.kind]}</Badge>
              {!n.isActive && <Badge variant="secondary" className="shrink-0">Hidden</Badge>}
              <div className="flex shrink-0 items-center">
                {next && (
                  <Button variant="ghost" size="icon" className="size-8" aria-label={`Add ${LABEL[next].toLowerCase()} to ${n.name}`} title={`Add ${LABEL[next].toLowerCase()}`}
                    onClick={() => { if (next === 'topic') { openTopic(null, n.id); return; } setOpen((s) => new Set(s).add(n.id)); setEditing(`add:${n.id}`); }}>
                    <Plus className="size-4" />
                  </Button>
                )}
                <Button variant="ghost" size="icon" className="size-8" aria-label={`Rename ${n.name}`} title={n.kind === 'topic' ? 'Edit topic' : 'Rename'} onClick={() => (n.kind === 'topic' ? openTopic(n, n.parentId!) : setEditing(`rename:${n.id}`))}><Pencil className="size-4" /></Button>
                <Button variant="ghost" size="icon" className="size-8" aria-label={n.isActive ? `Hide ${n.name}` : `Show ${n.name}`} title={n.isActive ? 'Hide from teachers' : 'Show to teachers'} onClick={() => setActive(n)}>
                  {n.isActive ? <Eye className="size-4" /> : <EyeOff className="size-4" />}
                </Button>
                <Button variant="ghost" size="icon" className="size-8" aria-label={`Delete ${n.name}`} title="Delete" onClick={() => remove(n)}><Trash2 className="size-4 text-destructive" /></Button>
              </div>
            </>
          )}
        </div>
        {next && expanded && (
          <ul>
            {n.children.map((c) => renderRow(c, depth + 1))}
            {editing === `add:${n.id}` ? (
              <li style={{ paddingLeft: (depth + 1) * 20 + 36 }} className="py-1 pr-1">
                <NameInput placeholder={`New ${LABEL[next].toLowerCase()} name`} onSave={add(next, n.id)} onCancel={() => setEditing(null)} />
              </li>
            ) : n.children.length === 0 && (
              <li style={{ paddingLeft: (depth + 1) * 20 + 36 }} className="py-1 text-sm text-muted-foreground">
                No {LABEL[next].toLowerCase()}s yet — use + to add one.
              </li>
            )}
          </ul>
        )}
      </li>
    );
  };

  return (
    <>
      <PanelTop
        description="Board, class, subject, chapter and topic — the curriculum papers are built from."
        actions={<Button onClick={() => setEditing('add:root')}><Plus className="size-4" /> Add board</Button>}
      />
      {loadError ? (
        <Alert variant="destructive"><AlertTriangle className="size-4" /><AlertTitle>Could not load the library</AlertTitle><AlertDescription>{loadError}</AlertDescription></Alert>
      ) : !nodes ? (
        <PageLoading />
      ) : (
        <>
          {/* Boards: pick one to see its classes and subjects below. */}
          <div role="tablist" aria-label="Boards" className="mb-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {nodes.map((b) => {
              const on = b.id === board?.id;
              const chapters = count(b.children, 'chapter');
              const subjects = b.children.flatMap((c) => c.children);
              const ready = subjects.filter(usable).length;
              return (
                <button
                  key={b.id}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => pickBoard(b.id)}
                  className={`cursor-pointer rounded-2xl border bg-card p-4 text-left transition ${on ? 'border-primary ring-2 ring-primary/20' : 'border-border hover:border-primary/40'} ${b.isActive ? '' : 'opacity-60'}`}
                >
                  <span className="flex items-center justify-between gap-2">
                    <span className="text-lg font-bold tracking-tight">{b.name}</span>
                    {!b.isActive ? <Badge variant="secondary">Hidden</Badge> : ready ? (
                      <span className={`flex items-center gap-1 text-xs font-medium ${ready === subjects.length ? 'text-success' : 'text-warning'}`}>
                        <span aria-hidden className={`size-1.5 rounded-full ${ready === subjects.length ? 'bg-success' : 'bg-warning'}`} />
                        {ready === subjects.length ? 'Ready' : `${ready} of ${subjects.length} ready`}
                      </span>
                    ) : (
                      <span className="text-xs font-medium text-muted-foreground">{chapters ? 'Needs a pattern' : 'Not set up'}</span>
                    )}
                  </span>
                  {BOARD_INFO[b.name] && <span className="mt-0.5 hidden truncate text-xs text-muted-foreground sm:block">{BOARD_INFO[b.name]}</span>}
                  <span className="mt-3 block text-sm">
                    {b.children.length ? b.children.map((c) => c.name).join(' · ') : 'No classes yet'}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {plural(count(b.children, 'subject'), 'subject', 'subjects')} · {plural(chapters, 'chapter', 'chapters')} · {plural(b.questionCount, 'question', 'questions')}
                  </span>
                </button>
              );
            })}
            {editing === 'add:root' && (
              <div className="col-span-2 rounded-2xl border border-dashed border-border bg-card p-3 lg:col-span-1">
                <NameInput placeholder="New board name" onSave={add('board', null)} onCancel={() => setEditing(null)} />
              </div>
            )}
          </div>

          {nodes.length === 0 && editing !== 'add:root' ? (
            <Card>
              <CardContent className="flex flex-col items-center gap-2 py-10 text-center text-muted-foreground">
                <BookOpen className="size-8" aria-hidden />
                <p>The library is empty. Add a board to start, for example CBSE.</p>
              </CardContent>
            </Card>
          ) : board && (
            <Card className="gap-0 overflow-hidden py-0">
              <div className="flex flex-wrap items-center gap-2 border-b border-border bg-muted/40 px-4 py-3">
                {editing === `rename:${board.id}` ? (
                  <div className="min-w-0 flex-1"><NameInput initial={board.name} placeholder="Board name" onSave={rename(board)} onCancel={() => setEditing(null)} /></div>
                ) : (
                  <>
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold">{board.name}</span>
                      <span className="block text-xs text-muted-foreground">
                        {tally(board.children, 'class', 'class', 'classes')} · {tally(board.children, 'subject', 'subject', 'subjects')} · {tally(board.children, 'chapter', 'chapter', 'chapters')} · {tally(board.children, 'topic', 'topic', 'topics')}
                      </span>
                    </span>
                    <Button variant="outline" size="sm" className="h-8" aria-label={`Add class to ${board.name}`} onClick={() => setEditing(`add:${board.id}`)}><Plus className="size-4" /> <span className="hidden sm:inline">Add class</span></Button>
                    <div className="flex items-center">
                      <Button variant="ghost" size="icon" className="size-8" aria-label={`Rename ${board.name}`} title="Rename" onClick={() => setEditing(`rename:${board.id}`)}><Pencil className="size-4" /></Button>
                      <Button variant="ghost" size="icon" className="size-8" aria-label={board.isActive ? `Hide ${board.name}` : `Show ${board.name}`} title={board.isActive ? 'Hide from teachers' : 'Show to teachers'} onClick={() => setActive(board)}>
                        {board.isActive ? <Eye className="size-4" /> : <EyeOff className="size-4" />}
                      </Button>
                      <Button variant="ghost" size="icon" className="size-8" aria-label={`Delete ${board.name}`} title="Delete" onClick={() => remove(board)}><Trash2 className="size-4 text-destructive" /></Button>
                    </div>
                  </>
                )}
              </div>
              <CardContent className="p-2 sm:p-3">
                <ul>{board.children.map((c) => renderRow(c, 0))}</ul>
                {editing === `add:${board.id}` ? (
                  <div className="py-1 pl-9 pr-1"><NameInput placeholder="New class name, e.g. Class 11" onSave={add('class', board.id)} onCancel={() => setEditing(null)} /></div>
                ) : board.children.length === 0 && (
                  <p className="py-6 text-center text-sm text-muted-foreground">No classes yet — use Add class.</p>
                )}
              </CardContent>
            </Card>
          )}
        </>
      )}

      <Dialog open={topic !== null} onOpenChange={(o) => !o && setTopic(null)}>
        <DialogContent className="sm:max-w-lg">
          {topic && (
            <form onSubmit={saveTopic}>
              <DialogHeader>
                <DialogTitle>{topic.id ? 'Edit topic' : 'Add topic'}</DialogTitle>
                <DialogDescription>How this topic is usually tested. Papers use it to pick questions.</DialogDescription>
              </DialogHeader>
              {topicError && (
                <Alert className="my-4 border-destructive/40 bg-destructive/8"><AlertTriangle className="size-4 text-destructive" /><AlertDescription>{topicError}</AlertDescription></Alert>
              )}
              <div className="grid gap-4 py-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <FormField label="Topic name" required>
                    <Input required autoFocus value={topic.name} onChange={(e) => setTopic({ ...topic, name: e.target.value })} placeholder="Nature of roots" />
                  </FormField>
                </div>
                <div className="sm:col-span-2">
                  <FormField label="Question types">
                    <div className="flex flex-wrap gap-2">
                      {QTYPES.map((t) => {
                        const on = topic.types.includes(t.id);
                        return (
                          <Button key={t.id} type="button" size="sm" variant={on ? 'default' : 'outline'} aria-pressed={on}
                            onClick={() => setTopic({ ...topic, types: on ? topic.types.filter((x) => x !== t.id) : [...topic.types, t.id] })}>
                            {t.label}
                          </Button>
                        );
                      })}
                    </div>
                  </FormField>
                </div>
                <FormField label="Complexity">
                  <Select value={topic.complexity || 'none'} onValueChange={(v) => setTopic({ ...topic, complexity: v === 'none' ? '' : (v as Complexity) })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">Not set</SelectItem>
                      {COMPLEXITIES.map((c) => <SelectItem key={c.id} value={c.id}>{c.label}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </FormField>
                <FormField label="Marks per question" helper="Usual marks for a question on this topic.">
                  <Input type="number" min={1} max={20} value={topic.marks} onChange={(e) => setTopic({ ...topic, marks: e.target.value })} />
                </FormField>
              </div>
              <DialogFooter className="mt-2">
                <Button type="button" variant="ghost" onClick={() => setTopic(null)}>Cancel</Button>
                <Button type="submit" disabled={saving || !topic.name.trim()}>{saving && <Loader2 className="size-4 animate-spin" />} Save topic</Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
