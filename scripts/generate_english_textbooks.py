import os
import subprocess

TYPST_BIN = "/opt/homebrew/bin/typst"
BASE_DIR = "/Users/yashaswivunnam/Desktop/Calculus/FATkilla"
PUBLIC_DIR = os.path.join(BASE_DIR, "public", "pdfs", "english")
DIST_DIR = os.path.join(BASE_DIR, "dist", "pdfs", "english")

os.makedirs(PUBLIC_DIR, exist_ok=True)
os.makedirs(DIST_DIR, exist_ok=True)

print("Script template created")
