
#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.2cm, right: 2.2cm),
  header: context {
    if here().page() > 1 {
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: luma(90))[VIT BCHY102 / EST1001 --- Module 3: Pollution Management]],
        align(right)[#text(size: 8.5pt, fill: luma(90), style: "italic")[VIT CBT Exam Textbook]]
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
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT BCHY102 / EST1001 --- Module 3: Pollution Management] \
  #v(2mm)
  #text(size: 15pt, weight: "black")[MODULE 3: POLLUTION AND ITS MANAGEMENT TECHNIQUES] \
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[(CO: 3)] \
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Complete CBT Study Textbook, High-Yield MCQ Bank & Step-by-Step Rationales] \
  #text(size: 9pt, fill: luma(100))[Aligned with VIT BCHY102 Online CBT Exam Syllabus, VTOP / Moodle Question Bank & Past Papers]
]

#v(3mm)
#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 9pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Textbook (Official VIT Syllabus):]
  (1) Environmental pollution: Causes, health effects, and engineering abatement techniques for Air, Water, Soil, Noise, Thermal, and Nuclear pollution, (2) Air pollution control devices: Cyclone separators, Electrostatic Precipitators (ESP), Fabric filters (Baghouses), and Wet scrubbers, (3) Water pollution: Point vs non-point sources, Biochemical Oxygen Demand (BOD), Chemical Oxygen Demand (COD), Eutrophication mechanism, (4) Wastewater treatment engineering: Primary (screening, sedimentation), Secondary (Activated Sludge Process, Trickling filters), and Tertiary treatment (UV, chlorination, RO), (5) Water management: Water footprint, Virtual water, Blue revolution, and (6) Solid and hazardous waste management: 3R principles (Reduce, Reuse, Recycle) and circular economy.
]

#v(2mm)
#outline(title: "Contents", depth: 2, indent: auto)
#v(2mm)

= VIT CBT Exam Blueprint & Master Key Facts for Module 3

VIT Examination Format: 100% CBT Multiple Choice Questions (MCQs).
Module 3 accounts for 25% of the CBT Question Pool (highest weightage in EVS CBT):
- Core Focus: Electrostatic Precipitator working principle (corona discharge removes particulate matter PM2.5/PM10), BOD vs COD relations ($"COD" >= "BOD"$ always), Eutrophication stages (algal bloom -> dissolved oxygen depletion -> hypoxia), and wastewater treatment unit operations.

#v(2mm)
#table(
  columns: (2.2fr, 3.2fr, 2.6fr),
  stroke: 0.5pt + luma(180),
  inset: 6.5pt,
  [*Pollution Parameter / Device*], [*Operating Principle / Ratio*], [*CBT Exam Hallmark*],
  [Electrostatic Precipitator (ESP)], [High-voltage negative DC corona ($40-100" kV"$) charges particles; collected at grounded plates], [Efficiency $> 99%$ for particulate matter PM2.5 and PM10],
  [Wet Scrubber], [Counter-current spray of limestone slurry ($"CaCO"_3$)], [Absorbs acid gases ($"SO"_2, "HCl"$) by flue gas desulfurization (FGD)],
  [BOD (5-Day, $20^degree"C"$)], [Oxygen consumed by aerobic microbes to oxidize biodegradable organics], [Indicator of organic wastewater pollution],
  [COD (Chemical Oxygen Demand)], [Oxygen equivalent of organic matter oxidized by boiling $"K"_2"Cr"_2"O"_7$ in acid], [$"COD" >= "BOD"$ because it oxidizes non-biodegradable organics too],
  [BOD/COD Ratio], [$> 0.6$ indicates biodegradable wastewater; $< 0.3$ indicates toxic/industrial], [Determines suitability for biological treatment],
  [Eutrophication Sequence], [Excess $N, P$ -> Algal bloom -> Sunlight blocked -> Decomposer respiration -> Anoxia], [Causes massive fish kills due to depleted Dissolved Oxygen (DO)],

)

= Topic 1: Air & Water Pollution Control Engineering

