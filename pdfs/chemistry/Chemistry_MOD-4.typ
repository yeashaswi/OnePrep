#set page(
  paper: "a4",
  margin: (top: 2cm, bottom: 2cm, left: 2.2cm, right: 2.2cm),
  header: context {
    if here().page() > 1 {
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8pt, fill: rgb("#475569"), weight: "bold")[VIT Applied Chemistry (BACHY105) --- Module 4: Spectroscopy & XRD]],
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
  #text(size: 16pt, weight: "bold", fill: rgb("#1e3a8a"))[MODULE 4: SPECTROSCOPIC & DIFFRACTION TECHNIQUES] \
  #v(1mm)
  #text(size: 10.5pt, weight: "bold", fill: rgb("#b91c1c"))[Complete Unabridged Course Notes, Derivations, Diagrams & Topic-Wise CAT/FAT Solved Problems] \
  #v(1mm)
  #text(size: 8.5pt, fill: rgb("#64748b"))[Fully Aligned with Official VIT Faculty Lecture Decks (38 Slides), Department Question Bank, and Past FAT Papers (CO: 4)]
]

#v(2mm)

#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.8pt + rgb("#cbd5e1"), radius: 4pt, inset: 8pt)[
  #text(weight: "bold", fill: rgb("#0f172a"), size: 9pt)[Module 4 Detailed Syllabus Breakdown (100% Complete Coverage):] \
  #v(1mm)
  #text(size: 8.5pt, fill: rgb("#334155"))[
    *Part A: Electromagnetic Spectrum & UV-Visible Spectroscopy:* Light-matter interactions, EMR regions & molecular effects, UV-Vis principles ($200 - 700 "nm"$), 4 electronic transitions ($sigma arrow.r sigma^*, n arrow.r sigma^*, pi arrow.r pi^*, n arrow.r pi^*$), Chromophores & Auxochromes, 4 Spectral shifts (Bathochromic/Red, Hypsochromic/Blue, Hyperchromic, Hypochromic), Complementary colors, Beer-Lambert Law derivation & limitations, Spectrophotometer instrumentation (Single-beam vs Double-beam optical ray paths, components, quartz cuvettes, space exploration rovers), Solved quantitative analysis problems. \
    *Part B: Powder X-Ray Diffraction (XRD):* X-ray generation in Coolidge tubes, Continuous Bremsstrahlung vs Characteristic radiation ($K_alpha, K_beta$ transitions, $C u-K_alpha = 1.5418 thin "Å"$), Constructive vs Destructive interference, Bragg's Law step-by-step geometric derivation ($n lambda = 2 d sin theta$), Powder diffractometer instrumentation & components, Diffractogram analysis ($2 theta$ peak positions & intensities), Crystallite vs Grain vs Particle distinction, Debye-Scherrer formula for crystallite sizing ($D = K lambda / beta cos theta$), Solved FWHM crystallite size calculations.
  ]
]

#v(3mm)

= PART A: ELECTROMAGNETIC RADIATION & UV-VISIBLE SPECTROSCOPY

== 1. Fundamental Concepts of Spectroscopy and the Electromagnetic Spectrum

Spectroscopy is defined as the study of the interaction between electromagnetic radiant energy (EMR) and matter (atoms, ions, or molecules), serving as the premier experimental tool for both qualitative structural elucidation and quantitative chemical analysis.

=== 1.1 Wave-Particle Duality and Characteristics of EMR
Electromagnetic radiation travels through a vacuum at the constant speed of light ($c = 2.9979 times 10^8 "m s"^(-1)$) and is characterized by:
- *Wavelength ($lambda$):* Linear distance between two consecutive wave crests or troughs ($"cm, m, nm, or Å"$; $1 "nm" = 10^(-9) "m" = 10 "Å"$).
- *Frequency ($nu$):* Number of complete wave cycles passing a fixed point per unit time ($"Hertz (Hz)" = "s"^(-1)$):
  $ nu = frac(c, lambda) $
- *Wavenumber ($macron(nu)$):* Number of waves per unit length: $macron(nu) = 1 / lambda = nu / c$ (typically expressed in $"cm"^(-1)$).
- *Photon Energy ($E$):* From Planck's quantum hypothesis:
  $ E = h nu = frac(h c, lambda) = h c macron(nu) $
  where $h = 6.626 times 10^(-34) "J s"$ is Planck's constant.

