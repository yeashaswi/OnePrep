#set page(
  paper: "a4",
  margin: (top: 2cm, bottom: 2cm, left: 2.2cm, right: 2.2cm),
  header: context {
    if here().page() > 1 {
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8pt, fill: rgb("#475569"), weight: "bold")[VIT Applied Chemistry (BACHY105) --- Module 3: Functional Materials]],
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
  #text(size: 16pt, weight: "bold", fill: rgb("#1e3a8a"))[MODULE 3: FUNCTIONAL MATERIALS (ELECTRICAL & MAGNETIC)] \
  #v(1mm)
  #text(size: 10.5pt, weight: "bold", fill: rgb("#b91c1c"))[Complete Unabridged Course Notes, Derivations, Diagrams & Topic-Wise CAT/FAT Solved Problems] \
  #v(1mm)
  #text(size: 8.5pt, fill: rgb("#64748b"))[Fully Aligned with Official VIT Faculty Lecture Decks (51 Slides), Department Question Bank, and Past FAT Papers (CO: 3)]
]

#v(2mm)

#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.8pt + rgb("#cbd5e1"), radius: 4pt, inset: 8pt)[
  #text(weight: "bold", fill: rgb("#0f172a"), size: 9pt)[Module 3 Detailed Syllabus Breakdown (100% Complete Coverage):] \
  #v(1mm)
  #text(size: 8.5pt, fill: rgb("#334155"))[
    *Part A: Electrical Materials:* Ohm's law, resistance ($R$), resistivity ($rho$), conductivity ($sigma$), factors affecting resistivity (nature, temperature coefficient $alpha$, Matthiessen's rule of impurities), Energy Band Theory for solids (VB, CB, $E_g$), Conductors vs Semiconductors vs Insulators, Low resistivity conductor materials: Copper (hard-drawn vs annealed Cu properties & applications), Aluminium (electronic config, 61% IACS, ACSR conductors), Semiconductors (intrinsic & extrinsic), Superconductors (Kamerlingh Onnes discovery, $T_c$, zero resistance, persistent currents, Meissner effect, perfect diamagnetism, critical field $H_c(T)$, Type I vs Type II superconductors, High-$T_c$ ceramic YBCO, applications). \
    *Part B: Magnetic Materials:* Origin of magnetism (orbital & spin dipole moments, Bohr magneton $mu_B$), Magnetic terms ($B, H, M, chi, mu_r$), 5 Types of Magnetic Materials (Diamagnetic, Paramagnetic, Ferromagnetic, Antiferromagnetic, Ferrimagnetic --- spin alignments, susceptibility, Curie/Néel temperatures), Hysteresis loop ($B-H$ curve, retentivity, coercivity), Soft vs Hard magnetic materials, Applications in data storage (HDDs, magnetic tapes, MRAM).
  ]
]

#v(3mm)

= PART A: ELECTRICAL MATERIALS

== 1. Electrical Conduction, Resistance, and Resistivity

=== 1.1 Fundamental Equations of Electrical Conduction
- *Ohm's Law:* At constant physical conditions (temperature, pressure), electric current ($I$) flowing through a metallic conductor is directly proportional to the applied potential difference ($V$):
  $ V = I R $
- *Electrical Resistance ($R$):* The property of a conductor that opposes the flow of electrons, defined by geometry:
  $ R = rho frac(L, A) $
  where $L$ is conductor length ($"m"$), $A$ is cross-sectional area ($"m"^2$), and $rho$ is the electrical resistivity ($Omega "m"$).
- *Resistivity ($rho$):* An intrinsic property quantifying how strongly a material resists electric current:
  $ rho = R frac(A, L) quad ("Units:" Omega "m" "or" Omega "cm") $
- *Electrical Conductivity ($sigma$):* The inverse of resistivity:
  $ sigma = frac(1, rho) = frac(L, R A) quad ("Units:" "S m"^(-1) "or" Omega^(-1) "m"^(-1)) $
  Microscopic formulation: $sigma = n e mu$, where $n$ is charge carrier density, $e = 1.602 times 10^(-19) "C"$, and $mu$ is carrier drift mobility.

