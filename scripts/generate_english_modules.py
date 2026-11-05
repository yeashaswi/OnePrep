import subprocess

english_modules = {
    1: {
        "title": "MODULE 1: INTRODUCTION TO COMMUNICATION",
        "short_title": "Module 1: Introduction to Communication",
        "co": "CO: 1",
        "scope": "(1) Nature, importance, and process of communication (Sender, Encoding, Channel, Receiver, Decoding, Feedback), (2) Types of communication: Intra-personal, Interpersonal, and Group communication, (3) Verbal and non-verbal communication (Kinesics, Proxemics, Paralanguage, Haptics, Chronemics), (4) Cross-cultural and intercultural communication dynamics, (5) Communication barriers (Physical, Psychological, Linguistic, Cultural, Mechanical) and strategies to overcome them, and (6) The 7 Cs of Effective Technical Communication (Clear, Concise, Concrete, Correct, Coherent, Complete, Courteous).",
        "blueprint": """In VIT Final Assessment Tests, Module 1 carries 15 to 20 marks:
1. *Question Type A (10 Marks):* Shannon-Weaver and Berlo's Communication Process Model: Detailed diagram, analysis of each component (encoding, noise, feedback loop), and breakdown of internal/external communication barriers.
2. *Question Type B (10 Marks):* Non-Verbal & Cross-Cultural Communication: Analyzing how body language, tone, and cultural contexts impact engineering negotiations and team meetings.""",
        "table": """  [*Communication Element*], [*Function / Mechanism*], [*VIT Professional Application*],
  [Shannon-Weaver Model], [Sender -> Encoder -> Channel (Noise) -> Decoder -> Receiver -> Feedback], [Standard engineering signal-to-communication framework],
  [Non-Verbal: Kinesics], [Facial expressions, gestures, eye contact (oculesics), and posture], [Builds credibility and rapport in technical client pitches],
  [Non-Verbal: Proxemics], [Spatial distance zones: Intimate ($0-1.5$ ft), Personal ($1.5-4$ ft), Social ($4-12$ ft)], [Professional workplace seating and boardroom dynamics],
  [Non-Verbal: Paralanguage], [Vocal pitch, inflection, pace, volume, and pauses], [Prevents monotone delivery during engineering presentations],
  [The 7 Cs Framework], [Clarity, Conciseness, Concreteness, Correctness, Coherence, Completeness, Courtesy], [Checklist for technical reports and managerial emails],
""",
        "content": """= Topic 1: Nature, Process & Models of Communication

=== The Shannon-Weaver Linear and Transactional Models
Communication is the dynamic two-way process of exchanging information, ideas, and feelings:
1. *Information Source (Sender):* Conceives the message and determines communication objectives.
2. *Encoding:* Translating thoughts into symbolic code (language, syntax, engineering schematics).
3. *Channel / Medium:* Transmission pathway (email, Slack, formal report, face-to-face).
4. *Noise:* Any disturbance distorting message fidelity (ambient noise, technical jargon, emotional bias).
5. *Decoding:* The receiver interprets the symbolic code into meaningful cognitive understanding.
6. *Feedback:* The receiver's response returned to the sender, verifying message comprehension.

=== The 7 Cs of Effective Technical Communication
- *Clarity:* One clear idea per sentence; avoid ambiguous terminology.
- *Conciseness:* Eliminate wordiness and redundant filler phrases (*at this point in time* $arrow.r$ *now*).
- *Concreteness:* Use specific metrics and hard empirical facts rather than vague generalities.
- *Correctness:* Flawless grammatical syntax, accurate engineering figures, and appropriate register.
- *Coherence:* Logical progression using transitional signposts (*furthermore, consequently, however*).
- *Completeness:* Convey all necessary technical specifications so the recipient can make informed decisions.
- *Courtesy:* Professional, polite, respectful tone demonstrating empathetic awareness.


= Topic 2: Non-Verbal Communication & Cross-Cultural Dynamics

=== Categories of Non-Verbal Communication
In face-to-face engineering leadership, non-verbal cues convey over 65% of emotional meaning:
1. *Kinesics:* Body motion, posture, and facial expressions. Open posture signals receptivity.
2. *Proxemics (Edward T. Hall):*
  - *Personal Space ($1.5 - 4$ ft):* Normal professional conversations among team members.
  - *Social Space ($4 - 12$ ft):* Formal business meetings, interviews, and presentations.
  - *Public Space ($> 12$ ft):* Large keynote lectures.
3. *Paralanguage:* Non-verbal vocal qualifiers including pitch, timbre, rhythm, and strategic silence.

=== Cross-Cultural Communication in Engineering
- *High-Context Cultures:* Rely heavily on implicit shared background, non-verbal cues, and interpersonal relationships (e.g., Japan, Arab nations).
- *Low-Context Cultures:* Rely strictly on explicit, direct, literal written agreements and verbal clarity (e.g., Germany, USA, Switzerland).
""",
        "checklist": """1. Draw and explain the Shannon-Weaver communication model with feedback and noise.
2. List the 7 Cs of communication with concrete engineering examples.
3. Differentiate between high-context and low-context cultural communication styles.
4. Explain how proxemics influences interpersonal team dynamics in an office setting."""
    },
    2: {
        "title": "MODULE 2: GRAMMATICAL ASPECTS",
        "short_title": "Module 2: Grammatical Aspects",
        "co": "CO: 2",
        "scope": "(1) Sentence structures and patterns (SV, SVO, SVIODO, SVOC, SVOA), (2) Modal auxiliary verbs (can, could, may, might, shall, should, will, would, must, ought to) and degrees of certainty/obligation in technical writing, (3) Subject-Verb Agreement (Concord) rules and common exceptions, (4) Conditionals: Zero, First, Second, Third, and Mixed conditionals in technical hypotheses, and (5) Error detection and correction in formal engineering texts.",
        "blueprint": """In VIT Final Assessment Tests, Module 2 carries 15 to 20 marks:
1. *Question Type A (10 Marks):* Subject-Verb Concord & Error Identification: Identifying and correcting 10 contextual grammatical errors in an engineering passage (collective nouns, fractional subjects, correlative conjunctions).
2. *Question Type B (10 Marks):* Modal Verbs & Conditional Hypotheses: Formulating engineering technical recommendations and causal conditions using appropriate modal auxiliaries and conditional clauses.""",
        "table": """  [*Grammar Rule*], [*Core Principle*], [*Technical Engineering Example*],
  [Concord: Correlative Conjunctions], [Verb agrees with nearer subject (*neither...nor, either...or*)], [*Neither the sensors nor the microcontroller is damaged*],
  [Concord: Quantifiers & Fractions], [Verb agrees with noun following the *of* phrase], [*Two-thirds of the database was corrupted; two-thirds of the nodes were restored*],
  [Concord: Collective Nouns], [Singular when acting as unit; plural when acting individually], [*The development team has deployed the patch*],
  [Second Conditional], [If + Past Simple, would + base verb (unreal hypothetical)], [*If the cooling pump failed, the core temperature would surge*],
  [Third Conditional], [If + Past Perfect, would have + past participle (past counterfactual)], [*If the pressure relief valve had opened, the rupture would have been prevented*],
""",
        "content": """= Topic 1: Sentence Patterns & Subject-Verb Agreement (Concord)

=== Five Fundamental Sentence Patterns
1. *SV:* Subject + Intransitive Verb (*The turbine rotated.*)
2. *SVO:* Subject + Transitive Verb + Direct Object (*The engineer executed the algorithm.*)
3. *SVIODO:* Subject + Verb + Indirect Object + Direct Object (*The firm awarded the team a contract.*)
4. *SVOC:* Subject + Verb + Object + Complement (*The testing suite proved the architecture resilient.*)
5. *SVOA:* Subject + Verb + Object + Adverbial (*The technician mounted the heatsink securely.*)

=== Critical Concord Rules for Engineering Writing
- *Intervening Prepositional Phrases:* Do not let phrases between subject and verb deceive you:
  - *Incorrect:* *The performance of the multi-core processors were substandard.*
  - *Correct:* *The performance [singular] of the multi-core processors was [singular] substandard.*
- *Singular Indefinite Pronouns:* *Each, every, either, neither, anyone, someone, everybody* require strictly singular verbs:
  - *Each of the ten sensors has [NOT have] been calibrated.*
- *Units of Measurement:* Plural units expressing a singular quantity or duration take singular verbs:
  - *Fifty liters of coolant is sufficient for eight hours of continuous operation.*


= Topic 2: Modal Verbs & Technical Conditionals

=== Degrees of Obligation & Modals in Technical Specs
- *Must / Shall:* Absolute mandatory specification requirement (IEEE / ISO standard compliance).
- *Should / Ought to:* Strong recommendation or industry best practice.
- *May / Can:* Permissible option or functional capability.

=== Conditional Clauses in Engineering Analysis
1. *Zero Conditional (Scientific Fact):*
  *If temperature exceeds $100^degree"C"$, the cooling fans activate automatically.*
2. *First Conditional (Real Future Possibility):*
  *If the supply voltage fluctuates, the voltage regulator will stabilize the output.*
3. *Second Conditional (Hypothetical / Simulation):*
  *If the server load doubled overnight, the cloud load-balancer would auto-scale instances.*
4. *Third Conditional (Root Cause / Post-Mortem Failure Analysis):*
  *If the battery management system had monitored cell temperatures, thermal runaway would not have occurred.*
""",
        "checklist": """1. Identify sentence patterns (SV, SVO, SVIODO, SVOC, SVOA) in 5 technical sentences.
2. State 4 rules of Subject-Verb Concord involving collective nouns and correlative conjunctions.
3. Construct First, Second, and Third conditionals modeling engineering safety protocols.
4. Correct 5 typical errors involving intervening prepositional phrases and plural units."""
    },
    3: {
        "title": "MODULE 3: WRITTEN CORRESPONDENCE",
        "short_title": "Module 3: Written Correspondence",
        "co": "CO: 3",
        "scope": "(1) Formal written correspondence in professional engineering environments, (2) Job Application Letters: Cover letter architecture, opening hooks, body paragraphs matching candidate skills to job requirements, and professional closing, (3) Résumé Writing: Chronological, Functional, and Hybrid/Combination formats, ATS (Applicant Tracking System) optimization keywords and formatting rules, and (4) Statement of Purpose (SOP): Hook, academic foundation, project milestones, research interests, career vision, and university-specific alignment.",
        "blueprint": """In VIT Final Assessment Tests, Module 3 carries 20 Marks:
1. *Question Type A (10 Marks):* Job Application & Cover Letter: Drafting a high-impact, professional cover letter applying for a specific engineering role (e.g., Embedded Systems Engineer or Software Developer) responding to an industry job advertisement.
2. *Question Type B (10 Marks):* Statement of Purpose (SOP) or ATS Résumé: Writing a comprehensive 300-word SOP for graduate admission (MS/MTech) or crafting an ATS-compliant chronological resume section.""",
        "table": """  [*Document*], [*Structural Component*], [*Key Professional Objective*],
  [Cover Letter], [Header -> Salutation -> Hook -> Skills Alignment -> Value Proposition -> Call to Action], [Convinces hiring manager to review candidate resume],
  [ATS Résumé], [Contact info -> Summary -> Education -> Technical Skills -> Projects -> Experience], [Scored by automated parser algorithms using exact job keywords],
  [Statement of Purpose (SOP)], [Academic motivation -> Undergrad research -> Problem statement -> Faculty fit], [Demonstrates research maturity and intellectual readiness for graduate school],
  [Bullet Point Architecture], [Strong action verb + Context/Task + Quantifiable metric result], [Demonstrates measurable impact (e.g., *Reduced latency by 34%*)],
""",
        "content": """= Topic 1: Job Application Letters & Cover Letter Architecture

=== The Three-Tier Cover Letter Blueprint
1. *Opening Paragraph (The Hook & Intent):*
  State clearly the specific job position, job ID, and how you learned of the vacancy. Articulate an immediate hook summarizing your core engineering specialization.
2. *Body Paragraphs (Technical Competence & Evidence):*
  Bridge your academic coursework, capstone projects, and internships directly to the employer's tech stack. Never repeat your resume verbatim; instead, contextualize your accomplishments using the *STAR method* (Situation, Task, Action, Result).
3. *Concluding Paragraph (Call to Action & Professional Sign-Off):*
  Express enthusiasm for an interview, state your availability, and thank the hiring committee for their time and consideration.


= Topic 2: ATS-Compliant Résumé Writing

=== Applicant Tracking Systems (ATS) Optimization
Over 90% of Fortune 500 corporations utilize ATS algorithms to screen technical applications before human review:
- *Format Cleanliness:* Standard single-column layout; avoid tables, graphics, text boxes, and multi-column sidebars that crash text parsers.
- *Section Headers:* Use universal standard headers (*Education, Technical Skills, Professional Experience, Projects*).
- *Keyword Mirroring:* Integrate exact programming languages, frameworks, protocols, and certifications listed in the job description.
- *The Google XYZ Bullet Formula:*
  *Accomplished [X], as measured by [Y], by doing [Z].*
  *Example:* *Optimized database query throughput by 42% across 1.2M transactions by indexing SQL tables and deploying Redis caching.*


= Topic 3: Statement of Purpose (SOP) Architecture

An academic Statement of Purpose must convey intellectual curiosity and research readiness:
1. *Paragraph 1 (The Hook):* Specific technical problem that ignited your interest in the sub-discipline.
2. *Paragraph 2 (Academic Foundation):* Key coursework and conceptual milestones at VIT.
3. *Paragraph 3 (Project & Research Track Record):* Capstone projects, published papers, or hackathon innovations.
4. *Paragraph 4 (Why This University & Professor):* Cite specific laboratories, ongoing faculty research projects, and university resources to show genuine intent.
5. *Paragraph 5 (Career Vision):* 5-year post-graduation trajectory (R&D engineer, doctoral studies, or tech entrepreneur).
""",
        "checklist": """1. Write a professional cover letter matching your credentials to an AI/ML or Embedded Engineer role.
2. Optimize a technical project description using the Google XYZ formula.
3. What are 4 design elements that cause an ATS software parser to reject a résumé?
4. Structure a 5-paragraph Statement of Purpose for an international graduate program."""
    },
    4: {
        "title": "MODULE 4: BUSINESS CORRESPONDENCE",
        "short_title": "Module 4: Business Correspondence",
        "co": "CO: 4",
        "scope": "(1) Formal Business Letters: Calling for Quotations, Placing an Order, Letters of Complaint, and Sales Letters, (2) Internal Business Correspondence: Office Memorandums (Memos) and Circulars, (3) Minutes of Meeting (MoM): Pre-meeting agendas, parliamentary conventions, recording actionable resolutions, and distribution, and (4) Describing technical products, components, systems, and sequential engineering processes.",
        "blueprint": """In VIT Final Assessment Tests, Module 4 carries 15 to 20 marks:
1. *Question Type A (10 Marks):* Business Letter Drafting: Drafting a formal letter of complaint regarding defective laboratory equipment with an itemized delivery schedule, requesting warranty repair or replacement.
2. *Question Type B (10 Marks):* Minutes of Meeting (MoM) or Office Memo: Preparing comprehensive minutes for a product design review meeting or drafting an internal company memorandum announcing a new security protocol.""",
        "table": """  [*Document Type*], [*Standard Template / Heading*], [*Diagnostic Requirement*],
  [Letter of Quotation], [Letterhead -> Date -> Inside Address -> Subject -> Itemized Specs -> Terms], [Specifies quantities, tolerances, delivery schedules, and payment terms],
  [Letter of Complaint], [Neutral factual tone -> Order ref -> Defect description -> Rectification demand], [Avoids emotional hostility; cites invoice numbers and delivery receipts],
  [Internal Memo], [TO, FROM, DATE, SUBJECT (Memo Header)], [Strictly internal; no salutation or complimentary close required],
  [Minutes of Meeting], [Date/Time -> Attendees -> Agenda -> Discussion -> Action Items & Deadlines], [Records resolutions and assigns specific accountability to team leads],
""",
        "content": """= Topic 1: Formal Business Letters (Quotations & Complaints)

=== Letter Calling for Quotations
When procuring hardware or software licenses for an engineering project:
- Provide exact technical specifications (part numbers, clock frequencies, power ratings).
- Specify required delivery date, warranty period (minimum 2 years), and acceptable payment terms (e.g., 30 days net).
- Request validity period for quoted unit prices.

=== Letter of Complaint
- *Tone:* Objective, restrained, courteous, and authoritative.
- *Body Paragraph 1:* State the purchase order number, invoice date, and date of delivery.
- *Body Paragraph 2:* Detail the precise discrepancy or defect (e.g., failure during burn-in testing).
- *Body Paragraph 3:* State the required remedial action (immediate replacement, technician dispatch, or credit note).


= Topic 2: Office Memorandums (Memos) & Minutes of Meeting (MoM)

=== Office Memorandum Architecture
Memos facilitate internal company communication across departments:
- *Standard Header:*
  - *TO:* All Engineering Personnel
  - *FROM:* Chief Technical Officer
  - *DATE:* November 4, 2026
  - *SUBJECT:* Implementation of Mandatory Multi-Factor Authentication (MFA)
- *Structure:* Purpose statement $arrow.r$ Context $arrow.r$ Direct action required $arrow.r$ Contact liaison.

=== Minutes of Meeting (MoM) Framework
1. *Preliminaries:* Meeting title, date, start/end time, venue/virtual link, chairperson, and secretary.
2. *Attendance Record:* Members present and apologies received for absence.
3. *Approval of Previous Minutes:* Formal adoption of prior records.
4. *Agenda Items & Discussions:* Concise objective summary of deliberations.
5. *Action Matrix (Crucial for VIT evaluation):*
  - *Decision / Action Item:* Specific task approved.
  - *Responsible Person / Lead:* Assignee by name.
  - *Target Completion Deadline:* Strict calendar date.
""",
        "checklist": """1. Draft an itemized letter calling for quotations for 50 high-precision digital oscilloscopes.
2. Write a formal letter of complaint regarding damaged semiconductor shipments.
3. Format an internal office memo with the 4 standard header fields.
4. Construct an action items table for a software sprint review meeting."""
    },
    5: {
        "title": "MODULE 5: PROFESSIONAL WRITING",
        "short_title": "Module 5: Professional Writing",
        "co": "CO: 5",
        "scope": "(1) Paraphrasing and Summarizing technical prose: Preserving semantic integrity while eliminating plagiarism, (2) Executive Summary writing: Synthesis of high-level problem statements, methodologies, findings, and strategic business impacts, (3) Structure and types of Engineering Proposals (Internal, External, Solicited, Unsolicited), (4) Technical Recommendations: Data-driven decision matrices and feasibility criteria.",
        "blueprint": """In VIT Final Assessment Tests, Module 5 carries 15 to 20 marks:
1. *Question Type A (10 Marks):* Technical Proposal Writing: Drafting a formal solicited engineering proposal for implementing a campus-wide IoT water monitoring grid, including scope, deliverables, budget, and milestone Gantt chart.
2. *Question Type B (10 Marks):* Executive Summary & Paraphrasing: Synthesizing a 500-word engineering case study into an authoritative 100-word Executive Summary with clear strategic recommendations.""",
        "table": """  [*Writing Genre*], [*Structural Sequence*], [*Key Professional Benchmark*],
  [Executive Summary], [Context -> Problem -> Methodology -> Core Findings -> Business Impact], [Must be fully comprehensible to a C-suite executive without reading main report],
  [Technical Proposal], [Title -> Exec Summary -> Needs Statement -> Solution -> Timeline -> Budget], [Focuses on persuasive value proposition and return on investment (ROI)],
  [Paraphrasing], [Rephrase syntax + Replace with precise technical synonyms], [Maintains original meaning while altering sentence structure and wording],
  [Recommendation], [Observation -> Impact Analysis -> Concrete Prescriptive Action], [Actionable, prioritized, and cost-justified],
""",
        "content": """= Topic 1: Paraphrasing, Summarizing & Executive Summaries

=== Techniques for Academic Paraphrasing
1. Change grammatical voice (active to passive, or vice versa, where appropriate).
2. Alter word classes (transform verbs to nouns, adjectives to adverbs).
3. Rearrange clause hierarchy and combine simple sentences into complex compound structures.
4. Maintain technical terms that have no synonyms (e.g., *thermodynamics, microprocessor*), but rephrase surrounding explanatory prose.

=== Writing an Executive Summary
An Executive Summary is NOT an introduction; it is a self-contained miniature version of the entire report:
- *Length:* 5% to 10% of the total report length (typically 1 page).
- *Content:* State the core problem addressed, analytical method used, top numerical results, and strategic business recommendations.
- *Audience:* Written for busy decision-makers who need to approve budgets without reading 50 pages of raw technical appendices.


= Topic 2: Engineering Proposals & Feasibility Reports

=== Anatomy of a Formal Technical Proposal
1. *Project Overview & Problem Statement:* Define the engineering bottleneck or organizational need.
2. *Technical Approach:* Detailed description of proposed system architecture, hardware/software stacks, and deployment phases.
3. *Scope of Work & Deliverables:* Explicit itemization of what is included and excluded.
4. *Project Schedule:* Milestone breakdown and Gantt chart timeline.
5. *Budget & Cost Breakdown:* Itemized capital expenditures (CapEx) and operational expenditures (OpEx).
6. *Risk Mitigation Plan:* Identification of potential failures and contingency protocols.
""",
        "checklist": """1. Condense a technical passage into a 100-word executive summary.
2. List the 6 standard sections of a formal engineering project proposal.
3. Paraphrase a technical research excerpt without committing patchwriting plagiarism.
4. Formulate 3 actionable engineering recommendations supported by empirical metrics."""
    },
    6: {
        "title": "MODULE 6: TEAM BUILDING & LEADERSHIP SKILLS",
        "short_title": "Module 6: Team Building & Leadership",
        "co": "CO: 6",
        "scope": "(1) Principles of leadership in technical organizations, (2) Leadership styles (Autocratic, Democratic, Laissez-faire, Transformational, Servant leadership), (3) Tuckman's Team Development Model (Forming, Storming, Norming, Performing, Adjourning), (4) Negotiation skills and principled negotiation (Fisher & Ury's BATNA), and (5) Conflict management strategies (Thomas-Kilmann Conflict Mode Instrument: Competing, Collaborating, Compromising, Avoiding, Accommodating).",
        "blueprint": """In VIT Final Assessment Tests, Module 6 carries 15 to 20 marks:
1. *Question Type A (10 Marks):* Tuckman's Stages of Team Development: Detailed progression from Forming to Performing in engineering project groups, identifying leadership challenges at each transition.
2. *Question Type B (10 Marks):* Conflict Management & Negotiation: Applying the Thomas-Kilmann conflict model and BATNA principles to resolve an engineering schedule dispute between software and hardware design teams.""",
        "table": """  [*Leadership Framework*], [*Core Model / Stages*], [*Engineering Application*],
  [Tuckman's Model], [Forming -> Storming -> Norming -> Performing -> Adjourning], [Diagnosing team friction in semester-long capstone project groups],
  [Thomas-Kilmann Modes], [Competing, Collaborating, Compromising, Avoiding, Accommodating], [Two dimensions: Assertiveness vs Cooperativeness],
  [Fisher & Ury BATNA], [Best Alternative To a Negotiated Agreement], [Protects negotiator against accepting unacceptable project contracts],
  [Transformational Leadership], [Idealized influence, Inspirational motivation, Intellectual stimulation], [Drives innovation in high-tech startup engineering teams],
""",
        "content": """= Topic 1: Leadership Models & Tuckman's Team Dynamics

=== Tuckman's Stages of Team Development
Every engineering team evolves through predictable psychological stages:
1. *Forming (Orientation):* Team members meet, display polite deference, and explore project boundaries. Leadership role: Directing and defining objectives.
2. *Storming (Conflict):* Clashes occur over technical architecture, roles, and project leadership. Leadership role: Coaching, active mediation, and establishing psychological safety.
3. *Norming (Cohesion):* Consensus emerges; team establishes communication standards, git commit guidelines, and mutual trust. Leadership role: Facilitating.
4. *Performing (High Productivity):* Autonomous, synergistic execution. The team solves complex problems with minimal friction. Leadership role: Delegating.
5. *Adjourning (Wrap-up):* Project completion, retrospective analysis, and documentation handover.


= Topic 2: Conflict Management & Principled Negotiation

=== Thomas-Kilmann Conflict Mode Instrument (TKI)
Categorized along two orthogonal axes: Assertiveness (satisfying own concerns) and Cooperativeness (satisfying others' concerns):
1. *Collaborating (High Assertiveness, High Cooperation):* The win-win approach; integrates perspectives to find a superior creative solution.
2. *Compromising (Moderate Assertiveness, Moderate Cooperation):* Splitting the difference; rapid interim settlement.
3. *Competing (High Assertiveness, Low Cooperation):* Win-lose; necessary during emergencies or enforcing non-negotiable safety standards.
4. *Accommodating (Low Assertiveness, High Cooperation):* Yielding to preserve interpersonal goodwill.
5. *Avoiding (Low Assertiveness, Low Cooperation):* Postponing trivial issues.

=== Principled Negotiation (Harvard Negotiation Project)
- Separate the people from the problem.
- Focus on underlying interests, not rigid positional stances.
- Generate options for mutual gain before deciding.
- Insist on objective empirical criteria (benchmarks, industry standards).
- *BATNA:* Know your Best Alternative To a Negotiated Agreement; never sign a deal worse than your BATNA!
""",
        "checklist": """1. Describe the 5 stages of Tuckman's model and the leader's role in each.
2. Compare Autocratic vs Transformational leadership in engineering projects.
3. Explain the 5 Thomas-Kilmann conflict resolution modes.
4. Define BATNA and explain why it is vital in software vendor negotiations."""
    },
    7: {
        "title": "MODULE 7: RESEARCH WRITING",
        "short_title": "Module 7: Research Writing",
        "co": "CO: 7",
        "scope": "(1) Interpreting and analyzing peer-reviewed research articles, (2) Approaches to Literature Review and Review Paper Writing (Narrative, Systematic, Meta-analysis), (3) Canonical structure of a technical research paper (IMRaD: Introduction, Methods, Results, and Discussion), (4) Citation and referencing standards: IEEE and APA style conventions, and (5) Academic integrity, ethics, plagiarism prevention, and peer review mechanics.",
        "blueprint": """In VIT Final Assessment Tests, Module 7 carries 15 to 20 marks:
1. *Question Type A (10 Marks):* IMRaD Research Paper Structure: Explaining the detailed purpose, content, and writing conventions of Introduction, Methodology, Results, and Discussion sections in engineering journals.
2. *Question Type B (10 Marks):* Referencing & Academic Ethics: Formatting 5 diverse sources (journal article, conference paper, patent, book, online dataset) according to IEEE citation style and outlining ethical protocols to prevent plagiarism.""",
        "table": """  [*Research Element*], [*IMRaD Section*], [*Key Scientific Requirement*],
  [Introduction], [Broad context -> Literature gap -> Research question / hypothesis], [The inverted pyramid: moves from general background to specific objective],
  [Methodology], [Hardware setup, datasets, algorithms, simulation parameters, repeatability], [Must provide sufficient detail for an independent researcher to replicate],
  [Results], [Empirical findings, figures, tables, performance graphs], [Pure objective data presentation without speculative interpretation],
  [Discussion], [Data interpretation -> Comparison with literature -> Limitations -> Future work], [Explains the physical or algorithmic meaning behind observed findings],
  [IEEE Referencing], [Numeric bracketed citations: *[1]*, ordered sequentially as they appear in text], [Standard across electrical, electronics, and computer science fields],
""",
        "content": """= Topic 1: The IMRaD Structural Framework

=== Anatomy of an Engineering Research Paper
1. *Title & Abstract:* Concise, descriptive title with high-density keywords. Structured 200-word abstract summarizing background, method, principal findings, and significance.
2. *Introduction:*
  - Contextualizes the engineering problem.
  - Reviews existing literature to establish current state of the art.
  - Identifies the research gap that motivated the study.
  - Formulates the exact research hypothesis and study scope.
3. *Methodology (Materials & Methods):*
  - Complete description of materials, component specifications, datasets, and benchmark baselines.
  - Mathematical equations and pseudo-code for algorithms.
  - Experimental procedures and statistical error bounds.
4. *Results:*
  - High-resolution data plots with error bars.
  - Comparative tables benchmarking performance against previous literature.
5. *Discussion:*
  - Explains the mechanisms driving the observed results.
  - Addresses discrepancies or unexpected anomalies.
  - Outlines study limitations and promising directions for future inquiry.


= Topic 2: Referencing Standards (IEEE vs APA) & Academic Integrity

=== IEEE Citation Format Conventions
IEEE style uses bracketed numbers in order of appearance in the text:
- *Journal Paper:*
  [1] J. K. Author and R. M. Co-Author, "Title of journal article," *IEEE Trans. Power Syst.*, vol. 35, no. 4, pp. 2890-2898, Jul. 2020.
- *Conference Paper:*
  [2] P. S. Engineer, "Deep learning models for fault detection," in *Proc. IEEE Int. Conf. Autom.*, Chennai, India, 2024, pp. 112-117.
- *Book:*
  [3] C. L. Smith, *Advanced Digital Signal Processing*, 3rd ed. New York, NY, USA: Wiley, 2022.

=== Academic Integrity & Plagiarism Prevention
- *Direct Quotes:* Enclose in quotation marks with exact page citation.
- *Paraphrasing:* Rewrite in your own original syntax and vocabulary, and cite source.
- *Self-Plagiarism:* Re-using your own previously published text without citation is a serious academic infraction under IEEE and UGC ethical codes.
""",
        "checklist": """1. Diagram the four components of the IMRaD research paper architecture.
2. Format a journal paper, conference proceeding, and textbook using IEEE reference style.
3. Differentiate between Results (objective data) and Discussion (interpretation).
4. Explain the difference between mosaic plagiarism and proper academic paraphrasing."""
    }
}

