#set page(
  paper: "a4",
  margin: (top: 2cm, bottom: 2cm, left: 2.2cm, right: 2.2cm),
  header: context {
    if here().page() > 1 {
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8pt, fill: rgb("#475569"), weight: "bold")[VIT Applied Chemistry (BACHY105) --- Module 2: Energy Devices & Electrodes]],
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
  #text(size: 16pt, weight: "bold", fill: rgb("#1e3a8a"))[MODULE 2: ENERGY DEVICES & SEMICONDUCTOR ELECTRODES] \
  #v(1mm)
  #text(size: 10.5pt, weight: "bold", fill: rgb("#b91c1c"))[Complete Unabridged Course Notes, Derivations, Diagrams & Topic-Wise CAT/FAT Solved Problems] \
  #v(1mm)
  #text(size: 8.5pt, fill: rgb("#64748b"))[Fully Aligned with Official VIT Faculty Lecture Decks (72 Slides), Department Question Bank, and Past FAT Papers (CO: 2)]
]

#v(2mm)

#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.8pt + rgb("#cbd5e1"), radius: 4pt, inset: 8pt)[
  #text(weight: "bold", fill: rgb("#0f172a"), size: 9pt)[Module 2 Detailed Syllabus Breakdown (100% Complete Coverage):] \
  #v(1mm)
  #text(size: 8.5pt, fill: rgb("#334155"))[
    *Section 1: Electrochemical & Electrolytic Cells:* Galvanic vs Electrolytic cells, LOAN rule, Daniell Cell, EMF, Salt Bridge construction & 3 functions, Nernst Equation derivation, Equilibrium constant ($K_"eq"$). \
    *Section 2: Industrial Electrolysis:* Downs cell for molten $N a C l$ extraction (chemistry, $C a C l_2$ flux, wire gauze diaphragm), Water splitting electrolysis (acidic vs alkaline mechanisms, OER/HER). \
    *Section 3: Semiconductor Electrode Materials:* Band theory, effect of temperature on conductivity, Intrinsic vs Extrinsic (n-type & p-type), Monocrystalline vs Polycrystalline vs Amorphous Silicon. \
    *Section 4: Silicon Purification (9N Semiconductor Grade):* Siemens Process (distillation of $S i H C l_3$), Zone Refining (segregation coefficient $k < 1$), Czochralski (CZ) single-crystal pulling technique. \
    *Section 5: Advanced Batteries:* Primary vs Secondary vs Fuel Cells, Lithium-ion battery (LIB) chemistry, why lithium, rocking-chair mechanism, charging/discharging reactions, variants (LFP, NMC, Li-poly), BMS safety & thermal runaway. \
    *Section 6: Fuel Cells:* Working principles, Proton Exchange Membrane Fuel Cell (PEMFC, Nafion, Pt/C catalyst), Solid Oxide Fuel Cell (SOFC, YSZ electrolyte, Ni cermet anode, LSM cathode, fuel flexibility). \
    *Section 7: Solar Energy Conversion:* Photovoltaic (PV) cells, Photoelectrochemical (PEC) cells, Dye-Sensitized Solar Cells (DSSC / Grätzel Cell) sandwich architecture, 4-step mechanism, Ru-dyes, electrolyte regeneration, PV vs PEC vs DSSC comparison.
  ]
]

#v(3mm)

= 1. Electrochemical and Electrolytic Cells

Electrochemical devices convert chemical energy directly into electrical energy or utilize electrical energy to drive non-spontaneous chemical transformations.

=== 1.1 Galvanic (Electrochemical) vs. Electrolytic Cells
#table(
  columns: (1.5fr, 2.5fr, 2.5fr),
  fill: (x, y) => if y == 0 { rgb("#f1f5f9") } else { none },
  stroke: 0.5pt + rgb("#cbd5e1"),
  align: (left, left, left),
  [#text(weight: "bold")[Parameter]], [#text(weight: "bold")[Galvanic / Voltaic Cell]], [#text(weight: "bold")[Electrolytic Cell]],
  [*Energy Conversion*], [Converts spontaneous chemical energy into electrical energy ($Delta G < 0, E_"cell" > 0$).], [Consumes external electrical energy to drive non-spontaneous reactions ($Delta G > 0, E_"ext" > E_"cell"^circle$).],
  [*Anode Polarity & Reaction*], [*Negative ($-$).* Oxidation occurs (LOAN: Left, Oxidation, Anode, Negative).], [*Positive ($+$).* Oxidation occurs (connected to positive terminal of DC power source).],
  [*Cathode Polarity & Reaction*], [*Positive ($+$).* Reduction occurs (electrons flow into cathode from external circuit).], [*Negative ($-$).* Reduction occurs (connected to negative terminal of DC power source).],
  [*Electron Flow Direction*], [Electrons flow spontaneously from anode to cathode in external circuit.], [Electrons pushed from anode to cathode by external power supply.],
  [*Salt Bridge Requirement*], [Requires a salt bridge or porous partition to maintain electrical contact.], [Usually uses a single electrolyte compartment; no salt bridge required.],
  [*Physical Examples*], [Daniell cell, Dry cell, Lead-acid battery (during discharge), Li-ion battery.], [Downs cell, Hall-Héroult cell, Electroplating baths, Water electrolysis.]
)

