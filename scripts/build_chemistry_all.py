import subprocess
import os

CHEM_DIR = "/Users/yashaswivunnam/Desktop/Calculus/FATkilla/public/pdfs/chemistry"
os.makedirs(CHEM_DIR, exist_ok=True)

def compile_typ(name, content):
    typ_path = os.path.join(CHEM_DIR, f"{name}.typ")
    pdf_path = os.path.join(CHEM_DIR, f"{name}.pdf")
    with open(typ_path, "w", encoding="utf-8") as f:
        f.write(content)
    
    cmd = f'export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:$PATH"; typst compile "{typ_path}" "{pdf_path}"'
    res = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    if res.returncode != 0:
        print(f"Error compiling {name}: {res.stderr}")
        return False
    else:
        print(f"Successfully compiled {name}.pdf")
        return True

def get_header(mod_num, title, co, short_title):
    return f"""
#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.2cm, right: 2.2cm),
  header: context {{
    if here().page() > 1 {{
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: luma(90))[VIT BACHY101 --- Module {mod_num}: {short_title}]],
        align(right)[#text(size: 8.5pt, fill: luma(90), style: "italic")[VIT FAT Study Textbook]]
      )
      line(length: 100%, stroke: 0.4pt + luma(180))
    }}
  }},
  footer: context {{
    align(center)[#text(size: 9pt)[#here().page()]]
  }}
)
#set text(font: "New Computer Modern", size: 10pt)
#set par(justify: true, leading: 0.65em)
#set heading(numbering: "1.1")

#align(center)[
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT BACHY101 --- Module {mod_num}: {short_title}] \\
  #v(2mm)
  #text(size: 15pt, weight: "black")[MODULE {mod_num}: {title.upper()}] \\
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[({co})] \\
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Complete Study Textbook, Step-by-Step Derivations & VIT FAT Question Bank] \\
  #text(size: 9pt, fill: luma(100))[Aligned with Official VIT BACHY101 Course Page Syllabus, Question Bank, and Past FAT Papers]
]

#v(3mm)
"""

