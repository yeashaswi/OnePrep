
#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.2cm, right: 2.2cm),
  header: context {
    if here().page() > 1 {
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: luma(90))[VIT BCHY102 / EST1001 --- Module 6: Contemporary Environmental Topics]],
        align(right)[#text(size: 8.5pt, fill: luma(90), style: "italic")[VIT CBT Exam Master Textbook]]
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
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT BCHY102 / EST1001 --- Module 6: Contemporary Topics] \
  #v(2mm)
  #text(size: 15pt, weight: "black")[MODULE 6: CONTEMPORARY TOPICS IN ENVIRONMENTAL SCIENCES] \
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[(CO: 6)] \
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Carbon Footprint Scopes, CER Trading, GRIHA Green Buildings, Circular Economy & E-Waste EPR] \
  #text(size: 9pt, fill: luma(100))[Aligned with VIT Online CBT Exam Syllabus, VTOP Course Page & Official CBT Question Bank]
]

#v(3mm)
#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 9pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Module (Official VIT LMS / VTOP Course Syllabus):]
  (1) Carbon Footprint accounting: Scopes 1, 2, and 3 GHG protocols, (2) Clean Development Mechanism (CDM), carbon offsetting, and Certified Emission Reductions (1 CER = 1 metric tonne $"CO"_2"e"$), (3) Green Building Rating Systems in India: GRIHA (TERI & MNRE) 100-point rating criteria, energy-efficient architecture, (4) Circular Economy principles: Cradle-to-Cradle material loops vs. Linear Take-Make-Dispose models, (5) Microplastics and Nanoplastics: Primary vs. secondary sources, marine trophic biomagnification, and (6) E-Waste (Management) Rules, hazardous heavy metals (Pb, Hg, Cd, Cr(VI)), Extended Producer Responsibility (EPR) mandates, and urban mining of precious metals.
]

#v(2mm)
#outline(title: "Contents", depth: 2, indent: auto)
#v(2mm)

= VIT CBT Exam Blueprint & Master Key Facts for Module 6

VIT Examination Format: 100% Computer-Based Objective Test (CBT MCQs).
Module 6 accounts for 15 to 20% of the CBT Question Pool:
- *Essential Numerical / Definitional Constants to Memorize:*
  - $1 "CER" ("Certified Emission Reduction") = 1 "metric tonne of" "CO"_2 "equivalent sequestered or mitigated"$.
  - *Scope 1:* Direct emissions from company-owned furnaces, boilers, vehicles.
  - *Scope 2:* Indirect emissions from purchased grid electricity, steam, heating, and cooling.
  - *Scope 3:* All other indirect value chain emissions (business travel, employee commuting, supply chain extraction, end-of-life disposal).
  - *GRIHA:* Green Rating for Integrated Habitat Assessment; developed jointly by TERI and MNRE (Govt of India); 100-point evaluation scale where 86--100 points earns a 5-Star rating.
  - *Microplastics:* Synthetic plastic particles smaller than 5 mm in diameter.
  - *EPR (Extended Producer Responsibility):* Environmental policy approach under India's E-Waste Rules 2016/2022 placing financial and physical end-of-life collection/recycling accountability on manufacturers and importers.

#v(2mm)
#table(
  columns: (2.2fr, 3.4fr, 2.4fr),
  stroke: 0.5pt + luma(180),
  inset: 6pt,
  [*Topic / Parameter*], [*Regulatory Specification / Formula*], [*CBT Exam Hallmark*],
  [Carbon Scope 1], [Direct GHG emissions from owned or controlled operations], [On-site combustion of diesel/coal/gas in company boilers],
  [Carbon Scope 2], [Indirect GHG emissions from purchased grid electricity], [Power consumed by office HVAC and computer servers],
  [Carbon Scope 3], [Upstream & downstream value-chain emissions], [Often >70% of a technology company's total footprint],
  [1 CER Credit], [Equal to 1 metric tonne (1000 kg) of $"CO"_2"e"$ reduced], [Tradable commodity under UNFCCC Kyoto Protocol CDM],
  [GRIHA Rating], [Developed by TERI & MNRE (100-point scale)], [5-Star: 86-100 pts; 1-Star: 25-40 pts; National green rating],
  [Primary Microplastics], [Manufactured directly to < 5 mm (microbeads, nurdles)], [Exfoliating cosmetics, synthetic fleece laundering],
  [Secondary Microplastics], [Formed by weathering / UV fragmentation of macroplastics], [Degraded fishing nets, water bottles, tires],
  [E-Waste Lead (Pb)], [Found in Cathode Ray Tubes (CRT) glass and solder], [Neurotoxicant damaging central nervous system and kidneys],
  [E-Waste Mercury (Hg)], [Found in cold cathode fluorescent lamps (CCFL) & switches], [Bioaccumulates into toxic methylmercury; Minamata hazard],
  [E-Waste Cadmium (Cd)], [Found in Ni-Cd rechargeable batteries and chip resistors], [Nephrotoxicant causing Itai-Itai bone softening disease],
)

