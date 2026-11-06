
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
  #text(size: 10pt, weight: "bold", tracking: 0.5pt, fill: rgb("#64748b"))[VIT BAENG101 --- Module 2: Grammar] \
  #v(1.5mm)
  #text(size: 15pt, weight: "black", fill: rgb("#0f172a"))[MODULE 2: GRAMMAR (CONCORD, TENSES, CONDITIONALS & VOICES)] \
  #text(size: 11pt, weight: "bold", fill: rgb("#dc2626"))[(CO: 3 | Weightage: 20 Marks in FAT --- Questions 3 & 4)] \
  #v(1mm)
  #text(size: 10pt, weight: "bold")[Master Rules, Common Exam Traps, 50+ Practice Sentences & Solved FAT Papers] \
  #text(size: 8.5pt, fill: rgb("#64748b"))[Aligned with Official VIT BAENG101 Question Bank, Sentence Blueprint, and FAT Papers]
]

#v(2mm)

#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 8pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Module (Official Syllabus & FAT Blueprint):] \
  (1) Concord (Subject-Verb Agreement in Isolated Sentences, Intervening Modifiers, Correlatives, Collective Nouns), (2) Tense Consistency & Shifting in Scientific Reporting, (3) Conditionals (Zero, First, Second, Third, and Mixed) in Fill-in-the-Blanks format, and (4) Active to Impersonal Passive Voice transformations for laboratory and engineering procedural descriptions.
]

= 1. VIT FAT Exam Blueprint: Questions 3 & 4 Breakdown

In the VIT Final Assessment Test, Grammar accounts for a massive *20 Marks* split across Questions 3 and 4:

#table(
  columns: (1fr, 1.3fr, 2.4fr, 1fr),
  inset: 6pt,
  stroke: 0.4pt + rgb("#cbd5e1"),
  align: (center, left, left, center),
  [*Question*], [*Exam Sub-Parts*], [*Exact Testing Format & Requirements*], [*Marks*],
  [*Question 3*], [Concord (5M) + Tenses (5M)], [• Part A (5M): 5 independent sentences with subject-verb agreement errors to identify and correct (NOT long paragraphs!). \ • Part B (5M): 5 sentences with verbs in brackets to fill with the correct tense.], [10 Marks],
  [*Question 4*], [Conditionals (5M) + Voices (5M)], [• Part A (5M): 5 conditional fill-in-the-blanks testing Types 0, 1, 2, and 3. \ • Part B (5M): 5 active voice experimental/lab instructions to transform into objective third-person impersonal passive.], [10 Marks]
)

= 2. The 10 Ironclad Rules of Concord (Subject-Verb Agreement)

Concord requires that a finite verb must agree in number and person with its grammatical subject. In VIT exams, examiners deliberately place misleading nouns right before the verb:

== Rule 1: The Intervening Prepositional & Parenthetical Phrase Trap
Words intervening between the subject and the verb do NOT change the number of the subject. Ignore parenthetical modifiers such as *as well as, along with, together with, in addition to, accompanied by, including, except*.
- *Example 1:* The microprocessor, along with three ambient thermal sensors, *is* (NOT *are*) mounted on the heat sink.
- *Example 2:* The quality of the manufactured carbon fiber prepregs *has* (NOT *have*) significantly improved.

== Rule 2: Correlative Conjunctions (Proximity Rule)
When subjects are connected by *either...or*, *neither...nor*, or *not only...but also*, the verb agrees strictly with the *closer subject* (the subject adjacent to the verb):
- *Example 1:* Neither the lead structural engineer nor the junior draftsmen *were* (agrees with *draftsmen*) satisfied with the CAD model.
- *Example 2:* Neither the junior draftsmen nor the lead structural engineer *was* (agrees with *engineer*) satisfied with the CAD model.
- *Example 3:* Either high junction temperature or excessive voltage fluctuations *cause* the transistor breakdown.

== Rule 3: Collective Nouns (Unit vs. Individual Members)
Collective nouns (*team, committee, board, jury, crew, council, class*) take a *singular verb* when acting collectively as a single cohesive unit, and a *plural verb* when individual members act separately:
- *Singular:* The ethics committee *has approved* the biomedical clinical trial protocol.
- *Plural:* The engineering team *were divided* in their individual opinions regarding the structural load calculation.

