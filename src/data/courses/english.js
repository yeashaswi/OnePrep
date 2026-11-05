export const englishCourse = {
  id: 'BAENG101',
  code: 'BAENG101',
  title: 'Technical English Communication',
  shortTitle: 'Technical English',
  category: 'University Core',
  credits: 4,
  semester: 'Fall Semester 2026-27',
  color: 'indigo',
  badge: 'Official VIT VTOP Syllabus (6 Modules)',
  description: 'Complete Study Textbook, Formal Technical Writing Guide & VIT FAT Question Bank aligned with official VIT BAENG101 Course Page Syllabus, School of Social Sciences & Languages Question Bank, and VIT FAT Past Papers.',
  targetMarks: {
    cat1: '50 Marks (Modules 1 & 2)',
    cat2: '50 Marks (Modules 3 & 4)',
    fat: '100 Marks (All 6 Modules)'
  },
  modules: [
    {
      id: 'baeng-m1',
      moduleNum: 1,
      pdfUrl: '/pdfs/english/English_MOD-1.pdf',
      title: 'Introduction to Technical Communication',
      co: 'CO: 2',
      examScope: 'CAT-1 & FAT',
      weightage: '15-20 Marks in FAT',
      status: 'not_confident',
      scope: 'The Nature of Technical Writing, Taxonomy of Technical Writing: Scientific Writing vs. Technical Reporting, Key differences in style, purpose, and audience, The 5 Cs of Technical Writing (Clarity, Conciseness, Completeness, Concreteness, Correctness), and Professional Business Communication principles and correspondence.',
      blueprint: {
        marksTotal: '15 to 20 Marks in FAT',
        questionTypes: [
          { type: 'Question Type A (10 Marks)', desc: 'Comparison & Taxonomy: Distinguishing between General/Creative Writing vs. Technical Writing, or Scientific Writing (journal paper) vs. Technical Reporting (field audit/incident report).' },
          { type: 'Question Type B (10 Marks)', desc: 'The 5 Cs of Technical Writing: Applying Clarity, Conciseness, Completeness, Concreteness, and Correctness to analyze and rewrite ambiguous business memos or technical briefs.' }
        ]
      },
      formulaSheet: [
        { name: 'The 5 Cs Benchmark', formula: '\\text{Clarity} + \\text{Conciseness} + \\text{Completeness} + \\text{Concreteness} + \\text{Correctness}', note: 'Core evaluation rubric in technical documentation' },
        { name: 'Conciseness Rule', formula: '\\text{Informational Density} = \\frac{\\text{Key Technical Facts}}{\\text{Total Word Count}} \\rightarrow \\text{Maximize}', note: 'Prune deadwood phrases and redundant tautologies' }
      ],
      examInsights: [
        {
          title: 'Concrete Numbers over Vague Adjectives',
          desc: 'VIT English examiners award top marks when students replace subjective adjectives like "very fast", "extremely hot", or "often" with concrete numerical data ("responded in 12 ms", "heated to 350 °C", "4 times in 24 hours").'
        }
      ],
      topics: [
        { id: 'baeng-t1-1', title: '1-The Nature of Technical Writing & 2/3-Scientific Writing vs Technical Reporting', theory: 'Objective, transactional communication. Primary inquiry journal articles vs applied organizational engineering reports.' },
        { id: 'baeng-t1-2', title: '4-The 5 Cs of Technical Writing', theory: 'Clarity (syntax), Conciseness (pruning wordiness), Completeness (all parameters), Concreteness (specific facts), Correctness (mechanics).' },
        { id: 'baeng-t1-3', title: '5 & 6-Business Communication Principles', theory: 'Formal business emails, memos, letters of inquiry, and professional correspondence protocols.' }
      ],
      pyqs: [
        {
          id: 'baeng-q1-1',
          exam: 'BAENG101 FAT April 2025 Slot F2 — 10 Marks',
          marks: '10 Marks',
          question: 'Differentiate between Scientific Writing and Technical Reporting with respect to: (i) Primary Objective, (ii) Intended Audience, (iii) Structural Organization, (iv) Tone and Style, and (v) Outcome/Action expected.',
          solution: 'Comparison Table:\n1. Primary Objective: Scientific Writing aims to document fundamental original research, validate scientific hypotheses, and contribute to permanent universal human knowledge. Technical Reporting aims to solve practical operational problems, evaluate feasibility, and guide immediate managerial or engineering decisions.\n2. Intended Audience: Scientific Writing: Global peer researchers, scholars, and specialists in the discipline. Technical Reporting: Multi-disciplinary company stakeholders, engineering managers, technicians, and executive decision-makers.\n3. Structural Organization: Scientific Writing: Strictly follows IMRAD (Introduction, Methods, Results, and Discussion). Technical Reporting: Problem statement, executive summary, findings, risk matrix, and actionable recommendations.\n4. Tone and Style: Scientific Writing: Impersonal, formal, passive voice, academic citations. Technical Reporting: Direct, concise, action-oriented, utilizing bullet points, visual tables, and executive summaries.\n5. Outcome/Action Expected: Scientific Writing: Peer review, journal publication, academic citations. Technical Reporting: Immediate budget approval, engineering implementation, process modification, or safety remediation.'
        }
      ]
    },
    {
      id: 'baeng-m2',
      moduleNum: 2,
      pdfUrl: '/pdfs/english/English_MOD-2.pdf',
      title: 'Grammar',
      co: 'CO: 3',
      examScope: 'CAT-1 & FAT',
      weightage: '20 Marks in FAT',
      status: 'need_to_revise',
      scope: 'Concord (Subject-Verb Agreement rules, intervening prepositional phrases, compound subjects, correlative conjunctions, collective nouns), Tense shifts and maintaining chronological consistency in scientific reporting, Conditionals (Zero, First, Second, Third, and Mixed conditionals with technical application contexts), and Active vs. Passive Voice (transforming procedural steps into objective impersonal passive constructions).',
      blueprint: {
        marksTotal: '20 Marks in FAT',
        questionTypes: [
          { type: 'Question Type A (10 Marks)', desc: 'Concord & Error Rectification: Correcting 10 sentences with subject-verb disagreement, misleading intervening modifiers, and collective nouns.' },
          { type: 'Question Type B (10 Marks)', desc: 'Conditionals & Passive Transformation: Completing conditional sentences based on technical troubleshooting prompts, and converting laboratory steps into scientific impersonal passive.' }
        ]
      },
      formulaSheet: [
        { name: 'Intervening Phrase Concord', formula: '\\text{Subject} + [\\text{Prepositional / Parenthetical Phrase}] + \\text{Verb agrees with SUBJECT}', note: 'Ignore phrases like "along with", "together with", "as well as"' },
        { name: 'Correlative Conjunctions', formula: '\\text{Either A or B} \\implies \\text{Verb agrees strictly with B (closer subject)}', note: 'Applies to neither...nor, not only...but also' },
        { name: 'Conditional Hierarchy', formula: '\\text{Type 1: If + Present} \\rightarrow \\text{will + V}, \\quad \\text{Type 2: If + Past} \\rightarrow \\text{would + V}, \\quad \\text{Type 3: If + Past Perfect} \\rightarrow \\text{would have + V3}', note: 'Type 0: If + Present -> Present for physical laws' }
      ],
      examInsights: [
        {
          title: 'The Intervening Phrase Concord Trap',
          desc: 'VIT questions love phrasing like: "The design of the composite turbine blades *have/has* been approved." The true subject is "design" (singular), so the correct verb is *has*.'
        }
      ],
      topics: [
        { id: 'baeng-t2-1', title: '1, 2 & 3-Concord (Subject-Verb Agreement)', theory: 'Rules of agreement: compound subjects joined by and/or, indefinite pronouns (each, everyone), nouns ending in -s that are singular (physics, data/datum).' },
        { id: 'baeng-t2-2', title: '4, 5 & 6-Tense Shifts in Technical Reports', theory: 'Maintaining consistent tense: past tense for completed experimental methods; present tense for established universal scientific facts.' },
        { id: 'baeng-t2-3', title: '7-Conditionals & 8/9-Active and Passive Voice', theory: 'Zero, 1st, 2nd, and 3rd conditional structures. Impersonal passive for objective scientific procedure documentation.' }
      ],
      pyqs: [
        {
          id: 'baeng-q2-1',
          exam: 'BAENG101 FAT April 2025 Slot F2 — 10 Marks',
          marks: '10 Marks',
          question: 'Identify and correct the grammatical errors in the following sentences:\n(a) The quality of the manufactured microchips are deteriorating.\n(b) Neither the software architect nor the database engineers was available.\n(c) If the cooling pump had failed, the reactor overheats.\n(d) Ten kilometers are a long distance for manual cable laying.\n(e) Each of the participating team members have submitted their report.',
          solution: '(a) Error: "are deteriorating" -> Correction: "is deteriorating" (Subject is singular noun "quality", not "microchips").\n(b) Error: "was available" -> Correction: "were available" (In neither...nor, the verb agrees with the plural closer subject "database engineers").\n(c) Error: "overheats" -> Correction: "would have overheated" (Third conditional requires past perfect "had failed" paired with "would have overheated").\n(d) Error: "are" -> Correction: "is" (Ten kilometers represents a single collective distance entity).\n(e) Error: "have submitted" -> Correction: "has submitted" ("Each" takes a singular verb).'
        }
      ]
    },
    {
      id: 'baeng-m3',
      moduleNum: 3,
      pdfUrl: '/pdfs/english/English_MOD-3.pdf',
      title: 'Reading',
      co: 'CO: 4',
      examScope: 'CAT-2 & FAT',
      weightage: '15-20 Marks in FAT',
      status: 'yet_to_start',
      scope: 'Analysing definitions: Types of definitions (Formal, Semi-formal, Informal), Methods for Expanding Definitions (Explication, Operating principle, Comparison and contrast, Analogy, Physical description, Exemplification), Reading Comprehension: Drawing Inferences from Scientific Texts, Distinguishing facts from hypotheses, Structure of a research article (IMRAD: Introduction, Methods, Results, Discussion), and Critical analysis and dissection of published scientific papers.',
      blueprint: {
        marksTotal: '15 to 20 Marks in FAT',
        questionTypes: [
          { type: 'Question Type A (10 Marks)', desc: 'Technical Definitions: Writing formal three-part definitions (Term = Class + Differentia) for three engineering devices and expanding one using operating principles and components.' },
          { type: 'Question Type B (10 Marks)', desc: 'Reading Comprehension: Reading an unfamiliar scientific text, answering fact and inference-based analytical questions, and dissecting the author\'s IMRAD argument.' }
        ]
      },
      formulaSheet: [
        { name: 'Formal Definition Structure', formula: '\\text{Term} = \\text{Class (Genus)} + \\text{Differentia (Distinguishing Characteristics)}', note: 'Never use circular definitions (e.g., "A compiler is a program that compiles")' },
        { name: 'IMRAD Architecture', formula: '\\text{Introduction} \\rightarrow \\text{Methods} \\rightarrow \\text{Results} \\rightarrow \\text{Discussion}', note: 'Universal structural standard for IEEE and Elsevier research articles' }
      ],
      examInsights: [
        {
          title: 'The Circular Definition Pitfall',
          desc: 'Never repeat the word being defined inside the differentia (e.g., defining "Resistance is the property that resists current" will result in zero marks). State: "Resistance is the physical property of a conductor that opposes the flow of electric charge, converting electrical energy into thermal dissipation."'
        }
      ],
      topics: [
        { id: 'baeng-t3-1', title: '1 & 2-Analysing Definitions: Types of Definitions', theory: 'Informal (synonym), Semi-formal (clause), and Formal three-part definitions (Term, Class, Differentia).' },
        { id: 'baeng-t3-2', title: '3 & 4-Methods for Expanding Definitions', theory: 'Expanding formal definitions using etymology, operating principle, physical components, cause-and-effect, and analogy.' },
        { id: 'baeng-t3-3', title: '5 & 6-Reading Comprehension: Inferences from Scientific Texts', theory: 'Skimming, scanning, intensive reading. Differentiating explicit data statements from subtle author inferences.' },
        { id: 'baeng-t3-4', title: '7, 8, 9 & 10-Structure & Analysis of a Research Article (IMRAD)', theory: 'Deconstructing scientific papers: Abstract, Introduction (gap), Methods (reproducibility), Results, Discussion, Conclusion.' }
      ],
      pyqs: [
        {
          id: 'baeng-q3-1',
          exam: 'BAENG101 FAT April 2025 Slot F2 — 10 Marks',
          marks: '10 Marks',
          question: 'Write a formal three-part definition for any two of the following terms, clearly identifying the Term, Class, and Differentia. Expand one of them using its working principle and components:\n(a) Photovoltaic Cell\n(b) Operating System\n(c) Transformer',
          solution: 'Formal Definitions:\n(a) Photovoltaic Cell: [Term]: A photovoltaic cell [Class]: is a semiconductor p-n junction diode [Differentia]: that directly converts photon energy from sunlight into electrical energy via the photovoltaic effect.\n(b) Operating System: [Term]: An operating system [Class]: is system software [Differentia]: that manages computer hardware and software resources and provides common services for computer programs.\nExpanded Definition of Photovoltaic Cell:\n- Working Principle: Operates on the internal photoelectric effect. When sunlight with photon energy hν greater than the semiconductor bandgap Eg strikes the p-n junction, electron-hole pairs are generated in the depletion region. The internal electric field sweeps electrons toward the n-layer and holes toward the p-layer, establishing a photovoltage across the external terminals.\n- Physical Components: (1) Anti-reflective surface coating (silicon nitride), (2) Metallic front contact grid fingers, (3) n-type emitter silicon layer, (4) p-type base silicon absorber layer, and (5) Aluminum back contact sheet.'
        }
      ]
    },
    {
      id: 'baeng-m4',
      moduleNum: 4,
      pdfUrl: '/pdfs/english/English_MOD-4.pdf',
      title: 'Writing',
      co: 'CO: 1',
      examScope: 'CAT-2 & FAT',
      weightage: '20 Marks in FAT',
      status: 'strong',
      scope: 'Research Writing: Structure of a Review Paper, Types of Reviews (Narrative Review, Systematic Review, Meta-analysis), Literature Review methodology, Literature synthesis matrices, Identifying research gaps and formulate research questions, Academic integrity, Plagiarism avoidance through ethical paraphrasing, and Referencing Styles: IEEE Format (numeric [1]) vs. APA 7th Edition Format (Author-Date (Smith, 2024)).',
      blueprint: {
        marksTotal: '20 Marks in FAT',
        questionTypes: [
          { type: 'Question Type A (10 Marks)', desc: 'Structure of a Review Paper: Explaining the sections of a literature review, difference between narrative and systematic reviews, and constructing a literature synthesis matrix.' },
          { type: 'Question Type B (10 Marks)', desc: 'Referencing Styles: Formatting bibliographic entries and in-text citations in IEEE style and APA 7th edition for journal articles, books, and conference proceedings.' }
        ]
      },
      formulaSheet: [
        { name: 'IEEE Journal Citation Template', formula: '\\text{[1] J. K. Author, \"Title of paper,\" } \\textit{Abbrev. Periodical}\\text{, vol. x, no. x, pp. xxx--xxx, Year.}', note: 'Numbered in order of appearance' },
        { name: 'APA 7th Journal Citation Template', formula: '\\text{Author, A. A. (Year). Title of article. } \\textit{Title of Periodical}\\text{, } \\textit{xx}\\text{(x), pp--pp.}', note: 'Alphabetical order by author surname' }
      ],
      examInsights: [
        {
          title: 'IEEE vs APA Quotation Marks & Italics',
          desc: 'In IEEE referencing, article titles are placed in double quotation marks ("..."), while journal and book titles are italicized. In APA, article titles are in plain sentence case without quotes, while journal titles and volume numbers are italicized.'
        }
      ],
      topics: [
        { id: 'baeng-t4-1', title: '1, 2 & 3-Research Writing: Structure of a Review Paper', theory: 'Purpose of literature reviews. Systematic vs narrative reviews. PRISMA protocol for systematic literature retrieval.' },
        { id: 'baeng-t4-2', title: '4 & 5-Types of Reviews & 6, 7 & 8-Literature Review Methodology', theory: 'Narrative overview vs meta-analysis. Creating a synthesis matrix: grouping papers by methodology, findings, and research gaps.' },
        { id: 'baeng-t4-3', title: '9, 10, 11 & 12-Referencing Styles: IEEE vs. APA', theory: 'In-text citation rules. End reference list conventions for books, journal papers, conference proceedings, patents, and web sources.' }
      ],
      pyqs: [
        {
          id: 'baeng-q4-1',
          exam: 'BAENG101 FAT April 2025 Slot F2 — 10 Marks',
          marks: '10 Marks',
          question: 'Format the following bibliographic source metadata into: (i) IEEE Referencing Style, and (ii) APA 7th Edition Referencing Style:\nAuthor: Robert Alan Green; Article Title: Deep Learning Optimization in Distributed Cloud Computing; Journal: IEEE Transactions on Cloud Computing; Volume: 11; Issue: 3; Pages: 420-435; Year: 2024; DOI: 10.1109/TCC.2024.1042301.',
          solution: '(i) IEEE Referencing Style:\n[1] R. A. Green, "Deep learning optimization in distributed cloud computing," IEEE Trans. Cloud Comput., vol. 11, no. 3, pp. 420–435, 2024, doi: 10.1109/TCC.2024.1042301.\n(ii) APA 7th Edition Referencing Style:\nGreen, R. A. (2024). Deep learning optimization in distributed cloud computing. IEEE Transactions on Cloud Computing, 11(3), 420–435. https://doi.org/10.1109/TCC.2024.1042301.'
        }
      ]
    },
    {
      id: 'baeng-m5',
      moduleNum: 5,
      pdfUrl: '/pdfs/english/English_MOD-5.pdf',
      title: 'Interpersonal Communication',
      co: 'CO: 6',
      examScope: 'FAT Only',
      weightage: '15-20 Marks in FAT',
      status: 'not_confident',
      scope: 'Interpersonal Communication dynamics, Leadership Styles (Autocratic, Democratic, Laissez-faire, Transformational, Servant leadership), Belbin Team Roles (Action-oriented: Shaper, Implementer, Completer Finisher; People-oriented: Coordinator, Teamworker, Resource Investigator; Thought-oriented: Plant, Monitor Evaluator, Specialist), Negotiation Skills (Principled negotiation, BATNA), Thomas-Kilmann Conflict Management Modes (Competing, Collaborating, Compromising, Avoiding, Accommodating), and Writing a Winning Statement of Purpose (SOP).',
      blueprint: {
        marksTotal: '15 to 20 Marks in FAT',
        questionTypes: [
          { type: 'Question Type A (10 Marks)', desc: 'Belbin Team Roles: Describing the 9 team roles categorized into Action, People, and Thought domains, and explaining how role balance prevents engineering project failures.' },
          { type: 'Question Type B (10 Marks)', desc: 'Thomas-Kilmann Conflict Model: Drawing the 2D grid of Assertiveness vs. Cooperativeness and explaining the 5 conflict modes with workplace scenarios.' },
          { type: 'Question Type C (10 Marks)', desc: 'Statement of Purpose (SOP): Drafting a structured 5-paragraph SOP for higher studies or explaining the key components of an effective SOP.' }
        ]
      },
      formulaSheet: [
        { name: 'Thomas-Kilmann Conflict Grid', formula: '\\text{Assertiveness (Focus on Own Goals)} \\times \\text{Cooperativeness (Focus on Others\' Goals)}', note: '5 Modes: Competing, Collaborating, Compromising, Avoiding, Accommodating' },
        { name: 'BATNA in Negotiation', formula: '\\text{BATNA} = \\text{Best Alternative To a Negotiated Agreement}', note: 'Determines the reservation point in principled negotiation' }
      ],
      examInsights: [
        {
          title: 'Belbin 3 Domains Classification',
          desc: 'VIT examiners require categorizing the 9 Belbin roles into their three distinct clusters: (1) Action-Oriented (Shaper, Implementer, Completer Finisher), (2) People-Oriented (Coordinator, Teamworker, Resource Investigator), and (3) Thought-Oriented (Plant, Monitor Evaluator, Specialist).'
        }
      ],
      topics: [
        { id: 'baeng-t5-1', title: '1-Interpersonal Communication & 2-Leadership Styles', theory: 'Emotional intelligence, active listening, transactional analysis. Autocratic vs democratic vs transformational leadership.' },
        { id: 'baeng-t5-2', title: '3-Belbin Team Roles', theory: 'The 9 Belbin roles: Action (Shaper, Implementer, Completer Finisher), People (Coordinator, Teamworker, Resource Investigator), Thought (Plant, Monitor Evaluator, Specialist).' },
        { id: 'baeng-t5-3', title: '4-Negotiation Skills & 5-Thomas-Kilmann Conflict Management', theory: 'Fisher & Ury principled negotiation. BATNA. TKI two-axis model: Competing, Collaborating, Compromising, Avoiding, Accommodating.' },
        { id: 'baeng-t5-4', title: '6-Statement of Purpose (SOP)', theory: 'Writing an academic SOP: Hook/motivation, undergraduate achievements, specific university alignment, and long-term career goals.' }
      ],
      pyqs: [
        {
          id: 'baeng-q5-1',
          exam: 'BAENG101 FAT April 2025 Slot F2 — 10 Marks',
          marks: '10 Marks',
          question: 'Explain the Thomas-Kilmann Conflict Mode Instrument (TKI). Draw the two-dimensional matrix and describe each of the five conflict handling modes with suitable engineering project scenarios.',
          solution: 'TKI Framework: Classifies conflict behavior along two independent dimensions:\n1. Assertiveness: Extent to which an individual attempts to satisfy their own concerns.\n2. Cooperativeness: Extent to which an individual attempts to satisfy the other person\'s concerns.\nFive Modes:\n1. Competing (High Assertiveness, Low Cooperativeness): "My way." Authoritarian approach. Vital when decisive emergency safety action is needed (e.g., shutting down a leaking chemical plant).\n2. Collaborating (High Assertiveness, High Cooperativeness): "Our way." Win-win approach. Both sides work together to find an integrative solution (e.g., redesigning a product to meet both strict safety and aesthetic design criteria).\n3. Compromising (Moderate Assertiveness, Moderate Cooperativeness): "Halfway." Both parties give up something to reach a fast expedient agreement (e.g., agreeing on a middle ground delivery deadline).\n4. Avoiding (Low Assertiveness, Low Cooperativeness): "No way." Sidestepping the issue. Useful when the matter is trivial or emotions are high and cooling down is required.\n5. Accommodating (Low Assertiveness, High Cooperativeness): "Your way." Yielding to the other perspective. Useful when you realize your technical stance was incorrect or preserving a long-term client relationship is paramount.'
        }
      ]
    },
    {
      id: 'baeng-m6',
      moduleNum: 6,
      pdfUrl: '/pdfs/english/English_MOD-6.pdf',
      title: 'Contemporary Topics',
      co: 'CO: 5',
      examScope: 'FAT Only',
      weightage: '5-10 Marks in FAT',
      status: 'strong',
      scope: 'Guest Lecture 1: Generative AI and Large Language Models in Technical Writing and Documentation, and Guest Lecture 2: Cross-Cultural Global Workplace Communication, Virtual Teams & Digital Communication Ethics.',
      blueprint: {
        marksTotal: '5 to 10 Marks in FAT',
        questionTypes: [
          { type: 'Question Type A (5-10 Marks)', desc: 'AI in Technical Communication: Role of prompt engineering, automated API documentation, and ethical safeguards against hallucination in engineering manuals.' }
        ]
      },
      formulaSheet: [
        { name: 'AI Prompt Engineering Pattern', formula: '\\text{Context} + \\text{Persona} + \\text{Task} + \\text{Constraints} + \\text{Verification Standard}', note: 'Standard for generating technical documentation' }
      ],
      examInsights: [
        {
          title: 'Guest Lecture Contemporary Topics Format',
          desc: 'Structure answers with concise professional definitions, advantages, ethical challenges, and concrete engineering workplace examples.'
        }
      ],
      topics: [
        { id: 'baeng-t6-1', title: 'Guest Lecture 1: Generative AI in Technical Writing', theory: 'LLMs in technical documentation. Prompt engineering, content curation, automated code commenting, and factual verification.' },
        { id: 'baeng-t6-2', title: 'Guest Lecture 2: Global Workplace & Virtual Communication', theory: 'Asynchronous communication, digital etiquette, high-context vs low-context cultural nuances in multinational engineering teams.' }
      ],
      pyqs: [
        {
          id: 'baeng-q6-1',
          exam: 'BAENG101 FAT April 2025 Slot F2 — 5 Marks',
          marks: '5 Marks',
          question: 'Write a short note on the opportunities and ethical challenges of using Generative AI (LLMs) in technical documentation.',
          solution: 'Opportunities: (1) Rapid drafting of structured technical manuals, user guides, and API documentation from code repositories, (2) Automated conversion of technical data into accessible multi-lingual user tutorials, (3) Consistency in terminology across thousands of product manuals.\nEthical Challenges & Safeguards: (1) Hallucination Risk: AI models may generate plausible but mathematically or physically flawed technical instructions that could lead to equipment damage or safety violations; human verification against official engineering standards is non-negotiable. (2) Intellectual Property & Plagiarism: Ensuring proprietary source code and confidential company trade secrets are not ingested into public training sets. (3) Bias & Tone: Ensuring generated communication maintains professional, inclusive, and culturally neutral corporate tone.'
        }
      ]
    }
  ]
};
