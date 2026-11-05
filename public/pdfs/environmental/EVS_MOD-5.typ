
#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.2cm, right: 2.2cm),
  header: context {
    if here().page() > 1 {
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: luma(90))[VIT BCHY102 / EST1001 --- Module 5: Climate Change & EIA]],
        align(right)[#text(size: 8.5pt, fill: luma(90), style: "italic")[VIT CBT Exam Textbook]]
      )
      line(length: 100%, stroke: 0.4pt + luma(180))
    }
  },
  footer: context {
    align(center)[#text(size: 9pt)[#here().page()]]
  }
)
#set text(font: "New Computer Modern", size: 10pt)
#set par(justify: true, leading: 0.65em)
#set heading(numbering: "1.1")

#align(center)[
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT BCHY102 / EST1001 --- Module 5: Climate Change & EIA] \
  #v(2mm)
  #text(size: 15pt, weight: "black")[MODULE 5: CLIMATE CHANGE, EMERGING ISSUES & EIA] \
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[(CO: 5)] \
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Complete CBT Study Textbook, High-Yield MCQ Bank & Step-by-Step Rationales] \
  #text(size: 9pt, fill: luma(100))[Aligned with VIT BCHY102 Online CBT Exam Syllabus, VTOP / Moodle Question Bank & Past Papers]
]

#v(3mm)
#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 9pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Textbook (Official VIT Syllabus):]
  (1) Climate change science, Enhanced Greenhouse Effect, Global Warming Potential (GWP), and Carbon Footprint, (2) Radiative forcing, sea level rise, ocean acidification, and extreme weather events, (3) Emerging technological solutions: Role of Artificial Intelligence (AI) and Internet of Things (IoT) in smart environmental monitoring, smart grids, and disaster warning, (4) Environmental Impact Assessment (EIA): Definition, objectives, and notification history in India (EIA Notification 2006), (5) The 4 core stages of the EIA process: Screening, Scoping, Public Consultation (Public Hearing), and Appraisal, and (6) Environmental Management Plan (EMP) and post-project monitoring.
]

#v(2mm)
#outline(title: "Contents", depth: 2, indent: auto)
#v(2mm)

= VIT CBT Exam Blueprint & Master Key Facts for Module 5

VIT Examination Format: 100% CBT Multiple Choice Questions (MCQs).
Module 5 accounts for 15 to 20% of the CBT Question Pool:
- Core Focus: Global Warming Potential of greenhouse gases ($"CO"_2 = 1, "CH"_4 approx 28, "N"_2"O" approx 265, "SF"_6 = 23,500$), the 4 sequential stages of the EIA process, Category A vs Category B projects in EIA Notification 2006, and public hearing procedures.

#v(2mm)
#table(
  columns: (2.2fr, 3.2fr, 2.6fr),
  stroke: 0.5pt + luma(180),
  inset: 6.5pt,
  [*EIA Stage / Climate Parameter*], [*Regulatory Definition / Value*], [*CBT Exam Hallmark*],
  [Carbon Dioxide ($"CO"_2$)], [GWP = 1; baseline reference greenhouse gas], [Responsible for ~66% of enhanced radiative forcing],
  [Methane ($"CH"_4$)], [GWP = 28-36 (100-year timescale)], [Emitted by enteric fermentation in cattle and paddy fields],
  [Sulfur Hexafluoride ($"SF"_6$)], [GWP = 23,500; atmospheric lifetime ~3,200 years], [Highest known GWP gas; used in electrical switchgear],
  [EIA Stage 1: Screening], [Determines whether a proposed project requires a full EIA], [Divides projects into Category A (Central MoEFCC) and Category B (State SEIAA)],
  [EIA Stage 2: Scoping], [Formulates comprehensive Terms of Reference (ToR)], [Defines spatial and temporal boundaries for environmental study],
  [EIA Stage 3: Public Consultation], [Public hearing at site + written representations], [Affected local community voices concerns; mandatory video recording],
  [EIA Stage 4: Appraisal], [Expert Appraisal Committee (EAC) scrutinizes final EIA & EMP], [Recommends or rejects grant of Environmental Clearance (EC)],

)

= Topic 1: Climate Change Science & Greenhouse Potentials

=== The Enhanced Greenhouse Effect & Global Warming Potential (GWP)
Naturally occurring greenhouse gases retain thermal infrared radiation, warming Earth's surface to $+15^degree"C"$ instead of $-18^degree"C"$. Anthropogenic emissions enhance this trapping:
- *Global Warming Potential (GWP):* Measure of how much infrared heat a greenhouse gas traps in the atmosphere over 100 years relative to carbon dioxide ($"CO"_2$):
  - $"CO"_2$: GWP $= 1$ (Reference)
  - $"CH"_4$ (Methane): GWP $= 28$
  - $"N"_2"O"$ (Nitrous oxide): GWP $= 265$
  - $"CFC"-12$: GWP $= 10,200$
  - $"SF"_6$ (Sulfur hexafluoride): GWP $= 23,500$ (Extremely potent dielectric insulator gas!).

