import type { TextbookQuestion } from './types.js';

const CH = 'NCERT Class 10 · Ch 13 Statistics';
const C = 'Statistics';

export const STATISTICS: TextbookQuestion[] = [
  {
    id: 'tb-st-01', chapter: C, topic: 'Mean, median and mode relation', ref: `${CH} · Relation between mean, median and mode`,
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'For a grouped data set, the mode is 24 and the mean is 30. Using the empirical relation, the median is',
    options: ['26', '27', '28', '29'],
    answer: 'Correct option: C) 28. $3 \\text{ Median} = \\text{Mode} + 2 \\text{ Mean} = 24 + 60 = 84$, so Median $= 28$. Option B, 27, is just the average of mode and mean, which is not the relation.',
  },
  {
    id: 'tb-st-02', chapter: C, topic: 'Cumulative frequency tables', ref: `${CH} · Cumulative frequency`,
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Class: 0–10, 10–20, 20–30, 30–40, 40–50 ; Frequency: 5, 8, 12, 10, 5. The cumulative frequency (less than type) of the class 20–30 is',
    options: ['12', '20', '25', '35'],
    answer: 'Correct option: C) 25. Add frequencies up to and including 20–30: $5 + 8 + 12 = 25$. Option A is only the class frequency, and option B stops before the class.',
  },
  {
    id: 'tb-st-03', chapter: C, topic: 'Median of grouped data', ref: `${CH} · Median of grouped data`,
    type: 'mcq', complexity: 'medium', marks: 1,
    text: 'Class: 10–20, 20–30, 30–40, 40–50, 50–60 ; Frequency: 6, 9, 13, 8, 4. The median class is',
    options: ['20–30', '30–40', '40–50', '50–60'],
    answer: 'Correct option: B) 30–40. $n = 40$, so $\\frac{n}{2} = 20$. Cumulative frequencies are 6, 15, 28, 36, 40; the first one reaching 20 is 28, which belongs to 30–40. (It also happens to be the modal class, but the median class is found from cumulative frequency.)',
  },
  {
    id: 'tb-st-04', chapter: C, topic: 'Mean of grouped data', ref: `${CH} · Mean of grouped data`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'The number of minutes 30 students spent on homework one evening is shown. Class (minutes): 0–10, 10–20, 20–30, 30–40, 40–50 ; Number of students: 5, 7, 10, 5, 3. Find the mean time using the direct method.',
    answer: 'Class marks: 5, 15, 25, 35, 45. $\\sum f_i x_i = 25 + 105 + 250 + 175 + 135 = 690$, $\\sum f_i = 30$. Mean $= \\frac{690}{30} = 23$ minutes.',
    steps: [
      { step: 'Finds class marks and $\\sum f_i x_i = 690$', marks: 1 },
      { step: 'Gets mean 23 minutes', marks: 1 },
    ],
  },
  {
    id: 'tb-st-05', chapter: C, topic: 'Step-deviation mean', ref: `${CH} · Mean of grouped data`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'The daily electricity use of 50 shops is recorded. Units: 100–120, 120–140, 140–160, 160–180, 180–200 ; Number of shops: 6, 9, 15, 12, 8. Find the mean daily use by the step-deviation method.',
    answer: 'Class marks: 110, 130, 150, 170, 190. Take $a = 150$, $h = 20$, so $u_i = -2, -1, 0, 1, 2$. $\\sum f_i u_i = -12 - 9 + 0 + 12 + 16 = 7$. Mean $= a + h \\cdot \\frac{\\sum f_i u_i}{\\sum f_i} = 150 + 20 \\times \\frac{7}{50} = 152.8$ units.',
    steps: [
      { step: 'Chooses $a = 150$, $h = 20$ and finds $u_i$', marks: 1 },
      { step: 'Gets $\\sum f_i u_i = 7$', marks: 1 },
      { step: 'Gets mean 152.8 units', marks: 1 },
    ],
  },
  {
    id: 'tb-st-06', chapter: C, topic: 'Missing frequency', ref: `${CH} · Mean of grouped data`,
    type: 'short', complexity: 'hard', marks: 3,
    text: 'The mean of the following distribution is 25. Find the missing frequency $p$. Class: 0–10, 10–20, 20–30, 30–40, 40–50 ; Frequency: 6, $p$, 10, 9, 5.',
    answer: 'Class marks: 5, 15, 25, 35, 45. $\\sum f_i = 30 + p$, $\\sum f_i x_i = 30 + 15p + 250 + 315 + 225 = 820 + 15p$. So $\\frac{820 + 15p}{30 + p} = 25$, giving $820 + 15p = 750 + 25p$, so $10p = 70$ and $p = 7$.',
    steps: [
      { step: 'Writes $\\sum f_i = 30 + p$ and $\\sum f_i x_i = 820 + 15p$', marks: 1 },
      { step: 'Sets up $\\frac{820 + 15p}{30 + p} = 25$', marks: 1 },
      { step: 'Gets $p = 7$', marks: 1 },
    ],
  },
  {
    id: 'tb-st-07', chapter: C, topic: 'Mode of grouped data', ref: `${CH} · Mode of grouped data`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'The ages of members of a hiking club are grouped as follows. Age (years): 10–20, 20–30, 30–40, 40–50, 50–60, 60–70 ; Members: 4, 9, 15, 11, 6, 3. Find the modal age.',
    answer: 'Modal class 30–40 (highest frequency 15). $l = 30$, $f_1 = 15$, $f_0 = 9$, $f_2 = 11$, $h = 10$. Mode $= l + \\frac{f_1 - f_0}{2f_1 - f_0 - f_2} \\times h = 30 + \\frac{6}{30 - 20} \\times 10 = 36$ years.',
    steps: [
      { step: 'Identifies modal class 30–40 and the values $l, f_0, f_1, f_2, h$', marks: 1 },
      { step: 'Substitutes correctly in the mode formula', marks: 1 },
      { step: 'Gets mode 36 years', marks: 1 },
    ],
  },
  {
    id: 'tb-st-08', chapter: C, topic: 'Median of grouped data', ref: `${CH} · Median of grouped data`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'The marks (out of 100) of 50 students in a quiz are grouped below. Marks: 40–50, 50–60, 60–70, 70–80, 80–90, 90–100 ; Students: 6, 9, 20, 8, 5, 2. Find the median mark.',
    answer: 'Cumulative frequencies: 6, 15, 35, 43, 48, 50. $\\frac{n}{2} = 25$, so median class is 60–70 with $l = 60$, $cf = 15$, $f = 20$, $h = 10$. Median $= l + \\frac{\\frac{n}{2} - cf}{f} \\times h = 60 + \\frac{10}{20} \\times 10 = 65$.',
    steps: [
      { step: 'Builds cumulative frequencies and finds median class 60–70', marks: 1 },
      { step: 'Substitutes $l = 60, cf = 15, f = 20, h = 10$', marks: 1 },
      { step: 'Gets median 65', marks: 1 },
    ],
  },
  {
    id: 'tb-st-09', chapter: C, topic: 'Missing frequency', ref: `${CH} · Median of grouped data`,
    type: 'long', complexity: 'hard', marks: 5,
    text: 'The distribution below has 50 observations and median 35. Find $a$ and $b$. Class: 10–20, 20–30, 30–40, 40–50, 50–60, 60–70 ; Frequency: 5, $a$, 14, 9, $b$, 4.',
    answer: 'Total: $5 + a + 14 + 9 + b + 4 = 50$, so $a + b = 18$. Median 35 lies in 30–40, so $l = 30$, $f = 14$, $h = 10$, $cf = 5 + a$, $\\frac{n}{2} = 25$. $35 = 30 + \\frac{25 - (5 + a)}{14} \\times 10 \\Rightarrow 5 = \\frac{(20 - a) \\times 10}{14} \\Rightarrow 20 - a = 7 \\Rightarrow a = 13$. Then $b = 5$. Check: cumulative frequency before 30–40 is 18 and after it is 32, so 25 lies in this class.',
    steps: [
      { step: 'Gets $a + b = 18$ from the total', marks: 1 },
      { step: 'Identifies median class 30–40 with $cf = 5 + a$', marks: 1 },
      { step: 'Sets up the median equation correctly', marks: 1 },
      { step: 'Gets $a = 13$', marks: 1 },
      { step: 'Gets $b = 5$', marks: 1 },
    ],
  },
  {
    id: 'tb-st-10', chapter: C, topic: 'Mean, median and mode relation', ref: `${CH} · Mean, median and mode of grouped data`,
    type: 'long', complexity: 'hard', marks: 5,
    text: 'The weekly distance (km) cycled by 50 club members is shown. Distance: 0–20, 20–40, 40–60, 60–80, 80–100 ; Members: 6, 10, 18, 11, 5. Find the mean, median and mode, and check how closely they satisfy $3 \\text{ Median} = \\text{Mode} + 2 \\text{ Mean}$.',
    answer: 'Mean: class marks 10, 30, 50, 70, 90; $\\sum f_i x_i = 60 + 300 + 900 + 770 + 450 = 2480$, mean $= \\frac{2480}{50} = 49.6$ km. Median: cumulative frequencies 6, 16, 34, 45, 50; median class 40–60; median $= 40 + \\frac{25 - 16}{18} \\times 20 = 50$ km. Mode: modal class 40–60; mode $= 40 + \\frac{18 - 10}{36 - 10 - 11} \\times 20 = 40 + \\frac{160}{15} \\approx 50.67$ km. Check: $3 \\times 50 = 150$ and $50.67 + 2 \\times 49.6 = 149.87$, which agree closely, so the relation holds approximately.',
    steps: [
      { step: 'Finds mean 49.6 km with working', marks: 2 },
      { step: 'Finds median 50 km', marks: 1 },
      { step: 'Finds mode about 50.67 km', marks: 1 },
      { step: 'Compares 150 with about 149.87 and concludes the relation holds approximately', marks: 1 },
    ],
  },
];
