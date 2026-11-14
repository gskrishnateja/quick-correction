import type { TextbookQuestion } from '../types.js';

const R = 'NCERT Class 10 · Ch 1 Real Numbers · Same skill as';
const C = 'Real Numbers';

export const NCERT_CH01: TextbookQuestion[] = [
  {
    id: 'nc-01-ex01', chapter: C, topic: 'Fundamental theorem of arithmetic', ref: `${R} Example 1`,
    type: 'short', complexity: 'medium', marks: 2,
    text: 'For a natural number $n$, can the number $8^{n}$ ever have $0$ as its last digit? Justify your answer using prime factorisation.',
    answer: 'A number ending in $0$ is divisible by $10 = 2 \\times 5$, so its prime factorisation must contain the prime $5$. But $8^{n} = 2^{3n}$, so its only prime factor is $2$. By the uniqueness part of the Fundamental Theorem of Arithmetic, no other prime (in particular $5$) can appear. Hence $8^{n}$ never ends in $0$ for any natural number $n$.',
    steps: [
      { step: 'States that ending in 0 needs the prime factor 5', marks: 1 },
      { step: 'Writes $8^{n} = 2^{3n}$ and uses uniqueness of factorisation to conclude it cannot end in 0', marks: 1 },
    ],
  },
  {
    id: 'nc-01-ex02', chapter: C, topic: 'HCF and LCM by prime factorisation', ref: `${R} Example 2`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'Using prime factorisation, find the HCF and LCM of $15$ and $36$.',
    answer: '$15 = 3 \\times 5$ and $36 = 2^{2} \\times 3^{2}$. HCF = product of the smallest powers of the common primes $= 3^{1} = 3$. LCM = product of the greatest powers of all primes involved $= 2^{2} \\times 3^{2} \\times 5 = 180$.',
    steps: [
      { step: 'Writes $15 = 3 \\times 5$ and $36 = 2^{2} \\times 3^{2}$', marks: 1 },
      { step: 'Gets HCF $= 3$ and LCM $= 180$', marks: 1 },
    ],
  },
  {
    id: 'nc-01-ex03', chapter: C, topic: 'HCF-LCM relation', ref: `${R} Example 3`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'Find the HCF of $120$ and $252$ by prime factorisation. Hence find their LCM.',
    answer: '$120 = 2^{3} \\times 3 \\times 5$ and $252 = 2^{2} \\times 3^{2} \\times 7$. HCF $= 2^{2} \\times 3 = 12$. Using HCF $\\times$ LCM = product of the numbers, LCM $= \\frac{120 \\times 252}{12} = \\frac{30240}{12} = 2520$.',
    steps: [
      { step: 'Factorises both numbers and gets HCF $= 12$', marks: 1 },
      { step: 'Uses HCF × LCM = product to get LCM $= 2520$', marks: 1 },
    ],
  },
  {
    id: 'nc-01-ex04', chapter: C, topic: 'HCF and LCM by prime factorisation', ref: `${R} Example 4`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'Using prime factorisation, find the HCF and LCM of $12$, $90$ and $150$.',
    answer: '$12 = 2^{2} \\times 3$, $90 = 2 \\times 3^{2} \\times 5$, $150 = 2 \\times 3 \\times 5^{2}$. The primes common to all three are $2$ and $3$, with smallest powers $2^{1}$ and $3^{1}$, so HCF $= 2 \\times 3 = 6$. The greatest powers of the primes involved are $2^{2}$, $3^{2}$, $5^{2}$, so LCM $= 4 \\times 9 \\times 25 = 900$. (Note: $12 \\times 90 \\times 150 = 162000 \\neq 6 \\times 900$, so the product rule does not hold for three numbers.)',
    steps: [
      { step: 'Writes the three prime factorisations correctly', marks: 1 },
      { step: 'Gets HCF $= 6$', marks: 1 },
      { step: 'Gets LCM $= 900$', marks: 1 },
    ],
  },
  {
    id: 'nc-01-ex05', chapter: C, topic: 'Irrational numbers and proofs', ref: `${R} Example 5`,
    type: 'long', complexity: 'medium', marks: 4,
    text: 'Prove that $\\sqrt{7}$ is irrational.',
    answer: 'Suppose, to the contrary, that $\\sqrt{7}$ is rational. Then $\\sqrt{7} = \\frac{a}{b}$ for integers $a, b$ with $b \\neq 0$, and we may take $a$ and $b$ coprime (cancel any common factor). Then $a = \\sqrt{7}\\,b$, so $a^{2} = 7b^{2}$. Hence $7$ divides $a^{2}$, and since $7$ is prime, $7$ divides $a$. Write $a = 7c$. Then $49c^{2} = 7b^{2}$, i.e. $b^{2} = 7c^{2}$, so $7$ divides $b^{2}$ and hence $7$ divides $b$. So $7$ is a common factor of $a$ and $b$, contradicting that they are coprime. Therefore $\\sqrt{7}$ is irrational.',
    steps: [
      { step: 'Assumes $\\sqrt{7} = \\frac{a}{b}$ with $a, b$ coprime integers, $b \\neq 0$', marks: 1 },
      { step: 'Gets $a^{2} = 7b^{2}$ and concludes 7 divides $a$', marks: 1 },
      { step: 'Substitutes $a = 7c$ to get $b^{2} = 7c^{2}$, so 7 divides $b$', marks: 1 },
      { step: 'States the contradiction with coprimality and concludes', marks: 1 },
    ],
  },
  {
    id: 'nc-01-ex06', chapter: C, topic: 'Irrational numbers and proofs', ref: `${R} Example 6`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'Given that $\\sqrt{5}$ is irrational, show that $8 - \\sqrt{5}$ is irrational.',
    answer: 'Suppose $8 - \\sqrt{5}$ is rational, say $8 - \\sqrt{5} = \\frac{a}{b}$ with $a, b$ integers, $b \\neq 0$. Then $\\sqrt{5} = 8 - \\frac{a}{b} = \\frac{8b - a}{b}$. Since $a$ and $b$ are integers, $\\frac{8b - a}{b}$ is rational, so $\\sqrt{5}$ would be rational. This contradicts the fact that $\\sqrt{5}$ is irrational. Hence $8 - \\sqrt{5}$ is irrational.',
    steps: [
      { step: 'Assumes $8 - \\sqrt{5} = \\frac{a}{b}$', marks: 1 },
      { step: 'Rearranges to $\\sqrt{5} = \\frac{8b - a}{b}$, a rational number', marks: 1 },
      { step: 'States the contradiction and concludes', marks: 1 },
    ],
  },
  {
    id: 'nc-01-ex07', chapter: C, topic: 'Irrational numbers and proofs', ref: `${R} Example 7`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'Given that $\\sqrt{3}$ is irrational, show that $4\\sqrt{3}$ is irrational.',
    answer: 'Suppose $4\\sqrt{3}$ is rational, say $4\\sqrt{3} = \\frac{a}{b}$ with $a, b$ integers, $b \\neq 0$. Then $\\sqrt{3} = \\frac{a}{4b}$. Since $a$ and $4b$ are integers with $4b \\neq 0$, $\\frac{a}{4b}$ is rational, so $\\sqrt{3}$ would be rational, which contradicts the given fact. Hence $4\\sqrt{3}$ is irrational.',
    steps: [
      { step: 'Assumes $4\\sqrt{3} = \\frac{a}{b}$', marks: 1 },
      { step: 'Rearranges to $\\sqrt{3} = \\frac{a}{4b}$, a rational number', marks: 1 },
      { step: 'States the contradiction and concludes', marks: 1 },
    ],
  },

  // Exercise 1.1
  {
    id: 'nc-01-1-1-q01', chapter: C, topic: 'Fundamental theorem of arithmetic', ref: `${R} Ex 1.1 Q1`,
    type: 'long', complexity: 'easy', marks: 4,
    text: 'Write each number as a product of its prime factors: (i) $180$ (ii) $2730$ (iii) $4851$ (iv) $4199$',
    answer: '(i) $180 = 2^{2} \\times 3^{2} \\times 5$. (ii) $2730 = 2 \\times 3 \\times 5 \\times 7 \\times 13$. (iii) $4851 = 3^{2} \\times 7^{2} \\times 11$. (iv) $4199 = 13 \\times 17 \\times 19$.',
    steps: [
      { step: '(i) $180 = 2^{2} \\times 3^{2} \\times 5$', marks: 1 },
      { step: '(ii) $2730 = 2 \\times 3 \\times 5 \\times 7 \\times 13$', marks: 1 },
      { step: '(iii) $4851 = 3^{2} \\times 7^{2} \\times 11$', marks: 1 },
      { step: '(iv) $4199 = 13 \\times 17 \\times 19$', marks: 1 },
    ],
  },
  {
    id: 'nc-01-1-1-q02', chapter: C, topic: 'HCF-LCM relation', ref: `${R} Ex 1.1 Q2`,
    type: 'long', complexity: 'easy', marks: 4,
    text: 'Find the HCF and LCM of each pair, and check that HCF $\\times$ LCM equals the product of the two numbers: (i) $34$ and $85$ (ii) $462$ and $70$ (iii) $288$ and $120$',
    answer: '(i) $34 = 2 \\times 17$, $85 = 5 \\times 17$. HCF $= 17$, LCM $= 2 \\times 5 \\times 17 = 170$. Check: $17 \\times 170 = 2890 = 34 \\times 85$. (ii) $462 = 2 \\times 3 \\times 7 \\times 11$, $70 = 2 \\times 5 \\times 7$. HCF $= 14$, LCM $= 2 \\times 3 \\times 5 \\times 7 \\times 11 = 2310$. Check: $14 \\times 2310 = 32340 = 462 \\times 70$. (iii) $288 = 2^{5} \\times 3^{2}$, $120 = 2^{3} \\times 3 \\times 5$. HCF $= 2^{3} \\times 3 = 24$, LCM $= 2^{5} \\times 3^{2} \\times 5 = 1440$. Check: $24 \\times 1440 = 34560 = 288 \\times 120$.',
    steps: [
      { step: '(i) HCF 17, LCM 170, verified', marks: 1 },
      { step: '(ii) HCF 14, LCM 2310, verified', marks: 1 },
      { step: '(iii) Factorises $288 = 2^{5} \\times 3^{2}$, $120 = 2^{3} \\times 3 \\times 5$', marks: 1 },
      { step: '(iii) HCF 24, LCM 1440, verified', marks: 1 },
    ],
  },
  {
    id: 'nc-01-1-1-q03', chapter: C, topic: 'HCF and LCM by prime factorisation', ref: `${R} Ex 1.1 Q3`,
    type: 'short', complexity: 'easy', marks: 3,
    text: 'Using prime factorisation, find the HCF and LCM of: (i) $18$, $24$ and $30$ (ii) $13$, $19$ and $31$ (iii) $16$, $27$ and $35$',
    answer: '(i) $18 = 2 \\times 3^{2}$, $24 = 2^{3} \\times 3$, $30 = 2 \\times 3 \\times 5$. HCF $= 2 \\times 3 = 6$, LCM $= 2^{3} \\times 3^{2} \\times 5 = 360$. (ii) All three are prime, so HCF $= 1$ and LCM $= 13 \\times 19 \\times 31 = 7657$. (iii) $16 = 2^{4}$, $27 = 3^{3}$, $35 = 5 \\times 7$; no prime is common, so HCF $= 1$ and LCM $= 16 \\times 27 \\times 35 = 15120$.',
    steps: [
      { step: '(i) HCF 6, LCM 360', marks: 1 },
      { step: '(ii) HCF 1, LCM 7657', marks: 1 },
      { step: '(iii) HCF 1, LCM 15120', marks: 1 },
    ],
  },
  {
    id: 'nc-01-1-1-q04', chapter: C, topic: 'HCF-LCM relation', ref: `${R} Ex 1.1 Q4`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'The HCF of $252$ and $594$ is $18$. Find their LCM.',
    answer: 'HCF $\\times$ LCM $= 252 \\times 594$, so LCM $= \\frac{252 \\times 594}{18} = \\frac{149688}{18} = 8316$.',
    steps: [
      { step: 'Uses HCF × LCM = product of the numbers', marks: 1 },
      { step: 'Gets LCM $= 8316$', marks: 1 },
    ],
  },
  {
    id: 'nc-01-1-1-q05', chapter: C, topic: 'Fundamental theorem of arithmetic', ref: `${R} Ex 1.1 Q5`,
    type: 'short', complexity: 'medium', marks: 2,
    text: 'Is there a natural number $n$ for which $14^{n}$ ends with the digit $0$? Give a reason.',
    answer: 'For $14^{n}$ to end in $0$ it must be divisible by $10$, so its prime factorisation must contain both $2$ and $5$. But $14^{n} = 2^{n} \\times 7^{n}$, whose only primes are $2$ and $7$. By the uniqueness of prime factorisation, $5$ cannot be a factor. So no natural number $n$ makes $14^{n}$ end in $0$.',
    steps: [
      { step: 'Notes ending in 0 needs the prime 5', marks: 1 },
      { step: 'Writes $14^{n} = 2^{n} \\times 7^{n}$ and concludes using uniqueness', marks: 1 },
    ],
  },
  {
    id: 'nc-01-1-1-q06', chapter: C, topic: 'Fundamental theorem of arithmetic', ref: `${R} Ex 1.1 Q6`,
    type: 'short', complexity: 'medium', marks: 2,
    text: 'Explain why $5 \\times 7 \\times 11 + 7$ and $6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1 + 3$ are composite numbers.',
    answer: '$5 \\times 7 \\times 11 + 7 = 7(5 \\times 11 + 1) = 7 \\times 56 = 392$, which has factors other than $1$ and itself (e.g. $7$), so it is composite. $6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1 + 3 = 3(6 \\times 5 \\times 4 \\times 2 \\times 1 + 1) = 3 \\times 241 = 723$, which is divisible by $3$, so it is composite.',
    steps: [
      { step: 'Takes 7 common: $7 \\times 56$, so composite', marks: 1 },
      { step: 'Takes 3 common: $3 \\times 241$, so composite', marks: 1 },
    ],
  },
  {
    id: 'nc-01-1-1-q07', chapter: C, topic: 'HCF and LCM word problems', ref: `${R} Ex 1.1 Q7`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'Two lighthouses on a coast flash together at midnight. One flashes every $45$ seconds and the other every $60$ seconds. After how many seconds will they next flash together?',
    answer: 'They next flash together after LCM$(45, 60)$ seconds. $45 = 3^{2} \\times 5$ and $60 = 2^{2} \\times 3 \\times 5$, so LCM $= 2^{2} \\times 3^{2} \\times 5 = 180$. They flash together again after $180$ seconds (3 minutes).',
    steps: [
      { step: 'Recognises the answer is LCM(45, 60)', marks: 1 },
      { step: 'Gets 180 seconds', marks: 1 },
    ],
  },

  // Exercise 1.2
  {
    id: 'nc-01-1-2-q01', chapter: C, topic: 'Irrational numbers and proofs', ref: `${R} Ex 1.2 Q1`,
    type: 'long', complexity: 'medium', marks: 4,
    text: 'Prove that $\\sqrt{11}$ is irrational.',
    answer: 'Suppose, to the contrary, that $\\sqrt{11} = \\frac{a}{b}$ where $a, b$ are coprime integers and $b \\neq 0$. Squaring, $a^{2} = 11b^{2}$, so $11$ divides $a^{2}$; as $11$ is prime, $11$ divides $a$. Let $a = 11c$. Then $121c^{2} = 11b^{2}$, so $b^{2} = 11c^{2}$, which means $11$ divides $b^{2}$ and hence $b$. Thus $11$ divides both $a$ and $b$, contradicting that they are coprime. So $\\sqrt{11}$ is irrational.',
    steps: [
      { step: 'Assumes $\\sqrt{11} = \\frac{a}{b}$ with $a, b$ coprime', marks: 1 },
      { step: 'Gets $a^{2} = 11b^{2}$, so 11 divides $a$', marks: 1 },
      { step: 'Puts $a = 11c$, gets $b^{2} = 11c^{2}$, so 11 divides $b$', marks: 1 },
      { step: 'Reaches the contradiction and concludes', marks: 1 },
    ],
  },
  {
    id: 'nc-01-1-2-q02', chapter: C, topic: 'Irrational numbers and proofs', ref: `${R} Ex 1.2 Q2`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'Given that $\\sqrt{3}$ is irrational, prove that $2 + 5\\sqrt{3}$ is irrational.',
    answer: 'Suppose $2 + 5\\sqrt{3} = \\frac{a}{b}$ with $a, b$ integers, $b \\neq 0$. Then $5\\sqrt{3} = \\frac{a}{b} - 2 = \\frac{a - 2b}{b}$, so $\\sqrt{3} = \\frac{a - 2b}{5b}$. The right side is a ratio of integers, hence rational, so $\\sqrt{3}$ would be rational. This contradicts the given fact, so $2 + 5\\sqrt{3}$ is irrational.',
    steps: [
      { step: 'Assumes $2 + 5\\sqrt{3} = \\frac{a}{b}$', marks: 1 },
      { step: 'Rearranges to $\\sqrt{3} = \\frac{a - 2b}{5b}$', marks: 1 },
      { step: 'States the contradiction and concludes', marks: 1 },
    ],
  },
  {
    id: 'nc-01-1-2-q03', chapter: C, topic: 'Irrational numbers and proofs', ref: `${R} Ex 1.2 Q3`,
    type: 'long', complexity: 'medium', marks: 4,
    text: 'You may use that $\\sqrt{3}$, $\\sqrt{5}$ and $\\sqrt{7}$ are irrational. Prove that each of the following is irrational: (i) $\\frac{1}{\\sqrt{5}}$ (ii) $3\\sqrt{7}$ (iii) $4 + \\sqrt{3}$',
    answer: '(i) Suppose $\\frac{1}{\\sqrt{5}} = \\frac{a}{b}$ with $a, b$ integers, $a, b \\neq 0$. Then $\\sqrt{5} = \\frac{b}{a}$, which is rational: a contradiction. So $\\frac{1}{\\sqrt{5}}$ is irrational. (ii) Suppose $3\\sqrt{7} = \\frac{a}{b}$. Then $\\sqrt{7} = \\frac{a}{3b}$, which is rational: a contradiction. So $3\\sqrt{7}$ is irrational. (iii) Suppose $4 + \\sqrt{3} = \\frac{a}{b}$. Then $\\sqrt{3} = \\frac{a - 4b}{b}$, which is rational: a contradiction. So $4 + \\sqrt{3}$ is irrational.',
    steps: [
      { step: '(i) Shows $\\sqrt{5} = \\frac{b}{a}$ would be rational', marks: 1 },
      { step: '(ii) Shows $\\sqrt{7} = \\frac{a}{3b}$ would be rational', marks: 1 },
      { step: '(iii) Shows $\\sqrt{3} = \\frac{a - 4b}{b}$ would be rational', marks: 1 },
      { step: 'States the contradiction in each case and concludes', marks: 1 },
    ],
  },
];
