import type { TextbookQuestion } from '../types.js';

const R = 'NCERT Class 10 · Ch 3 Pair of Linear Equations in Two Variables · Same skill as';
const C = 'Pair of Linear Equations';

export const NCERT_CH03: TextbookQuestion[] = [
  {
    id: 'nc-03-ex01', chapter: C, topic: 'Graphical solution', ref: `${R} Example 1`,
    type: 'short', complexity: 'easy', marks: 3,
    text: 'Check graphically whether the pair $2x + y = 8$ and $x - y = 1$ is consistent. If it is, find the solution from the graph.',
    answer: 'For $2x + y = 8$: $(0, 8)$ and $(4, 0)$ lie on the line. For $x - y = 1$: $(1, 0)$ and $(3, 2)$ lie on the line. Plotting and joining each pair of points, the two lines meet at $(3, 2)$. Since they intersect, the pair is consistent, with unique solution $x = 3$, $y = 2$. (Check: $6 + 2 = 8$ and $3 - 2 = 1$.)',
    steps: [
      { step: 'Finds two points on each line', marks: 1 },
      { step: 'Plots both lines and reads the intersection $(3, 2)$', marks: 1 },
      { step: 'States the pair is consistent with $x = 3$, $y = 2$', marks: 1 },
    ],
  },
  {
    id: 'nc-03-ex02', chapter: C, topic: 'Consistency conditions', ref: `${R} Example 2`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'Find whether the pair $3x - 4y + 2 = 0$ and $\\frac{9}{2}x - 6y + 3 = 0$ has no solution, a unique solution or infinitely many solutions.',
    answer: 'Multiplying the second equation by $\\frac{2}{3}$ gives $3x - 4y + 2 = 0$, which is the first equation. (Equivalently $\\frac{a_1}{a_2} = \\frac{3}{9/2} = \\frac{2}{3}$, $\\frac{b_1}{b_2} = \\frac{-4}{-6} = \\frac{2}{3}$, $\\frac{c_1}{c_2} = \\frac{2}{3}$.) The lines coincide, so there are infinitely many solutions.',
    steps: [
      { step: 'Shows the second equation is a multiple of the first', marks: 1 },
      { step: 'Concludes coincident lines, infinitely many solutions', marks: 1 },
    ],
  },
  {
    id: 'nc-03-ex03', chapter: C, topic: 'Word problems', ref: `${R} Example 3`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'At a plant nursery, Kabir bought some rose plants and some jasmine plants. The number of jasmine plants is $3$ less than three times the number of rose plants. It is also $5$ less than four times the number of rose plants. Form a pair of linear equations and solve it graphically to find how many of each he bought.',
    answer: 'Let the number of rose plants be $x$ and jasmine plants be $y$. Then $y = 3x - 3$ and $y = 4x - 5$. Points on the first line: $(1, 0)$, $(2, 3)$. Points on the second line: $(1, -1)$, $(2, 3)$. The lines meet at $(2, 3)$. So Kabir bought $2$ rose plants and $3$ jasmine plants. (Check: $3 \\times 2 - 3 = 3$ and $4 \\times 2 - 5 = 3$.)',
    steps: [
      { step: 'Forms $y = 3x - 3$ and $y = 4x - 5$', marks: 1 },
      { step: 'Plots both lines using two points each', marks: 1 },
      { step: 'Reads the intersection $(2, 3)$: 2 rose, 3 jasmine', marks: 1 },
    ],
  },

  // Exercise 3.1
  {
    id: 'nc-03-3-1-q01', chapter: C, topic: 'Graphical solution', ref: `${R} Ex 3.1 Q1`,
    type: 'long', complexity: 'medium', marks: 4,
    text: 'Form a pair of linear equations for each situation and solve it graphically. (i) A fruit basket holds $12$ fruits, all apples or oranges. There are $2$ more apples than oranges. How many of each are there? (ii) $4$ mugs and $3$ plates cost ₹$290$, while $3$ mugs and $4$ plates cost ₹$270$. Find the cost of one mug and one plate.',
    answer: '(i) Let apples $= a$, oranges $= o$. Then $a + o = 12$ and $a - o = 2$. Points: $a + o = 12$ through $(12, 0)$, $(6, 6)$; $a - o = 2$ through $(2, 0)$, $(7, 5)$. The lines meet at $(7, 5)$: $7$ apples and $5$ oranges. (ii) Let a mug cost ₹$m$ and a plate ₹$p$. Then $4m + 3p = 290$ and $3m + 4p = 270$. Points: first line through $(50, 30)$ and $(20, 70)$; second through $(50, 30)$ and $(90, 0)$. The lines meet at $(50, 30)$: a mug costs ₹$50$ and a plate ₹$30$. (Check: $200 + 90 = 290$, $150 + 120 = 270$.)',
    steps: [
      { step: '(i) Forms $a + o = 12$, $a - o = 2$', marks: 1 },
      { step: '(i) Graphs and gets 7 apples, 5 oranges', marks: 1 },
      { step: '(ii) Forms $4m + 3p = 290$, $3m + 4p = 270$', marks: 1 },
      { step: '(ii) Graphs and gets mug ₹50, plate ₹30', marks: 1 },
    ],
  },
  {
    id: 'nc-03-3-1-q02', chapter: C, topic: 'Consistency conditions', ref: `${R} Ex 3.1 Q2`,
    type: 'short', complexity: 'easy', marks: 3,
    text: 'By comparing the ratios $\\frac{a_1}{a_2}$, $\\frac{b_1}{b_2}$ and $\\frac{c_1}{c_2}$, decide whether the lines in each pair intersect, are parallel or coincide: (i) $3x + 2y - 7 = 0$ and $5x - 4y + 1 = 0$ (ii) $4x - 6y + 10 = 0$ and $6x - 9y + 15 = 0$ (iii) $8x + 4y - 3 = 0$ and $2x + y + 5 = 0$',
    answer: '(i) $\\frac{a_1}{a_2} = \\frac{3}{5}$, $\\frac{b_1}{b_2} = \\frac{2}{-4} = -\\frac{1}{2}$. These differ, so the lines intersect at a point. (ii) $\\frac{4}{6} = \\frac{2}{3}$, $\\frac{-6}{-9} = \\frac{2}{3}$, $\\frac{10}{15} = \\frac{2}{3}$. All equal, so the lines coincide. (iii) $\\frac{8}{2} = 4$, $\\frac{4}{1} = 4$, $\\frac{-3}{5} \\neq 4$. So the lines are parallel.',
    steps: [
      { step: '(i) Intersecting, with ratios', marks: 1 },
      { step: '(ii) Coincident, with ratios', marks: 1 },
      { step: '(iii) Parallel, with ratios', marks: 1 },
    ],
  },
  {
    id: 'nc-03-3-1-q03', chapter: C, topic: 'Consistency conditions', ref: `${R} Ex 3.1 Q3`,
    type: 'long', complexity: 'medium', marks: 4,
    text: 'By comparing the ratios $\\frac{a_1}{a_2}$, $\\frac{b_1}{b_2}$ and $\\frac{c_1}{c_2}$, decide whether each pair is consistent or inconsistent: (i) $4x - y = 3$; $x + 2y = 6$ (ii) $3x + 5y = 7$; $6x + 10y = 11$ (iii) $\\frac{3}{4}x - \\frac{2}{3}y = 5$; $9x + 8y = 12$ (iv) $7x - 2y = 9$; $-14x + 4y = -18$',
    answer: '(i) $\\frac{4}{1} \\neq \\frac{-1}{2}$: unique solution, consistent. (ii) $\\frac{3}{6} = \\frac{5}{10} = \\frac{1}{2}$ but $\\frac{7}{11} \\neq \\frac{1}{2}$: parallel lines, inconsistent. (iii) $\\frac{3/4}{9} = \\frac{1}{12}$ and $\\frac{-2/3}{8} = -\\frac{1}{12}$; these differ, so unique solution, consistent. (iv) $\\frac{7}{-14} = \\frac{-2}{4} = \\frac{9}{-18} = -\\frac{1}{2}$: coincident lines, infinitely many solutions, consistent (dependent).',
    steps: [
      { step: '(i) Consistent', marks: 1 },
      { step: '(ii) Inconsistent', marks: 1 },
      { step: '(iii) Consistent', marks: 1 },
      { step: '(iv) Consistent (dependent)', marks: 1 },
    ],
  },
  {
    id: 'nc-03-3-1-q04', chapter: C, topic: 'Graphical solution', ref: `${R} Ex 3.1 Q4`,
    type: 'long', complexity: 'medium', marks: 5,
    text: 'Decide which of these pairs are consistent and which are inconsistent. For each consistent pair, find the solution graphically. (i) $x + y = 7$, $3x + 3y = 21$ (ii) $x - y = 3$, $2x - 2y = 9$ (iii) $3x + y - 9 = 0$, $2x - y - 1 = 0$ (iv) $x - 3y - 3 = 0$, $2x - 6y - 7 = 0$',
    answer: '(i) $\\frac{1}{3} = \\frac{1}{3} = \\frac{7}{21}$: the lines coincide, so the pair is consistent with infinitely many solutions; every point on $x + y = 7$, e.g. $(0, 7)$, $(3, 4)$, $(7, 0)$, is a solution. (ii) $\\frac{1}{2} = \\frac{-1}{-2} \\neq \\frac{3}{9}$: parallel lines, inconsistent. (iii) $\\frac{3}{2} \\neq \\frac{1}{-1}$: consistent. $3x + y = 9$ passes through $(3, 0)$ and $(0, 9)$; $2x - y = 1$ passes through $(0, -1)$ and $(1, 1)$. The lines meet at $(2, 3)$, so $x = 2$, $y = 3$. (iv) $\\frac{1}{2} = \\frac{-3}{-6} \\neq \\frac{-3}{-7}$: parallel lines, inconsistent.',
    steps: [
      { step: '(i) Consistent, infinitely many solutions (coincident lines)', marks: 1 },
      { step: '(ii) Inconsistent', marks: 1 },
      { step: '(iii) Plots both lines and reads the solution $(2, 3)$', marks: 2 },
      { step: '(iv) Inconsistent', marks: 1 },
    ],
  },
  {
    id: 'nc-03-3-1-q05', chapter: C, topic: 'Word problems', ref: `${R} Ex 3.1 Q5`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'Exactly $3.2$ m of lace goes once around the edge of a rectangular tablecloth. The length of the tablecloth is $40$ cm more than its width. Form a pair of linear equations and find its length and width.',
    answer: 'Let length $= l$ cm and width $= w$ cm. Perimeter $= 320$ cm, so $2(l + w) = 320$, i.e. $l + w = 160$. Also $l - w = 40$. Adding: $2l = 200$, so $l = 100$ and $w = 60$. The tablecloth is $100$ cm long and $60$ cm wide. (The same answer is the intersection point of the two lines on a graph.)',
    steps: [
      { step: 'Forms $l + w = 160$ and $l - w = 40$', marks: 1 },
      { step: 'Solves the pair', marks: 1 },
      { step: 'States length 100 cm, width 60 cm', marks: 1 },
    ],
  },
  {
    id: 'nc-03-3-1-q06', chapter: C, topic: 'Consistency conditions', ref: `${R} Ex 3.1 Q6`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'For the linear equation $3x - 4y + 5 = 0$, write another linear equation in two variables so that the two lines are: (i) intersecting (ii) parallel (iii) coincident',
    answer: 'Sample answers (many are possible). (i) $2x + y - 1 = 0$: $\\frac{3}{2} \\neq \\frac{-4}{1}$, so the lines intersect. (ii) $6x - 8y + 1 = 0$: $\\frac{3}{6} = \\frac{-4}{-8} = \\frac{1}{2}$ but $\\frac{5}{1} \\neq \\frac{1}{2}$, so the lines are parallel. (iii) $9x - 12y + 15 = 0$: $\\frac{3}{9} = \\frac{-4}{-12} = \\frac{5}{15} = \\frac{1}{3}$, so the lines coincide.',
    steps: [
      { step: '(i) Any equation with $\\frac{a_1}{a_2} \\neq \\frac{b_1}{b_2}$', marks: 1 },
      { step: '(ii) Any equation with $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$', marks: 1 },
      { step: '(iii) Any non-zero multiple of the given equation', marks: 1 },
    ],
  },
  {
    id: 'nc-03-3-1-q07', chapter: C, topic: 'Graphical solution', ref: `${R} Ex 3.1 Q7`,
    type: 'long', complexity: 'medium', marks: 4,
    text: 'Draw the graphs of $x + y - 5 = 0$ and $2x - y + 2 = 0$ on the same axes. Find the coordinates of the vertices of the triangle formed by these two lines and the $x$-axis.',
    answer: '$x + y = 5$ passes through $(5, 0)$ and $(0, 5)$. $2x - y = -2$ passes through $(-1, 0)$ and $(0, 2)$. The lines meet where $x + y = 5$ and $2x - y = -2$: adding, $3x = 3$, so $x = 1$, $y = 4$. The lines cut the $x$-axis at $(5, 0)$ and $(-1, 0)$. So the vertices of the triangle are $(1, 4)$, $(5, 0)$ and $(-1, 0)$.',
    steps: [
      { step: 'Plots $x + y = 5$ correctly', marks: 1 },
      { step: 'Plots $2x - y + 2 = 0$ correctly', marks: 1 },
      { step: 'Finds the intersection $(1, 4)$', marks: 1 },
      { step: 'Gives the $x$-axis vertices $(5, 0)$ and $(-1, 0)$', marks: 1 },
    ],
  },
  {
    id: 'nc-03-ex04', chapter: C, topic: 'Substitution and elimination', ref: `${R} Example 4`,
    type: 'short', complexity: 'easy', marks: 3,
    text: 'Solve by substitution: $3x - 11y = 5$ and $x + 4y = 6$.',
    answer: 'From the second equation, $x = 6 - 4y$. Substituting: $3(6 - 4y) - 11y = 5$, so $18 - 23y = 5$, giving $y = \\frac{13}{23}$. Then $x = 6 - \\frac{52}{23} = \\frac{86}{23}$. Solution: $x = \\frac{86}{23}$, $y = \\frac{13}{23}$. (Check: $\\frac{258 - 143}{23} = 5$ and $\\frac{86 + 52}{23} = 6$.)',
    steps: [
      { step: 'Writes $x = 6 - 4y$ and substitutes', marks: 1 },
      { step: 'Gets $y = \\frac{13}{23}$', marks: 1 },
      { step: 'Gets $x = \\frac{86}{23}$', marks: 1 },
    ],
  },
  {
    id: 'nc-03-ex05', chapter: C, topic: 'Word problems', ref: `${R} Example 5`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'In a park there is an old banyan tree and a younger neem tree. Eight years ago the banyan was five times as old as the neem. Four years from now the banyan will be three times as old as the neem. Form a pair of linear equations and solve by substitution to find their present ages.',
    answer: 'Let the present ages be $b$ (banyan) and $n$ (neem) years. Then $b - 8 = 5(n - 8)$, i.e. $b = 5n - 32$, and $b + 4 = 3(n + 4)$, i.e. $b - 3n = 8$. Substituting: $5n - 32 - 3n = 8$, so $n = 20$ and $b = 68$. The banyan is $68$ years old and the neem $20$. (Check: $60 = 5 \\times 12$ and $72 = 3 \\times 24$.)',
    steps: [
      { step: 'Forms $b - 8 = 5(n - 8)$ and $b + 4 = 3(n + 4)$', marks: 1 },
      { step: 'Substitutes and solves for $n = 20$', marks: 1 },
      { step: 'Gets $b = 68$', marks: 1 },
    ],
  },
  {
    id: 'nc-03-ex06', chapter: C, topic: 'Substitution and elimination', ref: `${R} Example 6`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'At a bus depot, $3$ adult passes and $5$ child passes cost ₹$95$, and $6$ adult passes and $10$ child passes cost ₹$190$. Use substitution to decide whether the price of each pass can be found.',
    answer: 'Let an adult pass cost ₹$a$ and a child pass ₹$c$. Then $3a + 5c = 95$ and $6a + 10c = 190$. From the first, $a = \\frac{95 - 5c}{3}$. Substituting: $6 \\cdot \\frac{95 - 5c}{3} + 10c = 190$, i.e. $190 - 10c + 10c = 190$, i.e. $190 = 190$. This is true for every $c$, so the equations are the same line and have infinitely many solutions. The prices cannot be found uniquely.',
    steps: [
      { step: 'Forms the two equations', marks: 1 },
      { step: 'Substitutes and reaches $190 = 190$', marks: 1 },
      { step: 'Concludes infinitely many solutions, no unique prices', marks: 1 },
    ],
  },
  {
    id: 'nc-03-ex07', chapter: C, topic: 'Substitution and elimination', ref: `${R} Example 7`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'Two straight pipelines on a site plan lie along $3x - y - 6 = 0$ and $6x - 2y - 4 = 0$. Use substitution to decide whether the pipelines will meet.',
    answer: 'From the first, $y = 3x - 6$. Substituting into the second: $6x - 2(3x - 6) - 4 = 0$, i.e. $12 - 4 = 0$, i.e. $8 = 0$, which is false. So there is no common solution: the lines are parallel and the pipelines never meet.',
    steps: [
      { step: 'Substitutes $y = 3x - 6$ and reaches $8 = 0$', marks: 1 },
      { step: 'Concludes no solution, the pipelines do not meet', marks: 1 },
    ],
  },

  // Exercise 3.2
  {
    id: 'nc-03-3-2-q01', chapter: C, topic: 'Substitution and elimination', ref: `${R} Ex 3.2 Q1`,
    type: 'long', complexity: 'medium', marks: 4,
    text: 'Solve each pair by substitution: (i) $x + y = 17$, $x - y = 5$ (ii) $m - n = 2$, $\\frac{m}{2} + \\frac{n}{3} = 6$ (iii) $4x - 2y = 6$, $10x - 5y = 15$ (iv) $0.3x + 0.2y = 1.7$, $0.5x + 0.4y = 3.1$',
    answer: '(i) $x = 17 - y$; $17 - 2y = 5$, so $y = 6$, $x = 11$. (ii) $m = n + 2$; $\\frac{n + 2}{2} + \\frac{n}{3} = 6 \\Rightarrow 3n + 6 + 2n = 36 \\Rightarrow n = 6$, $m = 8$. (iii) $y = 2x - 3$; $10x - 5(2x - 3) = 15 \\Rightarrow 15 = 15$, always true, so infinitely many solutions (any $(x, 2x - 3)$). (iv) Multiply by 10: $3x + 2y = 17$, $5x + 4y = 31$. $y = \\frac{17 - 3x}{2}$; $5x + 2(17 - 3x) = 31 \\Rightarrow -x = -3 \\Rightarrow x = 3$, $y = 4$.',
    steps: [
      { step: '(i) $x = 11$, $y = 6$', marks: 1 },
      { step: '(ii) $m = 8$, $n = 6$', marks: 1 },
      { step: '(iii) Infinitely many solutions', marks: 1 },
      { step: '(iv) $x = 3$, $y = 4$', marks: 1 },
    ],
  },
  {
    id: 'nc-03-3-2-q02', chapter: C, topic: 'Finding unknown constants', ref: `${R} Ex 3.2 Q2`,
    type: 'short', complexity: 'medium', marks: 3,
    text: 'Solve $3x + 2y = 12$ and $5x - 2y = 4$. Hence find the value of $m$ for which $y = mx + 4$.',
    answer: 'Adding the equations: $8x = 16$, so $x = 2$; then $2y = 12 - 6$, so $y = 3$. Putting $(2, 3)$ in $y = mx + 4$: $3 = 2m + 4$, so $m = -\\frac{1}{2}$.',
    steps: [
      { step: 'Gets $x = 2$', marks: 1 },
      { step: 'Gets $y = 3$', marks: 1 },
      { step: 'Gets $m = -\\frac{1}{2}$', marks: 1 },
    ],
  },
  {
    id: 'nc-03-3-2-q03', chapter: C, topic: 'Word problems', ref: `${R} Ex 3.2 Q3`,
    type: 'long', complexity: 'medium', marks: 5,
    text: 'Form a pair of linear equations for each problem and solve by substitution. (i) One ribbon is four times as long as another, and it is $30$ cm longer. Find the lengths. (ii) Of two complementary angles, the larger exceeds the smaller by $24^{\\circ}$. Find the angles. (iii) A plumber charges a fixed call-out fee plus an hourly rate. A $2$-hour job costs ₹$700$ and a $5$-hour job costs ₹$1450$. Find the call-out fee and the hourly rate. What would an $8$-hour job cost? (iv) If $3$ is added to both the numerator and denominator of a fraction, it becomes $\\frac{2}{3}$. If $8$ is added to both, it becomes $\\frac{3}{4}$. Find the fraction.',
    answer: '(i) $x = 4y$, $x - y = 30$: $3y = 30$, so $y = 10$ cm, $x = 40$ cm. (ii) $x + y = 90$, $x - y = 24$: $x = y + 24$, $2y + 24 = 90$, so $y = 33^{\\circ}$, $x = 57^{\\circ}$. (iii) Let fee $= f$, rate $= r$: $f + 2r = 700$, $f + 5r = 1450$. $f = 700 - 2r$, so $700 + 3r = 1450$, $r = 250$, $f = 200$. An 8-hour job costs $200 + 8 \\times 250 =$ ₹$2200$. (iv) Let the fraction be $\\frac{p}{q}$: $3(p + 3) = 2(q + 3) \\Rightarrow 3p - 2q = -3$; $4(p + 8) = 3(q + 8) \\Rightarrow 4p - 3q = -8$. From the first, $q = \\frac{3p + 3}{2}$; then $4p - \\frac{9p + 9}{2} = -8 \\Rightarrow -p = -7 \\Rightarrow p = 7$, $q = 12$. The fraction is $\\frac{7}{12}$.',
    steps: [
      { step: '(i) 40 cm and 10 cm', marks: 1 },
      { step: '(ii) $57^{\\circ}$ and $33^{\\circ}$', marks: 1 },
      { step: '(iii) Fee ₹200, rate ₹250 per hour, 8 hours ₹2200', marks: 2 },
      { step: '(iv) $\\frac{7}{12}$', marks: 1 },
    ],
  },
  {
    id: 'nc-03-ex08', chapter: C, topic: 'Word problems', ref: `${R} Example 8`,
    type: 'long', complexity: 'medium', marks: 4,
    text: 'The weekly takings of two cafés are in the ratio $5 : 4$ and their weekly running costs are in the ratio $7 : 5$. Each café makes a profit of ₹$3000$ a week. Using the elimination method, find the weekly takings of each café.',
    answer: 'Let the takings be ₹$5x$ and ₹$4x$, and the costs ₹$7y$ and ₹$5y$. Then $5x - 7y = 3000$ and $4x - 5y = 3000$. Multiply the first by 5 and the second by 7: $25x - 35y = 15000$ and $28x - 35y = 21000$. Subtracting: $3x = 6000$, so $x = 2000$. Then $10000 - 7y = 3000$, so $y = 1000$. Takings: ₹$10000$ and ₹$8000$. (Check: costs ₹$7000$ and ₹$5000$, ratio $7 : 5$; profits $3000$ each.)',
    steps: [
      { step: 'Forms $5x - 7y = 3000$ and $4x - 5y = 3000$', marks: 1 },
      { step: 'Makes the $y$-coefficients equal and eliminates $y$', marks: 1 },
      { step: 'Gets $x = 2000$, $y = 1000$', marks: 1 },
      { step: 'States takings ₹10000 and ₹8000', marks: 1 },
    ],
  },
  {
    id: 'nc-03-ex09', chapter: C, topic: 'Substitution and elimination', ref: `${R} Example 9`,
    type: 'short', complexity: 'easy', marks: 2,
    text: 'Use the elimination method to find all solutions of $3x - 2y = 5$ and $9x - 6y = 10$.',
    answer: 'Multiply the first equation by 3: $9x - 6y = 15$. Subtracting the second: $0 = 15 - 10 = 5$, which is false. So the pair has no solution (the lines are parallel).',
    steps: [
      { step: 'Multiplies to match coefficients and subtracts to get $0 = 5$', marks: 1 },
      { step: 'Concludes there is no solution', marks: 1 },
    ],
  },
  {
    id: 'nc-03-ex10', chapter: C, topic: 'Word problems', ref: `${R} Example 10`,
    type: 'long', complexity: 'medium', marks: 4,
    text: 'A locker code is a two-digit number. Adding it to the number formed by reversing its digits gives $121$. Its two digits differ by $3$. Find the possible codes. How many are there?',
    answer: 'Let the tens digit be $x$ and the units digit $y$. Then $(10x + y) + (10y + x) = 121$, so $11(x + y) = 121$ and $x + y = 11$. Either $x - y = 3$ or $y - x = 3$. If $x - y = 3$: adding gives $2x = 14$, so $x = 7$, $y = 4$: the code is $74$. If $y - x = 3$: $x = 4$, $y = 7$: the code is $47$. There are two possible codes, $74$ and $47$. (Check: $74 + 47 = 121$ and $7 - 4 = 3$.)',
    steps: [
      { step: 'Gets $x + y = 11$ from the sum condition', marks: 1 },
      { step: 'Sets up both cases $x - y = 3$ and $y - x = 3$', marks: 1 },
      { step: 'Solves to get 74 and 47', marks: 1 },
      { step: 'States there are two codes', marks: 1 },
    ],
  },

  // Exercise 3.3
  {
    id: 'nc-03-3-3-q01', chapter: C, topic: 'Substitution and elimination', ref: `${R} Ex 3.3 Q1`,
    type: 'long', complexity: 'medium', marks: 4,
    text: 'Solve each pair by elimination, and check by substitution: (i) $x + y = 8$ and $3x - 2y = 9$ (ii) $2x + 5y = 16$ and $3x - 3y = 3$ (iii) $4x - 3y - 5 = 0$ and $8x = 5y + 9$ (iv) $\\frac{x}{3} + \\frac{y}{2} = 3$ and $x - \\frac{y}{4} = 2$',
    answer: '(i) Multiply the first by 2 and add: $5x = 25$, $x = 5$, $y = 3$. (ii) Divide the second by 3: $x - y = 1$; multiply by 2 and subtract from the first: $7y = 14$, $y = 2$, $x = 3$. (iii) Write $8x - 6y = 10$ and $8x - 5y = 9$; subtract: $-y = 1$, $y = -1$, $x = \\frac{1}{2}$. (iv) Clear fractions: $2x + 3y = 18$ and $4x - y = 8$; multiply the second by 3 and add: $14x = 42$, $x = 3$, $y = 4$. Substituting each answer back satisfies both equations.',
    steps: [
      { step: '(i) $x = 5$, $y = 3$', marks: 1 },
      { step: '(ii) $x = 3$, $y = 2$', marks: 1 },
      { step: '(iii) $x = \\frac{1}{2}$, $y = -1$', marks: 1 },
      { step: '(iv) $x = 3$, $y = 4$', marks: 1 },
    ],
  },
  {
    id: 'nc-03-3-3-q02', chapter: C, topic: 'Word problems', ref: `${R} Ex 3.3 Q2`,
    type: 'long', complexity: 'hard', marks: 5,
    text: 'Form a pair of linear equations for each problem and solve by elimination (if a solution exists). (i) If $3$ is subtracted from the numerator of a fraction and $3$ is added to its denominator, it becomes $\\frac{1}{2}$. If only $2$ is added to the numerator, it becomes $1$. Find the fraction. (ii) A town school was founded before the town college. Four years ago the school was five times as old as the college. Eight years from now it will be three times as old. Find their present ages. (iii) The digits of a two-digit number add up to $12$. Seven times the number equals four times the number formed by reversing its digits. Find the number. (iv) A cycle-hire shop charges a fixed amount for the first two hours and a fixed rate for each extra hour. A $6$-hour hire costs ₹$260$ and a $4$-hour hire costs ₹$180$. Find the fixed amount and the rate per extra hour.',
    answer: '(i) Let the fraction be $\\frac{p}{q}$: $2(p - 3) = q + 3 \\Rightarrow 2p - q = 9$; $p + 2 = q \\Rightarrow p - q = -2$. Subtracting: $p = 11$, $q = 13$. Fraction $\\frac{11}{13}$. (ii) Let the ages be $s$ and $c$: $s - 4 = 5(c - 4) \\Rightarrow s - 5c = -16$; $s + 8 = 3(c + 8) \\Rightarrow s - 3c = 16$. Subtracting: $2c = 32$, $c = 16$, $s = 64$. School $64$ years, college $16$ years. (iii) Tens digit $a$, units digit $b$: $a + b = 12$; $7(10a + b) = 4(10b + a) \\Rightarrow 66a - 33b = 0 \\Rightarrow 2a - b = 0$. Adding: $3a = 12$, $a = 4$, $b = 8$. Number $48$. (iv) Let the fixed amount be $f$ and the rate $e$: $f + 4e = 260$, $f + 2e = 180$. Subtracting: $2e = 80$, $e = 40$, $f = 100$. Fixed ₹$100$, ₹$40$ per extra hour.',
    steps: [
      { step: '(i) $\\frac{11}{13}$', marks: 1 },
      { step: '(ii) School 64 years, college 16 years', marks: 1 },
      { step: '(iii) Forms $a + b = 12$ and $2a - b = 0$', marks: 1 },
      { step: '(iii) Number 48', marks: 1 },
      { step: '(iv) Fixed ₹100, ₹40 per extra hour', marks: 1 },
    ],
  },
];
