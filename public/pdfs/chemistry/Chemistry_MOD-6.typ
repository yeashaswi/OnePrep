
#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.2cm, right: 2.2cm),
  header: context {
    if here().page() > 1 {
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: luma(90))[VIT BACHY101 --- Module 6: Contemporary Topics]],
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
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT BACHY101 --- Module 6: Contemporary Topics] \
  #v(2mm)
  #text(size: 15pt, weight: "black")[MODULE 6: CONTEMPORARY TOPICS] \
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[(CO: 2)] \
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Complete Study Textbook, Step-by-Step Derivations & VIT FAT Question Bank] \
  #text(size: 9pt, fill: luma(100))[Aligned with Official VIT BACHY101 Course Page Syllabus, Question Bank, and Past FAT Papers]
]

#v(3mm)

#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 9pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Textbook (Official VIT Syllabus - All Topics):]
  (1) Contemporary Topics in Computational Chemistry, and (2) Contemporary Topics in Energy Devices or Functional Materials.
]

#v(2mm)
= Contemporary Frontiers in Chemical Science & Engineering

== Advanced Computational Chemistry: Machine-Learned Force Fields
Traditional computational chemistry faces a fundamental trade-off: Density Functional Theory (DFT) is highly accurate but scales cubically $O(N^3)$ with atom count, while empirical force fields are fast but lack electronic polarization. Machine-Learned Interatomic Potentials (MLIPs), such as MACE and NequIP, achieve DFT-level chemical accuracy at the computational speed of classical molecular dynamics, enabling atomic simulations of battery solid-electrolyte interphase (SEI) growth across millions of atoms.

== Next-Generation Solid-State Lithium Metal Batteries
Current lithium-ion batteries using flammable liquid carbonate electrolytes suffer from thermal runaway risks and dendrite short-circuits. Solid-State Batteries replace the liquid with solid ceramic or polymer electrolytes:
- *Sulfides ($"Li"_(10)"GeP"_2"S"_(12)$):* Ultra-high ionic conductivity ($> 10^(-2) "S/cm"$ at room temperature).
- *Garnet Oxides ($"Li"_7"La"_3"Zr"_2"O"_(12)$):* Chemically stable against pure lithium metal anodes.
- Eliminating graphite in favor of pure Li metal boosts gravimetric energy density beyond $500 "Wh/kg"$.

== 2D Functional Nanomaterials: MXenes
MXenes are 2D transition metal carbides, nitrides, or carbonitrides synthesized by selectively etching the "A" element from MAX phases using hydrofluoric acid ($"HF"$):
$ "Ti"_3 "AlC"_2 + 3 "HF" arrow.r.double "Ti"_3 "C"_2 "T"_x + "AlF"_3 + 3/2 H_2 $
where $T_x$ represents surface terminations ($-O, -O H, -F$). MXenes combine metallic conductivity with hydrophilic surface chemistry, making them premier candidates for ultra-fast supercapacitors, EMI shielding in aerospace electronics, and water desalination membranes.