=== 1.2 The Electromagnetic Spectrum and Induced Molecular Transitions
#table(
  columns: (1.5fr, 1.8fr, 1.8fr, 2.5fr),
  fill: (x, y) => if y == 0 { rgb("#f1f5f9") } else { none },
  stroke: 0.5pt + rgb("#cbd5e1"),
  align: (left, left, left, left),
  [#text(weight: "bold")[Spectral Region]], [#text(weight: "bold")[Wavelength Range ($lambda$)]], [#text(weight: "bold")[Energy Range ($h nu$)]], [#text(weight: "bold")[Molecular / Atomic Transition Effect]],
  [*Gamma ($gamma$) Rays*], [$< 0.1 "Å" thin (< 0.01 "nm")$], [$> 100 "keV"$], [Nuclear energy level rearrangements; radioactivity],
  [*X-Rays*], [$0.1 - 100 "Å" thin (0.01 - 10 "nm")$], [$0.1 - 100 "keV"$], [Core inner-shell electronic transitions; crystal diffraction],
  [*Vacuum UV*], [$10 - 200 "nm"$], [$6.2 - 124 "eV"$], [High-energy bonding transitions ($sigma arrow.r sigma^*$; absorbed by air $O_2$)],
  [*Near UV*], [$200 - 400 "nm"$], [$3.1 - 6.2 "eV"$], [Valence electronic excitation in chromophores ($pi arrow.r pi^*, n arrow.r pi^*$)],
  [*Visible Light*], [$400 - 750 "nm"$], [$1.65 - 3.1 "eV"$], [Valence electronic transitions; human color perception],
  [*Infrared (IR)*], [$0.78 - 300 mu "m"$], [$0.004 - 1.6 "eV"$], [Molecular bond vibrations (stretching and bending modes)],
  [*Microwave*], [$0.3 "mm" - 1 "m"$], [$10^(-6) - 10^(-3) "eV"$], [Molecular rotation of dipolar molecules],
  [*Radio Waves*], [$1 "m" - 100 "km"$], [$10^(-10) - 10^(-6) "eV"$], [Nuclear and electron spin reorientations in magnetic fields (NMR, ESR)]
)

#v(2mm)

#rect(width: 100%, fill: rgb("#eff6ff"), stroke: 1pt + rgb("#3b82f6"), radius: 4pt, inset: 8pt)[
  #text(weight: "bold", fill: rgb("#1e40af"))[[Lecture Deck Worked Example --- 3 Marks]] \
  #text(weight: "bold")[Problem:] What is the frequency and energy of electromagnetic radiation with a wavelength of $5.00 times 10^(-8) "m"$? In which region of the electromagnetic spectrum does this radiation fall? \
  #text(weight: "bold", fill: rgb("#166534"))[Solution:]
  1. *Frequency:*
     $ nu = frac(c, lambda) = frac(3.00 times 10^8 "m s"^(-1), 5.00 times 10^(-8) "m") = bold(6.00 times 10^(15) "Hz" = 6.00 times 10^(15) "s"^(-1)) $
  2. *Energy of one photon:*
     $ E = h nu = (6.626 times 10^(-34) "J s") times (6.00 times 10^(15) "s"^(-1)) = bold(3.98 times 10^(-18) "J" = 24.8 "eV") $
  3. *Spectral Region:* $lambda = 5.00 times 10^(-8) "m" = 50 "nm"$. This radiation falls directly in the *Vacuum Ultraviolet (UV)* region.
]

#v(3mm)

== 2. UV-Visible Spectroscopy: Electronic Transitions & Shifts

UV-Visible spectroscopy involves the absorption of photons in the range of $200 - 750 "nm"$, promoting valence bonding or non-bonding electrons from highest occupied molecular orbitals (HOMO) to lowest unoccupied anti-bonding molecular orbitals (LUMO).

=== 2.1 The Four Types of Electronic Transitions
Molecular orbitals are classified in order of increasing ground-state energy:
$ sigma < pi < n < pi^* < sigma^* $

