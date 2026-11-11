export const chemistryCourse = {
  "id": "BACHY101",
  "code": "BACHY105 / IACHY102",
  "title": "Applied Chemistry",
  "shortTitle": "Applied Chemistry",
  "category": "University Core",
  "credits": 4,
  "semester": "Fall Semester 2026-27",
  "color": "red",
  "badge": "Official Argon Textbooks (Modules 1-5)",
  "description": "Complete Argon Publication-Grade Textbooks, Derivations, Visual Summaries, Worked Numericals & VIT Official Question Bank Blueprints aligned 100% with VIT Course Syllabus.",
  "targetMarks": {
    "cat1": "50 Marks (Modules 1 & 2)",
    "cat2": "50 Marks (Modules 3 & 4)",
    "fat": "100 Marks (All 5 Modules: 1-5)"
  },
  "modules": [
    {
      "id": "bchy-m1",
      "moduleNum": 1,
      summary: "Laws of thermodynamics, Mayer's relation, Carnot cycle efficiency, and chemical reaction kinetics.",
      "pdfUrl": "/pdfs/chemistry/Chemistry_MOD-1.pdf",
      "title": "Chemical Thermodynamics & Kinetics",
      "co": "CO: 1",
      "examScope": "CAT-1 & FAT",
      "weightage": "15-20 Marks in FAT",
      "status": "not_confident",
      "scope": "Zeroth, First, Second & Third Laws of Thermodynamics, Mayer's Relation, Carnot Cycle & Efficiency, Gibbs Free Energy & Spontaneity, Chemical Kinetics: Rate Laws, Half-Life & Arrhenius Activation Energy.",
      "blueprint": {
        "marksTotal": "15 to 20 Marks in FAT",
        "questionTypes": [
          {
            "type": "4-Stroke Carnot Cycle & Efficiency (10 Marks)",
            "desc": "Derivation of η = 1 - Tc/Th across strokes AB, BC, CD, DA; net cyclic work area, and refrigerator COP_ref = Tc/(Th - Tc)."
          },
          {
            "type": "Mayer's Relation Proof (Cp - Cv = R) (5 Marks)",
            "desc": "3-line thermodynamic proof starting from H = U + PV for 1 mole ideal gas, differentiating w.r.t. T at constant P."
          },
          {
            "type": "Integrated Rate Laws & Kinetics Numericals (10 Marks)",
            "desc": "Linear integrated rate equations for 0th, 1st, and 2nd order reactions; half-life determination, and Arrhenius activation energy calculation."
          },
          {
            "type": "Gibbs Free Energy & Spontaneity Regime (5-10 Marks)",
            "desc": "Evaluating ΔG = ΔH - TΔS, calculation of crossover equilibrium temperature Teq = ΔH/ΔS for ice, Haber process, or CaCO3 decomposition."
          }
        ]
      },
      "formulaSheet": [
        {
          "name": "Universal Gas Constant & Conversions",
          "formula": "R = 8.314 \\text{ J K}^{-1}\\text{mol}^{-1} = 0.08206 \\text{ L}\\cdot\\text{atm K}^{-1}\\text{mol}^{-1}, \\quad 1\\text{ L}\\cdot\\text{atm} = 101.325\\text{ J}",
          "note": "1 cal = 4.184 J; 1 L·bar = 100 J"
        },
        {
          "name": "First Law of Thermodynamics",
          "formula": "\\Delta U = q + w, \\quad w = -\\int P_{\\text{ex}} dV, \\quad w_{\\text{vacuum}} = 0",
          "note": "Expansion: w < 0; Compression: w > 0"
        },
        {
          "name": "Mayer's Relation Proof",
          "formula": "C_p - C_v = R, \\quad C_v = \\left(\\frac{\\partial U}{\\partial T}\\right)_V, \\quad C_p = \\left(\\frac{\\partial H}{\\partial T}\\right)_P",
          "note": "Monoatomic: γ = 5/3; Diatomic: γ = 7/5"
        },
        {
          "name": "Reversible Adiabatic Expansion",
          "formula": "T_i V_i^{\\gamma-1} = T_f V_f^{\\gamma-1}, \\quad P_i V_i^\\gamma = P_f V_f^\\gamma, \\quad w = \\Delta U = n C_v(T_f - T_i) = \\frac{P_f V_f - P_i V_i}{\\gamma - 1}",
          "note": "dq = 0; adiabatic expansion causes cooling"
        },
        {
          "name": "Carnot Engine Efficiency",
          "formula": "\\eta = \\frac{|w_{\\text{net}}|}{q_h} = 1 - \\frac{T_c}{T_h}, \\quad \\text{COP}_{\\text{ref}} = \\frac{T_c}{T_h - T_c}",
          "note": "Temperatures must be in Kelvin"
        },
        {
          "name": "Gibbs Free Energy & Equilibrium",
          "formula": "\\Delta G = \\Delta H - T\\Delta S = -T\\Delta S_{\\text{universe}}, \\quad \\Delta G^\\circ = -2.303 R T \\log_{10} K_{\\text{eq}}",
          "note": "Crossover Temperature: Teq = ΔH / ΔS"
        },
        {
          "name": "First-Order Integrated Rate Law",
          "formula": "k = \\frac{2.303}{t}\\log_{10}\\left(\\frac{[A]_0}{[A]_t}\\right), \\quad t_{1/2} = \\frac{0.693}{k}",
          "note": "Half-life independent of initial [A]0"
        },
        {
          "name": "Arrhenius Two-Temperature Equation",
          "formula": "\\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{R}\\left(\\frac{T_2 - T_1}{T_1 T_2}\\right)",
          "note": "R = 8.314 J/(mol·K)"
        }
      ],
      "examInsights": [
        {
          "title": "Unit Conversion Trap in P-V Work",
          "desc": "When calculating work w = -Pex ΔV where P is in atm and V is in L, you MUST multiply by 101.325 J/(L·atm) before combining with heat q in Joules! Omitting this factor causes immediate deduction of 4-5 marks."
        },
        {
          "title": "Order vs. Molecularity Distinction (Frequent 3M Question)",
          "desc": "Order is the sum of experimental concentration exponents (can be 0, fractional, negative, or integer; applies to overall reactions). Molecularity is the number of colliding species in an elementary step (strictly integer 1, 2, or 3; never 0 or fractional)."
        },
        {
          "title": "Adiabatic Fire Extinguisher Cooling",
          "desc": "Why CO2 fire extinguishers frost over: Rapid adiabatic expansion (q = 0) forces the gas to do work at the expense of its own internal energy (ΔU = w < 0 => ΔT < 0), causing rapid freezing into dry ice."
        }
      ],
      "topics": [
        "Thermodynamic Systems & First Law (ΔU = q + w)",
        "Enthalpy & Mayer's Relation Proof (Cp - Cv = R)",
        "Reversible & Irreversible Adiabatic Expansions (PV^γ = C)",
        "4-Stroke Carnot Cycle & Engine Efficiency (η = 1 - Tc/Th)",
        "Gibbs-Helmholtz Equation & 4-Quadrant Spontaneity Table",
        "Integrated Rate Laws (0th, 1st & 2nd Order) & Half-Life",
        "Collision Theory, Catalysts & Arrhenius Equation (k = A e^(-Ea/RT))"
      ],
      "pyqs": [
        {
          "id": "bchy-q1-1",
          "exam": "Argon Master PYQ 1 — Steam Vaporization Work & ΔU — 5 Marks",
          "marks": "5 Marks",
          "question": "Calculate w and ΔU when 1 mol of liquid water at 100 °C (373 K) vaporizes into steam at 1 atm (ΔHvap = 40,670 J/mol).",
          "solution": "Step 1: Work of Vaporization:\nSince V_steam >> V_liquid, ΔV ≈ V_steam = nRT / P.\nw = -P ΔV ≈ -nRT = -(1 mol)(8.314 J/(mol·K))(373 K) = -3,101.1 J.\n\nStep 2: Change in Internal Energy (ΔU):\nAt constant pressure, q_P = ΔH_vap = +40,670 J.\nBy the First Law of Thermodynamics: ΔU = q + w = 40,670 J + (-3,101.1 J) = +37,568.9 J (+37.57 kJ/mol).\nBoxed Answer: w = -3,101.1 J (-3.10 kJ), ΔU = +37,568.9 J (+37.57 kJ/mol)."
        },
        {
          "id": "bchy-q1-2",
          "exam": "Argon Master PYQ 2 — CAT-1 Cyclic V–T Triangle (Slides 14–16 Q4 & Q7) — 10 Marks",
          "marks": "10 Marks",
          "question": "1 mol of a monoatomic ideal gas (Cv = 1.5R, Cp = 2.5R) traverses a cyclic path: A(200 K, 10 L) -> B(400 K, 20 L, V ∝ T) -> C(400 K, 10 L) -> A(200 K, 10 L). Find q, w, ΔU, ΔH, and ΔS for each individual step and the complete cycle.",
          "solution": "Step 1: Process A -> B (Isobaric expansion, since V/T = constant):\n- w_AB = -nR(T_B - T_A) = -(1)(8.314)(400 - 200) = -1,662.8 J\n- ΔU_AB = n Cv ΔT = (1)(1.5 × 8.314)(200) = +2,494.2 J\n- q_AB = ΔH_AB = n Cp ΔT = (1)(2.5 × 8.314)(200) = +4,157.0 J\n- ΔS_AB = n Cp ln(T_B / T_A) = (2.5 × 8.314) ln(400 / 200) = +14.41 J/K\n\nStep 2: Process B -> C (Isothermal compression at 400 K, 20 L -> 10 L):\n- ΔU_BC = 0, ΔH_BC = 0\n- w_BC = -n R T_B ln(V_C / V_B) = -(1)(8.314)(400) ln(10 / 20) = +2,305.1 J\n- q_BC = -w_BC = -2,305.1 J\n- ΔS_BC = n R ln(V_C / V_B) = 8.314 ln(0.5) = -5.76 J/K\n\nStep 3: Process C -> A (Isochoric cooling at V = 10 L, 400 K -> 200 K):\n- w_CA = 0 (since dV = 0)\n- q_CA = ΔU_CA = n Cv (T_A - T_C) = (1)(1.5 × 8.314)(-200) = -2,494.2 J\n- ΔH_CA = n Cp ΔT = (1)(2.5 × 8.314)(-200) = -4,157.0 J\n- ΔS_CA = n Cv ln(T_A / T_C) = (1.5 × 8.314) ln(200 / 400) = -8.65 J/K\n\nStep 4: Complete Cycle Totals:\n- ΔU_cycle = ΔU_AB + ΔU_BC + ΔU_CA = 2494.2 + 0 - 2494.2 = 0 J (State function)\n- ΔH_cycle = 0 J, ΔS_cycle = 14.41 - 5.76 - 8.65 = 0 J/K\n- Net Work: w_cycle = w_AB + w_BC + w_CA = -1662.8 + 2305.1 + 0 = +642.3 J\n- Net Heat: q_cycle = q_AB + q_BC + q_CA = 4157.0 - 2305.1 - 2494.2 = -642.3 J (Note: q_cycle = -w_cycle verifies First Law!)."
        },
        {
          "id": "bchy-q1-3",
          "exam": "Argon Master PYQ 3 — Isothermal Expansion & Irreversible Work Suite — 10 Marks",
          "marks": "10 Marks",
          "question": "(a) 1 mol ideal gas at STP (273.15 K, 22.4 L) absorbs 1000 cal in a reversible isothermal expansion. Find the final volume Vf.\n(b) 10 mol gas expands isothermally against Pex = 1 atm from 15 L to 35 L. Calculate w.\n(c) A gas expands against 1 atm from 30 L to 60 L while absorbing q = +700 J. Find ΔU.\n(d) 1 mol N2 at 300 K expands against Pex = 5 atm from 1 L to 3 L. Find ΔU, ΔH, w, and q.",
          "solution": "Part (a) Reversible Isothermal Volume:\nq_rev = n R T ln(V_f / V_i)\nln(V_f / 22.4) = q_rev / (n R T) = (1000 cal) / (1 mol × 1.987 cal/(mol·K) × 273.15 K) = 1000 / 542.75 = 1.8425\nV_f = 22.4 × e^(1.8425) = 22.4 × 6.312 = 141.4 L.\n\nPart (b) Irreversible Work against Constant External Pressure:\nw = -P_ex ΔV = -(1 atm)(35 - 15 L) = -20 L·atm\nConverting to Joules: w = -20 × 101.325 J = -2,026.5 J.\n\nPart (c) Internal Energy Change:\nw = -P_ex ΔV = -(1 atm)(60 - 30 L) = -30 L·atm = -30 × 101.325 J = -3,039.8 J.\nΔU = q + w = +700 J + (-3,039.8 J) = -2,339.8 J.\n\nPart (d) Isothermal Expansion of Ideal Gas:\nFor an ideal gas undergoing an isothermal process, internal energy and enthalpy depend solely on temperature:\nΔU = 0, ΔH = 0.\nw = -P_ex ΔV = -(5 atm)(3 - 1 L) = -10 L·atm = -10 × 101.325 J = -1,013.25 J.\nBy 1st Law: q = ΔU - w = 0 - (-1,013.25 J) = +1,013.25 J."
        },
        {
          "id": "bchy-q1-4",
          "exam": "Argon Master PYQ 4 — Spontaneity & Crossover Temperatures — 10 Marks",
          "marks": "10 Marks",
          "question": "(a) Evaluate the spontaneity of ice melting at -10 °C (263 K) given ΔH = +6.01 kJ/mol and ΔS = +0.022 kJ/(K·mol).\n(b) For 2CO + O2 -> 2CO2 at 298.15 K, ΔH = -128.3 kJ and ΔS = -159.5 J/K. Determine ΔG and the crossover temperature.\n(c) For CaCO3 -> CaO + CO2, ΔH° = +178.3 kJ/mol and ΔS° = +160.5 J/(K·mol). Calculate the temperature above which decomposition becomes spontaneous.",
          "solution": "Part (a) Ice Melting at -10 °C:\nΔG = ΔH - T ΔS = 6.01 kJ - (263 K)(0.022 kJ/K) = 6.01 - 5.786 = +0.224 kJ/mol.\nSince ΔG > 0, melting is non-spontaneous at -10 °C (freezing is spontaneous!).\n\nPart (b) Oxidation of CO:\nΔG = ΔH - T ΔS = -128,300 J - (298.15 K)(-159.5 J/K) = -128,300 + 47,555 = -80,745 J = -80.75 kJ.\nSince ΔG < 0, the reaction is spontaneous at 298.15 K.\nCrossover temperature Teq = ΔH / ΔS = -128,300 / (-159.5) = 804.4 K (531.2 °C). Spontaneous below 804.4 K.\n\nPart (c) Calcination of Limestone:\nFor spontaneity, ΔG < 0 => ΔH° - T ΔS° < 0 => T > ΔH° / ΔS°.\nT_eq = (178,300 J/mol) / (160.5 J/(mol·K)) = 1,110.9 K (837.8 °C).\nConclusion: Thermal decomposition of CaCO3 becomes spontaneous only at temperatures exceeding 837.8 °C."
        },
        {
          "id": "bchy-q1-5",
          "exam": "Argon Master PYQ 5 — Kinetics & Arrhenius Master Suite — 10 Marks",
          "marks": "10 Marks",
          "question": "(a) In the 1st-order decay of C4H9Cl, concentration drops from 0.100 M to 0.050 M in 340 s. Find rate constant k.\n(b) A bimolecular reaction follows Rate = k[A][B]. If k = 5.7×10^-2 M^-1 s^-1, find Rate when [A] = 5.0×10^-3 M and [B] = 2.0×10^-2 M.\n(c) Calculate the Arrhenius rate constant k at 300 K given Ea = 30 kJ/mol and A = 5.0×10^10 M^-1 s^-1.\n(d) The rate of a reaction quadruples (k2/k1 = 4) when temperature increases from 300 K to 320 K. Calculate activation energy Ea.",
          "solution": "Part (a) First-Order Decay Rate Constant:\nThe drop from 0.100 M to 0.050 M is exactly one half-life (t1/2 = 340 s).\nk = 0.69315 / t1/2 = 0.69315 / 340 s = 2.039 × 10^-3 s^-1.\n\nPart (b) Bimolecular Rate:\nRate = k [A] [B] = (5.7 × 10^-2 M^-1 s^-1)(5.0 × 10^-3 M)(2.0 × 10^-2 M) = 5.70 × 10^-6 M/s.\n\nPart (c) Arrhenius Rate Constant at 300 K:\nk = A exp(-Ea / RT)\nExponent: -Ea / (RT) = -30,000 J / (8.314 J/(mol·K) × 300 K) = -30,000 / 2,494.2 = -12.0279\nk = (5.0 × 10^10) × exp(-12.0279) = (5.0 × 10^10) × (5.975 × 10^-6) = 2.988 × 10^5 M^-1 s^-1.\n\nPart (d) Activation Energy from Rate Ratio:\nln(k2 / k1) = (Ea / R) × [(T2 - T1) / (T1 T2)]\nln(4) = 1.3863 = (Ea / 8.314) × [(320 - 300) / (300 × 320)] = (Ea / 8.314) × [20 / 96,000] = Ea × (2.506 × 10^-5)\nEa = 1.3863 / (2.506 × 10^-5) = 55,319 J/mol = 55.32 kJ/mol.\nBoxed Answer: (a) k = 2.04×10^-3 s^-1, (b) Rate = 5.70×10^-6 M/s, (c) k = 2.99×10^5 M^-1 s^-1, (d) Ea = 55.32 kJ/mol."
        }
      ],
      "summary": "Energy transformations, heat capacities, Carnot cyclic engine efficiency, Gibbs-Helmholtz spontaneity criteria, and reaction rate laws with Arrhenius temperature dependence.",
      "theoryNotes": "1. Open System — A thermodynamic system that freely exchanges both matter and energy with its surroundings across a permeable boundary (e.g. an open beaker of boiling water).\n\n2. Closed System — A thermodynamic system that exchanges energy (heat and work) but cannot exchange matter with its surroundings (e.g. gas enclosed in a cylinder with a movable piston).\n\n3. Isolated System — A thermodynamic system enclosed by rigid adiabatic walls that exchanges neither matter nor energy with its surroundings (e.g. hot tea inside an ideal vacuum dewar flask).\n\n4. Intensive Properties — Physical and chemical properties whose values do not depend on the quantity or mass of matter present in the system (e.g. Temperature T, Pressure P, Density ρ, Refractive index, Boiling point, Molar heat capacity).\n\n5. Extensive Properties — Physical properties whose values scale directly in proportion to the total quantity or mass of the system (e.g. Total Volume V, Mass m, Internal energy U, Enthalpy H, Entropy S, Heat capacity C).\n\n6. State Functions — Thermodynamic equilibrium properties whose values depend exclusively on the present state of the system, irrespective of the historical path or mechanism taken to reach that state (e.g. P, V, T, U, H, S, G).\n\n7. Path Functions — Thermodynamic quantities whose values depend directly on the specific transformation pathway followed during the thermodynamic transition (e.g. Heat absorbed q, Work done w).\n\n8. Zeroth Law of Thermodynamics — If system A is in thermal equilibrium with system B, and system B is simultaneously in thermal equilibrium with system C, then system A and system C are in mutual thermal equilibrium. This establishes the absolute physical basis for thermometry and temperature scales.\n\n9. First Law of Thermodynamics — The fundamental law of conservation of energy: Energy cannot be created or destroyed, only transformed between equivalent forms:\nΔU = q + w\nWhere ΔU is change in internal energy, q is heat absorbed by the system, and w is work performed on the system (w = -P_ex ΔV). For free expansion into a vacuum (P_ex = 0), work done is strictly zero (w_vacuum = 0).\n\n10. Enthalpy & Mayer's Relation — Enthalpy is defined as total thermal heat content H = U + PV. Under constant pressure conditions q_P = ΔH; under constant volume conditions q_V = ΔU. For one mole of an ideal gas (PV = RT), differentiating H = U + RT with respect to temperature at constant pressure yields Mayer's proof:\nCp - Cv = R\n\n11. Reversible Adiabatic Expansion — A rapid or thermally insulated thermodynamic process with zero heat exchange with the surroundings (dq = 0). The system performs boundary work strictly by depleting its own internal energy (ΔU = w < 0), causing its temperature to drop:\nPV^γ = constant, and TV^(γ-1) = constant\nSudden discharge from a high-pressure CO2 fire extinguisher causes rapid adiabatic expansion and cooling, precipitating into solid dry ice snow.\n\n12. Second Law of Thermodynamics — Natural spontaneous processes occur with an increase in total entropy of the universe. Clausius statement: Heat cannot spontaneously flow from a colder reservoir to a hotter reservoir without external work. Kelvin-Planck statement: No cyclic heat engine can absorb heat from a single thermal reservoir and convert it completely into equivalent mechanical work.\n\n13. Carnot Cycle & Maximum Engine Efficiency — An idealized four-stroke reversible cyclic heat engine operating between hot reservoir T_h and cold sink T_c (Isothermal expansion -> Adiabatic expansion -> Isothermal compression -> Adiabatic compression). The maximum theoretical thermal efficiency is:\nη = 1 - (T_c / T_h) = (T_h - T_c) / T_h\n\n14. Third Law of Thermodynamics — The entropy of a pure, perfectly ordered crystalline substance approaches absolute zero as temperature approaches 0 Kelvin:\nlim_{T -> 0} S = 0\nThis provides an absolute reference datum for evaluating standard molar entropies S°.\n\n15. Gibbs Free Energy & Reaction Spontaneity — Thermodynamic potential defined as G = H - TS. Governed at constant temperature and pressure by the Gibbs-Helmholtz relation:\nΔG = ΔH - TΔS\n- ΔG < 0: Process is spontaneous (thermodynamically favored).\n- ΔG = 0: Dynamic equilibrium state; crossover temperature T_eq = ΔH / ΔS.\n- ΔG > 0: Process is non-spontaneous (requires external driving force).\n\n16. Rate of Chemical Reaction — The instantaneous rate of consumption of reactants or formation of products per unit time: Rate = -d[A]/dt = k[A]^n, where k is the specific rate constant and n is reaction order.\n\n17. Zero-Order Kinetics — The rate of reaction is entirely independent of reactant concentration (Rate = k). Integrated rate law: [A]_t = [A]_0 - kt. The half-life is directly proportional to initial concentration: t_1/2 = [A]_0 / 2k.\n\n18. First-Order Kinetics — The reaction rate is directly proportional to the first power of reactant concentration. Integrated rate law: ln([A]_0 / [A]_t) = kt or k = (2.303/t) log10([A]_0 / [A]_t). The half-life is strictly constant and independent of initial concentration: t_1/2 = 0.693 / k.\n\n19. Second-Order Kinetics — The reaction rate depends on the square of one reactant concentration or the product of two concentrations. Integrated rate law: 1/[A]_t = 1/[A]_0 + kt. The half-life is inversely proportional to initial concentration: t_1/2 = 1 / (k [A]_0).\n\n20. Arrhenius Equation & Activation Energy — Governs the exponential dependence of reaction rate constant k on absolute temperature T:\nk = A exp(-E_a / RT)\nWhere A is the pre-exponential frequency factor, R is the universal gas constant (8.314 J/mol·K), and E_a is the activation energy barrier. Comparing rates at two temperatures:\nln(k2 / k1) = (E_a / R) × [(T2 - T1) / (T1 × T2)]."
    },
    {
      "id": "bchy-m2",
      "moduleNum": 2,
      summary: "Electrochemical cells, Nernst equation, industrial electrolysis, lithium-ion batteries, fuel cells, and DSSCs.",
      "pdfUrl": "/pdfs/chemistry/Chemistry_MOD-2.pdf",
      "title": "Energy Devices & Semiconductor Electrodes",
      "co": "CO: 2",
      "examScope": "CAT-1 & FAT",
      "weightage": "15-20 Marks in FAT",
      "status": "need_to_revise",
      "scope": "Galvanic & Electrolytic Cells, Salt Bridge, Nernst Equation, Industrial Electrolysis (Downs Cell & Water Splitting), Semiconductors, Lithium-Ion Batteries, Fuel Cells & Solar Conversion.",
      "blueprint": {
        "marksTotal": "15 to 20 Marks in FAT",
        "questionTypes": [
          {
            "type": "Lithium-Ion Battery Chemistry & Safety (10 Marks)",
            "desc": "Intercalation mechanism, charging/discharging half-reactions, role of non-aqueous electrolyte (LiPF6 in EC/DMC) and SEI layer, and 3 causes of thermal runaway."
          },
          {
            "type": "Nernst Equation Derivation & Numericals (10 Marks)",
            "desc": "Van 't Hoff isotherm derivation of Ecell = E° - (0.05916/n) log Q; asymmetric stoichiometry (e.g. Zn/Ag where [Ag+] is squared), unknown concentration calculation."
          },
          {
            "type": "Fuel Cells: PEMFC vs SOFC (10 Marks)",
            "desc": "Electrolyte comparison (hydrated Nafion polymer vs solid YSZ ceramic), mobile ionic carrier (H+ vs O2-), operating temperature (<80 °C vs 800-1000 °C), and dual-fuel tolerance."
          },
          {
            "type": "Solar Conversion: PV vs PEC vs DSSC (10 Marks)",
            "desc": "Operating principle, charge separation mechanism, light absorber, and Grätzel DSSC 4-step electron injection and iodide/triiodide regenerative cycle."
          }
        ]
      },
      "formulaSheet": [
        {
          "name": "Standard Cell Potential & Free Energy",
          "formula": "E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}, \\quad \\Delta G^\\circ = -n F E^\\circ_{\\text{cell}} = -2.303 R T \\log_{10} K_{\\text{eq}}",
          "note": "F = 96,485 C/mol"
        },
        {
          "name": "Nernst Equation at 298.15 K",
          "formula": "E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.05916}{n}\\log_{10} Q, \\quad E = E^\\circ + \\frac{0.05916}{n}\\log_{10}[M^{n+}]",
          "note": "Q = [Products]^c / [Reactants]^a"
        },
        {
          "name": "Solar Cell Fill Factor & Efficiency",
          "formula": "\\text{FF} = \\frac{V_{\\text{mp}} I_{\\text{mp}}}{V_{\\text{oc}} I_{\\text{sc}}}, \\quad \\eta = \\frac{V_{\\text{oc}} I_{\\text{sc}} \\text{FF}}{P_{\\text{in}}} \\times 100\\%",
          "note": "Cutoff wavelength λmax = 1240 / Eg(eV)"
        },
        {
          "name": "Li-Ion Battery Rocking-Chair Reaction",
          "formula": "\\text{Li}_x\\text{C}_6 + \\text{Li}_{1-x}\\text{CoO}_2 \\underset{\\text{Charge}}{\\overset{\\text{Discharge}}{\\rightleftharpoons}} \\text{LiCoO}_2 + 6\\text{C}",
          "note": "Nominal EMF ≈ 3.7 V"
        },
        {
          "name": "PEMFC Fuel Cell Overall Reaction",
          "formula": "2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}, \\quad E^\\circ = 1.229\\text{ V}",
          "note": "Acidic Nafion membrane conducts H+"
        },
        {
          "name": "SOFC Syngas Oxidation Reactions",
          "formula": "\\text{H}_2 + \\text{O}^{2-} \\rightarrow \\text{H}_2\\text{O} + 2e^-, \\quad \\text{CO} + \\text{O}^{2-} \\rightarrow \\text{CO}_2 + 2e^-",
          "note": "YSZ ceramic conducts O2- vacancies at 1000 °C"
        }
      ],
      "examInsights": [
        {
          "title": "Asymmetric Stoichiometry in Nernst Calculations",
          "desc": "In cells like Zn | Zn2+ || Ag+ | Ag, the cathode reaction is 2Ag+ + 2e- -> 2Ag. Therefore, in the reaction quotient Q = [Zn2+] / [Ag+]^2, [Ag+] MUST be squared! Missing the exponent is the #1 student blunder."
        },
        {
          "title": "Why Water Cannot Be Used in Li-Ion Batteries",
          "desc": "Lithium metal and lithiated graphite react violently with water to liberate explosive H2 gas. Furthermore, the 3.7 V operating cell potential vastly exceeds the narrow 1.23 V thermodynamic stability window of water."
        },
        {
          "title": "Grätzel DSSC Dye Regeneration by Iodide",
          "desc": "In DSSC, the oxidized sensitizer dye S+ must be regenerated by iodide: 2S+ + 3I- -> 2S + I3-. The triiodide is then reduced back to iodide at the Pt counter-electrode: I3- + 2e-(Pt) -> 3I-."
        }
      ],
      "topics": [
        "Electrochemical vs. Electrolytic Cells & Salt Bridge Functions",
        "Nernst Equation Thermodynamic Derivation & EMF Numericals",
        "Industrial Electrolysis: Downs Cell & Water Splitting",
        "Semiconductor Electrodes & 3-Stage Silicon Crystal Growth",
        "Lithium-Ion Batteries: Intercalation Chemistry, SEI Layer & Safety",
        "Fuel Cells: Low-Temp PEMFC vs. High-Temp SOFC",
        "Solar Conversion: Silicon p-n Photovoltaics & Grätzel DSSC"
      ],
      "pyqs": [
        {
          "id": "bchy-q2-1",
          "exam": "Argon Solved Numerical 2.1 — Nernst EMF & ΔG for Fe | Fe2+ || Cu2+ | Cu — 5 Marks",
          "marks": "5 Marks",
          "question": "Calculate the EMF and free energy change (ΔG) at 25 °C for the cell: Fe(s) | Fe2+(0.1 M) || Cu2+(0.01 M) | Cu(s). Given: E°(Fe2+/Fe) = -0.44 V and E°(Cu2+/Cu) = +0.34 V.",
          "solution": "Step 1: Standard Cell Potential (E°cell):\nAnode (Oxidation): Fe -> Fe2+ + 2e- (E° = -0.44 V)\nCathode (Reduction): Cu2+ + 2e- -> Cu (E° = +0.34 V)\nE°cell = E°cathode - E°anode = +0.34 V - (-0.44 V) = +0.78 V (n = 2 electrons).\n\nStep 2: Nernst Equation Evaluation:\nReaction Quotient: Q = [Fe2+] / [Cu2+] = 0.1 / 0.01 = 10.\nEcell = E°cell - (0.05916 / n) log10 Q\nEcell = 0.78 - (0.05916 / 2) log10(10) = 0.78 - 0.02958(1) = +0.7504 V.\n\nStep 3: Free Energy Change (ΔG):\nΔG = -n F Ecell = -2 × 96,485 C/mol × 0.7504 V = -144,804 J/mol = -144.80 kJ/mol.\nBoxed Answer: E°cell = +0.78 V, Ecell = +0.7504 V, ΔG = -144.80 kJ/mol (Spontaneous)."
        },
        {
          "id": "bchy-q2-2",
          "exam": "Argon Solved Numerical 2.2 — Asymmetric Stoichiometry (n = 2): Zn | Ag+ Cell — 5 Marks",
          "marks": "5 Marks",
          "question": "Calculate E°cell, Ecell at 298 K, and equilibrium constant Keq for Zn(s) | Zn2+(0.2 M) || Ag+(0.002 M) | Ag(s) given E°(Zn2+/Zn) = -0.76 V and E°(Ag+/Ag) = +0.80 V.",
          "solution": "Step 1: Balanced Cell Reaction & Standard EMF:\nZn(s) + 2Ag+(aq) -> Zn2+(aq) + 2Ag(s) (n = 2 electrons).\nE°cell = E°cathode - E°anode = +0.80 - (-0.76) = +1.56 V.\n\nStep 2: Reaction Quotient (CRITICAL: [Ag+] is SQUARED!):\nQ = [Zn2+] / [Ag+]^2 = 0.2 / (0.002)^2 = 0.2 / (4 × 10^-6) = 5 × 10^4.\nlog10 Q = log10(50,000) = 4.6990.\n\nStep 3: Nernst Equation:\nEcell = E°cell - (0.05916 / 2) × log10 Q = 1.56 - 0.02958 × 4.6990 = 1.56 - 0.1390 = +1.421 V.\n\nStep 4: Equilibrium Constant Keq:\nlog10 Keq = (n E°cell) / 0.05916 = (2 × 1.56) / 0.05916 = 52.738 => Keq = 10^(52.738) = 5.5 × 10^52.\nBoxed Answer: E°cell = +1.56 V, Ecell = +1.421 V, Keq = 5.5 × 10^52."
        },
        {
          "id": "bchy-q2-3",
          "exam": "Argon Solved Numerical 2.3 — Unknown Concentration & Concentration Cell — 5 Marks",
          "marks": "5 Marks",
          "question": "(a) A Daniell cell Zn | ZnSO4(x M) || CuSO4(0.02 M) | Cu registers Ecell = 1.07 V at 298 K (E°cell = 1.10 V). Find x.\n(b) Find the EMF of the copper concentration cell Cu | Cu2+(0.001 M) || Cu2+(0.1 M) | Cu at 298 K.",
          "solution": "Part (a) Finding Unknown [Zn2+] = x:\nEcell = E°cell - (0.05916 / 2) log10(x / 0.02)\n1.07 = 1.10 - 0.02958 log10(x / 0.02)\n0.02958 log10(x / 0.02) = 1.10 - 1.07 = 0.03\nlog10(x / 0.02) = 0.03 / 0.02958 = 1.0142\nx / 0.02 = 10^(1.0142) = 10.332 => x = 0.02 × 10.332 = 0.207 M.\n\nPart (b) Copper Concentration Cell (E°cell = 0 V):\nEcell = (0.05916 / 2) log10(C2 / C1) = 0.02958 log10(0.1 / 0.001) = 0.02958 log10(100) = 0.02958 × 2 = +0.0592 V.\nBoxed Answer: (a) [Zn2+] = 0.207 M, (b) Ecell = +0.0592 V."
        },
        {
          "id": "bchy-q2-4",
          "exam": "Argon Solved Numerical 2.4 — Solar Cell Fill Factor & Li-Ion Specific Energy — 5 Marks",
          "marks": "5 Marks",
          "question": "(a) A 4 cm² silicon solar cell under 100 mW/cm² illumination gives Voc = 0.62 V, Isc = 140 mA, Vmp = 0.50 V, and Imp = 128 mA. Calculate Fill Factor (FF) and power conversion efficiency (η).\n(b) A 3.7 V LiCoO2 pouch cell delivers 4.0 Ah and weighs 74 g. Calculate stored energy (Wh) and specific energy (Wh/kg).",
          "solution": "Part (a) Solar Cell Fill Factor & Efficiency:\nMaximum electrical power: Pmax = Vmp × Imp = 0.50 V × 128 mA = 64.0 mW.\nFill Factor: FF = Pmax / (Voc × Isc) = 64.0 / (0.62 V × 140 mA) = 64.0 / 86.8 = 0.7373 (73.73%).\nIncident solar power: Pin = 100 mW/cm² × 4 cm² = 400 mW.\nEfficiency: η = (Pmax / Pin) × 100% = (64.0 / 400) × 100% = 16.0%.\n\nPart (b) Lithium-Ion Battery Specific Energy:\nStored energy: E = V × Q = 3.7 V × 4.0 Ah = 14.8 Wh.\nSpecific energy: Gravimetric Energy Density = E / mass = 14.8 Wh / 0.074 kg = 200.0 Wh/kg.\nBoxed Answer: (a) FF = 0.737, η = 16.0%; (b) Stored Energy = 14.8 Wh, Specific Energy = 200 Wh/kg."
        }
      ],
      "summary": "Electrochemical cell thermodynamics, Nernst EMF calculations, commercial electrolysis, secondary lithium-ion batteries, fuel cells (PEMFC/SOFC), and solar photovoltaic conversion.",
      "theoryNotes": "1. Galvanic / Electrochemical Cell — Converts spontaneous chemical redox energy into usable electrical work (ΔG < 0, E_cell > 0). Oxidation occurs at the negative anode (LOAN rule: Left, Oxidation, Anode, Negative), while reduction occurs at the positive cathode.\n\n2. Electrolytic Cell — Consumes external electrical energy from an applied DC power source (E_ext > E°_cell) to drive non-spontaneous chemical reactions (ΔG > 0). Anode is connected to the positive terminal of the power supply.\n\n3. Salt Bridge — Inverted U-tube filled with agar-agar gel containing saturated inert electrolytes (KCl, KNO3, or NH4NO3) with equal ionic mobilities. Serves 3 critical functions: (1) Completes the internal electric circuit, (2) Maintains electroneutrality in both half-cells, and (3) Eliminates liquid junction potential (E_j ≈ 0).\n\n4. Nernst Equation — Thermodynamic relationship linking cell EMF to temperature, standard reduction potentials, and the reaction quotient Q, derived from van 't Hoff reaction isotherm ΔG = ΔG° + RT ln Q:\nE_cell = E°_cell - (0.05916 / n) log10 Q  (at 298.15 K)\n\n5. Downs Cell Industrial Electrolysis — Continuous industrial process for extracting pure metallic sodium by electrolyzing molten NaCl at ~600 °C (lowered from 801 °C by CaCl2 flux) with a central graphite anode and cylindrical steel cathode separated by a wire-gauze diaphragm. Operating cell potential > 4.07 V.\n\n6. Water Splitting Electrolysis — Stoichiometric decomposition of water into hydrogen and oxygen gases in a 2:1 molar ratio. Acidic mechanism uses Pt electrodes (Cathode: 2H+ + 2e- -> H2; Anode: 2H2O -> O2 + 4H+ + 4e-); Alkaline mechanism uses porous nickel electrodes with OH- migration.\n\n7. Intrinsic Semiconductors — Extremely pure Group 14 crystalline elements (silicon, germanium) where electrical conductivity arises solely from thermal promotion of electrons across the bandgap Eg into the conduction band (n_e = n_h = n_i).\n\n8. Extrinsic Semiconductors — Semiconductors doped with controlled trivalent or pentavalent impurity atoms:\n- n-type Semiconductor: Doped with Group 15 donors (P, As, Sb), producing extra conduction electrons as majority charge carriers.\n- p-type Semiconductor: Doped with Group 13 acceptors (B, Al, Ga), generating mobile electron holes in the valence band as majority carriers.\n\n9. Three-Stage Silicon Purification — Industrial workflow for manufacturing electronic-grade hyperpure silicon (>99.9999999% purity):\n- Stage 1: Siemens process (quartz carbothermic reduction, trichlorosilane SiHCl3 fractional distillation, and CVD reduction onto hot silicon filaments at 1100 °C).\n- Stage 2: Zone refining (repeated RF induction heating creates a narrow molten zone sweeping impurities with segregation coefficient k < 1 to ingot ends).\n- Stage 3: Czochralski crystal growth (dipping a seed crystal into 1425 °C molten silicon and pulling slowly under inert argon to grow dislocation-free single-crystal boules).\n\n10. Lithium-Ion Battery (LIB) — High-energy rechargeable secondary battery operating via rocking-chair Li+ intercalation between host lattices:\n- Anode: Graphitic carbon on copper foil collector (Li_x C6).\n- Cathode: Layered lithium metal oxide (LiCoO2, LiFePO4, or NMC) on aluminum foil collector.\n- Electrolyte: 1 M LiPF6 dissolved in organic ethylene carbonate (EC) + dimethyl carbonate (DMC).\n- Solid Electrolyte Interphase (SEI): Passivating protective layer formed on anode surface during first charge cycle, preventing electrolyte degradation while allowing Li+ transport.\n\n11. Proton Exchange Membrane Fuel Cell (PEMFC) — Low-temperature (60-80 °C) clean energy device using humidified H2 fuel and O2 oxidant across a perfluorosulfonic acid polymer membrane (Nafion):\n- Anode (Pt catalyst): 2H2 -> 4H+ + 4e-\n- Cathode (Pt catalyst): O2 + 4H+ + 4e- -> 2H2O\n- Overall: 2H2 + O2 -> 2H2O + Electricity + Heat\n\n12. Solid Oxide Fuel Cell (SOFC) — High-temperature (700-1000 °C) fuel cell using a dense ceramic yttria-stabilized zirconia (YSZ) solid electrolyte conducting O2- oxygen ions:\n- Cathode: O2 + 4e- -> 2O2- (diffuses through YSZ lattice)\n- Anode: 2H2 + 2O2- -> 2H2O + 4e- (and CO + O2- -> CO2 + 2e-)\n- Advantage: Can directly reform hydrocarbon fuels and syngas without expensive noble metal catalysts.\n\n13. Silicon p-n Junction Solar Cell — Photovoltaic device converting incident sunlight directly into electricity via internal built-in electric field in the depletion zone separating p-type and n-type silicon. Photons with energy hν >= Eg generate electron-hole pairs swept across junction to deliver photovoltage V_oc and photocurrent I_sc.\n\n14. Dye-Sensitized Solar Cell (DSSC / Grätzel Cell) — Biomimetic photovoltaic device consisting of: (1) Fluorine-doped tin oxide (FTO) glass, (2) Nanoporous TiO2 semiconductor film, (3) Ruthenium polypyridyl dye sensitizer, (4) Liquid iodide/triiodide (I-/I3-) redox electrolyte, and (5) Platinum counter-electrode."
    },
    {
      "id": "bchy-m3",
      "moduleNum": 3,
      summary: "Electrical band theory, high-Tc superconductors, magnetic hysteresis, nanomaterials synthesis, and liquid coolants.",
      "pdfUrl": "/pdfs/chemistry/Chemistry_MOD-3.pdf",
      "title": "Functional Materials, Nanomaterials & Coolants",
      "co": "CO: 2",
      "examScope": "CAT-2 & FAT",
      "weightage": "15-20 Marks in FAT",
      "status": "yet_to_start",
      "scope": "Band Theory of Conduction, Resistivity & Temperature Coefficients, Superconductivity (Meissner Effect & YBCO), Magnetic Materials & Hysteresis, Nanomaterials & Advanced Coolants.",
      "blueprint": {
        "marksTotal": "15 to 20 Marks in FAT",
        "questionTypes": [
          {
            "type": "Superconductivity & YBCO Ceramic (10 Marks)",
            "desc": "Meissner effect derivation of χ = -1, Type-I vs Type-II comparison, and YBCO 1:2:3 perovskite structure, synthesis, and liquid nitrogen threshold (92 K)."
          },
          {
            "type": "Magnetic Classes & Data Storage (10 Marks)",
            "desc": "5-class comparison table (Dia, Para, Ferro, Antiferro, Ferri), spin dipole alignments, and operation of MRAM (MTJ tunnel magnetoresistance) or Magneto-Optical discs."
          },
          {
            "type": "Semiconductors & Resistivity Governing Factors (10 Marks)",
            "desc": "6 factors of electrical resistivity (Matthiessen's rule, cold working, annealing), n-type vs p-type comparison table, and intrinsic/extrinsic numericals."
          },
          {
            "type": "Nanomaterials & Liquid Coolants (10 Marks)",
            "desc": "Top-down ball milling vs bottom-up Stöber sol-gel TEOS synthesis, and 4 classes of liquid coolants (DI water + BTA, glycols, brines, dielectric HFEs)."
          }
        ]
      },
      "formulaSheet": [
        {
          "name": "Ohm's Law, Resistivity & Conductivity",
          "formula": "R = \\rho\\frac{L}{A}, \\quad \\sigma = \\frac{1}{\\rho} = n e \\mu_e + p e \\mu_h, \\quad J = \\sigma E",
          "note": "Metals: α > 0 (PTC); Semiconductors: α < 0 (NTC)"
        },
        {
          "name": "Matthiessen's Rule of Resistivity",
          "formula": "\\rho = \\rho_{\\text{thermal}} + \\rho_{\\text{impurity}} + \\rho_{\\text{deformation}}",
          "note": "Nichrome (80% Ni, 20% Cr) ρ ≈ 1.10×10^-6 Ω·m"
        },
        {
          "name": "Superconducting Critical Magnetic Field",
          "formula": "H_c(T) = H_0 \\left[ 1 - \\left(\\frac{T}{T_c}\\right)^2 \\right], \\quad B = \\mu_0(H + M) = 0 \\implies \\chi = -1",
          "note": "Perfect diamagnetism in Meissner state"
        },
        {
          "name": "High-Tc YBCO Superconductor",
          "formula": "\\text{YBa}_2\\text{Cu}_3\\text{O}_{7-\\delta}, \\quad T_c = 92\\text{ K} \\ (> 77\\text{ K Liquid Nitrogen})",
          "note": "Metallic ratio Y:Ba:Cu = 1:2:3"
        },
        {
          "name": "Spin-Only Magnetic Moment",
          "formula": "\\mu_{\\text{eff}} = \\sqrt{n(n+2)}\\mu_B, \\quad 1\\mu_B = \\frac{eh}{4\\pi m_e} = 9.274 \\times 10^{-24}\\text{ J T}^{-1}",
          "note": "n = number of unpaired electrons"
        },
        {
          "name": "Sol-Gel TEOS Hydrolysis & Condensation",
          "formula": "\\text{Si(OR)}_4 + 4\\text{H}_2\\text{O} \\rightarrow \\text{Si(OH)}_4 + 4\\text{ROH}, \\quad \\equiv\\!\\text{Si-OH} + \\text{HO-Si}\\!\\equiv \\;\\rightarrow \\;\\equiv\\!\\text{Si-O-Si}\\!\\equiv + \\text{H}_2\\text{O}",
          "note": "Alcogel drying yields xerogel/aerogel"
        }
      ],
      "examInsights": [
        {
          "title": "YBCO 77 K Liquid Nitrogen Significance",
          "desc": "Before YBCO (discovered 1987, Tc = 92 K), superconductivity required liquid helium (4.2 K), which is rare and extraordinarily expensive. YBCO operates above the boiling point of abundant, inexpensive liquid nitrogen (77 K), revolutionizing industrial applications."
        },
        {
          "title": "ACSR Cable Construction (High-Yield 5M Question)",
          "desc": "Aluminum Conductor Steel Reinforced (ACSR) cables use a core of high-tensile galvanized steel strands to prevent sagging, surrounded by outer concentric layers of high-purity aluminum that carry >95% of the AC current via the skin effect."
        },
        {
          "title": "Dielectric Immersion Coolants: PFCs vs HFEs",
          "desc": "Perfluorocarbons (PFCs like FC-72) have huge Global Warming Potential (~9,000) and atmospheric lifetimes >3,000 years. Modern Hydrofluoroethers (HFEs like Novec 7100) incorporate an ether oxygen with C-H bonds that break down in the troposphere (GWP ~300, lifetime <5 years, zero ODP)."
        }
      ],
      "topics": [
        "Band Theory of Solids & Ohm's Law (Microscopic J = σE)",
        "6 Factors Governing Resistivity & Matthiessen's Rule",
        "Extrinsic Semiconductors & Superconductors (Meissner Effect χ = -1)",
        "High-Tc Ceramic YBCO Superconductor (Tc = 92 K > 77 K LN2)",
        "5 Magnetic Material Classes & Spin-Only Moment (μeff = √[n(n+2)])",
        "Magnetic Recording & MRAM (Tunnel Magnetoresistance)",
        "Nanomaterials Synthesis (Sol-Gel TEOS) & High-Flux Liquid Coolants"
      ],
      "pyqs": [
        {
          "id": "bchy-q3-1",
          "exam": "Argon Solved Numerical 3.1 — Copper Wire Resistivity & Temperature Effect — 5 Marks",
          "marks": "5 Marks",
          "question": "A copper wire of length L = 50 m and diameter d = 1.0 mm has resistance R = 1.07 Ω at 20 °C. Calculate (a) electrical resistivity ρ, (b) conductivity σ, and (c) resistance at 120 °C given αCu = 0.00393 °C^-1.",
          "solution": "Part (a) Cross-Sectional Area & Resistivity:\nRadius: r = d / 2 = 0.5 mm = 0.5 × 10^-3 m.\nArea: A = π r² = 3.14159 × (0.5 × 10^-3)² = 7.854 × 10^-7 m².\nResistivity: ρ = R A / L = (1.07 Ω × 7.854 × 10^-7 m²) / 50 m = 1.681 × 10^-8 Ω·m.\n\nPart (b) Electrical Conductivity:\nσ = 1 / ρ = 1 / (1.681 × 10^-8 Ω·m) = 5.95 × 10^7 S/m (≈ 100% IACS standard).\n\nPart (c) Resistance at 120 °C (ΔT = 120 - 20 = 100 °C):\nR_120 = R_20 [1 + α_Cu ΔT] = 1.07 × [1 + 0.00393 × 100] = 1.07 × [1 + 0.393] = 1.07 × 1.393 = 1.491 Ω.\nBoxed Answer: (a) ρ = 1.681×10^-8 Ω·m, (b) σ = 5.95×10^7 S/m, (c) R120 = 1.491 Ω."
        },
        {
          "id": "bchy-q3-2",
          "exam": "Argon Solved Numerical 3.2 — Intrinsic vs Extrinsic Semiconductor Conductivity — 5 Marks",
          "marks": "5 Marks",
          "question": "Intrinsic silicon at 300 K has ni = 1.5×10^16 m^-3, μe = 0.14 m²/(V·s), and μh = 0.05 m²/(V·s). (a) Calculate intrinsic conductivity σi. (b) If doped with 10^22 m^-3 Phosphorus atoms, find majority and minority carrier concentrations and n-type conductivity σn.",
          "solution": "Part (a) Intrinsic Semiconductor Conductivity:\nσi = ni e (μe + μh) = (1.5 × 10^16 m^-3)(1.6 × 10^-19 C)(0.14 + 0.05 m²/(V·s))\nσi = (2.4 × 10^-3)(0.19) = 4.56 × 10^-4 S/m.\n\nPart (b) Doped n-Type Semiconductor (Nd = 1.0 × 10^22 m^-3):\nMajority carrier concentration: n ≈ Nd = 1.0 × 10^22 m^-3.\nMinority carrier concentration (by Mass-Action Law n·p = ni²):\np = ni² / n = (1.5 × 10^16)² / (1.0 × 10^22) = (2.25 × 10^32) / 10^22 = 2.25 × 10^10 m^-3.\nn-Type Conductivity: σn = n e μe = (1.0 × 10^22)(1.6 × 10^-19)(0.14) = 224.0 S/m.\nComparison: Doping increases electrical conductivity by a factor of 224 / (4.56 × 10^-4) ≈ 491,200× (~500,000-fold increase!).\nBoxed Answer: (a) σi = 4.56×10^-4 S/m; (b) n = 1.0×10^22 m^-3, p = 2.25×10^10 m^-3, σn = 224 S/m."
        },
        {
          "id": "bchy-q3-3",
          "exam": "Argon Solved Numerical 3.3 — Superconductor Critical Field & Spin-Only Magnetic Moments — 5 Marks",
          "marks": "5 Marks",
          "question": "(a) A superconductor has Tc = 9.2 K and H0 = 0.196 T at 0 K. Find its critical magnetic field Hc at 4.2 K.\n(b) Calculate spin-only magnetic moments (μeff) for Ti3+ (Z=22), Fe2+ (Z=26), Fe3+ (Z=26), and Cu2+ (Z=29).",
          "solution": "Part (a) Critical Magnetic Field at 4.2 K:\nHc(T) = H0 [ 1 - (T / Tc)² ]\nHc(4.2 K) = 0.196 × [ 1 - (4.2 / 9.2)² ] = 0.196 × [ 1 - (0.4565)² ] = 0.196 × [ 1 - 0.2084 ] = 0.196 × 0.7916 = 0.1552 T (155.2 mT).\n\nPart (b) Spin-Only Magnetic Moments (μeff = √[n(n+2)] μB):\n1. Ti3+ (Z=22, [Ar] 3d¹): n = 1 unpaired electron => μeff = √(1 × 3) = √3 = 1.732 μB.\n2. Fe2+ (Z=26, [Ar] 3d⁶): 6 electrons in 5 d-orbitals => 1 pair, 4 unpaired (n = 4) => μeff = √(4 × 6) = √24 = 4.899 μB.\n3. Fe3+ (Z=26, [Ar] 3d⁵): 5 unpaired electrons (n = 5) => μeff = √(5 × 7) = √35 = 5.916 μB.\n4. Cu2+ (Z=29, [Ar] 3d⁹): 4 pairs, 1 unpaired electron (n = 1) => μeff = √(1 × 3) = √3 = 1.732 μB.\nBoxed Answer: (a) Hc(4.2 K) = 0.155 T; (b) Ti3+: 1.732 μB, Fe2+: 4.899 μB, Fe3+: 5.916 μB, Cu2+: 1.732 μB."
        }
      ],
      "summary": "Band theory of conduction, temperature coefficients, high-Tc ceramic superconductors (YBCO), magnetic classification, data storage hysteresis loops, and nanofluid coolants.",
      "theoryNotes": "1. Band Theory of Conduction — Quantum mechanical model based on overlapping atomic orbitals forming continuous energy bands:\n- Valence Band (VB): Highest occupied energy band populated by valence electrons.\n- Conduction Band (CB): Lowest unoccupied energy band where delocalized electrons can flow freely under an applied electric field.\n- Forbidden Band Gap (Eg): Energy difference between the top of the valence band and the bottom of the conduction band. Metals have overlapping bands (Eg = 0 eV); Semiconductors have narrow gaps (0.1 < Eg < 3.0 eV); Insulators have wide gaps (Eg > 3.0 eV).\n\n2. Electrical Conductivity & Resistivity — Ohm's law relationship ρ = R·A / l. Governed at microscopic level by charge carrier concentration n, fundamental electronic charge e, and carrier drift mobility μ:\nConductivity σ = n·e·μ\n\n3. Temperature Coefficient of Resistance (TCR) — Rate of change of electrical resistance with temperature:\n- Positive Temperature Coefficient (PTC): In metals, thermal vibrations of lattice ions increase electron scattering, causing resistance to increase as temperature rises (dR/dT > 0).\n- Negative Temperature Coefficient (NTC): In semiconductors, thermal energy promotes exponential numbers of electrons across the bandgap into the conduction band, causing resistance to decrease sharply as temperature rises (dR/dT < 0).\n\n4. Superconductivity — Phenomenon where electrical resistance vanishes completely (R = 0) below a critical transition temperature Tc, enabling continuous current flow without Joule heating dissipation (I^2 R = 0).\n\n5. Meissner Effect — The complete expulsion of external magnetic flux lines from the interior of a superconductor when cooled below its critical temperature Tc:\nB = 0, magnetic susceptibility χ = -1\nDemonstrates that superconductors are perfect diamagnets, distinct from ideal zero-resistance conductors.\n\n6. High-Tc Ceramic Superconductors (YBCO) — Perovskite-derived cuprate ceramic material YBa2Cu3O7-x with critical temperature Tc = 93 K. Operates above the boiling point of liquid nitrogen (77 K), revolutionizing magnetic levitation, lossless power transmission, and MRI magnets.\n\n7. Diamagnetic Materials — Substances with no unpaired electrons (paired electron spins); weakly repelled by external magnetic fields; magnetic susceptibility χ is small, negative, and independent of temperature (e.g. Cu, Bi, Au, H2O).\n\n8. Paramagnetic Materials — Substances with permanent unpaired electron spins; weakly attracted into external magnetic fields; magnetic susceptibility χ is positive and inversely proportional to absolute temperature via Curie's law χ = C/T (e.g. Al, Pt, Mn, liquid O2).\n\n9. Ferromagnetic Materials — Substances with strong parallel exchange coupling between unpaired spins forming macroscopic magnetic domains; strongly attracted to magnetic fields and retain magnetization after field removal; characterized by B-H hysteresis loops (e.g. Fe, Co, Ni).\n\n10. Magnetic Hysteresis Loop & Non-Volatile Data Storage — Plot of magnetic flux density B versus applied magnetic field H:\n- Retentivity (Remanence Br): Residual magnetic flux remaining when external field H is reduced to zero; forms the basis for binary 0/1 data storage on magnetic hard disks and magnetic tape.\n- Coercivity (Hc): Magnitude of reverse magnetic field required to demagnetize the material back to zero.\n- Soft Magnetic Materials: Low coercivity Hc, high permeability, narrow hysteresis loop with minimal energy loss; used in transformer cores and electromagnets (e.g. soft iron, permalloy).\n- Hard Magnetic Materials: High coercivity Hc, high retentivity, broad hysteresis loop; resistant to demagnetization; used in permanent magnets and hard disk platters (e.g. Alnico, NdFeB).\n\n11. Nanomaterials & Quantum Confinement — Materials with structural features in the 1-100 nm nanoscale regime:\n- Quantum Confinement: When physical particle dimensions become comparable to or smaller than the de Broglie wavelength of electrons, continuous energy bands collapse into discrete, quantized energy levels, widening the effective bandgap Eg.\n- Surface-to-Volume Ratio: Drastic reduction in particle size causes the fraction of surface atoms to increase exponentially, greatly enhancing chemical reactivity, catalytic activity, and adsorption capacity.\n\n12. Carbon Nanotubes (CNTs) & Graphene — Allotropes of sp2 hybridized carbon:\n- Graphene: Two-dimensional honeycomb lattice of single-atom thickness with zero effective mass charge carriers (Dirac fermions) and record electrical conductivity and mechanical tensile strength (130 GPa).\n- Single-Walled Carbon Nanotubes (SWCNTs): Seamless cylinder rolled from graphene sheet; exhibits metallic or semiconducting behavior depending on chiral vector indices (n, m).\n\n13. Advanced Liquid Coolants — High-efficiency heat transfer fluids for electronic devices, EV battery packs, and nuclear reactors:\n- Thermophysical Properties: High specific heat capacity Cp, high thermal conductivity k, low kinematic viscosity ν, non-corrosive, non-flammable, and high dielectric breakdown strength.\n- Nanofluids: Colloidal suspensions of nanoscale metallic or metal oxide particles (Al2O3, CuO, CNTs) in conventional base fluids (water, ethylene glycol) providing 20-50% enhancement in convective heat transfer."
    },
    {
      "id": "bchy-m4",
      "moduleNum": 4,
      summary: "UV-Visible spectroscopy, electronic transitions, Beer-Lambert law, and powder X-ray diffraction.",
      "pdfUrl": "/pdfs/chemistry/Chemistry_MOD-4.pdf",
      "title": "Spectroscopic & Diffraction Techniques",
      "co": "CO: 3",
      "examScope": "CAT-2 & FAT",
      "weightage": "15-20 Marks in FAT",
      "status": "strong",
      "scope": "Electromagnetic Spectrum, UV-Visible Spectroscopy, Beer-Lambert Law, Electronic Transitions, Chromophores & Auxochromes, Powder X-Ray Diffraction, Bragg's Law & Debye-Scherrer Equation.",
      "blueprint": {
        "marksTotal": "15 to 20 Marks in FAT",
        "questionTypes": [
          {
            "type": "Bragg's Law Geometric Derivation (5-10 Marks)",
            "desc": "Parallel incident rays, path difference CB + BD = 2d sin θ, constructive interference condition 2d sin θ = nλ, and interplanar spacing dhkl."
          },
          {
            "type": "Debye-Scherrer Crystallite Size Numerical (5-10 Marks)",
            "desc": "Applying D = (k λ) / (β cos θ); converting detector angle 2θ to Bragg angle θ and FWHM β from degrees to radians."
          },
          {
            "type": "UV-Vis Electronic Transitions & Shifts (10 Marks)",
            "desc": "Comparison of σ->σ*, n->σ*, π->π*, n->π*; auxochrome bathochromic shifts; and why protonation of aniline causes a hypsochromic blue shift."
          },
          {
            "type": "Beer-Lambert Law & Analytical Applications (10 Marks)",
            "desc": "Derivation of A = ε L c, detection of keto-enol tautomerism in ethyl acetoacetate, cis/trans isomerism, and spectrophotometer instrumentation."
          }
        ]
      },
      "formulaSheet": [
        {
          "name": "Planck-Einstein Photon Energy",
          "formula": "E = h\\nu = \\frac{hc}{\\lambda} = hc\\tilde{\\nu}, \\quad E(\\text{eV}) = \\frac{1240}{\\lambda(\\text{nm})}",
          "note": "h = 6.626×10^-34 J·s; c = 3.0×10^8 m/s"
        },
        {
          "name": "Beer-Lambert Optical Law",
          "formula": "A = \\log_{10}\\left(\\frac{I_0}{I}\\right) = -\\log_{10} T = \\varepsilon L c",
          "note": "T = I / I0 = 10^-A; ε in L/(mol·cm)"
        },
        {
          "name": "Bragg's Law of X-Ray Diffraction",
          "formula": "2 d_{hkl}\\sin\\theta = n\\lambda, \\quad d_{hkl} = \\frac{a}{\\sqrt{h^2 + k^2 + l^2}} \\text{ (cubic)}",
          "note": "Cu Kα: λ = 1.5406 Å = 0.15406 nm"
        },
        {
          "name": "Debye-Scherrer Crystallite Size",
          "formula": "D = \\frac{k\\lambda}{\\beta\\cos\\theta}, \\quad \\beta(\\text{rad}) = \\beta(^{\\circ}) \\times \\frac{\\pi}{180}",
          "note": "k ≈ 0.9; θ is half of 2θ detector peak!"
        },
        {
          "name": "Continuous X-Ray Cutoff Wavelength",
          "formula": "\\lambda_{\\min}(\\text{Å}) = \\frac{hc}{eV} = \\frac{12,400}{V(\\text{volts})}",
          "note": "Duane-Hunt limit in Bremsstrahlung"
        }
      ],
      "examInsights": [
        {
          "title": "The FWHM Radian Conversion Trap (VIT #1 Trap)",
          "desc": "VIT examiners deduct up to 4 marks if you substitute FWHM β directly in degrees! In D = (k λ) / (β cos θ), β MUST be converted to radians: β(rad) = β(deg) × (π / 180)."
        },
        {
          "title": "Halving 2θ to get Bragg Angle θ",
          "desc": "Powder XRD patterns are plotted against 2θ (detector angle). Before computing cos θ or sin θ, ALWAYS divide the peak position by 2 (e.g. 2θ = 43.30° => θ = 21.65°)."
        },
        {
          "title": "Quartz vs. Plastic Cuvettes in UV-Vis",
          "desc": "Fused Quartz (Silica) cuvettes MUST be used below 320 nm because ordinary glass and plastic absorb UV radiation strongly below 320 nm, blinding the detector."
        }
      ],
      "topics": [
        "Electromagnetic Spectrum & 4 Electronic Transitions (σ→σ*, n→σ*, π→π*, n→π*)",
        "Chromophores, Auxochromes & 4 Spectral Shifts (Red/Blue Shifts)",
        "Beer-Lambert Law (A = ε L c) & Double-Beam UV-Vis Spectrophotometer",
        "Analytical Applications: Keto-Enol Tautomerism & Isomer Distinction",
        "Powder XRD Principle & Bragg's Law Geometric Derivation (2d sin θ = nλ)",
        "Debye-Scherrer Nanocrystallite Size Determination (D = kλ / β cos θ)"
      ],
      "pyqs": [
        {
          "id": "bchy-q4-1",
          "exam": "Argon Solved Numerical 4.1 — Beer-Lambert Absorbance & Concentration — 5 Marks",
          "marks": "5 Marks",
          "question": "A 5.0×10^-5 M solution of an organic dye in a 1.0 cm quartz cuvette exhibits 25.0% transmittance at λmax = 520 nm. Calculate (a) absorbance A, (b) molar absorptivity ε, and (c) concentration of an unknown sample that gives 60.0% transmittance in the same cell.",
          "solution": "Part (a) Absorbance (A1):\nT1 = 25.0% = 0.250.\nA1 = -log10(T1) = -log10(0.250) = -(-0.60206) = 0.6021.\n\nPart (b) Molar Absorptivity (ε):\nBy Beer-Lambert Law: A1 = ε L c1\nε = A1 / (L × c1) = 0.6021 / (1.0 cm × 5.0 × 10^-5 mol/L) = 1.204 × 10^4 L/(mol·cm).\n\nPart (c) Concentration of Unknown Sample (T2 = 60.0% = 0.600):\nA2 = -log10(0.600) = -(-0.22185) = 0.2218.\nc2 = A2 / (ε × L) = 0.2218 / (1.204 × 10^4 L/(mol·cm) × 1.0 cm) = 1.842 × 10^-5 mol/L (18.4 μM).\nBoxed Answer: (a) A1 = 0.6021, (b) ε = 1.204×10^4 L/(mol·cm), (c) c2 = 1.84×10^-5 M."
        },
        {
          "id": "bchy-q4-2",
          "exam": "Argon Solved Numerical 4.2 — Bragg's Law: dhkl, Lattice Parameter & Radius — 5 Marks",
          "marks": "5 Marks",
          "question": "First-order (n = 1) X-ray diffraction from the (111) plane of a face-centered cubic (FCC) copper crystal is observed at a diffraction angle 2θ = 43.30° using Cu Kα radiation (λ = 1.5406 Å). Calculate (a) interplanar spacing d111, (b) cubic unit-cell edge length a, and (c) atomic radius of Cu.",
          "solution": "Step 1: Bragg Angle θ:\n2θ = 43.30° => θ = 43.30° / 2 = 21.65°.\nsin(21.65°) = 0.36894.\n\nPart (a) Interplanar Spacing (d111):\nBy Bragg's Law: 2 d sin θ = n λ => d111 = n λ / (2 sin θ)\nd111 = (1 × 1.5406 Å) / (2 × 0.36894) = 1.5406 / 0.73788 = 2.0879 Å (0.2088 nm).\n\nPart (b) Cubic Lattice Parameter (a):\nFor a cubic crystal: dhkl = a / √(h² + k² + l²)\nFor (111) plane: √(1² + 1² + 1²) = √3 = 1.73205.\na = d111 × √3 = 2.0879 Å × 1.73205 = 3.6163 Å (0.3616 nm).\n\nPart (c) Atomic Radius of FCC Copper:\nIn an FCC lattice, atoms touch along the face diagonal: 4r = a √2 => r = a √2 / 4 = a / (2√2)\nr = 3.6163 Å / (2 × 1.4142) = 3.6163 / 2.8284 = 1.2786 Å (0.1279 nm).\nBoxed Answer: (a) d111 = 2.088 Å, (b) a = 3.617 Å, (c) r = 1.279 Å."
        },
        {
          "id": "bchy-q4-3",
          "exam": "Argon Solved Numerical 4.3 — Debye-Scherrer Nanocrystallite Size Calculation — 5 Marks",
          "marks": "5 Marks",
          "question": "An XRD peak of TiO2 nanoparticles recorded with Cu Kα radiation (λ = 0.15406 nm) appears at 2θ = 25.30° with a Full Width at Half Maximum (FWHM) of β = 0.45°. Taking shape factor k = 0.90, calculate the average crystallite size D in nm.",
          "solution": "Step 1: Bragg Angle θ:\n2θ = 25.30° => θ = 25.30° / 2 = 12.65°.\ncos(12.65°) = 0.97573.\n\nStep 2: Convert FWHM β from Degrees to Radians:\nβ(rad) = β(deg) × (π / 180°) = 0.45° × (3.14159 / 180°) = 0.45 × 0.017453 = 7.854 × 10^-3 radians.\n\nStep 3: Debye-Scherrer Formula Evaluation:\nD = (k × λ) / (β × cos θ)\nNumerator: k × λ = 0.90 × 0.15406 nm = 0.138654 nm.\nDenominator: β × cos θ = (7.854 × 10^-3 rad) × 0.97573 = 7.663 × 10^-3.\nD = 0.138654 nm / (7.663 × 10^-3) = 18.094 nm.\nBoxed Answer: The average TiO2 nanocrystallite size D is 18.09 nm."
        }
      ],
      "summary": "Light-matter interactions, UV-Visible spectroscopy, Beer-Lambert quantitative laws, auxochromic red/blue shifts, and Powder X-Ray Diffraction with Debye-Scherrer crystallite sizing.",
      "theoryNotes": "1. Electromagnetic Spectrum & Light-Matter Interaction — Radiation characterized by wavelength λ, frequency ν, and photon energy E = hν = hc/λ:\n- UV-Visible Region: 200 nm to 800 nm (induces electronic transitions between molecular orbitals).\n- Infrared (IR) Region: 2.5 μm to 15 μm (induces molecular bond vibrational transitions).\n- X-Ray Region: 0.01 nm to 10 nm (induces core electron ejection and crystal lattice diffraction).\n\n2. UV-Visible Spectroscopy & Beer-Lambert Law — Quantitative absorption spectroscopy based on light attenuation through an absorbing solution:\n- Beer's Law: Absorbance is directly proportional to solute concentration c.\n- Lambert's Law: Absorbance is directly proportional to optical path length l.\n- Combined Beer-Lambert Law:\nA = log10(I_0 / I) = ε · c · l\nWhere A is dimensionless absorbance, I_0 is incident light intensity, I is transmitted light intensity, c is molar concentration (mol/L), l is cuvette path length (usually 1.0 cm), and ε is molar extinction coefficient / molar absorptivity (L·mol^-1·cm^-1).\n\n3. Electronic Transitions in UV-Visible — Promotion of an electron from an occupied molecular orbital to an unoccupied antibonding orbital:\n- σ -> σ*: Requires high photon energy (far UV < 200 nm), observed in saturated alkanes (C-C, C-H bonds).\n- n -> σ*: Moderate energy (150-250 nm), observed in saturated molecules containing non-bonding heteroatom lone pairs (C-O, C-N, C-Cl).\n- π -> π*: High intensity absorption (200-400 nm), characteristic of unsaturated double bonds, alkenes, carbonyls, and conjugated polyenes.\n- n -> π*: Low intensity, symmetry-forbidden transition (250-400 nm) occurring at longer wavelengths in carbonyl and azo compounds.\n\n4. Chromophores — An unsaturated covalent functional group that absorbs radiation in the UV or visible region, imparting color to the molecule (e.g. -C=C-, -C≡C-, -C=O, -N=N-, -NO2, aromatic phenyl rings).\n\n5. Auxochromes — A saturated substituent group with non-bonding lone pairs that does not absorb UV radiation on its own, but when attached directly to a chromophore shifts the absorption maximum to longer wavelengths (bathochromic shift) and enhances absorption intensity (e.g. -OH, -NH2, -OCH3, -SH, -Cl).\n\n6. Bathochromic Shift (Red Shift) — The displacement of an absorption band maximum (λ_max) toward longer wavelengths (lower energy), caused by extended conjugation, auxochromic substitution, or solvent polarity changes.\n\n7. Hypsochromic Shift (Blue Shift) — The displacement of an absorption band maximum (λ_max) toward shorter wavelengths (higher energy), typically caused by loss of orbital conjugation or specific solvent hydrogen bonding.\n\n8. Hyperchromic & Hypochromic Effects —\n- Hyperchromic Effect: An increase in absorption intensity (molar extinction coefficient ε_max increases).\n- Hypochromic Effect: A decrease in absorption intensity (molar extinction coefficient ε_max decreases).\n\n9. Powder X-Ray Diffraction (Powder XRD) — Non-destructive analytical technique for identifying crystal structures, phase purity, and crystallite size in polycrystalline materials:\n- Monochromatic X-Ray Generation: Cu Kα radiation (λ = 1.5406 Å) generated by bombarding copper target with high-velocity electrons.\n- Random Crystallite Orientation: Finely ground powder contains thousands of crystallites in all possible crystallographic orientations, satisfying the diffraction condition for every plane family.\n\n10. Bragg's Law of Diffraction — Condition for constructive interference of X-rays scattered from parallel crystal planes:\n2d · sin θ = n · λ\nWhere d is interplanar lattice spacing between adjacent (hkl) crystal planes, θ is glancing angle of incidence (Bragg angle), n is diffraction order (integer), and λ is X-ray wavelength.\n\n11. Debye-Scherrer Equation for Crystallite Size — Relates peak broadening in the XRD diffractogram to sub-micrometer crystallite domain size:\nD = (K · λ) / (β · cos θ)\nWhere D is mean crystallite diameter, K is dimensionless shape factor (typically K ≈ 0.9 for spherical crystallites), λ is X-ray wavelength (1.5406 Å for Cu Kα), β is full width at half maximum (FWHM) of the diffraction peak expressed in radians (after correcting for instrumental broadening: β^2 = β_measured^2 - β_inst^2), and θ is Bragg angle of the peak center."
    },
    {
      "id": "bchy-m5",
      "moduleNum": 5,
      summary: "Computational chemistry methods, Schrödinger equation, molecular orbitals, PES, and geometry optimization.",
      "pdfUrl": "/pdfs/chemistry/Chemistry_MOD-5.pdf",
      "title": "Computational Chemistry & AI Material Discovery",
      "co": "CO: 4",
      "examScope": "FAT Only",
      "weightage": "15-20 Marks in FAT",
      "status": "not_confident",
      "scope": "Quantum vs Classical Mechanics, Schrödinger Equation, Born-Oppenheimer Approximation, Hartree-Fock SCF, DFT, Gaussian Basis Sets, LCAO Molecular Orbital Theory, PES & AI in Materials Discovery.",
      "blueprint": {
        "marksTotal": "15 to 20 Marks in FAT",
        "questionTypes": [
          {
            "type": "Born-Oppenheimer Approximation & Electronic Methods (10 Marks)",
            "desc": "Decoupling nuclear and electronic motion, and comparison table of HF, DFT, MP2, CCSD(T), and CASSCF."
          },
          {
            "type": "Homonuclear (H2) vs Heteronuclear (NO) MO Diagrams (10 Marks)",
            "desc": "3 LCAO rules, energy asymmetry in NO due to oxygen electronegativity, bond order calculation, and paramagnetic radical behavior."
          },
          {
            "type": "Potential Energy Surfaces & Hessian Eigenvalue Test (10 Marks)",
            "desc": "Differentiating 1D PEC from Multi-D PES; distinguishing local/global minima (0 imaginary freq) from transition states (1 imaginary freq)."
          },
          {
            "type": "MEP Maps, Vibrational Modes & SN2 Profiles (10 Marks)",
            "desc": "Ammonia MEP color coding, vibrational mode counts (3N-6 / 3N-5), and gas-phase double-well vs aqueous unimodal SN2 reaction barrier."
          }
        ]
      },
      "formulaSheet": [
        {
          "name": "Time-Independent Schrödinger Equation",
          "formula": "\\hat{H}\\Psi(\\mathbf{r}; \\mathbf{R}) = E\\Psi(\\mathbf{r}; \\mathbf{R}), \\quad \\hat{H} = \\hat{T}_n + \\hat{T}_e + \\hat{V}_{ne} + \\hat{V}_{ee} + \\hat{V}_{nn}",
          "note": "Born-Oppenheimer: Mnuc >> me (>=1836×)"
        },
        {
          "name": "LCAO Molecular Orbital & Bond Order",
          "formula": "\\Psi_\\pm = c_A \\psi_A \\pm c_B \\psi_B, \\quad \\text{Bond Order} = \\frac{1}{2}(N_b - N_a)",
          "note": "H2: BO = 1.0; NO: BO = 0.5(8 - 3) = 2.5"
        },
        {
          "name": "Morse Anharmonic Potential",
          "formula": "V(r) = D_e \\left[ 1 - e^{-a(r - r_e)} \\right]^2, \\quad D_e = D_0 + \\text{ZPE}",
          "note": "Zero-Point Energy ZPE = 0.5 h ν0"
        },
        {
          "name": "Stationary Point Hessian Eigenvalue Rule",
          "formula": "\\tilde{\\nu} = \\frac{1}{2\\pi c}\\sqrt{\\frac{k}{\\mu}}, \\quad \\text{Minima: } 0 \\text{ imag. freq; } \\text{Transition State: } 1 \\text{ imag. freq}",
          "note": "Imaginary frequency indicates negative force constant"
        },
        {
          "name": "Vibrational Degrees of Freedom",
          "formula": "\\text{Non-Linear: } 3N - 6, \\quad \\text{Linear: } 3N - 5",
          "note": "H2O: 3; CO2: 4; NH3: 6; CH4: 9; Benzene: 30"
        }
      ],
      "examInsights": [
        {
          "title": "Transition State vs. Minimum Hessian Rule",
          "desc": "VIT examiners look for the mathematical criteria on the PES: A local or global minimum has all positive Hessian second derivatives (zero imaginary frequencies). A transition state (first-order saddle point) has EXACTLY ONE imaginary frequency (one negative eigenvalue along the reaction coordinate)."
        },
        {
          "title": "Heteronuclear NO Orbital Asymmetry",
          "desc": "Oxygen (χ = 3.44) is more electronegative than Nitrogen (χ = 3.04). Therefore, Oxygen's 2s and 2p atomic orbitals sit at lower energy than Nitrogen's. Bonding MOs are polarized toward Oxygen (cO > cN), whereas antibonding MOs are polarized toward Nitrogen (cN > cO)."
        },
        {
          "title": "SN2 Reaction: Gas Phase vs. Aqueous Solution",
          "desc": "In the gas phase, Cl- + CH3Cl forms stable pre- and post-reaction ion-dipole complexes, producing a Double-Well potential profile. In water, strong H-bonding stabilizes free Cl- far more than the dispersed transition state, wiping out the wells and creating a high Unimodal barrier (10^12-10^15× slower!)."
        }
      ],
      "topics": [
        "Born-Oppenheimer Approximation & Electronic Structure Methods (HF, DFT)",
        "Gaussian Basis Sets: Minimal (STO-3G), Split-Valence (6-31G), Diffuse & ECP",
        "LCAO Molecular Orbital Theory: Homonuclear H2 vs. Heteronuclear NO",
        "Potential Energy Surfaces (PES): Minima (0 imag freq) vs. Transition States (1 imag freq)",
        "Molecular Electrostatic Potential (MEP) & Vibrational Normal Modes (3N-6 / 3N-5)",
        "Reaction Coordinate SN2 Profiles (Gas-Phase Double-Well vs. Aqueous Barrier)",
        "Force Fields & AI/Machine Learning for Screening Functional Materials"
      ],
      "pyqs": [
        {
          "id": "bchy-q5-1",
          "exam": "Official VIT Model Q1 & Q2 — Scope, Methods & Basis Sets — 10 Marks",
          "marks": "10 Marks",
          "question": "(a) Define computational chemistry, classify its major branches (QM vs. MM/MD), state the Born–Oppenheimer approximation, and list 7 merits over experiment.\n(b) Compare HF, DFT, MP2, CI, CCSD(T), and CASSCF, and explain Minimal (STO-3G), Split-Valence (6-31G), Polarized (*), Diffuse (+), and ECP (LANL2DZ) basis sets.",
          "solution": "Part (a) Foundations & Born-Oppenheimer Approximation:\n1. Definition: Branch of chemistry using computer simulation to solve quantum and classical equations of motion to predict molecular structures, energies, and spectra.\n2. Branches: Quantum Mechanics (explicit electrons: ab initio, DFT) vs Classical Mechanics (atoms as balls and springs: MM/MD) vs Hybrid QM/MM.\n3. Born-Oppenheimer Approximation: Because nuclei are at least 1,836× heavier than electrons (Mnucleus >> me), electrons respond instantaneously to nuclear displacements. Setting nuclear kinetic energy Tn = 0 decouples electronic and nuclear motion, generating the Potential Energy Surface E(R) = Eelec(R) + Vnn(R).\n4. 7 Merits over Experiment: (1) Characterizes fleeting transition states (~10^-13 s), (2) Zero toxic/explosive chemical waste, (3) Explores extreme temperatures/pressures, (4) Visualizes 3D MOs and MEP maps, (5) Decomposes steric vs electronic contributions, (6) Screens thousands of candidates in silico, (7) Interprets ambiguous spectra.\n\nPart (b) Electronic Methods & Basis Sets:\n1. Electronic Methods: Hartree-Fock (mean-field, ~N^4, neglects dynamic correlation); DFT (electron density ρ(r), ~N^3 workhorse); MP2 (2nd-order perturbation, ~N^5, van der Waals); CCSD(T) (coupled-cluster, ~N^7, ±1 kcal/mol gold standard); CASSCF (multi-reference for bond breaking).\n2. Basis Sets: Minimal STO-3G (1 function per AO); Split-Valence 6-31G (core 1 block of 6 PGTOs, valence split into 3 and 1 PGTOs); Polarized 6-31G(d,p) (adds d on C/N/O, p on H for angular flexibility); Diffuse 6-31+G(d,p) (large functions for anions/lone pairs); ECP LANL2DZ (pseudopotential for core electrons of heavy transition metals)."
        },
        {
          "id": "bchy-q5-2",
          "exam": "Official VIT Model Q3 — Homonuclear H2 vs Heteronuclear NO MO Diagrams — 10 Marks",
          "marks": "10 Marks",
          "question": "State the 3 LCAO conditions. Construct and compare the Molecular Orbital diagrams of H2 and NO, explaining why oxygen orbitals lie lower than nitrogen orbitals in NO, and calculate their bond orders and magnetic behavior.",
          "solution": "Part (a) 3 LCAO Mandatory Conditions:\n1. Comparable Energies between combining atomic orbitals ψA and ψB.\n2. Significant Spatial Overlap along the internuclear axis.\n3. Identical Symmetry with respect to the internuclear axis (e.g. s + pz -> σ; px + px -> π; s + px gives zero net overlap).\n\nPart (b) Homonuclear H2 (2 Electrons):\n- Combination: 1sA + 1sB -> σ1s (bonding) and 1sA - 1sB -> σ*1s (antibonding).\n- Electronic Configuration: (σ1s)^2 (σ*1s)^0.\n- Bond Order: BO = 1/2(Nb - Na) = 1/2(2 - 0) = 1.0 (Single bond, Re = 0.74 Å, De = 458 kJ/mol).\n- Magnetic Nature: Diamagnetic (all electrons paired; HOMO = σ1s, LUMO = σ*1s).\n\nPart (c) Heteronuclear Nitric Oxide NO (11 Valence Electrons: N 2s²2p³ [5] + O 2s²2p⁴ [6]):\n- Electronegativity Asymmetry: Oxygen (χ = 3.44) is more electronegative than Nitrogen (χ = 3.04), so Oxygen's 2s and 2p atomic orbitals lie lower in energy than Nitrogen's.\n- Orbital Polarization: Bonding MOs (σ2s, π2p, σ2p) are polarized toward Oxygen (cO > cN), while antibonding MOs (π*2p, σ*2p) are localized mainly on Nitrogen (cN > cO).\n- Valence MO Configuration: (σ2s)^2 (σ*2s)^2 (π2px)^2 (π2py)^2 (σ2pz)^2 (π*2px)^1.\n- Bond Order: BO = 1/2(Nb - Na) = 1/2(8 - 3) = 2.5.\n- Magnetic Nature: Paramagnetic radical (1 unpaired electron in π*2p SOMO localized primarily on N). Ionizing NO -> NO+ removes this antibonding electron, increasing bond order from 2.5 to 3.0!"
        },
        {
          "id": "bchy-q5-3",
          "exam": "Official VIT Model Q4 & Q5 — PEC vs PES, Hessian Eigenvalues & Vibrations — 10 Marks",
          "marks": "10 Marks",
          "question": "(a) Differentiate between a 1D Potential Energy Curve (PEC) and a Multi-D Potential Energy Surface (PES).\n(b) Explain the PEC of H2/HCl and the PES of Ozone (O3) and Water (H2O).\n(c) Calculate vibrational degrees of freedom for H2O, CO2, NH3, CH4, and Benzene (C6H6), and state the Hessian matrix test for stationary points.",
          "solution": "Part (a) PEC vs PES:\n- 1D PEC: Diatomic molecules (N = 2) have only 1 internal coordinate (internuclear distance r); energy is plotted as a 2D curve E(r).\n- Multi-D PES: Polyatomic molecules (N >= 3) have 3N - 6 (or 3N - 5) internal coordinates; energy is mapped across a multi-dimensional hypersurface.\n\nPart (b) Slide Case Studies:\n- H2 and HCl PEC: Follows an anharmonic Morse curve V(r) = De[1 - exp(-a(r - re))]²; at r < re, nuclear repulsion dominates; at r = re, minimum energy well; at r -> ∞, dissociates into neutral radicals.\n- Ozone (O3) PES: Plots energy vs O-O-O bond angle θ; Global Minimum at open bent ozone (θ = 120.9°, C2v) and higher-energy Local Minimum at cyclic iso-ozone (θ = 60.0°, D3h) separated by a transition state saddle point at θ ≈ 84°.\n- Water (H2O) PES: 3D surface over rOH and θHOH locates global minimum at rOH = 0.958 Å and θ = 104.5°, with an inversion barrier of ~11,000 cm^-1 at θ = 180°.\n\nPart (c) Vibrational Degrees of Freedom & Hessian Rule:\n- Linear molecules have 3N - 5 modes; Non-linear have 3N - 6 modes:\n  • H2O (non-linear, N=3): 3(3) - 6 = 3 modes (symmetric stretch 3657 cm^-1, asymmetric stretch 3756 cm^-1, bend 1595 cm^-1).\n  • CO2 (linear, N=3): 3(3) - 5 = 4 modes (symmetric stretch 1388 cm^-1, asymmetric stretch 2349 cm^-1, degenerate bend 667 cm^-1 × 2).\n  • NH3 (non-linear, N=4): 3(4) - 6 = 6 modes.\n  • CH4 (non-linear, N=5): 3(5) - 6 = 9 modes.\n  • Benzene C6H6 (non-linear, N=12): 3(12) - 6 = 30 modes.\n- Hessian Matrix Test: Gradient ∇E = 0 at all stationary points. A local/global minimum has ZERO imaginary frequencies (all positive force constants). A transition state has EXACTLY ONE imaginary frequency (one negative eigenvalue along the reaction coordinate)."
        }
      ],
      "summary": "Quantum vs classical mechanics, Born-Oppenheimer decoupling, ab initio Hartree-Fock, DFT, Gaussian basis sets, LCAO-MO theory (H2/NO), potential energy surfaces, and AI material screening.",
      "theoryNotes": "1. Computational Chemistry — The branch of chemistry that applies computer algorithms, numerical methods, and fundamental physical laws to calculate molecular geometries, energies, dipole moments, vibrational frequencies, and reaction mechanisms.\n\n2. Quantum Mechanics (QM) — The microscopic approach that explicitly models electrons and atomic nuclei by solving the quantum Schrödinger wave equation without empirical parameter fitting (includes Ab Initio Hartree-Fock and Density Functional Theory DFT). Accurately simulates bond formation, bond breaking, chemical reactions, charge transfer, and electronic spectra at computational scaling of O(N^3) to O(N^7).\n\n3. Classical Mechanics (Molecular Mechanics MM) — The macroscopic approach that treats atoms as classical Newtonian spheres (balls) interconnected by harmonic springs, completely omitting explicit quantum electrons. Solves Newton's second law F = ma using empirical force field equations (AMBER, CHARMM, GROMOS). Capable of simulating enormous biomolecular complexes, lipid bilayers, and polymers with millions of atoms across nanosecond-to-microsecond trajectories.\n\n4. Hybrid QM/MM Methods — A multi-scale modeling strategy that treats the active catalytic core or ligand binding pocket with high-level Quantum Mechanics while representing the surrounding bulk protein scaffold and solvent with computationally inexpensive Classical Molecular Mechanics.\n\n5. Schrödinger Wave Equation — The fundamental wave equation of non-relativistic quantum mechanics:\nĤ Ψ = E Ψ\nWhere Ĥ is the Hamiltonian energy operator (consisting of kinetic energy operators for nuclei and electrons plus Coulombic potential energy attraction and repulsion terms), Ψ is the molecular wavefunction, and E is the total eigenenergy of the system.\n\n6. Born-Oppenheimer Approximation — Fundamental simplifying approximation in quantum chemistry:\nBecause atomic nuclei are at least 1,836 times more massive than electrons (M_nucleus >> m_electron), nuclei move with negligible velocity compared to electrons. Electrons respond virtually instantaneously to any change in nuclear positions.\nBy fixing the nuclear coordinates (setting nuclear kinetic energy T_n = 0), the electronic Schrödinger equation decouples from nuclear motion:\nĤ_elec Ψ_elec = E_elec Ψ_elec\nSolving this electronic equation for systematic variations in nuclear coordinates generates the Potential Energy Surface (PES) on which the nuclei move.\n\n7. Hartree-Fock Self-Consistent Field (HF-SCF) Method — Ab initio quantum method representing the N-electron wavefunction as a single Slater determinant of one-electron spin-orbitals. Each electron experiences an average mean-field electrostatic potential created by all other electrons. Iteratively refined until the field becomes self-consistent; neglects instantaneous dynamic electron correlation.\n\n8. Density Functional Theory (DFT) — Hohenberg-Kohn and Kohn-Sham quantum approach proving that the ground-state properties and total energy of an electronic system are uniquely determined by the electron density distribution ρ(r) rather than the multi-dimensional 3N-variable wavefunction:\nE[ρ] = T_s[ρ] + V_ext[ρ] + J[ρ] + E_xc[ρ]\nWhere E_xc[ρ] is the exchange-correlation functional. Scales favorably as O(N^3), making it the primary workhorse for modeling molecules and solid-state materials.\n\n9. Gaussian Basis Sets — Mathematical functions used in linear combinations to build molecular orbitals (LCAO-MO: ψ_i = Σ c_μi φ_μ):\n- Minimal Basis Set (STO-3G): Employs a single basis function per core and valence atomic orbital, fitting each Slater-type orbital with 3 primitive Gaussian-type orbitals.\n- Split-Valence Basis Sets (6-31G, 6-311G): Inner core electrons are represented by 1 contraction of 6 primitives; valence electrons are split into two or three separate functions (e.g. 3 primitives + 1 primitive for 6-31G), giving the electron cloud flexibility to expand or contract.\n- Polarization Functions (* or d,p): Adds higher angular momentum functions (d-functions on heavy atoms C/N/O and p-functions on hydrogen atoms, e.g. 6-31G(d,p)) to allow orbital shapes to polarize along chemical bonds.\n- Diffuse Functions (+ or ++): Adds wide, radially diffuse Gaussian functions (e.g. 6-31+G(d,p)) essential for modeling lone pairs, anions, and weak non-covalent interactions.\n- Effective Core Potentials (ECP / LANL2DZ): Replaces computationally demanding non-valence core electrons of heavy transition elements with pseudopotentials, accounting for relativistic effects.\n\n10. Molecular Orbital Theory: LCAO Criteria & Diagrams —\n- 3 Mandatory LCAO Criteria: (1) Comparable orbital energy, (2) Substantial spatial overlap, (3) Identical orbital symmetry along the internuclear bonding axis.\n- Homonuclear H2: Combination of two 1s atomic orbitals forms bonding σ1s and antibonding σ*1s. Electron configuration: (σ1s)^2. Bond order = (2 - 0)/2 = 1.0. Diamagnetic.\n- Heteronuclear Nitric Oxide (NO): 11 valence electrons (N: 2s² 2p³; O: 2s² 2p⁴). Oxygen is more electronegative than nitrogen, so oxygen atomic orbitals lie lower in energy. Configuration: (σ2s)^2 (σ*2s)^2 (π2px)^2 (π2py)^2 (σ2pz)^2 (π*2px)^1. Bond order = (8 - 3)/2 = 2.5. Paramagnetic due to 1 unpaired electron in π*2px orbital. Ionization to NO+ removes the antibonding electron, increasing bond order to 3.0.\n\n11. Potential Energy Surfaces (PES) & Stationary Points — Multi-dimensional surface representing the total energy of a molecule as a function of nuclear coordinates:\n- Degrees of Freedom: Linear molecules have 3N - 5 vibrational degrees of freedom; Non-linear molecules have 3N - 6 vibrational degrees of freedom.\n- Gradient Vector: First derivative ∇E = 0 identifies stationary points.\n- Local / Global Minima: Stationary points where all eigenvalues of the Hessian second-derivative matrix are strictly positive (all vibrational frequencies are real). Represents stable reactants, intermediates, or products.\n- Transition State (TS): First-order saddle point where the Hessian matrix has EXACTLY ONE negative eigenvalue (corresponding to EXACTLY ONE imaginary vibrational frequency), with the eigenvector pointing along the minimum energy reaction coordinate.\n\n12. Molecular Electrostatic Potential (MEP) Surfaces — 3D color-coded map of the electrostatic potential V(r) mapped onto the total electron density isosurface:\n- Red (-V(r)): Region of high electron density and negative electrostatic potential (e.g. lone pair on Nitrogen in NH3), indicating nucleophilic sites preferred by electrophilic reagents.\n- Blue (+V(r)): Region of low electron density and positive electrostatic potential (e.g. hydrogen atoms in NH3), indicating electrophilic sites preferred by nucleophilic attack.\n\n13. AI & Machine Learning in Materials Discovery —\n- Machine-Learned Interatomic Potentials (MLIPs): Deep neural networks trained on high-level DFT quantum calculation databases that predict molecular energies and atomic forces in milliseconds rather than hours.\n- Applications: Rapid high-throughput screening of bandgaps, crystal structures, lithium-ion diffusion pathways in solid-state battery electrolytes, and solar cell perovskite compositions."
    }
  ]
};
