import type { TextbookQuestion } from './types.js';

const CH = 'NCERT Class 10 · Ch 5 Arithmetic Progressions';
const C = 'Arithmetic Progressions';

export const ARITHMETIC_PROGRESSIONS: TextbookQuestion[] = [
  {
    id: 'tb-ap-01', chapter: C, topic: 'Recognising an AP', ref: `${CH} · Recognising an AP`,
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Which of the following lists is an arithmetic progression?',
    options: ['$3, 6, 12, 24, \\ldots$', '$1^{2}, 2^{2}, 3^{2}, 4^{2}, \\ldots$', '$\\sqrt{3}, \\sqrt{12}, \\sqrt{27}, \\sqrt{48}, \\ldots$', '$\\frac{1}{2}, \\frac{1}{3}, \\frac{1}{4}, \\frac{1}{5}, \\ldots$'],
    answer: 'Correct option: C) $\\sqrt{3}, \\sqrt{12}, \\sqrt{27}, \\sqrt{48}, \\ldots$. These are $\\sqrt{3}, 2\\sqrt{3}, 3\\sqrt{3}, 4\\sqrt{3}$, so each term is $\\sqrt{3}$ more than the one before. In A the terms double, in B the differences are $3, 5, 7$, and in D the differences are $-\\frac{1}{6}, -\\frac{1}{12}, -\\frac{1}{20}$, none of which is constant.',
  },
  {
    id: 'tb-ap-02', chapter: C, topic: 'Common difference', ref: `${CH} · Common difference`,
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The common difference of the AP $\\frac{7}{4}, \\frac{5}{4}, \\frac{3}{4}, \\ldots$ is',
    options: ['$\\frac{1}{2}$', '$-\\frac{1}{2}$', '$-\\frac{1}{4}$', '$\\frac{3}{4}$'],
    answer: 'Correct option: B) $-\\frac{1}{2}$, since $d = \\frac{5}{4} - \\frac{7}{4} = -\\frac{2}{4} = -\\frac{1}{2}$. The terms decrease, so $d$ cannot be positive; $-\\frac{1}{4}$ forgets that the difference of the numerators is 2.',
  },
  {
    id: 'tb-ap-03', chapter: C, topic: 'nth term', ref: `${CH} · nth term`,
    type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The 15th term of the AP $11, 8, 5, \\ldots$ is',
    options: ['$-31$', '$-34$', '$53$', '$-28$'],
    answer: 'Correct option: A) $-31$. Here $a = 11$ and $d = -3$, so $a_{15} = 11 + 14(-3) = -31$. Option B is the 16th term and option D is the 14th term; option C uses $d = +3$.',
  },
  {
    id: 'tb-ap-04', chapter: C, topic: 'Finding n', ref: `${CH} · nth term`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'Which term of the AP $7, 13, 19, \\ldots$ is $205$?',
    answer: '$a = 7$, $d = 6$. $7 + (n-1)6 = 205$ gives $(n-1)6 = 198$, so $n - 1 = 33$ and $n = 34$. The 34th term is 205.',
    steps: [{ step: 'Writes $7 + (n-1)6 = 205$', marks: 1 }, { step: 'Gets $n = 34$', marks: 1 }],
  },
  {
    id: 'tb-ap-05', chapter: C, topic: 'Middle terms and conditions for an AP', ref: `${CH} · Arithmetic progressions`,
    type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the value of $k$ for which $2k + 1$, $3k + 3$ and $5k - 1$ are three consecutive terms of an AP. Also write the three terms.',
    answer: 'For consecutive terms of an AP, twice the middle term equals the sum of the other two: $2(3k + 3) = (2k + 1) + (5k - 1)$, so $6k + 6 = 7k$ and $k = 6$. The terms are $13, 21, 29$ (common difference 8).',
    steps: [{ step: 'Uses $2(3k+3) = (2k+1) + (5k-1)$', marks: 1 }, { step: 'Gets $k = 6$ and the terms $13, 21, 29$', marks: 1 }],
  },
  {
    id: 'tb-ap-06', chapter: C, topic: 'Sum of n terms', ref: `${CH} · Sum of first n terms`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the sum of all two-digit numbers that leave a remainder of 3 when divided by 5.',
    answer: 'The numbers are $13, 18, 23, \\ldots, 98$, an AP with $a = 13$, $d = 5$, last term $98$. Number of terms: $13 + (n-1)5 = 98$ gives $n = 18$. Sum $= \\frac{18}{2}(13 + 98) = 9 \\times 111 = 999$.',
    steps: [{ step: 'Identifies the AP $13, 18, \\ldots, 98$', marks: 1 }, { step: 'Finds $n = 18$', marks: 1 }, { step: 'Finds the sum $999$', marks: 1 }],
  },
  {
    id: 'tb-ap-07', chapter: C, topic: 'nth term', ref: `${CH} · nth term`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'In an AP, the sum of the 4th and 8th terms is 34, and the sum of the 6th and 10th terms is 46. Find the first three terms of the AP.',
    answer: '$(a + 3d) + (a + 7d) = 34$ gives $2a + 10d = 34$. $(a + 5d) + (a + 9d) = 46$ gives $2a + 14d = 46$. Subtracting, $4d = 12$, so $d = 3$, and then $2a = 4$, so $a = 2$. The first three terms are $2, 5, 8$.',
    steps: [{ step: 'Forms $2a + 10d = 34$ and $2a + 14d = 46$', marks: 1 }, { step: 'Solves to get $d = 3$, $a = 2$', marks: 1 }, { step: 'Writes $2, 5, 8$', marks: 1 }],
  },
  {
    id: 'tb-ap-08', chapter: C, topic: 'Finding n', ref: `${CH} · Sum of first n terms`,
    type: 'short', complexity: 'hard', marks: 3,
    text: 'How many terms of the AP $24, 21, 18, \\ldots$ must be added to get a sum of 78? Explain why there are two answers.',
    answer: '$S_n = \\frac{n}{2}[48 + (n-1)(-3)] = \\frac{n}{2}(51 - 3n) = 78$, so $3n^{2} - 51n + 156 = 0$, i.e. $n^{2} - 17n + 52 = 0$, giving $(n - 4)(n - 13) = 0$. So $n = 4$ or $n = 13$. Both work because the 5th to 13th terms ($12, 9, \\ldots, -12$) add up to zero, so adding them does not change the sum.',
    steps: [{ step: 'Forms $\\frac{n}{2}(51 - 3n) = 78$', marks: 1 }, { step: 'Solves $n^{2} - 17n + 52 = 0$ to get $n = 4$ or $13$', marks: 1 }, { step: 'Explains that the 5th to 13th terms sum to zero', marks: 1 }],
  },
  {
    id: 'tb-ap-09', chapter: C, topic: 'Word problems', ref: `${CH} · Sum of first n terms`,
    type: 'long', complexity: 'medium', marks: 4,
    text: 'Meera saves ₹500 in the first month of a savings plan and then increases her monthly saving by ₹150 every month. (i) In which month will she save ₹3,050? (ii) What will her total savings be by the end of that month?',
    answer: '(i) Monthly savings form an AP with $a = 500$, $d = 150$. $500 + (n-1)150 = 3050$ gives $(n-1)150 = 2550$, so $n - 1 = 17$ and $n = 18$: the 18th month. (ii) $S_{18} = \\frac{18}{2}(500 + 3050) = 9 \\times 3550 = ₹31{,}950$.',
    steps: [
      { step: 'Identifies the AP with $a = 500$, $d = 150$', marks: 1 },
      { step: 'Solves $500 + (n-1)150 = 3050$ to get $n = 18$', marks: 1 },
      { step: 'Uses $S_{18} = \\frac{18}{2}(500 + 3050)$', marks: 1 },
      { step: 'Gets ₹31,950', marks: 1 },
    ],
  },
  {
    id: 'tb-ap-10', chapter: C, topic: 'Sum of n terms', ref: `${CH} · Sum of first n terms`,
    type: 'long', complexity: 'hard', marks: 5,
    text: 'The sum of the first $n$ terms of an AP is $S_n = 3n^{2} + 5n$. (i) Find the first term and the common difference. (ii) Find the 20th term. (iii) Which term of the AP is 152? (iv) Find the sum of the 11th to the 20th terms.',
    answer: '(i) $a_1 = S_1 = 8$. $S_2 = 12 + 10 = 22$, so $a_2 = 22 - 8 = 14$ and $d = 6$. (ii) $a_n = 8 + (n-1)6 = 6n + 2$, so $a_{20} = 122$. (iii) $6n + 2 = 152$ gives $n = 25$: the 25th term. (iv) $S_{20} - S_{10} = (1200 + 100) - (300 + 50) = 1300 - 350 = 950$.',
    steps: [
      { step: 'Finds $a_1 = S_1 = 8$', marks: 1 },
      { step: 'Finds $a_2 = 14$ and $d = 6$', marks: 1 },
      { step: 'Finds $a_{20} = 122$', marks: 1 },
      { step: 'Finds that 152 is the 25th term', marks: 1 },
      { step: 'Finds $S_{20} - S_{10} = 950$', marks: 1 },
    ],
  },
];
