
#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.2cm, right: 2.2cm),
  header: context {
    if here().page() > 1 {
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: luma(90))[VIT BACHY101 --- Module 4: Spectroscopy & Diffraction]],
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
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT BACHY101 --- Module 4: Spectroscopy & Diffraction] \
  #v(2mm)
  #text(size: 15pt, weight: "black")[MODULE 4: SPECTROSCOPIC AND DIFFRACTION TECHNIQUES] \
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[(CO: 3)] \
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Complete Study Textbook, Step-by-Step Derivations & VIT FAT Question Bank] \
  #text(size: 9pt, fill: luma(100))[Aligned with Official VIT BACHY101 Course Page Syllabus, Question Bank, and Past FAT Papers]
]

#v(3mm)

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
