
#set page(
  paper: "a4",
  margin: (top: 2cm, bottom: 2cm, left: 2cm, right: 2cm),
  header: context {
    if here().page() > 1 {
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8pt, fill: rgb("#64748b"))[VIT BAENG101 --- Technical English Communication]],
        align(right)[#text(size: 8pt, fill: rgb("#64748b"), style: "italic")[Official VIT FAT Study Textbook]]
      )
      v(-2pt)
      line(length: 100%, stroke: 0.4pt + rgb("#cbd5e1"))
    }
  },
  footer: context {
    line(length: 100%, stroke: 0.4pt + rgb("#e2e8f0"))
    v(2pt)
    grid(
      columns: (1fr, 1fr),
      align(left)[#text(size: 8pt, fill: rgb("#94a3b8"))[OnePrep • VIT Vellore Exam Preparation Platform]],
      align(right)[#text(size: 8pt, weight: "bold", fill: rgb("#0f172a"))[Page #here().page()]]
    )
  }
)
#set text(font: "New Computer Modern", size: 9.5pt)
#set par(justify: true, leading: 0.6em)
#set heading(numbering: "1.1")
#show heading.where(level: 1): it => block(spacing: 12pt)[
  #text(fill: rgb("#0f172a"), weight: "black", size: 12.5pt)[#it]
  #v(2pt)
  #line(length: 100%, stroke: 1pt + rgb("#dc2626"))
]
#show heading.where(level: 2): it => block(spacing: 9pt)[
  #text(fill: rgb("#1e293b"), weight: "bold", size: 10.5pt)[#it]
]

#align(center)[
  #text(size: 10pt, weight: "bold", tracking: 0.5pt, fill: rgb("#64748b"))[VIT BAENG101 --- Module 5: Interpersonal Skills] \
  #v(1.5mm)
  #text(size: 15pt, weight: "black", fill: rgb("#0f172a"))[MODULE 5: INTERPERSONAL SKILLS & LEADERSHIP/NEGOTIATION CASE STUDIES] \
  #text(size: 11pt, weight: "bold", fill: rgb("#dc2626"))[(CO: 6 | Weightage: 30 Marks in FAT --- Questions 8, 9 & 10)] \
  #v(1mm)
  #text(size: 10pt, weight: "bold")[Belbin 9 Roles, Leadership Case Study Architecture, BATNA & TKI Conflict Mastery] \
  #text(size: 8.5pt, fill: rgb("#64748b"))[Aligned with Official VIT BAENG101 Syllabus, School of Social Sciences & Languages Question Bank, and FAT Papers]
]

#v(2mm)

#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 8pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Module (Official Syllabus & FAT Blueprint):] \
  (1) Interpersonal Communication dynamics & Transactional Analysis, (2) The Nine Belbin Team Roles (Action, People, and Thought domains), (3) Leadership Styles & Case Study Framework (Autocratic, Democratic, Transformational, Laissez-faire), (4) Negotiation Skills: Fisher & Ury Principled Negotiation, BATNA, Reservation Price, and ZOPA, (5) Thomas-Kilmann Conflict Mode Instrument (TKI) 2D Grid. \
  #text(weight: "bold", fill: rgb("#dc2626"))[NOTE ON EXCLUSIONS: Statement of Purpose (SOP) is strictly excluded from the FAT paper.]
]

= 1. VIT FAT Exam Blueprint: Questions 8, 9 & 10 Breakdown (30 Marks!)

Module 5 dominates the second half of your 100-mark FAT paper, carrying a decisive *30 Marks*:

#table(
  columns: (1fr, 1.3fr, 2.4fr, 1fr),
  inset: 6pt,
  stroke: 0.4pt + rgb("#cbd5e1"),
  align: (center, left, left, center),
  [*Question*], [*Exam Focus*], [*Exact Testing Requirements & Rubric*], [*Marks*],
  [*Question 8*], [Interpersonal Communication & Belbin Roles], [Explain the 9 Belbin Team Roles across their 3 clusters (Action, People, Thought); analyze how team role imbalances cause project delays or failures in engineering teams.], [10 Marks],
  [*Question 9*], [Case Study on Leadership Styles], [A detailed corporate/engineering crisis narrative is presented. You must: (1) Diagnose executive leadership failure, (2) Cite evidence from the case, and (3) Prescribe an appropriate leadership turnaround model.], [10 Marks],
  [*Question 10*], [Case Study on Negotiation Skills & Conflict], [A supplier/contract deadlock scenario is given. You must calculate and define BATNA, formulate principled win-win options, and apply the Thomas-Kilmann Conflict Mode Instrument.], [10 Marks]
)

