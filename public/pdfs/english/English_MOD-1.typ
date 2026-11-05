
#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.2cm, right: 2.2cm),
  header: context {
    if here().page() > 1 {
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: luma(90))[VIT BAENG101 --- Module 1: Technical Communication]],
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
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT BAENG101 --- Module 1: Technical Communication] \
  #v(2mm)
  #text(size: 15pt, weight: "black")[MODULE 1: INTRODUCTION TO TECHNICAL COMMUNICATION] \
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[(CO: 2)] \
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Complete Study Textbook, Professional Writing Guide & VIT FAT Question Bank] \
  #text(size: 9pt, fill: luma(100))[Aligned with Official VIT BAENG101 Course Page Syllabus, Question Bank, and Past FAT Papers]
]

#v(3mm)

#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 9pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Textbook (Official VIT Syllabus - All 6 Topics):]
  (1) The Nature of Technical Writing, (2) Taxonomy of Technical Writing: Scientific Writing vs Technical Reporting, (3) Key distinctions & style conventions, (4) 5Cs of Technical Writing, (5) Business Communication principles, and (6) Professional business correspondence.
]

#v(2mm)
= VIT FAT Exam Blueprint & Master Guidelines

Module 1 carries *15 to 20 marks* in BAENG101 FAT:
1. *Question Type A (10 Marks):* Comparison between General English / Creative Writing vs. Technical Writing, or Scientific Writing (journal paper) vs. Technical Reporting (feasibility / audit report).
2. *Question Type B (10 Marks):* The 5 Cs of Technical Writing (Clarity, Conciseness, Completeness, Concreteness, Correctness) applied to rewrite a flawed business memo or technical brief.

#table(
  columns: (2fr, 2fr, 2fr),
  inset: 6pt,
  stroke: 0.4pt + luma(180),
  align: (left, left, left),
  [*The 5 Cs*], [*Core Principle*], [*VIT Exam Rule & Transformation*],
  [Clarity], [Unambiguous syntax, clear pronoun referents, straightforward subject-verb order.], [Eliminate dangling modifiers; replace obscure jargon with precise technical terms.],
  [Conciseness], [Express maximum informational density in the minimum number of words.], [Prune wordy phrases: replace 'in the event of' with 'if', 'at this point in time' with 'now'.],
  [Completeness], [Includes all essential technical parameters (who, what, where, when, why, how).], [Ensure units, testing boundaries, and safety tolerances are never omitted.],
  [Concreteness], [Definite, specific, visual data rather than vague generalizations.], [Replace 'the server crashed frequently' with 'the server crashed 4 times in 24 hours'.],
  [Correctness], [Accurate technical data, grammar, punctuation, and appropriate professional tone.], [Verify standard SI units, correct concord, and zero typographical misprints.]
)

= Nature of Technical Writing & Taxonomy

== Technical Writing vs. Creative / General Writing
- *Purpose:* Creative writing aims to entertain, evoke emotion, or express subjective artistic experience; Technical writing is transactional, utilitarian, and designed to inform, instruct, or persuade decision-makers to take action.
- *Audience:* General public vs. targeted professional stakeholders (engineers, managers, clients).
- *Tone & Style:* Subjective, poetic, figurative vs. objective, formal, impersonal, and fact-driven.
- *Format:* Narrative paragraphs vs. structured documents utilizing headings, bulleted lists, tables, charts, callouts, and schematics.

== Scientific Writing vs. Technical Reporting
- *Scientific Writing (Research Articles):* Focused on primary inquiry, testing scientific hypotheses, expanding fundamental human knowledge, and peer-reviewed journal publication (IMRAD structure: Introduction, Methods, Results, and Discussion).
- *Technical Reporting (Industry Reports):* Practical problem-solving documents (Feasibility studies, Inspection reports, Incident post-mortems, System architecture specifications) aimed at organizational stakeholders for immediate business execution.
