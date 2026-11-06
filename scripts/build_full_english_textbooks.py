import os
import subprocess
import shutil

TYPST_BIN = "/opt/homebrew/bin/typst"
BASE_DIR = "/Users/yashaswivunnam/Desktop/Calculus/FATkilla"
PUBLIC_DIR = os.path.join(BASE_DIR, "public", "pdfs", "english")
DIST_DIR = os.path.join(BASE_DIR, "dist", "pdfs", "english")

os.makedirs(PUBLIC_DIR, exist_ok=True)
os.makedirs(DIST_DIR, exist_ok=True)

COMMON_HEADER = '''
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
  #text(fill: rgb("#0f172a"), weight: "black", size: 13pt)[#it]
  #v(2pt)
  #line(length: 100%, stroke: 1pt + rgb("#dc2626"))
]
#show heading.where(level: 2): it => block(spacing: 10pt)[
  #text(fill: rgb("#1e293b"), weight: "bold", size: 11pt)[#it]
]
'''

def compile_typ(name, content):
    typ_path = os.path.join(PUBLIC_DIR, f"{name}.typ")
    pdf_path = os.path.join(PUBLIC_DIR, f"{name}.pdf")
    with open(typ_path, "w", encoding="utf-8") as f:
        f.write(content)
    res = subprocess.run([TYPST_BIN, "compile", typ_path, pdf_path], capture_output=True, text=True)
    if res.returncode != 0:
        print(f"Error compiling {name}: {res.stderr}")
    else:
        # copy to dist
        shutil.copy(pdf_path, os.path.join(DIST_DIR, f"{name}.pdf"))
        print(f"Successfully compiled {name}.pdf ({os.path.getsize(pdf_path)} bytes)")

print("Setup completed.")