#align(center)[
  ```
  Energy (E)
      ^       Anti-Bonding (sigma*)   ------------------------
      |                                    ^             ^
      |                                    |             |
      |       Anti-Bonding (pi*)      -----+-------------+----
      |                                    |   ^     ^   |
      |                                    |   |     |   |
      |       Non-Bonding (n)         -----+---+-----+---+---- (Lone pairs)
      |                                    |   |     |
      |       Bonding (pi)            -----+---+-----+--------
      |                                    |   |
      |       Bonding (sigma)         -----+---+--------------
      |                                    |
      +------------------------------------+--------------------
                                   sigma->sigma*  pi->pi*  n->pi*  n->sigma*
  ```
]

1. *Transition $sigma arrow.r sigma^*$ (High Energy, Vacuum UV $< 200 "nm"$):*
   - Requires highest energy because $sigma$ bonds are exceptionally strong.
   - Occurs in saturated aliphatic hydrocarbons containing only single bonds (e.g., Methane $C H_4$ at $125 "nm"$, Ethane $C_2 H_6$ at $135 "nm"$). Cannot be routinely studied in standard benchtop quartz spectrophotometers due to atmospheric $O_2$ absorption.
2. *Transition $n arrow.r sigma^*$ (Moderate Energy, $150 - 250 "nm"$):*
   - Promotion of a non-bonding lone pair electron from a heteroatom ($O, N, S$, halogens) to an anti-bonding $sigma^*$ orbital.
   - Requires less energy than $sigma arrow.r sigma^*$. Examples: Methanol ($C H_3 O H$, $lambda_"max" = 183 "nm"$), Methylamine ($C H_3 N H_2$, $lambda_"max" = 215 "nm"$), Methyl iodide ($C H_3 I$, $lambda_"max" = 258 "nm"$).
3. *Transition $pi arrow.r pi^*$ (Analytical UV-Vis Region, $200 - 700 "nm"$):*
   - Promotion of an electron from a bonding $pi$ orbital to an anti-bonding $pi^*$ orbital in unsaturated compounds containing double/triple bonds ($C=C, C=O, C equiv N$) and aromatic systems.
   - Highly probable, symmetry-allowed transition exhibiting intense molar absorptivities ($epsilon_"max" > 10000 "L mol"^(-1) "cm"^(-1)$).
   - In conjugated systems (alternating double bonds, e.g., 1,3-butadiene, $\beta$-carotene), the HOMO-LUMO gap narrows, shifting absorption into the visible spectrum.
4. *Transition $n arrow.r pi^*$ (Lowest Energy, Longest Wavelength, $250 - 700 "nm"$):*
   - Promotion of a non-bonding lone pair electron to an anti-bonding $pi^*$ orbital in unsaturated heteroatomic functional groups ($C=O, C=S, -N=O$).
   - Symmetry-forbidden transition by quantum selection rules, resulting in low molar absorptivities ($epsilon_"max" approx 10 - 100 "L mol"^(-1) "cm"^(-1)$).
   - Example: Acetone ($(C H_3)_2 C=O$) exhibits a weak $n arrow.r pi^*$ band at $lambda_"max" = 279 "nm"$ ($epsilon = 15$) and an intense $pi arrow.r pi^*$ band at $189 "nm"$ ($epsilon = 900$).

=== 2.2 Chromophores and Auxochromes
- *Chromophore:* An isolated, covalently unsaturated functional group capable of absorbing electromagnetic radiation in the UV or visible region ($200 - 750 "nm"$), imparting characteristic spectral absorption and often visible color.
  - Examples: Ethylene ($>C=C<$), Carbonyl ($>C=O$), Azo ($-N=N-$), Nitro ($-N O_2$), Nitroso ($-N=O$), Nitrile ($-C equiv N$), Thiocarbonyl ($>C=S$).
- *Auxochrome:* A saturated functional group containing one or more heteroatoms with non-bonding lone pairs ($n$ electrons) which does not absorb UV radiation significantly on its own, but when directly attached to a chromophore, *shifts the absorption maximum ($lambda_"max"$) to a longer wavelength* and *increases the intensity of absorption ($epsilon_"max"$)*.
  - Examples: Hydroxyl ($-O H$), Amino ($-N H_2$), Alkoxy ($-O C H_3$), Alkylamino ($-N H R, -N R_2$), Thiol ($-S H$), Halogens ($-C l, -B r$).
  - *Mechanism:* Lone pair electrons delocalize into the adjacent $pi$ electron system of the chromophore via resonance (extended conjugation), narrowing the HOMO-LUMO energy gap.