=== 1.2 The Daniell Cell: Construction and Architecture
Invented by John Frederic Daniell in 1836, the cell consists of:
- *Anode Half-Cell:* Metallic Zinc ($Z n$) rod immersed in $1.0 "M" thin Z n S O_4$ aqueous solution.
- *Cathode Half-Cell:* Metallic Copper ($C u$) rod immersed in $1.0 "M" thin C u S O_4$ aqueous solution.
- *Salt Bridge:* Inverted U-tube containing agar-agar gel saturated with inert $K C l$ or $K N O_3$.

#align(center)[
  #image("figures/m2_daniell_cell.png", width: 80%) \
  #text(size: 8pt, style: "italic", fill: rgb("#64748b"))[Figure 2.1: Construction, electrode half-cells, salt bridge, and redox electron flow in the standard Daniell Galvanic Cell.]
]

- *Overall Cell Reaction:* $Z n (s) + C u^(2+) (a q) arrow.r Z n^(2+) (a q) + C u (s)$
- *Standard Cell Potential:*
  $ E_"cell"^circle = E_"cathode"^circle - E_"anode"^circle = E_(C u^(2+) / C u)^circle - E_(Z n^(2+) / Z n)^circle = + 0.34 "V" - (- 0.76 "V") = bold(+ 1.10 "V") $
- *IUPAC Cell Representation:* $Z n (s) | Z n^(2+) (1 "M") || C u^(2+) (1 "M") | C u (s)$

=== 1.3 The Salt Bridge: Construction and 3 Critical Functions
A glass U-tube filled with a warm semi-solid gel of agar-agar or gelatin boiled with a concentrated solution of an inert electrolyte ($K C l, K N O_3$, or $N H_4 N O_3$).
- *Criterion for Electrolyte Selection:* The ionic velocities (mobilities) of the cation and anion must be virtually identical ($u_(K^+) approx u_(C l^-)$).
- *Three Essential Functions:*
  1. *Completes the Internal Electric Circuit:* Permits migration of ions between the two half-cells, allowing current to flow continuously through the external circuit.
  2. *Maintains Electrical Neutrality:* Prevents charge accumulation in half-cells. As $Z n^(2+)$ accumulates at the anode, $C l^-$ anions migrate in to neutralize positive charge. As $C u^(2+)$ is depleted at the cathode, $K^+$ cations migrate in to neutralize excess $S O_4^(2-)$ ions.
  3. *Eliminates Liquid Junction Potential ($E_j approx 0$):* Because $K^+$ and $C l^-$ diffuse at nearly identical speeds, no differential charge buildup occurs at the liquid-liquid boundary, keeping junction potential negligible.

=== 1.4 Thermodynamic Derivation of the Nernst Equation
From chemical thermodynamics, the non-expansion useful work performed by an electrochemical cell is equal to the decrease in Gibbs free energy:
$ Delta G = - n F E_"cell" quad "and" quad Delta G^circle = - n F E_"cell"^circle $
From the van 't Hoff reaction isotherm:
$ Delta G = Delta G^circle + R T ln Q $
where $Q$ is the reaction quotient. Substituting $- n F E$:
$ - n F E_"cell" = - n F E_"cell"^circle + R T ln Q $
Dividing both sides by $- n F$:
$ bold(E_"cell" = E_"cell"^circle - frac(R T, n F) ln Q) $
Converting to common base-10 logarithm ($ln Q = 2.303 log_10 Q$):
$ E_"cell" = E_"cell"^circle - frac(2.303 R T, n F) log_10 Q $
At standard laboratory temperature ($T = 298.15 "K"$, $R = 8.314 "J K"^(-1) "mol"^(-1)$, $F = 96485 "C mol"^(-1)$):
$ frac(2.303 times 8.314 times 298.15, 96485) = 0.05916 "V" $
$ bold(E_"cell" = E_"cell"^circle - frac(0.05916, n) log_10 Q) $
- *Equilibrium Constant ($K_"eq"$):* At dynamic equilibrium, cell EMF becomes zero ($E_"cell" = 0$) and $Q = K_"eq"$:
  $ 0 = E_"cell"^circle - frac(0.05916, n) log_10 K_"eq" ==> bold(log_10 K_"eq" = frac(n E_"cell"^circle, 0.05916)) $

#v(2mm)

