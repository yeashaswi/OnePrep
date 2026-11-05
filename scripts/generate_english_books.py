#!/usr/bin/env python3
import subprocess, os

ENGLISH_MODULES = [
    {
        "num": 1,
        "code": "BENG101L",
        "title": "GRAMMAR, MECHANICS & ENGINEERING VOCABULARY",
        "short_title": "Grammar & Vocabulary",
        "co": "CO: 1",
        "scope": "(1) Tenses and mood in scientific and technical reporting, (2) Subject-Verb Agreement rules for collective nouns and quantities, (3) Passive Voice in technical procedures and methodology, (4) Faulty Parallelism and structural symmetry, (5) Wordiness, tautology, and redundancy elimination, (6) Commonly confused word pairs in engineering documentation, and (7) Technical prefixes, suffixes, and collocations.",
        "blueprint": """In VIT Final Assessment Tests (BENG101L FAT Papers), Module 1 accounts for 20 Marks:
1. *Question Type A (10 Marks):* Editing and proofreading an ungrammatical technical passage: Correcting subject-verb agreement, tense inconsistencies, faulty parallelism, and eliminating redundant verbiage.
2. *Question Type B (5 Marks):* Rewriting active conversational sentences into formal, objective, passive voice suitable for the "Methodology / Experimental Setup" section of an engineering report.
3. *Question Type C (5 Marks):* Distinguishing and framing sentences for commonly confused technical pairs (e.g., *affect vs effect*, *complement vs compliment*, *discrete vs discreet*, *principle vs principal*).""",
        "table_headers": ("Grammar Element", "Technical Writing Rule", "FAT Exam Exemplar"),
        "table_rows": [
            ("Tenses in Lab Reports", "Past tense for methodology; Present tense for universal scientific facts", "Correct: 'The sample was heated to 100°C because water boils at 100°C.'"),
            ("Subject-Verb Agreement", "Singular verbs for measurements/quantities when considered as a unit", "Correct: 'Ten grams of NaCl was added...' (NOT were added)"),
            ("Passive Voice Usage", "Focuses on the procedure and object, omitting subjective pronouns ('I', 'We')", "Conversational: 'We measured the voltage.' -> Formal: 'The voltage was measured.'"),
            ("Faulty Parallelism", "Coordinate elements joined by 'and/or' must share identical grammatical form", "Flawed: 'The sensor is fast, accurate, and has durability.' -> Fixed: '...fast, accurate, and durable.'"),
            ("Redundancy Elimination", "Eliminate inflated circumlocutions and duplicate adjectives", "Cluttered: 'Due to the fact that' -> Crisp: 'Because'; 'Round in shape' -> 'Round'"),
            ("Discrete vs Discreet", "Discrete = distinct/separate; Discreet = cautious/prudent", "'The microcontroller samples discrete digital pulses at 1 MHz.'")
        ],
        "sections": [
            ("Topic 1: Subject-Verb Agreement & Tense Hierarchy in Engineering", """
=== Subject-Verb Agreement Rules for Technical Writers
1. *Quantities and Units of Measurement:* Plural measurements of time, money, distance, or mass take a singular verb when considered as a single collective quantity:
  - *Incorrect:* "Twenty-five milliliters of hydrochloric acid were titrated."
  - *Correct:* "Twenty-five milliliters of hydrochloric acid was titrated."
2. *Collective Nouns in Technical Contexts:* Words like *data*, *media*, *criteria*, and *phenomena* are Latin plurals:
  - *Plural:* "The experimental data show a linear correlation." (Singular: *datum*)
  - *Plural:* "Multiple criteria were established to evaluate aerodynamic drag." (Singular: *criterion*)
3. *Compound Subjects with Correlative Conjunctions:* When subjects are joined by *either... or*, *neither... nor*, the verb agrees with the closer subject:
  - "Neither the primary microcontroller nor the auxiliary sensors were damaged during the thermal stress test."

=== Tense Hierarchy in Technical Research Papers
- *Introduction & Literature Review:* Present tense for established principles ("Silicon exhibits semiconductor properties"); Present Perfect for recent ongoing research ("Researchers have investigated graphene-based anodes").
- *Materials & Methods:* Simple Past tense in passive voice ("The copper specimens were etched using ferric chloride solution").
- *Results & Discussion:* Simple Past for observed data ("The temperature increased rapidly"); Simple Present for interpreting diagrams ("Figure 4 illustrates the load-deflection curve").
"""),
            ("Topic 2: Voice, Parallelism & Redundancy Elimination", """
=== Active vs. Passive Voice in Scientific Prose
While modern style guides permit active voice for brevity in executive summaries ("We propose an adaptive algorithm"), standard laboratory protocols, patent disclosures, and IEEE methodologies mandate the **impersonal passive voice** to preserve scientific objectivity and repeatability:
- *Weak (Subjective Active):* "I calibrated the digital multimeter and then we recorded the readings every 10 seconds."
- *Strong (Formal Technical Passive):* "The digital multimeter was calibrated, and readings were recorded at 10-second intervals."

=== The Rule of Structural Parallelism
Items in a series, paired comparisons, and bulleted lists must follow parallel grammatical patterns:
- *Non-Parallel:* "The embedded control software performs three critical functions: initializing peripheral devices, real-time data monitoring, and to transmit telemetry packets."
- *Parallel:* "The embedded control software performs three critical functions: initializing peripheral devices, monitoring real-time data, and transmitting telemetry packets."

=== Trimming Technical Redundancy & Wordiness
Engineering communication prioritizes high information density:
- "At this point in time" $arrow.r$ "Currently" or "Now"
- "Has the capability to" $arrow.r$ "Can"
- "In the event that" $arrow.r$ "If"
- "Join together" $arrow.r$ "Join"
- "Completely eliminate" $arrow.r$ "Eliminate"
"""),
            ("Topic 3: Worked VIT FAT Question Bank Problems", """
*Problem 1.1 (BENG101L FAT Past Paper --- 10 Marks):* Edit and rewrite the following technical paragraph to eliminate all errors of subject-verb agreement, inconsistent tenses, faulty parallelism, and wordiness:
*"In the experimental setup, a series of five lithium-ion cells were connected in series to form a battery pack. We observed that the internal resistance of each cell are varying significantly when temperature fluctuates. The engineering team has the responsibility of monitoring the voltage, to record the current, and regulation of the cooling fan speed. In spite of the fact that the ambient thermal condition was severe, the battery management system operates successfully and was protecting the cells from thermal runaway."*

*Corrected Model Solution:*
*"In the experimental setup, a series of five lithium-ion cells was connected in series to form a battery pack. The internal resistance of each cell varied significantly with temperature fluctuations. The engineering team was responsible for monitoring the voltage, recording the current, and regulating the cooling fan speed. Although the ambient thermal conditions were severe, the battery management system operated successfully and protected the cells from thermal runaway."*
"""),
            ("VIT Faculty Exam Insights & Common Traps", """
- *Data is Plural in VIT Evaluation:* While conversational English accepts "the data is", VIT English examiners strictly evaluate "data" as a plural noun requiring plural verbs ("these data indicate...").
- *Parallel Bullet Lists:* Ensure every bullet in a technical proposal begins with the exact same grammatical part of speech (e.g., all active verbs or all gerunds).
"""),
            ("Quick Self-Test Checklist Before Your Exam", """
1. Can you convert active lab procedures into impersonal passive voice without loss of meaning?
2. Do you know which Latin loan words in engineering take plural verbs (data, phenomena, criteria)?
3. Can you detect and rectify faulty parallelism in complex compound sentences?
4. Have you mastered the distinctions between affect/effect, discrete/discreet, and ensure/insure?
""")
        ]
    },
    {
        "num": 2,
        "code": "BENG101L",
        "title": "TECHNICAL READING COMPREHENSION & CRITICAL ANALYSIS",
        "short_title": "Reading & Analysis",
        "co": "CO: 2",
        "scope": "(1) Skimming and scanning techniques for technical papers, (2) Intensive vs extensive reading, (3) Inferential reading and detecting authorial bias, (4) Critical evaluation of research abstracts and methodology sections, (5) The Cornell Note-Taking System for engineering lectures and papers, and (6) Summarization and paraphrasing without academic plagiarism.",
        "blueprint": """In VIT Final Assessment Tests, Module 2 carries 20 Marks:
1. *Question Type A (10 Marks):* Comprehensive technical reading passage followed by 5 analytical questions testing factual extraction, inferential deduction, vocabulary-in-context, and critical evaluation.
2. *Question Type B (10 Marks):* Condensing a 400-word engineering research article into an executive summary of 100 words using the Cornell note-making framework and paraphrase rules.""",
        "table_headers": ("Reading Technique", "Operational Definition", "Engineering Application"),
        "table_rows": [
            ("Skimming", "Rapidly previewing headings, abstracts, and topic sentences for macro-understanding", "Reviewing 20 conference papers in 30 minutes to find relevant literature"),
            ("Scanning", "Searching for specific keywords, numerical constants, formulas, or author names", "Locating the exact tensile yield strength in an ASTM material data sheet"),
            ("Inferential Reading", "Deducing unstated implications, underlying assumptions, and system constraints", "Identifying unmentioned failure modes in a published circuit topology"),
            ("Cornell Note System", "Dividing note page into Cue column (30%), Notes area (70%), and Summary (bottom)", "Organizing complex lecture proofs and technical webinar recordings"),
            ("Paraphrasing", "Restating technical ideas in entirely original syntactic structure and vocabulary", "Integrating external research into a literature review without plagiarism")
        ],
        "sections": [
            ("Topic 1: Skimming, Scanning & Critical Analysis of Research Papers", """
=== The 3-Pass Method for Reading IEEE Technical Papers
1. *First Pass (The Bird's-Eye View - 5 to 10 Minutes):*
  - Read title, abstract, and section headings.
  - Inspect figures, diagrams, and table captions.
  - Read the introduction and conclusion.
  - *Goal:* Determine category, context, correctness, and relevance to your project.
2. *Second Pass (The Grasp - 30 Minutes):*
  - Read with detailed attention to the methodology and data flow.
  - Annotate key equations and identify unfamiliar mathematical notations.
  - Check whether experimental benchmarks support the author's primary claims.
3. *Third Pass (The Deep Dive / Virtual Re-implementation - 1 to 2 Hours):*
  - Scrutinize every implicit assumption.
  - Identify unstated limitations, worst-case operating bounds, and potential implementation pitfalls.

=== Inferential Reading in Engineering
Inferential reading requires looking beyond explicit textual statements to evaluate:
- *Underlying Hypotheses:* What conditions are assumed (e.g., room temperature, noiseless channel)?
- *Omitted Variables:* Did the author neglect thermal drift or parasitic capacitance?
- *Potential Conflicts of Interest:* Is the benchmarked comparison biased toward proprietary hardware?
"""),
            ("Topic 2: The Cornell Note-Taking System & Paraphrasing", """
=== The Cornell Note-Taking Architecture
Developed by Walter Pauk at Cornell University, this format structures technical information into three distinct zones on an A4 sheet:
1. *Notes Column (Right 70%):* Record technical formulas, block diagrams, bullet points, and derivations during lectures or paper reading. Use telegraphic sentences, standard abbreviations ($Delta, lambda, approx, prop$).
2. *Cue / Recall Column (Left 30%):* Immediately after reading, extract keywords, core questions ("Why is GaN preferred over Si?"), and diagnostic formulas.
3. *Summary Zone (Bottom 2 inches):* A crisp 2-to-3 sentence synthesis of the fundamental engineering takeaway.

=== Paraphrasing Strategies to Avoid Plagiarism
Plagiarism occurs not only from verbatim copying, but also from "patchwriting" (retaining the original sentence structure while substituting synonyms).
*The 4-Step Paraphrase Algorithm:*
1. Read the original paragraph until complete conceptual understanding is achieved.
2. Turn away from the source text completely.
3. Rewrite the core engineering concept entirely in your own voice from memory.
4. Compare your version against the original to ensure structural distinctiveness and insert formal parenthetical citation (e.g., [1], Smith et al., 2024).
"""),
            ("Topic 3: Worked Summary & Paraphrase Exercise", """
*Problem 2.1 (VIT Question Bank Exemplar):* Paraphrase the following excerpt from an IEEE paper on neuromorphic computing:
*"Traditional von Neumann computer architectures experience severe performance bottlenecks, commonly designated as the memory wall, which arise from the continuous, energy-intensive shuttle of data between physically segregated central processing units and external semiconductor memory banks."*

*Model Paraphrased Response:*
*"Modern computing systems are significantly constrained by the von Neumann bottleneck, wherein significant latency and power consumption occur due to the perpetual transport of information across the physical boundary separating memory chips from the microprocessor (Patel, 2024)."*
"""),
            ("VIT Faculty Exam Insights & Common Traps", """
- *Direct Quotes Trap:* In technical writing, avoid direct quotation marks unless quoting an official ISO/IEEE standard or legal definition. Evaluators expect technical concepts to be paraphrased with formal citation.
- *Abstract Extraction:* When asked to summarize an abstract, do not copy sentences verbatim! Extract the four core pillars: Problem, Proposed Solution, Methodology, and Quantified Result.
"""),
            ("Quick Self-Test Checklist Before Your Exam", """
1. Can you explain the difference between skimming, scanning, and intensive reading?
2. Do you know how to draw and utilize the 3 zones of the Cornell note-taking template?
3. What are the 4 steps to paraphrase an IEEE excerpt without committing patchwriting?
4. How do you identify authorial bias or omitted boundary conditions in a technical abstract?
""")
        ]
    },
    {
        "num": 3,
        "code": "BENG101L",
        "title": "FORMAL TECHNICAL CORRESPONDENCE & PROFESSIONAL WRITING",
        "short_title": "Technical Correspondence",
        "co": "CO: 3",
        "scope": "(1) Principles of workplace email etiquette and subject-line architecture, (2) Formal letters of technical inquiry, complaint, and claim adjustment, (3) Statement of Purpose (SOP) drafting for graduate admissions and internships, (4) Reverse-chronological and functional resume design, and (5) ATS (Applicant Tracking System) keyword optimization and targeted cover letters.",
        "blueprint": """In VIT Final Assessment Tests, Module 3 carries 20 Marks across two 10-mark questions:
1. *Question Type A (10 Marks):* Drafting a formal workplace email or technical inquiry letter addressing a vendor/client regarding component delivery delays, technical specification mismatches, or warranty claims.
2. *Question Type B (10 Marks):* Writing a comprehensive Statement of Purpose (SOP) or ATS-compliant technical Cover Letter for an engineering internship at an R&D corporation.""",
        "table_headers": ("Document Type", "Structural Framework", "Tone & Key Elements"),
        "table_rows": [
            ("Workplace Email", "Action-oriented Subject -> Formal Salutation -> Context -> Specific Ask -> Sign-off", "Concise, professional, clear deadline, contact information"),
            ("Technical Inquiry Letter", "Letterhead -> Inside Address -> Reference No. -> Detailed Specs Table -> Enclosures", "Objective, precise component tolerances, formal request for quote"),
            ("Claim / Adjustment Letter", "Statement of defect -> Factual chronology -> Evidence (PO, photos) -> Desired remedy", "Firm, courteous, devoid of emotional accusations, references contract terms"),
            ("Statement of Purpose (SOP)", "Hook -> Academic Foundation -> Research Experience -> Why This University/Program -> Vision", "Scholarly, ambitious yet grounded, highlights specific faculty research laboratories"),
            ("ATS-Friendly Resume", "Contact -> Professional Summary -> Technical Skills -> Projects -> Education", "Clean single-column layout, standard headings, quantified metrics (e.g., 'reduced latency by 35%')")
        ],
        "sections": [
            ("Topic 1: Workplace Email Etiquette & Professional Letters", """
=== High-Impact Subject Line Architecture
An effective workplace email subject line must summarize the message's content and required action within 60 characters:
- *Poor:* "Question", "Project update", "Important!!"
- *Professional:* "[Action Required] Approval Needed: PCB Fabrication Quote - Project Falcon"
- *Professional:* "[Meeting Request] Review of Motor Test Bench Calibration Data - Nov 12"

=== Standard Block Format for Business Letters
In modern technical correspondence, the full-block layout (left-aligned, single-spaced with double spacing between paragraphs) is standard:
1. Sender's Address / Institutional Letterhead.
2. Date (Spell out month: November 4, 2026).
3. Inside Address (Recipient name, designation, organization, address).
4. Salutation ("Dear Dr. Senthil / Dear Ms. Chen").
5. Subject Line ("Subject: Technical Query Regarding STM32H7 Firmware Flashing Protocols").
6. Body Paragraphs:
  - *Paragraph 1 (Opening):* Direct statement of purpose.
  - *Paragraph 2 (Elaboration):* Technical details, specifications, part numbers, and evidence.
  - *Paragraph 3 (Action Required):* Clear timeline and call to action.
7. Complimentary Close ("Sincerely / Best regards").
8. Signature and Typed Name with Professional Title.
"""),
            ("Topic 2: Statement of Purpose (SOP) & ATS Resume Architecture", """
=== Statement of Purpose (SOP) Blueprint (The 5-Paragraph Formula)
1. *Paragraph 1 (The Intellectual Spark & Core Research Question):* Introduce your specific engineering interest without clichéd childhood stories. State clearly your subfield of interest (e.g., neuromorphic VLSI architectures).
2. *Paragraph 2 (Academic Foundation & Core Coursework):* Highlight foundational mastery in mathematics, circuit theory, or algorithms. Mention specific high-level coursework and academic honors.
3. *Paragraph 3 (Hands-On Research & Capstone Projects):* Detail 1-2 major technical projects. Specify the problem statement, your technical role, tools utilized (e.g., Cadence Virtuoso, MATLAB, ROS), and quantified outcomes.
4. *Paragraph 4 (Why This University & Laboratory):* Name 2 specific professors, their ongoing research projects, and why your background aligns with their laboratory equipment and published papers.
5. *Paragraph 5 (Career Trajectory & Conclusion):* Articulate your 5-year post-graduation career vision (R&D engineer, doctoral candidate) and how the program bridges your ambitions.

=== ATS-Friendly Technical Resume Formatting
Applicant Tracking Systems parse resumes using automated optical scanners and natural language processing:
- *Use Standard Section Titles:* "Education", "Technical Skills", "Projects", "Work Experience". Avoid stylized headers like "My Journey".
- *Quantify Impact (Google XYZ Formula):* "Accomplished [X], as measured by [Y], by doing [Z]."
  - *Example:* "Engineered a low-noise amplifier in 65 nm CMOS, achieving a 1.4 dB noise figure and reducing DC power consumption by 22% compared to conventional topologies."
"""),
            ("Topic 3: Worked Model Technical Letter", """
*Problem 3.1 (VIT FAT Classic):* Draft a formal letter from the Chief Procurement Engineer of an EV manufacturing firm to a battery supplier, notifying them that 50 cylindrical lithium-ion cell packs arrived damaged due to inadequate thermal insulation packaging, and requesting an immediate replacement shipment under warranty.

*Model Letter:*
```
Apex Mobility Solutions Pvt. Ltd.
Vellore Industrial Estate, Tamil Nadu 632014
Ref: AMS/PO-2026/8841
November 4, 2026

Mr. Rajesh Sharma, General Manager
VoltCore Energy Technologies Ltd.
Whitefield, Bengaluru 560066

Subject: Notice of Damaged Consignment & Request for Urgent Replacement (PO-8841)

Dear Mr. Sharma,

I am writing with reference to Purchase Order PO-8841 dated October 20, 2026, concerning the delivery of 500 Grade-A 21700 lithium-ion cell packs. 

Upon arrival and quality inspection at our receiving bay on November 3, 2026, 50 cell packs (Lot No. VC-2610-B) were found to have sustained severe physical and thermal deformation. The outer moisture-barrier vacuum packaging was punctured, and several cells exhibited casing denting and trace electrolyte leakage. Inspection of the shipping containers indicated a lack of required impact-dampening foam cushions specified in Section 4.2 of our supply contract.

Enclosed with this letter are the receiving bay inspection log and high-resolution photographic evidence documenting the damaged consignments. 

Because our EV chassis assembly line operates on a strict Just-In-Time schedule, we request that you dispatch an expedited replacement consignment of 50 verified cell packs within 5 business days, in accordance with the comprehensive warranty terms outlined in Master Service Agreement MSA-402.

Thank you for your prompt assistance in resolving this critical matter.

Sincerely,

Yashaswi Vunnam
Lead Procurement Engineer
Apex Mobility Solutions Pvt. Ltd.
Encl: Inspection Report IR-8841, Damage Photographs (5 sheets)
```
"""),
            ("VIT Faculty Exam Insights & Common Traps", """
- *Salutation & Sign-Off Rules:* If writing to a named individual ("Dear Mr. Sharma"), close with "Sincerely". If opening with "Dear Sir/Madam", close with "Yours faithfully".
- *Resume Keywords:* In technical resumes, always include exact technology names (e.g., "Python, PyTorch, STM32, C++") rather than generic descriptions like "programming languages", to ensure high ATS parsing scores.
"""),
            ("Quick Self-Test Checklist Before Your Exam", """
1. Can you draft a full-block formal technical inquiry letter with all 8 mandatory structural components?
2. Do you know the 5-paragraph structure for an academic Statement of Purpose (SOP)?
3. How do you rewrite a descriptive resume bullet into a quantified XYZ achievement statement?
4. What are the key rules for an effective, action-oriented email subject line?
""")
        ]
    },
    {
        "num": 4,
        "code": "BENG101L",
        "title": "TECHNICAL REPORTING, INCIDENT ANALYSIS & IEEE FORMAT",
        "short_title": "Technical Reports",
        "co": "CO: 4",
        "scope": "(1) Classification and structure of technical reports, (2) Engineering project proposals: problem statement, technical methodology, budget, and Gantt charts, (3) Technical incident and accident investigation reporting (Root Cause Analysis), (4) Feasibility reports, and (5) Anatomy of an IEEE research paper: Abstract, Introduction, System Architecture, Experimental Results, and References.",
        "blueprint": """In VIT Final Assessment Tests, Module 4 carries 20 Marks:
1. *Question Type A (10 Marks):* Drafting a formal Technical Project Proposal for an engineering initiative (e.g., Campus Solar Microgrid or Automated Autonomous Waste Sorter) including objectives, methodology, budgetary tables, and timeline.
2. *Question Type B (10 Marks):* Writing an Engineering Incident Report using the 5-Whys Root Cause Analysis (RCA) framework detailing an industrial failure (e.g., power transformer explosion or server cluster thermal shutdown).""",
        "table_headers": ("Report Section / Type", "Required Content / Format", "FAT Evaluation Criterion"),
        "table_rows": [
            ("Executive Summary", "Concise 1-page synthesis: Problem, Solution, Cost, Recommendation", "Must stand alone; read by non-technical management"),
            ("Problem Statement", "Quantified definition of the operational or engineering deficit", "Avoids premature solutions; states scope and boundary limits"),
            ("Technical Methodology", "Step-by-step implementation, block diagrams, component selection rationale", "Sufficient technical detail to permit third-party replication"),
            ("Gantt Chart & Budget", "Tabular work breakdown structure (WBS), milestones, cost estimation", "Realistic phase milestones and contingency allocations"),
            ("IEEE Reference Format", "[1] A. Author, 'Title,' *Journal Abbrev.*, vol., no., pp., Year, doi.", "Numerical citation in order of textual appearance ([1], [2])")
        ],
        "sections": [
            ("Topic 1: Technical Proposals & Engineering Feasibility", """
=== Structure of a Technical Engineering Proposal
A technical proposal is an engineering document designed to persuade project stakeholders, funding agencies, or executive management to allocate resources to solve an engineering problem:
1. *Title Page:* Project name, author names, organization, date, and document control number.
2. *Executive Summary / Abstract:* 200 words synthesizing problem, proposed technical architecture, deliverables, total budget, and projected ROI.
3. *Problem Statement & Motivation:* Clear technical description of existing deficiencies, current operational downtime, or safety risks.
4. *Proposed Technical Solution & Architecture:*
  - System block diagram (Hardware, Software, Firmware layers).
  - Component trade-off analysis (e.g., comparing ESP32 vs Raspberry Pi Pico).
5. *Methodology & Work Breakdown Structure (WBS):* Phase-wise execution steps:
  - Phase 1: Requirements Gathering & Simulation.
  - Phase 2: Hardware Breadboarding & PCB Layout.
  - Phase 3: Firmware Development & API Integration.
  - Phase 4: Environmental Stress Screening & Pilot Deployment.
6. *Project Timeline (Gantt Chart):* Explicit weekly milestones.
7. *Itemized Budgetary Table:* Component costs, labor hours, software licenses, and a 10% contingency reserve.
8. *Risk Assessment & Mitigation Matrix:* Identifying technical, supply chain, and regulatory risks.
"""),
            ("Topic 2: Incident Investigation & Root Cause Analysis (RCA)", """
=== The 5-Whys Root Cause Analysis Framework
When an engineering failure occurs (e.g., robotic arm collision, chemical storage tank over-pressurization), technical investigators utilize the "5-Whys" methodology to drill down from the superficial symptom to the fundamental root cause:
- *Failure Symptom:* The backup diesel generator failed to energize during a grid outage.
- *Why 1:* The starter motor failed to crank the diesel engine.
- *Why 2:* The starter battery bank voltage had dropped to 8.2 V (fully discharged).
- *Why 3:* The trickle charger circuit breaker had tripped two weeks prior.
- *Why 4:* An unmonitored transient voltage surge occurred during lightning activity.
- *Why 5 (Root Cause):* The auxiliary power distribution panel lacked surge protection devices (SPDs) and had no automated SCADA telemetry alarm for breaker trips!
*Corrective Actions:*
1. Immediate: Install new AGM starter battery bank and reset breaker.
2. Preventative: Retrofit Type-2 Surge Protective Devices and link breaker auxiliary contacts to central IoT monitoring dashboard.
"""),
            ("Topic 3: IEEE Formatting & Citation Mechanics", """
=== Standard IEEE Paper Architecture
1. *Title:* Concise and informative; avoiding jargon and acronyms.
2. *Abstract:* Structured, self-contained summary (150-250 words) stating problem, novel contribution, methodology, and key quantitative findings.
3. *Index Terms (Keywords):* 4 to 6 standardized IEEE taxonomy terms.
4. *Introduction:* Background, problem definition, literature review, limitations of existing state-of-the-art, and numbered outline of the paper's novel contributions.
5. *System Architecture / Proposed Model:* Mathematical derivations, circuit schematics, and algorithms (presented as formal pseudocode).
6. *Experimental Evaluation & Results:* Graphs, performance comparisons against benchmark algorithms, error bars, and ablation studies.
7. *Conclusion:* Summary of key insights and concrete directions for future research.
8. *References:* Formatted in standard IEEE style:
  - *Journal:* [1] J. Doe and R. Roe, "Design of low-power IoT transceivers," *IEEE Trans. Circuits Syst. I*, vol. 68, no. 4, pp. 1520-1531, Apr. 2021.
"""),
            ("VIT Faculty Exam Insights & Common Traps", """
- *Gantt Chart Presentation:* In proposal questions, examiners award full marks when tasks are drawn in a clean matrix table showing task name, start week, duration, and dependencies (Preceding Task).
- *Distinguishing Executive Summary from Introduction:* An Introduction introduces the topic; an Executive Summary summarizes the ENTIRE report including final conclusions and budgetary figures!
"""),
            ("Quick Self-Test Checklist Before Your Exam", """
1. Can you draft an engineering project proposal with an itemized budget table and Gantt chart?
2. Can you conduct a 5-Whys Root Cause Analysis on an industrial system breakdown?
3. What are the 8 standard sections of an IEEE format technical paper?
4. How do you cite a journal paper, conference paper, and website in IEEE style?
""")
        ]
    },
    {
        "num": 5,
        "code": "BENG101L",
        "title": "PROFESSIONAL ORAL COMMUNICATION & GROUP DYNAMICS",
        "short_title": "Oral Communication",
        "co": "CO: 5",
        "scope": "(1) Group Discussion (GD) dynamics, roles, and consensus building, (2) Turn-taking strategies and tactful disagreement protocols, (3) Technical presentation design: The 6x6 rule and data visualization principles, (4) Non-verbal delivery: kinesics, proxemics, and vocal modulation, (5) Handling high-pressure technical Q&A sessions, and (6) The STAR method for behavioral and technical interviews.",
        "blueprint": """In VIT Final Assessment Tests, Module 5 carries 20 Marks:
1. *Question Type A (10 Marks):* Group Discussion strategies: Analyzing positive roles (Initiator, Moderator, Clarifier, Summarizer) vs negative roles (Blocker, Aggressor, Dominator), and framing verbal phrases for tactful intervention and consensus building.
2. *Question Type B (10 Marks):* Technical Presentation & Interview mastery: Designing slide decks using visual hierarchy and 6x6 guidelines, and structuring behavioral interview answers using the STAR (Situation, Task, Action, Result) framework.""",
        "table_headers": ("Communication Context", "Core Framework / Principle", "Key Professional Phrases"),
        "table_rows": [
            ("GD: Initiating", "Define the core premise, scope the boundaries, invite group input", "'Let us begin by defining the scope of this topic...'"),
            ("GD: Tactful Disagreement", "Acknowledge the peer's point before presenting a counter-perspective", "'While I see the merit in your point, we must also consider...'"),
            ("GD: Re-routing Digressions", "Bring wandering discussions back to the primary agenda", "'That is an intriguing angle, but to keep our objective in focus...'"),
            ("Presentation: 6x6 Rule", "Maximum 6 bullet points per slide, maximum 6 words per bullet", "Prevents cognitive overload; slides support, never replace the speaker"),
            ("STAR Interview Method", "Situation (20%) -> Task (10%) -> Action (50%) -> Result (20%)", "Quantify the outcome: 'This reduced server latency by 40%.'")
        ],
        "sections": [
            ("Topic 1: Group Discussion (GD) Dynamics & Roles", """
=== The Psychology of Campus Placement Group Discussions
A Group Discussion is not a debate; it is a collaborative simulation of an engineering problem-solving committee. Corporate evaluators assess communicative competence, analytical thinking, emotional maturity, and teamwork:
1. *Positive Functional Roles:*
  - *The Initiator / Starter:* Opens the discussion with an articulate definition of the topic, sets the operational framework, and poses the opening question.
  - *The Moderator / Harmonizer:* Prevents shouting matches, ensures equal airtime, and encourages quieter participants to contribute.
  - *The Clarifier / Informer:* Supplies empirical facts, engineering standards, or mathematical perspectives when claims become vague.
  - *The Summarizer:* Synthesizes divergent opinions into a unified consensus before the allotted time expires.
2. *Dysfunctional Roles to Strictly Avoid:*
  - *The Dominator:* Interrupts others aggressively and monopolizes conversation time.
  - *The Blocker:* Rejects ideas without providing alternative solutions.
  - *The Fence-Sitter:* Nods passively without adding original insights.

=== Professional Verbal Phrases for GD Success
- *Entering the Discussion:* "I would like to build upon the insightful observation made by my colleague..."
- *Steering Back to Topic:* "While that example is valid, let us redirect our attention to the primary constraint of cost feasibility..."
- *Synthesizing Consensus:* "It appears our team has converged on two primary pillars: first, ... and second, ..."
"""),
            ("Topic 2: Technical Slide Design & High-Stakes Q&A", """
=== Principles of Technical Presentation Design
1. *The 6x6 Rule:* Never exceed 6 bullet points per slide, and keep each bullet to a maximum of 6 words. Avoid paragraphs of text!
2. *Visual Superiority Effect:* Replace text blocks with schematic block diagrams, flowcharts, and annotated CAD renderings. The audience reads slides in 3 seconds; your voice provides the narrative depth.
3. *Vocal Modulation & Non-Verbal Presence:*
  - *Kinesics:* Maintain open hand gestures and natural posture; avoid pacing or crossing arms.
  - *Eye Contact:* Divide the room into 3 zones (left, center, right) and sustain 3-to-5 seconds of direct eye contact per segment.
  - *Pace:* 120-140 words per minute; insert deliberate 2-second pauses before revealing critical conclusions.

=== Navigating Difficult Q&A Sessions
- *Step 1 (Active Listening):* Listen to the entire question without interrupting; nod to demonstrate comprehension.
- *Step 2 (Paraphrase & Validate):* "If I understand correctly, you are asking how our encryption algorithm handles packet dropouts on low-bandwidth networks?"
- *Step 3 (Structure Response):* Deliver a direct 2-sentence answer, then provide the supporting rationale.
- *Step 4 (Admitting Unknowns Professionally):* Never fabricate an answer! "We have not yet simulated our circuit at cryogenic temperatures, but based on carrier mobility curves, we anticipate a 15% increase in switching speed. We will benchmark this in Phase 2."
"""),
            ("Topic 3: The STAR Method for Technical Interviews", """
=== Structuring Behavioral & Project Interview Answers
When an interviewer asks: *"Tell me about a time when a critical technical project failed right before a deadline, and how you responded"*, structure your narrative using the **STAR Method**:
1. *Situation (S - 15% of time):* Set the context clearly. "During the final testing of our solar rover prototype 48 hours before the university design showcase..."
2. *Task (T - 10% of time):* Define the exact challenge. "Our motor driver circuit suffered a catastrophic shoot-through failure, burning out both H-bridge MOSFETs."
3. *Action (A - 60% of time - The Core Focus):* Describe your specific technical troubleshooting. "I isolated the microcontroller gate-driver outputs using an oscilloscope, discovered a 2-microsecond overlap during complementary PWM switching, and reprogrammed the firmware to introduce a 5-microsecond dead-time delay. I then hand-soldered replacement MOSFETs and verified gate waveforms."
4. *Result (R - 15% of time):* Quantify the triumphant conclusion. "The motor driver operated flawlessly under full load for 6 continuous hours, and our team was awarded First Place in the engineering competition."
"""),
            ("VIT Faculty Exam Insights & Common Traps", """
- *STAR Method Balance:* The #1 error students make in interviews is spending 80% of their time describing the Situation, leaving no time for the Action! Remember: 60% of your answer must focus on YOUR actions.
- *GD Conclusion vs Summary:* A summary recaps what was actually discussed; do NOT introduce entirely new arguments during the final 60-second summary!
"""),
            ("Quick Self-Test Checklist Before Your Exam", """
1. Can you list the 4 positive and 3 negative roles in a professional Group Discussion?
2. What are the key rules of the 6x6 slide design guideline?
3. How do you professionally acknowledge and respond to an unknown technical question in a seminar?
4. Can you structure a major project challenge using the 4 steps of the STAR framework?
""")
        ]
    }
]

