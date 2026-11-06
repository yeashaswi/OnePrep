export const environmentalCourse = {
  id: 'BCHY102',
  code: 'BACHY101 / BCHY102T',
  title: 'Environmental Sciences (Online Course)',
  shortTitle: 'Environmental Sciences',
  category: 'University Core',
  credits: 2,
  semester: 'Fall Semester 2026-27',
  color: 'emerald',
  badge: '100% Online CBT MCQ Exam (21-Nov-2026, 09:00 - 10:00 AM)',
  isMCQExam: true,
  description: 'Complete CBT Study Textbook, High-Yield Multiple Choice Question (MCQ) Bank & Step-by-Step Rationales aligned with official VIT Moodle LMS 6-Week Curriculum, VTOP Question Bank & Past Papers.',
  targetMarks: {
    cat1: '50 Marks CBT MCQs (Weeks 1 & 2)',
    cat2: '50 Marks CBT MCQs (Weeks 3 & 4)',
    fat: '100 Marks CBT MCQs (Weeks 1 to 6 — 50 to 100 Objective Questions in 60 Minutes)'
  },
  modules: [
    {
      id: 'evs-m1',
      moduleNum: 1,
      pdfUrl: '/pdfs/environmental/EVS_MOD-1.pdf',
      title: 'Week 1: Fundamentals of Environment and Ecosystems',
      co: 'CO: 1',
      examScope: 'CAT-1 & FAT (CBT MCQ)',
      weightage: '15-20% of CBT Exam',
      status: 'not_confident',
      scope: 'Definition and scope of environmental science, Earth as a life-support system (Lithosphere, Hydrosphere, Atmosphere, Biosphere), Ecosystem definition, biotic and abiotic components, Structure and function: Food chains (grazing & detritus), Food webs, Trophic levels, Energy flow and Lindeman\'s 10% rule, Ecological pyramids (numbers, biomass, energy), and Biogeochemical cycles (Carbon and Nitrogen cycles).',
      blueprint: {
        marksTotal: '15-20% of CBT Exam (approx 15-20 MCQs)',
        questionTypes: [
          { type: 'CBT MCQ Category 1', desc: 'Lindemans 10% ecological energy transfer calculations and reasons why the Pyramid of Energy is strictly upright.' },
          { type: 'CBT MCQ Category 2', desc: 'Nitrogen cycle microbial transformations: Nitrosomonas vs Nitrobacter vs Rhizobium vs Pseudomonas denitrificans.' }
        ]
      },
      formulaSheet: [
        { name: 'Lindemans 10% Law', formula: '\\text{Trophic Efficiency} = \\frac{P_n}{P_{n-1}} \\times 100 \\approx 10\\%', note: 'Thermodynamic heat dissipation limits food chains to 4-5 levels' },
        { name: 'Photosynthesis vs Respiration', formula: '6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\rightleftharpoons \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2', note: 'Autotrophic carbon fixation' }
      ],
      examInsights: [
        {
          title: 'Pyramid of Energy Rule (VIT CBT Classic)',
          desc: 'VIT Moodle questions repeatedly test: "Which pyramid can never be inverted?" The answer is strictly Pyramid of Energy, due to the Second Law of Thermodynamics.'
        }
      ],
      topics: [
        {
          id: 'evs-t1-1',
          title: 'Topic 1: Ecosystem Structure & Energy Flow',
          theory: 'An ecosystem consists of biotic communities interacting with abiotic factors. Energy flows unidirectionally from the sun through autotrophic producers to consumers, dissipating 90% as metabolic heat at each trophic transition.'
        },
        {
          id: 'evs-t1-2',
          title: 'Topic 2: Biogeochemical Nitrogen Cycling',
          theory: 'Atmospheric N2 is biologically fixed by diazotrophs (Rhizobium, Azotobacter). Nitrosomonas oxidizes ammonia to nitrite, and Nitrobacter oxidizes nitrite to nitrate, which plants assimilate.'
        }
      ],
      mcqs: [
        {
          id: 'evs-mcq-1-1',
          question: 'According to Lindeman\'s 10% law of ecological efficiency, if primary producers synthesize 10,000 Joules of energy, how much energy is available to tertiary consumers?',
          options: [
            'A. 1,000 J',
            'B. 100 J',
            'C. 10 J',
            'D. 1 J'
          ],
          correct: 'C',
          rationale: 'Producers (10,000 J) -> Primary Consumers / Herbivores (1,000 J) -> Secondary Consumers (100 J) -> Tertiary Consumers (10 J). Only ~10% is passed to each successive trophic level.'
        },
        {
          id: 'evs-mcq-1-2',
          question: 'Which of the following ecological pyramids can NEVER be inverted in any natural terrestrial or aquatic ecosystem?',
          options: [
            'A. Pyramid of Numbers',
            'B. Pyramid of Biomass',
            'C. Pyramid of Energy',
            'D. Both Pyramid of Numbers and Biomass'
          ],
          correct: 'C',
          rationale: 'The Pyramid of Energy is always strictly upright because energy is lost as metabolic heat at each trophic transition in compliance with the Second Law of Thermodynamics.'
        },
        {
          id: 'evs-mcq-1-3',
          question: 'In the biological nitrogen cycle, which genus of chemoautotrophic bacteria is responsible for oxidizing toxic nitrites (NO2-) into bioavailable nitrates (NO3-)?',
          options: [
            'A. Nitrosomonas',
            'B. Nitrobacter',
            'C. Rhizobium',
            'D. Pseudomonas'
          ],
          correct: 'B',
          rationale: 'Nitrosomonas oxidizes ammonia into nitrites (2NH3 + 3O2 -> 2NO2- + 2H+ + 2H2O), while Nitrobacter oxidizes nitrites into nitrates (2NO2- + O2 -> 2NO3-).'
        },
        {
          id: 'evs-mcq-1-4',
          question: 'Which biogeochemical cycle does NOT possess a significant gaseous atmospheric reservoir phase?',
          options: [
            'A. Nitrogen cycle',
            'B. Carbon cycle',
            'C. Phosphorus cycle',
            'D. Sulfur cycle'
          ],
          correct: 'C',
          rationale: 'The phosphorus cycle is a sedimentary cycle; its primary reservoirs are mineral rocks and ocean sediments, with negligible atmospheric gaseous exchange.'
        }
      ]
    },
    {
      id: 'evs-m2',
      moduleNum: 2,
      pdfUrl: '/pdfs/environmental/EVS_MOD-2.pdf',
      title: 'Week 2: Biodiversity and Environmental Quality',
      co: 'CO: 2',
      examScope: 'CAT-1 & FAT (CBT MCQ)',
      weightage: '20% of CBT Exam',
      status: 'need_to_revise',
      scope: 'Levels of biodiversity (Genetic, Species, Ecosystem diversity), Biodiversity Hotspots (Criteria: >=1,500 endemic vascular plant species and >=70% habitat loss), India\'s 4 Biodiversity Hotspots (Western Ghats & Sri Lanka, Indo-Burma, Eastern Himalaya, Sundaland/Nicobar), In-situ vs. Ex-situ conservation methods, Red Data Book categories (IUCN), Value of biodiversity, and Air and Water quality parameters.',
      blueprint: {
        marksTotal: '20% of CBT Exam',
        questionTypes: [
          { type: 'CBT MCQ Category 1', desc: 'Identification of In-situ (National Parks, Sanctuaries, Biosphere Reserves) vs Ex-situ (Cryopreservation, Botanical Gardens, Seed banks) conservation.' },
          { type: 'CBT MCQ Category 2', desc: 'Norman Myers Hotspot qualification benchmarks and the 4 Indian hotspots.' }
        ]
      },
      formulaSheet: [
        { name: 'Norman Myers Hotspot Criteria', formula: '\\ge 1,500 \\text{ Endemic Vascular Plants} \\quad \\& \\quad \\le 30\\% \\text{ Original Habitat Remaining}', note: 'Global critical conservation priority' },
        { name: 'Shannon-Wiener Diversity Index', formula: 'H\' = -\\sum p_i \\ln(p_i)', note: 'Measures species richness and evenness' }
      ],
      examInsights: [
        {
          title: 'In-situ vs Ex-situ Classification Rule',
          desc: 'VIT Moodle questions repeatedly test whether botanical gardens, zoological parks, and seed banks are in-situ or ex-situ. Remember: If organisms are maintained outside their natural evolutionary habitat, it is EX-SITU.'
        }
      ],
      topics: [
        {
          id: 'evs-t2-1',
          title: 'Topic 1: Biodiversity Hotspots & Endemism',
          theory: 'Biodiversity hotspots represent biogeographical regions with significant biodiversity reservoirs that are under severe anthropogenic threat. India hosts 4 of the world\'s 36 global hotspots.'
        },
        {
          id: 'evs-t2-2',
          title: 'Topic 2: Conservation Protocols',
          theory: 'In-situ conservation protects species in natural ecosystems (e.g. Project Tiger, Biosphere Reserves). Ex-situ preserves genetic germplasm off-site under cryopreservation or controlled environments.'
        }
      ],
      mcqs: [
        {
          id: 'evs-mcq-2-1',
          question: 'Which of the following is strictly an EX-SITU method of biodiversity conservation?',
          options: [
            'A. Biosphere Reserve',
            'B. National Park',
            'C. Botanical Garden & Seed Bank',
            'D. Wildlife Sanctuary'
          ],
          correct: 'C',
          rationale: 'Botanical gardens, zoos, gene banks, and cryopreservation maintain species outside their natural evolutionary habitats, making them ex-situ methods.'
        },
        {
          id: 'evs-mcq-2-2',
          question: 'To be designated as a Global Biodiversity Hotspot under Norman Myers\' criteria, a region must contain at least how many endemic species of vascular plants?',
          options: [
            'A. 500 species',
            'B. 1,000 species',
            'C. 1,500 species',
            'D. 2,500 species'
          ],
          correct: 'C',
          rationale: 'The two quantitative criteria are: (1) It must contain at least 1,500 species of vascular plants (>0.5% of the world total) as endemics, and (2) It must have lost at least 70% of its primary native vegetation.'
        },
        {
          id: 'evs-mcq-2-3',
          question: 'Which of the following global biodiversity hotspots covers the Andaman & Nicobar group of islands and extends into southern Thailand and Indonesia?',
          options: [
            'A. Eastern Himalaya',
            'B. Indo-Burma',
            'C. Sundaland',
            'D. Western Ghats'
          ],
          correct: 'C',
          rationale: 'The Nicobar Islands form part of the Sundaland biodiversity hotspot, which extends across the Indo-Malayan archipelago.'
        },
        {
          id: 'evs-mcq-2-4',
          question: 'The Red Data Book, which catalogs threatened and endangered species across the globe, is published by which international agency?',
          options: [
            'A. UNEP',
            'B. IUCN (International Union for Conservation of Nature)',
            'C. WWF',
            'D. UNESCO'
          ],
          correct: 'B',
          rationale: 'The IUCN Red List of Threatened Species was established in 1964 and assesses the global extinction risk of thousands of species.'
        }
      ]
    },
    {
      id: 'evs-m3',
      moduleNum: 3,
      pdfUrl: '/pdfs/environmental/EVS_MOD-3.pdf',
      title: 'Week 3: Pollution and its Management Techniques',
      co: 'CO: 3',
      examScope: 'CAT-2 & FAT (CBT MCQ)',
      weightage: '20% of CBT Exam',
      status: 'yet_to_start',
      scope: 'Air pollution: Criteria air pollutants (PM2.5, PM10, SOx, NOx, CO, O3, Pb), Primary vs. secondary pollutants, Photochemical smog (NOx + VOCs + sunlight -> Ozone, PAN), Acid rain mechanism (H2SO4, HNO3, pH < 5.6), Water pollution: Point vs non-point sources, Biochemical Oxygen Demand (BOD) vs Chemical Oxygen Demand (COD), Wastewater treatment stages: Primary (screening, sedimentation), Secondary (activated sludge biological oxidation), Tertiary (disinfection, reverse osmosis), and Solid waste management.',
      blueprint: {
        marksTotal: '20% of CBT Exam',
        questionTypes: [
          { type: 'CBT MCQ Category 1', desc: 'BOD vs COD ratios: COD is strictly >= BOD because potassium dichromate chemically oxidizes both biodegradable and non-biodegradable organics.' },
          { type: 'CBT MCQ Category 2', desc: 'Photochemical smog chemical prerequisites and electrostatic precipitator particulate collection mechanisms.' }
        ]
      },
      formulaSheet: [
        { name: 'BOD Calculation Formula', formula: '\\text{BOD}_5 = (D_0 - D_5) \\times \\text{Dilution Factor}', note: 'Measured after 5 days incubation at 20 °C' },
        { name: 'COD vs BOD Empirical Relation', formula: '\\text{COD} \\ge \\text{BOD}_5', note: 'Strong K2Cr2O7 oxidant digests non-biodegradable refractory organics' }
      ],
      examInsights: [
        {
          title: 'The COD >= BOD Inequality (Exam Classic)',
          desc: 'VIT exams test whether COD can ever be less than BOD. COD is always GREATER THAN or EQUAL TO BOD because chemical oxidants oxidize both biologically degradable and inert organics.'
        }
      ],
      topics: [
        {
          id: 'evs-t3-1',
          title: 'Topic 1: Photochemical Smog & Atmospheric Chemistry',
          theory: 'Photochemical smog forms in warm, sunny urban regions from primary emissions of nitrogen oxides (NOx) and volatile organic compounds (VOCs). Photolysis produces tropospheric ozone and Peroxyacetyl Nitrate (PAN).'
        },
        {
          id: 'evs-t3-2',
          title: 'Topic 2: Water Quality & Wastewater Treatment',
          theory: 'Sewage treatment utilizes primary physical screening, secondary microbial activated sludge biological oxidation, and tertiary advanced disinfection to reduce BOD and pathogen loads.'
        }
      ],
      mcqs: [
        {
          id: 'evs-mcq-3-1',
          question: 'Why is the Chemical Oxygen Demand (COD) of a municipal wastewater sample consistently greater than its Biochemical Oxygen Demand (BOD)?',
          options: [
            'A. COD uses living aerobic bacteria that digest more contaminants',
            'B. COD measures both biodegradable and non-biodegradable organic matter via strong chemical oxidation',
            'C. BOD includes inorganic reducing agents, whereas COD does not',
            'D. COD test is conducted at 4 °C preventing microbial death'
          ],
          correct: 'B',
          rationale: 'COD employs a strong chemical oxidant (potassium dichromate in acidic medium) which oxidizes both biodegradable and biologically inert/refractory organic substances, whereas BOD only measures biodegradable organics.'
        },
        {
          id: 'evs-mcq-3-2',
          question: 'Which of the following compounds is classified as a SECONDARY air pollutant formed through photochemical atmospheric reactions?',
          options: [
            'A. Carbon monoxide (CO)',
            'B. Sulfur dioxide (SO2)',
            'C. Peroxyacetyl nitrate (PAN)',
            'D. Nitric oxide (NO)'
          ],
          correct: 'C',
          rationale: 'PAN (Peroxyacetyl nitrate) and tropospheric Ozone are secondary pollutants formed when primary emissions (NOx and VOCs) react in the presence of solar ultraviolet radiation.'
        },
        {
          id: 'evs-mcq-3-3',
          question: 'What is the principal biological mechanism occurring within the Secondary (Biological) Treatment aeration tank of an activated sludge wastewater plant?',
          options: [
            'A. Gravitational settling of large heavy grit particles',
            'B. Aerobic microbial oxidation of dissolved organic matter into biomass, CO2, and water',
            'C. Chlorination for pathogen eradication',
            'D. Heavy metal precipitation by alum addition'
          ],
          correct: 'B',
          rationale: 'Secondary treatment relies on aerobic microorganisms suspended in an agitated aeration basin to consume dissolved organic carbon, converting it into cellular biomass (activated sludge) and CO2.'
        },
        {
          id: 'evs-mcq-3-4',
          question: 'Rainwater is classified as "acid rain" when its measured pH falls below what threshold level?',
          options: [
            'A. pH 7.0',
            'B. pH 6.5',
            'C. pH 5.6',
            'D. pH 4.0'
          ],
          correct: 'C',
          rationale: 'Normal atmospheric unpolluted rain has a pH around 5.6 due to the dissolution of atmospheric CO2 forming weak carbonic acid (H2CO3). Rain with pH below 5.6 is defined as acid rain.'
        }
      ]
    },
    {
      id: 'evs-m4',
      moduleNum: 4,
      pdfUrl: '/pdfs/environmental/EVS_MOD-4.pdf',
      title: 'Week 4: Environmental Laws and Sustainable Development Goals',
      co: 'CO: 4',
      examScope: 'CAT-2 & FAT (CBT MCQ)',
      weightage: '20% of CBT Exam',
      status: 'strong',
      scope: 'Indian environmental legislation: The Wildlife Protection Act 1972, The Water Act 1974 (CPCB/SPCB creation), The Air Act 1981 (1987 amendment including Noise), The Environment (Protection) Act 1986 (Umbrella act enacted under Article 253 after Bhopal disaster), Constitutional Articles 48A and 51A(g), International treaties: Montreal Protocol (1987, ODS phase-out), Kyoto Protocol (1997, 6 greenhouse gases and CDM), Paris Agreement (1.5°C limit), and UN Sustainable Development Goals (SDG 1-17).',
      blueprint: {
        marksTotal: '20% of CBT Exam',
        questionTypes: [
          { type: 'CBT MCQ Category 1', desc: 'Act enactment years: 1972 (Wildlife), 1974 (Water), 1981 (Air), 1986 (EPA), and 1987 Noise amendment.' },
          { type: 'CBT MCQ Category 2', desc: 'International protocols (Montreal ODS vs Kyoto CDM vs Paris 1.5°C) and specific UN SDGs.' }
        ]
      },
      formulaSheet: [
        { name: 'Milestone Act Enactments', formula: '\\text{Wildlife (1972) } \\to \\text{ Water (1974) } \\to \\text{ Air (1981) } \\to \\text{ EPA (1986)}', note: 'Noise added to Air Act in 1987' },
        { name: 'Key UN SDGs', formula: '\\text{SDG 6: Clean Water, SDG 7: Clean Energy, SDG 12: Responsible Consumption, SDG 13: Climate Action}', note: 'Target year: 2030' }
      ],
      examInsights: [
        {
          title: 'Air Act 1987 Noise Amendment',
          desc: 'A frequent VIT CBT question: "In which year was noise pollution included as an air pollutant?" The Air Act was enacted in 1981, but amended to include noise in 1987!'
        }
      ],
      topics: [
        {
          id: 'evs-t4-1',
          title: 'Topic 1: Constitutional Provisions & Indian Environmental Acts',
          theory: 'Article 48A directs the State to protect forests and wildlife; Article 51A(g) establishes a fundamental duty for citizens. The EPA 1986 is umbrella legislation enacted after the Bhopal Gas Tragedy.'
        },
        {
          id: 'evs-t4-2',
          title: 'Topic 2: International Environmental Treaties & UN SDGs',
          theory: 'Montreal Protocol phased out ozone-depleting substances. Kyoto Protocol introduced binding emission limits. UN 2030 Agenda includes 17 SDGs balancing social, economic, and ecological goals.'
        }
      ],
      mcqs: [
        {
          id: 'evs-mcq-4-1',
          question: 'The Environment (Protection) Act, 1986 was enacted by the Parliament of India in the immediate aftermath of which catastrophic industrial tragedy?',
          options: [
            'A. Chernobyl Nuclear Disaster',
            'B. Bhopal Gas Tragedy (Union Carbide methyl isocyanate leak)',
            'C. Minamata Mercury Poisoning',
            'D. London Great Smog'
          ],
          correct: 'B',
          rationale: 'The Bhopal Gas Tragedy in December 1984 demonstrated severe gaps in Indian environmental legislation, prompting the passage of the omnibus Environment (Protection) Act in 1986.'
        },
        {
          id: 'evs-mcq-4-2',
          question: 'In which year was noise pollution officially recognized and incorporated as an environmental pollutant under the Air (Prevention and Control of Pollution) Act, 1981?',
          options: [
            'A. 1981',
            'B. 1986',
            'C. 1987',
            'D. 1992'
          ],
          correct: 'C',
          rationale: 'The Air Act was enacted in 1981 and amended in 1987 under Section 2(a) to explicitly bring noise pollution within the regulatory definition of air pollutants.'
        },
        {
          id: 'evs-mcq-4-3',
          question: 'Which international treaty is considered the most successful environmental agreement in history for achieving the phased global elimination of Chlorofluorocarbons (CFCs)?',
          options: [
            'A. Kyoto Protocol (1997)',
            'B. Basel Convention (1989)',
            'C. Montreal Protocol (1987)',
            'D. Stockholm Convention (2001)'
          ],
          correct: 'C',
          rationale: 'The Montreal Protocol on Substances that Deplete the Ozone Layer (1987) successfully mandated the phase-out of CFCs and halons to protect the stratospheric ozone shield.'
        },
        {
          id: 'evs-mcq-4-4',
          question: 'Which United Nations Sustainable Development Goal (SDG) is specifically dedicated to "Climate Action"?',
          options: [
            'A. SDG 6',
            'B. SDG 7',
            'C. SDG 12',
            'D. SDG 13'
          ],
          correct: 'D',
          rationale: 'SDG 13 focuses on Climate Action; SDG 6 is Clean Water & Sanitation; SDG 7 is Affordable & Clean Energy; SDG 12 is Responsible Consumption & Production.'
        }
      ]
    },
    {
      id: 'evs-m5',
      moduleNum: 5,
      pdfUrl: '/pdfs/environmental/EVS_MOD-5.pdf',
      title: 'Week 5: Climate Change and Emerging Environmental Issues',
      co: 'CO: 5',
      examScope: 'FAT Only (CBT MCQ)',
      weightage: '15% of CBT Exam',
      status: 'yet_to_start',
      scope: 'Climate change science, Enhanced greenhouse effect, Global Warming Potential (GWP: CO2=1, CH4=28, N2O=265, SF6=23500), Carbon footprint, Environmental Impact Assessment (EIA Notification 2006): Objectives, Category A vs Category B projects, The 4 sequential stages of EIA: Screening, Scoping, Public Consultation (Public Hearing), and Appraisal, Environmental Management Plan (EMP).',
      blueprint: {
        marksTotal: '15% of CBT Exam',
        questionTypes: [
          { type: 'CBT MCQ Category 1', desc: 'The 4 sequential stages of EIA (Screening -> Scoping -> Public Consultation -> Appraisal) and Category A (Central) vs Category B (State) clearance.' },
          { type: 'CBT MCQ Category 2', desc: 'Global Warming Potential rankings and functions of the Environmental Management Plan (EMP).' }
        ]
      },
      formulaSheet: [
        { name: 'Global Warming Potentials (100-yr)', formula: '\\text{CO}_2 = 1, \\quad \\text{CH}_4 = 28, \\quad \\text{N}_2\\text{O} = 265, \\quad \\text{SF}_6 = 23,500', note: 'SF6 is thousands of times more potent than CO2' },
        { name: '4 Statutory EIA Stages', formula: '\\text{Screening } \\to \\text{ Scoping } \\to \\text{ Public Consultation } \\to \\text{ Appraisal}', note: 'EIA Notification 2006 sequence' }
      ],
      examInsights: [
        {
          title: 'Sequential Order of EIA Stages',
          desc: 'Questions constantly shuffle the order of the 4 EIA stages. Always remember the correct statutory progression: (1) Screening, (2) Scoping, (3) Public Consultation, (4) Appraisal.'
        }
      ],
      topics: [
        {
          id: 'evs-t5-1',
          title: 'Topic 1: Climate Science & Global Warming Potentials',
          theory: 'Anthropogenic greenhouse gas emissions enhance natural radiative forcing. Global Warming Potential measures the thermal heat trapped by 1 kg of a gas over 100 years relative to CO2.'
        },
        {
          id: 'evs-t5-2',
          title: 'Topic 2: Environmental Impact Assessment Framework',
          theory: 'EIA is a predictive environmental management tool. Under Indian law, proposed projects are categorized into Central Category A and State Category B, undergoing screening, scoping, public hearing, and expert appraisal.'
        }
      ],
      mcqs: [
        {
          id: 'evs-mcq-5-1',
          question: 'What is the correct statutory sequence of the four stages in the Indian EIA Notification 2006 process?',
          options: [
            'A. Scoping -> Screening -> Appraisal -> Public Consultation',
            'B. Screening -> Scoping -> Public Consultation -> Appraisal',
            'C. Public Consultation -> Screening -> Scoping -> Appraisal',
            'D. Screening -> Appraisal -> Scoping -> Public Consultation'
          ],
          correct: 'B',
          rationale: 'Under the 2006 notification, the process begins with Screening (determining if EIA is needed), then Scoping (defining Terms of Reference), Public Consultation (soliciting community feedback), and Appraisal (EAC evaluation).'
        },
        {
          id: 'evs-mcq-5-2',
          question: 'Which of the following greenhouse gases exhibits the highest Global Warming Potential (GWP) per kilogram over a 100-year time horizon?',
          options: [
            'A. Carbon dioxide (CO2)',
            'B. Methane (CH4)',
            'C. Nitrous oxide (N2O)',
            'D. Sulfur hexafluoride (SF6)'
          ],
          correct: 'D',
          rationale: 'Sulfur hexafluoride (SF6) has an immense GWP of ~23,500 and an atmospheric lifetime exceeding 3,000 years, far surpassing CO2, CH4, and N2O.'
        },
        {
          id: 'evs-mcq-5-3',
          question: 'Under the Indian EIA Notification 2006, developmental projects categorized as Category A require prior environmental clearance from:',
          options: [
            'A. State Environment Impact Assessment Authority (SEIAA)',
            'B. District Collector / Magistrate',
            'C. Ministry of Environment, Forest and Climate Change (MoEFCC), New Delhi',
            'D. Central Pollution Control Board (CPCB) Chairman'
          ],
          correct: 'C',
          rationale: 'Category A projects have significant national environmental impacts and require clearance directly from the Central MoEFCC based on recommendations of the Expert Appraisal Committee.'
        },
        {
          id: 'evs-mcq-5-4',
          question: 'Which section of an Environmental Impact Assessment report contains the specific mitigation measures, pollution abatement equipment, and operational monitoring plan?',
          options: [
            'A. Terms of Reference (ToR)',
            'B. Environmental Management Plan (EMP)',
            'C. Baseline Reconnaissance Survey',
            'D. Executive Summary'
          ],
          correct: 'B',
          rationale: 'The Environmental Management Plan (EMP) outlines all action plans, mitigation measures, responsibilities, and financial budgets required during project construction and operation.'
        }
      ]
    },
    {
      id: 'evs-m6',
      moduleNum: 6,
      pdfUrl: '/pdfs/environmental/EVS_MOD-5.pdf',
      title: 'Week 6: Contemporary Topics (Green Building, Carbon Footprint & IoT in Ecology)',
      co: 'CO: 5',
      examScope: 'FAT Only (CBT MCQ)',
      weightage: '10-15% of CBT Exam',
      status: 'yet_to_start',
      scope: 'Carbon Footprinting protocols: Scope 1 (Direct emissions from company facilities/vehicles), Scope 2 (Indirect emissions from purchased electricity/heating), and Scope 3 (All other upstream and downstream supply chain lifecycle emissions), Carbon Credits, Carbon Offsetting and Clean Development Mechanism (CDM), Green Building certification rating systems (GRIHA - Green Rating for Integrated Habitat Assessment in India, LEED, IGBC), Circular Economy and cradle-to-cradle product lifecycles, and Technological innovations: Role of IoT, Remote Sensing, and Artificial Intelligence in wildlife monitoring, smart water management, and disaster forecasting.',
      blueprint: {
        marksTotal: '10-15% of CBT Exam',
        questionTypes: [
          { type: 'CBT MCQ Category 1', desc: 'Scope 1 vs Scope 2 vs Scope 3 greenhouse gas carbon footprint definitions under the GHG Protocol.' },
          { type: 'CBT MCQ Category 2', desc: 'GRIHA green building ratings (developed by TERI & MNRE) and circular economy principles.' }
        ]
      },
      formulaSheet: [
        { name: 'Carbon Footprint Scopes', formula: '\\text{Total Footprint} = \\text{Scope 1 (Direct)} + \\text{Scope 2 (Electricity)} + \\text{Scope 3 (Supply Chain)}', note: 'GHG Protocol Corporate Standard' },
        { name: 'Carbon Credit Equivalent', formula: '1 \\text{ Carbon Credit} = 1 \\text{ Metric Tonne of } \\text{CO}_2\\text{ Equivalent Reduced/Sequestered}', note: 'Certified Emission Reduction (CER)' }
      ],
      examInsights: [
        {
          title: 'Scope 1 vs Scope 2 vs Scope 3 Carbon Footprint (Exam Must-Know)',
          desc: 'VIT Moodle questions repeatedly test scenarios: "A university purchases electricity from the state grid. What scope of emissions does this represent?" Purchased electricity is strictly SCOPE 2. Fuel burned in company vehicles is SCOPE 1. Student commuting is SCOPE 3.'
        }
      ],
      topics: [
        {
          id: 'evs-t6-1',
          title: 'Topic 1: Carbon Footprinting & GHG Emission Scopes',
          theory: 'The Greenhouse Gas Protocol categorizes greenhouse emissions into Scope 1 (direct combustion), Scope 2 (indirect from purchased electricity/steam), and Scope 3 (value chain, product transport, waste disposal).'
        },
        {
          id: 'evs-t6-2',
          title: 'Topic 2: Green Buildings (GRIHA & LEED) & Circular Economy',
          theory: 'GRIHA evaluates energy consumption, water harvesting, and sustainable building materials. Circular economy replaces linear take-make-dispose with closed-loop cradle-to-cradle recycling.'
        }
      ],
      mcqs: [
        {
          id: 'evs-mcq-6-1',
          question: 'Under the international Greenhouse Gas (GHG) Protocol, emissions resulting from purchased electricity, steam, heating, and cooling consumed by an organization are categorized as:',
          options: [
            'A. Scope 1 Emissions',
            'B. Scope 2 Emissions',
            'C. Scope 3 Emissions',
            'D. Fugitive Offsets'
          ],
          correct: 'B',
          rationale: 'Scope 2 accounts for indirect GHG emissions from the generation of purchased electricity, heat, or steam consumed by the reporting company.'
        },
        {
          id: 'evs-mcq-6-2',
          question: 'One certified Carbon Credit (CER) in international carbon trading markets corresponds to the verified reduction or avoidance of:',
          options: [
            'A. 1 kilogram of CO2 equivalent',
            'B. 100 kilograms of CO2 equivalent',
            'C. 1 metric tonne (1,000 kg) of CO2 equivalent',
            'D. 1 megatonne of CO2 equivalent'
          ],
          correct: 'C',
          rationale: 'A single carbon credit is a tradable certificate permitting the holder to emit one metric tonne of carbon dioxide or an equivalent greenhouse gas quantity.'
        },
        {
          id: 'evs-mcq-6-3',
          question: 'What is India\'s national green building rating tool developed jointly by TERI (The Energy and Resources Institute) and the Ministry of New and Renewable Energy (MNRE)?',
          options: [
            'A. LEED India',
            'B. BREEAM',
            'C. GRIHA (Green Rating for Integrated Habitat Assessment)',
            'D. CASBEE'
          ],
          correct: 'C',
          rationale: 'GRIHA was established by TERI and adopted by the Government of India in 2007 as the national green building certification rating system.'
        },
        {
          id: 'evs-mcq-6-4',
          question: 'Which economic model advocates transitioning from the traditional linear "Take-Make-Dispose" model to an regenerative industrial system that designs out waste and keeps materials in continuous circulation?',
          options: [
            'A. Carbon Neutral Economy',
            'B. Circular Economy',
            'C. Subsistence Economy',
            'D. Planned Economy'
          ],
          correct: 'B',
          rationale: 'A Circular Economy is based on three principles: eliminate waste and pollution, circulate products and materials at their highest value (cradle-to-cradle), and regenerate nature.'
        }
      ]
    }
  ]
};
