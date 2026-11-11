#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.4cm, right: 2.4cm),
  header: context {
    if here().page() > 1 {
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: rgb("#64748b"))[VIT Applied Chemistry (BACHY101) --- Module 4: Spectroscopy & XRD]],
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
  #text(size: 16pt, weight: "bold", fill: rgb("#0f172a"))[MODULE 4: SPECTROSCOPIC & DIFFRACTION TECHNIQUES] \
  #v(1mm)
  #text(size: 11.5pt, weight: "bold", fill: rgb("#b91c1c"))[Official FAT Study Textbook & Step-by-Step Question Bank Solutions (CO: 3)] \
  #v(1mm)
  #text(size: 9pt, fill: rgb("#64748b"))[Aligned with Official VIT BACHY101 Syllabus, Department Question Bank, and Past FAT Papers]
]

#v(3mm)

#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.8pt + rgb("#cbd5e1"), radius: 5pt, inset: 11pt)[
  #text(weight: "bold", fill: rgb("#0f172a"), size: 10pt)[Scope of Module 4 (Official VIT Syllabus - All 8 Topics):] \
  #v(1.5mm)
  #text(size: 9.5pt, fill: rgb("#334155"))[
    (1) Electromagnetic radiation and light-matter interactions, (2) UV-Visible spectroscopy and Beer-Lambert law, (3) Electronic transitions and selection rules, (4) Chromophores and auxochromes, (5) Absorption shifts: Bathochromic, hypsochromic, hyperchromic, and hypochromic, (6) Powder X-ray diffraction (XRD) and Bragg's law, (7) Debye-Scherrer equation for crystallite sizing, and (8) Worked Question Bank Problems.
  ]
]

#v(4mm)

= 1. Core Syllabus Definitions & Theoretical Foundations (Line-by-Line)

#v(2mm)

*1. Electromagnetic Radiation & Light-Matter Interactions* \
Electromagnetic radiation propagates as transverse oscillating electric ($E$) and magnetic ($B$) fields at the speed of light ($c = 3.0 times 10^8 "m/s"$). Photons carry discrete quantized energy $E = h nu = (h c) / lambda$. When interacting with molecular matter:
- UV-Visible radiation ($200 - 800 "nm"$) promotes valence electrons between bonding and antibonding molecular orbitals.
- Infrared radiation ($2.5 - 15 mu"m"$) excites molecular bond stretching and bending vibrations.
- X-Rays ($0.01 - 10 "nm"$) eject inner core electrons and undergo constructive elastic diffraction from crystal planes.

#v(3.5mm)

*2. UV-Visible Spectroscopy* \
An optical absorption spectroscopy technique measuring the attenuation of monochromatic ultraviolet or visible light transmitted through a chemical solution as a function of wavelength, providing qualitative structural identity and quantitative concentration determination.

#v(3.5mm)

*3. Beer-Lambert Law* \
The fundamental quantitative relationship governing optical absorption in homogeneous solutions:
$ A = log_10(I_0 / I) = epsilon c l $
where $A$ is the dimensionless optical absorbance (optical density), $I_0$ is the incident light beam intensity, $I$ is the transmitted intensity, $c$ is the molar concentration of the absorbing solute in $"mol/L"$, $l$ is the optical path length of the sample cuvette (standard quartz cuvette $l = 1.0 "cm"$), and $epsilon$ is the molar absorptivity (molar extinction coefficient) in $"L"dot"mol"^(-1)dot"cm"^(-1)$.

#v(3.5mm)