=== 1.2 Factors Affecting Electrical Resistivity
1. *Nature of the Material:* Governed by the concentration of conduction electrons ($n$). In metals ($n approx 10^(28) "m"^(-3)$), resistivity is extremely low ($10^(-8) Omega "m"$). In insulators ($n approx 10^7 "m"^(-3)$), resistivity is enormous ($10^(12) - 10^(16) Omega "m"$).
2. *Effect of Temperature:*
   - *Metals (Positive TCR, $alpha > 0$):* Thermal agitation causes lattice ions to vibrate with larger amplitude around equilibrium positions. These vibrations (phonons) scatter conduction electrons, decreasing mean free path ($lambda$) and relaxation time ($tau$). Hence, resistivity increases linearly with temperature:
     $ R_T = R_0 (1 + alpha T) quad "or" quad R_2 = R_1 [1 + alpha_1 (T_2 - T_1)] $
     where $alpha$ is the Temperature Coefficient of Resistance ($"K"^(-1)$ or $degree "C"^(-1)$).
   - *Semiconductors and Insulators (Negative TCR, $alpha < 0$):* Thermal energy breaks covalent bonds, exponentially increasing carrier concentration ($n_i prop exp(- E_g / 2 k_B T)$). The increase in carrier density overwhelmingly dominates any scattering, causing resistivity to drop exponentially.
3. *Effect of Impurities and Alloying (Matthiessen's Rule):*
   Foreign solute atoms distort the periodic lattice potential, creating localized scattering centers that impede electron flow. The total resistivity of an impure metal is:
   $ rho_"total" = rho_"thermal"(T) + rho_"impurity"(c) + rho_"defect" $
   Adding just $1%$ impurity can increase copper's electrical resistivity by over $20 - 50%$.
4. *Mechanical Work / Cold Working:* Cold drawing, rolling, or hammering increases dislocation density and internal grain boundary defects, scattering electrons and increasing resistivity. Annealing relieves internal stress and restores maximum conductivity.

#v(3mm)

== 2. Energy Band Theory for Solids

In an isolated atom, electrons occupy discrete atomic orbitals ($1s, 2s, 2p$). When $N$ atoms assemble into a crystal lattice, Pauli's exclusion principle splits closely spaced energy levels into continuous *energy bands*:
- *Valence Band (VB):* The highest energy band filled with valence electrons in ground state.
- *Conduction Band (CB):* The vacant or partially filled band where electrons are free to drift under an electric field.
- *Forbidden Bandgap ($E_g$):* The forbidden energy gap separating the top of the VB and bottom of the CB.

#align(center)[
  ```
     CONDUCTORS (Metals)             SEMICONDUCTORS                 INSULATORS
  +-----------------------+     +-----------------------+     +-----------------------+
  |    Conduction Band    |     |    Conduction Band    |     |    Conduction Band    |
  |=======================|     +-----------------------+     +-----------------------+
  |   OVERLAPPING REGION  |                ^                             ^
  |=======================|                | Eg = 0.5 - 3.0 eV           | Eg > 5.0 eV
  |     Valence Band      |                v                             v
  +-----------------------+     +-----------------------+     +-----------------------+
        (Eg = 0 eV)             |     Valence Band      |     |     Valence Band      |
                                +-----------------------+     +-----------------------+
  ```
]

