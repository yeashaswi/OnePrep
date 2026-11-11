#set page(
  paper: "a4",
  margin: (top: 2cm, bottom: 2cm, left: 2.2cm, right: 2.2cm),
  header: context {
    if here().page() > 1 {
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8pt, fill: rgb("#475569"), weight: "bold")[VIT Applied Chemistry (BACHY105) --- Module 3: Functional Materials, Nanomaterials & Coolants]],
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
  #text(size: 16pt, weight: "bold", fill: rgb("#1e3a8a"))[MODULE 3: FUNCTIONAL MATERIALS, NANOMATERIALS & LIQUID COOLANTS] \
  #v(1mm)
  #text(size: 10.5pt, weight: "bold", fill: rgb("#b91c1c"))[Complete Unabridged Course Notes, Derivations, Official Lecture Diagrams & CAT/FAT Solved Problems] \
  #v(1mm)
  #text(size: 8.5pt, fill: rgb("#64748b"))[Fully Aligned with Official VIT Faculty Lecture Decks (51 Slides Materials + 22 Slides Nanomaterials + 13 Slides Coolants) (CO: 3)]
]

#v(2mm)

#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.8pt + rgb("#cbd5e1"), radius: 4pt, inset: 8pt)[
  #text(weight: "bold", fill: rgb("#0f172a"), size: 9pt)[Module 3 Detailed Syllabus Breakdown (100% Complete Coverage):] \
  #v(1mm)
  #text(size: 8.5pt, fill: rgb("#334155"))[
    *Part A: Electrical Materials:* Ohm's law, resistance ($R$), resistivity ($rho$), conductivity ($sigma$), factors affecting resistivity (temperature coefficient $alpha$, Matthiessen's rule of impurities), Energy Band Theory for solids (VB, CB, $E_g$), Conductors vs Semiconductors vs Insulators, Copper conductors (Hard-drawn vs Annealed Cu), Aluminium conductors (61% IACS, density advantage, ACSR design), Superconductors (Kamerlingh Onnes discovery, $T_c$, zero resistance, persistent currents, Meissner effect, perfect diamagnetism, critical field $H_c(T)$, Type I vs Type II superconductors, High-$T_c$ ceramic YBCO, applications). \
    *Part B: Magnetic Materials:* Origin of magnetism (orbital & spin dipole moments, Bohr magneton $mu_B$), Magnetic terms ($B, H, M, chi, mu_r$), 5 Types of Magnetic Materials (Diamagnetic, Paramagnetic, Ferromagnetic, Antiferromagnetic, Ferrimagnetic --- spin alignments, susceptibility, Curie/Néel temperatures), Hysteresis loop ($B-H$ curve, retentivity, coercivity), Soft vs Hard magnetic materials, Applications in data storage (HDDs, magnetic tapes, MRAM). \
    *Part C: Nanomaterials:* Definition ($1 - 100 "nm"$), macro-to-nano size hierarchy, size and shape-dependent reflected colors of Au and Ag nanoparticles, Localized Surface Plasmon Resonance (LSPR), Categories of Nanomaterials (carbon, inorganic, polymeric), Quantum Dots (QDs, $< 10 "nm"$, size-dependent bandgap and emission, 4 synthetic routes, cancer cell imaging, sensing, QLEDs), Bulk Gold vs Nano Gold comparison table, Surface-to-volume ratio scaling, Top-down (high-energy ball milling, SPEX shaker mill) vs Bottom-up methods, Sol-Gel wet chemical synthesis (hydrolysis and condensation of TEOS, 6 processing stages, xerogel vs aerogel, calcination, advantages & disadvantages). \
    *Part D: Liquid Coolants:* Heat dissipation in miniature electronics ($1000 "W/cm"^2$), cooling loops & heat exchangers, 7 essential requirements (thermophysical, non-conductivity, non-flammability flash point $> 93 degree "C"$, non-toxicity, material compatibility with Cu/Al, low GWP & zero ODP, cost), Aqueous coolants, Deionized water with corrosion inhibitors, Water-glycol solutions (WEG/WPG), Water potassium formate/acetate solutions, Dielectric coolants for direct immersion cooling (Aromatics, Aliphatics, Fluorocarbons HFE/PFC, Silicones), Nanofluids as advanced coolants.
  ]
]

#v(3mm)

= PART A: ELECTRICAL MATERIALS

== 1. Fundamental Electrical Quantities & Governing Laws

=== 1.1 Ohm's Law and Electrical Resistance
When an electric potential difference ($V$) is maintained across a solid conductor carrying an electric current ($I$), Ohm's law states that at constant temperature:
$ V = I R ==> R = frac(V, I) $
Where $R$ is electrical resistance ($Omega$). For a uniform conductor of cross-sectional area $A$ ($"m"^2$) and length $L$ ($"m"$):
$ R = rho frac(L, A) ==> rho = frac(R A, L) $
Where $rho$ is *electrical resistivity* ($Omega "m"$). The reciprocal of resistivity is *electrical conductivity* ($sigma$):
$ sigma = frac(1, rho) = frac(L, R A) quad ("units: " Omega^(-1) "m"^(-1) " or " "S m"^(-1)) $

=== 1.2 Factors Affecting Electrical Resistivity
1. *Temperature ($T$):* In metallic conductors, increasing temperature amplifies thermal lattice vibrations (phonons), which scatter conduction electrons and reduce their mean free path ($lambda$). Resistivity scales linearly over ambient ranges:
   $ rho_T = rho_0 [1 + alpha_0 (T - T_0)] $
   Where $alpha_0$ is the *temperature coefficient of resistance* ($"K"^(-1)$ or $degree "C"^(-1)$).
