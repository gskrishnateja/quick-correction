import type { TextbookQuestion } from '../types.js';

const CH8 = 'NCERT Class 10 · Ch 8 Introduction to Trigonometry';
const C = 'Trigonometry';
const ref = (s: string) => `${CH8} · Same skill as ${s}`;

const IDP = 'Identities and proofs';
const STD = 'Ratios of standard angles';
const EVAL = 'Evaluating expressions';
const GIVEN = 'Ratio from a given ratio';
const FIG = 'Ratios from a right-triangle figure';

export const NCERT_CH08: TextbookQuestion[] = [
  // Example 1
  {
    id: 'nc-08-ex01', chapter: C, topic: GIVEN, ref: ref('Example 1'),
    type: 'short', complexity: 'easy', marks: 3,
    text: 'For an acute angle $A$, $\\tan A = \\frac{15}{8}$. Find the remaining five trigonometric ratios of $A$.',
    answer: 'Draw a right triangle with the side opposite $A$ equal to $15k$ and the side adjacent to $A$ equal to $8k$ ($k > 0$). Hypotenuse $= \\sqrt{(15k)^{2} + (8k)^{2}} = \\sqrt{289k^{2}} = 17k$. So $\\sin A = \\frac{15}{17}$, $\\cos A = \\frac{8}{17}$, $\\cot A = \\frac{8}{15}$, $\\text{cosec } A = \\frac{17}{15}$, $\\sec A = \\frac{17}{8}$.',
    steps: [
      { step: 'Takes opposite $= 15k$, adjacent $= 8k$ and finds the hypotenuse $17k$', marks: 1 },
      { step: 'Writes $\\sin A = \\frac{15}{17}$ and $\\cos A = \\frac{8}{17}$', marks: 1 },
      { step: 'Writes $\\cot A = \\frac{8}{15}$, $\\text{cosec } A = \\frac{17}{15}$, $\\sec A = \\frac{17}{8}$', marks: 1 },
    ],
  },
  // Example 2
  {
    id: 'nc-08-ex02', chapter: C, topic: IDP, ref: ref('Example 2'),
    type: 'short', complexity: 'medium', marks: 3,
    text: '$X$ and $Y$ are acute angles with $\\sec X = \\sec Y$. Prove that $X = Y$.',
    answer: 'Take right triangles $LMN$ (right angle at $M$, angle $X$ at $N$) and $RST$ (right angle at $S$, angle $Y$ at $T$). Then $\\sec X = \\frac{LN}{MN}$ and $\\sec Y = \\frac{RT}{ST}$. Since these are equal, $\\frac{LN}{RT} = \\frac{MN}{ST} = k$ (say). By Pythagoras, $LM = \\sqrt{LN^{2} - MN^{2}} = \\sqrt{k^{2}RT^{2} - k^{2}ST^{2}} = k\\sqrt{RT^{2} - ST^{2}} = k \\cdot RS$. So $\\frac{LN}{RT} = \\frac{MN}{ST} = \\frac{LM}{RS} = k$, and the triangles are similar by the SSS similarity criterion, with $N$ corresponding to $T$. Hence $X = Y$.',
    steps: [
      { step: 'Writes $\\sec X$ and $\\sec Y$ as side ratios and sets $\\frac{LN}{RT} = \\frac{MN}{ST} = k$', marks: 1 },
      { step: 'Uses Pythagoras to show the third sides are also in ratio $k$', marks: 1 },
      { step: 'Concludes similarity (SSS) and hence $X = Y$', marks: 1 },
    ],
  },
  // Example 3
  {
    id: 'nc-08-ex03', chapter: C, topic: FIG, ref: ref('Example 3'),
    type: 'short', complexity: 'medium', marks: 3,
    text: 'Triangle $LMN$ is right-angled at $M$, with $LN = 61$ units and $MN = 11$ units. Let $\\angle LNM = \\theta$. Find (i) $\\sin^{2}\\theta + \\cos^{2}\\theta$ and (ii) $\\sin^{2}\\theta - \\cos^{2}\\theta$.',
    answer: '$LM = \\sqrt{61^{2} - 11^{2}} = \\sqrt{(61-11)(61+11)} = \\sqrt{50 \\times 72} = \\sqrt{3600} = 60$ units. So $\\sin\\theta = \\frac{LM}{LN} = \\frac{60}{61}$ and $\\cos\\theta = \\frac{MN}{LN} = \\frac{11}{61}$. (i) $\\frac{3600 + 121}{3721} = \\frac{3721}{3721} = 1$. (ii) $\\frac{3600 - 121}{3721} = \\frac{3479}{3721}$.',
    steps: [
      { step: 'Finds $LM = 60$ units', marks: 1 },
      { step: 'Writes $\\sin\\theta = \\frac{60}{61}$, $\\cos\\theta = \\frac{11}{61}$', marks: 1 },
      { step: 'Gets (i) 1 and (ii) $\\frac{3479}{3721}$', marks: 1 },
    ],
  },
  // Example 4
  {
    id: 'nc-08-ex04', chapter: C, topic: GIVEN, ref: ref('Example 4'),
    type: 'short', complexity: 'easy', marks: 2,
    text: 'In triangle $XYZ$, right-angled at $Y$, $\\tan X = \\sqrt{3}$. Verify that $\\cos^{2}X - \\sin^{2}X = -\\frac{1}{2}$.',
    answer: '$\\tan X = \\frac{YZ}{XY} = \\sqrt{3}$, so take $XY = k$, $YZ = \\sqrt{3}k$. Then $XZ = \\sqrt{k^{2} + 3k^{2}} = 2k$. So $\\sin X = \\frac{\\sqrt{3}}{2}$ and $\\cos X = \\frac{1}{2}$. Hence $\\cos^{2}X - \\sin^{2}X = \\frac{1}{4} - \\frac{3}{4} = -\\frac{1}{2}$, as required.',
    steps: [
      { step: 'Finds $XZ = 2k$ and $\\sin X = \\frac{\\sqrt{3}}{2}$, $\\cos X = \\frac{1}{2}$', marks: 1 },
      { step: 'Substitutes to get $-\\frac{1}{2}$', marks: 1 },
    ],
  },
  // Example 5
  {
    id: 'nc-08-ex05', chapter: C, topic: FIG, ref: ref('Example 5'),
    type: 'short', complexity: 'medium', marks: 3,
    text: 'Triangle $DEF$ is right-angled at $E$. $EF = 9$ cm and $DF - DE = 1$ cm. Find $\\sin D$ and $\\cos D$.',
    answer: 'Let $DE = x$, so $DF = x + 1$. By Pythagoras, $(x+1)^{2} = x^{2} + 81$, so $2x + 1 = 81$ and $x = 40$. Thus $DE = 40$ cm and $DF = 41$ cm. $\\sin D = \\frac{EF}{DF} = \\frac{9}{41}$ and $\\cos D = \\frac{DE}{DF} = \\frac{40}{41}$.',
    steps: [
      { step: 'Sets up $(x+1)^{2} = x^{2} + 9^{2}$', marks: 1 },
      { step: 'Finds $DE = 40$ cm and $DF = 41$ cm', marks: 1 },
      { step: 'Writes $\\sin D = \\frac{9}{41}$, $\\cos D = \\frac{40}{41}$', marks: 1 },
    ],
  },
  // Example 6
  {
    id: 'nc-08-ex06', chapter: C, topic: STD, ref: ref('Example 6'),
    type: 'short', complexity: 'easy', marks: 3,
    text: 'In triangle $PQR$, right-angled at $Q$, $PQ = 8$ cm and $\\angle PRQ = 60^{\\circ}$. Find the lengths of $QR$ and $PR$.',
    answer: 'With respect to angle $R$, $PQ$ is opposite and $QR$ is adjacent. $\\tan 60^{\\circ} = \\frac{PQ}{QR}$ gives $\\sqrt{3} = \\frac{8}{QR}$, so $QR = \\frac{8}{\\sqrt{3}} = \\frac{8\\sqrt{3}}{3}$ cm. $\\sin 60^{\\circ} = \\frac{PQ}{PR}$ gives $\\frac{\\sqrt{3}}{2} = \\frac{8}{PR}$, so $PR = \\frac{16}{\\sqrt{3}} = \\frac{16\\sqrt{3}}{3}$ cm. (Check: $PR^{2} = 64 + \\frac{64}{3} = \\frac{256}{3}$.)',
    steps: [
      { step: 'Chooses $\\tan 60^{\\circ} = \\frac{PQ}{QR}$', marks: 1 },
      { step: 'Finds $QR = \\frac{8\\sqrt{3}}{3}$ cm', marks: 1 },
      { step: 'Finds $PR = \\frac{16\\sqrt{3}}{3}$ cm', marks: 1 },
    ],
  },
  // Example 7
  {
    id: 'nc-08-ex07', chapter: C, topic: STD, ref: ref('Example 7'),
    type: 'short', complexity: 'easy', marks: 2,
    text: 'In triangle $LMN$, right-angled at $M$, $LM = 4\\sqrt{3}$ cm and $LN = 8$ cm. Find $\\angle LNM$ and $\\angle MLN$.',
    answer: '$\\sin N = \\frac{LM}{LN} = \\frac{4\\sqrt{3}}{8} = \\frac{\\sqrt{3}}{2}$, so $\\angle LNM = 60^{\\circ}$. The angles of the triangle add to $180^{\\circ}$, so $\\angle MLN = 180^{\\circ} - 90^{\\circ} - 60^{\\circ} = 30^{\\circ}$.',
    steps: [
      { step: 'Gets $\\sin N = \\frac{\\sqrt{3}}{2}$, so $\\angle LNM = 60^{\\circ}$', marks: 1 },
      { step: 'Gets $\\angle MLN = 30^{\\circ}$', marks: 1 },
    ],
  },
  // Example 8
  {
    id: 'nc-08-ex08', chapter: C, topic: STD, ref: ref('Example 8'),
    type: 'short', complexity: 'medium', marks: 2,
    text: 'If $\\cos (A - B) = \\frac{\\sqrt{3}}{2}$ and $\\sin (A + B) = 1$, where $0^{\\circ} < A + B \\le 90^{\\circ}$ and $A > B$, find $A$ and $B$.',
    answer: '$\\cos (A - B) = \\frac{\\sqrt{3}}{2}$ gives $A - B = 30^{\\circ}$. $\\sin (A + B) = 1$ gives $A + B = 90^{\\circ}$. Adding: $2A = 120^{\\circ}$, so $A = 60^{\\circ}$ and $B = 30^{\\circ}$.',
    steps: [
      { step: 'Writes $A - B = 30^{\\circ}$ and $A + B = 90^{\\circ}$', marks: 1 },
      { step: 'Solves to get $A = 60^{\\circ}$, $B = 30^{\\circ}$', marks: 1 },
    ],
  },
  // Example 9
  {
    id: 'nc-08-ex09', chapter: C, topic: IDP, ref: ref('Example 9'),
    type: 'short', complexity: 'easy', marks: 3,
    text: 'For an acute angle $A$, express $\\sin A$, $\\tan A$ and $\\text{cosec } A$ in terms of $\\cos A$.',
    answer: 'From $\\sin^{2}A + \\cos^{2}A = 1$, $\\sin^{2}A = 1 - \\cos^{2}A$. Since $A$ is acute, $\\sin A > 0$, so $\\sin A = \\sqrt{1 - \\cos^{2}A}$. Then $\\tan A = \\frac{\\sin A}{\\cos A} = \\frac{\\sqrt{1 - \\cos^{2}A}}{\\cos A}$ and $\\text{cosec } A = \\frac{1}{\\sin A} = \\frac{1}{\\sqrt{1 - \\cos^{2}A}}$.',
    steps: [
      { step: 'Gets $\\sin A = \\sqrt{1 - \\cos^{2}A}$ (positive root, A acute)', marks: 1 },
      { step: 'Gets $\\tan A = \\frac{\\sqrt{1 - \\cos^{2}A}}{\\cos A}$', marks: 1 },
      { step: 'Gets $\\text{cosec } A = \\frac{1}{\\sqrt{1 - \\cos^{2}A}}$', marks: 1 },
    ],
  },
  // Example 10
  {
    id: 'nc-08-ex10', chapter: C, topic: IDP, ref: ref('Example 10'),
    type: 'short', complexity: 'easy', marks: 2,
    text: 'Prove that $\\text{cosec } A (1 - \\cos A)(\\text{cosec } A + \\cot A) = 1$.',
    answer: 'LHS $= \\frac{1}{\\sin A}(1 - \\cos A)\\left(\\frac{1}{\\sin A} + \\frac{\\cos A}{\\sin A}\\right) = \\frac{(1 - \\cos A)(1 + \\cos A)}{\\sin^{2}A} = \\frac{1 - \\cos^{2}A}{\\sin^{2}A} = \\frac{\\sin^{2}A}{\\sin^{2}A} = 1 =$ RHS.',
    steps: [
      { step: 'Writes everything in terms of $\\sin A$ and $\\cos A$', marks: 1 },
      { step: 'Uses $1 - \\cos^{2}A = \\sin^{2}A$ to reach 1', marks: 1 },
    ],
  },
  // Example 11
  {
    id: 'nc-08-ex11', chapter: C, topic: IDP, ref: ref('Example 11'),
    type: 'short', complexity: 'medium', marks: 3,
    text: 'Prove that $\\frac{\\tan A - \\sin A}{\\tan A + \\sin A} = \\frac{\\sec A - 1}{\\sec A + 1}$.',
    answer: 'LHS $= \\frac{\\frac{\\sin A}{\\cos A} - \\sin A}{\\frac{\\sin A}{\\cos A} + \\sin A} = \\frac{\\sin A\\left(\\frac{1}{\\cos A} - 1\\right)}{\\sin A\\left(\\frac{1}{\\cos A} + 1\\right)} = \\frac{\\sec A - 1}{\\sec A + 1} =$ RHS.',
    steps: [
      { step: 'Writes $\\tan A = \\frac{\\sin A}{\\cos A}$', marks: 1 },
      { step: 'Takes $\\sin A$ out as a common factor in numerator and denominator', marks: 1 },
      { step: 'Cancels and recognises $\\sec A$ to reach the RHS', marks: 1 },
    ],
  },
  // Example 12
  {
    id: 'nc-08-ex12', chapter: C, topic: IDP, ref: ref('Example 12'),
    type: 'long', complexity: 'hard', marks: 4,
    text: 'Using the identity $\\sec^{2}\\theta - \\tan^{2}\\theta = 1$, prove that $\\frac{\\tan\\theta + \\sec\\theta - 1}{\\tan\\theta - \\sec\\theta + 1} = \\frac{1 + \\sin\\theta}{\\cos\\theta}$.',
    answer: 'Replace the 1 in the numerator by $\\sec^{2}\\theta - \\tan^{2}\\theta$: numerator $= (\\sec\\theta + \\tan\\theta) - (\\sec\\theta - \\tan\\theta)(\\sec\\theta + \\tan\\theta) = (\\sec\\theta + \\tan\\theta)(1 - \\sec\\theta + \\tan\\theta)$. The denominator is $\\tan\\theta - \\sec\\theta + 1$, which is the same as the second bracket. So LHS $= \\sec\\theta + \\tan\\theta = \\frac{1}{\\cos\\theta} + \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{1 + \\sin\\theta}{\\cos\\theta} =$ RHS.',
    steps: [
      { step: 'Replaces 1 by $\\sec^{2}\\theta - \\tan^{2}\\theta$ in the numerator', marks: 1 },
      { step: 'Factorises the numerator as $(\\sec\\theta + \\tan\\theta)(1 - \\sec\\theta + \\tan\\theta)$', marks: 1 },
      { step: 'Cancels with the denominator to get $\\sec\\theta + \\tan\\theta$', marks: 1 },
      { step: 'Converts to $\\frac{1 + \\sin\\theta}{\\cos\\theta}$', marks: 1 },
    ],
  },

  // Exercise 8.1
  {
    id: 'nc-08-8-1-q01', chapter: C, topic: FIG, ref: ref('Ex 8.1 Q1'),
    type: 'short', complexity: 'easy', marks: 3,
    text: 'Triangle $PQR$ is right-angled at $Q$, with $PQ = 28$ cm and $QR = 45$ cm. Find (i) $\\sin P$ and $\\cos P$, (ii) $\\sin R$ and $\\cos R$.',
    answer: '$PR = \\sqrt{28^{2} + 45^{2}} = \\sqrt{784 + 2025} = \\sqrt{2809} = 53$ cm. (i) $\\sin P = \\frac{QR}{PR} = \\frac{45}{53}$, $\\cos P = \\frac{PQ}{PR} = \\frac{28}{53}$. (ii) $\\sin R = \\frac{PQ}{PR} = \\frac{28}{53}$, $\\cos R = \\frac{QR}{PR} = \\frac{45}{53}$.',
    steps: [
      { step: 'Finds $PR = 53$ cm', marks: 1 },
      { step: 'Writes $\\sin P$ and $\\cos P$', marks: 1 },
      { step: 'Writes $\\sin R$ and $\\cos R$', marks: 1 },
    ],
  },
  {
    id: 'nc-08-8-1-q02', chapter: C, topic: FIG, ref: ref('Ex 8.1 Q2'),
    type: 'short', complexity: 'easy', marks: 2,
    text: 'Triangle $XYZ$ is right-angled at $Y$. The hypotenuse $XZ = 25$ cm and $XY = 7$ cm. Find $\\tan Z - \\cot X$.',
    answer: '$YZ = \\sqrt{25^{2} - 7^{2}} = \\sqrt{576} = 24$ cm. $\\tan Z = \\frac{XY}{YZ} = \\frac{7}{24}$ and $\\cot X = \\frac{XY}{YZ} = \\frac{7}{24}$. So $\\tan Z - \\cot X = 0$.',
    steps: [
      { step: 'Finds $YZ = 24$ cm', marks: 1 },
      { step: 'Gets $\\tan Z = \\cot X = \\frac{7}{24}$, so the difference is 0', marks: 1 },
    ],
  },
  {
    id: 'nc-08-8-1-q03', chapter: C, topic: GIVEN, ref: ref('Ex 8.1 Q3'),
    type: 'short', complexity: 'easy', marks: 2,
    text: 'If $\\cos A = \\frac{5}{7}$ for an acute angle $A$, find $\\sin A$ and $\\tan A$.',
    answer: 'Take adjacent side $5k$ and hypotenuse $7k$. Opposite side $= \\sqrt{49k^{2} - 25k^{2}} = \\sqrt{24}k = 2\\sqrt{6}k$. So $\\sin A = \\frac{2\\sqrt{6}}{7}$ and $\\tan A = \\frac{2\\sqrt{6}}{5}$.',
    steps: [
      { step: 'Finds the opposite side $2\\sqrt{6}k$', marks: 1 },
      { step: 'Writes $\\sin A = \\frac{2\\sqrt{6}}{7}$, $\\tan A = \\frac{2\\sqrt{6}}{5}$', marks: 1 },
    ],
  },
  {
    id: 'nc-08-8-1-q04', chapter: C, topic: GIVEN, ref: ref('Ex 8.1 Q4'),
    type: 'short', complexity: 'easy', marks: 2,
    text: 'Given $20\\tan A = 21$ for an acute angle $A$, find $\\cos A$ and $\\text{cosec } A$.',
    answer: '$\\tan A = \\frac{21}{20}$, so take opposite $21k$, adjacent $20k$; hypotenuse $= \\sqrt{441 + 400}\\,k = 29k$. Hence $\\cos A = \\frac{20}{29}$ and $\\text{cosec } A = \\frac{29}{21}$.',
    steps: [
      { step: 'Finds the hypotenuse $29k$', marks: 1 },
      { step: 'Writes $\\cos A = \\frac{20}{29}$, $\\text{cosec } A = \\frac{29}{21}$', marks: 1 },
    ],
  },
  {
    id: 'nc-08-8-1-q05', chapter: C, topic: GIVEN, ref: ref('Ex 8.1 Q5'),
    type: 'short', complexity: 'easy', marks: 3,
    text: 'Given $\\text{cosec } \\theta = \\frac{25}{7}$ for an acute angle $\\theta$, find all the other trigonometric ratios of $\\theta$.',
    answer: 'Hypotenuse $25k$, opposite side $7k$, so adjacent side $= \\sqrt{625 - 49}\\,k = 24k$. $\\sin\\theta = \\frac{7}{25}$, $\\cos\\theta = \\frac{24}{25}$, $\\tan\\theta = \\frac{7}{24}$, $\\sec\\theta = \\frac{25}{24}$, $\\cot\\theta = \\frac{24}{7}$.',
    steps: [
      { step: 'Finds the adjacent side $24k$', marks: 1 },
      { step: 'Writes $\\sin\\theta$, $\\cos\\theta$, $\\tan\\theta$', marks: 1 },
      { step: 'Writes $\\sec\\theta$ and $\\cot\\theta$', marks: 1 },
    ],
  },
  {
    id: 'nc-08-8-1-q06', chapter: C, topic: IDP, ref: ref('Ex 8.1 Q6'),
    type: 'short', complexity: 'medium', marks: 3,
    text: '$P$ and $Q$ are acute angles such that $\\tan P = \\tan Q$. Show that $P = Q$.',
    answer: 'Take right triangles $ABC$ (right angle at $B$, angle $P$ at $A$) and $DEF$ (right angle at $E$, angle $Q$ at $D$). $\\tan P = \\frac{BC}{AB}$ and $\\tan Q = \\frac{EF}{DE}$. Since these are equal, $\\frac{BC}{EF} = \\frac{AB}{DE}$. Also $\\angle B = \\angle E = 90^{\\circ}$. So the triangles are similar by the SAS similarity criterion, with $A$ corresponding to $D$. Hence $P = Q$.',
    steps: [
      { step: 'Writes $\\tan P$ and $\\tan Q$ as side ratios and gets $\\frac{BC}{EF} = \\frac{AB}{DE}$', marks: 1 },
      { step: 'Notes the included right angles are equal', marks: 1 },
      { step: 'Concludes similarity (SAS) and hence $P = Q$', marks: 1 },
    ],
  },
  {
    id: 'nc-08-8-1-q07', chapter: C, topic: GIVEN, ref: ref('Ex 8.1 Q7'),
    type: 'short', complexity: 'medium', marks: 3,
    text: 'If $\\tan\\theta = \\frac{8}{15}$ for an acute angle $\\theta$, evaluate (i) $\\frac{(1 + \\cos\\theta)(1 - \\cos\\theta)}{(1 + \\sin\\theta)(1 - \\sin\\theta)}$, (ii) $\\sec^{2}\\theta$.',
    answer: 'Opposite $8k$, adjacent $15k$, hypotenuse $17k$, so $\\sin\\theta = \\frac{8}{17}$, $\\cos\\theta = \\frac{15}{17}$. (i) $\\frac{1 - \\cos^{2}\\theta}{1 - \\sin^{2}\\theta} = \\frac{\\sin^{2}\\theta}{\\cos^{2}\\theta} = \\tan^{2}\\theta = \\frac{64}{225}$. (ii) $\\sec^{2}\\theta = \\frac{289}{225}$ (also $= 1 + \\tan^{2}\\theta = 1 + \\frac{64}{225}$).',
    steps: [
      { step: 'Finds $\\sin\\theta = \\frac{8}{17}$ and $\\cos\\theta = \\frac{15}{17}$', marks: 1 },
      { step: 'Simplifies (i) to $\\tan^{2}\\theta = \\frac{64}{225}$', marks: 1 },
      { step: 'Gets (ii) $\\frac{289}{225}$', marks: 1 },
    ],
  },
  {
    id: 'nc-08-8-1-q08', chapter: C, topic: EVAL, ref: ref('Ex 8.1 Q8'),
    type: 'short', complexity: 'medium', marks: 3,
    text: 'If $12\\cot A = 5$ for an acute angle $A$, check whether $\\frac{2\\tan A}{1 + \\tan^{2}A} = 2\\sin A\\cos A$.',
    answer: '$\\cot A = \\frac{5}{12}$, so $\\tan A = \\frac{12}{5}$; adjacent $5k$, opposite $12k$, hypotenuse $13k$, so $\\sin A = \\frac{12}{13}$ and $\\cos A = \\frac{5}{13}$. LHS $= \\frac{24/5}{1 + 144/25} = \\frac{24/5}{169/25} = \\frac{120}{169}$. RHS $= 2 \\times \\frac{12}{13} \\times \\frac{5}{13} = \\frac{120}{169}$. Both sides are equal, so the statement holds.',
    steps: [
      { step: 'Finds $\\tan A$, $\\sin A$ and $\\cos A$', marks: 1 },
      { step: 'Evaluates LHS $= \\frac{120}{169}$', marks: 1 },
      { step: 'Evaluates RHS $= \\frac{120}{169}$ and concludes they are equal', marks: 1 },
    ],
  },
  {
    id: 'nc-08-8-1-q09', chapter: C, topic: EVAL, ref: ref('Ex 8.1 Q9'),
    type: 'short', complexity: 'medium', marks: 3,
    text: 'In triangle $PQR$, right-angled at $Q$, $\\tan P = \\sqrt{3}$. Find (i) $\\sin P \\sin R + \\cos P \\cos R$, (ii) $\\sin P \\cos R - \\cos P \\sin R$.',
    answer: 'Take $PQ = k$, $QR = \\sqrt{3}k$, so $PR = 2k$. Then $\\sin P = \\frac{\\sqrt{3}}{2}$, $\\cos P = \\frac{1}{2}$, $\\sin R = \\frac{PQ}{PR} = \\frac{1}{2}$, $\\cos R = \\frac{QR}{PR} = \\frac{\\sqrt{3}}{2}$. (i) $\\frac{\\sqrt{3}}{4} + \\frac{\\sqrt{3}}{4} = \\frac{\\sqrt{3}}{2}$. (ii) $\\frac{3}{4} - \\frac{1}{4} = \\frac{1}{2}$.',
    steps: [
      { step: 'Finds the sides and the four ratios', marks: 1 },
      { step: 'Gets (i) $\\frac{\\sqrt{3}}{2}$', marks: 1 },
      { step: 'Gets (ii) $\\frac{1}{2}$', marks: 1 },
    ],
  },
  {
    id: 'nc-08-8-1-q10', chapter: C, topic: FIG, ref: ref('Ex 8.1 Q10'),
    type: 'short', complexity: 'medium', marks: 3,
    text: 'In triangle $XYZ$, right-angled at $Y$, $XZ + YZ = 72$ cm and $XY = 12$ cm. Find $\\sin X$, $\\cos X$ and $\\tan X$.',
    answer: 'Let $YZ = y$, so $XZ = 72 - y$. By Pythagoras, $(72 - y)^{2} = 144 + y^{2}$, so $5184 - 144y = 144$, giving $y = 35$. So $YZ = 35$ cm and $XZ = 37$ cm. $\\sin X = \\frac{YZ}{XZ} = \\frac{35}{37}$, $\\cos X = \\frac{XY}{XZ} = \\frac{12}{37}$, $\\tan X = \\frac{YZ}{XY} = \\frac{35}{12}$.',
    steps: [
      { step: 'Sets up $(72 - y)^{2} = 12^{2} + y^{2}$', marks: 1 },
      { step: 'Finds $YZ = 35$ cm and $XZ = 37$ cm', marks: 1 },
      { step: 'Writes the three ratios', marks: 1 },
    ],
  },
  {
    id: 'nc-08-8-1-q11', chapter: C, topic: GIVEN, ref: ref('Ex 8.1 Q11'),
    type: 'short', complexity: 'easy', marks: 2,
    text: 'State whether each statement is true or false, with a reason. (i) For every acute angle $A$, $\\sec A \\ge 1$. (ii) $\\text{cosec } A = \\frac{5}{7}$ for some acute angle $A$. (iii) $\\tan A = \\frac{10}{3}$ for some acute angle $A$. (iv) $\\sin A$ means the number $\\sin$ multiplied by $A$.',
    answer: '(i) True: $\\sec A = \\frac{\\text{hypotenuse}}{\\text{adjacent}}$ and the hypotenuse is never shorter than the adjacent side. (ii) False: $\\text{cosec } A = \\frac{\\text{hypotenuse}}{\\text{opposite}} \\ge 1$, but $\\frac{5}{7} < 1$. (iii) True: $\\tan A$ can be any positive number; a right triangle with legs 10 and 3 gives $\\tan A = \\frac{10}{3}$. (iv) False: $\\sin A$ is a single symbol for the sine of angle $A$; $\\sin$ on its own has no value.',
    steps: [
      { step: 'Correct verdicts with reasons for (i) and (ii)', marks: 1 },
      { step: 'Correct verdicts with reasons for (iii) and (iv)', marks: 1 },
    ],
  },

  // Exercise 8.2
  {
    id: 'nc-08-8-2-q01', chapter: C, topic: EVAL, ref: ref('Ex 8.2 Q1'),
    type: 'long', complexity: 'medium', marks: 4,
    text: 'Evaluate: (i) $\\cos 60^{\\circ}\\cos 30^{\\circ} + \\sin 60^{\\circ}\\sin 30^{\\circ}$, (ii) $3\\tan^{2}30^{\\circ} + \\sin^{2}45^{\\circ} - \\cos^{2}60^{\\circ}$, (iii) $\\frac{\\sin 45^{\\circ}}{\\text{cosec } 45^{\\circ} + \\sec 60^{\\circ}}$, (iv) $\\frac{3\\sin^{2}60^{\\circ} + 2\\cot^{2}30^{\\circ} - \\sec^{2}45^{\\circ}}{\\sin^{2}45^{\\circ} + \\cos^{2}45^{\\circ}}$.',
    answer: '(i) $\\frac{1}{2} \\cdot \\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{3}}{2} \\cdot \\frac{1}{2} = \\frac{\\sqrt{3}}{2}$. (ii) $3 \\cdot \\frac{1}{3} + \\frac{1}{2} - \\frac{1}{4} = \\frac{5}{4}$. (iii) $\\frac{1/\\sqrt{2}}{\\sqrt{2} + 2} = \\frac{1}{2 + 2\\sqrt{2}} = \\frac{\\sqrt{2} - 1}{2}$ (multiplying top and bottom by $\\sqrt{2} - 1$). (iv) Numerator $= 3 \\cdot \\frac{3}{4} + 2 \\cdot 3 - 2 = \\frac{25}{4}$; denominator $= \\frac{1}{2} + \\frac{1}{2} = 1$; value $= \\frac{25}{4}$.',
    steps: [
      { step: '(i) $\\frac{\\sqrt{3}}{2}$', marks: 1 },
      { step: '(ii) $\\frac{5}{4}$', marks: 1 },
      { step: '(iii) $\\frac{\\sqrt{2} - 1}{2}$', marks: 1 },
      { step: '(iv) $\\frac{25}{4}$', marks: 1 },
    ],
  },
  {
    id: 'nc-08-8-2-q02a', chapter: C, topic: STD, ref: ref('Ex 8.2 Q2(i)'),
    type: 'mcq', complexity: 'easy', marks: 1,
    text: '$\\frac{1 - \\tan^{2}30^{\\circ}}{1 + \\tan^{2}30^{\\circ}} =$',
    options: ['$\\sin 60^{\\circ}$', '$\\cos 60^{\\circ}$', '$\\tan 30^{\\circ}$', '$\\cos 30^{\\circ}$'],
    answer: 'Correct option: B) $\\cos 60^{\\circ}$. $\\tan^{2}30^{\\circ} = \\frac{1}{3}$, so the value is $\\frac{2/3}{4/3} = \\frac{1}{2} = \\cos 60^{\\circ}$. The others are $\\frac{\\sqrt{3}}{2}$, $\\frac{1}{\\sqrt{3}}$ and $\\frac{\\sqrt{3}}{2}$.',
  },
  {
    id: 'nc-08-8-2-q02b', chapter: C, topic: STD, ref: ref('Ex 8.2 Q2(ii)'),
    type: 'mcq', complexity: 'easy', marks: 1,
    text: '$2\\cos^{2}45^{\\circ} - 1 =$',
    options: ['$\\cos 90^{\\circ}$', '$1$', '$\\sin 45^{\\circ}$', '$\\tan 45^{\\circ}$'],
    answer: 'Correct option: A) $\\cos 90^{\\circ}$. $2 \\cdot \\frac{1}{2} - 1 = 0 = \\cos 90^{\\circ}$. Options B and D equal 1 and option C equals $\\frac{1}{\\sqrt{2}}$.',
  },
  {
    id: 'nc-08-8-2-q02c', chapter: C, topic: STD, ref: ref('Ex 8.2 Q2(iii)'),
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The equation $\\tan 2A = 2\\tan A$ is true when $A =$',
    options: ['$30^{\\circ}$', '$0^{\\circ}$', '$45^{\\circ}$', '$15^{\\circ}$'],
    answer: 'Correct option: B) $0^{\\circ}$. Both sides are $\\tan 0^{\\circ} = 0$. For $A = 30^{\\circ}$: $\\tan 60^{\\circ} = \\sqrt{3} \\ne \\frac{2}{\\sqrt{3}}$. For $A = 45^{\\circ}$, $\\tan 90^{\\circ}$ is not defined. For $A = 15^{\\circ}$: $\\tan 30^{\\circ} \\approx 0.577$ but $2\\tan 15^{\\circ} \\approx 0.536$.',
  },
  {
    id: 'nc-08-8-2-q02d', chapter: C, topic: STD, ref: ref('Ex 8.2 Q2(iv)'),
    type: 'mcq', complexity: 'easy', marks: 1,
    text: '$2\\sin 30^{\\circ}\\cos 30^{\\circ} =$',
    options: ['$\\cos 60^{\\circ}$', '$\\sin 60^{\\circ}$', '$\\tan 60^{\\circ}$', '$\\sin 30^{\\circ}$'],
    answer: 'Correct option: B) $\\sin 60^{\\circ}$. $2 \\cdot \\frac{1}{2} \\cdot \\frac{\\sqrt{3}}{2} = \\frac{\\sqrt{3}}{2} = \\sin 60^{\\circ}$. Options A and D equal $\\frac{1}{2}$ and option C equals $\\sqrt{3}$.',
  },
  {
    id: 'nc-08-8-2-q03', chapter: C, topic: STD, ref: ref('Ex 8.2 Q3'),
    type: 'short', complexity: 'medium', marks: 2,
    text: 'If $\\cos (A + B) = 0$ and $\\sec (A - B) = 2$, where $0^{\\circ} < A + B \\le 90^{\\circ}$ and $A > B$, find $A$ and $B$.',
    answer: '$\\cos (A + B) = 0$ gives $A + B = 90^{\\circ}$. $\\sec (A - B) = 2$ means $\\cos (A - B) = \\frac{1}{2}$, so $A - B = 60^{\\circ}$. Adding: $2A = 150^{\\circ}$, so $A = 75^{\\circ}$ and $B = 15^{\\circ}$.',
    steps: [
      { step: 'Writes $A + B = 90^{\circ}$ and $A - B = 60^{\circ}$', marks: 1 },
      { step: 'Solves: $A = 75^{\circ}$, $B = 15^{\circ}$', marks: 1 },
    ],
  },
  {
    id: 'nc-08-8-2-q04', chapter: C, topic: STD, ref: ref('Ex 8.2 Q4'),
    type: 'short', complexity: 'easy', marks: 2,
    text: 'State whether each statement is true or false, with a reason. (i) $\\cos (A + B) = \\cos A + \\cos B$. (ii) As $\\theta$ increases from $0^{\\circ}$ towards $90^{\\circ}$, $\\sec\\theta$ decreases. (iii) For an acute angle $\\theta$, $\\sin\\theta = \\cos\\theta$ only when $\\theta = 45^{\\circ}$. (iv) $\\tan A$ is not defined for $A = 90^{\\circ}$.',
    answer: '(i) False: with $A = B = 30^{\\circ}$, $\\cos 60^{\\circ} = \\frac{1}{2}$ but $\\cos 30^{\\circ} + \\cos 30^{\\circ} = \\sqrt{3}$. (ii) False: $\\sec 0^{\\circ} = 1$, $\\sec 45^{\\circ} = \\sqrt{2}$, $\\sec 60^{\\circ} = 2$; since $\\cos\\theta$ decreases, $\\sec\\theta$ increases. (iii) True: $\\sin\\theta = \\cos\\theta$ means $\\tan\\theta = 1$, which for an acute angle happens only at $45^{\\circ}$. (iv) True: $\\tan 90^{\\circ} = \\frac{\\sin 90^{\\circ}}{\\cos 90^{\\circ}} = \\frac{1}{0}$, which is not defined.',
    steps: [
      { step: 'Correct verdicts with reasons for (i) and (ii)', marks: 1 },
      { step: 'Correct verdicts with reasons for (iii) and (iv)', marks: 1 },
    ],
  },

  // Exercise 8.3
  {
    id: 'nc-08-8-3-q01', chapter: C, topic: IDP, ref: ref('Ex 8.3 Q1'),
    type: 'short', complexity: 'easy', marks: 3,
    text: 'For an acute angle $A$, express $\\cos A$, $\\text{cosec } A$ and $\\cot A$ in terms of $\\tan A$.',
    answer: '$\\sec^{2}A = 1 + \\tan^{2}A$, so $\\sec A = \\sqrt{1 + \\tan^{2}A}$ (positive, A acute) and $\\cos A = \\frac{1}{\\sqrt{1 + \\tan^{2}A}}$. $\\cot A = \\frac{1}{\\tan A}$. $\\text{cosec}^{2}A = 1 + \\cot^{2}A = \\frac{\\tan^{2}A + 1}{\\tan^{2}A}$, so $\\text{cosec } A = \\frac{\\sqrt{1 + \\tan^{2}A}}{\\tan A}$.',
    steps: [
      { step: 'Gets $\\cos A = \\frac{1}{\\sqrt{1 + \\tan^{2}A}}$', marks: 1 },
      { step: 'Gets $\\cot A = \\frac{1}{\\tan A}$', marks: 1 },
      { step: 'Gets $\\text{cosec } A = \\frac{\\sqrt{1 + \\tan^{2}A}}{\\tan A}$', marks: 1 },
    ],
  },
  {
    id: 'nc-08-8-3-q02', chapter: C, topic: IDP, ref: ref('Ex 8.3 Q2'),
    type: 'short', complexity: 'medium', marks: 3,
    text: 'For an acute angle $A$, write each of the other trigonometric ratios of $A$ in terms of $\\text{cosec } A$.',
    answer: '$\\sin A = \\frac{1}{\\text{cosec } A}$. From $\\cot^{2}A = \\text{cosec}^{2}A - 1$: $\\cot A = \\sqrt{\\text{cosec}^{2}A - 1}$ and $\\tan A = \\frac{1}{\\sqrt{\\text{cosec}^{2}A - 1}}$. $\\cos A = \\cot A \\cdot \\sin A = \\frac{\\sqrt{\\text{cosec}^{2}A - 1}}{\\text{cosec } A}$ and $\\sec A = \\frac{\\text{cosec } A}{\\sqrt{\\text{cosec}^{2}A - 1}}$.',
    steps: [
      { step: 'Gets $\\sin A$ and $\\cot A$', marks: 1 },
      { step: 'Gets $\\tan A$ and $\\cos A$', marks: 1 },
      { step: 'Gets $\\sec A$', marks: 1 },
    ],
  },
  {
    id: 'nc-08-8-3-q03a', chapter: C, topic: IDP, ref: ref('Ex 8.3 Q3(i)'),
    type: 'mcq', complexity: 'easy', marks: 1,
    text: '$7\\,\\text{cosec}^{2}A - 7\\cot^{2}A =$',
    options: ['$0$', '$1$', '$6$', '$7$'],
    answer: 'Correct option: D) $7$. $7(\\text{cosec}^{2}A - \\cot^{2}A) = 7 \\times 1 = 7$.',
  },
  {
    id: 'nc-08-8-3-q03b', chapter: C, topic: IDP, ref: ref('Ex 8.3 Q3(ii)'),
    type: 'mcq', complexity: 'medium', marks: 1,
    text: '$(1 + \\cot\\theta + \\text{cosec } \\theta)(1 + \\tan\\theta - \\sec\\theta) =$',
    options: ['$1$', '$2$', '$0$', '$-2$'],
    answer: 'Correct option: B) $2$. Writing in sines and cosines: $\\frac{\\sin\\theta + \\cos\\theta + 1}{\\sin\\theta} \\cdot \\frac{\\cos\\theta + \\sin\\theta - 1}{\\cos\\theta} = \\frac{(\\sin\\theta + \\cos\\theta)^{2} - 1}{\\sin\\theta\\cos\\theta} = \\frac{2\\sin\\theta\\cos\\theta}{\\sin\\theta\\cos\\theta} = 2$.',
  },
  {
    id: 'nc-08-8-3-q03c', chapter: C, topic: IDP, ref: ref('Ex 8.3 Q3(iii)'),
    type: 'mcq', complexity: 'easy', marks: 1,
    text: '$(\\text{cosec } A + \\cot A)(1 - \\cos A) =$',
    options: ['$\\cos A$', '$\\sin A$', '$\\sec A$', '$\\cot A$'],
    answer: 'Correct option: B) $\\sin A$. $\\frac{1 + \\cos A}{\\sin A}(1 - \\cos A) = \\frac{1 - \\cos^{2}A}{\\sin A} = \\frac{\\sin^{2}A}{\\sin A} = \\sin A$.',
  },
  {
    id: 'nc-08-8-3-q03d', chapter: C, topic: IDP, ref: ref('Ex 8.3 Q3(iv)'),
    type: 'mcq', complexity: 'medium', marks: 1,
    text: '$\\frac{\\sec^{2}A - 1}{\\text{cosec}^{2}A - 1} =$',
    options: ['$\\tan^{2}A$', '$\\tan^{4}A$', '$\\cot^{2}A$', '$1$'],
    answer: 'Correct option: B) $\\tan^{4}A$. $\\sec^{2}A - 1 = \\tan^{2}A$ and $\\text{cosec}^{2}A - 1 = \\cot^{2}A = \\frac{1}{\\tan^{2}A}$, so the value is $\\tan^{2}A \\cdot \\tan^{2}A = \\tan^{4}A$.',
  },
  {
    id: 'nc-08-8-3-q04', chapter: C, topic: IDP, ref: ref('Ex 8.3 Q4'),
    type: 'long', complexity: 'hard', marks: 5,
    text: 'Prove the following identities, where the angles are acute and every expression is defined. (i) $(\\sec\\theta - \\tan\\theta)^{2} = \\frac{1 - \\sin\\theta}{1 + \\sin\\theta}$. (ii) $\\frac{\\cot\\theta + \\text{cosec } \\theta - 1}{\\cot\\theta - \\text{cosec } \\theta + 1} = \\frac{1 + \\cos\\theta}{\\sin\\theta}$, using $\\text{cosec}^{2}\\theta - \\cot^{2}\\theta = 1$. (iii) $\\sqrt{\\frac{1 + \\cos A}{1 - \\cos A}} = \\text{cosec } A + \\cot A$. (iv) $(\\sin A + \\sec A)^{2} + (\\cos A + \\text{cosec } A)^{2} = (1 + \\sec A\\,\\text{cosec } A)^{2}$.',
    answer: '(i) LHS $= \\left(\\frac{1 - \\sin\\theta}{\\cos\\theta}\\right)^{2} = \\frac{(1 - \\sin\\theta)^{2}}{1 - \\sin^{2}\\theta} = \\frac{(1 - \\sin\\theta)^{2}}{(1 - \\sin\\theta)(1 + \\sin\\theta)} = \\frac{1 - \\sin\\theta}{1 + \\sin\\theta}$. (ii) Replace 1 in the numerator by $\\text{cosec}^{2}\\theta - \\cot^{2}\\theta$: numerator $= (\\text{cosec } \\theta + \\cot\\theta) - (\\text{cosec } \\theta - \\cot\\theta)(\\text{cosec } \\theta + \\cot\\theta) = (\\text{cosec } \\theta + \\cot\\theta)(1 - \\text{cosec } \\theta + \\cot\\theta)$; the second bracket equals the denominator, so LHS $= \\text{cosec } \\theta + \\cot\\theta = \\frac{1 + \\cos\\theta}{\\sin\\theta}$. (iii) Multiply inside the root by $\\frac{1 + \\cos A}{1 + \\cos A}$: $\\sqrt{\\frac{(1 + \\cos A)^{2}}{1 - \\cos^{2}A}} = \\frac{1 + \\cos A}{\\sin A} = \\text{cosec } A + \\cot A$. (iv) LHS $= \\sin^{2}A + 2\\tan A + \\sec^{2}A + \\cos^{2}A + 2\\cot A + \\text{cosec}^{2}A = 1 + 2(\\tan A + \\cot A) + \\sec^{2}A + \\text{cosec}^{2}A$. Now $\\tan A + \\cot A = \\frac{\\sin^{2}A + \\cos^{2}A}{\\sin A\\cos A} = \\sec A\\,\\text{cosec } A$ and $\\sec^{2}A + \\text{cosec}^{2}A = \\frac{\\sin^{2}A + \\cos^{2}A}{\\sin^{2}A\\cos^{2}A} = \\sec^{2}A\\,\\text{cosec}^{2}A$. So LHS $= 1 + 2\\sec A\\,\\text{cosec } A + \\sec^{2}A\\,\\text{cosec}^{2}A = (1 + \\sec A\\,\\text{cosec } A)^{2}$.',
    steps: [
      { step: '(i) Writes in sin and cos and factorises $1 - \\sin^{2}\\theta$', marks: 1 },
      { step: '(ii) Replaces 1 by $\\text{cosec}^{2}\\theta - \\cot^{2}\\theta$ and factorises', marks: 1 },
      { step: '(ii) Cancels and converts $\\text{cosec } \\theta + \\cot\\theta$ to $\\frac{1 + \\cos\\theta}{\\sin\\theta}$', marks: 1 },
      { step: '(iii) Rationalises under the root to get $\\frac{1 + \\cos A}{\\sin A}$', marks: 1 },
      { step: '(iv) Expands and uses $\\tan A + \\cot A = \\sec A\\,\\text{cosec } A$ and $\\sec^{2}A + \\text{cosec}^{2}A = \\sec^{2}A\\,\\text{cosec}^{2}A$', marks: 1 },
    ],
  },
];
