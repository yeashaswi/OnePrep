#!/usr/bin/env python3
import subprocess, os

EVS_MODULES = [
    {
        "num": 1,
        "code": "BCHY102",
        "title": "ECOSYSTEMS, BIODIVERSITY & NATURAL RESOURCES",
        "short_title": "Ecosystems & Resources",
        "co": "CO: 1",
        "scope": "(1) Concept and structure of an ecosystem: abiotic and biotic components, (2) Food chains, food webs, and ecological pyramids (number, biomass, energy), (3) Energy flow and Lindeman's 10% trophic efficiency rule, (4) Biogeochemical cycles: Carbon cycle and Nitrogen cycle, (5) Forest and water resources: deforestation, dams, and over-exploitation, and (6) Renewable and non-renewable energy resources.",
        "blueprint": """In VIT Final Assessment Tests (BCHY102 / EST1001 FAT Papers), Module 1 carries 20 Marks:
1. *Question Type A (10 Marks):* Energy Flow in Ecosystems: Lindeman's 10% rule, structure of ecological pyramids (why the pyramid of energy is strictly upright), and biomagnification of persistent organic pollutants (DDT).
2. *Question Type B (10 Marks):* Biogeochemical Cycles: Step-by-step microbial transformations in the Nitrogen Cycle (Nitrogen fixation, Nitrification, Assimilation, Ammonification, Denitrification) with reaction equations.""",
        "table_headers": ("Ecosystem / Resource Concept", "Ecological Law / Mechanism", "FAT Exam Landmark"),
        "table_rows": [
            ("Lindeman's 10% Rule", "Only ~10% of energy stored as biomass in one trophic level passes to next", "Thermodynamic heat dissipation limits food chains to 4-5 trophic levels"),
            ("Pyramid of Energy", 'Always strictly upright ($"J/m"^2"/yr"$); never inverted', "Second Law of Thermodynamics; energy cannot be created or recycled"),
            ("Nitrogen Fixation", '$"N"_2 + 8 "H"^+ + 8 e^- + 16 "ATP" arrow.r 2 "NH"_3 + "H"_2 + 16 "ADP"$', "Catalyzed by Nitrogenase in *Rhizobium* / *Azotobacter*"),
            ("Nitrification", '$2 "NH"_4^+ + 3 "O"_2 arrow.r 2 "NO"_2^- + 4 "H"^+ + 2 "H"_2"O"$ (*Nitrosomonas*)', '$2 "NO"_2^- + "O"_2 arrow.r 2 "NO"_3^-$ (*Nitrobacter*)'),
            ("Biomagnification", "Concentration of lipophilic toxins increases exponentially up the food chain", "DDT eggshell thinning in tertiary raptors (Bald Eagle)"),
            ("Renewable Energy", "Solar photovoltaics, wind kinetic, micro-hydro, geothermal, biomass", "Zero carbon operational emissions; intermittent grid integration")
        ],
        "sections": [
            ("Topic 1: Ecosystem Dynamics & Lindeman's Energy Flow", """
=== Trophic Structure of Ecosystems
An ecosystem is a functional self-sustaining biological community interacting with its physical environment:
1. *Abiotic Components:* Inorganic nutrients ($C, N, P$), climate ($T, "sunlight", "humidity"$), soil pH.
2. *Biotic Components:*
  - *Producers (Autotrophs):* Photoautotrophs converting solar radiant energy into chemical energy:
    $ 6"CO"_2 + 6"H"_2"O" limits(arrow.r)^"solar photons" "C"_6"H"_12"O"_6 + 6"O"_2 $
  - *Consumers (Heterotrophs):* Primary herbivores, secondary carnivores, tertiary apex predators.
  - *Decomposers (Saprotrophs):* Fungi and bacteria mineralizing organic detritus.

=== Lindeman's 10% Efficiency Rule & Ecological Pyramids
Raymond Lindeman (1942) formulated the fundamental thermodynamic rule of trophic dynamics:
$ "Trophic Efficiency" = (P_n) / (P_(n-1)) times 100 approx 10% $
Approximately 90% of energy entering a trophic level is dissipated as metabolic respiration heat ($R$), locomotion work, and unassimilated waste (feces).
*The Three Ecological Pyramids:*
1. *Pyramid of Numbers:* Upright in grassland; inverted in parasitic tree ecosystems (one tree supporting thousands of insects).
2. *Pyramid of Biomass:* Upright in terrestrial ecosystems; *inverted in marine ecosystems* (small standing crop of rapid-turnover phytoplankton supporting larger zooplankton biomass).
3. *Pyramid of Energy:* *Always strictly upright!* Energy flows unidirectionally; pursuant to the Second Law of Thermodynamics, entropy increases at every trophic transfer.
"""),
            ("Topic 2: Biogeochemical Cycles (Carbon & Nitrogen)", """
=== The Global Nitrogen Cycle
Nitrogen is the building block of amino acids, proteins, and nucleic acids, comprising 78% of the atmosphere as inert diatomic gas ($"N"_2$). Its biological assimilation requires microbial enzymatic transformation:
1. *Biological Nitrogen Fixation:* Diazotrophs containing the molybdenum-iron enzyme *nitrogenase* reduce atmospheric nitrogen:
$ "N"_2 + 8"H"^+ + 8e^- + 16"ATP" limits(arrow.r)^"nitrogenase" 2"NH"_3 + "H"_2 + 16"ADP" + 16"P"_i $
  - Symbiotic: *Rhizobium* in legume root nodules.
  - Free-living: *Azotobacter* (aerobic) and *Clostridium* (anaerobic).
2. *Nitrification (Two-Step Aerobic Oxidation):*
  - Step A: Ammonia oxidized to nitrite by *Nitrosomonas*:
    $ 2"NH"_4^+ + 3"O"_2 arrow.r 2"NO"_2^- + 4"H"^+ + 2"H"_2"O" + "Energy" $
  - Step B: Nitrite oxidized to nitrate by *Nitrobacter*:
    $ 2"NO"_2^- + "O"_2 arrow.r 2"NO"_3^- + "Energy" $
3. *Assimilation:* Plants absorb nitrate ($"NO"_3^-$) via root transporters, reducing it to amino groups.
4. *Ammonification:* Decomposers deaminate organic proteins from dead biomass back into ammonia ($"NH"_3$).
5. *Denitrification:* Facultative anaerobic bacteria (*Pseudomonas denitrificans*, *Thiobacillus*) reduce nitrate back to atmospheric $"N"_2$ under waterlogged, anoxic conditions:
$ 2"NO"_3^- arrow.r 2"NO"_2^- arrow.r 2"NO" arrow.r "N"_2"O" arrow.r "N"_2 arrow.t $.
"""),
            ("Topic 3: Worked VIT FAT Question Bank Problems", """
*Problem 1.1 (BCHY102 FAT Paper --- 10 Marks):* Explain the phenomenon of biomagnification. If a shallow lake contains water contaminated with DDT at a concentration of 0.00005 ppm, calculate and illustrate the progressive concentration of DDT across the trophic chain: Phytoplankton $arrow.r$ Zooplankton $arrow.r$ Small Fish $arrow.r$ Large Fish $arrow.r$ Fish-Eating Bird (Osprey).

*Solution:*
*Definition:* Biomagnification (biological magnification) is the progressive increase in the concentration of a persistent, non-biodegradable, lipophilic xenobiotic substance in animal tissues at successively higher trophic levels of a food chain.
*Progressive Concentration Profile:*
1. Water: $0.00005" ppm"$ ($5 times 10^(-5)" ppm"$).
2. Phytoplankton (Producers): Absorbs DDT via surface diffusion; bioaccumulates to $0.04" ppm"$ ($approx 800 times$ magnification).
3. Zooplankton (Primary Consumers): Ingests thousands of phytoplankton cells; DDT partitions into lipids: $0.2" ppm"$ ($4000 times$).
4. Small Fish (Secondary Consumers): Feeds on zooplankton continuously; cannot excrete lipophilic DDT: $2.0" ppm"$ ($40,000 times$).
5. Large Predatory Fish: $20.0" ppm"$ ($400,000 times$).
6. Apex Raptor (Osprey / Bald Eagle): Ingests large fish; DDT concentrates to $25-50" ppm"$ (over $1,000,000 times$ magnification!).
*Ecological Impact:* DDT inhibits calcium adenosine triphosphatase (Ca-ATPase) in the avian shell gland, causing eggshell thinning. Eggshells crush during incubation, resulting in catastrophic raptor population collapse.
"""),
            ("VIT Faculty Exam Insights & Common Traps", """
- *Inverted Pyramid of Biomass:* Students often lose marks by claiming that all pyramids can be inverted. In FAT answers, explicitly emphasize: The Pyramid of Energy is NEVER inverted; only Numbers (trees) and Biomass (ocean phytoplankton) can be inverted.
- *Nitrogen Cycle Enzymes:* Name both *Nitrosomonas* and *Nitrobacter* separately for the two steps of nitrification to receive maximum credit.
"""),
            ("Quick Self-Test Checklist Before Your Exam", """
1. Can you calculate the energy arriving at the 4th trophic level given 100,000 J solar input?
2. Can you sketch the 5 chemical reaction steps of the global Nitrogen cycle?
3. Why does the open ocean exhibit an inverted pyramid of biomass?
4. What biochemical enzyme does DDT inhibit in birds to cause eggshell thinning?
""")
        ]
    },
    {
        "num": 2,
        "code": "BCHY102",
        "title": "ENVIRONMENTAL POLLUTION & CONTROL ENGINEERING",
        "short_title": "Pollution & Control",
        "co": "CO: 2",
        "scope": "(1) Classification of air pollutants: primary and secondary, (2) Industrial air pollution control equipment: Electrostatic Precipitators (ESP), Fabric filters, Cyclone separators, and Wet scrubbers, (3) Photochemical smog and acid rain formation chemistry, (4) Water pollution parameters: BOD and COD definitions, calculations, and significance, (5) Municipal wastewater treatment: Primary, Secondary (Activated Sludge Process), and Tertiary treatment, and (6) Eutrophication mechanism.",
        "blueprint": """In VIT Final Assessment Tests, Module 2 carries 20 Marks across two 10-mark questions:
1. *Question Type A (10 Marks):* Water Pollution Engineering: Mathematical calculation of 5-day Biochemical Oxygen Demand ($"BOD"_5$), comparison between BOD and COD, and the Activated Sludge Process (ASP) flowchart.
2. *Question Type B (10 Marks):* Industrial Air Pollution Control: Working principle, construction diagram, and collection efficiency formula of Electrostatic Precipitators (ESP) or Fabric Filter Baghouses.""",
        "table_headers": ("Pollution Parameter / Unit", "Engineering Formulation / Principle", "Regulatory Threshold / Standard"),
        "table_rows": [
            ("Biochemical Oxygen Demand", '$"BOD"_5 = (D_1 - D_2) times "Dilution Factor"$', 'Standard: 5 days at 20°C; Drinking water $< 2" mg/L"$; Raw sewage $200-400" mg/L"$'),
            ("Chemical Oxygen Demand", 'Titration with acidified $"K"_2"Cr"_2"O"_7$; measures all oxidizable matter', '$"COD" >= "BOD"$ always; $"BOD"/"COD" > 0.6$ indicates biodegradable waste'),
            ("Electrostatic Precipitator", 'Corona discharge (-50 to -100 kV) charges dust; grounded plates collect', 'Collection efficiency $> 99.5%$ for sub-micron fly ash ($0.01-10 mu m$)'),
            ("Activated Sludge Process", 'Aeration basin ($"DO" = 2" mg/L"$) with recycled biomass ($"MLSS" approx 3000" mg/L"$)', 'Secondary clarification removes 85-95% of soluble organic BOD'),
            ("Photochemical Smog", '$"NO"_x + "VOCs" limits(arrow.r)^"h nu" "O"_3 + "PAN" + "Aldehydes"$', 'Brown haze, eye irritation, damages rubber and lung alveoli'),
            ("Acid Rain Reactions", '$"SO"_2 arrow.r "H"_2"SO"_4$ and $"NO"_x arrow.r "HNO"_3$', 'Precipitation with $"pH" < 5.6$; leaches toxic $"Al"^(3+)$ from soils')
        ],
        "sections": [
            ("Topic 1: Water Pollution Metrics & BOD5 Calculation", """
=== Biochemical Oxygen Demand (BOD) vs. Chemical Oxygen Demand (COD)
1. *Biochemical Oxygen Demand ($"BOD"_5$):* The mass of dissolved molecular oxygen required by aerobic microorganisms to biochemically decompose biodegradable organic matter in a unit volume of water incubated at $20 degree"C"$ in the dark for 5 days.
2. *Chemical Oxygen Demand (COD):* The amount of oxygen consumed during the complete chemical oxidation of both biodegradable and non-biodegradable organic constituents by a boiling strong chemical oxidizing agent (potassium dichromate, $"K"_2"Cr"_2"O"_7$, in concentrated $"H"_2"SO"_4$ with $"Ag"_2"SO"_4$ catalyst):
$ "Always: " quad "COD" >= "BOD" $
Because dichromate oxidizes cellulose, lignin, and hydrocarbons that bacteria cannot readily metabolize.
- *Biodegradability Index:* If $"BOD"/"COD" > 0.6$, the effluent is highly amenable to secondary biological treatment. If $< 0.3$, toxic or recalcitrant pollutants predominate.

=== The Standard 5-Day BOD Formulation
To measure $"BOD"_5$, the wastewater sample is diluted with nutrient-fortified, oxygen-saturated dilution water:
$ "BOD"_5 = (D_1 - D_2) times ("Volume of BOD Bottle (300 mL)") / ("Volume of Undiluted Waste Sample (mL)") $
$ "BOD"_5 = (D_1 - D_2) times "Dilution Factor (DF)" $
where:
- $D_1$ is the Initial Dissolved Oxygen (DO) of the diluted sample at Day 0 ($"mg/L"$)
- $D_2$ is the Final Dissolved Oxygen of the incubated mixture after 5 days at $20 degree"C"$ ($"mg/L"$).

=== Worked VIT Question Bank Problem (Topic 1)
*Problem 2.1 (BCHY102 FAT April 2025 --- 10 Marks):* A 15 mL sample of untreated municipal sewage was pipetted into a standard 300 mL BOD incubation bottle and diluted to capacity with aerated dilution water. The initial DO of the mixture was found to be $8.8" mg/L"$. After 5 days of incubation at $20 degree"C"$, the final DO was measured as $2.4" mg/L"$. A parallel blank bottle of dilution water experienced a DO drop of $0.2" mg/L"$. Calculate the unseeded 5-day BOD of the raw sewage.

*Solution:*
1. Dissolved oxygen drop in sample bottle:
$ Delta D_"sample" = D_1 - D_2 = 8.8 - 2.4 = 6.4" mg/L" $
2. Correcting for blank oxygen depletion:
$ Delta D_"net" = 6.4 - 0.2 = 6.2" mg/L" $
3. Calculate Dilution Factor:
$ "DF" = (V_"bottle") / (V_"sample") = (300" mL") / (15" mL") = 20 $
4. Calculate 5-Day BOD:
$ "BOD"_5 = Delta D_"net" times "DF" = 6.2 times 20 = 124" mg/L (ppm)" $.
"""),
            ("Topic 2: Municipal Wastewater Treatment Architecture", """
=== Primary, Secondary & Tertiary Treatment
1. *Primary Treatment (Physical Separation):*
  - *Bar Screens:* Traps coarse debris, plastic bottles, rags.
  - *Grit Chamber:* Constant velocity channel ($0.3" m/s"$) that allows heavy inorganic sand and gravel to settle out.
  - *Primary Clarifier / Sedimentation Tank:* Settles 50-70% of suspended solids (forming primary sludge) and skims oils/scum.
2. *Secondary Treatment (Biological Oxidation - Activated Sludge Process):*
  - The effluent enters an *Aeration Basin* where compressed air or mechanical surface aerators maintain Dissolved Oxygen ($"DO" >= 2.0" mg/L"$).
  - A concentrated suspension of heterotrophic microorganisms (*Mixed Liquor Suspended Solids - MLSS*, $2000-4000" mg/L"$) metabolizes soluble organic waste into $"CO"_2$, $"H"_2"O"$, and new cellular biomass.
  - The mixture flows to a *Secondary Clarifier*: Microbial flocs settle out. A portion of the active biomass is returned to the aeration basin (*Return Activated Sludge - RAS*) to maintain microbial density, while excess biomass is wasted (*Waste Activated Sludge - WAS*).
3. *Tertiary / Advanced Treatment:*
  - Chemical precipitation of phosphates using alum or ferric chloride.
  - Granular activated carbon (GAC) adsorption of trace refractory organics.
  - Final disinfection using chlorination ($1-2" mg/L"$ free residual), ultraviolet (UV) irradiation, or ozonation to destroy pathogenic coliforms.
"""),
            ("Topic 3: Industrial Air Pollution Control (ESP)", """
=== Electrostatic Precipitator (ESP) Engineering
An ESP removes fine particulate matter (PM2.5, PM10, fly ash) from industrial flue gases with efficiencies exceeding 99.5%:
1. *Operating Mechanism:*
  - A high DC negative voltage ($-40$ to $-100" kV"$) is applied to thin discharge electrode wires suspended between grounded collector plates.
  - The high electric field ionizes the carrier gas molecules, generating a glowing *corona discharge*. Free electrons accelerate toward the positive grounded plates, colliding with neutral gas molecules to create negative gas ions.
  - Passing dust particles collide with these gas ions, acquiring strong negative electrostatic charges within milliseconds (*field charging*).
  - The negatively charged dust particles migrate across the gas flow under the influence of the transverse electrostatic field and deposit on the grounded vertical collecting plates.
  - Periodic mechanical hammers strike the plates (*rapping*), dislodging the agglomerated dust cake into bottom storage hoppers.
2. *Deutsch-Anderson Collection Efficiency Equation:*
$ eta = 1 - e^(- (A times w) / Q) $
where $A$ is the total collecting plate area ($m^2$), $w$ is the particle migration velocity ($m/s$), and $Q$ is the volumetric flue gas flow rate ($m^3/s$).
"""),
            ("VIT Faculty Exam Insights & Common Traps", """
- *BOD Blank Correction:* If the examination question provides a blank depletion value, you MUST subtract it: $Delta D = (D_1 - D_2) - (B_1 - B_2)$. Omitting the blank correction loses 3 marks in numerical questions.
- *Eutrophication Sequence:* When describing cultural eutrophication, detail the precise cascade: Excess Nitrogen/Phosphorus $arrow.r$ Algal Bloom $arrow.r$ Sunlight Blockade $arrow.r$ Submerged Plant Death $arrow.r$ Microbial Decomposer Explosion $arrow.r$ DO Depletion ($< 2" mg/L"$) $arrow.r$ Fish Asphyxiation.
"""),
            ("Quick Self-Test Checklist Before Your Exam", """
1. Can you calculate BOD5 given sample volume, dilution bottle size, initial DO, and 5-day DO?
2. Why is COD always greater than or equal to BOD?
3. Can you sketch the complete flowchart of a municipal Activated Sludge sewage treatment plant?
4. What is the working principle and collection efficiency formula of an Electrostatic Precipitator?
""")
        ]
    },
    {
        "num": 3,
        "code": "BCHY102",
        "title": "SOLID, HAZARDOUS & ELECTRONIC WASTE MANAGEMENT",
        "short_title": "Waste Management",
        "co": "CO: 3",
        "scope": "(1) Municipal Solid Waste (MSW): generation rates, composition, and physical/chemical characterization, (2) The 3R hierarchy: Reduce, Reuse, Recycle, (3) Composting techniques: aerobic windrows vs anaerobic digestion, (4) Sanitary landfill design: clay liners, geomembranes, and leachate collection systems, (5) Incineration and waste-to-energy technologies, and (6) Hazardous & Electronic Waste (E-waste): toxic heavy metal pollutants, recycling flowcharts, and Extended Producer Responsibility (EPR).",
        "blueprint": """In VIT Final Assessment Tests, Module 3 carries 20 Marks:
1. *Question Type A (10 Marks):* Sanitary Landfill vs Open Dumping: Cross-sectional engineering diagram of a modern secure sanitary landfill showing composite liner systems, leachate collection sumps, and methane gas flare extraction wells.
2. *Question Type B (10 Marks):* E-Waste Management: Hazardous components (Lead, Mercury, Cadmium, BFRs), environmental impact of crude informal recycling, formal metallurgical recovery flowcharts, and the Extended Producer Responsibility (EPR) regulatory mandate.""",
        "table_headers": ("Waste Category / Facility", "Engineering Component / Process", "Environmental Standard / Mandate"),
        "table_rows": [
            ("Composite Landfill Liner", '0.6 to 1.0 m compacted clay ($k < 10^(-7)" cm/s"$) + 1.5 mm HDPE geomembrane', "Zero leachate migration into groundwater aquifers"),
            ("Leachate Management", "Perforated HDPE pipes bedded in gravel sloping to sump -> biological treatment", "High COD/heavy metals; prevents water table contamination"),
            ("Landfill Gas (LFG)", '$approx 50%" CH"_4 + 50%" CO"_2$ generated anaerobically', "Gas wells extract methane for electricity or flared to curb GWP"),
            ("Incineration / WtE", "High temperature thermal oxidation ($850-1100°C$); mass-burn boiler", "90% volume reduction; requires acid gas scrubbers for dioxins/furans"),
            ("E-Waste: Toxic Lead", "Solder in printed circuit boards (PCBs) and CRT funnels", "Neurotoxicant; causes cognitive deficits and kidney damage"),
            ("EPR Mandate", "Manufacturers are legally accountable for cradle-to-grave lifecycle & takeback", "E-Waste Management Rules 2022; target-based collection quotas")
        ],
        "sections": [
            ("Topic 1: Sanitary Landfill Engineering & Leachate Containment", """
=== Engineering Anatomy of a Modern Sanitary Landfill
Unlike primitive open garbage dumps, a sanitary landfill is an engineered solid waste containment facility designed to eliminate groundwater contamination, noxious odors, and methane explosion hazards:
1. *Composite Basal Liner System:*
  - *Sub-base:* Native graded and compacted subgrade.
  - *Compacted Clay Liner (CCL):* 60 to 90 cm thick dense bentonite/clay barrier compacted to achieve hydraulic conductivity $k <= 10^(-7)" cm/s"$.
  - *Geomembrane:* 1.5 to 2.0 mm thick High-Density Polyethylene (HDPE) flexible membrane liner providing an impermeable barrier against synthetic solvents.
  - *Geotextile Cushion:* Non-woven fabric protecting the geomembrane from puncture.
2. *Leachate Collection and Removal System (LCRS):*
  - Continuous 30 cm drainage layer of washed gravel with perforated HDPE lateral pipes sloped toward collection sumps.
  - Leachate is continuously pumped to on-site sequencing batch reactors (SBRs) or reverse osmosis units.
3. *Landfill Gas (LFG) Extraction:*
  - Anaerobic decomposition of organic waste by methanogenic bacteria generates landfill gas ($50-55%" CH"_4, 45-50%" CO"_2$).
  - Perforated vertical gas wells under negative pressure extract methane, piping it to gas engines to generate renewable electrical power or flaring it.
4. *Daily and Final Cover Caps:*
  - 15 cm of compacted soil applied at the end of each working day to control disease vectors (flies, rodents) and windblown litter.
  - Final multi-layer vegetative cap with impervious barrier to prevent rainwater percolation post-closure.
"""),
            ("Topic 2: Electronic Waste (E-Waste) Metallurgy & EPR", """
=== Toxic Constituents of Electronic Waste
E-waste consists of discarded computers, mobile phones, consumer electronics, and circuit boards containing hazardous heavy metals and halogenated flame retardants:
1. *Lead ($"Pb"$):* Present in 60/40 tin-lead solder on printed circuit boards (PCBs) and cathode ray tube (CRT) funnel glass. Neurotoxin causing central nervous system damage and encephalopathy.
2. *Mercury ($"Hg"$):* Present in cold cathode fluorescent lamps (CCFLs) backlighting LCD screens, tilt switches, and relays. Bioaccumulates into neurotoxic methylmercury.
3. *Cadmium ($"Cd"$):* Used in nickel-cadmium rechargeable batteries and SMD chip resistors. Causes irreversible renal tubular damage and osteomalacia (*Itai-itai disease*).
4. *Brominated Flame Retardants (BFRs):* Polybrominated diphenyl ethers (PBDEs) embedded in plastic casings; emit carcinogenic polybrominated dioxins and furans when incinerated at low temperatures.

=== Formal Metallurgical E-Waste Recycling Flowchart
1. *Manual Decontamination & Dismantling:* Hazardous components (batteries, mercury bulbs, capacitors) are safely segregated.
2. *Mechanical Shredding & Separation:*
  - Multi-stage shredders reduce PCBs to $2-5" mm"$ granules.
  - Magnetic drums extract ferrous metals (iron, steel).
  - Eddy current separators repel non-ferrous aluminum and copper.
  - Density separation (air tables) segregates metals from light polymers.
3. *Hydrometallurgical & Pyrometallurgical Refining:*
  - Acid leaching using nitric/hydrochloric acid to solubilize copper, tin, and precious metals.
  - Selective electrowinning and cyanide-free chemical precipitation recovers high-purity gold ($"Au"$), silver ($"Ag"$), and palladium ($"Pd"$).

=== Extended Producer Responsibility (EPR)
Under the Indian E-Waste Management Rules (2022), producers, manufacturers, and importers of electrical goods are legally mandated to finance and organize the takeback, channelization, and certified recycling of end-of-life electronic hardware based on predetermined annual percentage targets.
"""),
            ("Topic 3: Composting vs. Waste-to-Energy Incineration", """
=== Aerobic Windrow Composting
Biological decomposition of organic solid wastes under thermophilic aerobic conditions:
$ "Organic Matter" + "O"_2 + "Aerobic Microbes" arrow.r "Mature Humus (Compost)" + "CO"_2 + "H"_2"O" + "Heat" $
- *Key Operating Parameters:* Carbon-to-Nitrogen ratio ($C:N approx 30:1$), moisture content ($50-60%$), temperature ($55-65 degree"C"$ sustained for 3 days to destroy weed seeds and pathogens).
- Mechanical turning of trapezoidal piles (*windrows*) supplies oxygen and releases excess heat.

=== Mass-Burn Waste-to-Energy (WtE) Incineration
Controlled high-temperature thermal oxidation of solid waste ($850-1100 degree"C"$) inside a refractory-lined furnace:
- *Volume Reduction:* 85 to 90% reduction in waste volume; generates high-pressure superheated steam to drive electrical turbines.
- *Air Pollution Control Requirement:* Flue gases must be treated with lime injection (to neutralize acidic $"HCl"$ and $"SO"_2$), activated carbon injection (to adsorb toxic dioxins/furans), and fabric filter baghouses.
"""),
            ("VIT Faculty Exam Insights & Common Traps", """
- *Sanitary Landfill vs Open Dumps:* Always draw a clear cross-sectional diagram showing the 4 layers: subgrade, clay, HDPE geomembrane, and leachate pipe network. An answer without a labeled diagram rarely receives full 10 marks.
- *E-Waste EPR Concept:* State clearly that EPR places the *financial and physical lifecycle burden* on the original equipment manufacturer (OEM), not just municipal corporations.
"""),
            ("Quick Self-Test Checklist Before Your Exam", """
1. Can you draw and label the 4 barrier layers of an engineered sanitary landfill?
2. What are the four major toxic heavy metals in E-waste and their specific health impacts?
3. What is the optimal C:N ratio and moisture range for aerobic windrow composting?
4. How does Extended Producer Responsibility (EPR) operate under Indian e-waste regulations?
""")
        ]
    },
    {
        "num": 4,
        "code": "BCHY102",
        "title": "CLIMATE CHANGE, GLOBAL WARMING & ENVIRONMENTAL LAW",
        "short_title": "Climate Change & Law",
        "co": "CO: 4",
        "scope": "(1) Greenhouse effect, radiative forcing, and greenhouse gases ($\"CO\"_2, \"CH\"_4, \"N\"_2\"O\", \"SF\"_6$), (2) Global Warming Potential (GWP) index, (3) Impacts of climate change: sea-level rise, ocean acidification, extreme meteorological events, (4) Stratospheric ozone layer depletion: Chapman cycle, CFC catalytic destruction mechanism, and Polar Stratospheric Clouds (PSCs), (5) International environmental treaties: Montreal Protocol, Kyoto Protocol, and Paris Agreement, and (6) Indian Environmental Legislation: EPA 1986, Air Act 1981, and Water Act 1974.",
        "blueprint": """In VIT Final Assessment Tests, Module 4 carries 20 Marks across two 10-mark questions:
1. *Question Type A (10 Marks):* Ozone Layer Depletion: Chapman equilibrium cycle, catalytic chain reaction of chlorofluorocarbons ($\"CF\"_2\"Cl\"_2$), role of Polar Stratospheric Clouds in Antarctic ozone hole, and the Montreal Protocol.
2. *Question Type B (10 Marks):* Climate Treaties & Environmental Law: Detailed comparison between Kyoto Protocol (binding emission reduction targets, CDM mechanism) and Paris Agreement ($1.5-2.0°C$ target, NDCs), plus salient powers under the Indian Environment (Protection) Act 1986.""",
        "table_headers": ("Environmental Phenomenon / Law", "Scientific Mechanism / Legal Authority", "Metric / Global Target"),
        "table_rows": [
            ("Greenhouse Effect", "Absorption and re-emission of terrestrial infrared radiation ($4-100 mu m$)", "Raises Earth's equilibrium temperature from -18°C to +15°C"),
            ("Global Warming Potential", "Cumulative radiative forcing relative to $\"CO\"_2$ over 100 years", '$\"CO\"_2 = 1, \"CH\"_4 = 28, \"N\"_2\"O\" = 265, \"SF\"_6 = 23500$'),
            ("Ozone Depletion by CFCs", '$"Cl"^dot + "O"_3 arrow.r "ClO"^dot + "O"_2$ and $"ClO"^dot + "O" arrow.r "Cl"^dot + "O"_2$', "1 chlorine radical destroys up to 100,000 ozone molecules"),
            ("Montreal Protocol (1987)", "Phasing out ODS: CFCs, Halons, Carbon tetrachloride, HCFCs", "Most successful environmental treaty; full stratospheric recovery by ~2060"),
            ("Paris Agreement (2015)", "Nationally Determined Contributions (NDCs) to limit warming", "Hold global temperature rise well below 2.0°C, aiming for 1.5°C"),
            ("Environment Act 1986", "Enacted under Article 253 following Bhopal Gas Tragedy", "Central Government empowered to set ambient standards, close polluting units")
        ],
        "sections": [
            ("Topic 1: Greenhouse Physics, GWP & Ocean Acidification", """
=== Radiative Forcing and The Greenhouse Effect
The Earth's surface absorbs shortwave solar radiation ($0.2-4 mu m$) and re-radiates it back to space as longwave thermal infrared radiation ($4-100 mu m$).
Triatomic and polyatomic greenhouse gas molecules ($"H"_2"O", "CO"_2, "CH"_4, "N"_2"O", "O"_3, "SF"_6$) possess vibrational dipole moments that absorb these outgoing infrared wavelengths, re-radiating thermal energy isotropically back toward Earth's surface. Without this natural greenhouse effect, Earth's mean temperature would be $-18 degree"C"$; anthropogenic emissions have driven the current mean to $+15.2 degree"C"$.

=== Global Warming Potential (GWP) Index
GWP measures the cumulative radiative forcing of a 1 kg pulse emission of a greenhouse gas relative to 1 kg of carbon dioxide over a specified time horizon (typically 100 years):
$ "GWP"_i = (integral_0^T a_i dot C_i(t) d t) / (integral_0^T a_("CO"_2) dot C_("CO"_2)(t) d t) $
- Carbon Dioxide ($"CO"_2$): $"GWP" = 1$ (Reference baseline; atmospheric lifetime $approx 100-300" years"$).
- Methane ($"CH"_4$): $"GWP" = 28$ (Lifetime $approx 12" years"$, highly potent infrared absorber).
- Nitrous Oxide ($"N"_2"O"$): $"GWP" = 265$ (Lifetime $approx 114" years"$, agricultural fertilization).
- Sulfur Hexafluoride ($"SF"_6$): $"GWP" = 23,500$ (Electrical switchgear insulator; lifetime $3200" years"$).

=== Ocean Acidification Chemistry
Oceans absorb approximately 30% of anthropogenic $"CO"_2$ emissions:
$ "CO"_2"(aq)" + "H"_2"O" <-> "H"_2"CO"_3 <-> "H"^+ + "HCO"_3^- $
$ "H"^+ + "CO"_3^(2-) <-> "HCO"_3^- $
Dissociation increases hydronium ion concentration ($"pH"$ has dropped by 0.1 units since the industrial revolution, representing a 30% increase in ocean acidity) and severely depletes the bioavailable carbonate ion concentration ($["CO"_3^(2-)]$), preventing corals, mollusks, and pteropods from synthesizing aragonite/calcite shells:
$ "Ca"^(2+) + "CO"_3^(2-) <-> "CaCO"_3 arrow.b $.
"""),
            ("Topic 2: Stratospheric Ozone Depletion Mechanisms", """
=== The Chapman Natural Equilibrium Cycle
In the stratosphere ($15-35" km"$), the ozone shield is maintained by dynamic photochemical reactions:
1. Photodissociation of oxygen: $"O"_2 + h nu (lambda < 240" nm") arrow.r "O" + "O"$
2. Ozone formation: $"O" + "O"_2 + "M" arrow.r "O"_3 + "M"$ (where $"M"$ is a third body, $"N"_2$ or $"O"_2$)
3. Photodissociation of ozone: $"O"_3 + h nu (lambda < 320" nm") arrow.r "O"_2 + "O"$
4. Natural ozone destruction: $"O"_3 + "O" arrow.r 2"O"_2$.

=== Catalytic Ozone Destruction by Chlorofluorocarbons (CFCs)
Synthetic CFCs (e.g., Freon-12, $"CF"_2"Cl"_2$) are non-reactive and insoluble in the troposphere, diffusing intact into the stratosphere over 10-20 years.
1. UV-C Photolysis:
$ "CF"_2"Cl"_2 + h nu (lambda < 220" nm") arrow.r "CF"_2"Cl"^dot + "Cl"^dot $
2. Catalytic Chain Cycle:
$ "Cl"^dot + "O"_3 arrow.r "ClO"^dot + "O"_2 $
$ "ClO"^dot + "O" arrow.r "Cl"^dot + "O"_2 $
Net Reaction: $"O"_3 + "O" arrow.r 2"O"_2$.
The atomic chlorine radical ($"Cl"^dot$) is regenerated intact at the end of each cycle! A single chlorine radical destroys over 100,000 ozone molecules before diffusing into stable reservoir species ($"HCl", "ClONO"_2$).

=== Antarctic Ozone Hole & Polar Stratospheric Clouds (PSCs)
During the dark polar winter, extreme temperatures ($-80 degree"C"$) inside the Antarctic polar vortex condense nitric acid trihydrate and water ice crystals into *Type-I and Type-II Polar Stratospheric Clouds (PSCs)*:
- On PSC crystal surfaces, inactive reservoir species react heterogeneously:
$ "HCl" + "ClONO"_2 limits(arrow.r)^"PSC surface" "Cl"_2 + "HNO"_3 $
- When sunlight returns in austral spring (September-October), polar UV rapidly photolyzes $"Cl"_2$:
$ "Cl"_2 + h nu arrow.r 2"Cl"^dot $
This releases a massive burst of free chlorine radicals, causing rapid, localized Antarctic ozone depletion ($> 60%$ loss in total ozone column below 220 Dobson Units).
"""),
            ("Topic 3: International Environmental Treaties & Indian Law", """
=== The Montreal Protocol (1987)
Universally ratified treaty requiring the complete, mandatory global phase-out of Ozone Depleting Substances (ODS):
- Phase 1: Ban on chlorofluorocarbons (CFCs) and halons.
- Phase 2: Transitory substitution with Hydrochlorofluorocarbons (HCFCs).
- Kigali Amendment (2016): Mandated the phase-down of Hydrofluorocarbons (HFCs) due to their high global warming potentials, despite being ozone-safe.

=== The Kyoto Protocol vs. The Paris Agreement
- *Kyoto Protocol (1997):* Legally binding quantitative greenhouse gas reduction targets (average 5.2% below 1990 levels) imposed exclusively on developed Annex-I nations (*Common But Differentiated Responsibilities*). Introduced market-based mechanisms: Clean Development Mechanism (CDM), Joint Implementation (JI), and Carbon Emissions Trading.
- *Paris Agreement (2015):* Replaced rigid Annex classification with voluntary, bottom-up *Nationally Determined Contributions (NDCs)* submitted by all 196 nations. Central objective: limit global warming to well below $2.0 degree"C"$ above pre-industrial levels, with efforts to cap warming at $1.5 degree"C"$.

=== Indian Environment (Protection) Act, 1986
Enacted under Article 253 of the Constitution in the aftermath of the Bhopal Gas Disaster (1984):
1. Serves as an umbrella legislation bridging gaps between the Water Act (1974) and Air Act (1981).
2. Empowers Central Government / CPCB to establish national ambient environmental standards, maximum allowable emissions from industries, and hazardous chemical handling guidelines.
3. Grants absolute authority to order the immediate closure, prohibition, or regulation of non-compliant industrial units, and cut off electricity and water supply.
"""),
            ("VIT Faculty Exam Insights & Common Traps", """
- *Role of PSCs:* You will NOT score full marks on an ozone hole question without explaining the heterogeneous surface chemistry on Polar Stratospheric Clouds that converts stable reservoir $"HCl"$ and $"ClONO"_2$ into photolabile molecular $"Cl"_2$!
- *Kyoto vs Paris:* Clearly delineate: Kyoto was top-down with legally binding targets for developed nations; Paris is bottom-up based on voluntary National Determined Contributions (NDCs) for all countries.
"""),
            ("Quick Self-Test Checklist Before Your Exam", """
1. Can you derive why triatomic gases like CO2 absorb infrared whereas N2 does not?
2. Can you write the exact catalytic cycle for stratospheric ozone destruction by CFC-12?
3. What are the GWP values of methane, nitrous oxide, and sulfur hexafluoride?
4. What special powers are granted to environmental regulators under Section 5 of the EPA 1986?
""")
        ]
    },
    {
        "num": 5,
        "code": "BCHY102",
        "title": "SUSTAINABLE DEVELOPMENT, EIA & CIRCULAR ECONOMY",
        "short_title": "Sustainability & EIA",
        "co": "CO: 5",
        "scope": "(1) Concepts of sustainability and the Brundtland Commission definition, (2) UN Sustainable Development Goals (SDGs 1-17), (3) Environmental Impact Assessment (EIA): 8-step methodology, (4) Environmental Management Plan (EMP) and Public Consultation, (5) Carbon Footprint accounting and Life Cycle Assessment (LCA - ISO 14040), and (6) The Circular Economy paradigm: cradle-to-cradle vs cradle-to-grave linear industrial models.",
        "blueprint": """In VIT Final Assessment Tests, Module 5 carries 20 Marks:
1. *Question Type A (10 Marks):* Environmental Impact Assessment (EIA): 8-step procedural flowchart (Screening, Scoping, Baseline Studies, Impact Prediction, Mitigation Measures, EMP, Public Hearing, Post-Project Monitoring).
2. *Question Type B (10 Marks):* Circular Economy & Life Cycle Assessment (LCA): Biological and technical nutrient cycles in Cradle-to-Cradle architecture, and the 4 phases of ISO 14040 LCA.""",
        "table_headers": ("Framework / Concept", "Core Definition / Methodology", "Global Standard / Goal"),
        "table_rows": [
            ("Brundtland Definition", "Development that meets present needs without compromising future generations", "Brundtland Commission Report 'Our Common Future' (1987)"),
            ("UN SDGs (2015-2030)", "17 interlinked global goals with 169 specific targets", "SDG 6 (Clean Water), SDG 7 (Clean Energy), SDG 13 (Climate Action)"),
            ("EIA Notification 2006", "Category A (MoEFCC central appraisal); Category B (SEIAA state appraisal)", "Mandatory prior environmental clearance before infrastructure construction"),
            ("Public Hearing in EIA", "Mandatory open forum where affected local communities raise objections", "Democratic safeguard ensuring environmental justice and indigenous rights"),
            ("ISO 14040 LCA", "Goal & Scope -> Inventory (LCI) -> Impact Assessment (LCIA) -> Interpretation", "Quantifies comprehensive cradle-to-grave environmental burdens"),
            ("Circular Economy", "Design out waste and pollution; keep materials in continuous use; regenerate nature", "Ellen MacArthur Foundation butterfly diagram; 9R circular strategies")
        ],
        "sections": [
            ("Topic 1: Principles of Sustainability & UN SDGs", """
=== The Evolution of Sustainable Development
The definitive definition was formulated by the UN World Commission on Environment and Development (Brundtland Commission, 1987):
*"Sustainable development is development that meets the needs of the present without compromising the ability of future generations to meet their own needs."*
*The Three Pillars (Triple Bottom Line):*
1. *Environmental Sustainability:* Maintaining ecological integrity, biocapacity, and biodiversity conservation.
2. *Economic Sustainability:* Fostering long-term viable economic growth and resource efficiency without irreversible ecological debt.
3. *Social Sustainability:* Ensuring universal equity, human rights, public health, and social justice.

=== The UN Sustainable Development Goals (SDGs 2015-2030)
Adopted by all UN member states in 2015 as the "2030 Agenda for Sustainable Development", comprising 17 integrated goals:
- *SDG 6:* Clean Water and Sanitation (universal access to safe drinking water and wastewater treatment).
- *SDG 7:* Affordable and Clean Energy (expanding renewable energy share and energy efficiency).
- *SDG 9:* Industry, Innovation, and Infrastructure (resilient sustainable manufacturing).
- *SDG 11:* Sustainable Cities and Communities (green transit and municipal waste management).
- *SDG 12:* Responsible Consumption and Production (minimizing hazardous chemical releases and food waste).
- *SDG 13:* Climate Action (urgent measures to combat climate change and its impacts).
- *SDG 14:* Life Below Water (preventing marine pollution and ocean acidification).
- *SDG 15:* Life on Land (combating desertification, halting biodiversity loss, sustainable forestry).
"""),
            ("Topic 2: Environmental Impact Assessment (EIA) Methodology", """
=== The 8-Step EIA Procedure
An EIA is a formal decision-making process conducted prior to sanctioning major developmental projects (thermal power stations, highways, mining, dams):
1. *Screening:* Evaluates project scale and investment threshold to determine whether an EIA is required (under Indian EIA Notification 2006: *Category A* projects require Central MoEFCC appraisal; *Category B* projects require State SEIAA appraisal).
2. *Scoping:* Formulates specific Terms of Reference (ToR) and defines the spatial and temporal boundaries of the study.
3. *Baseline Environmental Data Collection:* Comprehensive 1-year monitoring of air quality ($"PM"_(2.5), "PM"_(10), "SO"_2, "NO"_x$), groundwater/surface water chemistry, noise contours, soil fertility, and socio-economic demographic profiles within a 10 km buffer radius.
4. *Impact Prediction & Assessment:* Forecasting potential negative impacts using mathematical dispersion modeling (e.g., AERMOD Gaussian air plume models) and overlay matrices.
5. *Mitigation Measures & Environmental Management Plan (EMP):* Devising engineering solutions: installing scrubbers, effluent treatment plants, acoustic barriers, and green belts (33% mandatory native tree plantation).
6. *Public Consultation / Public Hearing:* State Pollution Control Board conducts a mandatory public hearing within 45 days in the project district, inviting oral and written objections from locally affected communities.
7. *Appraisal & Decision Making:* Expert Appraisal Committee (EAC) reviews final EIA report, EMP, and public hearing proceedings to grant or reject Prior Environmental Clearance (EC).
8. *Post-Project Monitoring & Compliance:* Project proponents must submit half-yearly compliance reports demonstrating adherence to environmental clearance conditions.
"""),
            ("Topic 3: Life Cycle Assessment (LCA) & Circular Economy", """
=== ISO 14040 Life Cycle Assessment (LCA)
LCA is an internationally standardized analytical methodology to assess the total environmental burdens across every stage of a product's life cycle ("from cradle to grave"):
1. *Phase 1 (Goal and Scope Definition):* Defining the system boundary (e.g., cradle-to-gate vs cradle-to-grave) and functional unit (e.g., 1 kWh of electricity generated or 1000 liters of potable water delivered).
2. *Phase 2 (Life Cycle Inventory - LCI):* Compiling an exhaustive mass-and-energy balance accounting for raw material extractions, fossil energy inputs, water consumption, atmospheric emissions ($"CO"_2, "CH"_4$), and solid wastes.
3. *Phase 3 (Life Cycle Impact Assessment - LCIA):* Characterizing inventory flows into environmental impact categories: Global Warming Potential, Eutrophication Potential, Acidification Potential, and Human Toxicity.
4. *Phase 4 (Interpretation):* Identifying environmental hotspots in the manufacturing pipeline and recommending green redesign alternatives.

=== The Circular Economy Paradigm
Moving from the conventional extractive *Linear Economy ("Take-Make-Dispose")* to a restorative *Circular Economy ("Cradle-to-Cradle")*:
- *Biological Nutrients:* Biodegradable non-toxic materials (cellulose, wood, bio-polymers) designed to safely cascade into soil biosphere via composting or anaerobic digestion.
- *Technical Nutrients:* High-grade durable materials (metals, semiconductors, synthetic polymers) designed to circulate continuously through closed-loop loops:
  - *Inner Loops (Highest Value):* Maintenance, repair, and refurbishment.
  - *Middle Loops:* Remanufacturing and component harvesting.
  - *Outer Loops:* High-efficiency elemental material recycling.
"""),
            ("VIT Faculty Exam Insights & Common Traps", """
- *EIA Categorization Trap:* In VIT exams, explain the difference between Category A and Category B projects under the EIA Notification 2006. Category A projects require mandatory EIA without screening; Category B1 requires EIA, while B2 is exempt.
- *Public Hearing Safeguard:* Always emphasize that the Public Hearing is legally mandatory; failure to record public feedback renders an Environmental Clearance null and void in the National Green Tribunal (NGT).
"""),
            ("Quick Self-Test Checklist Before Your Exam", """
1. Can you draw the complete 8-step flowchart of an Environmental Impact Assessment?
2. What are the three core pillars of the Brundtland sustainable development model?
3. What are the 4 standardized phases of an ISO 14040 Life Cycle Assessment?
4. How do technical nutrients differ from biological nutrients in a circular economy?
""")
        ]
    }
]