2. *Impurities & Alloying (Matthiessen's Rule):* The total resistivity ($rho_("total")$) of a metal comprises thermal lattice scattering ($rho_("thermal")(T)$) and impurity/defect scattering ($rho_("impurity")$):
   $ rho_("total") = rho_("thermal")(T) + rho_("impurity") $
   Dissolved alloying solute atoms disrupt lattice periodicity, substantially increasing resistivity.
3. *Cold Work & Mechanical Deformation:* Severe plastically deformed metals generate dislocations and grain boundaries that scatter electrons, raising resistivity. Annealing relieves strain and restores low resistivity.

#v(2mm)

== 2. Energy Band Theory for Solids

In an isolated atom, electrons occupy discrete atomic orbitals. When $N$ atoms assemble into a crystal lattice, Pauli's exclusion principle splits energy levels into continuous *energy bands*:
- *Valence Band (VB):* Highest occupied band filled with valence electrons in ground state.
- *Conduction Band (CB):* Vacant or partially filled band where electrons drift freely under an electric field.
- *Forbidden Bandgap ($E_g$):* Forbidden energy gap separating the top of VB and bottom of CB.

#align(center)[
  #image("figures/m3_band_theory.png", width: 85%) \
  #text(size: 8pt, style: "italic", fill: rgb("#64748b"))[Figure 3.1: Energy Band Theory representation of Conductors (overlapping VB-CB, $E_g = 0$), Semiconductors ($E_g = 0.5 - 3.0 "eV"$), and Insulators ($E_g > 5.0 "eV"$).]
]