=== 2.3 The Four Types of Spectral Shifts
#align(center)[
  ```
                        HYPERCHROMIC SHIFT
                       (Intensity epsilon increases)
                                ^
                                |
     BLUE SHIFT                 |                 RED SHIFT
  (Hypsochromic)  <-------------+-------------> (Bathochromic)
  Shorter Wavelength            |               Longer Wavelength
  Higher Frequency              |               Lower Frequency
                                v
                        HYPOCHROMIC SHIFT
                       (Intensity epsilon decreases)
  ```
]

1. *Bathochromic Shift (Red Shift):* Shift of an absorption band toward a *longer wavelength* (lower frequency / lower energy).
   - *Causes:* (a) Increasing the extent of conjugation (e.g., Ethylene $lambda_"max" = 171 "nm"$; 1,3-Butadiene $lambda_"max" = 217 "nm"$; 1,3,5-Hexatriene $lambda_"max" = 258 "nm"$). (b) Attachment of an auxochrome (e.g., Benzene $lambda_"max" = 255 "nm"$; Phenol $lambda_"max" = 270 "nm"$; Phenoxide ion in alkaline medium $lambda_"max" = 287 "nm"$). (c) Solvent polarity effects on $pi arrow.r pi^*$ transitions.
2. *Hypsochromic Shift (Blue Shift):* Shift of an absorption band toward a *shorter wavelength* (higher frequency / higher energy).
   - *Causes:* (a) Removal of conjugation. (b) Protonation of an auxochrome (e.g., Aniline in acidic solution forms anilinium ion $C_6 H_5 N H_3^+$, tying up the lone pair and blue-shifting absorption from $280 "nm"$ down to $254 "nm"$). (c) Solvent polarity effects on $n arrow.r pi^*$ transitions (polar solvents form hydrogen bonds with ground-state lone pairs, stabilizing HOMO and increasing transition energy).
3. *Hyperchromic Effect:* An increase in the molar absorptivity or extinction coefficient ($epsilon_"max"$) of the absorption band (e.g., introduction of an auxochrome transforms weak bands into intense peaks).
4. *Hypochromic Effect:* A decrease in the molar absorptivity ($epsilon_"max"$) of an absorption peak (e.g., geometric distortion or steric hindrance twisting a conjugated molecule out of planarity, disrupting orbital overlap).

=== 2.4 Color and Complementary Color Relationship
When white light falls upon an analyte solution, the compound absorbs specific wavelengths corresponding to its electronic transitions. The transmitted light perceived by the human eye represents the *complementary color*:
#table(
  columns: (1.8fr, 2fr, 2fr),
  fill: (x, y) => if y == 0 { rgb("#f1f5f9") } else { none },
  stroke: 0.5pt + rgb("#cbd5e1"),
  align: (center, left, left),
  [#text(weight: "bold")[Absorbed Wavelength ($lambda$)]], [#text(weight: "bold")[Absorbed Spectral Color]], [#text(weight: "bold")[Observed Transmitted (Complementary) Color]],
  [$400 - 435 "nm"$], [Violet], [Yellow-Green],
  [$435 - 480 "nm"$], [Blue], [Yellow],
  [$480 - 490 "nm"$], [Greenish-Blue], [Orange],
  [$490 - 500 "nm"$], [Bluish-Green], [Red],
  [$500 - 560 "nm"$], [Green], [Purple / Magenta],
  [$560 - 580 "nm"$], [Yellow-Green], [Violet],
  [$580 - 595 "nm"$], [Yellow], [Blue],
  [$595 - 650 "nm"$], [Orange], [Greenish-Blue],
  [$650 - 750 "nm"$], [Red], [Bluish-Green]
)

#v(3mm)

== 3. The Beer-Lambert Law and Quantitative Spectrophotometry

The Beer-Lambert Law (or Beer-Lambert-Bouguer Law) is the fundamental quantitative equation governing the absorption of monochromatic radiant energy by absorbing species in solution.

=== 3.1 Derivation of the Combined Law
- *Lambert's Law (1760):* When monochromatic light passes through a homogeneous absorbing medium, the rate of decrease in radiant intensity with path length (thickness $b$) is directly proportional to the incident intensity:
  $ - frac(d I, d b) = k_1 I ==> - frac(d I, I) = k_1 d b $
