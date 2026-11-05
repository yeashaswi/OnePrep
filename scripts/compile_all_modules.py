import os
import subprocess

TYPST_BIN = "/opt/homebrew/bin/typst"
BASE_DIR = "/Users/yashaswivunnam/Desktop/Calculus/FATkilla"
PUBLIC_PDF_DIR = os.path.join(BASE_DIR, "public", "pdfs")

os.makedirs(os.path.join(PUBLIC_PDF_DIR, "chemistry"), exist_ok=True)
os.makedirs(os.path.join(PUBLIC_PDF_DIR, "basic_eng"), exist_ok=True)
os.makedirs(os.path.join(PUBLIC_PDF_DIR, "english"), exist_ok=True)
os.makedirs(os.path.join(PUBLIC_PDF_DIR, "environmental"), exist_ok=True)

def compile_pdf(typ_content, output_pdf_path):
    typ_path = output_pdf_path.replace(".pdf", ".typ")
    with open(typ_path, "w", encoding="utf-8") as f:
        f.write(typ_content)
    res = subprocess.run([TYPST_BIN, "compile", typ_path, output_pdf_path], capture_output=True, text=True)
    if res.returncode != 0:
        print(f"Error compiling {output_pdf_path}: {res.stderr}")
    else:
        print(f"Successfully generated: {output_pdf_path} ({os.path.getsize(output_pdf_path)} bytes)")

print("Compiler helper ready.")
