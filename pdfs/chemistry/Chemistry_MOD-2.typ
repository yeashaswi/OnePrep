#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.4cm, right: 2.4cm),
  header: context {
    if here().page() > 1 {
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: rgb("#64748b"))[VIT Applied Chemistry (BACHY101) --- Module 2: Energy Devices]],
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
  #text(size: 16pt, weight: "bold", fill: rgb("#0f172a"))[MODULE 2: ENERGY DEVICES & SEMICONDUCTOR ELECTRODES] \
  #v(1mm)
  #text(size: 11.5pt, weight: "bold", fill: rgb("#b91c1c"))[Official FAT Study Textbook & Step-by-Step Question Bank Solutions (CO: 2)] \
  #v(1mm)
  #text(size: 9pt, fill: rgb("#64748b"))[Aligned with Official VIT BACHY101 Syllabus, Department Question Bank, and Past FAT Papers]
]

#v(3mm)

#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.8pt + rgb("#cbd5e1"), radius: 5pt, inset: 11pt)[
  #text(weight: "bold", fill: rgb("#0f172a"), size: 10pt)[Scope of Module 2 (Official VIT Syllabus - All 9 Topics):] \
  #v(1.5mm)
  #text(size: 9.5pt, fill: rgb("#334155"))[
    (1) Electrochemical and electrolytic cells, (2) Nernst equation, (3) Industrial electrolysis: Downs cell and water splitting, (4) Semiconductor electrodes, (5) Zone refining and single-crystal growth (Czochralski), (6) Lithium-ion battery chemistry and safety, (7) Fuel cells (PEMFC and SOFC), (8) Solar conversion: Silicon p-n and dye-sensitized solar cells (DSSC), and (9) Worked Question Bank Problems.
  ]
]

#v(4mm)

= 1. Core Syllabus Definitions & Theoretical Foundations (Line-by-Line)

#v(2mm)

*1. Galvanic / Electrochemical Cell* \
A device that directly converts spontaneous chemical redox energy into usable electrical work ($Delta G < 0, E_"cell" > 0$). Spontaneous oxidation occurs at the negative anode (LOAN rule: Left, Oxidation, Anode, Negative), while reduction occurs at the positive cathode.

#v(3.5mm)

*2. Electrolytic Cell* \
An electrochemical device that consumes external electrical energy from an applied DC voltage source ($E_"ext" > E_"cell"^circle$) to drive non-spontaneous chemical reactions ($Delta G > 0$). The anode is connected to the positive terminal of the power supply and oxidation takes place there.

#v(3.5mm)

*3. Salt Bridge* \
An inverted U-shaped glass tube filled with agar-agar gel saturated with inert electrolytes (such as $K C l, K N O_3$, or $N H_4 N O_3$) where the cation and anion have virtually identical ionic mobilities ($u_+ approx u_-$). It serves 3 essential functions: (1) Completes the internal electric circuit, (2) Maintains electroneutrality in both half-cells, and (3) Eliminates liquid junction potential ($E_j approx 0$).

#v(3.5mm)

*4. Nernst Equation* \
The fundamental thermodynamic relation expressing the electromotive force (EMF) of a cell as a function of standard reduction potential, temperature, and the reaction quotient $Q$:
$ E_"cell" = E_"cell"^circle - (R T) / (n F) ln Q = E_"cell"^circle - (0.05916 / n) log_10 Q quad (at 298.15 "K") $

#v(3.5mm)

*5. Downs Cell Industrial Electrolysis* \
A continuous commercial electrochemical process for extracting pure metallic sodium by electrolyzing molten $N a C l$ at $approx 600 thin degree "C"$ (fluxed with $C a C l_2$ to lower melting point from $801 thin degree "C"$). A central cylindrical graphite anode produces dry $C l_2$ gas and a surrounding circular steel cathode collects molten sodium metal, separated by a cylindrical steel wire gauze diaphragm with operating cell voltage $> 4.07 "V"$.

#v(3.5mm)

*6. Water Splitting Electrolysis* \
The stoichiometric electrochemical decomposition of water into hydrogen and oxygen gases in a $2:1$ molar ratio ($2 H_2 O arrow.r 2 H_2 + O_2$). Acidic mechanism uses platinum electrodes ($"Cathode": 2 H^+ + 2 e^- arrow.r H_2$; $"Anode": 2 H_2 O arrow.r O_2 + 4 H^+ + 4 e^-$); alkaline mechanism uses nickel mesh electrodes with hydroxide ion migration.

#v(3.5mm)

*7. Intrinsic Semiconductors* \
Extremely pure Group 14 elements (silicon, germanium) where electrical conductivity arises purely from thermal excitation of valence electrons across the bandgap $E_g$ into the conduction band, creating equal concentrations of electrons and holes ($n_e = n_h = n_i$).

#v(3.5mm)

*8. Extrinsic Semiconductors* \
Semiconductor crystals doped with controlled trace concentrations of impurity atoms:
- *n-type:* Doped with pentavalent Group 15 donors (P, As, Sb), producing mobile conduction electrons as majority carriers.
- *p-type:* Doped with trivalent Group 13 acceptors (B, Al, Ga), generating mobile positive electron holes in the valence band as majority carriers.