=== AI and IoT in Environmental Management
- *IoT Sensor Mesh Networks:* Autonomous wireless nodes measuring PM2.5, PM10, $"NO"_x$, and noise levels in real time.
- *AI Machine Learning Algorithms:* Predictive models forecasting air pollution dispersion patterns and early warning systems for flash floods.


= Topic 2: Environmental Impact Assessment (EIA) Framework

=== The EIA Notification 2006 (Government of India)
Environmental Impact Assessment is a formal planning tool to anticipate, evaluate, and mitigate the biophysical and social consequences of proposed developmental projects prior to execution:
1. *Project Categorization:*
  - *Category A Projects:* Mega-infrastructure, nuclear plants, and major ports appraised at the national level by MoEFCC and Expert Appraisal Committee (EAC). Mandatory EIA; no screening needed.
  - *Category B Projects:* Appraised at the state level by State EIA Authority (SEIAA). Subdivided into $B_1$ (requires full EIA) and $B_2$ (exempt from EIA).
2. *The Four Canonical Stages of EIA:*
  - *Stage 1: Screening:* Determines whether a project requires EIA based on investment scale and ecological sensitivity.
  - *Stage 2: Scoping:* Expert Appraisal Committee establishes detailed Terms of Reference (ToR) for the study.
  - *Stage 3: Public Consultation:* Mandatory public hearing conducted by the State Pollution Control Board at the project site to solicit feedback from project-affected residents.
  - *Stage 4: Appraisal:* Formal evaluation of the final Environmental Impact Statement (EIS) and Environmental Management Plan (EMP).


= Topic 3: High-Yield VIT CBT Multiple Choice Question (MCQ) Bank

*MCQ 5.1:* Under the Indian EIA Notification 2006, Category A developmental projects require environmental clearance from:
(A) District Collectorate (B) State Environment Impact Assessment Authority (SEIAA) (C) Ministry of Environment, Forest and Climate Change (MoEFCC), New Delhi (D) Local Municipal Corporation *Correct Answer:* *(C)* *Rationale:* Category A projects have national significance and are evaluated directly at the central level by MoEFCC and EAC.

*MCQ 5.2:* Which greenhouse gas exhibits the highest Global Warming Potential (GWP) over a 100-year time horizon?
(A) Carbon dioxide ($"CO"_2$) (B) Methane ($"CH"_4$) (C) Nitrous oxide ($"N"_2"O"$) (D) Sulfur hexafluoride ($"SF"_6$) *Correct Answer:* *(D)* *Rationale:* $"SF"_6$ has a GWP of approximately 23,500, making it thousands of times more potent at trapping thermal radiation than $"CO"_2$ per unit mass.

*MCQ 5.3:* What is the sequential chronological order of the 4 stages in the Indian EIA process?
(A) Scoping $arrow.r$ Screening $arrow.r$ Appraisal $arrow.r$ Public Consultation (B) Screening $arrow.r$ Scoping $arrow.r$ Public Consultation $arrow.r$ Appraisal (C) Public Consultation $arrow.r$ Screening $arrow.r$ Scoping $arrow.r$ Appraisal (D) Screening $arrow.r$ Appraisal $arrow.r$ Scoping $arrow.r$ Public Consultation *Correct Answer:* *(B)* *Rationale:* The statutory 4-stage EIA process under Notification 2006 proceeds strictly as: Screening $arrow.r$ Scoping $arrow.r$ Public Consultation $arrow.r$ Appraisal.

*MCQ 5.4:* Which component of an EIA report specifies the operational mitigation measures and monitoring schedules during the lifecycle of the project?
(A) Terms of Reference (ToR) (B) Environmental Management Plan (EMP) (C) Rapid EIA statement (D) Baseline environmental survey *Correct Answer:* *(B)* *Rationale:* The Environmental Management Plan (EMP) details specific budget, mitigation equipment, and monitoring timelines to minimize environmental degradation.


= Quick Self-Test Checklist Before Your Online CBT Exam

1. List the 4 stages of the EIA process in chronological sequence.
2. Differentiate between Category A and Category B projects under the EIA Notification 2006.
3. What is the Global Warming Potential of Methane and Sulfur Hexafluoride relative to CO2?
4. How does the Public Hearing stage ensure community participation in environmental decisions?