# ==================== MODULE 2 ====================
mod2 = get_header(2, "Energy Devices", "CO: 2", "Energy Devices") + """
#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 9pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Textbook (Official VIT Syllabus - All 8 Topics):]
  (1) Electrochemical and electrolytic cells, electrode materials with examples, (2) Nernst equation and numericals, (3) Classification of batteries, (4) Chemistry of Li-ion secondary batteries, (5) Fuel cells: $H_2-O_2$ and solid oxide fuel cell (SOFC), (6) Solar cells: photovoltaic silicon based, (7) Photoelectrochemical cells, and (8) Dye-sensitized solar cells (DSSC).
]

#v(2mm)
= VIT FAT Exam Blueprint & Master Formula Sheet

In VIT Final Assessment Tests (BACHY101 FAT), Module 2 carries *15 to 20 marks*. Typical 10-mark questions include:
1. *Question Type A (10 Marks):* Nernst equation derivation and cell potential numericals, including equilibrium constant $K_"eq"$ and Gibbs free energy $Delta G^circle.small$.
2. *Question Type B (10 Marks):* Chemistry of Lithium-ion batteries (charging/discharging intercalation equations at cathode and anode) or Solid Oxide / Hydrogen-Oxygen Fuel Cell working principles.
3. *Question Type C (10 Marks):* Principle and electron transport mechanism in Dye-Sensitized Solar Cells (DSSC / Gratzel cell) or silicon photovoltaic p-n junction.

#table(
  columns: (1.5fr, 2fr, 2fr),
  inset: 6pt,
  stroke: 0.4pt + luma(180),
  align: (left, left, left),
  [*Device / Law*], [*Governing Equation / Formula*], [*VIT Exam Key Insight*],
  [Nernst Equation at $25 degree upright("C")$], [$E_"cell" = E_"cell"^circle.small - (0.0591) / n log_10 Q$], [$E_"cell"^circle.small = E_"cathode"^circle.small - E_"anode"^circle.small$ (both as reduction potentials).],
  [Thermodynamic Relations], [$Delta G = -n F E_"cell", quad Delta G^circle.small = -R T ln K_"eq"$], [$F = 96500 "C/mol"$; positive $E_"cell"$ indicates spontaneous reaction.],
  [Lithium-Ion Cathode], [$"LiCoO"_2 arrow.r.double "Li"_(1-x)"CoO"_2 + x "Li"^+ + x e^-$], [Intercalation/de-intercalation process; no metallic lithium deposition.],
  [Lithium-Ion Anode], [$x "Li"^+ + x e^- + 6 "C" arrow.r.double "Li"_x "C"_6$], [Graphite host structure prevents dendritic dendrite formation.],
  [$H_2-O_2$ Alkaline Fuel Cell], [$E_"cell"^circle.small = 1.229 "V", quad 2 H_2 + O_2 arrow.r.double 2 H_2 O$], [Anode: $H_2 + 2 O H^- arrow.r.double 2 H_2 O + 2 e^-$; Cathode: $O_2 + 2 H_2 O + 4 e^- arrow.r.double 4 O H^-$.],
  [DSSC / Gratzel Cell], [$eta = (P_"max") / P_"in" = (V_"oc" times J_"sc" times "FF") / P_"in"$], [Ruthenium dye absorbs photon, injects electron into $"TiO"_2$ conduction band.]
)

= Electrochemical Cells & The Nernst Equation

== Electrochemical vs. Electrolytic Cells
- *Electrochemical (Galvanic / Voltaic) Cell:* Converts chemical energy into electrical energy through spontaneous redox reactions ($Delta G < 0, E_"cell" > 0$). Anode is negative, cathode is positive.
- *Electrolytic Cell:* Converts electrical energy into chemical energy to drive non-spontaneous reactions ($Delta G > 0$). Requires external DC power source. Anode is positive, cathode is negative.

== The Nernst Equation Derivation
From thermodynamics, the Gibbs free energy change under non-standard conditions is:
$ Delta G = Delta G^circle.small + R T ln Q $
Since $Delta G = -n F E_"cell"$ and $Delta G^circle.small = -n F E_"cell"^circle.small$:
$ -n F E_"cell" = -n F E_"cell"^circle.small + R T ln Q $
Dividing throughout by $-n F$:
$ E_"cell" = E_"cell"^circle.small - (R T) / (n F) ln Q $
At $T = 298.15 "K"$ ($25 degree upright("C")$), with $R = 8.314 "J" / ("mol" dot "K")$ and $F = 96485 "C/mol"$:
$ (2.303 R T) / F = (2.303 times 8.314 times 298.15) / 96485 = 0.05916 "V" $
$ E_"cell" = E_"cell"^circle.small - (0.0591) / n log_10 Q $
At chemical equilibrium, $E_"cell" = 0$ and $Q = K_"eq"$:
$ E_"cell"^circle.small = (0.0591) / n log_10 K_"eq" arrow.r.double log_10 K_"eq" = (n E_"cell"^circle.small) / (0.0591) $

= Battery Systems & Secondary Lithium-Ion Batteries

== Battery Classifications
1. *Primary Batteries:* Non-rechargeable electrochemical cells where reactants are irreversibly consumed (e.g., Leclanche zinc-carbon, alkaline zinc-manganese dioxide cell).
2. *Secondary (Storage) Batteries:* Rechargeable cells where cell reactions are reversed by passing electric current in the opposite direction (e.g., Lead-acid accumulator, Nickel-Cadmium, Lithium-ion battery).
3. *Reserve Batteries:* Inactive until electrolyte is added or activated by heat/shock (used in missiles and ocean buoys).

== Chemistry of Lithium-Ion Secondary Batteries
A commercial Lithium-ion cell consists of:
- *Anode (Negative Electrode):* Intercalated lithium in graphite layers ($"Li"_x "C"_6$).
- *Cathode (Positive Electrode):* Lithium transition metal oxide, typically lithium cobalt oxide ($"LiCoO"_2$), lithium iron phosphate ($"LiFePO"_4$), or $"NMC"$ ($"LiNi"_x "Mn"_y "Co"_z "O"_2$).
- *Electrolyte:* Non-aqueous lithium salt (typically $"LiPF"_6$) dissolved in organic carbonate mixtures (ethylene carbonate + dimethyl carbonate, $"EC" + "DMC"$).
- *Separator:* Microporous polyethylene/polypropylene membrane.

*Chemical Reactions During Discharging:*
- *At Anode (Oxidation):*
  $ "Li"_x "C"_6 arrow.r.double 6 "C" + x "Li"^+ + x e^- $
- *At Cathode (Reduction):*
  $ "Li"_(1-x)"CoO"_2 + x "Li"^+ + x e^- arrow.r.double "LiCoO"_2 $
- *Overall Cell Discharge:*
  $ "Li"_x "C"_6 + "Li"_(1-x)"CoO"_2 arrow.r.double 6 "C" + "LiCoO"_2 quad (E_"cell" approx 3.7 "V") $
During charging, the external voltage source drives $"Li"^+$ ions out of the cathode, through the organic electrolyte, and into the graphite layers at the anode.

= Fuel Cells & Solar Photovoltaic Technologies

== Hydrogen-Oxygen Alkaline Fuel Cell
A fuel cell converts the chemical energy of a continuously supplied fuel and oxidant directly into electricity:
- *Anode Reaction:* $2 H_2 ("g") + 4 O H^- ("aq") arrow.r.double 4 H_2 O ("l") + 4 e^-$ ($E^circle.small = -0.83 "V"$)
- *Cathode Reaction:* $O_2 ("g") + 2 H_2 O ("l") + 4 e^- arrow.r.double 4 O H^- ("aq")$ ($E^circle.small = +0.40 "V"$)
- *Overall Reaction:* $2 H_2 ("g") + O_2 ("g") arrow.r.double 2 H_2 O ("l")$ ($E_"cell"^circle.small = 1.23 "V"$)
Efficiency of fuel cell: $eta = (Delta G) / (Delta H) times 100% approx 83%$, far superior to the Carnot limit of combustion heat engines!

== Solid Oxide Fuel Cells (SOFC)
Operates at elevated temperatures ($700 degree upright("C") - 1000 degree upright("C")$) utilizing a dense ceramic solid electrolyte: Yttria-Stabilized Zirconia (YSZ).
- *Cathode:* Porous Lanthanum Strontium Manganite (LSM): $O_2 + 4 e^- arrow.r.double 2 O^(2-)$.
- Oxygen ions $O^(2-)$ migrate through the vacant oxide sites of the YSZ crystal lattice.
- *Anode:* Nickel-YSZ cermet: $2 H_2 + 2 O^(2-) arrow.r.double 2 H_2 O + 4 e^-$.

== Dye-Sensitized Solar Cells (DSSC / Gratzel Cell)
1. *Dye Absorption:* A ruthenium polypyridyl dye (e.g., N719) absorbs an incoming solar photon and undergoes photoexcitation: $"Dye" + h nu arrow.r.double "Dye"^*$.
2. *Electron Injection:* The excited dye injects an ultrafast electron into the conduction band of nanostructured titanium dioxide ($"TiO"_2$): $"Dye"^* + "TiO"_2 arrow.r.double "Dye"^+ + e^-( "TiO"_2)$.
3. *Percolation & Power:* Electrons percolate through the mesoporous $"TiO"_2$ nanoparticle network to the Fluorine-doped Tin Oxide (FTO) current collector, flowing through external load.
4. *Dye Regeneration:* The oxidized dye ($"Dye"^+$) is reduced by iodide ions in the redox electrolyte: $2 "Dye"^+ + 3 I^- arrow.r.double 2 "Dye" + I_3^-$.
5. *Electrolyte Regeneration:* Triiodide ($I_3^-$) diffuses to the platinum counter electrode where it is reduced back to iodide: $I_3^- + 2 e^- arrow.r.double 3 I^-$.

= Worked VIT Question Bank & Past FAT Problems

#rect(width: 100%, stroke: 0.5pt + rgb("#0369a1"), radius: 3pt, fill: rgb("#f0f9ff"), inset: 8pt)[
  *Problem 2.1 (VIT Question Bank Q8 - 10 Marks):*
  Calculate the EMF of the following galvanic cell at $25 degree upright("C")$:
  $ "Zn"("s") | "Zn"^(2+) (0.02 "M") || "Cu"^(2+) (0.50 "M") | "Cu"("s") $
  Given standard reduction potentials: $E^circle.small ("Zn"^(2+)/"Zn") = -0.763 "V"$ and $E^circle.small ("Cu"^(2+)/"Cu") = +0.337 "V"$. Also calculate the maximum electrical work available per mole of copper deposited.
]

*Solution:*
1. Identify half-reactions:
   Anode (oxidation): $"Zn"("s") arrow.r.double "Zn"^(2+) + 2 e^-$
   Cathode (reduction): $"Cu"^(2+) + 2 e^- arrow.r.double "Cu"("s")$
   Overall cell reaction: $"Zn"("s") + "Cu"^(2+) arrow.r.double "Zn"^(2+) + "Cu"("s")$, so $n = 2$.
2. Standard cell potential:
   $ E_"cell"^circle.small = E_"cathode"^circle.small - E_"anode"^circle.small = +0.337 - (-0.763) = 1.100 "V" $
3. Apply Nernst equation:
   $ E_"cell" = E_"cell"^circle.small - (0.0591) / n log_10 (["Zn"^(2+)] / ["Cu"^(2+)]) $
   $ ["Zn"^(2+)] / ["Cu"^(2+)] = (0.02) / (0.50) = 0.04 = 4.0 times 10^(-2) $
   $ log_10 (0.04) = -1.3979 $
   $ E_"cell" = 1.100 - (0.0591 / 2) times (-1.3979) = 1.100 + 0.0413 = 1.1413 "V" $
4. Maximum electrical work $W_"max" = - Delta G = n F E_"cell"$:
   $ W_"max" = 2 times 96485 times 1.1413 = 220237 "J/mol" = 220.24 "kJ/mol" $
"""