#table(
  columns: (1.5fr, 2.5fr, 2.5fr, 2.5fr),
  fill: (x, y) => if y == 0 { rgb("#f1f5f9") } else { none },
  align: (center, left, left, left),
  stroke: 0.5pt + rgb("#cbd5e1"),
  [#text(weight: "bold")[Parameter]],
  [#text(weight: "bold")[Conductors]],
  [#text(weight: "bold")[Semiconductors]],
  [#text(weight: "bold")[Insulators]],
  [Bandgap ($E_g$)], [$E_g = 0$ (VB & CB overlap)], [Narrow gap ($0.5 - 3.0 "eV"$)], [Wide gap ($E_g > 5.0 "eV"$)],
  [Charge Carriers], [Free electrons in CB], [Electrons in CB and Holes in VB], [Zero mobile carriers in CB],
  [Conductivity ($sigma$)], [Extremely high ($10^7 "S/m"$)], [Moderate ($10^(-6) - 10^2 "S/m"$)], [Extremely low ($10^(-18) - 10^(-10) "S/m"$)],
  [Temp. Coeff. ($alpha$)], [Positive ($alpha > 0$): $R arrow.t$ as $T arrow.t$], [Negative ($alpha < 0$): $R arrow.b$ as $T arrow.t$], [Negative ($alpha < 0$)],
  [Typical Examples], [Copper ($C u$), Aluminium ($A l$), Silver ($A g$)], [Silicon ($S i$), Germanium ($G e$), $G a A s$], [Glass, Teflon, Quartz, Rubber, Mica]
)

#v(2mm)

== 3. Engineering Low-Resistivity Conductors: Copper vs Aluminium

#table(
  columns: (1.8fr, 3.2fr, 3.2fr),
  fill: (x, y) => if y == 0 { rgb("#f1f5f9") } else { none },
  align: (center, left, left),
  stroke: 0.5pt + rgb("#cbd5e1"),
  [#text(weight: "bold")[Property]],
  [#text(weight: "bold")[Copper ($C u$)]],
  [#text(weight: "bold")[Aluminium ($A l$)]],
  [Electrical Conductivity], [$100%$ IACS ($sigma = 5.8 times 10^7 "S/m"$)], [$61%$ IACS ($sigma = 3.5 times 10^7 "S/m"$)],
  [Resistivity ($rho$ at $20 degree "C"$)], [$1.72 times 10^(-8) Omega "m"$], [$2.82 times 10^(-8) Omega "m"$],
  [Density ($d$)], [$8.96 "g/cm"^3$ (Dense, heavy)], [$2.70 "g/cm"^3$ (Lightweight; $1/3$ of Cu)],
  [Tensile Strength], [High ($220 - 400 "MPa"$)], [Moderate ($70 - 200 "MPa"$)],
  [Corrosion Resistance], [High; forms protective basic carbonate film], [High; forms self-passivating $A l_2 O_3$ layer],
  [Solderability & Joining], [Excellent solderability and terminal crimping], [Difficult soldering; oxidizes into insulating $A l_2 O_3$],
  [Primary Applications], [Printed circuit boards, motor windings, domestic wiring], [High-voltage overhead transmission lines (ACSR cables)]
)

*Engineering Significance of ACSR Conductors:* \
For long-distance overhead power transmission, pure aluminium lacks sufficient mechanical tensile strength to span high towers without excessive sagging. *Aluminium Conductor Steel Reinforced (ACSR)* cables utilize a central core of high-strength galvanized steel strands surrounded by outer concentric layers of high-conductivity aluminium strands. The steel core bears the mechanical line tension and wind loads, while the outer aluminium sheath carries the electric current.

#v(2mm)

== 4. Superconductors and Quantum Levitation

In 1911, Heike Kamerlingh Onnes discovered that solid mercury ($H g$) loses all electrical resistance abruptly at $4.2 "K"$.

=== 4.1 Fundamental Characteristics
1. *Zero Electrical Resistance ($rho = 0$):* Below Critical Temperature ($T_c$), resistivity is strictly zero ($rho < 10^(-25) Omega "m"$). Persistent currents circulate indefinitely without decay.
2. *Critical Magnetic Field ($H_c$):* Superconductivity is destroyed if an external magnetic field exceeds threshold $H_c(T)$:
   $ H_c(T) = H_0 [1 - (frac(T, T_c))^2] $

=== 4.2 The Meissner Effect and Perfect Diamagnetism
Discovered in 1933 by Walther Meissner and Robert Ochsenfeld: \
#text(style: "italic")[When cooled below $T_c$ in a magnetic field, all internal magnetic flux lines are completely expelled from the interior of the superconductor.]

#align(center)[
  #grid(
    columns: (1.2fr, 1fr),
    gutter: 10pt,
    image("figures/m3_meissner_effect.png", width: 95%),
    image("figures/m3_critical_field.png", width: 95%)
  )
  #text(size: 8pt, style: "italic", fill: rgb("#64748b"))[Figure 3.2: (Left) Meissner effect showing complete expulsion of magnetic flux lines below $T_c$; (Right) Parabolic dependence of critical magnetic field $H_c(T)$ on temperature.]
]

Inside the bulk superconductor:
$ bold(B = mu_0 (H + M) = 0 ==> M = - H ==> chi = frac(M, H) = - 1) $
- *Magnetic Susceptibility:* $chi = - 1.0$ (Perfect diamagnetism).
- *Relative Permeability:* $mu_r = 1 + chi = bold(0)$.

=== 4.3 Classification: Type I vs Type II Superconductors
- *Type I (Soft):* Single critical field $H_c$ ($approx 0.01 - 0.1 "Tesla"$), low $T_c < 10 "K"$, pure metals ($P b, H g, S n$).
- *Type II (Hard):* Two critical fields ($H_(c 1)$ and $H_(c 2)$). Between $H_(c 1)$ and $H_(c 2)$, it enters the *Vortex / Mixed State* where flux penetrates in quantized flux tubes while superconductivity persists. $H_(c 2) > 20 - 100 "Tesla"$; used in MRI and particle accelerators.
- *High-$T_c$ Ceramic YBCO ($Y B a_2 C u_3 O_7$):* Discovered in 1987. $bold(T_c = 93 "K")$. Because $T_c > 77 "K"$ (boiling point of liquid nitrogen), YBCO can be cooled using cheap, abundant liquid nitrogen (100 times cheaper than liquid helium).

#align(center)[
  #image("figures/m3_ybco_structure.png", width: 75%) \
  #text(size: 8pt, style: "italic", fill: rgb("#64748b"))[Figure 3.3: Crystal structure of $Y B a_2 C u_3 O_7$ (YBCO) high-$T_c$ ceramic superconductor showing layered $C u O_2$ superconducting planes.]
]

#v(4mm)

= PART B: MAGNETIC MATERIALS

== 5. Origin of Magnetism & Fundamental Definitions

Magnetic dipoles in materials arise at the subatomic level from two electron motions:
1. *Orbital Motion:* Electron revolution around nucleus generates orbital magnetic dipole moment ($mu_l$).
2. *Electron Spin:* Electron self-spin generates spin magnetic dipole moment ($mu_s$).
The fundamental quantum unit of magnetic dipole moment is the *Bohr Magneton ($mu_B$)*:
$ mu_B = frac(e h, 4 pi m_e) = 9.274 times 10^(-24) "A m"^2 " or " "J/Tesla" $

=== 5.1 Magnetic Field Quantities
- *Magnetic Induction ($B$):* Total flux density ($"Tesla" = "Wb/m"^2$).
- *Magnetic Field Intensity ($H$):* Applied magnetizing force ($"A/m"$).
- *Magnetization ($M$):* Net magnetic dipole moment per unit volume ($"A/m"$).
- *Magnetic Susceptibility ($chi$):* Ratio of induced magnetization to applied field:
  $ chi = frac(M, H) $
- *Relative Permeability ($mu_r$):* $B = mu_0 (H + M) = mu_0 mu_r H ==> mu_r = 1 + chi$.

#v(2mm)

== 6. The Five Classes of Magnetic Materials

#align(center)[
  #image("figures/m3_spin_alignments.png", width: 85%) \
  #text(size: 8pt, style: "italic", fill: rgb("#64748b"))[Figure 3.4: Atomic spin alignments in Diamagnetic, Paramagnetic, Ferromagnetic, Antiferromagnetic, and Ferrimagnetic materials.]
]

#table(
  columns: (1.5fr, 1.8fr, 2.5fr, 2.2fr, 2fr),
  fill: (x, y) => if y == 0 { rgb("#f1f5f9") } else { none },
  align: (center, center, left, left, left),
  stroke: 0.5pt + rgb("#cbd5e1"),
  [#text(weight: "bold")[Type]],
  [#text(weight: "bold")[Spin Alignment]],
  [#text(weight: "bold")[Susceptibility ($chi$)]],
  [#text(weight: "bold")[Temp. Dependence]],
  [#text(weight: "bold")[Examples]],
  [Diamagnetic], [Zero permanent dipoles], [Small, negative ($-10^(-5)$)], [Independent of $T$], [$B i, C u, A u, N a C l, H_2 O$],
  [Paramagnetic], [Random thermal dipoles], [Small, positive ($+10^(-4)$)], [Curie's Law: $chi = C / T$], [$A l, P t, M n, C u S O_4$],
  [Ferromagnetic], [Parallel aligned domains], [Very high, positive ($10^3 - 10^6$)], [Curie-Weiss: $chi = C / (T - theta_p)$], [$F e, C o, N i, G d$],
  [Antiferromagnetic], [Antiparallel equal cancel], [Small, positive ($10^(-4)$)], [Peaks at Néel Temp $T_N$], [$M n O, F e O, C r_2 O_3$],
  [Ferrimagnetic], [Antiparallel unequal net], [High, positive ($10^2 - 10^4$)], [Curie Temp transition], [Ferrites ($F e_3 O_4, N i F e_2 O_4$)]
)

#v(2mm)

== 7. Magnetic Hysteresis & Engineering Applications

#align(center)[
  #image("figures/m3_hysteresis_loop.png", width: 70%) \
  #text(size: 8pt, style: "italic", fill: rgb("#64748b"))[Figure 3.5: Magnetic Hysteresis ($B-H$) loop displaying Saturation ($B_s$), Retentivity / Remanence ($B_r$), and Coercivity ($H_c$).]
]

- *Saturation Magnetization ($B_s$):* Condition where all domain magnetic moments are fully aligned with the applied field $H$.
- *Remanence / Retentivity ($B_r$):* Residual magnetic induction remaining inside the material when the applied field $H$ is reduced to zero.
- *Coercivity / Coercive Field ($H_c$):* Reverse magnetic field intensity required to completely demagnetize the material ($B = 0$).
- *Hysteresis Energy Loss ($W_h$):* Work done per unit volume per magnetization cycle, equal to the enclosed area of the $B-H$ hysteresis loop:
  $ W_h = integral B d H $

#table(
  columns: (2fr, 4fr, 4fr),
  fill: (x, y) => if y == 0 { rgb("#f1f5f9") } else { none },
  align: (center, left, left),
  stroke: 0.5pt + rgb("#cbd5e1"),
  [#text(weight: "bold")[Feature]],
  [#text(weight: "bold")[Soft Magnetic Materials]],
  [#text(weight: "bold")[Hard Magnetic Materials]],
  [Hysteresis Loop], [Narrow and tall (small loop area)], [Broad and fat (large loop area)],
  [Coercivity ($H_c$)], [Low ($H_c < 100 "A/m"$); easily demagnetized], [High ($H_c > 10,000 "A/m"$); retains magnetism],
  [Retentivity ($B_r$)], [Moderate to high], [High],
  [Hysteresis Loss], [Low energy dissipation per cycle], [High energy loss],
  [Applications], [Transformer cores, motor stators, electromagnets], [Permanent magnets, hard disk storage media, speakers],
  [Typical Alloys], [Silicon Steel ($3% S i - F e$), Permalloy ($78% N i - F e$)], [Alnico ($A l - N i - C o$), Neodymium ($N d_2 F e_(14) B$)]
)

#v(4mm)

= PART C: NANOMATERIALS

== 8. Nanomaterials: Definition, Size Hierarchy & Quantum Confinement

A *nanomaterial* is defined as any material having at least one physical dimension in the nanoscale regime between $1 "nm"$ and $100 "nm"$ ($1 "nm" = 10^(-9) "m"$).
- *Size Hierarchy Comparison:*
  - Tennis ball: $approx 10^8 "nm"$
  - Red blood cell: $approx 7,000 "nm"$
  - DNA double helix width: $approx 2 "nm"$
  - Water molecule: $approx 0.3 "nm"$

=== 8.1 Localized Surface Plasmon Resonance (LSPR) in Gold & Silver
When electromagnetic radiation illuminates noble metal nanoparticles whose dimensions are smaller than the incident light wavelength, the oscillating electric field drives collective, coherent oscillations of conduction band electrons relative to the positive ion lattice.

#align(center)[
  #grid(
    columns: (1fr, 1.2fr),
    gutter: 10pt,
    image("figures/m3_nano_gold_silver_colors.png", width: 95%),
    image("figures/m3_nano_lspr.png", width: 95%)
  )
  #text(size: 8pt, style: "italic", fill: rgb("#64748b"))[Figure 3.6: (Left) Size- and shape-dependent reflected colors of Gold and Silver nanoparticles dispersed in glass; (Right) Principle of Localized Surface Plasmon Resonance (LSPR).]
]

- *Bulk Gold vs Nano Gold Comparison:*
#table(
  columns: (2fr, 4fr, 4fr),
  fill: (x, y) => if y == 0 { rgb("#f1f5f9") } else { none },
  align: (center, left, left),
  stroke: 0.5pt + rgb("#cbd5e1"),
  [#text(weight: "bold")[Property]],
  [#text(weight: "bold")[Bulk Gold]],
  [#text(weight: "bold")[Nanoscale Gold ($10 - 50 "nm"$)]],
  [Color & Appearance], [Yellow metallic luster], [Ruby red, purple, or blue colloidal dispersions],
  [Melting Point], [$1064 degree "C"$ (constant)], [Depresses sharply to $< 300 degree "C"$ for $2 "nm"$ particles],
  [Chemical Reactivity], [Completely inert noble metal], [Highly reactive heterogeneous catalyst ($C O$ oxidation)],
  [Optical Transition], [Continuous interband absorption], [Discrete Localized Surface Plasmon Resonance (LSPR)]
)

=== 8.2 Surface-to-Volume Ratio Scaling
As bulk materials are subdivided into nanoscale clusters, the fraction of atoms residing on the surface increases exponentially compared to bulk interior atoms.

#align(center)[
  #image("figures/m3_nano_surface_ratio.png", width: 75%) \
  #text(size: 8pt, style: "italic", fill: rgb("#64748b"))[Figure 3.7: Geometric surface-to-volume ratio scaling: a $1 "m"$ cube ($"Area" = 6 "m"^2$) subdivided into $27$ cubes exposes $"Area" = 18 "m"^2$.]
]

$ "Specific Surface Area" = frac("Surface Area", "Volume") = frac(6 L^2, L^3) = frac(6, L) $
When $L$ decreases from $1 "mm"$ ($10^(-3) "m"$) to $10 "nm"$ ($10^(-8) "m"$), the specific surface area increases by a factor of $10^5$. High surface area gives nanomaterials extraordinary chemical reactivity, catalytic activity, and adsorption capacity.

=== 8.3 Classification of Nanomaterials
#align(center)[
  #image("figures/m3_nano_categories.png", width: 85%) \
  #text(size: 8pt, style: "italic", fill: rgb("#64748b"))[Figure 3.8: Classification hierarchy of Nanomaterials: Carbon-based, Inorganic (metal oxides, metals, quantum dots), and Polymeric materials.]
]

1. *Zero-Dimensional (0D):* All three dimensions $< 100 "nm"$ (Quantum dots, nanoparticles, fullerenes).
2. *One-Dimensional (1D):* Two dimensions $< 100 "nm"$, one dimension macroscale (Carbon nanotubes, nanowires, nanorods).
3. *Two-Dimensional (2D):* One dimension $< 100 "nm"$, two dimensions macroscale (Graphene sheets, $M o S_2$ monolayers, nanocoatings).
4. *Three-Dimensional (3D):* Bulk materials composed of nanoscale structural units (Nanocomposites, polycrystalline materials with nanoscale grain boundaries).

=== 8.4 Quantum Dots (QDs)
*Quantum Dots* are semiconductor nanocrystals ($< 10 "nm"$) exhibiting three-dimensional quantum confinement. When the physical particle radius is smaller than the bulk Bohr exciton radius ($r < a_B$), energy levels discretize and the effective bandgap expands according to the Brus equation:
$ E_g^("QD") = E_g^("bulk") + frac(h^2, 8 R^2) (frac(1, m_e^*) + frac(1, m_h^*)) - frac(1.786 e^2, 4 pi epsilon_0 epsilon_r R) $

#align(center)[
  #grid(
    columns: (1fr, 1.2fr),
    gutter: 10pt,
    image("figures/m3_nano_quantum_dots.png", width: 95%),
    image("figures/m3_nano_qd_emission.png", width: 95%)
  )
  #text(size: 8pt, style: "italic", fill: rgb("#64748b"))[Figure 3.9: (Left) Quantum dots TEM image, vial fluorescence under UV light, and applications in cancer imaging and sensing; (Right) Size-dependent emission spectra and bandgap tuning.]
]

- *Size-Tunable Photoluminescence:*
  - Large QDs ($approx 6 "nm"$): Narrower bandgap $==>$ Emit lower-energy *red light* ($approx 650 "nm"$).
  - Small QDs ($approx 2 "nm"$): Wider bandgap $==>$ Emit higher-energy *blue light* ($approx 450 "nm"$).
- *Synthesis Methods:* (1) Organometallic hot-injection, (2) Hydrothermal / solvothermal route, (3) Microemulsion synthesis, (4) Sol-Gel method.
- *High-Tech Applications:* QLED displays, biological cancer cell fluorescent biomarkers, targeted drug delivery tracking, and multi-junction solar cells.

#v(2mm)

== 9. Synthesis of Nanomaterials: Top-Down vs Bottom-Up

#align(center)[
  #image("figures/m3_nano_bottomup_topdown.png", width: 80%) \
  #text(size: 8pt, style: "italic", fill: rgb("#64748b"))[Figure 3.10: Schematic comparison between Top-Down (mechanical breakdown) and Bottom-Up (atomic assembly) nanoparticle synthesis.]
]

=== 9.1 Top-Down Approach: High-Energy Ball Milling
*High-Energy Ball Milling* is a physical mechanical attrition technique where bulk powder particles are subjected to repetitive high-energy compressive impact, shear, and friction from hardened ceramic or steel grinding balls.

#align(center)[
  #image("figures/m3_nano_ball_milling.png", width: 75%) \
  #text(size: 8pt, style: "italic", fill: rgb("#64748b"))[Figure 3.11: Principle of mechanical ball milling showing compressive impact between colliding balls fracturing $50 mu "m"$ powder into nanoparticles.]
]

- *Mechanism:* Kinetic energy of colliding balls causes severe plastic deformation, work hardening, lattice dislocation multiplication, and brittle micro-fracturing of coarse particles ($50 mu "m"$) down to nanoscale grains ($5 - 20 "nm"$).
- *Industrial Equipment:* SPEX shaker mills, planetary ball mills, and attritor mills.
- *Advantages:* Low cost, scalable for bulk industrial tons, applicable to metals, ceramics, and nanocomposites.
- *Disadvantages:* Ball wear introduces iron/tungsten impurities; particle size distribution is broad.

=== 9.2 Bottom-Up Approach: The Sol-Gel Process
The *Sol-Gel method* is a wet chemical solution synthesis technique based on controlled hydrolysis and condensation of metal alkoxide precursors in liquid solution.

#align(center)[
  #grid(
    columns: (1fr, 1fr),
    gutter: 10pt,
    image("figures/m3_nano_sol_gel_flow.png", width: 95%),
    image("figures/m3_nano_sol_gel_chemistry.png", width: 95%)
  )
  #text(size: 8pt, style: "italic", fill: rgb("#64748b"))[Figure 3.12: (Left) Complete flowchart of Sol-Gel synthesis showing routes to coatings, xerogel, aerogel, and ceramics; (Right) Chemical hydrolysis and condensation mechanisms forming siloxane networks.]
]

