
#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.2cm, right: 2.2cm),
  header: context {
    if here().page() > 1 {
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: luma(90))[VIT BCHY102 / EST1001 --- Module 1: Environment & Ecosystems]],
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
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT BCHY102 / EST1001 --- Module 1: Environment & Ecosystems] \
  #v(2mm)
  #text(size: 15pt, weight: "black")[MODULE 1: FUNDAMENTALS OF ENVIRONMENT AND ECOSYSTEMS] \
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[(CO: 1)] \
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Complete CBT Study Textbook, High-Yield MCQ Bank & Step-by-Step Rationales] \
  #text(size: 9pt, fill: luma(100))[Aligned with VIT BCHY102 Online CBT Exam Syllabus, VTOP / Moodle Question Bank & Past Papers]
]

#v(3mm)
#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 9pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Textbook (Official VIT Syllabus):]
  (1) Definition, scope, and multidisciplinary nature of Environmental Science, (2) Earth as a life-support system (Lithosphere, Hydrosphere, Atmosphere, Biosphere), (3) Ecosystem concept, biotic and abiotic components, (4) Ecosystem structure and function: Food chains (grazing and detritus), Food webs, Trophic levels, (5) Energy flow and Lindeman's 10% ecological efficiency law, (6) Ecological Pyramids: Numbers, Biomass (terrestrial vs inverted marine), and Energy (strictly upright), and (7) Biogeochemical cycles: Carbon, Nitrogen, and Phosphorus cycles.
]

#v(2mm)
#outline(title: "Contents", depth: 2, indent: auto)
#v(2mm)

= VIT CBT Exam Blueprint & Master Key Facts for Module 1

VIT Examination Format: 100% Computer-Based Test (CBT) with Multiple Choice Questions (MCQs).
Module 1 accounts for 20% of the CBT Question Pool (typically 15 to 20 MCQs):
- Core Focus: Lindeman's 10% rule calculations, reasons why the pyramid of energy cannot be inverted, two-step nitrification microbial enzymes (*Nitrosomonas* and *Nitrobacter*), and grazing vs detritus food chain characteristics.

#v(2mm)
#table(
  columns: (2.2fr, 3.2fr, 2.6fr),
  stroke: 0.5pt + luma(180),
  inset: 6.5pt,
  [*Ecosystem Concept*], [*Ecological Rule / Mechanism*], [*CBT Exam Key Fact*],
  [Lindeman's 10% Law], [Only ~10% of energy at trophic level n-1 transfers to level n], [Limits food chains to 4-5 trophic levels due to heat dissipation],
  [Pyramid of Energy], [Always strictly upright ($"J/m"^2"/yr"$)], [Consequence of Second Law of Thermodynamics; never inverted],
  [Pyramid of Biomass], [Upright on land; inverted in marine/open ocean ecosystems], [Phytoplankton turnover rate is extremely fast],
  [Nitrogen Fixation], [$"N"_2 + 8"H"^+ + 8e^- arrow.r 2"NH"_3 + "H"_2$], [Catalyzed by *Nitrogenase* in *Rhizobium* and *Azotobacter*],
  [Nitrification Step 1], [$2"NH"_4^+ + 3"O"_2 arrow.r 2"NO"_2^- + 4"H"^+ + 2"H"_2"O"$], [Catalyzed specifically by *Nitrosomonas* bacteria],
  [Nitrification Step 2], [$2"NO"_2^- + "O"_2 arrow.r 2"NO"_3^-$], [Catalyzed specifically by *Nitrobacter* bacteria],

)

= Topic 1: Earth Systems & Ecosystem Structure

