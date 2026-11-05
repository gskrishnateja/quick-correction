/**
 * PaperSheet — a question paper laid out the way it is printed: header, then
 * each section with its instruction and numbered questions. With `showAnswers`
 * the answer key appears under each question (teacher only).
 */
import { MathText } from '@/shared/MathText';
import { QuestionFigure } from '@/shared/QuestionFigure';
import type { LayoutSection, Question } from '../lib/types';

type Props = {
  title: string;
  durationMins: number;
  questions: Question[];
  layout?: LayoutSection[] | null;
  showAnswers?: boolean;
};

/** One question's text, figure, options or parts, and for the teacher its key and board history. */
function QuestionBody({ q, showAnswers }: { q: Omit<Question, 'section' | 'alternate'>; showAnswers?: boolean }) {
  return (
    <>
      <p className="whitespace-pre-wrap"><MathText text={q.text} /> <span className="whitespace-nowrap text-muted-foreground">[{q.marks}]</span></p>
      <QuestionFigure svg={q.figureSvg} alt={q.figureAlt} />
      {q.options && (
        <ol className="mt-2 grid gap-1 sm:grid-cols-2">
          {q.options.map((o, i) => (
            <li key={i} className="flex gap-2"><span className="text-muted-foreground">{String.fromCharCode(65 + i)})</span><span><MathText text={String(o)} /></span></li>
          ))}
        </ol>
      )}
      {q.parts && (
        <ol className="mt-2 space-y-1">
          {q.parts.map((p) => (
            <li key={p.label} className="flex gap-2">
              <span className="text-muted-foreground">({p.label})</span>
              <span className="min-w-0 flex-1"><MathText text={p.text} /> <span className="whitespace-nowrap text-muted-foreground">[{p.marks}]</span></span>
            </li>
          ))}
        </ol>
      )}
      {showAnswers && (
        <div className="mt-2 rounded-lg border border-border bg-muted/50 p-3 print:hidden">
          <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">Answer</p>
          {q.answer ? <p className="whitespace-pre-wrap"><MathText text={q.answer} /></p> : !q.markingSteps?.length && !q.parts?.some((p) => p.answer) && <p className="text-muted-foreground">No answer key recorded for this question.</p>}
          {q.parts?.filter((p) => p.answer).map((p) => <p key={p.label} className="mt-1"><span className="text-muted-foreground">({p.label})</span> <MathText text={p.answer!} /></p>)}
          {!!q.markingSteps?.length && (
            <ul className="mt-2 space-y-0.5">{q.markingSteps.map((m, i) => <li key={i} className="flex justify-between gap-3"><span><MathText text={m.step} /></span><span className="shrink-0 tabular-nums text-muted-foreground">{m.marks}</span></li>)}</ul>
          )}
          {!!q.askedIn?.length && <p className="mt-2 text-xs text-muted-foreground">This type asked: {q.askedIn.join(', ')}</p>}
        </div>
      )}
    </>
  );
}

export function PaperSheet({ title, durationMins, questions, layout, showAnswers }: Props) {
  const total = questions.reduce((n, q) => n + q.marks, 0);
  // Sections in the order they appear on the paper.
  const order: string[] = [];
  for (const q of questions) if (!order.includes(q.section)) order.push(q.section);
  let number = 0;

  return (
    <article className="rounded-xl border border-border bg-card p-5 sm:p-8 print:border-0 print:p-0">
      <header className="mb-6 border-b border-border pb-4 text-center">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="mt-1 text-sm text-muted-foreground">Time allowed: {durationMins} minutes · Maximum marks: {total}</p>
      </header>

      {order.map((section) => {
        const qs = questions.filter((q) => q.section === section);
        const note = layout?.find((s) => s.title === section)?.note;
        const marks = qs.reduce((n, q) => n + q.marks, 0);
        return (
          <section key={section} className="mb-8 last:mb-0">
            <h3 className="text-center font-semibold">{section}</h3>
            <p className="mb-4 text-center text-xs italic text-muted-foreground">{note ? `${note} ` : ''}({qs.length} question{qs.length === 1 ? '' : 's'}, {marks} marks)</p>
            <ol className="space-y-5">
              {qs.map((q) => {
                number += 1;
                return (
                  <li key={q.id} className="flex gap-3">
                    <span className="w-6 shrink-0 text-right text-sm font-medium">{number}.</span>
                    <div className="min-w-0 flex-1 text-sm leading-relaxed">
                      <QuestionBody q={q} showAnswers={showAnswers} />
                      {q.alternate && (
                        <>
                          <p className="my-3 text-center text-xs font-semibold tracking-wide">OR</p>
                          <QuestionBody q={q.alternate} showAnswers={showAnswers} />
                        </>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>
        );
      })}
    </article>
  );
}
