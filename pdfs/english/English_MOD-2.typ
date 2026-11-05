
#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.2cm, right: 2.2cm),
  header: context {
    if here().page() > 1 {
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: luma(90))[VIT BAENG101 --- Module 2: Grammar]],
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
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT BAENG101 --- Module 2: Grammar] \
  #v(2mm)
  #text(size: 15pt, weight: "black")[MODULE 2: GRAMMAR] \
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[(CO: 3)] \
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Complete Study Textbook, Professional Writing Guide & VIT FAT Question Bank] \
  #text(size: 9pt, fill: luma(100))[Aligned with Official VIT BAENG101 Course Page Syllabus, Question Bank, and Past FAT Papers]
]

#v(3mm)

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