for mod_num, data in english_modules.items():
    typst_code = f"""
#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.2cm, right: 2.2cm),
  header: context {{
    if here().page() > 1 {{
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: luma(90))[VIT BENG101L --- {data['short_title']}]],
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
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT BENG101L --- {data['short_title']}] \\
  #v(2mm)
  #text(size: 15pt, weight: "black")[{data['title']}] \\
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[({data['co']})] \\
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Complete Study Textbook, Step-by-Step Derivations & VIT FAT Question Bank] \\
  #text(size: 9pt, fill: luma(100))[Aligned with VIT BENG101L Official Syllabus, VIT Department Question Bank, and VIT FAT Past Papers]
]

#v(3mm)
#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 9pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Textbook (All Syllabus Topics):]
  {data['scope']}
]

#v(2mm)
#outline(title: "Contents", depth: 2, indent: auto)
#v(2mm)

= VIT FAT Exam Blueprint & Master Formula Sheet for Module {mod_num}

{data['blueprint']}

#v(2mm)
#table(
  columns: (2.2fr, 3.2fr, 2.6fr),
  stroke: 0.5pt + luma(180),
  inset: 6.5pt,
{data['table']}
)

{data['content']}

= Quick Self-Test Checklist Before Your Exam

{data['checklist']}
"""
    fname_typ = f"public/pdfs/english/English_MOD-{mod_num}.typ"
    fname_pdf = f"public/pdfs/english/English_MOD-{mod_num}.pdf"
    with open(fname_typ, "w") as f:
        f.write(typst_code)
    print(f"Wrote {fname_typ}")
    res = subprocess.run(["/opt/homebrew/bin/typst", "compile", fname_typ, fname_pdf], capture_output=True, text=True)
    if res.returncode == 0:
        print(f"SUCCESS: Compiled {fname_pdf}")
    else:
        print(f"ERROR on {fname_pdf}:\n{res.stderr}")
