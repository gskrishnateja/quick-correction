import type { TextbookQuestion } from './types.js';

const CH = 'NCERT Class 10 · Ch 14 Probability';
const C = 'Probability';

export const PROBABILITY: TextbookQuestion[] = [
  {
    id: 'tb-pr-01', chapter: C, topic: 'Classical probability basics', ref: `${CH} · Theoretical probability`,
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Which of the following cannot be the probability of an event?',
    options: ['$0$', '$0.95$', '$1.05$', '$\\frac{3}{7}$'],
    answer: 'Correct option: C) $1.05$. A probability always lies between 0 and 1 inclusive, and 1.05 is greater than 1. A probability of 0 is allowed (an impossible event).',
  },
  {
    id: 'tb-pr-02', chapter: C, topic: 'Complementary events', ref: `${CH} · Complementary events`,
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A weather app says the probability of rain tomorrow is 0.38. The probability that it does not rain tomorrow is',
    options: ['0.38', '0.52', '0.62', '0.72'],
    answer: 'Correct option: C) 0.62. "Rain" and "no rain" are complementary, so $P(\\text{no rain}) = 1 - 0.38 = 0.62$.',
  },
  {
    id: 'tb-pr-03', chapter: C, topic: 'Dice', ref: `${CH} · Theoretical probability`,
    type: 'mcq', complexity: 'medium', marks: 1,
    text: 'Two fair dice are thrown together. The probability that the sum of the numbers shown is 9 is',
    options: ['$\\frac{1}{12}$', '$\\frac{1}{9}$', '$\\frac{5}{36}$', '$\\frac{1}{6}$'],
    answer: 'Correct option: B) $\\frac{1}{9}$. Of the 36 equally likely outcomes, (3, 6), (4, 5), (5, 4), (6, 3) give a sum of 9, so the probability is $\\frac{4}{36} = \\frac{1}{9}$. Option A counts only (3, 6) and (4, 5), forgetting the order.',
  },
  {
    id: 'tb-pr-04', chapter: C, topic: 'Coins', ref: `${CH} · Theoretical probability`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'Two fair coins are tossed together. Find the probability of getting (i) at least one head, (ii) exactly one tail.',
    answer: 'Outcomes: HH, HT, TH, TT (4). (i) At least one head: HH, HT, TH, so $P = \\frac{3}{4}$. (ii) Exactly one tail: HT, TH, so $P = \\frac{2}{4} = \\frac{1}{2}$.',
    steps: [
      { step: 'Lists the 4 outcomes and gets $\\frac{3}{4}$ for (i)', marks: 1 },
      { step: 'Gets $\\frac{1}{2}$ for (ii)', marks: 1 },
    ],
  },
  {
    id: 'tb-pr-05', chapter: C, topic: 'Balls and bags', ref: `${CH} · Theoretical probability`,
    type: 'short', complexity: 'medium', marks: 2,
    text: 'A bag holds 5 red, 7 blue and some green beads. If the probability of drawing a green bead at random is $\\frac{1}{4}$, how many green beads are in the bag?',
    answer: 'Let there be $x$ green beads. Then $\\frac{x}{12 + x} = \\frac{1}{4}$, so $4x = 12 + x$, giving $x = 4$.',
    steps: [
      { step: 'Writes $\\frac{x}{12 + x} = \\frac{1}{4}$', marks: 1 },
      { step: 'Gets 4 green beads', marks: 1 },
    ],
  },
  {
    id: 'tb-pr-06', chapter: C, topic: 'Cards', ref: `${CH} · Theoretical probability`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'One card is drawn at random from a well-shuffled deck of 52 playing cards. Find the probability that it is (i) a red face card, (ii) neither an ace nor a king, (iii) a black card that is not a spade.',
    answer: '(i) Red face cards: J, Q, K of hearts and diamonds = 6, so $P = \\frac{6}{52} = \\frac{3}{26}$. (ii) Aces and kings = 8, so $P = \\frac{44}{52} = \\frac{11}{13}$. (iii) Black non-spades are the 13 clubs, so $P = \\frac{13}{52} = \\frac{1}{4}$.',
    steps: [
      { step: 'Gets $\\frac{3}{26}$', marks: 1 },
      { step: 'Gets $\\frac{11}{13}$', marks: 1 },
      { step: 'Gets $\\frac{1}{4}$', marks: 1 },
    ],
  },
  {
    id: 'tb-pr-07', chapter: C, topic: 'Numbers and lottery', ref: `${CH} · Theoretical probability`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'Raffle tickets are numbered 1 to 60, and one is drawn at random. Find the probability that its number is (i) a multiple of 4 or of 6, (ii) a perfect square.',
    answer: '(i) Multiples of 4: 15; multiples of 6: 10; multiples of both (that is, of 12): 5. Favourable $= 15 + 10 - 5 = 20$, so $P = \\frac{20}{60} = \\frac{1}{3}$. (ii) Perfect squares: 1, 4, 9, 16, 25, 36, 49, which is 7, so $P = \\frac{7}{60}$.',
    steps: [
      { step: 'Counts 15 and 10 and removes the 5 common multiples of 12', marks: 1 },
      { step: 'Gets $\\frac{1}{3}$', marks: 1 },
      { step: 'Gets $\\frac{7}{60}$', marks: 1 },
    ],
  },
  {
    id: 'tb-pr-08', chapter: C, topic: 'Calendar and everyday sample spaces', ref: `${CH} · Theoretical probability`,
    type: 'short', complexity: 'medium', marks: 2,
    text: 'A month of 30 days begins on a Wednesday. One date of the month is chosen at random. Find the probability that it falls on (i) a Wednesday, (ii) a Saturday or Sunday.',
    answer: '(i) Wednesdays: 1, 8, 15, 22, 29, which is 5 dates, so $P = \\frac{5}{30} = \\frac{1}{6}$. (ii) Saturdays: 4, 11, 18, 25; Sundays: 5, 12, 19, 26. That is 8 dates, so $P = \\frac{8}{30} = \\frac{4}{15}$.',
    steps: [
      { step: 'Gets $\\frac{1}{6}$', marks: 1 },
      { step: 'Gets $\\frac{4}{15}$', marks: 1 },
    ],
  },
  {
    id: 'tb-pr-09', chapter: C, topic: 'Dice', ref: `${CH} · Theoretical probability`,
    type: 'long', complexity: 'hard', marks: 4,
    text: 'Two fair dice, one red and one green, are thrown together. Find the probability that (i) the product of the numbers is odd, (ii) the sum of the numbers is a prime number, (iii) the numbers differ by exactly 2, (iv) both dice show the same number.',
    answer: 'There are 36 equally likely outcomes. (i) Product odd needs both odd: $3 \\times 3 = 9$, so $P = \\frac{9}{36} = \\frac{1}{4}$. (ii) Prime sums: 2 (1 way), 3 (2), 5 (4), 7 (6), 11 (2), total 15, so $P = \\frac{15}{36} = \\frac{5}{12}$. (iii) Difference 2: (1, 3), (2, 4), (3, 5), (4, 6) and their reverses, 8 outcomes, so $P = \\frac{8}{36} = \\frac{2}{9}$. (iv) Doublets: 6, so $P = \\frac{6}{36} = \\frac{1}{6}$.',
    steps: [
      { step: 'Gets $\\frac{1}{4}$', marks: 1 },
      { step: 'Gets $\\frac{5}{12}$', marks: 1 },
      { step: 'Gets $\\frac{2}{9}$', marks: 1 },
      { step: 'Gets $\\frac{1}{6}$', marks: 1 },
    ],
  },
  {
    id: 'tb-pr-10', chapter: C, topic: 'Balls and bags', ref: `${CH} · Theoretical probability`,
    type: 'long', complexity: 'hard', marks: 4,
    text: 'A jar contains 24 marbles that are red, white or blue. The probability of drawing a red marble is $\\frac{1}{3}$ and of drawing a white marble is $\\frac{1}{4}$. (i) How many blue marbles are there? (ii) If 4 more blue marbles are added, find the new probability of drawing a blue marble.',
    answer: '(i) Red $= \\frac{1}{3} \\times 24 = 8$, white $= \\frac{1}{4} \\times 24 = 6$, so blue $= 24 - 8 - 6 = 10$. (ii) Now there are 14 blue among 28 marbles, so $P(\\text{blue}) = \\frac{14}{28} = \\frac{1}{2}$.',
    steps: [
      { step: 'Finds 8 red and 6 white', marks: 1 },
      { step: 'Gets 10 blue', marks: 1 },
      { step: 'Uses new totals 14 blue out of 28', marks: 1 },
      { step: 'Gets $\\frac{1}{2}$', marks: 1 },
    ],
  },
];
