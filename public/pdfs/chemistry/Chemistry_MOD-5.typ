
#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.2cm, right: 2.2cm),
  header: context {
    if here().page() > 1 {
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: luma(90))[VIT BACHY101 --- Module 5: Computational Chemistry]],
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
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT BACHY101 --- Module 5: Computational Chemistry] \
  #v(2mm)
  #text(size: 15pt, weight: "black")[MODULE 5: COMPUTATIONAL CHEMISTRY: BASIC TO APPLICATIONS] \
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[(CO: 4)] \
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Complete Study Textbook, Step-by-Step Derivations & VIT FAT Question Bank] \
  #text(size: 9pt, fill: luma(100))[Aligned with Official VIT BACHY101 Course Page Syllabus, Question Bank, and Past FAT Papers]
]

#v(3mm)

#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 9pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Textbook (Official VIT Syllabus - All 10 Topics):]
  (1) Introduction to Quantum mechanical calculations, (2) Foundations of computational chemistry, (3) Molecular orbital theory: Atomic orbitals and molecular orbitals, (4) Orbital interactions and chemical bonding, (5) Potential energy curve/surface (PES), (6) Bio-molecular potentials, (7) Geometry optimization, (8) Vibrational frequency calculations, (9) Reaction mechanism elucidation, and (10) Application of AI to screen semiconductors.
]

#v(2mm)
= VIT FAT Exam Blueprint & Master Formula Sheet

Module 5 carries *15 to 20 marks* in BACHY101 FAT:
1. *Question Type A (10 Marks):* Molecular Orbital Theory and LCAO principle: Energy level diagrams for homonuclear ($N_2, O_2$) and heteronuclear ($C O, H F$) diatomics, bond order, and magnetic property interpretation.
2. *Question Type B (10 Marks):* Potential Energy Surface (PES): Local vs global minima, transition states (saddle point), geometry optimization gradient methods, and vibrational frequency analysis (imaginary frequency for transition state).
3. *Question Type C (10 Marks):* Computational screening: Lennard-Jones biomolecular potentials and Machine Learning / AI algorithms for predicting semiconductor bandgaps and solar cell efficiencies.

#table(
  columns: (1.5fr, 2fr, 2fr),
  inset: 6pt,
  stroke: 0.4pt + luma(180),
  align: (left, left, left),
  [*Concept*], [*Governing Equation / Algorithm*], [*VIT Exam Key Insight*],
  [Time-Independent Schrodinger Eq], [$"hat"(H) psi = E psi, quad "hat"(H) = - (h^2) / (8 pi^2 m) nabla^2 + V$], [Basis of all electronic structure methods (DFT, Hartree-Fock).],
  [LCAO Approximation], [$psi_"MO" = c_1 phi_1 + c_2 phi_2$], [Bonding MO: $psi_+ = (phi_1 + phi_2)/sqrt(2)$; Antibonding: $psi_- = (phi_1 - phi_2)/sqrt(2)$.],
  [Bond Order Formula], [$"Bond Order" = (N_b - N_a) / 2$], [Paramagnetism of $O_2$ explained by 2 unpaired electrons in $pi_(2 p_x)^* = pi_(2 p_y)^*$.],
  [Lennard-Jones 12-6 Potential], [$V_"LJ"(r) = 4 epsilon [ (sigma / r)^12 - (sigma / r)^6 ]$], [$r^(-12)$ is short-range Pauli repulsion; $r^(-6)$ is London dispersion attraction.],
  [Transition State Condition], [$"Hessian" H_(i j) = (partial^2 E) / (partial x_i partial x_j)$ has exactly ONE negative eigenvalue], [One imaginary vibrational frequency corresponds to reaction coordinate.]
)

= Molecular Orbital Theory & Orbital Interactions

== Principles of LCAO (Linear Combination of Atomic Orbitals)
Molecular orbitals (MOs) are formed by linear superposition of atomic orbitals (AOs) when:
1. The overlapping AOs have comparable energies.
2. The AOs possess compatible spatial symmetry with respect to the internuclear axis ($z$-axis).
3. Significant spatial overlap occurs ($S_(1 2) = integral phi_1^* phi_2 d tau > 0$).

