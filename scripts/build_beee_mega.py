import os, subprocess

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(BASE_DIR)
PDF_DIR = os.path.join(PROJECT_ROOT, "public", "pdfs", "basic_eng")
os.makedirs(PDF_DIR, exist_ok=True)

TYP_HEADER = """
#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.3cm, right: 2.3cm),
  header: context {
    let p = counter(page).get().first()
    if p > 1 [
      #grid(
        columns: (1fr, 1fr),
        align: (left, right),
        text(size: 8pt, fill: rgb("#656A76"), font: "Times New Roman")[__HEADER_LEFT__],
        text(size: 8pt, fill: rgb("#656A76"), font: "Times New Roman")[VIT FAT Study Textbook]
      )
      #v(-4pt)
      #line(length: 100%, stroke: 0.5pt + rgb("#D1D5DB"))
    ]
  },
  footer: context {
    let p = counter(page).get().first()
    align(center, text(size: 8.5pt, fill: rgb("#656A76"))[#p])
  }
)

#set text(font: "Times New Roman", size: 9.8pt)
#set par(justify: true, leading: 0.65em)

#align(center)[
  #text(size: 13.5pt, weight: "bold", fill: rgb("#8B0000"))[__MODULE_TITLE__] \
  #v(2pt)
  #text(size: 10.5pt, weight: "bold")[Complete Study Textbook, Detailed Theory & Solved VIT FAT Question Bank] \
  #v(1pt)
  #text(size: 8.5pt, fill: rgb("#555555"))[Aligned with Official VIT BACEE101 / BAEEE101 Syllabus, School of Mechanical & Electrical Engineering Question Banks]
]

#v(6pt)
#rect(width: 100%, fill: rgb("#F8F9FA"), stroke: 0.8pt + rgb("#D1D5DB"), radius: 3pt, inset: 8pt)[
  #text(size: 8.5pt)[*Scope of This Textbook:* __SCOPE_TEXT__]
]

#v(4pt)
#outline(indent: 1.2em)
#v(8pt)
"""

print("Starting BEEE mega textbook generation...")
