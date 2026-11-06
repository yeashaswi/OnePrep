
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
  #text(size: 10pt, weight: "bold", tracking: 0.5pt, fill: rgb("#64748b"))[VIT BAENG101 --- Module 4: Writing] \
  #v(1.5mm)
  #text(size: 15pt, weight: "black", fill: rgb("#0f172a"))[MODULE 4: WRITING & LITERATURE REVIEW SYNTHESIS] \
  #text(size: 11pt, weight: "bold", fill: rgb("#dc2626"))[(CO: 1 | Weightage: 10 Marks in FAT --- Question 7 Internal Choice)] \
  #v(1mm)
  #text(size: 10pt, weight: "bold")[Review Paper Taxonomy, 200-Word Synthesis Guide, Referencing Styles & Worked FAT PYQs] \
  #text(size: 8.5pt, fill: rgb("#64748b"))[Aligned with Official VIT BAENG101 Syllabus, School of Social Sciences & Languages Question Bank, and FAT Papers]
]

#v(2mm)

#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 8pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Module (Official Syllabus & FAT Blueprint):] \
  (1) Research Writing: Structure of a Review Paper, (2) Types of Reviews: Narrative, Systematic, and Meta-Analysis, (3) Literature Review Synthesis Methodology (Creating a synthesis matrix, comparing 2--3 study abstracts, synthesizing a 200-word review, and identifying research gaps), (4) Referencing Styles: IEEE Format (numeric in brackets) vs. APA 7th Edition Format (Author-Date), (5) Academic Integrity and Ethical Paraphrasing. \
  #text(weight: "bold", fill: rgb("#dc2626"))[NOTE ON EXCLUSIONS: Standalone abstract writing from scratch is excluded from the FAT paper.]
]

= 1. VIT FAT Exam Blueprint: Question 7 Breakdown

Module 4 directly governs *Question 7* (10 Marks), which is offered as an *Internal Choice with Question 6*:

#table(
  columns: (1fr, 1.3fr, 2.4fr, 1fr),
  inset: 6pt,
  stroke: 0.4pt + rgb("#cbd5e1"),
  align: (center, left, left, center),
  [*Question*], [*Exam Focus*], [*Exact Testing Requirements & Rubric*], [*Marks*],
  [*Question 7* \ _(Internal Choice with Q6)_], [Literature Review Synthesis from Abstracts], [Two or three short abstracts (~100 words each) on a common engineering topic are provided. You must synthesize a coherent *200-word Literature Review* comparing methodologies and findings, identifying the remaining *Research Gap*, and using proper in-text citations.], [10 Marks]
)

#block(fill: rgb("#fef2f2"), stroke: 0.5pt + rgb("#ef4444"), inset: 8pt, radius: 4pt)[
  #text(weight: "bold", fill: rgb("#991b1b"))[[CRITICAL EXAM ADVICE] The Serial Summary Mistake (Caps score at 4/10!):] \
  Many students mistakenly write one paragraph summarizing Paper A, followed by a separate paragraph summarizing Paper B. Examiners penalize this! A true *Literature Review Synthesis* weaves both studies together: \
  - *"While Author A observed X using method M1, Author B demonstrated Y using method M2. Synthesizing both approaches indicates Z, although neither study addresses W (the research gap)."*
]

= 2. Review Paper Taxonomy: Narrative vs. Systematic vs. Meta-Analysis

#table(
  columns: (1.2fr, 2fr, 2fr),
  inset: 6pt,
  stroke: 0.4pt + rgb("#cbd5e1"),
  align: (left, left, left),
  [*Review Type*], [*Defining Methodology & Protocol*], [*Key Features & Technical Application*],
  [*Narrative Review* (Traditional)], [Authoritative qualitative overview of literature without strict formalized search protocols.], [Broad conceptual context, historical evolution, theoretical background. Susceptible to author selection bias.],
  [*Systematic Review* (Evidence-Based)], [Follows rigid, reproducible, published search protocols (e.g. PRISMA: Preferred Reporting Items for Systematic Reviews).], [Exhaustive keyword strings, explicit inclusion/exclusion criteria, quality appraisal matrices. Gold standard in engineering.],
  [*Meta-Analysis* (Quantitative)], [Statistical aggregation combining quantitative numerical datasets across multiple independent trials.], [Computes pooled effect sizes, forest plots, statistical heterogeneity ($I^2$ index), and confidence intervals.]
)

