/**
 * Textbook-style questions: our own questions, each practising a skill the
 * NCERT Class 10 Maths textbook teaches, with a pointer (`ref`) to the chapter
 * and skill. Nothing here is copied or adapted from the textbook: contexts,
 * numbers and wording are original. The pointer lets a teacher set "questions
 * like the ones in Chapter 4" without the book's text being in the app.
 *
 * Written by AI, so they load as hidden drafts for an admin to check.
 * `topic` is a topic name under the chapter in CBSE › Class 10 › Mathematics (Standard).
 */
import type { TextbookQuestion as Q } from './textbook/types.js';
import { REAL_NUMBERS } from './textbook/ch01-real-numbers.js';
import { POLYNOMIALS } from './textbook/ch02-polynomials.js';
import { LINEAR_EQUATIONS } from './textbook/ch03-linear-equations.js';
import { ARITHMETIC_PROGRESSIONS } from './textbook/ch05-arithmetic-progressions.js';
import { TRIANGLES } from './textbook/ch06-triangles.js';
import { COORDINATE_GEOMETRY } from './textbook/ch07-coordinate-geometry.js';
import { TRIGONOMETRY } from './textbook/ch08-trigonometry.js';
import { CIRCLES } from './textbook/ch10-circles.js';
import { AREAS_CIRCLES } from './textbook/ch11-areas-circles.js';
import { SURFACE_AREAS_VOLUMES } from './textbook/ch12-surface-areas-volumes.js';
import { STATISTICS } from './textbook/ch13-statistics.js';
import { PROBABILITY } from './textbook/ch14-probability.js';
import { NCERT_CH01 } from './textbook/ncert/ch01.js';
import { NCERT_CH02 } from './textbook/ncert/ch02.js';
import { NCERT_CH03 } from './textbook/ncert/ch03.js';
import { NCERT_CH04 } from './textbook/ncert/ch04.js';
import { NCERT_CH05 } from './textbook/ncert/ch05.js';
import { NCERT_CH06 } from './textbook/ncert/ch06.js';
import { NCERT_CH07 } from './textbook/ncert/ch07.js';
import { NCERT_CH08 } from './textbook/ncert/ch08.js';
import { NCERT_CH09 } from './textbook/ncert/ch09.js';
import { NCERT_CH10 } from './textbook/ncert/ch10.js';
import { NCERT_CH11 } from './textbook/ncert/ch11.js';
import { NCERT_CH12 } from './textbook/ncert/ch12.js';
import { NCERT_CH13 } from './textbook/ncert/ch13.js';
import { NCERT_CH14 } from './textbook/ncert/ch14.js';

const CH4 = 'NCERT Class 10 · Ch 4 Quadratic Equations';

