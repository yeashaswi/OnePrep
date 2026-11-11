// Technical English Communication (BAENG101) - Fall Semester 2026-27
// Aligned with Official VIT Syllabus, Official 100-Word Definition Bank, and Student FAT Blueprint

export const englishCourse = {
  id: 'BAENG101',
  code: 'BAENG101',
  title: 'Technical English Communication',
  credits: 4,
  badge: '5 Modules • 100M FAT Blueprint',
  slot: 'F2+TF2',
  classId: 'VL2026270107481',
  faculty: 'SARASWATHY S - SSL',
  examDate: '26-Nov-2026',
  examTiming: '09:30 AM - 12:30 PM (FN1)',
  description: 'Comprehensive preparation for BAENG101 FAT (100 Marks). Covers Business Communication (Q1 & Q2), Grammar in Sentences (Q3 Concord/Tenses, Q4 Conditionals/Voices), The Official 100-Word Definition Bank (Q5), IMRAD Reading (Q6), Literature Review Synthesis (Q7), Belbin Roles (Q8), and Leadership & Negotiation Case Studies (Q9 & Q10). SOP and independent abstract drafting are strictly excluded.',
  fatBlueprintOverview: {
    totalMarks: 100,
    duration: '3 Hours',
    structure: [
      { q: 'Q1', topic: 'Conceptual Business Communication (Tech vs Creative, Scientific vs Reporting)', marks: 10, module: 1 },
      { q: 'Q2', topic: '5 Cs of Technical Writing Case Study & Rewrite', marks: 10, module: 1 },
      { q: 'Q3', topic: 'Grammar: Concord (5M Sentences) + Tenses (5M Sentences)', marks: 10, module: 2 },
      { q: 'Q4', topic: 'Grammar: Conditionals (5M Fill-in-blanks) + Voices (5M Procedural Passive)', marks: 10, module: 2 },
      { q: 'Q5', topic: 'Word Bank Definitions (Term = Class + Differentia from 100-Word Bank)', marks: 10, module: 3 },
      { q: 'Q6 [IC with Q7]', topic: 'Reading Comprehension / Structure of Research Article (IMRAD)', marks: 10, module: 3 },
      { q: 'Q7 [IC with Q6]', topic: 'Literature Review Synthesis (Synthesize 2-3 Abstracts into 200 Words)', marks: 10, module: 4 },
      { q: 'Q8', topic: 'Interpersonal Communication & Belbin Team Roles (3 Clusters)', marks: 10, module: 5 },
      { q: 'Q9', topic: 'Case Study: Leadership Styles (Autocratic / Democratic / Transformational)', marks: 10, module: 5 },
      { q: 'Q10', topic: 'Case Study: Negotiation Skills, BATNA, ZOPA & Conflict Management (TKI)', marks: 10, module: 5 }
    ]
  },
  modules: [
    {
      id: 'baeng-m1',
      moduleNum: 1,
      summary: "Principles of technical writing, formal communication barriers, and 5 Cs of technical reporting.",
      pdfUrl: '/pdfs/english/English_MOD-1.pdf',
      title: 'Introduction to Technical Communication & 5 Cs',
      co: 'CO: 2',
      examScope: 'FAT Questions Q1 & Q2 (20 Marks Total)',
      weightage: '20 Marks in FAT (Q1: 10M + Q2: 10M)',
      status: 'strong',
      scope: 'The Nature of Technical Writing, Differences between Technical and General/Literary Writing, Taxonomy of Technical Writing: Scientific Writing vs. Technical Reporting, The 5 Cs of Technical Writing (Clarity, Conciseness, Completeness, Concreteness, Courtesy/Correctness), Business Communication channels, and Case Studies on diagnosing and revising flawed technical correspondence.',
      blueprint: {
        marksTotal: '20 Marks in FAT (Q1: 10M Conceptual + Q2: 10M 5 Cs Case Study)',
        questionTypes: [
          { type: 'FAT Question 1 (10 Marks)', desc: 'Conceptual Business Communication: Differentiating Scientific Writing vs. Technical Reporting, or Technical vs. Creative writing across 5 rigorous criteria.' },
          { type: 'FAT Question 2 (10 Marks)', desc: '5 Cs Case Study: A flawed, wordy, ambiguous corporate email or technical report is provided. Students must identify the violations of the 5 Cs and rewrite it professionally.' }
        ]
      },
      formulaSheet: [
        { name: 'The 5 Cs Formula', formula: '\text{Clarity} + \text{Conciseness} + \text{Completeness} + \text{Concreteness} + \text{Correctness}', note: 'Mandatory rubric for FAT Question 2' },
        { name: 'Conciseness Rule', formula: '\text{Informational Density} = \frac{\text{Key Technical Facts}}{\text{Total Word Count}} \rightarrow \text{Maximize}', note: 'Prune deadwood phrases and redundant tautologies' }
      ],
      examInsights: [
        {
          title: 'FAT Q2: The 5 Cs Case Study Presentation Strategy',
          desc: 'In Question 2, examiners deduct marks if students only rewrite the email without explanation. First create a 5-row table identifying which of the 5 Cs was violated in the original prompt (with quotes), then present the polished rewrite.'
        }
      ],
      topics: [
        { id: 'baeng-t1-1', title: '1-The Nature of Technical Writing & 2/3-Scientific Writing vs Technical Reporting', theory: 'Objective, transactional communication. Primary inquiry journal articles vs applied organizational engineering reports.' },
        { id: 'baeng-t1-2', title: '4-The 5 Cs of Technical Writing (FAT Q2 Focus)', theory: 'Clarity (syntax), Conciseness (pruning wordiness), Completeness (all parameters), Concreteness (specific facts), Correctness (mechanics).' },
        { id: 'baeng-t1-3', title: '5 & 6-Business Communication Principles (FAT Q1 Focus)', theory: 'Formal business emails, memos, letters of inquiry, downward/upward channels, and professional correspondence protocols.' }
      ],
      pyqs: [
        {
          id: 'baeng-q1-1',
          exam: 'BAENG101 FAT April 2025 Slot F2 / Question 1 — 10 Marks',
          marks: '10 Marks',
          question: 'Differentiate between Scientific Writing and Technical Reporting with respect to: (i) Primary Objective, (ii) Intended Audience, (iii) Structural Organization, (iv) Tone and Style, and (v) Outcome/Action expected.',
          solution: 'Comparison Table:\n1. Primary Objective:\n- Scientific Writing: Aims to document fundamental original research, validate scientific hypotheses, and contribute to permanent universal human knowledge.\n- Technical Reporting: Aims to solve practical operational problems, evaluate feasibility, and guide immediate managerial or engineering decisions.\n\n2. Intended Audience:\n- Scientific Writing: Global peer researchers, scholars, and specialists in the discipline.\n- Technical Reporting: Multi-disciplinary company stakeholders, engineering managers, technicians, and executive decision-makers.\n\n3. Structural Organization:\n- Scientific Writing: Strictly follows IMRAD (Introduction, Methods, Results, and Discussion).\n- Technical Reporting: Problem statement, executive summary, findings, risk matrix, and actionable recommendations.\n\n4. Tone and Style:\n- Scientific Writing: Impersonal, formal, passive voice, academic citations.\n- Technical Reporting: Direct, concise, action-oriented, utilizing bullet points, visual tables, and executive summaries.\n\n5. Outcome/Action Expected:\n- Scientific Writing: Peer review, journal publication, academic citations.\n- Technical Reporting: Immediate budget approval, engineering implementation, process modification, or safety remediation.'
        },
        {
          id: 'baeng-q1-2',
          exam: 'FAT Question 2 Archetype: 5 Cs Case Study — 10 Marks',
          marks: '10 Marks',
          question: 'CASE STUDY: You are an engineering lead at a tech firm. You receive the following poorly written email from a junior vendor:\n"Hey team, just wanted to quickly let you know that the server shipment thing we talked about will probably be delayed because of some minor logistics hiccups and stuff. We might send some parts soon, maybe next week or the week after if everything gets sorted out. Don\'t worry too much, we are trying our best. Let us know if you need any info."\n(a) Identify the specific violations of the 5 Cs of Technical Writing in this message.\n(b) Rewrite the email adhering strictly to the 5 Cs.',
          solution: 'Part (a) Breakdown of 5 Cs Violations:\n1. Clarity: Vague phrasing ("server shipment thing", "minor logistics hiccups and stuff") fails to identify the exact purchase order number, hardware components, or nature of the obstruction.\n2. Conciseness: Wordy colloquial fillers ("just wanted to quickly let you know", "don\'t worry too much", "trying our best") reduce signal-to-noise ratio.\n3. Completeness: Crucial information is missing: exact PO number, specific parts delayed, revised delivery dates, tracking IDs, and alternative contingency options.\n4. Concreteness: Highly ambiguous timelines ("soon", "maybe next week or the week after", "some parts") instead of hard dates, part numbers, and quantities.\n5. Correctness: Inappropriate informal tone ("Hey team") for a formal commercial B2B contract, and weak sign-off.\n\nPart (b) Rewritten Professional Email:\nSubject: Update: PO #84920 Server Rack Shipment Schedule - Revised Delivery Dates\n\nDear Project Engineering Team,\n\nWe are writing to provide a status update on Purchase Order #84920 (Ten Units of Dell PowerEdge R750 Server Racks).\n\nDue to port customs clearance delays at Chennai Terminal, the original delivery schedule of November 10, 2026, has been revised:\n- Batch 1 (4 Server Racks): Cleared customs; scheduled for on-site delivery on November 14, 2026.\n- Batch 2 (6 Server Racks): Under document inspection; scheduled for on-site delivery on November 18, 2026.\n\nAll real-time tracking can be monitored via BlueDart Waybill #902148291. We apologize for the operational inconvenience and are covering expedited local freight costs to prevent further project slippage.\n\nPlease contact our logistics desk at +91-44-2839-1000 for immediate support.\n\nSincerely,\nLogistics Operations Lead, Apex Hardware Ltd.'
        },
        {
          id: 'baeng-q1-3',
          exam: 'FAT Question 1 Archetype: Full Block Business Letter — 10 Marks',
          marks: '10 Marks',
          question: 'You are the Chief Reliability Officer at CloudScale Networks. On November 4, 2026, an unscheduled 4-hour data center outage affected your enterprise customer, FinServe Global. Write a formal Full-Block business letter to Mr. Andrew Vance, Director of Infrastructure at FinServe Global, explaining the root cause, immediate remediation, preventative architectural changes, and contractual SLA service credits.',
          solution: 'Full Block Business Letter Format (No indentation, single-spaced paragraphs with double spacing between blocks):\n\n[Letterhead]\nCLOUDSCALE NETWORKS INC.\n404 Silicon Expressway, Electronic City\nBengaluru, KA 560100\n\nNovember 6, 2026\n\nMr. Andrew Vance\nDirector of Infrastructure\nFinServe Global Financial Services\nTower 3, International Tech Park\nMumbai, MH 400051\n\nSubject: Incident Remediation & SLA Service Credit Notification — Incident ID #CS-2026-8812\n\nDear Mr. Vance,\n\nI am writing to formally communicate the root cause analysis, containment measures, and commercial remediation regarding the unscheduled four-hour service disruption experienced by FinServe Global on November 4, 2026, between 02:15 UTC and 06:15 UTC.\n\nIncident Root Cause:\nOur Post-Mortem investigation identified that during a routine firmware upgrade on Core Routing Switch CRS-04, an unhandled race condition in the Border Gateway Protocol (BGP) routing engine triggered route-table oscillation. While our automated failover protocol initiated within 300 milliseconds, a secondary synchronization lock on the primary authentication database prevented seamless session migration, resulting in transient connection timeouts across your Mumbai and Bengaluru API gateways.\n\nImmediate Containment & Architectural Remediation:\n1. The faulty routing firmware patch was fully rolled back at 05:40 UTC, and all redundant data links were verified healthy by 06:15 UTC.\n2. Database failover synchronization timeouts have been decoupled from BGP state changes, ensuring autonomous high-availability zone migration.\n3. We have implemented an automated canary deployment pipeline: future network updates will be staged across isolated synthetic clusters for a mandatory 72-hour burn-in period before multi-region deployment.\n\nContractual SLA Service Credit:\nIn accordance with Section 9.2 of our Master Enterprise Service Level Agreement, FinServe Global is entitled to a 15% billing credit for monthly availability dropping below 99.9%. In recognition of the operational impact on your banking transactions, CloudScale Networks has authorized a 25% credit amounting to INR 4,50,000, which will be credited automatically against your December 2026 invoice.\n\nWe deeply value our enterprise partnership with FinServe Global and remain dedicated to maintaining the highest standards of operational resilience. Please contact me directly at reliability@cloudscale.net if you require an executive technical briefing.\n\nSincerely,\n\n[Signature]\n\nVikramaditya Rao\nChief Reliability Officer\nCloudScale Networks Inc.\nEnclosure: Full Diagnostic Post-Mortem Report (Doc #PMR-8812.pdf)'
        },
        {
          id: 'baeng-q1-4',
          exam: 'FAT Question 2 Archetype: Incident Investigation Memo — 10 Marks',
          marks: '10 Marks',
          question: 'Write a formal inter-office Memorandum from the Safety & Compliance Lead to all Industrial Robotics Engineers regarding a hydraulic pressure failure in Assembly Cell #4, specifying the incident overview, root cause, temporary safety lockouts, and mandatory operational guidelines.',
          solution: 'Standard Memorandum Format:\n\nMEMORANDUM\n\nTO: All Industrial Robotics Engineering Personnel\nFROM: Dr. Anita Nair, Head of Safety & Operational Compliance\nDATE: November 6, 2026\nSUBJECT: Mandatory Safety Lockout & Remediation Protocol — Assembly Cell #4 Hydraulic Line Failure\n\n1. Purpose:\nThis memorandum outlines the emergency safety protocols and permanent operating procedures following a high-pressure hydraulic burst in Robotic Arm 4B at 09:30 AM on November 5, 2026.\n\n2. Summary of Incident & Root Cause:\nDuring high-speed spot welding cycles, the auxiliary hydraulic supply line operating at 210 bar suffered a micro-fatigue rupture. The pressure drop triggered an automatic emergency shutdown. Zero human casualties occurred due to automated protective light curtains. Physical inspection revealed that the flexible elastomer hose exceeded its manufacturer-specified 10,000-hour service life by 1,420 hours due to a lapse in the digital maintenance log.\n\n3. Immediate Containment & Lockout:\n- Assembly Cell #4 is placed under strict Lockout/Tagout (LOTO) status until November 9, 2026.\n- All 16 hydraulic articulated robotic arms across Cells #1 to #6 are currently undergoing acoustic emission non-destructive testing (NDT).\n\n4. Mandatory Action Items for Engineering Staff:\n- Operating Pressure Ceiling: Until further notice, maximum line pressure must not exceed 180 bar.\n- Daily Pre-Shift Inspection: Supervisors must visually verify that hydraulic hoses show zero surface cracking or fitting weepage before energizing system mains.\n- Automated Maintenance Logging: All replacement schedules are now hard-locked into the SAP maintenance database with automated 30-day advance part ordering.\n\nCompliance with these guidelines is mandatory. Direct all technical questions to the Safety Compliance Desk at Ext. 4410.'
        }
      ]
    },
    {
      id: 'baeng-m2',
      moduleNum: 2,
      summary: "Essential English grammar, subject-verb agreement concord, active and passive voices, and conditionals.",
      pdfUrl: '/pdfs/english/English_MOD-2.pdf',
      title: 'Grammar (Concord, Tenses, Conditionals & Voices)',
      co: 'CO: 3',
      examScope: 'FAT Questions Q3 & Q4 (20 Marks Total)',
      weightage: '20 Marks in FAT (Q3: 10M + Q4: 10M)',
      status: 'need_to_revise',
      scope: 'Concord (Subject-Verb Agreement rules in isolated sentences, intervening prepositional phrases, compound subjects, correlative conjunctions, collective nouns), Tense shifts and maintaining chronological consistency in scientific reporting, Conditionals (Zero, First, Second, Third, and Mixed conditionals with fill-in-the-blanks format), and Active vs. Passive Voice (transforming procedural steps into objective impersonal passive constructions).',
      blueprint: {
        marksTotal: '20 Marks in FAT (Q3: 5M Concord + 5M Tenses; Q4: 5M Conditionals + 5M Voices)',
        questionTypes: [
          { type: 'FAT Question 3 (10 Marks)', desc: 'Concord in sentences (not paragraphs) [5 Marks] + Correcting and choosing correct Tenses in technical sentences [5 Marks].' },
          { type: 'FAT Question 4 (10 Marks)', desc: 'Conditionals fill in the blanks [5 Marks] + Active to Passive procedural transformation [5 Marks].' }
        ]
      },
      formulaSheet: [
        { name: 'Intervening Phrase Concord', formula: '\text{Subject} + [\text{Prepositional / Parenthetical Phrase}] + \text{Verb agrees with SUBJECT}', note: 'Ignore phrases like "along with", "together with", "as well as"' },
        { name: 'Correlative Conjunctions', formula: '\text{Either A or B} \implies \text{Verb agrees strictly with B (closer subject)}', note: 'Applies to neither...nor, not only...but also' },
        { name: 'Conditional Hierarchy', formula: '\text{Type 1: If + Present} \rightarrow \text{will + V}, \quad \text{Type 2: If + Past} \rightarrow \text{would + V}, \quad \text{Type 3: If + Past Perfect} \rightarrow \text{would have + V3}', note: 'Type 0: If + Present -> Present for physical laws' }
      ],
      examInsights: [
        {
          title: 'FAT Q3 & Q4 Format Insight (From Notebook Blueprint)',
          desc: 'The exam explicitly tests Concord in individual SENTENCES (not lengthy paragraphs). Conditionals are given as Fill-in-the-Blanks. Voice questions require converting active lab instructions into third-person impersonal passive without "by us" or "by me".'
        }
      ],
      topics: [
        { id: 'baeng-t2-1', title: '1, 2 & 3-Concord (Subject-Verb Agreement in Sentences)', theory: 'Rules of agreement: compound subjects joined by and/or, indefinite pronouns (each, everyone), nouns ending in -s that are singular (physics, data/datum).' },
        { id: 'baeng-t2-2', title: '4, 5 & 6-Tenses in Scientific Reporting', theory: 'Maintaining consistent tense: past tense for completed experimental methods; present tense for established universal scientific facts.' },
        { id: 'baeng-t2-3', title: '7-Conditionals (Fill in the Blanks) & 8/9-Active and Passive Voice', theory: 'Zero, 1st, 2nd, and 3rd conditional structures. Impersonal passive for objective scientific procedure documentation.' }
      ],
      pyqs: [
        {
          id: 'baeng-q2-1',
          exam: 'FAT Question 3: Concord & Tenses Drill 1 — 10 Marks',
          marks: '10 Marks',
          question: 'Part A: Concord (5 Marks) — Correct the subject-verb agreement errors in the following 5 independent sentences:\n1. The quality of the manufactured microchips are deteriorating.\n2. Neither the project manager nor the software engineers was available for the standup.\n3. The microprocessor along with its peripheral sensors were damaged during soldering.\n4. Ten kilometers are considered a long transmission line distance for low-voltage cables.\n5. Each of the automated safety valves have failed inspection.\n\nPart B: Tenses (5 Marks) — Fill in the blanks with the appropriate tense form of the verb provided in brackets:\n1. By the time the cooling pumps arrived, the primary reactor core ________ (already reach) critical temperature.\n2. Quantum entanglement ________ (occur) when two particles remain interconnected regardless of distance.\n3. The development team ________ (conduct) thermal stress tests since 6:00 AM this morning.\n4. If the power supply spikes, the circuit breaker automatically ________ (isolate) the load.\n5. Last year, the research team ________ (publish) their benchmark results in Nature Electronics.',
          solution: 'Part A Solutions (Concord):\n1. "is deteriorating" (Subject is singular noun "quality", not "microchips").\n2. "were available" (In neither...nor constructions, verb agrees with the closer plural subject "software engineers").\n3. "was damaged" (Intervening phrase "along with..." does not change the singular subject "microprocessor").\n4. "is considered" (Ten kilometers represents a single collective physical unit of measurement).\n5. "has failed" ("Each" is an indefinite singular pronoun requiring the singular verb "has").\n\nPart B Solutions (Tenses):\n1. "had already reached" (Past perfect for an event completed before another past event).\n2. "occurs" (Simple present for an established, timeless scientific law).\n3. "has been conducting" (Present perfect continuous for an action commencing in the past and continuing up to the present).\n4. "isolates" (Zero conditional / habitual physical rule).\n5. "published" (Simple past with the definitive past time marker "Last year").'
        },
        {
          id: 'baeng-q2-2',
          exam: 'FAT Question 4: Conditionals & Voices Drill 1 — 10 Marks',
          marks: '10 Marks',
          question: 'Part A: Conditionals (5 Marks) — Complete the following conditional sentences using the correct verb forms:\n1. If the operator ________ (press) the emergency cutoff button, the high-voltage relay trips immediately.\n2. If the battery team ________ (use) solid-state electrolytes, the energy density would increase by 40%.\n3. If the aeronautical engineer ________ (detect) the fuselage micro-fracture earlier, the catastrophic failure would have been prevented.\n4. Unless the firmware ________ (receive) a valid cryptographic checksum, the bootloader will abort the installation.\n5. If the ambient temperature dropped below absolute zero, classical thermodynamics ________ (cease) to apply.\n\nPart B: Voices (5 Marks) — Transform the following active lab procedural statements into objective impersonal passive voice:\n1. We heated the aqueous solution to 80 °C using a magnetic hotplate.\n2. The technician calibrated the oscilloscope before recording the waveform frequencies.\n3. We must inspect all soldered joints under an electron microscope.\n4. The software engineers deployed the new database patch at midnight.\n5. You should never exceed the maximum operating voltage of the capacitor.',
          solution: 'Part A Solutions (Conditionals):\n1. "presses" (Type 0 conditional: If + present simple -> present simple).\n2. "used" (Type 2 hypothetical conditional: If + past simple -> would + base verb).\n3. "had detected" (Type 3 past counterfactual: If + past perfect -> would have + past participle).\n4. "receives" (Type 1 conditional with unless: Unless + present simple -> will + base verb).\n5. "would cease" (Type 2 conditional).\n\nPart B Solutions (Impersonal Passive Voice):\n1. "The aqueous solution was heated to 80 °C using a magnetic hotplate." (Removed agent "We").\n2. "The oscilloscope was calibrated before the waveform frequencies were recorded."\n3. "All soldered joints must be inspected under an electron microscope."\n4. "The new database patch was deployed at midnight."\n5. "The maximum operating voltage of the capacitor should never be exceeded."'
        },
        {
          id: 'baeng-q2-3',
          exam: 'FAT Question 3: Concord & Tenses Drill 2 — 10 Marks',
          marks: '10 Marks',
          question: 'Part A: Concord (5 Marks) — Identify and correct the agreement errors in these 5 sentences:\n1. A series of high-frequency electrical pulses were transmitted across the coaxial cable.\n2. Either the main motherboard or the auxiliary graphics cards is causing the power surge.\n3. The data collected from the 500 vibration sensors proves the structural stability of the bridge.\n4. Neither of the candidate cryptographic algorithms are deemed quantum-resistant.\n5. Breadth-first search as well as depth-first search traverse graphs in polynomial time.\n\nPart B: Tenses (5 Marks) — Fill in the blanks with the correct form of the verbs in parentheses:\n1. Isaac Newton ________ (formulate) the universal laws of gravitation in the seventeenth century.\n2. Look at the cooling reservoir; the liquid nitrogen ________ (evaporate) rapidly!\n3. By the end of this fiscal year, our automated assembly line ________ (manufacture) over one million lithium cells.\n4. In scientific articles, researchers always ________ (report) empirical data in standard SI units.\n5. When the maintenance crew arrived, the main diesel generator ________ (run) continuously for 72 hours.',
          solution: 'Part A Solutions (Concord):\n1. "was transmitted" (Subject is singular collective noun "series", not "pulses").\n2. "are causing" (In either...or, verb agrees with the closer plural subject "graphics cards").\n3. "prove" (In standard technical English, "data" is treated as a plural noun; Latin singular is "datum").\n4. "is deemed" ("Neither" as a standalone pronoun takes a singular verb).\n5. "traverses" (Parenthetical phrase "as well as..." does not alter the singular subject "Breadth-first search").\n\nPart B Solutions (Tenses):\n1. "formulated" (Definitive completed historical past action).\n2. "is evaporating" (Present continuous for an action currently transpiring before the observer).\n3. "will have manufactured" (Future perfect for an action to be completed before a specified future boundary: "by the end of this fiscal year").\n4. "report" (Simple present for standard recurring professional practice).\n5. "had been running" (Past perfect continuous for an action ongoing over a duration prior to another past moment).'
        },
        {
          id: 'baeng-q2-4',
          exam: 'FAT Question 4: Conditionals & Voices Drill 2 — 10 Marks',
          marks: '10 Marks',
          question: 'Part A: Conditionals (5 Marks) — Complete the sentences with appropriate verb forms:\n1. If a photon ________ (strike) the photodiode, it creates an electron-hole pair.\n2. If the company invested $5 Million in automated optical inspection, production throughput ________ (double).\n3. Had the telemetry receiver been properly shielded, electromagnetic interference ________ (not corrupt) the sensor feed.\n4. Providing that the heat sink temperature ________ (remain) below 65 °C, the processor will not throttle clock speeds.\n5. If scientists ________ (discover) room-temperature superconductors tomorrow, power transmission losses would disappear overnight.\n\nPart B: Voices (5 Marks) — Rewrite into objective impersonal passive voice for a laboratory procedural report:\n1. We cleansed the silicon wafer using acetone and deionized water.\n2. The research assistant measured the resistivity at five-minute intervals.\n3. Engineers must observe all ESD grounding wristband protocols inside the cleanroom.\n4. We will announce the benchmark test results in tomorrow\'s symposium.\n5. You must never expose the optical sensor to direct ultraviolet radiation.',
          solution: 'Part A Solutions (Conditionals):\n1. "strikes" (Type 0 physical principle).\n2. "would double" (Type 2 conditional: hypothetical future).\n3. "would not have corrupted" (Inverted Type 3 conditional: Had + subject + V3 -> would have + V3).\n4. "remains" (Type 1 conditional with condition marker "Providing that").\n5. "discovered" (Type 2 hypothetical conditional).\n\nPart B Solutions (Impersonal Passive Voice):\n1. "The silicon wafer was cleansed using acetone and deionized water."\n2. "The resistivity was measured at five-minute intervals."\n3. "All ESD grounding wristband protocols must be observed inside the cleanroom."\n4. "The benchmark test results will be announced in tomorrow\'s symposium."\n5. "The optical sensor must never be exposed to direct ultraviolet radiation."'
        }
      ]
    },
    {
      id: 'baeng-m3',
      moduleNum: 3,
      summary: "Critical reading strategies, technical definition structures, and 100 high-frequency engineering vocabulary terms.",
      pdfUrl: '/pdfs/english/English_MOD-3.pdf',
      title: 'Reading, Definitions & 100-Word Bank',
      co: 'CO: 4',
      examScope: 'FAT Question Q5 (10M Mandatory) & Q6 (10M Internal Choice)',
      weightage: '20 Marks in FAT (Q5 + Q6)',
      status: 'yet_to_start',
      scope: 'Analysing definitions: Types of definitions (Formal, Semi-formal, Informal), Methods for Expanding Definitions, The Official 100-Word Bank (Term = Class + Differentia), Reading Comprehension: Drawing Inferences from Scientific Texts, Distinguishing empirical facts from author hypotheses, Structure of a research article (IMRAD: Introduction, Methods, Results, Discussion), and Critical analysis of published scientific papers.',
      blueprint: {
        marksTotal: '20 Marks in FAT (Q5: 10M Definition from 100-Word Bank + Q6: 10M Reading Comp/IMRAD)',
        questionTypes: [
          { type: 'FAT Question 5 (10 Marks)', desc: 'Official Word Bank Definitions: Writing formal three-part definitions (Term, Class, Differentia) for 5 terms (2M each) or 10 terms (1M each) chosen strictly from the 100-word bank.' },
          { type: 'FAT Question 6 [IC with Q7] (10 Marks)', desc: 'Reading Comprehension & IMRAD Structure: Reading an authentic scientific paper extract, dissecting the research gap, methodology, results, and drawing analytical inferences.' }
        ]
      },
      formulaSheet: [
        { name: 'Formal Definition Structure', formula: '\text{Term} = \text{Class (Genus)} + \text{Differentia (Distinguishing Characteristics)}', note: 'Never use circular definitions (e.g., "A compiler is a program that compiles")' },
        { name: 'IMRAD Architecture', formula: '\text{Introduction} \rightarrow \text{Methods} \rightarrow \text{Results} \rightarrow \text{Discussion}', note: 'Universal structural standard for IEEE and Elsevier research articles' }
      ],
      examInsights: [
        {
          title: 'FAT Q5: Definition Formula Guaranteed Full Marks',
          desc: 'For Question 5, write the answer in three clear demarcated lines:\n1. [Term]: Satellite\n2. [Class/Genus]: is an artificial spacecraft\n3. [Differentia]: placed into orbit around a planet to relay telecommunications or collect telemetry data.\nFollowed by the complete sentence. Examiners give 10/10 instantly!'
        }
      ],
      topics: [
        { id: 'baeng-t3-1', title: '1 & 2-Analysing Definitions: Types of Definitions (FAT Q5 Focus)', theory: 'Informal (synonym), Semi-formal (clause), and Formal three-part definitions (Term, Class, Differentia).' },
        { id: 'baeng-t3-2', title: '3 & 4-Methods for Expanding Definitions', theory: 'Expanding formal definitions using etymology, operating principle, physical components, cause-and-effect, and analogy.' },
        { id: 'baeng-t3-3', title: '5 & 6-Reading Comprehension: Inferences from Scientific Texts (FAT Q6 Focus)', theory: 'Skimming, scanning, intensive reading. Differentiating explicit data statements from subtle author inferences.' },
        { id: 'baeng-t3-4', title: '7, 8, 9 & 10-Structure & Analysis of a Research Article (IMRAD)', theory: 'Deconstructing scientific papers: Abstract, Introduction (gap), Methods (reproducibility), Results, Discussion, Conclusion.' }
      ],
      pyqs: [
        {
          id: 'baeng-q3-1',
          exam: 'FAT Question 5 Archetype: Official 100-Word Bank (Set 1) — 10 Marks',
          marks: '10 Marks',
          question: 'Write formal three-part definitions for any FIVE of the following terms selected from the official BAENG101 Word Bank, clearly identifying the Term, Class (Genus), and Differentia:\n(a) Artificial Intelligence (AI)\n(b) Drone\n(c) Cybersecurity\n(d) 3D Printing\n(e) Phishing\n(f) Renewable Energy\n(g) Biometric Authentication',
          solution: '1. Artificial Intelligence (AI):\n- Term: Artificial Intelligence (AI)\n- Class: A subfield of computer science\n- Differentia: dedicated to engineering algorithms and neural networks capable of performing tasks requiring human cognitive reasoning and decision-making.\n- Formal Definition: Artificial Intelligence is a subfield of computer science dedicated to engineering algorithms capable of executing tasks requiring human cognitive reasoning.\n\n2. Drone:\n- Term: Drone\n- Class: An unmanned aerial vehicle (UAV)\n- Differentia: steered remotely by a human pilot or guided autonomously by onboard inertial sensors and microprocessors.\n- Formal Definition: A drone is an unmanned aerial vehicle (UAV) steered remotely or guided autonomously by onboard sensors and microprocessors.\n\n3. Cybersecurity:\n- Term: Cybersecurity\n- Class: The technical and operational discipline\n- Differentia: focused on defending networked computer hardware, software, and sensitive digital data from unauthorized infiltration and cyberattacks.\n- Formal Definition: Cybersecurity is the technical discipline focused on defending computing systems and digital data from unauthorized cyberattacks.\n\n4. 3D Printing:\n- Term: 3D Printing\n- Class: An additive manufacturing fabrication process\n- Differentia: that builds three-dimensional physical objects layer upon layer directly from a 3D digital CAD model.\n- Formal Definition: 3D printing is an additive manufacturing technique that constructs physical objects by depositing successive layers of material guided by a 3D CAD model.\n\n5. Phishing:\n- Term: Phishing\n- Class: A deceptive social engineering cyberattack\n- Differentia: wherein an adversary impersonates a legitimate organization to trick victims into disclosing confidential passwords or credentials.\n- Formal Definition: Phishing is a deceptive cyberattack where an adversary impersonates a legitimate entity to deceive individuals into disclosing sensitive credentials.'
        },
        {
          id: 'baeng-q3-2',
          exam: 'FAT Question 5 Archetype: Official 100-Word Bank (Set 2) — 10 Marks',
          marks: '10 Marks',
          question: 'Write formal three-part definitions for any FIVE of the following terms selected from the official BAENG101 Word Bank, clearly identifying the Term, Class (Genus), and Differentia:\n(a) Quick commerce\n(b) UPI (Unified Payments Interface)\n(c) Walkalator\n(d) Smart watch\n(e) Battery\n(f) Cylinder\n(g) Bionote',
          solution: '1. Quick Commerce:\n- Term: Quick commerce\n- Class: An ultra-fast e-commerce business model\n- Differentia: that fulfills customer online orders of groceries and daily essentials within 10 to 30 minutes utilizing decentralized local dark stores.\n- Formal Definition: Quick commerce is an e-commerce model that fulfills on-demand deliveries within 10 to 30 minutes leveraging decentralized local dark stores.\n\n2. UPI (Unified Payments Interface):\n- Term: UPI\n- Class: An instant real-time retail payment architecture\n- Differentia: developed by NPCI that facilitates inter-bank peer-to-peer and peer-to-merchant financial transactions seamlessly via a single mobile interface.\n- Formal Definition: UPI is an instant real-time payment architecture developed by NPCI that facilitates inter-bank mobile fund transfers via a single virtual payment address.\n\n3. Walkalator:\n- Term: Walkalator\n- Class: A power-driven horizontal passenger conveyor system\n- Differentia: featuring a slow-moving endless flat belt designed to transport pedestrians across flat or slightly inclined long airport terminals.\n- Formal Definition: A walkalator is a power-driven horizontal conveyor system featuring a flat moving surface that transports pedestrians across long terminal corridors.\n\n4. Smart Watch:\n- Term: Smart watch\n- Class: A computerized wearable computing device\n- Differentia: in the form of a wristwatch with a touchscreen display, wireless Bluetooth connectivity, and biometric health tracking sensors.\n- Formal Definition: A smart watch is a wearable computing device in wristwatch form that provides wireless connectivity and real-time biometric health tracking.\n\n5. Battery:\n- Term: Battery\n- Class: An electrochemical energy storage device\n- Differentia: containing one or more galvanic cells that convert stored chemical potential energy directly into electrical energy via spontaneous redox reactions.\n- Formal Definition: A battery is an electrochemical device containing galvanic cells that converts stored chemical energy into electrical energy through redox reactions.'
        },
        {
          id: 'baeng-q3-3',
          exam: 'FAT Question 6: IMRAD Research Article Structure & Inference — 10 Marks',
          marks: '10 Marks',
          question: 'Read the following paragraph extracted from a technical research paper:\n"To assess the thermal degradation of solid-state polymer electrolytes, we synthesized five polyethylene oxide (PEO) samples blended with 15 wt% lithium bis(trifluoromethanesulfonyl)imide (LiTFSI). Differential Scanning Calorimetry (DSC) runs between -50 °C and 200 °C at a ramp rate of 10 °C/min revealed an endothermic melting peak at 64.2 °C. Interestingly, room-temperature ionic conductivity reached 1.2 × 10^-4 S/cm, which surpasses pristine PEO by two orders of magnitude. This dramatic conductivity enhancement suggests that the lithium salt acts as an effective plasticizer, disrupting polymer chain crystallinity and facilitating decoupled lithium cation transport along amorphous segments."\n\n(a) Identify which sentences correspond to the "Methods", "Results", and "Discussion" sections of the IMRAD format.\n(b) Explain the grammatical tense choices in each identified section.\n(c) Differentiate the author\'s empirical observation from their scientific inference.',
          solution: 'Part (a) IMRAD Section Classification:\n1. Methods: "To assess the thermal degradation of solid-state polymer electrolytes, we synthesized five polyethylene oxide (PEO) samples blended with 15 wt% lithium bis(trifluoromethanesulfonyl)imide (LiTFSI)."\n2. Results: "Differential Scanning Calorimetry (DSC) runs between -50 °C and 200 °C at a ramp rate of 10 °C/min revealed an endothermic melting peak at 64.2 °C. Interestingly, room-temperature ionic conductivity reached 1.2 × 10^-4 S/cm, which surpasses pristine PEO by two orders of magnitude."\n3. Discussion: "This dramatic conductivity enhancement suggests that the lithium salt acts as an effective plasticizer, disrupting polymer chain crystallinity and facilitating decoupled lithium cation transport along amorphous segments."\n\nPart (b) Grammatical Tense Analysis:\n- Methods Section: Uses Simple Past Tense ("synthesized", "blended") because the physical laboratory fabrication steps were executed and completed in past time.\n- Results Section: Uses Simple Past Tense ("revealed", "reached") to report specific historical instrument measurements, alongside Present Simple ("surpasses") for the permanent numerical comparative relationship.\n- Discussion Section: Uses Present Simple Tense ("suggests", "acts", "facilitating") because scientific deductions, physical models, and proposed chemical mechanisms describe enduring, universal scientific phenomena.\n\nPart (c) Empirical Observation vs. Author Inference:\n- Empirical Observation (Objective Data): The numerical instrument measurement that DSC revealed an endothermic peak at 64.2 °C and ionic conductivity reached 1.2 × 10^-4 S/cm (verifiable measurement facts).\n- Author Inference (Hypothesis/Interpretation): The statement that "the lithium salt acts as an effective plasticizer, disrupting polymer chain crystallinity and facilitating decoupled lithium transport" (a theoretical mechanistic deduction formulated by the researchers to explain the observed data).'
        }
      ]
    },
    {
      id: 'baeng-m4',
      moduleNum: 4,
      summary: "Formal technical proposal drafting, research literature review synthesis, and IEEE citation formatting.",
      pdfUrl: '/pdfs/english/English_MOD-4.pdf',
      title: 'Writing & Literature Review Synthesis',
      co: 'CO: 1',
      examScope: 'FAT Question Q7 (10M Internal Choice with Q6)',
      weightage: '10 Marks in FAT (Internal Choice with Q6)',
      status: 'strong',
      scope: 'Research Writing: Structure of a Review Paper, Types of Reviews (Narrative Review, Systematic Review, Meta-analysis), Literature Review methodology, Literature synthesis matrices, Identifying research gaps and formulating research questions, Academic integrity, Plagiarism avoidance through ethical paraphrasing, and Referencing Styles: IEEE Format (numeric [1]) vs. APA 7th Edition Format (Author-Date (Smith, 2024)). NOTE: Confirmed NO writing standalone abstracts from scratch.',
      blueprint: {
        marksTotal: '10 Marks in FAT (Q7: Literature Review Synthesis from 2-3 given abstracts)',
        questionTypes: [
          { type: 'FAT Question 7 [IC with Q6] (10 Marks)', desc: 'Literature Review Synthesis: Given 2 or 3 short abstracts of ~100 words each on a common technological topic, synthesize a unified, coherent 200-word review highlighting similarities, differences, and research gaps with in-text citations.' }
        ]
      },
      formulaSheet: [
        { name: 'Synthesis Formula', formula: '\text{Common Theme} + \text{Comparative Analysis (Paper A vs Paper B)} + \text{Synthesis/Gap Identified}', note: 'Target word count: 200 words' },
        { name: 'IEEE Citation Template', formula: '\text{[1] J. K. Author, "Title," } \textit{Journal}\text{, vol. x, no. x, pp. xxx--xxx, Year.}', note: 'Numeric citations in brackets' }
      ],
      examInsights: [
        {
          title: 'FAT Q7: How to Synthesize 200 Words from Given Abstracts',
          desc: 'Do NOT simply summarize each abstract in separate paragraphs! That yields only 4/10. A true synthesis combines the themes: "While Author A focuses on X, Author B demonstrates Y. Together, these studies establish Z, although neither resolves W (research gap)."'
        }
      ],
      topics: [
        { id: 'baeng-t4-1', title: '1, 2 & 3-Research Writing: Structure of a Review Paper', theory: 'Purpose of literature reviews. Systematic vs narrative reviews. PRISMA protocol for systematic literature retrieval.' },
        { id: 'baeng-t4-2', title: '4 & 5-Types of Reviews & 6, 7 & 8-Literature Review Synthesis (FAT Q7 Focus)', theory: 'Synthesizing multiple abstracts into a 200-word critical evaluation. Grouping by methodology, findings, and research gaps.' },
        { id: 'baeng-t4-3', title: '9, 10, 11 & 12-Referencing Styles: IEEE vs. APA', theory: 'In-text citation rules. End reference list conventions for books, journal papers, conference proceedings, patents, and web sources.' }
      ],
      pyqs: [
        {
          id: 'baeng-q4-1',
          exam: 'FAT Question 7 Archetype: Literature Review Synthesis 1 (EV Battery Cooling) — 10 Marks',
          marks: '10 Marks',
          question: 'Read the two short study abstracts below on Electric Vehicle (EV) Battery Thermal Management. Synthesize a coherent 200-word Literature Review comparing their methodologies, findings, and identifying the remaining research gap.\n\nAbstract 1 (Sharma et al., 2024):\nThis study investigates liquid immersion cooling for high-power lithium-ion battery packs operating under 3C fast-charging conditions. Using a dielectric mineral oil coolant circulating at 1.5 L/min, experimental tests revealed a maximum cell temperature reduction of 14.2 °C compared to conventional air cooling. The temperature uniformity across the 96-cell pack was maintained within ±1.8 °C. However, the system increased overall battery pack weight by 18% and required complex hermetic sealing to prevent fluid leakage.\n\nAbstract 2 (Patel & Vance, 2025):\nThis research evaluates Phase Change Material (PCM) composites embedded with copper foam for passive thermal regulation of electric vehicle batteries. Experimental results under dynamic discharge cycles demonstrated that paraffin wax/copper foam composites absorbed latent heat effectively, capping peak battery temperatures at 43.5 °C without requiring active pumping power. Nevertheless, the low sensible heat dissipation during prolonged highway cruising led to thermal saturation of the PCM after 75 minutes of continuous operation.',
          solution: 'Synthesized 200-Word Literature Review:\nEffective thermal management in lithium-ion battery packs remains crucial for preventing thermal runaway and maximizing cell longevity during high-drain operations. Recent scholarship highlights a technical divergence between active liquid cooling and passive phase-change architectures.\n\nSharma et al. (2024) demonstrated that dielectric liquid immersion cooling provides superior thermal regulation during aggressive 3C fast-charging, reducing peak cell temperatures by 14.2 °C and preserving pack uniformity within ±1.8 °C. However, their active approach introduces significant parasitic weight penalties (+18%) and severe fluid containment challenges. Conversely, Patel and Vance (2025) explored a passive alternative using paraffin wax/copper foam PCM composites, successfully capping battery temperatures at 43.5 °C with zero auxiliary power consumption. While advantageous for urban duty cycles, their findings underscore a critical operational bottleneck: PCMs experience rapid thermal saturation during continuous long-distance cruising exceeding 75 minutes due to limited latent storage capacity.\n\nResearch Gap: A critical gap persists in the synthesis of hybrid thermal architectures that integrate passive PCM buffers for peak surge absorption alongside low-flow, lightweight liquid cooling loops to purge saturated heat during extended cruising. Future investigations must evaluate hybrid system cost and weight trade-offs under real-world ambient temperature extremes.'
        },
        {
          id: 'baeng-q4-2',
          exam: 'FAT Question 7 Archetype: Literature Review Synthesis 2 (Solar Perovskites) — 10 Marks',
          marks: '10 Marks',
          question: 'Read the three abstracts below on Perovskite Solar Cells (PSCs). Synthesize a 200-word critical Literature Review establishing the technological trajectory, comparing approaches, and identifying the key research gap.\n\nAbstract A (Lin et al., 2024):\nLead-halide perovskite solar cells reached a certified Power Conversion Efficiency (PCE) of 26.1% utilizing self-assembled monolayers (SAMs) for hole transport. However, environmental moisture exposure causes rapid degradation, losing 30% PCE within 200 hours.\n\nAbstract B (Chen & Weber, 2025):\nTo eliminate toxic heavy metals, lead-free tin-based (CsSnI3) perovskites were synthesized. While exhibiting exceptional environmental non-toxicity and air stability exceeding 1,000 hours, their maximum recorded PCE plateaued at 14.8% due to rapid Sn2+ to Sn4+ oxidation.\n\nAbstract C (Al-Mansoor et al., 2026):\nTwo-dimensional (2D)/3D layered heterostructure encapsulation was developed, protecting lead-perovskite absorber layers. Devices retained 95% initial PCE after 1,200 hours of damp heat testing (85 °C / 85% RH), albeit with a 2.3% drop in absolute PCE compared to pristine 3D films.',
          solution: 'Synthesized 200-Word Literature Review:\nPerovskite solar cells (PSCs) represent the frontier of next-generation photovoltaics; however, commercial viability requires resolving a trilemma between power conversion efficiency (PCE), environmental non-toxicity, and operational longevity.\n\nRecent studies demonstrate divergent engineering solutions. Lin et al. (2024) achieved a record certified PCE of 26.1% in lead-halide cells using self-assembled monolayers, yet their architecture suffers catastrophic moisture degradation, shedding 30% efficiency within 200 hours. Attempting to address toxicity and stability, Chen and Weber (2025) developed lead-free tin-based (CsSnI3) perovskites, yielding exceptional stability over 1,000 hours; nonetheless, severe Sn2+ to Sn4+ oxidation throttled efficiency to a commercially unviable 14.8%. Bridging the stability deficit, Al-Mansoor et al. (2026) engineered 2D/3D layered heterostructures that successfully withstood 1,200 hours of damp-heat testing (85 °C/85% RH) with 95% retention, sacrificing merely 2.3% peak PCE.\n\nResearch Gap: Despite these advances, literature lacks non-toxic, lead-free 2D/3D heterojunction designs that simultaneously suppress tin oxidation while approaching the theoretical Shockley-Queisser limit (>22% PCE). Future research must target molecular reducing agents within lead-free 2D capping layers to achieve commercial viability.'
        },
        {
          id: 'baeng-q4-3',
          exam: 'FAT Question 7 Focus: Referencing Styles Master Drill — 10 Marks',
          marks: '10 Marks',
          question: 'Part A: IEEE Formatting (5 Marks) — Convert the following raw publication data into a strictly compliant IEEE bibliographical reference:\nAuthors: Rajesh Kumar, Sarah Jenkins, and David O\'Connor\nArticle Title: High-throughput Machine Learning Screening of Solid Electrolytes for Lithium Metal Batteries\nJournal Name: IEEE Transactions on Sustainable Energy\nVolume: 15, Issue: 3, Pages: 1420 to 1432\nYear of Publication: 2025\nDigital Object Identifier (DOI): 10.1109/TSTE.2025.3129841\n\nPart B: APA 7th Edition Formatting (5 Marks) — Convert the same publication data into a strictly compliant APA 7th edition reference list citation, including the in-text citation format for parenthetical and narrative citations.',
          solution: 'Part A: IEEE Bibliographical Reference Format:\n[1] R. Kumar, S. Jenkins, and D. O\'Connor, "High-throughput machine learning screening of solid electrolytes for lithium metal batteries," IEEE Trans. Sustain. Energy, vol. 15, no. 3, pp. 1420–1432, Jul. 2025, doi: 10.1109/TSTE.2025.3129841.\n\nIEEE Rules Applied:\n- Authors formatted as First Initial. Middle Initial. Last Name.\n- Article title enclosed in double quotes with sentence-style capitalization.\n- Journal title italicized with standard ISO abbreviation (IEEE Trans. Sustain. Energy).\n- Volume (vol.), Issue (no.), Pages (pp.), Year, and DOI specified explicitly.\n\nPart B: APA 7th Edition Reference Format:\nKumar, R., Jenkins, S., & O\'Connor, D. (2025). High-throughput machine learning screening of solid electrolytes for lithium metal batteries. IEEE Transactions on Sustainable Energy, 15(3), 1420–1432. https://doi.org/10.1109/TSTE.2025.3129841\n\nAPA 7th Edition Rules Applied:\n- Authors listed as Last Name, Initial(s), joined by an ampersand (&).\n- Year placed in parentheses immediately following author names: (2025).\n- Article title in sentence case without quotation marks.\n- Journal title in full title capitalization and italicized, followed by volume (italicized) and issue in parentheses (not italicized): 15(3).\n- In-Text Citations:\n  - Parenthetical In-text Citation: (Kumar et al., 2025)\n  - Narrative In-text Citation: Kumar et al. (2025) demonstrated that...'
        }
      ]
    },
    {
      id: 'baeng-m5',
      moduleNum: 5,
      summary: "Interpersonal communication dynamics, leadership styles, active listening, and workplace negotiation strategies.",
      pdfUrl: '/pdfs/english/English_MOD-5.pdf',
      title: 'Interpersonal Communication & Leadership/Negotiation Case Studies',
      co: 'CO: 6',
      examScope: 'FAT Questions Q8, Q9 & Q10 (30 Marks Total)',
      weightage: '30 Marks in FAT (Q8: 10M + Q9: 10M + Q10: 10M)',
      status: 'not_confident',
      scope: 'Interpersonal Communication dynamics, Leadership Styles (Autocratic, Democratic, Laissez-faire, Transformational, Servant leadership applied to workplace crisis case studies), Belbin Team Roles (Action-oriented: Shaper, Implementer, Completer Finisher; People-oriented: Coordinator, Teamworker, Resource Investigator; Thought-oriented: Plant, Monitor Evaluator, Specialist), Negotiation Skills (Principled negotiation, BATNA, Reservation Price, ZOPA), and Thomas-Kilmann Conflict Management Modes (Competing, Collaborating, Compromising, Avoiding, Accommodating). NOTE: Confirmed NO Statement of Purpose (SOP) in FAT.',
      blueprint: {
        marksTotal: '30 Marks in FAT (Q8: 10M Interpersonal/Belbin + Q9: 10M Leadership Case Study + Q10: 10M Negotiation Case Study)',
        questionTypes: [
          { type: 'FAT Question 8 (10 Marks)', desc: 'Interpersonal Communication & Belbin Roles: The 9 team roles classified into Action, People, and Thought domains, and explaining role friction in engineering teams.' },
          { type: 'FAT Question 9 (10 Marks)', desc: 'Leadership Styles Case Study: Analyzing a corporate scenario, identifying executive leadership failure, and prescribing the appropriate situational leadership model.' },
          { type: 'FAT Question 10 (10 Marks)', desc: 'Negotiation & Conflict Case Study: Applying BATNA, Principled Negotiation, and the Thomas-Kilmann Conflict Mode Instrument (TKI) to resolve a supplier/client impasse.' }
        ]
      },
      formulaSheet: [
        { name: 'Belbin 3 Clusters', formula: '\text{Action (Shaper, Implementer, Completer Finisher)} + \text{People (Coordinator, Teamworker, Resource Investigator)} + \text{Thought (Plant, Monitor Evaluator, Specialist)}', note: 'Essential balance for engineering deliverables' },
        { name: 'Thomas-Kilmann Conflict Grid', formula: '\text{Assertiveness} \times \text{Cooperativeness} \implies 5 \text{ Modes (Competing, Collaborating, Compromising, Avoiding, Accommodating)}', note: '2D Behavioral Matrix' },
        { name: 'BATNA & ZOPA', formula: '\text{ZOPA} = \text{Zone of Possible Agreement between Buyer BATNA and Seller BATNA}', note: 'Principled negotiation boundary' }
      ],
      examInsights: [
        {
          title: 'FAT Q9 & Q10: Case Study Scoring Rubric',
          desc: 'For Questions 9 and 10, structure your answers in 4 mandatory headings:\n1. Problem Identification (The root organizational conflict)\n2. Theoretical Framework (Naming the leadership style or TKI mode)\n3. Justification & Evidence (Citing specific actions from the prompt)\n4. Actionable Remediation Plan (Step-by-step resolution steps).'
        }
      ],
      topics: [
        { id: 'baeng-t5-1', title: '1-Interpersonal Communication & 2-Leadership Styles (FAT Q8 & Q9 Focus)', theory: 'Emotional intelligence, active listening, transactional analysis. Autocratic vs democratic vs transformational leadership applied to case studies.' },
        { id: 'baeng-t5-2', title: '3-Belbin Team Roles (FAT Q8 Focus)', theory: 'The 9 Belbin roles: Action (Shaper, Implementer, Completer Finisher), People (Coordinator, Teamworker, Resource Investigator), Thought (Plant, Monitor Evaluator, Specialist).' },
        { id: 'baeng-t5-3', title: '4-Negotiation Skills & 5-Thomas-Kilmann Conflict Management (FAT Q10 Focus)', theory: 'Fisher & Ury principled negotiation. BATNA. TKI two-axis model: Competing, Collaborating, Compromising, Avoiding, Accommodating.' }
      ],
      pyqs: [
        {
          id: 'baeng-q5-1',
          exam: 'FAT Question 8: Belbin Team Roles Theory — 10 Marks',
          marks: '10 Marks',
          question: 'Classify the Nine Belbin Team Roles into their three distinct operational clusters. Explain how an imbalance among these roles can lead to project bottlenecks in an engineering software development team.',
          solution: 'Classification of Belbin\'s 9 Roles into 3 Clusters:\n1. Action-Oriented Roles:\n- Shaper: Dynamic, highly driven individual who challenges the team to improve and overcomes obstacles under pressure.\n- Implementer: Practical, reliable organizer who turns strategic concepts into workable operational execution plans.\n- Completer Finisher: Meticulous perfectionist who searches for errors, scrutinizes quality, and ensures adherence to deadlines.\n\n2. People-Oriented Roles:\n- Coordinator: Mature, confident leader who clarifies goals, delegates responsibilities, and facilitates collaborative consensus.\n- Teamworker: Diplomatic, cooperative, and perceptive member who mitigates friction, supports colleagues, and fosters cohesion.\n- Resource Investigator: Extroverted communicator who explores external opportunities, negotiates partnerships, and develops outside contacts.\n\n3. Thought-Oriented Roles:\n- Plant: Creative, unorthodox innovator who generates disruptive solutions to complex technological challenges.\n- Monitor Evaluator: Sober, discerning analyst who judges options objectively and weighs technical trade-offs without emotional bias.\n- Specialist: Single-minded expert who provides rare, highly specialized technical knowledge in a niche domain.\n\nImpact of Role Imbalance in Software Engineering:\n- Excessive Plants without Implementers: The team continuously brainstorms revolutionary architectural frameworks but never produces a viable release build.\n- Excessive Shapers without Teamworkers: Results in interpersonal conflict, toxic competition, and developer burnout.\n- Absence of Completer Finishers: Software is released with critical undetected runtime bugs and missing security patches.'
        },
        {
          id: 'baeng-q5-2',
          exam: 'FAT Question 9: Case Study on Leadership Styles — 10 Marks',
          marks: '10 Marks',
          question: 'CASE STUDY: Rajesh, the newly appointed Vice President of an aerospace manufacturing plant, discovers that the assembly line is 3 weeks behind schedule for a crucial defense client. He immediately cancels all weekend leaves, mandates 14-hour shifts, issues public reprimands to senior supervisors, and bans all bottom-up feedback, stating: "My decisions are final; do not question the instructions." Within two weeks, three senior quality inspectors resign, and defect rates in machined turbine components increase by 28%.\n(a) Identify the leadership style exhibited by Rajesh and explain why it failed in this technical context.\n(b) Propose and justify an alternative leadership style that Rajesh should have adopted to resolve the production crisis effectively.',
          solution: 'Part (a) Identification & Analysis of Leadership Style:\n- Exhibited Style: Rigid Autocratic (Authoritarian) Leadership.\n- Why it Failed: While autocratic leadership can be effective in momentary physical life-and-death emergencies, it severely undermines complex engineering environments:\n1. Erosion of Psychological Safety: Humiliation and punitive overtime suppress transparency. Quality inspectors concealed minor issues to avoid reprimands, leading to an alarming 28% surge in machined defects.\n2. Brain Drain of Mission-Critical Talent: High-skilled aerospace quality inspectors possess rare domain expertise; treating them punitively precipitated prompt resignations.\n3. Disregard for Root Causes: The 3-week delay was likely rooted in material supply bottlenecks or machine tolerances rather than worker laziness; coercive mandates failed to address the physical impediment.\n\nPart (b) Alternative Leadership Style: Transformational / Situational Leadership:\n- Alternative Recommendation: Rajesh should have transitioned to a Transformational and Consultative Democratic Leadership approach.\n- Justification & Remediation Steps:\n1. Transparent Crisis Briefing: Convene an all-hands engineering briefing articulating the stakes of the defense contract, inspiring shared commitment rather than fear.\n2. Root-Cause Hackathon: Mobilize senior supervisors and technicians to diagnose production bottlenecks using Ishikawa (fishbone) diagrams and Pareto charts.\n3. Empowered Delegation: Reward innovative overtime solutions (such as automated coordinate measuring machine inspections) rather than enforcing punitive attendance.'
        },
        {
          id: 'baeng-q5-3',
          exam: 'FAT Question 10: Case Study on Negotiation Skills & BATNA — 10 Marks',
          marks: '10 Marks',
          question: 'CASE STUDY: ElectroDrive, a fast-growing EV startup, is negotiating a 5-year battery supply contract with PowerCell Technologies. PowerCell demands a fixed price of $110 per kWh with an upfront non-refundable tooling deposit of $2 Million. ElectroDrive\'s internal target is $95 per kWh, and their maximum budget ceiling is $102 per kWh. Negotiations stall as both sides engage in aggressive positional bargaining.\n(a) Define BATNA and determine what ElectroDrive\'s BATNA should be before continuing negotiations.\n(b) Using the principles of Fisher & Ury\'s Principled Negotiation, explain how ElectroDrive can break the deadlock and achieve a mutually beneficial win-win agreement.',
          solution: 'Part (a) BATNA Definition & Identification:\n- Definition: BATNA stands for Best Alternative To a Negotiated Agreement. It is the most advantageous course of action a negotiating party can take if negotiations collapse and no agreement is reached. It sets the true threshold of reservation price.\n- ElectroDrive\'s BATNA: Before resuming talks, ElectroDrive must obtain a firm, validated alternative offer—such as sourcing from a secondary international supplier (e.g., at $104/kWh) or establishing a joint assembly joint-venture. If ElectroDrive has a credible $104/kWh backup, they cannot be bullied into accepting PowerCell\'s $110/kWh demand!\n\nPart (b) Breaking the Deadlock via Principled Negotiation:\n1. Separate the People from the Problem: Move away from adversarial confrontation. Acknowledge PowerCell\'s capital expenditure risks in tooling rather than accusing them of price gouging.\n2. Focus on Underlying Interests, Not Rigid Positions:\n- PowerCell\'s Position: "$110/kWh and $2M upfront." Underlying Interest: Cash flow security and shielding against volatile raw lithium market spikes.\n- ElectroDrive\'s Position: "$95/kWh." Underlying Interest: Maintaining vehicle profit margins while guaranteeing supply volume.\n3. Invent Options for Mutual Gain (Expanding the Pie):\n- Propose Index-Linked Pricing: Set base pricing at $98/kWh, tied to a floating index of raw lithium carbonate spot prices.\n- Tiered Volume Rebates: ElectroDrive agrees to order 20% higher volumes in Years 3-5 in exchange for an immediate price drop to $99/kWh.\n- Tooling Amortization: Offer to amortize the $2M tooling cost across the first 50,000 delivered battery packs rather than paying it upfront.\n4. Insist on Objective Standards: Benchmark pricing against current BloombergNEF average battery pack pricing ($100/kWh) to reach fair, transparent consensus.'
        },
        {
          id: 'baeng-q5-4',
          exam: 'FAT Question 8 Focus: Belbin Role Imbalance Engineering Case Study — 10 Marks',
          marks: '10 Marks',
          question: 'CASE STUDY: A cross-functional Autonomous Vehicle software engineering squad consists of 6 engineers: 3 are strong Plants, 2 are aggressive Shapers, and 1 is a Specialist in LiDAR sensors. Despite exceptionally high individual IQs, the team has missed 4 consecutive product deployment milestones. Prototypes remain unfinished, arguments frequently erupt during daily standups, and code quality audits reveal critical unhandled exceptions.\n(a) Diagnosing through Belbin\'s Team Role theory, why is this team failing?\n(b) What specific Belbin roles are missing, and how should management re-balance the team?',
          solution: 'Part (a) Diagnostic Analysis using Belbin\'s Framework:\n1. Destructive Thought-Clustering (Excessive Plants): Having 3 Plants creates an overabundance of competing, radical architectural visions. Rather than refining a single algorithm, each Plant challenges the others with novel ideas, creating chronic indecision and analysis paralysis.\n2. Aggressive Confrontation (Excessive Shapers): Shapers are highly driven, directive, and impatient. With 2 Shapers and zero diplomatic Teamworkers or Coordinators, team discussions degenerate into power struggles and toxic territorial disputes.\n3. Zero Execution Accountability: The team completely lacks Action-oriented Implementers and Completer Finishers. While brilliant theories and aggressive timelines are established, nobody converts concepts into systematic unit test suites, structured git branch workflows, or documentation.\n\nPart (b) Missing Roles & Strategic Team Rebalancing:\n1. Introduce an Implementer: Essential for translating high-level algorithmic ideas into systematic, reproducible code architectures, build pipelines, and sprint backlogs.\n2. Introduce a Completer Finisher: Essential for catching edge-case sensor bugs, memory leaks, and ensuring strict adherence to automotive ISO 26262 functional safety deadlines.\n3. Appoint a Coordinator / Facilitator: Designate a mature leader to clarify shared product sprint goals, mediate ego clashes between the two Shapers, and harness the Plants sequentially rather than concurrently.\n4. Reallocate Redundant Roles: Reassign two of the Plants to exploratory R&D labs and transition one Shaper to external vendor integration, achieving a balanced 6-member squad.'
        }
      ]
    }
  ]
};