- *Precursor Chemistry (Tetraethyl Orthosilicate, TEOS):*
  1. *Hydrolysis Reaction:*
     $ S i (O C_2 H_5)_4 + 4 H_2 O arrow.r^(H^+ " / " O H^-) S i (O H)_4 + 4 C_2 H_5 O H $
  2. *Condensation Polymerization:*
     - Water Condensation: $-S i - O H + H O - S i - arrow.r -S i - O - S i - + H_2 O$
     - Alcohol Condensation: $-S i - O H + C_2 H_5 O - S i - arrow.r -S i - O - S i - + C_2 H_5 O H$
- *The 6 Successive Processing Stages:*
  1. *Sol Formation:* Homogeneous colloidal dispersion of discrete particles ($1 - 100 "nm"$) suspended in alcohol/water.
  2. *Gelation:* Polymerization links sol clusters into an interconnected 3D continuous solid-liquid gel network.
  3. *Aging (Syneresis):* Gel remains immersed in liquid; cross-linking strengthens network and expels pore liquid.
  4. *Drying:*
     - *Thermal Evaporation:* Capillary forces collapse delicate pores, producing a dense monolith called *xerogel*.
     - *Supercritical Extraction ($C O_2$):* Zero surface tension prevents pore collapse, producing an ultra-low density *aerogel* ($> 95%$ porosity).
  5. *Dehydration / Calcination:* Monolith fired at $400 - 800 degree "C"$ eliminates residual organic and $-O H$ groups.
  6. *Densification:* High-temperature firing above $800 degree "C"$ collapses pores to yield dense ceramics or glassy thin films.

