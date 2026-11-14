import type { TextbookQuestion } from '../types.js';

const R = 'NCERT Class 10 · Ch 4 Quadratic Equations · Same skill as';
const C = 'Quadratic Equations';

export const NCERT_CH04: TextbookQuestion[] = [
  {
    id: 'nc-04-ex01', chapter: C, topic: 'Identifying and forming quadratic equations', ref: `${R} Example 1`,
    type: 'short', complexity: 'easy', marks: 3,
    text: 'Write each situation as a quadratic equation in standard form. Do not solve.\n(i) Asha and Bilal have 52 stickers between them. Each of them gives away 4 stickers, and the product of the numbers of stickers they have left is 340. Take Asha\'s starting number of stickers as $x$.\n(ii) A home bakery bakes some cakes each day. On one day the cost of making each cake (in rupees) was 60 minus the number of cakes baked that day, and the total cost for the day was ₹ 800. Take the number of cakes baked that day as $x$.',
    answer: '(i) Bilal starts with $52 - x$. After giving away 4 each they have $x - 4$ and $48 - x$. So $(x - 4)(48 - x) = 340$, i.e. $-x^{2} + 52x - 192 = 340$, i.e. $x^{2} - 52x + 532 = 0$.\n(ii) Cost of each cake $= 60 - x$, so the total cost is $x(60 - x) = 800$, i.e. $60x - x^{2} = 800$, i.e. $x^{2} - 60x + 800 = 0$.',
    steps: [
      { step: '(i) Writes the remaining stickers as $x - 4$ and $48 - x$ and forms $(x-4)(48-x) = 340$', marks: 1 },
      { step: '(i) Simplifies to $x^{2} - 52x + 532 = 0$', marks: 1 },
      { step: '(ii) Forms $x(60 - x) = 800$ and gets $x^{2} - 60x + 800 = 0$', marks: 1 },
    ],
  },
  {
    id: 'nc-04-ex02', chapter: C, topic: 'Identifying and forming quadratic equations', ref: `${R} Example 2`,
    type: 'long', complexity: 'easy', marks: 4,
    text: 'Check whether each of the following is a quadratic equation:\n(i) $(x - 3)^{2} + 2 = 3x - 1$\n(ii) $x(x + 4) + 5 = (x + 3)(x - 3)$\n(iii) $x(3x - 2) = 2x^{2} + 5$\n(iv) $(x + 1)^{3} = x^{3} + 7$',
    answer: '(i) LHS $= x^{2} - 6x + 11$, so $x^{2} - 6x + 11 = 3x - 1$, i.e. $x^{2} - 9x + 12 = 0$. Quadratic.\n(ii) $x^{2} + 4x + 5 = x^{2} - 9$, i.e. $4x + 14 = 0$. This is linear, so not quadratic.\n(iii) $3x^{2} - 2x = 2x^{2} + 5$, i.e. $x^{2} - 2x - 5 = 0$. Quadratic.\n(iv) $x^{3} + 3x^{2} + 3x + 1 = x^{3} + 7$, i.e. $3x^{2} + 3x - 6 = 0$, or $x^{2} + x - 2 = 0$. The cubic terms cancel, so it is quadratic.',
    steps: [
      { step: '(i) Simplifies to $x^{2} - 9x + 12 = 0$: quadratic', marks: 1 },
      { step: '(ii) Simplifies to $4x + 14 = 0$: not quadratic', marks: 1 },
      { step: '(iii) Simplifies to $x^{2} - 2x - 5 = 0$: quadratic', marks: 1 },
      { step: '(iv) Cubic terms cancel, giving $x^{2} + x - 2 = 0$: quadratic', marks: 1 },
    ],
  },
  {
    id: 'nc-04-4-1-q01', chapter: C, topic: 'Identifying and forming quadratic equations', ref: `${R} Ex 4.1 Q1`,
    type: 'long', complexity: 'medium', marks: 4,
    text: 'Check whether each of the following is a quadratic equation:\n(i) $(x + 2)^{2} = 3(x + 1)$\n(ii) $(x - 1)(x + 4) = (x + 3)(x - 2)$\n(iii) $(x - 1)^{3} = 3x(x^{2} + 1)$\n(iv) $x^{3} + 2x^{2} - 5 = (x + 1)^{3}$',
    answer: '(i) $x^{2} + 4x + 4 = 3x + 3$, i.e. $x^{2} + x + 1 = 0$. Quadratic.\n(ii) $x^{2} + 3x - 4 = x^{2} + x - 6$, i.e. $2x + 2 = 0$. Linear, so not quadratic.\n(iii) $x^{3} - 3x^{2} + 3x - 1 = 3x^{3} + 3x$, i.e. $2x^{3} + 3x^{2} + 1 = 0$. Degree 3, so not quadratic.\n(iv) $x^{3} + 2x^{2} - 5 = x^{3} + 3x^{2} + 3x + 1$, i.e. $x^{2} + 3x + 6 = 0$. Quadratic.',
    steps: [
      { step: '(i) Gets $x^{2} + x + 1 = 0$: quadratic', marks: 1 },
      { step: '(ii) Gets $2x + 2 = 0$: not quadratic', marks: 1 },
      { step: '(iii) Gets $2x^{3} + 3x^{2} + 1 = 0$: not quadratic', marks: 1 },
      { step: '(iv) Gets $x^{2} + 3x + 6 = 0$: quadratic', marks: 1 },
    ],
  },
  {
    id: 'nc-04-4-1-q02', chapter: C, topic: 'Identifying and forming quadratic equations', ref: `${R} Ex 4.1 Q2`,
    type: 'long', complexity: 'medium', marks: 4,
    text: 'Write each situation as a quadratic equation in standard form. Do not solve.\n(i) A rectangular garden has area $396 \\text{ m}^{2}$. Its length is 3 m less than three times its width. Take the width as $w$ m.\n(ii) The product of two consecutive even positive integers is 168. Take the smaller one as $x$.\n(iii) Meera\'s aunt is 24 years older than Meera. Five years ago the product of their ages (in years) was 256. Take Meera\'s present age as $x$ years.\n(iv) A bus covers 360 km at a uniform speed. Had its speed been 10 km/h more, the trip would have taken 3 hours less. Take the speed as $x$ km/h.',
    answer: '(i) $w(3w - 3) = 396$, i.e. $3w^{2} - 3w - 396 = 0$, or $w^{2} - w - 132 = 0$.\n(ii) $x(x + 2) = 168$, i.e. $x^{2} + 2x - 168 = 0$.\n(iii) Five years ago the ages were $x - 5$ and $x + 19$. So $(x - 5)(x + 19) = 256$, i.e. $x^{2} + 14x - 95 = 256$, i.e. $x^{2} + 14x - 351 = 0$.\n(iv) Time at speed $x$ is $\\frac{360}{x}$ h; at speed $x + 10$ it is $\\frac{360}{x + 10}$ h. So $\\frac{360}{x} - \\frac{360}{x + 10} = 3$, giving $360(x + 10) - 360x = 3x(x + 10)$, i.e. $3600 = 3x^{2} + 30x$, or $x^{2} + 10x - 1200 = 0$.',
    steps: [
      { step: '(i) Gets $w^{2} - w - 132 = 0$', marks: 1 },
      { step: '(ii) Gets $x^{2} + 2x - 168 = 0$', marks: 1 },
      { step: '(iii) Uses ages $x - 5$ and $x + 19$ and gets $x^{2} + 14x - 351 = 0$', marks: 1 },
      { step: '(iv) Forms the time equation and gets $x^{2} + 10x - 1200 = 0$', marks: 1 },
    ],
  },
  {
    id: 'nc-04-ex03', chapter: C, topic: 'Solving by factorisation or formula', ref: `${R} Example 3`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'Find the roots of $3x^{2} - 7x + 2 = 0$ by factorisation.',
    answer: 'Split $-7x$ as $-6x - x$ (since $(-6x)(-x) = 6x^{2} = 3x^{2} \\times 2$): $3x^{2} - 6x - x + 2 = 3x(x - 2) - 1(x - 2) = (3x - 1)(x - 2)$. So $3x - 1 = 0$ or $x - 2 = 0$, giving $x = \\frac{1}{3}$ or $x = 2$.',
    steps: [
      { step: 'Factorises as $(3x - 1)(x - 2)$', marks: 1 },
      { step: 'Gives roots $\\frac{1}{3}$ and $2$', marks: 1 },
    ],
  },
  {
    id: 'nc-04-ex04', chapter: C, topic: 'Solving by factorisation or formula', ref: `${R} Example 4`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'Find the roots of the quadratic equation $10x^{2} - x - 3 = 0$.',
    answer: '$10x^{2} - x - 3 = 10x^{2} + 5x - 6x - 3 = 5x(2x + 1) - 3(2x + 1) = (5x - 3)(2x + 1)$. So $x = \\frac{3}{5}$ or $x = -\\frac{1}{2}$.',
    steps: [
      { step: 'Factorises as $(5x - 3)(2x + 1)$', marks: 1 },
      { step: 'Gives roots $\\frac{3}{5}$ and $-\\frac{1}{2}$', marks: 1 },
    ],
  },
  {
    id: 'nc-04-ex05', chapter: C, topic: 'Solving by factorisation or formula', ref: `${R} Example 5`,
    type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the roots of the quadratic equation $2x^{2} - 2\\sqrt{10}\\,x + 5 = 0$.',
    answer: '$2x^{2} - 2\\sqrt{10}\\,x + 5 = 2x^{2} - \\sqrt{10}\\,x - \\sqrt{10}\\,x + 5 = \\sqrt{2}x(\\sqrt{2}x - \\sqrt{5}) - \\sqrt{5}(\\sqrt{2}x - \\sqrt{5}) = (\\sqrt{2}x - \\sqrt{5})^{2}$. So $\\sqrt{2}x - \\sqrt{5} = 0$, i.e. $x = \\frac{\\sqrt{5}}{\\sqrt{2}} = \\frac{\\sqrt{10}}{2}$. The root is repeated: the roots are $\\frac{\\sqrt{10}}{2}, \\frac{\\sqrt{10}}{2}$.',
    steps: [
      { step: 'Factorises as $(\\sqrt{2}x - \\sqrt{5})(\\sqrt{2}x - \\sqrt{5})$', marks: 1 },
      { step: 'States the repeated root $\\frac{\\sqrt{10}}{2}$ (twice)', marks: 1 },
    ],
  },
  {
    id: 'nc-04-ex06', chapter: C, topic: 'Word problems', ref: `${R} Example 6`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'The reading room of a community library is rectangular with a floor area of $189 \\text{ m}^{2}$. Its length is 3 m more than twice its breadth. Find the length and breadth of the room.',
    answer: 'Let the breadth be $x$ m; the length is $(2x + 3)$ m. Then $x(2x + 3) = 189$, i.e. $2x^{2} + 3x - 189 = 0$. Split: $2x^{2} - 18x + 21x - 189 = 2x(x - 9) + 21(x - 9) = (x - 9)(2x + 21) = 0$. So $x = 9$ or $x = -10.5$. A breadth cannot be negative, so the breadth is 9 m and the length is $2(9) + 3 = 21$ m.',
    steps: [
      { step: 'Forms $2x^{2} + 3x - 189 = 0$', marks: 1 },
      { step: 'Factorises as $(x - 9)(2x + 21) = 0$', marks: 1 },
      { step: 'Rejects the negative root; breadth 9 m, length 21 m', marks: 1 },
    ],
  },
  {
    id: 'nc-04-4-2-q01', chapter: C, topic: 'Solving by factorisation or formula', ref: `${R} Ex 4.2 Q1`,
    type: 'long', complexity: 'medium', marks: 4,
    text: 'Find the roots of the following quadratic equations by factorisation:\n(i) $x^{2} - 2x - 15 = 0$\n(ii) $3x^{2} + 5x - 2 = 0$\n(iii) $\\sqrt{3}x^{2} + 10x + 7\\sqrt{3} = 0$\n(iv) $4x^{2} - 2x + \\frac{1}{4} = 0$',
    answer: '(i) $(x - 5)(x + 3) = 0$, so $x = 5, -3$.\n(ii) $3x^{2} + 6x - x - 2 = 3x(x + 2) - 1(x + 2) = (3x - 1)(x + 2)$, so $x = \\frac{1}{3}, -2$.\n(iii) $\\sqrt{3}x^{2} + 3x + 7x + 7\\sqrt{3} = \\sqrt{3}x(x + \\sqrt{3}) + 7(x + \\sqrt{3}) = (\\sqrt{3}x + 7)(x + \\sqrt{3})$, so $x = -\\frac{7}{\\sqrt{3}} = -\\frac{7\\sqrt{3}}{3}$ or $x = -\\sqrt{3}$.\n(iv) Multiply by 4: $16x^{2} - 8x + 1 = 0$, i.e. $(4x - 1)^{2} = 0$, so $x = \\frac{1}{4}, \\frac{1}{4}$.',
    steps: [
      { step: '(i) Roots $5$ and $-3$', marks: 1 },
      { step: '(ii) Roots $\\frac{1}{3}$ and $-2$', marks: 1 },
      { step: '(iii) Factorises as $(\\sqrt{3}x + 7)(x + \\sqrt{3})$; roots $-\\frac{7\\sqrt{3}}{3}$ and $-\\sqrt{3}$', marks: 1 },
      { step: '(iv) Gets $(4x - 1)^{2} = 0$; repeated root $\\frac{1}{4}$', marks: 1 },
    ],
  },
  {
    id: 'nc-04-4-2-q02', chapter: C, topic: 'Word problems', ref: `${R} Ex 4.2 Q2`,
    type: 'long', complexity: 'medium', marks: 4,
    text: '(i) Kiran and Lata have 60 pencils between them. Each of them loses 6 pencils, and the product of the numbers of pencils they now have is 432. How many pencils did each have at the start?\n(ii) A small workshop makes some chairs in a day. On one day the cost of making each chair (in rupees) was 70 minus the number of chairs made, and the total cost that day was ₹ 1200. How many chairs were made that day?',
    answer: '(i) Let Kiran have $x$; Lata has $60 - x$. After the loss: $(x - 6)(54 - x) = 432$, i.e. $-x^{2} + 60x - 324 = 432$, i.e. $x^{2} - 60x + 756 = 0$. Now $756 = 18 \\times 42$ and $18 + 42 = 60$, so $(x - 18)(x - 42) = 0$ and $x = 18$ or $42$. One of them had 18 pencils and the other had 42.\n(ii) Let $x$ chairs be made. Then $x(70 - x) = 1200$, i.e. $x^{2} - 70x + 1200 = 0$, i.e. $(x - 30)(x - 40) = 0$. So 30 chairs (at ₹ 40 each) or 40 chairs (at ₹ 30 each) were made; both fit the data.',
    steps: [
      { step: '(i) Forms $x^{2} - 60x + 756 = 0$', marks: 1 },
      { step: '(i) Solves: the two had 18 and 42 pencils', marks: 1 },
      { step: '(ii) Forms $x^{2} - 70x + 1200 = 0$', marks: 1 },
      { step: '(ii) Solves: 30 or 40 chairs', marks: 1 },
    ],
  },
  {
    id: 'nc-04-4-2-q03', chapter: C, topic: 'Word problems', ref: `${R} Ex 4.2 Q3`,
    type: 'short', complexity: 'easy', marks: 3,
    text: 'Find two numbers whose sum is 31 and whose product is 228.',
    answer: 'Let one number be $x$; the other is $31 - x$. Then $x(31 - x) = 228$, i.e. $x^{2} - 31x + 228 = 0$. Since $12 \\times 19 = 228$ and $12 + 19 = 31$, $(x - 12)(x - 19) = 0$. So the numbers are 12 and 19.',
    steps: [
      { step: 'Forms $x^{2} - 31x + 228 = 0$', marks: 1 },
      { step: 'Factorises as $(x - 12)(x - 19) = 0$', marks: 1 },
      { step: 'States the numbers 12 and 19', marks: 1 },
    ],
  },
  {
    id: 'nc-04-4-2-q04', chapter: C, topic: 'Word problems', ref: `${R} Ex 4.2 Q4`,
    type: 'short', complexity: 'easy', marks: 3,
    text: 'Find two consecutive positive integers the sum of whose squares is 481.',
    answer: 'Let the integers be $x$ and $x + 1$. Then $x^{2} + (x + 1)^{2} = 481$, i.e. $2x^{2} + 2x - 480 = 0$, or $x^{2} + x - 240 = 0$. So $(x + 16)(x - 15) = 0$ and $x = 15$ or $x = -16$. Since $x$ is positive, $x = 15$: the integers are 15 and 16 (check: $225 + 256 = 481$).',
    steps: [
      { step: 'Forms $x^{2} + x - 240 = 0$', marks: 1 },
      { step: 'Factorises as $(x + 16)(x - 15) = 0$', marks: 1 },
      { step: 'Rejects $-16$; integers 15 and 16', marks: 1 },
    ],
  },
  {
    id: 'nc-04-4-2-q05', chapter: C, topic: 'Word problems', ref: `${R} Ex 4.2 Q5`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A sail is cut in the shape of a right-angled triangle. One of the sides containing the right angle is 17 cm longer than the other, and the longest side is 25 cm. Find the lengths of the other two sides.',
    answer: 'Let the shorter side be $x$ cm; the other is $(x + 17)$ cm. By Pythagoras, $x^{2} + (x + 17)^{2} = 25^{2}$, i.e. $2x^{2} + 34x + 289 = 625$, so $x^{2} + 17x - 168 = 0$. Then $(x + 24)(x - 7) = 0$, so $x = 7$ (a length cannot be $-24$). The sides are 7 cm and 24 cm.',
    steps: [
      { step: 'Uses Pythagoras: $x^{2} + (x + 17)^{2} = 625$', marks: 1 },
      { step: 'Gets $x^{2} + 17x - 168 = 0$ and factorises', marks: 1 },
      { step: 'Sides 7 cm and 24 cm', marks: 1 },
    ],
  },
  {
    id: 'nc-04-4-2-q06', chapter: C, topic: 'Word problems', ref: `${R} Ex 4.2 Q6`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A tailoring unit stitches some shirts in a day. On one day, the cost of stitching each shirt (in rupees) was 4 less than three times the number of shirts stitched, and the total cost that day was ₹ 160. Find the number of shirts stitched and the cost of each shirt.',
    answer: 'Let $x$ shirts be stitched; each costs ₹ $(3x - 4)$. Then $x(3x - 4) = 160$, i.e. $3x^{2} - 4x - 160 = 0$. Split: $3x^{2} - 24x + 20x - 160 = 3x(x - 8) + 20(x - 8) = (3x + 20)(x - 8) = 0$. So $x = 8$ (the number cannot be negative). 8 shirts were stitched, each costing $3(8) - 4 = ₹ 20$.',
    steps: [
      { step: 'Forms $3x^{2} - 4x - 160 = 0$', marks: 1 },
      { step: 'Factorises as $(3x + 20)(x - 8) = 0$', marks: 1 },
      { step: '8 shirts at ₹ 20 each', marks: 1 },
    ],
  },
  {
    id: 'nc-04-ex07', chapter: C, topic: 'Nature of roots by discriminant', ref: `${R} Example 7`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'Find the discriminant of $3x^{2} - 5x + 4 = 0$ and hence state the nature of its roots.',
    answer: 'Here $a = 3$, $b = -5$, $c = 4$. Discriminant $b^{2} - 4ac = 25 - 48 = -23 < 0$. So the equation has no real roots.',
    steps: [
      { step: 'Computes $b^{2} - 4ac = -23$', marks: 1 },
      { step: 'Concludes there are no real roots', marks: 1 },
    ],
  },
  {
    id: 'nc-04-ex08', chapter: C, topic: 'Nature of roots by discriminant', ref: `${R} Example 8`,
    type: 'long', complexity: 'hard', marks: 4,
    text: 'A circular pond has diameter 10 m. Two benches P and Q stand at the two ends of a diameter on its edge. A lamp post is to be fixed at a point L on the edge of the pond so that its distance from one bench is 2 m more than its distance from the other bench. Is this possible? If so, how far from each bench should the lamp post be?',
    answer: 'Let $LQ = x$ m, so $LP = (x + 2)$ m. Since PQ is a diameter, the angle PLQ is $90^{\\circ}$ (angle in a semicircle), so $LP^{2} + LQ^{2} = PQ^{2}$: $(x + 2)^{2} + x^{2} = 100$, i.e. $2x^{2} + 4x - 96 = 0$, or $x^{2} + 2x - 48 = 0$. Discriminant $= 4 + 192 = 196 > 0$, so there are two real roots and the placement is possible. $x = \\frac{-2 \\pm 14}{2} = 6$ or $-8$. A distance cannot be negative, so $x = 6$. The lamp post should be 6 m from one bench and 8 m from the other.',
    steps: [
      { step: 'Uses the right angle in a semicircle to form $(x + 2)^{2} + x^{2} = 100$', marks: 1 },
      { step: 'Reduces to $x^{2} + 2x - 48 = 0$', marks: 1 },
      { step: 'Discriminant $196 > 0$, so it is possible', marks: 1 },
      { step: 'Solves: 6 m and 8 m from the two benches', marks: 1 },
    ],
  },
  {
    id: 'nc-04-ex09', chapter: C, topic: 'Nature of roots by discriminant', ref: `${R} Example 9`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'Find the discriminant of $5x^{2} - 2x + \\frac{1}{5} = 0$, state the nature of its roots, and find the roots if they are real.',
    answer: '$a = 5$, $b = -2$, $c = \\frac{1}{5}$. Discriminant $= 4 - 4 \\times 5 \\times \\frac{1}{5} = 4 - 4 = 0$, so there are two equal real roots, each $-\\frac{b}{2a} = \\frac{2}{10} = \\frac{1}{5}$. The roots are $\\frac{1}{5}, \\frac{1}{5}$.',
    steps: [
      { step: 'Discriminant $= 0$: two equal real roots', marks: 1 },
      { step: 'Roots $\\frac{1}{5}, \\frac{1}{5}$', marks: 1 },
    ],
  },
  {
    id: 'nc-04-4-3-q01', chapter: C, topic: 'Nature of roots by discriminant', ref: `${R} Ex 4.3 Q1`,
    type: 'long', complexity: 'medium', marks: 4,
    text: 'Find the nature of the roots of each quadratic equation. If real roots exist, find them.\n(i) $3x^{2} - 2x + 4 = 0$\n(ii) $2x^{2} - 2\\sqrt{6}\\,x + 3 = 0$\n(iii) $3x^{2} - 8x + 2 = 0$',
    answer: '(i) $D = 4 - 48 = -44 < 0$: no real roots.\n(ii) $D = 24 - 24 = 0$: two equal real roots, each $\\frac{2\\sqrt{6}}{4} = \\frac{\\sqrt{6}}{2}$.\n(iii) $D = 64 - 24 = 40 > 0$: two distinct real roots, $x = \\frac{8 \\pm \\sqrt{40}}{6} = \\frac{8 \\pm 2\\sqrt{10}}{6} = \\frac{4 \\pm \\sqrt{10}}{3}$.',
    steps: [
      { step: '(i) $D = -44$: no real roots', marks: 1 },
      { step: '(ii) $D = 0$: equal roots $\\frac{\\sqrt{6}}{2}, \\frac{\\sqrt{6}}{2}$', marks: 1 },
      { step: '(iii) $D = 40 > 0$: distinct real roots', marks: 1 },
      { step: '(iii) Roots $\\frac{4 \\pm \\sqrt{10}}{3}$', marks: 1 },
    ],
  },
  {
    id: 'nc-04-4-3-q02', chapter: C, topic: 'Value of k for equal roots', ref: `${R} Ex 4.3 Q2`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the value(s) of $k$ for which each equation has two equal roots:\n(i) $3x^{2} + kx + 12 = 0$\n(ii) $kx(x - 3) + 9 = 0$',
    answer: '(i) Equal roots need $k^{2} - 4(3)(12) = 0$, i.e. $k^{2} = 144$, so $k = 12$ or $k = -12$.\n(ii) The equation is $kx^{2} - 3kx + 9 = 0$. Equal roots need $9k^{2} - 36k = 0$, i.e. $9k(k - 4) = 0$, so $k = 0$ or $k = 4$. For $k = 0$ the equation is not quadratic (it reads $9 = 0$), so $k = 4$.',
    steps: [
      { step: '(i) Sets $k^{2} - 144 = 0$ and gets $k = \\pm 12$', marks: 1 },
      { step: '(ii) Writes $kx^{2} - 3kx + 9 = 0$ and sets $9k^{2} - 36k = 0$', marks: 1 },
      { step: '(ii) Rejects $k = 0$; $k = 4$', marks: 1 },
    ],
  },
  {
    id: 'nc-04-4-3-q03', chapter: C, topic: 'Word problems', ref: `${R} Ex 4.3 Q3`,
    type: 'short', complexity: 'easy', marks: 3,
    text: 'Can a rectangular play area be laid out so that its length is three times its breadth and its area is $1200 \\text{ m}^{2}$? If so, find its length and breadth.',
    answer: 'Let the breadth be $b$ m; the length is $3b$ m. Then $3b^{2} = 1200$, i.e. $b^{2} - 400 = 0$. Discriminant $= 0 + 1600 > 0$, so real roots exist: $b = \\pm 20$. Taking the positive value, the breadth is 20 m and the length is 60 m. So it is possible.',
    steps: [
      { step: 'Forms $3b^{2} = 1200$, i.e. $b^{2} - 400 = 0$', marks: 1 },
      { step: 'Shows real roots exist (discriminant positive)', marks: 1 },
      { step: 'Breadth 20 m, length 60 m', marks: 1 },
    ],
  },
  {
    id: 'nc-04-4-3-q04', chapter: C, topic: 'Word problems', ref: `${R} Ex 4.3 Q4`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'Is the following possible? If so, find the present ages.\nThe ages of two cousins add up to 24 years. Three years ago, the product of their ages (in years) was 110.',
    answer: 'Let one cousin be $x$ years old; the other is $24 - x$. Three years ago: $(x - 3)(21 - x) = 110$, i.e. $-x^{2} + 24x - 63 = 110$, i.e. $x^{2} - 24x + 173 = 0$. Discriminant $= 576 - 692 = -116 < 0$, so there are no real roots. The situation is not possible.',
    steps: [
      { step: 'Forms $(x - 3)(21 - x) = 110$', marks: 1 },
      { step: 'Simplifies to $x^{2} - 24x + 173 = 0$', marks: 1 },
      { step: 'Discriminant $-116 < 0$: not possible', marks: 1 },
    ],
  },
  {
    id: 'nc-04-4-3-q05', chapter: C, topic: 'Word problems', ref: `${R} Ex 4.3 Q5`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'Is it possible to fence a rectangular lawn with a perimeter of 60 m and an area of $225 \\text{ m}^{2}$? If so, find its length and breadth.',
    answer: 'Length + breadth $= 30$. Let the length be $l$ m; the breadth is $30 - l$. Then $l(30 - l) = 225$, i.e. $l^{2} - 30l + 225 = 0$. Discriminant $= 900 - 900 = 0$, so there is one (repeated) real root $l = 15$. It is possible: length = breadth = 15 m, so the lawn is a square.',
    steps: [
      { step: 'Forms $l^{2} - 30l + 225 = 0$', marks: 1 },
      { step: 'Discriminant $0$, so it is possible', marks: 1 },
      { step: 'Length and breadth both 15 m', marks: 1 },
    ],
  },
];