#table(
  columns: (1.5fr, 2.5fr, 2.5fr, 2.5fr),
  fill: (x, y) => if y == 0 { rgb("#f1f5f9") } else { none },
  stroke: 0.5pt + rgb("#cbd5e1"),
  align: (left, left, left, left),
  [#text(weight: "bold")[Parameter]], [#text(weight: "bold")[Conductors (Metals)]], [#text(weight: "bold")[Semiconductors]], [#text(weight: "bold")[Insulators]],
  [*Bandgap ($E_g$)*], [Zero ($E_g = 0$); VB and CB overlap.], [Small ($E_g = 0.5 - 3.0 "eV"$; Si: $1.12 "eV"$, Ge: $0.67 "eV"$).], [Very wide ($E_g > 5.0 "eV"$; Diamond: $5.47 "eV"$).],
  [*Resistivity ($rho$)*], [Extremely low ($10^(-8) - 10^(-6) Omega "m"$).], [Moderate ($10^(-4) - 10^4 Omega "m"$).], [Extremely high ($10^(10) - 10^(18) Omega "m"$).],
  [*Temperature Coefficient ($alpha$)*], [Positive ($alpha > 0$); resistance increases with $T$.], [Negative ($alpha < 0$); resistance decreases exponentially with $T$.], [Negative ($alpha < 0$); negligible conduction until dielectric breakdown.],
  [*Charge Carriers*], [Free conduction electrons only ($n_e approx 10^(28) "m"^(-3)$).], [Both electrons ($n_e$) and positive holes ($n_h$).], [Virtually zero free carriers at normal temperatures.]
)

#v(3mm)

== 3. Conductor Materials: Copper and Aluminium

Low-resistivity conducting materials are essential for electrical power generation, transmission, transformer windings, and printed circuit board (PCB) traces.

=== 3.1 Copper ($C u$) as a Technical Conductor
- *Atomic & Electronic Properties:* Atomic number $29$; configuration $[A r] 3d^(10) 4s^1$. The single $4s$ valence electron is loosely held and acts as a completely delocalized conduction electron.
- *High Electrical & Thermal Conductivity:* Second only to silver in electrical conductivity, but vastly more abundant and economical. Standard reference: International Annealed Copper Standard (IACS), where pure annealed copper is defined as $100% thin "IACS"$ ($rho = 1.7241 times 10^(-8) Omega "m"$ at $20 degree "C"$).
- *Corrosion Resistance & Solderability:* Forms a protective passivating copper oxide film; easily joined using standard lead-free tin-based solders.

=== 3.2 Hard-Drawn vs. Annealed Copper
#table(
  columns: (2fr, 2.5fr, 2.5fr),
  fill: (x, y) => if y == 0 { rgb("#f1f5f9") } else { none },
  stroke: 0.5pt + rgb("#cbd5e1"),
  align: (left, left, left),
  [#text(weight: "bold")[Property]], [#text(weight: "bold")[Hard-Drawn Copper]], [#text(weight: "bold")[Annealed Copper]],
  [*Manufacturing Method*], [Drawn through tungsten carbide dies at room temperature without subsequent heat treatment.], [Drawn and then heat treated (annealed) in an inert furnace at $500 - 650 degree "C"$ and slowly cooled.],
  [*Microstructure*], [Elongated, heavily strained fibrous grains with high internal dislocation density.], [Equiaxed, stress-free recrystallized grains.],
  [*Tensile Strength*], [*High:* $400 - 450 "MPa"$ ($40 - 45 "kg/mm"^2$); resists mechanical sagging.], [*Low / Moderate:* $200 - 250 "MPa"$ ($20 - 25 "kg/mm"^2$).],
  [*Elongation / Ductility*], [Low elongation ($1 - 4%$); stiff and rigid.], [*High elongation:* $25 - 40%$; extremely soft, ductile, and flexible.],
  [*Electrical Conductivity*], [$97% - 98% thin "IACS"$ (dislocations scatter electrons).], [*100% IACS* ($rho = 1.724 times 10^(-8) Omega "m"$; maximum conductivity).],
  [*Primary Applications*], [Overhead railway catenary wires, transmission spans, busbars, trolley wires.], [Transformer windings, motor stator coils, building wiring, flexible cables.]
)

=== 3.3 Aluminium ($A l$) as an Electrical Conductor
- *Atomic & Electronic Properties:* Configuration $[N e] 3s^2 3p^1$ (trivalent).
- *Density vs. Conductivity Advantage:*
  - Conductivity is $61% thin "IACS"$ (lower than copper), but density is only $2.70 "g cm"^(-3)$ (one-third that of copper, $8.96 "g cm"^(-3)$).
  - *Weight Comparison:* For a transmission line of equal electrical resistance, an aluminium conductor requires a larger diameter ($1.28 times$) but weighs *less than half ($48%$)* of the equivalent copper conductor!