= 2. The Nine Belbin Team Roles: Master Classification Table

Dr. Meredith Belbin demonstrated that high-performing engineering teams do not rely simply on technical brilliance, but require a balanced distribution of nine distinct behavioral roles clustered into three domains:

#table(
  columns: (1fr, 1.2fr, 2.3fr, 2.3fr),
  inset: 5pt,
  stroke: 0.4pt + rgb("#cbd5e1"),
  [*Cluster*], [*Belbin Role*], [*Core Strength & Contribution*], [*Allowable Weakness (VIT Exam Rule)*],
  [*Action-Oriented*], [*Shaper*], [Challenging, dynamic, thrives under pressure. Has drive and courage to overcome obstacles.], [Prone to provocation, short-tempered, may offend colleagues' feelings in the drive to finish.],
  [], [*Implementer*], [Practical, reliable, disciplined. Turns concepts into workable operational workflows.], [Somewhat inflexible; slow to respond to unproven disruptive innovations.],
  [], [*Completer Finisher*], [Painstaking, conscientious, perfectionist. Searches for errors, polish deliverables.], [Inclined to worry unduly; reluctant to delegate small tasks; micromanages.],
  [*People-Oriented*], [*Coordinator*], [Mature, confident leader. Clarifies goals, promotes decision-making, delegates well.], [Can be seen as manipulative; offloads personal work onto others.],
  [], [*Teamworker*], [Cooperative, diplomatic, perceptive. Listens, calms friction, builds team cohesion.], [Indecisive in acute crunch moments; avoids interpersonal confrontation.],
  [], [*Resource Investigator*], [Extroverted, enthusiastic, communicative. Explores outside opportunities, contacts.], [Over-optimistic initially; rapidly loses momentum once initial excitement cools.],
  [*Thought-Oriented*], [*Plant*], [Creative, imaginative, unorthodox. Generates disruptive solutions to complex problems.], [Ignores operational protocols; too preoccupied to communicate effectively with mortals.],
  [], [*Monitor Evaluator*], [Sober, strategic, discerning. Judges all options objectively without emotional bias.], [Lacks drive and ability to inspire others; overly critical of novel ideas.],
  [], [*Specialist*], [Single-minded, dedicated, self-starting. Delivers rare technical knowledge in depth.], [Contributes only on a narrow front; dwells on technical minutiae at the expense of big picture.]
)

= 3. Leadership Styles: Comparative Framework & Case Study Method

== 3.1 The 4 Dominant Leadership Archetypes
1. *Autocratic (Authoritarian):* Centralized decision-making, strict top-down directives, zero employee consultation. *Effective in:* Immediate physical emergencies, factory fire evacuations, acute safety cutoffs. *Disastrous in:* Creative software architecture, research teams (erodes psychological safety, triggers resignations).
2. *Democratic (Participative):* Encourages team input, consensus building, transparent deliberation. *Effective in:* Engineering design reviews, complex problem solving. *Disastrous in:* Urgent real-time crises requiring split-second decisions.
3. *Transformational:* Visionary, articulates an inspiring purpose, fosters intellectual stimulation, mentors talent. *Effective in:* Corporate turnarounds, technological modernization, agile restructuring.
4. *Laissez-Faire (Delegative):* Hands-off approach, leaves complete autonomy to subordinates. *Effective in:* Highly specialized R&D institutes with autonomous PhD scientists. *Disastrous in:* Teams with junior engineers needing clear milestones and guidance.

== 3.2 The 4-Step Case Study Solution Template for Question 9
To score a full 10/10 in Question 9, structure your answer using these four explicit headings:
- *Heading 1: Problem Identification:* State the underlying organizational bottleneck and employee friction points.
- *Heading 2: Theoretical Diagnosis:* Identify the leadership style exhibited (e.g. "Rigid Autocratic Leadership"), defining its characteristics.
- *Heading 3: Evidence from Text:* Quote specific sentences from the prompt demonstrating the pathology (e.g. cancelled leaves, public reprimands, suppressed feedback).
- *Heading 4: Actionable Remediation Plan:* Prescribe the alternative leadership model (e.g. Transformational / Situational) with a 3-step turnaround roadmap.

