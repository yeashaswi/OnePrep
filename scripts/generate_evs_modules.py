import subprocess

evs_modules = {
    1: {
        "title": "MODULE 1: FUNDAMENTALS OF ENVIRONMENT AND ECOSYSTEMS",
        "short_title": "Module 1: Environment & Ecosystems",
        "co": "CO: 1",
        "scope": "(1) Definition, scope, and multidisciplinary nature of Environmental Science, (2) Earth as a life-support system (Lithosphere, Hydrosphere, Atmosphere, Biosphere), (3) Ecosystem concept, biotic and abiotic components, (4) Ecosystem structure and function: Food chains (grazing and detritus), Food webs, Trophic levels, (5) Energy flow and Lindeman's 10% ecological efficiency law, (6) Ecological Pyramids: Numbers, Biomass (terrestrial vs inverted marine), and Energy (strictly upright), and (7) Biogeochemical cycles: Carbon, Nitrogen, and Phosphorus cycles.",
        "blueprint": """VIT Examination Format: 100% Computer-Based Test (CBT) with Multiple Choice Questions (MCQs).
Module 1 accounts for 20% of the CBT Question Pool (typically 15 to 20 MCQs):
- Core Focus: Lindeman's 10% rule calculations, reasons why the pyramid of energy cannot be inverted, two-step nitrification microbial enzymes (*Nitrosomonas* and *Nitrobacter*), and grazing vs detritus food chain characteristics.""",
        "table": """  [*Ecosystem Concept*], [*Ecological Rule / Mechanism*], [*CBT Exam Key Fact*],
  [Lindeman's 10% Law], [Only ~10% of energy at trophic level n-1 transfers to level n], [Limits food chains to 4-5 trophic levels due to heat dissipation],
  [Pyramid of Energy], [Always strictly upright ($"J/m"^2"/yr"$)], [Consequence of Second Law of Thermodynamics; never inverted],
  [Pyramid of Biomass], [Upright on land; inverted in marine/open ocean ecosystems], [Phytoplankton turnover rate is extremely fast],
  [Nitrogen Fixation], [$"N"_2 + 8"H"^+ + 8e^- arrow.r 2"NH"_3 + "H"_2$], [Catalyzed by *Nitrogenase* in *Rhizobium* and *Azotobacter*],
  [Nitrification Step 1], [$2"NH"_4^+ + 3"O"_2 arrow.r 2"NO"_2^- + 4"H"^+ + 2"H"_2"O"$], [Catalyzed specifically by *Nitrosomonas* bacteria],
  [Nitrification Step 2], [$2"NO"_2^- + "O"_2 arrow.r 2"NO"_3^-$], [Catalyzed specifically by *Nitrobacter* bacteria],
""",
        "content": """= Topic 1: Earth Systems & Ecosystem Structure

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
(A) Pyramid of Numbers \
(B) Pyramid of Biomass in marine ecosystems \
(C) Pyramid of Energy \
(D) Pyramid of Biomass in forest ecosystems \
*Correct Answer:* *(C)* \
*Rationale:* According to the Second Law of Thermodynamics, energy is lost as heat at every trophic step; thus, the energy available at higher trophic levels is always strictly less than at lower levels.

*MCQ 1.2:* In the biological nitrogen cycle, the oxidation of nitrite ($"NO"_2^-$) to nitrate ($"NO"_3^-$) is catalyzed by:
(A) *Rhizobium* \
(B) *Nitrosomonas* \
(C) *Nitrobacter* \
(D) *Pseudomonas denitrificans* \
*Correct Answer:* *(C)* \
*Rationale:* *Nitrosomonas* oxidizes ammonia to nitrite, whereas *Nitrobacter* oxidizes nitrite to nitrate.

*MCQ 1.3:* If the net primary productivity of a grassland ecosystem is $20,000" kcal/m"^2"/yr"$, how much energy is expected to reach the tertiary consumer level under Lindeman's 10% rule?
(A) $2,000" kcal/m"^2"/yr"$ \
(B) $200" kcal/m"^2"/yr"$ \
(C) $20" kcal/m"^2"/yr"$ \
(D) $2" kcal/m"^2"/yr"$ \
*Correct Answer:* *(C)* \
*Rationale:* Primary producers = 20,000; Primary consumers (herbivores) = 2,000; Secondary consumers (carnivores) = 200; Tertiary consumers = 20 $"kcal/m"^2"/yr"$.

*MCQ 1.4:* An inverted pyramid of biomass is characteristically observed in:
(A) Tropical rainforest \
(B) Temperate grassland \
(C) Open ocean ecosystem \
(D) Desert scrubland \
*Correct Answer:* *(C)* \
*Rationale:* Phytoplankton have rapid reproductive turnover and short lifespans, so their standing dry biomass at any instant is smaller than that of the zooplankton feeding upon them.
""",
        "checklist": """1. What is the fundamental thermodynamic reason the pyramid of energy is always upright?
2. Which bacteria perform the first step of nitrification vs the second step?
3. Calculate the energy transfer across 4 trophic levels given an initial producer energy input.
4. Why does an open ocean ecosystem exhibit an inverted biomass pyramid?"""
    },
    2: {
        "title": "MODULE 2: BIODIVERSITY AND ENVIRONMENTAL QUALITY",
        "short_title": "Module 2: Biodiversity & Quality",
        "co": "CO: 2",
        "scope": "(1) Biodiversity: Definition, levels (Genetic, Species, Ecosystem diversity), (2) Values and significance of biodiversity (consumptive, productive, social, ethical, aesthetic), (3) Global biodiversity hotspots and Megadiverse nations (criteria for hotspot designation), (4) Threats to biodiversity: Habitat fragmentation, Overexploitation, Invasive alien species, Climate change, and Poaching, (5) IUCN Red Data Book classifications (Extinct, Critically Endangered, Endangered, Vulnerable), (6) Conservation strategies: In-situ conservation (National Parks, Wildlife Sanctuaries, Biosphere Reserves) vs Ex-situ conservation (Botanical gardens, Zoological parks, Gene/Seed banks, Cryopreservation), and (7) Genetically Modified (GM) crops and environmental biosafety.",
        "blueprint": """VIT Examination Format: 100% CBT Multiple Choice Questions (MCQs).
Module 2 accounts for 20% of the CBT Question Pool:
- Core Focus: Hotspot identification criteria (Myers: >=1500 endemic vascular plants and >=70% habitat loss), Indian hotspots (Western Ghats, Indo-Burma, Himalayas, Sundaland), difference between National Parks and Wildlife Sanctuaries (human activities prohibited in National Parks), and IUCN Red List categories.""",
        "table": """  [*Conservation Category*], [*Definition & Legal Framework*], [*CBT Exam Hallmark*],
  [Hotspot Criteria (Myers)], [At least 1500 endemic vascular plant species + lost $>= 70%$ primary habitat], [There are 36 global biodiversity hotspots; 4 cover India],
  [Indian Hotspots], [Western Ghats & Sri Lanka, Eastern Himalayas, Indo-Burma, Sundaland], [Western Ghats exhibits exceptional amphibian and reptile endemism],
  [In-Situ Conservation], [Protecting species within natural habitat (National Parks, Biosphere Reserves)], [Preserves evolutionary ecological interactions],
  [Ex-Situ Conservation], [Protecting outside natural habitat (Gene banks, Botanical gardens, Cryopreservation)], [Emergency rescue for critically endangered genetic lines],
  [National Park], [IUCN Category II; strictly protected; grazing/forestry totally prohibited], [Created by central/state legislation; high protection level],
  [Wildlife Sanctuary], [IUCN Category IV; regulated human activities (traditional grazing) permitted], [Focuses on conservation of specific target fauna species],
""",
        "content": """= Topic 1: Levels of Biodiversity & Hotspot Criteria

=== Levels of Biological Diversity
1. *Genetic Diversity:* Variation of genes within a single species (e.g., over 50,000 distinct genetic strains of rice in India). Enables evolutionary adaptation.
2. *Species Diversity:* Richness (number of species) and evenness (relative abundance) in an ecological region.
3. *Ecosystem Diversity:* Variety of ecological habitats, biomes, and biological communities (coral reefs, mangroves, tropical rainforests).

=== Norman Myers' Hotspot Criteria
To qualify as a global biodiversity hotspot, a geographical region must meet two strict criteria:
1. It must contain at least *1,500 species of vascular plants* as endemics ($> 0.5%$ of the world total).
2. It must have lost at least *70% of its original primary native habitat* ($<= 30%$ original natural vegetation remaining).
There are currently *36 recognized global hotspots*. Four cover parts of India:
- *Western Ghats & Sri Lanka*
- *Eastern Himalayas*
- *Indo-Burma (North-East India)*
- *Sundaland (Nicobar Islands)*.


= Topic 2: High-Yield VIT CBT Multiple Choice Question (MCQ) Bank

*MCQ 2.1:* To qualify as a global biodiversity hotspot under Norman Myers' criteria, an area must contain at least how many endemic vascular plant species?
(A) 500 \
(B) 1,000 \
(C) 1,500 \
(D) 2,500 \
*Correct Answer:* *(C)* \
*Rationale:* A biodiversity hotspot must harbor >= 1500 endemic species of vascular plants and have lost >= 70% of its primary vegetation.

*MCQ 2.2:* Which of the following is an example of *ex-situ* conservation?
(A) Kaziranga National Park \
(B) Nilgiri Biosphere Reserve \
(C) National Gene Bank and Seed Vault \
(D) Periyar Wildlife Sanctuary \
*Correct Answer:* *(C)* \
*Rationale:* Ex-situ conservation protects organisms outside their natural habitat, such as gene banks, seed banks, cryobanks, and botanical gardens.

*MCQ 2.3:* Which Indian biodiversity hotspot includes the Nicobar group of islands?
(A) Western Ghats \
(B) Indo-Burma \
(C) Sundaland \
(D) Eastern Himalayas \
*Correct Answer:* *(C)* \
*Rationale:* The Nicobar Islands are an extension of the Sundaland hotspot, which also includes Malaysia, Indonesia, and Singapore.

*MCQ 2.4:* The IUCN Red Data Book classifies a taxon facing an extremely high risk of extinction in the wild as:
(A) Vulnerable \
(B) Endangered \
(C) Critically Endangered \
(D) Extinct in the Wild \
*Correct Answer:* *(C)* \
*Rationale:* Critically Endangered (CR) is the highest risk category assigned by the IUCN Red List before extinction in the wild.
""",
        "checklist": """1. State the two numerical criteria required to designate a global biodiversity hotspot.
2. Name all four biodiversity hotspots that extend into Indian territory.
3. Differentiate between In-Situ and Ex-Situ conservation with 2 examples each.
4. Why is commercial timber harvesting and grazing prohibited in National Parks?"""
    },
    3: {
        "title": "MODULE 3: POLLUTION AND ITS MANAGEMENT TECHNIQUES",
        "short_title": "Module 3: Pollution Management",
        "co": "CO: 3",
        "scope": "(1) Environmental pollution: Causes, health effects, and engineering abatement techniques for Air, Water, Soil, Noise, Thermal, and Nuclear pollution, (2) Air pollution control devices: Cyclone separators, Electrostatic Precipitators (ESP), Fabric filters (Baghouses), and Wet scrubbers, (3) Water pollution: Point vs non-point sources, Biochemical Oxygen Demand (BOD), Chemical Oxygen Demand (COD), Eutrophication mechanism, (4) Wastewater treatment engineering: Primary (screening, sedimentation), Secondary (Activated Sludge Process, Trickling filters), and Tertiary treatment (UV, chlorination, RO), (5) Water management: Water footprint, Virtual water, Blue revolution, and (6) Solid and hazardous waste management: 3R principles (Reduce, Reuse, Recycle) and circular economy.",
        "blueprint": """VIT Examination Format: 100% CBT Multiple Choice Questions (MCQs).
Module 3 accounts for 25% of the CBT Question Pool (highest weightage in EVS CBT):
- Core Focus: Electrostatic Precipitator working principle (corona discharge removes particulate matter PM2.5/PM10), BOD vs COD relations ($"COD" >= "BOD"$ always), Eutrophication stages (algal bloom -> dissolved oxygen depletion -> hypoxia), and wastewater treatment unit operations.""",
        "table": """  [*Pollution Parameter / Device*], [*Operating Principle / Ratio*], [*CBT Exam Hallmark*],
  [Electrostatic Precipitator (ESP)], [High-voltage negative DC corona ($40-100" kV"$) charges particles; collected at grounded plates], [Efficiency $> 99%$ for particulate matter PM2.5 and PM10],
  [Wet Scrubber], [Counter-current spray of limestone slurry ($"CaCO"_3$)], [Absorbs acid gases ($"SO"_2, "HCl"$) by flue gas desulfurization (FGD)],
  [BOD (5-Day, $20^degree"C"$)], [Oxygen consumed by aerobic microbes to oxidize biodegradable organics], [Indicator of organic wastewater pollution],
  [COD (Chemical Oxygen Demand)], [Oxygen equivalent of organic matter oxidized by boiling $"K"_2"Cr"_2"O"_7$ in acid], [$"COD" >= "BOD"$ because it oxidizes non-biodegradable organics too],
  [BOD/COD Ratio], [$> 0.6$ indicates biodegradable wastewater; $< 0.3$ indicates toxic/industrial], [Determines suitability for biological treatment],
  [Eutrophication Sequence], [Excess $N, P$ -> Algal bloom -> Sunlight blocked -> Decomposer respiration -> Anoxia], [Causes massive fish kills due to depleted Dissolved Oxygen (DO)],
""",
        "content": """= Topic 1: Air & Water Pollution Control Engineering

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
(A) Settling chamber \
(B) Cyclone separator \
(C) Electrostatic Precipitator (ESP) \
(D) Wet packed tower \
*Correct Answer:* *(C)* \
*Rationale:* Electrostatic precipitators achieve $> 99%$ efficiency by ionizing particulates using high-voltage corona discharge and collecting them on grounded plates.

*MCQ 3.2:* For an industrial effluent sample, the Chemical Oxygen Demand (COD) is always:
(A) Less than BOD \
(B) Equal to BOD \
(C) Greater than or equal to BOD \
(D) Half of BOD \
*Correct Answer:* *(C)* \
*Rationale:* COD measures all chemically oxidizable matter (both biodegradable and non-biodegradable), whereas BOD measures only biologically degradable organics. Hence, COD is always greater than or equal to BOD.

*MCQ 3.3:* During secondary wastewater treatment in the Activated Sludge Process, organic matter is primarily degraded by:
(A) Anaerobic methanogens \
(B) Aerobic microbial flocs in suspension \
(C) Heavy chemical coagulants \
(D) Ultraviolet disinfection lamps \
*Correct Answer:* *(B)* \
*Rationale:* The activated sludge process utilizes an aeration tank where aerobic bacterial flocs rapidly oxidize dissolved organic pollutants.

*MCQ 3.4:* Cultural eutrophication in lakes is primarily triggered by excessive discharge of which nutrients?
(A) Carbon and Chlorine \
(B) Sulfur and Sodium \
(C) Nitrogen and Phosphorus \
(D) Iron and Magnesium \
*Correct Answer:* *(C)* \
*Rationale:* Nitrogen ($"N"$) and phosphorus ($"P"$) are the primary limiting nutrients in aquatic ecosystems; excessive influx leads to algal blooms and severe dissolved oxygen depletion.
""",
        "checklist": """1. Explain why COD is always greater than or equal to BOD for any wastewater sample.
2. Describe the working mechanism of an Electrostatic Precipitator (ESP).
3. Outline the sequential ecological stages of aquatic eutrophication.
4. What does a BOD/COD ratio greater than 0.6 indicate about wastewater biodegradability?"""
    },
    4: {
        "title": "MODULE 4: ENVIRONMENTAL LAWS, POLICIES & RENEWABLE ENERGY",
        "short_title": "Module 4: Laws & Clean Energy",
        "co": "CO: 4",
        "scope": "(1) Constitutional provisions for environmental protection in India (Articles 48A and 51A(g)), (2) Major Indian Environmental Acts: The Water (Prevention and Control of Pollution) Act 1974, The Air Act 1981, The Environment (Protection) Act 1986, The Wildlife Protection Act 1972, and The Forest (Conservation) Act 1980, (3) Central and State Pollution Control Boards (CPCB and SPCB) powers and functions, (4) International environmental agreements: Montreal Protocol (ODS phase-out), Kyoto Protocol (CDM and carbon credits), and Paris Agreement (1.5 deg C limit), (5) UN Sustainable Development Goals (SDGs 1-17), and (6) Renewable and clean energy technologies: Solar photovoltaic, Wind turbines, Hydroelectric, Geothermal, Biomass, Hydrogen fuel, and Electric Vehicles (EVs).",
        "blueprint": """VIT Examination Format: 100% CBT Multiple Choice Questions (MCQs).
Module 4 accounts for 20% of the CBT Question Pool:
- Core Focus: Environmental legislation enactment years (Wildlife Act = 1972, Water Act = 1974, Air Act = 1981, Environment Protection Act = 1986), Montreal Protocol targets (CFCs / ozone-depleting substances), Kyoto Protocol greenhouse gases (6 gases: CO2, CH4, N2O, HFCs, PFCs, SF6), and specific UN Sustainable Development Goals.""",
        "table": """  [*Environmental Act / Protocol*], [*Year Enacted*], [*Primary Legal Mandate / Target*],
  [Wildlife Protection Act], [1972], [Schedules I-VI governing protected animal and plant species],
  [Water (Prevention & Control) Act], [1974], [Established Central and State Pollution Control Boards (CPCB & SPCB)],
  [Air (Prevention & Control) Act], [1981], [Expanded in 1987 to include noise pollution as an air pollutant],
  [Environment (Protection) Act], [1986], [Umbrella legislation enacted after the 1984 Bhopal Gas Tragedy],
  [Montreal Protocol], [1987], [Phasing out Chlorofluorocarbons (CFCs) and Ozone-Depleting Substances],
  [Kyoto Protocol], [1997], [Legally binding greenhouse gas emission reductions and Clean Development Mechanism (CDM)],
  [Paris Climate Agreement], [2015], [Holding global temperature increase well below $2^degree"C"$, aiming for $1.5^degree"C"$],
""",
        "content": """= Topic 1: Indian Environmental Legislation & Global Protocols

=== Milestone Indian Environmental Acts
1. *The Wildlife (Protection) Act, 1972:* Established legal framework for National Parks and Sanctuaries; classifies protected species across Schedules I to VI.
2. *The Water Act, 1974:* Created Central Pollution Control Board (CPCB) and State Pollution Control Boards (SPCBs) with regulatory authority to monitor industrial effluents and establish water quality standards.
3. *The Air Act, 1981:* Regulates industrial stack emissions. *Amended in 1987 to officially include Noise Pollution as an air pollutant!*
4. *The Environment (Protection) Act, 1986 (EPA):* Enacted under Article 253 of the Constitution following the 1984 Bhopal Gas Tragedy. Serves as "umbrella" legislation empowering the Central Government to set nationwide emission standards and mandate Environmental Impact Assessments (EIA).

=== International Protocols & UN SDGs
- *Montreal Protocol (1987):* The most successful environmental treaty; phased out CFCs, halons, and carbon tetrachloride to restore the stratospheric ozone layer.
- *Kyoto Protocol (1997):* Targeted 6 greenhouse gases ($"CO"_2, "CH"_4, "N"_2"O", "HFCs", "PFCs", "SF"_6$) with market mechanisms (Carbon Credits, Emissions Trading, Clean Development Mechanism).
- *Sustainable Development Goals (SDGs):* 17 goals adopted by the UN in 2015 for 2030 (SDG 6: Clean Water, SDG 7: Affordable Clean Energy, SDG 13: Climate Action).


= Topic 2: High-Yield VIT CBT Multiple Choice Question (MCQ) Bank

*MCQ 4.1:* The Environment (Protection) Act in India was enacted in which year following the Bhopal Gas Tragedy?
(A) 1974 \
(B) 1981 \
(C) 1986 \
(D) 1992 \
*Correct Answer:* *(C)* \
*Rationale:* Enacted in 1986 as an umbrella act in response to the December 1984 Bhopal toxic gas disaster.

*MCQ 4.2:* In which year was the Air (Prevention and Control of Pollution) Act amended to include *noise* as an air pollutant?
(A) 1981 \
(B) 1986 \
(C) 1987 \
(D) 1990 \
*Correct Answer:* *(C)* \
*Rationale:* Enacted in 1981 and amended in 1987 to include noise within the statutory definition of air pollutants.

*MCQ 4.3:* The Montreal Protocol (1987) is an international environmental agreement specifically aimed at:
(A) Limiting global carbon dioxide emissions \
(B) Phasing out Ozone-Depleting Substances (CFCs) \
(C) Regulating transboundary hazardous electronic waste \
(D) Protecting wetlands of international importance \
*Correct Answer:* *(B)* \
*Rationale:* The Montreal Protocol successfully mandated the phased worldwide elimination of chlorofluorocarbons (CFCs) and halons.

*MCQ 4.4:* Which United Nations Sustainable Development Goal (SDG) specifically addresses "Climate Action"?
(A) SDG 6 \
(B) SDG 7 \
(C) SDG 11 \
(D) SDG 13 \
*Correct Answer:* *(D)* \
*Rationale:* SDG 13 is dedicated to Climate Action; SDG 6 is Clean Water and Sanitation; SDG 7 is Affordable and Clean Energy.
""",
        "checklist": """1. State the enactment years for the 4 major Indian Environmental Acts.
2. In which year was noise officially classified as an air pollutant under Indian law?
3. Name the 6 greenhouse gases regulated under the Kyoto Protocol.
4. Match SDG 6, SDG 7, and SDG 13 to their respective sustainable development mandates."""
    },
    5: {
        "title": "MODULE 5: CLIMATE CHANGE, EMERGING ISSUES & EIA",
        "short_title": "Module 5: Climate Change & EIA",
        "co": "CO: 5",
        "scope": "(1) Climate change science, Enhanced Greenhouse Effect, Global Warming Potential (GWP), and Carbon Footprint, (2) Radiative forcing, sea level rise, ocean acidification, and extreme weather events, (3) Emerging technological solutions: Role of Artificial Intelligence (AI) and Internet of Things (IoT) in smart environmental monitoring, smart grids, and disaster warning, (4) Environmental Impact Assessment (EIA): Definition, objectives, and notification history in India (EIA Notification 2006), (5) The 4 core stages of the EIA process: Screening, Scoping, Public Consultation (Public Hearing), and Appraisal, and (6) Environmental Management Plan (EMP) and post-project monitoring.",
        "blueprint": """VIT Examination Format: 100% CBT Multiple Choice Questions (MCQs).
Module 5 accounts for 15 to 20% of the CBT Question Pool:
- Core Focus: Global Warming Potential of greenhouse gases ($"CO"_2 = 1, "CH"_4 approx 28, "N"_2"O" approx 265, "SF"_6 = 23,500$), the 4 sequential stages of the EIA process, Category A vs Category B projects in EIA Notification 2006, and public hearing procedures.""",
        "table": """  [*EIA Stage / Climate Parameter*], [*Regulatory Definition / Value*], [*CBT Exam Hallmark*],
  [Carbon Dioxide ($"CO"_2$)], [GWP = 1; baseline reference greenhouse gas], [Responsible for ~66% of enhanced radiative forcing],
  [Methane ($"CH"_4$)], [GWP = 28-36 (100-year timescale)], [Emitted by enteric fermentation in cattle and paddy fields],
  [Sulfur Hexafluoride ($"SF"_6$)], [GWP = 23,500; atmospheric lifetime ~3,200 years], [Highest known GWP gas; used in electrical switchgear],
  [EIA Stage 1: Screening], [Determines whether a proposed project requires a full EIA], [Divides projects into Category A (Central MoEFCC) and Category B (State SEIAA)],
  [EIA Stage 2: Scoping], [Formulates comprehensive Terms of Reference (ToR)], [Defines spatial and temporal boundaries for environmental study],
  [EIA Stage 3: Public Consultation], [Public hearing at site + written representations], [Affected local community voices concerns; mandatory video recording],
  [EIA Stage 4: Appraisal], [Expert Appraisal Committee (EAC) scrutinizes final EIA & EMP], [Recommends or rejects grant of Environmental Clearance (EC)],
""",
        "content": """= Topic 1: Climate Change Science & Greenhouse Potentials

=== The Enhanced Greenhouse Effect & Global Warming Potential (GWP)
Naturally occurring greenhouse gases retain thermal infrared radiation, warming Earth's surface to $+15^degree"C"$ instead of $-18^degree"C"$. Anthropogenic emissions enhance this trapping:
- *Global Warming Potential (GWP):* Measure of how much infrared heat a greenhouse gas traps in the atmosphere over 100 years relative to carbon dioxide ($"CO"_2$):
  - $"CO"_2$: GWP $= 1$ (Reference)
  - $"CH"_4$ (Methane): GWP $= 28$
  - $"N"_2"O"$ (Nitrous oxide): GWP $= 265$
  - $"CFC"-12$: GWP $= 10,200$
  - $"SF"_6$ (Sulfur hexafluoride): GWP $= 23,500$ (Extremely potent dielectric insulator gas!).

=== AI and IoT in Environmental Management
- *IoT Sensor Mesh Networks:* Autonomous wireless nodes measuring PM2.5, PM10, $"NO"_x$, and noise levels in real time.
- *AI Machine Learning Algorithms:* Predictive models forecasting air pollution dispersion patterns and early warning systems for flash floods.


= Topic 2: Environmental Impact Assessment (EIA) Framework

=== The EIA Notification 2006 (Government of India)
Environmental Impact Assessment is a formal planning tool to anticipate, evaluate, and mitigate the biophysical and social consequences of proposed developmental projects prior to execution:
1. *Project Categorization:*
  - *Category A Projects:* Mega-infrastructure, nuclear plants, and major ports appraised at the national level by MoEFCC and Expert Appraisal Committee (EAC). Mandatory EIA; no screening needed.
  - *Category B Projects:* Appraised at the state level by State EIA Authority (SEIAA). Subdivided into $B_1$ (requires full EIA) and $B_2$ (exempt from EIA).
2. *The Four Canonical Stages of EIA:*
  - *Stage 1: Screening:* Determines whether a project requires EIA based on investment scale and ecological sensitivity.
  - *Stage 2: Scoping:* Expert Appraisal Committee establishes detailed Terms of Reference (ToR) for the study.
  - *Stage 3: Public Consultation:* Mandatory public hearing conducted by the State Pollution Control Board at the project site to solicit feedback from project-affected residents.
  - *Stage 4: Appraisal:* Formal evaluation of the final Environmental Impact Statement (EIS) and Environmental Management Plan (EMP).


= Topic 3: High-Yield VIT CBT Multiple Choice Question (MCQ) Bank

*MCQ 5.1:* Under the Indian EIA Notification 2006, Category A developmental projects require environmental clearance from:
(A) District Collectorate \
(B) State Environment Impact Assessment Authority (SEIAA) \
(C) Ministry of Environment, Forest and Climate Change (MoEFCC), New Delhi \
(D) Local Municipal Corporation \
*Correct Answer:* *(C)* \
*Rationale:* Category A projects have national significance and are evaluated directly at the central level by MoEFCC and EAC.

*MCQ 5.2:* Which greenhouse gas exhibits the highest Global Warming Potential (GWP) over a 100-year time horizon?
(A) Carbon dioxide ($"CO"_2$) \
(B) Methane ($"CH"_4$) \
(C) Nitrous oxide ($"N"_2"O"$) \
(D) Sulfur hexafluoride ($"SF"_6$) \
*Correct Answer:* *(D)* \
*Rationale:* $"SF"_6$ has a GWP of approximately 23,500, making it thousands of times more potent at trapping thermal radiation than $"CO"_2$ per unit mass.

*MCQ 5.3:* What is the sequential chronological order of the 4 stages in the Indian EIA process?
(A) Scoping $arrow.r$ Screening $arrow.r$ Appraisal $arrow.r$ Public Consultation \
(B) Screening $arrow.r$ Scoping $arrow.r$ Public Consultation $arrow.r$ Appraisal \
(C) Public Consultation $arrow.r$ Screening $arrow.r$ Scoping $arrow.r$ Appraisal \
(D) Screening $arrow.r$ Appraisal $arrow.r$ Scoping $arrow.r$ Public Consultation \
*Correct Answer:* *(B)* \
*Rationale:* The statutory 4-stage EIA process under Notification 2006 proceeds strictly as: Screening $arrow.r$ Scoping $arrow.r$ Public Consultation $arrow.r$ Appraisal.

*MCQ 5.4:* Which component of an EIA report specifies the operational mitigation measures and monitoring schedules during the lifecycle of the project?
(A) Terms of Reference (ToR) \
(B) Environmental Management Plan (EMP) \
(C) Rapid EIA statement \
(D) Baseline environmental survey \
*Correct Answer:* *(B)* \
*Rationale:* The Environmental Management Plan (EMP) details specific budget, mitigation equipment, and monitoring timelines to minimize environmental degradation.
""",
        "checklist": """1. List the 4 stages of the EIA process in chronological sequence.
2. Differentiate between Category A and Category B projects under the EIA Notification 2006.
3. What is the Global Warming Potential of Methane and Sulfur Hexafluoride relative to CO2?
4. How does the Public Hearing stage ensure community participation in environmental decisions?"""
    }
}