- *Engineering Limitations:* Lower tensile strength ($150 - 200 "MPa"$); prone to mechanical creep and wind-induced galloping; forms a tough, insulating dielectric aluminium oxide ($A l_2 O_3$) surface skin that complicates terminal joint connections.
- *The Solution: ACSR Conductor (Aluminium Conductor Steel Reinforced):*
  - Central core consists of 1 to 7 strands of high-tensile galvanized steel wire.
  - Surrounding outer layers consist of multiple helically wound strands of high-purity electrical-grade aluminium (EC grade).
  - The steel core provides immense tensile strength to withstand long spans between towers and wind/ice loading, while the outer aluminium strands carry over $98%$ of the electrical current due to the AC skin effect.

#v(3mm)

== 4. Superconductors and Quantum Levitation

In 1911, Dutch physicist Heike Kamerlingh Onnes discovered that when solid mercury ($H g$) is cooled by liquid helium below $4.2 "K"$, its electrical resistance abruptly plunges to absolute zero ($R = 0$).

=== 4.1 Fundamental Characteristics of the Superconducting State
1. *Zero Electrical Resistance ($rho = 0$):* Below the Critical Temperature ($T_c$), electrical resistivity is strictly zero ($rho < 10^(-25) Omega "m"$). An electrical current induced in a superconducting closed ring continues to circulate indefinitely without measurable decay (*persistent currents*).
2. *Critical Temperature ($T_c$):* The exact thermodynamic transition temperature at which a normal conducting material transitions into the superconducting state.
3. *Critical Magnetic Field ($H_c$):* If an external magnetic field applied to a superconductor exceeds a threshold value $H_c$, superconductivity is instantly destroyed and the material returns to its normal resistive state:
   $ H_c(T) = H_0 [1 - (frac(T, T_c))^2] $
   where $H_0$ is the critical field at absolute zero ($T = 0 "K"$).

=== 4.2 The Meissner Effect and Perfect Diamagnetism
Discovered in 1933 by Walther Meissner and Robert Ochsenfeld:
"When a superconducting specimen is cooled below its critical temperature $T_c$ in the presence of an applied magnetic field, all internal magnetic flux lines are completely expelled from the interior of the material."

#align(center)[
  ```
        NORMAL STATE (T > Tc)                 SUPERCONDUCTING STATE (T < Tc)
     Magnetic Flux Penetrates Specimen            Magnetic Flux Completely Expelled
           |   |   |   |                               \      /       \      /
           |   |   |   |                                \    /         \    /
         +-|---|---|---|-+                               +--+           +--+
         | |   |   |   | |                               |  |   B = 0   |  |
         | |   |   |   | |     Cool below Tc             |  | (Screening|  |
         | |   |   |   | |  =====================>       |  |  Currents)|  |
         +-|---|---|---|-+                               +--+           +--+
           |   |   |   |                                /    \         /    \
           |   |   |   |                               /      \       /      \
             B = mu_0 H                                  B = 0 inside (Meissner)
  ```
]

- *Mathematical Formulation:*
  Inside the bulk superconductor:
  $ bold(B = mu_0 (H + M) = 0) $
  Therefore:
  $ M = - H ==> bold(chi = frac(M, H) = - 1) $
  - *Magnetic Susceptibility:* $chi = - 1.0$ (Strictly negative unit magnitude).
  - *Relative Permeability:* $mu_r = 1 + chi = 1 + (- 1) = bold(0)$.
  *Crucial Deduction:* Superconductivity is NOT merely "zero electrical resistance"; it is a distinct thermodynamic equilibrium state characterized by *perfect diamagnetism*.