#v(3.5mm)

*9. Three-Stage Silicon Purification* \
The rigorous industrial process used to manufacture semiconductor-grade silicon of $> 99.9999999%$ (9N) purity:
- *Stage 1 (Siemens Process):* Carbothermic reduction of silica quartz followed by conversion into trichlorosilane ($S i H C l_3$), fractional distillation, and CVD reduction onto pure silicon filaments at $1100 thin degree "C"$.
- *Stage 2 (Zone Refining):* Repeated passage of a narrow RF induction molten zone along the silicon ingot sweeps impurities with segregation coefficient $k < 1$ into the terminal end, which is cropped off.
- *Stage 3 (Czochralski Single-Crystal Pulling):* Dipping an orienting seed crystal into molten silicon at $1425 thin degree "C"$ and pulling slowly with rotation under an inert argon atmosphere to yield large dislocation-free single-crystal boules.

#v(3.5mm)

*10. Lithium-Ion Secondary Battery (LIB)* \
A high-energy density rechargeable battery operating via the "rocking-chair" intercalation and de-intercalation of $L i^+$ ions:
- *Anode:* Graphitic carbon on copper foil ($L i_x C_6$).
- *Cathode:* Lithium cobalt oxide ($L i C o O_2$) or lithium iron phosphate ($L i F e P O_4$) on aluminum foil.
- *Electrolyte:* $1 "M" space L i P F_6$ dissolved in organic alkyl carbonates (ethylene carbonate EC + dimethyl carbonate DMC).
- *Solid Electrolyte Interphase (SEI):* A passivating, protective nanometer film formed on the graphite anode surface during the initial charging cycle that conducts $L i^+$ ions while blocking electron transfer and electrolyte reduction.

#v(3.5mm)

*11. Proton Exchange Membrane Fuel Cell (PEMFC)* \
A low-temperature ($60 - 80 thin degree "C"$) electrochemical power generator consuming pure hydrogen fuel and oxygen oxidant across a perfluorosulfonic acid ion-exchange membrane (Nafion):
- *Anode (Pt Catalyst):* $2 H_2 arrow.r 4 H^+ + 4 e^-$
- *Cathode (Pt Catalyst):* $O_2 + 4 H^+ + 4 e^- arrow.r 2 H_2 O$
- *Overall Reaction:* $2 H_2 + O_2 arrow.r 2 H_2 O + "Electricity" + "Heat"$

#v(3.5mm)

*12. Solid Oxide Fuel Cell (SOFC)* \
A high-temperature ($700 - 1000 thin degree "C"$) all-solid-state ceramic fuel cell utilizing dense yttria-stabilized zirconia (YSZ) as an oxygen ion ($O^(2-)$) conducting solid electrolyte. Capable of directly utilizing syngas ($C O + H_2$) and reforming hydrocarbons without expensive noble metal catalysts.

#v(3.5mm)

*13. Silicon p-n Junction Photovoltaic Cell* \
A semiconductor diode device that directly converts solar radiation into electricity. Photons with energy $h nu >= E_g$ absorb near the $p-n$ depletion zone, creating electron-hole pairs separated by the internal built-in electric field to produce open-circuit photovoltage ($V_"oc"$) and short-circuit photocurrent ($I_"sc"$).

#v(3.5mm)

*14. Dye-Sensitized Solar Cell (DSSC / Grätzel Cell)* \
A biomimetic photoelectrochemical cell comprising: (1) Fluorine-doped tin oxide (FTO) conductive glass, (2) Nanoporous mesoporous $T i O_2$ photoanode, (3) Ruthenium polypyridyl dye sensitizer, (4) Liquid $I^- / I_3^-$ redox electrolyte mediator, and (5) Platinum counter-electrode.

#v(5mm)

= 2. In-Depth Chemical Theory & Step-by-Step Derivations

#v(2mm)

== Thermodynamic Derivation of the Nernst Equation
From chemical thermodynamics, the change in Gibbs free energy for a general reversible redox process $a A + b B <=> c C + d D$ is given by the van 't Hoff reaction isotherm:
$ Delta G = Delta G^circle + R T ln Q $
where $Q = ([C]^c [D]^d) / ([A]^a [B]^b)$ is the reaction quotient.
The maximum non-expansion electrical work obtained from a reversible galvanic cell is related to the Gibbs free energy change by:
$ Delta G = -n F E_"cell" quad "and" quad Delta G^circle = -n F E_"cell"^circle $
where $n$ is the number of moles of electrons transferred and $F = 96485 "C/mol"$ is Faraday's constant.
Substituting into the isotherm:
$ -n F E_"cell" = -n F E_"cell"^circle + R T ln Q $
Dividing both sides by $-n F$:
$ E_"cell" = E_"cell"^circle - (R T) / (n F) ln Q $
Converting natural logarithm to base 10 ($ln Q = 2.3026 log_10 Q$) and evaluating at standard temperature $T = 298.15 "K"$:
$ (2.302585 times 8.31446 times 298.15) / 96485 = bold(0.05916) $
Hence, the working Nernst equation is:
$ bold(E_"cell" = E_"cell"^circle - (0.05916 / n) log_10 Q) $

