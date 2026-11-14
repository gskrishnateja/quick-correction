import type { TextbookQuestion } from '../types.js';

const CH = 'NCERT Class 10 · Ch 13 Statistics';
const C = 'Statistics';

export const NCERT_CH13: TextbookQuestion[] = [
  // Example 1: mean of ungrouped data with frequencies
  {
    id: 'nc-13-ex01', chapter: C, topic: 'Central tendency concepts and ungrouped data', ref: `${CH} · Same skill as Example 1`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'In a general-knowledge quiz scored out of 50, the scores of 25 participants were recorded. Score: 12, 18, 24, 27, 30, 35, 38, 42, 45 ; Number of participants: 2, 3, 4, 3, 5, 2, 3, 2, 1. Find the mean score.',
    answer: 'Products $f_i x_i$: 24, 54, 96, 81, 150, 70, 114, 84, 45. $\\sum f_i x_i = 718$ and $\\sum f_i = 25$. Mean $= \\frac{718}{25} = 28.72$.',
    steps: [
      { step: 'Finds each $f_i x_i$ and $\\sum f_i x_i = 718$', marks: 1 },
      { step: 'Divides by $\\sum f_i = 25$ to get mean 28.72', marks: 1 },
    ],
  },
  // Example 2: mean by all three methods
  {
    id: 'nc-13-ex02', chapter: C, topic: 'Step-deviation mean', ref: `${CH} · Same skill as Example 2`,
    type: 'long', complexity: 'medium', marks: 4,
    text: 'The one-way commuting time of 40 office workers is given. Time (minutes): 10–20, 20–30, 30–40, 40–50, 50–60, 60–70, 70–80 ; Number of workers: 5, 9, 12, 6, 4, 3, 1. Find the mean commuting time by (i) the direct method, (ii) the assumed mean method and (iii) the step-deviation method.',
    answer: 'Class marks $x_i$: 15, 25, 35, 45, 55, 65, 75; $\\sum f_i = 40$.\n(i) $f_i x_i$: 75, 225, 420, 270, 220, 195, 75, so $\\sum f_i x_i = 1480$ and $\\bar{x} = \\frac{1480}{40} = 37$.\n(ii) Take $a = 45$, $d_i = x_i - 45$: −30, −20, −10, 0, 10, 20, 30. $f_i d_i$: −150, −180, −120, 0, 40, 60, 30, so $\\sum f_i d_i = -320$ and $\\bar{x} = 45 + \\frac{-320}{40} = 45 - 8 = 37$.\n(iii) Take $h = 10$, $u_i = \\frac{d_i}{10}$: −3, −2, −1, 0, 1, 2, 3. $f_i u_i$: −15, −18, −12, 0, 4, 6, 3, so $\\sum f_i u_i = -32$ and $\\bar{x} = 45 + 10 \\times \\frac{-32}{40} = 45 - 8 = 37$.\nAll three methods give a mean commuting time of 37 minutes.',
    steps: [
      { step: 'Class marks and direct method: $\\sum f_i x_i = 1480$, mean 37', marks: 1 },
      { step: 'Assumed mean method with $a = 45$: $\\sum f_i d_i = -320$', marks: 1 },
      { step: 'Step-deviation method with $h = 10$: $\\sum f_i u_i = -32$', marks: 1 },
      { step: 'States that each method gives 37 minutes', marks: 1 },
    ],
  },
  // Example 3: step-deviation with unequal classes
  {
    id: 'nc-13-ex03', chapter: C, topic: 'Step-deviation mean', ref: `${CH} · Same skill as Example 3`,
    type: 'long', complexity: 'hard', marks: 4,
    text: 'The total points scored in a season by 45 players of a basketball league are given. Points: 0–40, 40–80, 80–140, 140–200, 200–300, 300–400 ; Number of players: 6, 9, 14, 10, 4, 2. The class sizes are unequal. Find the mean points per player using the step-deviation method with a suitable $a$ and $h$, and say what the mean tells us.',
    answer: 'Class marks $x_i$: 20, 60, 110, 170, 250, 350. Take $a = 170$; then $d_i = x_i - 170$: −150, −110, −60, 0, 80, 180. All $d_i$ are multiples of 10, so take $h = 10$: $u_i$ = −15, −11, −6, 0, 8, 18.\n$f_i u_i$: −90, −99, −84, 0, 32, 36, so $\\sum f_i u_i = -205$ and $\\sum f_i = 45$.\n$\\bar{x} = 170 + 10 \\times \\frac{-205}{45} = 170 - 45.56 = 124.44$.\nSo, on average, a player in this league scored about 124.44 points in the season.',
    steps: [
      { step: 'Finds class marks and chooses $a = 170$, $h = 10$ (a common divisor of the $d_i$)', marks: 1 },
      { step: 'Finds $u_i$ and $f_i u_i$', marks: 1 },
      { step: 'Gets $\\sum f_i u_i = -205$ and mean 124.44', marks: 1 },
      { step: 'Interprets the mean as average points per player', marks: 1 },
    ],
  },

  // Exercise 13.1
  {
    id: 'nc-13-13-1-q01', chapter: C, topic: 'Mean of grouped data', ref: `${CH} · Same skill as Ex 13.1 Q1`,
    type: 'short', complexity: 'easy', marks: 3,
    text: 'A small poultry farm recorded the number of eggs collected each day for 30 days. Eggs per day: 0–4, 4–8, 8–12, 12–16, 16–20, 20–24 ; Number of days: 2, 5, 8, 7, 5, 3. Find the mean number of eggs collected per day. Which method did you use, and why?',
    answer: 'Class marks $x_i$: 2, 6, 10, 14, 18, 22. $f_i x_i$: 4, 30, 80, 98, 90, 66, so $\\sum f_i x_i = 368$, $\\sum f_i = 30$.\nMean $= \\frac{368}{30} \\approx 12.27$ eggs per day.\nThe direct method was used because both the class marks and the frequencies are small, so the products are easy to work out.',
    steps: [
      { step: 'Finds class marks and $\\sum f_i x_i = 368$', marks: 1 },
      { step: 'Gets mean $\\approx 12.27$', marks: 1 },
      { step: 'Names the direct method with the reason (small values)', marks: 1 },
    ],
  },
  {
    id: 'nc-13-13-1-q02', chapter: C, topic: 'Mean of grouped data', ref: `${CH} · Same skill as Ex 13.1 Q2`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'The daily earnings of 60 auto-rickshaw drivers in a town are given. Daily earnings (in ₹): 800–850, 850–900, 900–950, 950–1000, 1000–1050 ; Number of drivers: 10, 15, 13, 12, 10. Find the mean daily earnings using an appropriate method.',
    answer: 'The class marks are large, so use the assumed mean method. Class marks $x_i$: 825, 875, 925, 975, 1025. Take $a = 925$; $d_i$: −100, −50, 0, 50, 100.\n$f_i d_i$: −1000, −750, 0, 600, 1000, so $\\sum f_i d_i = -150$ and $\\sum f_i = 60$.\n$\\bar{x} = 925 + \\frac{-150}{60} = 925 - 2.5 = 922.5$.\nMean daily earnings are ₹922.50.',
    steps: [
      { step: 'Finds class marks and chooses an assumed mean (e.g. $a = 925$)', marks: 1 },
      { step: 'Finds $\\sum f_i d_i = -150$', marks: 1 },
      { step: 'Gets mean ₹922.50', marks: 1 },
    ],
  },
  {
    id: 'nc-13-13-1-q03', chapter: C, topic: 'Missing frequency', ref: `${CH} · Same skill as Ex 13.1 Q3`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'The weekly bus-fare spending of some college students is shown. Weekly spending (in ₹): 40–44, 44–48, 48–52, 52–56, 56–60, 60–64, 64–68 ; Number of students: 5, 8, 10, 12, $k$, 6, 3. The mean weekly spending is ₹54. Find the missing frequency $k$.',
    answer: 'Class marks $x_i$: 42, 46, 50, 54, 58, 62, 66. Take $a = 54$, $h = 4$: $u_i$ = −3, −2, −1, 0, 1, 2, 3.\n$f_i u_i$: −15, −16, −10, 0, $k$, 12, 9, so $\\sum f_i u_i = k - 20$ and $\\sum f_i = 44 + k$.\nSince the mean is 54 $= a$, we need $\\sum f_i u_i = 0$, so $k - 20 = 0$ and $k = 20$.\n(Check: $\\sum f_i x_i = 210 + 368 + 500 + 648 + 1160 + 372 + 198 = 3456$, $\\sum f_i = 64$, $\\frac{3456}{64} = 54$.)',
    steps: [
      { step: 'Finds class marks and sets up $\\sum f_i u_i$ (or $\\sum f_i x_i$) in terms of $k$', marks: 1 },
      { step: 'Forms the equation from mean $= 54$', marks: 1 },
      { step: 'Solves to get $k = 20$', marks: 1 },
    ],
  },
  {
    id: 'nc-13-13-1-q04', chapter: C, topic: 'Step-deviation mean', ref: `${CH} · Same skill as Ex 13.1 Q4`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'The typing speeds of 36 trainees at a computer centre were recorded. Words per minute: 30–34, 34–38, 38–42, 42–46, 46–50, 50–54, 54–58 ; Number of trainees: 2, 5, 6, 9, 7, 4, 3. Find the mean typing speed using a suitable method.',
    answer: 'Use the step-deviation method. Class marks $x_i$: 32, 36, 40, 44, 48, 52, 56. Take $a = 44$, $h = 4$: $u_i$ = −3, −2, −1, 0, 1, 2, 3.\n$f_i u_i$: −6, −10, −6, 0, 7, 8, 9, so $\\sum f_i u_i = 2$ and $\\sum f_i = 36$.\n$\\bar{x} = 44 + 4 \\times \\frac{2}{36} = 44 + 0.22 = 44.22$ words per minute.',
    steps: [
      { step: 'Class marks, $a = 44$, $h = 4$ and the $u_i$', marks: 1 },
      { step: 'Finds $\\sum f_i u_i = 2$', marks: 1 },
      { step: 'Gets mean $\\approx 44.22$ words per minute', marks: 1 },
    ],
  },
  {
    id: 'nc-13-13-1-q05', chapter: C, topic: 'Step-deviation mean', ref: `${CH} · Same skill as Ex 13.1 Q5`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A seed company counted the seeds in 400 packets. Number of seeds: 30–32, 33–35, 36–38, 39–41, 42–44 ; Number of packets: 20, 90, 150, 110, 30. Find the mean number of seeds per packet. Which method did you choose?',
    answer: 'Class marks $x_i$: 31, 34, 37, 40, 43 (they differ by 3). The frequencies are large, so the step-deviation method is convenient. Take $a = 37$, $h = 3$: $u_i$ = −2, −1, 0, 1, 2.\n$f_i u_i$: −40, −90, 0, 110, 60, so $\\sum f_i u_i = 40$ and $\\sum f_i = 400$.\n$\\bar{x} = 37 + 3 \\times \\frac{40}{400} = 37 + 0.3 = 37.3$ seeds per packet.',
    steps: [
      { step: 'Finds class marks 31, 34, … and chooses step-deviation with $a = 37$, $h = 3$', marks: 1 },
      { step: 'Finds $\\sum f_i u_i = 40$', marks: 1 },
      { step: 'Gets mean 37.3 seeds', marks: 1 },
    ],
  },
  {
    id: 'nc-13-13-1-q06', chapter: C, topic: 'Step-deviation mean', ref: `${CH} · Same skill as Ex 13.1 Q6`,
    type: 'short', complexity: 'easy', marks: 3,
    text: 'The monthly mobile-recharge spending of 30 students is given. Spending (in ₹): 200–250, 250–300, 300–350, 350–400, 400–450 ; Number of students: 3, 7, 11, 6, 3. Find the mean monthly spending by a suitable method.',
    answer: 'Use the step-deviation method. Class marks $x_i$: 225, 275, 325, 375, 425. Take $a = 325$, $h = 50$: $u_i$ = −2, −1, 0, 1, 2.\n$f_i u_i$: −6, −7, 0, 6, 6, so $\\sum f_i u_i = -1$ and $\\sum f_i = 30$.\n$\\bar{x} = 325 + 50 \\times \\frac{-1}{30} = 325 - 1.67 = 323.33$.\nMean monthly spending is about ₹323.33.',
    steps: [
      { step: 'Class marks, $a = 325$, $h = 50$ and the $u_i$', marks: 1 },
      { step: 'Finds $\\sum f_i u_i = -1$', marks: 1 },
      { step: 'Gets mean ≈ ₹323.33', marks: 1 },
    ],
  },
  {
    id: 'nc-13-13-1-q07', chapter: C, topic: 'Mean of grouped data', ref: `${CH} · Same skill as Ex 13.1 Q7`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'The concentration of fine dust in the air (in mg per cubic metre) was measured at 30 points in an industrial area. Concentration: 0.10–0.15, 0.15–0.20, 0.20–0.25, 0.25–0.30, 0.30–0.35, 0.35–0.40 ; Number of points: 3, 7, 10, 6, 3, 1. Find the mean concentration.',
    answer: 'Class marks $x_i$: 0.125, 0.175, 0.225, 0.275, 0.325, 0.375.\n$f_i x_i$: 0.375, 1.225, 2.25, 1.65, 0.975, 0.375, so $\\sum f_i x_i = 6.85$ and $\\sum f_i = 30$.\nMean $= \\frac{6.85}{30} \\approx 0.228$ mg per cubic metre.\n(Step-deviation with $a = 0.225$, $h = 0.05$ gives $\\sum f_i u_i = 1$ and the same mean $0.225 + 0.05 \\times \\frac{1}{30} \\approx 0.228$.)',
    steps: [
      { step: 'Finds the decimal class marks', marks: 1 },
      { step: 'Finds $\\sum f_i x_i = 6.85$ (or $\\sum f_i u_i = 1$)', marks: 1 },
      { step: 'Gets mean ≈ 0.228', marks: 1 },
    ],
  },
  {
    id: 'nc-13-13-1-q08', chapter: C, topic: 'Mean of grouped data', ref: `${CH} · Same skill as Ex 13.1 Q8`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A manager recorded the overtime hours worked in a month by 50 employees. Overtime (hours): 0–5, 5–12, 12–18, 18–26, 26–34, 34–40 ; Number of employees: 9, 12, 10, 8, 7, 4. Find the mean overtime per employee.',
    answer: 'The classes are unequal, so find each class mark separately: 2.5, 8.5, 15, 22, 30, 37.\n$f_i x_i$: 22.5, 102, 150, 176, 210, 148, so $\\sum f_i x_i = 808.5$ and $\\sum f_i = 50$.\nMean $= \\frac{808.5}{50} = 16.17$ hours.',
    steps: [
      { step: 'Finds class marks of the unequal classes', marks: 1 },
      { step: 'Finds $\\sum f_i x_i = 808.5$', marks: 1 },
      { step: 'Gets mean 16.17 hours', marks: 1 },
    ],
  },
  {
    id: 'nc-13-13-1-q09', chapter: C, topic: 'Mean of grouped data', ref: `${CH} · Same skill as Ex 13.1 Q9`,
    type: 'short', complexity: 'easy', marks: 3,
    text: 'The attendance percentages of 40 students over a term are given. Attendance (%): 50–60, 60–70, 70–80, 80–90, 90–100 ; Number of students: 4, 7, 13, 10, 6. Find the mean attendance percentage.',
    answer: 'Class marks $x_i$: 55, 65, 75, 85, 95. Take $a = 75$, $h = 10$: $u_i$ = −2, −1, 0, 1, 2.\n$f_i u_i$: −8, −7, 0, 10, 12, so $\\sum f_i u_i = 7$ and $\\sum f_i = 40$.\n$\\bar{x} = 75 + 10 \\times \\frac{7}{40} = 75 + 1.75 = 76.75$%.\n(Direct method: $\\sum f_i x_i = 3070$, $\\frac{3070}{40} = 76.75$.)',
    steps: [
      { step: 'Finds class marks and sets up a method', marks: 1 },
      { step: 'Finds $\\sum f_i u_i = 7$ (or $\\sum f_i x_i = 3070$)', marks: 1 },
      { step: 'Gets mean 76.75%', marks: 1 },
    ],
  },

  // Example 4: mode of ungrouped data
  {
    id: 'nc-13-ex04', chapter: C, topic: 'Central tendency concepts and ungrouped data', ref: `${CH} · Same skill as Example 4`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'The goals scored by a hockey team in 12 matches were: 1, 3, 0, 2, 3, 4, 1, 3, 2, 0, 3, 5. Make a frequency table and find the mode.',
    answer: 'Goals: 0, 1, 2, 3, 4, 5 ; Number of matches: 2, 2, 2, 4, 1, 1.\nThe highest frequency is 4, for 3 goals. So the mode is 3 goals.',
    steps: [
      { step: 'Makes the frequency table', marks: 1 },
      { step: 'Identifies mode = 3', marks: 1 },
    ],
  },
  // Example 5: mode of grouped data
  {
    id: 'nc-13-ex05', chapter: C, topic: 'Mode of grouped data', ref: `${CH} · Same skill as Example 5`,
    type: 'short', complexity: 'easy', marks: 3,
    text: 'A survey of 25 households recorded the number of mobile phones in each. Number of phones: 0–2, 2–4, 4–6, 6–8, 8–10 ; Number of households: 6, 10, 5, 3, 1. Find the mode of the data.',
    answer: 'Maximum frequency is 10, so the modal class is 2–4. $l = 2$, $h = 2$, $f_1 = 10$, $f_0 = 6$, $f_2 = 5$.\nMode $= l + \\frac{f_1 - f_0}{2f_1 - f_0 - f_2} \\times h = 2 + \\frac{10 - 6}{20 - 6 - 5} \\times 2 = 2 + \\frac{8}{9} \\approx 2.89$.',
    steps: [
      { step: 'Identifies modal class 2–4 and the values $l, h, f_1, f_0, f_2$', marks: 1 },
      { step: 'Substitutes correctly in the mode formula', marks: 1 },
      { step: 'Gets mode ≈ 2.89', marks: 1 },
    ],
  },
  // Example 6: mode and compare with mean
  {
    id: 'nc-13-ex06', chapter: C, topic: 'Mode of grouped data', ref: `${CH} · Same skill as Example 6`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'The marks of 40 students in a science test are given. Marks: 0–20, 20–40, 40–60, 60–80, 80–100 ; Number of students: 4, 8, 14, 9, 5. The mean of this distribution is 51.5. Find the mode, and compare and interpret the mode and the mean.',
    answer: 'Modal class 40–60: $l = 40$, $h = 20$, $f_1 = 14$, $f_0 = 8$, $f_2 = 9$.\nMode $= 40 + \\frac{14 - 8}{28 - 8 - 9} \\times 20 = 40 + \\frac{120}{11} \\approx 50.91$.\nThe mode (≈ 50.91) is slightly less than the mean (51.5). The largest group of students scored around 50.91, while on average a student scored 51.5.\n(Check of the mean: $\\sum f_i x_i = 40 + 240 + 700 + 630 + 450 = 2060$, $\\frac{2060}{40} = 51.5$.)',
    steps: [
      { step: 'Identifies modal class and the values for the formula', marks: 1 },
      { step: 'Gets mode ≈ 50.91', marks: 1 },
      { step: 'Compares with mean 51.5 and interprets both', marks: 1 },
    ],
  },

  // Exercise 13.2
  {
    id: 'nc-13-13-2-q01', chapter: C, topic: 'Mode of grouped data', ref: `${CH} · Same skill as Ex 13.2 Q1`,
    type: 'long', complexity: 'medium', marks: 4,
    text: 'The ages of visitors to a science museum on one day are given. Age (years): 10–20, 20–30, 30–40, 40–50, 50–60, 60–70 ; Number of visitors: 8, 15, 24, 28, 13, 7. Find the mode and the mean of the data. Compare and interpret the two measures.',
    answer: 'Mode: modal class 40–50, $l = 40$, $h = 10$, $f_1 = 28$, $f_0 = 24$, $f_2 = 13$.\nMode $= 40 + \\frac{28 - 24}{56 - 24 - 13} \\times 10 = 40 + \\frac{40}{19} \\approx 42.11$ years.\nMean: class marks 15, 25, 35, 45, 55, 65; take $a = 45$, $h = 10$: $u_i$ = −3, −2, −1, 0, 1, 2. $f_i u_i$: −24, −30, −24, 0, 13, 14, so $\\sum f_i u_i = -51$, $\\sum f_i = 95$.\n$\\bar{x} = 45 + 10 \\times \\frac{-51}{95} \\approx 45 - 5.37 = 39.63$ years.\nThe most common age of a visitor is about 42.11 years, while the average age is about 39.63 years. The mean is lower because of the younger visitors in the first classes.',
    steps: [
      { step: 'Finds mode ≈ 42.11 years', marks: 1 },
      { step: 'Sets up step-deviation table, $\\sum f_i u_i = -51$', marks: 1 },
      { step: 'Gets mean ≈ 39.63 years', marks: 1 },
      { step: 'Compares and interprets mode and mean', marks: 1 },
    ],
  },
  {
    id: 'nc-13-13-2-q02', chapter: C, topic: 'Mode of grouped data', ref: `${CH} · Same skill as Ex 13.2 Q2`,
    type: 'short', complexity: 'easy', marks: 3,
    text: 'A company tested how far 210 electric scooters travel on one full charge. Distance (km): 20–30, 30–40, 40–50, 50–60, 60–70, 70–80 ; Number of scooters: 12, 30, 48, 57, 40, 23. Find the modal distance.',
    answer: 'Modal class 50–60: $l = 50$, $h = 10$, $f_1 = 57$, $f_0 = 48$, $f_2 = 40$.\nMode $= 50 + \\frac{57 - 48}{114 - 48 - 40} \\times 10 = 50 + \\frac{90}{26} \\approx 53.46$ km.',
    steps: [
      { step: 'Identifies modal class and values', marks: 1 },
      { step: 'Substitutes in the formula', marks: 1 },
      { step: 'Gets modal distance ≈ 53.46 km', marks: 1 },
    ],
  },
  {
    id: 'nc-13-13-2-q03', chapter: C, topic: 'Mode of grouped data', ref: `${CH} · Same skill as Ex 13.2 Q3`,
    type: 'long', complexity: 'medium', marks: 4,
    text: 'The monthly savings of 150 families in a town are given. Savings (in ₹): 2000–3000, 3000–4000, 4000–5000, 5000–6000, 6000–7000, 7000–8000, 8000–9000, 9000–10000 ; Number of families: 18, 30, 26, 22, 20, 15, 12, 7. Find the modal monthly savings. Also find the mean monthly savings.',
    answer: 'Mode: modal class 3000–4000, $l = 3000$, $h = 1000$, $f_1 = 30$, $f_0 = 18$, $f_2 = 26$.\nMode $= 3000 + \\frac{30 - 18}{60 - 18 - 26} \\times 1000 = 3000 + \\frac{12}{16} \\times 1000 = 3750$. Modal savings ₹3750.\nMean: class marks 2500, 3500, …, 9500; take $a = 5500$, $h = 1000$: $u_i$ = −3, −2, −1, 0, 1, 2, 3, 4. $f_i u_i$: −54, −60, −26, 0, 20, 30, 36, 28, so $\\sum f_i u_i = -26$, $\\sum f_i = 150$.\n$\\bar{x} = 5500 + 1000 \\times \\frac{-26}{150} \\approx 5500 - 173.33 = 5326.67$. Mean savings ≈ ₹5326.67.',
    steps: [
      { step: 'Identifies modal class and values', marks: 1 },
      { step: 'Gets mode ₹3750', marks: 1 },
      { step: 'Step-deviation table with $\\sum f_i u_i = -26$', marks: 1 },
      { step: 'Gets mean ≈ ₹5326.67', marks: 1 },
    ],
  },
  {
    id: 'nc-13-13-2-q04', chapter: C, topic: 'Mode of grouped data', ref: `${CH} · Same skill as Ex 13.2 Q4`,
    type: 'long', complexity: 'medium', marks: 4,
    text: 'The number of patients seen per doctor per day in 36 district clinics is given. Patients per doctor: 10–15, 15–20, 20–25, 25–30, 30–35, 35–40, 40–45, 45–50 ; Number of clinics: 2, 7, 10, 12, 4, 0, 0, 1. Find the mode and the mean of the data, and interpret the two measures.',
    answer: 'Mode: modal class 25–30, $l = 25$, $h = 5$, $f_1 = 12$, $f_0 = 10$, $f_2 = 4$.\nMode $= 25 + \\frac{12 - 10}{24 - 10 - 4} \\times 5 = 25 + 1 = 26$.\nMean: class marks 12.5, 17.5, …, 47.5; take $a = 27.5$, $h = 5$: $u_i$ = −3, −2, −1, 0, 1, 2, 3, 4. $f_i u_i$: −6, −14, −10, 0, 4, 0, 0, 4, so $\\sum f_i u_i = -22$, $\\sum f_i = 36$.\n$\\bar{x} = 27.5 + 5 \\times \\frac{-22}{36} \\approx 27.5 - 3.06 = 24.44$.\nIn most clinics a doctor sees about 26 patients a day, while on average a doctor sees about 24.44 patients a day.',
    steps: [
      { step: 'Finds mode = 26', marks: 1 },
      { step: 'Sets up the mean table, handling the zero frequencies', marks: 1 },
      { step: 'Gets mean ≈ 24.44', marks: 1 },
      { step: 'Interprets mode and mean', marks: 1 },
    ],
  },
  {
    id: 'nc-13-13-2-q05', chapter: C, topic: 'Mode of grouped data', ref: `${CH} · Same skill as Ex 13.2 Q5`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'In a fitness study, the number of steps walked in a day by 50 participants was recorded. Steps: 4000–5000, 5000–6000, 6000–7000, 7000–8000, 8000–9000, 9000–10000, 10000–11000, 11000–12000 ; Number of participants: 3, 16, 10, 8, 6, 4, 2, 1. Find the mode of the data.',
    answer: 'Modal class 5000–6000: $l = 5000$, $h = 1000$, $f_1 = 16$, $f_0 = 3$, $f_2 = 10$.\nMode $= 5000 + \\frac{16 - 3}{32 - 3 - 10} \\times 1000 = 5000 + \\frac{13000}{19} \\approx 5684.21$ steps.',
    steps: [
      { step: 'Identifies modal class and values', marks: 1 },
      { step: 'Substitutes in the formula', marks: 1 },
      { step: 'Gets mode ≈ 5684.21 steps', marks: 1 },
    ],
  },
  {
    id: 'nc-13-13-2-q06', chapter: C, topic: 'Mode of grouped data', ref: `${CH} · Same skill as Ex 13.2 Q6`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A bank counted the customers arriving at a counter in each of 120 half-hour periods. Number of customers: 0–10, 10–20, 20–30, 30–40, 40–50, 50–60, 60–70, 70–80 ; Number of periods: 6, 12, 15, 14, 22, 18, 20, 13. Find the mode of the data.',
    answer: 'The highest frequency is 22, so the modal class is 40–50 (not 60–70, whose frequency is 20). $l = 40$, $h = 10$, $f_1 = 22$, $f_0 = 14$, $f_2 = 18$.\nMode $= 40 + \\frac{22 - 14}{44 - 14 - 18} \\times 10 = 40 + \\frac{80}{12} \\approx 46.67$ customers.',
    steps: [
      { step: 'Identifies modal class 40–50 and values', marks: 1 },
      { step: 'Substitutes in the formula', marks: 1 },
      { step: 'Gets mode ≈ 46.67', marks: 1 },
    ],
  },

  // Example 7: median from a less-than cumulative table
  {
    id: 'nc-13-ex07', chapter: C, topic: 'Cumulative frequency tables', ref: `${CH} · Same skill as Example 7`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A courier office recorded the weights of 60 parcels as a less-than cumulative frequency table. Weight (kg): less than 2, less than 4, less than 6, less than 8, less than 10, less than 12 ; Number of parcels: 5, 13, 27, 44, 53, 60. Find the median weight.',
    answer: 'Convert to classes. Class: 0–2, 2–4, 4–6, 6–8, 8–10, 10–12 ; Frequency: 5, 8, 14, 17, 9, 7 ; cf: 5, 13, 27, 44, 53, 60.\n$n = 60$, $\\frac{n}{2} = 30$; the first cf above 30 is 44, so the median class is 6–8. $l = 6$, $cf = 27$, $f = 17$, $h = 2$.\nMedian $= 6 + \\frac{30 - 27}{17} \\times 2 = 6 + \\frac{6}{17} \\approx 6.35$ kg.',
    steps: [
      { step: 'Converts the cumulative table to class frequencies', marks: 1 },
      { step: 'Identifies median class 6–8 with $l, cf, f, h$', marks: 1 },
      { step: 'Gets median ≈ 6.35 kg', marks: 1 },
    ],
  },
  // Example 8: missing frequencies from median and total
  {
    id: 'nc-13-ex08', chapter: C, topic: 'Missing frequency', ref: `${CH} · Same skill as Example 8`,
    type: 'long', complexity: 'hard', marks: 4,
    text: 'The median of the following distribution is 275 and the total frequency is 100. Find $x$ and $y$. Class: 0–50, 50–100, 100–150, 150–200, 200–250, 250–300, 300–350, 350–400, 400–450, 450–500 ; Frequency: 3, 6, $x$, 10, 15, 22, $y$, 8, 6, 4.',
    answer: 'Total: $3 + 6 + x + 10 + 15 + 22 + y + 8 + 6 + 4 = 74 + x + y = 100$, so $x + y = 26$ … (1).\nCumulative frequencies: 3, 9, $9 + x$, $19 + x$, $34 + x$, $56 + x$, …\nThe median 275 lies in 250–300, so $l = 250$, $f = 22$, $cf = 34 + x$, $h = 50$, $\\frac{n}{2} = 50$.\n$275 = 250 + \\frac{50 - (34 + x)}{22} \\times 50$, so $25 \\times 22 = (16 - x) \\times 50$, giving $550 = 800 - 50x$ and $x = 5$.\nFrom (1), $y = 21$.',
    steps: [
      { step: 'Uses total frequency: $x + y = 26$', marks: 1 },
      { step: 'Writes cumulative frequencies and identifies median class 250–300', marks: 1 },
      { step: 'Substitutes in the median formula and solves $x = 5$', marks: 1 },
      { step: 'Finds $y = 21$', marks: 1 },
    ],
  },

  // Exercise 13.3
  {
    id: 'nc-13-13-3-q01', chapter: C, topic: 'Mean, median and mode relation', ref: `${CH} · Same skill as Ex 13.3 Q1`,
    type: 'long', complexity: 'hard', marks: 5,
    text: 'The daily water use of 70 households in a housing society is given. Water used (litres): 80–100, 100–120, 120–140, 140–160, 160–180, 180–200, 200–220 ; Number of households: 5, 8, 12, 18, 14, 9, 4. Work out the median, the mean and the mode, and comment on how they compare.',
    answer: 'cf: 5, 13, 25, 43, 57, 66, 70.\nMedian: $\\frac{n}{2} = 35$, median class 140–160, $l = 140$, $cf = 25$, $f = 18$, $h = 20$. Median $= 140 + \\frac{35 - 25}{18} \\times 20 \\approx 140 + 11.11 = 151.11$ litres.\nMean: class marks 90, 110, …, 210; $a = 150$, $h = 20$: $u_i$ = −3, −2, −1, 0, 1, 2, 3. $f_i u_i$: −15, −16, −12, 0, 14, 18, 12, so $\\sum f_i u_i = 1$. Mean $= 150 + 20 \\times \\frac{1}{70} \\approx 150.29$ litres.\nMode: modal class 140–160, $f_1 = 18$, $f_0 = 12$, $f_2 = 14$. Mode $= 140 + \\frac{18 - 12}{36 - 12 - 14} \\times 20 = 140 + 12 = 152$ litres.\nAll three are close (mean ≈ 150.29 < median ≈ 151.11 < mode = 152), so the data is nearly symmetric. They roughly fit $3 \\text{ Median} \\approx \\text{Mode} + 2 \\text{ Mean}$: $453.3 \\approx 452.6$.',
    steps: [
      { step: 'Cumulative frequencies and median class', marks: 1 },
      { step: 'Median ≈ 151.11 litres', marks: 1 },
      { step: 'Mean ≈ 150.29 litres', marks: 1 },
      { step: 'Mode = 152 litres', marks: 1 },
      { step: 'Compares the three measures', marks: 1 },
    ],
  },
  {
    id: 'nc-13-13-3-q02', chapter: C, topic: 'Missing frequency', ref: `${CH} · Same skill as Ex 13.3 Q2`,
    type: 'long', complexity: 'medium', marks: 4,
    text: 'The median of the distribution below is 50. Find $x$ and $y$. Class: 0–20, 20–40, 40–60, 60–80, 80–100, 100–120 ; Frequency: 6, $x$, 18, 14, $y$, 4 ; Total frequency: 60.',
    answer: 'Total: $6 + x + 18 + 14 + y + 4 = 60$, so $x + y = 18$ … (1).\ncf: 6, $6 + x$, $24 + x$, …. The median 50 lies in 40–60, so $l = 40$, $cf = 6 + x$, $f = 18$, $h = 20$, $\\frac{n}{2} = 30$.\n$50 = 40 + \\frac{30 - (6 + x)}{18} \\times 20$, so $10 \\times 18 = (24 - x) \\times 20$, giving $180 = 480 - 20x$ and $x = 15$.\nFrom (1), $y = 3$.',
    steps: [
      { step: 'Uses total: $x + y = 18$', marks: 1 },
      { step: 'Identifies median class 40–60 and $cf = 6 + x$', marks: 1 },
      { step: 'Solves median equation to get $x = 15$', marks: 1 },
      { step: 'Finds $y = 3$', marks: 1 },
    ],
  },
  {
    id: 'nc-13-13-3-q03', chapter: C, topic: 'Cumulative frequency tables', ref: `${CH} · Same skill as Ex 13.3 Q3`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'Every one of 120 runners in a 10 km fun-run took at least 35 minutes but less than 80 minutes. Finishing time (minutes): below 40, below 45, below 50, below 55, below 60, below 65, below 70, below 75, below 80 ; Number of runners: 3, 10, 28, 54, 88, 104, 112, 117, 120. Find the median finishing time.',
    answer: 'Classes and frequencies: 35–40: 3, 40–45: 7, 45–50: 18, 50–55: 26, 55–60: 34, 60–65: 16, 65–70: 8, 70–75: 5, 75–80: 3.\n$n = 120$, $\\frac{n}{2} = 60$; the first cf above 60 is 88, so the median class is 55–60. $l = 55$, $cf = 54$, $f = 34$, $h = 5$.\nMedian $= 55 + \\frac{60 - 54}{34} \\times 5 = 55 + \\frac{30}{34} \\approx 55.88$ minutes.',
    steps: [
      { step: 'Converts to classes (first class 35–40) with frequencies', marks: 1 },
      { step: 'Identifies median class 55–60 and the values', marks: 1 },
      { step: 'Gets median ≈ 55.88 minutes', marks: 1 },
    ],
  },
  {
    id: 'nc-13-13-3-q04', chapter: C, topic: 'Median of grouped data', ref: `${CH} · Same skill as Ex 13.3 Q4`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'The weights of 50 apples, measured to the nearest gram, are given. Weight (g): 101–110, 111–120, 121–130, 131–140, 141–150, 151–160, 161–170 ; Number of apples: 4, 6, 10, 13, 9, 5, 3. Find the median weight.',
    answer: 'The classes are not continuous, so subtract 0.5 from each lower limit and add 0.5 to each upper limit: 100.5–110.5, 110.5–120.5, …, 160.5–170.5.\ncf: 4, 10, 20, 33, 42, 47, 50. $\\frac{n}{2} = 25$, so the median class is 130.5–140.5. $l = 130.5$, $cf = 20$, $f = 13$, $h = 10$.\nMedian $= 130.5 + \\frac{25 - 20}{13} \\times 10 \\approx 130.5 + 3.85 = 134.35$ g.',
    steps: [
      { step: 'Converts to continuous classes', marks: 1 },
      { step: 'Cumulative frequencies and median class 130.5–140.5', marks: 1 },
      { step: 'Gets median ≈ 134.35 g', marks: 1 },
    ],
  },
  {
    id: 'nc-13-13-3-q05', chapter: C, topic: 'Median of grouped data', ref: `${CH} · Same skill as Ex 13.3 Q5`,
    type: 'short', complexity: 'easy', marks: 3,
    text: 'A transport company recorded the distance covered by 300 tyres before they needed replacing. Distance (km): 20000–25000, 25000–30000, 30000–35000, 35000–40000, 40000–45000, 45000–50000, 50000–55000 ; Number of tyres: 12, 40, 55, 70, 58, 40, 25. Find the median distance.',
    answer: 'cf: 12, 52, 107, 177, 235, 275, 300. $\\frac{n}{2} = 150$, so the median class is 35000–40000. $l = 35000$, $cf = 107$, $f = 70$, $h = 5000$.\nMedian $= 35000 + \\frac{150 - 107}{70} \\times 5000 \\approx 35000 + 3071.43 = 38071.43$ km.',
    steps: [
      { step: 'Cumulative frequencies', marks: 1 },
      { step: 'Median class and values', marks: 1 },
      { step: 'Gets median ≈ 38071.43 km', marks: 1 },
    ],
  },
  {
    id: 'nc-13-13-3-q06', chapter: C, topic: 'Median of grouped data', ref: `${CH} · Same skill as Ex 13.3 Q6`,
    type: 'long', complexity: 'hard', marks: 5,
    text: 'An editor counted the number of words in 100 sentences of a story. Words per sentence: 0–3, 3–6, 6–9, 9–12, 12–15, 15–18 ; Number of sentences: 5, 22, 38, 20, 9, 6. Find the median number of words per sentence, the mean number of words, and the modal sentence length.',
    answer: 'cf: 5, 27, 65, 85, 94, 100.\nMedian: $\\frac{n}{2} = 50$, median class 6–9, $l = 6$, $cf = 27$, $f = 38$, $h = 3$. Median $= 6 + \\frac{50 - 27}{38} \\times 3 \\approx 7.82$ words.\nMean: class marks 1.5, 4.5, 7.5, 10.5, 13.5, 16.5; $a = 7.5$, $h = 3$: $u_i$ = −2, −1, 0, 1, 2, 3. $f_i u_i$: −10, −22, 0, 20, 18, 18, so $\\sum f_i u_i = 24$. Mean $= 7.5 + 3 \\times \\frac{24}{100} = 8.22$ words.\nMode: modal class 6–9, $f_1 = 38$, $f_0 = 22$, $f_2 = 20$. Mode $= 6 + \\frac{38 - 22}{76 - 22 - 20} \\times 3 = 6 + \\frac{48}{34} \\approx 7.41$ words.',
    steps: [
      { step: 'Cumulative frequencies and median class', marks: 1 },
      { step: 'Median ≈ 7.82', marks: 1 },
      { step: 'Step-deviation table, $\\sum f_i u_i = 24$', marks: 1 },
      { step: 'Mean = 8.22', marks: 1 },
      { step: 'Mode ≈ 7.41', marks: 1 },
    ],
  },
  {
    id: 'nc-13-13-3-q07', chapter: C, topic: 'Median of grouped data', ref: `${CH} · Same skill as Ex 13.3 Q7`,
    type: 'short', complexity: 'easy', marks: 3,
    text: 'The heights of 36 saplings in a nursery are given. Height (cm): 20–25, 25–30, 30–35, 35–40, 40–45, 45–50, 50–55 ; Number of saplings: 3, 5, 8, 9, 6, 3, 2. Find the median height.',
    answer: 'cf: 3, 8, 16, 25, 31, 34, 36. $\\frac{n}{2} = 18$, so the median class is 35–40. $l = 35$, $cf = 16$, $f = 9$, $h = 5$.\nMedian $= 35 + \\frac{18 - 16}{9} \\times 5 = 35 + \\frac{10}{9} \\approx 36.11$ cm.',
    steps: [
      { step: 'Cumulative frequencies', marks: 1 },
      { step: 'Median class 35–40 and values', marks: 1 },
      { step: 'Gets median ≈ 36.11 cm', marks: 1 },
    ],
  },
];
