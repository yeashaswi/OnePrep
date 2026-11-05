
#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.2cm, right: 2.2cm),
  header: context {
    if here().page() > 1 {
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: luma(90))[VIT BAENG101 --- Module 3: Reading]],
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
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT BAENG101 --- Module 3: Reading] \
  #v(2mm)
  #text(size: 15pt, weight: "black")[MODULE 3: READING] \
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[(CO: 4)] \
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Complete Study Textbook, Professional Writing Guide & VIT FAT Question Bank] \
  #text(size: 9pt, fill: luma(100))[Aligned with Official VIT BAENG101 Course Page Syllabus, Question Bank, and Past FAT Papers]
]

#v(3mm)

#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 9pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Textbook (Official VIT Syllabus - All 10 Topics):]
  (1) Analysing definitions: Types of definitions, (2) Methods for Expanding Definitions, (3) Reading Comprehension: Drawing Inferences from Scientific Texts, (4) Critical reading strategies, (5) Structure of a research article (IMRAD), and (6) Analysing and dissecting a published research article.
]

#v(2mm)
= VIT FAT Exam Blueprint & Master Rules

Module 3 carries *15 to 20 marks* in BAENG101 FAT:
1. *Formal & Expanded Technical Definitions (10 Marks):* Writing formal three-part definitions ($"Term" = "Class / Genus" + "Differentia"$) and expanding them using etymology, operating principle, physical components, and exemplification.
2. *Reading Comprehension & Critical Inferences (10 Marks):* Analyzing an unfamiliar scientific passage, distinguishing explicit facts from subtle author inferences, and mapping the IMRAD research architecture.

#table(
  columns: (2fr, 2fr, 2fr),
  inset: 6pt,
  stroke: 0.4pt + luma(180),
  align: (left, left, left),
  [*Definition Formula*], [*Components*], [*Worked Example*],
  [Formal Definition], [$"Term" = "Class" + "Differentia"$], [A *microcontroller* (Term) is an *integrated circuit* (Class) that *contains a processor core, memory, and programmable I/O peripherals on a single chip to control embedded systems* (Differentia).],
  [Expanded Definition Methods], [Explication, Operating Principle, Contrast, Analogy], [Expanding 'Supercapacitor': Describe double-layer electrostatic charge storage vs electrochemical battery intercalation.]
)

= Structure of a Scientific Research Article (IMRAD)

== The IMRAD Framework
1. *Introduction (Why was the study undertaken?):* Identifies the overarching research problem, reviews current state-of-the-art literature, highlights the critical research gap, and states the core research objective or hypothesis.
2. *Methods (How was the study conducted?):* Comprehensive, reproducible description of experimental setups, materials, sample synthesis, fabrication techniques, and analytical instrumentation.
3. *Results (What was found?):* Presentation of empirical data using high-resolution graphs, tables, and statistical significance tests without subjective speculation.
4. *Discussion (What do the findings mean?):* Interprets results in relation to the initial hypothesis, compares with previous literature, addresses limitations, and outlines future engineering applications.
