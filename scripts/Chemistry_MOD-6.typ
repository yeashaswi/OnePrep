#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.3cm, right: 2.3cm),
  header: context {
    let p = counter(page).get().first()
    if p > 1 [
      #grid(
        columns: (1fr, 1fr),
        align: (left, right),
        text(size: 8pt, fill: rgb(101, 106, 118))[VIT BACHY105 — Module 6: Contemporary Topics],
        text(size: 8pt, fill: rgb(101, 106, 118))[VIT FAT Study Textbook]
      )
      #v(-4pt)
      #line(length: 100%, stroke: 0.5pt + rgb(209, 213, 219))
    ]
  },
  footer: context {
    let p = counter(page).get().first()
    align(center, text(size: 8.5pt, fill: rgb(101, 106, 118))[#p])
  }
)

#set text(font: "Times New Roman", size: 9.8pt)
#set par(justify: true, leading: 0.65em)

#align(center)[
  #text(size: 13.5pt, weight: "bold", fill: rgb(139, 0, 0))[MODULE 6: CONTEMPORARY TOPICS IN COMPUTATIONAL CHEMISTRY & MATERIALS (CO: 2)] \
  #v(2pt)
  #text(size: 10.5pt, weight: "bold")[Advanced Contemporary Textbook: Machine Learning in Material Science, Graph Neural Networks, Solid-State Batteries & Solved VIT FAT Question Bank] \
  #v(1pt)
  #text(size: 8.5pt, fill: rgb(85, 85, 85))[Aligned with Official VIT BACHY105 Applied Chemistry Course Syllabus & VIT FAT Contemporary Topics]
]

#v(8pt)

#rect(width: 100%, fill: rgb(240, 244, 248), stroke: 1pt + rgb(180, 200, 220), radius: 4pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb(15, 23, 42))[Syllabus Scope & Competency Checklist (Module 6):] \
  #text(size: 9pt)[
    - *Contemporary Topics in Computational Chemistry:* Evolution of quantum simulations; Crystal Graph Convolutional Neural Networks (CGCNN); Machine Learning force fields (DeepMD, M3GNet) replacing classical empirical potentials; generative models (Diffusion, VAEs) for de novo crystalline material design.
    - *Contemporary Topics in Energy Devices & Functional Materials:* Beyond-lithium technologies (All-Solid-State Lithium Batteries ASSBs, Sodium-Ion Batteries); solid electrolytes ($"Li"_7 "La"_3 "Zr"_2 "O"_12$ LLZO garnet, $"Li"_10 "GeP"_2 "S"_12$ LGPS thiophosphate); high-entropy alloys (HEAs); lead-free double perovskite photovoltaics ($"Cs"_2 "AgBiBr"_6$).
  ]
]

#v(10pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[1. Machine Learning & Graph Neural Networks in Materials Discovery]

=== 1.1 The Materials Genome & Crystal Graph Representations
Traditional materials discovery relied on trial-and-error synthesis taking $15 - 20$ years from laboratory discovery to commercial deployment.
By encoding crystal structures into mathematical graphs $G = (V, E)$:
- *Nodes ($V$):* Atoms encoded by feature vectors (electronegativity, ionization energy, covalent radius, oxidation state).
- *Edges ($E$):* Interatomic bonds defined by Voronoi tessellation and Euclidean distances.
Crystal Graph Convolutional Neural Networks (CGCNN) perform message passing across atomic neighbors:
$ bold("v")_i^((t+1)) = bold("v")_i^((t)) + sum_(j in N("i")) g(bold("v")_i^((t)), bold("v")_j^((t)), bold(e)_(i j)) $
enabling direct, translation- and rotation-invariant predictions of thermodynamic stability (energy above convex hull $E_"hull"$) and electronic properties in milliseconds with DFT-level precision.

=== 1.2 All-Solid-State Batteries (ASSBs) & Superionic Conductors
Solid-state batteries replace flammable organic liquid electrolytes with non-flammable solid ceramic or polymer electrolytes:
- *Superionic Solid Electrolytes:*
  1. *Oxide Garnet ($"Li"_7 "La"_3 "Zr"_2 "O"_12$ LLZO):* Excellent chemical stability against metallic lithium anodes, ionic conductivity $approx 10^(-3)" S/cm"$ at room temperature.
  2. *Thiophosphates ($"Li"_10 "GeP"_2 "S"_12$ LGPS):* Possesses interconnected 1D diffusion pathways providing extraordinary lithium ionic conductivity ($1.2 times 10^(-2)" S/cm"$, rivaling liquid electrolytes).
