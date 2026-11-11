#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.4cm, right: 2.4cm),
  header: context {
    if here().page() > 1 {
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: rgb("#64748b"))[VIT Applied Chemistry (BACHY101) --- Module 5: Computational Chemistry]],
        align(right)[#text(size: 8.5pt, fill: rgb("#64748b"), style: "italic")[VIT FAT Comprehensive Study Textbook]]
      )
      line(length: 100%, stroke: 0.5pt + rgb("#cbd5e1"))
    }
  },
  footer: context {
    align(center)[#text(size: 9pt, fill: rgb("#64748b"))[Page #here().page()]]
  }
)
#set text(font: "New Computer Modern", size: 10.5pt, fill: rgb("#0f172a"))
#set par(justify: true, leading: 0.82em)

#align(center)[
  #text(size: 9.5pt, weight: "bold", fill: rgb("#64748b"), tracking: 1pt)[VIT VELLORE --- DEPARTMENT OF CHEMISTRY] \
  #v(2mm)
  #text(size: 16pt, weight: "bold", fill: rgb("#0f172a"))[MODULE 5: COMPUTATIONAL CHEMISTRY: BASIC TO APPLICATIONS] \
  #v(1mm)
  #text(size: 11.5pt, weight: "bold", fill: rgb("#b91c1c"))[Official FAT Study Textbook & Step-by-Step Question Bank Solutions (CO: 4)] \
  #v(1mm)
  #text(size: 9pt, fill: rgb("#64748b"))[Aligned with Official VIT BACHY101 Syllabus, Department Question Bank, and Past FAT Papers]
]

#v(3mm)

#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.8pt + rgb("#cbd5e1"), radius: 5pt, inset: 11pt)[
  #text(weight: "bold", fill: rgb("#0f172a"), size: 10pt)[Scope of Module 5 (Official VIT Syllabus - All 10 Topics):] \
  #v(1.5mm)
  #text(size: 9.5pt, fill: rgb("#334155"))[
    (1) Introduction to Quantum mechanical calculations, (2) Foundations of computational chemistry, (3) Molecular orbital theory: Atomic orbitals and molecular orbitals, (4) Orbital interactions and chemical bonding, (5) Potential energy curve/surface (PES), (6) Bio-molecular potentials, (7) Geometry optimization, (8) Vibrational frequency calculations, (9) Reaction mechanism elucidation, and (10) Application of AI to screen semiconductors.
  ]
]

#v(4mm)

= 1. Core Syllabus Definitions & Theoretical Foundations (Line-by-Line)

#v(2mm)

*1. Computational Chemistry* \
The branch of modern chemistry that utilizes high-performance computer algorithms, numerical methods, and fundamental laws of physics (quantum mechanics and classical mechanics) to determine molecular 3D geometries, total energies, transition state barriers, dipole moments, vibrational spectra, and chemical reactivity pathways in silico.

#v(3.5mm)

*2. Quantum Mechanics (QM)* \
The microscopic theoretical framework that explicitly models atomic nuclei and quantum electrons by solving the electronic Schrödinger wave equation $hat(H) psi = E psi$ without empirical fitting parameters. Methods include Ab Initio Hartree-Fock (HF), Møller-Plesset Perturbation (MP2), Coupled-Cluster CCSD(T), and Density Functional Theory (DFT). It scales computationally as $O(N^3)$ to $O(N^7)$ and accurately simulates bond formation, bond breaking, charge transfer, and electronic spectra.

#v(3.5mm)

*3. Classical Mechanics (Molecular Mechanics MM)* \
The macroscopic computational framework that treats atoms as classical Newtonian spheres (balls) interconnected by harmonic springs, completely omitting explicit quantum electrons. Potential energy is evaluated through empirical algebraic force field equations (e.g., AMBER, CHARMM, GROMOS). It computes rapidly with $O(N)$ to $O(N^2)$ scaling, allowing simulations of large macromolecular complexes, proteins, DNA, and polymers with millions of atoms over nanosecond-to-microsecond time domains.

#v(3.5mm)

