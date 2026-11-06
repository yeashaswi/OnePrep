#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.3cm, right: 2.3cm),
  header: context {
    let p = counter(page).get().first()
    if p > 1 [
      #grid(
        columns: (1fr, 1fr),
        align: (left, right),
        text(size: 8pt, fill: rgb(101, 106, 118))[VIT BACHY105 — Module 4: Spectroscopy & Diffraction],
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
  #text(size: 13.5pt, weight: "bold", fill: rgb(139, 0, 0))[MODULE 4: SPECTROSCOPIC AND DIFFRACTION TECHNIQUES (CO: 4)] \
  #v(2pt)
  #text(size: 10.5pt, weight: "bold")[Complete Comprehensive Textbook: UV-Visible Spectrophotometry, Beer-Lambert Law, Powder XRD, Debye-Scherrer & Solved VIT FAT Question Bank] \
  #v(1pt)
  #text(size: 8.5pt, fill: rgb(85, 85, 85))[Aligned with Official VIT BACHY105 Applied Chemistry Course Syllabus, Department Question Bank & VIT FAT Papers]
]

#v(8pt)

#rect(width: 100%, fill: rgb(240, 244, 248), stroke: 1pt + rgb(180, 200, 220), radius: 4pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb(15, 23, 42))[Syllabus Scope & Competency Checklist (Module 4):] \
  #text(size: 9pt)[
    - *Foundations of Spectroscopy:* Electromagnetic radiation interaction with matter, energy quantization ($Delta E = h nu = (h c) / lambda$); molecular transitions (electronic UV-Vis, vibrational IR, rotational microwave); absorption vs emission spectra.
    - *UV-Visible Spectrophotometry:* Electronic transitions ($sigma -> sigma^*, n -> sigma^*, pi -> pi^*, n -> pi^*$); Chromophores and Auxochromes; spectral shift nomenclature (Bathochromic / Red shift, Hypsochromic / Blue shift, Hyperchromic, Hypochromic effects).
    - *Instrumentation of UV-Vis Spectrophotometer:* Dual-beam optical layout; radiation sources (Deuterium discharge lamp $190 - 350" nm"$, Tungsten-halogen lamp $350 - 800" nm"$); diffraction grating monochromators; quartz vs optical glass sample cuvettes; Photomultiplier Tube (PMT) detectors.
    - *Beer-Lambert Law:* Rigorous mathematical derivation of Absorbance ($A = -log_10(I_t / I_0) = epsilon C l$); Molar Absorptivity ($epsilon$); percentage transmittance ($\%T = 100 times 10^(-A)$); real chemical and instrumental deviations from Beer's law.
    - *Foundations of X-Ray Diffraction:* Dual wave-particle nature of X-rays; generation via electron bombardment on copper target ($"Cu" K_alpha$ radiation, $lambda = 1.5418" \u00c5"$); crystalline lattices, unit cells, Miller indices $(h k l)$, interplanar spacing ($d_(h k l)$).
    - *Bragg's Law & Powder XRD Technique:* Derivation of path difference ($2 d sin theta = n lambda$); powder polycrystalline diffraction method; diffractometer geometry, $2 theta$ scanning, peak intensity and angle interpretation.
    - *Debye-Scherrer Equation & Crystallite Size:* Derivation of peak broadening ($D = (K lambda) / (beta cos theta)$); shape factor ($K approx 0.9$); Full Width at Half Maximum (FWHM, $beta$) strictly converted from degrees to radians ($beta_"rad" = beta_"deg" times pi / 180$); instrumental vs sample broadening; crystallite size vs grain size.
  ]
]

#v(10pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[1. Fundamental Concepts of Molecular Spectroscopy]

=== 1.1 The Electromagnetic Spectrum & Energy Quantization
Spectroscopy is the study of the interaction between electromagnetic radiation and matter. Electromagnetic radiation consists of mutually perpendicular oscillating electric ($E$) and magnetic ($B$) fields propagating through space at the speed of light ($c = 2.998 times 10^8" m/s"$).
By Planck's quantum hypothesis, energy is absorbed or emitted only in discrete packets called *photons*:
$ Delta E = E_2 - E_1 = h nu = (h c) / lambda = h c "tilde"(nu) $
where $h = 6.626 times 10^(-34)" J" dot.c "s"$ is Planck's constant, $nu$ is frequency ($"s"^(-1)$ or $"Hz"$), $lambda$ is wavelength, and $"tilde"(nu) = 1 / lambda$ is the wavenumber ($"cm"^(-1)$).

