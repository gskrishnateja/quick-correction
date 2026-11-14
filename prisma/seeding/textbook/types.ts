/**
 * One textbook-style question: our own question, practising a skill the NCERT
 * Class 10 Maths textbook teaches. `ref` points at the chapter and skill; the
 * question's context, numbers and wording are never the textbook's.
 * `topic` is a topic name under the chapter in CBSE › Class 10 › Mathematics (Standard).
 */
export type TextbookQuestion = {
  id: string;
  chapter: string;
  topic: string;
  ref: string;
  type: 'mcq' | 'short' | 'long';
  complexity: 'easy' | 'medium' | 'hard';
  marks: number;
  text: string;
  options?: string[];
  answer: string;
  steps?: { step: string; marks: number }[];
};