*4. Hybrid QM/MM Methods* \
A multi-scale modeling strategy that partitions a chemical system into two coupled zones: the chemically active reaction center (e.g. enzyme active site or ligand binding pocket) is treated with high-level Quantum Mechanics (DFT), while the surrounding bulk macromolecular protein environment and aqueous solvent are simulated with computationally fast Classical Molecular Mechanics.

#v(3.5mm)

*5. Schrödinger Wave Equation* \
The fundamental equation of non-relativistic quantum mechanics:
$ hat(H) psi = E psi $
where $hat(H)$ is the Hamiltonian energy operator (kinetic energy of nuclei and electrons plus electrostatic Coulombic potential attractions and repulsions), $psi$ is the molecular wavefunction, and $E$ is the total quantized eigenenergy of the molecular system.

#v(3.5mm)

*6. Born-Oppenheimer Approximation* \
The fundamental simplifying approximation in quantum chemistry based on the physical fact that atomic nuclei are at least 1,836 times heavier than electrons ($M_"nucleus" >= 1836 space m_e$). Because nuclei move with negligible velocity compared to the rapid instantaneous motion of electrons, the electronic Schrödinger equation decouples from nuclear motion by setting nuclear kinetic energy $T_n = 0$:
$ hat(H)_"elec" psi_"elec" = E_"elec" psi_"elec" $
Solving this electronic equation for systematically varied nuclear positions produces the Potential Energy Surface (PES) on which nuclei move and react.

#v(3.5mm)

*7. Hartree-Fock Self-Consistent Field (HF-SCF) Method* \
An ab initio electronic structure method that approximates the $N$-electron wavefunction as a single anti-symmetrized Slater determinant of one-electron spin orbitals. Each electron moves in an average, mean-field electrostatic potential created by all other electrons. The orbitals are iteratively updated until the self-consistent field converges. It accounts for exchange energy but completely neglects instantaneous dynamical electron-electron correlation.

#v(3.5mm)

*8. Density Functional Theory (DFT)* \
A quantum mechanical methodology founded on the Hohenberg-Kohn theorems and Kohn-Sham equations, proving that the ground-state total energy and all physical properties of an electronic system are uniquely determined by its 3-dimensional electron density distribution $rho(bold(r))$ rather than the complex $3N$-variable wavefunction:
$ E[rho] = T_s[rho] + V_"ext"[rho] + J[rho] + E_"xc"[rho] $
where $E_"xc"[rho]$ is the exchange-correlation functional (e.g. B3LYP, PBE, M06-2X). DFT scales as $O(N^3)$, making it the standard workhorse for quantum modeling of molecules, catalysts, and solid-state materials.

#v(3.5mm)

*9. Gaussian Basis Sets* \
Linear combinations of mathematical basis functions (primitive Gaussian-type orbitals, PGTOs) used to represent molecular orbitals via the LCAO-MO principle ($psi_i = sum_mu c_(mu i) phi_mu$):
- *Minimal Basis (STO-3G):* 1 basis function per core and valence atomic orbital, fitting each Slater-type orbital with 3 primitive Gaussians.
- *Split-Valence Basis Sets (6-31G, 6-311G):* Core orbitals are represented by 1 contraction of 6 primitives; valence orbitals are split into inner and outer functions (e.g. 3 primitives + 1 primitive in 6-31G), giving the valence electron cloud radial flexibility to expand or contract.
- *Polarization Functions (\* or d,p):* Adds basis functions of higher angular momentum ($d$-orbitals on C, N, O and $p$-orbitals on H, e.g. 6-31G(d,p)) to allow orbital shapes to distort and polarize along chemical bonds.
- *Diffuse Functions (+ or ++):* Adds large, radially extended Gaussians (e.g. 6-31+G(d,p)) essential for anions, Rydberg excited states, and lone pairs.
- *Effective Core Potentials (ECP / LANL2DZ):* Replaces computationally intensive non-valence core electrons of heavy transition elements with pseudopotentials, incorporating relativistic effects.

#v(3.5mm)