for mod_num, data in evs_modules.items():
    typst_code = f"""
#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.2cm, right: 2.2cm),
  header: context {{
    if here().page() > 1 {{
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: luma(90))[VIT BCHY102 / EST1001 --- {data['short_title']}]],
        align(right)[#text(size: 8.5pt, fill: luma(90), style: "italic")[VIT CBT Exam Textbook]]
      )
      line(length: 100%, stroke: 0.4pt + luma(180))
    }}
  }},
  footer: context {{
    align(center)[#text(size: 9pt)[#here().page()]]
  }}
)
#set text(font: "New Computer Modern", size: 10pt)
#set par(justify: true, leading: 0.65em)
#set heading(numbering: "1.1")

#align(center)[
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT BCHY102 / EST1001 --- {data['short_title']}] \\
  #v(2mm)
  #text(size: 15pt, weight: "black")[{data['title']}] \\
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[({data['co']})] \\
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Complete CBT Study Textbook, High-Yield MCQ Bank & Step-by-Step Rationales] \\
  #text(size: 9pt, fill: luma(100))[Aligned with VIT BCHY102 Online CBT Exam Syllabus, VTOP / Moodle Question Bank & Past Papers]
]

#v(3mm)
#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 9pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Textbook (Official VIT Syllabus):]
  {data['scope']}
]

#v(2mm)
#outline(title: "Contents", depth: 2, indent: auto)
#v(2mm)

= VIT CBT Exam Blueprint & Master Key Facts for Module {mod_num}

{data['blueprint']}

#v(2mm)
#table(
  columns: (2.2fr, 3.2fr, 2.6fr),
  stroke: 0.5pt + luma(180),
  inset: 6.5pt,
{data['table']}
)

{data['content']}

= Quick Self-Test Checklist Before Your Online CBT Exam

{data['checklist']}
"""
    fname_typ = f"public/pdfs/environmental/EVS_MOD-{mod_num}.typ"
    fname_pdf = f"public/pdfs/environmental/EVS_MOD-{mod_num}.pdf"
    with open(fname_typ, "w") as f:
        f.write(typst_code)
    print(f"Wrote {fname_typ}")
    res = subprocess.run(["/opt/homebrew/bin/typst", "compile", fname_typ, fname_pdf], capture_output=True, text=True)
    if res.returncode == 0:
        print(f"SUCCESS: Compiled {fname_pdf}")
    else:
        print(f"ERROR on {fname_pdf}:\n{res.stderr}")