#v(4mm)

= PART D: LIQUID COOLANTS

== 10. Liquid Cooling Principles and Engineering Selection Criteria

With the rapid miniaturization of electronic devices, microprocessors and power electronics generate extreme heat fluxes reaching up to $1000 "W/cm"^2$. Liquid cooling circulates a fluid through cold plates in direct contact with heat sources to absorb thermal energy and reject it via radiators or heat exchangers.

#align(center)[
  #image("figures/m3_coolants_radiator_system.png", width: 85%) \
  #text(size: 8pt, style: "italic", fill: rgb("#64748b"))[Figure 3.13: (Left) Automotive liquid cooling loop with radiator, water pump, and thermostat; (Right) Miniature electronics liquid cold plate loop with heat exchanger.]
]

=== 10.1 Essential Engineering Requirements for Liquid Coolants
1. *Thermophysical Properties:* High thermal conductivity ($k$), high specific heat capacity ($C_p$), high latent heat of vaporization, low dynamic viscosity ($mu$, to minimize pump power), and optimal surface tension.
2. *Electrical Non-Conductivity:* Water and aqueous brines are electrically conductive. Spills or leaks cause catastrophic short circuits. Dielectric, non-conductive fluids are mandatory for direct immersion cooling.
3. *Flammability Safety:* Coolants for high-power electronics must be strictly non-flammable. Any liquid with a flash point $< 93 degree "C"$ is classified as flammable (ethanol, methanol, benzene are prohibited). Perfluorocarbons (PFC) and Hydrofluoroethers (HFE) are non-flammable.
4. *Biological Non-Toxicity:* Fluid must be safe for human operators. Fluorocarbons and HFEs exhibit very low toxicity compared to toxic ethylene glycol.
5. *Material Compatibility:* Coolants must be non-corrosive to wetted metals. Copper and aluminium are preferred for cold plates due to high thermal conductivities ($k_(C u) approx 400 "W/m K"$, $k_(A l) approx 237 "W/m K"$).
6. *Environmental Impact:* Zero Ozone Depletion Potential ($"ODP" = 0$) and low Global Warming Potential ($"GWP"$). While PFCs have zero ODP, they possess high GWP; modern HFEs offer both zero ODP and low GWP.
7. *Economic Feasibility:* Balanced cost for bulk data center installations.

