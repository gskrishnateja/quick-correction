import type { TextbookQuestion } from './types.js';

const CH10 = 'NCERT Class 10 · Ch 10 Circles';
const C = 'Circles';

export const CIRCLES: TextbookQuestion[] = [
  // Lines and circles: basics
  {
    id: 'tb-ci-01', chapter: C, topic: 'Lines and circles: basics', ref: `${CH10} · Number of tangents from a point`,
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A point $P$ lies inside a circle (not on it). How many tangents to the circle can be drawn through $P$?',
    options: ['$0$', '$1$', '$2$', 'Infinitely many'],
    answer: 'Correct option: A) $0$. Every line through an interior point cuts the circle at two points, so it is a secant, never a tangent. (One tangent passes through a point on the circle, and two through a point outside it.)',
  },

  // Tangent perpendicular to radius
  {
    id: 'tb-ci-02', chapter: C, topic: 'Tangent perpendicular to radius', ref: `${CH10} · Tangent at a point`,
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A circle has centre $O$ and radius 9 cm. The tangent at a point $P$ of the circle passes through a point $Q$ with $OQ = 15$ cm. The length $PQ$ is',
    options: ['$6$ cm', '$12$ cm', '$3\\sqrt{34}$ cm', '$24$ cm'],
    answer: 'Correct option: B) $12$ cm. The radius $OP$ is perpendicular to the tangent, so triangle $OPQ$ is right-angled at $P$ and $PQ = \\sqrt{15^{2} - 9^{2}} = \\sqrt{144} = 12$ cm. Option C wrongly adds the squares.',
  },
  {
    id: 'tb-ci-03', chapter: C, topic: 'Tangent perpendicular to radius', ref: `${CH10} · Tangent at a point`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'Two circles have the same centre $O$. The smaller one has radius 5 cm. A chord $AB$ of the larger circle is 24 cm long and touches the smaller circle at $M$. Find the radius of the larger circle.',
    answer: '$OM$ is a radius of the smaller circle drawn to the point of contact, so $OM \\perp AB$. The perpendicular from the centre bisects the chord, so $AM = 12$ cm. In right triangle $OMA$, $OA = \\sqrt{12^{2} + 5^{2}} = \\sqrt{169} = 13$ cm.',
    steps: [{ step: 'Uses $OM \\perp AB$ and $AM = 12$ cm', marks: 1 }, { step: 'Finds the radius 13 cm', marks: 1 }],
  },

  // Tangents from an external point
  {
    id: 'tb-ci-04', chapter: C, topic: 'Tangents from an external point', ref: `${CH10} · Number of tangents from a point`,
    type: 'mcq', complexity: 'medium', marks: 1,
    text: '$PA$ and $PB$ are tangents from an external point $P$ to a circle with centre $O$, touching it at $A$ and $B$. If $\\angle APB = 70^{\\circ}$, then $\\angle OAB$ is',
    options: ['$35^{\\circ}$', '$55^{\\circ}$', '$70^{\\circ}$', '$20^{\\circ}$'],
    answer: 'Correct option: A) $35^{\\circ}$. In quadrilateral $OAPB$, the angles at $A$ and $B$ are $90^{\\circ}$, so $\\angle AOB = 360^{\\circ} - 180^{\\circ} - 70^{\\circ} = 110^{\\circ}$. Triangle $OAB$ is isosceles ($OA = OB$), so $\\angle OAB = \\frac{180^{\\circ} - 110^{\\circ}}{2} = 35^{\\circ}$. Option B is $\\angle PAB$.',
  },
  {
    id: 'tb-ci-05', chapter: C, topic: 'Tangents from an external point', ref: `${CH10} · Number of tangents from a point`,
    type: 'short', complexity: 'medium', marks: 2,
    text: 'From a point $T$ outside a circle, two tangents $TA$ and $TB$ are drawn, touching the circle at $A$ and $B$. If $TA = 6$ cm and $\\angle ATB = 60^{\\circ}$, find the length of the chord $AB$.',
    answer: 'Tangents from an external point are equal, so $TA = TB = 6$ cm and triangle $TAB$ is isosceles. Its base angles are $\\frac{180^{\\circ} - 60^{\\circ}}{2} = 60^{\\circ}$, so the triangle is equilateral and $AB = 6$ cm.',
    steps: [{ step: 'Uses $TA = TB$ to get base angles of $60^{\\circ}$', marks: 1 }, { step: 'Concludes the triangle is equilateral and $AB = 6$ cm', marks: 1 }],
  },

  // Angle and length problems with tangents
  {
    id: 'tb-ci-06', chapter: C, topic: 'Angle and length problems with tangents', ref: `${CH10} · Number of tangents from a point`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A circle has centre $O$ and radius 7 cm. A point $P$ is 25 cm from $O$. Tangents $PA$ and $PB$ are drawn from $P$, touching the circle at $A$ and $B$. Find the length of $PA$ and the area of quadrilateral $OAPB$.',
    answer: '$OA \\perp PA$, so $PA = \\sqrt{25^{2} - 7^{2}} = \\sqrt{576} = 24$ cm. $OP$ divides $OAPB$ into two congruent right triangles $OAP$ and $OBP$ (RHS). Area $= 2 \\times \\frac{1}{2} \\times 7 \\times 24 = 168 \\text{ cm}^{2}$.',
    steps: [{ step: 'Finds $PA = 24$ cm using the right angle at $A$', marks: 1 }, { step: 'Splits the quadrilateral into two congruent right triangles', marks: 1 }, { step: 'Gets area $168 \\text{ cm}^{2}$', marks: 1 }],
  },
  {
    id: 'tb-ci-07', chapter: C, topic: 'Angle and length problems with tangents', ref: `${CH10} · Number of tangents from a point`,
    type: 'long', complexity: 'medium', marks: 4,
    text: 'A circle has centre $O$ and radius 5 cm. From a point $T$ with $OT = 13$ cm, tangents $TP$ and $TQ$ are drawn, touching the circle at $P$ and $Q$. The chord $PQ$ meets $OT$ at $M$. Find (i) $TP$, (ii) $PM$, and (iii) the length of the chord $PQ$.',
    answer: '(i) $OP \\perp TP$, so $TP = \\sqrt{13^{2} - 5^{2}} = 12$ cm.\n(ii) Since $TP = TQ$ and $OT$ bisects $\\angle PTQ$, triangles $TPM$ and $TQM$ are congruent (SAS), so $PM = QM$ and $PM \\perp OT$. In right triangle $OPT$, $PM$ is the altitude to the hypotenuse, so $\\frac{1}{2} \\times OT \\times PM = \\frac{1}{2} \\times OP \\times TP$, giving $PM = \\frac{5 \\times 12}{13} = \\frac{60}{13}$ cm.\n(iii) $PQ = 2PM = \\frac{120}{13} \\approx 9.23$ cm.',
    steps: [
      { step: 'Finds $TP = 12$ cm', marks: 1 },
      { step: 'Shows $OT$ is the perpendicular bisector of $PQ$', marks: 1 },
      { step: 'Finds $PM = \\frac{60}{13}$ cm by equating two expressions for the area of triangle $OPT$', marks: 1 },
      { step: 'Gets $PQ = \\frac{120}{13}$ cm', marks: 1 },
    ],
  },

  // Proofs with tangents
  {
    id: 'tb-ci-08', chapter: C, topic: 'Proofs with tangents', ref: `${CH10} · Number of tangents from a point`,
    type: 'short', complexity: 'hard', marks: 3,
    text: '$PA$ and $PB$ are tangents from an external point $P$ to a circle with centre $O$, touching it at $A$ and $B$. Prove that $OP$ bisects $\\angle AOB$ and that $OP$ is perpendicular to the chord $AB$.',
    answer: 'In triangles $OAP$ and $OBP$: $OA = OB$ (radii), $PA = PB$ (tangents from an external point), and $OP$ is common, so the triangles are congruent (SSS). Hence $\\angle AOP = \\angle BOP$, i.e. $OP$ bisects $\\angle AOB$. Let $OP$ meet $AB$ at $M$. In triangles $OAM$ and $OBM$: $OA = OB$, $\\angle AOM = \\angle BOM$, $OM$ common, so they are congruent (SAS). Then $\\angle OMA = \\angle OMB$, and since they add up to $180^{\\circ}$, each is $90^{\\circ}$. So $OP \\perp AB$.',
    steps: [{ step: 'Proves triangles $OAP$ and $OBP$ congruent', marks: 1 }, { step: 'Concludes $OP$ bisects $\\angle AOB$', marks: 1 }, { step: 'Uses a second congruence to show the angles at $M$ are $90^{\\circ}$', marks: 1 }],
  },

  // Circle touching the sides of a figure
  {
    id: 'tb-ci-09', chapter: C, topic: 'Circle touching the sides of a figure', ref: `${CH10} · Number of tangents from a point`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'Triangle $ABC$ is right-angled at $B$, with $AB = 8$ cm and $BC = 15$ cm. A circle with centre $O$ touches all three sides. Using the fact that tangents from an external point are equal, find the radius $r$ of the circle.',
    answer: '$AC = \\sqrt{8^{2} + 15^{2}} = 17$ cm. Let the circle touch $AB$, $BC$, $CA$ at $P$, $Q$, $R$. Since $OP \\perp AB$, $OQ \\perp BC$ and $\\angle B = 90^{\\circ}$, $OPBQ$ is a square, so $BP = BQ = r$. Then $AR = AP = 8 - r$ and $CR = CQ = 15 - r$. So $AC = (8 - r) + (15 - r) = 17$, giving $23 - 2r = 17$ and $r = 3$ cm.',
    steps: [{ step: 'Finds $AC = 17$ cm and shows $BP = BQ = r$', marks: 1 }, { step: 'Writes $AR = 8 - r$ and $CR = 15 - r$ using equal tangents', marks: 1 }, { step: 'Solves to $r = 3$ cm', marks: 1 }],
  },
  {
    id: 'tb-ci-10', chapter: C, topic: 'Circle touching the sides of a figure', ref: `${CH10} · Number of tangents from a point`,
    type: 'long', complexity: 'hard', marks: 5,
    text: 'In triangle $ABC$, $AB = AC = 13$ cm and $BC = 10$ cm. A circle with centre $O$ touches $BC$ at $D$, $CA$ at $E$ and $AB$ at $F$.\n(a) Prove that $D$ is the midpoint of $BC$.\n(b) Show that $A$, $O$ and $D$ lie on a line perpendicular to $BC$, and find $AD$.\n(c) Find $AF$, and use similar triangles $AFO$ and $ADB$ to find the radius of the circle.',
    answer: '(a) Tangents from an external point are equal: $AF = AE$, $BF = BD$, $CE = CD$. Since $AB = AC$, $BF = AB - AF = AC - AE = CE$. So $BD = BF = CE = CD$, and $D$ is the midpoint of $BC$.\n(b) $OD \\perp BC$ (radius to point of contact). In isosceles triangle $ABC$, the line from $A$ to the midpoint $D$ is also perpendicular to $BC$. There is only one perpendicular to $BC$ at $D$, so $A$, $O$, $D$ are collinear. $AD = \\sqrt{13^{2} - 5^{2}} = 12$ cm.\n(c) $BF = BD = 5$ cm, so $AF = 13 - 5 = 8$ cm. Triangles $AFO$ and $ADB$ share the angle at $A$ and have right angles at $F$ and $D$, so they are similar: $\\frac{OF}{BD} = \\frac{AF}{AD}$, i.e. $\\frac{r}{5} = \\frac{8}{12}$, so $r = \\frac{10}{3}$ cm $\\approx 3.33$ cm.',
    steps: [
      { step: 'Uses equal tangents and $AB = AC$ to get $BF = CE$', marks: 1 },
      { step: 'Concludes $BD = CD$', marks: 1 },
      { step: 'Justifies $A$, $O$, $D$ collinear and finds $AD = 12$ cm', marks: 1 },
      { step: 'Finds $AF = 8$ cm and sets up the similarity', marks: 1 },
      { step: 'Gets $r = \\frac{10}{3}$ cm', marks: 1 },
    ],
  },
];