=== Spheres of the Earth & Ecosystem Components
The biosphere is sustained by dynamic interactions among three physical spheres:
1. *Atmosphere:* Gaseous envelope (Troposphere, Stratosphere containing ozone layer, Mesosphere, Thermosphere).
2. *Hydrosphere:* Liquid, frozen (cryosphere), and vaporous water covering 71% of Earth's surface.
3. *Lithosphere:* Rigid outer crust and upper mantle supplying mineral nutrients.
*Ecosystem Function:*
- *Autotrophs (Producers):* Fix radiant solar energy into chemical bond energy via oxygenic photosynthesis.
- *Heterotrophs (Consumers):* Primary herbivores, secondary carnivores, tertiary apex predators.
- *Saprotrophs (Decomposers):* Microorganisms (fungi, bacteria) recycling bound organic minerals.

=== Lindeman's 10% Efficiency Rule & Energy Flow
Raymond Lindeman (1942) established that energy transfer efficiency between successive trophic levels averages only $10%$:
$ "Efficiency" = (P_n / P_(n-1)) times 100 approx 10% $
Pursuant to the Second Law of Thermodynamics, $90%$ of available free energy is dissipated as metabolic respiration heat ($R$), locomotion work, and unassimilated waste.
*The Three Ecological Pyramids:*
1. *Pyramid of Numbers:* Number of individuals per trophic level. Inverted in parasitic food chains (one tree supporting thousands of insects).
2. *Pyramid of Biomass:* Dry weight of living organic matter. *Inverted in marine aquatic systems:* low instantaneous standing crop of phytoplankton supports a larger biomass of zooplankton due to high turnover rates.
3. *Pyramid of Energy:* *ALWAYS strictly upright!* Energy diminishes monotonically at each level; energy can never be recycled or created.


= Topic 2: High-Yield VIT CBT Multiple Choice Question (MCQ) Bank

*MCQ 1.1:* Which ecological pyramid is NEVER inverted under any ecological circumstance?
(A) Pyramid of Numbers (B) Pyramid of Biomass in marine ecosystems (C) Pyramid of Energy (D) Pyramid of Biomass in forest ecosystems *Correct Answer:* *(C)* *Rationale:* According to the Second Law of Thermodynamics, energy is lost as heat at every trophic step; thus, the energy available at higher trophic levels is always strictly less than at lower levels.

*MCQ 1.2:* In the biological nitrogen cycle, the oxidation of nitrite ($"NO"_2^-$) to nitrate ($"NO"_3^-$) is catalyzed by:
(A) *Rhizobium* (B) *Nitrosomonas* (C) *Nitrobacter* (D) *Pseudomonas denitrificans* *Correct Answer:* *(C)* *Rationale:* *Nitrosomonas* oxidizes ammonia to nitrite, whereas *Nitrobacter* oxidizes nitrite to nitrate.

*MCQ 1.3:* If the net primary productivity of a grassland ecosystem is $20,000" kcal/m"^2"/yr"$, how much energy is expected to reach the tertiary consumer level under Lindeman's 10% rule?
(A) $2,000" kcal/m"^2"/yr"$ (B) $200" kcal/m"^2"/yr"$ (C) $20" kcal/m"^2"/yr"$ (D) $2" kcal/m"^2"/yr"$ *Correct Answer:* *(C)* *Rationale:* Primary producers = 20,000; Primary consumers (herbivores) = 2,000; Secondary consumers (carnivores) = 200; Tertiary consumers = 20 $"kcal/m"^2"/yr"$.

*MCQ 1.4:* An inverted pyramid of biomass is characteristically observed in:
(A) Tropical rainforest (B) Temperate grassland (C) Open ocean ecosystem (D) Desert scrubland *Correct Answer:* *(C)* *Rationale:* Phytoplankton have rapid reproductive turnover and short lifespans, so their standing dry biomass at any instant is smaller than that of the zooplankton feeding upon them.


= Quick Self-Test Checklist Before Your Online CBT Exam

1. What is the fundamental thermodynamic reason the pyramid of energy is always upright?
2. Which bacteria perform the first step of nitrification vs the second step?
3. Calculate the energy transfer across 4 trophic levels given an initial producer energy input.
4. Why does an open ocean ecosystem exhibit an inverted biomass pyramid?
