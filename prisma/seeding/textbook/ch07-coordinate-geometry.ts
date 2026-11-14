import type { TextbookQuestion } from './types.js';

const CH = 'NCERT Class 10 · Ch 7 Coordinate Geometry';
const C = 'Coordinate Geometry';

export const COORDINATE_GEOMETRY: TextbookQuestion[] = [
  {
    id: 'tb-cg-01', chapter: C, topic: 'Distance formula', ref: `${CH} · Distance formula`,
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The distance between the points $(-3, 4)$ and $(5, -2)$ is',
    options: ['$10$', '$2\\sqrt{2}$', '$14$', '$\\sqrt{52}$'],
    answer: 'Correct option: A) $10$, since $\\sqrt{(5 + 3)^{2} + (-2 - 4)^{2}} = \\sqrt{64 + 36} = \\sqrt{100} = 10$. Option B comes from adding the coordinates instead of subtracting, and option C adds the differences $8 + 6$ without squaring.',
  },
  {
    id: 'tb-cg-02', chapter: C, topic: 'Points on axes and distance from axes', ref: `${CH} · Distance formula`,
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The distance of the point $(-7, 3)$ from the $x$-axis is',
    options: ['$7$', '$3$', '$-3$', '$\\sqrt{58}$'],
    answer: 'Correct option: B) $3$. The distance from the $x$-axis is the absolute value of the $y$-coordinate, $|3| = 3$. Option A is the distance from the $y$-axis, a distance cannot be negative, and $\\sqrt{58}$ is the distance from the origin.',
  },
  {
    id: 'tb-cg-03', chapter: C, topic: 'Midpoint', ref: `${CH} · Section formula`,
    type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $(2, -1)$ is the midpoint of the segment joining $(a, 3)$ and $(5, b)$, then $a + b$ equals',
    options: ['$-6$', '$4$', '$-4$', '$6$'],
    answer: 'Correct option: A) $-6$. From $\\frac{a + 5}{2} = 2$, $a = -1$; from $\\frac{3 + b}{2} = -1$, $b = -5$. So $a + b = -6$.',
  },
  {
    id: 'tb-cg-04', chapter: C, topic: 'Distance formula', ref: `${CH} · Distance formula`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'Find the values of $x$ for which the distance between $P(x, 2)$ and $Q(3, -4)$ is 10 units.',
    answer: '$(x - 3)^{2} + (2 + 4)^{2} = 100$, so $(x - 3)^{2} = 64$ and $x - 3 = \\pm 8$. Hence $x = 11$ or $x = -5$.',
    steps: [{ step: 'Writes $(x - 3)^{2} + 36 = 100$', marks: 1 }, { step: 'Gets $x = 11$ or $x = -5$', marks: 1 }],
  },
  {
    id: 'tb-cg-05', chapter: C, topic: 'Midpoint', ref: `${CH} · Section formula`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'The centre of a circle is $(2, -3)$ and one end of a diameter is $(-1, 4)$. Find the coordinates of the other end of the diameter.',
    answer: 'The centre is the midpoint of the diameter. If the other end is $(x, y)$, then $\\frac{-1 + x}{2} = 2$ and $\\frac{4 + y}{2} = -3$, so $x = 5$ and $y = -10$. The other end is $(5, -10)$.',
    steps: [{ step: 'Uses the centre as the midpoint of the diameter', marks: 1 }, { step: 'Finds $(5, -10)$', marks: 1 }],
  },
  {
    id: 'tb-cg-06', chapter: C, topic: 'Section formula', ref: `${CH} · Section formula`,
    type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the coordinates of the point that divides the line segment joining $A(-2, 5)$ and $B(8, -10)$ internally in the ratio $2 : 3$.',
    answer: '$x = \\frac{2(8) + 3(-2)}{2 + 3} = \\frac{10}{5} = 2$ and $y = \\frac{2(-10) + 3(5)}{5} = \\frac{-5}{5} = -1$. The point is $(2, -1)$.',
    steps: [{ step: 'Applies the section formula with $m_1 = 2$, $m_2 = 3$', marks: 1 }, { step: 'Gets $(2, -1)$', marks: 1 }],
  },
  {
    id: 'tb-cg-07', chapter: C, topic: 'Section formula', ref: `${CH} · Section formula`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'In what ratio does the $y$-axis divide the line segment joining $(-4, 7)$ and $(6, -3)$? Find the point of division.',
    answer: 'Let the ratio be $k : 1$. A point on the $y$-axis has $x = 0$: $\\frac{6k - 4}{k + 1} = 0$, so $k = \\frac{2}{3}$ and the ratio is $2 : 3$. Then $y = \\frac{2(-3) + 3(7)}{5} = \\frac{15}{5} = 3$, so the point is $(0, 3)$.',
    steps: [{ step: 'Sets the $x$-coordinate of the dividing point to 0', marks: 1 }, { step: 'Finds the ratio $2 : 3$', marks: 1 }, { step: 'Finds the point $(0, 3)$', marks: 1 }],
  },
  {
    id: 'tb-cg-08', chapter: C, topic: 'Points on axes and distance from axes', ref: `${CH} · Distance formula`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the point on the $x$-axis that is equidistant from $A(2, -5)$ and $B(-2, 9)$.',
    answer: 'Let the point be $P(x, 0)$. $PA^{2} = PB^{2}$: $(x - 2)^{2} + 25 = (x + 2)^{2} + 81$. Expanding, $-4x + 29 = 4x + 85$, so $-8x = 56$ and $x = -7$. The point is $(-7, 0)$ (check: $PA^{2} = PB^{2} = 106$).',
    steps: [{ step: 'Takes the point as $(x, 0)$ and sets $PA^{2} = PB^{2}$', marks: 1 }, { step: 'Simplifies to $-8x = 56$', marks: 1 }, { step: 'Gets $(-7, 0)$', marks: 1 }],
  },
  {
    id: 'tb-cg-09', chapter: C, topic: 'Collinearity using distances', ref: `${CH} · Distance formula`,
    type: 'short', complexity: 'hard', marks: 3,
    text: 'Using the distance formula, show that the points $A(1, -1)$, $B(4, 1)$ and $C(10, 5)$ are collinear.',
    answer: '$AB = \\sqrt{3^{2} + 2^{2}} = \\sqrt{13}$, $BC = \\sqrt{6^{2} + 4^{2}} = \\sqrt{52} = 2\\sqrt{13}$, $AC = \\sqrt{9^{2} + 6^{2}} = \\sqrt{117} = 3\\sqrt{13}$. Since $AB + BC = \\sqrt{13} + 2\\sqrt{13} = 3\\sqrt{13} = AC$, the points are collinear, with $B$ between $A$ and $C$.',
    steps: [{ step: 'Finds $AB = \\sqrt{13}$ and $BC = 2\\sqrt{13}$', marks: 1 }, { step: 'Finds $AC = 3\\sqrt{13}$', marks: 1 }, { step: 'Shows $AB + BC = AC$ and concludes collinear', marks: 1 }],
  },
  {
    id: 'tb-cg-10', chapter: C, topic: 'Geometric shapes from coordinates', ref: `${CH} · Distance formula`,
    type: 'long', complexity: 'medium', marks: 4,
    text: 'Show that the points $A(-1, -2)$, $B(3, 1)$, $C(6, 5)$ and $D(2, 2)$, taken in order, are the vertices of a rhombus, and that this rhombus is not a square.',
    answer: '$AB = \\sqrt{4^{2} + 3^{2}} = 5$, $BC = \\sqrt{3^{2} + 4^{2}} = 5$, $CD = \\sqrt{4^{2} + 3^{2}} = 5$, $DA = \\sqrt{3^{2} + 4^{2}} = 5$. All four sides are equal, so $ABCD$ is a rhombus. Diagonals: $AC = \\sqrt{7^{2} + 7^{2}} = 7\\sqrt{2}$ and $BD = \\sqrt{1^{2} + 1^{2}} = \\sqrt{2}$. The diagonals are not equal, so it is not a square.',
    steps: [
      { step: 'Finds all four sides equal to 5', marks: 1 },
      { step: 'Concludes $ABCD$ is a rhombus', marks: 1 },
      { step: 'Finds $AC = 7\\sqrt{2}$ and $BD = \\sqrt{2}$', marks: 1 },
      { step: 'Concludes it is not a square because the diagonals are unequal', marks: 1 },
    ],
  },
  {
    id: 'tb-cg-11', chapter: C, topic: 'Section formula', ref: `${CH} · Section formula`,
    type: 'long', complexity: 'hard', marks: 5,
    text: 'Find the coordinates of the two points $P$ and $Q$ that divide the line segment joining $A(-3, 7)$ and $B(9, -2)$ into three equal parts, with $P$ nearer to $A$. Then verify, using the distance formula, that $AP = PQ = QB$.',
    answer: '$P$ divides $AB$ in the ratio $1 : 2$: $P = \\left(\\frac{9 + 2(-3)}{3}, \\frac{-2 + 2(7)}{3}\\right) = (1, 4)$. $Q$ divides $AB$ in the ratio $2 : 1$: $Q = \\left(\\frac{2(9) - 3}{3}, \\frac{2(-2) + 7}{3}\\right) = (5, 1)$. Then $AP = \\sqrt{4^{2} + 3^{2}} = 5$, $PQ = \\sqrt{4^{2} + 3^{2}} = 5$ and $QB = \\sqrt{4^{2} + 3^{2}} = 5$, so $AP = PQ = QB$ (and $AB = 15$).',
    steps: [
      { step: 'States that $P$ and $Q$ divide $AB$ in the ratios $1 : 2$ and $2 : 1$', marks: 1 },
      { step: 'Finds $P(1, 4)$', marks: 1 },
      { step: 'Finds $Q(5, 1)$', marks: 1 },
      { step: 'Computes $AP$, $PQ$ and $QB$', marks: 1 },
      { step: 'Shows all three equal 5', marks: 1 },
    ],
  },
];
