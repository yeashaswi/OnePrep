import subprocess
import os
import re

typst_builtins = {
    'log', 'ln', 'sin', 'cos', 'tan', 'arcsin', 'arccos', 'arctan',
    'integral', 'sqrt', 'times', 'plus', 'minus', 'approx', 'quad',
    'text', 'bold', 'mat', 'vec', 'cases', 'degree', 'frac', 'sum',
    'limits', 'scripts', 'dot', 'dots', 'min', 'max', 'lim', 'inf',
    'exp', 'pi', 'alpha', 'beta', 'gamma', 'delta', 'Delta', 'epsilon',
    'eta', 'theta', 'lambda', 'mu', 'nu', 'xi', 'pi', 'rho', 'sigma',
    'tau', 'phi', 'Phi', 'chi', 'psi', 'omega', 'Omega', 'to', 'in',
    'subset', 'supset', 'union', 'inter', 'diff', 'partial', 'nabla',
    'arrow', 'hbar', 'hat'
}

def clean_and_compile(typst_raw, typ_path, pdf_path):
    typst_raw = re.sub(r'\(([i|v|x]+)\)', r'("\1")', typst_raw)
    typst_raw = typst_raw.replace('^circ', ' degree')

    parts = typst_raw.split('$')
    for i in range(1, len(parts), 2):
        math = parts[i]
        math = re.sub(r'\boint\b', 'integral.cont', math)
        math = re.sub(r'\bhbar\b', 'planck.reduce', math)
        math = re.sub(r'\bup\b', 'arrow.t', math)
        math = re.sub(r'\bdown\b', 'arrow.b', math)
        subparts = re.split(r'("[^"]*")', math)
        for j in range(0, len(subparts), 2):
            def repl(m):
                w = m.group(0)
                if w in typst_builtins or w.startswith('arrow.') or w.startswith('planck.'):
                    return w
                return f'"{w}"'
            subparts[j] = re.sub(r'\b[A-Za-z]{2,}\b', repl, subparts[j])
        parts[i] = ''.join(subparts)

    text = '$'.join(parts)
    text = text.replace('""', '"')

    with open(typ_path, 'w') as f:
        f.write(text)

    res = subprocess.run(['/opt/homebrew/bin/typst', 'compile', typ_path, pdf_path], capture_output=True, text=True)
    if res.returncode == 0:
        print(f"SUCCESS: Compiled {pdf_path}")
    else:
        print(f"ERROR compiling {pdf_path}:")
        print(res.stderr[:1200])