- *Beer's Law (1852):* When monochromatic light passes through an absorbing solution, the rate of decrease in radiant intensity with concentration ($c$) is directly proportional to the intensity:
  $ - frac(d I, d c) = k_2 I ==> - frac(d I, I) = k_2 d c $
Combining both laws into a joint differential expression:
$ - frac(d I, I) = k' c d b $
Integrating across the cuvette from incident intensity $I = I_0$ at path length $b = 0$ to transmitted intensity $I = I$ at path length $b = l$:
$ integral_(I_0)^I - frac(d I, I) = k' c integral_0^l d b $
$ - [ln I - ln I_0] = k' c l ==> ln(frac(I_0, I)) = k' c l $
Converting from natural logarithm to common base-10 logarithm ($log_10 x = ln x / 2.303$):
$ log_10(frac(I_0, I)) = frac(k', 2.303) c l = epsilon c l $
Defining *Absorbance ($A$)* (also termed Optical Density, $O D$):
$ bold(A = log_10(frac(I_0, I)) = epsilon c l) $
where:
- $A$ is the Absorbance (dimensionless quantity).
- $I_0$ is the incident radiant light intensity.
- $I$ is the transmitted radiant light intensity.
- $epsilon$ is the *Molar Absorptivity* (Molar Extinction Coefficient, $"L mol"^(-1) "cm"^(-1)$ or $"M"^(-1) "cm"^(-1)$).
- $c$ is the concentration of the absorbing solute ($"mol L"^(-1)$ or $"M"$).
- $l$ is the optical path length of the cuvette cell ($"cm"$, standard $l = 1.0 "cm"$).

=== 3.2 Transmittance ($T$) and Relationships
- *Transmittance ($T$):* Fraction of incident light transmitted through sample:
  $ T = frac(I, I_0) quad "and" quad % T = frac(I, I_0) times 100% $
- *Relationship between $A$ and $T$:*
  $ A = log_10(frac(1, T)) = - log_10 T = log_10(frac(100, % T)) = bold(2 - log_10(% T)) $
  - If $100% T$ passes through: $A = 2 - log_10(100) = 2 - 2 = 0$.
  - If $10% T$ passes through: $A = 2 - log_10(10) = 2 - 1 = 1.0$.
  - If $1% T$ passes through: $A = 2 - log_10(1) = 2 - 0 = 2.0$.

=== 3.3 Deviations and Experimental Limitations
1. *Chemical Deviations:* Occur when the absorbing analyte undergoes association, dissociation, ionization, polymerization, or reaction with the solvent (e.g., Potassium dichromate $C r_2 O_7^(2-)$ in water shifts to chromate $C r O_4^(2-)$ with changes in pH).
2. *Instrumental Deviations:* Beer's law strictly assumes monochromatic radiation. In real instruments, polychromatic radiation or stray light leaking past slits causes negative curvature in calibration plots.
3. *Concentration Limit:* At high concentrations ($c > 0.01 "M"$), electrostatic interactions between closely spaced absorbing solute molecules alter charge distribution and modify molar absorptivity $epsilon$.

#v(2mm)

#rect(width: 100%, fill: rgb("#eff6ff"), stroke: 1pt + rgb("#3b82f6"), radius: 4pt, inset: 8pt)[
  #text(weight: "bold", fill: rgb("#1e40af"))[[FAT Exam Quantitative Problem --- 5 Marks]] \
  #text(weight: "bold")[Problem:] A chemical analyte in aqueous solution has a maximum absorption peak at $275 "nm"$ with a molar absorptivity $epsilon = 8400 "M"^(-1) "cm"^(-1)$. When placed in a standard $1.0 "cm"$ cuvette, the measured absorbance is $0.70$. Calculate: (i) the molar concentration of the analyte, and (ii) the percentage transmittance ($% T$) of the solution. \
  #text(weight: "bold", fill: rgb("#166534"))[Step-by-Step Solution:]
  1. *Calculate Concentration ($c$):*
     $ A = epsilon c l ==> c = frac(A, epsilon l) = frac(0.70, 8400 "M"^(-1) "cm"^(-1) times 1.0 "cm") = bold(8.33 times 10^(-5) "mol L"^(-1) ("M")) $
  2. *Calculate Percentage Transmittance ($% T$):*
     $ A = 2 - log_10(% T) ==> log_10(% T) = 2 - A = 2 - 0.70 = 1.30 $
     $ % T = 10^(1.30) = bold(19.95% approx 20.0%) $
]

