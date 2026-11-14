import type { TextbookQuestion } from '../types.js';

const C = 'Surface Areas and Volumes';
const R = 'NCERT Class 10 · Ch 12 Surface Areas and Volumes · Same skill as';

export const NCERT_CH12: TextbookQuestion[] = [
  {
    id: 'nc-12-ex01', chapter: C, topic: 'Surface area of solids', ref: `${R} Example 1`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A wooden pendant is shaped like a cone standing on a hemisphere, with the cone’s base fixed to the flat face of the hemisphere. The pendant is 7 cm tall in all and its greatest diameter is 6 cm. Find the area to be varnished (its whole outer surface). (Use $\\pi = \\frac{22}{7}$.)',
    answer: 'Radius $r = 3$ cm. Height of the cone $= 7 - 3 = 4$ cm, so slant height $l = \\sqrt{3^{2} + 4^{2}} = 5$ cm. CSA of hemisphere $= 2\\pi r^{2} = 2 \\times \\frac{22}{7} \\times 9 = \\frac{396}{7} \\text{ cm}^{2}$. CSA of cone $= \\pi r l = \\frac{22}{7} \\times 3 \\times 5 = \\frac{330}{7} \\text{ cm}^{2}$. Total $= \\frac{726}{7} \\approx 103.71 \\text{ cm}^{2}$.',
    steps: [
      { step: 'Cone height 4 cm and slant height 5 cm', marks: 1 },
      { step: 'CSA of hemisphere and CSA of cone', marks: 1 },
      { step: 'Total $\\approx 103.71 \\text{ cm}^{2}$', marks: 1 },
    ],
  },
  {
    id: 'nc-12-ex02', chapter: C, topic: 'Surface area of solids', ref: `${R} Example 2`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A trophy base is a cube of edge 8 cm with a solid hemisphere of diameter 5.6 cm fixed centrally on its top face. Find the total surface area of the trophy base. (Use $\\pi = \\frac{22}{7}$.)',
    answer: 'TSA of cube $= 6 \\times 8^{2} = 384 \\text{ cm}^{2}$. The hemisphere covers a circle of area $\\pi r^{2}$ but adds a curved surface $2\\pi r^{2}$, a net gain of $\\pi r^{2}$ with $r = 2.8$ cm: $\\frac{22}{7} \\times 2.8 \\times 2.8 = 24.64 \\text{ cm}^{2}$. Total $= 384 + 24.64 = 408.64 \\text{ cm}^{2}$.',
    steps: [
      { step: 'TSA of cube $= 384 \\text{ cm}^{2}$', marks: 1 },
      { step: 'Subtracts base $\\pi r^{2}$ and adds $2\\pi r^{2}$ (net $\\pi r^{2} = 24.64$)', marks: 1 },
      { step: 'Total $= 408.64 \\text{ cm}^{2}$', marks: 1 },
    ],
  },
  {
    id: 'nc-12-ex03', chapter: C, topic: 'Surface area of solids', ref: `${R} Example 3`,
    type: 'long', complexity: 'hard', marks: 5,
    text: 'A model tower is made of a cone placed on top of a cylinder. The whole model is 25 cm tall and the cone is 3 cm tall. The cone’s base has diameter 8 cm and the cylinder’s base has diameter 6 cm, so the cone’s base overhangs the cylinder. The cone (its curved surface and the exposed ring under it) is painted red; the cylinder (its curved surface and its bottom face) is painted white. Find the area painted with each colour. (Use $\\pi = 3.14$.)',
    answer: 'Cone: $r = 4$ cm, $h = 3$ cm, $l = \\sqrt{16 + 9} = 5$ cm. Cylinder: $r_{1} = 3$ cm, $h_{1} = 25 - 3 = 22$ cm. Red area $= \\pi r l + \\pi r^{2} - \\pi r_{1}^{2} = 3.14(20 + 16 - 9) = 3.14 \\times 27 = 84.78 \\text{ cm}^{2}$. White area $= 2\\pi r_{1} h_{1} + \\pi r_{1}^{2} = \\pi r_{1}(2h_{1} + r_{1}) = 3.14 \\times 3 \\times 47 = 442.74 \\text{ cm}^{2}$.',
    steps: [
      { step: 'Finds slant height 5 cm and cylinder height 22 cm', marks: 1 },
      { step: 'Red area includes CSA of cone plus the ring $\\pi(r^{2} - r_{1}^{2})$', marks: 1 },
      { step: 'Red area $= 84.78 \\text{ cm}^{2}$', marks: 1 },
      { step: 'White area $= 2\\pi r_{1}h_{1} + \\pi r_{1}^{2}$', marks: 1 },
      { step: 'White area $= 442.74 \\text{ cm}^{2}$', marks: 1 },
    ],
  },
  {
    id: 'nc-12-ex04', chapter: C, topic: 'Carved and inscribed solids', ref: `${R} Example 4`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A stone planter is a solid cylinder of height 1.1 m and radius 35 cm, with a hemispherical hollow of the same radius scooped out of its top face. Find the total surface area of the planter, leaving out the bottom face that rests on the ground (so: the outer curved surface plus the inside of the hollow). Give the answer in $\\text{m}^{2}$. (Use $\\pi = \\frac{22}{7}$.)',
    answer: 'Required area $= 2\\pi r h + 2\\pi r^{2} = 2\\pi r(h + r)$ with $r = 35$ cm, $h = 110$ cm: $2 \\times \\frac{22}{7} \\times 35 \\times 145 = 220 \\times 145 = 31900 \\text{ cm}^{2} = 3.19 \\text{ m}^{2}$.',
    steps: [
      { step: 'Writes area $= $ CSA of cylinder $+$ CSA of hemisphere', marks: 1 },
      { step: 'Computes $31900 \\text{ cm}^{2}$', marks: 1 },
      { step: 'Converts to $3.19 \\text{ m}^{2}$', marks: 1 },
    ],
  },
  {
    id: 'nc-12-12-1-q01', chapter: C, topic: 'Surface area of solids', ref: `${R} Ex 12.1 Q1`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'Three identical cubes, each of volume $125 \\text{ cm}^{3}$, are placed in a row and joined face to face. Find the surface area of the cuboid formed.',
    answer: 'Edge $= \\sqrt[3]{125} = 5$ cm, so the cuboid is $15 \\times 5 \\times 5$ cm. Surface area $= 2(15 \\times 5 + 5 \\times 5 + 5 \\times 15) = 2(75 + 25 + 75) = 350 \\text{ cm}^{2}$.',
    steps: [
      { step: 'Edge 5 cm, cuboid $15 \\times 5 \\times 5$', marks: 1 },
      { step: 'Surface area $= 350 \\text{ cm}^{2}$', marks: 1 },
    ],
  },
  {
    id: 'nc-12-12-1-q02', chapter: C, topic: 'Surface area of solids', ref: `${R} Ex 12.1 Q2`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A steel mixing bowl is a hollow hemisphere with a hollow cylinder of the same radius standing on its rim. The diameter of the bowl is 21 cm and its total height is 20.5 cm. Find the inner surface area of the bowl. (Use $\\pi = \\frac{22}{7}$.)',
    answer: '$r = 10.5$ cm; cylinder height $= 20.5 - 10.5 = 10$ cm. Inner area $= 2\\pi r^{2} + 2\\pi r h = 2 \\times \\frac{22}{7} \\times 10.5 \\times 10.5 + 2 \\times \\frac{22}{7} \\times 10.5 \\times 10 = 693 + 660 = 1353 \\text{ cm}^{2}$.',
    steps: [
      { step: 'Cylinder height $= 10$ cm', marks: 1 },
      { step: 'Hemisphere $693 \\text{ cm}^{2}$, cylinder $660 \\text{ cm}^{2}$', marks: 1 },
      { step: 'Total $= 1353 \\text{ cm}^{2}$', marks: 1 },
    ],
  },
  {
    id: 'nc-12-12-1-q03', chapter: C, topic: 'Surface area of solids', ref: `${R} Ex 12.1 Q3`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A wooden toy is a cone of radius 7 cm fixed on a hemisphere of the same radius. The total height of the toy is 31 cm. Find its total surface area. (Use $\\pi = \\frac{22}{7}$.)',
    answer: 'Cone height $= 31 - 7 = 24$ cm, slant height $= \\sqrt{7^{2} + 24^{2}} = 25$ cm. TSA $= 2\\pi r^{2} + \\pi r l = 2 \\times \\frac{22}{7} \\times 49 + \\frac{22}{7} \\times 7 \\times 25 = 308 + 550 = 858 \\text{ cm}^{2}$.',
    steps: [
      { step: 'Cone height 24 cm, slant height 25 cm', marks: 1 },
      { step: 'Hemisphere $308 \\text{ cm}^{2}$, cone $550 \\text{ cm}^{2}$', marks: 1 },
      { step: 'TSA $= 858 \\text{ cm}^{2}$', marks: 1 },
    ],
  },
  {
    id: 'nc-12-12-1-q04', chapter: C, topic: 'Surface area of solids', ref: `${R} Ex 12.1 Q4`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A solid hemisphere is to be fixed on the top face of a cube of edge 14 cm. What is the largest diameter the hemisphere can have? For that hemisphere, find the surface area of the combined solid. (Use $\\pi = \\frac{22}{7}$.)',
    answer: 'The flat face must fit on the top face, so the largest diameter is the edge, 14 cm ($r = 7$ cm). Surface area $= 6 \\times 14^{2} - \\pi r^{2} + 2\\pi r^{2} = 1176 + \\pi r^{2} = 1176 + \\frac{22}{7} \\times 49 = 1176 + 154 = 1330 \\text{ cm}^{2}$.',
    steps: [
      { step: 'Largest diameter $= 14$ cm', marks: 1 },
      { step: 'Area $= 6a^{2} + \\pi r^{2}$', marks: 1 },
      { step: 'Area $= 1330 \\text{ cm}^{2}$', marks: 1 },
    ],
  },
  {
    id: 'nc-12-12-1-q05', chapter: C, topic: 'Carved and inscribed solids', ref: `${R} Ex 12.1 Q5`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A wooden block is a cuboid with a square top of side $s$ and height $h$. A hemispherical hollow of diameter $s$ is carved out of the middle of its top face. Find the surface area of the remaining solid in terms of $s$, $h$ and $\\pi$.',
    answer: 'Surface area of the cuboid $= 2s^{2} + 4sh$. Carving removes a circle of area $\\pi \\left(\\frac{s}{2}\\right)^{2} = \\frac{\\pi s^{2}}{4}$ from the top and adds the inside of the hemisphere, $2\\pi \\left(\\frac{s}{2}\\right)^{2} = \\frac{\\pi s^{2}}{2}$. Remaining surface area $= 2s^{2} + 4sh - \\frac{\\pi s^{2}}{4} + \\frac{\\pi s^{2}}{2} = 2s^{2} + 4sh + \\frac{\\pi s^{2}}{4}$.',
    steps: [
      { step: 'Cuboid surface area $2s^{2} + 4sh$', marks: 1 },
      { step: 'Subtracts $\\frac{\\pi s^{2}}{4}$ and adds $\\frac{\\pi s^{2}}{2}$', marks: 1 },
      { step: 'Gets $2s^{2} + 4sh + \\frac{\\pi s^{2}}{4}$', marks: 1 },
    ],
  },
  {
    id: 'nc-12-12-1-q06', chapter: C, topic: 'Surface area of solids', ref: `${R} Ex 12.1 Q6`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A steel storage tank is a cylinder with a hemisphere attached at each end. The tank is 20 m long from end to end and 7 m in diameter. Find its outer surface area. (Use $\\pi = \\frac{22}{7}$.)',
    answer: '$r = 3.5$ m; length of the cylinder $= 20 - 2 \\times 3.5 = 13$ m. Area $= 4\\pi r^{2} + 2\\pi r h = 4 \\times \\frac{22}{7} \\times 12.25 + 2 \\times \\frac{22}{7} \\times 3.5 \\times 13 = 154 + 286 = 440 \\text{ m}^{2}$.',
    steps: [
      { step: 'Cylinder length $= 13$ m', marks: 1 },
      { step: 'Two hemispheres $154 \\text{ m}^{2}$, cylinder $286 \\text{ m}^{2}$', marks: 1 },
      { step: 'Total $= 440 \\text{ m}^{2}$', marks: 1 },
    ],
  },
  {
    id: 'nc-12-12-1-q07', chapter: C, topic: 'Capacity and cost problems', ref: `${R} Ex 12.1 Q7`,
    type: 'long', complexity: 'medium', marks: 4,
    text: 'A garden gazebo has fabric walls in the shape of a cylinder of height 3 m and diameter 7 m, topped by a conical fabric roof of slant height 5 m. The floor is not covered with fabric. Find the area of fabric used, and its cost at ₹120 per $\\text{m}^{2}$. (Use $\\pi = \\frac{22}{7}$.)',
    answer: '$r = 3.5$ m. Walls (CSA of cylinder) $= 2 \\times \\frac{22}{7} \\times 3.5 \\times 3 = 66 \\text{ m}^{2}$. Roof (CSA of cone) $= \\frac{22}{7} \\times 3.5 \\times 5 = 55 \\text{ m}^{2}$. Fabric $= 121 \\text{ m}^{2}$. Cost $= 121 \\times 120 = ₹14520$.',
    steps: [
      { step: 'CSA of cylinder $= 66 \\text{ m}^{2}$', marks: 1 },
      { step: 'CSA of cone $= 55 \\text{ m}^{2}$', marks: 1 },
      { step: 'Total fabric $= 121 \\text{ m}^{2}$', marks: 1 },
      { step: 'Cost $= ₹14520$', marks: 1 },
    ],
  },
  {
    id: 'nc-12-12-1-q08', chapter: C, topic: 'Carved and inscribed solids', ref: `${R} Ex 12.1 Q8`,
    type: 'short', complexity: 'hard', marks: 3,
    text: 'A conical hollow, with the same height and the same base as the cylinder, is drilled out of a solid cylinder of height 2 cm and base diameter 3 cm. Find the total surface area of the remaining solid, to the nearest $\\text{cm}^{2}$. (Use $\\pi = \\frac{22}{7}$.)',
    answer: '$r = 1.5$ cm, $h = 2$ cm, slant height $l = \\sqrt{1.5^{2} + 2^{2}} = 2.5$ cm. The remaining solid has the curved surface of the cylinder, one flat base, and the inside of the cone: $2\\pi r h + \\pi r^{2} + \\pi r l = \\pi r(2h + r + l) = \\frac{22}{7} \\times 1.5 \\times 8 = 37.71 \\text{ cm}^{2} \\approx 38 \\text{ cm}^{2}$.',
    steps: [
      { step: 'Slant height $= 2.5$ cm', marks: 1 },
      { step: 'Identifies the three surfaces: $2\\pi rh + \\pi r^{2} + \\pi rl$', marks: 1 },
      { step: 'Gets $37.71 \\approx 38 \\text{ cm}^{2}$', marks: 1 },
    ],
  },
  {
    id: 'nc-12-12-1-q09', chapter: C, topic: 'Carved and inscribed solids', ref: `${R} Ex 12.1 Q9`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A solid wooden cylinder has height 20 cm and base radius 7 cm. A hemisphere of radius 7 cm is scooped out of each end. Find the total surface area of the article. (Use $\\pi = \\frac{22}{7}$.)',
    answer: 'Surface $=$ CSA of cylinder $+$ inner surfaces of two hemispheres $= 2\\pi r h + 2 \\times 2\\pi r^{2} = 2 \\times \\frac{22}{7} \\times 7 \\times 20 + 4 \\times \\frac{22}{7} \\times 49 = 880 + 616 = 1496 \\text{ cm}^{2}$.',
    steps: [
      { step: 'Writes $2\\pi rh + 4\\pi r^{2}$', marks: 1 },
      { step: 'Computes $880$ and $616$', marks: 1 },
      { step: 'Total $= 1496 \\text{ cm}^{2}$', marks: 1 },
    ],
  },
  {
    id: 'nc-12-ex05', chapter: C, topic: 'Capacity and cost problems', ref: `${R} Example 5`,
    type: 'long', complexity: 'medium', marks: 4,
    text: 'A storage shed is a cuboid with a half-cylinder roof. Its floor measures 20 m by 14 m, the cuboid part is 6 m high, and the half-cylinder roof runs along the 20 m length with diameter 14 m. Find the volume of air the empty shed holds. If stored crates take up 450 $\\text{m}^{3}$ and 12 workers inside take up about 0.09 $\\text{m}^{3}$ each, how much air is left in the shed? (Use $\\pi = \\frac{22}{7}$.)',
    answer: 'Cuboid $= 20 \\times 14 \\times 6 = 1680 \\text{ m}^{3}$. Half cylinder $= \\frac{1}{2} \\times \\frac{22}{7} \\times 7^{2} \\times 20 = 1540 \\text{ m}^{3}$. Empty shed $= 3220 \\text{ m}^{3}$. Space taken $= 450 + 12 \\times 0.09 = 451.08 \\text{ m}^{3}$. Air left $= 3220 - 451.08 = 2768.92 \\text{ m}^{3}$.',
    steps: [
      { step: 'Cuboid volume $= 1680 \\text{ m}^{3}$', marks: 1 },
      { step: 'Half-cylinder volume $= 1540 \\text{ m}^{3}$', marks: 1 },
      { step: 'Empty shed $= 3220 \\text{ m}^{3}$', marks: 1 },
      { step: 'Air left $= 2768.92 \\text{ m}^{3}$', marks: 1 },
    ],
  },
  {
    id: 'nc-12-ex06', chapter: C, topic: 'Capacity and cost problems', ref: `${R} Example 6`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A cylindrical tea cup has inner diameter 6 cm and height 8 cm, but its bottom has a raised hemispherical bump of radius 3 cm inside. Find the apparent capacity of the cup and its actual capacity. (Use $\\pi = 3.14$.)',
    answer: 'Apparent capacity $= \\pi r^{2} h = 3.14 \\times 9 \\times 8 = 226.08 \\text{ cm}^{3}$. Bump $= \\frac{2}{3}\\pi r^{3} = \\frac{2}{3} \\times 3.14 \\times 27 = 56.52 \\text{ cm}^{3}$. Actual capacity $= 226.08 - 56.52 = 169.56 \\text{ cm}^{3}$.',
    steps: [
      { step: 'Apparent capacity $= 226.08 \\text{ cm}^{3}$', marks: 1 },
      { step: 'Hemisphere volume $= 56.52 \\text{ cm}^{3}$', marks: 1 },
      { step: 'Actual capacity $= 169.56 \\text{ cm}^{3}$', marks: 1 },
    ],
  },
  {
    id: 'nc-12-ex07', chapter: C, topic: 'Carved and inscribed solids', ref: `${R} Example 7`,
    type: 'long', complexity: 'medium', marks: 4,
    text: 'A solid toy is a hemisphere with a cone standing on its flat face. The cone is 6 cm high and the common diameter is 6 cm. Find the volume of the toy. A cylinder is drawn just enclosing the toy (same radius, height equal to the toy’s height). Find the difference between the volume of this cylinder and the toy. (Use $\\pi = 3.14$.)',
    answer: '$r = 3$ cm. Toy $= \\frac{2}{3}\\pi r^{3} + \\frac{1}{3}\\pi r^{2} h = \\pi(18 + 18) = 36\\pi = 113.04 \\text{ cm}^{3}$. Enclosing cylinder: radius 3 cm, height $6 + 3 = 9$ cm, volume $= \\pi \\times 9 \\times 9 = 81\\pi = 254.34 \\text{ cm}^{3}$. Difference $= 254.34 - 113.04 = 141.3 \\text{ cm}^{3}$.',
    steps: [
      { step: 'Toy volume $= 36\\pi = 113.04 \\text{ cm}^{3}$', marks: 1 },
      { step: 'Cylinder height $= 9$ cm', marks: 1 },
      { step: 'Cylinder volume $= 254.34 \\text{ cm}^{3}$', marks: 1 },
      { step: 'Difference $= 141.3 \\text{ cm}^{3}$', marks: 1 },
    ],
  },
  {
    id: 'nc-12-12-2-q01', chapter: C, topic: 'Volume of combined solids', ref: `${R} Ex 12.2 Q1`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'A solid is made of a cone standing on a hemisphere, both of radius 2 cm, and the height of the cone is 3 cm. Find the volume of the solid in terms of $\\pi$.',
    answer: 'Hemisphere $= \\frac{2}{3}\\pi (2)^{3} = \\frac{16\\pi}{3}$; cone $= \\frac{1}{3}\\pi (2)^{2}(3) = 4\\pi$. Volume $= \\frac{16\\pi}{3} + 4\\pi = \\frac{28\\pi}{3} \\text{ cm}^{3}$.',
    steps: [
      { step: 'Hemisphere $\\frac{16\\pi}{3}$ and cone $4\\pi$', marks: 1 },
      { step: 'Total $\\frac{28\\pi}{3} \\text{ cm}^{3}$', marks: 1 },
    ],
  },
  {
    id: 'nc-12-12-2-q02', chapter: C, topic: 'Volume of combined solids', ref: `${R} Ex 12.2 Q2`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A hollow foil decoration is shaped like a cylinder with a cone fixed at each end. Its diameter is 4 cm, its total length is 15 cm, and each cone is 3 cm long. Find the volume of air inside it, taking the foil’s thickness as negligible. (Use $\\pi = \\frac{22}{7}$.)',
    answer: '$r = 2$ cm; cylinder length $= 15 - 2 \\times 3 = 9$ cm. Cylinder $= \\pi \\times 4 \\times 9 = 36\\pi$. Two cones $= 2 \\times \\frac{1}{3}\\pi \\times 4 \\times 3 = 8\\pi$. Total $= 44\\pi = 44 \\times \\frac{22}{7} = \\frac{968}{7} \\approx 138.29 \\text{ cm}^{3}$.',
    steps: [
      { step: 'Cylinder length $= 9$ cm', marks: 1 },
      { step: 'Cylinder $36\\pi$, cones $8\\pi$', marks: 1 },
      { step: 'Volume $\\approx 138.29 \\text{ cm}^{3}$', marks: 1 },
    ],
  },
  {
    id: 'nc-12-12-2-q03', chapter: C, topic: 'Volume of combined solids', ref: `${R} Ex 12.2 Q3`,
    type: 'long', complexity: 'medium', marks: 4,
    text: 'Each chocolate in a box is shaped like a cylinder with a hemisphere at each end; it is 6 cm long and 2.1 cm in diameter. Caramel fills 25% of each chocolate’s volume. Find, approximately, the total volume of caramel in 60 such chocolates. (Use $\\pi = \\frac{22}{7}$.)',
    answer: '$r = 1.05$ cm; cylinder length $= 6 - 2.1 = 3.9$ cm. Volume of one $= \\pi r^{2} h + \\frac{4}{3}\\pi r^{3} = \\frac{22}{7} \\times 1.1025 \\times 3.9 + \\frac{4}{3} \\times \\frac{22}{7} \\times 1.157625 = 13.5135 + 4.851 = 18.3645 \\text{ cm}^{3}$. 60 chocolates: $60 \\times 18.3645 = 1101.87 \\text{ cm}^{3}$. Caramel $= 25\\%$ of this $\\approx 275.47 \\text{ cm}^{3}$, about $275 \\text{ cm}^{3}$.',
    steps: [
      { step: 'Cylinder length 3.9 cm, radius 1.05 cm', marks: 1 },
      { step: 'Volume of one chocolate $\\approx 18.36 \\text{ cm}^{3}$', marks: 1 },
      { step: 'Volume of 60 chocolates $\\approx 1101.87 \\text{ cm}^{3}$', marks: 1 },
      { step: 'Caramel $\\approx 275 \\text{ cm}^{3}$', marks: 1 },
    ],
  },
  {
    id: 'nc-12-12-2-q04', chapter: C, topic: 'Carved and inscribed solids', ref: `${R} Ex 12.2 Q4`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A wooden spice holder is a cuboid 20 cm by 12 cm by 5 cm with 6 conical holes drilled into its top face to hold jars. Each hole has radius 1.4 cm and depth 3 cm. Find the volume of wood in the holder. (Use $\\pi = \\frac{22}{7}$.)',
    answer: 'Cuboid $= 20 \\times 12 \\times 5 = 1200 \\text{ cm}^{3}$. One hole $= \\frac{1}{3} \\times \\frac{22}{7} \\times 1.96 \\times 3 = 6.16 \\text{ cm}^{3}$; six holes $= 36.96 \\text{ cm}^{3}$. Wood $= 1200 - 36.96 = 1163.04 \\text{ cm}^{3}$.',
    steps: [
      { step: 'Cuboid volume $= 1200 \\text{ cm}^{3}$', marks: 1 },
      { step: 'Six cones $= 36.96 \\text{ cm}^{3}$', marks: 1 },
      { step: 'Wood $= 1163.04 \\text{ cm}^{3}$', marks: 1 },
    ],
  },
  {
    id: 'nc-12-12-2-q05', chapter: C, topic: 'Volume of single solids', ref: `${R} Ex 12.2 Q5`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A container is an inverted cone with an open top of radius 6 cm and height 12 cm, filled to the brim with oil. Steel balls, each a sphere of radius 0.5 cm, are dropped in until one-sixth of the oil has overflowed. How many balls were dropped in? (Keep $\\pi$; it cancels.)',
    answer: 'Volume of cone $= \\frac{1}{3}\\pi \\times 36 \\times 12 = 144\\pi \\text{ cm}^{3}$. Oil overflowed $= \\frac{1}{6} \\times 144\\pi = 24\\pi$. One ball $= \\frac{4}{3}\\pi (0.5)^{3} = \\frac{\\pi}{6}$. Number of balls $= \\frac{24\\pi}{\\pi/6} = 144$.',
    steps: [
      { step: 'Cone volume $= 144\\pi$', marks: 1 },
      { step: 'Overflow $24\\pi$ and one ball $\\frac{\\pi}{6}$', marks: 1 },
      { step: 'Number of balls $= 144$', marks: 1 },
    ],
  },
  {
    id: 'nc-12-12-2-q06', chapter: C, topic: 'Capacity and cost problems', ref: `${R} Ex 12.2 Q6`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A solid steel shaft is a cylinder of height 150 cm and base diameter 20 cm, with a narrower cylinder of height 40 cm and radius 6 cm fixed on top. Find the mass of the shaft if $1 \\text{ cm}^{3}$ of steel has a mass of about 7.8 g. (Use $\\pi = 3.14$.)',
    answer: 'Volume $= \\pi(10^{2} \\times 150 + 6^{2} \\times 40) = 3.14 \\times (15000 + 1440) = 3.14 \\times 16440 = 51621.6 \\text{ cm}^{3}$. Mass $= 51621.6 \\times 7.8 = 402648.48$ g $\\approx 402.65$ kg.',
    steps: [
      { step: 'Volumes of the two cylinders added', marks: 1 },
      { step: 'Total volume $= 51621.6 \\text{ cm}^{3}$', marks: 1 },
      { step: 'Mass $\\approx 402.65$ kg', marks: 1 },
    ],
  },
  {
    id: 'nc-12-12-2-q07', chapter: C, topic: 'Volume of combined solids', ref: `${R} Ex 12.2 Q7`,
    type: 'long', complexity: 'hard', marks: 4,
    text: 'A solid made of a cone of height 30 cm and radius 15 cm standing on a hemisphere of radius 15 cm is placed upright, hemisphere down, in a cylindrical tank of radius 15 cm and height 50 cm that is full of water, so that it rests on the tank floor. How much water remains in the tank? (Use $\\pi = \\frac{22}{7}$.)',
    answer: 'The solid is $15 + 30 = 45$ cm tall, so it is fully under water. Tank $= \\pi \\times 225 \\times 50 = 11250\\pi$. Cone $= \\frac{1}{3}\\pi \\times 225 \\times 30 = 2250\\pi$. Hemisphere $= \\frac{2}{3}\\pi \\times 3375 = 2250\\pi$. Water left $= 11250\\pi - 4500\\pi = 6750\\pi = 6750 \\times \\frac{22}{7} \\approx 21214.29 \\text{ cm}^{3}$ (about 21.21 litres).',
    steps: [
      { step: 'Tank volume $= 11250\\pi$', marks: 1 },
      { step: 'Cone and hemisphere $2250\\pi$ each', marks: 1 },
      { step: 'Water left $= 6750\\pi$', marks: 1 },
      { step: 'Evaluates $\\approx 21214.29 \\text{ cm}^{3}$', marks: 1 },
    ],
  },
  {
    id: 'nc-12-12-2-q08', chapter: C, topic: 'Capacity and cost problems', ref: `${R} Ex 12.2 Q8`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A round-bottom flask in a chemistry lab has a spherical body of inner diameter 10 cm and a cylindrical neck 6 cm long with inner diameter 2 cm. A student fills it with water and reports its capacity as $540 \\text{ cm}^{3}$. Check whether she is correct. (Use $\\pi = 3.14$.)',
    answer: 'Sphere $= \\frac{4}{3} \\times 3.14 \\times 5^{3} = 523.33 \\text{ cm}^{3}$. Neck $= 3.14 \\times 1^{2} \\times 6 = 18.84 \\text{ cm}^{3}$. Capacity $= 542.17 \\text{ cm}^{3}$. So her value of $540 \\text{ cm}^{3}$ is slightly low; the correct capacity is about $542.17 \\text{ cm}^{3}$.',
    steps: [
      { step: 'Sphere volume $\\approx 523.33 \\text{ cm}^{3}$', marks: 1 },
      { step: 'Neck volume $= 18.84 \\text{ cm}^{3}$', marks: 1 },
      { step: 'Total $542.17 \\text{ cm}^{3}$; concludes she is not exactly correct', marks: 1 },
    ],
  },
];
