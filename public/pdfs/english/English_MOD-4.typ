
#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.2cm, right: 2.2cm),
  header: context {
    if here().page() > 1 {
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: luma(90))[VIT BAENG101 --- Module 4: Writing & Review Papers]],
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
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT BAENG101 --- Module 4: Writing & Review Papers] \
  #v(2mm)
  #text(size: 15pt, weight: "black")[MODULE 4: WRITING] \
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[(CO: 1)] \
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Complete Study Textbook, Professional Writing Guide & VIT FAT Question Bank] \
  #text(size: 9pt, fill: luma(100))[Aligned with Official VIT BAENG101 Course Page Syllabus, Question Bank, and Past FAT Papers]
]

#v(3mm)

#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 9pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Textbook (Official VIT Syllabus - All 12 Topics):]
  (1) Research Writing: Structure of a Review Paper, (2) Types of Reviews: Narrative, Systematic, and Meta-analysis, (3) Literature Review methodology and synthesis matrices, (4) Academic integrity and plagiarism avoidance, (5) Referencing Styles: IEEE Format, and (6) Referencing Styles: APA 7th Edition Format.
]

#v(2mm)
= VIT FAT Exam Blueprint & Master Citation Sheet

Module 4 carries *20 marks* in BAENG101 FAT:
1. *Structure & Writing of a Review Paper (10 Marks):* Defining a review paper, explaining the step-by-step process of synthesizing literature, creating comparison matrices, and identifying research gaps.
2. *IEEE vs. APA Referencing Styles (10 Marks):* Converting raw source metadata into flawless in-text citations and end reference list entries for journal papers, books, conference proceedings, and websites.

#table(
  columns: (1.5fr, 2fr, 2.5fr),
  inset: 6pt,
  stroke: 0.4pt + luma(180),
  align: (left, left, left),
  [*Source Type*], [*IEEE Referencing Style (Numbered: [1])*], [*APA 7th Edition (Author-Date: Smith, 2024)*],
  [Journal Article], [J. K. Author, "Title of paper," *Abbrev. Title of Periodical*, vol. x, no. x, pp. xxx--xxx, Month, Year, doi: xx.xxx.], [Author, A. A., & Author, B. B. (Year). Title of article. *Title of Periodical*, *xx*(x), pp--pp. https://doi.org/xx.xxx],
  [Book], [A. B. Author, *Title of Book*, xth ed. City of Publisher, Country: Abbrev. Publisher, Year.], [Author, A. A. (Year). *Title of book* (xth ed.). Publisher.],
  [Conference Paper], [C. D. Author, "Title of paper," in *Proc. Name of Conf.*, City, Country, Year, pp. xxx--xxx.], [Author, A. A. (Year). Title of paper. In *Proceedings of the Name of Conference* (pp. xx--xx). Publisher.]
)

= Literature Review & Academic Synthesis

== Narrative vs. Systematic Literature Reviews
- *Narrative Review:* Qualitative, broad overview of a subject area summarizing current consensus, historical developments, and emerging perspectives without a rigid predefined search protocol.
- *Systematic Review:* Highly structured, comprehensive, and transparent methodology utilizing strict inclusion/exclusion criteria, documented search queries (Boolean operators across Scopus/IEEE Xplore/Web of Science), and PRISMA flowcharts to minimize bias.

== Synthesizing Sources & Avoiding Plagiarism
A literature review is *not* a disconnected series of book reports. Effective academic writing synthesizes sources thematically using synthesis matrices:
- *Paraphrasing:* Re-expressing an author's original concept entirely in your own distinctive voice and sentence structure while faithfully retaining the underlying technical meaning.
- *Citation Mandate:* Always credit the original source with appropriate in-text citations ([1] in IEEE or (Smith, 2024) in APA).