For two identical atomic orbitals $phi_1$ and $phi_2$:
- *Bonding Molecular Orbital ($psi_b$):*
  $ psi_b = 1 / sqrt(2(1 + S)) (phi_1 + phi_2) $
  Constructive interference increases electron probability density in the internuclear region, stabilizing the molecule ($E_b < E_"AO"$).
- *Antibonding Molecular Orbital ($psi_a$):*
  $ psi_a = 1 / sqrt(2(1 - S)) (phi_1 - phi_2) $
  Destructive interference creates a nodal plane perpendicular to the internuclear axis ($E_a > E_"AO"$).

== Molecular Orbital Diagrams ($O_2$ and $N_2$)
- *For $N_2$ ($14 e^-$) with $s-p$ mixing:*
  $ sigma_(1 s)^2 sigma_(1 s)^(* 2) sigma_(2 s)^2 sigma_(2 s)^(* 2) (pi_(2 p_x)^2 = pi_(2 p_y)^2) sigma_(2 p_z)^2 $
  $"Bond Order" = (10 - 4)/2 = 3$ (Diamagnetic).
- *For $O_2$ ($16 e^-$) with negligible $s-p$ mixing:*
  $ sigma_(1 s)^2 sigma_(1 s)^(* 2) sigma_(2 s)^2 sigma_(2 s)^(* 2) sigma_(2 p_z)^2 (pi_(2 p_x)^2 = pi_(2 p_y)^2) (pi_(2 p_x)^(* 1) = pi_(2 p_y)^(* 1)) $
  $"Bond Order" = (10 - 6)/2 = 2$. MOT brilliantly predicts *paramagnetism* due to two degenerate half-filled antibonding orbitals ($pi^*$), which valence bond theory failed to explain!

= Potential Energy Surfaces (PES) & Reaction Mechanisms

== Topography of Potential Energy Surfaces
A Potential Energy Surface expresses the molecular electronic energy $E(bold(R))$ as a function of nuclear coordinates:
- *Local / Global Minima:* Stationary points where the gradient vanishes ($nabla E = 0$) and all eigenvalues of the Hessian matrix ($partial^2 E / partial x_i partial x_j$) are strictly positive. Represents stable reactants, intermediates, or products.
- *Transition State (First-Order Saddle Point):* Stationary point where $nabla E = 0$, but the Hessian matrix possesses *exactly one negative eigenvalue* (corresponding to an imaginary vibrational frequency along the intrinsic reaction coordinate). All other eigenvalues are positive.

== Geometry Optimization & Vibrational Frequencies
- *Gradient Descent / Quasi-Newton Methods (BFGS):* Iteratively adjust nuclear coordinates along the force vector $bold(F) = -nabla E$ until maximum force $|bold(F)| < 10^(-4) "Hartree/Bohr"$.
- *Vibrational Frequency Analysis:* The second derivative matrix yields vibrational normal modes. A true minimum has all real, positive vibrational frequencies. A transition state has exactly one imaginary frequency ($nu < 0 "cm"^(-1)$), confirming the barrier summit.

= Biomolecular Potentials & AI Screening of Materials

== Molecular Mechanics Force Fields
For large biomolecules (proteins, DNA) where quantum mechanics is too computationally demanding, empirical force fields model the potential energy:
$ V_"total" = sum_"bonds" k_b (r - r_0)^2 + sum_"angles" k_theta (theta - theta_0)^2 + sum_"dihedrals" V_n [1 + cos(n phi - gamma)] + sum_("non-bonded") [ 4 epsilon ( (sigma / r_(i j))^12 - (sigma / r_(i j))^6 ) + (q_i q_j) / (4 pi epsilon_0 r_(i j)) ] $

== AI & Machine Learning for Screening Semiconductors
Modern materials discovery utilizes graph neural networks (GNNs) and density functional theory (DFT) datasets:
1. *Crystal Graph Convolutional Networks (CGCNN):* Represent crystals as graphs where nodes are atoms and edges are bond distances.
2. *High-Throughput Property Prediction:* Trains on DFT databases (Materials Project) to predict bandgaps ($E_g$), electron mobilities ($mu_e$), and formation enthalpies within milliseconds instead of days.
3. *Application:* Accelerates discovery of lead-free halide perovskites ($"Cs"_2 "AgBiBr"_6$) and wide-bandgap semiconductors for high-efficiency solar cells and EV power inverters.