# ==============================================================================
# MODULE 5: COMPUTATIONAL CHEMISTRY: BASIC TO APPLICATIONS
# ==============================================================================
mod5_code = """#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.3cm, right: 2.3cm),
  header: context {
    let p = counter(page).get().first()
    if p > 1 [
      #grid(
        columns: (1fr, 1fr),
        align: (left, right),
        text(size: 8pt, fill: rgb(101, 106, 118))[VIT BACHY105 — Module 5: Computational Chemistry],
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
  #text(size: 13.5pt, weight: "bold", fill: rgb(139, 0, 0))[MODULE 5: COMPUTATIONAL CHEMISTRY: BASIC TO APPLICATIONS (CO: 5)] \\
  #v(2pt)
  #text(size: 10.5pt, weight: "bold")[Complete Comprehensive Textbook: Quantum Mechanics, MO Theory, PES Minima & Saddle Points, DFT & AI Screening of Semiconductors] \\
  #v(1pt)
  #text(size: 8.5pt, fill: rgb(85, 85, 85))[Aligned with Official VIT BACHY105 Applied Chemistry Course Syllabus, Department Question Bank & VIT FAT Papers]
]

#v(8pt)

#rect(width: 100%, fill: rgb(240, 244, 248), stroke: 1pt + rgb(180, 200, 220), radius: 4pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb(15, 23, 42))[Syllabus Scope & Competency Checklist (Module 5):] \\
  #text(size: 9pt)[
    - *Foundations of Quantum Chemical Calculations:* Postulates of quantum mechanics; Time-Independent Schrödinger Equation ($hat(H) psi = E psi$); molecular Hamiltonian operator (electronic kinetic, nuclear kinetic, electron-nuclear attraction, electron-electron repulsion, nuclear-nuclear repulsion); Born-Oppenheimer approximation.
    - *Molecular Orbital Theory (MOT):* Linear Combination of Atomic Orbitals (LCAO) framework; bonding ($sigma, pi$), antibonding ($sigma^*, pi^*$), and non-bonding orbitals; Aufbau, Pauli, and Hund rules; Bond Order formula ($"BO" = 1/2 (N_b - N_a)$).
    - *MO Diagrams of Diatomic Molecules:*
      1. Homonuclear $O_2$ (16 electrons): Complete valence configuration $sigma_(2s)^2 sigma_(2s)^(*2) sigma_(2p_z)^2 pi_(2p_x)^2 pi_(2p_y)^2 pi_(2p_x)^(*1) pi_(2p_y)^(*1)$; bond order $= 2.0$; paramagnetic behavior with 2 unpaired electrons in degenerate $pi^*$ orbitals.
      2. Heteronuclear $CO$ (14 electrons): Electronegativity asymmetry (oxygen orbitals lowered relative to carbon); $1sigma^2 2sigma^2 1pi^4 3sigma^2$; bond order $= 3.0$; HOMO ($3sigma$ carbon lone pair) and LUMO (degenerate $2pi^*$); $pi$-backbonding in transition metal carbonyl complexes.
    - *Potential Energy Surfaces (PES):* $3N - 6$ dimensional nuclear coordinate space; Gradient vector ($nabla V$); Hessian force constant matrix ($partial^2 V / partial q_i partial q_j$); Local and Global Minima (all positive eigenvalues, zero imaginary frequencies); Transition States (first-order saddle points, exactly one negative eigenvalue, one imaginary frequency along Intrinsic Reaction Coordinate IRC).
    - *Intermolecular Potentials:* Lennard-Jones (12-6) potential ($V_"LJ"(r) = 4 epsilon [ (sigma/r)^(12) - (sigma/r)^6 ]$); Pauli repulsive core vs long-range London dispersion attraction; potential well depth ($epsilon$) and equilibrium separation ($r_m = 2^(1/6) sigma$).
    - *Geometry Optimization & Harmonic Frequencies:* Energy minimization algorithms (Steepest Descent, Conjugate Gradient, BFGS); harmonic vibrational frequencies, Zero-Point Vibrational Energy ($"ZPVE"$); thermochemical corrections ($Delta H, Delta G$).
    - *Density Functional Theory (DFT) & AI Screening:* Hohenberg-Kohn theorems ($E = E[rho]$); Kohn-Sham equations; exchange-correlation functionals (LDA, GGA PBE, Hybrid B3LYP); Artificial Intelligence and Graph Neural Networks (CGCNN) for rapid high-throughput screening of semiconductor bandgaps and battery solid electrolytes.
  ]
]

#v(10pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[1. Quantum Mechanical Calculations & Born-Oppenheimer Approximation]

=== 1.1 The Molecular Schrödinger Equation
All computational chemistry methods originate from the fundamental Time-Independent Schrödinger Equation:
$ hat(H) psi(bold(r), bold(R)) = E psi(bold(r), bold(R)) $
where $bold(r)$ denotes electronic coordinates, $bold(R)$ denotes nuclear coordinates, $psi$ is the molecular wavefunction, and $E$ is the total energy.
The complete non-relativistic molecular Hamiltonian operator $hat(H)$ consists of five distinct energetic contributions:
$ hat(H) = - sum_A (hbar^2) / (2 M_A) nabla_A^2 - sum_i (hbar^2) / (2 m_e) nabla_i^2 - sum_A sum_i (Z_A e^2) / (4 pi epsilon_0 r_(A i)) + sum_(i < j) (e^2) / (4 pi epsilon_0 r_(i j)) + sum_(A < B) (Z_A Z_B e^2) / (4 pi epsilon_0 R_(A B)) $
- *Terms:*
  1. $- sum_A (hbar^2) / (2 M_A) nabla_A^2$: Kinetic energy of the atomic nuclei.
  2. $- sum_i (hbar^2) / (2 m_e) nabla_i^2$: Kinetic energy of the electrons.
  3. $- sum_A sum_i (Z_A e^2) / (4 pi epsilon_0 r_(A i))$: Attractive Coulomb potential between positively charged nuclei and electrons.
  4. $+ sum_(i < j) (e^2) / (4 pi epsilon_0 r_(i j))$: Repulsive Coulomb potential between electrons (electron-electron repulsion).
  5. $+ sum_(A < B) (Z_A Z_B e^2) / (4 pi epsilon_0 R_(A B))$: Repulsive Coulomb potential between atomic nuclei.

=== 1.2 The Born-Oppenheimer Approximation (1927)
Because an atomic nucleus (proton) is at least 1836 times heavier than an electron ($M_A >> m_e$), electrons move orders of magnitude faster than nuclei.
- *Physical Formulation:* We can clamp the nuclei at fixed spatial positions ($bold(R) = "constant"$). The nuclear kinetic energy term vanishes, and nuclear repulsion becomes a constant electrostatic shift.
- *Electronic Schrödinger Equation:*
$ hat(H)_"elec" psi_"elec"(bold(r); bold(R)) = E_"elec"(bold(R)) psi_"elec"(bold(r); bold(R)) $
Total molecular energy at fixed nuclear geometry:
$ E_"total"(bold(R)) = E_"elec"(bold(R)) + V_"NN"(bold(R)) $
Solving $E_"total"(bold(R))$ for all possible nuclear arrangements maps out the *Potential Energy Surface (PES)*.

#v(8pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[2. Molecular Orbital Theory: MO Diagrams of $O_2$ & $CO$]

=== 2.1 The LCAO Approximation & Bond Order
Molecular orbitals are constructed mathematically as a Linear Combination of Atomic Orbitals (LCAO):
$ psi_"MO" = c_1 phi_1 pm c_2 phi_2 $
- *Bonding Orbital ($psi_b = c_1 phi_1 + c_2 phi_2$):* In-phase constructive interference increases electron probability density between nuclei, lowering electronic energy ($sigma, pi$).
- *Antibonding Orbital ($psi_a = c_1 phi_1 - c_2 phi_2$):* Out-of-phase destructive interference creates a nodal plane between nuclei, raising electronic energy ($sigma^*, pi^*$).
- *Bond Order Formulation:*
$ "Bond Order (BO)" = 1 / 2 (N_b - N_a) $
where $N_b$ is the number of electrons in bonding MOs and $N_a$ is the number of electrons in antibonding MOs. Higher bond order corresponds to shorter bond length and higher bond dissociation energy.

=== 2.2 MO Energy Level Diagram of Homonuclear $O_2$ (Oxygen Molecule)
Oxygen has atomic number $Z = 8$; an $O_2$ molecule possesses 16 total electrons (12 valence electrons):
- *Valence Molecular Orbital Electronic Configuration:*
$ sigma_(2s)^2 quad sigma_(2s)^(*2) quad sigma_(2p_z)^2 quad (pi_(2p_x)^2 = pi_(2p_y)^2) quad (pi_(2p_x)^(*1) = pi_(2p_y)^(*1)) $
- *Bond Order Calculation:*
  - Bonding electrons ($N_b$): 2 in $sigma_(2s)$, 2 in $sigma_(2p_z)$, 4 in $pi_(2p)$ $= 8$ electrons.
  - Antibonding electrons ($N_a$): 2 in $sigma_(2s)^*$, 2 in $pi_(2p)^*$ $= 4$ electrons.
  $ "Bond Order" = 1 / 2 (8 - 4) = 4 / 2 = 2.0 quad ("Stable Double Bond " O=O) $
- *Paramagnetism of $O_2$:*
  By Hund's rule of maximum multiplicity, the two highest-energy electrons enter the two degenerate antibonding orbitals ($pi_(2p_x)^*$ and $pi_(2p_y)^*$) with *parallel unpaired spins* ($arrow.t, arrow.t$).
  This rigorously explains why liquid oxygen is strongly attracted into magnetic fields (*paramagnetic*), resolving the historical failure of Lewis and Valence Bond theories which incorrectly predicted complete spin pairing (diamagnetism).

=== 2.3 MO Diagram of Heteronuclear $CO$ (Carbon Monoxide)
Carbon Monoxide possesses 14 total electrons (10 valence electrons, isoelectronic with $N_2$). Because oxygen is significantly more electronegative than carbon ($chi_O = 3.44 > chi_C = 2.55$), oxygen's atomic $2s$ and $2p$ orbitals lie lower in energy than carbon's:
- *Molecular Orbital Configuration:*
$ 1sigma^2 quad 2sigma^2 quad 1pi^4 quad 3sigma^2 $
- *Bond Order Calculation:*
  $ "Bond Order" = 1 / 2 (8 - 2) = 6 / 2 = 3.0 quad ("Extremely Strong Triple Bond " C equiv O) $
- *Frontier Molecular Orbitals & Metal Carbonyl Bonding:*
  - *HOMO ($3sigma$ orbital):* Formed primarily from carbon's $2p_z$ orbital, directed outward as a localized non-bonding lone pair on the Carbon atom (not oxygen!). Carbon acts as a Lewis $sigma$-donor to transition metal d-orbitals.
  - *LUMO (Degenerate $2pi^*$ orbitals):* Empty, low-lying antibonding orbitals localized predominantly on the Carbon atom. Transition metal $d$-electrons back-donate into $CO$'s $2pi^*$ LUMO (*$pi$-backbonding*), strengthening the metal-carbon bond while weakening the $C-O$ bond (shifting the $C-O$ IR stretching frequency downward from $2143" cm"^(-1)$).

#v(8pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[3. Potential Energy Surfaces (PES) & Intermolecular Potentials]

=== 3.1 Topography of the Potential Energy Surface (PES)
For a non-linear molecule of $N$ atoms, the PES is a $(3N - 6)$ dimensional hypersurface representing potential energy $V$ as a function of nuclear geometric coordinates $bold(q) = (q_1, q_2, ..., q_(3N-6))$:
- *Gradient Vector (First Derivatives):*
$ bold(g) = nabla V = mat(partial V / partial q_1; partial V / partial q_2; vdots; partial V / partial q_(3N-6)) $
At all *Stationary Points*, the gradient vanishes identically: $nabla V = bold(0)$.
- *Hessian Matrix (Second Derivatives & Force Constants):*
$ bold(H)_(i j) = (partial^2 V) / (partial q_i partial q_j) $
Diagonalizing the mass-weighted Hessian matrix yields the fundamental harmonic vibrational frequencies ($nu_i prop sqrt(lambda_i)$):
1. *Local / Global Minima:* All eigenvalues ($lambda_i$) of the Hessian matrix are *strictly positive* ($lambda_i > 0$). All vibrational frequencies are real numbers ($nu_i > 0$, *zero imaginary frequencies*). Represents stable physical chemical species (reactants, intermediates, products).
2. *Transition States (First-Order Saddle Points):* Exactly *one eigenvalue is strictly negative* ($lambda_1 < 0$) while all remaining $(3N - 7)$ eigenvalues are positive ($lambda_i > 0$).
   - The negative eigenvalue corresponds to *exactly one imaginary vibrational frequency* ($nu_1 = i |nu_1|$).
   - The corresponding normal mode eigenvector defines the *Intrinsic Reaction Coordinate (IRC)*, representing the minimum energy path crossing the activation barrier connecting reactants to products.

=== 3.2 Intermolecular Potentials: The Lennard-Jones (12-6) Model
The Lennard-Jones potential describes the interaction energy between two non-bonding neutral atoms or molecules separated by distance $r$:
$ V_"LJ"(r) = 4 epsilon [ (sigma / r)^(12) - (sigma / r)^6 ] $
- *Physical Origin of Terms:*
  1. *Repulsive Term ($(sigma/r)^(12)$):* Dominates at very short separations ($r < sigma$). Arises from Pauli repulsion when occupied electron clouds overlap.
  2. *Attractive Term ($-(sigma/r)^6$):* Dominates at intermediate and long distances. Arises from quantum mechanical induced dipole-induced dipole London dispersion interactions.
- *Equilibrium Characteristics:*
  - Zero-potential crossing point: $V_"LJ"(sigma) = 0$.
  - Minimum energy (well depth): Occurs by setting $d V_"LJ" / d r = 0$:
  $ d / (d r) V_"LJ"(r) = 4 epsilon [ -12 sigma^(12) / r^(13) + 6 sigma^6 / r^7 ] = 0 quad ==> quad 12 sigma^(12) / r^(13) = 6 sigma^6 / r^7 $
  $ r^6 = 2 sigma^6 quad ==> quad r_m = 2^(1/6) sigma approx 1.12246 sigma $
  Substituting $r_m$ back into potential:
  $ V_"LJ"(r_m) = 4 epsilon [ (1 / 2)^2 - (1 / 2) ] = 4 epsilon [ 1 / 4 - 1 / 2 ] = -epsilon $
  The potential well depth is identically $-epsilon$, representing the bond dissociation energy of the van der Waals dimer.

#v(8pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[4. Density Functional Theory (DFT) & AI Screening of Semiconductors]

=== 4.1 Foundations of Density Functional Theory (DFT)
Traditional wave-function methods (Hartree-Fock, Coupled Cluster) scale exponentially with electron count because an $N$-electron wavefunction depends on $3N$ spatial coordinates.
- *Hohenberg-Kohn Theorems (1964):*
  1. *Theorem 1:* The ground-state electronic energy and all physical properties of a many-electron system are uniquely and completely determined by the three-dimensional ground-state electron density $rho(bold(r))$:
  $ E = E[rho(bold(r))] $
  reducing $3N$ spatial variables to just 3 spatial dimensions ($x, y, z$).
  2. *Theorem 2:* The true ground-state electron density minimizes the total energy functional (variational principle).
- *Kohn-Sham Equations (1965):*
  Map the intractable interacting electron system onto an equivalent fictitious non-interacting system yielding the same electron density:
  $ [ - (hbar^2) / (2 m_e) nabla^2 + V_"eff"(bold(r)) ] psi_i(bold(r)) = epsilon_i psi_i(bold(r)) $
  where effective potential $V_"eff" = V_"ext" + V_"Hartree" + V_"xc"$. The unknown physics is isolated in the *Exchange-Correlation Functional ($E_"xc"[rho]$)*:
  - *LDA (Local Density Approximation):* $E_"xc"$ depends only on local density $rho(bold(r))$.
  - *GGA (Generalized Gradient Approximation, e.g., PBE):* Depends on density and its gradient ($nabla rho$).
  - *Hybrid Functionals (e.g., B3LYP, HSE06):* Incorporates a fraction of exact Hartree-Fock exchange, providing accurate semiconductor bandgap predictions.

=== 4.2 AI & Machine Learning for Semiconductor Screening
Screening hundreds of thousands of candidate materials using pure DFT is computationally prohibitive ($10 - 100$ CPU hours per crystal).
- *Machine Learning Pipeline:*
  1. *Crystal Graph Representation (CGCNN):* Atoms are represented as graph nodes (encoded with atomic number, electronegativity, radius); interatomic bonds are represented as edges (encoded with bond distances).
  2. *Deep Graph Neural Networks:* Predict formation energy ($Delta H_f$), bandgap ($E_g$), carrier mobilities ($mu$), and structural stability in milliseconds.
  3. *Applications:* Discovering stable lead-free halide perovskites ($"Cs"_2 "AgBiBr"_6$) for solar cells and superionic lithium conductors ($"Li"_10 "GeP"_2 "S"_12$) for all-solid-state batteries.

#v(10pt)
#line(length: 100%, stroke: 0.5pt + rgb(180, 200, 220))
#v(6pt)

#text(size: 12pt, weight: "bold", fill: rgb(139, 0, 0))[VIT FAT Solved Question Bank: Step-by-Step Derivations]

#v(6pt)
#rect(width: 100%, fill: rgb(249, 250, 251), stroke: 1pt + rgb(220, 225, 230), radius: 4pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb(15, 23, 42))[FAT Problem 1: Molecular Orbital Diagram & Magnetic Properties of $O_2$ vs $CO$] \\
  *Question (10 Marks):*
  (i) Construct the complete valence molecular orbital energy level diagram for the homonuclear diatomic molecule $O_2$ and heteronuclear $CO$.
  (ii) Write their full electronic configurations and calculate the bond order for both molecules.
  (iii) Explain why liquid $O_2$ is paramagnetic while $CO$ is diamagnetic based on molecular orbital theory.
  (iv) When $O_2$ is ionized to $O_2^+$ and $O_2^-$, predict how their respective bond lengths and bond dissociation energies change relative to neutral $O_2$.

  #v(4pt)
  #text(weight: "bold", fill: rgb(139, 0, 0))[Complete Step-by-Step Solution:] \\
  *Step 1: Configurations and Bond Orders:*
  - *$O_2$ (12 Valence Electrons):*
    $ sigma_(2s)^2 quad sigma_(2s)^(*2) quad sigma_(2p_z)^2 quad pi_(2p_x)^2 quad pi_(2p_y)^2 quad pi_(2p_x)^(*1) quad pi_(2p_y)^(*1) $
    $ "BO"(O_2) = 1 / 2 (N_b - N_a) = 1 / 2 (8 - 4) = 2.0 quad ("Double Bond") $
  - *$CO$ (10 Valence Electrons):*
    $ 1sigma^2 quad 2sigma^2 quad 1pi^4 quad 3sigma^2 $
    $ "BO"(CO) = 1 / 2 (8 - 2) = 3.0 quad ("Triple Bond") $

  *Step 2: Magnetic Property Explanation:*
  - In $O_2$, the two highest energy electrons occupy two degenerate antibonding orbitals ($pi_(2p_x)^*, pi_(2p_y)^*$) with parallel spins ($arrow.t, arrow.t$) according to Hund's rule. The presence of two unpaired electrons gives $O_2$ a net permanent magnetic dipole moment ($mu = sqrt(n(n+2)) = sqrt(2(4)) = 2.83 mu_B$), making it strongly *paramagnetic*.
  - In $CO$, all 14 electrons are completely paired in closed shells with zero unpaired electrons ($n = 0, mu = 0$), making it strictly *diamagnetic*.

  *Step 3: Ionization Effects on $O_2^+$ and $O_2^-$:*
  - *Cation $O_2^+$:* Removing one electron from an antibonding $pi^*$ orbital decreases $N_a$ from 4 to 3:
    $ "BO"(O_2^+) = 1 / 2 (8 - 3) = 2.5 $
    Higher bond order ($2.5 > 2.0$) results in a *shorter bond length* and *higher bond dissociation energy*!
  - *Anion $O_2^-$ (Superoxide):* Adding one electron into an antibonding $pi^*$ orbital increases $N_a$ from 4 to 5:
    $ "BO"(O_2^-) = 1 / 2 (8 - 5) = 1.5 $
    Lower bond order ($1.5 < 2.0$) results in a *longer bond length* and *lower bond dissociation energy*!

  *Boxed Final Answers:*
  $ "BO"(O_2) = 2.0, quad "BO"(CO) = 3.0, quad O_2 " has 2 unpaired " pi^* " electrons (paramagnetic)", quad "BO"(O_2^+) = 2.5, "BO"(O_2^-) = 1.5. $
]

#v(8pt)
#rect(width: 100%, fill: rgb(249, 250, 251), stroke: 1pt + rgb(220, 225, 230), radius: 4pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb(15, 23, 42))[FAT Problem 2: Lennard-Jones Potential Parameters & Equilibrium Force Constants] \\
  *Question (10 Marks):* For Argon gas, the empirical Lennard-Jones (12-6) potential parameters are determined from transport measurements to be:
  $ epsilon = 1.656 times 10^(-21)" Joules" quad (epsilon / k_B = 120" K"), quad sigma = 3.40" \\u00c5" = 0.340" nm" $
  (i) Calculate the equilibrium interatomic separation distance $r_m$ where the potential energy is minimum.
  (ii) Compute the value of the potential energy at $r = sigma$, $r = r_m$, and $r = 2.5 sigma$.
  (iii) Derive the mathematical expression for the force $F(r) = -d V / d r$ between two Argon atoms and verify that $F(r_m) = 0$.
  (iv) Calculate the effective harmonic force constant $k = (d^2 V / d r^2) |_(r = r_m)$ at the bottom of the potential well.

  #v(4pt)
  #text(weight: "bold", fill: rgb(139, 0, 0))[Complete Step-by-Step Solution:] \\
  *Step 1: Calculate Equilibrium Separation $r_m$:*
  $ r_m = 2^(1/6) sigma = (1.12246) times (3.40" \\u00c5") = 3.816" \\u00c5" = 0.3816" nm" $

  *Step 2: Potential Energy Values:*
  - At $r = sigma$: $V_"LJ"(sigma) = 4 epsilon [ 1^(12) - 1^6 ] = 0" Joules"$.
  - At $r = r_m$: $V_"LJ"(r_m) = -epsilon = -1.656 times 10^(-21)" Joules" = -0.01034" eV"$.
  - At $r = 2.5 sigma$:
    $ (sigma / r)^6 = (1 / 2.5)^6 = (0.40)^6 = 4.096 times 10^(-3) $
    $ (sigma / r)^(12) = (4.096 times 10^(-3))^2 = 1.678 times 10^(-5) $
    $ V_"LJ"(2.5 sigma) = 4 epsilon [ 1.678 times 10^(-5) - 4.096 times 10^(-3) ] approx 4 times (1.656 times 10^(-21)) times (-4.079 times 10^(-3)) = -2.70 times 10^(-23)" J" $.

  *Step 3: Force Derivation:*
  $ F(r) = - (d V_"LJ") / (d r) = - 4 epsilon [ -12 sigma^(12) / r^(13) + 6 sigma^6 / r^7 ] = (24 epsilon) / r [ 2 (sigma / r)^(12) - (sigma / r)^6 ] $
  At $r = r_m = 2^(1/6) sigma$:
  $ (sigma / r_m)^6 = 1 / 2 quad ==> quad 2 (sigma / r_m)^(12) = 2 (1 / 4) = 1 / 2 $
  $ F(r_m) = (24 epsilon) / r_m [ 1 / 2 - 1 / 2 ] = 0" N (Equilibrium)". $

  *Step 4: Harmonic Force Constant $k$:*
  $ k = (d^2 V) / (d r^2) |_(r_m) = (72 epsilon) / (2^(1/3) sigma^2) = (72 times (1.656 times 10^(-21))) / (1.2599 times (3.40 times 10^(-10))^2) = (1.1923 times 10^(-19)) / (1.2599 times 1.156 times 10^(-19)) = 0.8186" N/m" $

  *Boxed Final Answers:*
  $ r_m = 3.82" \\u00c5", quad V(sigma) = 0, quad V(r_m) = -1.656 times 10^(-21)" J", quad F(r_m) = 0, quad k = 0.819" N/m". $
]
"""

