export const chemistryCourse = {
  id: 'BACHY101',
  code: 'BACHY101',
  title: 'Applied Chemistry',
  shortTitle: 'Applied Chemistry',
  category: 'University Core',
  credits: 4,
  semester: 'Fall Semester 2026-27',
  color: 'red',
  badge: 'Official VIT VTOP Syllabus (6 Modules)',
  description: 'Complete Study Textbook, Chemical Reaction Mechanisms & VIT FAT Question Bank aligned with official VIT BACHY101 Course Page Syllabus, Department of Chemistry Question Bank, and VIT FAT Past Papers.',
  targetMarks: {
    cat1: '50 Marks (Modules 1 & 2)',
    cat2: '50 Marks (Modules 3 & 4)',
    fat: '100 Marks (All 6 Modules)'
  },
  modules: [
    {
      id: 'bchy-m1',
      moduleNum: 1,
      pdfUrl: '/pdfs/chemistry/Chemistry_MOD-1.pdf',
      title: 'Chemical Thermodynamics and Kinetics',
      co: 'CO: 1',
      examScope: 'CAT-1 & FAT',
      weightage: '15-20 Marks in FAT',
      status: 'not_confident',
      scope: 'Introduction terminologies, Zeroth & First Law, Enthalpy and heat capacity (Cp, Cv), Applications of First Law, Second Law, Carnot cycle & thermal efficiency, Third Law, Gibbs-Helmholtz equation (ΔG, ΔH, ΔS), Chemical kinetics: Rate equations, Order, Integral rate laws (0th, 1st, 2nd order), Half-life time of reactions, Collision theory, Effect of temperature and catalysts, and Worked numericals.',
      blueprint: {
        marksTotal: '15 to 20 Marks in FAT',
        questionTypes: [
          { type: 'Question Type A (10 Marks)', desc: 'Carnot Cycle & Efficiency: Derivation of η = (TH - TC)/TH, PV/TS indicator cycles, and calculation of net work output and heat rejected.' },
          { type: 'Question Type B (10 Marks)', desc: 'Arrhenius Equation & Activation Energy: Rate constant calculations at T1 and T2, determination of Ea and frequency factor A, or first/second-order half-life problems.' }
        ]
      },
      formulaSheet: [
        { name: 'First Law of Thermodynamics', formula: '\\Delta U = q + w = q - P \\Delta V', note: 'w = -P_ext ΔV (IUPAC convention)' },
        { name: 'Heat Capacities Relation', formula: 'C_p - C_v = R, \\quad C_p = \\left(\\frac{\\partial H}{\\partial T}\\right)_P, \\quad C_v = \\left(\\frac{\\partial U}{\\partial T}\\right)_V', note: 'For ideal gas' },
        { name: 'Carnot Engine Efficiency', formula: '\\eta = \\frac{w_{\\text{net}}}{q_H} = \\frac{T_H - T_C}{T_H} = 1 - \\frac{T_C}{T_H}', note: 'Temperatures must strictly be in Kelvin' },
        { name: 'Gibbs-Helmholtz Equation', formula: '\\Delta G = \\Delta H + T \\left[ \\frac{\\partial (\\Delta G)}{\\partial T} \\right]_P, \\quad \\left[ \\frac{\\partial (\\Delta G / T)}{\\partial T} \\right]_P = -\\frac{\\Delta H}{T^2}', note: 'Determines ΔH from ΔG temperature dependence' },
        { name: 'First-Order Rate Law', formula: 'k_1 = \\frac{2.303}{t} \\log_{10}\\left(\\frac{a}{a - x}\\right), \\quad t_{1/2} = \\frac{0.693}{k_1}', note: 'Half-life independent of initial concentration' },
        { name: 'Arrhenius Two-Temperature Form', formula: '\\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{R} \\left( \\frac{1}{T_1} - \\frac{1}{T_2} \\right)', note: 'R = 8.314 J/(mol·K)' }
      ],
      examInsights: [
        {
          title: 'Kelvin Conversion & Sign Convention Trap',
          desc: 'Always convert boiler and condenser temperatures to Kelvin (K = °C + 273.15). In first law calculations, work done BY the gas is negative (w = -PΔV), while work done ON the gas is positive.'
        }
      ],
      topics: [
        { id: 'bchy-t1-1', title: '1-Introduction terminologies & 2-Zeroth law, First law, Enthalpy & heat capacity', theory: 'Thermodynamic systems (open, closed, isolated). First law ΔU = q + w. Enthalpy H = U + PV. Heat capacity difference Cp - Cv = R.' },
        { id: 'bchy-t1-2', title: '3-Applications of first law, Second law & 4-Carnot cycle', theory: 'Isothermal vs adiabatic processes. Kelvin-Planck and Clausius statements. Carnot engine 4-step cycle and efficiency η = 1 - TC/TH.' },
        { id: 'bchy-t1-3', title: '5-Third law & Gibbs-Helmholtz equation', theory: 'Third law S0 = 0 at T = 0 K. Gibbs free energy ΔG = ΔH - TΔS. Gibbs-Helmholtz relation [∂(ΔG/T)/∂T]P = -ΔH/T^2.' },
        { id: 'bchy-t1-4', title: '6-Chemical kinetics, Rate equations, Order & Half-life', theory: 'Differential vs integrated rate laws for 0th, 1st, and 2nd order reactions. Characteristic half-life equations and concentration-time plots.' },
        { id: 'bchy-t1-5', title: '7-Collision theory, Temperature and catalysts & 8/9-Worked Numericals', theory: 'Collision theory Rate = ZAB exp(-Ea/RT) P. Arrhenius equation. Catalytic lowering of activation energy.' }
      ],
      pyqs: [
        {
          id: 'bchy-q1-1',
          exam: 'BACHY101 FAT April 2025 Slot E2 — 10 Marks',
          marks: '10 Marks',
          question: 'A Carnot heat engine absorbs 600 kJ of heat from a reservoir at 400 °C and rejects heat to a sink at 30 °C. Calculate: (i) Carnot efficiency, (ii) Work done per cycle, and (iii) Heat rejected to sink.',
          solution: 'Step 1: Convert to Kelvin: TH = 400 + 273.15 = 673.15 K, TC = 30 + 273.15 = 303.15 K.\nStep 2: Efficiency η = (TH - TC) / TH = (673.15 - 303.15) / 673.15 = 370 / 673.15 = 0.5496 (54.96%).\nStep 3: Work output w_net = η * q_in = 0.5496 * 600 kJ = 329.76 kJ.\nStep 4: Heat rejected q_out = q_in - w_net = 600 - 329.76 = 270.24 kJ.'
        },
        {
          id: 'bchy-q1-2',
          exam: 'BACHY101 FAT Nov 2024 Slot E1 & QB Q12 — 10 Marks',
          marks: '10 Marks',
          question: 'The rate constant of a chemical reaction triples when the temperature increases from 298 K to 318 K. (i) Calculate the energy of activation ($E_a$) in kJ/mol. (ii) If the rate constant at 298 K is $k_1 = 1.8 \\times 10^{-4}\\text{ s}^{-1}$, calculate the pre-exponential frequency factor $A$. (iii) Determine the half-life $t_{1/2}$ of this first-order reaction at 298 K.',
          solution: 'Step 1 (Activation Energy $E_a$ via Arrhenius Equation):\\n$$\\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right) = \\frac{E_a}{R}\\left(\\frac{T_2 - T_1}{T_1 T_2}\\right)$$\\nGiven: $\\frac{k_2}{k_1} = 3, T_1 = 298\\text{ K}, T_2 = 318\\text{ K}, R = 8.314\\text{ J/(mol}\\cdot\\text{K)}$.\\n$$\\ln(3) = 1.0986 = \\frac{E_a}{8.314}\\left(\\frac{318 - 298}{298 \\times 318}\\right) = \\frac{E_a}{8.314}\\left(\\frac{20}{94764}\\right) = E_a \\times (2.5383 \\times 10^{-5})$$\\n$$E_a = \\frac{1.0986}{2.5383 \\times 10^{-5}} = 43,281\\text{ J/mol} = 43.28\\text{ kJ/mol}$$\\n\\nStep 2 (Frequency Factor $A$):\\n$$\\ln k_1 = \\ln A - \\frac{E_a}{R T_1} \implies \\ln A = \\ln(1.8 \\times 10^{-4}) + \\frac{43281}{8.314 \\times 298} = -8.6225 + 17.4693 = 8.8468$$\\n$$A = e^{8.8468} = 6.95 \\times 10^3\\text{ s}^{-1}$$\\n\\nStep 3 (First-Order Half-Life $t_{1/2}$ at 298 K):\\n$$t_{1/2} = \\frac{\\ln 2}{k_1} = \\frac{0.69315}{1.8 \\times 10^{-4}\\text{ s}^{-1}} = 3,850.8\\text{ seconds} \\approx 64.18\\text{ minutes}$$\\nBoxed Answer: (i) $E_a = 43.28\\text{ kJ/mol}$, (ii) $A = 6.95 \\times 10^3\\text{ s}^{-1}$, (iii) $t_{1/2} = 3,851\\text{ s}$.'
        },
        {
          id: 'bchy-q1-3',
          exam: 'VIT Question Bank Q7 — Gibbs-Helmholtz & Spontaneity — 10 Marks',
          marks: '10 Marks',
          question: 'For the dimerization reaction $2\\text{NO}_2(g) \\rightleftharpoons \\text{N}_2\\text{O}_4(g)$, standard thermodynamic parameters at 298 K are $\\Delta H^\\circ = -57.2\\text{ kJ/mol}$ and $\\Delta S^\\circ = -175.8\\text{ J/(mol}\\cdot\\text{K)}$. (i) Calculate $\\Delta G^\\circ$ at 298 K and state if the reaction is spontaneous. (ii) Calculate the equilibrium constant $K_p$. (iii) Determine the crossover temperature above which the reverse decomposition reaction becomes spontaneous.',
          solution: 'Step 1 (Calculate $\\Delta G^\\circ$ at 298 K):\\n$$\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$$\\n$$\\Delta G^\\circ = -57,200\\text{ J} - (298\\text{ K})(-175.8\\text{ J/K}) = -57,200 + 52,388.4 = -4,811.6\\text{ J/mol} = -4.81\\text{ kJ/mol}$$\\nSince $\\Delta G^\\circ < 0$, the dimerization is spontaneous at 298 K.\\n\\nStep 2 (Equilibrium Constant $K_p$):\\n$$\\Delta G^\\circ = -RT \\ln K_p \implies \\ln K_p = -\\frac{-4811.6}{8.314 \\times 298} = \\frac{4811.6}{2477.57} = 1.942$$\\n$$K_p = e^{1.942} = 6.97\\text{ atm}^{-1}$$\\n\\nStep 3 (Crossover Equilibrium Temperature $T_{\\text{eq}}$):\\nAt the threshold of spontaneity, $\\Delta G = 0 \\implies T_{\\text{eq}} = \\frac{\\Delta H^\\circ}{\\Delta S^\\circ}$:\\n$$T_{\\text{eq}} = \\frac{-57,200\\text{ J/mol}}{-175.8\\text{ J/(mol}\\cdot\\text{K})} = 325.37\\text{ K} \\approx 52.2 ^\\circ\\text{C}$$\\nConclusion: Below 325.4 K, dimerization is spontaneous ($\\Delta G < 0$); above 325.4 K, entropy drives decomposition of $\\text{N}_2\\text{O}_4$ into $\\text{NO}_2$.'
        }
      ]
    },
    {
      id: 'bchy-m2',
      moduleNum: 2,
      pdfUrl: '/pdfs/chemistry/Chemistry_MOD-2.pdf',
      title: 'Energy Devices',
      co: 'CO: 2',
      examScope: 'CAT-1 & FAT',
      weightage: '15-20 Marks in FAT',
      status: 'need_to_revise',
      scope: 'Electrochemical and electrolytic cells, electrode materials with examples, Nernst equation and cell potential numericals, Classification of batteries (primary, secondary, reserve), Chemistry of Li-ion secondary batteries (intercalation mechanisms, LiCoO2 cathode, graphite anode, electrolytes), Fuel cells: H2-O2 alkaline fuel cell and Solid Oxide Fuel Cell (SOFC), Silicon photovoltaic solar cells, Photoelectrochemical cells, and Dye-Sensitized Solar Cells (DSSC / Grätzel cells).',
      blueprint: {
        marksTotal: '15 to 20 Marks in FAT',
        questionTypes: [
          { type: 'Question Type A (10 Marks)', desc: 'Lithium-Ion Battery: Full structural schematic, charging and discharging chemical half-reactions at cathode and anode, role of organic electrolyte and separator.' },
          { type: 'Question Type B (10 Marks)', desc: 'Nernst Equation: Derivation of E_cell = E0_cell - (0.0591/n) log10 Q at 25 °C and numerical evaluation of cell EMF and equilibrium constant K_eq.' },
          { type: 'Question Type C (10 Marks)', desc: 'Dye-Sensitized Solar Cell (DSSC): Operating principle, 5-step electron injection, percolation through TiO2, and iodide/triiodide redox regeneration.' }
        ]
      },
      formulaSheet: [
        { name: 'Nernst Equation (25 °C)', formula: 'E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0591}{n} \\log_{10} Q', note: 'E0_cell = E0_cathode - E0_anode' },
        { name: 'Cell Potential & Free Energy', formula: '\\Delta G = -n F E_{\\text{cell}}, \\quad \\Delta G^\\circ = -R T \\ln K_{\\text{eq}}', note: 'F = 96485 C/mol' },
        { name: 'Lithium-Ion Cathode Discharge', formula: '\\text{Li}_{1-x}\\text{CoO}_2 + x\\text{Li}^+ + x e^- \\rightarrow \\text{LiCoO}_2', note: 'Intercalation into layered oxide' },
        { name: 'Lithium-Ion Anode Discharge', formula: '\\text{Li}_x\\text{C}_6 \\rightarrow 6\\text{C} + x\\text{Li}^+ + x e^-', note: 'De-intercalation from graphite' },
        { name: 'H2-O2 Fuel Cell Overall', formula: '2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}, \\quad E^\\circ = 1.229\\text{ V}', note: 'Thermodynamic efficiency ~83%' },
        { name: 'DSSC Solar Efficiency', formula: '\\eta = \\frac{P_{\\max}}{P_{\\text{in}}} = \\frac{V_{oc} \\cdot J_{sc} \\cdot \\text{FF}}{P_{\\text{in}}}', note: 'FF = Fill Factor' }
      ],
      examInsights: [
        {
          title: 'Lithium-Ion Battery Intercalation Terminology',
          desc: 'VIT examiners look specifically for the word "Intercalation" (insertion of Li+ into host crystal lattice without altering structural framework). Emphasize why metallic lithium is avoided (prevents dendrite growth and fire hazard).'
        }
      ],
      topics: [
        { id: 'bchy-t2-1', title: '1-Electrochemical & electrolytic cells, electrode materials', theory: 'Galvanic vs electrolytic cells. Anode oxidation, cathode reduction. Reference electrodes (SHE, Calomel).' },
        { id: 'bchy-t2-2', title: '2-Nernst equation & cell EMF numericals', theory: 'Thermodynamic derivation of Nernst equation ΔG = ΔG° + RT ln Q. Calculating EMF of concentration cells and redox cells.' },
        { id: 'bchy-t2-3', title: '3-Classification of batteries & 4-Chemistry of Li-ion batteries', theory: 'Primary vs secondary vs reserve batteries. Detailed charge/discharge cycle of LiCoO2/graphite cells with LiPF6 electrolyte.' },
        { id: 'bchy-t2-4', title: '5-Fuel cells (H2-O2 & SOFC)', theory: 'Continuous fuel supply energy conversion. Alkaline fuel cell reactions. Yttria-Stabilized Zirconia (YSZ) high-temp oxygen ion transport in SOFC.' },
        { id: 'bchy-t2-5', title: '6-Solar cells, 7-Photoelectrochemical cells & 8-Dye-sensitized solar cells (DSSC)', theory: 'Silicon p-n junction photovoltaic effect. Photoelectrochemical water splitting. DSSC electron injection into TiO2 and I-/I3- redox cycle.' }
      ],
      pyqs: [
        {
          id: 'bchy-q2-1',
          exam: 'BACHY101 FAT April 2025 Slot E2 — 10 Marks',
          marks: '10 Marks',
          question: 'Explain the construction, working, and chemical reactions during charging and discharging of a Lithium-ion secondary battery. Why is it preferred over lead-acid and Ni-Cd batteries in electric vehicles?',
          solution: 'Construction: Anode: Graphite (Li_x C6); Cathode: LiCoO2; Electrolyte: 1M LiPF6 in EC/DMC; Separator: Microporous polyethylene.\nDischarge Reactions:\nAnode: Li_x C6 -> 6C + x Li+ + x e-\nCathode: Li_(1-x)CoO2 + x Li+ + x e- -> LiCoO2\nOverall: Li_x C6 + Li_(1-x)CoO2 -> 6C + LiCoO2 (EMF ~ 3.7 V).\nAdvantages: (1) High gravimetric energy density (~250 Wh/kg vs 35 Wh/kg in lead-acid), (2) High operating cell voltage (3.7 V vs 2.0 V), (3) Zero memory effect compared to Ni-Cd, (4) Low self-discharge rate (<2% per month).'
        },
        {
          id: "bchy-q2-2",
          exam: "BACHY101 FAT April 2025 Slot E1 & SAS QB Q18 \u2014 10 Marks",
          marks: "10 Marks",
          question: "(a) Explain the construction and electrochemical working principle of a modern Lithium-Ion Secondary Battery.\n(b) Write the reversible chemical half-reactions occurring at the anode and cathode during both charging and discharging cycles.\n(c) Explain the vital function of the Solid Electrolyte Interphase (SEI) layer, and discuss two primary causes of capacity fade and thermal runaway in commercial Li-ion cells.",
          solution: "Part (a) Construction & Intercalation Principle:\nA Lithium-ion cell consists of:\n1. Anode (Negative electrode): Intercalated graphite matrix (Li_x C_6) coated on copper foil current collector.\n2. Cathode (Positive electrode): Lithium metal oxide layered intercalation compound (e.g., LiCoO2, LiFePO4, or NMC811) on aluminum foil.\n3. Electrolyte: Non-aqueous liquid solution of lithium hexafluorophosphate (LiPF6) in organic carbonate solvents (Ethylene Carbonate EC + Dimethyl Carbonate DMC).\n4. Separator: Micro-porous polypropylene/polyethylene membrane allowing Li+ ion transport while electrically isolating electrodes.\nWorking: Li+ ions de-intercalate from host matrix at one electrode, migrate across electrolyte, and intercalate into host lattice at opposite electrode ('Rocking-Chair' mechanism).\n\nPart (b) Reversible Half-Reactions:\n1. At Cathode (Positive Electrode):\nDischarging (Reduction): Li_{1-x}CoO2 + x Li+ + x e- -> LiCoO2\nCharging (Oxidation): LiCoO2 -> Li_{1-x}CoO2 + x Li+ + x e-\n\n2. At Anode (Negative Electrode):\nDischarging (Oxidation): Li_x C_6 -> 6 C + x Li+ + x e-\nCharging (Reduction): 6 C + x Li+ + x e- -> Li_x C_6\n\nOverall Cell Reaction:\nLiCoO2 + 6 C <== [Charge / Discharge] ==> Li_{1-x}CoO2 + Li_x C_6  (Nominal cell EMF ~ 3.7 V)\n\nPart (c) SEI Layer, Capacity Fade & Thermal Runaway:\n1. Solid Electrolyte Interphase (SEI): Formed during initial formation cycles via reductive decomposition of electrolyte solvents on the negative graphite surface. It is electronically insulating (preventing continuous electrolyte breakdown) yet ionically conductive (permitting Li+ migration).\n2. Capacity Fade: Growth of excessively thick SEI consumes active lithium inventory; transition metal dissolution (Co2+ migration) poisons anode.\n3. Thermal Runaway: At elevated temperatures (> 130 \u00b0C), separator melts causing internal short circuit; exothermic reaction between released oxygen from cathode breakdown and flammable organic carbonate solvent triggers self-sustaining explosive fire."
        },
        {
          id: "bchy-q2-3",
          exam: "BACHY101 FAT Nov 2024 Slot E1 & QB Q22 \u2014 10 Marks",
          marks: "10 Marks",
          question: "(a) Describe the construction and electrochemical operation of a Proton Exchange Membrane Fuel Cell (PEMFC / H2-O2 Fuel Cell) with a neat schematic diagram.\n(b) Write the electrochemical oxidation and reduction half-cell reactions and calculate the theoretical thermodynamic efficiency (\u03b7_th) at 298 K given \u0394G\u00b0 = -237.13 kJ/mol and \u0394H\u00b0 = -285.83 kJ/mol.\n(c) State three technological advantages of fuel cells over internal combustion heat engines.",
          solution: "Part (a) Construction & Principle of PEMFC:\n1. Anode: Porous carbon gas diffusion layer impregnated with platinum nanoparticle catalyst.\n2. Cathode: Porous carbon layer coated with platinum catalyst.\n3. Electrolyte: Solid polymer perfluorosulfonic acid membrane (Nafion) that conducts protons (H+) via sulfonic acid groups while blocking electrons and reactant gases.\nOperation: Gaseous H2 fuel is fed to anode and catalytic dissociation splits it into protons and electrons. Electrons traverse external circuit generating electric work; protons travel through Nafion membrane to cathode where they combine with O2 to form pure water and heat.\n\nPart (b) Electrode Half-Reactions & Thermodynamic Efficiency:\n1. Anode reaction (Oxidation): 2 H2(g) -> 4 H+(aq) + 4 e-   (E\u00b0 = 0.00 V)\n2. Cathode reaction (Reduction): O2(g) + 4 H+(aq) + 4 e- -> 2 H2O(l)   (E\u00b0 = +1.229 V)\nOverall cell reaction: 2 H2(g) + O2(g) -> 2 H2O(l)   (E\u00b0_cell = 1.229 V)\n\nThermodynamic Efficiency Calculation:\n\u03b7_th = (\u0394G\u00b0 / \u0394H\u00b0) * 100%\n\u03b7_th = (-237.13 kJ/mol / -285.83 kJ/mol) * 100% = 0.8296 * 100% = 82.96% (Theoretical limit ~ 83%).\n\nPart (c) Advantages over IC Engines:\n1. Carnot Limit Exemption: Fuel cells convert chemical energy directly to electricity electrochemically without an intermediate thermal cycle, easily achieving 55-60% practical efficiency compared to 25-30% in IC engines.\n2. Zero Harmful Tailpipe Emissions: Pure water (H2O) is the sole exhaust byproduct; zero emissions of NOx, CO, unburnt hydrocarbons, or particulates.\n3. Silent Operation & Minimal Wear: No high-speed reciprocating pistons, crankshafts, or explosive combustion vibrations, minimizing mechanical fatigue."
        }
      ]
    },
    {
      id: 'bchy-m3',
      moduleNum: 3,
      pdfUrl: '/pdfs/chemistry/Chemistry_MOD-3.pdf',
      title: 'Functional Materials',
      co: 'CO: 2',
      examScope: 'CAT-2 & FAT',
      weightage: '15-20 Marks in FAT',
      status: 'yet_to_start',
      scope: 'Electrical materials, Ohm\'s law and resistivity, Band theory classification of metals, insulators, and semiconductors. Intrinsic and extrinsic semiconductors (n-type and p-type doping, carrier mobilities, Fermi level), Superconductors (Meissner effect, critical temperature Tc), Magnetic materials: diamagnetism, paramagnetism, ferromagnetism (hysteresis loop, remanence, coercivity), antiferromagnetism, ferrimagnetism (applications in magnetic recording & storage devices), Liquid cooling: types of coolants, thermal conductivity, heat dissipation, Nanomaterials introduction, Top-down and bottom-up synthesis, Bulk vs. nano gold (surface plasmon resonance), and Quantum dots (quantum confinement effect).',
      blueprint: {
        marksTotal: '15 to 20 Marks in FAT',
        questionTypes: [
          { type: 'Question Type A (10 Marks)', desc: 'Magnetic Hysteresis & Materials: Draw the B-H hysteresis curve, define Retentivity and Coercivity, and compare Hard vs Soft magnetic materials for transformer cores and data storage.' },
          { type: 'Question Type B (10 Marks)', desc: 'Nanomaterials & Quantum Dots: Contrast Top-down vs Bottom-up synthesis, explain quantum confinement in quantum dots using Brus equation, and explain the color shift of gold nanoparticles.' }
        ]
      },
      formulaSheet: [
        { name: 'Ohm\'s Law & Conductivity', formula: 'J = \\sigma E, \\quad \\sigma = n e \\mu_e + p e \\mu_h', note: 'Resistivity ρ = 1/σ' },
        { name: 'Intrinsic Carrier Concentration', formula: 'n_i = \\sqrt{N_c N_v} e^{-E_g / (2 k_B T)}', note: 'Fermi level E_F = (Ec + Ev)/2' },
        { name: 'Curie-Weiss Law', formula: '\\chi = \\frac{C}{T - \\theta} \\quad (T > T_C)', note: 'For ferromagnetic materials' },
        { name: 'Meissner Effect', formula: 'B = \\mu_0 (H + M) = 0 \\implies \\chi = -1', note: 'Perfect diamagnetism in superconductors' },
        { name: 'Brus Equation (Quantum Dots)', formula: 'E_g^{\\text{nano}} = E_g^{\\text{bulk}} + \\frac{h^2}{8 m^* R^2} - \\frac{1.8 e^2}{4 \\pi \\varepsilon R}', note: 'Bandgap increases as dot radius R shrinks' }
      ],
      examInsights: [
        {
          title: 'Hard vs Soft Magnetic Materials Distinction',
          desc: 'VIT examiners look for high coercivity and broad hysteresis loop for permanent storage (hard magnets), versus low coercivity and narrow loop with minimal area for transformer cores (soft magnets).'
        }
      ],
      topics: [
        { id: 'bchy-t3-1', title: '1-Electrical materials, Ohm\'s law & 2-Metals vs Semiconductors', theory: 'Band theory of solids. Valence band, conduction band, bandgap Eg. Temperature dependence of resistivity.' },
        { id: 'bchy-t3-2', title: '3-Intrinsic & extrinsic semiconductors, superconductors', theory: 'n-type donor levels, p-type acceptor levels. Superconductivity and Meissner flux expulsion.' },
        { id: 'bchy-t3-3', title: '4-Magnetic materials (dia & para) & 5/6-Ferro, Antiferro & Storage devices', theory: 'Magnetic dipole ordering. Domain theory. B-H hysteresis loop, remanence, coercivity. Ferrite cores.' },
        { id: 'bchy-t3-4', title: '7-Liquid cooling: coolants, thermal conductivity & applications', theory: 'Thermal management in electronics. Dielectric coolants, water-glycol, nanofluids. Fourier law heat transfer.' },
        { id: 'bchy-t3-5', title: '8-Nanomaterials, 9-Top down vs bottom up & 10-Bulk vs nano gold, quantum dots', theory: 'Surface-to-volume ratio scaling. Sol-gel vs ball milling. Surface plasmon resonance. 3D quantum confinement.' }
      ],
      pyqs: [
        {
          id: 'bchy-q3-1',
          exam: 'BACHY101 FAT April 2025 Slot E2 — 10 Marks',
          marks: '10 Marks',
          question: 'Discuss the origin of ferromagnetism using Domain Theory. Sketch the B-H hysteresis loop and clearly explain the physical significance of Retentivity, Coercive force, and Hysteresis loss. How does a hard magnetic material differ from a soft magnetic material?',
          solution: 'Domain Theory: Ferromagnets consist of microscopic domains within which atomic magnetic dipoles are spontaneously aligned parallel via quantum mechanical exchange interaction.\nHysteresis Loop Points:\n1. Retentivity (Br): Residual magnetic flux density when external magnetizing field H is reduced to zero.\n2. Coercivity (Hc): Reverse magnetic field required to reduce residual magnetization to zero.\n3. Hysteresis Loss: Area enclosed by B-H loop represents magnetic energy dissipated as heat per cycle.\nComparison:\n- Soft Magnets: Narrow B-H loop, low Hc, low hysteresis loss, high permeability (e.g., Silicon steel in transformer cores).\n- Hard Magnets: Broad B-H loop, high Hc, high Br, large energy product (e.g., Alnico, NdFeB for hard disk storage platters).'
        },
        {
          id: "bchy-q3-2",
          exam: "BACHY101 FAT Nov 2024 Slot E1 & SAS QB Q14 \u2014 10 Marks",
          marks: "10 Marks",
          question: "(a) What is superconductivity? Explain the Meissner Effect and show that a superconductor behaves as a perfect diamagnet with magnetic susceptibility \u03c7 = -1.\n(b) Distinguish between Type-I and Type-II Superconductors with respect to critical magnetic field behavior (Hc, Hc1, Hc2) and vortex/mixed state.\n(c) Name one high-temperature superconductor (HTS) and describe two engineering applications.",
          solution: "Part (a) Superconductivity & Meissner Effect:\n1. Superconductivity: State of zero electrical resistance (R = 0) below a characteristic critical transition temperature Tc.\n2. Meissner Effect: When cooled below Tc in an external magnetic field H, a superconductor expels all internal magnetic flux lines (B = 0 inside the bulk).\nMagnetic relation: B = \u03bc0 (H + M) = 0\n=> M = -H\nMagnetic susceptibility: \u03c7 = M / H = -1 (Proves ideal, perfect diamagnetism independent of magnetic history).\n\nPart (b) Type-I vs Type-II Superconductors:\n1. Type-I (Soft Superconductors):\n- Single critical field Hc. Completely expels magnetic flux until H reaches Hc; above Hc, superconductivity abruptly collapses into normal state.\n- Cannot withstand strong magnetic fields (Hc < 0.1 Tesla). Examples: Pure elemental metals (Lead Pb, Mercury Hg, Tin Sn).\n2. Type-II (Hard Superconductors):\n- Two critical fields: Lower critical field Hc1 and upper critical field Hc2.\n- Between Hc1 and Hc2, exists in a Mixed / Vortex State (Abrikosov vortex lattice): magnetic flux penetrates through quantized normal cores while surrounding bulk remains superconducting.\n- Can withstand enormous magnetic fields (> 30 Tesla). Examples: Nb-Ti, Nb3Sn.\n\nPart (c) High-Tc Cuprates & Applications:\n- Example: YBa2Cu3O_{7-\u03b4} (YBCO), with Tc = 93 K (above liquid nitrogen boiling point 77 K).\n- Applications:\n1. Magnetic Resonance Imaging (MRI): Superconducting high-homogeneity 1.5T-3T electromagnets without resistive Joule heat dissipation.\n2. Maglev High-Speed Trains: Magnetic levitation tracks using flux pinning in Type-II superconductors for frictionless 600 km/h transit."
        },
        {
          id: "bchy-q3-3",
          exam: "SAS Question Bank Q28 & FAT April 2025 \u2014 10 Marks",
          marks: "10 Marks",
          question: "(a) Explain the quantum confinement effect in semiconductor nanoparticles and describe how bandgap energy changes with particle radius using the Brus equation.\n(b) Why do colloidal gold nanoparticles appear vibrant ruby red whereas bulk gold is metallic yellow? Explain Surface Plasmon Resonance (SPR).\n(c) Contrast Top-Down and Bottom-Up nanomaterial synthesis methods with two examples each.",
          solution: "Part (a) Quantum Confinement & Brus Equation:\nWhen the physical radius R of a semiconductor nanocrystal becomes smaller than the natural exciton Bohr radius (a_B = \u03b5 h^2 / (\u03c0 m* e^2)), the continuous electronic energy bands split into discrete, quantized atomic-like energy levels.\nBrus Equation:\nE_g(nano) = E_g(bulk) + (h^2 / (8 \u03bc R^2)) - (1.8 e^2 / (4 \u03c0 \u03b5_0 \u03b5_r R))\nwhere \u03bc = (m_e* * m_h*) / (m_e* + m_h*) is reduced exciton mass.\nPhysical effect: Bandgap increases inversely with the square of the radius (1/R^2). Hence, shrinking CdSe quantum dot diameter from 6 nm to 2 nm blue-shifts emission from red to vibrant blue under identical UV excitation!\n\nPart (b) Surface Plasmon Resonance (SPR) of Gold:\nIn bulk gold, interband d-to-sp electron transitions absorb blue light, reflecting golden yellow. In gold nanoparticles (10-30 nm), conduction electrons oscillate collectively in resonance with incident electromagnetic light waves (Localized Surface Plasmon Resonance - LSPR).\nThe SPR frequency for ~15 nm spherical gold nanoparticles matches green light (~520 nm), which is strongly absorbed. Unabsorbed red and far-red light is transmitted, giving colloidal gold its brilliant ruby red appearance.\n\nPart (c) Top-Down vs Bottom-Up Synthesis:\n1. Top-Down: Breaking bulk materials down to nanoscale via mechanical/physical shearing.\n- Examples: High-energy ball milling, photolithography/electron-beam etching.\n- Pros/Cons: High throughput; but creates surface structural defects, broad particle size distribution, and contamination.\n2. Bottom-Up: Assembling nanostructures atom-by-atom or molecule-by-molecule through chemical nucleation and self-assembly.\n- Examples: Chemical sol-gel synthesis, chemical vapor deposition (CVD).\n- Pros/Cons: Monodisperse particle size, pristine crystalline facets, atomic-level composition control."
        }
      ]
    },
    {
      id: 'bchy-m4',
      moduleNum: 4,
      pdfUrl: '/pdfs/chemistry/Chemistry_MOD-4.pdf',
      title: 'Spectroscopic and Diffraction Techniques',
      co: 'CO: 3',
      examScope: 'CAT-2 & FAT',
      weightage: '15-20 Marks in FAT',
      status: 'strong',
      scope: 'Fundamental concepts in spectroscopic techniques, Electromagnetic radiation and energy transitions, Fundamental concepts in diffraction techniques, Principle and instrumentation of UV-Visible spectroscopy (Beer-Lambert\'s law, electronic transitions, chromophores, auxochromes, spectral shifts), Applications of UV-Visible spectroscopy in qualitative and quantitative analysis, and Powder X-Ray Diffraction (XRD): Bragg\'s law, Miller indices, Debye-Scherrer equation for crystallite size determination, and worked numericals.',
      blueprint: {
        marksTotal: '15 to 20 Marks in FAT',
        questionTypes: [
          { type: 'Question Type A (10 Marks)', desc: 'Powder XRD Crystallite Size: Application of Debye-Scherrer equation D = (Kλ)/(β cos θ) with FWHM converted from degrees to radians.' },
          { type: 'Question Type B (10 Marks)', desc: 'UV-Visible Spectroscopy: Beer-Lambert law derivation, electronic transitions (σ->σ*, n->σ*, π->π*, n->π*), chromophores, auxochromes, bathochromic and hypsochromic shifts.' }
        ]
      },
      formulaSheet: [
        { name: 'Beer-Lambert Law', formula: 'A = \\log_{10}\\left(\\frac{I_0}{I}\\right) = \\varepsilon c l', note: 'A is absorbance (dimensionless), ε is molar absorptivity' },
        { name: 'Bragg\'s Law of Diffraction', formula: '2 d_{hkl} \\sin \\theta = n \\lambda', note: 'd_hkl = a / sqrt(h^2 + k^2 + l^2) for cubic crystals' },
        { name: 'Debye-Scherrer Equation', formula: 'D = \\frac{K \\lambda}{\\beta \\cos \\theta}', note: 'K = 0.9, β is FWHM in RADIANS, θ is half of 2θ' },
        { name: 'Degree to Radian Conversion', formula: '\\beta (\\text{rad}) = \\beta (\\text{degrees}) \\times \\frac{\\pi}{180}', note: 'Vital: omitting this yields wrong order of magnitude' }
      ],
      examInsights: [
        {
          title: 'The FWHM Radian Trap in Scherrer Calculations',
          desc: 'VIT professors consistently deduct 4 marks if students plug in the FWHM value directly in degrees! Multiply β by (π / 180) before computing D in meters/nanometers.'
        }
      ],
      topics: [
        { id: 'bchy-t4-1', title: '1-Concepts in spectroscopy & 2-Concepts in diffraction', theory: 'EM radiation wavelength, frequency, energy relation E = hν. Absorption vs emission. Diffraction constructive interference.' },
        { id: 'bchy-t4-2', title: '3-Principle & instrumentation of UV-Visible & 4-Applications', theory: 'Double-beam spectrophotometer. Chromophores, auxochromes. Red shift (bathochromic) and blue shift (hypsochromic).' },
        { id: 'bchy-t4-3', title: '5 & 6-Powder XRD determination of crystal size numericals', theory: 'Bragg law 2d sin θ = nλ. Peak broadening due to crystallite size. Debye-Scherrer equation D = (0.9λ)/(β cos θ).' }
      ],
      pyqs: [
        {
          id: 'bchy-q4-1',
          exam: 'BACHY101 FAT April 2025 Slot E2 — 10 Marks',
          marks: '10 Marks',
          question: 'In a powder XRD pattern recorded with Cu-Kα radiation (λ = 0.15418 nm), a prominent diffraction peak appears at 2θ = 38.2° with Full Width at Half Maximum (FWHM) of 0.48°. Calculate the average crystallite size D assuming shape factor K = 0.90.',
          solution: 'Step 1: Find Bragg angle θ: θ = 38.2° / 2 = 19.1°, cos θ = cos(19.1°) = 0.9449.\nStep 2: Convert FWHM β from degrees to radians:\nβ = 0.48° * (π / 180) = 0.48 * 0.017453 = 8.3776 * 10^-3 rad.\nStep 3: Apply Debye-Scherrer formula:\nD = (K * λ) / (β * cos θ)\nD = (0.90 * 0.15418 * 10^-9 m) / (8.3776 * 10^-3 * 0.9449)\nD = (0.13876 * 10^-9) / (7.9160 * 10^-3) = 1.753 * 10^-8 m = 17.53 nm.\nAnswer: The average crystallite size is 17.53 nm.'
        },
        {
          id: "bchy-q4-2",
          exam: "BACHY101 FAT April 2025 Slot E1 & SAS QB Q19 \u2014 10 Marks",
          marks: "10 Marks",
          question: "A powder X-ray diffraction (XRD) pattern of a cubic ceria (CeO2) nanoparticle sample is recorded using Cu-K\u03b1 radiation of wavelength \u03bb = 0.15418 nm (1.5418 \u00c5). The most intense diffraction peak corresponding to the (111) lattice planes is observed at a 2\u03b8 diffraction angle of 28.55\u00b0, and its Full Width at Half Maximum (FWHM) is \u03b2 = 0.58\u00b0.\n(i) State the Debye-Scherrer equation and define each symbol with SI units.\n(ii) Calculate the average crystallite size D in nanometers, showing the conversion of FWHM into radians explicitly.\n(iii) What will happen to the XRD peak width if the crystallite size doubles? Explain.",
          solution: "Step 1: Debye-Scherrer Equation:\nD = (K * \u03bb) / (\u03b2 * cos \u03b8)\nwhere:\n- D = Average crystallite domain size (nm or meters)\n- K = Scherrer shape factor constant (typically 0.9 for spherical crystallites)\n- \u03bb = X-ray radiation wavelength = 0.15418 nm\n- \u03b2 = Full Width at Half Maximum (FWHM) of diffraction peak in RADIANS\n- \u03b8 = Bragg diffraction angle (half of the 2\u03b8 detector angle)\n\nStep 2: Numerical Calculation:\n1. Find Bragg angle \u03b8:\n2\u03b8 = 28.55\u00b0 => \u03b8 = 28.55\u00b0 / 2 = 14.275\u00b0\ncos(14.275\u00b0) = 0.9691\n\n2. Convert FWHM \u03b2 from degrees to radians (CRITICAL VIT EXAM STEP):\n\u03b2(rad) = \u03b2(deg) * (\u03c0 / 180\u00b0)\n\u03b2 = 0.58\u00b0 * (3.14159 / 180\u00b0) = 0.58 * 0.017453 = 0.010123 radians\n\n3. Calculate Crystallite Size D:\nD = (0.9 * 0.15418 nm) / (0.010123 * 0.9691)\nD = 0.138762 / 0.009810 = 14.145 nm\n\nStep 3: Effect of Doubling Crystallite Size:\nSince D is inversely proportional to peak broadening \u03b2 (D \u221d 1/\u03b2):\nIf crystallite size D doubles (from 14.1 nm to 28.2 nm), the diffraction peak width \u03b2 will halve (sharpen). Infinitely large single-crystal grains exhibit narrow instrumental-resolution lines, whereas small nanocrystals exhibit pronounced peak broadening.\nBoxed Answer: (i) Formula stated, (ii) D = 14.15 nm, (iii) Peak narrows (\u03b2 halves)."
        },
        {
          id: "bchy-q4-3",
          exam: "SAS Question Bank Q11 & FAT Nov 2024 \u2014 10 Marks",
          marks: "10 Marks",
          question: "(a) State and derive the Beer-Lambert Law of optical absorption. Define Absorbance (A), Transmittance (%T), and Molar Absorptivity (\u03b5).\n(b) A solution of paracetamol (M = 151.16 g/mol) in methanol exhibits an absorbance of A = 0.680 at \u03bb_max = 249 nm when placed in a quartz cuvette of path length l = 1.0 cm. Given that the molar absorptivity is \u03b5 = 13,600 L/(mol\u00b7cm), calculate:\n(i) The molar concentration c of the drug in mol/L,\n(ii) The concentration in parts per million (ppm or mg/L), and\n(iii) The percentage transmittance (%T) of the sample.\n(c) Differentiate between Chromophore and Auxochrome with two chemical structures each.",
          solution: "Part (a) Derivation of Beer-Lambert Law:\nWhen monochromatic light of intensity I passes through an absorbing layer of thickness dx containing concentration c of absorbing species:\n- Rate of decrease of intensity: -dI / dx \u221d I * c => -dI / I = k' * c * dx\nIntegrating across full path length from x = 0 (I = I0) to x = l (I = I):\n-ln(I / I0) = k' * c * l => ln(I0 / I) = k' * c * l\nConverting to base-10 logarithm:\nlog10(I0 / I) = (k' / 2.303) * c * l = \u03b5 * c * l\nHence: A = log10(I0 / I) = -log10(T) = \u03b5 * c * l\n- Absorbance A: Dimensionless optical density.\n- Molar Absorptivity \u03b5: Characteristic constant measuring probability of electronic transition in L/(mol\u00b7cm).\n\nPart (b) Numerical Evaluation:\n1. Molar Concentration c:\nc = A / (\u03b5 * l) = 0.680 / (13,600 * 1.0) = 5.0 * 10^-5 mol/L\n\n2. Concentration in ppm (mg/L):\nConcentration (g/L) = c * Molar Mass = (5.0 * 10^-5 mol/L) * (151.16 g/mol) = 7.558 * 10^-3 g/L\nConcentration (ppm = mg/L) = 7.558 * 10^-3 * 1000 mg/L = 7.558 ppm (mg/L)\n\n3. Percentage Transmittance (%T):\nA = -log10(T) => T = 10^-A = 10^-0.680 = 0.2089\n%T = T * 100% = 20.89%\n\nPart (c) Chromophore vs Auxochrome:\n- Chromophore: An isolated covalently unsaturated functional group that absorbs light in UV-Vis region giving color (e.g., C=O carbonyl, -N=N- azo, -NO2 nitro).\n- Auxochrome: A saturated functional group with non-bonding lone pairs attached to a chromophore that cannot absorb UV by itself, but red-shifts \u03bb_max (bathochromic) and increases absorption intensity (hyperchromic) (e.g., -OH hydroxyl, -NH2 amino, -OCH3 methoxy)."
        }
      ]
    },
    {
      id: 'bchy-m5',
      moduleNum: 5,
      pdfUrl: '/pdfs/chemistry/Chemistry_MOD-5.pdf',
      title: 'Computational Chemistry: Basic to Applications',
      co: 'CO: 4',
      examScope: 'FAT Only',
      weightage: '15-20 Marks in FAT',
      status: 'not_confident',
      scope: 'Introduction to Quantum mechanical calculations and computational chemistry foundations, Molecular Orbital (MO) theory: atomic orbitals, molecular orbitals, LCAO approximation, Orbital interactions and chemical bonding, Energy level diagrams of O2, N2, CO, and HF, Potential energy curves and surfaces (PES), Minima vs transition states, Biomolecular potentials and empirical force fields (Lennard-Jones, harmonic bonds, angles, dihedrals), Geometry optimization algorithms (gradient descent, Newton-Raphson), Vibrational frequency calculations and ZPVE, Reaction mechanism elucidation, and Applications of AI / Machine Learning to high-throughput screening of semiconductor materials.',
      blueprint: {
        marksTotal: '15 to 20 Marks in FAT',
        questionTypes: [
          { type: 'Question Type A (10 Marks)', desc: 'Molecular Orbital Theory: Construct MO diagrams for O2 and N2, calculate bond order, and account for the paramagnetic nature of O2.' },
          { type: 'Question Type B (10 Marks)', desc: 'Potential Energy Surfaces & Geometry Optimization: Characterizing local minima, global minima, and transition states (Hessian matrix eigenvalue test), and explaining vibrational frequency verification.' },
          { type: 'Question Type C (10 Marks)', desc: 'AI in Materials Discovery: Crystal graph convolutional neural networks (CGCNN) and high-throughput computational screening of lead-free perovskite semiconductors.' }
        ]
      },
      formulaSheet: [
        { name: 'Time-Independent Schrödinger Eq', formula: '\\hat{H} \\psi = E \\psi, \\quad \\hat{H} = -\\frac{h^2}{8\\pi^2 m} \\nabla^2 + V', note: 'Electronic structure basis' },
        { name: 'LCAO Molecular Orbital', formula: '\\psi_{\\text{MO}} = c_1 \\phi_1 + c_2 \\phi_2, \\quad \\text{Bond Order} = \\frac{N_b - N_a}{2}', note: 'Constructive (bonding) vs destructive (antibonding)' },
        { name: 'Lennard-Jones 12-6 Potential', formula: 'V_{\\text{LJ}}(r) = 4 \\varepsilon \\left[ \\left(\\frac{\\sigma}{r}\\right)^{12} - \\left(\\frac{\\sigma}{r}\\right)^6 \\right]', note: 'Repulsion (r^-12) and dispersion (r^-6)' },
        { name: 'Transition State Criterion', formula: '\\text{Hessian } H_{ij} = \\frac{\\partial^2 E}{\\partial x_i \\partial x_j} \\implies \\text{Exactly ONE negative eigenvalue}', note: 'Corresponds to one imaginary vibrational frequency' }
      ],
      examInsights: [
        {
          title: 'Transition State vs Minimum Identification',
          desc: 'In computational chemistry FAT questions, emphasize that a stable molecular geometry (minimum) has ALL positive vibrational frequencies, whereas a transition state has EXACTLY ONE imaginary frequency (negative eigenvalue of the Hessian matrix).'
        }
      ],
      topics: [
        { id: 'bchy-t5-1', title: '1 & 2-Introduction to Quantum mechanical calculations', theory: 'Born-Oppenheimer approximation. Hartree-Fock and Density Functional Theory (DFT) fundamentals.' },
        { id: 'bchy-t5-2', title: '3-Molecular orbital theory & 4-Orbital interactions, chemical bonding', theory: 'LCAO method. Homonuclear (O2, N2) vs heteronuclear (CO, HF) MO diagrams. Bond order and magnetic properties.' },
        { id: 'bchy-t5-3', title: '5-Potential energy surface & 6-Bio-molecular potentials', theory: 'PES landscape. Lennard-Jones 12-6 non-bonded potentials. CHARMM and AMBER force fields.' },
        { id: 'bchy-t5-4', title: '7-Geometry optimization & 8/9-Frequency & Reaction mechanism', theory: 'Energy gradient minimization. Hessian matrix normal mode analysis. Transition state search.' },
        { id: 'bchy-t5-5', title: '10-Application of AI to screen semiconductors', theory: 'Machine learning for materials discovery. Crystal graph neural networks. Screening solar absorber materials.' }
      ],
      pyqs: [
        {
          id: 'bchy-q5-1',
          exam: 'BACHY101 FAT April 2025 Slot E2 — 10 Marks',
          marks: '10 Marks',
          question: 'Construct the Molecular Orbital energy level diagram of the Oxygen molecule (O2). Write its electronic configuration, determine its bond order, and explain why Molecular Orbital Theory successfully accounts for its paramagnetic behavior where Valence Bond Theory failed.',
          solution: 'Configuration of O2 (16 electrons):\nσ1s^2 σ*1s^2 σ2s^2 σ*2s^2 σ2pz^2 (π2px^2 = π2py^2) (π*2px^1 = π*2py^1)\nBond Order Calculation:\nBonding electrons (Nb) = 10 (σ1s, σ2s, σ2pz, π2px, π2py)\nAntibonding electrons (Na) = 6 (σ*1s, σ*2s, π*2px, π*2py)\nBond Order = (Nb - Na) / 2 = (10 - 6) / 2 = 2 (Stable double bond).\nParamagnetism Explanation: Valence Bond Theory predicted all electron pairs are shared, implying diamagnetism. However, MOT reveals that the two highest occupied orbitals are degenerate antibonding π*2px and π*2py orbitals, each containing one unpaired electron with parallel spins according to Hund\'s Rule. These two unpaired electrons make O2 paramagnetic, directly verified by experimental magnetic susceptibility measurements.'
        },
        {
          id: "bchy-q5-2",
          exam: "BACHY101 FAT Nov 2024 Slot E1 & SAS QB Q24 \u2014 10 Marks",
          marks: "10 Marks",
          question: "(a) Construct the Molecular Orbital (MO) energy level diagram for diatomic oxygen (O2) and heteronuclear carbon monoxide (CO).\n(b) Write their electronic configurations, compute their bond orders, and explain why O2 is paramagnetic while N2 and CO are diamagnetic.\n(c) How does Molecular Orbital Theory account for the relative bond lengths and stabilities of O2+, O2, O2-, and O2^{2-}?",
          solution: "Part (a) & (b) MO Configurations & Paramagnetism:\n1. Oxygen Molecule (O2 - 16 valence electrons including core, 12 valence electrons in 2s, 2p):\nMO electronic configuration:\n\u03c3(1s)^2 \u03c3*(1s)^2 \u03c3(2s)^2 \u03c3*(2s)^2 \u03c3(2pz)^2 [\u03c0(2px)^2 = \u03c0(2py)^2] [\u03c0*(2px)^1 = \u03c0*(2py)^1] \u03c3*(2pz)^0\nBond Order = (N_b - N_a) / 2 = (10 - 6) / 2 = 2.0 (Double Bond)\nParamagnetism: By Hund's rule, the two highest-energy electrons occupy degenerate anti-bonding \u03c0*(2px) and \u03c0*(2py) orbitals with parallel spins (two unpaired electrons), precisely explaining the experimental attraction of liquid oxygen to magnetic poles!\n\n2. Carbon Monoxide (CO - 14 electrons, isoelectronic with N2):\nBond Order = (10 - 4) / 2 = 3.0 (Triple Bond: one \u03c3 and two \u03c0 bonds). All electron spins are paired, making CO strictly diamagnetic.\n\nPart (c) Oxygen Species Comparison:\n- O2+ (remove one \u03c0* electron): Bond order = (10 - 5)/2 = 2.5 (Shortest bond, highest stability)\n- O2 (neutral): Bond order = (10 - 6)/2 = 2.0\n- O2- (superoxide, add one \u03c0* electron): Bond order = (10 - 7)/2 = 1.5\n- O2^{2-} (peroxide, fill both \u03c0* orbitals): Bond order = (10 - 8)/2 = 1.0 (Longest bond, lowest stability)\nBond order trend: O2+ (2.5) > O2 (2.0) > O2- (1.5) > O2^{2-} (1.0).\nBond length order: O2+ < O2 < O2- < O2^{2-}."
        },
        {
          id: "bchy-q5-3",
          exam: "SAS Question Bank Q30 & FAT April 2025 \u2014 10 Marks",
          marks: "10 Marks",
          question: "(a) Define Potential Energy Surface (PES) in computational quantum chemistry. Explain the mathematical criteria for: (i) Local Minima, (ii) Global Minimum, and (iii) Transition States / Saddle Points using the Hessian matrix.\n(b) Differentiate between Molecular Mechanics (Force Field methods), Hartree-Fock (HF) ab initio methods, and Density Functional Theory (DFT).\n(c) Explain how computational geometry optimization algorithms find the true ground-state molecular geometry.",
          solution: "Part (a) Mathematical Nature of PES:\nA Potential Energy Surface V(R) models electronic energy as a function of 3N-6 nuclear Cartesian coordinates.\n1. Stationary Points: First gradient vector is identically zero: \u2207V = [\u2202V/\u2202q1, \u2202V/\u2202q2, ..., \u2202V/\u2202qn] = 0.\n2. Local & Global Minima (Stable Reactants, Intermediates, Products):\nAll eigenvalues of the second-derivative Hessian matrix H_ij = \u2202^2 V / (\u2202qi \u2202qj) are strictly positive (all harmonic vibrational frequencies \u03bd_i > 0).\n3. Transition State (First-Order Saddle Point):\nThe Hessian matrix contains EXACTLY ONE negative eigenvalue (corresponding to an imaginary vibrational frequency along the reaction coordinate), while all other 3N-7 eigenvalues are strictly positive.\n\nPart (b) Comparison of Computational Methods:\n1. Molecular Mechanics (Force Fields - MM3, CHARMM, AMBER):\n- Classical Newtonian balls-and-springs approximation; no quantum electron mechanics.\n- Computationally ultra-fast (millions of atoms in protein folding); cannot simulate bond breaking or chemical reactions.\n2. Hartree-Fock (HF):\n- Ab initio wave function method solving Schr\u00f6dinger equation; models mean-field electron repulsion, neglecting dynamic electron correlation.\n3. Density Functional Theory (DFT):\n- Expresses ground-state energy as a functional of 3D electron probability density \u03c1(r) via Hohenberg-Kohn theorems.\n- Incorporates exchange-correlation energy at moderate computational cost, making it the premier gold standard for chemical kinetics and semiconductor bandgap simulation.\n\nPart (c) Geometry Optimization Algorithm:\nStarts with an approximate 3D trial geometry. Evaluates analytic energy gradients (forces on nuclei). Employs quasi-Newton optimization algorithms (e.g. Berny algorithm with BFGS Hessian updates) to displace atomic coordinates along the gradient vector downhill until maximum force drops below convergence threshold (10^-4 Hartree/Bohr)."
        }
      ]
    },
    {
      id: 'bchy-m6',
      moduleNum: 6,
      pdfUrl: '/pdfs/chemistry/Chemistry_MOD-6.pdf',
      title: 'Contemporary Topics',
      co: 'CO: 2',
      examScope: 'FAT Only',
      weightage: '5-10 Marks in FAT',
      status: 'strong',
      scope: 'Contemporary Topics in Computational Chemistry (Machine-Learned Interatomic Potentials, automated reaction pathway finding), and Contemporary Topics in Energy Devices or Functional Materials (Next-generation solid-state lithium batteries, MXene 2D materials, perovskite solar cells).',
      blueprint: {
        marksTotal: '5 to 10 Marks in FAT',
        questionTypes: [
          { type: 'Question Type A (5-10 Marks)', desc: 'Solid-State Batteries: Working principle of ceramic/sulfide solid electrolytes (LLZO, LGPS) and elimination of dendrite formation.' },
          { type: 'Question Type B (5-10 Marks)', desc: '2D MXene Nanomaterials: Etching synthesis from MAX phases and applications in supercapacitors and EMI shielding.' }
        ]
      },
      formulaSheet: [
        { name: 'MXene Etching Reaction', formula: '\\text{Ti}_3\\text{AlC}_2 + 3\\text{HF} \\rightarrow \\text{Ti}_3\\text{C}_2 T_x + \\text{AlF}_3 + \\frac{3}{2}\\text{H}_2', note: 'Tx = surface functional groups (-O, -OH, -F)' },
        { name: 'Solid-State Battery Energy Density', formula: '\\text{Specific Energy} = \\frac{V_{\\text{cell}} \\times Q_{\\text{theoretical}}}{m_{\\text{cell}}} > 500\\text{ Wh/kg}', note: 'Pure lithium metal anode enabled' }
      ],
      examInsights: [
        {
          title: 'Contemporary Topic Short Notes Strategy',
          desc: 'VIT examiners award full marks for structured bullet points with chemical equations and practical industrial relevance rather than generic prose.'
        }
      ],
      topics: [
        { id: 'bchy-t6-1', title: 'Contemporary Topics on Computational Chemistry', theory: 'Machine-Learned Interatomic Potentials (MACE, NequIP). Scaling DFT accuracy to millions of atoms.' },
        { id: 'bchy-t6-2', title: 'Contemporary Topics on Energy Devices & Functional Materials', theory: 'Solid-state lithium metal batteries. Ceramic electrolytes. 2D titanium carbide MXenes for energy storage.' }
      ],
      pyqs: [
        {
          id: 'bchy-q6-1',
          exam: 'BACHY101 FAT April 2025 Slot E2 — 5 Marks',
          marks: '5 Marks',
          question: 'Write short notes on: (a) Solid-State Lithium Batteries, and (b) MXenes as 2D functional materials.',
          solution: '(a) Solid-State Lithium Batteries: Replace flammable liquid organic electrolytes with non-flammable inorganic solid ionic conductors (e.g., Garnet Li7La3Zr2O12 or Sulfide Li10GeP2S12). Enables use of pure metallic lithium anodes without dendrite short circuits, increasing specific energy beyond 500 Wh/kg and eliminating fire risks in EVs.\n(b) MXenes: 2D transition metal carbides/nitrides synthesized by selectively etching aluminum layers from MAX phase precursors (e.g., Ti3AlC2 + HF -> Ti3C2Tx). Exhibit metallic electronic conductivity coupled with hydrophilic surface terminations (-OH, -O, -F), making them premier candidates for ultra-fast charging supercapacitors and electromagnetic interference (EMI) shielding.'
        },
        {
          id: "bchy-q6-2",
          exam: "SAS Question Bank Q34 \u2014 Contemporary AI in Materials Discovery \u2014 10 Marks",
          marks: "10 Marks",
          question: "CASE STUDY: Accelerating Discovery of Solid-State Electrolytes using Artificial Intelligence.\n(a) Explain how Machine Learning (ML) and Graph Neural Networks (GNNs) are utilized in computational materials chemistry to screen candidate solid-state battery electrolytes.\n(b) Differentiate between Density Functional Theory (DFT) calculations and Machine Learning Interatomic Potentials (MLIP) with respect to accuracy and computational speed.\n(c) What are the essential descriptors used by AI models to predict lithium-ion ionic conductivity (\u03c3_Li) in crystal lattices?",
          solution: "Part (a) AI-Driven High-Throughput Screening Workflow:\nTraditional discovery relies on slow synthesis and trial-and-error testing. The modern computational workflow:\n1. Crystal Graph Representation: Atoms in the crystal unit cell are represented as graph nodes (with atomic number, electronegativity, ionic radius features); chemical bonds are edges.\n2. Deep Learning Screening: Graph Neural Networks (e.g., MEGNet, CGCNN, M3GNet) predict formation energy, phase stability, and bandgaps in milliseconds across databases of 100,000+ uncharacterized crystal structures.\n3. Down-selection: Candidates passing stability criteria are forwarded to automated robotic synthesis pipelines.\n\nPart (b) DFT vs Machine Learning Interatomic Potentials (MLIP):\n1. Density Functional Theory (DFT):\n- Computes quantum electron wavefunction from first principles.\n- Highly accurate, but computational time scales cubically O(N^3) with electron count; limited to systems of ~500 atoms over picosecond timescales.\n2. Machine Learning Potentials (MLIP - e.g. DeepMD, MACE, NequIP):\n- Trained on large databases of high-level DFT calculations to learn the mapping from atomic coordinates directly to energy and forces.\n- Achieves near-DFT quantum accuracy while running 100,000x faster, enabling nanosecond molecular dynamics simulations of Li+ ion diffusion over millions of atoms!\n\nPart (c) Descriptors for High Ionic Conductivity (\u03c3_Li):\n1. Bottleneck Size & Free Volume: Open channel cross-sectional area through which Li+ cations hop between interstitial coordination sites.\n2. Lattice Polarizability: Highly polarizable polar anion frameworks (e.g. S^{2-}, I^-, Br^- in sulfide solid electrolytes like Li10GeP2S12) lower the electrostatic activation barrier for cation migration.\n3. Coordination Polyhedron Distortion: Low activation energy barrier (E_a < 0.3 eV) along the percolation migration path."
        }
      ]
    }
  ]
};
