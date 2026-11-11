#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.4cm, right: 2.4cm),
  header: context {
    if here().page() > 1 {
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: rgb("#64748b"))[VIT Applied Chemistry (BACHY101) --- Module 3: Functional Materials]],
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
  #text(size: 16pt, weight: "bold", fill: rgb("#0f172a"))[MODULE 3: FUNCTIONAL MATERIALS & LIQUID COOLANTS] \
  #v(1mm)
  #text(size: 11.5pt, weight: "bold", fill: rgb("#b91c1c"))[Official FAT Study Textbook & Step-by-Step Question Bank Solutions (CO: 3)] \
  #v(1mm)
  #text(size: 9pt, fill: rgb("#64748b"))[Aligned with Official VIT BACHY101 Syllabus, Department Question Bank, and Past FAT Papers]
]

#v(3mm)

#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.8pt + rgb("#cbd5e1"), radius: 5pt, inset: 11pt)[
  #text(weight: "bold", fill: rgb("#0f172a"), size: 10pt)[Scope of Module 3 (Official VIT Syllabus - All 9 Topics):] \
  #v(1.5mm)
  #text(size: 9.5pt, fill: rgb("#334155"))[
    (1) Electrical materials and band theory, (2) Factors affecting electrical conductivity, (3) Superconductors and Meissner effect, (4) High-Tc cuprate superconductors (YBCO), (5) Magnetic materials: Diamagnetism, paramagnetism, and ferromagnetism, (6) Magnetic hysteresis loop and magnetic data storage, (7) Nanomaterials and quantum confinement, (8) Carbon allotropes (CNTs and graphene), and (9) Liquid coolants and nanofluids.
  ]
]

#v(4mm)

= 1. Core Syllabus Definitions & Theoretical Foundations (Line-by-Line)

#v(2mm)

*1. Band Theory of Conduction* \
A quantum mechanical model where large numbers of overlapping atomic orbitals in a solid condense into continuous energy bands:
- *Valence Band (VB):* The highest occupied energy band filled with valence electrons.
- *Conduction Band (CB):* The lowest unoccupied energy band where delocalized electrons can migrate freely under an electric field.
- *Forbidden Bandgap ($E_g$):* The energy difference between the top of the valence band and the bottom of the conduction band. Metals have overlapping bands ($E_g = 0 "eV"$); Semiconductors have narrow gaps ($0.1 < E_g < 3.0 "eV"$); Insulators have wide gaps ($E_g > 3.0 "eV"$).

#v(3.5mm)

*2. Electrical Conductivity & Resistivity* \
Ohmic relationship $rho = (R A) / l$. At the microscopic level, electrical conductivity $sigma$ depends on carrier concentration $n$, fundamental electronic charge $e$, and carrier mobility $mu$:
$ sigma = 1 / rho = n e mu $

#v(3.5mm)

*3. Temperature Coefficient of Resistance (TCR)* \
The fractional rate of change of electrical resistance with temperature ($alpha = (1 / R_0) (d R / d T)$):
- *Positive Temperature Coefficient (PTC):* In metals, thermal vibrations of lattice ions increase electron scattering, causing resistance to increase as temperature rises ($d R / d T > 0$).
- *Negative Temperature Coefficient (NTC):* In semiconductors, thermal energy promotes exponential numbers of electrons across the bandgap into the conduction band, causing electrical resistance to drop sharply as temperature rises ($d R / d T < 0$).

#v(3.5mm)

*4. Superconductivity* \
A macroscopic quantum phenomenon discovered by Heike Kamerlingh Onnes where electrical resistance vanishes completely ($R = 0$) below a material-specific critical transition temperature $T_c$, enabling continuous persistent current flow without thermal Joule dissipation ($I^2 R = 0$).

#v(3.5mm)

*5. The Meissner Effect* \
The complete expulsion of magnetic flux lines from the interior of a superconducting material when cooled below its critical transition temperature $T_c$ in the presence of an applied magnetic field:
$ bold(B) = bold(0), quad chi = -1 $
Demonstrates that superconductors are intrinsically perfect diamagnets, physically distinct from hypothetical ideal zero-resistance conductors.

#v(3.5mm)

*6. High-Tc Cuprate Ceramic Superconductors (YBCO)* \
Layered perovskite ceramic copper oxides of formula $Y B a_2 C u_3 O_(7-x)$ (where $0 < x < 0.5$) possessing a critical temperature $T_c = 93 "K"$. Operating above the boiling point of cheap liquid nitrogen ($77 "K"$), YBCO enabled practical magnetic levitation (maglev), lossless power transmission cables, and high-field MRI magnets.

#v(3.5mm)