*4. Electronic Transitions in Molecules* \
The quantum mechanical excitation of an electron from an occupied molecular orbital into an unoccupied antibonding orbital upon photon absorption:
- $sigma arrow.r sigma^*$: Requires high energy vacuum UV photons ($< 180 "nm"$), observed exclusively in saturated hydrocarbons (e.g. $C-C, C-H$ single bonds in alkanes).
- $n arrow.r sigma^*$: Requires moderate energy UV ($150 - 250 "nm"$), observed in saturated compounds bearing non-bonding heteroatom lone pairs (e.g. $C-O, C-N, C-C l$).
- $pi arrow.r pi^*$: Strong, symmetry-allowed transition ($200 - 400 "nm"$) exhibiting high molar absorptivity ($epsilon > 10000$), characteristic of unsaturated double bonds, alkenes, carbonyls, and conjugated polyenes.
- $n arrow.r pi^*$: Symmetry-forbidden transition ($250 - 400 "nm"$) with low molar absorptivity ($epsilon < 100$), occurring at longer wavelengths in carbonyls and nitrogen heterocycles.

#v(3.5mm)

*5. Chromophore* \
An unsaturated covalent functional group containing mobile $pi$-electrons that absorbs electromagnetic radiation in the UV or visible region ($200 - 800 "nm"$), imparting color or UV absorption bands to the molecule (e.g. $-C=C-, -C equiv C-, -C=O, -N=N-, -N O_2$, and aromatic phenyl rings).

#v(3.5mm)

*6. Auxochrome* \
A saturated substituent group carrying non-bonding lone pairs ($n$-electrons) that does not absorb UV radiation on its own, but when bonded directly to a chromophore, extends orbital conjugation, shifts the absorption maximum to longer wavelengths, and enhances the absorption intensity (e.g. $-O H, -N H_2, -O C H_3, -S H, -C l$).

#v(3.5mm)

*7. Bathochromic Shift (Red Shift)* \
The displacement of an absorption band maximum ($lambda_"max"$) toward longer wavelengths (lower photon energy). Caused by extended $pi$-electron conjugation, auxochromic substitution, or changes in solvent polarity.

#v(3.5mm)

*8. Hypsochromic Shift (Blue Shift)* \
The displacement of an absorption band maximum ($lambda_"max"$) toward shorter wavelengths (higher photon energy). Caused by loss of orbital conjugation (e.g. protonation of aniline $-N H_2$ to anilinium $-N H_3^+$) or specific solvent hydrogen-bonding interactions with lone pairs.

#v(3.5mm)

*9. Hyperchromic & Hypochromic Effects* \
- *Hyperchromic Effect:* An increase in absorption intensity (molar extinction coefficient $epsilon_"max"$ increases).
- *Hypochromic Effect:* A decrease in absorption intensity (molar extinction coefficient $epsilon_"max"$ decreases).

#v(3.5mm)

*10. Powder X-Ray Diffraction (Powder XRD)* \
A non-destructive physical analytical technique for identifying crystallographic phases, unit cell dimensions, and sub-micrometer crystallite domain sizes in polycrystalline materials. Monochromatic $C u space K alpha$ X-rays ($lambda = 1.5406$ Å) incident on randomly oriented crystallites generate concentric diffraction cones that satisfy Bragg's condition.

#v(3.5mm)

*11. Bragg's Law of Diffraction* \
The geometric and physical condition for constructive interference of monochromatic X-rays scattered from parallel crystallographic planes separated by interplanar spacing $d$:
$ 2 d sin theta = n lambda $
where $d$ is interplanar lattice spacing, $theta$ is the glancing Bragg angle of incidence, $n$ is an integer representing the diffraction order ($n = 1, 2, 3 dots$), and $lambda$ is the X-ray wavelength ($1.5406$ Å for $C u space K alpha$).

#v(3.5mm)

*12. Debye-Scherrer Equation for Crystallite Size* \
The fundamental formula relating diffraction peak broadening to the mean coherent crystallite domain size $D$:
$ D = (K lambda) / (beta cos theta) $
where $D$ is average crystallite size in nanometers, $K$ is the dimensionless Scherrer shape factor ($K approx 0.9$ for spherical crystallites), $lambda$ is X-ray wavelength ($0.15406 "nm"$), $beta$ is the full width at half maximum (FWHM) of the diffraction peak expressed strictly in radians (corrected for instrumental broadening: $beta = sqrt(beta_"measured"^2 - beta_"inst"^2)$), and $theta$ is the Bragg angle corresponding to the peak center.

