
#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.2cm, right: 2.2cm),
  header: context {
    if here().page() > 1 {
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: luma(90))[VIT BENG101L --- Module 7: Research Writing]],
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
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT BENG101L --- Module 7: Research Writing] \
  #v(2mm)
  #text(size: 15pt, weight: "black")[MODULE 7: RESEARCH WRITING] \
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[(CO: 7)] \
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Complete Study Textbook, Step-by-Step Derivations & VIT FAT Question Bank] \
  #text(size: 9pt, fill: luma(100))[Aligned with VIT BENG101L Official Syllabus, VIT Department Question Bank, and VIT FAT Past Papers]
]

#v(3mm)
#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 9pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Textbook (All Syllabus Topics):]
  (1) Interpreting and analyzing peer-reviewed research articles, (2) Approaches to Literature Review and Review Paper Writing (Narrative, Systematic, Meta-analysis), (3) Canonical structure of a technical research paper (IMRaD: Introduction, Methods, Results, and Discussion), (4) Citation and referencing standards: IEEE and APA style conventions, and (5) Academic integrity, ethics, plagiarism prevention, and peer review mechanics.
]

#v(2mm)
#outline(title: "Contents", depth: 2, indent: auto)
#v(2mm)

= VIT FAT Exam Blueprint & Master Formula Sheet for Module 7

In VIT Final Assessment Tests, Module 7 carries 15 to 20 marks:
1. *Question Type A (10 Marks):* IMRaD Research Paper Structure: Explaining the detailed purpose, content, and writing conventions of Introduction, Methodology, Results, and Discussion sections in engineering journals.
2. *Question Type B (10 Marks):* Referencing & Academic Ethics: Formatting 5 diverse sources (journal article, conference paper, patent, book, online dataset) according to IEEE citation style and outlining ethical protocols to prevent plagiarism.

#v(2mm)
#table(
  columns: (2.2fr, 3.2fr, 2.6fr),
  stroke: 0.5pt + luma(180),
  inset: 6.5pt,
  [*Research Element*], [*IMRaD Section*], [*Key Scientific Requirement*],
  [Introduction], [Broad context -> Literature gap -> Research question / hypothesis], [The inverted pyramid: moves from general background to specific objective],
  [Methodology], [Hardware setup, datasets, algorithms, simulation parameters, repeatability], [Must provide sufficient detail for an independent researcher to replicate],
  [Results], [Empirical findings, figures, tables, performance graphs], [Pure objective data presentation without speculative interpretation],
  [Discussion], [Data interpretation -> Comparison with literature -> Limitations -> Future work], [Explains the physical or algorithmic meaning behind observed findings],
  [IEEE Referencing], [Numeric bracketed citations: *[1]*, ordered sequentially as they appear in text], [Standard across electrical, electronics, and computer science fields],

)

= Topic 1: The IMRaD Structural Framework

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


= Quick Self-Test Checklist Before Your Exam

1. Diagram the four components of the IMRaD research paper architecture.
2. Format a journal paper, conference proceeding, and textbook using IEEE reference style.
3. Differentiate between Results (objective data) and Discussion (interpretation).
4. Explain the difference between mosaic plagiarism and proper academic paraphrasing.