*7. Diamagnetic Materials* \
Substances containing exclusively paired electrons with zero net permanent magnetic dipole moments. When placed in an external magnetic field, induced orbital currents weakly oppose the field; magnetic susceptibility $chi$ is small, negative ($chi approx -10^(-5)$), and completely independent of temperature (e.g. $C u, B i, A u, H_2 O$).

#v(3.5mm)

*8. Paramagnetic Materials* \
Substances possessing permanent unpaired electron spins with localized magnetic moments. In the absence of an external field, thermal agitation randomizes the dipoles; in an external magnetic field, dipoles partially align parallel to the field. Magnetic susceptibility $chi$ is positive ($chi approx 10^(-4)$) and inversely proportional to absolute temperature via Curie's Law: $chi = C / T$ (e.g. $A l, P t, M n^(2+)$, liquid $O_2$).

#v(3.5mm)

*9. Ferromagnetic Materials* \
Substances possessing strong quantum parallel exchange coupling between unpaired spins across macroscopic magnetic domains. They exhibit strong spontaneous magnetization, are powerfully attracted into magnetic fields, retain permanent magnetization after removing the external field, and follow the Curie-Weiss law $chi = C / (T - theta)$ above their Curie temperature $T_c$ (e.g. $F e, C o, N i, N d_2 F e_(14) B$).

#v(3.5mm)

*10. Magnetic Hysteresis Loop & Data Storage* \
The non-linear, lagging relationship between magnetic flux density $B$ and applied magnetic field $H$ during cyclic magnetization:
- *Retentivity (Remanence $B_r$):* The residual magnetic flux remaining inside the material when the applied field $H$ is returned to zero; forms the physical foundation for binary 0/1 non-volatile storage in hard disk drives and magnetic tapes.
- *Coercivity ($H_c$):* The reverse demagnetizing field required to reduce residual magnetization back to zero.
- *Soft Magnetic Materials:* Characterized by low coercivity $H_c$, high permeability, and narrow hysteresis loops with minimal heat dissipation; ideal for transformer cores and electromagnets.
- *Hard Magnetic Materials:* Characterized by high coercivity $H_c$, high retentivity, and broad hysteresis loops; resistant to demagnetization; ideal for permanent magnets and magnetic recording media.

#v(3.5mm)

*11. Nanomaterials & Quantum Confinement* \
Materials engineered with at least one dimension in the nanoscale regime ($1 - 100 "nm"$):
- *Quantum Confinement:* When physical spatial dimensions become comparable to or smaller than the de Broglie wavelength of conduction electrons, continuous energy bands collapse into discrete, quantized energy levels, widening the effective bandgap $E_g$.
- *Surface-to-Volume Ratio:* As particle size decreases, the fraction of surface atoms increases exponentially ($"Ratio" prop 1/r$), dramatically enhancing chemical reactivity, catalytic efficiency, and adsorption capacity.

#v(3.5mm)

*12. Carbon Nanotubes (CNTs) & Graphene* \
Allotropes of $s p^2$ hybridized carbon:
- *Graphene:* A two-dimensional planar honeycomb lattice of single-atom thickness exhibiting ballistic electronic transport, zero effective mass charge carriers (Dirac fermions), and extraordinary tensile strength ($130 "GPa"$).
- *Single-Walled Carbon Nanotubes (SWCNTs):* Seamless cylindrical tubes rolled from graphene sheets with diameter $approx 1 - 2 "nm"$; display metallic or semiconducting behavior governed by their chiral wrapping vector indices $(n, m)$.

#v(3.5mm)

*13. Advanced Liquid Coolants & Nanofluids* \
Engineered heat transfer liquids engineered for thermal management in EV battery packs, avionics, and high-performance microprocessors:
- *Essential Thermophysical Properties:* High specific heat capacity $C_p$, high thermal conductivity $k$, low kinematic viscosity $nu$, high dielectric breakdown strength, non-flammability, and low corrosive potential.
- *Nanofluids:* Stable colloidal suspensions of metallic or metal oxide nanoparticles ($A l_2 O_3, C u O, T i O_2$, or functionalized CNTs) dispersed in base fluids (water, ethylene glycol) providing $20 - 50%$ enhancement in convective heat transfer coefficients.

#v(5mm)

= 2. In-Depth Chemical Theory & Step-by-Step Derivations

#v(2mm)

== Crystal Chemistry & Mechanism of YBCO Superconductors
$Y B a_2 C u_3 O_(7-x)$ adopts an oxygen-deficient, triple-cell layered perovskite structure consisting of alternating $C u-O$ planes ($C u O_2$) and $C u-O$ chains ($C u O$):
1. Superconductivity occurs predominantly within the two-dimensional $C u O_2$ planes through Cooper pairing mediated by lattice vibrations (phonons) and antiferromagnetic spin fluctuations.
2. The oxygen stoichiometry index $(7 - x)$ directly controls superconducting transition temperature:
   - For $x approx 0.05$ to $0.1$ ($Y B a_2 C u_3 O_(6.93)$), the crystal is orthorhombic and exhibits maximum $T_c = 93 "K"$.
   - When oxygen is lost ($x > 0.6$), the material undergoes an orthorhombic-to-tetragonal phase transition, $C u-O$ chains are depleted of oxygen, and the material becomes an electrical insulator!