# ==================== MODULE 3 ====================
mod3 = get_header(3, "Functional Materials", "CO: 2", "Functional Materials") + """
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
"""

# ==================== MODULE 4 ====================
mod4 = get_header(4, "Spectroscopic and Diffraction Techniques", "CO: 3", "Spectroscopy & Diffraction") + """
#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 9pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Textbook (Official VIT Syllabus - All 6 Topics):]
  (1) Fundamental concepts in spectroscopic techniques, (2) Fundamental concepts in diffraction techniques, (3) Principle and instrumentation of UV-Visible spectroscopy, (4) Applications of UV-Visible spectroscopy, (5) Powder XRD: Determination of crystal size numericals - Part 1, and (6) Powder XRD: Determination of crystal size numericals - Part 2.
]

#v(2mm)
= VIT FAT Exam Blueprint & Master Formula Sheet

Module 4 carries *15 to 20 marks* in BACHY101 FAT:
1. *Question Type A (10 Marks):* Beer-Lambert's Law derivation, electronic transitions ($sigma arrow.r sigma^*, n arrow.r sigma^*, pi arrow.r pi^*, n arrow.r pi^*$), chromophores, auxochromes, and shifts (bathochromic vs hypsochromic).
2. *Question Type B (10 Marks):* Powder X-Ray Diffraction (XRD): Bragg's Law derivation ($2 d sin theta = n lambda$), Scherrer equation derivation ($D = (K lambda) / (beta cos theta)$) and worked numericals to compute average crystallite size from FWHM.

#table(
  columns: (1.5fr, 2fr, 2fr),
  inset: 6pt,
  stroke: 0.4pt + luma(180),
  align: (left, left, left),
  [*Technique / Law*], [*Governing Equation / Formula*], [*VIT Exam Key Insight*],
  [Beer-Lambert Law], [$A = log_10 (I_0 / I) = epsilon c l$], [Absorbance $A$ is dimensionless; $epsilon$ is molar absorptivity ($"L" / ("mol" dot "cm")$).],
  [Bragg's Law of Diffraction], [$2 d_(h k l) sin theta = n lambda$], [$d_(h k l) = a / sqrt(h^2 + k^2 + l^2)$ for cubic crystal lattices.],
  [Debye-Scherrer Equation], [$D = (K lambda) / (beta cos theta)$], [$K = 0.9$ (shape factor), $beta$ is FWHM in RADIANS, not degrees!],
  [FWHM Unit Conversion], [$beta ("rad") = beta ("degrees") times pi / 180$], [Most common VIT FAT student error is omitting radian conversion.]
)

= UV-Visible Spectroscopy

== Electromagnetic Spectrum & Electronic Transitions
Spectroscopy is the study of interaction between electromagnetic radiation and matter. In the UV-Visible region ($200 - 800 "nm"$), photon absorption induces promotion of valence electrons from bonding or non-bonding orbitals to anti-bonding molecular orbitals:
- $sigma arrow.r sigma^*$ transition: High energy, deep vacuum UV ($< 180 "nm"$). Example: Methane ($C H_4$).
- $n arrow.r sigma^*$ transition: Non-bonding electron on heteroatom (O, N, S, halogens) to $sigma^*$. Wavelength $180 - 250 "nm"$. Example: Water, alcohols, amines.
- $pi arrow.r pi^*$ transition: Found in unsaturated hydrocarbons with double/triple bonds. Wavelength $200 - 400 "nm"$. High molar absorptivity ($epsilon > 10^4$).
- $n arrow.r pi^*$ transition: Promotion of non-bonding lone pair to $pi^*$ antibonding orbital. Wavelength $270 - 350 "nm"$. Weak intensity ($epsilon approx 10 - 100$) because it is symmetry-forbidden. Example: Carbonyls ($>C=O$).

== Chromophores, Auxochromes & Spectral Shifts
- *Chromophore:* An isolated covalently bonded unsaturated group responsible for electronic absorption in the UV-Vis range (e.g., $-C=C-, -C=O, -N=N-, -N O_2$).
- *Auxochrome:* A saturated substituent group with non-bonding lone pairs that does not absorb UV light on its own, but when attached to a chromophore, alters both the wavelength and intensity of absorption (e.g., $-O H, -N H_2, -S H, -C l$).
- *Bathochromic Shift (Red Shift):* Absorption maximum shifts to a longer wavelength (lower energy), frequently caused by conjugation or auxochrome substitution.
- *Hypsochromic Shift (Blue Shift):* Shift of $lambda_"max"$ to shorter wavelength (higher energy), caused by loss of conjugation or protonation.
- *Hyperchromic Effect:* An increase in molar absorption intensity ($epsilon$).
- *Hypochromic Effect:* A decrease in molar absorption intensity ($epsilon$).

== Instrumentation: Double-Beam UV-Vis Spectrophotometer
Components: Deuterium lamp (UV: $190 - 380 "nm"$) and Tungsten-halogen lamp (Vis: $380 - 800 "nm"$) $arrow.r$ Monochromator (diffraction grating) $arrow.r$ Beam splitter / Rotating chopper (divides beam into sample beam and reference beam) $arrow.r$ Sample and Reference quartz cuvettes $arrow.r$ Photomultiplier tube (PMT) detector $arrow.r$ Signal processor and recorder.

= Powder X-Ray Diffraction (Powder XRD)

== Principle: Bragg's Law
When monochromatic X-rays of wavelength $lambda$ strike parallel crystal lattice planes separated by interplanar spacing $d_(h k l)$ at an angle $theta$, constructive interference occurs when the path difference between scattered rays from adjacent planes is an integral multiple of $lambda$:
$ 2 d sin theta = n lambda $
For a cubic crystal system with lattice parameter $a$ and Miller indices $(h, k, l)$:
$ d_(h k l) = a / sqrt(h^2 + k^2 + l^2) $

== Crystallite Size Determination: Scherrer Formula
In macroscopic single crystals, diffraction peaks are infinitesimally sharp delta functions. When crystallites are smaller than $100 "nm"$, incomplete destructive interference broadens the diffraction peaks.
The average crystallite size $D$ is quantified by the *Debye-Scherrer Equation*:
$ D = (K lambda) / (beta cos theta) $
where:
- $K$ is the dimensionless crystallite shape factor (typically $0.9$ or $0.94$).
- $lambda$ is the X-ray wavelength (typically $0.15406 "nm"$ for $C u - K_alpha$ radiation).
- $beta$ is the Full Width at Half Maximum (FWHM) of the diffraction peak in *radians*:
  $ beta = beta_"observed" - beta_"instrumental" $
- $theta$ is the Bragg diffraction angle (half of the $2 theta$ peak position).

= Worked VIT Question Bank & Past FAT Problems

#rect(width: 100%, stroke: 0.5pt + rgb("#0369a1"), radius: 3pt, fill: rgb("#f0f9ff"), inset: 8pt)[
  *Problem 4.1 (VIT Question Bank Q16 & FAT Classic - 10 Marks):*
  In a powder XRD experiment using $C u - K_alpha$ radiation ($lambda = 0.15418 "nm"$), a nanomaterial shows a dominant diffraction peak at $2 theta = 38.2 degree$. The Full Width at Half Maximum (FWHM) of the peak is measured to be $0.48 degree$. Assuming the Scherrer shape constant $K = 0.90$, calculate the average crystallite size $D$ in nanometers.
]

*Solution:*
1. Identify Bragg angle $theta$:
   $ 2 theta = 38.2 degree arrow.r.double theta = 38.2 / 2 = 19.1 degree $
   $ cos theta = cos(19.1 degree) = 0.9449 $
2. Convert FWHM $beta$ from degrees to radians (CRITICAL STEP):
   $ beta = 0.48 degree times pi / 180 = 0.48 times 0.017453 = 8.3776 times 10^(-3) "radians" $
3. Substitute into the Debye-Scherrer equation:
   $ D = (K lambda) / (beta cos theta) = (0.90 times 0.15418 times 10^(-9) "m") / (8.3776 times 10^(-3) times 0.9449) $
   $ D = (0.13876 times 10^(-9)) / (7.9160 times 10^(-3)) = 1.753 times 10^(-8) "m" = 17.53 "nm" $
*Answer:* The average crystallite size is *17.53 nm*.
"""

# ==================== MODULE 5 ====================
mod5 = get_header(5, "Computational Chemistry: Basic to Applications", "CO: 4", "Computational Chemistry") + """
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
"""

# ==================== MODULE 6 ====================
mod6 = get_header(6, "Contemporary Topics", "CO: 2", "Contemporary Topics") + """
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
"""

compile_typ("Chemistry_MOD-2", mod2)
compile_typ("Chemistry_MOD-3", mod3)
compile_typ("Chemistry_MOD-4", mod4)
compile_typ("Chemistry_MOD-5", mod5)
compile_typ("Chemistry_MOD-6", mod6)
print("Finished compiling all Chemistry modules!")