High-throughput ML screening models screen millions of chemical stoichiometries to identify candidates with wide electrochemical stability windows ($> 4.5" V"$) and high shear moduli to mechanically suppress lithium dendrite growth.

#v(10pt)
#line(length: 100%, stroke: 0.5pt + rgb(180, 200, 220))
#v(6pt)

#text(size: 12pt, weight: "bold", fill: rgb(139, 0, 0))[VIT FAT Solved Question Bank: Contemporary Exam Problem]

#v(6pt)
#rect(width: 100%, fill: rgb(249, 250, 251), stroke: 1pt + rgb(220, 225, 230), radius: 4pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb(15, 23, 42))[FAT Problem 1: Solid-State Battery Electrolyte Ionic Conductivity & Arrhenius Transport] \
  *Question (10 Marks):* An advanced solid electrolyte material ($"Li"_7 "La"_3 "Zr"_2 "O"_12$ LLZO) has an ionic conductivity of $sigma_1 = 1.05 times 10^(-3)" S/cm"$ at $T_1 = 298" K"$ and $sigma_2 = 4.80 times 10^(-3)" S/cm"$ at $T_2 = 348" K"$.
  ("i") Assuming Arrhenius ion-hopping kinetics ($sigma T = A e^(-E_a / (k_B T))$), calculate the activation energy $E_a$ for lithium ion transport in electron-volts ($"eV"$).
  ("ii") Compute the pre-exponential factor $A$.
  ("iii") Determine the predicted ionic conductivity at an arctic operating temperature of $-20 degree"C"$ ($253" K"$).

  #v(4pt)
  #text(weight: "bold", fill: rgb(139, 0, 0))[Complete Step-by-Step Solution:] \
  *Step 1: Calculate Activation Energy $E_a$:*
  $ ln((sigma_2 T_2) / (sigma_1 T_1)) = - E_a / k_B [ 1 / T_2 - 1 / T_1 ] = E_a / k_B [ (T_2 - T_1) / (T_1 T_2) ] $
  $ sigma_1 T_1 = (1.05 times 10^(-3)) times 298 = 0.3129" S K/cm" $
  $ sigma_2 T_2 = (4.80 times 10^(-3)) times 348 = 1.6704" S K/cm" $
  $ (sigma_2 T_2) / (sigma_1 T_1) = 1.6704 / 0.3129 = 5.3384 $
  $ ln(5.3384) = 1.6749 $
  $ (T_2 - T_1) / (T_1 T_2) = (348 - 298) / (298 times 348) = 50 / 103704 = 4.8214 times 10^(-4)" K"^(-1) $
  With $k_B = 8.6173 times 10^(-5)" eV/K"$:
  $ 1.6749 = (E_a times 4.8214 times 10^(-4)) / (8.6173 times 10^(-5)) = E_a times 5.5950 $
  $ E_a = 1.6749 / 5.5950 = 0.2994" eV" approx 0.30" eV" $

  *Step 2: Pre-Exponential Factor $A$:*
  $ ln A = ln(sigma_1 T_1) + E_a / (k_B T_1) = ln(0.3129) + 0.2994 / ((8.6173 times 10^(-5)) times 298) = -1.1619 + 0.2994 / 0.02568 = -1.1619 + 11.659 = 10.497 $
  $ A = e^(10.497) = 36207" S K/cm" $

  *Step 3: Conductivity at $-20 degree"C"$ ($T_3 = 253" K"$):*
  $ sigma_3 T_3 = A e^(-E_a / (k_B T_3)) $
  $ E_a / (k_B T_3) = 0.2994 / ((8.6173 times 10^(-5)) times 253) = 0.2994 / 0.02180 = 13.733 $
  $ sigma_3 times 253 = 36207 times e^(-13.733) = 36207 times (1.086 times 10^(-6)) = 0.03932 $
  $ sigma_3 = 0.03932 / 253 = 1.554 times 10^(-4)" S/cm" $

  *Boxed Final Answers:*
  $ E_a = 0.30" eV", quad A = 3.62 times 10^4" S K/cm", quad sigma(-20 degree"C") = 1.55 times 10^(-4)" S/cm". $
]
