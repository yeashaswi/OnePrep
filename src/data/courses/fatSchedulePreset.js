/**
 * Official VIT Fall 2026-27 FAT Strategic Study Calendar
 * Timetable Mappings:
 * - Nov 15: BACHY105 Applied Chemistry (FN1, 09:30 - 12:30)
 * - Nov 21: BACHY101 / BCHY102T Environmental Sciences (FN1, 09:00 - 10:00, 1h CBT MCQ)
 * - Nov 24: BAMAT101 Multivariable Calculus & ODEs (FN1, 09:30 - 12:30) [8-DAY DEDICATED BREAK NOV 16-23]
 * - Nov 26: BAENG101 Technical English Communication (FN1, 09:30 - 12:30) [1-DAY SPRINT NOV 25]
 * - Nov 30: BAEEE101 Basic Engineering (FN1, 09:30 - 12:30) [3-DAY SPRINT NOV 27-29]
 */

export const officialFatRoadmap = [
  {
    dayNumber: 1,
    dateLabel: 'Day 1: Nov 6 (Today)',
    calendarDate: '2026-11-06',
    isPhase1: true,
    focusTheme: 'Applied Chemistry Mod 1 Blitz + English 5 Cs Case Study & Calculus Baseline',
    strategyNote: 'Chemistry is Exam #1 on Nov 15; English MUST be completed now because only 1 day exists between Maths and English.',
    sessions: [
      {
        id: 'fat-d1-s1',
        timeSlot: '09:00 AM - 11:30 AM',
        courseId: 'BACHY101',
        courseTitle: 'Applied Chemistry',
        courseCode: 'BACHY105',
        moduleId: 'bachy-m1',
        moduleTitle: 'Mod 1: Chemical Thermodynamics & Reaction Kinetics',
        task: 'Master 1st/2nd/3rd Laws, Carnot Cycle efficiency derivations, and Arrhenius temperature effect on rate constants. Solve 2 Question Bank numericals.',
        durationMinutes: 150,
        status: 'not_confident',
        completed: false
      },
      {
        id: 'fat-d1-s2',
        timeSlot: '02:00 PM - 04:00 PM',
        courseId: 'BAENG101',
        courseTitle: 'Technical English',
        courseCode: 'BAENG101',
        moduleId: 'baeng-m1',
        moduleTitle: 'Mod 1: 5 Cs Case Study & Business Communication (FAT Q1 & Q2)',
        task: 'Practice FAT Question 1 (Scientific Writing vs Technical Reporting) and FAT Question 2 (5 Cs corporate email rewrite case study).',
        durationMinutes: 120,
        status: 'not_confident',
        completed: false
      },
      {
        id: 'fat-d1-s3',
        timeSlot: '05:30 PM - 07:00 PM',
        courseId: 'BAMAT101',
        courseTitle: 'Multivariable Calculus',
        courseCode: 'BAMAT101',
        moduleId: 'bamat-m1',
        moduleTitle: 'Mod 1: Euler\'s Theorem & Partial Derivatives',
        task: 'Light Calculus retention (saving heavy 8-day marathon for Nov 16-23): Re-derive Euler\'s theorem identity for tan⁻¹((x³+y³)/(x-y)).',
        durationMinutes: 90,
        status: 'need_to_revise',
        completed: false
      },
      {
        id: 'fat-d1-s4',
        timeSlot: '08:30 PM - 10:00 PM',
        courseId: 'BCHY102',
        courseTitle: 'Environmental Sciences',
        courseCode: 'BACHY101',
        moduleId: 'evs-m1',
        moduleTitle: 'Week 1: Fundamentals of Environment & Ecosystems',
        task: 'Solve 15 Moodle CBT MCQs: Lindeman\'s 10% energy law, food web trophic levels, and Nitrogen cycle bacterial conversions.',
        durationMinutes: 90,
        status: 'yet_to_start',
        completed: false
      }
    ]
  },
  {
    dayNumber: 2,
    dateLabel: 'Day 2: Nov 7 (Saturday)',
    calendarDate: '2026-11-07',
    isPhase1: true,
    focusTheme: 'Chemistry Batteries & Energy Devices + English Grammar (Concord & Tenses)',
    strategyNote: 'Lock down Nernst equation numericals (10M FAT guarantee) and the 5M Concord sentence rules.',
    sessions: [
      {
        id: 'fat-d2-s1',
        timeSlot: '09:00 AM - 12:00 PM',
        courseId: 'BACHY101',
        courseTitle: 'Applied Chemistry',
        courseCode: 'BACHY105',
        moduleId: 'bachy-m2',
        moduleTitle: 'Mod 2: Energy Devices & Electrochemical Cells',
        task: 'Derive Nernst Equation; calculate EMF for galvanic cells; study Li-ion intercalation chemistry and H2-O2 fuel cell half-reactions.',
        durationMinutes: 180,
        status: 'not_confident',
        completed: false
      },
      {
        id: 'fat-d2-s2',
        timeSlot: '02:00 PM - 04:30 PM',
        courseId: 'BAENG101',
        courseTitle: 'Technical English',
        courseCode: 'BAENG101',
        moduleId: 'baeng-m2',
        moduleTitle: 'Mod 2: Grammar — Concord in Sentences & Tenses (FAT Q3)',
        task: 'Work through 20 Concord test sentences (intervening phrases, neither...nor, indefinite pronouns) and tense consistency in research reports.',
        durationMinutes: 150,
        status: 'need_to_revise',
        completed: false
      },
      {
        id: 'fat-d2-s3',
        timeSlot: '06:00 PM - 07:30 PM',
        courseId: 'BCHY102',
        courseTitle: 'Environmental Sciences',
        courseCode: 'BACHY101',
        moduleId: 'evs-m2',
        moduleTitle: 'Week 2: Biodiversity & Environmental Quality',
        task: 'Practice Moodle MCQs: 4 Indian biodiversity hotspots, in-situ vs ex-situ conservation criteria, and IUCN Red Data Book classifications.',
        durationMinutes: 90,
        status: 'yet_to_start',
        completed: false
      },
      {
        id: 'fat-d2-s4',
        timeSlot: '08:30 PM - 10:00 PM',
        courseId: 'BAMAT101',
        courseTitle: 'Multivariable Calculus',
        courseCode: 'BAMAT101',
        moduleId: 'bamat-m1',
        moduleTitle: 'Mod 1: Maxima, Minima & Saddle Points',
        task: 'Solve standard 10M problem: find and classify stationary points of f(x, y) = x³ + y³ - 3axy using discriminant D = rt - s².',
        durationMinutes: 90,
        status: 'strong',
        completed: false
      }
    ]
  },
  {
    dayNumber: 3,
    dateLabel: 'Day 3: Nov 8 (Sunday)',
    calendarDate: '2026-11-08',
    isPhase1: true,
    focusTheme: 'Chemistry Functional Materials + English Conditionals & Passive Voice',
    strategyNote: 'Cover semiconductors and memory devices in Chem, and master FAT Question 4 fill-in-the-blanks.',
    sessions: [
      {
        id: 'fat-d3-s1',
        timeSlot: '09:00 AM - 12:00 PM',
        courseId: 'BACHY101',
        courseTitle: 'Applied Chemistry',
        courseCode: 'BACHY105',
        moduleId: 'bachy-m3',
        moduleTitle: 'Mod 3: Functional Materials & Nanomaterials',
        task: 'Intrinsic vs extrinsic semiconductors, bandgap theory, para/dia/ferromagnetism in data storage, and top-down vs bottom-up nanoparticle synthesis.',
        durationMinutes: 180,
        status: 'yet_to_start',
        completed: false
      },
      {
        id: 'fat-d3-s2',
        timeSlot: '02:00 PM - 04:30 PM',
        courseId: 'BAENG101',
        courseTitle: 'Technical English',
        courseCode: 'BAENG101',
        moduleId: 'baeng-m2',
        moduleTitle: 'Mod 2: Grammar — Conditionals & Passive Voices (FAT Q4)',
        task: 'Practice 15 Conditional fill-in-the-blanks (Types 0, 1, 2, 3) and transform active lab instructions into objective impersonal passive.',
        durationMinutes: 150,
        status: 'need_to_revise',
        completed: false
      },
      {
        id: 'fat-d3-s3',
        timeSlot: '06:00 PM - 07:30 PM',
        courseId: 'BACEE101',
        courseTitle: 'Basic Engineering',
        courseCode: 'BAEEE101',
        moduleId: 'bee-m1',
        moduleTitle: 'Mod 1: Principles of Electrical Engineering (Circuits & KVL/KCL)',
        task: 'Mesh current analysis, nodal analysis, and Thevenin equivalent circuit derivations with independent sources.',
        durationMinutes: 90,
        status: 'yet_to_start',
        completed: false
      },
      {
        id: 'fat-d3-s4',
        timeSlot: '08:30 PM - 10:00 PM',
        courseId: 'BAMAT101',
        courseTitle: 'Multivariable Calculus',
        courseCode: 'BAMAT101',
        moduleId: 'bamat-m2',
        moduleTitle: 'Mod 2: Change of Order of Integration',
        task: 'Solve non-elementary double integral: int_0^1 int_x^1 exp(y^2) dy dx by switching to horizontal integration strips.',
        durationMinutes: 90,
        status: 'need_to_revise',
        completed: false
      }
    ]
  },
  {
    dayNumber: 4,
    dateLabel: 'Day 4: Nov 9 (Monday)',
    calendarDate: '2026-11-09',
    isPhase1: true,
    focusTheme: 'Chemistry Spectroscopy & Powder XRD + English 100-Word Bank (Words 1-50)',
    strategyNote: 'Beer-Lambert law & Bragg\'s Law are 10-mark FAT questions; start active recall on the first 50 definition terms.',
    sessions: [
      {
        id: 'fat-d4-s1',
        timeSlot: '09:00 AM - 12:00 PM',
        courseId: 'BACHY101',
        courseTitle: 'Applied Chemistry',
        courseCode: 'BACHY105',
        moduleId: 'bachy-m4',
        moduleTitle: 'Mod 4: Spectroscopic & Diffraction Techniques (UV-Vis & XRD)',
        task: 'Beer-Lambert law derivations, chromophores/auxochromes, instrumentation of UV-Vis spectrophotometer, and Bragg\'s law (lambda = 2d sin theta) for cubic crystals.',
        durationMinutes: 180,
        status: 'not_confident',
        completed: false
      },
      {
        id: 'fat-d4-s2',
        timeSlot: '02:00 PM - 04:30 PM',
        courseId: 'BAENG101',
        courseTitle: 'Technical English',
        courseCode: 'BAENG101',
        moduleId: 'baeng-m3',
        moduleTitle: 'Mod 3: Official Definition Word Bank (Words 1 to 50 — FAT Q5)',
        task: 'Test yourself on the first 50 official words (Satellite, Drone, 3D Printing, Phishing, UPI, AI) using Term = Class + Differentia formula.',
        durationMinutes: 150,
        status: 'not_confident',
        completed: false
      },
      {
        id: 'fat-d4-s3',
        timeSlot: '06:00 PM - 07:30 PM',
        courseId: 'BCHY102',
        courseTitle: 'Environmental Sciences',
        courseCode: 'BACHY101',
        moduleId: 'evs-m3',
        moduleTitle: 'Week 3: Pollution & its Management Techniques',
        task: 'CBT MCQs: Photochemical smog chemistry (PAN and Ozone), acid rain threshold (pH < 5.6), COD >= BOD rationale, and activated sludge process.',
        durationMinutes: 90,
        status: 'yet_to_start',
        completed: false
      },
      {
        id: 'fat-d4-s4',
        timeSlot: '08:30 PM - 10:00 PM',
        courseId: 'BAMAT101',
        courseTitle: 'Multivariable Calculus',
        courseCode: 'BAMAT101',
        moduleId: 'bamat-m2',
        moduleTitle: 'Mod 2: Polar Coordinate Transformations',
        task: 'Evaluate double integral of r³ dr dtheta between circles r = 2a cos theta and r = 2b cos theta using Wallis formula.',
        durationMinutes: 90,
        status: 'strong',
        completed: false
      }
    ]
  },
  {
    dayNumber: 5,
    dateLabel: 'Day 5: Nov 10 (Tuesday)',
    calendarDate: '2026-11-10',
    isPhase1: true,
    focusTheme: 'Chemistry Computational & MO Theory + English 100-Word Bank (Words 51-100)',
    strategyNote: 'Complete the entire 100-word bank for English Question 5 and tackle Chem Module 5.',
    sessions: [
      {
        id: 'fat-d5-s1',
        timeSlot: '09:00 AM - 12:00 PM',
        courseId: 'BACHY101',
        courseTitle: 'Applied Chemistry',
        courseCode: 'BACHY105',
        moduleId: 'bachy-m5',
        moduleTitle: 'Mod 5: Computational Chemistry & Molecular Orbital Theory',
        task: 'Schrodinger wave equation fundamentals, LCAO approximation, constructing MO diagrams for O2/N2/CO, and geometry optimization concepts.',
        durationMinutes: 180,
        status: 'yet_to_start',
        completed: false
      },
      {
        id: 'fat-d5-s2',
        timeSlot: '02:00 PM - 04:30 PM',
        courseId: 'BAENG101',
        courseTitle: 'Technical English',
        courseCode: 'BAENG101',
        moduleId: 'baeng-m3',
        moduleTitle: 'Mod 3: Official Definition Word Bank (Words 51 to 100 — FAT Q5)',
        task: 'Memorize words 51-100 (Renewable Energy, Biometrics, Walkalator, Malware, Telemedicine, Sustainability, Structure, Function, System).',
        durationMinutes: 150,
        status: 'not_confident',
        completed: false
      },
      {
        id: 'fat-d5-s3',
        timeSlot: '06:00 PM - 07:30 PM',
        courseId: 'BACEE101',
        courseTitle: 'Basic Engineering',
        courseCode: 'BAEEE101',
        moduleId: 'bee-m2',
        moduleTitle: 'Mod 2: Foundations of Electronics & Communications',
        task: 'PN junction diode characteristics, full-wave bridge rectifier, BJT CE configuration, and Op-Amp inverting/non-inverting adder circuits.',
        durationMinutes: 90,
        status: 'yet_to_start',
        completed: false
      },
      {
        id: 'fat-d5-s4',
        timeSlot: '08:30 PM - 10:00 PM',
        courseId: 'BCHY102',
        courseTitle: 'Environmental Sciences',
        courseCode: 'BACHY101',
        moduleId: 'evs-m4',
        moduleTitle: 'Week 4: Environmental Laws & Sustainable Development Goals',
        task: 'Milestone years: Wildlife Act (1972), Water Act (1974), Air Act (1981, 1987 noise amendment), EPA (1986). Memorize SDG 6, 7, 12, 13.',
        durationMinutes: 90,
        status: 'strong',
        completed: false
      }
    ]
  },
  {
    dayNumber: 6,
    dateLabel: 'Day 6: Nov 11 (Wednesday)',
    calendarDate: '2026-11-11',
    isPhase1: true,
    focusTheme: 'Chemistry Full Question Bank Numerical Blitz + English Literature Review Synthesis',
    strategyNote: 'FAT Question 7 requires synthesizing 2-3 short abstracts into 200 words. Master this pattern today!',
    sessions: [
      {
        id: 'fat-d6-s1',
        timeSlot: '09:00 AM - 12:30 PM',
        courseId: 'BACHY101',
        courseTitle: 'Applied Chemistry',
        courseCode: 'BACHY105',
        moduleId: 'bachy-m1',
        moduleTitle: 'Master Chemistry Numerical & Question Bank Marathon',
        task: 'Calculate 10 high-yield numericals: Nernst cell potentials, Gibbs free energy Delta G = -nFE, Bragg\'s interplanar spacing, and 1st order half-life.',
        durationMinutes: 210,
        status: 'not_confident',
        completed: false
      },
      {
        id: 'fat-d6-s2',
        timeSlot: '02:00 PM - 04:30 PM',
        courseId: 'BAENG101',
        courseTitle: 'Technical English',
        courseCode: 'BAENG101',
        moduleId: 'baeng-m4',
        moduleTitle: 'Mod 4: Literature Review Synthesis (FAT Q7 Internal Choice)',
        task: 'Given 2-3 short abstracts (~100 words), write a 200-word comparative literature review highlighting methodology, findings, and research gaps.',
        durationMinutes: 150,
        status: 'need_to_revise',
        completed: false
      },
      {
        id: 'fat-d6-s3',
        timeSlot: '06:00 PM - 07:30 PM',
        courseId: 'BAMAT101',
        courseTitle: 'Multivariable Calculus',
        courseCode: 'BAMAT101',
        moduleId: 'bamat-m3',
        moduleTitle: 'Mod 3: Vector Calculus Solenoidal & Conservative Fields',
        task: 'Test irrotational condition grad x F = 0; find scalar potential phi; solve line integral work done along parametric curves.',
        durationMinutes: 90,
        status: 'need_to_revise',
        completed: false
      },
      {
        id: 'fat-d6-s4',
        timeSlot: '08:30 PM - 10:00 PM',
        courseId: 'BCHY102',
        courseTitle: 'Environmental Sciences',
        courseCode: 'BACHY101',
        moduleId: 'evs-m5',
        moduleTitle: 'Week 5: Climate Change & EIA Stages',
        task: 'Review 4 EIA stages (Screening -> Scoping -> Public Consultation -> Appraisal); GWP ranking (SF6 > N2O > CH4 > CO2); Category A vs B.',
        durationMinutes: 90,
        status: 'yet_to_start',
        completed: false
      }
    ]
  },
  {
    dayNumber: 7,
    dateLabel: 'Day 7: Nov 12 (Thursday)',
    calendarDate: '2026-11-12',
    isPhase1: true,
    focusTheme: 'English Case Studies (Leadership & Negotiation) + Chemistry High-Yield Consolidation',
    strategyNote: 'FAT Questions 8, 9, 10 carry 30 marks! Belbin roles, leadership styles, and BATNA negotiation.',
    sessions: [
      {
        id: 'fat-d7-s1',
        timeSlot: '09:00 AM - 12:00 PM',
        courseId: 'BAENG101',
        courseTitle: 'Technical English',
        courseCode: 'BAENG101',
        moduleId: 'baeng-m5',
        moduleTitle: 'Mod 5: Interpersonal Communication & Case Studies (FAT Q8, Q9, Q10)',
        task: 'Master Belbin 9 roles (Action, People, Thought); solve Case Study on Leadership Styles (autocratic vs democratic); solve Case Study on Negotiation (BATNA). Note: NO SOP in FAT!',
        durationMinutes: 180,
        status: 'not_confident',
        completed: false
      },
      {
        id: 'fat-d7-s2',
        timeSlot: '01:30 PM - 04:30 PM',
        courseId: 'BACHY101',
        courseTitle: 'Applied Chemistry',
        courseCode: 'BACHY105',
        moduleId: 'bachy-m3',
        moduleTitle: 'Chemistry High-Frequency Theory Audit (Modules 1 to 5)',
        task: 'Audit core exam answers: Fuel cells, Lithium secondary batteries, XRD crystal size Scherrer equation, and semiconductor classifications.',
        durationMinutes: 180,
        status: 'need_to_revise',
        completed: false
      },
      {
        id: 'fat-d7-s3',
        timeSlot: '05:30 PM - 07:00 PM',
        courseId: 'BACEE101',
        courseTitle: 'Basic Engineering',
        courseCode: 'BAEEE101',
        moduleId: 'bee-m4',
        moduleTitle: 'Mod 4: Manufacturing Processes & Mechanical Automation',
        task: 'Sand casting defects, welding joints (TIG/MIG), 3D printing FDM, and four-stroke vs two-stroke IC engine working cycles.',
        durationMinutes: 90,
        status: 'yet_to_start',
        completed: false
      },
      {
        id: 'fat-d7-s4',
        timeSlot: '08:30 PM - 10:00 PM',
        courseId: 'BCHY102',
        courseTitle: 'Environmental Sciences',
        courseCode: 'BACHY101',
        moduleId: 'evs-m6',
        moduleTitle: 'Week 6: Contemporary Topics (Carbon Footprint Scopes & GRIHA)',
        task: 'Moodle quiz practice: Scope 1 (direct) vs Scope 2 (electricity) vs Scope 3 (supply chain); 1 CER = 1 tonne CO2; GRIHA rating by TERI.',
        durationMinutes: 90,
        status: 'yet_to_start',
        completed: false
      }
    ]
  },
  {
    dayNumber: 8,
    dateLabel: 'Day 8: Nov 13 (Friday — Milestone Lock-in)',
    calendarDate: '2026-11-13',
    isPhase1: true,
    focusTheme: 'Final Pre-Exam Check: Chemistry Locked & English Complete Mock Paper',
    strategyNote: 'Milestone reached! Chemistry is 100% prepared for Nov 14 mock / Nov 15 FAT. English is secured before the 1-day sprint.',
    sessions: [
      {
        id: 'fat-d8-s1',
        timeSlot: '09:00 AM - 12:00 PM',
        courseId: 'BAENG101',
        courseTitle: 'Technical English',
        courseCode: 'BAENG101',
        moduleId: 'baeng-m1',
        moduleTitle: 'Full 100-Mark English FAT Mock Simulation',
        task: 'Simulate answering all 10 questions: Q1 Business Com, Q2 5 Cs rewrite, Q3 Concord/Tenses, Q4 Conditionals/Voices, Q5 5 Definitions, Q6/Q7 Literature review, Q8 Belbin roles, Q9 Leadership case, Q10 Negotiation case.',
        durationMinutes: 180,
        status: 'strong',
        completed: false
      },
      {
        id: 'fat-d8-s2',
        timeSlot: '01:30 PM - 05:00 PM',
        courseId: 'BACHY101',
        courseTitle: 'Applied Chemistry',
        courseCode: 'BACHY105',
        moduleId: 'bachy-m1',
        moduleTitle: 'Master Chemistry Formula Sheet & 10-Mark Question Bank Run',
        task: 'Write out all formulas from memory: Nernst, Arrhenius, Carnot, Beer-Lambert, Bragg, Lindemann mechanism. You are ready for Chemistry FAT!',
        durationMinutes: 210,
        status: 'strong',
        completed: false
      },
      {
        id: 'fat-d8-s3',
        timeSlot: '06:30 PM - 08:30 PM',
        courseId: 'BAMAT101',
        courseTitle: 'Multivariable Calculus',
        courseCode: 'BAMAT101',
        moduleId: 'bamat-m3',
        moduleTitle: 'Calculus 8-Day Break Blueprint Preview',
        task: 'Organize all Math modules 1 to 5 textbooks for the upcoming 8-day uninterrupted break (Nov 16 to Nov 23). Relax early tonight!',
        durationMinutes: 120,
        status: 'strong',
        completed: false
      }
    ]
  }
];