== Rule 4: Plural in Form, Singular in Meaning
Academic disciplines and proper terms ending in *-s* take a *singular verb*: *mathematics, physics, thermodynamics, electronics, optics, fluid mechanics, news, robotics*:
- *Example:* Thermodynamics *is* (NOT *are*) a fundamental subject in mechanical engineering.
- *Example:* The news regarding the chip foundry subsidy *was* verified by the ministry.

== Rule 5: Quantities, Time, Distance, and Money as a Single Entity
Expressions representing a unified quantity of measurement, time, or currency take a *singular verb*:
- *Example 1:* Ten kilometers *is* (NOT *are*) a substantial transmission distance for low-voltage AC distribution.
- *Example 2:* Five million dollars *was* allocated for the cryogenic rocket test facility.
- *Example 3:* Three hours *is* the standard duration for the VIT Final Assessment Test.

== Rule 6: Indefinite Pronouns
- *Always Singular:* *Each, everyone, everybody, someone, somebody, anyone, anybody, nobody, no one, either, neither, one*:
  - *Example:* Each of the lithium battery cells *undergoes* (NOT *undergo*) rigorous thermal cycle testing.
  - *Example:* Everyone on the software development team *has submitted* their code pull request.
- *Always Plural:* *Both, few, many, several*:
  - *Example:* Several of the prototypes *have shown* structural fatigue.

== Rule 7: "A Number of" vs. "The Number of"
- *A number of* + Plural Noun ==> *Plural Verb* (means "many").
- *The number of* + Plural Noun ==> *Singular Verb* (refers to the numerical statistic itself).
- *Example 1:* *A number of* microcontrollers *have failed* the electrostatic discharge test.
- *Example 2:* *The number of* failed microcontrollers *was* surprisingly small.

== Rule 8: Compound Subjects Joined by "And"
Two or more nouns joined by *and* take a *plural verb*, UNLESS they express a single combined concept:
- *Plural:* The microcontroller and the LCD display *draw* 150 mA of current.
- *Singular (Combined Concept):* Research and development *is* vital for industrial competitiveness.

== Rule 9: Sentences Beginning with "There" or "Here"
The words *there* and *here* are never subjects; the true subject follows the verb:
- *Example 1:* There *is* a high-voltage capacitor on the motherboard.
- *Example 2:* There *are* three redundant cooling pumps installed in the coolant loop.

== Rule 10: Fractions and Percentages
The verb agrees with the object of the preposition *of*:
- *Example 1:* Fifty percent of the silicon wafer *was* contaminated. (Wafer is singular)
- *Example 2:* Fifty percent of the solar cells *were* defective. (Cells is plural)

= 3. Tenses in Technical & Scientific Writing

In scientific reporting, tense selection is governed by the state of knowledge:

#table(
  columns: (1.2fr, 2fr, 2fr),
  inset: 6pt,
  stroke: 0.4pt + rgb("#cbd5e1"),
  align: (left, left, left),
  [*Tense*], [*Technical Context & Application*], [*Exam Example*],
  [*Simple Present*], [Timeless physical laws, mathematical formulas, general truths, and statements referring to visual figures/tables.], [Newton's second law *states* that force equals rate of change of momentum. Figure 4 *illustrates* the stress-strain curve.],
  [*Simple Past*], [Completed experimental actions, laboratory methods, observations, and procedures conducted in a specific prior study.], [The copper specimen *was annealed* at 650 °C for two hours. We *measured* the resistivity with a four-point probe.],
  [*Present Perfect*], [Prior scholarship with ongoing current relevance; past discoveries that connect to contemporary research.], [Several investigators *have studied* graphene supercapacitors over the past decade.],
  [*Past Perfect*], [An action or state completed *prior to another specific event in the past*.], [By the time the backup generator initialized, the primary server *had already lost* power.]
)

= 4. Conditionals: The 4 Structural Types & Fill-in-the-Blank Formulas

Conditionals express dependencies between a condition (if-clause) and a result (main clause):