clean_and_compile(mod5_code, "scripts/Chemistry_MOD-5.typ", "public/pdfs/chemistry/Chemistry_MOD-5.pdf")

# ==============================================================================
# MODULE 6: CONTEMPORARY TOPICS IN COMPUTATIONAL CHEMISTRY & MATERIALS
# ==============================================================================
mod6_code = """#set page(
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
  #text(size: 13.5pt, weight: "bold", fill: rgb(139, 0, 0))[MODULE 6: CONTEMPORARY TOPICS IN COMPUTATIONAL CHEMISTRY & MATERIALS (CO: 2)] \\
  #v(2pt)
  #text(size: 10.5pt, weight: "bold")[Advanced Contemporary Textbook: Machine Learning in Material Science, Graph Neural Networks, Solid-State Batteries & Solved VIT FAT Question Bank] \\
  #v(1pt)
  #text(size: 8.5pt, fill: rgb(85, 85, 85))[Aligned with Official VIT BACHY105 Applied Chemistry Course Syllabus & VIT FAT Contemporary Topics]
]

#v(8pt)

#rect(width: 100%, fill: rgb(240, 244, 248), stroke: 1pt + rgb(180, 200, 220), radius: 4pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb(15, 23, 42))[Syllabus Scope & Competency Checklist (Module 6):] \\
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
$ bold(v)_i^((t+1)) = bold(v)_i^((t)) + sum_(j in N(i)) g(bold(v)_i^((t)), bold(v)_j^((t)), bold(e)_(i j)) $
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
  #text(weight: "bold", fill: rgb(15, 23, 42))[FAT Problem 1: Solid-State Battery Electrolyte Ionic Conductivity & Arrhenius Transport] \\
  *Question (10 Marks):* An advanced solid electrolyte material ($"Li"_7 "La"_3 "Zr"_2 "O"_12$ LLZO) has an ionic conductivity of $sigma_1 = 1.05 times 10^(-3)" S/cm"$ at $T_1 = 298" K"$ and $sigma_2 = 4.80 times 10^(-3)" S/cm"$ at $T_2 = 348" K"$.
  (i) Assuming Arrhenius ion-hopping kinetics ($sigma T = A e^(-E_a / (k_B T))$), calculate the activation energy $E_a$ for lithium ion transport in electron-volts ($"eV"$).
  (ii) Compute the pre-exponential factor $A$.
  (iii) Determine the predicted ionic conductivity at an arctic operating temperature of $-20 degree"C"$ ($253" K"$).

  #v(4pt)
  #text(weight: "bold", fill: rgb(139, 0, 0))[Complete Step-by-Step Solution:] \\
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
"""

clean_and_compile(mod6_code, "scripts/Chemistry_MOD-6.typ", "public/pdfs/chemistry/Chemistry_MOD-6.pdf")
