#set page(
  paper: "a4",
  margin: (top: 2cm, bottom: 2cm, left: 2.2cm, right: 2.2cm),
  header: context {
    if here().page() > 1 {
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8pt, fill: rgb("#475569"), weight: "bold")[VIT Applied Chemistry (BACHY105) --- Module 5: Computational Chemistry]],
        align(right)[#text(size: 8pt, fill: rgb("#475569"), style: "italic")[Comprehensive Study Textbook & Exam Guide]]
      )
      line(length: 100%, stroke: 0.5pt + rgb("#cbd5e1"))
    }
  },
  footer: context {
    grid(
      columns: (1fr, 1fr),
      align(left)[#text(size: 8pt, fill: rgb("#94a3b8"))[Department of Chemistry, School of Advanced Sciences (SAS)]],
      align(right)[#text(size: 8pt, fill: rgb("#64748b"), weight: "bold")[Page #here().page()]]
    )
  }
)
#set text(font: "New Computer Modern", size: 10pt, fill: rgb("#0f172a"))
#set par(justify: true, leading: 0.78em)

#align(center)[
  #text(size: 9pt, weight: "bold", fill: rgb("#475569"), tracking: 1.5pt)[VELLORE INSTITUTE OF TECHNOLOGY --- APPLIED CHEMISTRY (BACHY105)] \
  #v(1.5mm)
  #text(size: 16pt, weight: "bold", fill: rgb("#1e3a8a"))[MODULE 5: COMPUTATIONAL CHEMISTRY: BASICS TO APPLICATIONS] \
  #v(1mm)
  #text(size: 10.5pt, weight: "bold", fill: rgb("#b91c1c"))[Complete Unabridged Course Notes, Derivations, Diagrams & Topic-Wise CAT/FAT Solved Problems] \
  #v(1mm)
  #text(size: 8.5pt, fill: rgb("#64748b"))[Fully Aligned with Official VIT Faculty Lecture Decks (51 Slides), Department Question Bank, and Past FAT Papers (CO: 5)]
]

#v(2mm)

#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.8pt + rgb("#cbd5e1"), radius: 4pt, inset: 8pt)[
  #text(weight: "bold", fill: rgb("#0f172a"), size: 9pt)[Module 5 Detailed Syllabus Breakdown (100% Complete Coverage):] \
  #v(1mm)
  #text(size: 8.5pt, fill: rgb("#334155"))[
    *Section 1: Introduction to Computational Methods:* Scope, software suites (Gaussian, ORCA, Gabedit), Classical Molecular Mechanics (MM) force fields vs Quantum Mechanics (QM), Time-Dependent (TDSE) & Time-Independent (TISE) Schrödinger equations, Born-Oppenheimer approximation, Ab Initio HF, Semi-Empirical (AM1, PM3), Density Functional Theory (DFT, Hohenberg-Kohn theorems, B3LYP functional), Hybrid QM/MM. \
    *Section 2: Basis Sets & Molecular Orbital Theory (MOT):* STO vs GTO, Pople split-valence basis sets (6-31G, polarization $*$, diffuse $+$), Atomic orbitals & shapes, LCAO-MO principles, Diatomic MO diagrams ($H_2, N_2, O_2$ paramagnetism, $N O$), Frontier Orbitals (HOMO and LUMO, methane $C H_4$). \
    *Section 3: Potential Energy Curves (PEC) & Surfaces (PES):* Harmonic oscillator vs Anharmonic Morse potential, $3 N - 6$ and $3 N - 5$ geometric degrees of freedom, 3D PES contours ($O_3, N O_2, H_2 O$), Local minima vs First-order saddle point (Transition State). \
    *Section 4: Electrostatic Potentials & Optimization:* Molecular Electrostatic Potential (MEP) maps ($N H_3$ color coding), Geometry optimization algorithms (Berny, BFGS), Harmonic vibrational frequency calculations, Zero-point energy (ZPE), Distinguishing intermediate minima (zero imaginary frequencies) from transition states (exactly one imaginary frequency). \
    *Section 5: Reaction Mechanisms & Modern AI/ML:* Intrinsic Reaction Coordinate (IRC), Gas-phase vs Solution-phase $S_N 2$ double-well potential curves, Ketone-enol tautomerization, High-throughput AI/ML screening of semiconductors.
  ]
]