= 3. The 4-Step Literature Review Synthesis Method (200 Words)

When given 2 or 3 short abstracts in Question 7, execute this step-by-step formula:

== Step 1: Construct an Internal Synthesis Matrix (Drafting Scratchpad)
Extract the core variables from each abstract into a mental or rough 3-row grid:
- *Parameter:* Author & Year, Experimental Method, Key Quantitative Finding, Operational Limitation.

== Step 2: Write Paragraph 1 --- The Thematic Foundation & Comparative Analysis (~120 words)
- Open with a broad domain theme statement establishing why the technical subject matters.
- Compare the two approaches directly using strong transition signposts (*conversely, in contrast, whereas, while, corroborating this*).
- Contrast the methodologies (e.g., active cooling vs. passive phase-change materials; numerical CFD simulation vs. experimental bench testing).
- Contrast the quantitative findings (e.g., peak temperature reduction, energy density, parasitic power draw).

== Step 3: Write Paragraph 2 --- Operational Limitations & Research Gap (~80 words)
- Highlight what neither author was able to solve.
- State the explicit *Research Gap* and propose the future investigation needed to resolve the trade-off.

== Step 4: Connecting Phrases Bank (Use These for Higher Evaluation Bands!)
- *To compare:* #"\""In corroboration with Sharma (2024), Patel (2025) noted that...#"\""
- *To contrast:* #"\""Whereas Author A achieved high thermal reduction at the expense of weight, Author B minimized parasitic draw through passive means...#"\""
- *To synthesize:* #"\""Synthesizing both empirical datasets underscores a fundamental engineering trade-off between...#"\""
- *To state the gap:* #"\""A critical void persists in the existing literature regarding long-term degradation under dynamic cyclic loading...#"\""

= 4. Referencing Styles: IEEE Format vs. APA 7th Edition

A dedicated 10-mark question or sub-part frequently asks you to format reference entries for various media types:

== 4.1 IEEE Referencing Style (Numbered Numeric Brackets)
- *In-Text Citation:* Numbered in sequential order of appearance: `[1]`, `[2]`, `[3]-[5]`.
- *Author Name Format:* First name initials followed by surname (e.g., `R. K. Sharma`).
- *Article Title:* Placed inside double quotation marks with lowercase capitalization (sentence case).
- *Journal / Book Title:* Italicized with title-case capitalization.
- *Volume & Issue:* `vol. 12, no. 4, pp. 110-125`.

== 4.2 APA 7th Edition Style (Author-Date Alphabetical)
- *In-Text Citation:* Author surname followed by publication year: `(Sharma, 2024)` or `Sharma (2024) argued that...`.
- *Reference List Order:* Alphabetical by first author's surname.
- *Article Title:* Plain text (no quotation marks, no italics), sentence case.
- *Journal Title & Volume:* Both the Journal Title and the Volume Number are *italicized*: `*IEEE Transactions on Energy*, *12*(4), 110-125.`

#table(
  columns: (1fr, 2.5fr, 2.5fr),
  inset: 5.5pt,
  stroke: 0.4pt + rgb("#cbd5e1"),
  [*Source Type*], [*IEEE Format Template*], [*APA 7th Edition Template*],
  [*Journal Paper*], [`[1] J. K. Author, "Title of paper," *Abbrev. Title of Periodical*, vol. x, no. x, pp. xxx-xxx, Month, Year, doi: 10.xxxx.`], [`Author, A. A. (Year). Title of article. *Title of Periodical*, *vol*(issue), pp-pp. https://doi.org/10.xxxx`],
  [*Authored Book*], [`[2] B. K. Author, *Title of Book*, xth ed. City of Publisher, Country: Abbrev. Publisher, Year.`], [`Author, B. K. (Year). *Title of book* (xth ed.). Publisher Name.`],
  [*Conference Paper*], [`[3] C. D. Author, "Title of conference paper," in *Proc. Name of Conf.*, City, Country, Year, pp. xxx-xxx.`], [`Author, C. D. (Year). Title of paper. In *Proceedings of the Conference Name* (pp. xxx-xxx). Publisher.`],
  [*Patent*], [`[4] E. F. Inventor, "Title of patented device," U.S. Patent 9 842 104, Month Day, Year.`], [`Inventor, E. F. (Year). *Title of patent* (U.S. Patent No. 9,842,104). U.S. Patent and Trademark Office.`]
)

