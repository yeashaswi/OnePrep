
#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.2cm, right: 2.2cm),
  header: context {
    if here().page() > 1 {
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: luma(90))[VIT BAENG101 --- Module 6: Contemporary Topics]],
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
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT BAENG101 --- Module 6: Contemporary Topics] \
  #v(2mm)
  #text(size: 15pt, weight: "black")[MODULE 6: CONTEMPORARY TOPICS] \
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[(CO: 5)] \
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Complete Study Textbook, Professional Writing Guide & VIT FAT Question Bank] \
  #text(size: 9pt, fill: luma(100))[Aligned with Official VIT BAENG101 Course Page Syllabus, Question Bank, and Past FAT Papers]
]

#v(3mm)

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