=== 4.3 Type I vs. Type II Superconductors
#table(
  columns: (2fr, 2.5fr, 2.5fr),
  fill: (x, y) => if y == 0 { rgb("#f1f5f9") } else { none },
  stroke: 0.5pt + rgb("#cbd5e1"),
  align: (left, left, left),
  [#text(weight: "bold")[Parameter]], [#text(weight: "bold")[Type I Superconductors (Soft)]], [#text(weight: "bold")[Type II Superconductors (Hard)]],
  [*Critical Fields*], [Single critical magnetic field $H_c$.], [Two critical magnetic fields: Lower $H_(c 1)$ and Upper $H_(c 2)$.],
  [*Meissner Effect*], [Complete, abrupt flux expulsion up to $H_c$; then sharp transition to normal state.], [Complete Meissner effect below $H_(c 1)$; *Vortex/Mixed State* between $H_(c 1)$ and $H_(c 2)$.],
  [*Critical Field Values*], [Very low ($H_c approx 0.01 - 0.1 "Tesla"$); destroyed by weak magnetic fields.], [Extremely high ($H_(c 2) > 20 - 100 "Tesla"$); withstands intense magnetic fields.],
  [*Critical Temp ($T_c$)*], [Low ($T_c < 10 "K"$, requires liquid helium cooling).], [High ($T_c$ up to $93 - 135 "K"$ in ceramic cuprates; liquid nitrogen cooling).],
  [*Material Types*], [Pure metals ($P b, H g, S n, A l, Z n$).], [Intermetallic alloys and ceramic oxides ($N b_3 S n, N b - T i, Y B a_2 C u_3 O_7$).],
  [*Engineering Utility*], [Cannot carry high currents; useless for high-field electromagnets.], [Used for MRI scanners, Maglev trains, and CERN particle accelerators.]
)

=== 4.4 High-$T_c$ Ceramic Superconductor: $Y B a_2 C u_3 O_(7-delta)$ (YBCO)
- Discovered in 1987 by Paul Chu and Maw-Kuen Wu: Yttrium Barium Copper Oxide ($Y B a_2 C u_3 O_7$).
- *Layered Perovskite Crystal Structure:* Features triple-layer defect perovskite stacking. Superconductivity is confined to two-dimensional copper-oxygen planes ($C u O_2$), where Cooper pairing of holes occurs.
- *Critical Temperature:* $bold(T_c = 93 "K")$.
  - *The Liquid Nitrogen Breakthrough:* The boiling point of liquid Nitrogen is $77 "K" (-196 degree "C")$, while liquid Helium boils at $4.2 "K"$. Because $T_c = 93 "K" > 77 "K"$, YBCO can be cooled using inexpensive, non-toxic liquid nitrogen ($approx 100 times$ cheaper than liquid helium), enabling practical industrial applications.

#v(4mm)

= PART B: MAGNETIC MATERIALS

== 5. Origin of Magnetism and Magnetic Parameters

Magnetism arises fundamentally from the continuous orbital motion and intrinsic quantum mechanical spin of electrons within atoms.

=== 5.1 Magnetic Moments in Atoms
1. *Orbital Magnetic Dipole Moment ($mu_L$):* Arises from the orbital revolution of electrons around the positive nucleus (analogous to a microscopic current loop):
   $ mu_L = - frac(e, 2 m_e) bold(L) $
2. *Spin Magnetic Dipole Moment ($mu_S$):* Arises from the intrinsic quantum mechanical spin angular momentum of the electron:
   $ mu_S = - frac(e, m_e) bold(S) $
3. *The Bohr Magneton ($mu_B$):* The fundamental quantum mechanical unit of atomic magnetic dipole moment:
   $ bold(mu_B = frac(e h, 4 pi m_e) = 9.274 times 10^(-24) "J T"^(-1) quad ("or" "A m"^2)) $

=== 5.2 Fundamental Magnetic Quantities and Relationships
- *Magnetic Induction / Flux Density ($B$):* Total magnetic flux per unit area: $"Tesla" (T) = "Wb m"^(-2)$.
- *Magnetic Field Strength ($H$):* External magnetizing field: $"A m"^(-1)$ or Oersted.
- *Intensity of Magnetization ($M$):* Magnetic dipole moment induced per unit volume:
  $ M = frac("Total Magnetic Moment", "Volume") quad ("Units:" "A m"^(-1)) $
- *Constitutive Equation of Magnetism:*
  $ bold(B = mu_0 (H + M)) $
  where $mu_0 = 4 pi times 10^(-7) "T m A"^(-1)$ ($"H m"^(-1)$) is the permeability of free space.
