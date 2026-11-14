import type { TextbookQuestion } from './types.js';

const CH = 'NCERT Class 10 · Ch 6 Triangles';
const C = 'Triangles';

export const TRIANGLES: TextbookQuestion[] = [
  {
    id: 'tb-tr-01', chapter: C, topic: 'Basic proportionality theorem', ref: `${CH} · Basic proportionality theorem`,
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'In $\\triangle PQR$, $S$ is a point on $PQ$ and $T$ is a point on $PR$ such that $ST \\parallel QR$. If $PS = 3$ cm, $SQ = 5$ cm and $PT = 4.5$ cm, then $TR$ is',
    options: ['$7.5$ cm', '$2.7$ cm', '$12$ cm', '$6.5$ cm'],
    answer: 'Correct option: A) $7.5$ cm. By the basic proportionality theorem, $\\frac{PS}{SQ} = \\frac{PT}{TR}$, so $\\frac{3}{5} = \\frac{4.5}{TR}$ and $TR = 7.5$ cm. Option B inverts the ratio and option C is the whole side $PR$.',
  },
  {
    id: 'tb-tr-02', chapter: C, topic: 'Similarity criteria', ref: `${CH} · Criteria for similarity`,
    type: 'mcq', complexity: 'medium', marks: 1,
    text: 'In $\\triangle ABC$, $\\angle A = 50^{\\circ}$ and $\\angle B = 70^{\\circ}$. In $\\triangle PQR$, $\\angle P = 70^{\\circ}$ and $\\angle Q = 60^{\\circ}$. Which statement is correct?',
    options: ['$\\triangle ABC \\sim \\triangle PQR$', '$\\triangle ABC \\sim \\triangle RPQ$', '$\\triangle ABC \\sim \\triangle QRP$', 'The triangles are not similar'],
    answer: 'Correct option: B) $\\triangle ABC \\sim \\triangle RPQ$. The third angles are $\\angle C = 60^{\\circ}$ and $\\angle R = 50^{\\circ}$, so $\\angle A = \\angle R$, $\\angle B = \\angle P$ and $\\angle C = \\angle Q$. By the AA criterion the triangles are similar with $A \\leftrightarrow R$, $B \\leftrightarrow P$, $C \\leftrightarrow Q$. The vertex order in A and C does not match equal angles.',
  },
  {
    id: 'tb-tr-03', chapter: C, topic: 'Similarity criteria', ref: `${CH} · Similar triangles`,
    type: 'mcq', complexity: 'easy', marks: 1,
    text: '$\\triangle ABC \\sim \\triangle DEF$, with $AB = 4$ cm, $BC = 6$ cm, $CA = 5$ cm and $DE = 10$ cm. Then',
    options: ['$EF = 15$ cm and $FD = 12.5$ cm', '$EF = 12.5$ cm and $FD = 15$ cm', '$EF = 12$ cm and $FD = 10$ cm', '$EF = 2.4$ cm and $FD = 2$ cm'],
    answer: 'Correct option: A) $EF = 15$ cm and $FD = 12.5$ cm. Corresponding sides are in the ratio $\\frac{DE}{AB} = \\frac{10}{4} = 2.5$, so $EF = 2.5 \\times 6 = 15$ cm and $FD = 2.5 \\times 5 = 12.5$ cm. Option B swaps the sides, C adds 6 and 5 instead of scaling, and D divides by 2.5.',
  },
  {
    id: 'tb-tr-04', chapter: C, topic: 'Basic proportionality theorem', ref: `${CH} · Basic proportionality theorem`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'In $\\triangle XYZ$, $M$ is a point on $XY$ and $N$ is a point on $XZ$, with $XM = 2.4$ cm, $MY = 3.6$ cm, $XN = 2$ cm and $NZ = 3$ cm. Is $MN \\parallel YZ$? Give a reason.',
    answer: '$\\frac{XM}{MY} = \\frac{2.4}{3.6} = \\frac{2}{3}$ and $\\frac{XN}{NZ} = \\frac{2}{3}$. Since the line $MN$ divides the two sides in the same ratio, $MN \\parallel YZ$ by the converse of the basic proportionality theorem.',
    steps: [{ step: 'Shows both ratios equal $\\frac{2}{3}$', marks: 1 }, { step: 'Concludes $MN \\parallel YZ$ by the converse of BPT', marks: 1 }],
  },
  {
    id: 'tb-tr-05', chapter: C, topic: 'Basic proportionality theorem', ref: `${CH} · Basic proportionality theorem`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'In $\\triangle ABC$, $D$ is on $AB$ and $E$ is on $AC$ with $DE \\parallel BC$. If $AD = x + 1$, $DB = 3x - 1$, $AE = x + 3$ and $EC = 3x + 4$ (all in cm), find $x$ and the lengths $AD$ and $AE$.',
    answer: 'By BPT, $\\frac{AD}{DB} = \\frac{AE}{EC}$: $\\frac{x+1}{3x-1} = \\frac{x+3}{3x+4}$. Cross-multiplying, $(x+1)(3x+4) = (x+3)(3x-1)$, so $3x^{2} + 7x + 4 = 3x^{2} + 8x - 3$, giving $x = 7$. Then $AD = 8$ cm and $AE = 10$ cm (check: $\\frac{8}{20} = \\frac{10}{25} = \\frac{2}{5}$).',
    steps: [{ step: 'Writes $\\frac{x+1}{3x-1} = \\frac{x+3}{3x+4}$', marks: 1 }, { step: 'Simplifies to get $x = 7$', marks: 1 }, { step: 'Gives $AD = 8$ cm and $AE = 10$ cm', marks: 1 }],
  },
  {
    id: 'tb-tr-06', chapter: C, topic: 'Applications of similar triangles', ref: `${CH} · Criteria for similarity`,
    type: 'short', complexity: 'medium', marks: 3,
    text: '$ABCD$ is a trapezium with $AB \\parallel DC$ and $AB = 3\\,DC$. Its diagonals $AC$ and $BD$ meet at $O$. If $AC = 20$ cm, find $AO$ and $OC$.',
    answer: 'In $\\triangle AOB$ and $\\triangle COD$: $\\angle OAB = \\angle OCD$ (alternate angles, $AB \\parallel DC$) and $\\angle AOB = \\angle COD$ (vertically opposite). So $\\triangle AOB \\sim \\triangle COD$ by AA, and $\\frac{AO}{OC} = \\frac{AB}{CD} = 3$. With $AO + OC = 20$, $OC = 5$ cm and $AO = 15$ cm.',
    steps: [{ step: 'Proves $\\triangle AOB \\sim \\triangle COD$ by AA with reasons', marks: 1 }, { step: 'Writes $\\frac{AO}{OC} = \\frac{AB}{CD} = 3$', marks: 1 }, { step: 'Finds $AO = 15$ cm and $OC = 5$ cm', marks: 1 }],
  },
  {
    id: 'tb-tr-07', chapter: C, topic: 'Proofs on similar triangles', ref: `${CH} · Criteria for similarity`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'In $\\triangle ABC$, $E$ is a point on $AB$ and $F$ is a point on $AC$ such that $\\angle AEF = \\angle ACB$. Prove that $AE \\cdot AB = AF \\cdot AC$. Hence find $AF$ if $AE = 4$ cm, $AB = 9$ cm and $AC = 12$ cm.',
    answer: 'In $\\triangle AEF$ and $\\triangle ACB$: $\\angle EAF = \\angle CAB$ (common) and $\\angle AEF = \\angle ACB$ (given). So $\\triangle AEF \\sim \\triangle ACB$ by AA, with $A \\leftrightarrow A$, $E \\leftrightarrow C$, $F \\leftrightarrow B$. Hence $\\frac{AE}{AC} = \\frac{AF}{AB}$, which gives $AE \\cdot AB = AF \\cdot AC$. Then $4 \\times 9 = AF \\times 12$, so $AF = 3$ cm.',
    steps: [{ step: 'Proves $\\triangle AEF \\sim \\triangle ACB$ by AA with the correct correspondence', marks: 1 }, { step: 'Writes $\\frac{AE}{AC} = \\frac{AF}{AB}$ and rearranges', marks: 1 }, { step: 'Finds $AF = 3$ cm', marks: 1 }],
  },
  {
    id: 'tb-tr-08', chapter: C, topic: 'Proofs on similar triangles', ref: `${CH} · Basic proportionality theorem`,
    type: 'short', complexity: 'hard', marks: 3,
    text: 'In $\\triangle ABC$, $M$ is the midpoint of $BC$. A line parallel to $BC$ meets $AB$ at $P$, $AC$ at $Q$ and the median $AM$ at $N$. Prove that $N$ is the midpoint of $PQ$.',
    answer: 'In $\\triangle ABM$, $PN \\parallel BM$, so $\\triangle APN \\sim \\triangle ABM$ (AA: common angle at $A$, corresponding angles $\\angle APN = \\angle ABM$). Hence $\\frac{PN}{BM} = \\frac{AN}{AM}$. Similarly in $\\triangle ACM$, $NQ \\parallel MC$, so $\\triangle ANQ \\sim \\triangle AMC$ and $\\frac{NQ}{MC} = \\frac{AN}{AM}$. Therefore $\\frac{PN}{BM} = \\frac{NQ}{MC}$. Since $BM = MC$, $PN = NQ$, so $N$ is the midpoint of $PQ$.',
    steps: [{ step: 'Shows $\\frac{PN}{BM} = \\frac{AN}{AM}$ from $\\triangle APN \\sim \\triangle ABM$', marks: 1 }, { step: 'Shows $\\frac{NQ}{MC} = \\frac{AN}{AM}$ from $\\triangle ANQ \\sim \\triangle AMC$', marks: 1 }, { step: 'Uses $BM = MC$ to conclude $PN = NQ$', marks: 1 }],
  },
  {
    id: 'tb-tr-09', chapter: C, topic: 'Applications of similar triangles', ref: `${CH} · Criteria for similarity`,
    type: 'long', complexity: 'hard', marks: 5,
    text: 'To find the height of a tree, Kabir lays a small flat mirror on level ground and stands so that he can see the top of the tree in the mirror. Kabir, the mirror and the foot of the tree are in a straight line, Kabir and the tree both stand vertically, and the line of sight makes equal angles with the ground on both sides of the mirror. Kabir’s eyes are 1.6 m above the ground. (i) If Kabir stands 2 m from the mirror and the mirror is 15 m from the foot of the tree, find the height of the tree. (ii) For a different tree, 9.6 m tall, Kabir and the foot of the tree are 14 m apart. How far from Kabir must the mirror be placed?',
    answer: 'Let $E$ be Kabir’s eye, $K$ his feet, $M$ the mirror, $T$ the top and $F$ the foot of the tree. (i) In $\\triangle EKM$ and $\\triangle TFM$: $\\angle EKM = \\angle TFM = 90^{\\circ}$ and $\\angle EMK = \\angle TMF$ (equal angles at the mirror). So $\\triangle EKM \\sim \\triangle TFM$ by AA, and $\\frac{TF}{EK} = \\frac{FM}{KM}$, giving $TF = \\frac{1.6 \\times 15}{2} = 12$ m. (ii) Let the mirror be $d$ m from Kabir, so $14 - d$ m from the tree. Then $\\frac{1.6}{d} = \\frac{9.6}{14 - d}$, so $1.6(14 - d) = 9.6d$, i.e. $22.4 = 11.2d$ and $d = 2$ m.',
    steps: [
      { step: 'Identifies the right angles and the equal angles at the mirror', marks: 1 },
      { step: 'States the triangles are similar by AA', marks: 1 },
      { step: 'Writes the proportion $\\frac{TF}{1.6} = \\frac{15}{2}$', marks: 1 },
      { step: 'Finds the height 12 m', marks: 1 },
      { step: 'Solves $\\frac{1.6}{d} = \\frac{9.6}{14 - d}$ to get $d = 2$ m', marks: 1 },
    ],
  },
  {
    id: 'tb-tr-10', chapter: C, topic: 'Basic proportionality theorem', ref: `${CH} · Basic proportionality theorem`,
    type: 'long', complexity: 'hard', marks: 5,
    text: '$ABCD$ is a quadrilateral with diagonals $AC$ and $BD$. $P$ is a point on $AB$. The line through $P$ parallel to $BC$ meets $AC$ at $Q$, and the line through $Q$ parallel to $CD$ meets $AD$ at $R$. (i) Prove that $PR \\parallel BD$. (ii) If $AP = 2$ cm, $PB = 3$ cm and $AD = 10$ cm, find $AR$.',
    answer: '(i) In $\\triangle ABC$, $PQ \\parallel BC$, so by BPT $\\frac{AP}{PB} = \\frac{AQ}{QC}$. In $\\triangle ACD$, $QR \\parallel CD$, so $\\frac{AQ}{QC} = \\frac{AR}{RD}$. Hence $\\frac{AP}{PB} = \\frac{AR}{RD}$. In $\\triangle ABD$, the line $PR$ divides $AB$ and $AD$ in the same ratio, so $PR \\parallel BD$ by the converse of BPT. (ii) $\\frac{AR}{RD} = \\frac{2}{3}$, so $AR = \\frac{2}{5} \\times 10 = 4$ cm.',
    steps: [
      { step: 'Applies BPT in $\\triangle ABC$: $\\frac{AP}{PB} = \\frac{AQ}{QC}$', marks: 1 },
      { step: 'Applies BPT in $\\triangle ACD$: $\\frac{AQ}{QC} = \\frac{AR}{RD}$', marks: 1 },
      { step: 'Equates to get $\\frac{AP}{PB} = \\frac{AR}{RD}$', marks: 1 },
      { step: 'Uses the converse of BPT in $\\triangle ABD$ to conclude $PR \\parallel BD$', marks: 1 },
      { step: 'Finds $AR = 4$ cm', marks: 1 },
    ],
  },
];