= 5. Worked FAT Past Papers & Model 10-Mark Questions

== Problem 4.1: FAT Question 7 Model Answer (Literature Review Synthesis --- 10 Marks)
*Prompt:* Read the two study abstracts below on Lithium-ion Electric Vehicle (EV) battery cooling. Synthesize a coherent 200-word Literature Review with comparative analysis and research gap identification.

#rect(width: 100%, stroke: 0.4pt + rgb("#cbd5e1"), inset: 6pt, fill: rgb("#f8fafc"))[
  *Abstract 1 (Sharma et al., 2024):* This research investigates dielectric fluid immersion cooling for 21700 lithium-ion cylindrical cells under 3C fast-charging conditions. Experimental findings revealed a maximum peak cell temperature reduction of 14.8 °C compared to baseline air cooling, maintaining thermal uniformity within $\pm 1.5$ °C across the 96-cell pack. However, fluid circulation added 19% parasitic mass and required complex hermetic seals to prevent fluid leakage. \
  \
  *Abstract 2 (Patel & Vance, 2025):* This investigation evaluates paraffin wax Phase Change Material (PCM) composites embedded with copper foam for passive thermal regulation of electric vehicle batteries. Results showed that the passive composite absorbed latent heat effectively, capping peak battery temperatures at 44.1 °C during dynamic urban drive cycles without auxiliary power draw. Nonetheless, during continuous highway cruising exceeding 70 minutes, the PCM reached complete thermal saturation, leading to subsequent uncontrolled temperature elevation.
]

*Model 10/10 Answer:*
#rect(width: 100%, stroke: 0.4pt + rgb("#94a3b8"), inset: 6pt, fill: rgb("#fafafa"))[
  *Synthesized 200-Word Literature Review:* \
  Effective thermal management in lithium-ion battery packs remains vital for preventing catastrophic thermal runaway and optimizing electrochemical lifespan during high-drain automotive duty cycles. Recent investigations demonstrate a pronounced technological divergence between active immersion cooling and passive phase-change architectures. \
  \
  Sharma et al. (2024) demonstrated that dielectric fluid immersion cooling provides exceptional heat dissipation under aggressive 3C fast-charging regimes, suppressing peak temperatures by 14.8 °C and preserving pack-level thermal uniformity within $\pm 1.5$ °C. However, their active approach introduces severe engineering trade-offs, notably an unsustainable 19% parasitic mass penalty and stringent hermetic sealing prerequisites. Conversely, Patel and Vance (2025) explored a passive alternative using copper foam-stabilized paraffin PCM composites, successfully capping cell temperatures at 44.1 °C under urban driving with zero auxiliary electrical load. Despite this energy efficiency, their findings reveal a fatal operational vulnerability: during extended highway cruising exceeding 70 minutes, the PCM undergoes complete thermal saturation, losing its latent heat absorption capacity. \
  \
  *Research Gap:* A critical void exists in the development of hybrid thermal architectures that couple lightweight, low-flow liquid cooling channels with thin PCM buffers to absorb high-drain surges while continuously dissipating steady-state cruising heat without severe weight penalties.
]

== Problem 4.2: Referencing Conversion Drill (10 Marks)
*Prompt:* Format the following raw publication data into (i) IEEE Referencing Style, and (ii) APA 7th Edition Style: \
- *Author:* Robert Alan Green \
- *Article Title:* Deep learning optimization in distributed cloud computing \
- *Journal:* IEEE Transactions on Cloud Computing \
- *Volume:* 11, *Issue:* 3, *Pages:* 420--435, *Year:* 2024 \
- *DOI:* 10.1109/TCC.2024.1042301

*Model 10/10 Answer:*
*(i) IEEE Style:* \
`[1] R. A. Green, "Deep learning optimization in distributed cloud computing," *IEEE Trans. Cloud Comput.*, vol. 11, no. 3, pp. 420-435, 2024, doi: 10.1109/TCC.2024.1042301.`

*(ii) APA 7th Edition Style:* \
`Green, R. A. (2024). Deep learning optimization in distributed cloud computing. *IEEE Transactions on Cloud Computing*, *11*(3), 420-435. https://doi.org/10.1109/TCC.2024.1042301`