=== 1.2 Hierarchy of Molecular Energy Transitions
A molecule possesses translational, rotational, vibrational, and electronic energy states. By the Born-Oppenheimer approximation:
$ E_"total" = E_"elec" + E_"vib" + E_"rot" + E_"trans" $
The energy spacing between states follows: $Delta E_"elec" >> Delta E_"vib" >> Delta E_"rot" >> Delta E_"trans"$:
1. *Microwave Region ($1 - 100" cm"^(-1)$):* Low energy photons ($10^(-4) - 10^(-2)" eV"$) induce rotational transitions in molecules possessing a permanent dipole moment ($"HCl", "CO"$).
2. *Infrared (IR) Region ($400 - 4000" cm"^(-1)$):* Medium energy photons ($0.05 - 0.5" eV"$) induce molecular bond vibrational stretching and bending transitions accompanied by a net change in dipole moment.
3. *Ultraviolet-Visible (UV-Vis) Region ($190 - 800" nm"$ or $1.5 - 6.5" eV"$):* High energy photons promote outer valence bonding or non-bonding electrons into higher unoccupied antibonding molecular orbitals.

#v(8pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[2. UV-Visible Spectrophotometry: Electronic Transitions & Shifts]

=== 2.1 Types of Electronic Transitions
When an organic molecule absorbs UV or visible light, valence electrons undergo transitions between molecular orbitals:
- $sigma -> sigma^*$ Transitions: High energy requirement ($lambda < 180" nm"$, Vacuum UV). Saturated alkanes (e.g., methane, ethane with $C-C, C-H$ single bonds).
- $n -> sigma^*$ Transitions: Non-bonding lone pair electrons on heteroatoms (O, N, S, halogens) promoted to $sigma^*$ antibonding orbitals ($lambda approx 180 - 250" nm"$) (e.g., alcohols, amines, alkyl halides).
- $pi -> pi^*$ Transitions: Absorption by unsaturated systems containing multiple bonds ($C=C, C=C-C=C, "aromatic rings"$). Highly probable, intense absorption bands ($epsilon > 10000" L/(mol cm)"$) occurring at $lambda approx 170 - 220" nm"$.
- $n -> pi^*$ Transitions: Promotion of a heteroatom lone pair into an unoccupied $pi^*$ orbital (e.g., carbonyl compounds $>C=O$, nitro compounds $-"NO"_2$). Symmetry-forbidden by selection rules, yielding weak absorption bands ($epsilon approx 10 - 100" L/(mol cm)"$) at longer wavelengths ($lambda approx 280 - 320" nm"$).

=== 2.2 Chromophores, Auxochromes & Spectral Shifts
1. *Chromophore:* An isolated covalently unsaturated functional group capable of absorbing UV or visible radiation independently (e.g., $>C=C<, >C=O, -"C" "equiv" "N", -"N"="O", -"NO"_2$, benzene ring).
2. *Auxochrome:* A saturated substituent group containing non-bonding lone pairs that does not absorb UV radiation itself, but when attached directly to a chromophore, deepens the color and shifts absorption to longer wavelengths (e.g., $-"OH", -"NH"_2, -"OCH"_3, -"Cl", -"SH"$).
3. *Spectral Shift Terminology:*
   - *Bathochromic Shift (Red Shift):* Shift of absorption maximum ($lambda_"max"$) to a *longer wavelength* (lower energy). Caused by extending conjugated double bonds (which narrows the HOMO-LUMO gap) or attaching electron-donating auxochromes.
   - *Hypsochromic Shift (Blue Shift):* Shift of $lambda_"max"$ to a *shorter wavelength* (higher energy). Occurs upon protonation of aniline ($"C"_6 "H"_5 "NH"_2 -> "C"_6 "H"_5 "NH"_3^+$), which locks the nitrogen lone pair, eliminating resonance with the aromatic ring.
   - *Hyperchromic Effect:* An increase in molar absorption intensity ($epsilon_"max"$).
   - *Hypochromic Effect:* A decrease in molar absorption intensity ($epsilon_"max"$).

#v(8pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[3. The Beer-Lambert Law: Derivation & Instrumentation]