#rect(width: 100%, fill: rgb("#eff6ff"), stroke: 1pt + rgb("#3b82f6"), radius: 4pt, inset: 8pt)[
  #text(weight: "bold", fill: rgb("#1e40af"))[[CAT-1 / FAT Exam Problem --- 5 Marks]] \
  #text(weight: "bold")[Problem:] Calculate the EMF of the following cell at $298 "K"$: \
  $C d (s) | C d^(2+) (0.01 "M") || A g^+ (0.1 "M") | A g (s)$ \
  Given: $E_(C d^(2+) / C d)^circle = - 0.40 "V"$, $E_(A g^+ / A g)^circle = + 0.80 "V"$. \
  #text(weight: "bold", fill: rgb("#166534"))[Step-by-Step Model Solution:]
  1. *Identify Half-Reactions and $n$:*
     - Anode (Oxidation): $C d (s) arrow.r C d^(2+) (a q) + 2 e^-$
     - Cathode (Reduction): $2 A g^+ (a q) + 2 e^- arrow.r 2 A g (s)$
     - Overall Reaction: $C d (s) + 2 A g^+ (a q) arrow.r C d^(2+) (a q) + 2 A g (s) ==> bold(n = 2)$
  2. *Standard EMF ($E_"cell"^circle$):*
     $ E_"cell"^circle = E_"cathode"^circle - E_"anode"^circle = + 0.80 "V" - (- 0.40 "V") = bold(+ 1.20 "V") $
  3. *Reaction Quotient ($Q$):*
     $ Q = frac([C d^(2+)], [A g^+]^2) = frac(0.01, (0.1)^2) = frac(0.01, 0.01) = bold(1.0) $
  4. *Apply Nernst Equation:*
     $ E_"cell" = E_"cell"^circle - frac(0.05916, 2) log_10(1.0) = 1.20 "V" - 0 = bold(1.20 "V") $
]

#v(3mm)

= 2. Industrial Electrolysis: Downs Cell & Water Splitting

=== 2.1 The Downs Cell for Sodium Extraction
#align(center)[
  #image("figures/m2_downs_cell.png", width: 80%) \
  #text(size: 8pt, style: "italic", fill: rgb("#64748b"))[Figure 2.2: Industrial Downs Cell architecture showing central graphite anode, steel cylindrical cathode, and steel wire gauze diaphragm for molten $N a C l$ electrolysis.]
]
The commercial electrochemical extraction of metallic sodium by the electrolysis of molten sodium chloride ($N a C l$).
- *Raw Material Mixture:* Molten $N a C l$ ($40%$) fluxed with Calcium Chloride ($C a C l_2$, $60%$).
  - *Function of $C a C l_2$ Flux:* Lowers the melting point of the electrolyte from $801 degree "C"$ (pure $N a C l$) down to $approx 580 - 600 degree "C"$. This prevents sodium metal from vaporizing (bp of Na is $883 degree "C"$) and prevents sodium from forming a colloidal fog in the melt.
- *Downs Cell Construction:*
  - *Anode:* Centrally positioned cylindrical high-density graphite rod.
  - *Cathode:* Concentric circular ring of steel surrounding the graphite anode.
  - *Diaphragm:* Cylindrical steel wire gauze screen placed between anode and cathode to prevent newly formed liquid sodium from contacting chlorine gas and recombining explosively.
  - *Collection Dome & Pipe:* An inverted iron hood captures dry chlorine gas ($C l_2$), while molten sodium, being less dense than the molten salt mixture ($d_"Na" = 0.8 "g/cm"^3 < d_"melt" = 2.1 "g/cm"^3$), floats upward into an inverted annular collector and is piped into storage vessels under mineral oil.
- *Electrode Reactions:*
  - *Anode (Oxidation):* $2 C l^- (l) arrow.r C l_2 (g) + 2 e^-$
  - *Cathode (Reduction):* $2 N a^+ (l) + 2 e^- arrow.r 2 N a (l)$
  - *Overall Cell Reaction:* $2 N a C l (l) arrow.r 2 N a (l) + C l_2 (g)$
  - Operating cell voltage: $approx 4.0 - 4.5 "V"$; Operating current: up to $40000 "A"$.

=== 2.2 Electrolytic Decomposition of Water (Water Splitting)
#align(center)[
  #image("figures/m2_water_splitting.png", width: 80%) \
  #text(size: 8pt, style: "italic", fill: rgb("#64748b"))[Figure 2.3: Water splitting electrolytic cell showing stoichiometric decomposition into hydrogen and oxygen ($2:1$ volume ratio).]
]
The stoichiometric decomposition of water into hydrogen and oxygen gases:
$ 2 H_2 O (l) arrow.r 2 H_2 (g) + O_2 (g) $
- *Theoretical Decomposition Voltage:* $E_"cell"^circle = 1.23 "V"$ at $298 "K"$ (practical overvoltage requires $1.8 - 2.0 "V"$).
- *Acidic Electrolysis (Proton Exchange / $H_2 S O_4$):*
  - Anode (OER --- Oxygen Evolution Reaction): $2 H_2 O (l) arrow.r O_2 (g) + 4 H^+ (a q) + 4 e^-$ ($E^circle = + 1.23 "V"$)
  - Cathode (HER --- Hydrogen Evolution Reaction): $4 H^+ (a q) + 4 e^- arrow.r 2 H_2 (g)$ ($E^circle = 0.00 "V"$)