#table(
  columns: (1fr, 1.8fr, 1.8fr, 2fr),
  inset: 5pt,
  stroke: 0.4pt + rgb("#cbd5e1"),
  [*Type*], [*If-Clause (Condition)*], [*Main Clause (Result)*], [*Technical Application & Example*],
  [*Type 0* (Universal / Scientific)], [If + Simple Present], [Simple Present], [Physical laws: If ambient temperature *exceeds* 100 °C, water *boils*.],
  [*Type 1* (Probable Future)], [If + Simple Present], [will / can / may + Base Verb], [Troubleshooting: If the pressure *drops* below 2 bar, the alarm *will sound*.],
  [*Type 2* (Hypothetical / Unreal)], [If + Simple Past], [would / could + Base Verb], [Hypothetical design: If the frame *were* made of titanium, it *would reduce* total mass by 30%.],
  [*Type 3* (Past Counterfactual)], [If + Past Perfect], [would have + Past Participle], [Failure diagnosis: If the technician *had calibrated* the sensor, the outage *would have been avoided*.]
)

#block(fill: rgb("#fef2f2"), stroke: 0.5pt + rgb("#ef4444"), inset: 8pt, radius: 4pt)[
  #text(weight: "bold", fill: rgb("#991b1b"))[[EXAM TIP] The "Were" Subjunctive in Type 2 Conditionals:] \
  In formal academic English, always use *were* (not *was*) in Type 2 conditional if-clauses, regardless of whether the subject is singular:
  - *Correct:* "If the supply voltage *were* unstable, the ADC would output anomalous readings."
]

= 5. Active vs. Impersonal Passive Voice in Engineering Procedures

== 5.1 Why Technical Writing Uses Impersonal Passive Voice
1. *Objectivity:* Science values the reproducibility of the physical procedure over the personal identity of the human operator.
2. *Elimination of Self-Centered Pronouns:* Sentences beginning with *"I"* or *"We"* (*"We mixed the acid..."*) sound informal and self-congratulatory.
3. *Focus on the Object:* The substance, mechanism, or software being manipulated is the focal subject of the inquiry.

== 5.2 The 4 Golden Rules for Impersonal Passive Conversion
1. Identify the *Object* of the active sentence and promote it to the *Subject* position.
2. Insert the appropriate form of the auxiliary verb *to be* (matching the original tense and new subject's number) followed by the *Past Participle ($V_3$)* of the main verb.
3. *Strictly Delete the Agent:* Omit *"by us"*, *"by me"*, *"by the technician"*, *"by you"*.
4. Retain all technical parameters (temperatures, concentrations, measurements) in their original adverbial position.

#table(
  columns: (2.2fr, 2.8fr),
  inset: 6pt,
  stroke: 0.4pt + rgb("#cbd5e1"),
  [*Flawed Active Voice (Personal/Informal)*], [*Standard Impersonal Passive (Exam 10/10)*],
  [We dissolved 5 grams of sodium chloride in 100 mL of deionized water.], [Five grams of sodium chloride was dissolved in 100 mL of deionized water.],
  [You must lubricate the ball bearings every 500 operating hours.], [The ball bearings must be lubricated every 500 operating hours.],
  [The technician calibrated the oscilloscope before recording data.], [The oscilloscope was calibrated before data was recorded.],
  [We will deploy the updated encryption patch on Sunday.], [The updated encryption patch will be deployed on Sunday.],
  [Scientists have observed electron spin resonance in quantum wells.], [Electron spin resonance has been observed in quantum wells.]
)

= 6. Worked VIT FAT Exam Drills: Full Question 3 & Question 4 Solved

== Problem 2.1: Full FAT Question 3 Drill (Concord & Tenses --- 10 Marks)
*Part A: Concord (5 Marks) --- Correct the subject-verb agreement errors in the 5 sentences:*
1. The compilation of source files and database schemas *take* approximately four minutes.
2. Neither the lead architect nor the junior backend developers *was* informed of the server migration.
3. The server rack along with four uninterruptible power supplies *were* damaged by the water leak.
4. Ten gigabytes of RAM *are* sufficient to host the machine learning inference container.
5. Every one of the aeronautical rivets *have* passed nondestructive ultrasound testing.

