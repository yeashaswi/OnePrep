# OnePrep

A personal study planner and revision dashboard for 1st-year engineering courses at VIT Vellore.

Built to stay organized and manage revision schedules during CAT-1, CAT-2, and FAT (Final Assessment Test) exam periods.

---

## What It Does

- **Syllabus Checklist:** Breaks down each course module by module with 4 confidence tags:
  - 🔴 **Not Confident** (prioritized first in revision)
  - 🟡 **Need to Revise** (needs a formula refresh or problem practice)
  - ⚪ **Yet to Start**
  - 🟢 **Strong** (ready for mock exams)
- **Daily Revision Planner:** Generates a daily schedule based on what's marked as unconfident or needs revision.
- **Formula Sheet Vault:** Searchable LaTeX mathematical and engineering formulas rendered with KaTeX.
- **Exam Scope Filtering:** Filter syllabus views between CAT-1 (Modules 1–2), CAT-2 (Modules 3–4), and FAT (all modules).
- **Embedded PDF Note Links:** Quick-launch buttons to open compiled lecture notes / textbook PDFs.
- **MCQ Practice Mode:** Simple multiple-choice question simulator for online test prep (e.g. Environmental Science).

---

## Enrolled Courses Included

The app currently has modules and syllabus topics mapped for:

- **Multivariable Calculus & Differential Equations** (`BAMAT101`)
- **Applied Chemistry** (`BACHY101`)
- **Basic Engineering** (`BACEE101`)
- **Technical English Communication** (`BAENG101`)
- **Environmental Sciences** (`BCHY102T`)

---

## ⚠️ Flaws & Known Limitations

1. **Curriculum is hardcoded:** The course codes, module outlines, and formula sheets are hardcoded to a specific first-year VIT Vellore syllabus in `src/data/`. If you take different subjects or a different curriculum, you'll need to manually edit the data files.
2. **Local storage only:** All checklist progress, ratings, and schedules are stored in browser `localStorage`. If you clear your browser cookies or open the app on another computer/phone, your revision progress won't be synced.
3. **Textbook PDFs are not in git:** Large compiled study PDFs are not tracked in this repository to keep git history lightweight. You'll need to compile your own Typst notes or place PDFs into `public/textbooks/` for the "Launch PDF Book" links to resolve.
4. **Heuristic schedule logic:** The schedule generator uses simple rule-based sorting (grouping weak topics first), not spaced repetition algorithms like Anki or SuperMemo.

---

## Tech Stack

- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS (Dark theme)
- **Math Rendering:** KaTeX
- **Icons:** Lucide React

---

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Setup

```bash
git clone https://github.com/yeashaswi/OnePrep.git
cd OnePrep

npm install
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## License

MIT
