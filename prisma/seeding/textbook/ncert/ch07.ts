import type { TextbookQuestion } from '../types.js';

const C = 'Coordinate Geometry';
const R = 'NCERT Class 10 · Ch 7 Coordinate Geometry · Same skill as';

export const NCERT_CH07: TextbookQuestion[] = [
  // ---------- Section 7.2 examples ----------
  {
    id: 'nc-07-ex01', chapter: C, topic: 'Geometric shapes from coordinates', ref: `${R} Example 1`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'Do the points A(−1, 2), B(3, 4) and C(4, 2) form a triangle? If so, name the type of triangle.',
    answer: '$AB = \\sqrt{4^{2} + 2^{2}} = \\sqrt{20} \\approx 4.47$, $BC = \\sqrt{1^{2} + 2^{2}} = \\sqrt{5} \\approx 2.24$, $AC = \\sqrt{5^{2} + 0^{2}} = 5$. The sum of any two of these is greater than the third, so the points form a triangle. Also $AB^{2} + BC^{2} = 20 + 5 = 25 = AC^{2}$, so by the converse of Pythagoras’ theorem $\\angle B = 90^\\circ$. The sides are all different, so it is a right-angled scalene triangle.',
    steps: [
      { step: 'Finds AB, BC and AC', marks: 1 },
      { step: 'Checks the triangle inequality', marks: 1 },
      { step: 'Uses $AB^{2} + BC^{2} = AC^{2}$ to conclude a right triangle', marks: 1 },
    ],
  },
  {
    id: 'nc-07-ex02', chapter: C, topic: 'Geometric shapes from coordinates', ref: `${R} Example 2`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'Show that the points A(2, 1), B(6, 3), C(4, 7) and D(0, 5) are the vertices of a square.',
    answer: '$AB = \\sqrt{4^{2} + 2^{2}} = \\sqrt{20}$, $BC = \\sqrt{2^{2} + 4^{2}} = \\sqrt{20}$, $CD = \\sqrt{4^{2} + 2^{2}} = \\sqrt{20}$, $DA = \\sqrt{2^{2} + 4^{2}} = \\sqrt{20}$. Diagonals: $AC = \\sqrt{2^{2} + 6^{2}} = \\sqrt{40}$, $BD = \\sqrt{6^{2} + 2^{2}} = \\sqrt{40}$. All four sides are equal and the diagonals are equal, so ABCD is a square.',
    steps: [
      { step: 'Shows all four sides equal $\\sqrt{20}$', marks: 1 },
      { step: 'Shows both diagonals equal $\\sqrt{40}$', marks: 1 },
      { step: 'Concludes ABCD is a square', marks: 1 },
    ],
  },
  {
    id: 'nc-07-ex03', chapter: C, topic: 'Collinearity using distances', ref: `${R} Example 3`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'On a garden plan drawn on a grid, three saplings are planted at P(1, 2), Q(4, 6) and R(10, 14). Are the three saplings in a straight line? Give reasons.',
    answer: '$PQ = \\sqrt{3^{2} + 4^{2}} = 5$, $QR = \\sqrt{6^{2} + 8^{2}} = 10$, $PR = \\sqrt{9^{2} + 12^{2}} = 15$. Since $PQ + QR = 5 + 10 = 15 = PR$, the points are collinear, so the saplings are in a straight line.',
    steps: [
      { step: 'Finds PQ, QR and PR', marks: 1 },
      { step: 'Shows $PQ + QR = PR$ and concludes collinear', marks: 1 },
    ],
  },
  {
    id: 'nc-07-ex04', chapter: C, topic: 'Distance formula', ref: `${R} Example 4`,
    type: 'short', complexity: 'medium', marks: 2,
    text: 'A point P(x, y) is the same distance from A(4, −2) as from B(−2, 6). Write the equation that $x$ and $y$ must satisfy.',
    answer: 'Let P(x, y) satisfy $PA^{2} = PB^{2}$: $(x - 4)^{2} + (y + 2)^{2} = (x + 2)^{2} + (y - 6)^{2}$. Expanding: $x^{2} - 8x + 16 + y^{2} + 4y + 4 = x^{2} + 4x + 4 + y^{2} - 12y + 36$, so $-12x + 16y - 20 = 0$, i.e. $3x - 4y + 5 = 0$.',
    steps: [
      { step: 'Sets $PA^{2} = PB^{2}$ with the distance formula', marks: 1 },
      { step: 'Simplifies to $3x - 4y + 5 = 0$', marks: 1 },
    ],
  },
  {
    id: 'nc-07-ex05', chapter: C, topic: 'Points on axes and distance from axes', ref: `${R} Example 5`,
    type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the point on the y-axis that is equidistant from A(4, 3) and B(−2, 5).',
    answer: 'A point on the y-axis is P(0, y). $PA^{2} = PB^{2}$: $16 + (3 - y)^{2} = 4 + (5 - y)^{2}$, so $25 - 6y + y^{2} = 29 - 10y + y^{2}$, giving $4y = 4$ and $y = 1$. The point is (0, 1). Check: $PA^{2} = 16 + 4 = 20$ and $PB^{2} = 4 + 16 = 20$.',
    steps: [
      { step: 'Takes P(0, y) and sets $PA^{2} = PB^{2}$', marks: 1 },
      { step: 'Solves $y = 1$, point (0, 1)', marks: 1 },
    ],
  },

  // ---------- Exercise 7.1 ----------
  {
    id: 'nc-07-7-1-q01', chapter: C, topic: 'Distance formula', ref: `${R} Ex 7.1 Q1`,
    type: 'short', complexity: 'easy', marks: 3,
    text: 'Find the distance between each pair of points: (i) (1, −2) and (4, 2) (ii) (−6, 3) and (−2, −5) (iii) $(a + b, a - b)$ and $(a - b, a + b)$.',
    answer: '(i) $\\sqrt{3^{2} + 4^{2}} = 5$. (ii) $\\sqrt{4^{2} + (-8)^{2}} = \\sqrt{80} = 4\\sqrt{5}$. (iii) Differences are $-2b$ and $2b$, so distance $= \\sqrt{4b^{2} + 4b^{2}} = 2\\sqrt{2}\\,|b|$.',
    steps: [
      { step: 'Part (i): 5', marks: 1 },
      { step: 'Part (ii): $4\\sqrt{5}$', marks: 1 },
      { step: 'Part (iii): $2\\sqrt{2}\\,|b|$', marks: 1 },
    ],
  },
  {
    id: 'nc-07-7-1-q02', chapter: C, topic: 'Distance formula', ref: `${R} Ex 7.1 Q2`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'A ferry port is 24 km east and 7 km north of a lighthouse. Taking the lighthouse as the origin and 1 km as one unit on both axes, write the coordinates of the port and find the straight-line distance between the lighthouse and the port.',
    answer: 'The port is at (24, 7). Distance $= \\sqrt{24^{2} + 7^{2}} = \\sqrt{576 + 49} = \\sqrt{625} = 25$ km.',
    steps: [
      { step: 'Writes the port as (24, 7)', marks: 1 },
      { step: 'Finds the distance 25 km', marks: 1 },
    ],
  },
  {
    id: 'nc-07-7-1-q03', chapter: C, topic: 'Collinearity using distances', ref: `${R} Ex 7.1 Q3`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'Using the distance formula, determine whether the points A(2, −1), B(4, 3) and C(−1, −7) are collinear.',
    answer: '$AB = \\sqrt{2^{2} + 4^{2}} = \\sqrt{20} = 2\\sqrt{5}$, $AC = \\sqrt{3^{2} + 6^{2}} = \\sqrt{45} = 3\\sqrt{5}$, $BC = \\sqrt{5^{2} + 10^{2}} = \\sqrt{125} = 5\\sqrt{5}$. Since $AB + AC = 5\\sqrt{5} = BC$, the points are collinear (A lies between B and C).',
    steps: [
      { step: 'Finds the three distances', marks: 1 },
      { step: 'Shows $AB + AC = BC$ and concludes collinear', marks: 1 },
    ],
  },
  {
    id: 'nc-07-7-1-q04', chapter: C, topic: 'Geometric shapes from coordinates', ref: `${R} Ex 7.1 Q4`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'Check whether P(−1, 3), Q(3, 5) and R(5, 1) are the vertices of an isosceles triangle.',
    answer: '$PQ = \\sqrt{4^{2} + 2^{2}} = \\sqrt{20}$, $QR = \\sqrt{2^{2} + 4^{2}} = \\sqrt{20}$, $PR = \\sqrt{6^{2} + 2^{2}} = \\sqrt{40}$. PQ = QR, and the points are not collinear ($\\sqrt{20} + \\sqrt{20} \\ne \\sqrt{40}$), so PQR is an isosceles triangle.',
    steps: [
      { step: 'Finds the three side lengths', marks: 1 },
      { step: 'Notes two equal sides and concludes isosceles', marks: 1 },
    ],
  },
  {
    id: 'nc-07-7-1-q05', chapter: C, topic: 'Geometric shapes from coordinates', ref: `${R} Ex 7.1 Q5`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'On a park map with a square grid, four lamp posts stand at P(1, 2), Q(5, 5), R(2, 9) and S(−2, 6). Rohan says PQRS is a square; Meera says it is only a rhombus. Use the distance formula to decide who is right.',
    answer: '$PQ = \\sqrt{4^{2} + 3^{2}} = 5$, $QR = \\sqrt{3^{2} + 4^{2}} = 5$, $RS = \\sqrt{4^{2} + 3^{2}} = 5$, $SP = \\sqrt{3^{2} + 4^{2}} = 5$. Diagonals: $PR = \\sqrt{1^{2} + 7^{2}} = \\sqrt{50}$ and $QS = \\sqrt{7^{2} + 1^{2}} = \\sqrt{50}$. All sides equal and diagonals equal, so PQRS is a square. Rohan is right.',
    steps: [
      { step: 'Shows all sides equal 5', marks: 1 },
      { step: 'Shows the diagonals are equal', marks: 1 },
      { step: 'Concludes square, Rohan is right', marks: 1 },
    ],
  },
  {
    id: 'nc-07-7-1-q06', chapter: C, topic: 'Geometric shapes from coordinates', ref: `${R} Ex 7.1 Q6`,
    type: 'long', complexity: 'medium', marks: 5,
    text: 'For each set of four points below, joined in the order given, decide whether they make a quadrilateral and, if so, which kind. Give reasons. (i) (0, 0), (5, 0), (8, 4), (3, 4) (ii) (−4, −1), (2, 3), (−1, 1), (0, −5) (iii) (−1, 1), (3, 2), (5, 5), (1, 4)',
    answer: '(i) Let A(0, 0), B(5, 0), C(8, 4), D(3, 4). $AB = 5$, $BC = \\sqrt{9 + 16} = 5$, $CD = 5$, $DA = \\sqrt{9 + 16} = 5$; diagonals $AC = \\sqrt{80}$, $BD = \\sqrt{20}$. All sides equal, diagonals unequal: a rhombus (not a square). (ii) Let A(−4, −1), B(2, 3), C(−1, 1). $AC = \\sqrt{9 + 4} = \\sqrt{13}$, $CB = \\sqrt{9 + 4} = \\sqrt{13}$, $AB = \\sqrt{36 + 16} = \\sqrt{52} = 2\\sqrt{13}$. Since $AC + CB = AB$, A, C, B are collinear, so no quadrilateral is formed. (iii) Let A(−1, 1), B(3, 2), C(5, 5), D(1, 4). $AB = \\sqrt{17}$, $BC = \\sqrt{13}$, $CD = \\sqrt{17}$, $DA = \\sqrt{13}$; diagonals $AC = \\sqrt{52}$, $BD = \\sqrt{8}$. Opposite sides equal, diagonals unequal: a parallelogram (not a rectangle).',
    steps: [
      { step: 'Part (i): finds sides and diagonals', marks: 1 },
      { step: 'Part (i): concludes rhombus', marks: 1 },
      { step: 'Part (ii): shows three points collinear, no quadrilateral', marks: 1 },
      { step: 'Part (iii): finds sides and diagonals', marks: 1 },
      { step: 'Part (iii): concludes parallelogram', marks: 1 },
    ],
  },
  {
    id: 'nc-07-7-1-q07', chapter: C, topic: 'Points on axes and distance from axes', ref: `${R} Ex 7.1 Q7`,
    type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the point on the x-axis that is equidistant from (7, 6) and (−3, 4).',
    answer: 'Let the point be (x, 0). $(x - 7)^{2} + 36 = (x + 3)^{2} + 16$ gives $-14x + 85 = 6x + 25$, so $20x = 60$ and $x = 3$. The point is (3, 0). Check: both squared distances are 52.',
    steps: [
      { step: 'Takes (x, 0) and equates squared distances', marks: 1 },
      { step: 'Finds (3, 0)', marks: 1 },
    ],
  },
  {
    id: 'nc-07-7-1-q08', chapter: C, topic: 'Distance formula', ref: `${R} Ex 7.1 Q8`,
    type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the values of $y$ for which the distance between A(3, −1) and B(−9, y) is 13 units.',
    answer: '$(-9 - 3)^{2} + (y + 1)^{2} = 169$, so $144 + (y + 1)^{2} = 169$ and $(y + 1)^{2} = 25$. Hence $y + 1 = \\pm 5$, giving $y = 4$ or $y = -6$.',
    steps: [
      { step: 'Forms $144 + (y + 1)^{2} = 169$', marks: 1 },
      { step: 'Finds $y = 4$ or $y = -6$', marks: 1 },
    ],
  },
  {
    id: 'nc-07-7-1-q09', chapter: C, topic: 'Distance formula', ref: `${R} Ex 7.1 Q9`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'B(2, −1) is equidistant from A(−2, 2) and C(x, 3). Find the values of $x$. Also find BC and AC for each value.',
    answer: '$BA^{2} = 16 + 9 = 25$. $BC^{2} = (x - 2)^{2} + 16$. Setting equal: $(x - 2)^{2} = 9$, so $x = 5$ or $x = -1$. In both cases $BC = 5$. For $x = 5$: $AC = \\sqrt{7^{2} + 1^{2}} = \\sqrt{50} = 5\\sqrt{2}$. For $x = -1$: $AC = \\sqrt{1^{2} + 1^{2}} = \\sqrt{2}$.',
    steps: [
      { step: 'Equates $BA^{2}$ and $BC^{2}$', marks: 1 },
      { step: 'Finds $x = 5$ or $-1$ and BC = 5', marks: 1 },
      { step: 'Finds AC $= 5\\sqrt{2}$ or $\\sqrt{2}$', marks: 1 },
    ],
  },
  {
    id: 'nc-07-7-1-q10', chapter: C, topic: 'Distance formula', ref: `${R} Ex 7.1 Q10`,
    type: 'short', complexity: 'medium', marks: 2,
    text: 'A point P(x, y) lies at equal distances from (5, −1) and (−1, 3). Show the equation connecting $x$ and $y$.',
    answer: '$(x - 5)^{2} + (y + 1)^{2} = (x + 1)^{2} + (y - 3)^{2}$ gives $-10x + 25 + 2y + 1 = 2x + 1 - 6y + 9$, so $-12x + 8y + 16 = 0$, i.e. $3x - 2y - 4 = 0$.',
    steps: [
      { step: 'Equates squared distances', marks: 1 },
      { step: 'Simplifies to $3x - 2y - 4 = 0$', marks: 1 },
    ],
  },

  // ---------- Section 7.3 examples ----------
  {
    id: 'nc-07-ex06', chapter: C, topic: 'Section formula', ref: `${R} Example 6`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'Find the coordinates of the point that divides the line segment joining (−2, 5) and (6, −3) internally in the ratio 1 : 3.',
    answer: '$x = \\frac{1(6) + 3(-2)}{1 + 3} = 0$, $y = \\frac{1(-3) + 3(5)}{1 + 3} = 3$. The point is (0, 3).',
    steps: [
      { step: 'Applies the section formula correctly', marks: 1 },
      { step: 'Gets (0, 3)', marks: 1 },
    ],
  },
  {
    id: 'nc-07-ex07', chapter: C, topic: 'Section formula', ref: `${R} Example 7`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'In what ratio does the point P(−1, 2) divide the line segment joining A(−5, −2) and B(7, 10)?',
    answer: 'Let the ratio be $k : 1$. Then $x = \\frac{7k - 5}{k + 1} = -1$, so $7k - 5 = -k - 1$, $8k = 4$, $k = \\frac{1}{2}$. Ratio $= 1 : 2$. Check with y: $\\frac{10(\\frac{1}{2}) - 2}{\\frac{1}{2} + 1} = \\frac{3}{1.5} = 2$. ✓',
    steps: [
      { step: 'Sets up the section formula with ratio $k : 1$', marks: 1 },
      { step: 'Solves $k = \\frac{1}{2}$, ratio 1 : 2', marks: 1 },
      { step: 'Verifies with the y-coordinate', marks: 1 },
    ],
  },
  {
    id: 'nc-07-ex08', chapter: C, topic: 'Section formula', ref: `${R} Example 8`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the coordinates of the points of trisection of the line segment joining A(−3, 5) and B(6, −1).',
    answer: 'P divides AB in 1 : 2: $P = \\left(\\frac{6 + 2(-3)}{3}, \\frac{-1 + 2(5)}{3}\\right) = (0, 3)$. Q divides AB in 2 : 1: $Q = \\left(\\frac{2(6) - 3}{3}, \\frac{2(-1) + 5}{3}\\right) = (3, 1)$. The points of trisection are (0, 3) and (3, 1).',
    steps: [
      { step: 'Identifies the ratios 1 : 2 and 2 : 1', marks: 1 },
      { step: 'Finds P(0, 3)', marks: 1 },
      { step: 'Finds Q(3, 1)', marks: 1 },
    ],
  },
  {
    id: 'nc-07-ex09', chapter: C, topic: 'Section formula', ref: `${R} Example 9`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the ratio in which the y-axis divides the line segment joining (−2, 3) and (6, −5). Also find the point of intersection.',
    answer: 'Let the ratio be $k : 1$. The point is $\\left(\\frac{6k - 2}{k + 1}, \\frac{-5k + 3}{k + 1}\\right)$. On the y-axis the x-coordinate is 0: $6k - 2 = 0$, so $k = \\frac{1}{3}$ and the ratio is 1 : 3. The y-coordinate is $\\frac{-\\frac{5}{3} + 3}{\\frac{4}{3}} = 1$, so the point is (0, 1).',
    steps: [
      { step: 'Writes the general point for ratio $k : 1$', marks: 1 },
      { step: 'Uses x = 0 to get the ratio 1 : 3', marks: 1 },
      { step: 'Finds the point (0, 1)', marks: 1 },
    ],
  },
  {
    id: 'nc-07-ex10', chapter: C, topic: 'Midpoint', ref: `${R} Example 10`,
    type: 'short', complexity: 'medium', marks: 2,
    text: 'A(1, −2), B(4, 0), C(5, 3) and D(p, 1) are the vertices of a parallelogram taken in order. Find $p$.',
    answer: 'The diagonals of a parallelogram bisect each other, so the mid-points of AC and BD coincide. Mid-point of AC $= \\left(3, \\frac{1}{2}\\right)$; mid-point of BD $= \\left(\\frac{4 + p}{2}, \\frac{1}{2}\\right)$. So $\\frac{4 + p}{2} = 3$ and $p = 2$.',
    steps: [
      { step: 'Uses equal mid-points of the diagonals', marks: 1 },
      { step: 'Finds $p = 2$', marks: 1 },
    ],
  },

  // ---------- Exercise 7.2 ----------
  {
    id: 'nc-07-7-2-q01', chapter: C, topic: 'Section formula', ref: `${R} Ex 7.2 Q1`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'Find the coordinates of the point that divides the join of (3, −4) and (−7, 6) in the ratio 3 : 2.',
    answer: '$x = \\frac{3(-7) + 2(3)}{5} = \\frac{-15}{5} = -3$, $y = \\frac{3(6) + 2(-4)}{5} = \\frac{10}{5} = 2$. The point is (−3, 2).',
    steps: [
      { step: 'Applies the section formula', marks: 1 },
      { step: 'Gets (−3, 2)', marks: 1 },
    ],
  },
  {
    id: 'nc-07-7-2-q02', chapter: C, topic: 'Section formula', ref: `${R} Ex 7.2 Q2`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'Find the coordinates of the points of trisection of the line segment joining (−1, 4) and (5, −2).',
    answer: 'Ratio 1 : 2: $\\left(\\frac{5 + 2(-1)}{3}, \\frac{-2 + 2(4)}{3}\\right) = (1, 2)$. Ratio 2 : 1: $\\left(\\frac{2(5) - 1}{3}, \\frac{2(-2) + 4}{3}\\right) = (3, 0)$. The points are (1, 2) and (3, 0).',
    steps: [
      { step: 'Finds (1, 2)', marks: 1 },
      { step: 'Finds (3, 0)', marks: 1 },
    ],
  },
  {
    id: 'nc-07-7-2-q03', chapter: C, topic: 'Midpoint', ref: `${R} Ex 7.2 Q3`,
    type: 'long', complexity: 'medium', marks: 4,
    text: 'A rectangular parking lot ABCD has straight lanes painted parallel to AD, 1 m apart, starting from AD (lane 1 is 1 m from AD, lane 2 is 2 m from AD, and so on). Along AD, markers are placed every 1 m for 60 m. Arjun walks $\\frac{1}{3}$ of the distance AD along lane 3 and places an orange cone. Sana walks $\\frac{1}{4}$ of the distance AD along lane 7 and places a white cone. (i) Taking A as the origin, AB along the x-axis and AD along the y-axis, write the positions of the two cones. (ii) Find the distance between the cones. (iii) Kabir must place a blue cone exactly halfway between them. Where should he place it?',
    answer: '(i) $\\frac{1}{3} \\times 60 = 20$ m and $\\frac{1}{4} \\times 60 = 15$ m, so the orange cone is at (3, 20) and the white cone at (7, 15). (ii) Distance $= \\sqrt{(7 - 3)^{2} + (15 - 20)^{2}} = \\sqrt{16 + 25} = \\sqrt{41} \\approx 6.4$ m. (iii) Mid-point $= \\left(\\frac{3 + 7}{2}, \\frac{20 + 15}{2}\\right) = (5, 17.5)$: on lane 5, 17.5 m along from the side AB.',
    steps: [
      { step: 'Finds the cone positions (3, 20) and (7, 15)', marks: 1 },
      { step: 'Applies the distance formula', marks: 1 },
      { step: 'Gets $\\sqrt{41}$ m', marks: 1 },
      { step: 'Finds the mid-point (5, 17.5) and describes it', marks: 1 },
    ],
  },
  {
    id: 'nc-07-7-2-q04', chapter: C, topic: 'Section formula', ref: `${R} Ex 7.2 Q4`,
    type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the ratio in which the point (−2, 3) divides the line segment joining (−5, 6) and (4, −3).',
    answer: 'Let the ratio be $k : 1$. $\\frac{4k - 5}{k + 1} = -2$ gives $4k - 5 = -2k - 2$, so $k = \\frac{1}{2}$: ratio 1 : 2. Check: $\\frac{-3(\\frac{1}{2}) + 6}{\\frac{3}{2}} = \\frac{4.5}{1.5} = 3$. ✓',
    steps: [
      { step: 'Sets up and solves for $k$', marks: 1 },
      { step: 'States 1 : 2 and checks with y', marks: 1 },
    ],
  },
  {
    id: 'nc-07-7-2-q05', chapter: C, topic: 'Section formula', ref: `${R} Ex 7.2 Q5`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the ratio in which the line segment joining A(3, −6) and B(−5, 2) is divided by the x-axis. Also find the point of division.',
    answer: 'Let the ratio be $k : 1$. The point is $\\left(\\frac{-5k + 3}{k + 1}, \\frac{2k - 6}{k + 1}\\right)$. On the x-axis, $2k - 6 = 0$, so $k = 3$: ratio 3 : 1. x-coordinate $= \\frac{-15 + 3}{4} = -3$. The point is (−3, 0).',
    steps: [
      { step: 'Writes the general point for ratio $k : 1$', marks: 1 },
      { step: 'Uses y = 0 to get 3 : 1', marks: 1 },
      { step: 'Finds the point (−3, 0)', marks: 1 },
    ],
  },
  {
    id: 'nc-07-7-2-q06', chapter: C, topic: 'Midpoint', ref: `${R} Ex 7.2 Q6`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'ABCD is a parallelogram whose vertices, in order, are A(−2, 1), B(1, y), C(x, 5) and D(−1, 4). Work out $x$ and $y$.',
    answer: 'The diagonals AC and BD bisect each other. Mid-point of AC $= \\left(\\frac{x - 2}{2}, 3\\right)$; mid-point of BD $= \\left(0, \\frac{y + 4}{2}\\right)$. So $\\frac{x - 2}{2} = 0$, giving $x = 2$, and $\\frac{y + 4}{2} = 3$, giving $y = 2$.',
    steps: [
      { step: 'Equates the mid-points of the diagonals', marks: 1 },
      { step: 'Finds $x = 2$', marks: 1 },
      { step: 'Finds $y = 2$', marks: 1 },
    ],
  },
  {
    id: 'nc-07-7-2-q07', chapter: C, topic: 'Midpoint', ref: `${R} Ex 7.2 Q7`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'AB is a diameter of a circle with centre (−1, 2). If B is (3, −4), find the coordinates of A.',
    answer: 'The centre is the mid-point of AB. If A = (x, y), then $\\frac{x + 3}{2} = -1$ and $\\frac{y - 4}{2} = 2$, so $x = -5$ and $y = 8$. A = (−5, 8).',
    steps: [
      { step: 'Uses the centre as the mid-point of AB', marks: 1 },
      { step: 'Finds A(−5, 8)', marks: 1 },
    ],
  },
  {
    id: 'nc-07-7-2-q08', chapter: C, topic: 'Section formula', ref: `${R} Ex 7.2 Q8`,
    type: 'short', complexity: 'medium', marks: 2,
    text: 'A and B are (−3, 1) and (4, −6). Find the coordinates of P on segment AB such that $AP = \\frac{2}{7}AB$.',
    answer: '$AP = \\frac{2}{7}AB$ means $PB = \\frac{5}{7}AB$, so P divides AB in the ratio 2 : 5. $P = \\left(\\frac{2(4) + 5(-3)}{7}, \\frac{2(-6) + 5(1)}{7}\\right) = (-1, -1)$.',
    steps: [
      { step: 'Finds the ratio 2 : 5', marks: 1 },
      { step: 'Gets P(−1, −1)', marks: 1 },
    ],
  },
  {
    id: 'nc-07-7-2-q09', chapter: C, topic: 'Section formula', ref: `${R} Ex 7.2 Q9`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the coordinates of the points that divide the line segment joining A(−4, 1) and B(4, −7) into four equal parts.',
    answer: 'The middle point is the mid-point of AB: $\\left(0, -3\\right)$. The first point is the mid-point of A and (0, −3): $(-2, -1)$. The third is the mid-point of (0, −3) and B: $(2, -5)$. (Equivalently, ratios 1 : 3, 1 : 1, 3 : 1.) The points are (−2, −1), (0, −3) and (2, −5).',
    steps: [
      { step: 'Finds (0, −3)', marks: 1 },
      { step: 'Finds (−2, −1)', marks: 1 },
      { step: 'Finds (2, −5)', marks: 1 },
    ],
  },
  {
    id: 'nc-07-7-2-q10', chapter: C, topic: 'Geometric shapes from coordinates', ref: `${R} Ex 7.2 Q10`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the area of the rhombus whose vertices, taken in order, are (5, 2), (0, 7), (−1, 0) and (4, −5). [Area of a rhombus $= \\frac{1}{2} \\times$ product of its diagonals.]',
    answer: 'Diagonal from (5, 2) to (−1, 0): $\\sqrt{6^{2} + 2^{2}} = \\sqrt{40} = 2\\sqrt{10}$. Diagonal from (0, 7) to (4, −5): $\\sqrt{4^{2} + 12^{2}} = \\sqrt{160} = 4\\sqrt{10}$. Area $= \\frac{1}{2} \\times 2\\sqrt{10} \\times 4\\sqrt{10} = 40$ square units.',
    steps: [
      { step: 'Finds the first diagonal $2\\sqrt{10}$', marks: 1 },
      { step: 'Finds the second diagonal $4\\sqrt{10}$', marks: 1 },
      { step: 'Gets area 40 square units', marks: 1 },
    ],
  },
];