#v(3mm)

== 4. UV-Visible Instrumentation & Optical Ray Paths

=== 4.1 Major Hardware Components
1. *Light Sources:*
   - *Deuterium ($D_2$) Discharge Lamp:* Provides a continuous, stable emission spectrum in the ultraviolet region ($190 - 380 "nm"$).
   - *Tungsten-Halogen Filament Lamp:* Emits intense continuous blackbody radiation across the visible and near-infrared regions ($350 - 900 "nm"$).
2. *Monochromator:* Disperses polychromatic radiation into narrow monochromatic bands. Consists of entrance slit, collimating concave mirror, reflection diffraction grating ($1200 - 2400 "grooves/mm"$), focusing mirror, and exit slit.
3. *Sample Cell (Cuvette):* Must be optically transparent in the excitation region:
   - *Fused Silica Quartz ($S i O_2$):* Transparent throughout the entire UV and visible spectrum ($190 - 1100 "nm"$). Essential for all UV measurements.
   - *Optical Glass & Polystyrene Plastic:* Strongly absorb UV radiation below $350 "nm"$; usable *only* in the visible range ($350 - 800 "nm"$).
4. *Photodetector:* Photomultiplier Tube (PMT) or Silicon Photodiode Array (PDA) generating an electrical photocurrent directly proportional to the incident photon flux.

=== 4.2 Single-Beam vs. Double-Beam Optical Designs
#table(
  columns: (2fr, 2.5fr, 2.5fr),
  fill: (x, y) => if y == 0 { rgb("#f1f5f9") } else { none },
  stroke: 0.5pt + rgb("#cbd5e1"),
  align: (left, left, left),
  [#text(weight: "bold")[Feature]], [#text(weight: "bold")[Single-Beam Spectrophotometer]], [#text(weight: "bold")[Double-Beam Spectrophotometer]],
  [*Optical Ray Path*], [Single light beam passes sequentially through blank, then through sample cell.], [Rotating chopper mirror continuously splits light into sample and reference beams.],
  [*Baseline Stability*], [Vulnerable to source lamp intensity drift and detector aging over time.], [Compensates in real time for lamp fluctuations, solvent absorption, and amplifier drift.],
  [*Measurement Procedure*], [Requires manual replacement: measure blank, zero instrument, then insert sample.], [Simultaneous measurement of sample ($I$) and reference blank ($I_0$); immediate direct readout.],
  [*Primary Utility*], [Routine single-wavelength concentration checks; educational laboratories.], [High-precision full spectral scanning ($200 - 800 "nm"$); research laboratories.]
)

#v(4mm)

= PART B: POWDER X-RAY DIFFRACTION (XRD)

== 5. X-Rays: Generation, Spectrum, and Interference

X-rays are energetic, high-frequency electromagnetic waves discovered by Wilhelm Conrad Röntgen in 1895, with wavelengths ranging from $0.1$ to $100 thin "Å"$ ($0.01 - 10 "nm"$).

=== 5.1 X-Ray Generation in a Coolidge Tube
- An evacuated glass or metal bulb houses a tungsten filament cathode and a water-cooled metal target anode (Copper $C u$ or Molybdenum $M o$).
- High voltage ($20 - 50 "kV"$) accelerates thermionically emitted electrons toward the target at speeds reaching one-third the speed of light.
- Upon striking the target metal, $> 99%$ of kinetic energy converts into waste heat (requiring continuous water cooling), while $< 1%$ converts into X-radiation.

=== 5.2 The Dual X-Ray Emission Spectrum
#align(center)[
  ```
  X-Ray Intensity
       ^                 K_alpha Peak (Cu: 1.5418 A)
       |                     /\
       |                    /  \    K_beta Peak (Cu: 1.3922 A)
       |                   /    \       /\
       |                  /      \     /  \
       |                 /        \   /    \
       |   Continuous   /          \ /      \
       |  Bremsstrahlung                         Characteristic Peaks
       |   +-----------/                        \--------------------+
       |  /
       +--+------------------------------------------------------------> Wavelength lambda
         lambda_min = hc / eV
  ```
]