- *Alkaline Electrolysis ($20 - 30% thin K O H$, Nickel Mesh Electrodes):*
  - Anode: $4 O H^- (a q) arrow.r O_2 (g) + 2 H_2 O (l) + 4 e^-$ ($E^circle = + 0.40 "V"$)
  - Cathode: $4 H_2 O (l) + 4 e^- arrow.r 2 H_2 (g) + 4 O H^- (a q)$ ($E^circle = - 0.83 "V"$)
  - Volume ratio produced: Exactly $2 "volumes" thin H_2 : 1 "volume" thin O_2$.

#v(3mm)

= 3. Semiconductor Electrode Materials & Band Theory

A semiconductor is a solid whose electrical conductivity lies between that of a metallic conductor ($sigma > 10^4 "S cm"^(-1)$) and an electrical insulator ($sigma < 10^(-10) "S cm"^(-1)$).

=== 3.1 Energy Band Theory
#align(center)[
  #image("figures/m2_semiconductor_bands.png", width: 80%) \
  #text(size: 8pt, style: "italic", fill: rgb("#64748b"))[Figure 2.4: Energy band structure and temperature dependence of electrical conductivity in semiconductors.]
]
- *Valence Band (VB):* The highest range of electron energies in which electrons are present in the ground state.
- *Conduction Band (CB):* The lowest range of vacant, unoccupied electron energy levels.
- *Forbidden Bandgap ($E_g$):* The forbidden energy separation between the top of the VB and bottom of the CB:
  - *Metals:* VB and CB overlap ($E_g approx 0 "eV"$). Large electron mobility.
  - *Semiconductors:* Moderate bandgap ($0.5 "eV" < E_g < 3.0 "eV"$, e.g., Silicon $E_g = 1.12 "eV"$, Germanium $E_g = 0.67 "eV"$).
  - *Insulators:* Extremely wide forbidden bandgap ($E_g > 5.0 "eV"$, e.g., Diamond $E_g = 5.47 "eV"$).

=== 3.2 Temperature Dependence of Semiconductor Conductivity
- *At Absolute Zero ($T = 0 "K"$):* All electrons are locked in covalent bonds in the VB. CB is completely vacant. The semiconductor behaves as a *perfect electrical insulator* ($sigma = 0$).
- *At Room Temperature ($T = 300 "K"$):* Thermal kinetic energy excites a fraction of electrons across $E_g$ into the CB, leaving behind equal numbers of empty electron vacancies (*holes*) in the VB. Both free electrons ($n_e$) and positive holes ($n_h$) contribute to electrical conduction.
- *Conductivity Equation:* $sigma = e (n_e mu_e + n_h mu_h)$, where $mu$ is carrier mobility.
- *Temperature Coefficient:* Unlike metals (which have positive resistance temperature coefficient $alpha > 0$), semiconductors exhibit a *negative temperature coefficient of resistance* ($alpha < 0$); resistance decreases exponentially as temperature rises: $R(T) = R_0 exp(E_g / 2 k_B T)$.

=== 3.3 Intrinsic vs. Extrinsic Semiconductors
- *Intrinsic Semiconductors:* Chemically pure elements (Group 14: Si, Ge) with no dopant atoms ($n_e = n_h = n_i$).
- *Extrinsic Semiconductors:* Intrinsic semiconductors doped with trace donor or acceptor impurities ($1$ in $10^6$ atoms):
  - *n-type Semiconductor:* Doped with pentavalent Group 15 donors (Phosphorus $P$, Arsenic $A s$, Antimony $S b$). Four valence electrons form covalent bonds with adjacent Si atoms; the 5th electron is loosely bound ($E_d approx 0.05 "eV"$) and readily enters the CB. Majority carriers: *electrons* ($n_e >> n_h$). Fermi level ($E_F$) shifts upward close to CB.
  - *p-type Semiconductor:* Doped with trivalent Group 13 acceptors (Boron $B$, Aluminum $A l$, Gallium $G a$). Boron forms 3 covalent bonds, leaving an unfilled orbital (hole) in the lattice. An electron from an adjacent bond readily hops in, creating a mobile positive hole in the VB. Majority carriers: *holes* ($n_h >> n_e$). Fermi level ($E_F$) shifts downward close to VB.

=== 3.4 Comparison of Silicon Structural Forms
#table(
  columns: (2fr, 2.5fr, 2.5fr, 2fr),
  fill: (x, y) => if y == 0 { rgb("#f1f5f9") } else { none },
  stroke: 0.5pt + rgb("#cbd5e1"),
  align: (left, left, left, center),
  [#text(weight: "bold")[Silicon Type]], [#text(weight: "bold")[Lattice Structure]], [#text(weight: "bold")[Electronic Properties]], [#text(weight: "bold")[PV Efficiency]],
  [*Monocrystalline (c-Si)*], [Continuous single diamond crystal lattice; zero grain boundaries.], [Highest electron mobility ($mu_e approx 1400 "cm"^2/"V s"$); low recombination.], [20% -- 26%],
  [*Polycrystalline (poly-Si)*], [Aggregate of multi-oriented crystallites separated by grain boundaries.], [Grain boundaries act as charge recombination centers; lower carrier lifetime.], [15% -- 18%],
  [*Amorphous (a-Si:H)*], [Non-crystalline random network; dangling bonds passivated by hydrogen.], [Direct bandgap ($1.7 "eV"$); high optical absorption; Staebler-Wronski light degradation.], [8% -- 12%]
)

