
#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.2cm, right: 2.2cm),
  header: context {
    if here().page() > 1 {
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: luma(90))[VIT BACHY101 --- Module 2: Energy Devices]],
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
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT BACHY101 --- Module 2: Energy Devices] \
  #v(2mm)
  #text(size: 15pt, weight: "black")[MODULE 2: ENERGY DEVICES] \
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[(CO: 2)] \
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Complete Study Textbook, Step-by-Step Derivations & VIT FAT Question Bank] \
  #text(size: 9pt, fill: luma(100))[Aligned with Official VIT BACHY101 Course Page Syllabus, Question Bank, and Past FAT Papers]
]

#v(3mm)

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