def generate_typst_file(module_data, output_path):
    table_headers_str = ", ".join(f"[*{h}*]" for h in module_data["table_headers"])
    table_rows_str = ""
    for r in module_data["table_rows"]:
        table_rows_str += f"  [{r[0]}], [{r[1]}], [{r[2]}],\n"

    sections_str = ""
    for s_title, s_body in module_data["sections"]:
        sections_str += f"\n= {s_title}\n\n{s_body}\n"

    typst_content = f"""
#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.2cm, right: 2.2cm),
  header: context {{
    if here().page() > 1 {{
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: luma(90))[VIT {module_data["code"]} --- Module {module_data["num"]}: {module_data["short_title"]}]],
        align(right)[#text(size: 8.5pt, fill: luma(90), style: "italic")[VIT FAT Study Textbook]]
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
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT {module_data["code"]} --- Module {module_data["num"]}: {module_data["short_title"]}] \\
  #v(2mm)
  #text(size: 15pt, weight: "black")[MODULE {module_data["num"]}: {module_data["title"]}] \\
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[({module_data["co"]})] \\
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Complete Study Textbook, Step-by-Step Derivations & VIT FAT Question Bank] \\
  #text(size: 9pt, fill: luma(100))[Aligned with VIT {module_data["code"]} Official Syllabus, VIT Department Question Bank, and VIT FAT Past Papers]
]

#v(3mm)
#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 9pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Textbook (All Syllabus Topics):]
  {module_data["scope"]}
]

#v(2mm)
#outline(title: "Contents", depth: 2, indent: auto)
#v(2mm)

= VIT FAT Exam Blueprint & Master Formula Sheet for Module {module_data["num"]}

{module_data["blueprint"]}

#v(2mm)
#table(
  columns: (2.2fr, 3.2fr, 2.6fr),
  stroke: 0.5pt + luma(180),
  inset: 6.5pt,
  {table_headers_str},
{table_rows_str}
)

{sections_str}
"""
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(typst_content)

def main():
    os.makedirs("public/pdfs/environmental", exist_ok=True)
    for m in EVS_MODULES:
        typ_path = f"public/pdfs/environmental/EVS_MOD-{m['num']}.typ"
        pdf_path = f"public/pdfs/environmental/EVS_MOD-{m['num']}.pdf"
        generate_typst_file(m, typ_path)
        print(f"Generated {typ_path}")
        cmd = f"/opt/homebrew/bin/typst compile '{typ_path}' '{pdf_path}'"
        res = subprocess.run(cmd, shell=True, capture_output=True, text=True)
        if res.returncode != 0:
            print(f"Error compiling {typ_path}:", res.stderr)
        else:
            print(f"Successfully compiled {pdf_path}")

if __name__ == "__main__":
    main()
