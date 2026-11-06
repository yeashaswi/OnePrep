import subprocess
import os
import re

typst_code = """#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.3cm, right: 2.3cm),
  header: context {
    let p = counter(page).get().first()
    if p > 1 [
      #grid(
        columns: (1fr, 1fr),
        align: (left, right),
        text(size: 8pt, fill: rgb(101, 106, 118))[VIT BACHY105 — Module 2: Energy Devices],
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
  #text(size: 13.5pt, weight: "bold", fill: rgb(139, 0, 0))[MODULE 2: ENERGY STORAGE AND CONVERSION DEVICES (CO: 2)] \\
  #v(2pt)
  #text(size: 10.5pt, weight: "bold")[Complete Comprehensive Textbook: Electrochemical Cells, "Li"-Ion Batteries, Fuel Cells, Solar & DSSC Systems & Solved VIT FAT Question Bank] \\
  #v(1pt)
  #text(size: 8.5pt, fill: rgb(85, 85, 85))[Aligned with Official VIT BACHY105 Applied Chemistry Course Syllabus, Department Question Bank & VIT FAT Papers]
]

#v(8pt)

#rect(width: 100%, fill: rgb(240, 244, 248), stroke: 1pt + rgb(180, 200, 220), radius: 4pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb(15, 23, 42))[Syllabus Scope & Competency Checklist (Module 2):] \\
  #text(size: 9pt)[
    - *Electrochemical & Electrolytic Cells:* Fundamental operational differences, thermodynamics ($Delta G = -n F E_"cell"$); electrode nomenclature and conventions; reference electrodes (SHE, SCE, "Ag"/AgCl).
    - *The Nernst Equation:* Thermodynamic derivation from reaction quotient $Q$; concentration cells (electrode and electrolyte); standard cell potential ($E degree$); calculations of cell EMF, equilibrium constant ($K_"eq"$), and pH.
    - *Classification of Modern Batteries:* Primary (irreversible), secondary (rechargeable), and reserve batteries; metrics (energy density, power density, cycle life, self-discharge rate).
    - *Lithium-Ion Secondary Batteries:* Electrochemical intercalation/de-intercalation chemistry; cathode materials ($"LiCoO"_2, "LiFePO"_4$, NMC) and graphitic anode ($""Li""_x "C"_6$); non-aqueous electrolyte ($"LiPF"_6$ in EC/DMC); Solid Electrolyte Interphase (SEI) formation and passivation; degradation and thermal runaway mechanisms.
    - *Fuel Cell Technologies:* Proton Exchange Membrane Fuel Cells (PEMFC) — membrane chemistry (Nafion), electrocatalysis, water management; Solid Oxide Fuel Cells (SOFC) — Yttria-Stabilized Zirconia (YSZ) oxygen ion transport, high-temperature operation, internal reforming.
    - *Solar Photovoltaics:* Silicon p-n junction physics; photovoltaic effect; I-V characterization, Short-Circuit Current ($I_"sc"$), Open-Circuit Voltage ($V_"oc"$), Fill Factor ($"FF"$), and Power Conversion Efficiency ($eta$).
    - *Photoelectrochemical (PEC) & Dye-Sensitized Solar Cells (DSSC):* PEC solar water splitting at semiconductor photoanodes ($"TiO"_2, ""Fe""_2 "O"_3$); Grätzel DSSC structure, ruthenium/organic dye sensitization, electron injection kinetics, iodide/triiodide ($"I"^- / "I"_3^-$) redox shuttle, counter electrode electrocatalysis.
  ]
]

#v(10pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[1. Electrochemical Cells & The Nernst Equation]

=== 1.1 Galvanic vs Electrolytic Cells
An electrochemical cell is a device capable of either generating electrical energy from spontaneous chemical reactions or utilizing electrical energy to cause non-spontaneous chemical transformations:
- *Galvanic (Voltaic) Cells:* Convert chemical energy into electrical energy spontaneously ($Delta G < 0, E_"cell" > 0$).
  - *Anode (Negative terminal):* Site of oxidation (loss of electrons: $M -> M^(n+) + n e^-$).
  - *Cathode (Positive terminal):* Site of reduction (gain of electrons: $M^(n+) + n e^- -> M$).
  - *Salt Bridge:* U-tube containing an inert electrolyte ($"KCl", "KNO"_3$, or $"NH"_4 "NO"_3$) in agar-agar gel. Maintains electrical neutrality by counter-ion diffusion and prevents mechanical mixing of the two half-cell solutions while completing the electrical circuit.
- *Electrolytic Cells:* Driven by an external DC power source to force a non-spontaneous reaction ($Delta G > 0, E_"ext" > E_"cell"$). Anode is connected to the positive terminal of the power supply; cathode is connected to the negative terminal.
- *Standard Reference Electrodes:*
  1. *Standard Hydrogen Electrode (SHE):* Platinum foil coated with platinum black immersed in $1.0" M " H^+$ solution with pure $H_2$ gas bubbled at $1.0" bar"$. By universal convention, its standard reduction potential is identically zero: $E^degree (H^+ / H_2) = 0.000" V"$ at all temperatures.
  2. *Saturated Calomel Electrode (SCE):* $"Hg" | Hg_2 Cl_2 (s) | "KCl (sat)"$. Reaction: $Hg_2 Cl_2 (s) + 2 e^- <==> 2 "Hg" (l) + 2 "Cl"^-$. Reduction potential at $25 degree"C"$ is $+0.242" V"$ vs SHE.
  3. *Silver / Silver Chloride Electrode ("Ag"/AgCl):* $"Ag" | AgCl (s) | "KCl (sat)"$. Reduction potential at $25 degree"C"$ is $+0.197" V"$ vs SHE.

=== 1.2 Derivation of the Nernst Equation
Consider a generalized reversible redox half-cell reaction:
$ a A + b B + n e^- <==> c C + d D $
From thermodynamics, the Gibbs free energy change under non-standard conditions is related to the standard free energy change $Delta G^degree$ and the reaction quotient $Q$:
$ Delta G = Delta G^degree + R T ln Q $
where the reaction quotient is $Q = ([C]^c [D]^d) / ([A]^a [B]^b)$.
The electrical work done by an electrochemical cell equals the decrease in Gibbs free energy:
$ Delta G = -w_"elec" = -n F E_"cell" quad "and" quad Delta G^degree = -n F E_"cell"^degree $
where $n$ is the number of moles of electrons transferred, $F$ is Faraday's constant ($96485" C/mol"$), and $E_"cell"$ is the electromotive force (EMF).
Substituting into the thermodynamic relation:
$ -n F E_"cell" = -n F E_"cell"^degree + R T ln Q $
Dividing both sides by $-n F$:
$ E_"cell" = E_"cell"^degree - (R T) / (n F) ln Q = E_"cell"^degree - (2.303 R T) / (n F) log_10 Q $
At standard laboratory temperature ($T = 298.15" K"$ or $25 degree"C"$):
$ (2.303 R T) / F = (2.303 times 8.314 times 298.15) / 96485 = 0.05916" V" approx 0.0592" V" $
The practical engineering form of the Nernst equation is:
$ E_"cell" = E_"cell"^degree - (0.0592) / n log_10 (([C]^c [D]^d) / ([A]^a [B]^b)) $
- *Equilibrium Constant ($K_"eq"$):*
  At dynamic chemical equilibrium, the net cell potential drops to zero ($E_"cell" = 0$) and the reaction quotient equals the equilibrium constant ($Q = K_"eq"$):
  $ 0 = E_"cell"^degree - (0.0592) / n log_10 K_"eq" quad ==> quad log_10 K_"eq" = (n E_"cell"^degree) / (0.0592) $

#v(8pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[2. Modern Battery Technologies & Lithium-Ion Secondary Batteries]

=== 2.1 Battery Classification & Performance Metrics
1. *Primary Batteries (Non-Rechargeable):* Chemical energy is converted irreversibly into electricity. Once reactants are consumed, the battery is dead (e.g., Alkaline $"Zn"/MnO_2$, Zinc-Air, Lithium thionyl chloride).
2. *Secondary Batteries (Rechargeable / Storage Batteries):* Electrochemical reactions are thermodynamically reversible. Discharging transforms active materials; applying an external DC current reverses the chemical transformation, restoring the original active state (e.g., Lead-Acid, "Ni"-Cd, "Ni"-MH, "Li"-ion).
3. *Key Performance Metrics:*
   - *Specific Energy (Energy Density):* Stored energy per unit mass ($"Wh/kg"$) or volume ($"Wh/L"$).
   - *Specific Power:* Maximum rate of energy discharge per unit mass ($"W/kg"$).
   - *Cycle Life:* Number of complete charge-discharge cycles before capacity drops below $80\%$ of rated nominal value.

=== 2.2 Lithium-Ion Battery (LIB) Chemistry & Architecture
Lithium-ion batteries have revolutionized portable electronics and electric vehicles due to their high operating cell voltage ($approx 3.7 - 4.2" V"$), high specific energy ($150 - 280" Wh/kg"$), low self-discharge ($< 2\%$ per month), and absence of memory effect.
- *Core Structural Components:*
  1. *Negative Electrode (Anode):* Highly crystalline layered graphite ($C_6$) coated on a copper foil current collector. Accommodates lithium between graphene sheets through intercalation.
  2. *Positive Electrode (Cathode):* Layered lithium transition metal oxide ($LiCoO_2$, $""Li""[Ni_x Mn_y Co_z]O_2$ NMC, or olivine-structured $LiFePO_4$) coated on an aluminum foil current collector.
  3. *Electrolyte:* Non-aqueous organic carbonate liquid mixture (Ethylene Carbonate $"EC"$ + Dimethyl Carbonate $"DMC"$) dissolving $1.0" M " LiPF_6$ (lithium hexafluorophosphate) salt. Aqueous electrolytes cannot be used because lithium reacts violently with water ($E^degree = -3.04" V"$).
  4. *Separator:* Microporous polymeric membrane (polyethylene PE / polypropylene PP, thickness $15 - 25 mu"m"$) that physically isolates anode and cathode to prevent electrical short-circuits while permitting rapid $"Li"^+$ ion conduction.

=== 2.3 Electrochemical Intercalation Mechanism
Lithium-ion cells operate as "rocking-chair" batteries where $"Li"^+$ ions shuttle back and forth between the interstitial host matrices of the two electrodes:
- *Discharging Mechanism (Spontaneous Power Generation):*
  - *At the Anode (Oxidation):* De-intercalation of lithium from graphite:
    $ Li_x C_6 -> 6 C + x "Li"^+ + x e^- $
  - *At the Cathode (Reduction):* Intercalation of lithium into transition metal oxide:
    $ Li_(1-x)CoO_2 + x "Li"^+ + x e^- -> LiCoO_2 $
  - *Net Cell Discharge Reaction:*
    $ Li_x C_6 + Li_(1-x)CoO_2 -> 6 C + LiCoO_2 quad (E_"cell" approx 3.7" V") $
- *Charging Mechanism (External DC Power Applied):*
  The external charger drives electrons from cathode to anode through the external circuit, forcing $"Li"^+$ ions to de-intercalate from the $LiCoO_2$ lattice, migrate through the liquid electrolyte, and re-intercalate between the graphite layers:
  $ LiCoO_2 + 6 C -> Li_(1-x)CoO_2 + Li_x C_6 $

=== 2.4 Solid Electrolyte Interphase (SEI) & Degradation Modes
- *Solid Electrolyte Interphase (SEI) Formation:*
  During the initial formatting charge cycle, the potential of the graphite anode drops below $approx 0.8" V"$ vs $"Li"/"Li"^+$, operating outside the electrochemical stability window of the organic carbonate solvent.
  The electrolyte decomposes reductively at the graphite surface, forming a passivating nanometer-thin ($10 - 50" nm"$) composite film comprising inorganic ($Li_2 CO_3, LiF, Li_2 O$) and organic ($(CH_2 OCOO "Li")_2$) species.
  - *Protective Role:* The SEI is electrically insulating (prevents continuous solvent reduction and capacity loss) but ionically conductive to $"Li"^+$ ions, allowing normal battery operation.
- *Capacity Fade & Degradation Mechanisms:*
  1. *Lithium Plating & Dendrite Growth:* Under fast charging at low temperatures, metallic lithium deposits on the graphite surface, forming needle-like dendrites that can pierce the separator, causing catastrophic internal short circuits and thermal runaway.
  2. *Transition Metal Dissolution:* Trace moisture reacts with $LiPF_6$ to form hydrofluoric acid ($HF$), which leaches manganese or cobalt ions from the cathode, destroying the crystalline structure.
  3. *Thermal Runaway:* Exothermic breakdown of the SEI layer above $80 - 120 degree"C"$, followed by reaction of intercalated lithium with electrolyte and oxygen release from the cathode above $180 degree"C"$, leading to self-sustaining fire and explosion.

#v(8pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[3. Fuel Cells: PEMFC & Solid Oxide Fuel Cells (SOFC)]

=== 3.1 Principles of Fuel Cell Operation
A fuel cell is an open electrochemical energy converter that continuously transforms the chemical energy of a fuel (hydrogen, natural gas, methanol) and an oxidant (oxygen from air) directly into electrical power without intermediate combustion:
$ "Efficiency" eta_"theo" = (Delta G) / (Delta H) times 100\% $
Unlike heat engines governed by Carnot cycle thermal limits ($eta < 1 - T_C / T_H$), theoretical fuel cell efficiencies can exceed $80 - 90\%$ because they are direct isothermal electrochemical converters.

=== 3.2 Proton Exchange Membrane Fuel Cell (PEMFC)
Operating at low temperatures ($60 - 80 degree"C"$), PEMFCs are the preferred power source for automotive hydrogen vehicles (e.g., Toyota Mirai) and portable clean power.
- *Membrane Electrode Assembly (MEA) Structure:*
  - *Electrolyte:* Solid perfluorosulfonic acid polymer membrane (*Nafion*). The polytetrafluoroethylene (PTFE) backbone provides mechanical and chemical robustness; pendant perfluorovinyl ether chains terminated by sulfonic acid groups ($-SO_3^- H^+$) form hydrophilic nano-channels. When hydrated with liquid water, these channels facilitate ultra-rapid proton hopping ($H^+$ conductivity $approx 0.1" S/cm"$).
  - *Catalyst Layers:* Platinum nanoparticles ($2 - 4" nm"$) dispersed on high surface area carbon black ($"Pt"/C$).
- *Electrode Reactions:*
  - *Anode (Hydrogen Oxidation Reaction - HOR):*
    $ H_2 -> 2 H^+ + 2 e^- quad (E^degree = 0.000" V") $
  - *Cathode (Oxygen Reduction Reaction - ORR):*
    $ 1 / 2 O_2 + 2 H^+ + 2 e^- -> H_2 O (l) quad (E^degree = +1.229" V") $
  - *Overall Cell Reaction:*
    $ H_2 + 1 / 2 O_2 -> H_2 O (l) quad (E_"cell"^degree = 1.229" V", quad Delta G^degree = -237.1" kJ/mol") $
- *Operational Challenges:* Platinum poisoning by carbon monoxide ($CO > 10" ppm"$), and water management (membrane drying causes high ohmic resistance; flooding blocks reactant gas transport).

=== 3.3 Solid Oxide Fuel Cells (SOFC)
Operating at high temperatures ($700 - 1000 degree"C"$), SOFCs provide high-efficiency stationary power generation with fuel flexibility.
- *Component Materials:*
  - *Electrolyte:* Ceramic membrane of *Yttria-Stabilized Zirconia (YSZ)*, consisting of $ZrO_2$ doped with $8 - 10" mol"% Y_2 O_3$. Substituting $Y^(3+)$ for $"Zr"^(4+)$ creates oxygen vacancies ($V_O^(bullet bullet)$) in the fluorite crystal lattice, enabling rapid transport of oxide ions ($O^(2-)$) at high temperatures.
  - *Anode:* Nickel-YSZ cermet ($"Ni"-YSZ$). Nickel acts as electronic conductor and catalytic cracker for hydrocarbon reforming; YSZ inhibits sintering and matches thermal expansion.
  - *Cathode:* Strontium-doped Lanthanum Manganite ($La_(1-x)Sr_x MnO_3$ LSM).
- *Electrode Reactions:*
  - *Cathode:* $1 / 2 O_2 + 2 e^- -> O^(2-) ("migrates through YSZ electrolyte")$
  - *Anode:* $H_2 + O^(2-) -> H_2 O (g) + 2 e^-$
- *Advantages:* Operates with non-precious nickel catalysts; capable of direct internal reforming of natural gas ($CH_4 + H_2 O -> CO + 3 H_2$); high-quality waste heat enables combined heat and power (CHP) cogeneration reaching total energy efficiencies $> 80\%$.

#v(8pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[4. Solar Photovoltaics, Photoelectrochemical & Dye-Sensitized Cells]

=== 4.1 Silicon Photovoltaic (PV) Solar Cells
A solar cell directly converts incident sunlight photons into electricity via the photovoltaic effect in a p-n junction:
1. *Photon Absorption & Carrier Generation:* Photons with energy $h nu >= E_g$ (where bandgap $E_g = 1.12" eV"$ for silicon, corresponding to $lambda <= 1100" nm"$) excite electrons from the valence band to the conduction band, generating electron-hole pairs ($e^- - h^+$).
2. *Charge Carrier Separation:* The strong built-in electric field in the p-n depletion region sweeps photogenerated electrons into the n-layer and holes into the p-layer before recombination can occur.
3. *Current Collection:* Electrons flow through an external load to recombine with holes, producing continuous DC electric power.
- *Key Solar Cell Performance Parameters:*
  - *Short-Circuit Current ($I_"sc"$):* Maximum current produced when cell terminals are short-circuited ($V = 0$).
  - *Open-Circuit Voltage ($V_"oc"$):* Maximum voltage across cell terminals when net current is zero ($I = 0$).
  - *Maximum Power Point ($P_"max" = V_"mp" times I_"mp"$):* Operating point on the I-V curve where power output is maximized.
  - *Fill Factor ($"FF"$):* Ratio of actual maximum power to the theoretical product of $V_"oc"$ and $I_"sc"$:
  $ "FF" = (V_"mp" I_"mp") / (V_"oc" I_"sc") = P_"max" / (V_"oc" I_"sc") quad (0.75 <= "FF" <= 0.85 " for quality cells") $
  - *Power Conversion Efficiency ($eta$):*
  $ eta = P_"max" / P_"in" times 100\% = (V_"oc" I_"sc" "FF") / (P_"in" times A_"cell") times 100\% $
  where standard solar testing irradiance is $P_"in" = 1000" W/m"^2$ (AM 1.5G spectrum at $25 degree"C"$).

=== 4.2 Dye-Sensitized Solar Cells (DSSC / Grätzel Cell)
Invented by Michael Grätzel (1991), DSSCs mimic biological photosynthesis by decoupling the photon absorption mechanism from the charge carrier transport mechanism.
- *Architecture:*
  1. *Working Electrode (Anode):* Transparent Fluorine-doped Tin Oxide (FTO) conducting glass coated with a mesoporous film of sintered titanium dioxide ($TiO_2$, anatase, thickness $10 - 15 mu"m"$). The nanoporous network provides an enormous active surface area ($approx 1000 times$ geometric area).
  2. *Molecular Sensitizer (Dye):* Monolayer of ruthenium polypyridyl organometallic complex (e.g., N719 dye) chemically chemisorbed via carboxylate anchoring groups onto the $TiO_2$ nanoparticle surface.
  3. *Redox Electrolyte:* Organic liquid solvent (acetonitrile) containing an iodide/triiodide ($I^- / I_3^-$) redox couple.
  4. *Counter Electrode (Cathode):* FTO glass coated with a catalytic nanolayer of platinum ($"Pt"$).
- *The 5-Step Operational Kinetic Cycle:*
  1. *Photoexcitation:* Incident photon excites the ground-state dye molecule:
     $ "Dye" + h nu -> "Dye"^* $
  2. *Ultrafast Electron Injection:* The excited dye injects an electron into the conduction band of $TiO_2$ within femtoseconds ($tau < 100" fs"$):
     $ "Dye"^* -> "Dye"^+ + e^-_("CB"(TiO_2)) $
  3. *Electron Transport:* Injected electrons percolate via diffusive hopping through the interconnected $TiO_2$ nanoparticle network to the FTO front current collector, driving the external electrical load.
  4. *Dye Regeneration:* The oxidized dye ($"Dye"^+$) is rapidly regenerated back to its ground state by electron transfer from iodide ions in the electrolyte:
     $ 2 "Dye"^+ + 3 I^- -> 2 "Dye" + I_3^- $
  5. *Cathodic Regeneration:* The triiodide ions ($I_3^-$) diffuse across the thin electrolyte gap to the platinum counter electrode, where they are catalytically reduced back to iodide by incoming circuit electrons:
     $ I_3^- + 2 e^- -> 3 I^- $
  The closed catalytic cycle produces net electrical power without any permanent chemical consumption of dye, electrolyte, or semiconductors.

#v(10pt)
#line(length: 100%, stroke: 0.5pt + rgb(180, 200, 220))
#v(6pt)

#text(size: 12pt, weight: "bold", fill: rgb(139, 0, 0))[VIT FAT Solved Question Bank: Step-by-Step Numerical Derivations]

#v(6pt)
#rect(width: 100%, fill: rgb(249, 250, 251), stroke: 1pt + rgb(220, 225, 230), radius: 4pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb(15, 23, 42))[FAT Problem 1: Nernst Equation EMF, Concentration Cell & Equilibrium Constant] \\
  *Question (10 Marks):* An electrochemical galvanic cell is constructed at $25 degree"C"$ according to the following cell notation:
  $ "Zn" (s) | "Zn"^(2+) (0.02" M") || "Cu"^(2+) (0.50" M") | "Cu" (s) $
  Given standard reduction potentials: $E^degree ("Zn"^(2+)/"Zn") = -0.763" V"$ and $E^degree ("Cu"^(2+)/"Cu") = +0.340" V"$.
  (i) Write the balanced spontaneous cell reaction and calculate the standard cell potential $E_"cell"^degree$.
  (ii) Apply the Nernst equation to compute the actual EMF ($E_"cell"$) of this cell at $25 degree"C"$.
  (iii) Calculate the standard Gibbs free energy change $Delta G^degree$ in kilojoules.
  (iv) Determine the thermodynamic equilibrium constant $K_"eq"$ of the cell reaction at $25 degree"C"$.

  #v(4pt)
  #text(weight: "bold", fill: rgb(139, 0, 0))[Complete Step-by-Step Solution:] \\
  *Step 1: Cell Reactions & Standard Potential:*
  - Anode (Oxidation): $"Zn" (s) -> "Zn"^(2+) (aq) + 2 e^-$
  - Cathode (Reduction): $"Cu"^(2+) (aq) + 2 e^- -> "Cu" (s)$
  - Net Cell Reaction: $"Zn" (s) + "Cu"^(2+) (aq) -> "Zn"^(2+) (aq) + "Cu" (s)$ with $n = 2$ electrons transferred.
  $ E_"cell"^degree = E_"cathode"^degree - E_"anode"^degree = +0.340 - (-0.763) = +1.103" V" $

  *Step 2: Apply Nernst Equation:*
  $ E_"cell" = E_"cell"^degree - (0.0592) / n log_10 (["Zn"^(2+)] / ["Cu"^(2+)]) $
  $ ["Zn"^(2+)] / ["Cu"^(2+)] = 0.02 / 0.50 = 0.040 $
  $ log_10(0.040) = log_10(4 times 10^(-2)) = 0.6021 - 2 = -1.3979 $
  $ E_"cell" = 1.103 - (0.0592 / 2) times (-1.3979) = 1.103 - (0.0296 times (-1.3979)) = 1.103 + 0.04138 = +1.1444" V" $

  *Step 3: Standard Free Energy Change $Delta G^degree$:*
  $ Delta G^degree = -n F E_"cell"^degree = -2 times 96485" C/mol" times 1.103" V" = -212846" J/mol" = -212.85" kJ/mol" $

  *Step 4: Equilibrium Constant $K_"eq"$:*
  $ log_10 K_"eq" = (n E_"cell"^degree) / (0.0592) = (2 times 1.103) / 0.0592 = 2.206 / 0.0592 = 37.2635 $
  $ K_"eq" = 10^(37.2635) = 10^(0.2635) times 10^(37) = 1.834 times 10^(37) $

  *Boxed Final Answers:*
  $ E_"cell"^degree = +1.103" V", quad E_"cell" = +1.144" V", quad Delta G^degree = -212.85" kJ/mol", quad K_"eq" = 1.83 times 10^(37). $
]

#v(8pt)
#rect(width: 100%, fill: rgb(249, 250, 251), stroke: 1pt + rgb(220, 225, 230), radius: 4pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb(15, 23, 42))[FAT Problem 2: Theoretical Capacity of Lithium-Ion Battery Electrodes] \\
  *Question (10 Marks):* A commercial lithium-ion secondary battery utilizes a layered lithium cobalt oxide cathode ($LiCoO_2$) and a graphitic carbon anode ($C_6$).
  Given Atomic Masses: $"Li" = 6.94, "Co" = 58.93, O = 16.00, C = 12.011" g/mol"$, and Faraday's constant $F = 96485" C/mol" = 26801" mAh/mol"$.
  (i) Calculate the theoretical specific capacity of the $LiCoO_2$ cathode in $"mAh/g"$.
  (ii) In commercial cells, only $50\%$ of lithium can be reversibly de-intercalated ($x = 0.5$) before irreversible crystal structural collapse occurs. Find the practical specific capacity.
  (iii) Calculate the theoretical specific capacity of the graphitic anode based on the formation of $"Li" C_6$ in $"mAh/g"$.
  (iv) If a cell operates at a nominal voltage of $3.70" V"$, determine the theoretical specific energy of the $LiCoO_2$ material.

  #v(4pt)
  #text(weight: "bold", fill: rgb(139, 0, 0))[Complete Step-by-Step Solution:] \\
  *Step 1: Theoretical Capacity of $LiCoO_2$ Cathode:*
  Molar mass of $LiCoO_2$:
  $ M_("LiCoO"_2) = 6.94 + 58.93 + (2 times 16.00) = 6.94 + 58.93 + 32.00 = 97.87" g/mol" $
  Theoretical specific capacity $Q_"theo"$:
  $ Q_("theo","cathode") = (n F) / M = (1 times 26801" mAh/mol") / (97.87" g/mol") = 273.84" mAh/g" $

  *Step 2: Practical Reversible Capacity of Cathode:*
  De-intercalating more than $x = 0.5$ causes phase transition from hexagonal to monoclinic and oxygen gas evolution:
  $ Q_("practical") = 0.50 times Q_("theo","cathode") = 0.50 times 273.84 = 136.92" mAh/g" $
  (Matches commercial rating of $approx 140" mAh/g"$).

  *Step 3: Theoretical Capacity of Graphite Anode ($"Li" C_6$):*
  Six carbon atoms host one lithium atom ($6 C + "Li"^+ + e^- -> "Li" C_6$):
  Molar mass of host graphite matrix ($6 C$):
  $ M_(6C) = 6 times 12.011 = 72.066" g/mol" $
  $ Q_("theo","anode") = (1 times 26801" mAh/mol") / (72.066" g/mol") = 371.90" mAh/g" $
  (Matches benchmark graphite capacity of $372" mAh/g"$).

  *Step 4: Theoretical Specific Energy of Cathode:*
  $ "Specific Energy" = Q_("practical") times V_"nominal" = 136.92" mAh/g" times 3.70" V" = 506.6" mWh/g" = 506.6" Wh/kg" $

  *Boxed Final Answers:*
  $ Q_("theo","cathode") = 273.8" mAh/g", quad Q_("practical") = 136.9" mAh/g", quad Q_("theo","anode") = 371.9" mAh/g", quad "Specific Energy" = 506.6" Wh/kg". $
]

#v(8pt)
#rect(width: 100%, fill: rgb(249, 250, 251), stroke: 1pt + rgb(220, 225, 230), radius: 4pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb(15, 23, 42))[FAT Problem 3: Solar PV Cell I-V Fill Factor & Efficiency Calculations] \\
  *Question (10 Marks):* A monocrystalline silicon photovoltaic solar cell with active surface area $A = 25" cm"^2$ is evaluated under standard test conditions (irradiance $P_"in" = 1000" W/m"^2$, AM 1.5G spectrum at $25 degree"C"$). The measured output characteristics are:
  - Open-Circuit Voltage: $V_"oc" = 0.620" V"$
  - Short-Circuit Current: $I_"sc" = 0.850" A"$
  - Voltage at Maximum Power Point: $V_"mp" = 0.510" V"$
  - Current at Maximum Power Point: $I_"mp" = 0.780" A"$
  (i) Calculate the maximum electrical power output $P_"max"$ produced by the solar cell in Watts.
  (ii) Compute the Fill Factor ($"FF"$) of this solar cell.
  (iii) Determine the total incident solar optical power $P_"light"$ impinging on the cell surface.
  (iv) Calculate the Power Conversion Efficiency ($eta$) of the solar cell.

  #v(4pt)
  #text(weight: "bold", fill: rgb(139, 0, 0))[Complete Step-by-Step Solution:] \\
  *Step 1: Maximum Electrical Power Output $P_"max"$:*
  $ P_"max" = V_"mp" times I_"mp" = 0.510" V" times 0.780" A" = 0.3978" W" = 397.8" mW" $

  *Step 2: Calculate Fill Factor ($"FF"$):*
  $ "FF" = P_"max" / (V_"oc" times I_"sc") = 0.3978 / (0.620 times 0.850) = 0.3978 / 0.5270 = 0.7548 quad (75.48\%) $

  *Step 3: Total Incident Solar Optical Power $P_"light"$:*
  Cell area in square meters:
  $ A = 25" cm"^2 = 25 times 10^(-4)" m"^2 = 2.50 times 10^(-3)" m"^2 $
  $ P_"light" = "Irradiance" times "Area" = 1000" W/m"^2 times (2.50 times 10^(-3)" m"^2) = 2.50" W" $

  *Step 4: Power Conversion Efficiency ($eta$):*
  $ eta = P_"max" / P_"light" times 100\% = 0.3978 / 2.50 times 100\% = 15.912\% $

  *Boxed Final Answers:*
  $ P_"max" = 0.398" W", quad "FF" = 0.755 (75.5\%), quad P_"light" = 2.50" W", quad eta = 15.91\%. $
]
"""

# Quote roman numerals in math mode
typst_code = re.sub(r'\(([i|v|x]+)\)', r'("\1")', typst_code)

with open("scripts/Chemistry_MOD-2.typ", "w") as f:
    f.write(typst_code)

res = subprocess.run(["/opt/homebrew/bin/typst", "compile", "scripts/Chemistry_MOD-2.typ", "public/pdfs/chemistry/Chemistry_MOD-2.pdf"], capture_output=True, text=True)
if res.returncode == 0:
    print("SUCCESS: Compiled public/pdfs/chemistry/Chemistry_MOD-2.pdf")
else:
    print("ERROR:", res.stderr)