- *Magnetic Susceptibility ($chi$):* Measure of how readily a material is magnetized in an external field:
  $ bold(chi = frac(M, H)) quad ("Dimensionless") $
- *Relative Permeability ($mu_r$):* Ratio of material permeability ($mu$) to free space permeability ($mu_0$):
  $ bold(mu_r = frac(mu, mu_0) = 1 + chi) $

#v(3mm)

== 6. Classification of the Five Types of Magnetic Materials

#table(
  columns: (1.5fr, 1.8fr, 1.8fr, 1.8fr, 2fr),
  fill: (x, y) => if y == 0 { rgb("#f1f5f9") } else { none },
  stroke: 0.5pt + rgb("#cbd5e1"),
  align: (left, center, center, left, left),
  [#text(weight: "bold")[Material Type]], [#text(weight: "bold")[Spin Alignment]], [#text(weight: "bold")[Susceptibility ($chi$)]], [#text(weight: "bold")[Permeability ($mu_r$)]], [#text(weight: "bold")[Representative Examples]],
  [*Diamagnetic*], [All spins paired \ ($arrow.t arrow.b arrow.t arrow.b$)], [Small & negative \ ($- 10^(-5)$)], [Slightly $< 1$ \ ($0.99999$)], [Bismuth, Copper, Gold, Water, $N a C l$],
  [*Paramagnetic*], [Random unpaired \ ($arrow.t arrow.tr arrow.b arrow.tl$)], [Small & positive \ ($+ 10^(-4)$ to $+ 10^(-2)$)], [Slightly $> 1$ \ ($1.0001$)], [Aluminium, Platinum, $O_2$, $C u S O_4$],
  [*Ferromagnetic*], [Parallel domain spins \ ($arrow.t arrow.t arrow.t arrow.t$)], [Enormous & positive \ ($10^3 - 10^6$)], [Extremely large \ ($mu_r >> 1000$)], [Iron ($F e$), Cobalt ($C o$), Nickel ($N i$), $N d_2 F e_14 B$],
  [*Antiferromagnetic*], [Antiparallel equal \ ($arrow.t arrow.b arrow.t arrow.b$)], [Small & positive \ ($10^(-4)$ to $10^(-2)$)], [Slightly $> 1$], [$M n O, F e O, C o O, N i O, C r$],
  [*Ferrimagnetic*], [Antiparallel unequal \ ($arrow.t arrow.t arrow.b arrow.t arrow.t$)], [Large & positive \ ($10 - 10^4$)], [Large \ ($mu_r >> 1$)], [Magnetite ($F e_3 O_4$), Ferrites ($N i F e_2 O_4$)]
)

=== 6.1 Temperature Dependence: Curie and Néel Temperatures
1. *Curie's Law (Paramagnetism):* Thermal agitation disrupts dipole alignment:
   $ chi = frac(C, T) quad (C = "Curie Constant") $
2. *Curie-Weiss Law (Ferromagnetism):* Above the *Curie Temperature ($T_C$)*, thermal vibrations destroy spontaneous domain alignment, transforming the material into a normal paramagnetic state:
   $ chi = frac(C, T - theta) quad ("for " T > T_C) $
   - Values: Iron $T_C = 770 degree "C"$ ($1043 "K"$); Cobalt $T_C = 1120 degree "C"$ ($1393 "K"$); Nickel $T_C = 358 degree "C"$ ($631 "K"$).
3. *Néel Temperature ($T_N$) (Antiferromagnetism):* Susceptibility increases with temperature up to $T_N$ as thermal energy overcomes antiparallel exchange coupling, peaking at $T_N$, then decreases as a paramagnet above $T_N$.

#v(3mm)

== 7. Magnetic Hysteresis Loop ($B-H$ Curve) and Data Storage

When a ferromagnetic material is subjected to a cyclic magnetizing field ($H$), the flux density ($B$) lags behind $H$. This phenomenon is called *Magnetic Hysteresis* (from Greek *hysterein*, "to lag behind").