= 4. Negotiation Skills & Conflict Resolution Frameworks

== 4.1 Principled Negotiation (Fisher & Ury Model)
1. *Separate the People from the Problem:* Attack the technical issue, not the individuals.
2. *Focus on Underlying Interests, Not Positional Stances:* Positions are what people say they want; interests are why they want it.
3. *Invent Options for Mutual Gain (Expand the Pie):* Brainstorm creative trade-offs before deciding.
4. *Insist on Objective Standards:* Benchmark negotiations against independent market indexes, engineering standards, or legal precedent.

== 4.2 BATNA, Reservation Price & ZOPA
- *BATNA (Best Alternative to a Negotiated Agreement):* The fallback action a party will take if talks collapse completely. *BATNA determines your power:* A negotiator with an exceptional BATNA cannot be bullied into bad terms!
- *Reservation Price:* The absolute walk-away threshold (the worst deal acceptable before triggering BATNA).
- *ZOPA (Zone of Possible Agreement):* The overlap region between the buyer's maximum ceiling and seller's minimum floor.

== 4.3 The Thomas-Kilmann Conflict Mode Instrument (TKI)
Classifies conflict behaviors along two independent axes:
- *Assertiveness:* Extent to which an individual attempts to satisfy their own concerns.
- *Cooperativeness:* Extent to which an individual attempts to satisfy the other party's concerns.

#table(
  columns: (1.2fr, 1.5fr, 2.5fr),
  inset: 5.5pt,
  stroke: 0.4pt + rgb("#cbd5e1"),
  [*Conflict Mode*], [*Axis Coordinates*], [*Engineering Application & Stance*],
  [*Competing*], [High Assertiveness, Low Cooperativeness], ["My way." Decisive emergency action; vital when safety standards or legal compliance are at stake.],
  [*Collaborating*], [High Assertiveness, High Cooperativeness], ["Our way." Win-win integrative solution; essential for cross-functional hardware/software co-design.],
  [*Compromising*], [Moderate Assertiveness, Moderate Cooperativeness], ["Halfway." Both parties trade concessions to reach a quick expedient operational settlement.],
  [*Avoiding*], [Low Assertiveness, Low Cooperativeness], ["No way." Sidestepping trivial issues or allowing heated emotional confrontations to cool down.],
  [*Accommodating*], [Low Assertiveness, High Cooperativeness], ["Your way." Yielding to the other perspective when preserving client relationships outweighs short-term gain.]
)

= 5. Worked FAT Past Papers & Model 10-Mark Case Studies

== Problem 5.1: Full FAT Question 9 Case Study Solved (10 Marks)
*Prompt:* Rajesh, the newly appointed VP of an aerospace manufacturing firm, discovers that the assembly line is 3 weeks behind schedule on a major defense contract. He cancels all weekend leaves, mandates 14-hour daily shifts, issues public reprimands to supervisors during morning meetings, and states: "My instructions are final; do not question the schedule." Within two weeks, three senior quality inspectors resign, and defect rates in machined turbine components increase by 28%.
(a) Identify the leadership style exhibited by Rajesh and explain why it failed.
(b) Propose and justify an alternative leadership turnaround model.