=== 3.1 Mathematical Derivation of Beer-Lambert Law
Consider a beam of monochromatic radiation of initial intensity $I_0$ passing through an absorbing solution of concentration $C$ contained in an optical cell of pathlength $l$:
- *Lambert's Law (1760):* The fraction of light absorbed is directly proportional to the thickness of the medium ($d x$), independent of initial intensity:
$ - (d I) / I = k_1 d x $
- *Beer's Law (1852):* The fraction of light absorbed is directly proportional to the number of absorbing molecules per unit volume (molar concentration $C$):
$ - (d I) / I = k_2 C $
Combining both laws into the differential rate of attenuation:
$ - (d I) / I = k' C d x $
Integrating over the pathlength from $x = 0$ (where $I = I_0$) to $x = l$ (where $I = I_t$):
$ - integral_(I_0)^(I_t) (d I) / I = k' C integral_0^l d x quad ==> quad -ln(I_t / I_0) = ln(I_0 / I_t) = k' C l $
Converting natural logarithm to common base-10 logarithm ($ln X = 2.303 log_10 X$):
$ log_10(I_0 / I_t) = (k' / 2.303) C l = epsilon C l $
Defining *Absorbance ($A$)* or Optical Density ($"OD"$):
$ A = log_10(I_0 / I_t) = epsilon C l $
where:
- $A$: Dimensionless absorbance.
- $epsilon$: Molar Absorptivity or Molar Extinction Coefficient ($"L mol"^(-1)" cm"^(-1)$), a characteristic physical constant of the absorbing analyte at wavelength $lambda$.
- $C$: Molar concentration of analyte ($"mol/L"$).
- $l$: Optical pathlength of the sample cell ($"cm"$, standard $l = 1.00" cm"$).
- *Transmittance ($T$):* Fraction of incident light transmitted through the solution:
$ T = I_t / I_0 = 10^(-A) quad ==> quad \%T = 100 times T = 100 times 10^(-A) $
$ A = -log_10 T = -log_10(\%T / 100) = 2 - log_10(\%T) $

=== 3.2 Instrumentation of Dual-Beam UV-Vis Spectrophotometer
A modern double-beam spectrophotometer splits the monochromatic light into two identical beams, simultaneously passing one through the sample cuvette and the other through an identical reference/solvent blank cuvette:
1. *Light Sources:*
   - *Deuterium ($D_2$) Discharge Lamp:* Provides intense continuous emission in the UV region ($190 - 350" nm"$).
   - *Tungsten-Halogen Filament Lamp:* Provides continuous radiation across the Visible and Near-IR range ($350 - 1100" nm"$).
2. *Monochromator:*
   - Consists of an entrance slit, collimating mirror, reflection diffraction grating (typically $1200 - 2400" grooves/mm"$), and focusing exit slit to isolate narrow monochromatic wavelength bands ($Delta lambda < 1" nm"$).
3. *Optical Cuvettes (Sample Cells):*
   - *Quartz (Fused Silica) Cuvettes:* Mandatory for UV measurements below $350" nm"$ because optical glass and plastics absorb strongly in the UV spectrum.
   - *Optical Glass Cuvettes:* Suitable strictly for visible measurements ($350 - 800" nm"$).
4. *Detectors:*
   - *Photomultiplier Tube (PMT):* Photoelectric cathode emits primary photoelectrons, which strike a series of secondary dynodes, cascading an amplification factor of $10^6 - 10^7$ electrons per photon, offering extreme sensitivity for trace detection.

#v(8pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[4. Powder X-Ray Diffraction (PXRD) & Debye-Scherrer Crystallite Sizing]

=== 4.1 X-Ray Production & Bragg's Law
X-rays are high-energy electromagnetic radiation with wavelengths of the same order of magnitude as interatomic spacings in crystalline solids ($lambda approx 0.5 - 2.5" \u00c5"$ or $0.05 - 0.25" nm"$).
- *Bragg's Law Derivation (William Lawrence Bragg, 1913):*
  Consider a collimated monochromatic X-ray beam incident at grazing angle $theta$ on parallel crystal lattice planes with Miller indices $(h k l)$ separated by interplanar distance $d$:
  Ray 1 reflects from the first atomic plane at angle $theta$.
  Ray 2 penetrates and reflects from the second atomic plane at depth $d$.
  The geometric extra pathlength traveled by Ray 2 relative to Ray 1 is $A B + B C = d sin theta + d sin theta = 2 d sin theta$.
  For constructive interference and intense diffraction peaks to emerge, this path difference must equal an integer number of complete wavelengths ($n lambda$):
  $ 2 d sin theta = n lambda $
  where $n$ is the diffraction order ($n = 1, 2, ...$), $d$ is interplanar spacing, $theta$ is Bragg angle, and $lambda$ is wavelength (typically $1.5418" \u00c5"$ for $"Cu" K_alpha$).
- *Interplanar Spacing for Cubic Crystals:*
  $ d_(h k l) = a / sqrt(h^2 + k^2 + l^2) $
  where $a$ is the cubic unit cell edge length.

=== 4.2 The Powder Method & Diffractometer Recording
In Powder XRD, the sample is ground into an ultrafine powder containing millions of randomly oriented crystalline grains. Statistically, for every family of $(h k l)$ planes, thousands of crystallites are oriented at the exact Bragg angle $theta$ to the incident beam, forming concentric *Debye-Scherrer diffraction cones*.
The detector rotates around the sample through an angle of $2 theta$, recording X-ray counts per second as a function of scattering angle $2 theta$. The resulting diffractogram exhibits sharp peaks whose positions ($2 theta$) identify the crystal phase and lattice parameters, while peak intensities indicate atomic positions within the unit cell.

=== 4.3 The Debye-Scherrer Equation for Crystallite Size
In an ideal infinite crystal, diffraction peaks are infinitely sharp mathematical delta functions. In real nanostructured materials where crystallite size $D < 100" nm"$, the finite number of atomic planes results in incomplete destructive interference at angles slightly away from $theta$, causing physical *broadening of diffraction peaks*.
- *Paul Scherrer's Formula (1918):*
$ D = (K lambda) / (beta cos theta) $
where:
- $D$: Mean crystallite size (average diameter of single-crystalline coherent scattering domains) along the direction perpendicular to the reflecting plane.
- $K$: Dimensionless shape factor (typically $K = 0.90$ for spherical crystallites with cubic symmetry, $K = 0.94$ for FWHM).
- $lambda$: X-ray wavelength ($0.15418" nm"$ for $"Cu" K_alpha$).
- $theta$: Bragg diffraction angle (one-half of the recorded detector peak position $2 theta$).
- $beta$: The *Full Width at Half Maximum (FWHM)* of the diffraction peak measured in *radians*.
- *Critical Calculation Rule:* Diffractometer software reports FWHM in *degrees ($2 theta$)*. It must be converted into radians before substitution into the Scherrer equation:
$ beta_"rad" = beta_"deg" times pi / 180 = beta_"deg" times (3.14159 / 180) $
- *Instrumental Broadening Correction:*
  The observed experimental peak width $beta_"obs"$ contains instrumental broadening $beta_"inst"$ caused by finite X-ray source slit width and beam divergence. True sample broadening is obtained via Gaussian deconvolution:
  $ beta_"true"^2 = beta_"obs"^2 - beta_"inst"^2 $

#v(10pt)
#line(length: 100%, stroke: 0.5pt + rgb(180, 200, 220))
#v(6pt)

#text(size: 12pt, weight: "bold", fill: rgb(139, 0, 0))[VIT FAT Solved Question Bank: Step-by-Step Numerical Derivations]

#v(6pt)
#rect(width: 100%, fill: rgb(249, 250, 251), stroke: 1pt + rgb(220, 225, 230), radius: 4pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb(15, 23, 42))[FAT Problem 1: Debye-Scherrer Crystallite Size Determination from Powder XRD] \
  *Question (10 Marks):* A synthesized titanium dioxide ($"TiO"_2$, anatase) nanopowder is characterized by Powder X-Ray Diffraction using $"Cu" K_alpha$ radiation ($lambda = 1.5418" \u00c5" = 0.15418" nm"$).
  The prominent (101) anatase diffraction peak is recorded at a detector angle of $2 theta = 25.32 degree$.
  The Full Width at Half Maximum (FWHM) of this peak is measured to be $beta_"obs" = 0.420 degree$.
  The instrumental broadening determined using a standard silicon reference is $beta_"inst" = 0.080 degree$.
  Taking the Scherrer shape factor as $K = 0.90$:
  ("i") Calculate the Bragg diffraction angle $theta$ in degrees and radians.
  ("ii") Correct for instrumental broadening to find the true physical sample broadening $beta_"true"$ in degrees and convert it strictly into radians.
  ("iii") Using the Debye-Scherrer equation, compute the average crystallite size $D$ of the $"TiO"_2$ nanoparticles in nanometers.
  ("iv") Calculate the interplanar spacing $d_(101)$ in Angstroms using Bragg's law for first-order diffraction ($n = 1$).

  #v(4pt)
  #text(weight: "bold", fill: rgb(139, 0, 0))[Complete Step-by-Step Solution:] \
  *Step 1: Calculate Bragg Angle $theta$:*
  $ 2 theta = 25.32 degree quad ==> quad theta = 25.32 / 2 = 12.66 degree $
  $ cos theta = cos(12.66 degree) = 0.97568 $

  *Step 2: Correct Peak Broadening & Convert to Radians:*
  Applying Gaussian deconvolution correction:
  $ beta_"true" = sqrt(beta_"obs"^2 - beta_"inst"^2) = sqrt((0.420)^2 - (0.080)^2) = sqrt(0.1764 - 0.0064) = sqrt(0.1700) = 0.4123 degree $
  Convert degrees to radians:
  $ beta_"rad" = beta_"true" times (pi / 180) = 0.4123 times (3.14159 / 180) = 0.4123 times 0.017453 = 7.196 times 10^(-3)" radians" $

  *Step 3: Debye-Scherrer Crystallite Size Calculation:*
  $ D = (K lambda) / (beta_"rad" cos theta) $
  $ D = (0.90 times 0.15418" nm") / ((7.196 times 10^(-3)) times 0.97568) = (0.13876" nm") / (7.021 times 10^(-3)) = 19.764" nm" $

  *Step 4: Interplanar Spacing $d_(101)$ using Bragg's Law:*
  $ 2 d sin theta = n lambda quad ==> quad d = lambda / (2 sin theta) $
  $ sin theta = sin(12.66 degree) = 0.21919 $
  $ d_(101) = (1.5418" \u00c5") / (2 times 0.21919) = 1.5418 / 0.43838 = 3.517" \u00c5" = 0.3517" nm" $
  (Matches standard ICDD reference for anatase (101) planes at $d = 3.52" \u00c5"$).

  *Boxed Final Answers:*
  $ theta = 12.66 degree, quad beta_"rad" = 7.20 times 10^(-3)" rad", quad D = 19.76" nm", quad d_(101) = 3.52" \u00c5". $
]

