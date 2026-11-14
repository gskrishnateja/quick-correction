import type { TextbookQuestion } from './types.js';

const CH3 = 'NCERT Class 10 · Ch 3 Pair of Linear Equations in Two Variables';
const C = 'Pair of Linear Equations';

export const LINEAR_EQUATIONS: TextbookQuestion[] = [
  // Consistency conditions
  {
    id: 'tb-le-01', chapter: C, topic: 'Consistency conditions', ref: `${CH3} · Consistency of a pair`,
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The pair of equations $2x + 3y = 7$ and $6x + 9y = 11$ has',
    options: ['a unique solution', 'infinitely many solutions', 'no solution', 'exactly two solutions'],
    answer: 'Correct option: C) no solution. $\\frac{a_1}{a_2} = \\frac{2}{6} = \\frac{1}{3}$ and $\\frac{b_1}{b_2} = \\frac{3}{9} = \\frac{1}{3}$, but $\\frac{c_1}{c_2} = \\frac{7}{11} \\neq \\frac{1}{3}$, so the lines are parallel. A pair of lines can never have exactly two common points.',
  },

  // Finding unknown constants
  {
    id: 'tb-le-02', chapter: C, topic: 'Finding unknown constants', ref: `${CH3} · Consistency of a pair`,
    type: 'mcq', complexity: 'medium', marks: 1,
    text: 'For which value of $k$ does the pair $kx + 4y = 5$ and $3x + 2y = 1$ have no solution?',
    options: ['$2$', '$3$', '$6$', '$12$'],
    answer: 'Correct option: C) $6$. No solution needs $\\frac{k}{3} = \\frac{4}{2} \\neq \\frac{5}{1}$. So $k = 6$, and indeed $2 \\neq 5$. For the other values $\\frac{k}{3} \\neq 2$, which gives a unique solution.',
  },

  // Graphical solution
  {
    id: 'tb-le-03', chapter: C, topic: 'Graphical solution', ref: `${CH3} · Graphical method`,
    type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The lines $2x - y = 4$ and $x + 2y = 7$ are drawn on the same graph. They intersect at the point',
    options: ['$(2, 0)$', '$(3, 2)$', '$(1, 3)$', '$(4, 4)$'],
    answer: 'Correct option: B) $(3, 2)$, since $2(3) - 2 = 4$ and $3 + 2(2) = 7$. Points A and D lie only on the first line, and C lies only on the second.',
  },

  // Substitution and elimination
  {
    id: 'tb-le-04', chapter: C, topic: 'Substitution and elimination', ref: `${CH3} · Substitution method`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'Solve by substitution: $x + 2y = 9$ and $3x - y = 6$.',
    answer: 'From the first equation, $x = 9 - 2y$. Substituting: $3(9 - 2y) - y = 6$, so $27 - 7y = 6$ and $y = 3$. Then $x = 9 - 6 = 3$. Solution: $x = 3$, $y = 3$.',
    steps: [{ step: 'Expresses $x = 9 - 2y$ and substitutes', marks: 1 }, { step: 'Gets $y = 3$ and $x = 3$', marks: 1 }],
  },
  {
    id: 'tb-le-05', chapter: C, topic: 'Substitution and elimination', ref: `${CH3} · Elimination method`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'Solve by elimination: $5x + 3y = 31$ and $3x - 4y = -22$.',
    answer: 'Multiply the first equation by 4 and the second by 3: $20x + 12y = 124$ and $9x - 12y = -66$. Adding: $29x = 58$, so $x = 2$. Then $10 + 3y = 31$, so $y = 7$. Check: $3(2) - 4(7) = -22$.',
    steps: [
      { step: 'Makes the $y$-coefficients equal and opposite', marks: 1 },
      { step: 'Adds to get $x = 2$', marks: 1 },
      { step: 'Substitutes to get $y = 7$', marks: 1 },
    ],
  },

  // Consistency conditions (short)
  {
    id: 'tb-le-06', chapter: C, topic: 'Consistency conditions', ref: `${CH3} · Consistency of a pair`,
    type: 'short', complexity: 'medium', marks: 2,
    text: 'Without solving, say whether the lines in each pair intersect, are parallel, or coincide: (i) $3x - 5y = 8$ and $9x - 15y = 24$; (ii) $4x + y = 7$ and $x - 2y = 4$.',
    answer: '(i) $\\frac{3}{9} = \\frac{-5}{-15} = \\frac{8}{24} = \\frac{1}{3}$, so the lines coincide (infinitely many solutions). (ii) $\\frac{4}{1} \\neq \\frac{1}{-2}$, so the lines intersect at one point (unique solution).',
    steps: [{ step: 'Compares ratios in (i) and says the lines coincide', marks: 1 }, { step: 'Compares ratios in (ii) and says the lines intersect', marks: 1 }],
  },

  // Finding unknown constants (short)
  {
    id: 'tb-le-07', chapter: C, topic: 'Finding unknown constants', ref: `${CH3} · Consistency of a pair`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'Find $a$ and $b$ so that the pair $2x - 3y = 4$ and $(a + 2)x - (b - 1)y = 12$ has infinitely many solutions.',
    answer: 'Infinitely many solutions need $\\frac{2}{a + 2} = \\frac{-3}{-(b - 1)} = \\frac{4}{12} = \\frac{1}{3}$. So $a + 2 = 6$, giving $a = 4$, and $b - 1 = 9$, giving $b = 10$. The second equation becomes $6x - 9y = 12$, which is 3 times the first.',
    steps: [
      { step: 'Writes the condition $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$ with the ratio $\\frac{1}{3}$', marks: 1 },
      { step: 'Finds $a = 4$', marks: 1 },
      { step: 'Finds $b = 10$', marks: 1 },
    ],
  },

  // Word problems
  {
    id: 'tb-le-08', chapter: C, topic: 'Word problems', ref: `${CH3} · Forming a pair of equations`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'At a fruit stall, 3 kg of apples and 2 kg of bananas cost ₹540, while 2 kg of apples and 5 kg of bananas cost ₹470. Find the price of 1 kg of each fruit.',
    answer: 'Let apples cost ₹$a$ per kg and bananas ₹$b$ per kg. Then $3a + 2b = 540$ and $2a + 5b = 470$. Multiply by 5 and 2: $15a + 10b = 2700$ and $4a + 10b = 940$. Subtracting: $11a = 1760$, so $a = 160$. Then $2b = 540 - 480 = 60$, so $b = 30$. Apples ₹160 per kg, bananas ₹30 per kg.',
    steps: [
      { step: 'Forms $3a + 2b = 540$ and $2a + 5b = 470$', marks: 1 },
      { step: 'Eliminates a variable to get $a = 160$', marks: 1 },
      { step: 'Finds $b = 30$ and states both prices', marks: 1 },
    ],
  },

  // Finding unknown constants (hard)
  {
    id: 'tb-le-09', chapter: C, topic: 'Finding unknown constants', ref: `${CH3} · Consistency of a pair`,
    type: 'short', complexity: 'hard', marks: 3,
    text: 'For the pair $3x + my = 4$ and $mx + 12y = 8$, find the values of $m$ for which the pair has (i) a unique solution, (ii) no solution, (iii) infinitely many solutions.',
    answer: 'The pair fails to have a unique solution when $\\frac{3}{m} = \\frac{m}{12}$, i.e. $m^{2} = 36$, $m = \\pm 6$. For $m = 6$: $\\frac{3}{6} = \\frac{6}{12} = \\frac{4}{8} = \\frac{1}{2}$, so infinitely many solutions. For $m = -6$: $\\frac{3}{-6} = \\frac{-6}{12} = -\\frac{1}{2}$ but $\\frac{4}{8} = \\frac{1}{2}$, so no solution. Hence (i) unique solution for all $m \\neq \\pm 6$, (ii) no solution for $m = -6$, (iii) infinitely many for $m = 6$.',
    steps: [
      { step: 'Sets $\\frac{3}{m} = \\frac{m}{12}$ to get $m = \\pm 6$, so unique solution for $m \\neq \\pm 6$', marks: 1 },
      { step: 'Checks $m = -6$ gives no solution', marks: 1 },
      { step: 'Checks $m = 6$ gives infinitely many solutions', marks: 1 },
    ],
  },

  // Graphical solution (long)
  {
    id: 'tb-le-10', chapter: C, topic: 'Graphical solution', ref: `${CH3} · Graphical method`,
    type: 'long', complexity: 'medium', marks: 4,
    text: 'Solve $x + 2y = 6$ and $2x - y = 2$ graphically. Describe the points you would plot for each line, give the point of intersection, and find the area of the triangle formed by the two lines and the x-axis.',
    answer: 'For $x + 2y = 6$: points such as $(0, 3)$, $(6, 0)$, $(2, 2)$. For $2x - y = 2$: points such as $(0, -2)$, $(1, 0)$, $(2, 2)$. The lines meet at $(2, 2)$, so $x = 2$, $y = 2$. They cut the x-axis at $(6, 0)$ and $(1, 0)$. The triangle has base $6 - 1 = 5$ units along the x-axis and height 2 units (the y-coordinate of $(2, 2)$), so area $= \\frac{1}{2} \\times 5 \\times 2 = 5$ square units.',
    steps: [
      { step: 'Gives at least two correct points on each line', marks: 1 },
      { step: 'Identifies the intersection $(2, 2)$', marks: 1 },
      { step: 'Finds the x-intercepts $(6, 0)$ and $(1, 0)$', marks: 1 },
      { step: 'Finds area $= 5$ square units', marks: 1 },
    ],
  },

  // Word problem (long)
  {
    id: 'tb-le-11', chapter: C, topic: 'Word problems', ref: `${CH3} · Forming a pair of equations`,
    type: 'long', complexity: 'hard', marks: 5,
    text: 'Eight years ago, a mother was 7 times as old as her daughter. Four years from now, she will be 3 times as old as her daughter. Find their present ages. After how many more years will the mother be exactly twice as old as her daughter?',
    answer: 'Let the present ages be $m$ (mother) and $d$ (daughter). Then $m - 8 = 7(d - 8)$, i.e. $m - 7d = -48$, and $m + 4 = 3(d + 4)$, i.e. $m - 3d = 8$. Subtracting: $4d = 56$, so $d = 14$ and $m = 50$. Check: $42 = 7 \\times 6$ and $54 = 3 \\times 18$. For twice: $50 + t = 2(14 + t)$, so $t = 22$ years.',
    steps: [
      { step: 'Forms $m - 7d = -48$', marks: 1 },
      { step: 'Forms $m - 3d = 8$', marks: 1 },
      { step: 'Solves to get $d = 14$', marks: 1 },
      { step: 'Gets $m = 50$', marks: 1 },
      { step: 'Solves $50 + t = 2(14 + t)$ to get 22 years', marks: 1 },
    ],
  },
];