export const examCalendarPhases = [
  {
    phase: 'Phase 1: Pre-Exam Foundation & Chemistry Blitz',
    dates: 'Nov 6 - Nov 13 (8 Days)',
    focus: 'Finish Chemistry Modules 1-5, complete English (all 100 definitions, grammar, and case studies), and keep Maths formulas active.',
    action: 'Active right now'
  },
  {
    phase: 'Phase 2: Chemistry Pre-Exam Polish',
    dates: 'Nov 14 (Saturday)',
    focus: 'Pure Chemistry full syllabus mock and formula memorization. Rest early for the morning exam.',
    action: 'Pre-FAT'
  },
  {
    phase: 'Phase 3: FAT EXAM #1 — APPLIED CHEMISTRY',
    dates: 'Nov 15 (Sunday, 09:30 AM - 12:30 PM)',
    focus: 'Execute 100M paper in Slot B2+TB2. Then celebrate clearing Course #1!',
    action: 'EXAM DAY'
  },
  {
    phase: 'Phase 4: THE 8-DAY DEDICATED MATHS MARATHON (+ EVS CBT)',
    dates: 'Nov 16 - Nov 23 (8 Uninterrupted Days)',
    focus: 'Full 8 days of dedicated immersion in Multivariable Calculus & ODEs (BAMAT101). Tackle 1 module per day + 2 full mock days. Take 1-hour EVS CBT exam on Nov 21 (09:00 - 10:00 AM).',
    action: 'CRITICAL BUFFER'
  },
  {
    phase: 'Phase 5: FAT EXAM #2 — MULTIVARIABLE CALCULUS & ODEs',
    dates: 'Nov 24 (Tuesday, 09:30 AM - 12:30 PM)',
    focus: 'Execute 100M paper in Slot E2+TE2 with maximum marks from 8 days of preparation.',
    action: 'EXAM DAY'
  },
  {
    phase: 'Phase 6: English 1-Day Rapid Sprint',
    dates: 'Nov 25 (Wednesday)',
    focus: 'Recall the 100 definitions, skim 5 Cs case study template, and review Belbin/leadership notes prepared during Phase 1.',
    action: 'SPRINT'
  },
  {
    phase: 'Phase 7: FAT EXAM #3 — TECHNICAL ENGLISH COMMUNICATION',
    dates: 'Nov 26 (Thursday, 09:30 AM - 12:30 PM)',
    focus: 'Execute 100M paper in Slot F2+TF2.',
    action: 'EXAM DAY'
  },
  {
    phase: 'Phase 8: Basic Engineering 3-Day Sprint',
    dates: 'Nov 27 - Nov 29 (3 Days)',
    focus: 'Electrical circuits, Electronics/Op-Amps, CAD projections, and Manufacturing cycles.',
    action: 'SPRINT'
  },
  {
    phase: 'Phase 9: FAT EXAM #4 — BASIC ENGINEERING',
    dates: 'Nov 30 (Monday, 09:30 AM - 12:30 PM)',
    focus: 'Final assessment of the semester in Slot G2+TG2. Complete semester success!',
    action: 'EXAM DAY'
  }
];