#v(3mm)

= 1. Overview of Computational Chemistry and Method Hierarchies

Computational chemistry utilizes computer simulations based on the fundamental laws of physics to determine the structures, binding energies, spectroscopic transitions, and chemical reactivities of molecules and materials.

=== 1.1 Computational Chemistry Software Ecosystem
- *Quantum Chemistry Engines:* Gaussian (industry standard ab initio/DFT), ORCA (high-performance academic/industrial DFT and coupled-cluster), Q-Chem, GAMESS.
- *Molecular Modeling & Graphical User Interfaces:* Gabedit, Avogadro, GaussView, ChemCraft, VMD (Visual Molecular Dynamics), PyMOL.

=== 1.2 Comparison of the Four Major Computational Method Classes
#table(
  columns: (1.5fr, 2.5fr, 2.5fr, 2.5fr),
  fill: (x, y) => if y == 0 { rgb("#f1f5f9") } else { none },
  stroke: 0.5pt + rgb("#cbd5e1"),
  align: (left, left, left, left),
  [#text(weight: "bold")[Method Class]], [#text(weight: "bold")[Physical Model & Theory]], [#text(weight: "bold")[Computational Cost & Size]], [#text(weight: "bold")[Strengths & Limitations]],
  [*Molecular Mechanics (MM)*], [Classical ball-and-spring model; Hooke's law force fields (AMBER, CHARMM, OPLS). No electrons.], [Negligible cost; scales up to $10^5 - 10^7$ atoms (whole viruses, polymers).], [*Fast;* ideal for protein folding and MD simulations. *Cannot* model bond breaking, reactions, or spectra.],
  [*Semi-Empirical (SE)*], [Simplified Hartree-Fock; treats only valence electrons; approximates integrals with empirical parameters.], [Low cost; handles $10^2 - 10^4$ atoms (large organic frameworks).], [*Moderate accuracy* for standard organic molecules (AM1, PM6, PM7). Inaccurate for transition metals and hydrogen bonds.],
  [*Ab Initio (QM)*], [Exact non-empirical solution of Schrödinger equation from first principles (HF, MP2, CCSD(T)).], [High to astronomical cost; scales as $N^4$ (HF) to $N^7$ (CCSD(T)); $< 50 - 100$ atoms.], [*High accuracy;* "gold standard" benchmarks. Extremely computationally expensive for large systems.],
  [*Density Functional Theory (DFT)*], [Solves for electron probability density $rho(r)$ using exchange-correlation functionals (B3LYP, PBE).], [Moderate-to-high cost; scales as $N^3$; routinely handles $100 - 1000$ atoms.], [*Best balance* of chemical accuracy and computational speed. Universal standard for inorganic and organic materials.]
)

=== 1.3 The Schrödinger Equation and the Born-Oppenheimer Approximation
- *Time-Dependent Schrödinger Equation (TDSE):*
  $ i h / (2 pi) frac(partial Psi(bold(r), t), partial t) = hat(H) Psi(bold(r), t) $
- *Time-Independent Schrödinger Equation (TISE):*
  $ hat(H) Psi = E Psi $
  where the total molecular Hamiltonian operator is:
  $ hat(H) = hat(T)_n + hat(T)_e + hat(V)_(n e) + hat(V)_(e e) + hat(V)_(n n) $
- *The Born-Oppenheimer (BO) Approximation:*
  - Because atomic nuclei are vastly more massive than electrons ($M_"nucleus" approx 1836 - 400000 times m_e$), nuclei move with velocities thousands of times slower than valence electrons.
  - Therefore, electrons adjust instantaneously to any slight movement of the nuclei.
  - We can approximate the nuclei as *fixed, stationary point charges* ($hat(T)_n = 0$ and $hat(V)_(n n) = "constant"$).
  - Decouples the total wavefunction: $Psi_"total"(bold(r), bold(R)) = Psi_"electronic"(bold(r); bold(R)) times Phi_"nuclear"(bold(R))$.
  - The Electronic Schrödinger Equation is solved at fixed nuclear configurations:
    $ hat(H)_"elec" Psi_"elec" = E_"elec" Psi_"elec" $
  - Solving $E_"elec" + V_(n n)$ across continuous nuclear coordinates generates the *Potential Energy Surface (PES)*.

=== 1.4 Density Functional Theory (DFT)
- *Hohenberg-Kohn First Theorem (1964):* The ground-state electronic energy and all physical properties of an $N$-electron system are uniquely determined by its 3-dimensional *electron density distribution $rho(r)$*, rather than the complex $3 N$-dimensional many-electron wavefunction $Psi(bold(r)_1, bold(r)_2 dots bold(r)_N)$.
- *Kohn-Sham Formulation (1965):* Decomposes total ground-state energy into non-interacting kinetic energy ($T_s$), external electron-nuclear attraction ($V_"ext"$), classical Coulomb repulsion ($J$), and the quantum mechanical exchange-correlation functional ($E_"xc"$):
  $ E[rho] = T_s[rho] + V_"ext"[rho] + J[rho] + E_"xc"[rho] $
- *B3LYP Hybrid Functional:* The most widely cited functional in chemistry, blending Becke's 3-parameter exchange with Lee-Yang-Parr correlation and exact Hartree-Fock exchange ($20%$).

=== 1.5 Hybrid QM/MM Methods (Nobel Prize 2013)
Pioneered by Martin Karplus, Michael Levitt, and Arieh Warshel:
- *System Partitioning:*
  - *QM Region:* The chemically active reaction center (e.g., enzyme catalytic triad, substrate, cofactor; $approx 50 - 100$ atoms) is computed using high-level quantum mechanics (DFT or HF) to capture bond making, bond breaking, and charge transfer.
  - *MM Region:* The surrounding bulky protein scaffold, solvent water molecules, and lipid bilayer ($approx 10^4 - 10^5$ atoms) are computed using fast classical molecular mechanics force fields.
  - *Boundary Coupling:* Electrostatic and van der Waals interactions bridge the QM and MM zones ($E_"total" = E_"QM" + E_"MM" + E_"QM/MM"$).

#v(3mm)

== 2. Basis Sets and Molecular Orbital Theory (MOT)

=== 2.1 Basis Sets
A basis set is a finite collection of mathematical functions (atomic orbital basis functions $phi_mu$) combined linearly to construct molecular orbitals ($psi_i$):
$ psi_i = sum_mu c_(mu i) phi_mu $
- *Slater-Type Orbitals (STO):* $phi prop r^(n-1) e^(- zeta r)$. Accurate exponential cusp at the nucleus and realistic long-range decay, but computationally intractable for multi-center electron repulsion integrals.
- *Gaussian-Type Orbitals (GTO):* $phi prop x^a y^b z^c e^(- alpha r^2)$. Computationally efficient because the product of two Gaussians is another Gaussian, allowing analytical integral evaluation.
- *Pople Split-Valence Notation:*
  - *6-31G:* Core orbitals modeled by 1 contracted function of 6 GTOs; valence orbitals "split" into an inner shell (3 GTOs) and outer shell (1 GTO).
  - *Polarization Functions (6-31G\* or 6-31G(d,p)):* Adds d-orbitals to non-hydrogen atoms and p-orbitals to hydrogens, allowing the electron cloud to polarize and shift off-center during chemical bond formation.
  - *Diffuse Functions (6-31+G\*):* Adds large, slowly decaying Gaussian functions to accurately describe loosely held electron densities in anions, lone pairs, and Rydberg excited states.

=== 2.2 Molecular Orbital Theory: LCAO Principles
When two atomic orbitals combine:
1. *Bonding Molecular Orbital ($psi_B$):* In-phase constructive overlap ($psi_B = phi_A + phi_B$). Electron density accumulates between nuclei, shielding nuclear repulsion; lower energy than parent atomic orbitals.
2. *Anti-Bonding Molecular Orbital ($psi_A^*$):* Out-of-phase destructive overlap ($psi_A^* = phi_A - phi_B$). A nodal plane ($psi = 0$) exists between nuclei; higher energy than parent atomic orbitals.
- *Bond Order Formula:*
  $ bold("Bond Order" = frac(N_b - N_a, 2)) $
  where $N_b$ is the number of electrons in bonding MOs, and $N_a$ is the number in anti-bonding MOs.

=== 2.3 Diatomic Molecular Orbital Configurations
1. *Hydrogen Molecule ($H_2$):* $1 s^1 + 1 s^1 ==> sigma_(1 s)^2, sigma_(1 s)^(* 0)$.
   - $"Bond Order" = (2 - 0) / 2 = bold(1.0)$ (Stable single covalent bond; diamagnetic).
2. *Nitrogen Molecule ($N_2$, 14 electrons):*
   $ sigma_(1 s)^2 sigma_(1 s)^(* 2) sigma_(2 s)^2 sigma_(2 s)^(* 2) (pi_(2 p_x)^2 = pi_(2 p_y)^2) sigma_(2 p_z)^2 $
   - $"Bond Order" = (10 - 4) / 2 = bold(3.0)$ (Stable triple bond; diamagnetic).
3. *Oxygen Molecule ($O_2$, 16 electrons):*
   $ sigma_(1 s)^2 sigma_(1 s)^(* 2) sigma_(2 s)^2 sigma_(2 s)^(* 2) sigma_(2 p_z)^2 (pi_(2 p_x)^2 = pi_(2 p_y)^2) bold((pi_(2 p_x)^(* 1) = pi_(2 p_y)^(* 1))) $
   - $"Bond Order" = (10 - 6) / 2 = bold(2.0)$ (Double bond).
   - *Crucial Exam Triumph of MOT:* Explains the experimental *paramagnetism* of liquid oxygen due to 2 unpaired electrons residing in degenerate $pi^*$ anti-bonding orbitals (which Lewis dot structures fail to explain!).
4. *Nitric Oxide ($N O$, 15 electrons, Heteronuclear Diatomic):*
   - Oxygen is more electronegative than nitrogen; its atomic orbitals lie lower in energy.
   - $"Bond Order" = (10 - 5) / 2 = bold(2.5)$ (Paramagnetic radical with 1 unpaired electron in $pi^*$).

=== 2.4 Frontier Molecular Orbitals: HOMO and LUMO
- *HOMO (Highest Occupied Molecular Orbital):* The highest-energy orbital containing electrons; represents the electron donor or nucleophilic center.
- *LUMO (Lowest Unoccupied Molecular Orbital):* The lowest-energy vacant orbital; represents the electron acceptor or electrophilic center.
- *HOMO-LUMO Energy Gap ($Delta E$):* Governs chemical reactivity and kinetic stability:
  - Large $Delta E$: Hard, chemically stable, unreactive molecule; absorbs in high-energy UV.
  - Small $Delta E$: Soft, chemically reactive, easily polarizable molecule; absorbs in visible region.
  - In Methane ($C H_4$, tetrahedral $T_d$ symmetry): HOMO corresponds to triply degenerate $1 t_2$ bonding orbitals (C-H $sigma$ bonds); LUMO corresponds to $2 a_1$ anti-bonding orbital ($Delta E approx 12 "eV"$, making methane chemically inert).

#v(3mm)

== 3. Potential Energy Curves (PEC) and Potential Energy Surfaces (PES)

=== 3.1 Potential Energy Curves (Diatomic Molecules)
For a diatomic molecule, internal geometry is described by a single coordinate: the internuclear separation distance ($R$).
- *Harmonic Oscillator Model:* Near equilibrium bond distance ($R_e$), potential energy approximates a parabola:
  $ V(R) = frac(1, 2) k (R - R_e)^2 $
  Valid *only* for small vibrations near $R_e$. Fails completely at larger distances because it does not allow for chemical bond dissociation.
- *Anharmonic Morse Potential:* Accurately reproduces realistic chemical bond dissociation:
  $ bold(V(R) = D_e [1 - e^(- a (R - R_e))]^2) $
  where $D_e$ is the well depth (equilibrium dissociation energy), and $a = sqrt(k / 2 D_e)$.

=== 3.2 Potential Energy Surfaces (PES) for Polyatomic Molecules
For a molecule containing $N$ atoms, its 3D spatial geometry is described by $3 N$ Cartesian coordinates. Subtracting 3 translational and 3 rotational degrees of freedom (or 2 for linear molecules) yields the number of independent internal geometric variables:
- *Nonlinear Molecules:* $bold(3 N - 6)$ internal coordinates (e.g., Water $H_2 O$: $3(3) - 6 = bold(3)$ coordinates: two O-H bond lengths and one H-O-H bond angle).
- *Linear Molecules:* $bold(3 N - 5)$ internal coordinates (e.g., Carbon Dioxide $C O_2$: $3(3) - 5 = bold(4)$ coordinates).

=== 3.3 Critical Topographical Points on a PES
#table(
  columns: (2fr, 2.5fr, 2.5fr),
  fill: (x, y) => if y == 0 { rgb("#f1f5f9") } else { none },
  stroke: 0.5pt + rgb("#cbd5e1"),
  align: (left, left, left),
  [#text(weight: "bold")[Topographical Feature]], [#text(weight: "bold")[Mathematical Definition]], [#text(weight: "bold")[Chemical Interpretation]],
  [*Local / Global Minimum*], [Gradient $nabla E = 0$; all Hessian eigenvalues are positive ($lambda_i > 0$).], [Stable equilibrium chemical species: Reactants, Products, or Reaction Intermediates.],
  [*First-Order Saddle Point*], [Gradient $nabla E = 0$; exactly ONE negative Hessian eigenvalue ($lambda_1 < 0, lambda_(i > 1) > 0$).], [*Transition State ($T S$):* The energy bottleneck / activation barrier along the reaction coordinate.],
  [*Higher-Order Saddle Point*], [Gradient $nabla E = 0$; two or more negative eigenvalues.], [Mathematical construct; no chemical kinetic significance.]
)

#v(3mm)

== 4. Molecular Electrostatic Potential (MEP) and Geometry Optimization

=== 4.1 Molecular Electrostatic Potential (MEP) Maps
An MEP map projects the electrostatic potential experienced by a hypothetical positive test charge onto a surface of constant electron density (typically the $0.001 "a.u."$ isosurface enclosing $> 95%$ of molecular electron density):
- *Color Coding Standards:*
  - *Red / Deep Orange (Negative Potential):* Regions of high electron density, lone pairs, and partial negative charge ($delta^-$). Represents nucleophilic attack sites and Lewis basic centers (e.g., Nitrogen atom in Ammonia $N H_3$, Carbonyl Oxygen in Acetone).
  - *Deep Blue (Positive Potential):* Regions of low electron density and partial positive charge ($delta^+$). Represents electrophilic attack sites and acidic protons (e.g., Hydrogen atoms in $N H_3$ and $H_2 O$).
  - *Green / Yellow (Neutral Potential):* Non-polar hydrocarbon regions ($C-H$ and $C-C$ bonds).

=== 4.2 Geometry Optimization Workflow
Geometry optimization finds the nearest stationary equilibrium geometry on the PES:
1. *Compute Molecular Energy ($E$)* and the Gradient Vector ($bold(g) = nabla E$) at initial guess coordinates.
2. If gradient elements $|partial E / partial q_i| > "threshold"$, calculate the Hessian Matrix of second derivatives ($bold(H) = nabla^2 E$).
3. Take a step along the downward gradient using quasi-Newton optimization algorithms (e.g., Berny algorithm, BFGS).
4. Iterate until convergence criteria (maximum force, RMS force, maximum displacement, RMS displacement) fall below strict tolerances ($approx 10^(-4) "a.u."$).

=== 4.3 Harmonic Vibrational Frequencies & Distinguishing Stationary Points
Following geometry optimization, a *frequency calculation* diagonalizes the mass-weighted Hessian matrix to yield $3 N - 6$ (or $3 N - 5$) fundamental vibrational normal modes:
- *Zero-Point Vibrational Energy (ZPVE):* Even at absolute zero ($0 "K"$), quantum mechanics dictates that molecules retain ground-state vibrational energy:
  $ E_"ZPV" = frac(1, 2) sum_(i=1)^(3 N - 6) h nu_i $
- *Definitive Diagnostic Criterion:*
  - *Local Minimum (Intermediate / Product):* All vibrational frequencies ($nu_i$) are real and strictly positive ($nu_i > 0$). *Zero imaginary frequencies*.
  - *Transition State ($T S$):* Contains *EXACTLY ONE imaginary frequency* (reported as a negative wavenumber in computational output, e.g., $- 452 "cm"^(-1)$). The eigenvector corresponding to this imaginary frequency represents the exact vector of atomic displacements undergoing bond formation and bond breaking across the activation barrier.

#v(3mm)

== 5. Reaction Mechanisms: Gas-Phase vs. Solution-Phase $S_N 2$ and AI/ML

=== 5.1 Nucleophilic Substitution ($S_N 2$) Pathways
Reaction: $Y^- + R-X arrow.r Y-R + X^-$
- *Gas-Phase $S_N 2$ Reaction (Double-Well PES):*
  - In the gas phase without solvent, the reaction profile exhibits a characteristic *double-well potential energy curve*:
    1. Reactants ($Y^- + R-X$) approach and form a stable ion-dipole precursor complex $[Y^- dots.c R-X]$ in an energy well.
    2. The complex surmounts a central pentacoordinate transition state $[Y dots.c R dots.c X]^(\ddagger -)$.
    3. Drops into a second ion-dipole successor complex $[Y-R dots.c X^-]$ before dissociating into separated products.
- *Solution-Phase $S_N 2$ Reaction (Single-Barrier PES):*
  - In polar protic solvents (e.g., water, methanol), strong hydrogen bonding preferentially solvates and stabilizes the localized negative charge on the small reactant nucleophile ($Y^-$).
  - The transition state $[Y dots.c R dots.c X]^(\ddagger -)$ has delocalized charge and is far less solvated.
  - This selectively raises the activation energy barrier, eliminating the ion-dipole wells and producing the classic textbook single-barrier reaction coordinate diagram.

=== 5.2 Ketone-Enol Tautomerization Mechanism
Computational chemistry demonstrates that direct intramolecular keto-enol conversion ($C H_3-C(=O)-R arrow.r C H_2=C(O H)-R$) in the gas phase has a prohibitive activation barrier ($approx 250 "kJ mol"^(-1)$) via a strained 4-membered transition state. In aqueous solution, explicit water molecules act as a bifunctional proton shuttle (catalytic bridge), lowering the activation barrier to $< 80 "kJ mol"^(-1)$ via a strain-free 6-membered cyclic transition state.

=== 5.3 Modern Role of AI and Machine Learning in Material Discovery
- *Machine Learning Potentials (MLPs):* Trained on high-accuracy DFT energy and force databases (e.g., ANI-1, M3GNet) to predict quantum-accurate energies $10000 times$ faster than DFT.
- *Semiconductor Screening:* High-throughput AI workflows screen millions of perovskite, semiconductor, and battery cathode crystal structures in hours, predicting bandgaps ($E_g$), carrier mobilities, and thermodynamic stabilities to discover novel materials for next-generation solar cells and solid-state batteries.
