#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.3cm, right: 2.3cm),
  header: context {
    let p = counter(page).get().first()
    if p > 1 [
      #grid(
        columns: (1fr, 1fr),
        align: (left, right),
        text(size: 8pt, fill: rgb(101, 106, 118))[VIT BACHY105 — Module 3: Functional Materials],
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
  #text(size: 13.5pt, weight: "bold", fill: rgb(139, 0, 0))[MODULE 3: FUNCTIONAL MATERIALS (CO: 3)] \
  #v(2pt)
  #text(size: 10.5pt, weight: "bold")[Complete Comprehensive Textbook: Band Theory, Semiconductors, Superconductors, Magnetic Materials, Nanomaterials & Solved VIT FAT Question Bank] \
  #v(1pt)
  #text(size: 8.5pt, fill: rgb(85, 85, 85))[Aligned with Official VIT BACHY105 Applied Chemistry Course Syllabus, Department Question Bank & VIT FAT Papers]
]

#v(8pt)

#rect(width: 100%, fill: rgb(240, 244, 248), stroke: 1pt + rgb(180, 200, 220), radius: 4pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb(15, 23, 42))[Syllabus Scope & Competency Checklist (Module 3):] \
  #text(size: 9pt)[
    - *Electrical Materials:* Ohm's law ($J = sigma E$), electrical resistivity ($rho$), conductivity ($sigma = n e mu$).
    - *Band Theory of Solids:* Overlap of atomic orbitals, valence band (VB), conduction band (CB), forbidden energy bandgap ($E_g$); classification into conductors ($E_g = 0$), semiconductors ($0 < E_g < 3.0" eV"$), and insulators ($E_g > 5.0" eV"$).
    - *Semiconductors & Superconductors:* Intrinsic semiconductors ($n = p = n_i$); extrinsic semiconductors (n-type donor doping, p-type acceptor doping, Fermi level shifts); Superconductivity fundamentals, critical temperature ($T_c$), critical magnetic field ($H_c(T) = H_0 [1 - (T/T_c)^2]$), zero electrical resistance, Meissner effect (perfect diamagnetism $chi = -1, B = 0$), Type-I vs Type-II superconductors, BCS electron pairing (Cooper pairs).
    - *Magnetic Materials:* Origins of magnetic moments (electron orbital and spin angular momentum); Diamagnetism ($chi < 0$); Paramagnetism ($chi > 0, chi prop 1/T$ Curie law); Ferromagnetism (spontaneous magnetic domains, Weiss molecular field, Curie-Weiss law); Antiferromagnetism (sub-lattice antiparallel cancellation, Néel temperature $T_N$); Ferrimagnetism (ferrites, uncancelled antiparallel moments); B-H Hysteresis loop (Retentivity $B_r$, Coercivity $H_c$, magnetic domain wall pinning, hard vs soft magnetic materials for data storage).
    - *Liquid Cooling & Thermal Fluids:* Heat transfer mechanisms, types of coolants (deionized water, ethylene glycol-water mixtures, dielectric mineral/fluorocarbon oils, liquid metals like Ga-In alloys), thermal conductivity ($k$), nanofluids for CPU/EV thermal management.
    - *Nanomaterials & Quantum Dots:* Nanoscale regime ($1 - 100" nm"$); high surface-area-to-volume ratio ($S/V prop 1/r$); Top-down synthesis (ball milling, photolithography, chemical etching) vs Bottom-up synthesis (sol-gel, chemical vapor deposition CVD, hydrothermal, coprecipitation); Bulk gold (inert, metallic yellow, melting point $1064 degree"C"$) vs Nano gold (catalytically active, localized surface plasmon resonance LSPR ruby red color, melting point depression down to $300 degree"C"$); Quantum confinement effect, exiton Bohr radius, Quantum Dots, Brus equation for size-dependent bandgap tuning.
  ]
]

#v(10pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[1. Electrical Materials & Band Theory of Solids]

=== 1.1 Electrical Conduction & Ohm's Law
At the macroscopic level, electrical current density $J$ is directly proportional to the applied electric field $E$:
$ J = sigma E = 1 / rho E $
where $sigma$ is electrical conductivity ($"S/m"$), $rho$ is electrical resistivity ($Omega dot.c "m"$), $n$ is free charge carrier concentration, $e$ is electronic charge ($1.602 times 10^(-19)" C"$), and $mu$ is charge carrier mobility:
$ sigma = n e mu_e + p e mu_h $

