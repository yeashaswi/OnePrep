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
      "pdfUrl": "/pdfs/chemistry/Chemistry_MOD-1.pdf",
      "title": "Chemical Thermodynamics & Kinetics",
      "co": "CO: 1",
      "examScope": "CAT-1 & FAT",
      "weightage": "15-20 Marks in FAT",
      "status": "not_confident",
      "scope": "1. Thermodynamic Systems — Classified by mass and energy exchange with surroundings: Open systems exchange both matter and energy; Closed systems exchange energy but not matter; Isolated systems exchange neither matter nor energy (e.g. ideal vacuum dewar flask).\n\n2. Properties & State Functions — Intensive properties are independent of system size or mass (Temperature, Pressure, Density, Refractive index); Extensive properties scale directly with mass (Volume, Internal energy U, Enthalpy H, Heat capacity C). State functions depend solely on the current state (P, V, T, U, H, S, G); Path functions depend on the transformation route taken (Heat q, Work w).\n\n3. First Law of Thermodynamics — Energy cannot be created or destroyed: ΔU = q + w, where differential work done is dw = -P_ex dV. In a free expansion into vacuum (P_ex = 0), work done is strictly zero (w_vacuum = 0).\n\n4. Enthalpy & Mayer's Relation — Enthalpy is the total heat content H = U + PV. At constant pressure, q_P = ΔH; at constant volume, q_V = ΔU. For one mole of an ideal gas, differentiating H = U + RT with respect to T yields Mayer's proof: Cp - Cv = R.\n\n5. Adiabatic Process & Fire Extinguisher Effect — In a reversible adiabatic expansion (dq = 0), the system performs work at the expense of its own internal energy (ΔU = w < 0 => ΔT < 0), governed by PV^γ = C and TV^(γ-1) = C. Sudden release of high-pressure CO2 causes rapid adiabatic cooling, freezing into dry ice snow.\n\n6. Second Law & Carnot Engine — Formulated by Kelvin-Planck (no cyclic process converts absorbed heat completely into work) and Clausius (heat cannot spontaneously flow from cold to hot). The 4-stroke Carnot cycle (Isothermal expansion -> Adiabatic expansion -> Isothermal compression -> Adiabatic compression) yields maximum theoretical efficiency: η = 1 - (Tc / Th).\n\n7. Gibbs Free Energy & Spontaneity — Gibbs free energy G = H - TS measures net non-mechanical useful work. The Gibbs-Helmholtz equation governs reaction spontaneity at constant T and P: ΔG = ΔH - TΔS. Reactions are spontaneous when ΔG < 0, and reach equilibrium when ΔG = 0 at the crossover temperature Teq = ΔH / ΔS.\n\n8. Third Law of Thermodynamics — The entropy of a pure, perfectly crystalline substance approaches zero as absolute temperature approaches 0 Kelvin (lim_{T->0} S = 0), establishing an absolute baseline for standard entropies S°.\n\n9. Chemical Kinetics & Integrated Rate Laws — Rate = -d[A]/dt = k[A]^n.\n- Zero-Order: [A]t = [A]0 - kt, half-life t1/2 = [A]0 / 2k.\n- First-Order: ln([A]0 / [A]t) = kt or k = (2.303/t) log10([A]0 / [A]t), half-life t1/2 = 0.693 / k (independent of initial concentration).\n- Second-Order: 1/[A]t = 1/[A]0 + kt, half-life t1/2 = 1 / (k [A]0).\n\n10. Collision Theory & Arrhenius Equation — Reaction rate depends on collision frequency Z, an energy barrier fraction exp(-Ea / RT), and a steric orientation factor p. The Arrhenius equation k = A exp(-Ea / RT) gives the temperature dependence: ln(k2 / k1) = (Ea / R) × [(T2 - T1) / (T1 T2)].",
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
      "summary": "Fundamental principles of energy conversion, work derivations, heat capacities, Carnot cyclic efficiency, Gibbs free energy spontaneity criteria, and chemical reaction rates."
    },
    {
      "id": "bchy-m2",
      "moduleNum": 2,
      "pdfUrl": "/pdfs/chemistry/Chemistry_MOD-2.pdf",
      "title": "Energy Devices & Semiconductor Electrodes",
      "co": "CO: 2",
      "examScope": "CAT-1 & FAT",
      "weightage": "15-20 Marks in FAT",
      "status": "need_to_revise",
      "scope": "1. Electrochemical vs Electrolytic Cells — Galvanic/electrochemical cells convert spontaneous chemical energy into electricity (ΔG < 0, Ecell > 0, Anode is negative, LOAN rule); Electrolytic cells drive non-spontaneous reactions via an external power source (ΔG > 0, external E_ext > E°cell, Anode is positive).\n\n2. Salt Bridge Construction & 3 Functions — Inverted U-tube packed with agar-agar gel saturated with inert electrolytes of equal ionic mobilities (KCl, KNO3, or NH4NO3). Functions: (1) Completes the internal electric circuit, (2) Maintains electroneutrality in both half-cells, and (3) Eliminates liquid junction potential (Ej ≈ 0).\n\n3. Nernst Equation — Derived thermodynamically from the van 't Hoff reaction isotherm ΔG = ΔG° + RT ln Q. Substituting ΔG = -nFE gives the fundamental EMF equation at 298.15 K: Ecell = E°cell - (0.05916 / n) log10 Q.\n\n4. Industrial Electrolysis —\n- Downs Cell: Electrolysis of molten NaCl at ~600 °C (lowered by CaCl2 flux) with a central graphite anode and cylindrical steel cathode separated by a wire-gauze diaphragm, operating at >4.07 V to harvest pure metallic Na and dry Cl2 gas.\n- Water Splitting: Stoichiometric 2:1 H2:O2 electrolysis. Acidic mechanism uses Pt electrodes to evolve H2 at cathode (2H+ + 2e- -> H2) and O2 at anode (2H2O -> O2 + 4H+ + 4e-); Alkaline mechanism uses Ni electrodes with OH- migration.\n\n5. Semiconductor Electrodes & 3-Stage Silicon Growth —\n- Classification: Intrinsic Group IV (Si, Ge); Extrinsic n-type (Group 15 P donor, majority electrons) and p-type (Group 13 B acceptor, majority holes); Compound III-V (GaAs, InP, GaN) and II-VI (CdS, TiO2).\n- 3-Stage Silicon Purification: (1) Siemens carbothermic reduction of quartz followed by trichlorosilane distillation (HSiCl3 + H2 -> hyperpure poly-Si), (2) Zone refining for segregating impurities (segregation coefficient k < 1), and (3) Czochralski crystal growth pulling a single-crystal boule from molten Si at 1425 °C.\n\n6. Lithium-Ion Secondary Batteries (LIB) —\n- Chemistry: Anode is lithiated graphite (LixC6 on Cu foil); Cathode is layered Lithium Cobalt Oxide (Li1-xCoO2 on Al foil); Electrolyte is 1 M LiPF6 dissolved in non-aqueous ethylene carbonate (EC) + dimethyl carbonate (DMC).\n- Rocking-Chair Mechanism: During charge, Li+ de-intercalates from LiCoO2, migrates through electrolyte, and intercalates into graphite; reverse occurs during discharge. Cell EMF ≈ 3.7 V.\n- Solid Electrolyte Interphase (SEI): A passivating nanolayer formed during the first formation cycle on graphite that conducts Li+ but blocks electrons, preventing solvent decomposition.\n- Safety & Thermal Runaway: Caused by mechanical punctures, overcharging above 4.2 V, or internal micro-short circuits from Li dendrites, triggering exothermic cathode decomposition.\n\n7. Fuel Cells (PEMFC & SOFC) — Continuous electrochemical energy generators consuming externally supplied fuel.\n- Proton Exchange Membrane Fuel Cell (PEMFC): Operates at <80 °C with a hydrated Nafion polymer membrane conducting H+ ions and Pt-nanoparticle catalysts. Overall: 2H2 + O2 -> 2H2O (E° = 1.229 V).\n- Solid Oxide Fuel Cell (SOFC): Operates at 800–1000 °C using dense Yttria-Stabilized Zirconia (YSZ) ceramic conducting O2- vacancies. Tolerates syngas (H2 + CO) without Pt poisoning.\n\n8. Solar Energy Conversion (PV, PEC & DSSC) —\n- Silicon p-n Junction Photovoltaics: Absorption of sunlight creates electron-hole pairs separated by the built-in depletion electric field. Efficiency η = (Voc × Isc × FF) / Pin.\n- Dye-Sensitized Solar Cells (DSSC / Grätzel Cell): 5 components: FTO glass, mesoporous TiO2 photoanode coated with ruthenium dye sensitizer S, I-/I3- redox liquid electrolyte, and Pt counter-electrode. Operation cycle: Dye absorbs photon -> photo-injects electron into TiO2 CB -> oxidized dye S+ regenerated by 3I- -> triiodide I3- reduced back to 3I- at Pt cathode.",
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
      "summary": "Electrochemical thermodynamics, Nernst equation derivations, industrial electrolysis, modern Lithium-ion battery chemistry, fuel cell mechanisms, and solar energy conversion."
    },
    {
      "id": "bchy-m3",
      "moduleNum": 3,
      "pdfUrl": "/pdfs/chemistry/Chemistry_MOD-3.pdf",
      "title": "Functional Materials & Liquid Coolants",
      "co": "CO: 2",
      "examScope": "CAT-2 & FAT",
      "weightage": "15-20 Marks in FAT",
      "status": "yet_to_start",
      "scope": "1. Electrical Conductivity & Band Theory — Macroscopic Ohm's law V = IR; Microscopic Ohm's law current density J = σ E. By quantum band theory, atomic orbital overlap splits discrete levels into a Valence Band (VB) and Conduction Band (CB) separated by forbidden energy bandgap Eg.\n- Conductors: Overlapping VB and CB (Eg = 0 eV), high carrier density ~10^28 m^-3, positive temperature coefficient (PTC, α > 0).\n- Semiconductors: Narrow bandgap (Eg ≈ 0.5 to 3.0 eV), negative temperature coefficient (NTC, α < 0).\n- Insulators: Wide bandgap (Eg > 4.0 eV, e.g. diamond Eg = 5.5 eV).\n\n2. 6 Factors Governing Electrical Resistivity —\n- Electronic Configuration: High number of valence conduction electrons with low scattering (Cu: [Ar] 3d^10 4s^1).\n- Temperature: Phonon lattice vibrations increase scattering in metals (PTC), while thermal excitation generates carriers in semiconductors (NTC).\n- Alloying (Matthiessen's Rule): Total resistivity ρ = ρ_thermal + ρ_impurity + ρ_deformation. Alloying creates point defects that dramatically increase resistivity (e.g. Nichrome ρ ≈ 1.10×10^-6 Ω·m).\n- Cold Working: Mechanical strain creates dislocations that scatter conduction electrons.\n- Annealing: High-temperature heat treatment eliminates dislocations and restores conductivity.\n- Grain Boundaries: Misaligned crystal lattices scatter electron wavepackets.\n\n3. Low-Resistivity Conductors & Electrical Insulators —\n- Conductors: High-purity annealed Copper (100% IACS); Aluminum with high strength-to-weight ratio; Aluminum Conductor Steel Reinforced (ACSR) cables combining a high-tensile steel core (supports mechanical load) with concentric outer aluminum strands (carry >95% current via AC skin effect).\n- Insulators: Dielectric breakdown strength > 10 kV/mm. Classes: Gaseous (dry air, SF6), Liquid (mineral transformer oil, synthetic esters), Solid polymers (cross-linked polyethylene XLPE, PTFE Teflon), and Ceramics (porcelain, mica).\n\n4. Superconductors & Meissner Effect — Discovered by Kamerlingh Onnes (1911) in liquid mercury at 4.2 K. At critical temperature Tc, electrical resistance drops to exactly zero.\n- Meissner Effect: A superconductor actively expels all internal magnetic flux (B = 0) upon transition below Tc, behaving as a perfect diamagnet with magnetic susceptibility χ = -1.\n- Type-I Superconductors: Sharp transition at single critical field Hc (soft metals: Pb, Hg).\n- Type-II Superconductors: Two critical fields Hc1 and Hc2; between Hc1 and Hc2 lies a vortex/mixed Abrikosov state (Nb-Ti, Nb3Sn, YBCO).\n\n5. High-Tc YBCO Ceramic Superconductor — YBa2Cu3O7-δ (Yttrium Barium Copper Oxide) with critical temperature Tc = 92 K, operating comfortably above the boiling point of abundant, inexpensive liquid nitrogen (77 K).\n- Structure: Defect triple-perovskite structure featuring conducting Cu-O2 planes responsible for electron pairing (Cooper pairs) and 1D Cu-O chains acting as charge reservoirs.\n- Oxygen Stoichiometry: High-Tc superconductivity occurs strictly when 0.07 <= δ <= 0.15 (orthorhombic phase). If δ > 0.6, oxygen vacancy disorder transforms it into a non-superconducting tetragonal insulator.\n\n6. Magnetic Materials (5 Classes) — Magnetic dipoles arise from electron spin, orbital motion, and nuclear spin.\n- Diamagnetic: All electrons paired, χ < 0, slightly repelled by magnetic fields (Bi, Cu, H2O).\n- Paramagnetic: Unpaired electrons with random thermal orientations, χ > 0, spin-only moment μeff = √[n(n+2)] μB (Al, Pt, O2, Ti3+).\n- Ferromagnetic: Parallel spontaneous domain alignment via quantum exchange interactions, large positive χ, exhibits hysteresis (Fe, Co, Ni).\n- Antiferromagnetic: Equal anti-parallel aligned neighboring moments cancelling net magnetization (MnO, FeO, Cr).\n- Ferrimagnetic: Unequal anti-parallel sublattices yielding net spontaneous moment (Magnetite Fe3O4, Ba-ferrites).\n\n7. Magnetic Data Storage Technologies —\n- Hard Disk Drives (HDD): Thin-film media of Co-Cr-Pt alloy with perpendicular magnetic recording (PMR).\n- Magnetic Tape: Polyethylene terephthalate tape coated with needle-shaped ferromagnetic acicular γ-Fe2O3 or Ba-ferrite particles.\n- Magneto-Optical (MO) Discs: Amorphous Tb-Fe-Co rare-earth transition-metal alloy using Curie-point thermomagnetic writing and polar magneto-optical Kerr effect (MOKE) optical readout.\n- Magnetoresistive RAM (MRAM): Non-volatile memory cell using a Magnetic Tunnel Junction (MTJ) with two ferromagnets separated by a thin MgO dielectric tunnel barrier (~1 nm), reading data via Tunnel Magnetoresistance (TMR).\n\n8. Nanomaterials & Advanced Liquid Coolants —\n- Nanoscale Effects: Massive surface-to-volume ratio (S/V ∝ 1/r) and quantum confinement shift the bandgap. Gold nanoparticles exhibit vivid colors due to Surface Plasmon Resonance (SPR).\n- Synthesis Approaches: Top-Down (planetary ball milling, electron-beam lithography) vs. Bottom-Up (Stöber sol-gel hydrolysis of tetraethyl orthosilicate TEOS to generate monodisperse nano-SiO2).\n- Liquid Coolants for Electronics (>100 W/cm² heat flux): Deionized (DI) water with benzotriazole (BTA) copper corrosion inhibitor, Ethylene glycol/water (50:50) antifreeze, Potassium formate (HCOOK) brines, and non-conductive dielectric immersion Hydrofluoroethers (HFEs, 3M Novec 7100, zero ODP, low GWP).",
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
      "summary": "Band theory of electrical conduction, factors governing resistivity, intrinsic/extrinsic semiconductors, high-Tc YBCO superconductors, magnetic data storage, and advanced liquid coolants."
    },
    {
      "id": "bchy-m4",
      "moduleNum": 4,
      "pdfUrl": "/pdfs/chemistry/Chemistry_MOD-4.pdf",
      "title": "Spectroscopic & Diffraction Techniques",
      "co": "CO: 3",
      "examScope": "CAT-2 & FAT",
      "weightage": "15-20 Marks in FAT",
      "status": "strong",
      "scope": "1. Electromagnetic Radiation & Interactions — Photons characterized by E = hν = hc / λ = hc ν̃. 7 EM spectral regions: Gamma rays (nuclear), X-rays (inner shell core electrons), UV-Visible (valence electronic transitions), Infrared (molecular vibrations), Microwave (molecular rotations), and Radio waves (nuclear spin NMR).\n\n2. 4 Electronic Transitions in UV-Visible —\n- σ -> σ*: Requires high-energy vacuum UV (<180 nm); saturated hydrocarbons (e.g. methane, ethane).\n- n -> σ*: Non-bonding lone pair to antibonding σ*; alcohols, ethers, amines, alkyl halides (180–220 nm).\n- π -> π*: High-intensity allowed transition with large spatial overlap (molar absorptivity ε > 10,000 L/(mol·cm)); alkenes, alkynes, aromatic rings, conjugated polyenes.\n- n -> π*: Lowest energy transition in carbonyls/heteroatoms (>270 nm), but Laporte-forbidden due to orthogonal orbital symmetry, yielding weak intensity (ε ≈ 10 to 100 L/(mol·cm)).\n\n3. Chromophores, Auxochromes & 4 Spectral Shifts —\n- Chromophore: A covalently unsaturated functional group capable of absorbing UV-Vis radiation (e.g. C=C, C=O, -N=N-, -NO2).\n- Auxochrome: A saturated substituent bearing non-bonding lone pairs which does not absorb radiation itself, but shifts absorption to longer wavelengths and increases intensity when attached to a chromophore (e.g. -OH, -NH2, -OCH3, -Cl).\n- Bathochromic Shift (Red Shift): Displacement of absorption maximum λmax to longer wavelength (lower energy), caused by conjugation or auxochrome attachment.\n- Hypsochromic Shift (Blue Shift): Displacement of λmax to shorter wavelength (higher energy), caused by loss of conjugation or protonation (e.g. aniline in acidic medium protonates -NH2 into -NH3+, removing the lone pair conjugation and shifting λmax from 280 nm down to 265 nm).\n- Hyperchromic Effect: Increase in absorption intensity (higher molar absorptivity ε).\n- Hypochromic Effect: Decrease in absorption intensity (lower molar absorptivity ε).\n\n4. Beer-Lambert Law & Double-Beam UV-Vis Instrumentation —\n- Law: Absorbance A = log10(I0 / I) = -log10 T = ε L c, where ε is molar absorptivity in L/(mol·cm), L is path length in cm, and c is concentration in mol/L.\n- Instrumentation: Dual light sources (Deuterium arc lamp for 190–350 nm UV, Tungsten-halogen lamp for 350–900 nm visible), Diffraction grating monochromator, Rotating sector beam-chopper splitting light into sample and reference beams, Fused Quartz cuvettes (mandatory below 320 nm because glass/plastic absorbs UV), and Photomultiplier tube (PMT) detector.\n\n5. Analytical Applications of UV-Vis —\n- Quantitative Trace Analysis: Determining unknown ppm/ppb concentrations of transition metal complexes or active pharmaceutical ingredients.\n- Keto-Enol Tautomerism: In ethyl acetoacetate, keto tautomer exhibits weak n -> π* absorption at 275 nm (ε ≈ 16), while enol form exhibits intense conjugated π -> π* absorption at 245 nm (ε ≈ 18,000), allowing exact equilibrium ratio determination.\n- Cis-Trans Isomerism: Trans-stilbene is planar and fully conjugated (λmax = 295 nm, ε = 27,000); Cis-stilbene experiences steric hindrance forcing phenyl rings out of plane (λmax = 280 nm, ε = 13,500).\n\n6. Powder X-Ray Diffraction (Powder XRD) & Bragg's Law —\n- X-Ray Generation: High-voltage bombardment of Copper target in an X-ray tube produces continuous Bremsstrahlung (Duane-Hunt cutoff λmin = 12,400 / V) and characteristic Cu Kα radiation (λ = 1.5406 Å, filtered through Nickel foil).\n- Bragg's Law Proof: Constructive interference of X-rays scattered from parallel crystal lattice planes requires path difference CB + BD = 2 d_hkl sin θ = n λ. For cubic lattices, interplanar spacing is d_hkl = a / √(h² + k² + l²).\n- Powder Diffractometer: Bragg-Brentano θ-2θ geometry where sample rotates at angle θ while scintillation detector rotates at 2θ.\n\n7. Debye-Scherrer Equation for Nanocrystallite Sizing —\n- Formula: Average crystallite size D = (k λ) / (β cos θ), where shape factor k ≈ 0.9, λ is X-ray wavelength (0.15406 nm for Cu Kα), θ is the Bragg angle (strictly half the detector 2θ peak position), and β is the Full Width at Half Maximum (FWHM) in radians.\n- Radian Conversion Rule: β(rad) = β(deg) × (π / 180°). Peak broadening is inversely proportional to crystallite size (crystallites < 100 nm exhibit pronounced Scherrer broadening).",
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
      "summary": "Analytical light-matter interactions, UV-Visible spectroscopy, selection rules, auxochromic shifts, Beer-Lambert quantitative analysis, and Powder X-Ray Diffraction for crystallite sizing."
    },
    {
      "id": "bchy-m5",
      "moduleNum": 5,
      "pdfUrl": "/pdfs/chemistry/Chemistry_MOD-5.pdf",
      "title": "Computational Chemistry & AI Material Discovery",
      "co": "CO: 4",
      "examScope": "FAT Only",
      "weightage": "15-20 Marks in FAT",
      "status": "not_confident",
      "scope": "1. Computational Chemistry Classification & Hierarchy —\n- Quantum Mechanics (QM / Ab Initio & DFT): Solves the electronic Schrödinger equation explicitly for nuclei and electrons without empirical fitting. Scales from N^3 to N^7. Characterizes electronic structures, chemical bonding, optical spectra, and transition state barriers.\n- Classical Molecular Mechanics (MM / Molecular Dynamics MD): Replaces electrons and nuclei with classical point masses connected by harmonic springs (empirical force fields). Solves Newton's laws F = ma across hundreds of thousands of atoms and nanosecond time scales.\n- Hybrid QM/MM: Treats the active catalytic core or ligand binding pocket with high-level QM (DFT) and the surrounding bulk solvent or macromolecular protein scaffold with computationally inexpensive MM force fields.\n- 7 Merits Over Experiment: (1) Characterizes fleeting transition states (~10^-13 s), (2) Generates zero toxic, hazardous, or explosive chemical waste, (3) Explores extreme conditions (deep planetary mantles, hypersonic shockwaves), (4) Directly renders 3D Molecular Orbitals (MOs) and Molecular Electrostatic Potential (MEP) surfaces, (5) Decouples steric vs electronic effects, (6) High-throughput virtual screening of candidate materials, and (7) Resolves ambiguous experimental spectra.\n\n2. Born-Oppenheimer Approximation —\n- Principle: Protons and neutrons in atomic nuclei are at least 1,836× more massive than electrons (Mnucleus >= 1836 me). Consequently, nuclei move with negligible velocity compared to the rapid instantaneous response of electrons.\n- Mathematical Decoupling: Setting nuclear kinetic energy Tn = 0 decouples electronic motion from nuclear coordinates, generating an effective Potential Energy Surface E(R) = E_elec(R) + V_nn(R) on which nuclear vibrations and reactions take place.\n\n3. Electronic Structure Methods —\n- Hartree-Fock (HF): Mean-field approximation (~N^4 computational scaling) replacing electron-electron repulsion with an average field; completely neglects instantaneous dynamic electron correlation.\n- Density Functional Theory (DFT): Workhorse quantum method (~N^3 scaling) computing molecular ground-state energy from electron density ρ(r) via the Kohn-Sham theorems (e.g. B3LYP, M06-2X, PBE functionals).\n- Møller-Plesset Perturbation (MP2): Adds 2nd-order electron correlation (~N^5 scaling), essential for dispersion and van der Waals interactions.\n- Coupled-Cluster CCSD(T): The recognized gold standard of quantum chemistry (~N^7 scaling) delivering chemical accuracy (±1 kcal/mol).\n- CASSCF: Multi-configurational method essential for bond-breaking processes and biradicals.\n\n4. 6 Gaussian Basis Set Families — Mathematical basis functions expanded in primitive Gaussian-type orbitals (PGTOs) to represent atomic orbitals.\n- Minimal Basis (STO-3G): 1 Slater-type function per core and valence AO.\n- Split-Valence (6-31G, 6-311G): Inner core represented by 1 contraction of 6 PGTOs; valence AOs split into outer and inner components.\n- Polarized Basis Sets (* or d,p): Adds d-functions on heavy atoms (C, N, O) and p-functions on H (e.g. 6-31G(d,p)) to allow orbital shape distortion during chemical bonding.\n- Diffuse Functions (+ or ++): Incorporates large, radially extended Gaussian functions (e.g. 6-31+G(d,p)) essential for anions, Rydberg states, and lone pairs.\n- Correlation-Consistent (cc-pVDZ, cc-pVTZ): Systematic convergence toward the complete basis set limit.\n- Effective Core Potentials (ECP / LANL2DZ): Replaces non-valence core electrons of heavy transition metals with pseudopotentials while accounting for relativistic contractions.\n\n5. LCAO Molecular Orbital Theory: Homonuclear H2 vs Heteronuclear NO —\n- 3 Mandatory LCAO Criteria: (1) Comparable energies between combining atomic orbitals, (2) Substantial spatial overlap along the bonding axis, and (3) Identical symmetry w.r.t. the internuclear axis.\n- Homonuclear H2 (2 Valence Electrons): 1sA + 1sB -> σ1s (bonding) and 1sA - 1sB -> σ*1s (antibonding). Configuration: (σ1s)^2. Bond Order = 1/2(2 - 0) = 1.0. Diamagnetic.\n- Heteronuclear Nitric Oxide NO (11 Valence Electrons: N 2s²2p³ + O 2s²2p⁴):\n  • Electronegativity Asymmetry: Oxygen (χ = 3.44) is more electronegative than Nitrogen (χ = 3.04), placing oxygen 2s and 2p AOs at significantly lower energy levels.\n  • Orbital Polarization: Bonding MOs (σ2s, π2p, σ2p) are skewed toward Oxygen; Antibonding MOs (π*2p, σ*2p) are localized primarily on Nitrogen.\n  • Configuration: (σ2s)^2 (σ*2s)^2 (π2px)^2 (π2py)^2 (σ2pz)^2 (π*2px)^1.\n  • Bond Order = 1/2(8 - 3) = 2.5.\n  • Magnetic Behavior: Paramagnetic radical with 1 unpaired electron residing in the π*2px SOMO localized on Nitrogen. Ionization to nitrosonium NO+ removes this antibonding electron, strengthening the bond order to 3.0!\n\n6. Potential Energy Surfaces (PES) & Stationary Point Criteria —\n- 1D PEC vs Multi-D PES: Diatomic molecules possess 1 internal coordinate (r), forming a 1D Potential Energy Curve (harmonic parabola near equilibrium; anharmonic Morse potential V(r) = De[1 - exp(-a(r - re))]²). Polyatomic molecules with N atoms possess 3N - 6 (or 3N - 5) degrees of freedom, forming a Multi-D Potential Energy Surface.\n- Stationary Points (Gradient ∇E = 0):\n  • Local/Global Minima: All eigenvalues of the Hessian second-derivative matrix are strictly positive (Zero imaginary frequencies, representing stable reactants, intermediates, or products).\n  • Transition States (TS): First-order saddle point where the Hessian matrix possesses EXACTLY ONE negative eigenvalue (EXACTLY ONE imaginary frequency) pointing along the reaction coordinate.\n- Vibrational Degrees of Freedom: Linear molecules = 3N - 5 (e.g. CO2 has 4 modes); Non-linear molecules = 3N - 6 (e.g. H2O has 3 modes, NH3 has 6 modes, CH4 has 9 modes, Benzene C6H6 has 30 modes).\n\n7. Molecular Electrostatic Potential (MEP) & SN2 Reaction Profiles —\n- Ammonia MEP Surface: Plots electrostatic interaction energy on the electron density isosurface. Color-coded: Red (strongly negative, -V(r)) over the nitrogen lone pair identifies the nucleophilic site prone to electrophilic attack; Blue (strongly positive, +V(r)) over hydrogen atoms identifies electrophilic acidic sites.\n- SN2 Reaction Profile (Cl- + CH3Cl -> ClCH3 + Cl-):\n  • Gas Phase (Double-Well Profile): Electrostatic attraction between ion and dipole forms stable pre-reaction [Cl-...CH3Cl]- and post-reaction complexes, producing two potential energy wells separated by a central transition state barrier [Cl---CH3---Cl]- (D3h trigonal bipyramidal).\n  • Aqueous Solution (Unimodal Single Barrier): Water molecules form strong hydration cages around isolated Cl- ions (ΔHhyd ≈ -380 kJ/mol). Since charge is dispersed in the transition state, salvation stabilizes reactants far more than the transition state, eradicating the double-well and elevating the activation barrier by ~100 kJ/mol (slowing the reaction by a factor of 10^12 to 10^15!).\n\n8. AI & Machine Learning in Materials Discovery —\n- Traditional vs AI Workflow: Conventional DFT screen takes hours to days per unit cell; Machine-learned interatomic potentials (MLIPs trained on DFT databases) predict energies and forces in milliseconds, accelerating crystal structure prediction by 10,000×.\n- Target Discovery Applications: Screening bandgaps, dielectric constants, and lithium-ion diffusion pathways in solid-state electrolytes and perovskite photovoltaic materials.",
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
      "summary": "In silico molecular modeling, Born-Oppenheimer decoupling, LCAO Molecular Orbital theory for H2 and NO, Potential Energy Surfaces, vibrational modes, and AI screening of materials."
    }
  ]
};
