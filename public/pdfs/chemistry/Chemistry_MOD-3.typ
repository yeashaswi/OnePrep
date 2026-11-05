
#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.2cm, right: 2.2cm),
  header: context {
    if here().page() > 1 {
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: luma(90))[VIT BACHY101 --- Module 3: Functional Materials]],
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
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT BACHY101 --- Module 3: Functional Materials] \
  #v(2mm)
  #text(size: 15pt, weight: "black")[MODULE 3: FUNCTIONAL MATERIALS] \
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[(CO: 2)] \
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Complete Study Textbook, Step-by-Step Derivations & VIT FAT Question Bank] \
  #text(size: 9pt, fill: luma(100))[Aligned with Official VIT BACHY101 Course Page Syllabus, Question Bank, and Past FAT Papers]
]

#v(3mm)

#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 9pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Textbook (Official VIT Syllabus - All 10 Topics):]
  (1) Electrical materials: Ohm's law and resistivity, (2) Classification: metals and semiconductors, (3) Intrinsic and extrinsic semiconductors, superconductors, (4) Magnetic materials: para and dia, (5) Ferromagnetic materials, (6) Antiferromagnetism and applications in storage devices, (7) Liquid cooling: types of coolants, thermal conductivity, applications, (8) Nanomaterials introduction, (9) Top-down and bottom-up synthesis, and (10) Bulk vs. nano (gold), quantum dots.
]

#v(2mm)
= VIT FAT Exam Blueprint & Master Formula Sheet

Module 3 carries *15 to 20 marks* in BACHY101 FAT papers:
1. *Question Type A (10 Marks):* Band Theory of solids (metals, semiconductors, insulators) and derivation of conductivity $sigma = n e mu_e + p e mu_h$ for intrinsic vs extrinsic semiconductors.
2. *Question Type B (10 Marks):* Magnetic classification (dia, para, ferro, antiferro, ferri) with spin alignment diagrams, hysteresis curve (coercivity, remanence), and hard vs soft magnetic storage devices.
3. *Question Type C (10 Marks):* Nanotechnology: Top-down vs bottom-up synthesis, quantum confinement in quantum dots, and surface plasmon resonance in nano gold vs bulk gold.