#v(3mm)

= 4. Three-Stage Silicon Purification (9N Electronic Grade)

High-efficiency semiconductor electronics require electronic-grade silicon (EGS) with purity $> 99.9999999%$ (less than 1 impurity atom per billion silicon atoms).

=== 4.1 Stage 1: Chemical Purification (Siemens Process)
1. *Carbothermic Reduction:* Quartzite silica is reduced in an electric arc furnace at $1900 degree "C"$:
   $ S i O_2 (s) + 2 C (s) arrow.r S i ("metallurgical grade", 98%) + 2 C O (g) $
2. *Hydrochlorination:* Powdered MGS reacts with dry anhydrous $H C l$ in a fluidized bed reactor at $300 degree "C"$:
   $ S i (s) + 3 H C l (g) arrow.r S i H C l_3 (l, "trichlorosilane") + H_2 (g) $
3. *Fractional Distillation:* Trichlorosilane ($S i H C l_3$) is a volatile liquid with boiling point $31.8 degree "C"$. Multiple fractional distillation columns remove volatile impurities ($B C l_3, P C l_3, A s C l_3, F e C l_3$).
4. *Chemical Vapor Deposition (CVD):* High-purity $S i H C l_3$ vapor mixed with $H_2$ is decomposed onto pure heated silicon filament rods at $1100 degree "C"$, yielding electronic-grade polycrystalline silicon:
   $ S i H C l_3 (g) + H_2 (g) arrow.r S i (s, "electronic grade") + 3 H C l (g) $

=== 4.2 Stage 2: Zone Refining Technique
#align(center)[
  #image("figures/m2_zone_refining.png", width: 80%) \
  #text(size: 8pt, style: "italic", fill: rgb("#64748b"))[Figure 2.5: Zone refining apparatus showing moving RF induction heater coil sweeping impurities along molten zone.]
]
Invented by William Gardner Pfann at Bell Labs, zone refining utilizes the physical principle that *impurities are significantly more soluble in the liquid (molten) phase than in the solid phase*.
- *Segregation Coefficient ($k$):* Defined as the ratio of impurity concentration in the freezing solid ($C_s$) to that in the molten liquid ($C_l$):
  $ k = frac(C_s, C_l) $
  For almost all impurities in silicon ($B, P, F e, A l$), $k < 1$ (typically $k = 0.001 - 0.35$).
- *Refining Operation:*
  - A long cylindrical ingot of polycrystalline silicon is placed inside a quartz tube under an inert Argon atmosphere.
  - A circular high-frequency radio-frequency (RF) induction heating coil creates a narrow molten zone ($approx 2 - 3 "cm"$ wide).
  - The heating coil moves very slowly from one end of the ingot to the other.
  - As the molten zone traverses the rod, pure silicon crystallizes behind it ($C_s = k C_l < C_l$), while impurities selectively partition into the liquid melt.
  - The molten zone sweeps impurities along to the trailing end of the silicon bar.
  - Repeating multiple passes (10 to 20 passes) in the same direction concentrates all impurities at the terminal end, which is cropped off and discarded, leaving silicon of $99.9999999%$ (9N) purity.

=== 4.3 Stage 3: Czochralski (CZ) Single-Crystal Pulling
#align(center)[
  #image("figures/m2_czochralski.png", width: 80%) \
  #text(size: 8pt, style: "italic", fill: rgb("#64748b"))[Figure 2.6: Czochralski crystal pulling furnace showing rotating seed crystal pulling dislocation-free silicon boule from melt at $1425degree "C"$.]
]
Zone-refined silicon is polycrystalline. To make microchips and high-efficiency solar cells, it must be converted into a continuous single crystal.
- *Apparatus & Operation:*
  - Electronic-grade polysilicon is placed in a high-purity fused silica quartz crucible inside an argon-purged vacuum furnace and heated to $1425 degree "C"$ (silicon melting point $1414 degree "C"$).
  - A small, perfectly oriented single-crystal seed (oriented along $<100>$ or $<111>$) is lowered on a pulling shaft and touched to the surface of the molten silicon.
  - The seed crystal is slowly pulled upward at a rate of $1 - 2 "mm/min"$ while rotating clockwise; the crucible rotates counter-clockwise.
  - As the seed is pulled, molten silicon freezes onto it, replicating the exact crystalline lattice orientation of the seed.
  - The resulting massive, cylindrical single-crystal ingot (boule) measures up to $300 "mm"$ ($12 "inches"$) in diameter, over $2 "meters"$ in length, and weighs $> 250 "kg"$.

#v(3mm)

= 5. Advanced Secondary Batteries: The Lithium-Ion Battery (LIB)