=== 1.2 Band Theory of Solids
When an enormous number of atoms ($N approx 10^(23)$) assemble to form a crystalline solid lattice, their discrete atomic orbitals overlap and split into continuous allowed energy bands separated by forbidden energy gaps (*bandgaps, $E_g$*):
1. *Valence Band (VB):* The highest energy band occupied by valence electrons at $0" K"$.
2. *Conduction Band (CB):* The lowest unoccupied or partially filled energy band where excited electrons are free to drift under an electric field.
3. *Classification:*
   - *Metals (Conductors):* Conduction and valence bands overlap ($E_g = 0$), or the valence band is only partially filled (e.g., Cu, Al, Na). Thermal energy easily excites electrons into adjacent vacant states ($sigma approx 10^7" S/m"$). As temperature rises, lattice phonon scattering increases, causing resistance to increase ($rho prop T$).
   - *Semiconductors:* Possess a narrow forbidden energy bandgap ($0.5 <= E_g <= 3.0" eV"$) (e.g., Si with $E_g = 1.12" eV"$, Ge with $E_g = 0.67" eV"$, GaAs with $E_g = 1.42" eV"$). At $0" K"$, the valence band is completely full and conduction band is completely empty (perfect insulator). Thermal energy at room temperature excites electrons across $E_g$, creating free electrons in CB and vacant holes in VB. Conductivity increases exponentially with temperature ($sigma prop e^(-E_g / (2 k_B T))$).
   - *Insulators:* Possess an extremely wide forbidden bandgap ($E_g > 5.0" eV"$) (e.g., diamond with $E_g = 5.47" eV"$, quartz $"SiO"_2$ with $E_g = 9.0" eV"$). Thermal excitation at normal temperatures is virtually zero ($sigma < 10^(-12)" S/m"$).

#v(8pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[2. Semiconductors & The Physics of Superconductivity]

=== 2.1 Intrinsic vs Extrinsic Semiconductors
- *Intrinsic Semiconductors:* Pure elemental semiconductors (pure Si or Ge). Carrier generation is purely thermal:
$ n = p = n_i = sqrt(N_c N_v) e^(-E_g / (2 k_B T)) $
The Fermi level ($E_F$) lies exactly at the center of the bandgap: $E_F = (E_c + E_v) / 2$.
- *Extrinsic Semiconductors (Doped):*
  1. *N-Type (Donor Doped):* Doped with pentavalent impurities (P, As, Sb). Four valence electrons form covalent bonds; the fifth electron is loosely bound ($E_d approx 0.05" eV"$ below CB). Majority carriers are electrons ($n approx N_D >> p$). The Fermi level shifts upward near the conduction band edge ($E_F approx E_c - k_B T ln(N_c / N_D)$).
  2. *P-Type (Acceptor Doped):* Doped with trivalent impurities (B, Al, Ga, In). Creates electron deficiency (holes) in the valence band ($E_a approx 0.05" eV"$ above VB). Majority carriers are holes ($p approx N_A >> n$). The Fermi level shifts downward near the valence band edge ($E_F approx E_v + k_B T ln(N_v / N_A)$).

=== 2.2 Superconductivity: Zero Resistance & The Meissner Effect
Discovered by Heike Kamerlingh Onnes (1911) in mercury at $4.2" K"$:
- *Zero Electrical Resistance:* Below a characteristic *Critical Temperature ($T_c$)*, electrical resistivity drops abruptly to zero ($rho < 10^(-25) Omega dot.c "m"$). Persistent currents induced in superconducting rings circulate indefinitely without attenuation.
- *Critical Magnetic Field ($H_c$):* Superconductivity is destroyed if an external magnetic field exceeds $H_c(T)$:
$ H_c(T) = H_0 [ 1 - (T / T_c)^2 ] $
- *The Meissner Effect (Perfect Diamagnetism):*
  When cooled below $T_c$ in the presence of an external magnetic field $H$, a superconductor completely expels all magnetic flux from its interior ($B = 0$):
  $ B = mu_0 (H + M) = 0 quad ==> quad M = -H quad ==> quad chi = M / H = -1 $
  The magnetic susceptibility is identically $-1$. This diamagnetic expulsion produces stable magnetic levitation (Maglev trains).
- *BCS Theory (Cooper Pairs):*
  John Bardeen, Leon Cooper, and John Robert Schrieffer (1957) explained that below $T_c$, electron-lattice-electron interactions mediated by acoustic phonons overcome Coulomb repulsion, binding electrons of opposite momentum and spin into bosons called *Cooper Pairs* ($k arrow.t, -k arrow.b$). Cooper pairs condense into a macroscopic quantum ground state that flows through the crystal lattice without scattering.