*Model 10/10 Answer:*
#rect(width: 100%, stroke: 0.4pt + rgb("#94a3b8"), inset: 6pt, fill: rgb("#fafafa"))[
  *1. Problem Identification:* \
  The manufacturing plant suffers from severe operational backlogs compounded by an acute collapse in workforce morale, resulting in high attrition of mission-critical quality inspectors and an alarming 28% escalation in manufacturing defects. \
  \
  *2. Theoretical Diagnosis of Exhibited Leadership Style:* \
  Rajesh exhibits a classic *Rigid Autocratic (Authoritarian)* leadership style characterized by unilateral command, coercive overtime mandates, public humiliation, and complete suppression of bottom-up technical communication. \
  \
  *3. Evidence and Analysis of Why it Failed:* \
  - *Suppression of Psychological Safety:* Public reprimands created an atmosphere of fear. Workers concealed machine calibration flaws to avoid punitive wrath, directly causing the 28% defect surge. \
  - *Brain Drain of Specialized Talent:* Aerospace inspection requires scarce domain expertise; autocratic bullying precipitated the resignation of three senior inspectors whose loss paralyses quality audits. \
  - *Failure to Diagnose Root Causes:* A 3-week delay in aerospace manufacturing typically originates from supply chain part shortages or machine tool wear, rather than worker laziness. Coercive pressure exacerbated rather than resolved the mechanical bottleneck. \
  \
  *4. Alternative Leadership Turnaround Model: Transformational & Consultative Leadership:* \
  Rajesh must immediately pivot to a *Transformational and Situational Leadership* model: \
  - *Action 1: All-Hands Strategic Alignment:* Convene a transparent town hall communicating the national significance of the defense contract, inspiring shared commitment rather than instilling fear. \
  - *Action 2: Root-Cause Technical Hackathon:* Assemble machine supervisors and technicians to diagnose production chokepoints using Ishikawa (fishbone) diagrams to identify the true bottlenecks. \
  - *Action 3: Incentive-Driven Scheduling:* Replace punitive mandatory overtime with voluntary split-shifts compensated with overtime bonuses and compensatory off-days once defense delivery milestones are secured.
]

== Problem 5.2: Full FAT Question 10 Negotiation Case Study Solved (10 Marks)
*Prompt:* ElectroDrive, an EV startup, is negotiating a battery supply contract with PowerCell Corp. PowerCell demands USD 110 per kWh with an upfront non-refundable tooling charge of USD 2 Million. ElectroDrive's budget target is USD 95 per kWh with a maximum ceiling of USD 102 per kWh. Negotiations stall as both sides engage in positional bargaining.
(a) Define BATNA and determine what ElectroDrive's BATNA should be before re-entering talks.
(b) Using Fisher & Ury's Principled Negotiation, demonstrate how ElectroDrive can break the deadlock.

*Model 10/10 Answer:*
#rect(width: 100%, stroke: 0.4pt + rgb("#94a3b8"), inset: 6pt, fill: rgb("#fafafa"))[
  *Part (a) BATNA Definition & Determination:* \
  - *Definition:* BATNA (Best Alternative to a Negotiated Agreement) is the most advantageous course of action a negotiating party can execute if ongoing talks collapse completely. It establishes the objective reservation threshold below which no agreement should be signed. \
  - *ElectroDrive's BATNA:* Prior to resuming negotiations, ElectroDrive must obtain a firm, validated alternative supply quote (e.g., from an alternate manufacturer like Apex Battery at USD 104/kWh, or initiating an in-house pack assembly pilot). Possessing a validated USD 104/kWh backup establishes a credible reservation boundary, preventing PowerCell from coercing them into their USD 110/kWh demand. \
  \
  *Part (b) Breaking the Deadlock via Principled Negotiation:* \
  *1. Separate the People from the Problem:* Refrain from accusing PowerCell of extortion. Reframe the discussion from a combative tug-of-war into a collaborative engineering venture. \
  *2. Focus on Underlying Interests, Not Rigid Positions:* \
  - *PowerCell's Position:* "USD 110/kWh + USD 2M upfront." *Underlying Interest:* Cash flow security and hedging against volatile global lithium/nickel commodity spikes. \
  - *ElectroDrive's Position:* "USD 95/kWh." *Underlying Interest:* Preserving vehicle gross margins while guaranteeing scheduled multi-year delivery. \
  *3. Invent Options for Mutual Gain (Expanding the Pie):* \
  - *Index-Linked Pricing:* Establish a baseline price of USD 98/kWh tied dynamically to the London Metal Exchange lithium carbonate spot index, mitigating PowerCell's commodity risk. \
  - *Tooling Amortization:* Offer to amortize the USD 2M tooling cost across the first 50,000 delivered battery packs (USD 40 per pack) rather than paying a lump-sum deposit. \
  - *Volume Tier Commitments:* Guarantee exclusive battery supply rights for ElectroDrive's upcoming commercial delivery van line in exchange for immediate price concessions. \
  *4. Insist on Objective Standards:* Benchmark contract rates against the current BloombergNEF industry volume weighted average (USD 100/kWh) to achieve an equitable, data-driven agreement within the ZOPA.
]