=== 10.2 Classification of Liquid Coolants
#align(center)[
  #image("figures/m3_coolants_classification.png", width: 85%) \
  #text(size: 8pt, style: "italic", fill: rgb("#64748b"))[Figure 3.14: Comprehensive classification flowchart of Dielectric Coolants: Aromatics, Aliphatics, Fluorocarbons (HFE and PFC), and Silicones.]
]

1. *Aqueous Coolants (Water & Brines):*
   - Water exhibits superior thermal conductivity ($0.6 "W/m K"$), high specific heat ($4.184 "J/g K"$), and low viscosity.
   - *Limitation:* Freezes at $0 degree "C"$ and boils at $100 degree "C"$. Salt solutions ($N a C l, C a C l_2$) lower freezing point but are severely corrosive to metals.
2. *Deionized (DI) Water:*
   - Demineralized water is initially non-conductive and less corrosive than tap water.
   - *Limitation:* Absorbs atmospheric $C O_2$ and oxygen, generating corrosive carbonic acid.
   - *Corrosion Inhibitors:* Chemical additives must be incorporated: *Phosphates*, *Tolytriazole* (copper passivator), and *2-ethylhexanoic acid*.
3. *Water-Glycol Solutions (WEG / WPG):*
   - Blends of water with Ethylene Glycol (WEG) or Propylene Glycol (WPG) in $50:50$ ratio.
   - Lowers freezing point down to $-40 degree "C"$ (antifreeze) and elevates boiling point to $> 106 degree "C"$. High thermal stability; widely used in automotive radiators and HVAC.
4. *Water Potassium Formate / Acetate Solutions:*
   - Organic salt solutions with freezing points down to $-70 degree "C"$.
   - Significantly less corrosive than inorganic brines; biodegradable; utilized in food, beverage, and pharmaceutical chillers.
5. *Dielectric Coolants for Immersion & Direct-to-Chip Cooling:*
   - *Aromatics:* Diethylbenzene, toluene (flammable; specialized industrial use).
   - *Aliphatics:* Highly refined paraffinic oils, isoparaffins, and synthetic Polyalphaolefins (PAO). Low volatility, high dielectric strength.
   - *Fluorocarbons:*
     - *Hydrofluoroethers (HFE):* HFE-7000, HFE-7100, HFE-7200, HFE-7300. Non-flammable, non-toxic, zero ODP, low GWP, low viscosity. Excellent for two-phase immersion cooling of server racks.
     - *Perfluorocarbons (PFC):* FC-70, FC-72, FC-87, FC-3283. Chemically inert, extreme dielectric breakdown voltage, zero ODP, but high atmospheric persistence.
   - *Silicones:* Syltherm XLT, Polydimethylsiloxane (PDMS), silicone oils. Extreme temperature range ($-100 degree "C"$ to $+260 degree "C"$).
6. *Nanofluids as Advanced Coolants:*
   - Engineered colloidal suspensions of nanoparticles ($A l_2 O_3, C u O, T i O_2$, carbon nanotubes, graphene) in base fluids (water, ethylene glycol).
   - *Anomalous Thermal Conductivity Enhancement:* Nanoparticles possess thermal conductivities 2 to 3 orders of magnitude higher than liquids ($k_(C u) = 400 "W/m K"$ vs $k_("water") = 0.6 "W/m K"$). Brownian motion and liquid-solid interface layering dramatically enhance heat transfer coefficients without clogging microchannels.

#v(4mm)

= OFFICIAL VIT CAT & FAT EXAMINATION SOLVED PROBLEMS

#rect(width: 100%, fill: rgb("#f1f5f9"), stroke: 0.5pt + rgb("#cbd5e1"), radius: 4pt, inset: 6pt)[
  #text(weight: "bold", fill: rgb("#1e3a8a"), size: 9pt)[CAT-2 & FAT Question Archetype 1: Superconductivity & Critical Magnetic Field (10 Marks)]
]
*Problem:* \
(a) Define the Meissner effect. Show mathematically that a superconductor exhibits perfect diamagnetism ($chi = -1$) and zero magnetic induction ($B = 0$). \
(b) A superconducting lead specimen has a critical temperature $T_c = 7.19 "K"$ and a critical magnetic field $H_0 = 0.0803 "Tesla"$ at $0 "K"$. Calculate the critical magnetic field $H_c$ at $4.2 "K"$ (boiling point of liquid helium).

*Detailed Solution:* \
*Part (a):* \
1. *Definition:* The Meissner effect is the complete expulsion of magnetic flux lines from the interior of a superconducting material when it is cooled below its critical temperature ($T_c$) in the presence of an external magnetic field. \
2. *Mathematical Proof:* \
Magnetic induction inside any material is given by:
$ B = mu_0 (H + M) $
Where $mu_0$ is magnetic permeability of vacuum, $H$ is applied magnetic field intensity, and $M$ is magnetization. \
Inside a superconductor, magnetic flux is completely excluded: $B = 0$.
$ mu_0 (H + M) = 0 ==> H + M = 0 ==> M = - H $
Magnetic susceptibility is defined as $chi = frac(M, H)$:
$ chi = frac(-H, H) = bold(- 1.0) $
Relative permeability $mu_r$ is:
$ mu_r = 1 + chi = 1 + (-1) = bold(0) $
*Conclusion:* Susceptibility $chi = -1$ rigorously demonstrates that superconductors are perfect diamagnets.

