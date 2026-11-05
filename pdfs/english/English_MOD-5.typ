
#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.2cm, right: 2.2cm),
  header: context {
    if here().page() > 1 {
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: luma(90))[VIT BAENG101 --- Module 5: Interpersonal Communication]],
        align(right)[#text(size: 8.5pt, fill: luma(90), style: "italic")[VIT FAT Study Textbook]]
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
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT BAENG101 --- Module 5: Interpersonal Communication] \
  #v(2mm)
  #text(size: 15pt, weight: "black")[MODULE 5: INTERPERSONAL COMMUNICATION] \
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[(CO: 6)] \
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Complete Study Textbook, Professional Writing Guide & VIT FAT Question Bank] \
  #text(size: 9pt, fill: luma(100))[Aligned with Official VIT BAENG101 Course Page Syllabus, Question Bank, and Past FAT Papers]
]

#v(3mm)

#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 9pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Textbook (Official VIT Syllabus - All 6 Topics):]
  (1) Interpersonal Communication dynamics, (2) Leadership Styles, (3) Belbin Team Roles, (4) Negotiation Skills, (5) Thomas-Kilmann Modes of Conflict Management, and (6) Writing a Winning Statement of Purpose (SOP).
]

#v(2mm)
= VIT FAT Exam Blueprint & Master Frameworks

Module 5 carries *15 to 20 marks* in BAENG101 FAT:
1. *Belbin 9 Team Roles (10 Marks):* Explaining Action-oriented, People-oriented, and Thought-oriented roles, and why balanced engineering project teams need diverse role distribution.
2. *Thomas-Kilmann Conflict Modes (10 Marks):* The two-dimensional grid (Assertiveness vs. Cooperativeness): Competing, Collaborating, Compromising, Avoiding, and Accommodating.
3. *Statement of Purpose (SOP) Formulation (10 Marks):* Structure, hook, academic trajectory, research alignment, and common SOP drafting pitfalls.

#table(
  columns: (1.5fr, 2fr, 2.5fr),
  inset: 6pt,
  stroke: 0.4pt + luma(180),
  align: (left, left, left),
  [*Thomas-Kilmann Mode*], [*Coordinates (Assertiveness / Cooperativeness)*], [*Appropriate Workplace Situation*],
  [Competing], [High Assertiveness, Low Cooperativeness ("My way")], [Emergency situations requiring decisive action; vital company survival issues.],
  [Collaborating], [High Assertiveness, High Cooperativeness ("Our way")], [Complex integrative solutions where both perspectives are too important to compromise.],
  [Compromising], [Moderate Assertiveness, Moderate Cooperativeness ("Halfway")], [Time-sensitive deadlocks where temporary expedient settlements are required.],
  [Avoiding], [Low Assertiveness, Low Cooperativeness ("No way")], [Trivial matters or when emotions run dangerously high and cooling off is essential.],
  [Accommodating], [Low Assertiveness, High Cooperativeness ("Your way")], [When realizing you are wrong, to preserve vital relational harmony for future collaboration.]
)

= Belbin Team Roles & Statement of Purpose (SOP)

== Belbin 9 Team Roles
Developed by Dr. Meredith Belbin, high-performing engineering teams require nine complementary behavioral roles:
1. *Action-Oriented:* Shaper (drives progress under pressure), Implementer (turns ideas into practical executable workflows), Completer Finisher (meticulously checks for errors and quality).
2. *People-Oriented:* Coordinator (clarifies goals and delegates), Teamworker (builds team cohesion and mitigates friction), Resource Investigator (networks externally for opportunities).
3. *Thought-Oriented:* Plant (creative problem solver generating unorthodox ideas), Monitor Evaluator (logical, unemotional judge of ideas), Specialist (possesses deep technical domain expertise).

== Statement of Purpose (SOP) Architecture
An SOP is a personal academic narrative for graduate admissions or research fellowships:
- *Paragraph 1 (The Hook & Motivation):* Specific triggering incident or engineering project that ignited your intellectual passion. Avoid generic childhood cliches.
- *Paragraph 2 & 3 (Academic & Technical Trajectory):* Key undergraduate achievements, capstone projects, publications, and specific technical competencies mastered.
- *Paragraph 4 (Why This University & Lab?):* Explicitly name faculty advisors, current lab research directions, and unique university equipment you intend to leverage.
- *Paragraph 5 (Long-Term Career Vision):* Clear 5-to-10-year trajectory following completion of the degree.
