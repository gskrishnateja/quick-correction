/**
 * Chapters for the maths subjects beyond CBSE Class 10, keyed by subject name
 * (the names in BOARDS, library.seed.ts). Chapter names are our own short
 * labels for each board's syllabus units, not the board's wording.
 *
 * A chapter is either a name, or a name with topics under it where the board's
 * syllabus is split that way (Cambridge's AS & A Level papers).
 *
 * Checked against third-party summaries of the 2026-27 syllabi, not the
 * boards' own documents: confirm against the official PDFs (cbseacademic.nic.in,
 * cisce.org, cambridgeinternational.org, ibo.org) before relying on them.
 */
export type Chapter = string | { name: string; topics: string[] };

export const SYLLABUS: Record<string, Chapter[]> = {
  // CBSE Class 12: the 13 NCERT chapters.
  'Mathematics': [
    'Relations and Functions',
    'Inverse Trigonometric Functions',
    'Matrices',
    'Determinants',
    'Continuity and Differentiability',
    'Application of Derivatives',
    'Integrals',
    'Application of Integrals',
    'Differential Equations',
    'Vector Algebra',
    'Three Dimensional Geometry',
    'Linear Programming',
    'Probability',
  ],

  // ICSE Class 10 (CISCE): commercial maths, algebra, coordinate geometry,
  // geometry, mensuration, trigonometry, statistics and probability.
  'Mathematics (ICSE)': [
    'Goods and Services Tax (GST)',
    'Banking',
    'Shares and Dividends',
    'Linear Inequations',
    'Quadratic Equations',
    'Ratio and Proportion',
    'Factorisation of Polynomials',
    'Matrices',
    'Arithmetic Progression',
    'Geometric Progression',
    'Reflection',
    'Section and Mid-point Formula',
    'Equation of a Line',
    'Similarity',
    'Loci',
    'Circles',
    'Constructions',
    'Cylinder, Cone and Sphere',
    'Trigonometric Identities',
    'Heights and Distances',
    'Statistics',
    'Probability',
  ],

  // ISC Class 12 (CISCE): Section A is compulsory; candidates then take
  // Section B or Section C.
  'Mathematics (ISC)': [
    'Relations and Functions',
    'Inverse Trigonometric Functions',
    'Matrices',
    'Determinants',
    'Continuity and Differentiability',
    'Applications of Derivatives',
    'Integrals',
    'Differential Equations',
    'Probability',
    'Vectors (Section B)',
    'Three-Dimensional Geometry (Section B)',
    'Applications of Integrals (Section B)',
    'Application of Calculus in Commerce and Economics (Section C)',
    'Linear Regression (Section C)',
    'Linear Programming (Section C)',
  ],

  // Cambridge IGCSE Mathematics (0580): the syllabus's nine topic areas.
  'Mathematics (IGCSE)': [
    'Number',
    'Algebra and Graphs',
    'Coordinate Geometry',
    'Geometry',
    'Mensuration',
    'Trigonometry',
    'Transformations and Vectors',
    'Probability',
    'Statistics',
  ],

  // Cambridge International AS & A Level Mathematics (9709): one chapter per
  // paper, with that paper's topics. A Level takes Pure 1 and Pure 3 plus two
  // of Mechanics, Probability & Statistics 1 and 2.
  'Mathematics (AS & A Level)': [
    { name: 'Pure Mathematics 1', topics: ['Quadratics', 'Functions', 'Coordinate Geometry', 'Circular Measure', 'Trigonometry', 'Series', 'Differentiation', 'Integration'] },
    { name: 'Pure Mathematics 3', topics: ['Algebra', 'Logarithmic and Exponential Functions', 'Trigonometry', 'Differentiation', 'Integration', 'Numerical Solution of Equations', 'Vectors', 'Differential Equations', 'Complex Numbers'] },
    { name: 'Mechanics', topics: ['Forces and Equilibrium', 'Kinematics of Motion in a Straight Line', 'Momentum', 'Newton’s Laws of Motion', 'Energy, Work and Power'] },
    { name: 'Probability & Statistics 1', topics: ['Representation of Data', 'Permutations and Combinations', 'Probability', 'Discrete Random Variables', 'The Normal Distribution'] },
    { name: 'Probability & Statistics 2', topics: ['The Poisson Distribution', 'Linear Combinations of Random Variables', 'Continuous Random Variables', 'Sampling and Estimation', 'Hypothesis Tests'] },
  ],

  // IB MYP Mathematics: the four branches of the framework. MYP has no fixed
  // syllabus, so schools fill in topics themselves.
  'Mathematics (MYP)': [
    'Number',
    'Algebra',
    'Geometry and Trigonometry',
    'Statistics and Probability',
  ],

  // IB Diploma: both maths courses share the same five topics.
  'Mathematics: Analysis and Approaches (DP)': [
    'Number and Algebra',
    'Functions',
    'Geometry and Trigonometry',
    'Statistics and Probability',
    'Calculus',
  ],
  'Mathematics: Applications and Interpretation (DP)': [
    'Number and Algebra',
    'Functions',
    'Geometry and Trigonometry',
    'Statistics and Probability',
    'Calculus',
  ],
};