*Part B: Tenses (5 Marks) --- Fill in the blanks with the correct form of the verb in brackets:*
1. By the time the fire suppression system activated, the electrical fire [ . . . . . . . . ] *(destroy)* two battery modules.
2. Ohm's law [ . . . . . . . . ] *(state)* that electric current is directly proportional to voltage across an ideal conductor.
3. The research consortium [ . . . . . . . . ] *(develop)* this carbon capture catalyst since early 2023.
4. When the ambient temperature [ . . . . . . . . ] *(fall)* below zero, the glycol coolant prevents freezing.
5. In 1947, Shockley, Bardeen, and Brattain [ . . . . . . . . ] *(invent)* the point-contact bipolar transistor at Bell Labs.

*Model 10/10 Solutions:*
*Part A (Concord):*
1. *Correction:* "takes" (The subject is the singular noun "compilation", not "files" or "schemas").
2. *Correction:* "were" (With "neither...nor", the verb agrees with the closer plural subject "developers").
3. *Correction:* "was" (Parenthetical phrase "along with..." does not change the singular subject "server rack").
4. *Correction:* "is" (Ten gigabytes represents a single unified quantity of memory capacity).
5. *Correction:* "has" ("Every one" is an indefinite singular pronoun requiring singular "has").

*Part B (Tenses):*
1. *Solution:* "had destroyed" (Past perfect for an event completed prior to another past event).
2. *Solution:* "states" (Simple present for an established, timeless scientific law).
3. *Solution:* "has been developing" (Present perfect continuous for action commencing in the past and continuing up to the present).
4. *Solution:* "falls" (Type 0 conditional expressing universal physical behavior).
5. *Solution:* "invented" (Simple past with a specific historical time marker "In 1947").

== Problem 2.2: Full FAT Question 4 Drill (Conditionals & Voices --- 10 Marks)
*Part A: Conditionals (5 Marks) --- Complete the sentences with the correct verb form:*
1. If the operator [ . . . . . . . . ] *(press)* the emergency scram switch, the control rods drop into the reactor core within 1.2 seconds.
2. If the battery team [ . . . . . . . . ] *(utilize)* silicon anodes, the volumetric energy density would improve by 35%.
3. If the maintenance crew [ . . . . . . . . ] *(replace)* the worn hydraulic gasket yesterday, the aircraft would not have leaked fluid.
4. Unless the firewall [ . . . . . . . . ] *(receive)* valid cryptographic signatures, it will reject all incoming packets.
5. If the dielectric layer [ . . . . . . . . ] *(be)* compromised, excessive leakage current would flow.

*Part B: Impersonal Passive Voice (5 Marks) --- Convert active statements into formal passive:*
1. We annealed the silicon wafer at 1000 °C in an oxygen-rich atmosphere for 45 minutes.
2. You must never expose the lithium-ion cell to temperatures exceeding 60 °C.
3. The quality inspector rejected thirty cast iron cylinder blocks due to surface porosity.
4. We can synthesize graphene monolayers using chemical vapor deposition on copper foil.
5. The automation software sends an email alert whenever memory utilization exceeds 90%.

*Model 10/10 Solutions:*
*Part A (Conditionals):*
1. *Solution:* "presses" (Type 0 scientific/operational rule: If + present simple ==> present simple).
2. *Solution:* "utilized" (Type 2 hypothetical conditional: If + past simple ==> would + base verb).
3. *Solution:* "had replaced" (Type 3 past counterfactual: If + past perfect ==> would have + past participle).
4. *Solution:* "receives" (Type 1 conditional with unless: Unless + present simple ==> will + base verb).
5. *Solution:* "were" (Type 2 subjunctive: always use "were" for hypothetical states).

*Part B (Impersonal Passive Voice):*
1. *Solution:* "The silicon wafer was annealed at 1000 °C in an oxygen-rich atmosphere for 45 minutes."
2. *Solution:* "The lithium-ion cell must never be exposed to temperatures exceeding 60 °C."
3. *Solution:* "Thirty cast iron cylinder blocks were rejected due to surface porosity."
4. *Solution:* "Graphene monolayers can be synthesized using chemical vapor deposition on copper foil."
5. *Solution:* "An email alert is sent whenever memory utilization exceeds 90%."