= Topic 1: Carbon Footprinting & Carbon Credit Trading

=== The Greenhouse Gas Protocol: Scopes 1, 2, and 3
A Carbon Footprint quantifies the total volume of greenhouse gases produced directly and indirectly by human activities, expressed in metric tonnes of carbon dioxide equivalent ($"tCO"_2"e"$):
1. *Scope 1 (Direct Emissions):* Greenhouse gases directly released from sources owned or controlled by the reporting organization (e.g., combustion in company furnaces, manufacturing process reactions, fuel burned in company-owned delivery fleets).
2. *Scope 2 (Indirect Energy Emissions):* Emissions generated off-site from the production of electricity, steam, heating, or cooling purchased and consumed by the reporting entity.
3. *Scope 3 (Other Indirect Value-Chain Emissions):* Emissions arising from organizational activities but from sources not owned or controlled by it (e.g., procurement of raw materials, third-party freight transport, employee commuting, business air travel, leased assets, and end-of-life disposal of sold products).

=== Carbon Offsetting & Clean Development Mechanism (CDM)
- *Carbon Credit:* A certified financial permit allowing the owner to emit one tonne of carbon dioxide equivalent.
- *Certified Emission Reduction (CER):* Units issued by the UNFCCC Clean Development Mechanism (CDM) Executive Board for emission-reduction projects implemented in developing nations.
  - *Standard Value:* $1 "CER" = 1 "tonne of" "CO"_2 "equivalent avoided or sequestered"$.

= Topic 2: Green Buildings & GRIHA Certification

=== Why Green Buildings?
Conventional buildings consume approximately 40% of global energy and 25% of fresh water while generating 30% of municipal solid waste. Green buildings integrate sustainable architectural design:
- Passive solar orientation to minimize artificial lighting and cooling loads.
- High thermal insulation materials (e.g., hollow autoclaved aerated concrete (AAC) blocks, fly-ash bricks).
- 100% rooftop rainwater harvesting, on-site sewage treatment, and recycled greywater flushing.

=== GRIHA (Green Rating for Integrated Habitat Assessment)
- Formulated by *TERI* (The Energy and Resources Institute) and officially adopted as the National Rating System for Green Buildings by the *Ministry of New and Renewable Energy (MNRE)*, Government of India.
- Evaluates buildings on a *100-point scale* across 34 core criteria:
  - *86 -- 100 points:* 5 Stars (Exceptional ecological sustainability)
  - *71 -- 85 points:* 4 Stars
  - *56 -- 70 points:* 3 Stars
  - *41 -- 55 points:* 2 Stars
  - *25 -- 40 points:* 1 Star

= Topic 3: Circular Economy & Industrial Symbiosis

=== Linear vs. Circular Economic Paradigms
- *Linear Economy ("Take-Make-Dispose"):* Raw virgin resources are extracted, processed into consumable goods, and discarded into landfills at the end of useful life, driving rapid resource depletion and pollution.
- *Circular Economy ("Cradle-to-Cradle"):* Eliminates waste by designing materials and assemblies for closed-loop technical and biological cycles through the *5R Framework: Reduce, Reuse, Recycle, Remanufacture, and Recover*.
- *Industrial Symbiosis:* The waste or byproduct of one industrial facility serves directly as the input feedstock for another (e.g., fly ash from coal thermal plants utilized as a pozzolanic binder in green Portland cement production).

= Topic 4: Microplastics & Nanoplastics

=== Classification and Environmental Impacts
- *Particle Size Criteria:*
  - *Macroplastics:* $> 25 "mm"$
  - *Mesoplastics:* $5 "mm" - 25 "mm"$
  - *Microplastics:* $1 mu"m" - 5 "mm"$
  - *Nanoplastics:* $< 1 mu"m"$ ($< 1000 "nm"$).
- *Primary Microplastics:* Intentionally manufactured microscopic plastic beads used in exfoliating cosmetic cleansers, toothpastes, industrial air-blasting media, and plastic manufacturing pellets (nurdles).
- *Secondary Microplastics:* Result from physical fragmentation, photochemical UV degradation, and mechanical abrasion of larger plastic debris in terrestrial and marine environments (e.g., tire dust from road abrasion, synthetic textile microfibers shed during domestic washing).
- *Toxicity:* Microplastics adsorb persistent organic pollutants (POPs) such as DDT and PCBs. They are ingested by zooplankton and fish, causing intestinal obstruction and leaching endocrine-disrupting chemicals (Bisphenol A, phthalates) through marine food webs into humans.

= Topic 5: E-Waste Management & Extended Producer Responsibility