def generate_typst_file(module_data, output_path):
    table_headers_str = ", ".join(f"[*{h}*]" for h in module_data["table_headers"])
    table_rows_str = ""
    for r in module_data["table_rows"]:
        table_rows_str += f"  [{r[0]}], [{r[1]}], [{r[2]}],\n"

    sections_str = ""
    for s_title, s_body in module_data["sections"]:
        sections_str += f"\n= {s_title}\n\n{s_body}\n"

    typst_content = f"""
#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.2cm, right: 2.2cm),
  header: context {{
    if here().page() > 1 {{
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: luma(90))[VIT {module_data["code"]} --- Module {module_data["num"]}: {module_data["short_title"]}]],
        align(right)[#text(size: 8.5pt, fill: luma(90), style: "italic")[VIT FAT Study Textbook]]
      )
      line(length: 100%, stroke: 0.4pt + luma(180))
    }}
  }},
  footer: context {{
    align(center)[#text(size: 9pt)[#here().page()]]
  }}
)
#set text(font: "New Computer Modern", size: 10pt)
#set par(justify: true, leading: 0.65em)
#set heading(numbering: "1.1")

#align(center)[
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT {module_data["code"]} --- Module {module_data["num"]}: {module_data["short_title"]}] \\
  #v(2mm)
  #text(size: 15pt, weight: "black")[MODULE {module_data["num"]}: {module_data["title"]}] \\
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[({module_data["co"]})] \\
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Complete Study Textbook, Step-by-Step Derivations & VIT FAT Question Bank] \\
  #text(size: 9pt, fill: luma(100))[Aligned with VIT {module_data["code"]} Official Syllabus, VIT Department Question Bank, and VIT FAT Past Papers]
]

#v(3mm)
#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 9pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Textbook (All Syllabus Topics):]
  {module_data["scope"]}
]

#v(2mm)
#outline(title: "Contents", depth: 2, indent: auto)
#v(2mm)

= VIT FAT Exam Blueprint & Master Formula Sheet for Module {module_data["num"]}

{module_data["blueprint"]}

#v(2mm)
#table(
  columns: (2.2fr, 3.2fr, 2.6fr),
  stroke: 0.5pt + luma(180),
  inset: 6.5pt,
  {table_headers_str},
{table_rows_str}
)

{sections_str}
"""
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(typst_content)

def main():
    os.makedirs("public/pdfs/english", exist_ok=True)
    for m in ENGLISH_MODULES:
        typ_path = f"public/pdfs/english/English_MOD-{m['num']}.typ"
        pdf_path = f"public/pdfs/english/English_MOD-{m['num']}.pdf"
        generate_typst_file(m, typ_path)
        print(f"Generated {typ_path}")
        cmd = f"/opt/homebrew/bin/typst compile '{typ_path}' '{pdf_path}'"
        res = subprocess.run(cmd, shell=True, capture_output=True, text=True)
        if res.returncode != 0:
            print(f"Error compiling {typ_path}:", res.stderr)
        else:
            print(f"Successfully compiled {pdf_path}")

if __name__ == "__main__":
    main()