#v(8pt)
#rect(width: 100%, fill: rgb(249, 250, 251), stroke: 1pt + rgb(220, 225, 230), radius: 4pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb(15, 23, 42))[FAT Problem 2: Beer-Lambert Law Quantitative Photometric Analysis] \
  *Question (10 Marks):* A standard solution of potassium permanganate ($"KMnO"_4$, molar mass $158.03" g/mol"$) of concentration $C_1 = 4.0 times 10^(-5)" M"$ exhibits a transmittance of $T_1 = 45.0\%$ at its absorption maximum $lambda_"max" = 525" nm"$ in an optical cuvette of pathlength $l = 1.00" cm"$.
  ("i") Calculate the absorbance $A_1$ of this standard solution.
  ("ii") Determine the molar absorptivity $epsilon$ of $"KMnO"_4$ at $525" nm"$ with appropriate units.
  ("iii") An industrial wastewater effluent sample containing an unknown concentration of permanganate is analyzed under identical conditions and exhibits an absorbance of $A_2 = 0.625$. Calculate the molar concentration of permanganate in the wastewater.
  ("iv") Express the permanganate concentration in the wastewater in milligrams per liter ($"mg/L"$" or ppm").

  #v(4pt)
  #text(weight: "bold", fill: rgb(139, 0, 0))[Complete Step-by-Step Solution:] \
  *Step 1: Calculate Standard Absorbance $A_1$:*
  $ A_1 = 2 - log_10(\%T) = 2 - log_10(45.0) = 2 - 1.6532 = 0.3468 $

  *Step 2: Determine Molar Absorptivity $epsilon$:*
  From Beer-Lambert law ($A = epsilon C l$):
  $ epsilon = A_1 / (C_1 times l) = 0.3468 / ((4.0 times 10^(-5)" mol/L") times 1.00" cm") = 0.3468 / (4.0 times 10^(-5)) = 8670.0" L mol"^(-1)" cm"^(-1) $

  *Step 3: Determine Unknown Wastewater Concentration:*
  $ C_2 = A_2 / (epsilon times l) = 0.625 / (8670.0 times 1.00) = 7.2088 times 10^(-5)" mol/L" $

  *Step 4: Express Concentration in ppm ($"mg/L"$):*
  $ "Mass Concentration" = C_2 times M_("KMnO"_4) = (7.2088 times 10^(-5)" mol/L") times (158.03" g/mol") $
  $ "Mass Concentration" = 0.01139" g/L" = 11.39" mg/L" = 11.39" ppm" $

  *Boxed Final Answers:*
  $ A_1 = 0.347, quad epsilon = 8670" L/(mol cm)", quad C_"unknown" = 7.21 times 10^(-5)" M", quad "Concentration" = 11.39" mg/L (ppm)". $
]