*10. Molecular Orbital Theory (MOT) & LCAO Criteria* \
Linear Combination of Atomic Orbitals requires three mandatory criteria: (1) Comparable atomic orbital energies, (2) Substantial spatial overlap ($S_(1 2) > 0$), and (3) Identical symmetry with respect to the internuclear bonding axis ($z$-axis). In-phase addition yields stabilized bonding MOs ($psi_b$), while out-of-phase subtraction produces destabilized antibonding MOs ($psi_a^*$) with a nodal plane.

#v(3.5mm)

*11. Potential Energy Surface (PES)* \
A multi-dimensional mathematical hyperspace expressing the electronic energy of a molecule as a function of its nuclear coordinates. For a molecule with $N$ atoms, the PES has $3N - 6$ internal degrees of freedom ($3N - 5$ for linear molecules):
- *Local / Global Minima:* Stationary points where the gradient vanishes ($nabla E = bold(0)$) and all eigenvalues of the Hessian second-derivative matrix ($partial^2 E / partial x_i partial x_j$) are strictly positive (all real vibrational frequencies). Corresponds to stable reactants, intermediates, or products.
- *Transition State (First-Order Saddle Point):* Stationary point where $nabla E = bold(0)$ and the Hessian matrix possesses *EXACTLY ONE negative eigenvalue* (corresponding to *EXACTLY ONE imaginary vibrational frequency* along the intrinsic reaction coordinate).

#v(3.5mm)

*12. Molecular Electrostatic Potential (MEP) Surface* \
A 3D spatial map of the electrostatic potential $V(bold(r))$ mapped directly onto the electron density isosurface ($rho = 0.001 "a.u."$). Color-coded: Red (strongly negative, $-V$) indicates electron-rich nucleophilic regions prone to electrophilic attack; Blue (strongly positive, $+V$) indicates electron-deficient electrophilic regions prone to nucleophilic attack.

#v(3.5mm)

*13. Biomolecular Potentials & Force Fields* \
Empirical potential functions simulating intra- and inter-molecular non-covalent interactions in large biological assemblies:
$ V_"LJ"(r) = 4 epsilon [ (sigma / r)^12 - (sigma / r)^6 ] $
where $r^(-12)$ models short-range Born-Mayer/Pauli electron cloud repulsion, and $r^(-6)$ models attractive London dispersion forces. Electrostatic interactions are modeled by Coulomb's law: $V_"Coulomb" = (q_i q_j) / (4 pi epsilon_0 epsilon_r r_(i j))$.

#v(3.5mm)

*14. Machine Learning & AI in Materials Discovery* \
Modern computational algorithms (Convolutional Neural Networks, Graph Neural Networks, and Random Forests) trained on curated quantum mechanical databases (Materials Project, AFLOW). They predict crystal structure stability, bandgap energies, dielectric constants, and ionic conductivity in milliseconds, replacing weeks of conventional DFT calculations to screen semiconductor and solar cell candidates.

#v(5mm)

= 2. In-Depth Chemical Theory & Molecular Orbital Derivations

#v(2mm)

== Principles of LCAO-MO Theory
Molecular orbitals $psi_"MO"$ are constructed by linear superposition of atomic orbitals $phi_mu$:
$ psi_"MO" = c_1 phi_1 + c_2 phi_2 $
For two identical $1s$ orbitals on homonuclear nuclei A and B with overlap integral $S = integral phi_A^* phi_B d tau$:
- *Bonding Molecular Orbital ($psi_b$):*
  $ psi_b = 1 / sqrt(2(1 + S)) (phi_A + phi_B) $
  Constructive orbital overlap increases electron probability density between nuclei ($E_b < E_"AO"$).
- *Antibonding Molecular Orbital ($psi_a^*$):*
  $ psi_a^* = 1 / sqrt(2(1 - S)) (phi_A - phi_B) $
  Destructive overlap creates a nodal plane perpendicular to the internuclear axis ($E_a^* > E_"AO"$).

#v(3mm)