#v(5mm)

= 2. In-Depth Chemical Theory & Step-by-Step Derivations

#v(2mm)

== Derivation of the Beer-Lambert Law
Consider a parallel beam of monochromatic light of incident intensity $I_0$ entering an absorbing homogeneous solution of molar concentration $c$.
Let $I$ be the intensity after traversing a differential thickness $d x$ of the solution.
The fractional decrease in light intensity ($-d I / I$) across the thin layer $d x$ is directly proportional to the number of absorbing molecules in that layer:
$ - (d I) / I = k' c d x $
where $k'$ is a proportionality absorption constant.
Integrating across the entire cuvette length from $x = 0$ ($I = I_0$) to $x = l$ ($I = I_t$):
$ - integral_(I_0)^(I_t) (d I) / I = k' c integral_0^l d x arrow.r.double -ln(I_t / I_0) = ln(I_0 / I_t) = k' c l $
Converting the natural logarithm to base 10 ($log_10(z) = ln(z) / 2.3026$):
$ log_10(I_0 / I_t) = (k' / 2.3026) c l = epsilon c l $
where $epsilon = k' / 2.3026$ is the molar absorptivity (extinction coefficient).
Defining Absorbance $A = log_10(I_0 / I_t)$:
$ bold(A = epsilon c l) $

#v(5mm)

= 3. VIT FAT Exam Blueprint & Master Formula Sheet

#table(
  columns: (1.5fr, 2.2fr, 2fr),
  inset: 7pt,
  stroke: 0.5pt + rgb("#cbd5e1"),
  align: (left, left, left),
  [*Technique / Law*], [*Governing Equation / Formula*], [*VIT Exam Key Insight*],
  [Beer-Lambert Law], [$A = log_10(I_0 / I) = -log_10(T) = epsilon c l$], [Transmittance $T = I / I_0$; $\%T = 100 times 10^(-A)$.],
  [Photon Energy Conversion], [$E = h nu = (h c) / lambda = (1240 "eV"dot"nm") / lambda$], [$h = 6.626 times 10^(-34) "J"dot"s"$; $c = 3.0 times 10^8 "m/s"$.],
  [Bragg's Diffraction Law], [$2 d sin theta = n lambda arrow.r.double d = (n lambda) / (2 sin theta)$], [For cubic crystal: $d_(h k l) = a / sqrt(h^2 + k^2 + l^2)$.],
  [Debye-Scherrer Formula], [$D = (K lambda) / (beta cos theta)$], [$beta$ (FWHM) MUST be converted from degrees to radians!],
  [FWHM Degree to Radian], [$beta_("rad") = beta_("deg") times (pi / 180)$], [Instrumental correction: $beta = sqrt(beta_"obs"^2 - beta_"inst"^2)$.]
)

#v(5mm)

= 4. Worked VIT Question Bank & Past FAT Numerical Problems

#v(2mm)

#rect(width: 100%, fill: rgb("#fef2f2"), stroke: 0.8pt + rgb("#f87171"), radius: 5pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb("#991b1b"))[VIT FAT Problem 1 (10 Marks): Beer-Lambert Quantitative Analysis] \
  #v(1mm)
  A solution of a compound has an optical absorbance of $0.699$ at $lambda_"max" = 450 "nm"$ when placed in a $1.00 "cm"$ path length cuvette. Given its molar absorptivity is $epsilon = 1.40 times 10^4 "L"dot"mol"^(-1)dot"cm"^(-1)$. \
  (a) Calculate the molar concentration ($c$) of the compound in the solution. \
  (b) Calculate the percentage transmittance ($\%T$) of this solution. \
  (c) If the solution is diluted to three times its original volume ($3V_0$), what will be its new absorbance and percentage transmittance?
]

#v(2mm)

