export const environmentalCourse = {
  "id": "BCHY102",
  "code": "BACHY101 / BCHY102T",
  "title": "Environmental Sciences (Online Course)",
  "shortTitle": "Environmental Sciences",
  "category": "University Core",
  "credits": 2,
  "semester": "Fall Semester 2026-27",
  "color": "emerald",
  "badge": "100% Online CBT MCQ Exam (21-Nov-2026, 09:00 - 10:00 AM)",
  "isMCQExam": true,
  "description": "Complete CBT Study Textbook, Recall Study Mode & Official 4-Week MCQ Bank modeled around evs-vit.vercel.app for the semester 1 EVS Computer-Based Test.",
  "targetMarks": {
    "cat1": "50 Marks CBT MCQs (Weeks 1 & 2)",
    "cat2": "50 Marks CBT MCQs (Weeks 3 & 4)",
    "fat": "100 Marks CBT MCQs (All 4 Weeks \u2014 50 to 100 Objective Questions in 60 Minutes)"
  },
  "modules": [
    {
      "id": "evs-m1",
      "moduleNum": 1,
      "pdfUrl": "/pdfs/environmental/EVS_MOD-1.pdf",
      "title": "Week 1: Fundamentals of Environment and Ecosystems",
      "co": "CO: 1",
      "examScope": "CAT-1 & FAT (CBT MCQ)",
      "weightage": "25% of CBT Exam (approx 25 MCQs)",
      "status": "not_confident",
      "scope": "Definition, scope, and multidisciplinary nature of Environmental Science; Earth's spheres (Atmosphere, Lithosphere, Hydrosphere, Biosphere); Ecosystem structure, autotrophs, heterotrophs, decomposers; Trophic levels, grazing vs detritus food chains; Lindeman's 10% ecological efficiency law; Ecological pyramids (Numbers, Biomass, Energy strictly upright); Biogeochemical cycles (Carbon, Nitrogen, Phosphorus, Hydrologic).",
      "blueprint": {
        "marksTotal": "25 Marks in FAT CBT",
        "questionTypes": [
          {
            "type": "Ecosystem Concept Questions",
            "desc": "Lindeman's 10% ecological energy transfer calculations, thermodynamic reasons why the pyramid of energy cannot be inverted, and marine inverted biomass pyramids."
          },
          {
            "type": "Nitrogen Cycle Microbial Identification",
            "desc": "Role of Nitrosomonas (ammonium to nitrite), Nitrobacter (nitrite to nitrate), Rhizobium (N2 fixation), and Pseudomonas denitrificans."
          }
        ]
      },
      "formulaSheet": [
        {
          "name": "Lindeman's 10% Ecological Efficiency",
          "formula": "\\text{Efficiency} = \\frac{P_n}{P_{n-1}} \\times 100 \\approx 10\\%",
          "note": "Thermodynamic heat dissipation limits food chains to 4-5 levels"
        },
        {
          "name": "Biological Nitrogen Fixation",
          "formula": "\\text{N}_2 + 8\\text{H}^+ + 8e^- \\xrightarrow{\\text{Nitrogenase}} 2\\text{NH}_3 + \\text{H}_2",
          "note": "Catalyzed by Rhizobium and Azotobacter"
        },
        {
          "name": "Two-Step Nitrification",
          "formula": "2\\text{NH}_4^+ + 3\\text{O}_2 \\xrightarrow{\\text{Nitrosomonas}} 2\\text{NO}_2^- \\xrightarrow{\\text{Nitrobacter}} 2\\text{NO}_3^-",
          "note": "Converts toxic ammonia into assimilable nitrate"
        }
      ],
      "examInsights": [
        {
          "title": "Pyramid of Energy Rule (VIT CBT Classic)",
          "desc": "VIT Moodle repeatedly tests: 'Which ecological pyramid can NEVER be inverted?' The answer is strictly the Pyramid of Energy, due to the Second Law of Thermodynamics (energy is inevitably dissipated as metabolic heat at every trophic step)."
        },
        {
          "title": "Inverted Biomass Pyramid in Aquatic Ecosystems",
          "desc": "In open ocean and pond ecosystems, phytoplankton have very small standing biomass but extremely rapid turnover rates, making the pyramid of biomass inverted."
        }
      ],
      "mcqs": [
        {
          "id": "evs-w1-1",
          "question": "Who defined environmental science as \u201cthe interdisciplinary study of how the Earth works, how we are affecting the Earth's life support systems\u201d?",
          "options": [
            "A) E.P. Odum",
            "B) Charles Elton",
            "C) R.L. Lindemann",
            "D) Spellman & Stoudt"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Spellman & Stoudt."
        },
        {
          "id": "evs-w1-2",
          "question": "Which field emphasises the ethical, social, political and economic facets of environmental problems?",
          "options": [
            "A) Environmental chemistry",
            "B) Environmental engineering",
            "C) Environmental studies",
            "D) Atmospheric science"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Environmental studies."
        },
        {
          "id": "evs-w1-3",
          "question": "Which field focuses on designing technology for waste management, pollution prevention and water/air purification?",
          "options": [
            "A) Environmental studies",
            "B) Environmental engineering",
            "C) Ecology",
            "D) Geoscience"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Environmental engineering."
        },
        {
          "id": "evs-w1-4",
          "question": "Environmental studies is described as an applied science because it:",
          "options": [
            "A) Seeks practical answers for sustainable life on finite resources",
            "B) Only studies laboratory chemistry",
            "C) Ignores social factors",
            "D) Deals only with physics"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Seeks practical answers for sustainable life on finite resources."
        },
        {
          "id": "evs-w1-5",
          "question": "Solving water scarcity needing hydrology, law and engineering together illustrates:",
          "options": [
            "A) Biomagnification",
            "B) A single-discipline approach",
            "C) Paleo-ecology",
            "D) A multidisciplinary approach"
          ],
          "correct": "D",
          "rationale": "Correct Option D: A multidisciplinary approach."
        },
        {
          "id": "evs-w1-6",
          "question": "In the multidisciplinary table, cost\u2013benefit analysis is the contribution of:",
          "options": [
            "A) Geology",
            "B) Sociology",
            "C) Economics",
            "D) Physics"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Economics."
        },
        {
          "id": "evs-w1-7",
          "question": "Which greenhouse gases are named as causes of climate change in the intro lecture?",
          "options": [
            "A) O\u2082, N\u2082, Ar",
            "B) CO\u2082, CH\u2084, N\u2082O",
            "C) SO\u2082, H\u2082S, NH\u2083",
            "D) He, Ne, Kr"
          ],
          "correct": "B",
          "rationale": "Correct Option B: CO\u2082, CH\u2084, N\u2082O."
        },
        {
          "id": "evs-w1-8",
          "question": "According to IPCC reports cited, the average global temperature has risen by about:",
          "options": [
            "A) 1.1\u00b0C since pre-industrial times",
            "B) 0.2\u00b0C since 1990",
            "C) 3.5\u00b0C since 1900",
            "D) 5\u00b0C since pre-industrial times"
          ],
          "correct": "A",
          "rationale": "Correct Option A: 1.1\u00b0C since pre-industrial times."
        },
        {
          "id": "evs-w1-9",
          "question": "Ranipet in Tamil Nadu is an example of pollution by:",
          "options": [
            "A) Fluoride from rocks",
            "B) Mercury from gold mining",
            "C) Arsenic from groundwater",
            "D) Chromium from tannery waste"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Chromium from tannery waste."
        },
        {
          "id": "evs-w1-10",
          "question": "Which is NOT a listed method for managing biomedical waste?",
          "options": [
            "A) Incineration",
            "B) Segregation",
            "C) Open dumping",
            "D) Autoclaving"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Open dumping."
        },
        {
          "id": "evs-w1-11",
          "question": "Firecrackers mainly emit which toxic substances, according to the notes?",
          "options": [
            "A) CFCs and ozone",
            "B) SO\u2082, NO and Pb",
            "C) Radon and asbestos",
            "D) Methane and ammonia"
          ],
          "correct": "B",
          "rationale": "Correct Option B: SO\u2082, NO and Pb."
        },
        {
          "id": "evs-w1-12",
          "question": "EPR, a solution for e-waste, stands for:",
          "options": [
            "A) Extended Producer Responsibility",
            "B) Environmental Protection Regulation",
            "C) Electronic Parts Recycling",
            "D) Emission Permit Register"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Extended Producer Responsibility."
        },
        {
          "id": "evs-w1-13",
          "question": "India's rank as a generator of e-waste (CPCB 2020) is:",
          "options": [
            "A) Fifth-largest",
            "B) Largest",
            "C) Tenth-largest",
            "D) Third-largest"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Third-largest."
        },
        {
          "id": "evs-w1-14",
          "question": "How many of the world's 20 most polluted cities are in India, per the notes?",
          "options": [
            "A) 10",
            "B) 5",
            "C) 14",
            "D) 18"
          ],
          "correct": "C",
          "rationale": "Correct Option C: 14."
        },
        {
          "id": "evs-w1-15",
          "question": "What share of India's surface water is described as polluted?",
          "options": [
            "A) 20%",
            "B) 70%",
            "C) 45%",
            "D) 95%"
          ],
          "correct": "B",
          "rationale": "Correct Option B: 70%."
        },
        {
          "id": "evs-w1-16",
          "question": "India's rank in climate risk, per the notes:",
          "options": [
            "A) 7th",
            "B) 1st",
            "C) 15th",
            "D) 30th"
          ],
          "correct": "A",
          "rationale": "Correct Option A: 7th."
        },
        {
          "id": "evs-w1-17",
          "question": "The Paris Agreement (2015) aims to limit warming to below:",
          "options": [
            "A) 3\u00b0C",
            "B) 4\u00b0C",
            "C) 0.5\u00b0C",
            "D) 2\u00b0C"
          ],
          "correct": "D",
          "rationale": "Correct Option D: 2\u00b0C."
        },
        {
          "id": "evs-w1-18",
          "question": "Pollution of Punjab's groundwater is linked to residues of:",
          "options": [
            "A) BPA and phthalates",
            "B) Chromium and nickel",
            "C) Endosulfan and DDT",
            "D) Radon and uranium"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Endosulfan and DDT."
        },
        {
          "id": "evs-w1-19",
          "question": "About what share of India's solid waste is processed?",
          "options": [
            "A) About 90%",
            "B) Less than 30%",
            "C) About 60%",
            "D) Almost 100%"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Less than 30%."
        },
        {
          "id": "evs-w1-20",
          "question": "The word \u201csphere\u201d means:",
          "options": [
            "A) To surround or encompass",
            "B) To rotate",
            "C) A layer of rock",
            "D) To flow"
          ],
          "correct": "A",
          "rationale": "Correct Option A: To surround or encompass."
        },
        {
          "id": "evs-w1-21",
          "question": "The root word \u201catmo\u201d refers to:",
          "options": [
            "A) Water",
            "B) Rocks",
            "C) Life",
            "D) Steam and vapour"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Steam and vapour."
        },
        {
          "id": "evs-w1-22",
          "question": "Which sphere provides solid ground and nutrients?",
          "options": [
            "A) Atmosphere",
            "B) Hydrosphere",
            "C) Lithosphere",
            "D) Biosphere"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Lithosphere."
        },
        {
          "id": "evs-w1-23",
          "question": "In which layer does nearly all weather occur?",
          "options": [
            "A) Stratosphere",
            "B) Troposphere",
            "C) Mesosphere",
            "D) Thermosphere"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Troposphere."
        },
        {
          "id": "evs-w1-24",
          "question": "The ozone layer is located in the:",
          "options": [
            "A) Stratosphere",
            "B) Troposphere",
            "C) Mesosphere",
            "D) Exosphere"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Stratosphere."
        },
        {
          "id": "evs-w1-25",
          "question": "Which is the coldest layer of the atmosphere?",
          "options": [
            "A) Troposphere",
            "B) Thermosphere",
            "C) Stratosphere",
            "D) Mesosphere"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Mesosphere."
        },
        {
          "id": "evs-w1-26",
          "question": "Meteors burn up in the:",
          "options": [
            "A) Stratosphere",
            "B) Troposphere",
            "C) Mesosphere",
            "D) Exosphere"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Mesosphere."
        },
        {
          "id": "evs-w1-27",
          "question": "Auroras and the International Space Station are found in the:",
          "options": [
            "A) Mesosphere",
            "B) Thermosphere",
            "C) Stratosphere",
            "D) Troposphere"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Thermosphere."
        },
        {
          "id": "evs-w1-28",
          "question": "Why does temperature rise with height in the stratosphere?",
          "options": [
            "A) Ozone absorbs solar UV",
            "B) It is closer to the Earth's surface",
            "C) Clouds trap heat there",
            "D) Meteors heat it"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Ozone absorbs solar UV."
        },
        {
          "id": "evs-w1-29",
          "question": "The boundary that acts like a lid keeping weather in the troposphere is the:",
          "options": [
            "A) Thermopause",
            "B) Stratopause",
            "C) Mesopause",
            "D) Tropopause"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Tropopause."
        },
        {
          "id": "evs-w1-30",
          "question": "Noctilucent clouds are found in the:",
          "options": [
            "A) Stratosphere",
            "B) Troposphere",
            "C) Mesosphere",
            "D) Thermosphere"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Mesosphere."
        },
        {
          "id": "evs-w1-31",
          "question": "Weather balloons and high-altitude jets operate in the stable, dry:",
          "options": [
            "A) Mesosphere",
            "B) Stratosphere",
            "C) Thermosphere",
            "D) Exosphere"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Stratosphere."
        },
        {
          "id": "evs-w1-32",
          "question": "Which layer gradually leaks into space with no clear upper boundary?",
          "options": [
            "A) Exosphere",
            "B) Thermosphere",
            "C) Mesosphere",
            "D) Stratosphere"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Exosphere."
        },
        {
          "id": "evs-w1-33",
          "question": "Earth's magnetic field is produced by the:",
          "options": [
            "A) Mantle",
            "B) Solid inner core",
            "C) Crust",
            "D) Liquid outer core"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Liquid outer core."
        },
        {
          "id": "evs-w1-34",
          "question": "Plate tectonics is driven by convection currents in the:",
          "options": [
            "A) Crust",
            "B) Inner core",
            "C) Mantle",
            "D) Atmosphere"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Mantle."
        },
        {
          "id": "evs-w1-35",
          "question": "Which is NOT part of the definition of a mineral?",
          "options": [
            "A) Naturally occurring",
            "B) Organic origin",
            "C) Definite chemical composition",
            "D) Crystalline structure"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Organic origin."
        },
        {
          "id": "evs-w1-36",
          "question": "The three rock types are:",
          "options": [
            "A) Igneous, sedimentary, metamorphic",
            "B) Igneous, volcanic, granite",
            "C) Sedimentary, alluvial, clay",
            "D) Metamorphic, basalt, marble"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Igneous, sedimentary, metamorphic."
        },
        {
          "id": "evs-w1-37",
          "question": "The biosphere is best defined as:",
          "options": [
            "A) The solid crust",
            "B) The layer of air around Earth",
            "C) All the water on Earth",
            "D) The global sum of all ecosystems"
          ],
          "correct": "D",
          "rationale": "Correct Option D: The global sum of all ecosystems."
        },
        {
          "id": "evs-w1-38",
          "question": "Nitrogen makes up about what percentage of air by volume?",
          "options": [
            "A) 1%",
            "B) 21%",
            "C) 78%",
            "D) 50%"
          ],
          "correct": "C",
          "rationale": "Correct Option C: 78%."
        },
        {
          "id": "evs-w1-39",
          "question": "Correct order of the water cycle:",
          "options": [
            "A) Condensation \u2192 evaporation \u2192 collection \u2192 precipitation",
            "B) Evaporation \u2192 condensation \u2192 precipitation \u2192 collection",
            "C) Precipitation \u2192 evaporation \u2192 condensation \u2192 collection",
            "D) Collection \u2192 condensation \u2192 evaporation \u2192 precipitation"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Evaporation \u2192 condensation \u2192 precipitation \u2192 collection."
        },
        {
          "id": "evs-w1-40",
          "question": "An ecosystem is called the structural and functional unit of:",
          "options": [
            "A) Ecology",
            "B) Geology",
            "C) Meteorology",
            "D) Hydrology"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Ecology."
        },
        {
          "id": "evs-w1-41",
          "question": "Which ecosystem is treeless, cold and snow-covered most of the year?",
          "options": [
            "A) Savanna",
            "B) Desert",
            "C) Grassland",
            "D) Tundra"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Tundra."
        },
        {
          "id": "evs-w1-42",
          "question": "Which terrestrial ecosystem is described as a major carbon sink?",
          "options": [
            "A) Tundra",
            "B) Desert",
            "C) Forest",
            "D) Grassland"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Forest."
        },
        {
          "id": "evs-w1-43",
          "question": "Hot days and cold nights with very little rainfall describe a:",
          "options": [
            "A) Tundra",
            "B) Desert",
            "C) Forest",
            "D) Marine ecosystem"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Desert."
        },
        {
          "id": "evs-w1-44",
          "question": "Compared with freshwater, marine ecosystems have:",
          "options": [
            "A) More salt and greater biodiversity",
            "B) Less salt and less biodiversity",
            "C) No salt",
            "D) No producers"
          ],
          "correct": "A",
          "rationale": "Correct Option A: More salt and greater biodiversity."
        },
        {
          "id": "evs-w1-45",
          "question": "The functional aspect of an ecosystem includes:",
          "options": [
            "A) Life histories of species",
            "B) Number and types of species",
            "C) Physical features of the land",
            "D) Energy flow and nutrient cycling"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Energy flow and nutrient cycling."
        },
        {
          "id": "evs-w1-46",
          "question": "Temperate grasslands and savannas are examples of:",
          "options": [
            "A) Marine ecosystems",
            "B) Tundra ecosystems",
            "C) Grassland ecosystems",
            "D) Artificial ecosystems"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Grassland ecosystems."
        },
        {
          "id": "evs-w1-47",
          "question": "An aquarium is an example of a/an:",
          "options": [
            "A) Natural terrestrial ecosystem",
            "B) Artificial ecosystem",
            "C) Marine ecosystem",
            "D) Climax community"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Artificial ecosystem."
        },
        {
          "id": "evs-w1-48",
          "question": "Ecology is now often defined as the study of:",
          "options": [
            "A) Ecosystems",
            "B) Rocks",
            "C) Weather",
            "D) Genes only"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Ecosystems."
        },
        {
          "id": "evs-w1-49",
          "question": "Which is a freshwater ecosystem?",
          "options": [
            "A) Tundra",
            "B) Coral reef",
            "C) Ocean",
            "D) Wetland"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Wetland."
        },
        {
          "id": "evs-w1-50",
          "question": "Correct order of ecological organization, smallest to largest:",
          "options": [
            "A) Organism \u2192 community \u2192 population \u2192 biosphere \u2192 ecosystem",
            "B) Population \u2192 organism \u2192 ecosystem \u2192 community \u2192 biosphere",
            "C) Organism \u2192 population \u2192 community \u2192 ecosystem \u2192 biosphere",
            "D) Community \u2192 population \u2192 organism \u2192 ecosystem \u2192 biosphere"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Organism \u2192 population \u2192 community \u2192 ecosystem \u2192 biosphere."
        },
        {
          "id": "evs-w1-51",
          "question": "A group of the same species living in one area is a:",
          "options": [
            "A) Community",
            "B) Population",
            "C) Ecosystem",
            "D) Biome"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Population."
        },
        {
          "id": "evs-w1-52",
          "question": "Which is an abiotic component?",
          "options": [
            "A) pH and salinity",
            "B) Fungi",
            "C) Herbivores",
            "D) Bacteria"
          ],
          "correct": "A",
          "rationale": "Correct Option A: pH and salinity."
        },
        {
          "id": "evs-w1-53",
          "question": "About how much energy passes from one trophic level to the next?",
          "options": [
            "A) 1%",
            "B) 50%",
            "C) 90%",
            "D) 10%"
          ],
          "correct": "D",
          "rationale": "Correct Option D: 10%."
        },
        {
          "id": "evs-w1-54",
          "question": "Which pyramid is always upright?",
          "options": [
            "A) Pyramid of biomass",
            "B) Pyramid of numbers",
            "C) Pyramid of energy",
            "D) All of them"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Pyramid of energy."
        },
        {
          "id": "evs-w1-55",
          "question": "Why is a single tree ecosystem an exception to the upright pyramid of numbers?",
          "options": [
            "A) Trees have no consumers",
            "B) One tree supports many organisms",
            "C) Energy increases up the chain",
            "D) Trees are decomposers"
          ],
          "correct": "B",
          "rationale": "Correct Option B: One tree supports many organisms."
        },
        {
          "id": "evs-w1-56",
          "question": "Which nutrient cycle has no atmospheric phase?",
          "options": [
            "A) Phosphorus",
            "B) Nitrogen",
            "C) Carbon",
            "D) Water"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Phosphorus."
        },
        {
          "id": "evs-w1-57",
          "question": "Conversion of NO\u2083\u207b back to N\u2082 is called:",
          "options": [
            "A) Assimilation",
            "B) Nitrification",
            "C) Nitrogen fixation",
            "D) Denitrification"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Denitrification."
        },
        {
          "id": "evs-w1-58",
          "question": "Which nutrient is often limiting in freshwater ecosystems?",
          "options": [
            "A) Carbon",
            "B) Nitrogen",
            "C) Phosphorus",
            "D) Oxygen"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Phosphorus."
        },
        {
          "id": "evs-w1-59",
          "question": "Correct order of decomposition steps:",
          "options": [
            "A) Leaching \u2192 catabolism \u2192 fragmentation",
            "B) Fragmentation \u2192 leaching \u2192 catabolism",
            "C) Catabolism \u2192 fragmentation \u2192 leaching",
            "D) Fragmentation \u2192 catabolism \u2192 leaching"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Fragmentation \u2192 leaching \u2192 catabolism."
        },
        {
          "id": "evs-w1-60",
          "question": "NPP is calculated as:",
          "options": [
            "A) GPP \u2212 respiration",
            "B) GPP + respiration",
            "C) Respiration \u2212 GPP",
            "D) GPP \u00d7 respiration"
          ],
          "correct": "A",
          "rationale": "Correct Option A: GPP \u2212 respiration."
        },
        {
          "id": "evs-w1-61",
          "question": "More prey \u2192 more predators \u2192 prey falls back is an example of:",
          "options": [
            "A) Biomagnification",
            "B) Positive feedback",
            "C) Succession",
            "D) Negative feedback"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Negative feedback."
        },
        {
          "id": "evs-w1-62",
          "question": "Overgrazing \u2192 vegetation loss \u2192 more erosion \u2192 more loss is:",
          "options": [
            "A) Homeostasis",
            "B) Negative feedback",
            "C) Positive feedback",
            "D) Resilience"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Positive feedback."
        },
        {
          "id": "evs-w1-63",
          "question": "The ability of an ecosystem to recover after disturbance is:",
          "options": [
            "A) Stability",
            "B) Resilience",
            "C) Productivity",
            "D) Succession"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Resilience."
        },
        {
          "id": "evs-w1-64",
          "question": "Which ecosystem is highly productive but less resilient to repeated stress?",
          "options": [
            "A) Coral reefs",
            "B) Grasslands",
            "C) Deserts",
            "D) Tundra"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Coral reefs."
        },
        {
          "id": "evs-w1-65",
          "question": "Excess CO\u2082 absorbed by oceans leads to:",
          "options": [
            "A) Ozone depletion",
            "B) Denitrification",
            "C) Eutrophication only",
            "D) Ocean acidification"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Ocean acidification."
        },
        {
          "id": "evs-w1-66",
          "question": "Which consumer example is a secondary consumer in the notes?",
          "options": [
            "A) Grass",
            "B) Deer",
            "C) Frog",
            "D) Eagle"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Frog."
        },
        {
          "id": "evs-w1-67",
          "question": "An omnivore acting as both primary and secondary consumer is best shown by a:",
          "options": [
            "A) Food chain",
            "B) Food web",
            "C) Pyramid of numbers",
            "D) Nitrogen cycle"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Food web."
        },
        {
          "id": "evs-w1-68",
          "question": "Lindemann's 10% law was proposed in:",
          "options": [
            "A) 1942",
            "B) 1927",
            "C) 1972",
            "D) 1995"
          ],
          "correct": "A",
          "rationale": "Correct Option A: 1942."
        },
        {
          "id": "evs-w1-69",
          "question": "Ecological pyramids were proposed by Charles Elton in:",
          "options": [
            "A) 1971",
            "B) 1942",
            "C) 1901",
            "D) 1927"
          ],
          "correct": "D",
          "rationale": "Correct Option D: 1927."
        },
        {
          "id": "evs-w1-70",
          "question": "What is the largest cause of energy loss between trophic levels?",
          "options": [
            "A) Poor assimilation",
            "B) Undigested matter",
            "C) Respiration",
            "D) Predation"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Respiration."
        },
        {
          "id": "evs-w1-71",
          "question": "Which food chain handles 80\u201390% of energy in forests and wetlands?",
          "options": [
            "A) Grazing food chain",
            "B) Detritus food chain",
            "C) Parasitic food chain",
            "D) Marine food chain"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Detritus food chain."
        },
        {
          "id": "evs-w1-72",
          "question": "The pyramid of biomass is inverted in:",
          "options": [
            "A) Oceans",
            "B) Forests",
            "C) Grasslands",
            "D) Deserts"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Oceans."
        },
        {
          "id": "evs-w1-73",
          "question": "Why is the marine biomass pyramid inverted?",
          "options": [
            "A) Energy increases up the chain",
            "B) Fish are bigger than whales",
            "C) There are no producers in the sea",
            "D) Phytoplankton reproduce very rapidly, so standing crop looks small"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Phytoplankton reproduce very rapidly, so standing crop looks small."
        },
        {
          "id": "evs-w1-74",
          "question": "A forest typically shows which shape of pyramid of numbers?",
          "options": [
            "A) Upright",
            "B) Inverted",
            "C) Spindle",
            "D) Flat"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Spindle."
        },
        {
          "id": "evs-w1-75",
          "question": "Which law of thermodynamics explains why energy can't be recycled?",
          "options": [
            "A) First law",
            "B) Second law",
            "C) Zeroth law",
            "D) Third law"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Second law."
        },
        {
          "id": "evs-w1-76",
          "question": "The first law of thermodynamics states that energy:",
          "options": [
            "A) Cannot be created or destroyed, only transformed",
            "B) Always increases",
            "C) Is always lost as heat",
            "D) Can be recycled"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Cannot be created or destroyed, only transformed."
        },
        {
          "id": "evs-w1-77",
          "question": "If producers hold 10,000 kJ, secondary consumers receive about:",
          "options": [
            "A) 5,000 kJ",
            "B) 1,000 kJ",
            "C) 10 kJ",
            "D) 100 kJ"
          ],
          "correct": "D",
          "rationale": "Correct Option D: 100 kJ."
        },
        {
          "id": "evs-w1-78",
          "question": "Rhizobium fixes nitrogen in:",
          "options": [
            "A) Animal intestines",
            "B) Ocean water",
            "C) Root nodules of legumes",
            "D) Clouds"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Root nodules of legumes."
        },
        {
          "id": "evs-w1-79",
          "question": "Nitrosomonas converts:",
          "options": [
            "A) NO\u2082\u207b \u2192 NO\u2083\u207b",
            "B) NH\u2083 \u2192 NO\u2082\u207b",
            "C) NO\u2083\u207b \u2192 N\u2082",
            "D) N\u2082 \u2192 NH\u2083"
          ],
          "correct": "B",
          "rationale": "Correct Option B: NH\u2083 \u2192 NO\u2082\u207b."
        },
        {
          "id": "evs-w1-80",
          "question": "Nitrobacter converts:",
          "options": [
            "A) NO\u2082\u207b \u2192 NO\u2083\u207b",
            "B) NH\u2083 \u2192 NO\u2082\u207b",
            "C) NO\u2083\u207b \u2192 N\u2082",
            "D) Organic N \u2192 NH\u2084\u207a"
          ],
          "correct": "A",
          "rationale": "Correct Option A: NO\u2082\u207b \u2192 NO\u2083\u207b."
        },
        {
          "id": "evs-w1-81",
          "question": "Denitrification is carried out by anaerobic:",
          "options": [
            "A) Azotobacter",
            "B) Rhizobium",
            "C) Nitrobacter",
            "D) Pseudomonas"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Pseudomonas."
        },
        {
          "id": "evs-w1-82",
          "question": "Chemoautotrophs at hydrothermal vents oxidize:",
          "options": [
            "A) Ozone",
            "B) Glucose",
            "C) H\u2082S, NH\u2084, Fe\u00b2\u207a",
            "D) Chlorophyll"
          ],
          "correct": "C",
          "rationale": "Correct Option C: H\u2082S, NH\u2084, Fe\u00b2\u207a."
        },
        {
          "id": "evs-w1-83",
          "question": "The Q10 rule says metabolic rate:",
          "options": [
            "A) Halves per 10\u00b0C rise",
            "B) Doubles per 10\u00b0C rise",
            "C) Rises 10\u00d7 per degree",
            "D) Is unaffected by temperature"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Doubles per 10\u00b0C rise."
        },
        {
          "id": "evs-w1-84",
          "question": "Which ecosystem has the highest NPP (~2,000 g/m\u00b2/yr)?",
          "options": [
            "A) Tropical rainforest",
            "B) Desert",
            "C) Tundra",
            "D) Open ocean"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Tropical rainforest."
        },
        {
          "id": "evs-w1-85",
          "question": "What was pre-industrial atmospheric CO\u2082?",
          "options": [
            "A) ~800 ppm",
            "B) ~422 ppm",
            "C) ~100 ppm",
            "D) ~280 ppm"
          ],
          "correct": "D",
          "rationale": "Correct Option D: ~280 ppm."
        },
        {
          "id": "evs-w1-86",
          "question": "Biomagnification of DDT caused which effect in birds?",
          "options": [
            "A) Blindness",
            "B) Feather loss",
            "C) Eggshell thinning",
            "D) Faster flight"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Eggshell thinning."
        },
        {
          "id": "evs-w1-87",
          "question": "Yellowstone wolves (1995) are a classic example of a:",
          "options": [
            "A) Primary succession",
            "B) Trophic cascade",
            "C) Detritus chain",
            "D) Eutrophication event"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Trophic cascade."
        },
        {
          "id": "evs-w1-88",
          "question": "Decomposers differ from detritivores because decomposers:",
          "options": [
            "A) Secrete extracellular enzymes",
            "B) Ingest whole fragments",
            "C) Are always animals",
            "D) Photosynthesize"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Secrete extracellular enzymes."
        },
        {
          "id": "evs-w1-89",
          "question": "Eating plants rather than carnivores gives roughly how much more energy?",
          "options": [
            "A) The same",
            "B) 2\u00d7",
            "C) 10,000\u00d7",
            "D) 100\u00d7"
          ],
          "correct": "D",
          "rationale": "Correct Option D: 100\u00d7."
        },
        {
          "id": "evs-w1-90",
          "question": "Primary succession begins on:",
          "options": [
            "A) A burnt forest",
            "B) Abandoned farmland",
            "C) Bare land with no life or soil",
            "D) A flooded field with soil"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Bare land with no life or soil."
        },
        {
          "id": "evs-w1-91",
          "question": "Typical pioneer species in primary succession are:",
          "options": [
            "A) Oak and hickory",
            "B) Lichens and mosses",
            "C) Grasses and herbs",
            "D) Pine trees"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Lichens and mosses."
        },
        {
          "id": "evs-w1-92",
          "question": "Secondary succession is about how much faster than primary?",
          "options": [
            "A) 5\u201310 times",
            "B) 2 times",
            "C) 100 times",
            "D) The same speed"
          ],
          "correct": "A",
          "rationale": "Correct Option A: 5\u201310 times."
        },
        {
          "id": "evs-w1-93",
          "question": "The correct order of succession stages is:",
          "options": [
            "A) Climax \u2192 nudation \u2192 invasion \u2192 competition",
            "B) Invasion \u2192 nudation \u2192 climax \u2192 competition",
            "C) Competition \u2192 invasion \u2192 nudation \u2192 climax",
            "D) Nudation \u2192 invasion \u2192 competition \u2192 climax"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Nudation \u2192 invasion \u2192 competition \u2192 climax."
        },
        {
          "id": "evs-w1-94",
          "question": "Succession starting in a saline environment is a:",
          "options": [
            "A) Xerosere",
            "B) Hydrosere",
            "C) Halosere",
            "D) Lithosere"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Halosere."
        },
        {
          "id": "evs-w1-95",
          "question": "Succession starting in water is a:",
          "options": [
            "A) Halosere",
            "B) Hydrosere",
            "C) Lithosere",
            "D) Xerosere"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Hydrosere."
        },
        {
          "id": "evs-w1-96",
          "question": "Succession starting on rock is a:",
          "options": [
            "A) Lithosere",
            "B) Xerosere",
            "C) Hydrosere",
            "D) Halosere"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Lithosere."
        },
        {
          "id": "evs-w1-97",
          "question": "The monoclimax theory was given by:",
          "options": [
            "A) Lindemann",
            "B) Tansley",
            "C) Elton",
            "D) F.E. Clements"
          ],
          "correct": "D",
          "rationale": "Correct Option D: F.E. Clements."
        },
        {
          "id": "evs-w1-98",
          "question": "The polyclimax theory was given by:",
          "options": [
            "A) Odum",
            "B) Clements",
            "C) Tansley",
            "D) Darwin"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Tansley."
        },
        {
          "id": "evs-w1-99",
          "question": "Monoclimax theory says climax is determined by:",
          "options": [
            "A) Soil only",
            "B) Climate",
            "C) Humans",
            "D) Fire"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Climate."
        },
        {
          "id": "evs-w1-100",
          "question": "Humus is absent in:",
          "options": [
            "A) Primary succession",
            "B) Secondary succession",
            "C) Both",
            "D) Neither"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Primary succession."
        },
        {
          "id": "evs-w1-101",
          "question": "Secondary succession takes roughly:",
          "options": [
            "A) Millions of years",
            "B) 1,000+ years",
            "C) 1\u20135 years",
            "D) 50\u2013200 years"
          ],
          "correct": "D",
          "rationale": "Correct Option D: 50\u2013200 years."
        },
        {
          "id": "evs-w1-102",
          "question": "Isle Royale, Michigan illustrates:",
          "options": [
            "A) Eutrophication",
            "B) Secondary succession on farmland",
            "C) Primary succession on glacial rock",
            "D) Biomagnification"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Primary succession on glacial rock."
        },
        {
          "id": "evs-w1-103",
          "question": "North Carolina's abandoned farmland illustrates:",
          "options": [
            "A) Primary succession",
            "B) Secondary succession",
            "C) A hydrosere",
            "D) A halosere"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Secondary succession."
        },
        {
          "id": "evs-w1-104",
          "question": "Succession over millions of years is called:",
          "options": [
            "A) Paleo-ecological",
            "B) Medium timescale",
            "C) Secondary",
            "D) Seral"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Paleo-ecological."
        },
        {
          "id": "evs-w1-105",
          "question": "Which is NOT a feature of pioneer species?",
          "options": [
            "A) Explore new habitats",
            "B) Good breeders",
            "C) Tolerant",
            "D) Narrow food choice"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Narrow food choice."
        },
        {
          "id": "evs-w1-106",
          "question": "Competition between individuals of the same species is:",
          "options": [
            "A) Mutualism",
            "B) Interspecific",
            "C) Intraspecific",
            "D) Commensalism"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Intraspecific."
        },
        {
          "id": "evs-w1-107",
          "question": "The final stable community of succession is the:",
          "options": [
            "A) Pioneer community",
            "B) Climax community",
            "C) Seral stage",
            "D) Nudation stage"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Climax community."
        }
      ]
    },
    {
      "id": "evs-m2",
      "moduleNum": 2,
      "pdfUrl": "/pdfs/environmental/EVS_MOD-2.pdf",
      "title": "Week 2: Biodiversity and Natural Resources / Environmental Quality",
      "co": "CO: 2",
      "examScope": "CAT-1 & FAT (CBT MCQ)",
      "weightage": "25% of CBT Exam (approx 25 MCQs)",
      "status": "not_confident",
      "scope": "Levels of biodiversity (Genetic, Species, Ecosystem); 4 Global Biodiversity Hotspots in India (Western Ghats, Eastern Himalayas, Indo-Burma, Sundaland); Threats to biodiversity: habitat loss, fragmentation, poaching, invasive alien species (Lantana, Water hyacinth); In-situ conservation (National Parks, Sanctuaries, Biosphere Reserves) vs Ex-situ (Botanical gardens, Seed banks, Cryopreservation); Red Data Book and IUCN Red List categories; Natural resources: Forest, Water, Mineral, Food, Energy (Renewable vs Non-renewable).",
      "blueprint": {
        "marksTotal": "25 Marks in FAT CBT",
        "questionTypes": [
          {
            "type": "Conservation Strategy Classification",
            "desc": "Distinguishing In-situ vs Ex-situ methods (e.g. Biosphere Reserve vs Gene Bank)."
          },
          {
            "type": "Hotspot & Endemism Questions",
            "desc": "Criteria for Norman Myers Hotspots: >=1500 endemic vascular plants and >=70% primary vegetation loss."
          }
        ]
      },
      "formulaSheet": [
        {
          "name": "Biodiversity Hotspot Criteria",
          "formula": "\\ge 1,500 \\text{ endemic plant species} \\quad \\& \\quad \\ge 70\\% \\text{ habitat loss}",
          "note": "Norman Myers (1988) definition; 36 hotspots worldwide, 4 in India"
        },
        {
          "name": "Species-Area Relationship (Arrhenius)",
          "formula": "S = C A^z \\iff \\log S = \\log C + z \\log A",
          "note": "z typically between 0.1 and 0.2"
        }
      ],
      "examInsights": [
        {
          "title": "In-situ vs Ex-situ Classification Trap",
          "desc": "In-situ = on-site inside natural habitat (National Park, Wildlife Sanctuary, Biosphere Reserve). Ex-situ = off-site outside natural habitat (Zoological Park, Botanical Garden, Gene Bank, Seed Bank, Cryopreservation). Cryopreservation at -196\u00b0C in liquid nitrogen is strictly Ex-situ."
        }
      ],
      "mcqs": [
        {
          "id": "evs-w2-1",
          "question": "The three levels of biodiversity are:",
          "options": [
            "A) Plant, animal, microbe",
            "B) Cell, tissue, organ",
            "C) Local, national, global",
            "D) Genetic, species, ecosystem"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Genetic, species, ecosystem."
        },
        {
          "id": "evs-w2-2",
          "question": "Different dog breeds within one species show:",
          "options": [
            "A) Ecosystem diversity",
            "B) Species diversity",
            "C) Genetic diversity",
            "D) Endemism"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Genetic diversity."
        },
        {
          "id": "evs-w2-3",
          "question": "Species evenness measures:",
          "options": [
            "A) The count of species",
            "B) How evenly individuals are spread among species",
            "C) Genes within a species",
            "D) Number of ecosystems"
          ],
          "correct": "B",
          "rationale": "Correct Option B: How evenly individuals are spread among species."
        },
        {
          "id": "evs-w2-4",
          "question": "A monoculture field has:",
          "options": [
            "A) Low species diversity",
            "B) High species diversity",
            "C) High ecosystem diversity",
            "D) High endemism"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Low species diversity."
        },
        {
          "id": "evs-w2-5",
          "question": "Which is NOT a criterion for a biodiversity hotspot?",
          "options": [
            "A) Significant threat",
            "B) High species richness",
            "C) High endemism",
            "D) Low human threat"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Low human threat."
        },
        {
          "id": "evs-w2-6",
          "question": "How many of the world's 36 hotspots are in India?",
          "options": [
            "A) 8",
            "B) 2",
            "C) 4",
            "D) 12"
          ],
          "correct": "C",
          "rationale": "Correct Option C: 4."
        },
        {
          "id": "evs-w2-7",
          "question": "Which is NOT one of India's hotspots?",
          "options": [
            "A) Western Ghats",
            "B) Thar Desert",
            "C) Himalayas",
            "D) Indo-Burma"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Thar Desert."
        },
        {
          "id": "evs-w2-8",
          "question": "The Nicobar Islands are part of which hotspot?",
          "options": [
            "A) Sundaland",
            "B) Indo-Burma",
            "C) Western Ghats",
            "D) Himalaya"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Sundaland."
        },
        {
          "id": "evs-w2-9",
          "question": "The Coral Triangle is known for the highest:",
          "options": [
            "A) Grassland biodiversity",
            "B) Desert biodiversity",
            "C) Tundra biodiversity",
            "D) Marine biodiversity"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Marine biodiversity."
        },
        {
          "id": "evs-w2-10",
          "question": "The biggest threat to biodiversity per the notes is:",
          "options": [
            "A) Tourism",
            "B) Noise pollution",
            "C) Habitat loss and fragmentation",
            "D) Genetic engineering"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Habitat loss and fragmentation."
        },
        {
          "id": "evs-w2-11",
          "question": "Water hyacinth and Lantana camara are examples of:",
          "options": [
            "A) Endemic species",
            "B) Invasive species",
            "C) Keystone species",
            "D) Flagship species"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Invasive species."
        },
        {
          "id": "evs-w2-12",
          "question": "Silent Valley National Park is in:",
          "options": [
            "A) Kerala",
            "B) Tamil Nadu",
            "C) Assam",
            "D) Uttarakhand"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Kerala."
        },
        {
          "id": "evs-w2-13",
          "question": "Silent Valley was saved from a proposed:",
          "options": [
            "A) Coal mine",
            "B) Highway",
            "C) Airport",
            "D) Hydroelectric project"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Hydroelectric project."
        },
        {
          "id": "evs-w2-14",
          "question": "Coral bleaching occurs when corals expel:",
          "options": [
            "A) Mycorrhizae",
            "B) Plankton",
            "C) Zooxanthellae",
            "D) Rhizobium"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Zooxanthellae."
        },
        {
          "id": "evs-w2-15",
          "question": "The Dodo was native to:",
          "options": [
            "A) Madagascar",
            "B) Mauritius",
            "C) Sri Lanka",
            "D) Andaman Islands"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Mauritius."
        },
        {
          "id": "evs-w2-16",
          "question": "Which animals introduced by humans ate Dodo eggs?",
          "options": [
            "A) Rats, pigs and monkeys",
            "B) Lions and tigers",
            "C) Snakes and eagles",
            "D) Wolves and bears"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Rats, pigs and monkeys."
        },
        {
          "id": "evs-w2-17",
          "question": "Forests help climate regulation mainly by acting as:",
          "options": [
            "A) Nitrogen sinks",
            "B) Heat sources",
            "C) Ozone producers",
            "D) Carbon sinks"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Carbon sinks."
        },
        {
          "id": "evs-w2-18",
          "question": "Which tool evaluates a project's impact on biodiversity before construction?",
          "options": [
            "A) BOD test",
            "B) AQI",
            "C) EIA",
            "D) LCA only"
          ],
          "correct": "C",
          "rationale": "Correct Option C: EIA."
        },
        {
          "id": "evs-w2-19",
          "question": "Bees and flowering plants show:",
          "options": [
            "A) Commensalism",
            "B) Mutualism",
            "C) Parasitism",
            "D) Competition"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Mutualism."
        },
        {
          "id": "evs-w2-20",
          "question": "Barnacles on whales show:",
          "options": [
            "A) Commensalism",
            "B) Mutualism",
            "C) Parasitism",
            "D) Predation"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Commensalism."
        },
        {
          "id": "evs-w2-21",
          "question": "Cattle egrets feeding on insects disturbed by cattle show:",
          "options": [
            "A) Competition",
            "B) Parasitism",
            "C) Mutualism",
            "D) Commensalism"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Commensalism."
        },
        {
          "id": "evs-w2-22",
          "question": "Ticks feeding on mammals show:",
          "options": [
            "A) Commensalism",
            "B) Mutualism",
            "C) Parasitism",
            "D) Predation"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Parasitism."
        },
        {
          "id": "evs-w2-23",
          "question": "Mycorrhizal fungi and plant roots show:",
          "options": [
            "A) Parasitism",
            "B) Mutualism",
            "C) Commensalism",
            "D) Competition"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Mutualism."
        },
        {
          "id": "evs-w2-24",
          "question": "A parasite that lives inside its host is an:",
          "options": [
            "A) Endoparasite",
            "B) Ectoparasite",
            "C) Epiphyte",
            "D) Commensal"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Endoparasite."
        },
        {
          "id": "evs-w2-25",
          "question": "Plants competing for sunlight in a dense forest is an example of:",
          "options": [
            "A) Parasitism",
            "B) Mutualism",
            "C) Commensalism",
            "D) Competition"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Competition."
        },
        {
          "id": "evs-w2-26",
          "question": "A species with no living individuals anywhere is:",
          "options": [
            "A) Rare",
            "B) Endangered",
            "C) Extinct",
            "D) Endemic"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Extinct."
        },
        {
          "id": "evs-w2-27",
          "question": "The passenger pigeon went extinct in:",
          "options": [
            "A) Late 1600s",
            "B) Early 1900s",
            "C) 1970s",
            "D) 2000s"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Early 1900s."
        },
        {
          "id": "evs-w2-28",
          "question": "Indian vultures declined due to poisoning by:",
          "options": [
            "A) Diclofenac",
            "B) DDT",
            "C) Mercury",
            "D) Lead"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Diclofenac."
        },
        {
          "id": "evs-w2-29",
          "question": "The Ganges river dolphin is endangered mainly due to:",
          "options": [
            "A) Pet trade",
            "B) Poaching for horn",
            "C) Loss of bamboo",
            "D) Pollution and dams"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Pollution and dams."
        },
        {
          "id": "evs-w2-30",
          "question": "The black rhino is poached mainly for its:",
          "options": [
            "A) Meat",
            "B) Fur",
            "C) Horn",
            "D) Ivory tusks"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Horn."
        },
        {
          "id": "evs-w2-31",
          "question": "A species found only in one region and nowhere else is:",
          "options": [
            "A) Rare",
            "B) Endemic",
            "C) Extinct",
            "D) Invasive"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Endemic."
        },
        {
          "id": "evs-w2-32",
          "question": "The Nilgiri tahr is endemic to:",
          "options": [
            "A) Western Ghats",
            "B) Himalayas",
            "C) Andaman Islands",
            "D) Thar Desert"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Western Ghats."
        },
        {
          "id": "evs-w2-33",
          "question": "The Andaman teal is a:",
          "options": [
            "A) Spider",
            "B) Goat",
            "C) Monkey",
            "D) Duck"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Duck."
        },
        {
          "id": "evs-w2-34",
          "question": "A rare species differs from an endangered one because it:",
          "options": [
            "A) Has a huge population",
            "B) Is already extinct",
            "C) Is not currently at high risk of extinction",
            "D) Lives only in zoos"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Is not currently at high risk of extinction."
        },
        {
          "id": "evs-w2-35",
          "question": "The Gooty tarantula is found in:",
          "options": [
            "A) Kerala",
            "B) Andhra Pradesh",
            "C) Assam",
            "D) Gujarat"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Andhra Pradesh."
        },
        {
          "id": "evs-w2-36",
          "question": "Which factor leads to rarity?",
          "options": [
            "A) Habitat specificity",
            "B) Very high reproductive rate",
            "C) Wide distribution",
            "D) Large population"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Habitat specificity."
        },
        {
          "id": "evs-w2-37",
          "question": "Which Indian law bans hunting and trade of endangered species?",
          "options": [
            "A) Noise Rules",
            "B) Air Act",
            "C) Water Act",
            "D) Wildlife Protection Act"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Wildlife Protection Act."
        },
        {
          "id": "evs-w2-38",
          "question": "Protecting species in their natural habitat is:",
          "options": [
            "A) Cryopreservation",
            "B) Ex-situ conservation",
            "C) In-situ conservation",
            "D) Tissue culture"
          ],
          "correct": "C",
          "rationale": "Correct Option C: In-situ conservation."
        },
        {
          "id": "evs-w2-39",
          "question": "Zoos, botanical gardens and seed banks are examples of:",
          "options": [
            "A) In-situ conservation",
            "B) Ex-situ conservation",
            "C) Sacred groves",
            "D) Biosphere reserves"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Ex-situ conservation."
        },
        {
          "id": "evs-w2-40",
          "question": "India's first national park is:",
          "options": [
            "A) Jim Corbett",
            "B) Kaziranga",
            "C) Periyar",
            "D) Gir"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Jim Corbett."
        },
        {
          "id": "evs-w2-41",
          "question": "Jim Corbett National Park was established in:",
          "options": [
            "A) 1972",
            "B) 1973",
            "C) 1947",
            "D) 1936"
          ],
          "correct": "D",
          "rationale": "Correct Option D: 1936."
        },
        {
          "id": "evs-w2-42",
          "question": "Kaziranga is famous for the:",
          "options": [
            "A) Snow leopard",
            "B) Asiatic lion",
            "C) One-horned rhinoceros",
            "D) Nilgiri tahr"
          ],
          "correct": "C",
          "rationale": "Correct Option C: One-horned rhinoceros."
        },
        {
          "id": "evs-w2-43",
          "question": "Which protected area allows limited activities like controlled grazing?",
          "options": [
            "A) National park core",
            "B) Wildlife sanctuary",
            "C) Biosphere core zone",
            "D) Gene bank"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Wildlife sanctuary."
        },
        {
          "id": "evs-w2-44",
          "question": "In a biosphere reserve, research, education and ecotourism are allowed in the:",
          "options": [
            "A) Buffer zone",
            "B) Core zone",
            "C) Transition zone only",
            "D) Nowhere"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Buffer zone."
        },
        {
          "id": "evs-w2-45",
          "question": "The Nilgiri Biosphere Reserve spans:",
          "options": [
            "A) Punjab, Haryana, Delhi",
            "B) Assam, Meghalaya, Tripura",
            "C) Gujarat, Rajasthan, MP",
            "D) Tamil Nadu, Kerala, Karnataka"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Tamil Nadu, Kerala, Karnataka."
        },
        {
          "id": "evs-w2-46",
          "question": "Biosphere reserves are recognised under UNESCO's:",
          "options": [
            "A) CITES",
            "B) Ramsar Convention",
            "C) Man and the Biosphere Programme",
            "D) Kyoto Protocol"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Man and the Biosphere Programme."
        },
        {
          "id": "evs-w2-47",
          "question": "Mawphlang sacred grove is protected by which community?",
          "options": [
            "A) Toda",
            "B) Khasi",
            "C) Bishnoi",
            "D) Gond"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Khasi."
        },
        {
          "id": "evs-w2-48",
          "question": "Sacred groves in Kerala are called:",
          "options": [
            "A) Kavus",
            "B) Orans",
            "C) Devrai",
            "D) Sarnas"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Kavus."
        },
        {
          "id": "evs-w2-49",
          "question": "Cryopreservation uses liquid nitrogen at about:",
          "options": [
            "A) \u221280\u00b0C",
            "B) \u221218\u00b0C",
            "C) 0\u00b0C",
            "D) \u2212196\u00b0C"
          ],
          "correct": "D",
          "rationale": "Correct Option D: \u2212196\u00b0C."
        },
        {
          "id": "evs-w2-50",
          "question": "India's national seed/gene bank body is:",
          "options": [
            "A) GEAC, Mumbai",
            "B) CPCB, Delhi",
            "C) NBPGR, New Delhi",
            "D) NDMA, Chennai"
          ],
          "correct": "C",
          "rationale": "Correct Option C: NBPGR, New Delhi."
        },
        {
          "id": "evs-w2-51",
          "question": "The Indian Botanical Garden, Kolkata, was established in:",
          "options": [
            "A) 1936",
            "B) 1787",
            "C) 1857",
            "D) 1972"
          ],
          "correct": "B",
          "rationale": "Correct Option B: 1787."
        },
        {
          "id": "evs-w2-52",
          "question": "The Asiatic lion population in Gir recovered from fewer than 20 to over:",
          "options": [
            "A) 600",
            "B) 100",
            "C) 2,000",
            "D) 50"
          ],
          "correct": "A",
          "rationale": "Correct Option A: 600."
        },
        {
          "id": "evs-w2-53",
          "question": "A charismatic species used to gain public support, like the tiger, is a:",
          "options": [
            "A) Pioneer species",
            "B) Keystone species",
            "C) Invasive species",
            "D) Flagship species"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Flagship species."
        },
        {
          "id": "evs-w2-54",
          "question": "The Asian elephant is described as a keystone species because of its role in:",
          "options": [
            "A) Nitrogen fixation",
            "B) Pollination only",
            "C) Seed dispersal and forest structure",
            "D) Water purification"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Seed dispersal and forest structure."
        },
        {
          "id": "evs-w2-55",
          "question": "A risk of captive breeding with too few individuals is:",
          "options": [
            "A) Too much genetic diversity",
            "B) Genetic bottleneck / inbreeding",
            "C) Faster evolution in the wild",
            "D) Lower cost"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Genetic bottleneck / inbreeding."
        },
        {
          "id": "evs-w2-56",
          "question": "Project Elephant was launched in:",
          "options": [
            "A) 1992",
            "B) 1973",
            "C) 1986",
            "D) 2002"
          ],
          "correct": "A",
          "rationale": "Correct Option A: 1992."
        },
        {
          "id": "evs-w2-57",
          "question": "The Biological Diversity Act (2002) created:",
          "options": [
            "A) NGT",
            "B) Pollution Control Boards",
            "C) Tiger reserves",
            "D) Biodiversity Management Committees"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Biodiversity Management Committees."
        },
        {
          "id": "evs-w2-58",
          "question": "The Ramsar Convention protects:",
          "options": [
            "A) Coral only",
            "B) Deserts",
            "C) Wetlands",
            "D) Mountains"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Wetlands."
        },
        {
          "id": "evs-w2-59",
          "question": "DNA barcoding helps conservation by:",
          "options": [
            "A) Cooling seeds",
            "B) Identifying species from small samples",
            "C) Counting tigers visually",
            "D) Measuring AQI"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Identifying species from small samples."
        },
        {
          "id": "evs-w2-60",
          "question": "Fish ladders help:",
          "options": [
            "A) Fish pass dams",
            "B) Measure water pollution",
            "C) Catch poachers",
            "D) Store genes"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Fish pass dams."
        },
        {
          "id": "evs-w2-61",
          "question": "Mendha Lekha in Maharashtra is an example of:",
          "options": [
            "A) A zoo",
            "B) A seed bank",
            "C) A national park",
            "D) Tribal community forest management"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Tribal community forest management."
        },
        {
          "id": "evs-w2-62",
          "question": "The apex body that approves GM crops in India is:",
          "options": [
            "A) NBPGR",
            "B) CPCB",
            "C) GEAC",
            "D) NDMA"
          ],
          "correct": "C",
          "rationale": "Correct Option C: GEAC."
        },
        {
          "id": "evs-w2-63",
          "question": "GEAC works under which ministry?",
          "options": [
            "A) Agriculture only",
            "B) Environment, Forest and Climate Change",
            "C) Health",
            "D) Science & Technology"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Environment, Forest and Climate Change."
        },
        {
          "id": "evs-w2-64",
          "question": "The only GM crop approved for commercial cultivation in India is:",
          "options": [
            "A) Bt cotton",
            "B) Bt brinjal",
            "C) GM mustard",
            "D) Golden rice"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Bt cotton."
        },
        {
          "id": "evs-w2-65",
          "question": "Bt cotton was approved in India in:",
          "options": [
            "A) 2015",
            "B) 2009",
            "C) 1996",
            "D) 2002"
          ],
          "correct": "D",
          "rationale": "Correct Option D: 2002."
        },
        {
          "id": "evs-w2-66",
          "question": "Bt brinjal was approved in 2009 and then:",
          "options": [
            "A) Exported",
            "B) Grown nationwide",
            "C) Put under a moratorium",
            "D) Converted to cotton"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Put under a moratorium."
        },
        {
          "id": "evs-w2-67",
          "question": "\u201cBt\u201d stands for:",
          "options": [
            "A) Biotech trait",
            "B) Bacillus thuringiensis",
            "C) Bollworm toxin",
            "D) Bacterial transfer"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Bacillus thuringiensis."
        },
        {
          "id": "evs-w2-68",
          "question": "The Bt toxin targets pests such as:",
          "options": [
            "A) Bollworms and corn borers",
            "B) Earthworms",
            "C) Honeybees",
            "D) Birds"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Bollworms and corn borers."
        },
        {
          "id": "evs-w2-69",
          "question": "What share of India's cotton area is under Bt cotton?",
          "options": [
            "A) About 25%",
            "B) About 10%",
            "C) About 50%",
            "D) Over 90%"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Over 90%."
        },
        {
          "id": "evs-w2-70",
          "question": "Bt cotton reduced insecticide use against bollworm by about:",
          "options": [
            "A) 95\u2013100%",
            "B) 5%",
            "C) 50\u201360%",
            "D) 10\u201315%"
          ],
          "correct": "C",
          "rationale": "Correct Option C: 50\u201360%."
        },
        {
          "id": "evs-w2-71",
          "question": "Which secondary pests emerged in Bt cotton fields?",
          "options": [
            "A) Locusts and termites",
            "B) Whiteflies and aphids",
            "C) Rats and crows",
            "D) Mosquitoes"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Whiteflies and aphids."
        },
        {
          "id": "evs-w2-72",
          "question": "The drought-hit region of Maharashtra where Bt cotton farmers faced debt is:",
          "options": [
            "A) Vidarbha",
            "B) Konkan",
            "C) Marathwada only",
            "D) Khandesh"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Vidarbha."
        },
        {
          "id": "evs-w2-73",
          "question": "Compared with conventional breeding, GM technology can:",
          "options": [
            "A) Never be precise",
            "B) Only cross related plants",
            "C) Take more generations",
            "D) Use genes from unrelated species"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Use genes from unrelated species."
        },
        {
          "id": "evs-w2-74",
          "question": "Golden Rice is enriched with:",
          "options": [
            "A) Vitamin C",
            "B) Iron",
            "C) Vitamin A",
            "D) Protein"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Vitamin A."
        },
        {
          "id": "evs-w2-75",
          "question": "The EU restricts GM crops mainly under the:",
          "options": [
            "A) Polluter pays principle",
            "B) Precautionary principle",
            "C) CBDR principle",
            "D) 10% law"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Precautionary principle."
        },
        {
          "id": "evs-w2-76",
          "question": "A gene-editing tool that doesn't add foreign DNA is:",
          "options": [
            "A) CRISPR",
            "B) PCR",
            "C) ELISA",
            "D) GIS"
          ],
          "correct": "A",
          "rationale": "Correct Option A: CRISPR."
        },
        {
          "id": "evs-w2-77",
          "question": "Which is a concern about GM crops?",
          "options": [
            "A) Lower pesticide use",
            "B) Higher yields",
            "C) Longer shelf life",
            "D) Herbicide-resistant weeds"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Herbicide-resistant weeds."
        },
        {
          "id": "evs-w2-78",
          "question": "Which practice helps delay pest resistance to Bt?",
          "options": [
            "A) Monoculture only",
            "B) Spraying more Bt",
            "C) Refuge planting",
            "D) Burning fields"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Refuge planting."
        },
        {
          "id": "evs-w2-79",
          "question": "Which country introduced the first blue GM carnation?",
          "options": [
            "A) India",
            "B) Japan",
            "C) USA",
            "D) Brazil"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Japan."
        },
        {
          "id": "evs-w2-80",
          "question": "Farmers must rebuy GM seeds each season mainly because they are:",
          "options": [
            "A) Patented",
            "B) Sterile by law",
            "C) Imported only",
            "D) Too heavy"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Patented."
        },
        {
          "id": "evs-w2-81",
          "question": "Which countries grow GM crops widely?",
          "options": [
            "A) Japan, Korea, China only",
            "B) France, Germany, Italy",
            "C) India, Nepal, Bhutan",
            "D) USA, Brazil, Argentina"
          ],
          "correct": "D",
          "rationale": "Correct Option D: USA, Brazil, Argentina."
        },
        {
          "id": "evs-w2-82",
          "question": "The four types of environmental hazards are:",
          "options": [
            "A) Natural, artificial, mixed, unknown",
            "B) Air, water, soil, noise",
            "C) Physical, chemical, biological, sociological",
            "D) Local, regional, global, cosmic"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Physical, chemical, biological, sociological."
        },
        {
          "id": "evs-w2-83",
          "question": "Risk depends on the hazard's magnitude and the:",
          "options": [
            "A) Colour of the pollutant",
            "B) Vulnerability of those exposed",
            "C) Time of day",
            "D) Number of laws"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Vulnerability of those exposed."
        },
        {
          "id": "evs-w2-84",
          "question": "Poverty and malnutrition fall under which hazard type?",
          "options": [
            "A) Sociological",
            "B) Chemical",
            "C) Physical",
            "D) Biological"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Sociological."
        },
        {
          "id": "evs-w2-85",
          "question": "Radon gas is classed as which physical hazard?",
          "options": [
            "A) Noise",
            "B) Hydrological",
            "C) Meteorological",
            "D) Radiation"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Radiation."
        },
        {
          "id": "evs-w2-86",
          "question": "EDCs crossing from mother to foetus is which exposure route?",
          "options": [
            "A) Ocular",
            "B) Dermal",
            "C) Transplacental",
            "D) Inhalation"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Transplacental."
        },
        {
          "id": "evs-w2-87",
          "question": "Drugs found in wastewater are called:",
          "options": [
            "A) Primary pollutants",
            "B) Emerging contaminants",
            "C) POPs",
            "D) Aerosols"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Emerging contaminants."
        },
        {
          "id": "evs-w2-88",
          "question": "BPA is described as a synthetic:",
          "options": [
            "A) Oestrogen",
            "B) Androgen",
            "C) Insulin",
            "D) Thyroid hormone"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Oestrogen."
        },
        {
          "id": "evs-w2-89",
          "question": "Phthalates act mainly as:",
          "options": [
            "A) Carcinogenic dyes only",
            "B) Oestrogen mimics",
            "C) Neurotoxic metals",
            "D) Anti-androgens"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Anti-androgens."
        },
        {
          "id": "evs-w2-90",
          "question": "Phthalates make up what share of flexible PVC by weight?",
          "options": [
            "A) 70\u201390%",
            "B) 1\u20132%",
            "C) 25\u201350%",
            "D) 5\u201310%"
          ],
          "correct": "C",
          "rationale": "Correct Option C: 25\u201350%."
        },
        {
          "id": "evs-w2-91",
          "question": "The EU banned BPA in all food-contact materials in:",
          "options": [
            "A) 2011",
            "B) 2022",
            "C) 2012",
            "D) 2010"
          ],
          "correct": "B",
          "rationale": "Correct Option B: 2022."
        },
        {
          "id": "evs-w2-92",
          "question": "The USA FDA banned BPA in baby bottles in:",
          "options": [
            "A) 2012",
            "B) 2022",
            "C) 2005",
            "D) 1999"
          ],
          "correct": "A",
          "rationale": "Correct Option A: 2012."
        },
        {
          "id": "evs-w2-93",
          "question": "The \u201clow-dose hypothesis\u201d for BPA says it:",
          "options": [
            "A) Only affects plants",
            "B) Is safe at any dose",
            "C) Only harms at huge doses",
            "D) Has effects far below traditional safe levels"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Has effects far below traditional safe levels."
        },
        {
          "id": "evs-w2-94",
          "question": "Which is a safer natural blue food colour?",
          "options": [
            "A) Sunset yellow",
            "B) Tartrazine",
            "C) Spirulina",
            "D) Azo dye"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Spirulina."
        },
        {
          "id": "evs-w2-95",
          "question": "Malaria is transmitted by:",
          "options": [
            "A) Male Aedes mosquito",
            "B) Female Anopheles mosquito",
            "C) Housefly",
            "D) Contaminated water"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Female Anopheles mosquito."
        },
        {
          "id": "evs-w2-96",
          "question": "Which Plasmodium species causes over 90% of malaria deaths?",
          "options": [
            "A) P. falciparum",
            "B) P. vivax",
            "C) P. ovale",
            "D) P. malariae"
          ],
          "correct": "A",
          "rationale": "Correct Option A: P. falciparum."
        },
        {
          "id": "evs-w2-97",
          "question": "Which Plasmodium species can relapse years later due to hypnozoites?",
          "options": [
            "A) P. malariae",
            "B) P. falciparum",
            "C) P. knowlesi",
            "D) P. vivax"
          ],
          "correct": "D",
          "rationale": "Correct Option D: P. vivax."
        },
        {
          "id": "evs-w2-98",
          "question": "First-line WHO treatment for malaria is:",
          "options": [
            "A) Remdesivir",
            "B) Penicillin",
            "C) Artemisinin combination therapy (ACT)",
            "D) Paxlovid"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Artemisinin combination therapy (ACT)."
        },
        {
          "id": "evs-w2-99",
          "question": "The first WHO-approved malaria vaccine (2021) is:",
          "options": [
            "A) R21/Matrix-M",
            "B) RTS,S (Mosquirix)",
            "C) Covaxin",
            "D) BCG"
          ],
          "correct": "B",
          "rationale": "Correct Option B: RTS,S (Mosquirix)."
        },
        {
          "id": "evs-w2-100",
          "question": "SARS-CoV-2 enters cells by binding its spike protein to:",
          "options": [
            "A) ACE2",
            "B) Haemoglobin",
            "C) Insulin receptor",
            "D) Oestrogen receptor"
          ],
          "correct": "A",
          "rationale": "Correct Option A: ACE2."
        },
        {
          "id": "evs-w2-101",
          "question": "The WHO declared COVID-19 a pandemic on:",
          "options": [
            "A) 15 August 2020",
            "B) 1 January 2020",
            "C) 31 December 2019",
            "D) 11 March 2020"
          ],
          "correct": "D",
          "rationale": "Correct Option D: 11 March 2020."
        },
        {
          "id": "evs-w2-102",
          "question": "The Delta variant was first identified in:",
          "options": [
            "A) South Africa",
            "B) UK",
            "C) India",
            "D) Brazil"
          ],
          "correct": "C",
          "rationale": "Correct Option C: India."
        },
        {
          "id": "evs-w2-103",
          "question": "The most transmissible COVID variant listed (R\u2080 9\u201312) is:",
          "options": [
            "A) Alpha",
            "B) Omicron",
            "C) Beta",
            "D) Delta"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Omicron."
        },
        {
          "id": "evs-w2-104",
          "question": "The single most effective intervention against waterborne disease is:",
          "options": [
            "A) WASH",
            "B) Antibiotics",
            "C) Vaccines only",
            "D) Masks"
          ],
          "correct": "A",
          "rationale": "Correct Option A: WASH."
        },
        {
          "id": "evs-w2-105",
          "question": "REACH is a chemical regulation of the:",
          "options": [
            "A) Japan",
            "B) USA",
            "C) India",
            "D) European Union"
          ],
          "correct": "D",
          "rationale": "Correct Option D: European Union."
        },
        {
          "id": "evs-w2-106",
          "question": "The precautionary principle places the burden of proof on:",
          "options": [
            "A) Scientists only",
            "B) The public",
            "C) Industry",
            "D) Farmers"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Industry."
        },
        {
          "id": "evs-w2-107",
          "question": "Prion diseases include:",
          "options": [
            "A) Malaria and dengue",
            "B) CJD and BSE",
            "C) Cholera and typhoid",
            "D) TB and plague"
          ],
          "correct": "B",
          "rationale": "Correct Option B: CJD and BSE."
        },
        {
          "id": "evs-w2-108",
          "question": "The largest single use of BPA (65\u201370%) is in:",
          "options": [
            "A) Polycarbonates",
            "B) Epoxy resins",
            "C) Glass",
            "D) Paper"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Polycarbonates."
        },
        {
          "id": "evs-w2-109",
          "question": "BPA is poorly soluble in:",
          "options": [
            "A) Acetone",
            "B) Organic solvents",
            "C) Alcohol",
            "D) Water"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Water."
        },
        {
          "id": "evs-w2-110",
          "question": "BPA binds which receptors?",
          "options": [
            "A) Insulin receptors",
            "B) ACE2",
            "C) ER\u03b1 and ER\u03b2",
            "D) Thiol groups"
          ],
          "correct": "C",
          "rationale": "Correct Option C: ER\u03b1 and ER\u03b2."
        },
        {
          "id": "evs-w2-111",
          "question": "BPA acting to both mimic and block oestrogen makes it a:",
          "options": [
            "A) Full antagonist only",
            "B) SERM / partial agonist",
            "C) Heavy metal",
            "D) Catalyst"
          ],
          "correct": "B",
          "rationale": "Correct Option B: SERM / partial agonist."
        },
        {
          "id": "evs-w2-112",
          "question": "BPA's half-life in soil and water is about:",
          "options": [
            "A) 4.5 days",
            "B) 4.5 years",
            "C) 45 days",
            "D) 1 hour"
          ],
          "correct": "A",
          "rationale": "Correct Option A: 4.5 days."
        },
        {
          "id": "evs-w2-113",
          "question": "BPA interferes with nitrogen fixation in:",
          "options": [
            "A) Lightning",
            "B) Ocean algae",
            "C) Cattle guts",
            "D) Legume roots"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Legume roots."
        },
        {
          "id": "evs-w2-114",
          "question": "BPA in thermal receipts enters the body mainly through the:",
          "options": [
            "A) Eyes",
            "B) Lungs",
            "C) Skin",
            "D) Ears"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Skin."
        },
        {
          "id": "evs-w2-115",
          "question": "Which step helps limit BPA exposure?",
          "options": [
            "A) Microwave food in plastic",
            "B) Use glass or steel bottles",
            "C) Drink hot tea from plastic cups",
            "D) Eat more canned food"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Use glass or steel bottles."
        },
        {
          "id": "evs-w2-116",
          "question": "Mercury is unusual among metals because it is:",
          "options": [
            "A) Liquid at room temperature",
            "B) A gas at room temperature",
            "C) Non-toxic",
            "D) Magnetic"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Liquid at room temperature."
        },
        {
          "id": "evs-w2-117",
          "question": "The three forms of mercury are:",
          "options": [
            "A) Alpha, beta, gamma",
            "B) Solid, liquid, gas only",
            "C) Red, black, white",
            "D) Elemental, inorganic, organic"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Elemental, inorganic, organic."
        },
        {
          "id": "evs-w2-118",
          "question": "Methylmercury forms when inorganic mercury is methylated by:",
          "options": [
            "A) Human liver",
            "B) Sunlight in air",
            "C) Microorganisms in soil and water",
            "D) Volcanoes"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Microorganisms in soil and water."
        },
        {
          "id": "evs-w2-119",
          "question": "The largest use of mercury in the pie chart is:",
          "options": [
            "A) Batteries",
            "B) Artisanal & small-scale gold mining",
            "C) Lamps",
            "D) Dental amalgam"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Artisanal & small-scale gold mining."
        },
        {
          "id": "evs-w2-120",
          "question": "About how much of atmospheric mercury comes from burning coal?",
          "options": [
            "A) Half",
            "B) A tenth",
            "C) All of it",
            "D) None"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Half."
        },
        {
          "id": "evs-w2-121",
          "question": "Dental amalgam contains about what share of elemental mercury?",
          "options": [
            "A) 20%",
            "B) 5%",
            "C) 95%",
            "D) 50%"
          ],
          "correct": "D",
          "rationale": "Correct Option D: 50%."
        },
        {
          "id": "evs-w2-122",
          "question": "Mercury damages proteins by binding to:",
          "options": [
            "A) Oestrogen receptors",
            "B) Carbon dioxide",
            "C) Thiol (\u2013SH) groups of cysteine",
            "D) Chlorophyll"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Thiol (\u2013SH) groups of cysteine."
        },
        {
          "id": "evs-w2-123",
          "question": "The target organ of mercury is the:",
          "options": [
            "A) Skin",
            "B) Brain",
            "C) Bones",
            "D) Hair"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Brain."
        },
        {
          "id": "evs-w2-124",
          "question": "Acrodynia, where skin turns pink and peels, is also called:",
          "options": [
            "A) Pink disease",
            "B) Blue baby syndrome",
            "C) Itai-itai",
            "D) Fluorosis"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Pink disease."
        },
        {
          "id": "evs-w2-125",
          "question": "For a mercury spill, the notes suggest sprinkling:",
          "options": [
            "A) Sugar",
            "B) Water",
            "C) Salt",
            "D) Powdered sulfur"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Powdered sulfur."
        },
        {
          "id": "evs-w2-126",
          "question": "Chelation therapy for mercury poisoning uses:",
          "options": [
            "A) Insulin",
            "B) Aspirin",
            "C) DMSA",
            "D) Chlorine"
          ],
          "correct": "C",
          "rationale": "Correct Option C: DMSA."
        },
        {
          "id": "evs-w2-127",
          "question": "Mercury vapour is absorbed easily through the lungs because it is:",
          "options": [
            "A) Hydrophilic",
            "B) Lipophilic",
            "C) Radioactive",
            "D) Heavy"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Lipophilic."
        },
        {
          "id": "evs-w2-128",
          "question": "Correct order of disaster management phases:",
          "options": [
            "A) Prevention \u2192 preparedness \u2192 response \u2192 recovery",
            "B) Response \u2192 prevention \u2192 recovery \u2192 preparedness",
            "C) Recovery \u2192 response \u2192 preparedness \u2192 prevention",
            "D) Preparedness \u2192 recovery \u2192 prevention \u2192 response"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Prevention \u2192 preparedness \u2192 response \u2192 recovery."
        },
        {
          "id": "evs-w2-129",
          "question": "The point on the surface directly above an earthquake's origin is the:",
          "options": [
            "A) Hypocentre",
            "B) Focus",
            "C) Fault",
            "D) Epicentre"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Epicentre."
        },
        {
          "id": "evs-w2-130",
          "question": "Earthquake intensity is measured on the Richter or:",
          "options": [
            "A) Saffir\u2013Simpson scale",
            "B) Beaufort scale",
            "C) Moment Magnitude Scale",
            "D) pH scale"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Moment Magnitude Scale."
        },
        {
          "id": "evs-w2-131",
          "question": "The 1967 Koynanagar earthquake is an example of:",
          "options": [
            "A) Volcanic earthquake",
            "B) Reservoir-induced seismicity",
            "C) Subduction quake",
            "D) Fracking quake"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Reservoir-induced seismicity."
        },
        {
          "id": "evs-w2-132",
          "question": "Early warning systems for earthquakes detect:",
          "options": [
            "A) P-waves before S-waves",
            "B) S-waves before P-waves",
            "C) Tsunami waves first",
            "D) Surface cracks"
          ],
          "correct": "A",
          "rationale": "Correct Option A: P-waves before S-waves."
        },
        {
          "id": "evs-w2-133",
          "question": "Base isolators in buildings are:",
          "options": [
            "A) Lightning rods",
            "B) Flood walls",
            "C) Sirens",
            "D) Rubber or metal bearings that absorb shaking"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Rubber or metal bearings that absorb shaking."
        },
        {
          "id": "evs-w2-134",
          "question": "The 2011 T\u014dhoku earthquake led to a meltdown at:",
          "options": [
            "A) Three Mile Island",
            "B) Chernobyl",
            "C) Fukushima",
            "D) Kudankulam"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Fukushima."
        },
        {
          "id": "evs-w2-135",
          "question": "Tropical cyclones in the Atlantic are called:",
          "options": [
            "A) Typhoons",
            "B) Hurricanes",
            "C) Willy-willies",
            "D) Tornadoes"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Hurricanes."
        },
        {
          "id": "evs-w2-136",
          "question": "Tropical cyclones in the Pacific are called:",
          "options": [
            "A) Typhoons",
            "B) Hurricanes",
            "C) Cyclones",
            "D) Monsoons"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Typhoons."
        },
        {
          "id": "evs-w2-137",
          "question": "In the Northern Hemisphere, cyclones rotate:",
          "options": [
            "A) Randomly",
            "B) Clockwise",
            "C) Do not rotate",
            "D) Anticlockwise"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Anticlockwise."
        },
        {
          "id": "evs-w2-138",
          "question": "Cyclones rarely form between 0\u00b0 and 5\u00b0 latitude because of a lack of:",
          "options": [
            "A) Moisture",
            "B) Warm water",
            "C) Coriolis force",
            "D) Wind"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Coriolis force."
        },
        {
          "id": "evs-w2-139",
          "question": "Cyclone Fani (2019) mainly hit:",
          "options": [
            "A) Kerala",
            "B) Odisha",
            "C) Gujarat",
            "D) Tamil Nadu"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Odisha."
        },
        {
          "id": "evs-w2-140",
          "question": "Hurricane Katrina's flooding of New Orleans was caused by:",
          "options": [
            "A) Levee failures",
            "B) Dam burst in Canada",
            "C) Tsunami",
            "D) Glacier melt"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Levee failures."
        },
        {
          "id": "evs-w2-141",
          "question": "Which natural feature absorbs storm energy and protects coasts from cyclones?",
          "options": [
            "A) Sand dunes only",
            "B) Deserts",
            "C) Glaciers",
            "D) Mangroves"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Mangroves."
        },
        {
          "id": "evs-w2-142",
          "question": "The slowest type of landslide is:",
          "options": [
            "A) Debris flow",
            "B) Rockfall",
            "C) Creep",
            "D) Mudslide"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Creep."
        },
        {
          "id": "evs-w2-143",
          "question": "A landslide that moves in a rotational way is a:",
          "options": [
            "A) Creep",
            "B) Slump",
            "C) Rockfall",
            "D) Debris flow"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Slump."
        },
        {
          "id": "evs-w2-144",
          "question": "The Oso landslide (2014) killed:",
          "options": [
            "A) 43 people",
            "B) 4,300 people",
            "C) 1,985 people",
            "D) 1,800 people"
          ],
          "correct": "A",
          "rationale": "Correct Option A: 43 people."
        },
        {
          "id": "evs-w2-145",
          "question": "The Pakistan floods of July 2010 affected about:",
          "options": [
            "A) 20,000 people",
            "B) 2 million people",
            "C) 200 million people",
            "D) 20 million people"
          ],
          "correct": "D",
          "rationale": "Correct Option D: 20 million people."
        },
        {
          "id": "evs-w2-146",
          "question": "India's national disaster management authority is:",
          "options": [
            "A) UNDRR",
            "B) FEMA",
            "C) NDMA",
            "D) NGT"
          ],
          "correct": "C",
          "rationale": "Correct Option C: NDMA."
        },
        {
          "id": "evs-w2-147",
          "question": "The UN body focused on disaster risk reduction is:",
          "options": [
            "A) UNOCHA",
            "B) UNDRR",
            "C) UNEP",
            "D) WHO"
          ],
          "correct": "B",
          "rationale": "Correct Option B: UNDRR."
        },
        {
          "id": "evs-w2-148",
          "question": "MyShake is an app for:",
          "options": [
            "A) Earthquake alerts",
            "B) Cyclone tracking",
            "C) Flood mapping",
            "D) Air quality"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Earthquake alerts."
        },
        {
          "id": "evs-w2-149",
          "question": "Soil liquefaction during earthquakes happens in:",
          "options": [
            "A) Deserts only",
            "B) Solid granite",
            "C) Glaciers",
            "D) Soft ground"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Soft ground."
        },
        {
          "id": "evs-w2-150",
          "question": "Which flood type occurs suddenly from heavy local rain or a dam break?",
          "options": [
            "A) Coastal flood",
            "B) Riverine flood",
            "C) Flash flood",
            "D) Urban flood"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Flash flood."
        }
      ]
    },
    {
      "id": "evs-m3",
      "moduleNum": 3,
      "pdfUrl": "/pdfs/environmental/EVS_MOD-3.pdf",
      "title": "Week 3: Environmental Pollution and Waste Management Techniques",
      "co": "CO: 3",
      "examScope": "CAT-2 & FAT (CBT MCQ)",
      "weightage": "25% of CBT Exam (approx 25 MCQs)",
      "status": "not_confident",
      "scope": "Air pollution: Primary vs secondary pollutants (Ground-level ozone, PAN); Photochemical smog (NOx + VOCs + sunlight); Acid rain (pH < 5.6 caused by SO2 and NOx); Air pollution control devices: Cyclone separator, Electrostatic Precipitator (ESP), Baghouse, Wet scrubber, FGD, SCR; Water pollution: Point vs non-point sources; Water quality parameters (DO, BOD, COD, pH 6.5-8.5, turbidity < 1 NTU); Water-borne diseases (Minamata: methylmercury, Itai-itai: cadmium, Blue baby: nitrates, Fluorosis: fluoride); Wastewater STP stages (Primary physical, Secondary biological activated sludge, Tertiary disinfection); Solid waste 3Rs, Sanitary landfill, Pyrolysis, Composting; Biomedical waste autoclaving; e-Waste EPR.",
      "blueprint": {
        "marksTotal": "25 Marks in FAT CBT",
        "questionTypes": [
          {
            "type": "Pollutant Toxicity & Disease Matching",
            "desc": "Matching contaminants to conditions: Methylmercury -> Minamata, Cadmium -> Itai-itai, Nitrate -> Methemoglobinemia."
          },
          {
            "type": "Air & Water Treatment Technology",
            "desc": "Choosing appropriate device: ESP for fly ash (electrical charge), Cyclone for coarse particles (centrifugal force), Activated sludge for secondary biological BOD reduction."
          }
        ]
      },
      "formulaSheet": [
        {
          "name": "BOD vs COD Fundamental Relation",
          "formula": "\\text{COD} \\ge \\text{BOD}_5",
          "note": "COD oxidizes both biodegradable and non-biodegradable organic carbon"
        },
        {
          "name": "Acid Rain Threshold",
          "formula": "\\text{pH} < 5.6",
          "note": "Pure unpolluted rain is naturally acidic (pH 5.6) due to dissolved atmospheric CO2 forming carbonic acid"
        },
        {
          "name": "Decibel Sound Level",
          "formula": "L_p = 20 \\log_{10}\\left(\\frac{p}{p_0}\\right) \\text{ dB}",
          "note": "p0 = 20 micro-Pascals threshold of hearing"
        }
      ],
      "examInsights": [
        {
          "title": "BOD vs COD Inequality",
          "desc": "VIT exam questions repeatedly ask: 'Is BOD always greater than COD?' NO. COD is ALWAYS greater than or equal to BOD because potassium dichromate chemically oxidizes both biodegradable and non-biodegradable organics."
        },
        {
          "title": "Electrostatic Precipitator Efficiency",
          "desc": "ESPs achieve >99% efficiency for sub-micron particulate matter by ionizing particles with high voltage corona discharge and collecting them on grounded plates."
        }
      ],
      "mcqs": [
        {
          "id": "evs-w3-1",
          "question": "Which is a secondary air pollutant?",
          "options": [
            "A) Lead",
            "B) Carbon monoxide",
            "C) Sulphur dioxide",
            "D) Ground-level ozone"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Ground-level ozone."
        },
        {
          "id": "evs-w3-2",
          "question": "Ground-level ozone forms from:",
          "options": [
            "A) SO\u2082 + ammonia",
            "B) CO + water",
            "C) NOx + VOCs + sunlight",
            "D) CFCs + UV"
          ],
          "correct": "C",
          "rationale": "Correct Option C: NOx + VOCs + sunlight."
        },
        {
          "id": "evs-w3-3",
          "question": "PAN in photochemical smog mainly causes:",
          "options": [
            "A) Bone damage",
            "B) Eye irritation",
            "C) Hearing loss",
            "D) Blue baby syndrome"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Eye irritation."
        },
        {
          "id": "evs-w3-4",
          "question": "Carbon monoxide binds haemoglobin about how many times more strongly than oxygen?",
          "options": [
            "A) 200\u00d7",
            "B) 2\u00d7",
            "C) 20\u00d7",
            "D) 2,000\u00d7"
          ],
          "correct": "A",
          "rationale": "Correct Option A: 200\u00d7."
        },
        {
          "id": "evs-w3-5",
          "question": "Which pollutant penetrates deep into lungs and the bloodstream?",
          "options": [
            "A) Pollen only",
            "B) PM10",
            "C) Sand",
            "D) PM2.5"
          ],
          "correct": "D",
          "rationale": "Correct Option D: PM2.5."
        },
        {
          "id": "evs-w3-6",
          "question": "The second leading cause of lung cancer after smoking is:",
          "options": [
            "A) CO\u2082",
            "B) Ozone",
            "C) Radon",
            "D) Ammonia"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Radon."
        },
        {
          "id": "evs-w3-7",
          "question": "Asbestos exposure causes:",
          "options": [
            "A) Fluorosis",
            "B) Mesothelioma",
            "C) Minamata disease",
            "D) Methemoglobinemia"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Mesothelioma."
        },
        {
          "id": "evs-w3-8",
          "question": "An AQI of 401\u2013500 is categorized as:",
          "options": [
            "A) Hazardous (maroon)",
            "B) Very unhealthy (purple)",
            "C) Unhealthy (red)",
            "D) Moderate (yellow)"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Hazardous (maroon)."
        },
        {
          "id": "evs-w3-9",
          "question": "An AQI of 0\u201350 is shown in which colour?",
          "options": [
            "A) Blue",
            "B) Yellow",
            "C) Orange",
            "D) Green"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Green."
        },
        {
          "id": "evs-w3-10",
          "question": "The largest emitters of SO\u2082, NOx and mercury are:",
          "options": [
            "A) Forest fires",
            "B) Two-wheelers",
            "C) Coal-fired thermal power plants",
            "D) Household cooking"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Coal-fired thermal power plants."
        },
        {
          "id": "evs-w3-11",
          "question": "Cement production contributes about what share of global CO\u2082?",
          "options": [
            "A) ~30%",
            "B) ~8%",
            "C) ~1%",
            "D) ~50%"
          ],
          "correct": "B",
          "rationale": "Correct Option B: ~8%."
        },
        {
          "id": "evs-w3-12",
          "question": "Which vehicle type is the highest emitter of PM2.5?",
          "options": [
            "A) Diesel vehicles",
            "B) Electric cars",
            "C) Bicycles",
            "D) CNG buses"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Diesel vehicles."
        },
        {
          "id": "evs-w3-13",
          "question": "Stubble burning in Punjab and Haryana worsens winter smog in:",
          "options": [
            "A) Kolkata",
            "B) Chennai",
            "C) Mumbai",
            "D) Delhi"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Delhi."
        },
        {
          "id": "evs-w3-14",
          "question": "Acid rain has a pH below:",
          "options": [
            "A) 8.5",
            "B) 7.0",
            "C) 5.6",
            "D) 3.0"
          ],
          "correct": "C",
          "rationale": "Correct Option C: 5.6."
        },
        {
          "id": "evs-w3-15",
          "question": "The Taj Mahal's yellowing is linked to:",
          "options": [
            "A) Ozone depletion",
            "B) Acid rain",
            "C) Thermal pollution",
            "D) Noise"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Acid rain."
        },
        {
          "id": "evs-w3-16",
          "question": "The Antarctic ozone hole was discovered in:",
          "options": [
            "A) 1985",
            "B) 1952",
            "C) 1972",
            "D) 2001"
          ],
          "correct": "A",
          "rationale": "Correct Option A: 1985."
        },
        {
          "id": "evs-w3-17",
          "question": "CFCs destroy ozone by releasing:",
          "options": [
            "A) Carbon monoxide",
            "B) Nitrogen gas",
            "C) Sulphur",
            "D) Chlorine radicals"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Chlorine radicals."
        },
        {
          "id": "evs-w3-18",
          "question": "Which device uses centrifugal force to remove larger particles?",
          "options": [
            "A) Baghouse",
            "B) Electrostatic precipitator",
            "C) Cyclone separator",
            "D) Catalytic converter"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Cyclone separator."
        },
        {
          "id": "evs-w3-19",
          "question": "Which device uses electrical charge to collect fine ash and soot?",
          "options": [
            "A) Cyclone separator",
            "B) Electrostatic precipitator",
            "C) Gravity settling chamber",
            "D) Wet scrubber"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Electrostatic precipitator."
        },
        {
          "id": "evs-w3-20",
          "question": "In a baghouse, dust is shaken off the bags by:",
          "options": [
            "A) Pulse-jet air blasts",
            "B) Water sprays",
            "C) Magnets",
            "D) Heating"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Pulse-jet air blasts."
        },
        {
          "id": "evs-w3-21",
          "question": "Flue gas desulphurization removes:",
          "options": [
            "A) VOCs",
            "B) NOx",
            "C) CO",
            "D) SO\u2082"
          ],
          "correct": "D",
          "rationale": "Correct Option D: SO\u2082."
        },
        {
          "id": "evs-w3-22",
          "question": "Selective catalytic reduction converts NOx into:",
          "options": [
            "A) O\u2083",
            "B) NH\u2083 only",
            "C) N\u2082 and H\u2082O",
            "D) HNO\u2083"
          ],
          "correct": "C",
          "rationale": "Correct Option C: N\u2082 and H\u2082O."
        },
        {
          "id": "evs-w3-23",
          "question": "India's NAAQS annual limit for PM2.5 is:",
          "options": [
            "A) 5 \u00b5g/m\u00b3",
            "B) 40 \u00b5g/m\u00b3",
            "C) 15 \u00b5g/m\u00b3",
            "D) 100 \u00b5g/m\u00b3"
          ],
          "correct": "B",
          "rationale": "Correct Option B: 40 \u00b5g/m\u00b3."
        },
        {
          "id": "evs-w3-24",
          "question": "BS-VI norms, adopted in 2020, are roughly equivalent to:",
          "options": [
            "A) Euro 6",
            "B) Euro 2",
            "C) Euro 4",
            "D) US Tier 1"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Euro 6."
        },
        {
          "id": "evs-w3-25",
          "question": "NCAP (2019) targets PM reduction in how many cities?",
          "options": [
            "A) 50",
            "B) 22",
            "C) 500",
            "D) 122"
          ],
          "correct": "D",
          "rationale": "Correct Option D: 122."
        },
        {
          "id": "evs-w3-26",
          "question": "The London Great Smog occurred in:",
          "options": [
            "A) 1940",
            "B) 1956",
            "C) 1952",
            "D) 1985"
          ],
          "correct": "C",
          "rationale": "Correct Option C: 1952."
        },
        {
          "id": "evs-w3-27",
          "question": "The London smog led to the UK Clean Air Act of:",
          "options": [
            "A) 1952",
            "B) 1956",
            "C) 1972",
            "D) 1987"
          ],
          "correct": "B",
          "rationale": "Correct Option B: 1956."
        },
        {
          "id": "evs-w3-28",
          "question": "A layer of warm air trapping pollutants near the ground is called:",
          "options": [
            "A) Temperature inversion",
            "B) Greenhouse effect",
            "C) Eutrophication",
            "D) Coriolis effect"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Temperature inversion."
        },
        {
          "id": "evs-w3-29",
          "question": "WHO-acceptable pH for drinking water is:",
          "options": [
            "A) 7.0 only",
            "B) 4.0\u20135.5",
            "C) 9.0\u201311.0",
            "D) 6.5\u20138.5"
          ],
          "correct": "D",
          "rationale": "Correct Option D: 6.5\u20138.5."
        },
        {
          "id": "evs-w3-30",
          "question": "WHO turbidity limit for drinking water is less than:",
          "options": [
            "A) 100 NTU",
            "B) 10 NTU",
            "C) 1 NTU",
            "D) 50 NTU"
          ],
          "correct": "C",
          "rationale": "Correct Option C: 1 NTU."
        },
        {
          "id": "evs-w3-31",
          "question": "WHO limit for arsenic and lead in drinking water is below:",
          "options": [
            "A) 1 mg/L",
            "B) 0.01 mg/L",
            "C) 10 mg/L",
            "D) 0.5 mg/L"
          ],
          "correct": "B",
          "rationale": "Correct Option B: 0.01 mg/L."
        },
        {
          "id": "evs-w3-32",
          "question": "Pollution from a factory pipe is:",
          "options": [
            "A) Point source pollution",
            "B) Non-point source pollution",
            "C) Transboundary pollution",
            "D) Thermal only"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Point source pollution."
        },
        {
          "id": "evs-w3-33",
          "question": "Agricultural runoff is an example of:",
          "options": [
            "A) Oil pollution",
            "B) Point source pollution",
            "C) Radioactive pollution",
            "D) Non-point source pollution"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Non-point source pollution."
        },
        {
          "id": "evs-w3-34",
          "question": "Cholera is caused by:",
          "options": [
            "A) E. histolytica",
            "B) Salmonella typhi",
            "C) Vibrio cholerae",
            "D) Hepatitis A virus"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Vibrio cholerae."
        },
        {
          "id": "evs-w3-35",
          "question": "Typhoid is caused by:",
          "options": [
            "A) Vibrio cholerae",
            "B) Salmonella typhi",
            "C) Plasmodium",
            "D) E. coli only"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Salmonella typhi."
        },
        {
          "id": "evs-w3-36",
          "question": "Blue baby syndrome is caused by excess:",
          "options": [
            "A) Nitrates",
            "B) Fluoride",
            "C) Arsenic",
            "D) Lead"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Nitrates."
        },
        {
          "id": "evs-w3-37",
          "question": "Excess fluoride in water causes:",
          "options": [
            "A) Typhoid",
            "B) Minamata disease",
            "C) Blue baby syndrome",
            "D) Dental and skeletal fluorosis"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Dental and skeletal fluorosis."
        },
        {
          "id": "evs-w3-38",
          "question": "Minamata disease is caused by:",
          "options": [
            "A) Cadmium",
            "B) Arsenic",
            "C) Methylmercury",
            "D) Nitrates"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Methylmercury."
        },
        {
          "id": "evs-w3-39",
          "question": "Minamata Bay was polluted by the company:",
          "options": [
            "A) Union Carbide",
            "B) Chisso",
            "C) Exxon",
            "D) BP"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Chisso."
        },
        {
          "id": "evs-w3-40",
          "question": "Eutrophication is triggered by excess:",
          "options": [
            "A) Nitrogen and phosphorus",
            "B) Oxygen",
            "C) Salt",
            "D) Heat only"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Nitrogen and phosphorus."
        },
        {
          "id": "evs-w3-41",
          "question": "The Gulf of Mexico dead zone is roughly:",
          "options": [
            "A) 22 km\u00b2",
            "B) 227 km\u00b2",
            "C) 2,272,000 km\u00b2",
            "D) 22,720 km\u00b2"
          ],
          "correct": "D",
          "rationale": "Correct Option D: 22,720 km\u00b2."
        },
        {
          "id": "evs-w3-42",
          "question": "Which stage of sewage treatment is biological?",
          "options": [
            "A) Tertiary",
            "B) Primary",
            "C) Secondary",
            "D) Screening"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Secondary."
        },
        {
          "id": "evs-w3-43",
          "question": "Primary treatment removes about what share of suspended solids?",
          "options": [
            "A) ~95%",
            "B) ~60%",
            "C) ~10%",
            "D) 100%"
          ],
          "correct": "B",
          "rationale": "Correct Option B: ~60%."
        },
        {
          "id": "evs-w3-44",
          "question": "Secondary treatment removes about what share of BOD?",
          "options": [
            "A) 85\u201395%",
            "B) 30%",
            "C) 10%",
            "D) 50%"
          ],
          "correct": "A",
          "rationale": "Correct Option A: 85\u201395%."
        },
        {
          "id": "evs-w3-45",
          "question": "Reverse osmosis and UV disinfection belong to which stage?",
          "options": [
            "A) Grit chamber",
            "B) Primary",
            "C) Secondary",
            "D) Tertiary"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Tertiary."
        },
        {
          "id": "evs-w3-46",
          "question": "Industries recycling all wastewater with no discharge follow:",
          "options": [
            "A) Trickling filtration",
            "B) Point source discharge",
            "C) Zero Liquid Discharge",
            "D) Open dumping"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Zero Liquid Discharge."
        },
        {
          "id": "evs-w3-47",
          "question": "Shared effluent treatment for small industries is called:",
          "options": [
            "A) ETP",
            "B) CETP",
            "C) STP",
            "D) ZLD"
          ],
          "correct": "B",
          "rationale": "Correct Option B: CETP."
        },
        {
          "id": "evs-w3-48",
          "question": "Using plants like vetiver to absorb pollutants is:",
          "options": [
            "A) Phytoremediation",
            "B) Bioremediation",
            "C) Biomagnification",
            "D) Eutrophication"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Phytoremediation."
        },
        {
          "id": "evs-w3-49",
          "question": "The foam on the Yamuna at Okhla comes mainly from:",
          "options": [
            "A) Hot water",
            "B) Oil spills",
            "C) Mercury",
            "D) Phosphate detergents"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Phosphate detergents."
        },
        {
          "id": "evs-w3-50",
          "question": "The Deepwater Horizon spill occurred in:",
          "options": [
            "A) 1956",
            "B) 1989",
            "C) 2010",
            "D) 2005"
          ],
          "correct": "C",
          "rationale": "Correct Option C: 2010."
        },
        {
          "id": "evs-w3-51",
          "question": "The Exxon Valdez spill released about:",
          "options": [
            "A) 780 million litres",
            "B) 41 million litres",
            "C) 4.9 million barrels",
            "D) 1 billion litres"
          ],
          "correct": "B",
          "rationale": "Correct Option B: 41 million litres."
        },
        {
          "id": "evs-w3-52",
          "question": "Acid mine drainage forms when which mineral oxidizes?",
          "options": [
            "A) Pyrite",
            "B) Quartz",
            "C) Calcite",
            "D) Mica"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Pyrite."
        },
        {
          "id": "evs-w3-53",
          "question": "BIS drinking water standard is:",
          "options": [
            "A) IS 2000:1974",
            "B) IS 456:2000",
            "C) ISO 14001",
            "D) IS 10500:2012"
          ],
          "correct": "D",
          "rationale": "Correct Option D: IS 10500:2012."
        },
        {
          "id": "evs-w3-54",
          "question": "Sensitive species that vanish first and indicate pollution include:",
          "options": [
            "A) Water hyacinth",
            "B) Rats and crows",
            "C) Mayflies, trout, salmon",
            "D) Tilapia"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Mayflies, trout, salmon."
        },
        {
          "id": "evs-w3-55",
          "question": "Human-made chemicals foreign to the soil are called:",
          "options": [
            "A) Endemic",
            "B) Xenobiotic",
            "C) Biogenic",
            "D) Humic"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Xenobiotic."
        },
        {
          "id": "evs-w3-56",
          "question": "Chlorpyrifos and malathion are examples of:",
          "options": [
            "A) Organophosphate insecticides",
            "B) Heavy metals",
            "C) Plastics",
            "D) Fertilizers"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Organophosphate insecticides."
        },
        {
          "id": "evs-w3-57",
          "question": "Soil pollution exists when contaminants:",
          "options": [
            "A) Are below detection",
            "B) Are present at all",
            "C) Are organic",
            "D) Exceed natural levels"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Exceed natural levels."
        },
        {
          "id": "evs-w3-58",
          "question": "The most important trigger of soil pollution in urban areas is:",
          "options": [
            "A) Wetlands",
            "B) Forests",
            "C) Construction sites",
            "D) Parks"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Construction sites."
        },
        {
          "id": "evs-w3-59",
          "question": "Construction dust is especially dangerous because particles are smaller than:",
          "options": [
            "A) 1 mm",
            "B) 10 microns",
            "C) 1 cm",
            "D) 100 microns"
          ],
          "correct": "B",
          "rationale": "Correct Option B: 10 microns."
        },
        {
          "id": "evs-w3-60",
          "question": "Demolition of older buildings can release:",
          "options": [
            "A) Asbestos",
            "B) Radon",
            "C) Ozone",
            "D) Methane"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Asbestos."
        },
        {
          "id": "evs-w3-61",
          "question": "Which group is most at risk of eating contaminated soil?",
          "options": [
            "A) Teenagers",
            "B) Adults over 60",
            "C) Farmers only",
            "D) Children under 3"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Children under 3."
        },
        {
          "id": "evs-w3-62",
          "question": "Dermal (skin) absorption mainly applies to:",
          "options": [
            "A) Clay",
            "B) Sand",
            "C) Volatile organic compounds",
            "D) Water"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Volatile organic compounds."
        },
        {
          "id": "evs-w3-63",
          "question": "Natural perchlorate can form in soil with chlorine, metal and:",
          "options": [
            "A) Sunlight only",
            "B) Thunderstorm energy",
            "C) Earthworms",
            "D) Ice"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Thunderstorm energy."
        },
        {
          "id": "evs-w3-64",
          "question": "Leaking sewers plus chlorine can generate:",
          "options": [
            "A) Trihalomethanes (chloroform)",
            "B) Ozone",
            "C) Nitrates",
            "D) Methane"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Trihalomethanes (chloroform)."
        },
        {
          "id": "evs-w3-65",
          "question": "Death of earthworms due to soil pollution changes:",
          "options": [
            "A) Rainfall",
            "B) Air temperature",
            "C) Sea level",
            "D) Soil structure"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Soil structure."
        },
        {
          "id": "evs-w3-66",
          "question": "Which is a suggested solution for soil pollution?",
          "options": [
            "A) Burning plastic",
            "B) More chemical fertilizer",
            "C) Natural manure",
            "D) Deforestation"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Natural manure."
        },
        {
          "id": "evs-w3-67",
          "question": "World population is expected to exceed 9 billion by:",
          "options": [
            "A) 2025",
            "B) 2050",
            "C) 2100",
            "D) 2030"
          ],
          "correct": "B",
          "rationale": "Correct Option B: 2050."
        },
        {
          "id": "evs-w3-68",
          "question": "Lead in soil can come from:",
          "options": [
            "A) Lead-based paint chips",
            "B) Rainwater",
            "C) Oxygen",
            "D) Earthworms"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Lead-based paint chips."
        },
        {
          "id": "evs-w3-69",
          "question": "A normal conversation is about:",
          "options": [
            "A) 120 dB",
            "B) 30 dB",
            "C) 90 dB",
            "D) 50 dB"
          ],
          "correct": "D",
          "rationale": "Correct Option D: 50 dB."
        },
        {
          "id": "evs-w3-70",
          "question": "A whisper is about:",
          "options": [
            "A) 85 dB",
            "B) 50 dB",
            "C) 30 dB",
            "D) 10 dB"
          ],
          "correct": "C",
          "rationale": "Correct Option C: 30 dB."
        },
        {
          "id": "evs-w3-71",
          "question": "Prolonged exposure above what level damages hearing?",
          "options": [
            "A) 30 dB",
            "B) 85 dB",
            "C) 50 dB",
            "D) 60 dB"
          ],
          "correct": "B",
          "rationale": "Correct Option B: 85 dB."
        },
        {
          "id": "evs-w3-72",
          "question": "Sounds above what level can cause immediate harm?",
          "options": [
            "A) 120 dB",
            "B) 60 dB",
            "C) 85 dB",
            "D) 40 dB"
          ],
          "correct": "A",
          "rationale": "Correct Option A: 120 dB."
        },
        {
          "id": "evs-w3-73",
          "question": "Unlike other pollutants, noise:",
          "options": [
            "A) Is always visible",
            "B) Accumulates in soil",
            "C) Bioaccumulates",
            "D) Does not build up in the environment"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Does not build up in the environment."
        },
        {
          "id": "evs-w3-74",
          "question": "Persistent ringing in the ears is called:",
          "options": [
            "A) Fluorosis",
            "B) Acrodynia",
            "C) Tinnitus",
            "D) Vertigo"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Tinnitus."
        },
        {
          "id": "evs-w3-75",
          "question": "Hearing loss from long work in noisy jobs is called:",
          "options": [
            "A) COPD",
            "B) NIHL",
            "C) PCOS",
            "D) ARDS"
          ],
          "correct": "B",
          "rationale": "Correct Option B: NIHL."
        },
        {
          "id": "evs-w3-76",
          "question": "India's noise rules are the Noise Pollution (Regulation & Control) Rules of:",
          "options": [
            "A) 2000",
            "B) 1986",
            "C) 1981",
            "D) 2010"
          ],
          "correct": "A",
          "rationale": "Correct Option A: 2000."
        },
        {
          "id": "evs-w3-77",
          "question": "Noise underwater especially harms:",
          "options": [
            "A) Crabs only",
            "B) Corals only",
            "C) Seaweed",
            "D) Whales and dolphins"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Whales and dolphins."
        },
        {
          "id": "evs-w3-78",
          "question": "Which is a technological remedy for traffic noise?",
          "options": [
            "A) Louder engines",
            "B) More honking",
            "C) Highway sound barriers",
            "D) Removing trees"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Highway sound barriers."
        },
        {
          "id": "evs-w3-79",
          "question": "Planting trees helps reduce noise because trees:",
          "options": [
            "A) Reflect all sound",
            "B) Absorb sound",
            "C) Produce silence",
            "D) Stop traffic"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Absorb sound."
        },
        {
          "id": "evs-w3-80",
          "question": "Noise was officially added as an air pollutant under the Air Act in:",
          "options": [
            "A) 1987",
            "B) 1981",
            "C) 2000",
            "D) 1974"
          ],
          "correct": "A",
          "rationale": "Correct Option A: 1987."
        },
        {
          "id": "evs-w3-81",
          "question": "Thermal pollution is defined as a sudden change in temperature of a water body caused by:",
          "options": [
            "A) Tides",
            "B) Only volcanoes",
            "C) Seasons",
            "D) Human activity"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Human activity."
        },
        {
          "id": "evs-w3-82",
          "question": "Thermal pollution is a form of:",
          "options": [
            "A) Radioactive pollution",
            "B) Chemical pollution",
            "C) Energy (heat) pollution",
            "D) Noise pollution"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Energy (heat) pollution."
        },
        {
          "id": "evs-w3-83",
          "question": "Warmer water holds:",
          "options": [
            "A) More dissolved oxygen",
            "B) Less dissolved oxygen",
            "C) The same oxygen",
            "D) No salt"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Less dissolved oxygen."
        },
        {
          "id": "evs-w3-84",
          "question": "Even a rise of about how much reduces oxygen solubility?",
          "options": [
            "A) 1\u20131.5\u00b0C",
            "B) 10\u00b0C",
            "C) 0.01\u00b0C",
            "D) 25\u00b0C"
          ],
          "correct": "A",
          "rationale": "Correct Option A: 1\u20131.5\u00b0C."
        },
        {
          "id": "evs-w3-85",
          "question": "Sudden discharge of hot water killing fish is called:",
          "options": [
            "A) Acid shock",
            "B) Eutrophication",
            "C) Biomagnification",
            "D) Thermal shock"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Thermal shock."
        },
        {
          "id": "evs-w3-86",
          "question": "Water released from the bottom of a dam is usually:",
          "options": [
            "A) Saltier",
            "B) Warmer",
            "C) Cooler",
            "D) Radioactive"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Cooler."
        },
        {
          "id": "evs-w3-87",
          "question": "Which invasive species are linked to warmer waters in the notes?",
          "options": [
            "A) Dodos and pigeons",
            "B) Zebra mussels, lionfish, tilapia",
            "C) Lichens and mosses",
            "D) Tigers and lions"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Zebra mussels, lionfish, tilapia."
        },
        {
          "id": "evs-w3-88",
          "question": "A dry cooling tower cools water:",
          "options": [
            "A) Without water loss",
            "B) By evaporation",
            "C) By adding ice",
            "D) Using chemicals"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Without water loss."
        },
        {
          "id": "evs-w3-89",
          "question": "Ponds with nozzles spraying hot water into droplets are:",
          "options": [
            "A) Oxidation ponds",
            "B) Cooling ponds",
            "C) Artificial lakes",
            "D) Spray ponds"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Spray ponds."
        },
        {
          "id": "evs-w3-90",
          "question": "Planting trees along riverbanks reduces thermal pollution by:",
          "options": [
            "A) Increasing turbidity",
            "B) Adding heat",
            "C) Providing shade",
            "D) Blocking rain"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Providing shade."
        },
        {
          "id": "evs-w3-91",
          "question": "Higher temperature makes heavy metals and phenols:",
          "options": [
            "A) Less toxic",
            "B) More soluble and toxic",
            "C) Disappear",
            "D) Solid"
          ],
          "correct": "B",
          "rationale": "Correct Option B: More soluble and toxic."
        },
        {
          "id": "evs-w3-92",
          "question": "Industries can minimize thermal discharge using:",
          "options": [
            "A) Closed-loop cooling",
            "B) Open dumping",
            "C) Deforestation",
            "D) Bigger chimneys"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Closed-loop cooling."
        },
        {
          "id": "evs-w3-93",
          "question": "Integrated Water Resources Management (IWRM) coordinates the management of:",
          "options": [
            "A) Only rainfall",
            "B) Only groundwater",
            "C) Only dams",
            "D) Water, land and related resources"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Water, land and related resources."
        },
        {
          "id": "evs-w3-94",
          "question": "Fair distribution of water among agriculture, industry and households is the principle of:",
          "options": [
            "A) Sustainability",
            "B) Efficiency",
            "C) Equity",
            "D) Integration"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Equity."
        },
        {
          "id": "evs-w3-95",
          "question": "Which irrigation method delivers water directly to plant roots?",
          "options": [
            "A) Flood irrigation",
            "B) Drip irrigation",
            "C) Sprinkler only",
            "D) Furrow"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Drip irrigation."
        },
        {
          "id": "evs-w3-96",
          "question": "Agriculture uses about what share of global freshwater?",
          "options": [
            "A) 70%",
            "B) 10%",
            "C) 30%",
            "D) 95%"
          ],
          "correct": "A",
          "rationale": "Correct Option A: 70%."
        },
        {
          "id": "evs-w3-97",
          "question": "PMKSY's slogan is:",
          "options": [
            "A) Har Ghar Jal",
            "B) Catch the Rain",
            "C) Save Water Save Life",
            "D) Per Drop More Crop"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Per Drop More Crop."
        },
        {
          "id": "evs-w3-98",
          "question": "Jal Shakti Abhiyan was launched in:",
          "options": [
            "A) 1987",
            "B) 2012",
            "C) 2019",
            "D) 2002"
          ],
          "correct": "C",
          "rationale": "Correct Option C: 2019."
        },
        {
          "id": "evs-w3-99",
          "question": "The Atal Bhujal Yojana focuses on:",
          "options": [
            "A) Ocean desalination",
            "B) Community groundwater management",
            "C) Dam construction",
            "D) River linking"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Community groundwater management."
        },
        {
          "id": "evs-w3-100",
          "question": "Cape Town's \u201cDay Zero\u201d water crisis happened in:",
          "options": [
            "A) 2018",
            "B) 2011",
            "C) 2002",
            "D) 2025"
          ],
          "correct": "A",
          "rationale": "Correct Option A: 2018."
        },
        {
          "id": "evs-w3-101",
          "question": "Kerala saves ~30% water in paddy through:",
          "options": [
            "A) Drip for rice",
            "B) Flood irrigation",
            "C) Desalination",
            "D) System of Rice Intensification (SRI)"
          ],
          "correct": "D",
          "rationale": "Correct Option D: System of Rice Intensification (SRI)."
        },
        {
          "id": "evs-w3-102",
          "question": "Zero Budget Natural Farming is associated with:",
          "options": [
            "A) Punjab",
            "B) Kerala",
            "C) Andhra Pradesh",
            "D) Gujarat"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Andhra Pradesh."
        },
        {
          "id": "evs-w3-103",
          "question": "Rajasthan farmers use drip to grow vegetables with about:",
          "options": [
            "A) 10% more water",
            "B) 50% less water",
            "C) 90% less water",
            "D) The same water"
          ],
          "correct": "B",
          "rationale": "Correct Option B: 50% less water."
        },
        {
          "id": "evs-w3-104",
          "question": "Ralegan Siddhi is a model village for water management in:",
          "options": [
            "A) Maharashtra",
            "B) Rajasthan",
            "C) Tamil Nadu",
            "D) Kerala"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Maharashtra."
        },
        {
          "id": "evs-w3-105",
          "question": "Recycling bath and kitchen water for gardens is:",
          "options": [
            "A) Desalination",
            "B) Blackwater treatment",
            "C) Rainwater harvesting",
            "D) Greywater reuse"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Greywater reuse."
        },
        {
          "id": "evs-w3-106",
          "question": "Bio-swales and rain gardens are used for:",
          "options": [
            "A) Noise control",
            "B) Air pollution control",
            "C) Stormwater management",
            "D) Waste incineration"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Stormwater management."
        },
        {
          "id": "evs-w3-107",
          "question": "Israel reuses about what share of treated wastewater?",
          "options": [
            "A) 15%",
            "B) 85%",
            "C) 50%",
            "D) 100%"
          ],
          "correct": "B",
          "rationale": "Correct Option B: 85%."
        },
        {
          "id": "evs-w3-108",
          "question": "Tiruppur's textile industry is cited for:",
          "options": [
            "A) Water recycling plants",
            "B) Mercury pollution",
            "C) Oil spills",
            "D) Noise"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Water recycling plants."
        },
        {
          "id": "evs-w3-109",
          "question": "The UN goal for clean water and sanitation is:",
          "options": [
            "A) SDG 15",
            "B) SDG 13",
            "C) SDG 1",
            "D) SDG 6"
          ],
          "correct": "D",
          "rationale": "Correct Option D: SDG 6."
        },
        {
          "id": "evs-w3-110",
          "question": "Australia's WELS scheme is about:",
          "options": [
            "A) Waste incineration",
            "B) Wildlife protection",
            "C) Water efficiency labels",
            "D) Wind energy"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Water efficiency labels."
        },
        {
          "id": "evs-w3-111",
          "question": "The USA Clean Water Act dates from:",
          "options": [
            "A) 1987",
            "B) 1972",
            "C) 2000",
            "D) 1956"
          ],
          "correct": "B",
          "rationale": "Correct Option B: 1972."
        },
        {
          "id": "evs-w3-112",
          "question": "Contour ploughing and check dams are part of:",
          "options": [
            "A) Watershed management",
            "B) Urban drainage",
            "C) Desalination",
            "D) Greywater reuse"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Watershed management."
        },
        {
          "id": "evs-w3-113",
          "question": "The linear economy follows:",
          "options": [
            "A) Recycle \u2192 reduce \u2192 reuse",
            "B) Reduce \u2192 reuse \u2192 recycle",
            "C) Make \u2192 reuse \u2192 regenerate",
            "D) Take \u2192 make \u2192 dispose"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Take \u2192 make \u2192 dispose."
        },
        {
          "id": "evs-w3-114",
          "question": "The correct priority order of the 3Rs is:",
          "options": [
            "A) Reuse, recycle, reduce",
            "B) Recycle, reuse, reduce",
            "C) Reduce, reuse, recycle",
            "D) Recycle, reduce, reuse"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Reduce, reuse, recycle."
        },
        {
          "id": "evs-w3-115",
          "question": "Why is recycling the last of the 3Rs?",
          "options": [
            "A) It is illegal",
            "B) It needs energy and leaves some waste",
            "C) It creates more materials",
            "D) It is the cheapest"
          ],
          "correct": "B",
          "rationale": "Correct Option B: It needs energy and leaves some waste."
        },
        {
          "id": "evs-w3-116",
          "question": "Designing products to use less material for the same function is:",
          "options": [
            "A) Dematerialization",
            "B) Incineration",
            "C) Leaching",
            "D) Composting"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Dematerialization."
        },
        {
          "id": "evs-w3-117",
          "question": "The steel tiffin box is an example of:",
          "options": [
            "A) Incineration",
            "B) Recycle",
            "C) Landfill",
            "D) Reuse"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Reuse."
        },
        {
          "id": "evs-w3-118",
          "question": "The main obstacle to recycling mentioned in the notes is:",
          "options": [
            "A) High prices of waste",
            "B) Too much segregation",
            "C) Contamination",
            "D) Lack of plastic"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Contamination."
        },
        {
          "id": "evs-w3-119",
          "question": "Anaerobic digestion produces biogas that is mainly:",
          "options": [
            "A) Oxygen",
            "B) Methane",
            "C) Hydrogen",
            "D) CO"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Methane."
        },
        {
          "id": "evs-w3-120",
          "question": "Incineration temperatures are about:",
          "options": [
            "A) 800\u20131000\u00b0C",
            "B) 100\u2013200\u00b0C",
            "C) 2,000\u20133,000\u00b0C",
            "D) 50\u00b0C"
          ],
          "correct": "A",
          "rationale": "Correct Option A: 800\u20131000\u00b0C."
        },
        {
          "id": "evs-w3-121",
          "question": "Incineration can reduce waste volume by up to:",
          "options": [
            "A) 100%",
            "B) 10%",
            "C) 50%",
            "D) 90%"
          ],
          "correct": "D",
          "rationale": "Correct Option D: 90%."
        },
        {
          "id": "evs-w3-122",
          "question": "A 300 t/day incinerator can generate about:",
          "options": [
            "A) 30 kW",
            "B) 300 MW",
            "C) 3 MW",
            "D) 3 GW"
          ],
          "correct": "C",
          "rationale": "Correct Option C: 3 MW."
        },
        {
          "id": "evs-w3-123",
          "question": "The main air pollution concern from incineration is:",
          "options": [
            "A) Ozone",
            "B) Dioxins",
            "C) Radon",
            "D) Noise"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Dioxins."
        },
        {
          "id": "evs-w3-124",
          "question": "The impermeable liner in a sanitary landfill stops:",
          "options": [
            "A) Leachate reaching groundwater",
            "B) Methane forming",
            "C) Birds landing",
            "D) Rain falling"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Leachate reaching groundwater."
        },
        {
          "id": "evs-w3-125",
          "question": "Which waste option is the least preferred in ISWM?",
          "options": [
            "A) Composting",
            "B) Reduce",
            "C) Reuse",
            "D) Landfill"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Landfill."
        },
        {
          "id": "evs-w3-126",
          "question": "The Solid Waste Management Rules (2016) made mandatory:",
          "options": [
            "A) Open burning",
            "B) Incineration",
            "C) Source segregation",
            "D) Landfilling all waste"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Source segregation."
        },
        {
          "id": "evs-w3-127",
          "question": "Kalundborg, Denmark, is an example of:",
          "options": [
            "A) Urban mining",
            "B) Industrial symbiosis",
            "C) Primary succession",
            "D) Sanitary landfill"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Industrial symbiosis."
        },
        {
          "id": "evs-w3-128",
          "question": "In Kalundborg, fly ash from the power plant goes to a:",
          "options": [
            "A) Cement plant",
            "B) Pharmaceutical factory",
            "C) Wallboard maker",
            "D) Fish farm"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Cement plant."
        },
        {
          "id": "evs-w3-129",
          "question": "Extracting gold and rare earths from e-waste in Japan is called:",
          "options": [
            "A) Deep-sea mining",
            "B) Vermicomposting",
            "C) Landfill mining",
            "D) Urban mining"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Urban mining."
        },
        {
          "id": "evs-w3-130",
          "question": "Food waste makes up about what share of Indian household MSW?",
          "options": [
            "A) 80\u201390%",
            "B) 5\u201310%",
            "C) 50\u201360%",
            "D) 20%"
          ],
          "correct": "C",
          "rationale": "Correct Option C: 50\u201360%."
        },
        {
          "id": "evs-w3-131",
          "question": "Less than what share of materials used globally comes back into productive use?",
          "options": [
            "A) 50%",
            "B) 9%",
            "C) 30%",
            "D) 75%"
          ],
          "correct": "B",
          "rationale": "Correct Option B: 9%."
        },
        {
          "id": "evs-w3-132",
          "question": "Using earthworms to compost waste is called:",
          "options": [
            "A) Vermicomposting",
            "B) Anaerobic digestion",
            "C) Incineration",
            "D) Pyrolysis"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Vermicomposting."
        },
        {
          "id": "evs-w3-133",
          "question": "Which is an advantage of a sanitary landfill?",
          "options": [
            "A) No methane",
            "B) Needs little land",
            "C) No odour",
            "D) No segregation needed"
          ],
          "correct": "D",
          "rationale": "Correct Option D: No segregation needed."
        },
        {
          "id": "evs-w3-134",
          "question": "Which is an advantage of incineration?",
          "options": [
            "A) No skilled staff needed",
            "B) Low capital cost",
            "C) Requires very little space",
            "D) No ash"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Requires very little space."
        }
      ]
    },
    {
      "id": "evs-m4",
      "moduleNum": 4,
      "pdfUrl": "/pdfs/environmental/EVS_MOD-4.pdf",
      "title": "Week 4: Environmental Laws, Policies and Sustainable Development Goals",
      "co": "CO: 4",
      "examScope": "CAT-2 & FAT (CBT MCQ)",
      "weightage": "25% of CBT Exam (approx 25 MCQs)",
      "status": "not_confident",
      "scope": "Major Indian environmental legislation: Wildlife Protection Act 1972, Water (Prevention and Control of Pollution) Act 1974, Air Act 1981 (Noise included as pollutant in 1987 amendment), Environment Protection Act 1986 (Umbrella Act enacted post-Bhopal gas tragedy), Forest Conservation Act 1980, Biological Diversity Act 2002, National Green Tribunal (NGT) Act 2010; International conventions: Stockholm 1972, Montreal Protocol 1987 (Ozone depleting substances), Rio Earth Summit 1992 (Agenda 21, UNFCCC, CBD), Kyoto Protocol 1997 (CDM, Annex-I carbon reduction targets), Paris Agreement 2015 (Limit warming well below 2\u00b0C, aim for 1.5\u00b0C); Sustainable Development: Brundtland Commission 1987 ('Our Common Future'), 17 UN SDGs (2015-2030); Environmental Impact Assessment (EIA 4 steps: Screening, Scoping, Public Consultation, Appraisal); Carbon credits and carbon footprint.",
      "blueprint": {
        "marksTotal": "25 Marks in FAT CBT",
        "questionTypes": [
          {
            "type": "Act Chronology & Umbrella Legislation",
            "desc": "Memorizing exact years: Wildlife 1972, Water 1974, Forest 1980, Air 1981, EPA 1986."
          },
          {
            "type": "Protocol Targets & SDG Numbers",
            "desc": "Montreal 1987 (Ozone/CFCs) vs Kyoto 1997 (GHGs) vs Paris 2015 (2\u00b0C target); matching SDG 6 (Clean water), SDG 13 (Climate action), SDG 14 (Life below water), SDG 15 (Life on land)."
          }
        ]
      },
      "formulaSheet": [
        {
          "name": "Environmental Acts Chronological Ladder",
          "formula": "\\text{WPA (1972)} \\to \\text{Water (1974)} \\to \\text{Forest (1980)} \\to \\text{Air (1981)} \\to \\text{EPA (1986)}",
          "note": "Memorize this exact timeline for multiple CBT questions"
        },
        {
          "name": "Paris Climate Target",
          "formula": "\\Delta T_{\\text{global}} \\le 2.0^\\circ\\text{C} \\quad (\\text{aspire to } 1.5^\\circ\\text{C})",
          "note": "Adopted at COP21 in December 2015"
        },
        {
          "name": "1 Certified Emission Reduction (CER)",
          "formula": "1 \\text{ Carbon Credit} = 1 \\text{ metric tonne of } \\text{CO}_2 \\text{ equivalent}",
          "note": "Kyoto Protocol Clean Development Mechanism (CDM)"
        }
      ],
      "examInsights": [
        {
          "title": "Environment Protection Act 1986 Umbrella Status",
          "desc": "EPA 1986 was enacted under Article 253 of the Indian Constitution immediately following the Bhopal Gas Tragedy (December 1984) to serve as umbrella legislation coordinating all state and central pollution control boards."
        },
        {
          "title": "Air Act 1987 Noise Amendment",
          "desc": "Noise was NOT originally part of the Air Act 1981. It was officially incorporated as an air pollutant through the Air (Amendment) Act of 1987."
        }
      ],
      "mcqs": [
        {
          "id": "evs-w4-1",
          "question": "EIA is carried out:",
          "options": [
            "A) Only for small projects",
            "B) After a project is complete",
            "C) Only after an accident",
            "D) Before a project begins"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Before a project begins."
        },
        {
          "id": "evs-w4-2",
          "question": "The first step of EIA, deciding if a full EIA is needed, is:",
          "options": [
            "A) Monitoring",
            "B) Scoping",
            "C) Screening",
            "D) Mitigation"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Screening."
        },
        {
          "id": "evs-w4-3",
          "question": "Terms of Reference (ToR) are prepared during:",
          "options": [
            "A) Screening",
            "B) Scoping",
            "C) Monitoring",
            "D) Review"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Scoping."
        },
        {
          "id": "evs-w4-4",
          "question": "The most preferred step in the mitigation hierarchy is to:",
          "options": [
            "A) Avoid the impact",
            "B) Offset the impact",
            "C) Restore after damage",
            "D) Pay compensation"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Avoid the impact."
        },
        {
          "id": "evs-w4-5",
          "question": "The least preferred step in the mitigation hierarchy is to:",
          "options": [
            "A) Change location",
            "B) Avoid",
            "C) Minimize",
            "D) Offset / compensate"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Offset / compensate."
        },
        {
          "id": "evs-w4-6",
          "question": "EMP stands for:",
          "options": [
            "A) Environmental Mitigation Policy",
            "B) Emission Monitoring Protocol",
            "C) Environmental Management Plan",
            "D) Ecological Management Programme"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Environmental Management Plan."
        },
        {
          "id": "evs-w4-7",
          "question": "The Leopold matrix was developed in:",
          "options": [
            "A) 1986",
            "B) 1971",
            "C) 1992",
            "D) 1962"
          ],
          "correct": "B",
          "rationale": "Correct Option B: 1971."
        },
        {
          "id": "evs-w4-8",
          "question": "In the Leopold matrix, rows represent:",
          "options": [
            "A) Environmental factors",
            "B) Project actions",
            "C) Costs",
            "D) Stakeholders"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Environmental factors."
        },
        {
          "id": "evs-w4-9",
          "question": "In the Leopold matrix, columns represent:",
          "options": [
            "A) Species",
            "B) Environmental factors",
            "C) Years",
            "D) Project actions"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Project actions."
        },
        {
          "id": "evs-w4-10",
          "question": "Which EIA method is best at showing indirect and cumulative impacts?",
          "options": [
            "A) Questionnaire checklist",
            "B) Simple checklist",
            "C) Network analysis",
            "D) Weighted checklist"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Network analysis."
        },
        {
          "id": "evs-w4-11",
          "question": "Which EIA method is quantitative?",
          "options": [
            "A) Simple checklist",
            "B) Modelling",
            "C) Network analysis",
            "D) Questionnaire"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Modelling."
        },
        {
          "id": "evs-w4-12",
          "question": "A limitation of the checklist method is that it:",
          "options": [
            "A) Shows no cause\u2013effect relationships",
            "B) Needs supercomputers",
            "C) Is too quantitative",
            "D) Cannot list air impacts"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Shows no cause\u2013effect relationships."
        },
        {
          "id": "evs-w4-13",
          "question": "AERMOD is an example of a/an:",
          "options": [
            "A) Risk model",
            "B) Water quality model",
            "C) Noise model",
            "D) Air quality (Gaussian plume) model"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Air quality (Gaussian plume) model."
        },
        {
          "id": "evs-w4-14",
          "question": "QUAL2K and SWAT are:",
          "options": [
            "A) Noise models",
            "B) Air models",
            "C) Water quality models",
            "D) Leopold matrices"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Water quality models."
        },
        {
          "id": "evs-w4-15",
          "question": "Which EIA principle means involving stakeholders?",
          "options": [
            "A) Credibility",
            "B) Participation",
            "C) Integration",
            "D) Accountability"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Participation."
        },
        {
          "id": "evs-w4-16",
          "question": "A future trend in EIA is greater emphasis on:",
          "options": [
            "A) Strategic Environmental Assessment (SEA)",
            "B) Ignoring cumulative impacts",
            "C) Removing public hearings",
            "D) Paper-only checklists"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Strategic Environmental Assessment (SEA)."
        },
        {
          "id": "evs-w4-17",
          "question": "Which is a listed challenge of EIA?",
          "options": [
            "A) Over-strict review",
            "B) Too much public participation",
            "C) Excess funding",
            "D) Weak enforcement"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Weak enforcement."
        },
        {
          "id": "evs-w4-18",
          "question": "For dam projects, a mitigation measure for fish migration is:",
          "options": [
            "A) Bird deterrents",
            "B) Noise barriers",
            "C) Fish ladders",
            "D) Ballast water plans"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Fish ladders."
        },
        {
          "id": "evs-w4-19",
          "question": "For wind farm EIA, a key concern is impact on:",
          "options": [
            "A) Groundwater only",
            "B) Birds and bats",
            "C) Coral reefs",
            "D) Soil salinity"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Birds and bats."
        },
        {
          "id": "evs-w4-20",
          "question": "Road construction \u2192 deforestation \u2192 erosion \u2192 river sedimentation illustrates:",
          "options": [
            "A) Network analysis",
            "B) Leopold matrix",
            "C) Weighted checklist",
            "D) Modelling"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Network analysis."
        },
        {
          "id": "evs-w4-21",
          "question": "The Environment (Protection) Act was enacted on:",
          "options": [
            "A) 5 June 1972",
            "B) 23 March 1974",
            "C) 2 December 1984",
            "D) 19 November 1986"
          ],
          "correct": "D",
          "rationale": "Correct Option D: 19 November 1986."
        },
        {
          "id": "evs-w4-22",
          "question": "The EPA was a direct response to the:",
          "options": [
            "A) Minamata disease",
            "B) London smog",
            "C) Bhopal Gas Tragedy",
            "D) Chernobyl disaster"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Bhopal Gas Tragedy."
        },
        {
          "id": "evs-w4-23",
          "question": "The gas leaked at Bhopal was:",
          "options": [
            "A) Chlorine",
            "B) Methyl isocyanate",
            "C) Hydrogen sulphide",
            "D) Carbon monoxide"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Methyl isocyanate."
        },
        {
          "id": "evs-w4-24",
          "question": "The Bhopal plant belonged to:",
          "options": [
            "A) Union Carbide",
            "B) Chisso",
            "C) Exxon",
            "D) BP"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Union Carbide."
        },
        {
          "id": "evs-w4-25",
          "question": "The EPA is often called:",
          "options": [
            "A) An international treaty",
            "B) Sector-specific legislation",
            "C) State legislation",
            "D) Umbrella legislation"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Umbrella legislation."
        },
        {
          "id": "evs-w4-26",
          "question": "The right to a clean environment is read into which Article?",
          "options": [
            "A) Article 252",
            "B) Article 14",
            "C) Article 21",
            "D) Article 370"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Article 21."
        },
        {
          "id": "evs-w4-27",
          "question": "The 1972 conference that prompted India's environmental laws was held in:",
          "options": [
            "A) Rio de Janeiro",
            "B) Stockholm",
            "C) Kyoto",
            "D) Paris"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Stockholm."
        },
        {
          "id": "evs-w4-28",
          "question": "Which EPA section gives the Central Government sweeping powers?",
          "options": [
            "A) Section 3",
            "B) Section 7",
            "C) Section 10",
            "D) Section 8"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Section 3."
        },
        {
          "id": "evs-w4-29",
          "question": "Which EPA section prohibits discharge beyond standards?",
          "options": [
            "A) Section 10",
            "B) Section 3",
            "C) Section 6",
            "D) Section 7"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Section 7."
        },
        {
          "id": "evs-w4-30",
          "question": "Which EPA section regulates hazardous substances?",
          "options": [
            "A) Section 3",
            "B) Section 6",
            "C) Section 8",
            "D) Section 19"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Section 8."
        },
        {
          "id": "evs-w4-31",
          "question": "Which EPA section grants power of entry and inspection?",
          "options": [
            "A) Section 7",
            "B) Section 10",
            "C) Section 21",
            "D) Section 24"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Section 10."
        },
        {
          "id": "evs-w4-32",
          "question": "Which EPA section lets government prescribe numerical standards?",
          "options": [
            "A) Section 6",
            "B) Section 8",
            "C) Section 10",
            "D) Section 3"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Section 6."
        },
        {
          "id": "evs-w4-33",
          "question": "The maximum EPA penalty for a first violation is:",
          "options": [
            "A) 7 years + \u20b910 lakh",
            "B) 3 months + \u20b910,000",
            "C) 6 years + \u20b95,000/day",
            "D) 5 years + \u20b91 lakh"
          ],
          "correct": "D",
          "rationale": "Correct Option D: 5 years + \u20b91 lakh."
        },
        {
          "id": "evs-w4-34",
          "question": "If an EPA violation continues beyond a year after conviction, prison can extend to:",
          "options": [
            "A) 3 years",
            "B) 10 years",
            "C) 7 years",
            "D) Life"
          ],
          "correct": "C",
          "rationale": "Correct Option C: 7 years."
        },
        {
          "id": "evs-w4-35",
          "question": "Under the 2006 EIA Notification, Category A projects are cleared at the:",
          "options": [
            "A) State level (SEIAA + SEAC)",
            "B) National level (IAA + EAC)",
            "C) District level",
            "D) Village level"
          ],
          "correct": "B",
          "rationale": "Correct Option B: National level (IAA + EAC)."
        },
        {
          "id": "evs-w4-36",
          "question": "Category B projects are cleared by:",
          "options": [
            "A) SEIAA and SEAC",
            "B) IAA and EAC",
            "C) The Supreme Court",
            "D) NGT"
          ],
          "correct": "A",
          "rationale": "Correct Option A: SEIAA and SEAC."
        },
        {
          "id": "evs-w4-37",
          "question": "Noise was added as an air pollutant by the Air Act amendment of:",
          "options": [
            "A) 2000",
            "B) 1981",
            "C) 1992",
            "D) 1987"
          ],
          "correct": "D",
          "rationale": "Correct Option D: 1987."
        },
        {
          "id": "evs-w4-38",
          "question": "Section 2(a) of the Air Act defines:",
          "options": [
            "A) Consent",
            "B) Air pollution control area",
            "C) Air pollutant",
            "D) Emergency powers"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Air pollutant."
        },
        {
          "id": "evs-w4-39",
          "question": "Which Air Act section lets states declare air pollution control areas?",
          "options": [
            "A) Section 21",
            "B) Section 19",
            "C) Section 24",
            "D) Section 31A"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Section 19."
        },
        {
          "id": "evs-w4-40",
          "question": "Which Air Act section requires consent before emitting?",
          "options": [
            "A) Section 21",
            "B) Section 19",
            "C) Section 24",
            "D) Section 3"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Section 21."
        },
        {
          "id": "evs-w4-41",
          "question": "Which Air Act section gives emergency power to close industries?",
          "options": [
            "A) Section 24",
            "B) Section 21",
            "C) Section 19",
            "D) Section 31A"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Section 31A."
        },
        {
          "id": "evs-w4-42",
          "question": "Which Air Act section gives power to take air samples?",
          "options": [
            "A) Section 31A",
            "B) Section 19",
            "C) Section 24",
            "D) Section 6"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Section 24."
        },
        {
          "id": "evs-w4-43",
          "question": "The Air Act penalty is up to:",
          "options": [
            "A) 5 years + \u20b91 lakh",
            "B) 3 months + \u20b910,000",
            "C) 1.5\u20136 years",
            "D) 7 years"
          ],
          "correct": "B",
          "rationale": "Correct Option B: 3 months + \u20b910,000."
        },
        {
          "id": "evs-w4-44",
          "question": "The Air Act is described as which kind of regulatory model?",
          "options": [
            "A) Preventive",
            "B) Purely corrective",
            "C) Voluntary",
            "D) International"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Preventive."
        },
        {
          "id": "evs-w4-45",
          "question": "Under the Air Act, who grants or refuses consent to industries?",
          "options": [
            "A) Prime Minister",
            "B) CPCB only",
            "C) Supreme Court",
            "D) State Pollution Control Boards"
          ],
          "correct": "D",
          "rationale": "Correct Option D: State Pollution Control Boards."
        },
        {
          "id": "evs-w4-46",
          "question": "Compared with the Air Act, the EPA is:",
          "options": [
            "A) A state law",
            "B) Limited to air only",
            "C) Broad, covering air, water and land",
            "D) Limited to noise"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Broad, covering air, water and land."
        },
        {
          "id": "evs-w4-47",
          "question": "The Water Act was enacted on:",
          "options": [
            "A) 19 November 1986",
            "B) 23 March 1974",
            "C) 1 April 1981",
            "D) 15 August 1972"
          ],
          "correct": "B",
          "rationale": "Correct Option B: 23 March 1974."
        },
        {
          "id": "evs-w4-48",
          "question": "The Water Act was passed under which Article?",
          "options": [
            "A) Article 252",
            "B) Article 21",
            "C) Article 48A",
            "D) Article 51A(g)"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Article 252."
        },
        {
          "id": "evs-w4-49",
          "question": "Article 252 allows Parliament to:",
          "options": [
            "A) Create tribunals",
            "B) Declare emergencies",
            "C) Protect the right to life",
            "D) Legislate on state subjects when states request it"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Legislate on state subjects when states request it."
        },
        {
          "id": "evs-w4-50",
          "question": "The Water Act established:",
          "options": [
            "A) GEAC",
            "B) NGT",
            "C) CPCB and SPCBs",
            "D) NDMA"
          ],
          "correct": "C",
          "rationale": "Correct Option C: CPCB and SPCBs."
        },
        {
          "id": "evs-w4-51",
          "question": "The CPCB is established under Water Act:",
          "options": [
            "A) Section 4",
            "B) Section 3",
            "C) Section 13",
            "D) Section 24"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Section 3."
        },
        {
          "id": "evs-w4-52",
          "question": "State Boards are established under:",
          "options": [
            "A) Section 4",
            "B) Section 3",
            "C) Section 25",
            "D) Section 46"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Section 4."
        },
        {
          "id": "evs-w4-53",
          "question": "Joint Boards for rivers crossing states are under:",
          "options": [
            "A) Section 21",
            "B) Section 3",
            "C) Section 33B",
            "D) Section 13"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Section 13."
        },
        {
          "id": "evs-w4-54",
          "question": "The Water Act has how many sections and chapters?",
          "options": [
            "A) 100 sections, 12 chapters",
            "B) 26 sections, 4 chapters",
            "C) 64 sections, 10 chapters",
            "D) 47 sections, 8 chapters"
          ],
          "correct": "C",
          "rationale": "Correct Option C: 64 sections, 10 chapters."
        },
        {
          "id": "evs-w4-55",
          "question": "The Water Act amendment that strengthened penalties came in:",
          "options": [
            "A) 1987",
            "B) 1988",
            "C) 1992",
            "D) 2002"
          ],
          "correct": "B",
          "rationale": "Correct Option B: 1988."
        },
        {
          "id": "evs-w4-56",
          "question": "The absolute prohibition on polluting streams or wells is in:",
          "options": [
            "A) Section 24",
            "B) Section 25",
            "C) Section 26",
            "D) Section 21"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Section 24."
        },
        {
          "id": "evs-w4-57",
          "question": "Consent for new outlets and discharges is required under:",
          "options": [
            "A) Section 32",
            "B) Section 24",
            "C) Section 27",
            "D) Section 25"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Section 25."
        },
        {
          "id": "evs-w4-58",
          "question": "Water Act Section 25 mirrors which Air Act section?",
          "options": [
            "A) Section 31A",
            "B) Section 19",
            "C) Section 21",
            "D) Section 24"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Section 21."
        },
        {
          "id": "evs-w4-59",
          "question": "Existing dischargers must apply for consent under:",
          "options": [
            "A) Section 25",
            "B) Section 26",
            "C) Section 24",
            "D) Section 28"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Section 26."
        },
        {
          "id": "evs-w4-60",
          "question": "Revocation of consent falls under:",
          "options": [
            "A) Section 27",
            "B) Section 26",
            "C) Section 33",
            "D) Section 45"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Section 27."
        },
        {
          "id": "evs-w4-61",
          "question": "The power to take effluent samples is in:",
          "options": [
            "A) Section 32",
            "B) Section 23",
            "C) Section 24",
            "D) Section 21"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Section 21."
        },
        {
          "id": "evs-w4-62",
          "question": "Emergency measures by State Boards fall under:",
          "options": [
            "A) Section 13",
            "B) Section 21",
            "C) Section 32",
            "D) Section 45"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Section 32."
        },
        {
          "id": "evs-w4-63",
          "question": "Appeals to the National Green Tribunal are under:",
          "options": [
            "A) Section 28",
            "B) Section 33B",
            "C) Section 29",
            "D) Section 47"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Section 33B."
        },
        {
          "id": "evs-w4-64",
          "question": "The punishment for breaking Section 24 (Section 43) is:",
          "options": [
            "A) 1.5\u20136 years + fine",
            "B) Up to 3 months",
            "C) \u20b95,000 only",
            "D) Warning only"
          ],
          "correct": "A",
          "rationale": "Correct Option A: 1.5\u20136 years + fine."
        },
        {
          "id": "evs-w4-65",
          "question": "The additional fine for continuing violations (Section 45) is up to:",
          "options": [
            "A) \u20b9500 per day",
            "B) \u20b910,000 per day",
            "C) \u20b91 lakh per day",
            "D) \u20b95,000 per day"
          ],
          "correct": "D",
          "rationale": "Correct Option D: \u20b95,000 per day."
        },
        {
          "id": "evs-w4-66",
          "question": "Section 46 makes which people personally liable?",
          "options": [
            "A) Only workers",
            "B) Only shareholders",
            "C) Directors, managers, engineers in charge",
            "D) Nobody"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Directors, managers, engineers in charge."
        },
        {
          "id": "evs-w4-67",
          "question": "Section 47 holds whom liable for offences by government departments?",
          "options": [
            "A) Chief Minister",
            "B) Head of Department",
            "C) Prime Minister",
            "D) The clerk"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Head of Department."
        },
        {
          "id": "evs-w4-68",
          "question": "Most Water Act offences are non-compoundable, meaning:",
          "options": [
            "A) They can't be settled by just paying a fine",
            "B) Police can't arrest",
            "C) They carry no penalty",
            "D) They're settled by the Board"
          ],
          "correct": "A",
          "rationale": "Correct Option A: They can't be settled by just paying a fine."
        },
        {
          "id": "evs-w4-69",
          "question": "Cognizable offences mean police can:",
          "options": [
            "A) Only fine",
            "B) Only warn",
            "C) Not arrest at all",
            "D) Arrest without a warrant"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Arrest without a warrant."
        },
        {
          "id": "evs-w4-70",
          "question": "Penalty amounts are credited to the:",
          "options": [
            "A) CAMPA",
            "B) PM CARES Fund",
            "C) Environmental Protection Fund",
            "D) Green Climate Fund"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Environmental Protection Fund."
        },
        {
          "id": "evs-w4-71",
          "question": "MINAS stands for:",
          "options": [
            "A) Maximum Industrial Noise Standards",
            "B) Minimum National Standards",
            "C) Mineral Analysis Standards",
            "D) Municipal Infrastructure Standards"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Minimum National Standards."
        },
        {
          "id": "evs-w4-72",
          "question": "The National Green Tribunal was established in:",
          "options": [
            "A) 2010",
            "B) 1986",
            "C) 1974",
            "D) 2002"
          ],
          "correct": "A",
          "rationale": "Correct Option A: 2010."
        },
        {
          "id": "evs-w4-73",
          "question": "Section 42 (obstructing officers) carries up to:",
          "options": [
            "A) 7 years",
            "B) 6 years",
            "C) \u20b95,000/day",
            "D) 3 months or \u20b910,000 or both"
          ],
          "correct": "D",
          "rationale": "Correct Option D: 3 months or \u20b910,000 or both."
        },
        {
          "id": "evs-w4-74",
          "question": "India has about what share of the world's species?",
          "options": [
            "A) 25%",
            "B) 2.4%",
            "C) 8%",
            "D) 50%"
          ],
          "correct": "C",
          "rationale": "Correct Option C: 8%."
        },
        {
          "id": "evs-w4-75",
          "question": "India covers about what share of Earth's land?",
          "options": [
            "A) 8%",
            "B) 2.4%",
            "C) 10%",
            "D) 0.5%"
          ],
          "correct": "B",
          "rationale": "Correct Option B: 2.4%."
        },
        {
          "id": "evs-w4-76",
          "question": "The Forest (Conservation) Act moved the power to divert forests from:",
          "options": [
            "A) States to the Central Government",
            "B) Centre to states",
            "C) Courts to Parliament",
            "D) Villages to districts"
          ],
          "correct": "A",
          "rationale": "Correct Option A: States to the Central Government."
        },
        {
          "id": "evs-w4-77",
          "question": "The heart of the Forest (Conservation) Act is:",
          "options": [
            "A) Section 19",
            "B) Section 24",
            "C) Section 3",
            "D) Section 2"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Section 2."
        },
        {
          "id": "evs-w4-78",
          "question": "Himalayan deforestation before 1980 caused floods in:",
          "options": [
            "A) Gujarat and Rajasthan",
            "B) Kerala and Tamil Nadu",
            "C) Uttar Pradesh and Bihar",
            "D) Assam and Meghalaya"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Uttar Pradesh and Bihar."
        },
        {
          "id": "evs-w4-79",
          "question": "Compensatory afforestation on degraded forest land must cover:",
          "options": [
            "A) Half the area",
            "B) Twice the area",
            "C) The same area",
            "D) Ten times the area"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Twice the area."
        },
        {
          "id": "evs-w4-80",
          "question": "Compensatory afforestation funds are deposited in:",
          "options": [
            "A) CAMPA",
            "B) Environmental Protection Fund",
            "C) Green Climate Fund",
            "D) NDRF"
          ],
          "correct": "A",
          "rationale": "Correct Option A: CAMPA."
        },
        {
          "id": "evs-w4-81",
          "question": "The Godavarman judgment (1996) held that the Forest Act applies to:",
          "options": [
            "A) Only private land",
            "B) Only officially notified forests",
            "C) Only national parks",
            "D) All land that is forest in the dictionary sense"
          ],
          "correct": "D",
          "rationale": "Correct Option D: All land that is forest in the dictionary sense."
        },
        {
          "id": "evs-w4-82",
          "question": "The 1992 amendment allowed activities such as transmission lines if they involved:",
          "options": [
            "A) No approval",
            "B) Clearing whole forests",
            "C) No or minimal tree felling",
            "D) State approval only"
          ],
          "correct": "C",
          "rationale": "Correct Option C: No or minimal tree felling."
        },
        {
          "id": "evs-w4-83",
          "question": "The 2023 amendment to the Forest Act:",
          "options": [
            "A) Repealed the Act",
            "B) Renamed the Act and eased border/linear project approvals",
            "C) Banned all mining",
            "D) Removed central approval entirely"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Renamed the Act and eased border/linear project approvals."
        },
        {
          "id": "evs-w4-84",
          "question": "By 1972, India's tiger population had fallen below:",
          "options": [
            "A) 2,000",
            "B) 20,000",
            "C) 200",
            "D) 10,000"
          ],
          "correct": "A",
          "rationale": "Correct Option A: 2,000."
        },
        {
          "id": "evs-w4-85",
          "question": "After the 2022 amendment, the Wildlife Act has how many schedules?",
          "options": [
            "A) Ten",
            "B) Six",
            "C) Two",
            "D) Four"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Four."
        },
        {
          "id": "evs-w4-86",
          "question": "Which is NOT listed in Schedule I?",
          "options": [
            "A) Snow leopard",
            "B) Tiger",
            "C) House crow",
            "D) Great Indian bustard"
          ],
          "correct": "C",
          "rationale": "Correct Option C: House crow."
        },
        {
          "id": "evs-w4-87",
          "question": "The Wildlife Act changed the approach to hunting from regulate to:",
          "options": [
            "A) Encourage",
            "B) Prohibit",
            "C) License freely",
            "D) Tax"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Prohibit."
        },
        {
          "id": "evs-w4-88",
          "question": "Conservation and community reserves were added by the amendment of:",
          "options": [
            "A) 2002",
            "B) 1992",
            "C) 2022",
            "D) 1980"
          ],
          "correct": "A",
          "rationale": "Correct Option A: 2002."
        },
        {
          "id": "evs-w4-89",
          "question": "India has about how many protected areas?",
          "options": [
            "A) 50",
            "B) 90",
            "C) 9,000",
            "D) 900+"
          ],
          "correct": "D",
          "rationale": "Correct Option D: 900+."
        },
        {
          "id": "evs-w4-90",
          "question": "CITES was established in:",
          "options": [
            "A) 1976",
            "B) 1975",
            "C) 1973",
            "D) 1992"
          ],
          "correct": "C",
          "rationale": "Correct Option C: 1973."
        },
        {
          "id": "evs-w4-91",
          "question": "India became a party to CITES in:",
          "options": [
            "A) 1973",
            "B) 1976",
            "C) 1975",
            "D) 1980"
          ],
          "correct": "B",
          "rationale": "Correct Option B: 1976."
        },
        {
          "id": "evs-w4-92",
          "question": "The CITES Secretariat is in:",
          "options": [
            "A) Geneva",
            "B) New York",
            "C) Nairobi",
            "D) Paris"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Geneva."
        },
        {
          "id": "evs-w4-93",
          "question": "The Schedule I offence penalty is:",
          "options": [
            "A) Life imprisonment",
            "B) Up to 3 months",
            "C) \u20b910,000 fine only",
            "D) Minimum 3 years, up to 7 years"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Minimum 3 years, up to 7 years."
        },
        {
          "id": "evs-w4-94",
          "question": "Anti-poaching enforcement is handled by the:",
          "options": [
            "A) GEAC",
            "B) CPCB",
            "C) Wildlife Crime Control Bureau",
            "D) NDMA"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Wildlife Crime Control Bureau."
        },
        {
          "id": "evs-w4-95",
          "question": "Projects within how many km of a national park need wildlife board clearance?",
          "options": [
            "A) 1 km",
            "B) 10 km",
            "C) 50 km",
            "D) 100 km"
          ],
          "correct": "B",
          "rationale": "Correct Option B: 10 km."
        },
        {
          "id": "evs-w4-96",
          "question": "The National Board for Wildlife is chaired by the:",
          "options": [
            "A) Prime Minister",
            "B) President",
            "C) Environment Minister",
            "D) Chief Justice"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Prime Minister."
        },
        {
          "id": "evs-w4-97",
          "question": "The citizen's fundamental duty to protect the environment is in:",
          "options": [
            "A) Article 14",
            "B) Article 21",
            "C) Article 252",
            "D) Article 51A(g)"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Article 51A(g)."
        },
        {
          "id": "evs-w4-98",
          "question": "The State's duty to protect the environment is in:",
          "options": [
            "A) Article 19",
            "B) Article 51A(g)",
            "C) Article 48A",
            "D) Article 32"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Article 48A."
        },
        {
          "id": "evs-w4-99",
          "question": "The Wildlife Act provided the legal foundation for which programme launched in 1973?",
          "options": [
            "A) Project Elephant",
            "B) Project Tiger",
            "C) Namami Gange",
            "D) NCAP"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Project Tiger."
        },
        {
          "id": "evs-w4-100",
          "question": "The Kyoto Protocol was adopted on:",
          "options": [
            "A) 11 December 1997",
            "B) 16 February 2005",
            "C) 4 November 2016",
            "D) 12 December 2015"
          ],
          "correct": "A",
          "rationale": "Correct Option A: 11 December 1997."
        },
        {
          "id": "evs-w4-101",
          "question": "The Kyoto Protocol entered into force on:",
          "options": [
            "A) 31 December 2012",
            "B) 11 December 1997",
            "C) 1 January 2008",
            "D) 16 February 2005"
          ],
          "correct": "D",
          "rationale": "Correct Option D: 16 February 2005."
        },
        {
          "id": "evs-w4-102",
          "question": "Kyoto was adopted at which Conference of the Parties?",
          "options": [
            "A) COP18",
            "B) COP21",
            "C) COP3",
            "D) COP1"
          ],
          "correct": "C",
          "rationale": "Correct Option C: COP3."
        },
        {
          "id": "evs-w4-103",
          "question": "Kyoto needed ratification by countries representing at least what share of emissions?",
          "options": [
            "A) 25%",
            "B) 55%",
            "C) 75%",
            "D) 100%"
          ],
          "correct": "B",
          "rationale": "Correct Option B: 55%."
        },
        {
          "id": "evs-w4-104",
          "question": "Without the greenhouse effect, Earth's average temperature would be about:",
          "options": [
            "A) \u221218\u00b0C",
            "B) 0\u00b0C",
            "C) 15\u00b0C",
            "D) \u2212100\u00b0C"
          ],
          "correct": "A",
          "rationale": "Correct Option A: \u221218\u00b0C."
        },
        {
          "id": "evs-w4-105",
          "question": "The IPCC's first Assessment Report was published in:",
          "options": [
            "A) 1972",
            "B) 1997",
            "C) 2005",
            "D) 1990"
          ],
          "correct": "D",
          "rationale": "Correct Option D: 1990."
        },
        {
          "id": "evs-w4-106",
          "question": "The IPCC:",
          "options": [
            "A) Enforces treaties",
            "B) Runs its own labs",
            "C) Assesses existing studies; doesn't do original research",
            "D) Sets national laws"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Assesses existing studies; doesn't do original research."
        },
        {
          "id": "evs-w4-107",
          "question": "The UNFCCC was adopted at:",
          "options": [
            "A) Stockholm, 1972",
            "B) Rio Earth Summit, 1992",
            "C) Kyoto, 1997",
            "D) Paris, 2015"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Rio Earth Summit, 1992."
        },
        {
          "id": "evs-w4-108",
          "question": "The UNFCCC's main weakness was:",
          "options": [
            "A) No binding targets",
            "B) Too many binding targets",
            "C) It excluded developed countries",
            "D) It had no members"
          ],
          "correct": "A",
          "rationale": "Correct Option A: No binding targets."
        },
        {
          "id": "evs-w4-109",
          "question": "CBDR-RC stands for:",
          "options": [
            "A) Central Board for Development and Resource Conservation",
            "B) Carbon Budget Distribution and Reduction Credits",
            "C) Climate Binding Development Reduction Commitment",
            "D) Common But Differentiated Responsibilities and Respective Capabilities"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Common But Differentiated Responsibilities and Respective Capabilities."
        },
        {
          "id": "evs-w4-110",
          "question": "How many industrialised nations are in Annex I?",
          "options": [
            "A) 55",
            "B) 196",
            "C) 37",
            "D) 12"
          ],
          "correct": "C",
          "rationale": "Correct Option C: 37."
        },
        {
          "id": "evs-w4-111",
          "question": "India's status under Kyoto was:",
          "options": [
            "A) Annex I, binding targets",
            "B) Non-Annex I, no binding targets",
            "C) Observer only",
            "D) Not a party"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Non-Annex I, no binding targets."
        },
        {
          "id": "evs-w4-112",
          "question": "Kyoto's first commitment period was:",
          "options": [
            "A) 2008\u20132012",
            "B) 2013\u20132020",
            "C) 1997\u20132005",
            "D) 2015\u20132030"
          ],
          "correct": "A",
          "rationale": "Correct Option A: 2008\u20132012."
        },
        {
          "id": "evs-w4-113",
          "question": "Annex I countries as a group had to cut emissions by at least:",
          "options": [
            "A) 1% below 1997",
            "B) 50% below 2005",
            "C) 20% below 2000",
            "D) 5% below 1990"
          ],
          "correct": "D",
          "rationale": "Correct Option D: 5% below 1990."
        },
        {
          "id": "evs-w4-114",
          "question": "Kyoto targets for EU, US and Japan were:",
          "options": [
            "A) 5%, 5%, 5%",
            "B) 6%, 7%, 8%",
            "C) 8%, 7%, 6%",
            "D) 10%, 8%, 6%"
          ],
          "correct": "C",
          "rationale": "Correct Option C: 8%, 7%, 6%."
        },
        {
          "id": "evs-w4-115",
          "question": "Which is NOT one of Kyoto's six greenhouse gases?",
          "options": [
            "A) Methane",
            "B) Ozone",
            "C) Sulphur hexafluoride",
            "D) Perfluorocarbons"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Ozone."
        },
        {
          "id": "evs-w4-116",
          "question": "Methane's warming potential over 100 years is about:",
          "options": [
            "A) 28\u201336\u00d7 CO\u2082",
            "B) 2\u00d7 CO\u2082",
            "C) 300\u00d7 CO\u2082",
            "D) Equal to CO\u2082"
          ],
          "correct": "A",
          "rationale": "Correct Option A: 28\u201336\u00d7 CO\u2082."
        },
        {
          "id": "evs-w4-117",
          "question": "The USA signed Kyoto in 1998 and then:",
          "options": [
            "A) Joined Annex II",
            "B) Ratified it in 2005",
            "C) Led the second period",
            "D) Never ratified it"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Never ratified it."
        },
        {
          "id": "evs-w4-118",
          "question": "The US formally withdrew from Kyoto in:",
          "options": [
            "A) 2012",
            "B) 1998",
            "C) 2001",
            "D) 2020"
          ],
          "correct": "C",
          "rationale": "Correct Option C: 2001."
        },
        {
          "id": "evs-w4-119",
          "question": "Under Kyoto, the US share of global emissions was about:",
          "options": [
            "A) 5%",
            "B) 25%",
            "C) 50%",
            "D) 12%"
          ],
          "correct": "B",
          "rationale": "Correct Option B: 25%."
        },
        {
          "id": "evs-w4-120",
          "question": "Selling surplus emission units is called:",
          "options": [
            "A) Emissions trading (cap-and-trade)",
            "B) Joint Implementation",
            "C) CDM",
            "D) Offsetting"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Emissions trading (cap-and-trade)."
        },
        {
          "id": "evs-w4-121",
          "question": "A project by one Annex I country in another Annex I country is:",
          "options": [
            "A) NDC",
            "B) CDM",
            "C) Emissions trading",
            "D) Joint Implementation"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Joint Implementation."
        },
        {
          "id": "evs-w4-122",
          "question": "An Annex I country investing in a developing country project uses the:",
          "options": [
            "A) Global Stocktake",
            "B) Joint Implementation",
            "C) Clean Development Mechanism",
            "D) Ratchet mechanism"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Clean Development Mechanism."
        },
        {
          "id": "evs-w4-123",
          "question": "Credits earned under CDM are called:",
          "options": [
            "A) Assigned Amount Units",
            "B) Certified Emission Reductions",
            "C) Green Bonds",
            "D) NDC credits"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Certified Emission Reductions."
        },
        {
          "id": "evs-w4-124",
          "question": "Joint Implementation was most common in:",
          "options": [
            "A) Eastern Europe",
            "B) Africa",
            "C) India",
            "D) South America"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Eastern Europe."
        },
        {
          "id": "evs-w4-125",
          "question": "India ratified Kyoto in:",
          "options": [
            "A) 2015",
            "B) December 1997",
            "C) February 2005",
            "D) August 2002"
          ],
          "correct": "D",
          "rationale": "Correct Option D: August 2002."
        },
        {
          "id": "evs-w4-126",
          "question": "The Doha Amendment (COP18, 2012) extended Kyoto to:",
          "options": [
            "A) 2030",
            "B) 2012",
            "C) 2020",
            "D) 2050"
          ],
          "correct": "C",
          "rationale": "Correct Option C: 2020."
        },
        {
          "id": "evs-w4-127",
          "question": "Countries remaining in Kyoto's second period covered about:",
          "options": [
            "A) 55% of emissions",
            "B) 12% of emissions",
            "C) 90% of emissions",
            "D) 37% of emissions"
          ],
          "correct": "B",
          "rationale": "Correct Option B: 12% of emissions."
        },
        {
          "id": "evs-w4-128",
          "question": "MRV stands for:",
          "options": [
            "A) Measuring, Reporting, Verifying",
            "B) Monitoring, Regulating, Validating",
            "C) Mitigation, Resilience, Vulnerability",
            "D) Market, Revenue, Value"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Measuring, Reporting, Verifying."
        },
        {
          "id": "evs-w4-129",
          "question": "Evaluating a product's total carbon footprint from raw material to disposal is:",
          "options": [
            "A) CDM",
            "B) EIA",
            "C) Global Stocktake",
            "D) Life Cycle Assessment"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Life Cycle Assessment."
        },
        {
          "id": "evs-w4-130",
          "question": "The Paris Agreement was adopted at:",
          "options": [
            "A) COP28, 2023",
            "B) COP3, 1997",
            "C) COP21, December 2015",
            "D) COP15, 2009"
          ],
          "correct": "C",
          "rationale": "Correct Option C: COP21, December 2015."
        },
        {
          "id": "evs-w4-131",
          "question": "How many parties adopted the Paris Agreement?",
          "options": [
            "A) 37",
            "B) 196",
            "C) 55",
            "D) 100"
          ],
          "correct": "B",
          "rationale": "Correct Option B: 196."
        },
        {
          "id": "evs-w4-132",
          "question": "The Paris Agreement entered into force on:",
          "options": [
            "A) 4 November 2016",
            "B) 12 December 2015",
            "C) 16 February 2005",
            "D) 1 January 2020"
          ],
          "correct": "A",
          "rationale": "Correct Option A: 4 November 2016."
        },
        {
          "id": "evs-w4-133",
          "question": "Paris's temperature goal is in:",
          "options": [
            "A) Article 9",
            "B) Article 4",
            "C) Article 7",
            "D) Article 2"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Article 2."
        },
        {
          "id": "evs-w4-134",
          "question": "The Paris goal is to keep warming:",
          "options": [
            "A) Exactly at 1\u00b0C",
            "B) Below 4\u00b0C",
            "C) Well below 2\u00b0C, pursuing 1.5\u00b0C",
            "D) Below 3\u00b0C"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Well below 2\u00b0C, pursuing 1.5\u00b0C."
        },
        {
          "id": "evs-w4-135",
          "question": "The 1.5\u00b0C target was pushed by:",
          "options": [
            "A) The USA",
            "B) Small Island Developing States",
            "C) Oil-producing states",
            "D) The EU only"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Small Island Developing States."
        },
        {
          "id": "evs-w4-136",
          "question": "The IPCC report showing why half a degree matters came in:",
          "options": [
            "A) 2018",
            "B) 1990",
            "C) 2005",
            "D) 2023"
          ],
          "correct": "A",
          "rationale": "Correct Option A: 2018."
        },
        {
          "id": "evs-w4-137",
          "question": "At 2\u00b0C of warming, coral reefs are:",
          "options": [
            "A) Only slightly stressed",
            "B) Unaffected",
            "C) Growing faster",
            "D) Almost entirely lost"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Almost entirely lost."
        },
        {
          "id": "evs-w4-138",
          "question": "NDC stands for:",
          "options": [
            "A) Net Decarbonisation Credit",
            "B) National Development Commitment",
            "C) Nationally Determined Contribution",
            "D) New Delhi Convention"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Nationally Determined Contribution."
        },
        {
          "id": "evs-w4-139",
          "question": "Paris uses which approach to targets?",
          "options": [
            "A) Top-down",
            "B) Bottom-up",
            "C) Random",
            "D) Court-assigned"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Bottom-up."
        },
        {
          "id": "evs-w4-140",
          "question": "NDCs must be updated every:",
          "options": [
            "A) 5 years",
            "B) 1 year",
            "C) 10 years",
            "D) 20 years"
          ],
          "correct": "A",
          "rationale": "Correct Option A: 5 years."
        },
        {
          "id": "evs-w4-141",
          "question": "The rule that each NDC must be more ambitious than the last is the:",
          "options": [
            "A) Clean Development Mechanism",
            "B) Kyoto mechanism",
            "C) Offset mechanism",
            "D) Ratchet mechanism"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Ratchet mechanism."
        },
        {
          "id": "evs-w4-142",
          "question": "India's NDC targets what share of installed power from non-fossil sources by 2030?",
          "options": [
            "A) 30%",
            "B) 45%",
            "C) 50%",
            "D) 100%"
          ],
          "correct": "C",
          "rationale": "Correct Option C: 50%."
        },
        {
          "id": "evs-w4-143",
          "question": "India's NDC targets what reduction in emissions intensity of GDP (vs 2005) by 2030?",
          "options": [
            "A) 50%",
            "B) 45%",
            "C) 33%",
            "D) 5%"
          ],
          "correct": "B",
          "rationale": "Correct Option B: 45%."
        },
        {
          "id": "evs-w4-144",
          "question": "India's NDC extra carbon sink target is:",
          "options": [
            "A) 2.5\u20133 billion t CO\u2082e",
            "B) 25\u201330 million t",
            "C) 100 billion t",
            "D) 1 billion t"
          ],
          "correct": "A",
          "rationale": "Correct Option A: 2.5\u20133 billion t CO\u2082e."
        },
        {
          "id": "evs-w4-145",
          "question": "Net-zero means:",
          "options": [
            "A) No renewable energy",
            "B) Zero emissions of all gases",
            "C) Zero population growth",
            "D) Emissions balanced by removals"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Emissions balanced by removals."
        },
        {
          "id": "evs-w4-146",
          "question": "The net-zero goal is in Paris Article:",
          "options": [
            "A) 7",
            "B) 2",
            "C) 4",
            "D) 9"
          ],
          "correct": "C",
          "rationale": "Correct Option C: 4."
        },
        {
          "id": "evs-w4-147",
          "question": "Adaptation is covered in Paris Article:",
          "options": [
            "A) 4",
            "B) 7",
            "C) 9",
            "D) 2"
          ],
          "correct": "B",
          "rationale": "Correct Option B: 7."
        },
        {
          "id": "evs-w4-148",
          "question": "Climate finance is covered in Paris Article:",
          "options": [
            "A) 9",
            "B) 7",
            "C) 4",
            "D) 2"
          ],
          "correct": "A",
          "rationale": "Correct Option A: 9."
        },
        {
          "id": "evs-w4-149",
          "question": "Developed countries pledged to mobilise how much climate finance per year?",
          "options": [
            "A) USD 500 million",
            "B) USD 10 billion",
            "C) USD 1 trillion",
            "D) USD 100 billion"
          ],
          "correct": "D",
          "rationale": "Correct Option D: USD 100 billion."
        },
        {
          "id": "evs-w4-150",
          "question": "The main channel for Paris climate finance is the:",
          "options": [
            "A) World Bank only",
            "B) CAMPA",
            "C) Green Climate Fund",
            "D) IMF only"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Green Climate Fund."
        },
        {
          "id": "evs-w4-151",
          "question": "The Global Stocktake happens every:",
          "options": [
            "A) Year",
            "B) 5 years",
            "C) 10 years",
            "D) 25 years"
          ],
          "correct": "B",
          "rationale": "Correct Option B: 5 years."
        },
        {
          "id": "evs-w4-152",
          "question": "The first Global Stocktake was completed at:",
          "options": [
            "A) COP28, Dubai, 2023",
            "B) COP21, Paris, 2015",
            "C) COP27, 2022",
            "D) COP26, 2021"
          ],
          "correct": "A",
          "rationale": "Correct Option A: COP28, Dubai, 2023."
        },
        {
          "id": "evs-w4-153",
          "question": "Under Paris, which is legally binding?",
          "options": [
            "A) Nothing at all",
            "B) Each country's NDC targets",
            "C) Kyoto's Annex I targets",
            "D) The obligation to submit NDCs and report"
          ],
          "correct": "D",
          "rationale": "Correct Option D: The obligation to submit NDCs and report."
        },
        {
          "id": "evs-w4-154",
          "question": "The US withdrew from Paris in 2020 and re-entered in:",
          "options": [
            "A) 2016",
            "B) 2025",
            "C) 2021",
            "D) 2023"
          ],
          "correct": "C",
          "rationale": "Correct Option C: 2021."
        },
        {
          "id": "evs-w4-155",
          "question": "If all current NDCs are met, warming would still reach about:",
          "options": [
            "A) 1.0\u00b0C",
            "B) 2.5\u20133\u00b0C",
            "C) 1.5\u00b0C",
            "D) 5\u00b0C"
          ],
          "correct": "B",
          "rationale": "Correct Option B: 2.5\u20133\u00b0C."
        },
        {
          "id": "evs-w4-156",
          "question": "The Loss and Damage Fund was set up at:",
          "options": [
            "A) COP27 (2022)",
            "B) COP21 (2015)",
            "C) COP3 (1997)",
            "D) COP18 (2012)"
          ],
          "correct": "A",
          "rationale": "Correct Option A: COP27 (2022)."
        },
        {
          "id": "evs-w4-157",
          "question": "The 2009 Copenhagen conference is remembered for:",
          "options": [
            "A) Creating the IPCC",
            "B) Adopting Kyoto",
            "C) Adopting the SDGs",
            "D) Failing, but introducing voluntary pledges"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Failing, but introducing voluntary pledges."
        },
        {
          "id": "evs-w4-158",
          "question": "Which statement about Kyoto vs Paris is correct?",
          "options": [
            "A) Paris has assigned top-down targets",
            "B) Both bound only developed countries",
            "C) Kyoto bound only developed countries; Paris covers all",
            "D) Kyoto used NDCs"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Kyoto bound only developed countries; Paris covers all."
        },
        {
          "id": "evs-w4-159",
          "question": "The $100 billion finance goal was declared met for the year:",
          "options": [
            "A) 2015",
            "B) 2022",
            "C) 2020",
            "D) 2010"
          ],
          "correct": "B",
          "rationale": "Correct Option B: 2022."
        },
        {
          "id": "evs-w4-160",
          "question": "How many Sustainable Development Goals are there?",
          "options": [
            "A) 17",
            "B) 8",
            "C) 12",
            "D) 21"
          ],
          "correct": "A",
          "rationale": "Correct Option A: 17."
        },
        {
          "id": "evs-w4-161",
          "question": "The SDGs were agreed in:",
          "options": [
            "A) 2012, Johannesburg",
            "B) June 1992, Rio",
            "C) December 1997, Kyoto",
            "D) September 2015, UN New York"
          ],
          "correct": "D",
          "rationale": "Correct Option D: September 2015, UN New York."
        },
        {
          "id": "evs-w4-162",
          "question": "Sustainable development meets present needs without:",
          "options": [
            "A) Economic growth",
            "B) Using any resources",
            "C) Compromising future generations' ability to meet their needs",
            "D) Technology"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Compromising future generations' ability to meet their needs."
        },
        {
          "id": "evs-w4-163",
          "question": "The limits in sustainable development are set by technology, social organization and:",
          "options": [
            "A) Stock markets",
            "B) The biosphere's ability to absorb human impact",
            "C) Population only",
            "D) Politics only"
          ],
          "correct": "B",
          "rationale": "Correct Option B: The biosphere's ability to absorb human impact."
        },
        {
          "id": "evs-w4-164",
          "question": "The 2012 outcome document that launched the SDG process was titled:",
          "options": [
            "A) The Future We Want",
            "B) Our Common Future",
            "C) Agenda 21",
            "D) Limits to Growth"
          ],
          "correct": "A",
          "rationale": "Correct Option A: The Future We Want."
        },
        {
          "id": "evs-w4-165",
          "question": "JPOI stands for:",
          "options": [
            "A) Joint Programme on Oceans",
            "B) Joint Plan of Industry",
            "C) Japan Protocol on Implementation",
            "D) Johannesburg Plan of Implementation"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Johannesburg Plan of Implementation."
        },
        {
          "id": "evs-w4-166",
          "question": "The Commission for Sustainable Development was replaced by a:",
          "options": [
            "A) Security Council",
            "B) Green tribunal",
            "C) High-level political forum",
            "D) World Bank committee"
          ],
          "correct": "C",
          "rationale": "Correct Option C: High-level political forum."
        },
        {
          "id": "evs-w4-167",
          "question": "SDG 13 is:",
          "options": [
            "A) Life below water",
            "B) Climate action",
            "C) Clean water",
            "D) Zero hunger"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Climate action."
        },
        {
          "id": "evs-w4-168",
          "question": "SDG 14 is:",
          "options": [
            "A) Life below water",
            "B) Life on land",
            "C) Climate action",
            "D) Clean energy"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Life below water."
        },
        {
          "id": "evs-w4-169",
          "question": "SDG 15 is:",
          "options": [
            "A) Partnerships",
            "B) Life below water",
            "C) Sustainable cities",
            "D) Life on land"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Life on land."
        },
        {
          "id": "evs-w4-170",
          "question": "SDG 7 is about:",
          "options": [
            "A) Quality education",
            "B) Gender equality",
            "C) Affordable and clean energy",
            "D) Decent work"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Affordable and clean energy."
        },
        {
          "id": "evs-w4-171",
          "question": "SDG 11 is about:",
          "options": [
            "A) Clean water",
            "B) Sustainable cities and communities",
            "C) No poverty",
            "D) Peace and justice"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Sustainable cities and communities."
        },
        {
          "id": "evs-w4-172",
          "question": "SDG 12 is about:",
          "options": [
            "A) Responsible consumption and production",
            "B) Reduced inequalities",
            "C) Climate action",
            "D) Health"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Responsible consumption and production."
        },
        {
          "id": "evs-w4-173",
          "question": "SDG 1 is:",
          "options": [
            "A) Quality education",
            "B) Zero hunger",
            "C) Good health",
            "D) No poverty"
          ],
          "correct": "D",
          "rationale": "Correct Option D: No poverty."
        },
        {
          "id": "evs-w4-174",
          "question": "SDG 17 is about:",
          "options": [
            "A) Life on land",
            "B) Peace and justice",
            "C) Partnerships for the goals",
            "D) Climate action"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Partnerships for the goals."
        },
        {
          "id": "evs-w4-175",
          "question": "SDG 5 is:",
          "options": [
            "A) Clean water",
            "B) Gender equality",
            "C) Quality education",
            "D) Reduced inequalities"
          ],
          "correct": "B",
          "rationale": "Correct Option B: Gender equality."
        },
        {
          "id": "evs-w4-176",
          "question": "According to the notes, a world with endemic poverty is:",
          "options": [
            "A) Prone to ecological and other catastrophes",
            "B) Always sustainable",
            "C) Unaffected by environment",
            "D) Good for biodiversity"
          ],
          "correct": "A",
          "rationale": "Correct Option A: Prone to ecological and other catastrophes."
        },
        {
          "id": "evs-w4-177",
          "question": "Which is a reason for environmental ignorance in India per the notes?",
          "options": [
            "A) Over-trained leaders",
            "B) Too much media coverage",
            "C) Excess funding",
            "D) Large-scale illiteracy"
          ],
          "correct": "D",
          "rationale": "Correct Option D: Large-scale illiteracy."
        },
        {
          "id": "evs-w4-178",
          "question": "The three areas of vital environmental concern named are agriculture, industry and:",
          "options": [
            "A) Sports",
            "B) Tourism",
            "C) Health",
            "D) Defence"
          ],
          "correct": "C",
          "rationale": "Correct Option C: Health."
        },
        {
          "id": "evs-w4-179",
          "question": "Sustainable development is described as:",
          "options": [
            "A) A fixed state of harmony",
            "B) A process of change, not a fixed state",
            "C) A single law",
            "D) A one-time goal"
          ],
          "correct": "B",
          "rationale": "Correct Option B: A process of change, not a fixed state."
        }
      ]
    }
  ]
};