=== 5.1 Primary vs. Secondary vs. Fuel Cells
#table(
  columns: (1.5fr, 2.5fr, 2.5fr, 2.5fr),
  fill: (x, y) => if y == 0 { rgb("#f1f5f9") } else { none },
  stroke: 0.5pt + rgb("#cbd5e1"),
  align: (left, left, left, left),
  [#text(weight: "bold")[Property]], [#text(weight: "bold")[Primary Battery]], [#text(weight: "bold")[Secondary Battery]], [#text(weight: "bold")[Fuel Cell]],
  [*Reversibility*], [Irreversible electrochemical redox; discarded after single discharge.], [Reversible redox; electrically recharged by passing DC current in opposite direction.], [Continuous electrochemical conversion; never discharges as long as fuel is supplied.],
  [*Reactant Location*], [Stored internally within electrodes.], [Stored internally within active electrode materials.], [Supplied continuously from external storage tanks ($H_2, O_2$).],
  [*Life Cycle*], [Single use ($1$ cycle).], [Long cycle life ($500 - 3000$ charge-discharge cycles).], [Continuous operation indefinitely (limited only by catalyst/membrane degradation).],
  [*Examples*], [Zinc-carbon Leclanché cell, Alkaline $Z n - M n O_2$.], [Lithium-ion ($L i - "ion"$), Lead-acid, $N i - M H$.], [PEMFC, SOFC, Alkaline Fuel Cell (AFC).]
)

=== 5.2 Why Lithium? Fundamental Advantages
1. *Lightest Metal:* Molar mass $M = 6.94 "g mol"^(-1)$; density $rho = 0.534 "g cm"^(-3)$ (floats on water).
2. *Highest Standard Oxidation Potential:* Standard reduction potential $E^circle = - 3.04 "V"$ (most electropositive metal), enabling single cell voltages of $3.6 - 3.8 "V"$ (triple that of Ni-MH or Lead-acid).
3. *Highest Theoretical Specific Capacity:* $3860 "mAh g"^(-1)$ (compared to $Z n$: $820 "mAh g"^(-1)$, $P b$: $260 "mAh g"^(-1)$).
4. *Small Ionic Radius ($L i^+ = 0.76 "Å"$):* Enables rapid solid-state diffusion and reversible intercalation into host crystal lattices without severe structural degradation.

=== 5.3 Construction and Architecture of a Lithium-Ion Cell
- *Cathode (Positive Electrode):* Layered transition metal oxide (typically Lithium Cobalt Oxide, $L i C o O_2$, or Lithium Iron Phosphate, $L i F e P O_4$) coated onto an *Aluminium foil* current collector.
- *Anode (Negative Electrode):* Layered graphitic carbon ($L i_x C_6$) coated onto a *Copper foil* current collector.
- *Electrolyte:* $1.0 "M"$ Lithium Hexafluorophosphate ($L i P F_6$) salt dissolved in a non-aqueous, anhydrous organic carbonate mixture: Ethylene Carbonate (EC) + Dimethyl Carbonate (DMC). (Water cannot be used because lithium reacts vigorously with $H_2 O$).
- *Separator:* Microporous polyethylene / polypropylene membrane ($approx 15 - 25 mu "m"$) allowing free passage of $L i^+$ ions while preventing physical electrical contact between anode and cathode.

=== 5.4 The "Rocking-Chair" Intercalation Mechanism
Lithium-ion batteries operate via insertion and extraction (*intercalation/de-intercalation*) of $L i^+$ ions shuttling back and forth across the electrolyte:

#align(center)[
  #grid(
    columns: (1fr, 1fr),
    gutter: 10pt,
    image("figures/m2_li_ion_construction.png", width: 95%),
    image("figures/m2_li_ion_reactions.png", width: 95%)
  )
  #text(size: 8pt, style: "italic", fill: rgb("#64748b"))[Figure 2.7: (Left) Lithium-ion cell internal construction and layered electrodes; (Right) Rocking-chair $L i^+$ intercalation/de-intercalation charge and discharge mechanisms.]
]

- *Discharge Reactions (Spontaneous Cell Operation, $E_"cell" approx 3.7 "V"$):*
  - *Anode (Oxidation):* $L i_x C_6 arrow.r 6 C + x L i^+ + x e^-$
  - *Cathode (Reduction):* $L i_(1-x) C o O_2 + x L i^+ + x e^- arrow.r L i C o O_2$
  - *Net Cell Reaction:* $L i_x C_6 + L i_(1-x) C o O_2 arrow.r 6 C + L i C o O_2$
- *Charging Reactions (Driven by External DC Power Source):*
  - *Cathode (Oxidation):* $L i C o O_2 arrow.r L i_(1-x) C o O_2 + x L i^+ + x e^-$
  - *Anode (Reduction):* $6 C + x L i^+ + x e^- arrow.r L i_x C_6$

