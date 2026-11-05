export const environmentalCourse = {
  id: 'BCHY102',
  code: 'BCHY102T',
  title: 'Environmental Sciences',
  shortTitle: 'Environmental Sciences',
  category: 'University Core',
  credits: 2,
  semester: 'Fall Semester 2026-27',
  color: 'emerald',
  badge: '100% Online CBT MCQ Examination',
  isMCQExam: true,
  description: 'Complete CBT Study Textbook, High-Yield Multiple Choice Question (MCQ) Bank & Step-by-Step Rationales aligned with official VIT BCHY102T Online CBT Exam Syllabus, VTOP / Moodle Question Bank & Past Papers.',
  targetMarks: {
    cat1: '50 Marks CBT MCQs (Modules 1 & 2)',
    cat2: '50 Marks CBT MCQs (Modules 3 & 4)',
    fat: '100 Marks CBT MCQs (All 5 Modules — 50 to 100 Objective Questions)'
  },
  modules: [
    {
      id: 'evs-m1',
      moduleNum: 1,
      pdfUrl: '/pdfs/environmental/EVS_MOD-1.pdf',
      title: 'Fundamentals of Environment and Ecosystems',
      co: 'CO: 1',
      examScope: 'CAT-1 & FAT (CBT MCQ)',
      weightage: '20% of CBT Exam',
      status: 'not_confident',
      scope: 'Definition and scope of environmental science, Earth as a life-support system (Lithosphere, Hydrosphere, Atmosphere, Biosphere), Ecosystem definition, biotic and abiotic components, Structure and function: Food chains (grazing & detritus), Food webs, Trophic levels, Energy flow and Lindeman\'s 10% rule, Ecological pyramids (numbers, biomass, energy), and Biogeochemical cycles (Carbon and Nitrogen cycles).',
      blueprint: {
        marksTotal: '20% of CBT Exam (approx 15-20 MCQs)',
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
          question: 'Which ecological pyramid is NEVER inverted under any terrestrial or aquatic condition?',
          options: [
            'A. Pyramid of Numbers',
            'B. Pyramid of Biomass in marine ecosystems',
            'C. Pyramid of Energy',
            'D. Pyramid of Biomass in tree ecosystems'
          ],
          correct: 'C',
          rationale: 'Energy flow obeys the Second Law of Thermodynamics: energy is lost as heat at each transfer, so higher trophic levels always receive strictly less energy than lower levels.'
        },
        {
          id: 'evs-mcq-1-2',
          question: 'In the biological Nitrogen cycle, which specific bacterium oxidizes nitrite (NO2-) to nitrate (NO3-)?',
          options: [
            'A. Rhizobium',
            'B. Nitrosomonas',
            'C. Nitrobacter',
            'D. Clostridium'
          ],
          correct: 'C',
          rationale: 'Nitrosomonas oxidizes ammonia (NH4+) to nitrite (NO2-), while Nitrobacter carries out the second oxidation step from nitrite (NO2-) to nitrate (NO3-).'
        },
        {
          id: 'evs-mcq-1-3',
          question: 'If net primary production in a grassland is 20,000 kcal/m²/yr, how much energy is expected at the tertiary consumer level under Lindeman\'s 10% rule?',
          options: [
            'A. 2,000 kcal/m²/yr',
            'B. 200 kcal/m²/yr',
            'C. 20 kcal/m²/yr',
            'D. 2 kcal/m²/yr'
          ],
          correct: 'C',
          rationale: 'Producers = 20,000 -> Herbivores (10%) = 2,000 -> Secondary consumers (10%) = 200 -> Tertiary consumers (10%) = 20 kcal/m²/yr.'
        },
        {
          id: 'evs-mcq-1-4',
          question: 'An inverted pyramid of biomass is characteristically observed in which of the following biomes?',
          options: [
            'A. Tropical Rainforest',
            'B. Open Ocean / Marine ecosystem',
            'C. Temperate Grassland',
            'D. Desert Scrub'
          ],
          correct: 'B',
          rationale: 'Phytoplankton reproduce and turn over extremely rapidly, so their instantaneous standing dry biomass is lower than that of the zooplankton feeding on them.'
        }
      ]
    },
    {
      id: 'evs-m2',
      moduleNum: 2,
      pdfUrl: '/pdfs/environmental/EVS_MOD-2.pdf',
      title: 'Biodiversity and Environmental Quality',
      co: 'CO: 2',
      examScope: 'CAT-1 & FAT (CBT MCQ)',
      weightage: '20% of CBT Exam',
      status: 'need_to_revise',
      scope: 'Biodiversity: Definition, genetic, species, and ecosystem diversity, Consumptive and productive values, Global biodiversity hotspots and Megadiverse countries (Norman Myers criteria: >=1500 endemic vascular plants, >=70% habitat lost), Threats: Habitat loss, poaching, invasive alien species, IUCN Red Data Book categories (Extinct, Critically Endangered, Endangered, Vulnerable), In-situ conservation (National Parks, Sanctuaries, Biosphere Reserves) vs Ex-situ conservation (Gene banks, Cryopreservation, Botanical gardens), and GM crops.',
      blueprint: {
        marksTotal: '20% of CBT Exam',
        questionTypes: [
          { type: 'CBT MCQ Category 1', desc: 'Hotspot criteria, Indian hotspots (Western Ghats, Indo-Burma, Himalayas, Sundaland), and endemic flora/fauna.' },
          { type: 'CBT MCQ Category 2', desc: 'In-situ vs Ex-situ conservation techniques and IUCN Red List threat criteria.' }
        ]
      },
      formulaSheet: [
        { name: 'Myers Hotspot Criteria', formula: '\\ge 1500 \\text{ endemic vascular plants} \\quad \\& \\quad \\ge 70\\% \\text{ primary habitat lost}', note: '36 global hotspots; 4 cover India' }
      ],
      examInsights: [
        {
          title: 'National Park vs Wildlife Sanctuary',
          desc: 'National Parks have the highest legal protection (IUCN Cat II): human habitation, grazing, and private rights are strictly prohibited. In Wildlife Sanctuaries (IUCN Cat IV), regulated traditional grazing is permitted.'
        }
      ],
      topics: [
        {
          id: 'evs-t2-1',
          title: 'Topic 1: Biodiversity Levels & Hotspots',
          theory: 'Biodiversity sustains ecological resilience across genetic, species, and habitat levels. Hotspots are exceptional reservoirs of endemic species undergoing severe habitat destruction.'
        },
        {
          id: 'evs-t2-2',
          title: 'Topic 2: Conservation Protocols & IUCN Classifications',
          theory: 'In-situ preserves entire dynamic ecosystems in their native landscapes. Ex-situ protects endangered germplasm in controlled facilities like cryo-vaults and seed banks.'
        }
      ],
      mcqs: [
        {
          id: 'evs-mcq-2-1',
          question: 'To be designated as a global biodiversity hotspot under Norman Myers\' criteria, an area must contain at least how many endemic vascular plant species?',
          options: [
            'A. 500',
            'B. 1,000',
            'C. 1,500',
            'D. 2,500'
          ],
          correct: 'C',
          rationale: 'The primary qualification threshold is >= 1,500 endemic vascular plant species and the loss of at least 70% of original primary habitat.'
        },
        {
          id: 'evs-mcq-2-2',
          question: 'Which of the following is an example of an ex-situ conservation strategy?',
          options: [
            'A. Jim Corbett National Park',
            'B. Sundarbans Biosphere Reserve',
            'C. National Gene and Seed Vault',
            'D. Mudumalai Wildlife Sanctuary'
          ],
          correct: 'C',
          rationale: 'Ex-situ conservation preserves biological genetic material outside the natural habitat (e.g., seed banks, cryopreservation, botanical gardens).'
        },
        {
          id: 'evs-mcq-2-3',
          question: 'Which Indian biodiversity hotspot encompasses the Nicobar Islands?',
          options: [
            'A. Western Ghats',
            'B. Indo-Burma',
            'C. Sundaland',
            'D. Eastern Himalayas'
          ],
          correct: 'C',
          rationale: 'The Nicobar group of islands forms an integral part of the Sundaland hotspot, which also spans Malaysia, Indonesia, and Singapore.'
        },
        {
          id: 'evs-mcq-2-4',
          question: 'In which protected area category are livestock grazing, private land ownership, and timber harvesting totally prohibited by Indian law?',
          options: [
            'A. Wildlife Sanctuary',
            'B. National Park',
            'C. Biosphere Reserve buffer zone',
            'D. Reserved Forest'
          ],
          correct: 'B',
          rationale: 'Under the Wildlife Protection Act 1972, National Parks have total prohibition of human exploitation, grazing, and private ownership rights.'
        }
      ]
    },
    {
      id: 'evs-m3',
      moduleNum: 3,
      pdfUrl: '/pdfs/environmental/EVS_MOD-3.pdf',
      title: 'Pollution and Its Management Techniques',
      co: 'CO: 3',
      examScope: 'CAT-2 & FAT (CBT MCQ)',
      weightage: '25% of CBT Exam',
      status: 'not_confident',
      scope: 'Air, water, soil, noise, thermal, and radiation pollution: Causes, effects, and engineering control devices, Air emission controls: Cyclone separators, Electrostatic Precipitators (ESP), Wet scrubbers, Water pollution: Biochemical Oxygen Demand (BOD), Chemical Oxygen Demand (COD), Eutrophication stages, Wastewater treatment engineering: Primary, Secondary (Activated Sludge Process), and Tertiary treatment, Water management: Water footprint, Virtual water, and Hazardous solid waste handling.',
      blueprint: {
        marksTotal: '25% of CBT Exam (Highest Weightage)',
        questionTypes: [
          { type: 'CBT MCQ Category 1', desc: 'BOD vs COD mathematical relations, 5-day BOD incubation tests, and dissolved oxygen sag curves.' },
          { type: 'CBT MCQ Category 2', desc: 'Air pollution control technologies (ESP corona discharge, wet scrubber FGD) and secondary activated sludge aeration.' }
        ]
      },
      formulaSheet: [
        { name: 'BOD vs COD Invariant', formula: '\\text{COD} \\ge \\text{BOD} \\quad (\\text{Always strictly true})', note: 'COD oxidizes both biodegradable & non-biodegradable organics' },
        { name: 'BOD Biodegradability Ratio', formula: '\\frac{\\text{BOD}}{\\text{COD}} > 0.6 \\implies \\text{Biodegradable}', note: '< 0.3 indicates refractory/toxic wastewater' }
      ],
      examInsights: [
        {
          title: 'COD is Always >= BOD',
          desc: 'VIT Moodle test traps: COD oxidizes everything using boiling K2Cr2O7 in concentrated H2SO4, whereas BOD only oxidizes biologically degradable matter. Hence COD is always >= BOD.'
        }
      ],
      topics: [
        {
          id: 'evs-t3-1',
          title: 'Topic 1: Air Abatement & Electrostatic Precipitators',
          theory: 'Electrostatic precipitators achieve >99% collection of fine fly ash (PM2.5, PM10) by imparting negative charge via high-voltage corona wires and precipitating particles onto grounded collector plates.'
        },
        {
          id: 'evs-t3-2',
          title: 'Topic 2: Water Quality, BOD/COD & Eutrophication',
          theory: 'Eutrophication occurs when excess nitrogen and phosphorus cause algal blooms. Decomposition of dead biomass by aerobic bacteria depletes dissolved oxygen (DO < 2 mg/L), causing widespread fish asphyxiation.'
        }
      ],
      mcqs: [
        {
          id: 'evs-mcq-3-1',
          question: 'Which air pollution control device is most effective (>99%) for capturing fine particulate matter (PM2.5 and PM10) from coal-fired power plant stacks?',
          options: [
            'A. Gravity Settling Chamber',
            'B. Cyclone Separator',
            'C. Electrostatic Precipitator (ESP)',
            'D. Spray Chamber'
          ],
          correct: 'C',
          rationale: 'Electrostatic precipitators utilize high-voltage corona discharge to ionize fine particles and electrostatically precipitate them onto grounded collection plates with >99% efficiency.'
        },
        {
          id: 'evs-mcq-3-2',
          question: 'For any wastewater effluent sample, which mathematical relationship between COD and BOD is always true?',
          options: [
            'A. COD < BOD',
            'B. COD = BOD / 2',
            'C. COD >= BOD',
            'D. COD is completely independent of BOD'
          ],
          correct: 'C',
          rationale: 'COD measures all chemically oxidizable organic matter (both biodegradable and recalcitrant), whereas BOD measures only biologically degradable organics. Therefore, COD is always >= BOD.'
        },
        {
          id: 'evs-mcq-3-3',
          question: 'In an Activated Sludge biological wastewater treatment plant, organic matter is consumed primarily by:',
          options: [
            'A. Anaerobic methanogens',
            'B. Aerobic microbial flocs in suspension',
            'C. Coagulants like alum',
            'D. Ultraviolet light lamps'
          ],
          correct: 'B',
          rationale: 'Activated sludge systems use air diffusers in aeration tanks where suspended aerobic microbial flocs oxidize dissolved organic matter into carbon dioxide, water, and new biomass.'
        },
        {
          id: 'evs-mcq-3-4',
          question: 'The primary limiting nutrients whose agricultural runoff triggers cultural eutrophication in aquatic lakes are:',
          options: [
            'A. Sodium and Potassium',
            'B. Nitrogen and Phosphorus',
            'C. Calcium and Magnesium',
            'D. Silicon and Sulfur'
          ],
          correct: 'B',
          rationale: 'Nitrogen and phosphorus are key plant nutrients; their excessive runoff from synthetic fertilizers triggers explosive algal blooms and subsequent dissolved oxygen collapse.'
        }
      ]
    },
    {
      id: 'evs-m4',
      moduleNum: 4,
      pdfUrl: '/pdfs/environmental/EVS_MOD-4.pdf',
      title: 'Environmental Laws, Policies & Renewable Energy',
      co: 'CO: 4',
      examScope: 'CAT-2 & FAT (CBT MCQ)',
      weightage: '20% of CBT Exam',
      status: 'strong',
      scope: 'Indian environmental legislation: The Wildlife Protection Act 1972, The Water Act 1974 (CPCB/SPCB creation), The Air Act 1981 (1987 amendment including Noise), The Environment (Protection) Act 1986 (Umbrella act after Bhopal disaster), Constitutional Articles 48A and 51A(g), International treaties: Montreal Protocol (1987, ODS phase-out), Kyoto Protocol (1997, 6 greenhouse gases and CDM), Paris Agreement (1.5°C limit), UN Sustainable Development Goals (SDG 1-17), and Renewable energy (solar, wind, biomass, hydrogen, electric vehicles).',
      blueprint: {
        marksTotal: '20% of CBT Exam',
        questionTypes: [
          { type: 'CBT MCQ Category 1', desc: 'Act enactment years: 1972 (Wildlife), 1974 (Water), 1981 (Air), 1986 (EPA), and 1987 Noise amendment.' },
          { type: 'CBT MCQ Category 2', desc: 'International protocols (Montreal ODS vs Kyoto CDM vs Paris 1.5°C) and specific UN SDGs.' }
        ]
      },
      formulaSheet: [
        { name: 'Milestone Act Enactments', formula: '\\text{Wildlife (1972) } \\to \\text{ Water (1974) } \\to \\text{ Air (1981) } \\to \\text{ EPA (1986)}', note: 'Noise added to Air Act in 1987' },
        { name: 'Key UN SDGs', formula: '\\text{SDG 6: Clean Water, SDG 7: Clean Energy, SDG 13: Climate Action}', note: 'Target year: 2030' }
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
          title: 'Topic 2: Montreal, Kyoto & Paris International Protocols',
          theory: 'Montreal Protocol phased out CFCs and ozone-depleting substances. Kyoto Protocol created legally binding GHG targets and carbon credits. Paris Agreement targets limiting warming to 1.5°C.'
        }
      ],
      mcqs: [
        {
          id: 'evs-mcq-4-1',
          question: 'In India, the Environment (Protection) Act was passed in which year following the catastrophic Bhopal Gas Tragedy?',
          options: [
            'A. 1974',
            'B. 1981',
            'C. 1986',
            'D. 1991'
          ],
          correct: 'C',
          rationale: 'Enacted in May 1986 under Article 253 of the Constitution to serve as comprehensive umbrella legislation following the December 1984 Union Carbide Bhopal disaster.'
        },
        {
          id: 'evs-mcq-4-2',
          question: 'In which year was the Air (Prevention and Control of Pollution) Act amended to officially incorporate "Noise" as an air pollutant?',
          options: [
            'A. 1981',
            'B. 1984',
            'C. 1987',
            'D. 1992'
          ],
          correct: 'C',
          rationale: 'The Air Act was originally passed in 1981 and amended in 1987 to bring noise within the statutory purview of air pollution.'
        },
        {
          id: 'evs-mcq-4-3',
          question: 'The Montreal Protocol (1987) is an international agreement successfully mandated to phase out:',
          options: [
            'A. Carbon dioxide and methane emissions',
            'B. Ozone-depleting substances such as CFCs and Halons',
            'C. Persistent heavy metal discharge into rivers',
            'D. Global electronic and radioactive waste trade'
          ],
          correct: 'B',
          rationale: 'The Montreal Protocol was designed to protect the stratospheric ozone layer by systematically phasing out the production and consumption of ozone-depleting substances (ODS).'
        },
        {
          id: 'evs-mcq-4-4',
          question: 'Which United Nations Sustainable Development Goal (SDG) is explicitly dedicated to "Climate Action"?',
          options: [
            'A. SDG 6',
            'B. SDG 7',
            'C. SDG 11',
            'D. SDG 13'
          ],
          correct: 'D',
          rationale: 'SDG 13 focuses specifically on Climate Action; SDG 6 is Clean Water and Sanitation; SDG 7 is Affordable and Clean Energy.'
        }
      ]
    },
    {
      id: 'evs-m5',
      moduleNum: 5,
      pdfUrl: '/pdfs/environmental/EVS_MOD-5.pdf',
      title: 'Climate Change, Emerging Issues & EIA',
      co: 'CO: 5',
      examScope: 'FAT Only (CBT MCQ)',
      weightage: '15-20% of CBT Exam',
      status: 'yet_to_start',
      scope: 'Climate change science, Enhanced greenhouse effect, Global Warming Potential (GWP: CO2=1, CH4=28, N2O=265, SF6=23500), Carbon footprint, Technological tools: Role of AI and IoT in environmental monitoring and disaster forecasting, Environmental Impact Assessment (EIA Notification 2006): Objectives, Category A vs Category B projects, The 4 sequential stages of EIA: Screening, Scoping, Public Consultation (Public Hearing), and Appraisal, Environmental Management Plan (EMP).',
      blueprint: {
        marksTotal: '15 to 20% of CBT Exam',
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
    }
  ]
};