*Part (b):* \
According to Tuyn's parabolic empirical law for critical magnetic field:
$ H_c(T) = H_0 [1 - (frac(T, T_c))^2] $
Given values:
- $H_0 = 0.0803 "T"$
- $T_c = 7.19 "K"$
- $T = 4.2 "K"$

Substitute the values:
$ frac(T, T_c) = frac(4.2, 7.19) approx 0.58414 $
$ (frac(T, T_c))^2 = (0.58414)^2 approx 0.34122 $
$ 1 - (frac(T, T_c))^2 = 1 - 0.34122 = 0.65878 $
$ H_c(4.2 "K") = 0.0803 times 0.65878 = bold(0.0529 "Tesla") $
#box(stroke: 1pt + rgb("#15803d"), inset: 4pt, radius: 2pt)[*Final Answer:* $H_c(4.2 "K") = 0.0529 "Tesla" = 52.9 "mT"$]

#v(3mm)

#rect(width: 100%, fill: rgb("#f1f5f9"), stroke: 0.5pt + rgb("#cbd5e1"), radius: 4pt, inset: 6pt)[
  #text(weight: "bold", fill: rgb("#1e3a8a"), size: 9pt)[CAT-2 & FAT Question Archetype 2: Magnetic Materials & Hysteresis Comparative Analysis (10 Marks)]
]
*Problem:* \
(a) Distinguish between Ferromagnetic, Antiferromagnetic, and Ferrimagnetic materials based on their atomic magnetic dipole spin alignments, temperature dependence of susceptibility, and giving two engineering examples of each. \
(b) Compare Soft and Hard magnetic materials with respect to their hysteresis loop area, retentivity ($B_r$), coercivity ($H_c$), and identify which is used in transformer cores versus permanent magnets.