#table(
  columns: (1.5fr, 2fr, 2fr),
  inset: 6pt,
  stroke: 0.4pt + luma(180),
  align: (left, left, left),
  [*Concept*], [*Governing Equation / Relation*], [*VIT Exam Key Insight*],
  [Ohm's Law & Conductivity], [$J = sigma E, quad sigma = 1 / rho = n e mu$], [Conductivity decreases with T in metals; increases exponentially with T in semiconductors.],
  [Intrinsic Carrier Concentration], [$n_i = p_i = sqrt(N_c N_v) e^(-E_g / (2 k_B T))$], [Fermi level lies exactly at mid-gap: $E_F = (E_c + E_v)/2$.],
  [Curie-Weiss Law (Ferro)], [$chi = C / (T - theta) quad (T > T_C)$], [Above Curie temperature $T_C$, ferromagnets become paramagnetic.],
  [Meissner Effect (Superconductors)], [$B = mu_0 (H + M) = 0 arrow.r.double chi = -1$], [Superconductors exhibit perfect diamagnetism below $T_c$.],
  [Thermal Conductivity], [$q = -k A (d T) / (d x)$ (Fourier's Law)], [Nanofluids suspend metal/oxide nanoparticles to boost heat transfer by 40%.],
  [Brus Equation (Quantum Dots)], [$E_g^"nano" = E_g^"bulk" + (h^2) / (8 m^* R^2) - (1.8 e^2) / (4 pi epsilon R)$], [Bandgap widens as nanoparticle radius $R$ decreases (blue shift).]
)

= Electrical & Semiconductor Materials

== Band Theory of Solids & Ohm's Law
In isolated atoms, electrons occupy discrete atomic orbitals. In crystalline solids, atomic orbitals overlap to form continuous energy bands:
- *Valence Band (VB):* Highest occupied band containing valence electrons.
- *Conduction Band (CB):* Lowest empty or partially filled band.
- *Forbidden Bandgap ($E_g$):* Energy separation between VB maximum and CB minimum.
1. *Metals (Conductors):* VB and CB overlap ($E_g = 0$) or CB is partially filled. Resistivity increases linearly with temperature due to increased electron-phonon scattering.
2. *Semiconductors:* Moderate bandgap ($E_g approx 0.7 "to" 2.0 "eV"$). At $0 "K"$, they are insulators; at room temperature, thermal excitation excites electrons across $E_g$.
3. *Insulators:* Extremely wide bandgap ($E_g > 5.0 "eV"$).

== Extrinsic Semiconductors & Superconductors
- *n-type Semiconductor:* Silicon ($"Group IV"$) doped with pentavalent donors (P, As, Sb). Extra electron occupies donor energy level $E_d$ right below $E_c$. Majority carriers: electrons ($n approx N_d$).
- *p-type Semiconductor:* Silicon doped with trivalent acceptors (B, Al, Ga). Acceptor level $E_a$ lies right above $E_v$. Majority carriers: holes ($p approx N_a$).
- *Superconductivity:* Phenomenon where electrical resistance vanishes completely ($rho = 0$) below a critical temperature $T_c$. In the superconducting state, magnetic field lines are completely expelled from the bulk interior (*Meissner Effect*).

= Magnetic Materials & Data Storage

== Classification by Magnetic Dipole Ordering
1. *Diamagnetism:* Atoms possess no permanent magnetic dipole moment. When exposed to external magnetic field $H$, induced magnetic moments oppose $H$ ($chi < 0$, small and temperature independent). Examples: $"Bi", "Cu", H_2 O$.
2. *Paramagnetism:* Permanent atomic magnetic moments exist due to unpaired electrons, but are randomly oriented by thermal agitation. External $H$ aligns dipoles ($chi > 0$, obeys Curie's Law: $chi = C / T$). Examples: $"Al", O_2, "Ti"$.
3. *Ferromagnetism:* Permanent dipoles exhibit spontaneous parallel alignment within localized microscopic regions called *magnetic domains* via quantum mechanical exchange interaction. Large positive susceptibility ($chi >> 1$). Examples: $"Fe", "Co", "Ni"$.
4. *Antiferromagnetism:* Adjacent magnetic dipoles align anti-parallel with equal magnitude, resulting in zero net spontaneous magnetization below Neel temperature $T_N$. Example: $"MnO", "FeO"$.
5. *Ferrimagnetism:* Adjacent dipoles align anti-parallel with unequal magnitudes, yielding net spontaneous magnetization. Examples: Ferrites ($"Fe"_3 "O"_4, "NiFe"_2 "O"_4$) used in high-frequency transformer cores and microwave circulators.

== Hysteresis Loop & Magnetic Recording
When a ferromagnet is cycled through a magnetic field:
- *Remanence ($B_r$):* Residual magnetic induction remaining when $H$ is reduced to zero.
- *Coercivity ($H_c$):* Reverse magnetic field required to demagnetize the material to zero.
- *Hard Magnetic Materials:* High coercivity and high remanence with broad hysteresis loops (e.g., Alnico, NdFeB). Used in permanent magnets and magnetic hard disk drive (HDD) recording platters.
- *Soft Magnetic Materials:* Low coercivity and narrow hysteresis loops with minimal hysteresis energy loss (e.g., Silicon steel, Permalloy). Used in transformer cores and motor stators.

= Nanomaterials & Quantum Confinement

== Synthesis: Top-Down vs. Bottom-Up
- *Top-Down Approaches:* Bulk macroscopic material is progressively reduced down to nanoscale dimensions via mechanical or chemical etching (e.g., High-energy ball milling, photolithography, electron beam lithography).
- *Bottom-Up Approaches:* Nanostructures are built atom-by-atom or molecule-by-molecule via controlled chemical assembly (e.g., Sol-gel processing, chemical vapor deposition [CVD], hydrothermal synthesis).

== Bulk vs. Nano Gold & Quantum Dots
- *Surface-to-Volume Ratio:* As particle diameter drops from $100 "nm"$ to $2 "nm"$, the proportion of surface atoms surges from $1%$ to over $50%$, drastically lowering the melting point and boosting catalytic activity.
- *Surface Plasmon Resonance (SPR):* Bulk gold is shiny yellow and chemically inert. Gold nanoparticles ($10 - 30 "nm"$) exhibit collective oscillation of conduction electrons in resonance with visible light, absorbing green-blue photons and displaying intense ruby-red color (used in biosensors and lateral flow assays).
- *Quantum Dots:* Semiconductor nanocrystals ($2 - 10 "nm"$) exhibiting 3D quantum confinement. Because particle size is smaller than the exciton Bohr radius, continuous energy bands collapse into discrete atom-like energy levels. The emission wavelength can be precisely tuned across the entire spectrum by tuning crystal size.