#v(5mm)

= 3. VIT FAT Exam Blueprint & Master Formula Sheet

#table(
  columns: (1.5fr, 2.2fr, 2fr),
  inset: 7pt,
  stroke: 0.5pt + rgb("#cbd5e1"),
  align: (left, left, left),
  [*Property / Law*], [*Governing Equation / Formula*], [*VIT Exam Key Insight*],
  [Ohm's Microscopic Law], [$J = sigma E = n e mu E$], [$sigma = n e mu$; carrier density $n$ and mobility $mu$.],
  [Resistance vs Temp], [$R(T) = R_0 [1 + alpha(T - T_0)]$], [$alpha > 0$ for metals; $alpha < 0$ for semiconductors.],
  [Meissner Magnetic Flux], [$bold(B) = mu_0 (bold(H) + bold(M)) = bold(0) arrow.r.double chi = bold(M)/bold(H) = -1$], [Superconductors are perfect diamagnets below $T_c$.],
  [Curie's Law (Paramagnets)], [$chi = C / T$], [Susceptibility decreases inversely with absolute temperature.],
  [Curie-Weiss Law (Ferromagnets)], [$chi = C / (T - theta)$], [Valid for $T > T_c$; $theta$ is the Weiss paramagnetic temperature.],
  [Nanomaterial Surface Fraction], [$"Fraction of surface atoms" prop 1 / r$], [Surface energy dominates over bulk cohesion below $10 "nm"$.]
)

#v(5mm)

= 4. Worked VIT Question Bank & Past FAT Numerical Problems

#v(2mm)

#rect(width: 100%, fill: rgb("#fef2f2"), stroke: 0.8pt + rgb("#f87171"), radius: 5pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb("#991b1b"))[VIT FAT Problem 1 (10 Marks): Superconductors & Meissner Effect] \
  #v(1mm)
  (a) Distinguish between Type I and Type II superconductors based on critical magnetic field behavior, vortex states, and engineering applications. \
  (b) A superconducting lead wire has critical temperature $T_c = 7.2 "K"$ at zero magnetic field, and critical magnetic field $H_c(0) = 0.080 "Tesla"$ at $0 "K"$. \
  Calculate the critical magnetic field $H_c(T)$ of this lead superconductor at $T = 4.2 "K"$ (boiling point of liquid helium).
]

#v(2mm)

*Step-by-Step Solution:*
- *Part (a): Type I vs Type II Superconductors:*
  - *Type I Superconductors:* Exhibit a single critical magnetic field $H_c$. Below $H_c$, complete Meissner effect occurs; above $H_c$, superconductivity is abruptly destroyed (e.g. pure $P b, H g, S n$). Low $H_c$ limits use in high-current electromagnets.
  - *Type II Superconductors:* Exhibit two critical fields, $H_(c 1)$ and $H_(c 2)$. Below $H_(c 1)$, perfect diamagnetism occurs. Between $H_(c 1)$ and $H_(c 2)$, the material enters the *mixed / vortex state* where magnetic flux lines penetrate as quantized vortices without destroying bulk superconductivity (e.g. $N b_3 S n, Y B C O$). $H_(c 2)$ exceeds $20 - 100 "Tesla"$, making them ideal for high-field MRI magnets.

- *Part (b): Parabolic Critical Magnetic Field Calculation:*
  The temperature dependence of critical magnetic field is given by Tuyn's empirical relation:
  $ H_c(T) = H_c(0) [ 1 - (T / T_c)^2 ] $
  Substitute $H_c(0) = 0.080 "Tesla"$, $T = 4.2 "K"$, and $T_c = 7.2 "K"$:
  $ T / T_c = 4.2 / 7.2 = 0.58333 $
  $ (T / T_c)^2 = (0.58333)^2 = 0.34028 $
  $ 1 - (T / T_c)^2 = 1 - 0.34028 = 0.65972 $
  $ H_c(4.2 "K") = 0.080 times 0.65972 = bold(0.05278 "Tesla") quad (bold(52.78 "mT")) $

#v(2mm)

#rect(width: 100%, fill: rgb("#f0fdf4"), stroke: 0.8pt + rgb("#86efac"), radius: 4pt, inset: 8pt)[
  *Boxed Final Answer:* \
  Critical magnetic field at $4.2 "K"$: $H_c(4.2 "K") = bold(0.0528 "Tesla")$ ($52.8 "mT"$).
]