=== Particulate Air Pollution Abatement
1. *Electrostatic Precipitator (ESP):*
  - Flue gas flows between high-voltage discharge wires (negative polarity, $40-100" kV"$) and grounded collecting plates.
  - Corona discharge ionizes surrounding gas molecules, creating negative gas ions that impart electrostatic charge to fly ash particles.
  - Charged particles migrate under the electric field to the grounded collector plates and are dislodged by mechanical rapping. Removal efficiency exceeds $99%$.
2. *Cyclone Separator:* Utilizes centrifugal acceleration to drive dense particulates to outer walls. Ineffective for sub-micron particulates ($< 5 mu"m"$).
3. *Wet Scrubber (FGD):* Removes sulfur dioxide ($"SO"_2$) via neutralization with calcium carbonate slurry:
  $ "SO"_2 + "CaCO"_3 arrow.r "CaSO"_3 + "CO"_2 $

=== Water Quality: BOD, COD and Eutrophication
- *Biochemical Oxygen Demand ($"BOD"_5$):* Mass of dissolved oxygen required by aerobic microorganisms to decompose biodegradable organic matter in 1 liter of water over 5 days at $20^degree"C"$.
- *Chemical Oxygen Demand (COD):* Measures total oxygen required to chemically oxidize both biodegradable and non-biodegradable organic substances using acidified potassium dichromate ($"K"_2"Cr"_2"O"_7$):
  $ "COD" >= "BOD" quad ("Always strictly true!") $
- *Eutrophication:* Runoff of synthetic nitrogenous and phosphorus fertilizers causes nutrient hyper-enrichment of water bodies, triggering explosive algal blooms. As dead algae sink, saprotrophic aerobic decomposition depletes Dissolved Oxygen (DO $< 2" mg/L"$), creating hypoxic "dead zones".


= Topic 2: High-Yield VIT CBT Multiple Choice Question (MCQ) Bank

*MCQ 3.1:* Which air pollution control equipment is most efficient ($> 99%$) for removing fine particulate matter (PM2.5 and PM10) from thermal power plant emissions?
(A) Settling chamber (B) Cyclone separator (C) Electrostatic Precipitator (ESP) (D) Wet packed tower *Correct Answer:* *(C)* *Rationale:* Electrostatic precipitators achieve $> 99%$ efficiency by ionizing particulates using high-voltage corona discharge and collecting them on grounded plates.

*MCQ 3.2:* For an industrial effluent sample, the Chemical Oxygen Demand (COD) is always:
(A) Less than BOD (B) Equal to BOD (C) Greater than or equal to BOD (D) Half of BOD *Correct Answer:* *(C)* *Rationale:* COD measures all chemically oxidizable matter (both biodegradable and non-biodegradable), whereas BOD measures only biologically degradable organics. Hence, COD is always greater than or equal to BOD.

*MCQ 3.3:* During secondary wastewater treatment in the Activated Sludge Process, organic matter is primarily degraded by:
(A) Anaerobic methanogens (B) Aerobic microbial flocs in suspension (C) Heavy chemical coagulants (D) Ultraviolet disinfection lamps *Correct Answer:* *(B)* *Rationale:* The activated sludge process utilizes an aeration tank where aerobic bacterial flocs rapidly oxidize dissolved organic pollutants.

*MCQ 3.4:* Cultural eutrophication in lakes is primarily triggered by excessive discharge of which nutrients?
(A) Carbon and Chlorine (B) Sulfur and Sodium (C) Nitrogen and Phosphorus (D) Iron and Magnesium *Correct Answer:* *(C)* *Rationale:* Nitrogen ($"N"$) and phosphorus ($"P"$) are the primary limiting nutrients in aquatic ecosystems; excessive influx leads to algal blooms and severe dissolved oxygen depletion.


= Quick Self-Test Checklist Before Your Online CBT Exam

1. Explain why COD is always greater than or equal to BOD for any wastewater sample.
2. Describe the working mechanism of an Electrostatic Precipitator (ESP).
3. Outline the sequential ecological stages of aquatic eutrophication.
4. What does a BOD/COD ratio greater than 0.6 indicate about wastewater biodegradability?
