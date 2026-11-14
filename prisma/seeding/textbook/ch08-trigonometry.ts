import type { TextbookQuestion } from './types.js';

const CH8 = 'NCERT Class 10 · Ch 8 Introduction to Trigonometry';
const CH9 = 'NCERT Class 10 · Ch 9 Some Applications of Trigonometry';
const C = 'Trigonometry';

export const TRIGONOMETRY: TextbookQuestion[] = [
  // Ratios of standard angles
  {
    id: 'tb-tg-01', chapter: C, topic: 'Ratios of standard angles', ref: `${CH8} · Trigonometric ratios of specific angles`,
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The value of $2\\sin 30^{\\circ}\\cos 60^{\\circ} + \\tan 45^{\\circ}$ is',
    options: ['$\\frac{1}{2}$', '$1$', '$\\frac{3}{2}$', '$2$'],
    answer: 'Correct option: C) $\\frac{3}{2}$. $2 \\times \\frac{1}{2} \\times \\frac{1}{2} + 1 = \\frac{1}{2} + 1 = \\frac{3}{2}$.',
  },

  // Ratio from a given ratio
  {
    id: 'tb-tg-02', chapter: C, topic: 'Ratio from a given ratio', ref: `${CH8} · Trigonometric ratios`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'If $\\cos A = \\frac{20}{29}$, where $A$ is an acute angle, find $\\sec A$ and $\\tan A$.',
    answer: 'Take a right triangle with adjacent side 20 and hypotenuse 29. Opposite side $= \\sqrt{29^{2} - 20^{2}} = \\sqrt{841 - 400} = \\sqrt{441} = 21$. So $\\sec A = \\frac{29}{20}$ and $\\tan A = \\frac{21}{20}$.',
    steps: [{ step: 'Finds the third side as 21 using Pythagoras', marks: 1 }, { step: 'States $\\sec A = \\frac{29}{20}$ and $\\tan A = \\frac{21}{20}$', marks: 1 }],
  },
  {
    id: 'tb-tg-03', chapter: C, topic: 'Ratio from a given ratio', ref: `${CH8} · Trigonometric ratios`,
    type: 'short', complexity: 'medium', marks: 2,
    text: 'If $3\\tan\\theta = 4$, find the value of $\\frac{4\\sin\\theta - \\cos\\theta}{4\\sin\\theta + \\cos\\theta}$.',
    answer: '$\\tan\\theta = \\frac{4}{3}$. Dividing numerator and denominator by $\\cos\\theta$: $\\frac{4\\tan\\theta - 1}{4\\tan\\theta + 1} = \\frac{\\frac{16}{3} - 1}{\\frac{16}{3} + 1} = \\frac{13/3}{19/3} = \\frac{13}{19}$.',
    steps: [{ step: 'Rewrites the expression in terms of $\\tan\\theta$ (or finds $\\sin\\theta = \\frac{4}{5}$, $\\cos\\theta = \\frac{3}{5}$)', marks: 1 }, { step: 'Gets $\\frac{13}{19}$', marks: 1 }],
  },

  // Ratios from a right-triangle figure
  {
    id: 'tb-tg-04', chapter: C, topic: 'Ratios from a right-triangle figure', ref: `${CH8} · Trigonometric ratios`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'In triangle $PQR$, the angle at $Q$ is a right angle. $PQ = 9$ cm and the hypotenuse $PR$ is 3 cm longer than $QR$. Find $QR$ and $PR$, and hence write $\\sin R$, $\\cos R$ and $\\tan P$.',
    answer: 'Let $QR = x$, so $PR = x + 3$. By Pythagoras, $(x+3)^{2} = x^{2} + 81$, so $6x + 9 = 81$ and $x = 12$. Thus $QR = 12$ cm and $PR = 15$ cm. $\\sin R = \\frac{PQ}{PR} = \\frac{9}{15} = \\frac{3}{5}$, $\\cos R = \\frac{QR}{PR} = \\frac{12}{15} = \\frac{4}{5}$, $\\tan P = \\frac{QR}{PQ} = \\frac{12}{9} = \\frac{4}{3}$.',
    steps: [{ step: 'Sets up $(x+3)^{2} = x^{2} + 81$', marks: 1 }, { step: 'Finds $QR = 12$ cm and $PR = 15$ cm', marks: 1 }, { step: 'Writes $\\sin R = \\frac{3}{5}$, $\\cos R = \\frac{4}{5}$, $\\tan P = \\frac{4}{3}$', marks: 1 }],
  },

  // Identities and proofs
  {
    id: 'tb-tg-05', chapter: C, topic: 'Identities and proofs', ref: `${CH8} · Trigonometric identities`,
    type: 'mcq', complexity: 'medium', marks: 1,
    text: 'For an acute angle $\\theta$, $(1 + \\tan^{2}\\theta)(1 - \\sin\\theta)(1 + \\sin\\theta)$ equals',
    options: ['$0$', '$1$', '$\\sin^{2}\\theta$', '$\\sec^{2}\\theta$'],
    answer: 'Correct option: B) $1$. $(1 + \\tan^{2}\\theta) = \\sec^{2}\\theta$ and $(1 - \\sin\\theta)(1 + \\sin\\theta) = 1 - \\sin^{2}\\theta = \\cos^{2}\\theta$, so the product is $\\sec^{2}\\theta\\cos^{2}\\theta = 1$.',
  },
  {
    id: 'tb-tg-06', chapter: C, topic: 'Identities and proofs', ref: `${CH8} · Trigonometric identities`,
    type: 'short', complexity: 'medium', marks: 2,
    text: 'Prove that $\\frac{\\tan^{2}\\theta}{\\sec\\theta - 1} - \\sec\\theta = 1$, where $\\theta$ is acute and $\\theta \\neq 0^{\\circ}$.',
    answer: 'Using $\\tan^{2}\\theta = \\sec^{2}\\theta - 1 = (\\sec\\theta - 1)(\\sec\\theta + 1)$: $\\frac{\\tan^{2}\\theta}{\\sec\\theta - 1} = \\sec\\theta + 1$. So the left side $= \\sec\\theta + 1 - \\sec\\theta = 1$ = right side.',
    steps: [{ step: 'Writes $\\tan^{2}\\theta$ as $(\\sec\\theta - 1)(\\sec\\theta + 1)$', marks: 1 }, { step: 'Cancels and simplifies to 1', marks: 1 }],
  },
  {
    id: 'tb-tg-07', chapter: C, topic: 'Identities and proofs', ref: `${CH8} · Trigonometric identities`,
    type: 'long', complexity: 'hard', marks: 4,
    text: '(a) Prove that $\\frac{1}{\\sec\\theta - \\tan\\theta} = \\sec\\theta + \\tan\\theta$ for an acute angle $\\theta$.\n(b) If $\\sec\\theta + \\tan\\theta = 3$ for an acute angle $\\theta$, use part (a) to find $\\sec\\theta$, $\\tan\\theta$ and $\\sin\\theta$.',
    answer: '(a) $(\\sec\\theta - \\tan\\theta)(\\sec\\theta + \\tan\\theta) = \\sec^{2}\\theta - \\tan^{2}\\theta = 1$, so $\\frac{1}{\\sec\\theta - \\tan\\theta} = \\sec\\theta + \\tan\\theta$.\n(b) From (a), $\\sec\\theta - \\tan\\theta = \\frac{1}{3}$. Adding to $\\sec\\theta + \\tan\\theta = 3$: $2\\sec\\theta = \\frac{10}{3}$, so $\\sec\\theta = \\frac{5}{3}$. Subtracting: $2\\tan\\theta = \\frac{8}{3}$, so $\\tan\\theta = \\frac{4}{3}$. Then $\\sin\\theta = \\frac{\\tan\\theta}{\\sec\\theta} = \\frac{4/3}{5/3} = \\frac{4}{5}$.',
    steps: [
      { step: 'Proves (a) using $\\sec^{2}\\theta - \\tan^{2}\\theta = 1$', marks: 1 },
      { step: 'Deduces $\\sec\\theta - \\tan\\theta = \\frac{1}{3}$', marks: 1 },
      { step: 'Solves to $\\sec\\theta = \\frac{5}{3}$ and $\\tan\\theta = \\frac{4}{3}$', marks: 1 },
      { step: 'Finds $\\sin\\theta = \\frac{4}{5}$', marks: 1 },
    ],
  },

  // Evaluating expressions
  {
    id: 'tb-tg-08', chapter: C, topic: 'Evaluating expressions', ref: `${CH8} · Trigonometric ratios of specific angles`,
    type: 'short', complexity: 'medium', marks: 2,
    text: 'Evaluate: $\\frac{2\\tan^{2} 60^{\\circ} - 4\\cos^{2} 45^{\\circ} + 3\\,\\text{cosec}^{2}\\, 30^{\\circ}}{\\sec^{2} 45^{\\circ}}$',
    answer: '$\\tan^{2} 60^{\\circ} = 3$, $\\cos^{2} 45^{\\circ} = \\frac{1}{2}$, $\\text{cosec}^{2}\\, 30^{\\circ} = 4$, $\\sec^{2} 45^{\\circ} = 2$. Value $= \\frac{6 - 2 + 12}{2} = \\frac{16}{2} = 8$.',
    steps: [{ step: 'Substitutes the correct values of all four ratios', marks: 1 }, { step: 'Simplifies to 8', marks: 1 }],
  },

  // Heights and distances
  {
    id: 'tb-tg-09', chapter: C, topic: 'Heights and distances', ref: `${CH9} · Heights and distances`,
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A straight ladder 10 m long rests against a vertical wall and makes an angle of $60^{\\circ}$ with the level ground. How high up the wall does the top of the ladder reach?',
    options: ['$5$ m', '$5\\sqrt{3}$ m', '$10\\sqrt{3}$ m', '$\\frac{10}{\\sqrt{3}}$ m'],
    answer: 'Correct option: B) $5\\sqrt{3}$ m. The ladder is the hypotenuse, so height $= 10\\sin 60^{\\circ} = 10 \\times \\frac{\\sqrt{3}}{2} = 5\\sqrt{3}$ m. Option A is the distance of the foot of the ladder from the wall ($10\\cos 60^{\\circ}$).',
  },
  {
    id: 'tb-tg-10', chapter: C, topic: 'Heights and distances', ref: `${CH9} · Heights and distances`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'An office block is 24 m tall. From its roof, the angles of depression of the top and the bottom of a shorter tower standing on the same level ground are $30^{\\circ}$ and $60^{\\circ}$ respectively. Find the height of the tower.',
    answer: 'Let the horizontal distance between the block and the tower be $d$. From the bottom of the tower: $\\tan 60^{\\circ} = \\frac{24}{d}$, so $d = \\frac{24}{\\sqrt{3}} = 8\\sqrt{3}$ m. From the top of the tower, the vertical drop from the roof is $h_1 = d\\tan 30^{\\circ} = 8\\sqrt{3} \\times \\frac{1}{\\sqrt{3}} = 8$ m. Height of tower $= 24 - 8 = 16$ m.',
    steps: [{ step: 'Finds $d = 8\\sqrt{3}$ m using the $60^{\\circ}$ angle', marks: 1 }, { step: 'Finds the vertical drop to the tower top as 8 m using the $30^{\\circ}$ angle', marks: 1 }, { step: 'Gets the tower height as 16 m', marks: 1 }],
  },
  {
    id: 'tb-tg-11', chapter: C, topic: 'Heights and distances', ref: `${CH9} · Heights and distances`,
    type: 'short', complexity: 'hard', marks: 3,
    text: 'Meera stands on a balcony 15 m above the level ground. Directly across the street is a tall tower. From her eye level on the balcony, the angle of elevation of the top of the tower is $60^{\\circ}$ and the angle of depression of its foot is $30^{\\circ}$. Find the width of the street and the height of the tower. (Ignore Meera’s own height; use $\\sqrt{3} \\approx 1.73$.)',
    answer: 'Let the street width be $d$. Using the angle of depression of the foot: $\\tan 30^{\\circ} = \\frac{15}{d}$, so $d = 15\\sqrt{3} \\approx 25.95$ m. The part of the tower above the balcony level is $d\\tan 60^{\\circ} = 15\\sqrt{3} \\times \\sqrt{3} = 45$ m. Height of tower $= 45 + 15 = 60$ m.',
    steps: [{ step: 'Finds the street width $15\\sqrt{3} \\approx 25.95$ m', marks: 1 }, { step: 'Finds the height above the balcony as 45 m', marks: 1 }, { step: 'Gets the tower height as 60 m', marks: 1 }],
  },
  {
    id: 'tb-tg-12', chapter: C, topic: 'Heights and distances', ref: `${CH9} · Heights and distances`,
    type: 'long', complexity: 'hard', marks: 5,
    text: 'A coastguard watches from the top of a vertical cliff 60 m above sea level. A boat sails in a straight line directly away from the foot of the cliff. At one moment the angle of depression of the boat is $60^{\\circ}$; exactly 10 seconds later it is $30^{\\circ}$. Find (i) the distance of the boat from the foot of the cliff at each moment, (ii) the distance it covered, and (iii) its speed in m/s and in km/h. (Use $\\sqrt{3} \\approx 1.73$.)',
    answer: '(i) First position: $\\tan 60^{\\circ} = \\frac{60}{x_1}$, so $x_1 = \\frac{60}{\\sqrt{3}} = 20\\sqrt{3} \\approx 34.6$ m. Second position: $\\tan 30^{\\circ} = \\frac{60}{x_2}$, so $x_2 = 60\\sqrt{3} \\approx 103.8$ m.\n(ii) Distance covered $= x_2 - x_1 = 40\\sqrt{3} \\approx 69.2$ m.\n(iii) Speed $= \\frac{40\\sqrt{3}}{10} = 4\\sqrt{3} \\approx 6.92$ m/s $= 6.92 \\times 3.6 \\approx 24.9$ km/h.',
    steps: [
      { step: 'Draws/describes the two right triangles with the cliff as the common vertical side', marks: 1 },
      { step: 'Finds $x_1 = 20\\sqrt{3}$ m', marks: 1 },
      { step: 'Finds $x_2 = 60\\sqrt{3}$ m', marks: 1 },
      { step: 'Finds distance covered $40\\sqrt{3} \\approx 69.2$ m', marks: 1 },
      { step: 'Finds speed $\\approx 6.92$ m/s $\\approx 24.9$ km/h', marks: 1 },
    ],
  },
];
