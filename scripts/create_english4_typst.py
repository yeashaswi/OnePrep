import subprocess
import os

typst_code = """#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.3cm, right: 2.3cm),
  header: context {
    let p = counter(page).get().first()
    if p > 1 [
      #grid(
        columns: (1fr, 1fr),
        align: (left, right),
        text(size: 8pt, fill: rgb(101, 106, 118))[VIT BAENG101 — Module 4: Technical Research Writing & Synthesis],
        text(size: 8pt, fill: rgb(101, 106, 118))[VIT FAT Study Textbook]
      )
      #v(-4pt)
      #line(length: 100%, stroke: 0.5pt + rgb(209, 213, 219))
    ]
  },
  footer: context {
    let p = counter(page).get().first()
    align(center, text(size: 8.5pt, fill: rgb(101, 106, 118))[#p])
  }
)

#set text(font: "Times New Roman", size: 9.8pt)
#set par(justify: true, leading: 0.65em)

#align(center)[
  #text(size: 13.5pt, weight: "bold", fill: rgb(139, 0, 0))[MODULE 4: TECHNICAL RESEARCH WRITING, SYNTHESIS & CITATION STYLES (CO: 1)] \\
  #v(2pt)
  #text(size: 10.5pt, weight: "bold")[Complete Comprehensive Textbook: Review Paper Architecture, Types of Reviews, Literature Synthesis Matrix, IEEE vs APA 7th & Solved VIT FAT Question Bank] \\
  #v(1pt)
  #text(size: 8.5pt, fill: rgb(85, 85, 85))[Aligned with Official VIT BAENG101 Course Syllabus, FAT Blueprint & Department Exam Rubrics]
]

#v(8pt)

#rect(width: 100%, fill: rgb(240, 244, 248), stroke: 1pt + rgb(180, 200, 220), radius: 4pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb(15, 23, 42))[Syllabus Scope & Competency Checklist (Module 4):] \\
  #text(size: 9pt)[
    - *Research Writing Fundamentals:* Distinction between primary research articles (IMRaD: Introduction, Methods, Results, and Discussion) and secondary review papers; functions of a review article in scientific progress.
    - *Structure of a Scientific Review Paper:* Title formulation (informative and concise), Structured Abstract (background, scope, synthesis, key findings), Introduction (problem statement, motivation, objective), Survey/Thematic Taxonomy, Critical Discussion & Synthesis Matrix, Identified Research Gaps & Future Challenges, Concluding Remarks, References.
    - *Taxonomy of Scientific Reviews:* Narrative / Literature Review (qualitative thematic synthesis); Systematic Review (transparent, protocol-driven PRISMA methodology); Meta-Analysis (quantitative statistical pooling of effect sizes); Scoping Review; Critical Review.
    - *Literature Review Synthesis Methodology (FAT Q7 Blueprint):* Synthesizing 2-3 disparate scientific abstracts (100 words each) into a single unified, coherent 200-word thematic synthesis paragraph; avoiding sequential author-by-author summaries; establishing contrast, consensus, and methodological divergences using academic transition discourse markers.
    - *Citation & Referencing Standards (IEEE vs APA 7th):* In-text citation syntax; reference entry syntax for journal articles, conference proceedings, books, and digital technical reports; rules for single vs multiple authors (et al.); DOI formatting and hanging indents.
  ]
]

#v(10pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[1. Architecture of a Scientific Review Paper]

=== 1.1 Primary Research Papers vs Review Articles
Scientific literature is classified into two primary categories:
1. *Primary Research Papers (Empirical Studies):* Report original experimental, computational, or theoretical findings conducted by the authors. Structured around the classic *IMRaD* framework:
   - *Introduction:* Research question, hypothesis, state of the art, and rationale.
   - *Methods:* Experimental protocol, materials, equipment, and statistical controls, detailed sufficiently to ensure reproducibility.
   - *Results:* Objective data presentations (tables, graphs) without subjective interpretation.
   - *Discussion:* Interpretation of findings, contextualization with prior literature, limitations, and theoretical implications.
2. *Review Papers (Secondary Synthesis Literature):* Do not report new experimental data. Instead, they aggregate, critically appraise, and synthesize tens to hundreds of previously published primary studies to:
   - Provide an authoritative state-of-the-art overview for newcomers and experts.
   - Identify inconsistencies, conflicting findings, and methodological limitations across studies.
   - Highlight unaddressed research gaps and outline productive future research directions.

=== 1.2 Anatomy & Sectional Breakdown of a Standard Review Paper
A publication-standard review paper conforms to the following structural hierarchy:
1. *Title:* Clear, specific, and informative; typically indicates both the topic and the review nature (e.g., *"Deep Learning in Medical Imaging: A Comprehensive Systematic Review"*).
2. *Abstract (150 - 250 words):* Summarizes the scope, search timeline, major thematic classifications, overarching consensus/controversies, and key conclusions.
3. *Introduction:* Establishes societal and technological importance; defines technical terms; highlights why a fresh review is necessary; explicitly states the paper's specific objectives and structural roadmap.
4. *Survey Methodology (Search Strategy):* Explicitly states bibliographic databases searched (IEEE Xplore, ScienceDirect, PubMed, Google Scholar), boolean search query strings, inclusion/exclusion criteria, and total papers screened.
5. *Thematic Discussion Sections (The Core Body):* Organizes literature by theme, architecture, or application rather than chronological order. Employs comprehensive summary tables and taxonomies.
6. *Critical Synthesis & Research Gaps:* Synthesizes conflicting literature; analyzes trade-offs (e.g., accuracy vs computational cost); identifies open challenges.
7. *Future Research Directions:* Recommends concrete next steps and emerging methodologies for the research community.
8. *Conclusion:* Summarizes main takeaways without introducing new material.
9. *References:* Unabridged, formatted strictly according to publisher style (IEEE or APA).

#v(8pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[2. Taxonomy & Types of Scientific Reviews]

#table(
  columns: (1.5fr, 2fr, 2fr, 2fr),
  fill: (x, y) => if y == 0 { rgb(234, 236, 239) } else { none },
  stroke: 0.5pt + rgb(209, 213, 219),
  [Review Type], [Primary Objective], [Methodology & Protocol], [Data Synthesis Format],
  [*Narrative / Literature Review*], [Provide broad overview of a topic, historical context, or conceptual development.], [Non-systematic search; subjective selection of papers based on author expertise.], [Qualitative thematic narrative; descriptive summary of concepts.],
  [*Systematic Review*], [Answer a specific, focused research question with exhaustive evidence.], [Pre-defined protocol (PRISMA); explicit inclusion/exclusion criteria; rigorous screening.], [Structured synthesis matrix; qualitative or quantitative evaluation of risk of bias.],
  [*Meta-Analysis*], [Combine quantitative statistical outcomes across studies to determine overall effect size.], [Rigorous systematic literature review followed by statistical pooling ($p$-values, odds ratios, Forest plots).], [Quantitative statistical aggregation; weighted average effect sizes; funnel plots for publication bias.],
  [*Scoping Review*], [Map the breadth of an emerging field and clarify key working concepts.], [Systematic mapping of available literature without formal quality appraisal.], [Descriptive tables, visual mapping of sub-fields and research volume.],
  [*Critical Review*], [Evaluate literature critically to challenge prevailing theories or propose new models.], [Extensive literature appraisal focusing on theoretical validity and conceptual flaws.], [Analytical evaluation; conceptual frameworks and epistemological critique.]
)

#v(8pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[3. Literature Review Synthesis Methodology (VIT FAT Pattern)]

=== 3.1 The Principle of Synthesis vs Sequential Summarizing
The most common mistake committed by students in literature review writing is *sequential summarizing* (writing paragraph after paragraph where each paragraph discusses only one author in isolation: *"Author A did this... Author B did that... Author C did something else..."*).
*True Synthesis* integrates multiple sources around *themes, methods, or findings*:
1. Group studies by shared themes, conflicting methodologies, or diverging conclusions.
2. Compare and contrast authors directly within the same sentence or paragraph:
   - *Consensus:* *"Both Smith et al. [1] and Patel [2] demonstrate that..."*
   - *Contradiction:* *"While Chen [3] observed significant efficiency gains, Gupta and Rao [4] reported negligible improvements under identical thermal regimes..."*
   - *Methodological Divergence:* *"Unlike traditional machine learning models employed by Lee [5], Rodriguez et al. [6] implemented graph neural networks to capture non-Euclidean spatial relationships..."*

=== 3.2 Academic Discourse Markers for Synthesis
- *Showing Agreement & Consensus:* *Similarly, Likewise, In accordance with, Corroborating this finding, Paralleling these results, Consistently.*
- *Showing Disagreement & Contrast:* *Conversely, In stark contrast, On the contrary, However, Whereas, While, Although, Despite these assertions, Nonetheless.*
- *Showing Progression & Addition:* *Furthermore, Moreover, In addition, Extending this concept, Building upon this framework.*
- *Showing Cause, Effect & Conclusion:* *Consequently, Hence, Therefore, As an outcome, Evidencing that, Indicating a fundamental shift.*

#v(8pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[4. Referencing & Citation Styles: IEEE vs APA 7th Edition]

#table(
  columns: (1.5fr, 2.5fr, 2.5fr),
  fill: (x, y) => if y == 0 { rgb(234, 236, 239) } else { none },
  stroke: 0.5pt + rgb(209, 213, 219),
  [Feature], [IEEE Citation Style (Engineering & CS)], [APA 7th Edition Style (Social & Applied Sciences)],
  [In-Text Citation System], [Numeric bracketed: `[1]`, `[2]-[4]` in order of appearance in text.], [Author-Date: `(Smith, 2024)` or `Smith (2024)` in alphabetical order.],
  [Multiple Authors In-Text], [One author: `[1]`. Two or more: `Smith et al. [1]` or simply `[1]`.], [One author: `(Smith, 2024)`. Two: `(Smith & Jones, 2024)`. Three+: `(Smith et al., 2024)`.],
  [Reference List Sorting], [Chronological numeric order corresponding to citation order in paper.], [Alphabetical order by first author's surname, then year.],
  [Author Names Format], [Initials followed by Surname: `J. K. Smith and R. A. Patel`], [Surname followed by Initials: `Smith, J. K., & Patel, R. A.`],
  [Article Title], [Enclosed in quotation marks: `"Deep learning for signal processing,"`], [Sentence case, no quotation marks: `Deep learning for signal processing.`],
  [Journal / Book Title], [Italicized, title case: `IEEE Transactions on Signal Processing`], [Italicized, title case: `Journal of Applied Physics`],
  [Volume & Page Numbers], [Explicit abbreviations: `vol. 45, no. 2, pp. 112-124, 2023.`], [Volume italicized, issue in parentheses: `45(2), 112-124.`],
  [DOI / URL Formatting], [Prefix with `doi: 10.1109/...` or standard URL.], [Full hyperlink: `https://doi.org/10.1109/...`]
)

=== 4.1 Concrete Formatting Examples
1. *Journal Article in IEEE:*
   `[1] A. Kumar, M. Sharma, and P. Rao, "Adaptive power management in microgrids using reinforcement learning," IEEE Transactions on Power Systems, vol. 38, no. 4, pp. 2105-2116, Jul. 2023, doi: 10.1109/TPWRS.2023.1012345.`
2. *Journal Article in APA 7th:*
   `Kumar, A., Sharma, M., & Rao, P. (2023). Adaptive power management in microgrids using reinforcement learning. IEEE Transactions on Power Systems, 38(4), 2105-2116. https://doi.org/10.1109/TPWRS.2023.1012345`
3. *Conference Proceeding in IEEE:*
   `[2] R. Jenkins and S. Gupta, "Edge computing architectures for autonomous drones," in Proc. IEEE Int. Conf. Robot. Autom. (ICRA), London, UK, 2023, pp. 450-456.`
4. *Conference Proceeding in APA 7th:*
   `Jenkins, R., & Gupta, S. (2023). Edge computing architectures for autonomous drones. In Proceedings of the IEEE International Conference on Robotics and Automation (pp. 450-456). IEEE. https://doi.org/10.1109/ICRA.2023.9876543`

#v(10pt)
#line(length: 100%, stroke: 0.5pt + rgb(180, 200, 220))
#v(6pt)

#text(size: 12pt, weight: "bold", fill: rgb(139, 0, 0))[VIT FAT Solved Question Bank: Step-by-Step Model Answers]

#v(6pt)
#rect(width: 100%, fill: rgb(249, 250, 251), stroke: 1pt + rgb(220, 225, 230), radius: 4pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb(15, 23, 42))[FAT Problem 1: Literature Review Synthesis of 3 Abstract Texts (VIT 10-Mark Blueprint)] \\
  *Question (10 Marks):* Read the three scientific abstracts given below regarding *Lithium-Ion Battery Thermal Management Systems (BTMS)*.
  Synthesize the three abstracts into a single, cohesive, well-structured literature review paragraph of approximately $200" words"$.
  Do NOT merely summarize each paper sequentially; integrate their methodologies, findings, and trade-offs using appropriate academic discourse markers.

  #v(2pt)
  #text(size: 8.5pt, fill: rgb(55, 65, 81))[
    *Abstract A (Kim et al., 2022):* Air cooling systems remain widely adopted in electric vehicle battery packs due to their mechanical simplicity, low manufacturing cost, and zero leakage risk. However, experimental testing across a 16-cell cylindrical 21700 module revealed severe thermal non-uniformities. At high discharge rates (3C), maximum cell temperature exceeded 52°C, and inter-cell temperature differentials reached 9.4°C, well above safe operating limits, accelerating local capacity degradation. \
    *Abstract B (Zhang & Liu, 2023):* Liquid cooling employing mini-channel aluminum cold plates utilizing a 50:50 water-ethylene glycol mixture demonstrated superior heat dissipation performance. Under 3C fast-discharge conditions, the liquid cold plates maintained maximum battery temperatures strictly below 38.5°C with a maximum temperature variance of only 2.1°C across the module. Nevertheless, the integration of pumps, piping, and chillers increased total pack weight by 18% and parasitic auxiliary energy consumption by 4.2%. \
    *Abstract C (Verma et al., 2024):* Phase change materials (PCMs) integrated with copper foam matrices provide a passive thermal management solution with zero parasitic energy consumption. Latent heat absorption during paraffin wax phase transition maintained cell temperatures below 43°C during rapid discharge cycles. However, paraffin's low intrinsic thermal conductivity (0.2 W/m·K) caused heat accumulation during prolonged continuous cycling, indicating that pure passive PCM systems are insufficient without hybrid secondary liquid cooling.
  ]

  #v(4pt)
  #text(weight: "bold", fill: rgb(139, 0, 0))[Model 200-Word Synthesis Solution (Full Marks):] \\
  #text(size: 9pt)[
    Thermal management in high-capacity electric vehicle battery packs presents a critical trade-off between heat dissipation efficiency, system mass, and parasitic power consumption. While conventional air cooling offers attractive simplicity and cost-effectiveness, empirical evaluations by Kim et al. (2022) establish that it fails under aggressive 3C discharge conditions, yielding hazardous thermal differentials exceeding 9°C that accelerate battery degradation. To overcome these cooling limitations, Zhang and Liu (2023) demonstrated that mini-channel liquid cold plates achieve exceptional thermal uniformity, restricting module temperatures below 38.5°C and maintaining differentials within 2.1°C. However, this active cooling efficiency incurs an 18% mass penalty and continuous auxiliary energy draw. In pursuit of passive alternatives with zero parasitic loss, Verma et al. (2024) explored phase change material (PCM) composites, effectively buffering temperature spikes via latent heat absorption during transient discharges. Nevertheless, their findings reveal that intrinsic conductive bottlenecks in paraffin wax lead to progressive heat saturation under continuous cycling. Consequently, contemporary research increasingly converges toward hybrid architectures, integrating the rapid latent absorption of PCMs with lightweight auxiliary liquid loops to ensure robust thermal regulation without excessive parasitic overhead.
  ]
]

#v(8pt)
#rect(width: 100%, fill: rgb(249, 250, 251), stroke: 1pt + rgb(220, 225, 230), radius: 4pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb(15, 23, 42))[FAT Problem 2: Citation Conversion & Error Correction (IEEE vs APA 7th)] \\
  *Question (10 Marks):* You are provided with raw bibliographic metadata for a published journal article:
  - Authors: David Robert Clark, Sunita Venkat Raman, and Michael Andrew Hayes
  - Article Title: Machine learning algorithms for anomaly detection in smart power grids
  - Journal Name: IEEE Transactions on Industrial Informatics
  - Year: 2023; Volume: 19; Issue: 3; Pages: 1420-1431
  - Digital Object Identifier (DOI): 10.1109/TII.2022.3198765
  (i) Construct the complete, properly formatted reference entry in *IEEE style*.
  (ii) Construct the complete, properly formatted reference entry in *APA 7th Edition style*.
  (iii) Write the corresponding in-text citation for both styles (assuming it is the third cited source in the paper).
  (iv) Identify three critical formatting differences between IEEE and APA citation conventions evidenced in these entries.

  #v(4pt)
  #text(weight: "bold", fill: rgb(139, 0, 0))[Complete Step-by-Step Solution:] \\
  *Step 1: IEEE Style Reference Entry:*
  `[3] D. R. Clark, S. V. Raman, and M. A. Hayes, "Machine learning algorithms for anomaly detection in smart power grids," IEEE Transactions on Industrial Informatics, vol. 19, no. 3, pp. 1420-1431, Mar. 2023, doi: 10.1109/TII.2022.3198765.`

  *Step 2: APA 7th Edition Style Reference Entry:*
  `Clark, D. R., Raman, S. V., & Hayes, M. A. (2023). Machine learning algorithms for anomaly detection in smart power grids. IEEE Transactions on Industrial Informatics, 19(3), 1420-1431. https://doi.org/10.1109/TII.2022.3198765`

  *Step 3: In-Text Citations:*
  - *IEEE:* *"Recent advances in power grid security demonstrate the efficacy of neural network anomaly detection [3]."*
  - *APA 7th:* *"Recent advances in power grid security demonstrate the efficacy of neural network anomaly detection (Clark et al., 2023)."* Or parenthetical narrative: *"Clark et al. (2023) demonstrated that..."*

  *Step 4: Three Critical Differences:*
  1. *Author Ordering & Ampersand:* IEEE lists initials first followed by surname with the word "and" (`D. R. Clark, S. V. Raman, and M. A. Hayes`), whereas APA lists surname first followed by initials and uses an ampersand (`Clark, D. R., Raman, S. V., & Hayes, M. A.`).
  2. *Article Title Treatment:* IEEE encloses the article title in quotation marks (`"Machine learning..."`), whereas APA uses sentence-case capitalization without quotation marks.
  3. *Volume, Issue & Pagination:* IEEE explicitly specifies prefixes `vol. 19, no. 3, pp. 1420-1431`, whereas APA condenses volume and issue into `19(3)` (volume italicized, issue in parentheses) with bare page numbers `1420-1431` without "pp.".
]
"""

res = subprocess.run(["/opt/homebrew/bin/typst", "compile", "-", "public/pdfs/english/English_MOD-4.pdf"], input=typst_code, text=True, capture_output=True)
if res.returncode == 0:
    print("SUCCESS: Compiled public/pdfs/english/English_MOD-4.pdf")
else:
    print("ERROR:", res.stderr)
