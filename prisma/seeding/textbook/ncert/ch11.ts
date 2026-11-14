import type { TextbookQuestion } from '../types.js';

const C = 'Areas Related to Circles';
const R = 'NCERT Class 10 · Ch 11 Areas Related to Circles · Same skill as';

export const NCERT_CH11: TextbookQuestion[] = [
  {
    id: 'nc-11-ex01', chapter: C, topic: 'Area and perimeter of a sector', ref: `${R} Example 1`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'Find the area of the sector of a circle of radius 6 cm whose angle is $40^{\\circ}$. Also find the area of the corresponding major sector. (Use $\\pi = 3.14$.)',
    answer: 'Minor sector $= \\frac{40}{360} \\times 3.14 \\times 6^{2} = \\frac{1}{9} \\times 113.04 = 12.56 \\text{ cm}^{2}$. Major sector $= \\pi r^{2} - 12.56 = 113.04 - 12.56 = 100.48 \\text{ cm}^{2}$ (or $\\frac{320}{360} \\times 113.04 = 100.48 \\text{ cm}^{2}$).',
    steps: [
      { step: 'Minor sector area $= 12.56 \\text{ cm}^{2}$', marks: 1 },
      { step: 'Major sector area $= 100.48 \\text{ cm}^{2}$', marks: 1 },
    ],
  },
  {
    id: 'nc-11-ex02', chapter: C, topic: 'Segment area', ref: `${R} Example 2`,
    type: 'long', complexity: 'medium', marks: 4,
    text: 'In a circle with centre O and radius 14 cm, chord PQ subtends $\\angle POQ = 120^{\\circ}$ at the centre. Find the area of the minor segment cut off by PQ. (Use $\\pi = \\frac{22}{7}$ and leave $\\sqrt{3}$ in the answer.)',
    answer: 'Sector OPQ $= \\frac{120}{360} \\times \\frac{22}{7} \\times 14 \\times 14 = \\frac{616}{3} \\text{ cm}^{2}$. Draw $OM \\perp PQ$; M is the midpoint of PQ and $\\angle POM = 60^{\\circ}$. $OM = 14\\cos 60^{\\circ} = 7$ cm, $PM = 14\\sin 60^{\\circ} = 7\\sqrt{3}$ cm, so $PQ = 14\\sqrt{3}$ cm. Area of $\\triangle OPQ = \\frac{1}{2} \\times 14\\sqrt{3} \\times 7 = 49\\sqrt{3} \\text{ cm}^{2}$. Segment $= \\frac{616}{3} - 49\\sqrt{3} = \\frac{7}{3}(88 - 21\\sqrt{3}) \\text{ cm}^{2} \\approx 120.46 \\text{ cm}^{2}$.',
    steps: [
      { step: 'Sector area $= \\frac{616}{3} \\text{ cm}^{2}$', marks: 1 },
      { step: 'Finds $OM = 7$ cm and $PQ = 14\\sqrt{3}$ cm', marks: 1 },
      { step: 'Triangle area $= 49\\sqrt{3} \\text{ cm}^{2}$', marks: 1 },
      { step: 'Segment area $= \\frac{616}{3} - 49\\sqrt{3} \\text{ cm}^{2}$', marks: 1 },
    ],
  },
  {
    id: 'nc-11-11-1-q01', chapter: C, topic: 'Area and perimeter of a sector', ref: `${R} Ex 11.1 Q1`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'Find the area of a sector of a circle of radius 7 cm whose angle is $45^{\\circ}$. (Use $\\pi = \\frac{22}{7}$.)',
    answer: 'Area $= \\frac{45}{360} \\times \\frac{22}{7} \\times 7 \\times 7 = \\frac{1}{8} \\times 154 = 19.25 \\text{ cm}^{2}$.',
    steps: [
      { step: 'Uses $\\frac{\\theta}{360} \\times \\pi r^{2}$ with correct values', marks: 1 },
      { step: 'Gets $19.25 \\text{ cm}^{2}$', marks: 1 },
    ],
  },
  {
    id: 'nc-11-11-1-q02', chapter: C, topic: 'Area and perimeter of a sector', ref: `${R} Ex 11.1 Q2`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'The circumference of a circle is 88 cm. Find the area of one quadrant of the circle. (Use $\\pi = \\frac{22}{7}$.)',
    answer: '$2 \\times \\frac{22}{7} \\times r = 88$ gives $r = 14$ cm. Quadrant $= \\frac{1}{4} \\times \\frac{22}{7} \\times 14 \\times 14 = 154 \\text{ cm}^{2}$.',
    steps: [
      { step: 'Finds $r = 14$ cm from the circumference', marks: 1 },
      { step: 'Quadrant area $= 154 \\text{ cm}^{2}$', marks: 1 },
    ],
  },
  {
    id: 'nc-11-11-1-q03', chapter: C, topic: 'Wheel, clock, garden and wiper contexts', ref: `${R} Ex 11.1 Q3`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'A rotating lawn sprinkler throws water up to 21 m and turns at a steady rate, making one full turn every 60 seconds. Find the area of lawn its jet sweeps over in 10 seconds. (Use $\\pi = \\frac{22}{7}$.)',
    answer: 'In 10 s it turns $\\frac{10}{60} \\times 360^{\\circ} = 60^{\\circ}$. Area $= \\frac{60}{360} \\times \\frac{22}{7} \\times 21 \\times 21 = \\frac{1}{6} \\times 1386 = 231 \\text{ m}^{2}$.',
    steps: [
      { step: 'Angle turned in 10 s $= 60^{\\circ}$', marks: 1 },
      { step: 'Sector area $= 231 \\text{ m}^{2}$', marks: 1 },
    ],
  },
  {
    id: 'nc-11-11-1-q04', chapter: C, topic: 'Segment area', ref: `${R} Ex 11.1 Q4`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A chord of a circle of radius 8 cm subtends a right angle at the centre. Find the area of (i) the minor segment, (ii) the major sector. (Use $\\pi = 3.14$.)',
    answer: 'Quadrant (minor sector) $= \\frac{1}{4} \\times 3.14 \\times 64 = 50.24 \\text{ cm}^{2}$. The triangle formed by the two radii is right-angled: area $= \\frac{1}{2} \\times 8 \\times 8 = 32 \\text{ cm}^{2}$. (i) Minor segment $= 50.24 - 32 = 18.24 \\text{ cm}^{2}$. (ii) Major sector $= \\frac{270}{360} \\times 3.14 \\times 64 = 150.72 \\text{ cm}^{2}$.',
    steps: [
      { step: 'Minor sector $= 50.24 \\text{ cm}^{2}$ and triangle $= 32 \\text{ cm}^{2}$', marks: 1 },
      { step: 'Minor segment $= 18.24 \\text{ cm}^{2}$', marks: 1 },
      { step: 'Major sector $= 150.72 \\text{ cm}^{2}$', marks: 1 },
    ],
  },
  {
    id: 'nc-11-11-1-q05', chapter: C, topic: 'Arc length', ref: `${R} Ex 11.1 Q5`,
    type: 'long', complexity: 'medium', marks: 4,
    text: 'A pendulum 28 cm long swings through an angle of $60^{\\circ}$ from one end of its swing to the other. Find (i) the distance the bob travels along its arc in one swing, (ii) the area swept out by the string, (iii) the area of the region between the arc and the straight line joining the two ends of the swing. (Use $\\pi = \\frac{22}{7}$ and leave $\\sqrt{3}$ in (iii).)',
    answer: '(i) Arc $= \\frac{60}{360} \\times 2 \\times \\frac{22}{7} \\times 28 = \\frac{88}{3} \\approx 29.33$ cm. (ii) Sector $= \\frac{60}{360} \\times \\frac{22}{7} \\times 28^{2} = \\frac{1232}{3} \\approx 410.67 \\text{ cm}^{2}$. (iii) The two string positions and the chord form an equilateral triangle of side 28 cm, area $\\frac{\\sqrt{3}}{4} \\times 28^{2} = 196\\sqrt{3} \\text{ cm}^{2}$. Region $= \\left(\\frac{1232}{3} - 196\\sqrt{3}\\right) \\text{ cm}^{2} \\approx 71.2 \\text{ cm}^{2}$.',
    steps: [
      { step: 'Arc length $= \frac{88}{3}$ cm', marks: 1 },
      { step: 'Sector area $= \frac{1232}{3} \text{ cm}^{2}$', marks: 1 },
      { step: 'Equilateral triangle, area $196\sqrt{3} \text{ cm}^{2}$', marks: 1 },
      { step: 'Segment $= \frac{1232}{3} - 196\sqrt{3} \text{ cm}^{2}$', marks: 1 },
    ],
  },
  {
    id: 'nc-11-11-1-q06', chapter: C, topic: 'Segment area', ref: `${R} Ex 11.1 Q6`,
    type: 'long', complexity: 'medium', marks: 4,
    text: 'A straight cut across a round cake of radius 30 cm makes an angle of $60^{\\circ}$ at the centre. Find the area of the smaller piece cut off (the minor segment) and of the rest of the cake (the major segment). (Use $\\pi = 3.14$ and $\\sqrt{3} = 1.73$.)',
    answer: 'Minor sector $= \\frac{60}{360} \\times 3.14 \\times 900 = 471 \\text{ cm}^{2}$. The triangle is equilateral (side 30 cm): area $= \\frac{1.73}{4} \\times 900 = 389.25 \\text{ cm}^{2}$. Minor segment $= 471 - 389.25 = 81.75 \\text{ cm}^{2}$. Circle $= 3.14 \\times 900 = 2826 \\text{ cm}^{2}$, so major segment $= 2826 - 81.75 = 2744.25 \\text{ cm}^{2}$.',
    steps: [
      { step: 'Sector area $= 471 \\text{ cm}^{2}$', marks: 1 },
      { step: 'Triangle area $= 389.25 \\text{ cm}^{2}$', marks: 1 },
      { step: 'Minor segment $= 81.75 \\text{ cm}^{2}$', marks: 1 },
      { step: 'Major segment $= 2744.25 \\text{ cm}^{2}$', marks: 1 },
    ],
  },
  {
    id: 'nc-11-11-1-q07', chapter: C, topic: 'Segment area', ref: `${R} Ex 11.1 Q7`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A chord of a circle of radius 18 cm subtends an angle of $120^{\\circ}$ at the centre. Find the area of the corresponding minor segment. (Use $\\pi = 3.14$ and $\\sqrt{3} = 1.73$.)',
    answer: 'Sector $= \\frac{120}{360} \\times 3.14 \\times 324 = 339.12 \\text{ cm}^{2}$. Triangle $= \\frac{1}{2} r^{2} \\sin 120^{\\circ}$; with the perpendicular from O, height $= 18\\cos 60^{\\circ} = 9$ cm and chord $= 2 \\times 18 \\sin 60^{\\circ} = 18\\sqrt{3}$ cm, so area $= \\frac{1}{2} \\times 18\\sqrt{3} \\times 9 = 81\\sqrt{3} = 81 \\times 1.73 = 140.13 \\text{ cm}^{2}$. Segment $= 339.12 - 140.13 = 198.99 \\text{ cm}^{2}$.',
    steps: [
      { step: 'Sector area $= 339.12 \\text{ cm}^{2}$', marks: 1 },
      { step: 'Triangle area $= 81\\sqrt{3} = 140.13 \\text{ cm}^{2}$', marks: 1 },
      { step: 'Segment $= 198.99 \\text{ cm}^{2}$', marks: 1 },
    ],
  },
  {
    id: 'nc-11-11-1-q08', chapter: C, topic: 'Wheel, clock, garden and wiper contexts', ref: `${R} Ex 11.1 Q8`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A motion-sensor lamp is fixed at one corner of a square courtyard of side 20 m. It detects movement anywhere inside the courtyard within 6 m of the lamp. Find (i) the area of the courtyard the sensor covers, (ii) the increase in covered area if a better sensor with a 9 m range is fitted instead. (Use $\\pi = 3.14$.)',
    answer: 'The corner angle is $90^{\\circ}$, so the covered region is a quadrant (the ranges are less than 20 m, so it stays inside the courtyard). (i) $\\frac{1}{4} \\times 3.14 \\times 6^{2} = 28.26 \\text{ m}^{2}$. (ii) With 9 m: $\\frac{1}{4} \\times 3.14 \\times 81 = 63.585 \\text{ m}^{2}$; increase $= 63.585 - 28.26 = 35.325 \\text{ m}^{2}$.',
    steps: [
      { step: 'Recognises the covered region is a quadrant', marks: 1 },
      { step: 'Area with 6 m range $= 28.26 \\text{ m}^{2}$', marks: 1 },
      { step: 'Increase $= 35.325 \\text{ m}^{2}$', marks: 1 },
    ],
  },
  {
    id: 'nc-11-11-1-q09', chapter: C, topic: 'Area and perimeter of a sector', ref: `${R} Ex 11.1 Q9`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A decorative wheel is made from brass rod: a circle of diameter 28 cm, with 4 diameters of the same rod dividing it into 8 equal sectors. Find (i) the total length of brass rod used, (ii) the area of each sector. (Use $\\pi = \\frac{22}{7}$.)',
    answer: '(i) Circumference $= \\frac{22}{7} \\times 28 = 88$ cm; 4 diameters $= 4 \\times 28 = 112$ cm; total $= 200$ cm. (ii) Each sector has angle $45^{\\circ}$: area $= \\frac{1}{8} \\times \\frac{22}{7} \\times 14 \\times 14 = 77 \\text{ cm}^{2}$.',
    steps: [
      { step: 'Circumference 88 cm plus diameters 112 cm', marks: 1 },
      { step: 'Total rod $= 200$ cm', marks: 1 },
      { step: 'Each sector $= 77 \\text{ cm}^{2}$', marks: 1 },
    ],
  },
  {
    id: 'nc-11-11-1-q10', chapter: C, topic: 'Area and perimeter of a sector', ref: `${R} Ex 11.1 Q10`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'A round pizza of radius 21 cm is cut into 12 equal slices by cuts through its centre. Find the area of the top of one slice. (Use $\\pi = \\frac{22}{7}$.)',
    answer: 'Each slice is a sector of angle $\\frac{360^{\\circ}}{12} = 30^{\\circ}$. Area $= \\frac{30}{360} \\times \\frac{22}{7} \\times 21 \\times 21 = \\frac{1386}{12} = 115.5 \\text{ cm}^{2}$.',
    steps: [
      { step: 'Sector angle $= 30^{\\circ}$', marks: 1 },
      { step: 'Area $= 115.5 \\text{ cm}^{2}$', marks: 1 },
    ],
  },
  {
    id: 'nc-11-11-1-q11', chapter: C, topic: 'Wheel, clock, garden and wiper contexts', ref: `${R} Ex 11.1 Q11`,
    type: 'short', complexity: 'medium', marks: 2,
    text: 'Two sprinklers on a sports field water regions that do not overlap. Each throws water to a distance of 14 m and swings through an angle of $135^{\\circ}$. Find the total area watered in one swing of both sprinklers. (Use $\\pi = \\frac{22}{7}$.)',
    answer: 'One sprinkler: $\\frac{135}{360} \\times \\frac{22}{7} \\times 14 \\times 14 = \\frac{3}{8} \\times 616 = 231 \\text{ m}^{2}$. Two sprinklers: $2 \\times 231 = 462 \\text{ m}^{2}$.',
    steps: [
      { step: 'One sector $= 231 \\text{ m}^{2}$', marks: 1 },
      { step: 'Total $= 462 \\text{ m}^{2}$', marks: 1 },
    ],
  },
  {
    id: 'nc-11-11-1-q12', chapter: C, topic: 'Area and perimeter of a sector', ref: `${R} Ex 11.1 Q12`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'A floodlight at the edge of a stadium lights up a sector-shaped region of angle $72^{\\circ}$ up to a distance of 50 m. Find the area of the ground it lights. (Use $\\pi = 3.14$.)',
    answer: 'Area $= \\frac{72}{360} \\times 3.14 \\times 50^{2} = \\frac{1}{5} \\times 7850 = 1570 \\text{ m}^{2}$.',
    steps: [
      { step: 'Uses $\\frac{72}{360} \\times \\pi r^{2}$ with $r = 50$', marks: 1 },
      { step: 'Area $= 1570 \\text{ m}^{2}$', marks: 1 },
    ],
  },
  {
    id: 'nc-11-11-1-q13', chapter: C, topic: 'Combination figures (shaded regions)', ref: `${R} Ex 11.1 Q13`,
    type: 'long', complexity: 'hard', marks: 4,
    text: 'A circular window of radius 42 cm has a regular hexagon-shaped frame fitted inside it, with all six corners of the hexagon on the circle. The six segment-shaped spaces between the hexagon’s sides and the circle are filled with coloured glass costing ₹0.50 per $\\text{cm}^{2}$. Find the cost of the coloured glass. (Use $\\pi = \\frac{22}{7}$ and $\\sqrt{3} = 1.7$.)',
    answer: 'Circle $= \\frac{22}{7} \\times 42 \\times 42 = 5544 \\text{ cm}^{2}$. A regular hexagon inscribed in the circle is made of 6 equilateral triangles of side 42 cm: area $= 6 \\times \\frac{\\sqrt{3}}{4} \\times 42^{2} = 6 \\times 0.425 \\times 1764 = 4498.2 \\text{ cm}^{2}$. Glass area $= 5544 - 4498.2 = 1045.8 \\text{ cm}^{2}$. Cost $= 1045.8 \\times 0.50 = ₹522.90$.',
    steps: [
      { step: 'Circle area $= 5544 \\text{ cm}^{2}$', marks: 1 },
      { step: 'Hexagon as 6 equilateral triangles, area $= 4498.2 \\text{ cm}^{2}$', marks: 1 },
      { step: 'Glass area $= 1045.8 \\text{ cm}^{2}$', marks: 1 },
      { step: 'Cost $= ₹522.90$', marks: 1 },
    ],
  },
  {
    id: 'nc-11-11-1-q14', chapter: C, topic: 'Area and perimeter of a sector', ref: `${R} Ex 11.1 Q14`,
    type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The area of a sector of angle $\\theta$ (in degrees) of a circle of diameter $d$ is (keep $\\pi$ as it is)',
    options: ['$\\frac{\\theta}{1440} \\pi d^{2}$', '$\\frac{\\theta}{360} \\pi d^{2}$', '$\\frac{\\theta}{360} \\pi d$', '$\\frac{\\theta}{720} \\pi d^{2}$'],
    answer: 'Correct option: A) $\\frac{\\theta}{1440} \\pi d^{2}$. With $r = \\frac{d}{2}$, area $= \\frac{\\theta}{360} \\pi \\frac{d^{2}}{4} = \\frac{\\theta}{1440} \\pi d^{2}$. Option B uses $d$ as the radius; option C is the arc length; option D uses $\\frac{d^{2}}{2}$ in place of $\\frac{d^{2}}{4}$.',
  },
];
