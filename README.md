# OnePrep — VIT Vellore Exam Preparation & Revision Platform

> **A peaceful, distraction-free paired study operating system built strictly according to official VIT Vellore VTOP Course Syllabi.**

---

## ⚡ Overview

**OnePrep** is an engineering revision workspace tailored for VIT Vellore students preparing for **CAT-1**, **CAT-2**, and **FAT (Final Assessment Test)** examinations. 

Designed around the **OnePlus aesthetic** (matte obsidian dark mode, `#EB0029` crimson red accents, serene typography, and high information density), OnePrep eliminates study friction by pairing day-by-day adaptive revision schedules directly with **unabridged official PDF textbooks** for every module.

---

## 📚 Enrolled Course Syllabi & Textbooks

Every module includes a fully formatted, complete study textbook (compiled with Typst) featuring the official **VIT Exam Blueprint**, **Master Formula Sheet**, **Complete Theory & Derivations**, and **Fully Worked VIT Question Bank & Past FAT Papers**:

| Course Title | VTOP Code | Credits | Syllabus & Textbook Modules |
| :--- | :--- | :--- | :--- |
| **Multivariable Calculus & Differential Equations** | `BAMAT101` | 4.0 | • **Mod 1:** Functions of Several Variables (CO: 1)<br>• **Mod 2:** Multiple Integrals (CO: 2)<br>• **Mod 3:** Vector Differentiation & Integration (CO: 3)<br>• **Mod 4:** Ordinary Differential Equations (CO: 4)<br>• **Mod 5:** Partial Differential Equations (CO: 5) |
| **Applied Chemistry** | `BACHY101` | 4.0 | • **Mod 1:** Chemical Thermodynamics and Kinetics (CO: 1)<br>• **Mod 2:** Energy Devices (Li-ion, SOFC, DSSC) (CO: 2)<br>• **Mod 3:** Functional Materials (Semiconductors, Magnets, Nano) (CO: 2)<br>• **Mod 4:** Spectroscopic & Diffraction Techniques (UV-Vis, XRD) (CO: 3)<br>• **Mod 5:** Computational Chemistry (MOT, PES, AI screening) (CO: 4)<br>• **Mod 6:** Contemporary Topics (CO: 2) |
| **Basic Engineering** | `BACEE101` | 4.0 | • **Mod 1:** Principles of Electrical Engineering (Circuits & Machines) (CO: 1)<br>• **Mod 2:** Foundations of Electronics & Communications (Op-Amps, Radar) (CO: 2)<br>• **Mod 3:** Engineering Graphics and CAD (1st/3rd Angle, Orthographic, Isometric) (CO: 3)<br>• **Mod 4:** Manufacturing Processes, Energy & Automation (Casting, AM, Robotics) (CO: 4)<br>• **Mod 5:** Bio-Inspired Design in Engineering (Lotus, Shark skin, Gecko) (CO: 5) |
| **Technical English Communication** | `BAENG101` | 4.0 | • **Mod 1:** Introduction to Technical Communication (5Cs, Taxonomy) (CO: 2)<br>• **Mod 2:** Grammar (Concord, Tense shifts, Conditionals, Passive) (CO: 3)<br>• **Mod 3:** Reading (Technical Definitions, IMRAD dissection) (CO: 4)<br>• **Mod 4:** Writing (Review papers, IEEE & APA Referencing) (CO: 1)<br>• **Mod 5:** Interpersonal Communication (Belbin 9 Roles, TKI Conflict, SOP) (CO: 6)<br>• **Mod 6:** Contemporary Topics (CO: 5) |
| **Environmental Sciences** | `BCHY102T` | 2.0 | **100% Online Computer-Based Test (CBT) Examination**<br>• Dedicated CBT MCQ Practice Simulator with instant answer checking and detailed rationales<br>• Complete 5-module ecosystem textbooks |

---

## 🎯 Key Features

1. **4-Tier Module Categorization:**
   - 🔴 **Not Confident**: High-friction topics automatically prioritized first in daily schedules with maximum worked derivations.
   - 🟡 **Need to Revise**: Topics that need quick formula audits and tricky problem recalculations.
   - ⚪ **Yet to Start**: Unexplored topics waiting for first contact.
   - 🟢 **Strong**: Solid mastery ready for timed mock exams.

2. **1-Click Textbook Launch:**
   - On the **Today's Schedule** view, clicking **"Launch PDF Book"** opens the full textbook immediately in an embedded viewer with zero hunting for files.

3. **Master Formula Vault:**
   - Searchable, copyable LaTeX mathematical and engineering equations rendered crisply with KaTeX across all subjects.

4. **Exam Scope Filtering:**
   - Toggle seamlessly between **FAT (Final Exam)** (all modules), **CAT-1** (Modules 1 & 2), and **CAT-2** (Modules 3 & 4).

5. **Local-First & Private:**
   - All study progress, ratings, and completed tasks persist in browser `localStorage`.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + Vite 8
- **Styling:** Tailwind CSS (OnePlus Dark / Zen theme)
- **Math Rendering:** KaTeX
- **Icons:** Lucide React
- **Document Engine:** Typst 0.15 (for compiling authentic engineering textbooks)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation
```bash
# Clone the repository
git clone https://github.com/yeashaswi/OnePrep.git
cd OnePrep

# Install dependencies
npm install

# Start local dev server
npm run dev
```

Visit `http://localhost:5173` to start studying!

### Production Build
```bash
npm run build
npm run preview
```

---

## 📄 License
MIT License. Built for VIT Vellore students.
