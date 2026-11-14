import type { TextbookQuestion } from './types.js';

const CH2 = 'NCERT Class 10 · Ch 2 Polynomials';
const C = 'Polynomials';

export const POLYNOMIALS: TextbookQuestion[] = [
  // Zeroes and coefficients
  {
    id: 'tb-po-01', chapter: C, topic: 'Zeroes and coefficients', ref: `${CH2} · Zeroes and coefficients`,
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'For the polynomial $3x^{2} - 7x + 2$, the sum and product of the zeroes are',
    options: ['sum $-\\frac{7}{3}$, product $\\frac{2}{3}$', 'sum $\\frac{7}{3}$, product $\\frac{2}{3}$', 'sum $\\frac{7}{3}$, product $-\\frac{2}{3}$', 'sum $\\frac{2}{3}$, product $\\frac{7}{3}$'],
    answer: 'Correct option: B) sum $\\frac{7}{3}$, product $\\frac{2}{3}$. With $a = 3, b = -7, c = 2$: sum $= -\\frac{b}{a} = \\frac{7}{3}$ and product $= \\frac{c}{a} = \\frac{2}{3}$.',
  },

  // Zeroes from a graph
  {
    id: 'tb-po-02', chapter: C, topic: 'Zeroes from a graph', ref: `${CH2} · Geometrical meaning of zeroes`,
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The graph of $y = p(x)$ crosses the x-axis at exactly three points, $x = -3$, $x = 0$ and $x = 4$, and does not meet it anywhere else. The number of zeroes of $p(x)$ is',
    options: ['$1$', '$2$', '$3$', '$4$'],
    answer: 'Correct option: C) $3$. The zeroes of $p(x)$ are the x-coordinates of the points where the graph meets the x-axis, and there are three such points.',
  },

  // Value of k from a zero
  {
    id: 'tb-po-03', chapter: C, topic: 'Value of k from a zero', ref: `${CH2} · Zeroes of a polynomial`,
    type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $x = -2$ is a zero of $2x^{2} + kx - 6$, then $k$ equals',
    options: ['$-1$', '$1$', '$7$', '$-7$'],
    answer: 'Correct option: B) $1$. Putting $x = -2$: $2(4) - 2k - 6 = 0$, so $2 - 2k = 0$ and $k = 1$.',
  },

  // Forming a polynomial from zeroes
  {
    id: 'tb-po-04', chapter: C, topic: 'Forming a polynomial from zeroes', ref: `${CH2} · Forming a quadratic polynomial`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'Find a quadratic polynomial whose zeroes are $2 + \\sqrt{3}$ and $2 - \\sqrt{3}$.',
    answer: 'Sum $= 4$, product $= (2 + \\sqrt{3})(2 - \\sqrt{3}) = 4 - 3 = 1$. A required polynomial is $x^{2} - 4x + 1$ (or any non-zero multiple of it).',
    steps: [{ step: 'Finds sum $= 4$ and product $= 1$', marks: 1 }, { step: 'Writes $x^{2} - 4x + 1$', marks: 1 }],
  },

  // Finding zeroes of a quadratic
  {
    id: 'tb-po-05', chapter: C, topic: 'Finding zeroes of a quadratic', ref: `${CH2} · Zeroes and coefficients`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the zeroes of $6x^{2} - 7x - 3$ and verify the relationship between the zeroes and the coefficients.',
    answer: '$6x^{2} - 9x + 2x - 3 = 3x(2x - 3) + 1(2x - 3) = (3x + 1)(2x - 3)$. Zeroes: $\\frac{3}{2}$ and $-\\frac{1}{3}$. Sum $= \\frac{3}{2} - \\frac{1}{3} = \\frac{7}{6} = -\\frac{b}{a}$. Product $= -\\frac{1}{2} = -\\frac{3}{6} = \\frac{c}{a}$.',
    steps: [
      { step: 'Factorises to $(3x + 1)(2x - 3)$', marks: 1 },
      { step: 'States the zeroes $\\frac{3}{2}$ and $-\\frac{1}{3}$', marks: 1 },
      { step: 'Verifies both sum and product', marks: 1 },
    ],
  },
  {
    id: 'tb-po-06', chapter: C, topic: 'Finding zeroes of a quadratic', ref: `${CH2} · Zeroes of a polynomial`,
    type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the zeroes of $x^{2} - 2\\sqrt{2}\\,x - 6$.',
    answer: 'We need two numbers with product $-6$ and sum $-2\\sqrt{2}$: these are $-3\\sqrt{2}$ and $\\sqrt{2}$. So $x^{2} - 3\\sqrt{2}x + \\sqrt{2}x - 6 = x(x - 3\\sqrt{2}) + \\sqrt{2}(x - 3\\sqrt{2}) = (x + \\sqrt{2})(x - 3\\sqrt{2})$. Zeroes: $3\\sqrt{2}$ and $-\\sqrt{2}$.',
    steps: [{ step: 'Splits the middle term and factorises to $(x + \\sqrt{2})(x - 3\\sqrt{2})$', marks: 1 }, { step: 'States the zeroes $3\\sqrt{2}$ and $-\\sqrt{2}$', marks: 1 }],
  },

  // Number and nature of zeroes
  {
    id: 'tb-po-07', chapter: C, topic: 'Number and nature of zeroes', ref: `${CH2} · Geometrical meaning of zeroes`,
    type: 'short', complexity: 'medium', marks: 2,
    text: 'Show that the polynomial $x^{2} - 4x + 7$ has no real zeroes. What does this tell you about the graph of $y = x^{2} - 4x + 7$?',
    answer: '$x^{2} - 4x + 7 = (x - 2)^{2} + 3$. Since $(x - 2)^{2} \\geq 0$, the value is always at least 3, so it is never 0 and there are no real zeroes. The graph is a parabola opening upward that lies entirely above the x-axis and never meets it.',
    steps: [{ step: 'Writes it as $(x - 2)^{2} + 3$ and argues it is never zero', marks: 1 }, { step: 'States that the graph does not meet the x-axis', marks: 1 }],
  },

  // Unknown coefficients from conditions on zeroes
  {
    id: 'tb-po-08', chapter: C, topic: 'Unknown coefficients from conditions on zeroes', ref: `${CH2} · Zeroes and coefficients`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'One zero of $2x^{2} - 9x + k$ is twice the other. Find $k$ and both zeroes.',
    answer: 'Let the zeroes be $\\alpha$ and $2\\alpha$. Sum: $3\\alpha = \\frac{9}{2}$, so $\\alpha = \\frac{3}{2}$. Product: $2\\alpha^{2} = \\frac{k}{2}$, so $2 \\times \\frac{9}{4} = \\frac{k}{2}$, giving $k = 9$. The zeroes are $\\frac{3}{2}$ and $3$. Check: $2x^{2} - 9x + 9 = (2x - 3)(x - 3)$.',
    steps: [
      { step: 'Takes zeroes $\\alpha$, $2\\alpha$ and uses the sum to get $\\alpha = \\frac{3}{2}$', marks: 1 },
      { step: 'Uses the product to get $k = 9$', marks: 1 },
      { step: 'States the zeroes $\\frac{3}{2}$ and $3$', marks: 1 },
    ],
  },

  // Zeroes and coefficients (symmetric expressions)
  {
    id: 'tb-po-09', chapter: C, topic: 'Zeroes and coefficients', ref: `${CH2} · Zeroes and coefficients`,
    type: 'short', complexity: 'hard', marks: 3,
    text: 'If $\\alpha$ and $\\beta$ are the zeroes of $x^{2} - 5x + 3$, find a quadratic polynomial whose zeroes are $\\alpha^{2}$ and $\\beta^{2}$.',
    answer: '$\\alpha + \\beta = 5$ and $\\alpha\\beta = 3$. Sum of new zeroes: $\\alpha^{2} + \\beta^{2} = (\\alpha + \\beta)^{2} - 2\\alpha\\beta = 25 - 6 = 19$. Product: $\\alpha^{2}\\beta^{2} = (\\alpha\\beta)^{2} = 9$. A required polynomial is $x^{2} - 19x + 9$.',
    steps: [
      { step: 'Writes $\\alpha + \\beta = 5$, $\\alpha\\beta = 3$', marks: 1 },
      { step: 'Finds $\\alpha^{2} + \\beta^{2} = 19$ and $\\alpha^{2}\\beta^{2} = 9$', marks: 1 },
      { step: 'Writes $x^{2} - 19x + 9$', marks: 1 },
    ],
  },
  {
    id: 'tb-po-10', chapter: C, topic: 'Unknown coefficients from conditions on zeroes', ref: `${CH2} · Zeroes and coefficients`,
    type: 'long', complexity: 'medium', marks: 4,
    text: 'The zeroes $\\alpha$ and $\\beta$ of $x^{2} - 8x + k$ satisfy $\\alpha^{2} + \\beta^{2} = 40$. Find $k$, find the zeroes, and check that they satisfy the given condition.',
    answer: '$\\alpha + \\beta = 8$, $\\alpha\\beta = k$. Then $\\alpha^{2} + \\beta^{2} = (\\alpha + \\beta)^{2} - 2\\alpha\\beta = 64 - 2k = 40$, so $k = 12$. The polynomial is $x^{2} - 8x + 12 = (x - 2)(x - 6)$, with zeroes 2 and 6. Check: $2^{2} + 6^{2} = 4 + 36 = 40$.',
    steps: [
      { step: 'Writes $\\alpha + \\beta = 8$ and $\\alpha\\beta = k$', marks: 1 },
      { step: 'Uses $\\alpha^{2} + \\beta^{2} = (\\alpha + \\beta)^{2} - 2\\alpha\\beta$ to get $k = 12$', marks: 1 },
      { step: 'Factorises and finds zeroes 2 and 6', marks: 1 },
      { step: 'Checks $4 + 36 = 40$', marks: 1 },
    ],
  },

  // Zeroes from a graph (long)
  {
    id: 'tb-po-11', chapter: C, topic: 'Zeroes from a graph', ref: `${CH2} · Geometrical meaning of zeroes`,
    type: 'long', complexity: 'hard', marks: 5,
    text: 'The graph of a quadratic polynomial $y = p(x)$ is a parabola that crosses the x-axis at $(-1, 0)$ and $(5, 0)$ and crosses the y-axis at $(0, -10)$. (i) How many zeroes does $p(x)$ have, and what are they? (ii) Find $p(x)$. (iii) Verify the relationship between its zeroes and coefficients.',
    answer: '(i) Two zeroes, $-1$ and $5$, since the graph meets the x-axis at two points. (ii) $p(x) = k(x + 1)(x - 5)$. As $p(0) = -10$: $k(1)(-5) = -10$, so $k = 2$ and $p(x) = 2(x^{2} - 4x - 5) = 2x^{2} - 8x - 10$. (iii) Sum $= -1 + 5 = 4 = -\\frac{-8}{2}$; product $= -5 = \\frac{-10}{2}$.',
    steps: [
      { step: 'States two zeroes, $-1$ and $5$', marks: 1 },
      { step: 'Writes $p(x) = k(x + 1)(x - 5)$', marks: 1 },
      { step: 'Uses the y-intercept to get $k = 2$', marks: 1 },
      { step: 'Writes $p(x) = 2x^{2} - 8x - 10$', marks: 1 },
      { step: 'Verifies both sum and product', marks: 1 },
    ],
  },
];
