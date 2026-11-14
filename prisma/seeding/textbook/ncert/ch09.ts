import type { TextbookQuestion } from '../types.js';

const CH9 = 'NCERT Class 10 · Ch 9 Some Applications of Trigonometry';
const C = 'Trigonometry';
const T = 'Heights and distances';
const ref = (s: string) => `${CH9} · Same skill as ${s}`;

export const NCERT_CH09: TextbookQuestion[] = [
  // Example 1
  {
    id: 'nc-09-ex01', chapter: C, topic: T, ref: ref('Example 1'),
    type: 'short', complexity: 'easy', marks: 2,
    text: 'A mobile-phone mast stands vertically on level ground. From a point on the ground 24 m from the foot of the mast, the angle of elevation of its top is $30^{\\circ}$. Find the height of the mast in surd form.',
    answer: 'Let the height be $h$ m. The mast, the ground and the line of sight form a right triangle with the right angle at the foot of the mast. $\\tan 30^{\\circ} = \\frac{h}{24}$, so $\\frac{1}{\\sqrt{3}} = \\frac{h}{24}$ and $h = \\frac{24}{\\sqrt{3}} = 8\\sqrt{3}$ m (about 13.86 m).',
    steps: [
      { step: 'Uses $\\tan 30^{\\circ} = \\frac{h}{24}$', marks: 1 },
      { step: 'Gets $h = 8\\sqrt{3}$ m', marks: 1 },
    ],
  },
  // Example 2
  {
    id: 'nc-09-ex02', chapter: C, topic: T, ref: ref('Example 2'),
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A painter must reach a point on a vertical wall 1.6 m below the top of the wall, which is 7 m high. She uses a straight ladder that makes an angle of $60^{\\circ}$ with the level ground, with its top resting at that point. Find the length of the ladder and the distance of its foot from the wall. (Take $\\sqrt{3} \\approx 1.732$ and give answers to two decimal places.)',
    answer: 'Height of the point above the ground $= 7 - 1.6 = 5.4$ m. The ladder is the hypotenuse of a right triangle with the wall as the vertical side. $\\sin 60^{\\circ} = \\frac{5.4}{L}$, so $L = \\frac{5.4 \\times 2}{\\sqrt{3}} = \\frac{10.8}{1.732} \\approx 6.24$ m. Distance of the foot from the wall: $\\cot 60^{\\circ} = \\frac{d}{5.4}$, so $d = \\frac{5.4}{\\sqrt{3}} = \\frac{5.4}{1.732} \\approx 3.12$ m.',
    steps: [
      { step: 'Finds the height of the point, 5.4 m', marks: 1 },
      { step: 'Uses $\\sin 60^{\\circ}$ to get the ladder length $\\approx 6.24$ m', marks: 1 },
      { step: 'Uses $\\cot 60^{\\circ}$ (or $\\tan 60^{\\circ}$) to get the distance $\\approx 3.12$ m', marks: 1 },
    ],
  },
  // Example 3
  {
    id: 'nc-09-ex03', chapter: C, topic: T, ref: ref('Example 3'),
    type: 'short', complexity: 'easy', marks: 2,
    text: 'A girl whose eyes are 1.7 m above the ground stands 22.3 m from a clock tower on level ground. The angle of elevation of the top of the tower from her eyes is $45^{\\circ}$. Find the height of the tower.',
    answer: 'Draw a horizontal line from her eyes to the tower; it has length 22.3 m and meets the tower 1.7 m above the ground. If the part of the tower above this line is $x$ m, then $\\tan 45^{\\circ} = \\frac{x}{22.3}$, so $x = 22.3$. Height of the tower $= 22.3 + 1.7 = 24$ m.',
    steps: [
      { step: 'Uses $\\tan 45^{\\circ} = \\frac{x}{22.3}$ to get $x = 22.3$ m', marks: 1 },
      { step: 'Adds the eye height: 24 m', marks: 1 },
    ],
  },
  // Example 4
  {
    id: 'nc-09-ex04', chapter: C, topic: T, ref: ref('Example 4'),
    type: 'long', complexity: 'medium', marks: 4,
    text: 'From a point $P$ on level ground, the angle of elevation of the top of a 15 m tall school building is $45^{\\circ}$. A vertical antenna stands on top of the building, and from $P$ the angle of elevation of the top of the antenna is $60^{\\circ}$. Find the distance of the building from $P$ and the length of the antenna. (Take $\\sqrt{3} \\approx 1.732$.)',
    answer: 'Let the foot of the building be $B$ and its distance from $P$ be $d$ m. In the right triangle formed with the building, $\\tan 45^{\\circ} = \\frac{15}{d}$, so $d = 15$ m. Let the antenna be $x$ m long; the top of the antenna is $(15 + x)$ m high. $\\tan 60^{\\circ} = \\frac{15 + x}{15}$, so $15 + x = 15\\sqrt{3}$ and $x = 15(\\sqrt{3} - 1) = 15 \\times 0.732 = 10.98$ m.',
    steps: [
      { step: 'Uses $\\tan 45^{\\circ}$ to get the distance 15 m', marks: 1 },
      { step: 'Sets up $\\tan 60^{\\circ} = \\frac{15 + x}{15}$', marks: 1 },
      { step: 'Solves $x = 15(\\sqrt{3} - 1)$', marks: 1 },
      { step: 'Evaluates $x \\approx 10.98$ m', marks: 1 },
    ],
  },
  // Example 5
  {
    id: 'nc-09-ex05', chapter: C, topic: T, ref: ref('Example 5'),
    type: 'long', complexity: 'medium', marks: 4,
    text: 'The shadow of a vertical pole on level ground is 24 m longer when the Sun is $30^{\\circ}$ above the horizon than when it is $45^{\\circ}$ above the horizon. Find the height of the pole. (Give the answer in surd form and to two decimal places, taking $\\sqrt{3} \\approx 1.732$.)',
    answer: 'Let the height be $h$ m and the shorter shadow be $x$ m. With the Sun at $45^{\\circ}$: $\\tan 45^{\\circ} = \\frac{h}{x}$, so $x = h$. With the Sun at $30^{\\circ}$ the shadow is $x + 24$: $\\tan 30^{\\circ} = \\frac{h}{h + 24}$, so $\\sqrt{3}h = h + 24$, giving $h = \\frac{24}{\\sqrt{3} - 1} = \\frac{24(\\sqrt{3} + 1)}{2} = 12(\\sqrt{3} + 1)$ m $\\approx 32.78$ m.',
    steps: [
      { step: 'From the $45^{\\circ}$ triangle, shorter shadow $= h$', marks: 1 },
      { step: 'Sets up $\\tan 30^{\\circ} = \\frac{h}{h + 24}$', marks: 1 },
      { step: 'Solves $h = 12(\\sqrt{3} + 1)$', marks: 1 },
      { step: 'Evaluates $\\approx 32.78$ m', marks: 1 },
    ],
  },
  // Example 6
  {
    id: 'nc-09-ex06', chapter: C, topic: T, ref: ref('Example 6'),
    type: 'long', complexity: 'hard', marks: 5,
    text: 'From the roof of a hotel, the angles of depression of the top and the bottom of a 12 m tall house across the street are $45^{\\circ}$ and $60^{\\circ}$ respectively. Both buildings stand on the same level ground. Find the height of the hotel and the distance between the two buildings, in surd form.',
    answer: 'Let the hotel be $H$ m tall and the distance between the buildings be $d$ m. The angle of depression equals the angle of elevation from the other end (alternate angles). Bottom of the house: $\\tan 60^{\\circ} = \\frac{H}{d}$, so $H = \\sqrt{3}d$. Top of the house: the vertical drop from the hotel roof to the house top is $H - 12$, so $\\tan 45^{\\circ} = \\frac{H - 12}{d}$, giving $H - 12 = d$. Then $\\sqrt{3}d - d = 12$, so $d = \\frac{12}{\\sqrt{3} - 1} = 6(\\sqrt{3} + 1)$ m $\\approx 16.39$ m, and $H = \\sqrt{3}d = 6(3 + \\sqrt{3}) = 18 + 6\\sqrt{3}$ m $\\approx 28.39$ m.',
    steps: [
      { step: 'Converts angles of depression to angles of elevation (alternate angles)', marks: 1 },
      { step: 'Writes $H = \\sqrt{3}d$ from the $60^{\\circ}$ triangle', marks: 1 },
      { step: 'Writes $H - 12 = d$ from the $45^{\\circ}$ triangle', marks: 1 },
      { step: 'Solves $d = 6(\\sqrt{3} + 1)$ m', marks: 1 },
      { step: 'Gets $H = 18 + 6\\sqrt{3}$ m', marks: 1 },
    ],
  },
  // Example 7
  {
    id: 'nc-09-ex07', chapter: C, topic: T, ref: ref('Example 7'),
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A tethered balloon hangs 60 m directly above a point $O$ on the surface of a calm lake. From the balloon, the angles of depression of two boats on opposite sides of $O$, in a straight line through $O$, are $30^{\\circ}$ and $60^{\\circ}$. Find the distance between the boats in surd form.',
    answer: 'Boat at depression $30^{\\circ}$: its distance from $O$ is $\\frac{60}{\\tan 30^{\\circ}} = 60\\sqrt{3}$ m. Boat at depression $60^{\\circ}$: distance $\\frac{60}{\\tan 60^{\\circ}} = \\frac{60}{\\sqrt{3}} = 20\\sqrt{3}$ m. They are on opposite sides of $O$, so the distance between them is $60\\sqrt{3} + 20\\sqrt{3} = 80\\sqrt{3}$ m $\\approx 138.56$ m.',
    steps: [
      { step: 'Finds $60\\sqrt{3}$ m for the $30^{\\circ}$ boat', marks: 1 },
      { step: 'Finds $20\\sqrt{3}$ m for the $60^{\\circ}$ boat', marks: 1 },
      { step: 'Adds to get $80\\sqrt{3}$ m', marks: 1 },
    ],
  },

  // Exercise 9.1
  {
    id: 'nc-09-9-1-q01', chapter: C, topic: T, ref: ref('Ex 9.1 Q1'),
    type: 'short', complexity: 'easy', marks: 2,
    text: 'A taut guy wire 18 m long runs from the top of a vertical mast to a peg in the level ground, making an angle of $60^{\\circ}$ with the ground. Find the height of the mast in surd form.',
    answer: 'The wire is the hypotenuse of a right triangle with the mast as the side opposite the $60^{\\circ}$ angle. $\\sin 60^{\\circ} = \\frac{h}{18}$, so $h = 18 \\times \\frac{\\sqrt{3}}{2} = 9\\sqrt{3}$ m $\\approx 15.59$ m.',
    steps: [
      { step: 'Uses $\\sin 60^{\\circ} = \\frac{h}{18}$', marks: 1 },
      { step: 'Gets $h = 9\\sqrt{3}$ m', marks: 1 },
    ],
  },
  {
    id: 'nc-09-9-1-q02', chapter: C, topic: T, ref: ref('Ex 9.1 Q2'),
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A vertical bamboo pole snaps in a storm. The upper part stays attached at the break and leans over so that its tip touches the level ground 5 m from the foot of the pole, making an angle of $60^{\\circ}$ with the ground. Find the original height of the pole. (Take $\\sqrt{3} \\approx 1.732$.)',
    answer: 'The standing part, the ground and the broken part form a right triangle with the right angle at the foot. Standing part: $\\tan 60^{\\circ} = \\frac{a}{5}$, so $a = 5\\sqrt{3}$ m. Broken part (hypotenuse): $\\cos 60^{\\circ} = \\frac{5}{b}$, so $b = 10$ m. Original height $= 10 + 5\\sqrt{3} \\approx 10 + 8.66 = 18.66$ m.',
    steps: [
      { step: 'Finds the standing part $5\\sqrt{3}$ m', marks: 1 },
      { step: 'Finds the broken part 10 m', marks: 1 },
      { step: 'Adds: $10 + 5\\sqrt{3} \\approx 18.66$ m', marks: 1 },
    ],
  },
  {
    id: 'nc-09-9-1-q03', chapter: C, topic: T, ref: ref('Ex 9.1 Q3'),
    type: 'short', complexity: 'easy', marks: 3,
    text: 'A skate park is building two straight ramps. The beginners ramp rises to a height of 0.9 m and makes an angle of $30^{\\circ}$ with the ground. The advanced ramp rises to 2.4 m and makes an angle of $45^{\\circ}$ with the ground. Find the length of each ramp surface. (Take $\\sqrt{2} \\approx 1.414$.)',
    answer: 'In each case the ramp is the hypotenuse and the height is opposite the angle. Beginners: $\\sin 30^{\\circ} = \\frac{0.9}{L_{1}}$, so $L_{1} = 1.8$ m. Advanced: $\\sin 45^{\\circ} = \\frac{2.4}{L_{2}}$, so $L_{2} = 2.4\\sqrt{2} \\approx 3.39$ m.',
    steps: [
      { step: 'Uses sine of the angle for each ramp', marks: 1 },
      { step: 'Beginners ramp 1.8 m', marks: 1 },
      { step: 'Advanced ramp $2.4\\sqrt{2} \\approx 3.39$ m', marks: 1 },
    ],
  },
  {
    id: 'nc-09-9-1-q04', chapter: C, topic: T, ref: ref('Ex 9.1 Q4'),
    type: 'short', complexity: 'easy', marks: 2,
    text: 'From a point on level ground 45 m from the foot of a temple tower, the angle of elevation of the top of the tower is $60^{\\circ}$. Find the height of the tower in surd form.',
    answer: '$\\tan 60^{\\circ} = \\frac{h}{45}$, so $h = 45\\sqrt{3}$ m $\\approx 77.94$ m.',
    steps: [
      { step: 'Uses $\\tan 60^{\\circ} = \\frac{h}{45}$', marks: 1 },
      { step: 'Gets $h = 45\\sqrt{3}$ m', marks: 1 },
    ],
  },
  {
    id: 'nc-09-9-1-q05', chapter: C, topic: T, ref: ref('Ex 9.1 Q5'),
    type: 'short', complexity: 'easy', marks: 2,
    text: 'A drone hovers 45 m above level ground. It is held by a straight, taut cord fixed to a stake in the ground, and the cord makes an angle of $30^{\\circ}$ with the ground. Find the length of the cord.',
    answer: 'The cord is the hypotenuse and the height is opposite the $30^{\\circ}$ angle. $\\sin 30^{\\circ} = \\frac{45}{L}$, so $L = 90$ m.',
    steps: [
      { step: 'Uses $\\sin 30^{\\circ} = \\frac{45}{L}$', marks: 1 },
      { step: 'Gets $L = 90$ m', marks: 1 },
    ],
  },
  {
    id: 'nc-09-9-1-q06', chapter: C, topic: T, ref: ref('Ex 9.1 Q6'),
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A girl whose eyes are 1.6 m above the ground stands some distance from a 41.6 m tall water tower on level ground. As she walks straight towards the tower, the angle of elevation of its top from her eyes increases from $45^{\\circ}$ to $60^{\\circ}$. How far did she walk? (Take $\\sqrt{3} \\approx 1.732$.)',
    answer: 'Height of the top above her eye level $= 41.6 - 1.6 = 40$ m. At $45^{\\circ}$ her distance from the tower is $\\frac{40}{\\tan 45^{\\circ}} = 40$ m. At $60^{\\circ}$ it is $\\frac{40}{\\sqrt{3}} = \\frac{40\\sqrt{3}}{3} \\approx 23.09$ m. Distance walked $= 40 - \\frac{40\\sqrt{3}}{3} = \\frac{40(3 - \\sqrt{3})}{3} \\approx 16.91$ m.',
    steps: [
      { step: 'Uses 40 m as the height above eye level', marks: 1 },
      { step: 'Finds both distances, 40 m and $\\frac{40}{\\sqrt{3}}$ m', marks: 1 },
      { step: 'Subtracts to get about 16.91 m', marks: 1 },
    ],
  },
  {
    id: 'nc-09-9-1-q07', chapter: C, topic: T, ref: ref('Ex 9.1 Q7'),
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A water tank stands on the flat roof of a 16 m high building. From a point on the level ground, the angles of elevation of the bottom and the top of the tank are $30^{\\circ}$ and $45^{\\circ}$ respectively. Find the height of the tank. (Take $\\sqrt{3} \\approx 1.732$.)',
    answer: 'Let the point be $d$ m from the building. Bottom of the tank (16 m high): $\\tan 30^{\\circ} = \\frac{16}{d}$, so $d = 16\\sqrt{3}$ m. Top of the tank, $(16 + t)$ m high: $\\tan 45^{\\circ} = \\frac{16 + t}{d}$, so $16 + t = 16\\sqrt{3}$ and $t = 16(\\sqrt{3} - 1) \\approx 11.71$ m.',
    steps: [
      { step: 'Gets $d = 16\\sqrt{3}$ m', marks: 1 },
      { step: 'Sets up $16 + t = d$', marks: 1 },
      { step: 'Gets $t = 16(\\sqrt{3} - 1) \\approx 11.71$ m', marks: 1 },
    ],
  },
  {
    id: 'nc-09-9-1-q08', chapter: C, topic: T, ref: ref('Ex 9.1 Q8'),
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A 2.4 m flagpole stands upright on a raised platform. From a point on the level ground, the angle of elevation of the top of the flagpole is $60^{\\circ}$, and the angle of elevation of the top of the platform is $30^{\\circ}$. Find the height of the platform.',
    answer: 'Let the platform be $p$ m high and the point $d$ m away. $\\tan 30^{\\circ} = \\frac{p}{d}$ gives $d = \\sqrt{3}p$. $\\tan 60^{\\circ} = \\frac{p + 2.4}{d}$ gives $p + 2.4 = \\sqrt{3}d = 3p$. So $2p = 2.4$ and $p = 1.2$ m.',
    steps: [
      { step: 'Writes $d = \\sqrt{3}p$', marks: 1 },
      { step: 'Writes $p + 2.4 = \\sqrt{3}d$', marks: 1 },
      { step: 'Solves $p = 1.2$ m', marks: 1 },
    ],
  },
  {
    id: 'nc-09-9-1-q09', chapter: C, topic: T, ref: ref('Ex 9.1 Q9'),
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A 48 m transmission mast and a hostel block stand on flat ground. Standing at the foot of the hostel, Asha sees the top of the mast at an elevation of $60^{\\circ}$; standing at the foot of the mast, she sees the top of the hostel at $45^{\\circ}$. How tall is the hostel? Give the answer in surd form.',
    answer: 'Let the distance between their feet be $d$ m. From the foot of the hostel: $\\tan 60^{\\circ} = \\frac{48}{d}$, so $d = \\frac{48}{\\sqrt{3}} = 16\\sqrt{3}$ m. From the foot of the mast: $\\tan 45^{\\circ} = \\frac{h}{d}$, so $h = d = 16\\sqrt{3}$ m $\\approx 27.71$ m.',
    steps: [
      { step: 'Finds $d = 16\\sqrt{3}$ m', marks: 1 },
      { step: 'Uses $\\tan 45^{\\circ} = \\frac{h}{d}$', marks: 1 },
      { step: 'Gets $h = 16\\sqrt{3}$ m', marks: 1 },
    ],
  },
  {
    id: 'nc-09-9-1-q10', chapter: C, topic: T, ref: ref('Ex 9.1 Q10'),
    type: 'long', complexity: 'medium', marks: 4,
    text: 'Two lamp posts of equal height stand on opposite sides of a straight street 60 m wide, directly facing each other. From a point on the street between them, on the line joining their feet, the angles of elevation of the tops of the posts are $60^{\\circ}$ and $45^{\\circ}$. Find the height of the posts and the distance of the point from each post. (Take $\\sqrt{3} \\approx 1.732$.)',
    answer: 'Let the point be $x$ m from the post seen at $60^{\\circ}$, so it is $(60 - x)$ m from the other. Height $h = x\\tan 60^{\\circ} = \\sqrt{3}x$ and $h = (60 - x)\\tan 45^{\\circ} = 60 - x$. So $\\sqrt{3}x = 60 - x$, giving $x = \\frac{60}{\\sqrt{3} + 1} = 30(\\sqrt{3} - 1) \\approx 21.96$ m. Then $h = 60 - x = 30(3 - \\sqrt{3}) \\approx 38.04$ m, and the distance from the other post is also $60 - x \\approx 38.04$ m.',
    steps: [
      { step: 'Writes $h = \\sqrt{3}x$', marks: 1 },
      { step: 'Writes $h = 60 - x$', marks: 1 },
      { step: 'Solves $x = 30(\\sqrt{3} - 1) \\approx 21.96$ m', marks: 1 },
      { step: 'Gets $h \\approx 38.04$ m and the other distance $\\approx 38.04$ m', marks: 1 },
    ],
  },
  {
    id: 'nc-09-9-1-q11', chapter: C, topic: T, ref: ref('Ex 9.1 Q11'),
    type: 'long', complexity: 'medium', marks: 4,
    text: 'A radio mast stands vertically on one bank of a river. From a point $A$ on the opposite bank directly facing the mast, the angle of elevation of its top is $45^{\\circ}$. From a point $B$, 30 m further back from $A$ on the straight line through the foot of the mast and $A$, the angle of elevation is $30^{\\circ}$. Find the height of the mast and the width of the river. (Take $\\sqrt{3} \\approx 1.732$.)',
    answer: 'Let the height be $h$ m and the width be $w$ m. From $A$: $\\tan 45^{\\circ} = \\frac{h}{w}$, so $h = w$. From $B$: $\\tan 30^{\\circ} = \\frac{h}{w + 30}$, so $\\sqrt{3}h = h + 30$. Hence $h = \\frac{30}{\\sqrt{3} - 1} = 15(\\sqrt{3} + 1) \\approx 40.98$ m, and the width $w = h \\approx 40.98$ m.',
    steps: [
      { step: 'Writes $h = w$ from point $A$', marks: 1 },
      { step: 'Writes $\\tan 30^{\\circ} = \\frac{h}{w + 30}$', marks: 1 },
      { step: 'Solves $h = 15(\\sqrt{3} + 1)$', marks: 1 },
      { step: 'Gives $h = w \\approx 40.98$ m', marks: 1 },
    ],
  },
  {
    id: 'nc-09-9-1-q12', chapter: C, topic: T, ref: ref('Ex 9.1 Q12'),
    type: 'short', complexity: 'medium', marks: 3,
    text: 'From the top of a 10 m high house, the angle of elevation of the top of a mobile tower is $30^{\\circ}$ and the angle of depression of its foot is $60^{\\circ}$. The house and the tower stand on the same level ground. Find the height of the tower.',
    answer: 'Let the distance between the house and the tower be $d$ m. Depression of the foot: $\\tan 60^{\\circ} = \\frac{10}{d}$, so $d = \\frac{10}{\\sqrt{3}}$ m. Elevation of the top: the part of the tower above the roof level is $d\\tan 30^{\\circ} = \\frac{10}{\\sqrt{3}} \\cdot \\frac{1}{\\sqrt{3}} = \\frac{10}{3}$ m. Height of the tower $= 10 + \\frac{10}{3} = \\frac{40}{3} \\approx 13.33$ m.',
    steps: [
      { step: 'Finds $d = \\frac{10}{\\sqrt{3}}$ m', marks: 1 },
      { step: 'Finds the part above roof level, $\\frac{10}{3}$ m', marks: 1 },
      { step: 'Gets the height $\\frac{40}{3}$ m', marks: 1 },
    ],
  },
  {
    id: 'nc-09-9-1-q13', chapter: C, topic: T, ref: ref('Ex 9.1 Q13'),
    type: 'short', complexity: 'medium', marks: 3,
    text: 'From the top of a vertical cliff 90 m above sea level, the angles of depression of two buoys are $45^{\\circ}$ and $60^{\\circ}$. The buoys lie on the same side of the cliff, in a straight line with its foot. Find the distance between the buoys. (Take $\\sqrt{3} \\approx 1.732$.)',
    answer: 'Distance of the farther buoy (depression $45^{\\circ}$) from the foot $= \\frac{90}{\\tan 45^{\\circ}} = 90$ m. Nearer buoy (depression $60^{\\circ}$): $\\frac{90}{\\sqrt{3}} = 30\\sqrt{3}$ m. Distance between them $= 90 - 30\\sqrt{3} = 30(3 - \\sqrt{3}) \\approx 38.04$ m.',
    steps: [
      { step: 'Finds 90 m for the $45^{\\circ}$ buoy', marks: 1 },
      { step: 'Finds $30\\sqrt{3}$ m for the $60^{\\circ}$ buoy', marks: 1 },
      { step: 'Subtracts to get about 38.04 m', marks: 1 },
    ],
  },
  {
    id: 'nc-09-9-1-q14', chapter: C, topic: T, ref: ref('Ex 9.1 Q14'),
    type: 'long', complexity: 'medium', marks: 4,
    text: 'A boy whose eyes are 1.5 m above the ground watches a drone flying in a straight horizontal line at a constant height of 61.5 m above the ground, moving directly away from him. At one instant the angle of elevation of the drone from his eyes is $45^{\\circ}$; a little later it is $30^{\\circ}$. Find the distance the drone travelled in that interval. (Take $\\sqrt{3} \\approx 1.732$.)',
    answer: 'Height of the drone above his eye level $= 61.5 - 1.5 = 60$ m. At $45^{\\circ}$, horizontal distance $= \\frac{60}{\\tan 45^{\\circ}} = 60$ m. At $30^{\\circ}$, horizontal distance $= \\frac{60}{\\tan 30^{\\circ}} = 60\\sqrt{3}$ m. Distance travelled $= 60\\sqrt{3} - 60 = 60(\\sqrt{3} - 1) \\approx 43.92$ m.',
    steps: [
      { step: 'Uses 60 m as the height above eye level', marks: 1 },
      { step: 'Horizontal distance 60 m at $45^{\\circ}$', marks: 1 },
      { step: 'Horizontal distance $60\\sqrt{3}$ m at $30^{\\circ}$', marks: 1 },
      { step: 'Distance travelled $60(\\sqrt{3} - 1) \\approx 43.92$ m', marks: 1 },
    ],
  },
  {
    id: 'nc-09-9-1-q15', chapter: C, topic: T, ref: ref('Ex 9.1 Q15'),
    type: 'long', complexity: 'hard', marks: 4,
    text: 'A guard at the top of a watchtower on the shore sees a boat sailing straight towards the foot of the tower at a constant speed. The angle of depression of the boat changes from $30^{\\circ}$ to $45^{\\circ}$ in 10 minutes. How much longer will the boat take to reach the foot of the tower? (Give the answer in surd form and to two decimal places, taking $\\sqrt{3} \\approx 1.732$.)',
    answer: 'Let the height of the guard above the water be $h$. At $30^{\\circ}$ the boat is $h\\sqrt{3}$ from the foot; at $45^{\\circ}$ it is $h$ from the foot. In 10 minutes it covers $h\\sqrt{3} - h = h(\\sqrt{3} - 1)$, so its speed is $\\frac{h(\\sqrt{3} - 1)}{10}$ per minute. Time for the remaining distance $h$: $\\frac{h}{h(\\sqrt{3} - 1)/10} = \\frac{10}{\\sqrt{3} - 1} = 5(\\sqrt{3} + 1)$ minutes $\\approx 13.66$ minutes.',
    steps: [
      { step: 'Finds the two distances $h\\sqrt{3}$ and $h$', marks: 1 },
      { step: 'Finds the distance covered in 10 minutes, $h(\\sqrt{3} - 1)$', marks: 1 },
      { step: 'Sets up time $= \\frac{h}{\\text{speed}}$', marks: 1 },
      { step: 'Gets $5(\\sqrt{3} + 1) \\approx 13.66$ minutes', marks: 1 },
    ],
  },
];
