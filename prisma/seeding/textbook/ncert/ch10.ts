import type { TextbookQuestion } from '../types.js';

const C = 'Circles';
const R = 'NCERT Class 10 · Ch 10 Circles · Same skill as';

export const NCERT_CH10: TextbookQuestion[] = [
  {
    id: 'nc-10-ex01', chapter: C, topic: 'Concentric and touching circles', ref: `${R} Example 1`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'Two circles have the same centre O. AB and CD are two chords of the larger circle, and each of them touches the smaller circle (AB at P and CD at Q). Prove that AB = CD.',
    answer: 'OP and OQ are radii of the smaller circle drawn to the points of contact, so $OP \\perp AB$ and $OQ \\perp CD$ (a tangent is perpendicular to the radius at the point of contact). A perpendicular from the centre bisects a chord, so $AB = 2AP$ and $CD = 2CQ$. In right triangles OPA and OQC: $OA = OC$ (radii of the larger circle) and $OP = OQ$ (radii of the smaller circle), so $AP = \\sqrt{OA^{2} - OP^{2}} = \\sqrt{OC^{2} - OQ^{2}} = CQ$. Hence $AB = 2AP = 2CQ = CD$.',
    steps: [
      { step: 'States $OP \\perp AB$ and $OQ \\perp CD$ (tangent perpendicular to radius)', marks: 1 },
      { step: 'Uses that the perpendicular from the centre bisects each chord', marks: 1 },
      { step: 'Shows $AP = CQ$ from equal radii and concludes $AB = CD$', marks: 1 },
    ],
  },
  {
    id: 'nc-10-ex02', chapter: C, topic: 'Proofs with tangents', ref: `${R} Example 2`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'From an external point T, tangents TP and TQ are drawn to a circle with centre O, touching it at P and Q. Prove that $\\angle OTP = \\angle OPQ$.',
    answer: 'Let $\\angle PTQ = \\theta$. Since $TP = TQ$ (tangents from an external point), triangle TPQ is isosceles, so $\\angle TPQ = \\frac{1}{2}(180^{\\circ} - \\theta) = 90^{\\circ} - \\frac{\\theta}{2}$. Also $\\angle OPT = 90^{\\circ}$ (radius ⊥ tangent), so $\\angle OPQ = 90^{\\circ} - \\left(90^{\\circ} - \\frac{\\theta}{2}\\right) = \\frac{\\theta}{2}$. The centre lies on the bisector of the angle between the tangents (triangles OPT and OQT are congruent by RHS), so $\\angle OTP = \\frac{\\theta}{2}$. Hence $\\angle OTP = \\angle OPQ$.',
    steps: [
      { step: 'Uses $TP = TQ$ to get $\\angle TPQ = 90^{\\circ} - \\frac{\\theta}{2}$', marks: 1 },
      { step: 'Uses $\\angle OPT = 90^{\\circ}$ to get $\\angle OPQ = \\frac{\\theta}{2}$', marks: 1 },
      { step: 'Shows OT bisects $\\angle PTQ$, so $\\angle OTP = \\frac{\\theta}{2}$, and concludes', marks: 1 },
    ],
  },
  {
    id: 'nc-10-ex03', chapter: C, topic: 'Angle and length problems with tangents', ref: `${R} Example 3`,
    type: 'long', complexity: 'hard', marks: 4,
    text: 'AB is a chord of length 24 cm in a circle of radius 13 cm and centre O. The tangents to the circle at A and B meet at a point T. Find the length TA.',
    answer: 'Join OT, meeting AB at M. Since $TA = TB$ and OT bisects $\\angle ATB$, $OT \\perp AB$ and M is the midpoint of AB, so $AM = 12$ cm. Then $OM = \\sqrt{13^{2} - 12^{2}} = 5$ cm. Since $\\angle OAT = 90^{\\circ}$, $\\angle TAM = 90^{\\circ} - \\angle MAO = \\angle AOM$, so right triangles TMA and AMO are similar (AA). Hence $\\frac{TA}{AO} = \\frac{AM}{OM}$, i.e. $\\frac{TA}{13} = \\frac{12}{5}$, so $TA = \\frac{156}{5} = 31.2$ cm. (Check by Pythagoras: $TM = \\frac{144}{5}$, $TA^{2} = \\left(\\frac{144}{5}\\right)^{2} + 12^{2} = \\frac{24336}{25}$, $TA = \\frac{156}{5}$.)',
    steps: [
      { step: 'Shows OT is the perpendicular bisector of AB, so $AM = 12$ cm', marks: 1 },
      { step: 'Finds $OM = 5$ cm', marks: 1 },
      { step: 'Sets up similar triangles (or Pythagoras in two triangles)', marks: 1 },
      { step: 'Gets $TA = 31.2$ cm', marks: 1 },
    ],
  },
  {
    id: 'nc-10-10-1-q01', chapter: C, topic: 'Lines and circles: basics', ref: `${R} Ex 10.1 Q1`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'A circle is drawn on a sheet of paper and a straight line $\\ell$ is drawn beside it. (i) How many tangents does the circle have in all? (ii) How many of these tangents can be parallel to $\\ell$?',
    answer: '(i) Infinitely many: there is exactly one tangent at every point of the circle, and a circle has infinitely many points. (ii) Exactly two: one tangent parallel to $\\ell$ on each side of the centre, at the two ends of the diameter perpendicular to $\\ell$.',
    steps: [
      { step: 'Infinitely many tangents, one at each point', marks: 1 },
      { step: 'Exactly two parallel to a given line, with reason', marks: 1 },
    ],
  },
  {
    id: 'nc-10-10-1-q02', chapter: C, topic: 'Lines and circles: basics', ref: `${R} Ex 10.1 Q2`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'State whether each statement is true or false, with a one-line reason. (i) A line through a point inside a circle can be a tangent to it. (ii) A line that meets a circle at two distinct points is a secant. (iii) A circle can have three tangents all parallel to one another. (iv) A tangent and the circle have exactly one point in common, called the point of contact.',
    answer: '(i) False: every line through an inside point cuts the circle at two points. (ii) True: that is what a secant is. (iii) False: at most two tangents can be parallel to a given direction. (iv) True: a tangent touches the circle at exactly one point, the point of contact.',
    steps: [
      { step: 'Parts (i) and (ii) correct with reasons', marks: 1 },
      { step: 'Parts (iii) and (iv) correct with reasons', marks: 1 },
    ],
  },
  {
    id: 'nc-10-10-1-q03', chapter: C, topic: 'Tangent perpendicular to radius', ref: `${R} Ex 10.1 Q3`,
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The tangent at a point P of a circle with centre O and radius 8 cm meets a line through O at Q, where $OQ = 17$ cm. The length PQ is',
    options: ['$9$ cm', '$15$ cm', '$12.5$ cm', '$\\sqrt{353}$ cm'],
    answer: 'Correct option: B) $15$ cm. $OP \\perp PQ$, so triangle OPQ is right-angled at P and $PQ = \\sqrt{17^{2} - 8^{2}} = \\sqrt{225} = 15$ cm. Option D wrongly adds the squares.',
  },
  {
    id: 'nc-10-10-1-q04', chapter: C, topic: 'Lines and circles: basics', ref: `${R} Ex 10.1 Q4`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'A circle has centre O and radius 3 cm. A line $\\ell$ is at a distance of 5 cm from O. You are to draw two lines parallel to $\\ell$: one a tangent to the circle and the other a secant. At what distance from O must each line be drawn? Describe how you would draw them.',
    answer: 'Draw the perpendicular from O to $\\ell$. The tangent must be at distance exactly 3 cm from O, so draw the line parallel to $\\ell$ through the point of this perpendicular that lies on the circle (3 cm from O); it touches the circle there. The secant must be at a distance less than 3 cm from O, for example a line parallel to $\\ell$ through a point of the perpendicular 1 cm from O (or through O itself); it cuts the circle at two points.',
    steps: [
      { step: 'Tangent: parallel line at distance exactly equal to the radius, 3 cm', marks: 1 },
      { step: 'Secant: parallel line at distance less than 3 cm, with a valid construction', marks: 1 },
    ],
  },
  {
    id: 'nc-10-10-2-q01', chapter: C, topic: 'Tangent perpendicular to radius', ref: `${R} Ex 10.2 Q1`,
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A point A is 41 cm from the centre of a circle, and the tangent from A to the circle has length 40 cm. The radius of the circle is',
    options: ['$9$ cm', '$1$ cm', '$20.5$ cm', '$31$ cm'],
    answer: 'Correct option: A) $9$ cm. The radius to the point of contact is perpendicular to the tangent, so $r = \\sqrt{41^{2} - 40^{2}} = \\sqrt{81} = 9$ cm. Option B subtracts the lengths instead of their squares.',
  },
  {
    id: 'nc-10-10-2-q02', chapter: C, topic: 'Angle and length problems with tangents', ref: `${R} Ex 10.2 Q2`,
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'From a point T, tangents TA and TB touch a circle with centre O at A and B. If $\\angle AOB = 125^{\\circ}$, then $\\angle ATB$ equals',
    options: ['$45^{\\circ}$', '$55^{\\circ}$', '$65^{\\circ}$', '$125^{\\circ}$'],
    answer: 'Correct option: B) $55^{\\circ}$. In quadrilateral OATB, $\\angle OAT = \\angle OBT = 90^{\\circ}$, so $\\angle ATB = 360^{\\circ} - 90^{\\circ} - 90^{\\circ} - 125^{\\circ} = 55^{\\circ}$.',
  },
  {
    id: 'nc-10-10-2-q03', chapter: C, topic: 'Angle and length problems with tangents', ref: `${R} Ex 10.2 Q3`,
    type: 'mcq', complexity: 'medium', marks: 1,
    text: 'Tangents QM and QN from a point Q touch a circle with centre O at M and N, and $\\angle MQN = 64^{\\circ}$. Then $\\angle QOM$ equals',
    options: ['$32^{\\circ}$', '$58^{\\circ}$', '$64^{\\circ}$', '$116^{\\circ}$'],
    answer: 'Correct option: B) $58^{\\circ}$. OQ bisects $\\angle MQN$, so $\\angle OQM = 32^{\\circ}$. In triangle OMQ, $\\angle OMQ = 90^{\\circ}$, so $\\angle QOM = 180^{\\circ} - 90^{\\circ} - 32^{\\circ} = 58^{\\circ}$. Option D is $\\angle MON$.',
  },
  {
    id: 'nc-10-10-2-q04', chapter: C, topic: 'Proofs with tangents', ref: `${R} Ex 10.2 Q4`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'The tangents to a circle with centre O at two points A and B of the circle are parallel to each other. Prove that AB is a diameter of the circle.',
    answer: 'Let the tangents at A and B be $\\ell$ and $m$, with $\\ell \\parallel m$. $OA \\perp \\ell$ (radius ⊥ tangent), and since $\\ell \\parallel m$, the line OA is also perpendicular to $m$. But $OB \\perp m$ too, and through O there is only one line perpendicular to $m$. So O, A and B lie on one line. As A and B are distinct points of the circle on a line through O, $AB = OA + OB = 2r$, so AB is a diameter.',
    steps: [
      { step: 'States $OA \\perp \\ell$ and $OB \\perp m$', marks: 1 },
      { step: 'Uses $\\ell \\parallel m$ to show OA and OB are along the same perpendicular line', marks: 1 },
      { step: 'Concludes A, O, B are collinear, so AB is a diameter', marks: 1 },
    ],
  },
  {
    id: 'nc-10-10-2-q05', chapter: C, topic: 'Tangent perpendicular to radius', ref: `${R} Ex 10.2 Q5`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A line $\\ell$ touches a circle with centre O at P. The line through P perpendicular to $\\ell$ meets the circle again at Q. Prove that PQ is a diameter of the circle.',
    answer: 'By the tangent–radius property, $OP \\perp \\ell$. The line through P perpendicular to $\\ell$ is unique, so it is the line OP itself; hence the line PQ passes through O. A line through the centre meets the circle at the two ends of a diameter, so PQ is a diameter. (Equivalently: if O were not on PQ, there would be two different perpendiculars to $\\ell$ at P, which is impossible.)',
    steps: [
      { step: 'States $OP \\perp \\ell$', marks: 1 },
      { step: 'Uses uniqueness of the perpendicular at P to show PQ passes through O', marks: 1 },
      { step: 'Concludes PQ is a diameter', marks: 1 },
    ],
  },
  {
    id: 'nc-10-10-2-q06', chapter: C, topic: 'Tangents from an external point', ref: `${R} Ex 10.2 Q6`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'A point K is 6.5 cm from the centre of a circle, and the tangent drawn from K to the circle is 6 cm long. Find the radius of the circle.',
    answer: 'The radius to the point of contact is perpendicular to the tangent, so $r^{2} = 6.5^{2} - 6^{2} = 42.25 - 36 = 6.25$, giving $r = 2.5$ cm.',
    steps: [
      { step: 'Uses the right angle between radius and tangent to write $r^{2} = 6.5^{2} - 6^{2}$', marks: 1 },
      { step: 'Gets $r = 2.5$ cm', marks: 1 },
    ],
  },
  {
    id: 'nc-10-10-2-q07', chapter: C, topic: 'Concentric and touching circles', ref: `${R} Ex 10.2 Q7`,
    type: 'short', complexity: 'medium', marks: 2,
    text: 'Two circles with the same centre have radii 17 cm and 8 cm. A chord of the larger circle touches the smaller circle. Find the length of the chord.',
    answer: 'The radius of the smaller circle to the point of contact is perpendicular to the chord and bisects it. Half-chord $= \\sqrt{17^{2} - 8^{2}} = \\sqrt{225} = 15$ cm, so the chord is $30$ cm.',
    steps: [
      { step: 'Uses perpendicular radius bisecting the chord and finds half-chord 15 cm', marks: 1 },
      { step: 'Chord = 30 cm', marks: 1 },
    ],
  },
  {
    id: 'nc-10-10-2-q08', chapter: C, topic: 'Circle touching the sides of a figure', ref: `${R} Ex 10.2 Q8`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A hexagon ABCDEF is drawn so that all six of its sides touch a circle. Prove that $AB + CD + EF = BC + DE + FA$.',
    answer: 'Let the sides AB, BC, CD, DE, EF, FA touch the circle at P, Q, R, S, T, U. Tangents from an external point are equal, so $AP = AU$, $BP = BQ$, $CQ = CR$, $DR = DS$, $ES = ET$, $FT = FU$. Then $AB + CD + EF = (AP + PB) + (CR + RD) + (ET + TF) = AU + BQ + CQ + DS + ES + FU$. Regrouping, this is $(BQ + QC) + (DS + SE) + (FU + UA) = BC + DE + FA$.',
    steps: [
      { step: 'Names the six points of contact and writes the equal tangent pairs', marks: 1 },
      { step: 'Splits $AB + CD + EF$ into tangent lengths and substitutes', marks: 1 },
      { step: 'Regroups to get $BC + DE + FA$', marks: 1 },
    ],
  },
  {
    id: 'nc-10-10-2-q09', chapter: C, topic: 'Proofs with tangents', ref: `${R} Ex 10.2 Q9`,
    type: 'long', complexity: 'hard', marks: 4,
    text: 'A circle with centre O has two parallel tangents $\\ell$ and $m$. A third tangent touches the circle at C and meets $\\ell$ at A and $m$ at B. Prove that the circle drawn with AB as diameter passes through O.',
    answer: 'Let $\\ell$ touch the circle at P and $m$ at Q; since the tangents are parallel, PQ is a diameter through O. Join OA, OB, OC. In triangles OPA and OCA: $OP = OC$ (radii), $OA$ common, $\\angle OPA = \\angle OCA = 90^{\\circ}$, so they are congruent (RHS) and $\\angle POA = \\angle COA$. Similarly triangles OQB and OCB are congruent and $\\angle QOB = \\angle COB$. Since P, O, Q are collinear, $\\angle POA + \\angle COA + \\angle COB + \\angle QOB = 180^{\\circ}$, i.e. $2\\angle COA + 2\\angle COB = 180^{\\circ}$, so $\\angle AOB = 90^{\\circ}$. An angle in a semicircle is a right angle and conversely, so O lies on the circle with diameter AB.',
    steps: [
      { step: 'Notes the points of contact of the parallel tangents are ends of a diameter', marks: 1 },
      { step: 'Proves the two pairs of congruent triangles (RHS)', marks: 1 },
      { step: 'Uses the straight angle at O to get $\\angle AOB = 90^{\\circ}$', marks: 1 },
      { step: 'Concludes O lies on the circle with diameter AB', marks: 1 },
    ],
  },
  {
    id: 'nc-10-10-2-q10', chapter: C, topic: 'Proofs with tangents', ref: `${R} Ex 10.2 Q10`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'From an external point T, tangents TP and TQ are drawn to a circle with centre O. Prove that the four points T, P, O, Q lie on one circle.',
    answer: '$\\angle OPT = 90^{\\circ}$ and $\\angle OQT = 90^{\\circ}$ (radius ⊥ tangent). In quadrilateral TPOQ the angles add to $360^{\\circ}$, so $\\angle PTQ + \\angle POQ = 360^{\\circ} - 180^{\\circ} = 180^{\\circ}$. A quadrilateral whose opposite angles are supplementary is cyclic (here also $\\angle P + \\angle Q = 180^{\\circ}$), so T, P, O, Q lie on a circle (the circle on OT as diameter).',
    steps: [
      { step: 'States both angles at P and Q are $90^{\\circ}$', marks: 1 },
      { step: 'Gets $\\angle PTQ + \\angle POQ = 180^{\\circ}$ from the angle sum', marks: 1 },
      { step: 'Concludes the quadrilateral is cyclic', marks: 1 },
    ],
  },
  {
    id: 'nc-10-10-2-q11', chapter: C, topic: 'Circle touching the sides of a figure', ref: `${R} Ex 10.2 Q11`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A rectangle PQRS is drawn so that all four of its sides touch a circle. Prove that PQRS is a square.',
    answer: 'For a quadrilateral whose sides touch a circle, equal tangents from each vertex give $PQ + RS = QR + SP$. In a rectangle, opposite sides are equal: $PQ = RS$ and $QR = SP$. So $2PQ = 2QR$, i.e. $PQ = QR$. A rectangle with two adjacent sides equal is a square.',
    steps: [
      { step: 'Uses equal tangents to get $PQ + RS = QR + SP$', marks: 1 },
      { step: 'Substitutes equal opposite sides to get $PQ = QR$', marks: 1 },
      { step: 'Concludes the rectangle is a square', marks: 1 },
    ],
  },
  {
    id: 'nc-10-10-2-q12', chapter: C, topic: 'Circle touching the sides of a figure', ref: `${R} Ex 10.2 Q12`,
    type: 'long', complexity: 'hard', marks: 4,
    text: 'A circle of radius 3.5 cm is drawn inside triangle PQR so that it touches all three sides. It touches QR at D, dividing QR into $QD = 7$ cm and $DR = 14$ cm. Find the lengths of PQ and PR.',
    answer: 'Let the circle touch PQ at E and PR at F, and let $PE = PF = x$. Equal tangents give $QE = QD = 7$ and $RF = RD = 14$. So $PQ = x + 7$, $PR = x + 14$, $QR = 21$ and the semi-perimeter is $s = x + 21$. Area by joining the centre to the vertices $= \\frac{1}{2} \\times 3.5 \\times (\\text{perimeter}) = 3.5(x + 21)$. By Heron: area $= \\sqrt{(x+21)(x)(7)(14)} = \\sqrt{98x(x+21)}$. Squaring: $98x(x+21) = 12.25(x+21)^{2}$, so $98x = 12.25x + 257.25$, giving $85.75x = 257.25$ and $x = 3$. Hence $PQ = 10$ cm and $PR = 17$ cm. (Check: area $= 3.5 \\times 24 = 84 = \\sqrt{24 \\times 3 \\times 7 \\times 14}$.)',
    steps: [
      { step: 'Uses equal tangents to write the sides as $x+7$, $x+14$, $21$', marks: 1 },
      { step: 'Writes the area as $3.5 \\times s$', marks: 1 },
      { step: 'Writes the area by Heron’s formula and equates', marks: 1 },
      { step: 'Solves $x = 3$: $PQ = 10$ cm, $PR = 17$ cm', marks: 1 },
    ],
  },
  {
    id: 'nc-10-10-2-q13', chapter: C, topic: 'Circle touching the sides of a figure', ref: `${R} Ex 10.2 Q13`,
    type: 'long', complexity: 'hard', marks: 4,
    text: 'Quadrilateral ABCD is drawn so that all its sides touch a circle with centre O. If $\\angle AOB = 118^{\\circ}$, prove that $\\angle COD = 62^{\\circ}$.',
    answer: 'Let AB, BC, CD, DA touch the circle at P, Q, R, S. Join O to these points and to the vertices. The two tangents from each vertex form congruent right triangles with O (RHS), so OA, OB, OC, OD bisect the angles at the centre: $\\angle AOP = \\angle AOS = a$, $\\angle BOP = \\angle BOQ = b$, $\\angle COQ = \\angle COR = c$, $\\angle DOR = \\angle DOS = d$. The eight angles fill the full turn: $2(a + b + c + d) = 360^{\\circ}$, so $a + b + c + d = 180^{\\circ}$. Now $\\angle AOB = a + b$ and $\\angle COD = c + d$, so $\\angle AOB + \\angle COD = 180^{\\circ}$ and $\\angle COD = 180^{\\circ} - 118^{\\circ} = 62^{\\circ}$.',
    steps: [
      { step: 'Joins O to points of contact and vertices; proves congruent triangles at each vertex', marks: 1 },
      { step: 'Writes the equal angle pairs at the centre', marks: 1 },
      { step: 'Uses the full turn to get $\\angle AOB + \\angle COD = 180^{\\circ}$', marks: 1 },
      { step: 'Gets $\\angle COD = 62^{\\circ}$', marks: 1 },
    ],
  },
];