#align(center)[
  ```
       Flux Density B (Tesla)
                 ^
                 |                 +--+ Saturation (B_s)
                 |                /   |
                 |  Retentivity  /    |
                 |     (B_r) *  /     |
                 |          | \/      |
  <--------------+----------+--\------+--------------> Field H (A/m)
                 |   Coercivity \     |
                 |     (-H_c) *  \    |
                 |             \  \   |
                 |              \  \  |
                 |               \  \ |
                 |                +--+ Saturation (-B_s)
                 v
  ```
]

- *Key Hysteresis Parameters:*
  1. *Saturation Magnetization ($B_s$):* The maximum flux density attained when all magnetic domains are fully rotated and aligned parallel to external field $H$.
  2. *Retentivity / Remanence ($B_r$):* The residual magnetic flux density remaining in the core when the external magnetizing field is reduced to zero ($H = 0$).
  3. *Coercivity / Coercive Force ($H_c$):* The reverse magnetic field strength required to completely demagnetize the material and reduce residual flux to zero ($B = 0$).
  4. *Hysteresis Energy Loss:* The energy dissipated as heat per unit volume per cycle is directly proportional to the *enclosed area* of the hysteresis loop.

=== 7.1 Soft vs. Hard Magnetic Materials
#table(
  columns: (2fr, 2.5fr, 2.5fr),
  fill: (x, y) => if y == 0 { rgb("#f1f5f9") } else { none },
  stroke: 0.5pt + rgb("#cbd5e1"),
  align: (left, left, left),
  [#text(weight: "bold")[Parameter]], [#text(weight: "bold")[Soft Magnetic Materials]], [#text(weight: "bold")[Hard Magnetic Materials]],
  [*Hysteresis Loop Area*], [*Narrow / Slim loop:* Extremely low hysteresis energy loss.], [*Broad / Wide loop:* Large enclosed loop area.],
  [*Coercivity ($H_c$)*], [*Low coercivity:* $H_c < 100 "A m"^(-1)$ (easily magnetized and demagnetized).], [*High coercivity:* $H_c > 10^4 - 10^6 "A m"^(-1)$ (resists demagnetization).],
  [*Permeability ($mu_r$)*], [*High permeability:* Easily channels magnetic flux lines.], [*Low permeability:* Requires strong fields to magnetize.],
  [*Primary Composition*], [Silicon steel ($4% thin S i - F e$), Permalloy ($78% thin N i - F e$), Soft Ferrites.], [Alnico ($A l - N i - C o$), Hard Ferrites ($B a F e_12 O_19$), Neodymium-Iron-Boron ($N d_2 F e_14 B$).],
  [*Applications*], [Transformer laminated cores, electric motor stators, inductors, magnetic shields.], [Permanent magnets, DC motors, loudspeakers, magnetic door latches.]
)

=== 7.2 Applications of Magnetic Materials in Digital Data Storage
1. *Magnetic Hard Disk Drives (HDDs):*
   - *Storage Platter:* Aluminium or glass substrate coated with an ultrathin ($approx 10 - 20 "nm"$) hard magnetic film of Cobalt-Chromium-Platinum alloy ($C o C r P t$). Tiny localized magnetic domains oriented perpendicular to platter surface represent binary bits ($0$ and $1$).
   - *Read-Write Heads:* Employ *Giant Magnetoresistance (GMR)* or *Tunneling Magnetoresistance (TMR)* spin-valve sensors consisting of alternating ferromagnetic and non-magnetic layers. When the head passes over a magnetized bit on the rotating disk, the local magnetic field rotates magnetization in the free layer, changing electrical resistance by $20 - 70%$ to read data.
2. *Magnetic Random Access Memory (MRAM):*
   - Non-volatile solid-state memory utilizing *Magnetic Tunnel Junctions (MTJ)*.
   - An MTJ consists of two ferromagnetic layers separated by an insulating magnesium oxide ($M g O$) barrier ($1 "nm"$). When magnetizations are parallel, quantum tunneling resistance is low (binary $0$); when antiparallel, resistance is high (binary $1$).
   - Retains memory permanently without power; immune to ionizing radiation.