const QUADRATIC: Q[] = [
  // Forming quadratic equations
  {
    id: 'tb-qe-01', chapter: 'Quadratic Equations', topic: 'Identifying and forming quadratic equations', ref: `${CH4} · Forming quadratic equations`,
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Which of the following is a quadratic equation?',
    options: ['$(x+3)^{2} = x^{2} + 7$', '$x(x-4) = 2x + 1$', '$x^{2} + 2x = (x+1)^{2}$', '$2x + 5 = x - 3$'],
    answer: 'Correct option: B) $x(x-4) = 2x + 1$. It simplifies to $x^{2} - 6x - 1 = 0$. Option A becomes $6x + 2 = 0$, option C becomes $0 = 1$, and option D is linear.',
  },
  {
    id: 'tb-qe-02', chapter: 'Quadratic Equations', topic: 'Identifying and forming quadratic equations', ref: `${CH4} · Forming quadratic equations`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'A rectangular vegetable bed is 3 m longer than it is wide, and its area is $54 \\text{ m}^{2}$. Taking its width as $w$ metres, write a quadratic equation in standard form for $w$.',
    answer: 'Length $= w + 3$. Area: $w(w+3) = 54$, so $w^{2} + 3w - 54 = 0$.',
    steps: [{ step: 'Writes the area as $w(w+3) = 54$', marks: 1 }, { step: 'Gives $w^{2} + 3w - 54 = 0$', marks: 1 }],
  },
  {
    id: 'tb-qe-03', chapter: 'Quadratic Equations', topic: 'Identifying and forming quadratic equations', ref: `${CH4} · Forming quadratic equations`,
    type: 'short', complexity: 'medium', marks: 2,
    text: 'The product of Ria’s age 4 years ago and her age 6 years from now is 119. Taking her present age as $x$ years, form a quadratic equation in $x$.',
    answer: 'Ages: $x - 4$ and $x + 6$. So $(x-4)(x+6) = 119$, i.e. $x^{2} + 2x - 24 = 119$, giving $x^{2} + 2x - 143 = 0$.',
    steps: [{ step: 'Writes $(x-4)(x+6) = 119$', marks: 1 }, { step: 'Gives $x^{2} + 2x - 143 = 0$', marks: 1 }],
  },

  // Solving by factorisation
  {
    id: 'tb-qe-04', chapter: 'Quadratic Equations', topic: 'Solving by factorisation or formula', ref: `${CH4} · Solving by factorisation`,
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The roots of $x^{2} - 5x - 14 = 0$ are',
    options: ['$7$ and $-2$', '$-7$ and $2$', '$14$ and $-1$', '$7$ and $2$'],
    answer: 'Correct option: A) $7$ and $-2$, since $x^{2} - 5x - 14 = (x-7)(x+2)$.',
  },
  {
    id: 'tb-qe-05', chapter: 'Quadratic Equations', topic: 'Solving by factorisation or formula', ref: `${CH4} · Solving by factorisation`,
    type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the roots of $6x^{2} - x - 2 = 0$ by factorisation.',
    answer: '$6x^{2} - 4x + 3x - 2 = 2x(3x-2) + 1(3x-2) = (2x+1)(3x-2) = 0$. So $x = -\\frac{1}{2}$ or $x = \\frac{2}{3}$.',
    steps: [{ step: 'Splits the middle term and factorises to $(2x+1)(3x-2)$', marks: 1 }, { step: 'States both roots', marks: 1 }],
  },
  {
    id: 'tb-qe-06', chapter: 'Quadratic Equations', topic: 'Solving by factorisation or formula', ref: `${CH4} · Solving by factorisation`,
    type: 'short', complexity: 'hard', marks: 2,
    text: 'Solve $\\sqrt{2}\\,x^{2} + 3x + \\sqrt{2} = 0$ by factorisation.',
    answer: '$\\sqrt{2}x^{2} + 2x + x + \\sqrt{2} = \\sqrt{2}x(x + \\sqrt{2}) + 1(x + \\sqrt{2}) = (\\sqrt{2}x + 1)(x + \\sqrt{2}) = 0$. So $x = -\\frac{1}{\\sqrt{2}}$ or $x = -\\sqrt{2}$.',
    steps: [{ step: 'Splits $3x$ as $2x + x$ and factorises', marks: 1 }, { step: 'States both roots', marks: 1 }],
  },

  // Quadratic formula
  {
    id: 'tb-qe-07', chapter: 'Quadratic Equations', topic: 'Solving by factorisation or formula', ref: `${CH4} · Quadratic formula`,
    type: 'short', complexity: 'medium', marks: 2,
    text: 'Solve $x^{2} - 6x + 4 = 0$ using the quadratic formula.',
    answer: '$a = 1, b = -6, c = 4$. $D = 36 - 16 = 20$. $x = \\frac{6 \\pm \\sqrt{20}}{2} = 3 \\pm \\sqrt{5}$.',
    steps: [{ step: 'Finds $D = 20$', marks: 1 }, { step: 'Gives $x = 3 \\pm \\sqrt{5}$', marks: 1 }],
  },
  {
    id: 'tb-qe-08', chapter: 'Quadratic Equations', topic: 'Rational equations reducible to quadratics', ref: `${CH4} · Quadratic formula`,
    type: 'short', complexity: 'hard', marks: 3,
    text: 'Solve for $x$: $\\frac{1}{x+1} + \\frac{2}{x+2} = \\frac{4}{x+4}$, where $x \\neq -1, -2, -4$.',
    answer: 'Left side $= \\frac{(x+2) + 2(x+1)}{(x+1)(x+2)} = \\frac{3x+4}{(x+1)(x+2)}$. Cross-multiplying: $(3x+4)(x+4) = 4(x+1)(x+2)$, so $3x^{2} + 16x + 16 = 4x^{2} + 12x + 8$, i.e. $x^{2} - 4x - 8 = 0$. Then $x = \\frac{4 \\pm \\sqrt{16 + 32}}{2} = 2 \\pm 2\\sqrt{3}$. Neither is excluded.',
    steps: [{ step: 'Combines the left side into one fraction', marks: 1 }, { step: 'Reaches $x^{2} - 4x - 8 = 0$', marks: 1 }, { step: 'Solves to $x = 2 \\pm 2\\sqrt{3}$', marks: 1 }],
  },

  // Nature of roots
  {
    id: 'tb-qe-09', chapter: 'Quadratic Equations', topic: 'Nature of roots by discriminant', ref: `${CH4} · Nature of roots`,
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The equation $3x^{2} - 4x + 2 = 0$ has',
    options: ['two distinct real roots', 'two equal real roots', 'no real roots', 'more than two real roots'],
    answer: 'Correct option: C) no real roots, since $D = 16 - 24 = -8 < 0$.',
  },
  {
    id: 'tb-qe-10', chapter: 'Quadratic Equations', topic: 'Nature of roots by discriminant', ref: `${CH4} · Nature of roots`,
    type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the discriminant of $4x^{2} - 12x + 9 = 0$ and state the nature of its roots. If the roots are real, find them.',
    answer: '$D = 144 - 144 = 0$, so the roots are real and equal: $x = \\frac{12}{8} = \\frac{3}{2}$ (twice).',
    steps: [{ step: 'Finds $D = 0$ and says the roots are equal', marks: 1 }, { step: 'Finds $x = \\frac{3}{2}$', marks: 1 }],
  },
  {
    id: 'tb-qe-11', chapter: 'Quadratic Equations', topic: 'Value of k for equal roots', ref: `${CH4} · Nature of roots`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'Find the value of $k$ for which $kx^{2} - 6x + 3 = 0$ has two equal roots.',
    answer: 'Equal roots need $D = 0$: $36 - 12k = 0$, so $k = 3$.',
    steps: [{ step: 'Sets $36 - 12k = 0$', marks: 1 }, { step: 'Gets $k = 3$', marks: 1 }],
  },
  {
    id: 'tb-qe-12', chapter: 'Quadratic Equations', topic: 'Value of k for equal roots', ref: `${CH4} · Nature of roots`,
    type: 'short', complexity: 'hard', marks: 3,
    text: 'Find the values of $p$ for which $x^{2} + (p-3)x + p = 0$ has equal roots.',
    answer: '$D = (p-3)^{2} - 4p = p^{2} - 10p + 9 = (p-1)(p-9)$. Setting $D = 0$ gives $p = 1$ or $p = 9$.',
    steps: [{ step: 'Writes $D = (p-3)^{2} - 4p$', marks: 1 }, { step: 'Simplifies to $p^{2} - 10p + 9 = 0$', marks: 1 }, { step: 'Gets $p = 1$ or $p = 9$', marks: 1 }],
  },
  {
    id: 'tb-qe-13', chapter: 'Quadratic Equations', topic: 'Word problems', ref: `${CH4} · Nature of roots`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'Is it possible to fence a rectangular plot with 30 m of fencing so that it encloses $60 \\text{ m}^{2}$? If so, find its length and breadth.',
    answer: 'Length $+$ breadth $= 15$, so with length $l$, $l(15 - l) = 60$, i.e. $l^{2} - 15l + 60 = 0$. $D = 225 - 240 = -15 < 0$, so there are no real roots: such a plot is not possible.',
    steps: [{ step: 'Forms $l^{2} - 15l + 60 = 0$', marks: 1 }, { step: 'Finds $D = -15$', marks: 1 }, { step: 'Concludes it is not possible', marks: 1 }],
  },

  // Word problems
  {
    id: 'tb-qe-14', chapter: 'Quadratic Equations', topic: 'Word problems', ref: `${CH4} · Word problems`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'The sum of a positive number and twice its reciprocal is $\\frac{11}{3}$. Find the number.',
    answer: '$x + \\frac{2}{x} = \\frac{11}{3}$, so $3x^{2} - 11x + 6 = 0$, i.e. $(3x - 2)(x - 3) = 0$. The number is $3$ or $\\frac{2}{3}$ (both check: $3 + \\frac{2}{3} = \\frac{2}{3} + 3 = \\frac{11}{3}$).',
    steps: [{ step: 'Forms $x + \\frac{2}{x} = \\frac{11}{3}$', marks: 1 }, { step: 'Reaches $3x^{2} - 11x + 6 = 0$', marks: 1 }, { step: 'Finds $3$ and $\\frac{2}{3}$', marks: 1 }],
  },
  {
    id: 'tb-qe-15', chapter: 'Quadratic Equations', topic: 'Word problems', ref: `${CH4} · Word problems`,
    type: 'long', complexity: 'hard', marks: 5,
    text: 'A cyclist rides 48 km to a town and then rides back. On the way back she rides 4 km/h faster and takes 1 hour less. Find her speed on the way out.',
    answer: 'Let the outward speed be $x$ km/h. Times: $\\frac{48}{x}$ and $\\frac{48}{x+4}$. Then $\\frac{48}{x} - \\frac{48}{x+4} = 1$, so $48(x + 4 - x) = x(x+4)$, i.e. $x^{2} + 4x - 192 = 0$. So $(x + 16)(x - 12) = 0$ and, as speed is positive, $x = 12$ km/h. Check: 4 hours out, 3 hours back.',
    steps: [
      { step: 'Writes both times in terms of $x$', marks: 1 },
      { step: 'Forms $\\frac{48}{x} - \\frac{48}{x+4} = 1$', marks: 1 },
      { step: 'Reduces to $x^{2} + 4x - 192 = 0$', marks: 1 },
      { step: 'Factorises to $(x+16)(x-12) = 0$', marks: 1 },
      { step: 'Rejects $-16$ and states 12 km/h', marks: 1 },
    ],
  },
];