== Homonuclear Diatomic Molecules: $N_2$ and $O_2$
#table(
  columns: (1fr, 2.2fr, 2.2fr),
  inset: 7pt,
  stroke: 0.5pt + rgb("#cbd5e1"),
  align: (left, left, left),
  [*Property*], [*Nitrogen Molecule ($N_2$, 14 Electrons)*], [*Oxygen Molecule ($O_2$, 16 Electrons)*],
  [$s-p$ Orbital Mixing], [Significant (Energy gap $Delta E(2s - 2p)$ is small).], [Negligible (Effective nuclear charge $Z_"eff"$ is high).],
  [Energy Level Sequence], [$sigma_(2s) < sigma_(2s)^* < pi_(2p_x) = pi_(2p_y) < sigma_(2p_z) < pi_(2p_x)^* = pi_(2p_y)^* < sigma_(2p_z)^*$], [$sigma_(2s) < sigma_(2s)^* < sigma_(2p_z) < pi_(2p_x) = pi_(2p_y) < pi_(2p_x)^* = pi_(2p_y)^* < sigma_(2p_z)^*$],
  [Valence Configuration], [$sigma_(2s)^2 sigma_(2s)^(* 2) (pi_(2p_x)^2 = pi_(2p_y)^2) sigma_(2p_z)^2$], [$sigma_(2s)^2 sigma_(2s)^(* 2) sigma_(2p_z)^2 (pi_(2p_x)^2 = pi_(2p_y)^2) (pi_(2p_x)^(* 1) = pi_(2p_y)^(* 1))$],
  [Bond Order Formula], [$"Bond Order" = (N_b - N_a)/2 = (10 - 4)/2 = bold(3)$], [$"Bond Order" = (N_b - N_a)/2 = (10 - 6)/2 = bold(2)$],
  [Magnetic Property], [*Diamagnetic* (all electrons are paired).], [*Paramagnetic* (2 unpaired electrons in $pi^*$ orbitals).]
)

#v(3mm)

== Heteronuclear Diatomic Molecules: Nitric Oxide ($N O$)
Nitric oxide possesses 11 valence electrons ($N: 2s^2 2p^3$; $O: 2s^2 2p^4$). Because Oxygen ($chi = 3.44$) is significantly more electronegative than Nitrogen ($chi = 3.04$), Oxygen's atomic orbitals lie lower in energy:
1. Bonding molecular orbitals are polarized toward the more electronegative Oxygen atom.
2. Antibonding molecular orbitals are polarized toward the less electronegative Nitrogen atom.
3. *Electronic Configuration:* $sigma_(2s)^2 sigma_(2s)^(* 2) (pi_(2p_x)^2 = pi_(2p_y)^2) sigma_(2p_z)^2 (pi_(2p_x)^(* 1))$
4. *Bond Order:* $(8 - 3)/2 = bold(2.5)$.
5. *Paramagnetic Radical:* 1 unpaired electron resides in the $pi_(2p_x)^*$ singly occupied molecular orbital (SOMO). Ionization to nitrosonium ion ($N O^+$) removes this antibonding electron, increasing the bond order to $3.0$ and strengthening the $N-O$ bond!

#v(5mm)

= 3. VIT FAT Exam Blueprint & Master Formula Sheet

Module 5 carries *15 to 20 marks* in the BACHY101 FAT:
- *Question Type A (10 Marks):* Molecular Orbital Theory and LCAO principle: Energy level diagrams for homonuclear ($N_2, O_2$) and heteronuclear ($N O, C O, H F$), calculation of bond orders, and magnetic property explanation.
- *Question Type B (10 Marks):* Potential Energy Surface (PES): Differentiating local minima, global minima, and transition states using the Hessian matrix second derivatives and vibrational imaginary frequencies.
- *Question Type C (10 Marks):* Computational methods: Comparing Quantum Mechanics vs Molecular Mechanics, basis sets, Lennard-Jones biomolecular potentials, and AI machine-learning screening for semiconductor bandgaps.

#v(2mm)