*Step-by-Step Solution:*
- *Part (a): Molar Concentration:*
  $ c = A / (epsilon l) = 0.699 / (1.40 times 10^4 "L"dot"mol"^(-1)dot"cm"^(-1) times 1.00 "cm") = bold(4.993 times 10^(-5) "mol/L") $

- *Part (b): Percentage Transmittance ($\%T$):*
  $ A = -log_10(T) arrow.r.double T = 10^(-A) = 10^(-0.699) = 0.19999 $
  $ \%T = T times 100 = bold(20.0%) $

- *Part (c): 3-Fold Dilution:*
  When volume is tripled, concentration becomes $c' = c / 3$.
  Since absorbance is directly proportional to concentration:
  $ A' = A / 3 = 0.699 / 3 = bold(0.233) $
  New transmittance:
  $ T' = 10^(-0.233) = 0.5848 arrow.r.double \%T' = bold(58.48%) $

#v(2mm)

#rect(width: 100%, fill: rgb("#f0fdf4"), stroke: 0.8pt + rgb("#86efac"), radius: 4pt, inset: 8pt)[
  *Boxed Final Answers:* \
  (a) Molar Concentration $c = bold(4.99 times 10^(-5) "M")$ \
  (b) Percentage Transmittance $\%T = bold(20.0%)$ \
  (c) Diluted Absorbance $A' = bold(0.233)$ and $\%T' = bold(58.5%)$
]

#v(4mm)

#rect(width: 100%, fill: rgb("#fef2f2"), stroke: 0.8pt + rgb("#f87171"), radius: 5pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb("#991b1b"))[VIT FAT Problem 2 (10 Marks): Powder XRD & Debye-Scherrer Crystallite Sizing] \
  #v(1mm)
  In a Powder XRD experiment using $C u space K alpha$ radiation ($lambda = 1.5406$ Å $= 0.15406 "nm"$), a prominent diffraction peak appears at $2 theta = 38.40 thin degree$. The measured Full Width at Half Maximum (FWHM) of this peak is $beta = 0.45 thin degree$. \
  (a) Calculate the interplanar lattice spacing $d$ for this crystal plane. \
  (b) Using the Debye-Scherrer equation with shape factor $K = 0.90$, calculate the average crystallite size ($D$) in nanometers.
]

#v(2mm)

*Step-by-Step Solution:*
- *Part (a): Bragg Interplanar Spacing ($d$):*
  Glancing angle $theta$:
  $ theta = (2 theta) / 2 = 38.40 thin degree / 2 = 19.20 thin degree $
  $ sin(19.20 thin degree) = 0.32887 $
  Applying Bragg's law ($n = 1$):
  $ d = lambda / (2 sin theta) = (1.5406 "Å") / (2 times 0.32887) = 1.5406 / 0.65774 = bold(2.342 "Å") quad (bold(0.2342 "nm")) $

- *Part (b): Debye-Scherrer Crystallite Sizing:*
  Convert peak broadening $beta$ from degrees to radians:
  $ beta_("rad") = 0.45 thin degree times (pi / 180) = 0.45 times 0.0174533 = bold(7.854 times 10^(-3) "rad") $
  $ cos theta = cos(19.20 thin degree) = 0.94438 $
  Applying Debye-Scherrer formula:
  $ D = (K lambda) / (beta cos theta) = (0.90 times 0.15406 "nm") / (7.854 times 10^(-3) times 0.94438) $
  $ D = 0.138654 / (7.4171 times 10^(-3)) = bold(18.69 "nm") $

#v(2mm)

#rect(width: 100%, fill: rgb("#f0fdf4"), stroke: 0.8pt + rgb("#86efac"), radius: 4pt, inset: 8pt)[
  *Boxed Final Answers:* \
  (a) Interplanar Lattice Spacing $d = bold(2.342 "Å") = bold(0.2342 "nm")$ \
  (b) Average Crystallite Size $D = bold(18.69 "nm")$
]
