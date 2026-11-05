import subprocess
import os

ENG_DIR = "/Users/yashaswivunnam/Desktop/Calculus/FATkilla/public/pdfs/english"
os.makedirs(ENG_DIR, exist_ok=True)

def compile_typ(name, content):
    typ_path = os.path.join(ENG_DIR, f"{name}.typ")
    pdf_path = os.path.join(ENG_DIR, f"{name}.pdf")
    with open(typ_path, "w", encoding="utf-8") as f:
        f.write(content)
    
    cmd = f'export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:$PATH"; typst compile "{typ_path}" "{pdf_path}"'
    res = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    if res.returncode != 0:
        print(f"Error compiling {name}: {res.stderr}")
        return False
    else:
        print(f"Successfully compiled {name}.pdf")
        return True

def get_header(mod_num, title, co, short_title):
    return f"""
#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.2cm, right: 2.2cm),
  header: context {{
    if here().page() > 1 {{
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: luma(90))[VIT BAENG101 --- Module {mod_num}: {short_title}]],
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
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT BAENG101 --- Module {mod_num}: {short_title}] \\
  #v(2mm)
  #text(size: 15pt, weight: "black")[MODULE {mod_num}: {title.upper()}] \\
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[({co})] \\
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Complete Study Textbook, Professional Writing Guide & VIT FAT Question Bank] \\
  #text(size: 9pt, fill: luma(100))[Aligned with Official VIT BAENG101 Course Page Syllabus, Question Bank, and Past FAT Papers]
]

#v(3mm)
"""

# ==================== MODULE 1 ====================
mod1 = get_header(1, "Introduction to Technical Communication", "CO: 2", "Technical Communication") + """
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
"""

# ==================== MODULE 2 ====================
mod2 = get_header(2, "Grammar", "CO: 3", "Grammar") + """
#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 9pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Textbook (Official VIT Syllabus - All 9 Topics):]
  (1) Concord (Subject-Verb Agreement) - Part 1, (2) Concord - Part 2, (3) Concord - Part 3, (4) Tense shifts - Part 1, (5) Tense shifts - Part 2, (6) Tense shifts - Part 3, (7) Conditionals, (8) Active and Passive Voice - Part 1, and (9) Active and Passive Voice - Part 2.
]

#v(2mm)
= VIT FAT Exam Blueprint & Master Rules

Module 2 carries *20 marks* in BAENG101 FAT:
1. *Subject-Verb Concord (5 to 10 Marks):* Identifying and correcting subject-verb agreement errors across complex sentences with intervening prepositional phrases, compound subjects, and collective nouns.
2. *Conditionals & Tense Consistency (5 to 10 Marks):* Zero, First, Second, Third, and Mixed conditionals; correcting unwarranted tense shifts in scientific abstracts.
3. *Active vs. Passive Voice Conversion (5 to 10 Marks):* Converting procedural steps into impersonal passive voice ('The mixture was heated to $100 degree upright("C")$' instead of 'We heated the mixture').

#table(
  columns: (2fr, 2fr, 2fr),
  inset: 6pt,
  stroke: 0.4pt + luma(180),
  align: (left, left, left),
  [*Grammar Rule*], [*Standard Principle*], [*Exam Trap & Correction*],
  [Concord: Intervening Phrase], [Subject determines verb, NOT the intervening noun.], ['A pack of wolves *is* (not are) roaming.' 'The quality of the sensors *is* high.'],
  [Concord: Correlative Pairs], [Verb agrees with the CLOSER subject in *either...or*, *neither...nor*.], ['Neither the engineer nor the *technicians were* present.'],
  [Conditional: Zero], [If + Present Simple $arrow.r$ Present Simple (Universal physical laws).], ['If water reaches $100 degree upright("C")$, it boils.'],
  [Conditional: First], [If + Present Simple $arrow.r$ will + Bare Infinitive (Probable future).], ['If the server load exceeds 90%, the alarm will trigger.'],
  [Conditional: Second], [If + Past Simple $arrow.r$ would + Bare Infinitive (Hypothetical/unreal).], ['If we had a quantum computer, we would decrypt it instantly.'],
  [Conditional: Third], [If + Past Perfect $arrow.r$ would have + Past Participle (Impossible past).], ['If the backup battery had engaged, data loss would have been avoided.']
)

= Subject-Verb Concord & Scientific Voice

== Concord Golden Rules
1. *Collective Nouns:* Singular when acting as a unified unit (*The committee has decided*); plural when individual members act separately (*The jury were divided in their opinions*).
2. *Expressions of Quantity:* When referring to a single total sum, distance, or time duration, use a singular verb (*Ten thousand dollars is an expensive component*; *Five kilometers is within walking range*).
3. *Each / Every / Either:* Always take singular verbs (*Each of the semiconductor wafers has been tested*).

== Impersonal Passive in Technical Reporting
Technical writing prioritizes the action and experimental result over the researcher. Active voice emphasizes the actor (*We calibrated the spectrometer*), whereas scientific impersonal passive foregrounds objective reality: *The spectrometer was calibrated using high-purity argon gas*.
"""

# ==================== MODULE 3 ====================
mod3 = get_header(3, "Reading", "CO: 4", "Reading") + """
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
"""

# ==================== MODULE 4 ====================
mod4 = get_header(4, "Writing", "CO: 1", "Writing & Review Papers") + """
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
"""

# ==================== MODULE 5 ====================
mod5 = get_header(5, "Interpersonal Communication", "CO: 6", "Interpersonal Communication") + """
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
"""

# ==================== MODULE 6 ====================
mod6 = get_header(6, "Contemporary Topics", "CO: 5", "Contemporary Topics") + """
#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 9pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Textbook (Official VIT Syllabus - All Topics):]
  (1) Contemporary Topics in Technical English Communication: AI in Technical Writing & Large Language Models, and (2) Cross-Cultural Global Workplace Communication & Digital Ethics.
]

#v(2mm)
= Contemporary Frontiers in Technical Communication

== AI & Large Language Models in Technical Documentation
The emergence of generative AI and Large Language Models (LLMs) has transformed technical communication from manual drafting to prompt engineering, content curation, and factual verification. Technical communicators must develop:
1. *Prompt Engineering for Structured Documents:* Crafting explicit constraints, personas, and output schemas to generate API documentation and safety manuals.
2. *Hallucination Auditing & Fact-Checking:* Rigorous cross-checking of AI-generated claims against physical laboratory data and certified IEEE standards.
3. *Ethical Attribution:* Transparent disclosure of AI assistance in technical publications and corporate technical briefs.

== Cross-Cultural Virtual Teams & Digital Etiquette
In global distributed engineering organizations (e.g., across Silicon Valley, Bangalore, and European offices), communicators navigate asynchronous workflows, low-context vs. high-context cultural differences, and digital communication hygiene (succinct Slack/email correspondence, psychological safety in video conferences, and inclusive language).
"""

compile_typ("English_MOD-1", mod1)
compile_typ("English_MOD-2", mod2)
compile_typ("English_MOD-3", mod3)
compile_typ("English_MOD-4", mod4)
compile_typ("English_MOD-5", mod5)
compile_typ("English_MOD-6", mod6)
print("Finished compiling all English modules!")