export const TEXTBOOK_QUESTIONS: Q[] = [
  ...REAL_NUMBERS, ...POLYNOMIALS, ...LINEAR_EQUATIONS, ...QUADRATIC, ...ARITHMETIC_PROGRESSIONS,
  ...TRIANGLES, ...COORDINATE_GEOMETRY, ...TRIGONOMETRY, ...CIRCLES, ...AREAS_CIRCLES,
  ...SURFACE_AREAS_VOLUMES, ...STATISTICS, ...PROBABILITY,
];

/**
 * One-to-one set: for each worked example and exercise question in the NCERT
 * book, one new question on the same skill (own context, numbers and wording),
 * pointing at the book item it matches ("Same skill as Ex 4.2 Q3").
 */
export const NCERT_MATCHED: Q[] = [
  ...NCERT_CH01, ...NCERT_CH02, ...NCERT_CH03, ...NCERT_CH04, ...NCERT_CH05, ...NCERT_CH06, ...NCERT_CH07, ...NCERT_CH08, ...NCERT_CH09, ...NCERT_CH10, ...NCERT_CH11, ...NCERT_CH12, ...NCERT_CH13, ...NCERT_CH14,
];

export const ALL_TEXTBOOK_QUESTIONS: Q[] = [...TEXTBOOK_QUESTIONS, ...NCERT_MATCHED];