=== Hazardous Constituents of Electronic Waste
Rapid technological obsolescence generates millions of metric tonnes of electrical and electronic equipment (EEE) waste containing toxic heavy metals:
1. *Lead (Pb):* Present in CRT cathode ray tube funnel glass (up to 2 kg per tube) and tin-lead solder on printed circuit boards; causes neurological impairment, cognitive deficits in children, and acute kidney damage.
2. *Mercury (Hg):* Used in flat-panel display backlights (CCFL), printed circuit board relays, and tilt switches; converts via aquatic microorganisms into neurotoxic methylmercury.
3. *Cadmium (Cd):* Present in rechargeable Ni-Cd battery cells, SMD chip resistors, and infrared detectors; bioaccumulates in human renal cortex causing kidney damage and osteomalacia (Itai-Itai disease).
4. *Hexavalent Chromium ($"Cr"^(6+)$):* Used as an anti-corrosion passivation layer on metal chassis; highly carcinogenic causing lung tumors and DNA damage.
5. *Brominated Flame Retardants (BFRs):* Added to polymeric housings and printed circuit boards; emit toxic polybrominated dibenzodioxins during open burning.

=== Extended Producer Responsibility (EPR) & Urban Mining
- *E-Waste (Management) Rules 2016 & 2022 Amendments (India):* Mandates that manufacturers, producers, and importers of electronic equipment are legally responsible for financing and executing environmentally sound take-back systems and meeting graduated annual recycling quotas.
- *Urban Mining:* Recovering valuable and rare earth elements from e-waste. One tonne of discarded smartphone circuit boards contains approximately $300 "g"$ of Gold ($"Au"$), $1000 "g"$ of Silver ($"Ag"$), and $100 "kg"$ of Copper ($"Cu"$) --- an ore grade up to 50 times richer than natural mined ores!

= Topic 6: High-Yield VIT CBT Multiple Choice Question Bank

*MCQ 6.1:* Under the Greenhouse Gas (GHG) Protocol, emissions from fuel burned in company-owned trucks and delivery vans are classified as:
(A) Scope 1 emissions (B) Scope 2 emissions (C) Scope 3 emissions (D) Biogenic emissions \
*Correct Answer:* *(A)* \
*Rationale:* Scope 1 covers all direct emissions originating from assets owned or directly controlled by the reporting organization, including company transport fleets.

*MCQ 6.2:* How many metric tonnes of carbon dioxide equivalent ($"CO"_2"e"$) does one Certified Emission Reduction (CER) credit represent?
(A) 0.1 tonne (B) 1.0 tonne (C) 10.0 tonnes (D) 100 tonnes \
*Correct Answer:* *(B)* \
*Rationale:* Under the UNFCCC Clean Development Mechanism (CDM), exactly one CER represents one metric tonne ($1000 "kg"$) of $"CO"_2"e"$ reduced or avoided.

*MCQ 6.3:* Which Indian scientific institution developed the GRIHA green building rating system in collaboration with the Ministry of New and Renewable Energy (MNRE)?
(A) CSIR-NEERI (B) Indian Institute of Science (IISc) (C) The Energy and Resources Institute (TERI) (D) Centre for Science and Environment (CSE) \
*Correct Answer:* *(C)* \
*Rationale:* GRIHA was conceived and developed by TERI and subsequently adopted as the National Green Building Rating System by MNRE.

*MCQ 6.4:* Under the GRIHA rating framework, a building scoring 88 points out of 100 receives:
(A) 3 Stars (B) 4 Stars (C) 5 Stars (D) Platinum Award \
*Correct Answer:* *(C)* \
*Rationale:* GRIHA awards a 5-Star rating to projects scoring between 86 and 100 points on its 100-point scale.

*MCQ 6.5:* Microplastics are scientifically defined as synthetic plastic particles having an upper size boundary of less than:
(A) 1 mm (B) 5 mm (C) 10 mm (D) 25 mm \
*Correct Answer:* *(B)* \
*Rationale:* Microplastics are universally defined by environmental agencies as synthetic plastic fragments or microbeads smaller than 5 mm in diameter.

*MCQ 6.6:* In printed circuit board e-waste recycling, what does the regulatory acronym 'EPR' stand for?
(A) Environmental Protection Regulation (B) Extended Producer Responsibility (C) Electronic Product Recovery (D) Ecological Pollution Reduction \
*Correct Answer:* *(B)* \
*Rationale:* Extended Producer Responsibility (EPR) mandates that producers take financial and operational responsibility for the collection and safe end-of-life recycling of electronic goods.

*MCQ 6.7:* The heavy metal predominantly found in older Cathode Ray Tube (CRT) computer and television monitors that presents serious neurotoxic hazards is:
(A) Lead (Pb) (B) Nickel (Ni) (C) Lithium (Li) (D) Zinc (Zn) \
*Correct Answer:* *(A)* \
*Rationale:* CRT monitors contain up to 2 kg of lead in their funnel and neck glass to shield users from X-ray radiation.
