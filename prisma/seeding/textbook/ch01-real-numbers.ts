import type { TextbookQuestion } from './types.js';

const CH1 = 'NCERT Class 10 · Ch 1 Real Numbers';
const C = 'Real Numbers';

export const REAL_NUMBERS: TextbookQuestion[] = [
  // Fundamental theorem of arithmetic
  {
    id: 'tb-rn-01', chapter: C, topic: 'Fundamental theorem of arithmetic', ref: `${CH1} · Prime factorisation`,
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Which number has the prime factorisation $2^{3} \\times 3^{2} \\times 7$?',
    options: ['$252$', '$504$', '$756$', '$1008$'],
    answer: 'Correct option: B) $504$, since $8 \\times 9 \\times 7 = 504$. The others are $252 = 2^{2} \\times 3^{2} \\times 7$, $756 = 2^{2} \\times 3^{3} \\times 7$ and $1008 = 2^{4} \\times 3^{2} \\times 7$.',
  },
  {
    id: 'tb-rn-02', chapter: C, topic: 'Fundamental theorem of arithmetic', ref: `${CH1} · Prime factorisation`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'If $2^{a} \\times 3^{b} \\times 5^{c} = 5400$, where $a$, $b$ and $c$ are whole numbers, find $a$, $b$ and $c$.',
    answer: '$5400 = 54 \\times 100 = (2 \\times 3^{3}) \\times (2^{2} \\times 5^{2}) = 2^{3} \\times 3^{3} \\times 5^{2}$. By the uniqueness of prime factorisation, $a = 3$, $b = 3$, $c = 2$.',
    steps: [{ step: 'Writes $5400 = 2^{3} \\times 3^{3} \\times 5^{2}$', marks: 1 }, { step: 'States $a = 3$, $b = 3$, $c = 2$', marks: 1 }],
  },

  // HCF and LCM by prime factorisation
  {
    id: 'tb-rn-03', chapter: C, topic: 'HCF and LCM by prime factorisation', ref: `${CH1} · HCF and LCM by prime factorisation`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'Using prime factorisation, find the HCF and LCM of $72$, $120$ and $150$.',
    answer: '$72 = 2^{3} \\times 3^{2}$, $120 = 2^{3} \\times 3 \\times 5$, $150 = 2 \\times 3 \\times 5^{2}$. HCF = product of the smallest powers of common primes $= 2 \\times 3 = 6$. LCM = product of the greatest powers of all primes $= 2^{3} \\times 3^{2} \\times 5^{2} = 1800$.',
    steps: [
      { step: 'Writes all three prime factorisations correctly', marks: 1 },
      { step: 'Finds HCF $= 6$', marks: 1 },
      { step: 'Finds LCM $= 1800$', marks: 1 },
    ],
  },

  // HCF-LCM relation
  {
    id: 'tb-rn-04', chapter: C, topic: 'HCF-LCM relation', ref: `${CH1} · HCF-LCM relation`,
    type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The HCF of two numbers is $18$ and their product is $6480$. Their LCM is',
    options: ['$120$', '$360$', '$1080$', '$6462$'],
    answer: 'Correct option: B) $360$. For two numbers, HCF $\\times$ LCM = product, so LCM $= \\frac{6480}{18} = 360$.',
  },
  {
    id: 'tb-rn-05', chapter: C, topic: 'HCF-LCM relation', ref: `${CH1} · HCF-LCM relation`,
    type: 'short', complexity: 'medium', marks: 2,
    text: 'The HCF and LCM of two numbers are $16$ and $480$. If one of the numbers is $96$, find the other.',
    answer: 'HCF $\\times$ LCM = product of the numbers, so the other number $= \\frac{16 \\times 480}{96} = 80$. Check: $96 = 2^{5} \\times 3$, $80 = 2^{4} \\times 5$, giving HCF $= 16$ and LCM $= 2^{5} \\times 3 \\times 5 = 480$.',
    steps: [{ step: 'Uses HCF $\\times$ LCM = product of the two numbers', marks: 1 }, { step: 'Gets the other number as $80$', marks: 1 }],
  },

  // HCF and LCM word problems
  {
    id: 'tb-rn-06', chapter: C, topic: 'HCF and LCM word problems', ref: `${CH1} · HCF and LCM by prime factorisation`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'From a bus depot, buses on three routes leave every 24 minutes, 36 minutes and 40 minutes. If buses on all three routes leave together at 6:00 a.m., when will they next leave together?',
    answer: '$24 = 2^{3} \\times 3$, $36 = 2^{2} \\times 3^{2}$, $40 = 2^{3} \\times 5$. LCM $= 2^{3} \\times 3^{2} \\times 5 = 360$ minutes $= 6$ hours. They next leave together at 12:00 noon.',
    steps: [
      { step: 'Recognises that the LCM is needed and factorises the numbers', marks: 1 },
      { step: 'Finds LCM $= 360$ minutes', marks: 1 },
      { step: 'Converts to 6 hours and states 12:00 noon', marks: 1 },
    ],
  },
  {
    id: 'tb-rn-07', chapter: C, topic: 'HCF and LCM word problems', ref: `${CH1} · HCF and LCM by prime factorisation`,
    type: 'short', complexity: 'hard', marks: 3,
    text: 'A stationery shop has 312 pens, 468 pencils and 260 erasers. It wants to make identical kits using all the items, with nothing left over. What is the largest number of kits it can make, and what will each kit contain?',
    answer: '$312 = 2^{3} \\times 3 \\times 13$, $468 = 2^{2} \\times 3^{2} \\times 13$, $260 = 2^{2} \\times 5 \\times 13$. HCF $= 2^{2} \\times 13 = 52$. So 52 kits, each with $312 \\div 52 = 6$ pens, $468 \\div 52 = 9$ pencils and $260 \\div 52 = 5$ erasers.',
    steps: [
      { step: 'Recognises that the HCF is needed and factorises the numbers', marks: 1 },
      { step: 'Finds HCF $= 52$, so 52 kits', marks: 1 },
      { step: 'States 6 pens, 9 pencils and 5 erasers per kit', marks: 1 },
    ],
  },

  // Number classification
  {
    id: 'tb-rn-08', chapter: C, topic: 'Decimal expansions and number classification', ref: `${CH1} · Rational and irrational numbers`,
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Which of the following is an irrational number?',
    options: ['$\\sqrt{196}$', '$(2 - \\sqrt{3})(2 + \\sqrt{3})$', '$\\frac{\\sqrt{18}}{\\sqrt{2}}$', '$2\\sqrt{3} + \\sqrt{3}$'],
    answer: 'Correct option: D) $2\\sqrt{3} + \\sqrt{3} = 3\\sqrt{3}$, which is a non-zero rational times an irrational, so it is irrational. The others are rational: $\\sqrt{196} = 14$, $(2 - \\sqrt{3})(2 + \\sqrt{3}) = 4 - 3 = 1$ and $\\frac{\\sqrt{18}}{\\sqrt{2}} = \\sqrt{9} = 3$.',
  },

  // Irrational numbers and proofs
  {
    id: 'tb-rn-09', chapter: C, topic: 'Irrational numbers and proofs', ref: `${CH1} · Proving irrationality`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'Given that $\\sqrt{11}$ is irrational, prove that $\\frac{5 + 2\\sqrt{11}}{3}$ is irrational.',
    answer: 'Suppose $\\frac{5 + 2\\sqrt{11}}{3} = r$ for some rational $r$. Then $5 + 2\\sqrt{11} = 3r$, so $\\sqrt{11} = \\frac{3r - 5}{2}$. Since $r$ is rational, $\\frac{3r - 5}{2}$ is rational, so $\\sqrt{11}$ would be rational. This contradicts the fact that $\\sqrt{11}$ is irrational. Hence $\\frac{5 + 2\\sqrt{11}}{3}$ is irrational.',
    steps: [
      { step: 'Assumes the number equals a rational $r$', marks: 1 },
      { step: 'Rearranges to $\\sqrt{11} = \\frac{3r - 5}{2}$ and notes the right side is rational', marks: 1 },
      { step: 'States the contradiction and concludes', marks: 1 },
    ],
  },
  {
    id: 'tb-rn-10', chapter: C, topic: 'Irrational numbers and proofs', ref: `${CH1} · Proving irrationality`,
    type: 'long', complexity: 'hard', marks: 5,
    text: 'Prove that $\\sqrt{7}$ is irrational. Hence show that $3 - 2\\sqrt{7}$ is irrational.',
    answer: 'Suppose $\\sqrt{7}$ is rational, so $\\sqrt{7} = \\frac{a}{b}$ with $a, b$ integers, $b \\neq 0$, and $a$, $b$ having no common factor other than 1. Then $a^{2} = 7b^{2}$, so 7 divides $a^{2}$, and since 7 is prime, 7 divides $a$. Write $a = 7c$. Then $49c^{2} = 7b^{2}$, so $b^{2} = 7c^{2}$, and 7 divides $b$ as well. So 7 is a common factor of $a$ and $b$, a contradiction. Hence $\\sqrt{7}$ is irrational. Now suppose $3 - 2\\sqrt{7} = r$, rational. Then $\\sqrt{7} = \\frac{3 - r}{2}$, which is rational, a contradiction. So $3 - 2\\sqrt{7}$ is irrational.',
    steps: [
      { step: 'Assumes $\\sqrt{7} = \\frac{a}{b}$ in lowest terms and gets $a^{2} = 7b^{2}$', marks: 1 },
      { step: 'Concludes 7 divides $a$ and writes $a = 7c$', marks: 1 },
      { step: 'Shows 7 divides $b$ too', marks: 1 },
      { step: 'States the contradiction and concludes $\\sqrt{7}$ is irrational', marks: 1 },
      { step: 'Shows $3 - 2\\sqrt{7}$ is irrational by contradiction', marks: 1 },
    ],
  },

  // HCF word problem (long)
  {
    id: 'tb-rn-11', chapter: C, topic: 'HCF and LCM word problems', ref: `${CH1} · HCF and LCM by prime factorisation`,
    type: 'long', complexity: 'medium', marks: 4,
    text: 'A rectangular courtyard measures 18 m 72 cm by 13 m 20 cm. It is to be paved with identical square tiles, with no tile cut. Find the side of the largest possible tile and the number of such tiles needed.',
    answer: 'In cm the sides are 1872 and 1320. $1872 = 2^{4} \\times 3^{2} \\times 13$ and $1320 = 2^{3} \\times 3 \\times 5 \\times 11$, so HCF $= 2^{3} \\times 3 = 24$. The largest tile has side 24 cm. Tiles along the sides: $1872 \\div 24 = 78$ and $1320 \\div 24 = 55$, so $78 \\times 55 = 4290$ tiles.',
    steps: [
      { step: 'Converts both sides to cm (1872 and 1320)', marks: 1 },
      { step: 'Factorises both numbers', marks: 1 },
      { step: 'Finds HCF $= 24$, so tile side 24 cm', marks: 1 },
      { step: 'Finds $78 \\times 55 = 4290$ tiles', marks: 1 },
    ],
  },
];
