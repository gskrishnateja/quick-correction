import type { TextbookQuestion } from './types.js';

const CH11 = 'NCERT Class 10 · Ch 11 Areas Related to Circles';
const C = 'Areas Related to Circles';

export const AREAS_CIRCLES: TextbookQuestion[] = [
  // Arc length
  {
    id: 'tb-ar-01', chapter: C, topic: 'Arc length', ref: `${CH11} · Length of an arc`,
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'An arc of a circle of radius 21 cm subtends an angle of $60^{\\circ}$ at the centre. Its length is (use $\\pi = \\frac{22}{7}$)',
    options: ['$11$ cm', '$22$ cm', '$44$ cm', '$231$ cm'],
    answer: 'Correct option: B) $22$ cm. Arc length $= \\frac{60}{360} \\times 2 \\times \\frac{22}{7} \\times 21 = \\frac{1}{6} \\times 132 = 22$ cm. Option D is the area of the sector in $\\text{cm}^{2}$.',
  },
  {
    id: 'tb-ar-02', chapter: C, topic: 'Arc length', ref: `${CH11} · Length of an arc`,
    type: 'short', complexity: 'medium', marks: 2,
    text: 'An arc of length 44 cm subtends an angle of $120^{\\circ}$ at the centre of a circle. Find the radius of the circle. (Use $\\pi = \\frac{22}{7}$.)',
    answer: '$\\frac{120}{360} \\times 2 \\times \\frac{22}{7} \\times r = 44$, so $\\frac{44}{21}r = 44$ and $r = 21$ cm.',
    steps: [{ step: 'Sets up $\\frac{120}{360} \\times 2\\pi r = 44$', marks: 1 }, { step: 'Finds $r = 21$ cm', marks: 1 }],
  },

  // Area and perimeter of a sector
  {
    id: 'tb-ar-03', chapter: C, topic: 'Area and perimeter of a sector', ref: `${CH11} · Perimeter of a sector`,
    type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The perimeter of a quadrant (a sector of angle $90^{\\circ}$) of a circle of radius 14 cm is (use $\\pi = \\frac{22}{7}$)',
    options: ['$22$ cm', '$50$ cm', '$36$ cm', '$64$ cm'],
    answer: 'Correct option: B) $50$ cm. Arc $= \\frac{1}{4} \\times 2 \\times \\frac{22}{7} \\times 14 = 22$ cm; perimeter $=$ arc $+$ two radii $= 22 + 28 = 50$ cm. Option A counts only the arc.',
  },
  {
    id: 'tb-ar-04', chapter: C, topic: 'Area and perimeter of a sector', ref: `${CH11} · Area of a sector`,
    type: 'mcq', complexity: 'hard', marks: 1,
    text: 'A sector of a circle of radius 10 cm has an arc of length $5\\pi$ cm. The area of the sector is',
    options: ['$25\\pi \\text{ cm}^{2}$', '$50\\pi \\text{ cm}^{2}$', '$10\\pi \\text{ cm}^{2}$', '$12.5\\pi \\text{ cm}^{2}$'],
    answer: 'Correct option: A) $25\\pi \\text{ cm}^{2}$. The full circumference is $20\\pi$, so the sector is $\\frac{5\\pi}{20\\pi} = \\frac{1}{4}$ of the circle. Area $= \\frac{1}{4} \\times \\pi \\times 10^{2} = 25\\pi \\text{ cm}^{2}$ (equivalently $\\frac{1}{2} \\times$ arc $\\times$ radius).',
  },

  // Wheel, clock, garden and wiper contexts
  {
    id: 'tb-ar-05', chapter: C, topic: 'Wheel, clock, garden and wiper contexts', ref: `${CH11} · Area of a sector`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'A lawn sprinkler fixed at one point turns back and forth through an angle of $150^{\\circ}$, and its spray reaches 12 m. Find the area of lawn it waters. (Use $\\pi = 3.14$.)',
    answer: 'The watered region is a sector of radius 12 m and angle $150^{\\circ}$. Area $= \\frac{150}{360} \\times 3.14 \\times 12^{2} = \\frac{5}{12} \\times 452.16 = 188.4 \\text{ m}^{2}$.',
    steps: [{ step: 'Identifies a sector of radius 12 m and angle $150^{\\circ}$', marks: 1 }, { step: 'Gets $188.4 \\text{ m}^{2}$', marks: 1 }],
  },
  {
    id: 'tb-ar-06', chapter: C, topic: 'Wheel, clock, garden and wiper contexts', ref: `${CH11} · Length of an arc`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'The hour hand of a wall clock is 7 cm long. Between 1 p.m. and 4 p.m. on the same afternoon, find (i) the distance travelled by the tip of the hour hand and (ii) the area swept by the hour hand. (Use $\\pi = \\frac{22}{7}$.)',
    answer: 'The hour hand turns $30^{\\circ}$ each hour, so in 3 hours it turns $90^{\\circ}$. (i) Distance $= \\frac{90}{360} \\times 2 \\times \\frac{22}{7} \\times 7 = 11$ cm. (ii) Area $= \\frac{90}{360} \\times \\frac{22}{7} \\times 7^{2} = 38.5 \\text{ cm}^{2}$.',
    steps: [{ step: 'Finds the angle turned as $90^{\\circ}$', marks: 1 }, { step: 'Finds the arc length 11 cm', marks: 1 }, { step: 'Finds the area $38.5 \\text{ cm}^{2}$', marks: 1 }],
  },

  // Segment area
  {
    id: 'tb-ar-07', chapter: C, topic: 'Segment area', ref: `${CH11} · Area of a segment`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A chord of a circle of radius 18 cm subtends an angle of $60^{\\circ}$ at the centre. Find the area of the minor segment cut off by the chord. (Use $\\pi = 3.14$ and $\\sqrt{3} \\approx 1.73$.)',
    answer: 'Area of sector $= \\frac{60}{360} \\times 3.14 \\times 18^{2} = \\frac{1}{6} \\times 1017.36 = 169.56 \\text{ cm}^{2}$. The triangle formed by the two radii and the chord is equilateral with side 18 cm, so its area $= \\frac{\\sqrt{3}}{4} \\times 18^{2} = 81\\sqrt{3} \\approx 140.13 \\text{ cm}^{2}$. Minor segment $= 169.56 - 140.13 = 29.43 \\text{ cm}^{2}$.',
    steps: [{ step: 'Finds the sector area $169.56 \\text{ cm}^{2}$', marks: 1 }, { step: 'Finds the triangle area $81\\sqrt{3} \\approx 140.13 \\text{ cm}^{2}$', marks: 1 }, { step: 'Subtracts to get $29.43 \\text{ cm}^{2}$', marks: 1 }],
  },
  {
    id: 'tb-ar-08', chapter: C, topic: 'Segment area', ref: `${CH11} · Area of a segment`,
    type: 'long', complexity: 'medium', marks: 4,
    text: 'A chord $AB$ of a circle with centre $O$ and radius 14 cm subtends a right angle at $O$. Find (i) the length of the minor arc $AB$, (ii) the area of the minor segment, and (iii) the area of the major segment. (Use $\\pi = \\frac{22}{7}$.)',
    answer: '(i) Minor arc $= \\frac{90}{360} \\times 2 \\times \\frac{22}{7} \\times 14 = 22$ cm.\n(ii) Sector $OAB = \\frac{1}{4} \\times \\frac{22}{7} \\times 14^{2} = 154 \\text{ cm}^{2}$. Triangle $OAB = \\frac{1}{2} \\times 14 \\times 14 = 98 \\text{ cm}^{2}$. Minor segment $= 154 - 98 = 56 \\text{ cm}^{2}$.\n(iii) Area of circle $= \\frac{22}{7} \\times 196 = 616 \\text{ cm}^{2}$. Major segment $= 616 - 56 = 560 \\text{ cm}^{2}$.',
    steps: [
      { step: 'Finds the minor arc 22 cm', marks: 1 },
      { step: 'Finds the sector area $154 \\text{ cm}^{2}$ and the triangle area $98 \\text{ cm}^{2}$', marks: 1 },
      { step: 'Gets the minor segment $56 \\text{ cm}^{2}$', marks: 1 },
      { step: 'Gets the major segment $560 \\text{ cm}^{2}$', marks: 1 },
    ],
  },

  // Combination figures (shaded regions)
  {
    id: 'tb-ar-09', chapter: C, topic: 'Combination figures (shaded regions)', ref: `${CH11} · Areas of combinations of plane figures`,
    type: 'short', complexity: 'hard', marks: 3,
    text: '$ABCD$ is a rectangular sheet with $AB = 21$ cm and $BC = 14$ cm. A semicircle with $BC$ as diameter is cut out of the sheet (the semicircle lies inside the rectangle). A quadrant of radius 7 cm with centre $A$ is also cut out from the corner at $A$. Find the area of the sheet that remains. (Use $\\pi = \\frac{22}{7}$.)',
    answer: 'Rectangle $= 21 \\times 14 = 294 \\text{ cm}^{2}$. Semicircle (radius 7 cm) $= \\frac{1}{2} \\times \\frac{22}{7} \\times 49 = 77 \\text{ cm}^{2}$. Quadrant (radius 7 cm) $= \\frac{1}{4} \\times \\frac{22}{7} \\times 49 = 38.5 \\text{ cm}^{2}$. The two cut-outs do not overlap (the semicircle reaches only 7 cm in from $BC$, the quadrant only 7 cm from $A$, and $AB = 21$ cm). Remaining area $= 294 - 77 - 38.5 = 178.5 \\text{ cm}^{2}$.',
    steps: [{ step: 'Finds the rectangle area $294 \\text{ cm}^{2}$', marks: 1 }, { step: 'Finds the semicircle $77 \\text{ cm}^{2}$ and the quadrant $38.5 \\text{ cm}^{2}$', marks: 1 }, { step: 'Gets $178.5 \\text{ cm}^{2}$', marks: 1 }],
  },
  {
    id: 'tb-ar-10', chapter: C, topic: 'Combination figures (shaded regions)', ref: `${CH11} · Areas of combinations of plane figures`,
    type: 'long', complexity: 'hard', marks: 5,
    text: 'A school sports field is made of a rectangle 70 m long and 42 m wide, with a semicircle on each of its two 42 m sides (so each semicircle has diameter 42 m and the field has two straight edges of 70 m). A running track 7 m wide is laid all around the outside of the field. Find (i) the area of the field, (ii) the area enclosed by the outer edge of the track, (iii) the area of the track, and (iv) the length of the inner edge of the track. (Use $\\pi = \\frac{22}{7}$.)',
    answer: '(i) Field $=$ rectangle $+$ two semicircles of radius 21 m $= 70 \\times 42 + \\frac{22}{7} \\times 21^{2} = 2940 + 1386 = 4326 \\text{ m}^{2}$.\n(ii) The outer edge encloses a rectangle $70 \\times 56$ m and two semicircles of radius $21 + 7 = 28$ m: $3920 + \\frac{22}{7} \\times 28^{2} = 3920 + 2464 = 6384 \\text{ m}^{2}$.\n(iii) Track $= 6384 - 4326 = 2058 \\text{ m}^{2}$.\n(iv) Inner edge $= 2 \\times 70 + 2 \\times \\frac{22}{7} \\times 21 = 140 + 132 = 272$ m.',
    steps: [
      { step: 'Finds the field area $4326 \\text{ m}^{2}$', marks: 1 },
      { step: 'Uses outer radius 28 m and outer width 56 m', marks: 1 },
      { step: 'Finds the outer area $6384 \\text{ m}^{2}$', marks: 1 },
      { step: 'Gets the track area $2058 \\text{ m}^{2}$', marks: 1 },
      { step: 'Gets the inner edge 272 m', marks: 1 },
    ],
  },
];