1. *Continuous Spectrum (Bremsstrahlung / Braking Radiation):* Fast electrons decelerate rapidly in the strong Coulomb electric fields of target nuclei. Emits a continuous background spectrum with a sharp short-wavelength cutoff ($lambda_"min" = h c / e V$).
2. *Characteristic Spectrum:* An incident energetic electron knocks out a tightly bound core electron from the target atom's $K$-shell ($n = 1$), creating an inner vacancy. An electron from an outer higher-energy shell instantly cascades down to fill the vacancy, emitting a photon of precise, discrete characteristic energy:
   - *$K_alpha$ Transition:* Electron drops from $L$-shell ($n = 2$) to $K$-shell ($n = 1$). For copper target: $bold(lambda_(C u - K_alpha) = 1.5418 thin "Å" = 0.15418 "nm")$.
   - *$K_beta$ Transition:* Electron drops from $M$-shell ($n = 3$) to $K$-shell ($n = 1$) ($lambda_(C u - K_beta) = 1.3922 thin "Å"$).
   - *Monochromatization:* A thin Nickel ($N i$) metal foil filter is inserted to selectively absorb $K_beta$ radiation, transmitting clean monochromatic $C u-K_alpha$ X-rays.

#v(3mm)

== 6. Bragg's Law: Geometric Derivation & Crystallography

In 1913, William Henry Bragg and William Lawrence Bragg formulated the fundamental mathematical relationship demonstrating that crystal lattice planes act as semi-transparent reflective mirrors for X-rays.

=== 6.1 Step-by-Step Geometric Derivation
Consider a collimated monochromatic beam of X-rays of wavelength $lambda$ striking a family of parallel crystal lattice planes with interplanar spacing $d$ at an incident glancing angle $theta$:

#align(center)[
  ```
  Incident Beam 1                Diffracted Beam 1'
         \                              /
          \                            /
  ---------\--------------------------/----------- Plane 1
            \          theta         /
             \                      /
  Incident    \   A            C   /      Diffracted
  Beam 2       \  |            |  /       Beam 2'
                \ |            | /
  ---------------+B------------+------------------ Plane 2
                 <------ d ----->
  ```
]

1. Ray 1 scatters from the top lattice plane at point $D$.
2. Ray 2 penetrates and scatters from the second lattice plane at point $B$.
3. Drop perpendicular lines from point $D$ onto Ray 2: perpendicular $D A$ onto the incident ray, and perpendicular $D C$ onto the diffracted ray.
4. The extra path distance traversed by Ray 2 compared to Ray 1 is:
   $ "Path Difference" (Delta) = A B + B C $
5. In right-angled triangle $Delta D A B$:
   $ sin theta = frac(A B, d) ==> A B = d sin theta $
6. In right-angled triangle $Delta D B C$:
   $ sin theta = frac(B C, d) ==> B C = d sin theta $
7. The total path difference is therefore:
   $ Delta = d sin theta + d sin theta = 2 d sin theta $
8. *Bragg's Condition for Constructive Interference:* Scattered waves will interfere constructively (reinforce each other to produce a sharp diffraction intensity peak) if and only if the path difference is an integer multiple ($n$) of the wavelength ($lambda$):
   $ bold(n lambda = 2 d sin theta) $
   where $n = 1, 2, 3 dots$ is the order of diffraction, $d$ is the interplanar spacing ($d_(h k l)$), and $theta$ is the Bragg diffraction angle.

#v(3mm)

== 7. Powder Diffractometer & Crystallite Sizing (Debye-Scherrer Formula)

=== 7.1 Powder XRD Instrumentation and Diffraction Patterns
In a Powder X-Ray Diffractometer (p-XRD), the crystalline sample is ground into a fine powder containing millions of microscopic crystallites. Because millions of tiny crystallites are randomly oriented in all possible spatial directions, every possible $(h k l)$ lattice plane orientation automatically satisfies the Bragg condition ($n lambda = 2 d sin theta$) at some angle.
- *Goniometer Operation:* The X-ray detector sweeps continuously around a central goniometer circle at angular rate $2 theta$, while the sample rotates at $theta$.
- *Diffractogram Readout:* Signal Intensity (Counts per second) plotted against $2 theta$ (Degrees):
  - *Peak Positions ($2 theta$):* Determined exclusively by the crystal lattice parameters ($a, b, c$) and unit cell symmetry (Bravais lattice). Serves as a unique fingerprint matched against ICDD / JCPDS database standards.
  - *Peak Intensities ($I$):* Governed by the atomic positions and electron densities within the unit cell (structure factor $F_(h k l)$).
  - *Peak Width (FWHM):* Broadening of diffraction peaks reflects crystallite size and microstrain.