#v(5mm)

= 3. VIT FAT Exam Blueprint & Master Formula Sheet

#table(
  columns: (1.5fr, 2.2fr, 2fr),
  inset: 7pt,
  stroke: 0.5pt + rgb("#cbd5e1"),
  align: (left, left, left),
  [*Device / Law*], [*Governing Equation / Formula*], [*VIT Exam Key Insight*],
  [Nernst Cell EMF], [$E_"cell" = E_"cell"^circle - (0.05916 / n) log_10 (["anode ions"] / ["cathode ions"])$], [$E_"cell"^circle = E_"cathode"^circle - E_"anode"^circle$ (both reduction potentials).],
  [Equilibrium Constant], [$log_10 K_"eq" = (n E_"cell"^circle) / 0.05916$], [At equilibrium, $E_"cell" = 0$ and $Q = K_"eq"$.],
  [Faraday's First Law], [$m = Z I t = (M I t) / (n F)$], [$1 "Faraday" = 96485 "C"$; deposits 1 gram-equivalent.],
  [Theoretical Cell Voltage], [$Delta G^circle = -n F E^circle arrow.r E^circle = - (Delta G^circle) / (n F)$], [For water splitting ($Delta G^circle = +237.2 "kJ/mol"$): $E^circle = 1.229 "V"$.],
  [DSSC Energy Efficiency], [$eta = (P_"max") / P_"in" = (V_"oc" I_"sc" "FF") / P_"in"$], [Fill Factor $"FF" = (V_"mp" I_"mp") / (V_"oc" I_"sc")$ (typically $0.70 - 0.85$).]
)

#v(5mm)

= 4. Worked VIT Question Bank & Past FAT Numerical Problems

#v(2mm)

#rect(width: 100%, fill: rgb("#fef2f2"), stroke: 0.8pt + rgb("#f87171"), radius: 5pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb("#991b1b"))[VIT FAT Problem 1 (10 Marks): Nernst Equation & Cell Potential Calculation] \
  #v(1mm)
  A galvanic electrochemical cell is represented by:
  $ Z n (s) | Z n^(2+) (0.010 "M") || C u^(2+) (0.500 "M") | C u (s) $
  Given standard reduction potentials $E^circle (Z n^(2+) / Z n) = -0.763 "V"$ and $E^circle (C u^(2+) / C u) = +0.337 "V"$ at $25 thin degree "C"$. \
  (a) Write the half-cell reactions and the overall cell equation. \
  (b) Calculate standard cell potential $E_"cell"^circle$. \
  (c) Calculate the cell EMF $E_"cell"$ under the given concentrations at $298 "K"$. \
  (d) Determine the equilibrium constant $K_"eq"$ of this Daniell cell.
]

#v(2mm)

*Step-by-Step Solution:*
- *Part (a): Cell Reactions ($n = 2$):*
  - Anode (Oxidation): $Z n (s) arrow.r Z n^(2+) (a q) + 2 e^-$
  - Cathode (Reduction): $C u^(2+) (a q) + 2 e^- arrow.r C u (s)$
  - Overall Cell Reaction: $Z n (s) + C u^(2+) (a q) arrow.r Z n^(2+) (a q) + C u (s)$

- *Part (b): Standard Cell Potential ($E_"cell"^circle$):*
  $ E_"cell"^circle = E_"cathode"^circle - E_"anode"^circle = (+0.337) - (-0.763) = bold(+1.100 "V") $

- *Part (c): Cell EMF using Nernst Equation:*
  $ E_"cell" = E_"cell"^circle - (0.05916 / 2) log_10 ([Z n^(2+)] / [C u^(2+)]) $
  $ [Z n^(2+)] / [C u^(2+)] = 0.010 / 0.500 = 0.020 = 2.0 times 10^(-2) $
  $ log_10(0.020) = -1.6990 $
  $ E_"cell" = 1.100 - (0.02958) times (-1.6990) = 1.100 + 0.05025 = bold(1.150 "V") $

- *Part (d): Equilibrium Constant ($K_"eq"$):*
  $ log_10 K_"eq" = (n E_"cell"^circle) / 0.05916 = (2 times 1.100) / 0.05916 = 2.200 / 0.05916 = 37.187 $
  $ K_"eq" = 10^(37.187) = bold(1.54 times 10^(37)) $

#v(2mm)

#rect(width: 100%, fill: rgb("#f0fdf4"), stroke: 0.8pt + rgb("#86efac"), radius: 4pt, inset: 8pt)[
  *Boxed Final Answers:* \
  (a) Standard Cell Potential $E_"cell"^circle = bold(+1.100 "V")$ \
  (b) Cell EMF under operating conditions $E_"cell" = bold(1.150 "V")$ \
  (c) Thermodynamic Equilibrium Constant $K_"eq" = bold(1.54 times 10^(37))$
]