=== 5.5 Safety Hazards, Degradation, and BMS Protection
- *Thermal Runaway:* Overcharging, internal micro-shorts, or mechanical crushing causes local heating ($T > 130 degree "C"$). The Solid Electrolyte Interphase (SEI) decomposes exothermically, followed by cathode decomposition releasing oxygen gas ($O_2$), which reacts violently with flammable organic carbonate solvents, leading to smoke, fire, and venting explosion.
- *Lithium Dendrite Growth:* Fast charging at low temperatures causes metallic lithium plating onto the graphite anode surface. Needle-like dendritic crystals pierce the polymer separator, causing catastrophic internal short circuits.
- *Battery Management System (BMS):* Electronic protection circuit continuously monitoring individual cell voltages, temperature, and charge/discharge currents, executing emergency cutoff if voltage exceeds $4.25 "V"$ or temperature exceeds $60 degree "C"$.

#v(3mm)

= 6. Fuel Cells: PEMFC and SOFC

A fuel cell is an electrochemical energy conversion device that converts the chemical energy of a fuel ($H_2$, natural gas) and an oxidant ($O_2$, air) directly into electrical energy via continuous catalytic redox reactions.

=== 6.1 Proton Exchange Membrane Fuel Cell (PEMFC)
#align(center)[
  #image("figures/m2_pemfc.png", width: 80%) \
  #text(size: 8pt, style: "italic", fill: rgb("#64748b"))[Figure 2.8: Proton Exchange Membrane Fuel Cell (PEMFC) construction showing Nafion membrane, Pt/C catalysts, and gas diffusion channels.]
]
- *Operating Temperature:* $60 - 80 degree "C"$ (Low temperature; enables rapid startup within seconds).
- *Solid Polymer Electrolyte:* Perfluorosulfonic acid membrane (*Nafion*), which selectively conducts hydrated $H^+$ protons via sulfonic acid groups ($- S O_3^- H^+$) while blocking electrons and reactant gases.
- *Electrode Catalysts:* High-surface-area Platinum nanoparticles dispersed on carbon black ($P t / C$) hot-pressed onto porous carbon cloth/paper gas diffusion layers (GDL).
- *Electrode Reactions:*
  - *Anode (Oxidation):* $2 H_2 (g) arrow.r^("Pt") 4 H^+ + 4 e^-$ ($E^circle = 0.00 "V"$)
  - *Cathode (Reduction):* $O_2 (g) + 4 H^+ + 4 e^- arrow.r^("Pt") 2 H_2 O (l)$ ($E^circle = + 1.23 "V"$)
  - *Overall Cell Reaction:* $2 H_2 (g) + O_2 (g) arrow.r 2 H_2 O (l) + "Electricity" + "Heat"$
- *Advantages:* High power density ($approx 1 "W/cm"^2$), low operating temperature, zero tailpipe emissions (pure water byproduct), ideal for fuel cell electric vehicles (FCEVs).
- *Disadvantages:* Highly expensive platinum catalyst; severe poisoning of Pt catalyst by trace carbon monoxide ($C O > 10 "ppm"$); membrane requires delicate humidification management.

=== 6.2 Solid Oxide Fuel Cell (SOFC)
#align(center)[
  #image("figures/m2_sofc.png", width: 80%) \
  #text(size: 8pt, style: "italic", fill: rgb("#64748b"))[Figure 2.9: Solid Oxide Fuel Cell (SOFC) ceramic architecture showing YSZ solid electrolyte conducting $O^{2-}$ oxide ions at $800-1000degree "C"$.]
]
- *Operating Temperature:* $700 - 1000 degree "C"$ (High temperature; solid ceramic materials).
- *Solid Ceramic Electrolyte:* Dense, non-porous *Yttria-Stabilized Zirconia (YSZ)* ($Z r O_2$ doped with $8 "mol"% thin Y_2 O_3$). At high temperatures, oxygen vacancies in the cubic fluorite lattice facilitate rapid conduction of oxide ions ($O^(2-)$).
- *Electrode Materials:*
  - *Anode (Fuel Electrode):* Porous Nickel-YSZ cermet ($N i - Y S Z$). Nickel catalyzes hydrocarbon reforming and provides electronic conductivity.
  - *Cathode (Air Electrode):* Porous Lanthanum Strontium Manganite ($L S M$, $L a_(1-x) S r_x M n O_3$).
- *Electrode Reactions:*
  - *Cathode:* $O_2 (g) + 4 e^- arrow.r 2 O^(2-) ("migrates across YSZ ceramic")$
  - *Anode ($H_2$ Fuel):* $2 H_2 (g) + 2 O^(2-) arrow.r 2 H_2 O (g) + 4 e^-$
  - *Anode ($C O$ Fuel):* $C O (g) + O^(2-) arrow.r C O_2 (g) + 2 e^-$
  - *Overall:* $2 H_2 + O_2 arrow.r 2 H_2 O$ and $2 C O + O_2 arrow.r 2 C O_2$
- *Advantages:* *Fuel flexibility* (can directly utilize natural gas, biogas, and syngas without external reformers); non-precious catalysts (no expensive Pt needed); combined heat and power (CHP) cogeneration efficiencies exceed $80 - 85%$.
- *Disadvantages:* High operating temperature requires expensive ceramic interconnects; slow startup time; thermal cycling brittleness (unsuitable for passenger cars; ideal for stationary power plants).