*Detailed Solution:* \
*Part (a):* \
#table(
  columns: (1.5fr, 2.5fr, 2.5fr, 2fr),
  fill: (x, y) => if y == 0 { rgb("#f1f5f9") } else { none },
  align: (center, left, left, left),
  stroke: 0.5pt + rgb("#cbd5e1"),
  [#text(weight: "bold")[Property]],
  [#text(weight: "bold")[Ferromagnetic]],
  [#text(weight: "bold")[Antiferromagnetic]],
  [#text(weight: "bold")[Ferrimagnetic]],
  [Spin Alignment], [Parallel alignment in domains ($arrow.t arrow.t arrow.t arrow.t$)], [Equal magnitude antiparallel alignment ($arrow.t arrow.b arrow.t arrow.b$)], [Unequal magnitude antiparallel alignment ($arrow.t arrow.b bold(arrow.t) arrow.b$)],
  [Net Dipole Moment], [Very large permanent moment], [Strictly zero ($M = 0$)], [Moderate permanent net moment],
  [Susceptibility $chi$], [Very high, positive ($chi = 10^3 - 10^6$)], [Small and positive ($chi approx 10^(-4) - 10^(-2)$)], [Large and positive ($chi approx 10^2 - 10^4$)],
  [Temperature Law], [Curie-Weiss Law: $chi = frac(C, T - theta_p)$ above $T_C$], [Increases up to Néel temperature $T_N$, then decreases: $chi = frac(C, T + theta)$], [Decreases above Curie temperature $T_C$ to paramagnetic behavior],
  [Examples], [$F e, C o, N i, N d_2 F e_(14) B$], [$M n O, F e O, C r_2 O_3, N i O$], [Magnetite ($F e_3 O_4$), Ferrites ($N i Z n F e_2 O_4$)]
)

*Part (b): Soft vs Hard Magnetic Materials:*
#table(
  columns: (1.8fr, 3.5fr, 3.5fr),
  fill: (x, y) => if y == 0 { rgb("#f1f5f9") } else { none },
  align: (center, left, left),
  stroke: 0.5pt + rgb("#cbd5e1"),
  [#text(weight: "bold")[Parameter]],
  [#text(weight: "bold")[Soft Magnetic Materials]],
  [#text(weight: "bold")[Hard Magnetic Materials]],
  [Hysteresis Loop], [Narrow and tall (small loop area)], [Broad and fat (large loop area)],
  [Hysteresis Energy Loss], [Extremely low loss per cycle ($< 100 "J/m"^3$)], [Very high energy dissipation per cycle],
  [Coercivity ($H_c$)], [Very low coercivity ($H_c < 100 "A/m"$), easy to demagnetize], [High coercivity ($H_c > 10,000 "A/m"$), difficult to demagnetize],
  [Retentivity ($B_r$)], [Moderate to high retentivity], [High retentivity],
  [Domain Wall Mobility], [High mobility; domain walls move easily with minimal energy], [Immobilized; pinning sites impede domain wall motion],
  [Eddy Current Loss], [Low (silicon steel laminated sheets)], [High electrical resistivity preferred],
  [Typical Applications], [Transformer cores, electromagnets, stator/rotor laminations, inductor cores], [Permanent magnets for brushless DC motors, loudspeakers, hard disk platters],
  [Standard Materials], [Silicon Steel ($3% S i - F e$), Permalloy ($78% N i - 22% F e$), Soft Ferrites], [Alnico ($A l - N i - C o$), Neodymium-Iron-Boron ($N d_2 F e_(14) B$), SmCo]
)

#v(3mm)

#rect(width: 100%, fill: rgb("#f1f5f9"), stroke: 0.5pt + rgb("#cbd5e1"), radius: 4pt, inset: 6pt)[
  #text(weight: "bold", fill: rgb("#1e3a8a"), size: 9pt)[CAT-2 & FAT Question Archetype 3: Nanomaterials Synthesis, LSPR & Sol-Gel Flowchart (10 Marks)]
]
*Problem:* \
(a) Explain Localized Surface Plasmon Resonance (LSPR). Why does gold change color from yellow (bulk) to ruby red and purple when reduced to nanoscale dimensions? \
(b) Detail the Sol-Gel process for synthesizing silica nanoparticles. Write balanced chemical reactions for the hydrolysis and condensation of Tetraethyl Orthosilicate (TEOS) and draw the complete stage flowchart.

*Detailed Solution:* \
*Part (a):* \
1. *Origin of LSPR:* In noble metal nanoparticles (Au, Ag), conduction electrons are spatially confined within dimensions smaller than the mean free path of electrons ($< 50 "nm"$). When illuminated by incident electromagnetic light, the electric field of light drives collective, coherent oscillations of the conduction electron cloud relative to the positive ionic lattice. \
2. *Resonance Condition:* When the frequency of incident photon matches the natural oscillation frequency of the electron cloud, resonance occurs. This generates an intense extinction band (absorption + scattering) known as *Localized Surface Plasmon Resonance (LSPR)*:
$ lambda_("LSPR") = frac(2 pi c, omega_p) sqrt(2 epsilon_m + 1) $
3. *Color Transition Mechanism:*
   - *Bulk Gold:* Possesses continuous electron energy bands. Interband transitions ($5d ==> 6s$) absorb blue/green light, reflecting yellow and red wavelengths, appearing metallic gold.
   - *Nanoscale Gold ($10 - 30 "nm"$):* LSPR resonance occurs sharply in the green region ($lambda_("max") approx 520 "nm"$). Green light is intensely absorbed, while unabsorbed red light is transmitted/reflected, producing a brilliant *ruby red* colloidal sol.
   - *Larger Nanoparticles ($50 - 100 "nm"$ or Nanorods):* The resonance wavelength red-shifts towards the red region ($lambda_("max") > 650 "nm"$), absorbing red light and reflecting blue and *purple*.

*Part (b): Sol-Gel Synthesis of Silica Nanoparticles:* \
1. *Precursor:* Tetraethyl Orthosilicate, $S i (O C_2 H_5)_4$ (TEOS), dissolved in ethanol with water and an acid/base catalyst ($N H_4 O H$). \
2. *Stage 1: Hydrolysis Reaction:*
$ S i (O C_2 H_5)_4 + 4 H_2 O arrow.r^(N H_4 O H) S i (O H)_4 + 4 C_2 H_5 O H $
Water molecules replace ethoxy groups ($-O C_2 H_5$) with silanol groups ($-S i - O H$).

3. *Stage 2: Condensation Polymerization:*
   - *Water Condensation:*
     $ -S i - O H + H O - S i - arrow.r -S i - O - S i - + H_2 O $
   - *Alcohol Condensation:*
     $ -S i - O H + C_2 H_5 O - S i - arrow.r -S i - O - S i - + C_2 H_5 O H $
Cross-linking builds a 3D siloxane network ($-S i - O - S i-$), transitioning from a liquid sol of colloidal nanoparticles to an interconnected solid-liquid gel network.

4. *Drying & Densification:*
   - *Air/Thermal Drying:* Capillary forces collapse pores $==>$ *Xerogel* (dense monolith).
   - *Supercritical Extraction ($C O_2$):* Zero surface tension prevents pore collapse $==>$ *Aerogel* ($95 - 99%$ porosity).
   - *Calcination at $800 degree "C"$:* Thermal elimination of residual silanol groups to produce pure, crystalline silica ($S i O_2$) nanoparticles.

#v(3mm)

#rect(width: 100%, fill: rgb("#f1f5f9"), stroke: 0.5pt + rgb("#cbd5e1"), radius: 4pt, inset: 6pt)[
  #text(weight: "bold", fill: rgb("#1e3a8a"), size: 9pt)[CAT-2 & FAT Question Archetype 4: Liquid Coolants Selection for Electronics Cooling (5 Marks)]
]
*Problem:* \
A high-performance computing (HPC) data center processor generates a heat flux of $300 "W/cm"^2$. Evaluate whether Deionized Water, Water-Ethylene Glycol (50:50), or a Hydrofluoroether (HFE-7100) should be used for: \
(i) Direct two-phase immersion cooling of uncased electronics. \
(ii) Closed-loop cold-plate cooling in an sub-zero outdoor climate ($-20 degree "C"$). \
Justify based on thermal conductivity, electrical conductivity, freezing point, and flammability.

*Detailed Solution:* \
*Part (i): Direct Two-Phase Immersion Cooling:* \
- *Selected Coolant:* *Hydrofluoroether (HFE-7100)*. \
- *Justification:* In direct immersion cooling, the fluid is in direct physical and electrical contact with live electronic components, chips, and circuit traces.
  - *Electrical Conductivity:* Water and Water-Ethylene Glycol possess ionic conductivities ($sigma > 10^(-4) "S/m"$), causing instant catastrophic electrical short circuits. In contrast, HFE-7100 is a *dielectric liquid* with zero electrical conductivity and high dielectric breakdown voltage ($> 40 "kV"$).
  - *Boiling Point & Two-Phase Cooling:* HFE-7100 boils at $61 degree "C"$, an ideal temperature for two-phase immersion cooling where latent heat of vaporization absorbs massive heat at constant temperature.
  - *Safety:* HFE-7100 is non-flammable, non-toxic, and has zero ozone depletion potential ($"ODP" = 0$).

*Part (ii): Closed-Loop Cold Plate in Sub-Zero Climate ($-20 degree "C"$):* \
- *Selected Coolant:* *Water-Ethylene Glycol (WEG 50:50)*. \
- *Justification:*
  - *Freezing Protection:* Pure deionized water freezes at $0 degree "C"$, which would rupture cooling pipes and cold plates at $-20 degree "C"$. A $50:50$ WEG mixture depresses the freezing point to $-37 degree "C"$, preventing freezing.
  - *Thermal Performance:* WEG provides much higher thermal conductivity ($k approx 0.40 "W/m K"$) and heat capacity ($C_p approx 3.3 "J/g K"$) than dielectric fluids ($k_(H F E) approx 0.07 "W/m K"$), ensuring superior convective heat removal through isolated copper cold plates where electrical contact is prevented by tube walls.