#table(
  columns: (1.5fr, 2.2fr, 2fr),
  inset: 7pt,
  stroke: 0.5pt + rgb("#cbd5e1"),
  align: (left, left, left),
  [*Concept / Method*], [*Governing Equation / Mathematical Form*], [*VIT Exam Key Insight*],
  [Time-Independent Schrödinger Eq], [$hat(H) psi = E psi, quad hat(H) = - (h^2) / (8 pi^2 m) nabla^2 + V$], [Basis of electronic structure theory (HF, DFT).],
  [LCAO Principle], [$psi_"MO" = c_1 phi_1 + c_2 phi_2$], [Bonding: $psi_+ = (phi_1 + phi_2)/sqrt(2)$; Antibonding: $psi_- = (phi_1 - phi_2)/sqrt(2)$.],
  [Bond Order Formula], [$"Bond Order" = (N_b - N_a) / 2$], [Fractional bond orders indicate stable radical species (e.g. $N O = 2.5$).],
  [Lennard-Jones 12-6 Potential], [$V_"LJ"(r) = 4 epsilon [ (sigma / r)^12 - (sigma / r)^6 ]$], [$r^(-12)$ is Pauli repulsion; $r^(-6)$ is London dispersion attraction.],
  [Transition State Condition], [$"Hessian" H_(i j) = (partial^2 E) / (partial x_i partial x_j)$ has exactly ONE negative eigenvalue], [One imaginary vibrational frequency ($nu < 0 "cm"^(-1)$) along reaction path.],
  [Vibrational Normal Modes], [$"Non-linear" = 3N - 6, quad "Linear" = 3N - 5$], [Water ($H_2 O$) has 3 modes; Benzene ($C_6 H_6$) has 30 modes.]
)

#v(5mm)

= 4. Worked VIT Question Bank & Past FAT Numerical Problems

#v(2mm)

#rect(width: 100%, fill: rgb("#fef2f2"), stroke: 0.8pt + rgb("#f87171"), radius: 5pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb("#991b1b"))[VIT FAT Problem 1 (10 Marks): Foundations of Computational Chemistry & Methods] \
  #v(1mm)
  (a) Differentiate clearly between Quantum Mechanical (QM) and Classical Molecular Mechanical (MM) calculations based on physical principles, electron treatment, computational scaling, and suitable applications. \
  (b) Explain the Born-Oppenheimer approximation and its mathematical formulation. \
  (c) Explain the significance of the 6-31G(d,p) polarized split-valence Gaussian basis set.
]

#v(2mm)

*Comprehensive Step-by-Step Solution:*

#v(1mm)

*Part (a) Quantum Mechanics (QM) vs Molecular Mechanics (MM):*
#table(
  columns: (1.5fr, 2.5fr, 2.5fr),
  inset: 6pt,
  stroke: 0.5pt + rgb("#cbd5e1"),
  align: (left, left, left),
  [*Feature*], [*Quantum Mechanics (QM / DFT)*], [*Molecular Mechanics (MM / MD)*],
  [Fundamental Basis], [Solves Schrödinger wave equation $hat(H) psi = E psi$.], [Solves classical Newton's second law $bold(F) = m bold(a)$.],
  [Treatment of Electrons], [Explicitly includes quantum electrons.], [Completely omits electrons; atoms are classical balls.],
  [Bond Breaking / Making], [Accurately simulates bond cleavage and reactions.], [Cannot simulate bond breaking (fixed bond topology).],
  [Computational Scaling], [Heavy: $O(N^3)$ to $O(N^7)$. Limited to $< 500$ atoms.], [Light: $O(N)$ to $O(N^2)$. Handles $> 1,000,000$ atoms.],
  [Primary Applications], [Transition states, catalysts, optical spectra.], [Protein folding, lipid membranes, polymer dynamics.]
)

#v(2mm)

*Part (b) Born-Oppenheimer Approximation:*
Because atomic nuclei are at least 1,836 times heavier than electrons ($M_"nucleus" >> m_e$), the velocities of nuclei are negligible compared to electrons. Electrons respond virtually instantaneously to nuclear coordinate changes. Setting nuclear kinetic energy $T_n = 0$ decouples the molecular Hamiltonian:
$ hat(H)_"total" = hat(T)_e + hat(V)_(e e) + hat(V)_(e n) + hat(V)_(n n) $
Solving the electronic eigenvalue equation at fixed nuclear positions $bold(R)$ yields the Potential Energy Surface:
$ E_"total"(bold(R)) = E_"elec"(bold(R)) + V_(n n)(bold(R)) $