=== 7.2 Distinguishing Crystallite, Grain, and Particle
#table(
  columns: (2fr, 2.5fr, 2.5fr),
  fill: (x, y) => if y == 0 { rgb("#f1f5f9") } else { none },
  stroke: 0.5pt + rgb("#cbd5e1"),
  align: (left, left, left),
  [#text(weight: "bold")[Entity]], [#text(weight: "bold")[Physical Definition]], [#text(weight: "bold")[Measurement Technique]],
  [*Crystallite*], [A coherent, single-crystalline domain with uninterrupted periodic lattice order.], [Measured by Powder X-ray Diffraction (XRD peak broadening via Scherrer formula).],
  [*Grain*], [An individual microcrystalline volume within a solid bounded by grain boundaries.], [Measured by Scanning Electron Microscopy (SEM) or Electron Backscatter (EBSD).],
  [*Particle*], [A discrete agglomerated physical unit composed of multiple grains/crystallites.], [Measured by Dynamic Light Scattering (DLS), optical sizing, or sieving.]
)

=== 7.3 The Debye-Scherrer Formula for Crystallite Size Determination
In 1918, Paul Scherrer derived the relation between diffraction peak broadening and crystallite dimension:
$ bold(D = frac(K lambda, beta cos theta)) $
where:
- $D$ is the mean crystallite size ($"nm"$ or $"Å"$).
- $K$ is the dimensionless Scherrer shape factor (typically $K = 0.90$ or $0.94$ for spherical crystallites).
- $lambda$ is the X-ray wavelength ($0.15418 "nm"$ for $C u-K_alpha$).
- $beta$ is the Full Width at Half Maximum (FWHM) of the diffraction peak in *RADIANS*:
  $ bold(beta ("radians") = "FWHM (degrees)" times frac(pi, 180 degree)) $
- $theta$ is the Bragg diffraction angle in radians:
  $ bold(theta = frac(2 theta_"peak", 2)) $

#v(2mm)

#rect(width: 100%, fill: rgb("#eff6ff"), stroke: 1pt + rgb("#3b82f6"), radius: 4pt, inset: 8pt)[
  #text(weight: "bold", fill: rgb("#1e40af"))[[Lecture Deck & FAT Numerical Problem --- 10 Marks]] \
  #text(weight: "bold")[Problem:] Estimate the average crystallite size of a synthesized nanomaterial using powder XRD data: \
  Diffraction peak position $2 theta = 38.2 degree$, Full Width at Half Maximum (FWHM) $= 0.45 degree$, X-ray source is $C u-K_alpha$ with $lambda = 0.15418 "nm"$, and Scherrer constant $K = 0.94$. \
  #text(weight: "bold", fill: rgb("#166534"))[Step-by-Step Scoring Solution:]
  1. *Calculate Bragg Angle ($theta$):*
     $ theta = frac(2 theta, 2) = frac(38.2 degree, 2) = 19.1 degree $
     $ cos theta = cos(19.1 degree) = bold(0.9449) $
  2. *Convert FWHM ($beta$) from Degrees to Radians:*
     $ beta = 0.45 degree times frac(pi, 180 degree) = 0.45 times frac(3.14159, 180) = bold(7.854 times 10^(-3) "radians") $
  3. *Apply Debye-Scherrer Formula:*
     $ D = frac(K lambda, beta cos theta) = frac(0.94 times 0.15418 "nm", (7.854 times 10^(-3) "rad") times 0.9449) $
     $ D = frac(0.14493 "nm", 7.4213 times 10^(-3)) = bold(19.53 "nm" = 195.3 thin "Å") $
  4. *Conclusion:* The synthesized nanomaterial has an average crystallite size of *19.53 nm*, confirming its nanocrystalline nature.
]