#v(8pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[3. Magnetic Materials & B-H Hysteresis Loops]

=== 3.1 Classification of Magnetic Materials
Magnetism originates from atomic magnetic dipole moments caused by electron orbital motion ($bold(mu)_l$) and intrinsic electron spin ($bold(mu)_s = -g mu_B bold(S)$).
1. *Diamagnetism:* Present in all atoms with completely filled electron shells (paired electrons, net $bold(mu) = 0$). External field induces opposing orbital currents (Lenz's law). Susceptibility is negative, small ($chi approx -10^(-5)$), and temperature-independent (e.g., Bi, Cu, Au, water).
2. *Paramagnetism:* Materials with permanent unpaired atomic magnetic dipole moments that are randomly oriented by thermal agitation. External field weakly aligns dipoles. Susceptibility is positive, small ($chi approx 10^(-4) - 10^(-2)$), and inversely proportional to temperature (*Curie's Law*):
$ chi = C / T $
3. *Ferromagnetism:* Materials (Fe, Co, Ni, NdFeB) exhibiting strong spontaneous magnetization below the *Curie Temperature ($T_c$)* even in zero applied field. Quantum mechanical *exchange interaction* aligns adjacent electron spins parallel across microscopic domains ($10 - 100 mu"m"$). Above $T_c$, thermal energy destroys domain alignment, transforming the material into a paramagnet following the *Curie-Weiss Law*:
$ chi = C / (T - theta) $
4. *Antiferromagnetism:* Exchange interaction favors antiparallel alignment of adjacent atomic spins on interlocking sublattices, resulting in zero net macroscopic magnetic moment below the *Néel Temperature ($T_N$)* (e.g., MnO, FeO, Cr).
5. *Ferrimagnetism:* Antiparallel sublattices possess unequal magnetic moment magnitudes, yielding a net spontaneous magnetization (e.g., Ferrites $"Fe"_3 "O"_4$, $"NiZnFe"_2 "O"_4$). Highly insulating, preventing eddy current losses at high RF frequencies.

=== 3.2 B-H Hysteresis Loop & Magnetic Data Storage
When an unmagnetized ferromagnetic specimen is subjected to an alternating magnetic field $H$:
- *Initial Magnetization Curve:* Magnetic domain walls displace easily, then domains rotate into alignment with $H$ until saturation flux density $B_s$ is reached.
- *Retentivity (Remanence $B_r$):* The residual magnetic flux density remaining in the material when the applied magnetizing field is reduced to zero ($H = 0$).
- *Coercivity (Coercive Field $H_c$):* The reverse magnetic field intensity required to completely demagnetize the material ($B = 0$).
- *Hysteresis Energy Loss:* The area enclosed by the B-H loop equals the energy dissipated as heat per unit volume per magnetization cycle:
$ "Loss" = integral.cont H d B $
- *Hard vs Soft Magnetic Materials:*
  - *Soft Magnets:* Narrow hysteresis loop, high permeability, low coercivity ($H_c < 100" A/m"$), low hysteresis loss. Used for transformer cores, electric motor stators (e.g., Silicon steel, Permalloy).
  - *Hard Magnets:* Broad hysteresis loop, high retentivity ($B_r > 1.2" T"$), very high coercivity ($H_c > 10^5" A/m"$). Used for permanent magnets in BLDC motors and magnetic hard disk drive (HDD) data storage media where magnetic bits must resist accidental erasure.

#v(8pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[4. Liquid Cooling & Nanomaterials: Quantum Dots & Brus Equation]

=== 4.1 Liquid Coolants & Thermal Management
Modern high-performance electronics (CPUs, GPUs, EV battery packs) generate heat fluxes exceeding $100" W/cm"^2$, demanding liquid cooling:
- *Cooling Fluids:*
  1. *Deionized Water:* Highest specific heat capacity ($c_p = 4184" J/(kg K)"$) and thermal conductivity ($k = 0.606" W/(m K)"$), but corrosive and electrically conductive if ionized.
  2. *Ethylene Glycol-Water Mixtures (50:50):* Prevents freezing down to $-37 degree"C"$ and raises boiling point; standard for automotive EV battery packs.
  3. *Dielectric Oils / Fluorinated Liquids (3M Novec):* Electrically insulating, permitting direct immersion cooling of server blades.
  4. *Nanofluids:* Stable suspensions of high-thermal-conductivity nanoparticles ($"Al"_2 "O"_3, "CuO", "carbon nanotubes"$) in base liquids, enhancing convective heat transfer coefficients by $15 - 30\%$.

=== 4.2 Nanomaterials: Surface-to-Volume Ratio & Bulk vs Nano Gold
Nanomaterials are defined as substances possessing at least one dimension between $1$ and $100" nanometers"$:
- *Surface Area-to-Volume Effect:* As particle radius $r$ decreases:
$ "Surface Area" / "Volume" = (4 pi r^2) / (4 / 3 pi r^3) = 3 / r $
A huge fraction of atoms reside at surface sites with unsaturated coordination bonds, drastically increasing surface free energy, chemical reactivity, and catalytic activity.
- *Dramatic Example: Bulk Gold vs Nanogold:*
  - *Bulk Gold:* Inert noble metal, bright yellow metallic luster, unreactive, melting point $= 1064 degree"C"$.
  - *Gold Nanoparticles ($10 - 20" nm"$):* Intense ruby-red / purple color due to *Localized Surface Plasmon Resonance (LSPR)* (coherent collective oscillation of conduction electrons in resonance with visible light at $520" nm"$); exceptionally active heterogeneous catalyst for low-temperature oxidation of toxic "CO" to $"CO"_2$; melting point decreases significantly down to $300 - 500 degree"C"$ due to high surface energy.

=== 4.3 Quantum Confinement & The Brus Equation for Quantum Dots
When the physical size of a semiconductor crystal becomes smaller than its *Exciton Bohr Radius ($r_B$)*:
$ r_B = (epsilon_r m_0) / (mu^*) a_0 $
where $mu^* = (m_e^* m_h^*) / (m_e^* + m_h^*)$ is the reduced effective mass of the electron-hole pair.
Charge carriers are spatially confined in three dimensions, converting continuous energy bands into discrete quantized atomic-like energy levels (*Quantum Dots, QDs*).
- *The Brus Equation:*
The size-dependent effective bandgap $E_g^*(R)$ of a spherical quantum dot of radius $R$ is given by:
$ E_g^*(R) = E_g^("bulk") + (h^2) / (8 mu^* R^2) - (1.8 e^2) / (4 pi epsilon_0 epsilon_r R) $
- *Physical Meaning of Terms:*
  1. $E_g^("bulk")$: The intrinsic macroscopic bulk semiconductor bandgap.
  2. $(h^2) / (8 mu^* R^2)$: The quantum confinement kinetic energy term (scales as $1/R^2$), which widens the bandgap as radius $R$ shrinks.
  3. $-(1.8 e^2) / (4 pi epsilon_0 epsilon_r R)$: Coulombic electrostatic attraction between electron and hole (scales as $1/R$).
- *Technological Application:* By synthesizing CdSe or InP quantum dots with precise diameters from $2" nm"$ to $6" nm"$, photoluminescent emission can be tuned across the entire visible spectrum from bright blue to deep red without changing chemical composition. Utilized in high-gamut QLED television displays, bio-imaging fluorescent markers, and tandem solar cells.

#v(10pt)
#line(length: 100%, stroke: 0.5pt + rgb(180, 200, 220))
#v(6pt)

#text(size: 12pt, weight: "bold", fill: rgb(139, 0, 0))[VIT FAT Solved Question Bank: Step-by-Step Numerical Derivations]

#v(6pt)
#rect(width: 100%, fill: rgb(249, 250, 251), stroke: 1pt + rgb(220, 225, 230), radius: 4pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb(15, 23, 42))[FAT Problem 1: Brus Equation & Bandgap Tuning in Semiconductor Quantum Dots] \
  *Question (10 Marks):* A spherical CdSe semiconductor quantum dot has a radius of $R = 2.50" nm"$.
  Given Constants:
  - Bulk bandgap of CdSe: $E_g^("bulk") = 1.74" eV"$ ($2.788 times 10^(-19)" J"$)
  - Electron effective mass: $m_e^* = 0.13 m_0$
  - Hole effective mass: $m_h^* = 0.45 m_0$
  - Free electron mass: $m_0 = 9.109 times 10^(-31)" kg"$
  - Planck's constant: $h = 6.626 times 10^(-34)" J" dot.c "s"$
  - Relative dielectric constant: $epsilon_r = 10.6$
  - Elementary charge: $e = 1.602 times 10^(-19)" C"$, $epsilon_0 = 8.854 times 10^(-12)" F/m"$
  ("") Calculate the reduced effective mass $mu^*$ of the exciton.
  ("") Compute the quantum confinement energy shift and the Coulombic attraction term.
  ("") Determine the total effective bandgap $E_g^*$ of the quantum dot in electron-volts ($"eV"$).
  ("") Calculate the wavelength $lambda$ and color of light emitted during band-edge photoluminescence.

  #v(4pt)
  #text(weight: "bold", fill: rgb(139, 0, 0))[Complete Step-by-Step Solution:] \
  *Step 1: Calculate Reduced Effective Mass $mu^*$:*
  $ mu^* = (m_e^* m_h^*) / (m_e^* + m_h^*) = (0.13 times 0.45) / (0.13 + 0.45) m_0 = 0.0585 / 0.58 m_0 = 0.10086 m_0 $
  $ mu^* = 0.10086 times (9.109 times 10^(-31)" kg") = 9.187 times 10^(-32)" kg" $

  *Step 2: Calculate Quantum Confinement Kinetic Energy:*
  $ Delta E_"conf" = (h^2) / (8 mu^* R^2) $
  $ h^2 = (6.626 times 10^(-34))^2 = 4.3904 times 10^(-67)" J"^2 dot.c "s"^2 $
  $ R^2 = (2.50 times 10^(-9)" m")^2 = 6.25 times 10^(-18)" m"^2 $
  $ 8 mu^* R^2 = 8 times (9.187 times 10^(-32)) times (6.25 times 10^(-18)) = 4.5935 times 10^(-48)" kg" dot.c "m"^2 $
  $ Delta E_"conf" = (4.3904 times 10^(-67)) / (4.5935 times 10^(-48)) = 9.558 times 10^(-20)" Joules" $
  In electron-volts:
  $ Delta E_"conf" = (9.558 times 10^(-20)) / (1.602 times 10^(-19)) = +0.5966" eV" $

  *Step 3: Calculate Coulombic Attraction Energy:*
  $ Delta E_"Coul" = (1.8 e^2) / (4 pi epsilon_0 epsilon_r R) $
  $ 1.8 e^2 = 1.8 times (1.602 times 10^(-19))^2 = 4.620 times 10^(-38)" C"^2 $
  $ 4 pi epsilon_0 epsilon_r R = (1.1126 times 10^(-10)) times 10.6 times (2.5 times 10^(-9)) = 2.948 times 10^(-18) $
  $ Delta E_"Coul" = (4.620 times 10^(-38)) / (2.948 times 10^(-18)) = 1.567 times 10^(-20)" Joules" = 0.0978" eV" $

  *Step 4: Total Effective Bandgap $E_g^*$:*
  $ E_g^* = E_g^("bulk") + Delta E_"conf" - Delta E_"Coul" = 1.74 + 0.5966 - 0.0978 = 2.2388" eV" $

  *Step 5: Emission Wavelength:*
  $ lambda = (h c) / E_g^* = (1240" eV" dot.c "nm") / (2.2388" eV") = 553.86" nm" $
  (Corresponds to brilliant yellow-green emission, whereas bulk CdSe at $1.74" eV"$ emits invisible near-infrared at $713" nm"$).

  *Boxed Final Answers:*
  $ mu^* = 0.101 m_0, quad Delta E_"conf" = +0.597" eV", quad E_g^* = 2.239" eV", quad lambda = 553.9" nm" ("Yellow-Green"). $
]

#v(8pt)
#rect(width: 100%, fill: rgb(249, 250, 251), stroke: 1pt + rgb(220, 225, 230), radius: 4pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb(15, 23, 42))[FAT Problem 2: Superconducting Critical Magnetic Field & Meissner Current Density] \
  *Question (10 Marks):* A superconducting niobium wire has a critical temperature of $T_c = 9.25" K"$ in zero applied magnetic field. The critical magnetic field at absolute zero is $H_0 = 1.60 times 10^5" A/m"$.
  ("") Calculate the critical magnetic field $H_c(T)$ of this wire at liquid helium boiling temperature ($T = 4.20" K"$).
  ("") Determine the maximum operating temperature at which the wire can sustain superconductivity in an external magnetic field of $1.0 times 10^5" A/m"$.
  ("") If the wire diameter is $d = 1.50" mm"$, compute the maximum critical electric current ($I_c$) that can pass through the wire at $4.20" K"$ before superconductivity is destroyed (Silsbee's rule).

  #v(4pt)
  #text(weight: "bold", fill: rgb(139, 0, 0))[Complete Step-by-Step Solution:] \
  *Step 1: Critical Field at $4.20" K"$ using Tuyn's Law:*
  $ H_c(T) = H_0 [ 1 - (T / T_c)^2 ] $
  $ T / T_c = 4.20 / 9.25 = 0.45405 $
  $ (T / T_c)^2 = (0.45405)^2 = 0.20616 $
  $ H_c(4.2"K") = (1.60 times 10^5) times [ 1 - 0.20616 ] = (1.60 times 10^5) times 0.79384 = 1.270 times 10^5" A/m" $

  *Step 2: Maximum Operating Temperature for $H = 1.0 times 10^5" A/m"$:*
  $ 1.0 times 10^5 = 1.60 times 10^5 [ 1 - (T / 9.25)^2 ] $
  $ 1 - (T / 9.25)^2 = (1.0 times 10^5) / (1.60 times 10^5) = 0.625 $
  $ (T / 9.25)^2 = 1 - 0.625 = 0.375 $
  $ T / 9.25 = sqrt(0.375) = 0.61237 quad ==> quad T = 0.61237 times 9.25 = 5.664" K" $

  *Step 3: Maximum Critical Current (Silsbee's Rule):*
  By Silsbee's hypothesis, the critical transport current $I_c$ is that which creates a self-magnetic field at the wire surface equal to the critical magnetic field:
  $ H_c = I_c / (2 pi r) = I_c / (pi d) quad ==> quad I_c = pi d H_c $
  Radius $r = 0.75" mm" = 0.75 times 10^(-3)" m"$, Diameter $d = 1.50 times 10^(-3)" m"$:
  $ I_c = pi times (1.50 times 10^(-3)" m") times (1.270 times 10^5" A/m") = 3.14159 times 190.5 = 598.47" Amperes" $
  (The niobium wire can conduct an extraordinary $approx 598.5" A"$ without any resistance!).

  *Boxed Final Answers:*
  $ ("") H_c(4.2"K") = 1.27 times 10^5" A/m", quad ("") T_"max" = 5.66" K", quad ("") I_c = 598.5" A". $
]

#v(8pt)
#rect(width: 100%, fill: rgb(249, 250, 251), stroke: 1pt + rgb(220, 225, 230), radius: 4pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb(15, 23, 42))[FAT Problem 3: B-H Hysteresis Energy Loss & Transformer Core Sizing] \
  *Question (10 Marks):* An electrical transformer core fabricated from soft silicon steel has a volume of $V = 0.012" m"^3$ and operates at a power grid frequency of $f = 50" Hz"$.
  When cycled through magnetic saturation, the measured B-H hysteresis loop area corresponds to an energy loss of $280" Joules/m"^3$ per cycle.
  ("") Calculate the hysteresis power loss dissipated in the core in Watts.
  ("") If the core material has a density of $rho = 7650" kg/m"^3$, calculate the hysteresis loss per unit mass ($"W/kg"$).
  ("") If the operating frequency is increased to $400" Hz"$ (aerospace power frequency) with the same flux density swing, calculate the new hysteresis power loss.

  #v(4pt)
  #text(weight: "bold", fill: rgb(139, 0, 0))[Complete Step-by-Step Solution:] \
  *Step 1: Hysteresis Power Loss at $50" Hz"$ ($P_h$):*
  The hysteresis energy lost per cycle per unit volume is $W_h = 280" J/m"^3$.
  Total power dissipated is:
  $ P_h = W_h times V times f $
  $ P_h = (280" J/m"^3) times (0.012" m"^3) times (50" s"^(-1)) = 3.36 times 50 = 168.0" Watts" $

  *Step 2: Specific Loss Per Kilogram:*
  Total core mass:
  $ M_"core" = V times rho = 0.012" m"^3 times 7650" kg/m"^3 = 91.80" kg" $
  Specific hysteresis loss:
  $ "Specific Loss" = P_h / M_"core" = 168.0 / 91.80 = 1.830" W/kg" $

  *Step 3: Power Loss at $400" Hz"$ Frequency:*
  Since hysteresis energy per cycle is constant, hysteresis power loss scales linearly with frequency ($P_h prop f$):
  $ P_h(400"Hz") = P_h(50"Hz") times (400 / 50) = 168.0 times 8 = 1344.0" Watts" = 1.344" kW" $

  *Boxed Final Answers:*
  $ ("") P_h(50"Hz") = 168.0" W", quad ("") "Specific Loss" = 1.83" W/kg", quad ("") P_h(400"Hz") = 1344.0" W" (1.34" kW"). $
]