#v(2mm)

*Part (c) Deconstructing the 6-31G(d,p) Basis Set:*
- *6:* Core atomic orbitals are represented by 1 contraction of 6 primitive Gaussian functions (PGTOs).
- *31:* Valence orbitals are split into two functions: an inner valence function made of 3 contracted Gaussians and an outer valence function made of 1 Gaussian.
- *(d,p):* Polarization functions: adds a set of five $d$-orbitals on heavy atoms (C, N, O) and three $p$-orbitals on hydrogen atoms to allow electron density to polarize along chemical bonds.

#v(4mm)

#rect(width: 100%, fill: rgb("#fef2f2"), stroke: 0.8pt + rgb("#f87171"), radius: 5pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb("#991b1b"))[VIT FAT Problem 2 (10 Marks): Molecular Orbital Diagrams & Bond Orders] \
  #v(1mm)
  Construct the molecular orbital energy level diagrams for: \
  (a) Homonuclear $O_2$ and its superoxide ion $O_2^-$. \
  (b) Heteronuclear $N O$ and the nitrosonium cation $N O^+$. \
  Calculate bond orders and interpret their magnetic behavior.
]

#v(2mm)

*Comprehensive Step-by-Step Solution:*

#v(1mm)

*Part (a) Oxygen Molecule ($O_2$) and Superoxide Ion ($O_2^-$):*
- For $O_2$ (16 valence electrons):
  $ sigma_(2s)^2 sigma_(2s)^(* 2) sigma_(2p_z)^2 (pi_(2p_x)^2 = pi_(2p_y)^2) (pi_(2p_x)^(* 1) = pi_(2p_y)^(* 1)) $
  $"Bond Order" = (N_b - N_a)/2 = (10 - 6)/2 = bold(2.0)$.
  *Magnetic behavior:* Paramagnetic due to 2 unpaired electrons with parallel spins in degenerate $pi^*$ orbitals.
- For $O_2^-$ (17 valence electrons, adding 1 electron to $pi^*$):
  $"Bond Order" = (10 - 7)/2 = bold(1.5)$.
  *Magnetic behavior:* Paramagnetic (1 unpaired electron). The addition of an electron to the antibonding orbital weakens and lengthens the $O-O$ bond!

#v(2mm)

*Part (b) Nitric Oxide ($N O$) and Nitrosonium Cation ($N O^+$):*
- For neutral $N O$ (11 valence electrons):
  $ sigma_(2s)^2 sigma_(2s)^(* 2) (pi_(2p_x)^2 = pi_(2p_y)^2) sigma_(2p_z)^2 (pi_(2p_x)^(* 1)) $
  $"Bond Order" = (8 - 3)/2 = bold(2.5)$.
  *Magnetic behavior:* Paramagnetic radical with 1 unpaired electron in $pi_(2p_x)^*$.
- For nitrosonium $N O^+$ (10 valence electrons, losing the antibonding electron):
  $"Bond Order" = (8 - 2)/2 = bold(3.0)$.
  *Magnetic behavior:* Diamagnetic (all electrons are paired). The bond becomes significantly stronger ($N equiv O$) with shorter bond length!

#v(2mm)

#rect(width: 100%, fill: rgb("#f0fdf4"), stroke: 0.8pt + rgb("#86efac"), radius: 4pt, inset: 8pt)[
  *Final Verified Answers for FAT Examination:* \
  #text(weight: "bold")[
    $O_2$: Bond Order = 2.0 (Paramagnetic, 2 unpaired $e^-$) \
    $O_2^-$: Bond Order = 1.5 (Paramagnetic, 1 unpaired $e^-$) \
    $N O$: Bond Order = 2.5 (Paramagnetic, 1 unpaired $e^-$) \
    $N O^+$: Bond Order = 3.0 (Diamagnetic, 0 unpaired $e^-$)
  ]
]
