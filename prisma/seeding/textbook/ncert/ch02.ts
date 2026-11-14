import type { TextbookQuestion } from '../types.js';

const R = 'NCERT Class 10 · Ch 2 Polynomials · Same skill as';
const C = 'Polynomials';

export const NCERT_CH02: TextbookQuestion[] = [
  {
    id: 'nc-02-ex01', chapter: C, topic: 'Zeroes from a graph', ref: `${R} Example 1`,
    type: 'long', complexity: 'easy', marks: 4,
    text: 'Each description below is of the graph of $y = p(x)$ for some polynomial $p(x)$. State the number of zeroes of $p(x)$ in each case, with a reason. (i) A parabola opening downwards whose highest point lies exactly on the $x$-axis at $(2, 0)$. (ii) A curve that crosses the $x$-axis at $x = -3$, $x = 1$ and $x = 4$ and nowhere else. (iii) A parabola opening upwards whose lowest point is $(1, 5)$. (iv) A wavy curve that cuts the $x$-axis at exactly four distinct points.',
    answer: 'The number of zeroes equals the number of points where the graph meets the $x$-axis. (i) $1$: the graph touches the $x$-axis only at $(2, 0)$. (ii) $3$: it meets the axis at three points. (iii) $0$: the lowest point is above the axis, so the whole graph lies above it and never meets it. (iv) $4$: it meets the axis at four points.',
    steps: [
      { step: '(i) 1 zero', marks: 1 },
      { step: '(ii) 3 zeroes', marks: 1 },
      { step: '(iii) 0 zeroes, since the graph lies wholly above the $x$-axis', marks: 1 },
      { step: '(iv) 4 zeroes', marks: 1 },
    ],
  },

  // Exercise 2.1
  {
    id: 'nc-02-2-1-q01', chapter: C, topic: 'Zeroes from a graph', ref: `${R} Ex 2.1 Q1`,
    type: 'long', complexity: 'easy', marks: 4,
    text: 'The graphs of $y = p(x)$ for four polynomials are described below. Find the number of zeroes of $p(x)$ in each case. (i) A straight line parallel to the $x$-axis, passing through $(0, 3)$. (ii) A slanting straight line passing through $(0, -2)$ and $(1, 0)$. (iii) A curve that crosses the $x$-axis at $x = -2$ and just touches it (without crossing) at $x = 1$, meeting it nowhere else. (iv) A curve that rises, falls and rises again, but meets the $x$-axis only once, at $x = 2$.',
    answer: '(i) $0$: the line $y = 3$ never meets the $x$-axis. (ii) $1$: the line meets the $x$-axis only at $(1, 0)$. (iii) $2$: the graph meets the $x$-axis at two points, $x = -2$ and $x = 1$. (iv) $1$: it meets the $x$-axis at one point only.',
    steps: [
      { step: '(i) 0', marks: 1 },
      { step: '(ii) 1', marks: 1 },
      { step: '(iii) 2', marks: 1 },
      { step: '(iv) 1', marks: 1 },
    ],
  },
  {
    id: 'nc-02-ex02', chapter: C, topic: 'Zeroes and coefficients', ref: `${R} Example 2`,
    type: 'short', complexity: 'easy', marks: 3,
    text: 'Find the zeroes of $x^{2} + 9x + 20$ and verify the relationship between its zeroes and coefficients.',
    answer: '$x^{2} + 9x + 20 = (x + 4)(x + 5)$, so the zeroes are $-4$ and $-5$. Sum $= -4 + (-5) = -9 = -\\frac{9}{1} = -\\frac{\\text{coefficient of } x}{\\text{coefficient of } x^{2}}$. Product $= (-4)(-5) = 20 = \\frac{20}{1} = \\frac{\\text{constant term}}{\\text{coefficient of } x^{2}}$. Verified.',
    steps: [
      { step: 'Factorises as $(x + 4)(x + 5)$', marks: 1 },
      { step: 'States zeroes $-4$ and $-5$', marks: 1 },
      { step: 'Verifies sum $= -9$ and product $= 20$', marks: 1 },
    ],
  },
  {
    id: 'nc-02-ex03', chapter: C, topic: 'Zeroes and coefficients', ref: `${R} Example 3`,
    type: 'short', complexity: 'easy', marks: 3,
    text: 'Find the zeroes of $x^{2} - 7$ and verify the relationship between its zeroes and coefficients.',
    answer: '$x^{2} - 7 = (x - \\sqrt{7})(x + \\sqrt{7})$, so the zeroes are $\\sqrt{7}$ and $-\\sqrt{7}$. Here $a = 1$, $b = 0$, $c = -7$. Sum $= \\sqrt{7} + (-\\sqrt{7}) = 0 = -\\frac{b}{a}$. Product $= (\\sqrt{7})(-\\sqrt{7}) = -7 = \\frac{c}{a}$. Verified.',
    steps: [
      { step: 'Factorises using $a^{2} - b^{2}$', marks: 1 },
      { step: 'States zeroes $\\pm\\sqrt{7}$', marks: 1 },
      { step: 'Verifies sum $= 0$ and product $= -7$', marks: 1 },
    ],
  },
  {
    id: 'nc-02-ex04', chapter: C, topic: 'Forming a polynomial from zeroes', ref: `${R} Example 4`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'Find a quadratic polynomial whose zeroes have sum $4$ and product $-5$.',
    answer: 'A quadratic with zero-sum $S$ and zero-product $P$ is $k(x^{2} - Sx + P)$. With $S = 4$, $P = -5$ and $k = 1$: $x^{2} - 4x - 5$. (Any $k(x^{2} - 4x - 5)$, $k \\neq 0$, also works. Check: zeroes are $5$ and $-1$, sum $4$, product $-5$.)',
    steps: [
      { step: 'Uses $x^{2} - (\\text{sum})x + \\text{product}$', marks: 1 },
      { step: 'Gets $x^{2} - 4x - 5$', marks: 1 },
    ],
  },
  {
    id: 'nc-02-ex05', chapter: C, topic: 'Cubic polynomials: zeroes and coefficients', ref: `${R} Example 5`,
    type: 'long', complexity: 'hard', marks: 4,
    text: 'Show that $2$, $-3$ and $\\frac{1}{2}$ are the zeroes of $p(x) = 2x^{3} + x^{2} - 13x + 6$, and then verify the relationships between the zeroes and the coefficients.',
    answer: '$p(2) = 16 + 4 - 26 + 6 = 0$; $p(-3) = -54 + 9 + 39 + 6 = 0$; $p\\left(\\frac{1}{2}\\right) = \\frac{1}{4} + \\frac{1}{4} - \\frac{13}{2} + 6 = 0$. So the zeroes are $\\alpha = 2$, $\\beta = -3$, $\\gamma = \\frac{1}{2}$. Here $a = 2$, $b = 1$, $c = -13$, $d = 6$. $\\alpha + \\beta + \\gamma = 2 - 3 + \\frac{1}{2} = -\\frac{1}{2} = -\\frac{b}{a}$. $\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha = -6 - \\frac{3}{2} + 1 = -\\frac{13}{2} = \\frac{c}{a}$. $\\alpha\\beta\\gamma = 2 \\times (-3) \\times \\frac{1}{2} = -3 = -\\frac{6}{2} = -\\frac{d}{a}$. All three relationships hold.',
    steps: [
      { step: 'Shows $p(2) = p(-3) = p(\\frac{1}{2}) = 0$', marks: 1 },
      { step: 'Verifies sum of zeroes $= -\\frac{b}{a} = -\\frac{1}{2}$', marks: 1 },
      { step: 'Verifies sum of products in pairs $= \\frac{c}{a} = -\\frac{13}{2}$', marks: 1 },
      { step: 'Verifies product $= -\\frac{d}{a} = -3$', marks: 1 },
    ],
  },

  // Exercise 2.2
  {
    id: 'nc-02-2-2-q01', chapter: C, topic: 'Zeroes and coefficients', ref: `${R} Ex 2.2 Q1`,
    type: 'long', complexity: 'medium', marks: 4,
    text: 'Find the zeroes of each quadratic polynomial and verify the relationship between the zeroes and the coefficients: (i) $9y^{2} - 6y + 1$ (ii) $10x^{2} - 3 - 13x$ (iii) $5v^{2} + 15v$ (iv) $p^{2} - 11$',
    answer: '(i) $9y^{2} - 6y + 1 = (3y - 1)^{2}$; zeroes $\\frac{1}{3}, \\frac{1}{3}$. Sum $\\frac{2}{3} = -\\frac{-6}{9}$, product $\\frac{1}{9} = \\frac{1}{9}$. (ii) $10x^{2} - 13x - 3 = (2x - 3)(5x + 1)$; zeroes $\\frac{3}{2}, -\\frac{1}{5}$. Sum $\\frac{13}{10} = -\\frac{-13}{10}$, product $-\\frac{3}{10} = \\frac{-3}{10}$. (iii) $5v^{2} + 15v = 5v(v + 3)$; zeroes $0, -3$. Sum $-3 = -\\frac{15}{5}$, product $0 = \\frac{0}{5}$. (iv) $p^{2} - 11 = (p - \\sqrt{11})(p + \\sqrt{11})$; zeroes $\\pm\\sqrt{11}$. Sum $0 = -\\frac{0}{1}$, product $-11 = \\frac{-11}{1}$.',
    steps: [
      { step: '(i) Zeroes $\\frac{1}{3}, \\frac{1}{3}$ with verification', marks: 1 },
      { step: '(ii) Zeroes $\\frac{3}{2}, -\\frac{1}{5}$ with verification', marks: 1 },
      { step: '(iii) Zeroes $0, -3$ with verification', marks: 1 },
      { step: '(iv) Zeroes $\\pm\\sqrt{11}$ with verification', marks: 1 },
    ],
  },
  {
    id: 'nc-02-2-2-q02', chapter: C, topic: 'Forming a polynomial from zeroes', ref: `${R} Ex 2.2 Q2`,
    type: 'long', complexity: 'medium', marks: 4,
    text: 'Find a quadratic polynomial whose sum and product of zeroes are, respectively: (i) $\\frac{1}{3}$, $-2$ (ii) $\\sqrt{3}$, $\\frac{1}{4}$ (iii) $0$, $-\\sqrt{2}$ (iv) $-\\frac{3}{2}$, $\\frac{1}{2}$',
    answer: 'Use $k\\left(x^{2} - Sx + P\\right)$. (i) $x^{2} - \\frac{1}{3}x - 2$; with $k = 3$: $3x^{2} - x - 6$. (ii) $x^{2} - \\sqrt{3}x + \\frac{1}{4}$; with $k = 4$: $4x^{2} - 4\\sqrt{3}x + 1$. (iii) $x^{2} - 0 \\cdot x - \\sqrt{2} = x^{2} - \\sqrt{2}$. (iv) $x^{2} + \\frac{3}{2}x + \\frac{1}{2}$; with $k = 2$: $2x^{2} + 3x + 1$.',
    steps: [
      { step: '(i) $3x^{2} - x - 6$', marks: 1 },
      { step: '(ii) $4x^{2} - 4\\sqrt{3}x + 1$', marks: 1 },
      { step: '(iii) $x^{2} - \\sqrt{2}$', marks: 1 },
      { step: '(iv) $2x^{2} + 3x + 1$', marks: 1 },
    ],
  },
];
