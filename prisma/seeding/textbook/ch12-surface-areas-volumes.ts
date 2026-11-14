import type { TextbookQuestion } from './types.js';

const CH = 'NCERT Class 10 · Ch 12 Surface Areas and Volumes';
const C = 'Surface Areas and Volumes';

export const SURFACE_AREAS_VOLUMES: TextbookQuestion[] = [
  {
    id: 'tb-sv-01', chapter: C, topic: 'Volume of single solids', ref: `${CH} · Volume of a hemisphere`,
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A solid hemisphere has radius 3 cm. Its volume, in terms of $\\pi$, is',
    options: ['$9\\pi \\text{ cm}^{3}$', '$18\\pi \\text{ cm}^{3}$', '$27\\pi \\text{ cm}^{3}$', '$36\\pi \\text{ cm}^{3}$'],
    answer: 'Correct option: B) $18\\pi \\text{ cm}^{3}$. Volume $= \\frac{2}{3}\\pi r^{3} = \\frac{2}{3}\\pi \\times 27 = 18\\pi$. Option D, $36\\pi$, is the volume of the full sphere.',
  },
  {
    id: 'tb-sv-02', chapter: C, topic: 'Surface area of solids', ref: `${CH} · Surface area of combined solids`,
    type: 'mcq', complexity: 'medium', marks: 1,
    text: 'Two identical cubes, each of edge 4 cm, are glued face to face to form a cuboid. The total surface area of the cuboid is',
    options: ['$192 \\text{ cm}^{2}$', '$176 \\text{ cm}^{2}$', '$160 \\text{ cm}^{2}$', '$128 \\text{ cm}^{2}$'],
    answer: 'Correct option: C) $160 \\text{ cm}^{2}$. The cuboid is $8 \\times 4 \\times 4$, so its surface area is $2(32 + 32 + 16) = 160$. Option A, 192, adds both cubes but forgets that the two glued faces ($2 \\times 16 = 32 \\text{ cm}^{2}$) are hidden.',
  },
  {
    id: 'tb-sv-03', chapter: C, topic: 'Carved and inscribed solids', ref: `${CH} · Solids inside other solids`,
    type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The largest possible sphere is cut from a solid cube of edge 6 cm. The volume of the sphere is',
    options: ['$36\\pi \\text{ cm}^{3}$', '$72\\pi \\text{ cm}^{3}$', '$108\\pi \\text{ cm}^{3}$', '$288\\pi \\text{ cm}^{3}$'],
    answer: 'Correct option: A) $36\\pi \\text{ cm}^{3}$. The sphere’s diameter equals the edge, so $r = 3$ cm and volume $= \\frac{4}{3}\\pi (3)^{3} = 36\\pi$. Option D uses $r = 6$, the edge itself, instead of half of it.',
  },
  {
    id: 'tb-sv-04', chapter: C, topic: 'Surface area of solids', ref: `${CH} · Surface area of combined solids`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A wooden spinning top is shaped as a cone standing on a hemisphere of the same radius, 5 cm. The total height of the top is 17 cm. Find the total surface area of the top. (Use $\\pi = 3.14$.)',
    answer: 'Height of cone $= 17 - 5 = 12$ cm. Slant height $l = \\sqrt{5^{2} + 12^{2}} = 13$ cm. Curved surface of cone $= \\pi r l = 65\\pi$; curved surface of hemisphere $= 2\\pi r^{2} = 50\\pi$. Total $= 115\\pi = 115 \\times 3.14 = 361.1 \\text{ cm}^{2}$.',
    steps: [
      { step: 'Finds cone height 12 cm and slant height 13 cm', marks: 1 },
      { step: 'Writes curved surfaces $65\\pi$ and $50\\pi$ (no base areas)', marks: 1 },
      { step: 'Gets total $361.1 \\text{ cm}^{2}$', marks: 1 },
    ],
  },
  {
    id: 'tb-sv-05', chapter: C, topic: 'Volume of combined solids', ref: `${CH} · Volume of combined solids`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'A grain store is a cylinder of radius 3 m and height 7 m, topped by a hemispherical dome of the same radius. Find the volume of the store. (Use $\\pi = 3.14$.)',
    answer: 'Cylinder: $\\pi r^{2} h = \\pi \\times 9 \\times 7 = 63\\pi$. Dome: $\\frac{2}{3}\\pi r^{3} = \\frac{2}{3}\\pi \\times 27 = 18\\pi$. Total $= 81\\pi = 81 \\times 3.14 = 254.34 \\text{ m}^{3}$.',
    steps: [
      { step: 'Finds volumes $63\\pi$ and $18\\pi$', marks: 1 },
      { step: 'Adds to get $254.34 \\text{ m}^{3}$', marks: 1 },
    ],
  },
  {
    id: 'tb-sv-06', chapter: C, topic: 'Carved and inscribed solids', ref: `${CH} · Surface area of combined solids`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A solid cylindrical block has radius 6 cm and height 8 cm. A cone of the same radius and height is hollowed out from one end. Find the total surface area of the remaining solid. (Use $\\pi = 3.14$.)',
    answer: 'Slant height of cone $= \\sqrt{6^{2} + 8^{2}} = 10$ cm. Remaining surface = curved surface of cylinder + one flat base + inner curved surface of cone $= 2\\pi(6)(8) + \\pi(6)^{2} + \\pi(6)(10) = 96\\pi + 36\\pi + 60\\pi = 192\\pi = 602.88 \\text{ cm}^{2}$.',
    steps: [
      { step: 'Finds slant height 10 cm', marks: 1 },
      { step: 'Identifies the three surfaces: cylinder curved surface, one base, cone curved surface', marks: 1 },
      { step: 'Gets $192\\pi = 602.88 \\text{ cm}^{2}$', marks: 1 },
    ],
  },
  {
    id: 'tb-sv-07', chapter: C, topic: 'Capacity and cost problems', ref: `${CH} · Surface area of combined solids`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A decorative pillar is a cylinder of radius 0.7 m and height 4 m with a hemispherical cap of the same radius on top. Its curved surface (not the bottom) is to be polished at ₹50 per $\\text{m}^{2}$. Find the cost. (Use $\\pi = \\frac{22}{7}$.)',
    answer: 'Area $= 2\\pi r h + 2\\pi r^{2} = 2\\pi(0.7)(4) + 2\\pi(0.49) = 2\\pi(3.29) = 6.58 \\times \\frac{22}{7} = 20.68 \\text{ m}^{2}$. Cost $= 20.68 \\times 50 = ₹1034$.',
    steps: [
      { step: 'Writes area as cylinder curved surface + hemisphere curved surface', marks: 1 },
      { step: 'Gets $20.68 \\text{ m}^{2}$', marks: 1 },
      { step: 'Gets cost ₹1034', marks: 1 },
    ],
  },
  {
    id: 'tb-sv-08', chapter: C, topic: 'Volume of combined solids', ref: `${CH} · Volume of combined solids`,
    type: 'short', complexity: 'hard', marks: 3,
    text: 'A cone of radius 3 cm is filled with ice cream, and a hemisphere of ice cream of the same radius sits on top. The total volume of ice cream is $48\\pi \\text{ cm}^{3}$. Find the height of the cone.',
    answer: 'Hemisphere: $\\frac{2}{3}\\pi (27) = 18\\pi$. Cone: $\\frac{1}{3}\\pi (9) h = 3\\pi h$. So $3\\pi h + 18\\pi = 48\\pi$, giving $h = 10$ cm.',
    steps: [
      { step: 'Finds hemisphere volume $18\\pi$', marks: 1 },
      { step: 'Writes $3\\pi h + 18\\pi = 48\\pi$', marks: 1 },
      { step: 'Gets $h = 10$ cm', marks: 1 },
    ],
  },
  {
    id: 'tb-sv-09', chapter: C, topic: 'Volume of combined solids', ref: `${CH} · Volume and surface area of combined solids`,
    type: 'long', complexity: 'hard', marks: 5,
    text: 'A solid toy is made of a cylinder of radius 6 cm and height 10 cm, with a cone of height 8 cm attached to one end and a hemisphere attached to the other end, both of radius 6 cm. Find (i) the total surface area and (ii) the volume of the toy. (Use $\\pi = 3.14$.)',
    answer: '(i) Slant height of cone $= \\sqrt{36 + 64} = 10$ cm. Surface area $= 2\\pi(6)(10) + \\pi(6)(10) + 2\\pi(6)^{2} = 120\\pi + 60\\pi + 72\\pi = 252\\pi = 791.28 \\text{ cm}^{2}$. (ii) Volume $= \\pi(36)(10) + \\frac{1}{3}\\pi(36)(8) + \\frac{2}{3}\\pi(216) = 360\\pi + 96\\pi + 144\\pi = 600\\pi = 1884 \\text{ cm}^{3}$.',
    steps: [
      { step: 'Finds slant height 10 cm', marks: 1 },
      { step: 'Writes surface area as sum of three curved surfaces only', marks: 1 },
      { step: 'Gets $791.28 \\text{ cm}^{2}$', marks: 1 },
      { step: 'Writes volumes $360\\pi$, $96\\pi$, $144\\pi$', marks: 1 },
      { step: 'Gets $1884 \\text{ cm}^{3}$', marks: 1 },
    ],
  },
  {
    id: 'tb-sv-10', chapter: C, topic: 'Capacity and cost problems', ref: `${CH} · Volume and surface area of combined solids`,
    type: 'long', complexity: 'hard', marks: 4,
    text: 'A water tank is a cylinder of inner radius 2.1 m and height 3 m, closed at the bottom by a hemisphere of the same radius (the top is open). (i) Find its capacity in litres. (ii) The inner curved surface is to be coated at ₹25 per $\\text{m}^{2}$. Find the cost. (Use $\\pi = \\frac{22}{7}$, $1 \\text{ m}^{3} = 1000$ L.)',
    answer: '(i) Volume $= \\pi(2.1)^{2}(3) + \\frac{2}{3}\\pi(2.1)^{3} = 13.23\\pi + 6.174\\pi = 19.404\\pi = 60.984 \\text{ m}^{3} = 60984$ L. (ii) Inner area $= 2\\pi(2.1)(3) + 2\\pi(2.1)^{2} = 12.6\\pi + 8.82\\pi = 21.42\\pi = 67.32 \\text{ m}^{2}$. Cost $= 67.32 \\times 25 = ₹1683$.',
    steps: [
      { step: 'Writes volume as cylinder + hemisphere', marks: 1 },
      { step: 'Gets 60984 L', marks: 1 },
      { step: 'Gets inner area $67.32 \\text{ m}^{2}$', marks: 1 },
      { step: 'Gets cost ₹1683', marks: 1 },
    ],
  },
];
