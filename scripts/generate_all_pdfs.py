import os
import subprocess

TYPST_BIN = "/opt/homebrew/bin/typst"
BASE_DIR = "/Users/yashaswivunnam/Desktop/Calculus/FATkilla"
PUBLIC_PDF_DIR = os.path.join(BASE_DIR, "public", "pdfs")

def generate_typst_doc(course_code, course_name, mod_num, mod_title, co, scope, blueprint, formula_table, topics_and_problems, insights, checklist):
    return f"""
#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.2cm, right: 2.2cm),
  header: context {{
    if here().page() > 1 {{
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: luma(90))[VIT {course_code} --- Module {mod_num}: {mod_title}]],
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
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT {course_code} --- Module {mod_num}: {mod_title}] \\
  #v(2mm)
  #text(size: 15pt, weight: "black")[MODULE {mod_num}: {mod_title.upper()}] \\
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[({co})] \\
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Complete Study Textbook, Step-by-Step Derivations & VIT FAT Question Bank] \\
  #text(size: 9pt, fill: luma(100))[Aligned with VIT {course_code} Official Syllabus, VIT Department Question Bank, and VIT FAT Past Papers]
]

#v(3mm)
#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 9pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Textbook (All Syllabus Topics):]
  {scope}
]

#v(2mm)

= VIT FAT Exam Blueprint & Master Formula Sheet for Module {mod_num}

{blueprint}

#v(2mm)
{formula_table}

#v(4mm)
{topics_and_problems}

#v(4mm)
#rect(width: 100%, fill: rgb("#fef3c7"), stroke: 0.8pt + rgb("#f59e0b"), radius: 4pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb("#92400e"))[[VIT FAT EXAM INSIGHT & PITFALL WARNING]] \\
  {insights}
]

#v(4mm)
== Quick Self-Test Checklist Before Your Exam:
{checklist}
"""

print("Generator template prepared.")
