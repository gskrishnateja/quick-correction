import type { TextbookQuestion } from '../types.js';

const C = 'Triangles';
const R = 'NCERT Class 10 · Ch 6 Triangles · Same skill as';

export const NCERT_CH06: TextbookQuestion[] = [
  // ---------- Exercise 6.1 (Q1 is a wording fill-in; skipped) ----------
  {
    id: 'nc-06-6-1-q02', chapter: C, topic: 'Similar figures and polygons', ref: `${R} Ex 6.1 Q2`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'Give two examples of pairs of figures that are always similar (but need not be congruent), and two examples of pairs of figures of the same kind that need not be similar. Give a one-line reason for each.',
    answer: 'Always similar: (a) any two regular hexagons, since all their angles are $120^\\circ$ and all sides of each are equal, so corresponding sides are in one ratio; (b) any two circles, since one is an enlargement of the other. Need not be similar: (a) two rectangles, e.g. 2 cm by 3 cm and 2 cm by 5 cm: angles match but sides are not in proportion; (b) two rhombuses with side 4 cm, one with an angle of $60^\\circ$ and one with $80^\\circ$: sides are in proportion but angles differ. (Any correct examples with reasons earn the marks.)',
    steps: [
      { step: 'Two correct pairs of always-similar figures with reasons', marks: 1 },
      { step: 'Two correct pairs of not-necessarily-similar figures with reasons', marks: 1 },
    ],
  },
  {
    id: 'nc-06-6-1-q03', chapter: C, topic: 'Similar figures and polygons', ref: `${R} Ex 6.1 Q3`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'Quadrilateral ABCD is a rectangle with AB = 4 cm and BC = 2 cm. Quadrilateral PQRS is a parallelogram with PQ = 6 cm, QR = 3 cm and $\\angle Q = 60^\\circ$. Are the two quadrilaterals similar? Justify.',
    answer: 'Sides: $\\frac{AB}{PQ} = \\frac{4}{6} = \\frac{2}{3}$ and $\\frac{BC}{QR} = \\frac{2}{3}$, and opposite sides of each figure are equal, so all corresponding sides are in the same ratio. Angles: every angle of ABCD is $90^\\circ$, but $\\angle Q = 60^\\circ$ (and $\\angle P = 120^\\circ$). Corresponding angles are not equal, so the quadrilaterals are not similar.',
    steps: [
      { step: 'Shows the sides are in the same ratio $2 : 3$', marks: 1 },
      { step: 'Notes the angles are not equal and concludes not similar', marks: 1 },
    ],
  },

  // ---------- Section 6.3 examples ----------
  {
    id: 'nc-06-ex01', chapter: C, topic: 'Basic proportionality theorem', ref: `${R} Example 1`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'In $\\triangle LMN$, a line parallel to MN meets LM at P and LN at Q. Using the Basic Proportionality Theorem, prove that $\\frac{LM}{PM} = \\frac{LN}{QN}$.',
    answer: 'Since $PQ \\parallel MN$, by BPT $\\frac{LP}{PM} = \\frac{LQ}{QN}$. Add 1 to both sides: $\\frac{LP}{PM} + 1 = \\frac{LQ}{QN} + 1$, i.e. $\\frac{LP + PM}{PM} = \\frac{LQ + QN}{QN}$. As $LP + PM = LM$ and $LQ + QN = LN$, we get $\\frac{LM}{PM} = \\frac{LN}{QN}$.',
    steps: [
      { step: 'Writes $\\frac{LP}{PM} = \\frac{LQ}{QN}$ by BPT', marks: 1 },
      { step: 'Adds 1 to both sides and combines the fractions', marks: 1 },
      { step: 'Uses $LP + PM = LM$, $LQ + QN = LN$ to conclude', marks: 1 },
    ],
  },
  {
    id: 'nc-06-ex02', chapter: C, topic: 'Basic proportionality theorem', ref: `${R} Example 2`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'PQRS is a trapezium with $PQ \\parallel SR$. X is a point on PS and Y is a point on QR such that $XY \\parallel PQ$. Prove that $\\frac{SX}{SP} = \\frac{RY}{RQ}$.',
    answer: 'Join SQ, meeting XY at G. Since $XY \\parallel PQ$ and $PQ \\parallel SR$, also $XY \\parallel SR$. In $\\triangle SPQ$, $XG \\parallel PQ$, so by BPT $\\frac{SX}{XP} = \\frac{SG}{GQ}$, hence (adding 1 and inverting) $\\frac{SX}{SP} = \\frac{SG}{SQ}$. In $\\triangle QSR$, $GY \\parallel SR$, so $\\frac{QG}{GS} = \\frac{QY}{YR}$, which gives $\\frac{GS}{QS} = \\frac{YR}{QR}$ in the same way. Therefore $\\frac{SX}{SP} = \\frac{SG}{SQ} = \\frac{RY}{RQ}$.',
    steps: [
      { step: 'Draws diagonal SQ and notes $XY \\parallel SR$', marks: 1 },
      { step: 'Applies BPT in $\\triangle SPQ$ to get $\\frac{SX}{SP} = \\frac{SG}{SQ}$', marks: 1 },
      { step: 'Applies BPT in $\\triangle QSR$ and combines', marks: 1 },
    ],
  },
  {
    id: 'nc-06-ex03', chapter: C, topic: 'Basic proportionality theorem', ref: `${R} Example 3`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'In $\\triangle ABC$, D lies on AB and E lies on AC with $\\frac{AD}{DB} = \\frac{AE}{EC}$. If $AD = AE$, prove that $\\triangle ABC$ is isosceles.',
    answer: 'Since $\\frac{AD}{DB} = \\frac{AE}{EC}$, by the converse of BPT, $DE \\parallel BC$. So $\\angle ADE = \\angle ABC$ and $\\angle AED = \\angle ACB$ (corresponding angles). As $AD = AE$, $\\angle ADE = \\angle AED$ (angles opposite equal sides). Hence $\\angle ABC = \\angle ACB$, so $AB = AC$ and $\\triangle ABC$ is isosceles.',
    steps: [
      { step: 'Uses the converse of BPT to get $DE \\parallel BC$', marks: 1 },
      { step: 'Writes the corresponding angle equalities', marks: 1 },
      { step: 'Uses $AD = AE$ to get $\\angle B = \\angle C$ and concludes $AB = AC$', marks: 1 },
    ],
  },

  // ---------- Exercise 6.2 ----------
  {
    id: 'nc-06-6-2-q01', chapter: C, topic: 'Basic proportionality theorem', ref: `${R} Ex 6.2 Q1`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'In $\\triangle ABC$, D lies on AB and E lies on AC with $DE \\parallel BC$. (i) If AD = 2.4 cm, DB = 3.6 cm and AE = 2 cm, find EC. (ii) If AE = 2 cm, EC = 5 cm and DB = 6.5 cm, find AD.',
    answer: 'By BPT, $\\frac{AD}{DB} = \\frac{AE}{EC}$. (i) $\\frac{2.4}{3.6} = \\frac{2}{EC}$, so $EC = \\frac{2 \\times 3.6}{2.4} = 3$ cm. (ii) $\\frac{AD}{6.5} = \\frac{2}{5}$, so $AD = \\frac{2 \\times 6.5}{5} = 2.6$ cm.',
    steps: [
      { step: 'Finds EC = 3 cm using BPT', marks: 1 },
      { step: 'Finds AD = 2.6 cm using BPT', marks: 1 },
    ],
  },
  {
    id: 'nc-06-6-2-q02', chapter: C, topic: 'Basic proportionality theorem', ref: `${R} Ex 6.2 Q2`,
    type: 'short', complexity: 'easy', marks: 3,
    text: 'M and N are points on sides XY and XZ of $\\triangle XYZ$. In each case, state whether $MN \\parallel YZ$. (i) XM = 4.2 cm, MY = 2.8 cm, XN = 3.6 cm, NZ = 2.4 cm (ii) XM = 5 cm, MY = 6 cm, XN = 4 cm, NZ = 5 cm (iii) XY = 2.4 cm, XZ = 3.6 cm, XM = 0.6 cm, XN = 0.9 cm',
    answer: '(i) $\\frac{XM}{MY} = \\frac{4.2}{2.8} = 1.5$ and $\\frac{XN}{NZ} = \\frac{3.6}{2.4} = 1.5$. Equal, so $MN \\parallel YZ$ (converse of BPT). (ii) $\\frac{5}{6} \\ne \\frac{4}{5}$, so MN is not parallel to YZ. (iii) $\\frac{XM}{XY} = \\frac{0.6}{2.4} = \\frac{1}{4}$ and $\\frac{XN}{XZ} = \\frac{0.9}{3.6} = \\frac{1}{4}$, so $\\frac{XM}{MY} = \\frac{XN}{NZ} = \\frac{1}{3}$ and $MN \\parallel YZ$.',
    steps: [
      { step: 'Part (i): equal ratios, parallel', marks: 1 },
      { step: 'Part (ii): unequal ratios, not parallel', marks: 1 },
      { step: 'Part (iii): equal ratios, parallel', marks: 1 },
    ],
  },
  {
    id: 'nc-06-6-2-q03', chapter: C, topic: 'Basic proportionality theorem', ref: `${R} Ex 6.2 Q3`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'PQRS is a quadrilateral with diagonal PR. X is a point on PR. A line through X parallel to RQ meets PQ at Y, and a line through X parallel to RS meets PS at Z. Prove that $\\frac{PY}{YQ} = \\frac{PZ}{ZS}$.',
    answer: 'In $\\triangle PRQ$, $XY \\parallel RQ$, so by BPT $\\frac{PY}{YQ} = \\frac{PX}{XR}$. In $\\triangle PRS$, $XZ \\parallel RS$, so $\\frac{PZ}{ZS} = \\frac{PX}{XR}$. Hence $\\frac{PY}{YQ} = \\frac{PZ}{ZS}$.',
    steps: [
      { step: 'BPT in $\\triangle PRQ$', marks: 1 },
      { step: 'BPT in $\\triangle PRS$', marks: 1 },
      { step: 'Equates through $\\frac{PX}{XR}$', marks: 1 },
    ],
  },
  {
    id: 'nc-06-6-2-q04', chapter: C, topic: 'Basic proportionality theorem', ref: `${R} Ex 6.2 Q4`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'In $\\triangle PQR$, S lies on PQ and T lies on QR with $ST \\parallel PR$. U is a point on QT such that $SU \\parallel PT$. Prove that $QT^{2} = QU \\times QR$.',
    answer: 'In $\\triangle QPT$, $SU \\parallel PT$, so by BPT (in the form of Example 1) $\\frac{QU}{QT} = \\frac{QS}{QP}$. In $\\triangle QPR$, $ST \\parallel PR$, so $\\frac{QT}{QR} = \\frac{QS}{QP}$. Hence $\\frac{QU}{QT} = \\frac{QT}{QR}$, giving $QT^{2} = QU \\times QR$.',
    steps: [
      { step: 'BPT in $\\triangle QPT$', marks: 1 },
      { step: 'BPT in $\\triangle QPR$', marks: 1 },
      { step: 'Equates and cross-multiplies', marks: 1 },
    ],
  },
  {
    id: 'nc-06-6-2-q05', chapter: C, topic: 'Basic proportionality theorem', ref: `${R} Ex 6.2 Q5`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'K is a point inside $\\triangle LMN$ and is joined to L, M and N. D is a point on KM. A line through D parallel to KL meets ML at E, and a line through D parallel to KN meets MN at F. Show that $EF \\parallel LN$.',
    answer: 'In $\\triangle MKL$, $DE \\parallel KL$, so $\\frac{MD}{DK} = \\frac{ME}{EL}$ (BPT). In $\\triangle MKN$, $DF \\parallel KN$, so $\\frac{MD}{DK} = \\frac{MF}{FN}$. Hence $\\frac{ME}{EL} = \\frac{MF}{FN}$, and in $\\triangle MLN$ the converse of BPT gives $EF \\parallel LN$.',
    steps: [
      { step: 'BPT in $\\triangle MKL$', marks: 1 },
      { step: 'BPT in $\\triangle MKN$', marks: 1 },
      { step: 'Converse of BPT in $\\triangle MLN$', marks: 1 },
    ],
  },
  {
    id: 'nc-06-6-2-q06', chapter: C, topic: 'Basic proportionality theorem', ref: `${R} Ex 6.2 Q6`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'O is a point outside $\\triangle LMN$, and O is joined to L, M and N. Points A, B and C lie on OL, OM and ON respectively, with $AB \\parallel LM$ and $BC \\parallel MN$. Show that $AC \\parallel LN$.',
    answer: 'In $\\triangle OLM$, $AB \\parallel LM$, so $\\frac{OA}{AL} = \\frac{OB}{BM}$. In $\\triangle OMN$, $BC \\parallel MN$, so $\\frac{OB}{BM} = \\frac{OC}{CN}$. Hence $\\frac{OA}{AL} = \\frac{OC}{CN}$, and by the converse of BPT in $\\triangle OLN$, $AC \\parallel LN$.',
    steps: [
      { step: 'BPT in $\\triangle OLM$', marks: 1 },
      { step: 'BPT in $\\triangle OMN$', marks: 1 },
      { step: 'Converse of BPT in $\\triangle OLN$', marks: 1 },
    ],
  },
  {
    id: 'nc-06-6-2-q07', chapter: C, topic: 'Basic proportionality theorem', ref: `${R} Ex 6.2 Q7`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'In $\\triangle ABC$, D is the point on AB with $AD = \\frac{1}{3}AB$. A line through D parallel to BC meets AC at E. Using the Basic Proportionality Theorem, prove that $AE = \\frac{1}{3}AC$.',
    answer: 'Since $AD = \\frac{1}{3}AB$, $DB = \\frac{2}{3}AB$, so $\\frac{AD}{DB} = \\frac{1}{2}$. As $DE \\parallel BC$, BPT gives $\\frac{AE}{EC} = \\frac{AD}{DB} = \\frac{1}{2}$, so $EC = 2AE$ and $AC = AE + EC = 3AE$, i.e. $AE = \\frac{1}{3}AC$.',
    steps: [
      { step: 'Finds $\\frac{AD}{DB} = \\frac{1}{2}$ and applies BPT', marks: 1 },
      { step: 'Concludes $AE = \\frac{1}{3}AC$', marks: 1 },
    ],
  },
  {
    id: 'nc-06-6-2-q08', chapter: C, topic: 'Basic proportionality theorem', ref: `${R} Ex 6.2 Q8`,
    type: 'short', complexity: 'medium', marks: 2,
    text: 'In $\\triangle PQR$, X is the mid-point of PQ and Y is the mid-point of PR. M is the mid-point of PX and N is the mid-point of PY. Using the converse of the Basic Proportionality Theorem, prove that $MN \\parallel QR$.',
    answer: '$PM = \\frac{1}{2}PX = \\frac{1}{4}PQ$, so $MQ = \\frac{3}{4}PQ$ and $\\frac{PM}{MQ} = \\frac{1}{3}$. Similarly $PN = \\frac{1}{4}PR$ and $\\frac{PN}{NR} = \\frac{1}{3}$. Since $\\frac{PM}{MQ} = \\frac{PN}{NR}$, by the converse of BPT $MN \\parallel QR$.',
    steps: [
      { step: 'Shows $\\frac{PM}{MQ} = \\frac{PN}{NR} = \\frac{1}{3}$', marks: 1 },
      { step: 'Applies the converse of BPT', marks: 1 },
    ],
  },
  {
    id: 'nc-06-6-2-q09', chapter: C, topic: 'Basic proportionality theorem', ref: `${R} Ex 6.2 Q9`,
    type: 'long', complexity: 'hard', marks: 4,
    text: 'PQRS is a trapezium with $PQ \\parallel SR$, and its diagonals PR and QS meet at O. (a) Prove that $\\frac{PO}{OR} = \\frac{QO}{OS}$. (b) If $PO = 3x - 1$, $OR = 5x - 3$, $QO = 2x + 1$ and $OS = 6x - 5$, find $x$.',
    answer: '(a) Through O draw a line parallel to PQ meeting PS at E. Then $OE \\parallel SR$ as well. In $\\triangle PSR$, $OE \\parallel SR$, so $\\frac{PE}{ES} = \\frac{PO}{OR}$. In $\\triangle SPQ$, $EO \\parallel PQ$, so $\\frac{SE}{EP} = \\frac{SO}{OQ}$, i.e. $\\frac{PE}{ES} = \\frac{QO}{OS}$. Hence $\\frac{PO}{OR} = \\frac{QO}{OS}$. (b) $\\frac{3x-1}{5x-3} = \\frac{2x+1}{6x-5}$ gives $18x^{2} - 21x + 5 = 10x^{2} - x - 3$, i.e. $8x^{2} - 20x + 8 = 0$, i.e. $2x^{2} - 5x + 2 = 0$, so $x = 2$ or $x = \\frac{1}{2}$. With $x = \\frac{1}{2}$, $OR = -\\frac{1}{2}$, which is impossible. So $x = 2$ (then PO = 5, OR = 7, QO = 5, OS = 7).',
    steps: [
      { step: 'Draws OE parallel to PQ and applies BPT in $\\triangle PSR$', marks: 1 },
      { step: 'Applies BPT in $\\triangle SPQ$ and concludes part (a)', marks: 1 },
      { step: 'Forms and simplifies to $2x^{2} - 5x + 2 = 0$', marks: 1 },
      { step: 'Rejects $x = \\frac{1}{2}$ and gives $x = 2$', marks: 1 },
    ],
  },
  {
    id: 'nc-06-6-2-q10', chapter: C, topic: 'Basic proportionality theorem', ref: `${R} Ex 6.2 Q10`,
    type: 'short', complexity: 'hard', marks: 3,
    text: 'The diagonals WY and XZ of quadrilateral WXYZ meet at O, and $OW \\times OZ = OX \\times OY$. Show that WXYZ is a trapezium with $WX \\parallel ZY$.',
    answer: 'From $OW \\times OZ = OX \\times OY$ we get $\\frac{OW}{OY} = \\frac{OX}{OZ}$. Through O draw OE parallel to ZY, meeting WZ at E. In $\\triangle WZY$, $OE \\parallel ZY$, so $\\frac{WE}{EZ} = \\frac{WO}{OY}$. Then $\\frac{WE}{EZ} = \\frac{XO}{OZ}$, so in $\\triangle ZWX$, E and O divide ZW and ZX in the same ratio ($\\frac{ZE}{EW} = \\frac{ZO}{OX}$), and by the converse of BPT $EO \\parallel WX$. Since EO is parallel to both ZY and WX, $WX \\parallel ZY$, so WXYZ is a trapezium.',
    steps: [
      { step: 'Rewrites the condition as $\\frac{OW}{OY} = \\frac{OX}{OZ}$', marks: 1 },
      { step: 'Draws OE parallel to ZY and applies BPT in $\\triangle WZY$', marks: 1 },
      { step: 'Uses the converse of BPT in $\\triangle ZWX$ to get $WX \\parallel ZY$', marks: 1 },
    ],
  },

  // ---------- Section 6.4 examples ----------
  {
    id: 'nc-06-ex04', chapter: C, topic: 'Similarity criteria', ref: `${R} Example 4`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'Line segments LN and MK cross at O, with L and N on opposite sides of O, and M and K on opposite sides of O. If $LM \\parallel KN$, prove that $\\triangle LOM \\sim \\triangle NOK$.',
    answer: 'Since $LM \\parallel KN$ with transversal LN, $\\angle MLO = \\angle KNO$ (alternate angles). With transversal MK, $\\angle LMO = \\angle NKO$. Also $\\angle LOM = \\angle NOK$ (vertically opposite). So $\\triangle LOM \\sim \\triangle NOK$ by the AAA (or AA) criterion.',
    steps: [
      { step: 'Identifies the alternate and vertically opposite angles', marks: 1 },
      { step: 'Concludes similarity by AA with correct correspondence', marks: 1 },
    ],
  },
  {
    id: 'nc-06-ex05', chapter: C, topic: 'Similarity criteria', ref: `${R} Example 5`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'In $\\triangle ABC$, AB = 3 cm, BC = 6 cm, $CA = 3\\sqrt{3}$ cm, $\\angle A = 90^\\circ$ and $\\angle B = 60^\\circ$. In $\\triangle PQR$, QR = 6 cm, RP = 12 cm and $PQ = 6\\sqrt{3}$ cm. Find $\\angle P$.',
    answer: '$\\frac{AB}{QR} = \\frac{3}{6} = \\frac{1}{2}$, $\\frac{BC}{RP} = \\frac{6}{12} = \\frac{1}{2}$, $\\frac{CA}{PQ} = \\frac{3\\sqrt{3}}{6\\sqrt{3}} = \\frac{1}{2}$. So $\\triangle ABC \\sim \\triangle QRP$ (SSS), with A ↔ Q, B ↔ R, C ↔ P. Hence $\\angle P = \\angle C = 180^\\circ - 90^\\circ - 60^\\circ = 30^\\circ$.',
    steps: [
      { step: 'Shows all three side ratios equal $\\frac{1}{2}$', marks: 1 },
      { step: 'Writes $\\triangle ABC \\sim \\triangle QRP$ with the right correspondence', marks: 1 },
      { step: 'Finds $\\angle P = \\angle C = 30^\\circ$', marks: 1 },
    ],
  },
  {
    id: 'nc-06-ex06', chapter: C, topic: 'Proofs on similar triangles', ref: `${R} Example 6`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'Two straight lines meet at O. P and Q lie on the first line on opposite sides of O, and R and S lie on the second line on opposite sides of O If $OP \\times OQ = OR \\times OS$, (i) show that $\\triangle POR \\sim \\triangle SOQ$ and hence $\\angle OPR = \\angle OSQ$; (ii) if OP = 4 cm, OS = 6 cm and PR = 5 cm, find SQ.',
    answer: '(i) $OP \\times OQ = OR \\times OS$ gives $\\frac{OP}{OS} = \\frac{OR}{OQ}$. Also $\\angle POR = \\angle SOQ$ (vertically opposite). So $\\triangle POR \\sim \\triangle SOQ$ (SAS), with P ↔ S, O ↔ O, R ↔ Q, and therefore $\\angle OPR = \\angle OSQ$. (ii) $\\frac{PR}{SQ} = \\frac{OP}{OS} = \\frac{4}{6}$, so $SQ = \\frac{5 \\times 6}{4} = 7.5$ cm.',
    steps: [
      { step: 'Rewrites the product as a ratio and notes vertically opposite angles', marks: 1 },
      { step: 'Concludes SAS similarity and the angle equality', marks: 1 },
      { step: 'Finds SQ = 7.5 cm', marks: 1 },
    ],
  },
  {
    id: 'nc-06-ex07', chapter: C, topic: 'Applications of similar triangles', ref: `${R} Example 7`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A delivery robot 0.8 m tall rolls in a straight line away from the foot of a floodlight pole at 0.5 m/s. The lamp is 4 m above the ground. Find the length of the robot’s shadow after 8 seconds.',
    answer: 'Distance from the pole after 8 s $= 0.5 \\times 8 = 4$ m. Let the shadow be $x$ m. The pole and the robot are both vertical, and the light ray to the shadow tip makes the same angle with the ground for both, so the two right triangles are similar (AA). Hence $\\frac{4 + x}{x} = \\frac{4}{0.8} = 5$, so $4 + x = 5x$ and $x = 1$. The shadow is 1 m long.',
    steps: [
      { step: 'Finds the distance walked, 4 m', marks: 1 },
      { step: 'Justifies similar triangles and sets up $\\frac{4 + x}{x} = \\frac{4}{0.8}$', marks: 1 },
      { step: 'Solves $x = 1$ m', marks: 1 },
    ],
  },
  {
    id: 'nc-06-ex08', chapter: C, topic: 'Proofs on similar triangles', ref: `${R} Example 8`,
    type: 'long', complexity: 'hard', marks: 4,
    text: '$\\triangle ABC \\sim \\triangle PQR$. AD is the altitude of $\\triangle ABC$ from A (D on BC) and PS is the altitude of $\\triangle PQR$ from P (S on QR). Prove that (i) $\\triangle ABD \\sim \\triangle PQS$, (ii) $\\frac{AD}{PS} = \\frac{AB}{PQ}$, (iii) $\\frac{AD}{PS} = \\frac{BC}{QR}$.',
    answer: '(i) From the similarity, $\\angle B = \\angle Q$. Also $\\angle ADB = \\angle PSQ = 90^\\circ$. So $\\triangle ABD \\sim \\triangle PQS$ (AA). (ii) Corresponding sides of these similar triangles give $\\frac{AD}{PS} = \\frac{AB}{PQ}$. (iii) From $\\triangle ABC \\sim \\triangle PQR$, $\\frac{AB}{PQ} = \\frac{BC}{QR}$. Combining with (ii), $\\frac{AD}{PS} = \\frac{BC}{QR}$.',
    steps: [
      { step: 'Uses $\\angle B = \\angle Q$ and the right angles', marks: 1 },
      { step: 'Concludes $\\triangle ABD \\sim \\triangle PQS$ by AA', marks: 1 },
      { step: 'Writes $\\frac{AD}{PS} = \\frac{AB}{PQ}$', marks: 1 },
      { step: 'Combines with $\\frac{AB}{PQ} = \\frac{BC}{QR}$ for part (iii)', marks: 1 },
    ],
  },

  // ---------- Exercise 6.3 ----------
  {
    id: 'nc-06-6-3-q01', chapter: C, topic: 'Similarity criteria', ref: `${R} Ex 6.3 Q1`,
    type: 'long', complexity: 'medium', marks: 4,
    text: 'For each pair, say whether the triangles are similar. If they are, name the criterion and write the similarity with the correct correspondence. (i) $\\triangle ABC$ with $\\angle A = 50^\\circ$, $\\angle B = 70^\\circ$; $\\triangle DEF$ with $\\angle D = 70^\\circ$, $\\angle E = 60^\\circ$. (ii) $\\triangle LMN$ with LM = 3 cm, MN = 4 cm, NL = 4.8 cm; $\\triangle XYZ$ with XY = 6 cm, YZ = 8 cm, ZX = 10 cm. (iii) $\\triangle PQR$ with PQ = 2.5 cm, QR = 3 cm, RP = 4 cm; $\\triangle STU$ with ST = 9 cm, TU = 12 cm, US = 7.5 cm. (iv) $\\triangle GHK$ with GH = 4 cm, $\\angle H = 65^\\circ$, HK = 6 cm; $\\triangle MNO$ with MN = 9 cm, $\\angle N = 65^\\circ$, NO = 6 cm.',
    answer: '(i) $\\angle C = 60^\\circ$, $\\angle F = 50^\\circ$. So A ↔ F, B ↔ D, C ↔ E: $\\triangle ABC \\sim \\triangle FDE$ (AAA/AA). (ii) $\\frac{3}{6} = \\frac{4}{8} = 0.5$ but $\\frac{4.8}{10} = 0.48$: not similar. (iii) $\\frac{PQ}{US} = \\frac{2.5}{7.5} = \\frac{1}{3}$, $\\frac{QR}{ST} = \\frac{3}{9} = \\frac{1}{3}$, $\\frac{RP}{TU} = \\frac{4}{12} = \\frac{1}{3}$: $\\triangle PQR \\sim \\triangle UST$ (SSS). (iv) $\\angle H = \\angle N$ and $\\frac{GH}{ON} = \\frac{4}{6} = \\frac{2}{3}$, $\\frac{HK}{NM} = \\frac{6}{9} = \\frac{2}{3}$: $\\triangle GHK \\sim \\triangle ONM$ (SAS).',
    steps: [
      { step: 'Part (i): $\\triangle ABC \\sim \\triangle FDE$ by AA', marks: 1 },
      { step: 'Part (ii): not similar, ratios differ', marks: 1 },
      { step: 'Part (iii): $\\triangle PQR \\sim \\triangle UST$ by SSS', marks: 1 },
      { step: 'Part (iv): $\\triangle GHK \\sim \\triangle ONM$ by SAS', marks: 1 },
    ],
  },
  {
    id: 'nc-06-6-3-q02', chapter: C, topic: 'Similarity criteria', ref: `${R} Ex 6.3 Q2`,
    type: 'short', complexity: 'easy', marks: 3,
    text: 'Line segments PR and QS cross at O (P and R on opposite sides of O, Q and S on opposite sides of O), and $\\triangle OPQ \\sim \\triangle ORS$. If $\\angle QOR = 110^\\circ$ and $\\angle OPQ = 40^\\circ$, find $\\angle POQ$, $\\angle OQP$ and $\\angle ORS$.',
    answer: 'P, O, R are collinear, so $\\angle POQ = 180^\\circ - 110^\\circ = 70^\\circ$. In $\\triangle OPQ$, $\\angle OQP = 180^\\circ - 70^\\circ - 40^\\circ = 70^\\circ$. From the similarity (P ↔ R), $\\angle ORS = \\angle OPQ = 40^\\circ$.',
    steps: [
      { step: '$\\angle POQ = 70^\\circ$ (linear pair)', marks: 1 },
      { step: '$\\angle OQP = 70^\\circ$ (angle sum)', marks: 1 },
      { step: '$\\angle ORS = 40^\\circ$ (corresponding angles of similar triangles)', marks: 1 },
    ],
  },
  {
    id: 'nc-06-6-3-q03', chapter: C, topic: 'Proofs on similar triangles', ref: `${R} Ex 6.3 Q3`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'PQRS is a trapezium with $PQ \\parallel SR$ and $PQ = 3\\,SR$. Its diagonals PR and QS meet at O. Using a similarity criterion, prove that $\\triangle OPQ \\sim \\triangle ORS$ and hence show that $OP = 3\\,OR$.',
    answer: 'As $PQ \\parallel SR$, $\\angle OPQ = \\angle ORS$ and $\\angle OQP = \\angle OSR$ (alternate angles), and $\\angle POQ = \\angle ROS$ (vertically opposite). So $\\triangle OPQ \\sim \\triangle ORS$ (AA). Then $\\frac{OP}{OR} = \\frac{PQ}{RS} = 3$, so $OP = 3\\,OR$.',
    steps: [
      { step: 'Names the equal angles', marks: 1 },
      { step: 'Concludes $\\triangle OPQ \\sim \\triangle ORS$ by AA', marks: 1 },
      { step: 'Uses the side ratio to get $OP = 3\\,OR$', marks: 1 },
    ],
  },
  {
    id: 'nc-06-6-3-q04', chapter: C, topic: 'Proofs on similar triangles', ref: `${R} Ex 6.3 Q4`,
    type: 'short', complexity: 'hard', marks: 3,
    text: 'In $\\triangle ABC$, $\\angle ABC = \\angle ACB$. D is a point on BC, and E is a point on BA produced beyond A, such that $\\frac{BE}{BC} = \\frac{AC}{BD}$. Show that $\\triangle ABD \\sim \\triangle EBC$.',
    answer: 'Since $\\angle ABC = \\angle ACB$, $AB = AC$. So $\\frac{BE}{BC} = \\frac{AB}{BD}$, i.e. $AB \\times BC = BD \\times BE$, i.e. $\\frac{AB}{EB} = \\frac{BD}{BC}$. In $\\triangle ABD$ and $\\triangle EBC$, $\\angle ABD = \\angle EBC$ (the same angle at B), and the sides including it are proportional. So $\\triangle ABD \\sim \\triangle EBC$ (SAS), with A ↔ E, B ↔ B, D ↔ C.',
    steps: [
      { step: 'Uses equal angles to get $AB = AC$', marks: 1 },
      { step: 'Rearranges to $\\frac{AB}{EB} = \\frac{BD}{BC}$', marks: 1 },
      { step: 'Uses the common angle at B and SAS', marks: 1 },
    ],
  },
  {
    id: 'nc-06-6-3-q05', chapter: C, topic: 'Similarity criteria', ref: `${R} Ex 6.3 Q5`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'X and Y are points on sides LN and MN of $\\triangle LMN$ such that $\\angle NXY = \\angle M$. (i) Show that $\\triangle NXY \\sim \\triangle NML$. (ii) If NX = 4 cm, NM = 10 cm and NY = 5 cm, find NL.',
    answer: '(i) In $\\triangle NXY$ and $\\triangle NML$, $\\angle NXY = \\angle NML$ (given) and $\\angle N$ is common. So $\\triangle NXY \\sim \\triangle NML$ (AA). (ii) $\\frac{NX}{NM} = \\frac{NY}{NL}$, so $\\frac{4}{10} = \\frac{5}{NL}$ and $NL = 12.5$ cm.',
    steps: [
      { step: 'Uses the given angle and the common angle', marks: 1 },
      { step: 'Concludes AA similarity with correct correspondence', marks: 1 },
      { step: 'Finds NL = 12.5 cm', marks: 1 },
    ],
  },
  {
    id: 'nc-06-6-3-q06', chapter: C, topic: 'Proofs on similar triangles', ref: `${R} Ex 6.3 Q6`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'In $\\triangle PQR$, S lies on PQ and T lies on PR, and segments QT and RS are drawn. If $\\triangle PQT \\cong \\triangle PRS$ (with P ↔ P, Q ↔ R, T ↔ S), show that $\\triangle PST \\sim \\triangle PQR$ and hence that $ST \\parallel QR$.',
    answer: 'From the congruence, $PQ = PR$ and $PT = PS$. So $\\frac{PS}{PQ} = \\frac{PT}{PR}$. With $\\angle P$ common, $\\triangle PST \\sim \\triangle PQR$ (SAS). Hence $\\angle PST = \\angle PQR$; these are corresponding angles for lines ST and QR with transversal PQ, so $ST \\parallel QR$.',
    steps: [
      { step: 'Reads $PQ = PR$, $PS = PT$ from the congruence', marks: 1 },
      { step: 'SAS similarity with the common angle P', marks: 1 },
      { step: 'Equal corresponding angles give $ST \\parallel QR$', marks: 1 },
    ],
  },
  {
    id: 'nc-06-6-3-q07', chapter: C, topic: 'Right-triangle altitude similarity', ref: `${R} Ex 6.3 Q7`,
    type: 'long', complexity: 'medium', marks: 4,
    text: 'In acute $\\triangle XYZ$, the altitude from X meets YZ at L and the altitude from Z meets XY at M. The altitudes XL and ZM meet at H. Show that (i) $\\triangle XMH \\sim \\triangle ZLH$, (ii) $XH \\times HL = ZH \\times HM$, (iii) $\\triangle XYL \\sim \\triangle ZYM$, (iv) $YL \\times YZ = YM \\times YX$.',
    answer: '(i) $\\angle XMH = \\angle ZLH = 90^\\circ$ and $\\angle XHM = \\angle ZHL$ (vertically opposite), so $\\triangle XMH \\sim \\triangle ZLH$ (AA). (ii) Hence $\\frac{XH}{ZH} = \\frac{HM}{HL}$, so $XH \\times HL = ZH \\times HM$. (iii) $\\angle XLY = \\angle ZMY = 90^\\circ$ and $\\angle Y$ is common, so $\\triangle XYL \\sim \\triangle ZYM$ (AA). (iv) Hence $\\frac{XY}{ZY} = \\frac{YL}{YM}$, so $YL \\times YZ = YM \\times YX$.',
    steps: [
      { step: 'Part (i) by AA (right angles, vertically opposite angles)', marks: 1 },
      { step: 'Part (ii) from the side ratios', marks: 1 },
      { step: 'Part (iii) by AA (right angles, common angle Y)', marks: 1 },
      { step: 'Part (iv) from the side ratios', marks: 1 },
    ],
  },
  {
    id: 'nc-06-6-3-q08', chapter: C, topic: 'Proofs on similar triangles', ref: `${R} Ex 6.3 Q8`,
    type: 'long', complexity: 'hard', marks: 4,
    text: 'PQRS is a parallelogram (PQ ∥ SR, QR ∥ PS). X is a point on QR produced beyond R, and PX cuts SR at Y. (i) Show that $\\triangle PQX \\sim \\triangle YSP$. (ii) If PQ = 8 cm, PS = 6 cm and RX = 3 cm, find SY.',
    answer: '(i) $\\angle PQX = \\angle YSP$ (opposite angles of a parallelogram, $\\angle Q = \\angle S$). Since $QX \\parallel PS$ and PX is a transversal, $\\angle QXP = \\angle SPY$ (alternate angles). So $\\triangle PQX \\sim \\triangle YSP$ (AA), with P ↔ Y, Q ↔ S, X ↔ P. (ii) $QX = QR + RX = 6 + 3 = 9$ cm. From the similarity, $\\frac{PQ}{YS} = \\frac{QX}{SP}$, so $\\frac{8}{SY} = \\frac{9}{6}$ and $SY = \\frac{16}{3} \\approx 5.33$ cm.',
    steps: [
      { step: 'Uses equal opposite angles of the parallelogram', marks: 1 },
      { step: 'Uses alternate angles and concludes AA similarity', marks: 1 },
      { step: 'Finds QX = 9 cm and sets up the ratio', marks: 1 },
      { step: 'Finds $SY = \\frac{16}{3}$ cm', marks: 1 },
    ],
  },
  {
    id: 'nc-06-6-3-q09', chapter: C, topic: 'Right-triangle altitude similarity', ref: `${R} Ex 6.3 Q9`,
    type: 'short', complexity: 'medium', marks: 3,
    text: '$\\triangle DEF$ is right-angled at E. G is a point on DE produced beyond E, and from G a perpendicular GH is drawn to line DF (produced if needed), meeting it at H. Prove that (i) $\\triangle DEF \\sim \\triangle DHG$, (ii) $DF \\times DH = DE \\times DG$.',
    answer: '(i) In $\\triangle DEF$ and $\\triangle DHG$, $\\angle DEF = \\angle DHG = 90^\\circ$ and $\\angle D$ is common. So $\\triangle DEF \\sim \\triangle DHG$ (AA), with E ↔ H, F ↔ G. (ii) Hence $\\frac{DE}{DH} = \\frac{DF}{DG}$, so $DF \\times DH = DE \\times DG$.',
    steps: [
      { step: 'Identifies the right angles and common angle D', marks: 1 },
      { step: 'Concludes AA similarity with correct correspondence', marks: 1 },
      { step: 'Derives $DF \\times DH = DE \\times DG$', marks: 1 },
    ],
  },
  {
    id: 'nc-06-6-3-q10', chapter: C, topic: 'Proofs on similar triangles', ref: `${R} Ex 6.3 Q10`,
    type: 'long', complexity: 'hard', marks: 4,
    text: '$\\triangle PQR \\sim \\triangle XYZ$. PS bisects $\\angle QPR$ with S on QR, and XT bisects $\\angle YXZ$ with T on YZ. Show that (i) $\\triangle PQS \\sim \\triangle XYT$, (ii) $\\frac{PS}{XT} = \\frac{PQ}{XY}$, (iii) $\\triangle PSR \\sim \\triangle XTZ$.',
    answer: '(i) From the similarity, $\\angle P = \\angle X$, so $\\angle QPS = \\frac{1}{2}\\angle P = \\frac{1}{2}\\angle X = \\angle YXT$. Also $\\angle Q = \\angle Y$. So $\\triangle PQS \\sim \\triangle XYT$ (AA). (ii) Corresponding sides give $\\frac{PS}{XT} = \\frac{PQ}{XY}$. (iii) $\\angle SPR = \\frac{1}{2}\\angle P = \\angle TXZ$ and $\\angle R = \\angle Z$, so $\\triangle PSR \\sim \\triangle XTZ$ (AA).',
    steps: [
      { step: 'Shows the half-angles at P and X are equal', marks: 1 },
      { step: 'Part (i) by AA', marks: 1 },
      { step: 'Part (ii) from corresponding sides', marks: 1 },
      { step: 'Part (iii) by AA', marks: 1 },
    ],
  },
  {
    id: 'nc-06-6-3-q11', chapter: C, topic: 'Right-triangle altitude similarity', ref: `${R} Ex 6.3 Q11`,
    type: 'short', complexity: 'medium', marks: 3,
    text: '$\\triangle PQR$ is isosceles with PQ = PR. X is a point on QR produced beyond R. PM is perpendicular to QR (M on QR), and XN is perpendicular to line PQ, meeting it at N. Prove that $\\triangle PRM \\sim \\triangle XQN$.',
    answer: 'Since PQ = PR, $\\angle PRQ = \\angle PQR$, i.e. $\\angle PRM = \\angle XQN$ (both are the base angle of the isosceles triangle). Also $\\angle PMR = \\angle XNQ = 90^\\circ$. So $\\triangle PRM \\sim \\triangle XQN$ (AA), with P ↔ X, R ↔ Q, M ↔ N.',
    steps: [
      { step: 'Uses PQ = PR to get equal base angles', marks: 1 },
      { step: 'Notes both triangles have a right angle', marks: 1 },
      { step: 'Concludes AA similarity with correct correspondence', marks: 1 },
    ],
  },
  {
    id: 'nc-06-6-3-q12', chapter: C, topic: 'Proofs on similar triangles', ref: `${R} Ex 6.3 Q12`,
    type: 'long', complexity: 'hard', marks: 4,
    text: 'In $\\triangle LMN$, K is the mid-point of LM; in $\\triangle RST$, U is the mid-point of RS. If $\\frac{LM}{RS} = \\frac{MN}{ST} = \\frac{NK}{TU}$, show that $\\triangle LMN \\sim \\triangle RST$.',
    answer: 'Since K and U are mid-points, $MK = \\frac{1}{2}LM$ and $SU = \\frac{1}{2}RS$, so $\\frac{MK}{SU} = \\frac{LM}{RS}$. Hence $\\frac{MK}{SU} = \\frac{MN}{ST} = \\frac{NK}{TU}$, and $\\triangle MKN \\sim \\triangle SUT$ (SSS). So $\\angle KMN = \\angle UST$, i.e. $\\angle LMN = \\angle RST$. In $\\triangle LMN$ and $\\triangle RST$, this angle is included between sides in the ratio $\\frac{LM}{RS} = \\frac{MN}{ST}$, so $\\triangle LMN \\sim \\triangle RST$ (SAS).',
    steps: [
      { step: 'Shows $\\frac{MK}{SU} = \\frac{LM}{RS}$ using mid-points', marks: 1 },
      { step: 'Gets $\\triangle MKN \\sim \\triangle SUT$ by SSS', marks: 1 },
      { step: 'Deduces $\\angle M = \\angle S$', marks: 1 },
      { step: 'Concludes $\\triangle LMN \\sim \\triangle RST$ by SAS', marks: 1 },
    ],
  },
  {
    id: 'nc-06-6-3-q13', chapter: C, topic: 'Proofs on similar triangles', ref: `${R} Ex 6.3 Q13`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'S is a point on side QR of $\\triangle PQR$ such that $\\angle QPS = \\angle PRQ$. (i) Show that $PQ^{2} = QR \\times QS$. (ii) If QS = 4 cm and SR = 5 cm, find PQ.',
    answer: '(i) In $\\triangle QPS$ and $\\triangle QRP$, $\\angle QPS = \\angle QRP$ and $\\angle Q$ is common, so $\\triangle QPS \\sim \\triangle QRP$ (AA). Hence $\\frac{QP}{QR} = \\frac{QS}{QP}$, so $PQ^{2} = QR \\times QS$. (ii) $QR = 4 + 5 = 9$ cm, so $PQ^{2} = 9 \\times 4 = 36$ and $PQ = 6$ cm.',
    steps: [
      { step: 'Proves $\\triangle QPS \\sim \\triangle QRP$ by AA', marks: 1 },
      { step: 'Derives $PQ^{2} = QR \\times QS$', marks: 1 },
      { step: 'Finds PQ = 6 cm', marks: 1 },
    ],
  },
  {
    id: 'nc-06-6-3-q14', chapter: C, topic: 'Proofs on similar triangles', ref: `${R} Ex 6.3 Q14`,
    type: 'long', complexity: 'hard', marks: 5,
    text: 'In $\\triangle DEF$, P is the mid-point of EF; in $\\triangle KLM$, Q is the mid-point of LM. If $\\frac{DE}{KL} = \\frac{DF}{KM} = \\frac{DP}{KQ}$, prove that $\\triangle DEF \\sim \\triangle KLM$.',
    answer: 'Extend DP to G with PG = DP, and extend KQ to H with QH = KQ. Join GF and HM. In $\\triangle DPE$ and $\\triangle GPF$: DP = GP, EP = FP, and the angles at P are vertically opposite, so the triangles are congruent (SAS) and GF = DE. In the same way HM = KL. Now $\\frac{DE}{KL} = \\frac{DF}{KM} = \\frac{DP}{KQ}$ gives $\\frac{GF}{HM} = \\frac{DF}{KM} = \\frac{2DP}{2KQ} = \\frac{DG}{KH}$. So $\\triangle DFG \\sim \\triangle KMH$ (SSS), and $\\angle FDG = \\angle MKH$, i.e. $\\angle FDP = \\angle MKQ$. Likewise (using $\\triangle DEG$ and $\\triangle KLH$, where EG = DF and LH = KM) $\\angle EDP = \\angle LKQ$. Adding, $\\angle EDF = \\angle LKM$. With $\\frac{DE}{KL} = \\frac{DF}{KM}$, $\\triangle DEF \\sim \\triangle KLM$ (SAS).',
    steps: [
      { step: 'Doubles the medians and proves $GF = DE$, $HM = KL$', marks: 1 },
      { step: 'Shows $\\triangle DFG \\sim \\triangle KMH$ by SSS', marks: 1 },
      { step: 'Gets $\\angle FDP = \\angle MKQ$', marks: 1 },
      { step: 'Gets $\\angle EDP = \\angle LKQ$ and adds to get $\\angle D = \\angle K$', marks: 1 },
      { step: 'Concludes similarity by SAS', marks: 1 },
    ],
  },
  {
    id: 'nc-06-6-3-q15', chapter: C, topic: 'Applications of similar triangles', ref: `${R} Ex 6.3 Q15`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'A 1.8 m tall signboard post casts a shadow 2.4 m long on level ground. At the same moment a building casts a shadow 30 m long. Find the height of the building.',
    answer: 'At the same moment the sun’s rays make the same angle with the ground, and both objects are vertical, so the triangles formed are similar (AA). $\\frac{h}{30} = \\frac{1.8}{2.4}$, so $h = \\frac{1.8 \\times 30}{2.4} = 22.5$ m.',
    steps: [
      { step: 'Justifies similar triangles and sets up the ratio', marks: 1 },
      { step: 'Finds the height 22.5 m', marks: 1 },
    ],
  },
  {
    id: 'nc-06-6-3-q16', chapter: C, topic: 'Proofs on similar triangles', ref: `${R} Ex 6.3 Q16`,
    type: 'short', complexity: 'medium', marks: 3,
    text: '$\\triangle KLM \\sim \\triangle XYZ$. LP is the median from L (P the mid-point of KM) and YQ is the median from Y (Q the mid-point of XZ). (i) Prove that $\\frac{LP}{YQ} = \\frac{KL}{XY}$. (ii) If KL = 6 cm, XY = 9 cm and LP = 5.2 cm, find YQ.',
    answer: '(i) From the similarity, $\\angle K = \\angle X$ and $\\frac{KL}{XY} = \\frac{KM}{XZ} = \\frac{2KP}{2XQ} = \\frac{KP}{XQ}$. So in $\\triangle KLP$ and $\\triangle XYQ$, $\\angle K = \\angle X$ and $\\frac{KL}{XY} = \\frac{KP}{XQ}$, giving $\\triangle KLP \\sim \\triangle XYQ$ (SAS). Hence $\\frac{LP}{YQ} = \\frac{KL}{XY}$. (ii) $YQ = \\frac{5.2 \\times 9}{6} = 7.8$ cm.',
    steps: [
      { step: 'Shows $\\frac{KL}{XY} = \\frac{KP}{XQ}$ using mid-points', marks: 1 },
      { step: 'Proves $\\triangle KLP \\sim \\triangle XYQ$ by SAS and gets the ratio', marks: 1 },
      { step: 'Finds YQ = 7.8 cm', marks: 1 },
    ],
  },
];