#v(3mm)

= 7. Solar Energy Conversion & Dye-Sensitized Solar Cells (DSSC)

=== 7.1 Photovoltaic (PV) vs. Photoelectrochemical (PEC) vs. DSSC
#align(center)[
  #image("figures/m2_solar_pv.png", width: 80%) \
  #text(size: 8pt, style: "italic", fill: rgb("#64748b"))[Figure 2.10: Photovoltaic conversion in silicon p-n junction solar cell.]
]
#table(
  columns: (1.5fr, 2.5fr, 2.5fr, 2.5fr),
  fill: (x, y) => if y == 0 { rgb("#f1f5f9") } else { none },
  stroke: 0.5pt + rgb("#cbd5e1"),
  align: (left, left, left, left),
  [#text(weight: "bold")[Parameter]], [#text(weight: "bold")[Silicon Photovoltaic (PV)]], [#text(weight: "bold")[Photoelectrochemical (PEC)]], [#text(weight: "bold")[Dye-Sensitized Solar Cell (DSSC)]],
  [*Working Principle*], [p-n junction internal electric field separates photogenerated electron-hole pairs.], [Semiconductor-electrolyte junction band bending drives redox or water splitting.], [Molecular dye absorbs light; ultrafast electron injection into mesoporous $T i O_2$.],
  [*Light Absorption*], [Silicon semiconductor crystal absorbs photon across bandgap $E_g$.], [Semiconductor electrode ($T i O_2, F e_2 O_3$) absorbs light.], [Monolayer of chemisorbed organometallic or natural dye absorbs photons.],
  [*Electrolyte*], [Solid state throughout (no liquid electrolyte).], [Liquid aqueous or non-aqueous electrolyte.], [Liquid or gel redox electrolyte ($I^- / I_3^-$ redox couple).],
  [*Cost & Fabrication*], [High energy consumption; high-temperature cleanroom processing.], [Moderate cost; electrode corrosion/photocorrosion challenges.], [Low cost; simple screen-printing and ambient temperature roll-to-roll fabrication.],
  [*Efficiency*], [Commercial: $18% - 24%$; Lab: $> 26%$.], [Solar-to-chemical: $10% - 15%$.], [Commercial: $10% - 13%$; Lab: $14.5%$.]
)

=== 7.2 Architecture of the Grätzel Dye-Sensitized Solar Cell (DSSC)
Invented in 1991 by Brian O'Regan and Michael Grätzel, the DSSC mimics natural plant photosynthesis using a 5-layer sandwich structure:
1. *Transparent Conductive Substrate (TCO):* Fluorine-doped Tin Oxide ($F T O$) glass ($S n O_2:F$) providing optical transparency ($> 85%$) and high electrical conductivity.
2. *Mesoporous Semiconductor Film:* Nanocrystalline Titanium Dioxide ($T i O_2$, anatase phase, nanoparticle diameter $approx 20 "nm"$, film thickness $approx 10 mu "m"$) sintered at $450 degree "C"$. It provides an enormous internal surface area (roughness factor $> 1000$) for dye adsorption.
3. *Photosensitizer Dye:* Chemisorbed as a self-assembled monolayer onto $T i O_2$ nanoparticles via anchoring carboxylic acid ($- C O O H$) groups.
   - Organometallic complexes: Ruthenium polypyridyl dyes (N719 dye, N3 dye, Black dye).
   - Natural organic dyes: Anthocyanins extracted from blackberries, red cabbage, and pomegranate.
4. *Redox Electrolyte:* Iodide/Triiodide ($I^- / I_3^-$) redox shuttle dissolved in an organic nitrile solvent (acetonitrile).
5. *Counter Electrode (Cathode):* FTO glass coated with an ultrathin catalytic layer of Platinum ($P t$) or carbon.

=== 7.3 Four-Step Working Mechanism of DSSC
#align(center)[
  #grid(
    columns: (1fr, 1.1fr),
    gutter: 10pt,
    image("figures/m2_dssc_graetzel.png", width: 95%),
    image("figures/m2_dssc_mechanism.png", width: 95%)
  )
  #text(size: 8pt, style: "italic", fill: rgb("#64748b"))[Figure 2.11: (Left) Dye-Sensitized Solar Cell 5-layer sandwich structure; (Right) 4-step photoelectric conversion mechanism and redox regeneration cycle.]
]

- *Energy Level Hierarchy Requirement:*
  - Dye LUMO must be higher (more negative) than the Conduction Band edge of $T i O_2$ ($- 0.5 "V"$ vs NHE) to enable spontaneous electron injection.
  - Dye HOMO must be lower (more positive) than the redox potential of the $I^- / I_3^-$ couple ($+ 0.35 "V"$ vs NHE) to ensure rapid regeneration of oxidized dye ($D^+$).
  - Open-circuit photovoltage ($V_"oc"$): Determined by the difference between the Fermi level of $T i O_2$ and the redox potential of the electrolyte ($V_"oc" approx 0.7 - 0.9 "V"$).
