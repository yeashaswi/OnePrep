export const chemistryCourse = {
  "id": "BACHY101",
  "code": "BACHY105 / IACHY102",
  "title": "Applied Chemistry",
  "shortTitle": "Applied Chemistry",
  "category": "University Core",
  "credits": 4,
  "semester": "Fall Semester 2026-27",
  "color": "red",
  "badge": "Official Argon Master Textbooks (Modules 1-6)",
  "description": "Complete Argon Publication-Grade Textbooks, Derivations, Visual Summaries, Worked Numericals & VIT Official Question Bank Blueprints aligned 100% with VIT Course Syllabus.",
  "targetMarks": {
    "cat1": "50 Marks (Modules 1 & 2)",
    "cat2": "50 Marks (Modules 3 & 4)",
    "fat": "100 Marks (All 6 Modules: 1-5 + Module 6 Contemporary AI & Materials)"
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
      "scope": "Sections M1S1–M1S8: Thermodynamic systems (open, closed, isolated), intensive vs extensive, state vs path functions, Zeroth Law of thermodynamics, First Law (ΔU = q + w, dw = -P_ex dV), Enthalpy H = U + PV, Mayer's relation derivation (Cp - Cv = R), Reversible & irreversible adiabatic expansions (TV^(γ-1) = C, PV^γ = C), Second Law of Thermodynamics (Kelvin-Planck & Clausius statements, Clausius inequality), General ideal gas entropy formulas, 4-stroke Carnot cycle efficiency (η = 1 - Tc/Th), Helmholtz work function (A = U - TS) & Gibbs free energy (G = H - TS), Gibbs-Helmholtz equation & 4-quadrant spontaneity table, Third Law (S(0 K) = 0), Chemical kinetics: rate laws, order vs molecularity, integrated rate laws (0th, 1st, pseudo-1st, 2nd order), half-life scaling rules, Collision theory & steric orientation, Arrhenius equation & two-temperature form, 3 classes of catalysts (homogeneous, heterogeneous, enzyme lock-and-key), and 10 Solved CAT-1/FAT numericals.",
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
        {
          "id": "bchy-t1-1",
          "title": "M1S1: Thermodynamic Systems, Zeroth & First Law",
          "theory": "Open vs Closed vs Isolated systems. Intensive vs extensive properties. State vs path functions. Zeroth Law thermometry basis. First Law ΔU = q + w and sign conventions."
        },
        {
          "id": "bchy-t1-2",
          "title": "M1S2: Enthalpy, Mayer's Relation & All Four P-V Processes",
          "theory": "Isochoric heat qV = ΔU. Isobaric enthalpy qP = ΔH = ΔU + PΔV. 3-line derivation of Cp - Cv = R. Reversible and irreversible adiabatic expansions (TV^(γ-1) = C)."
        },
        {
          "id": "bchy-t1-3",
          "title": "M1S3: Second Law, Entropy & 4-Stroke Carnot Cycle",
          "theory": "Kelvin-Planck and Clausius statements. Entropy Clausius inequality dS >= dq/T. Ideal gas entropy formulas. 4-stroke Carnot cycle (AB isothermal exp, BC adiabatic exp, CD isothermal comp, DA adiabatic comp) and η = 1 - Tc/Th."
        },
        {
          "id": "bchy-t1-4",
          "title": "M1S4: Free Energy (ΔA, ΔG), Spontaneity Table & Third Law",
          "theory": "Helmholtz work function A = U - TS. Gibbs free energy G = H - TS. Gibbs-Helmholtz equation. 4-quadrant spontaneity table (combustion, Haber synthesis, ice melting, endothermic non-spontaneous). Third Law S(0 K) = 0."
        },
        {
          "id": "bchy-t1-5",
          "title": "M1S5: Chemical Kinetics: Rate Laws & Integrated Equations",
          "theory": "Differential vs integrated rate laws for 0th, 1st, pseudo-1st, and 2nd order. Linear plot slopes (-k vs +k). General half-life scaling rule t1/2 ∝ [A]0^(1-n)."
        },
        {
          "id": "bchy-t1-6",
          "title": "M1S6: Collision Theory, Arrhenius Equation & Catalysis",
          "theory": "Two criteria: E >= Ea and steric factor p. Arrhenius k = A exp(-Ea/RT). Homogeneous (mineral acid, Cl2), heterogeneous (Fe in Haber, V2O5 in Contact), and enzyme (Michaelis-Menten) catalysis."
        }
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
      ]
    },
    {
      "id": "bchy-m2",
      "moduleNum": 2,
      "pdfUrl": "/pdfs/chemistry/Chemistry_MOD-2.pdf",
      "title": "Energy Devices",
      "co": "CO: 2",
      "examScope": "CAT-1 & FAT",
      "weightage": "15-20 Marks in FAT",
      "status": "need_to_revise",
      "scope": "Sections M2S1–M2S7: Electrochemical vs Electrolytic cells (8-point comparison, LOAN rule, Daniell cell E° = 1.10 V), Salt bridge construction (KCl/agar-agar) and 3 functions, effect of opposing external voltage Eext, Nernst equation thermodynamic derivation from van 't Hoff isotherm (Ecell = E°cell - (0.05916/n) log10 Q), Downs cell molten NaCl electrolysis (>4.07 V) vs Chlor-alkali aqueous electrolysis, Water splitting stoichiometry (2:1 H2:O2, acidic vs alkaline mechanisms), Semiconductor electrode materials (Group IV intrinsic Si/Ge, extrinsic n-type P donor & p-type B acceptor, compound III-V GaAs/GaN & II-VI CdS/TiO2, polymorphs c-Si/mc-Si/a-Si:H), 3-stage silicon purification (Siemens carbothermic reduction & trichlorosilane distillation -> Zone refining -> Czochralski 1425 °C single-crystal pulling), Battery classification (primary, secondary, reserve), Lithium-ion batteries (3 reasons Li is ideal, Graphite/Cu anode, LiCoO2/Al cathode, 1 M LiPF6 in EC+DMC, SEI layer, rocking-chair charge/discharge equations, 7 advantages, 3 thermal runaway causes, 6-variant master table: LCO, LMO, LFP, NMC, NCA, LTO), Fuel cells (Primary vs secondary vs fuel cells, 8 fuel cell families, PEMFC Nafion mobile H+ at <80 °C, SOFC dense YSZ O2- vacancy transport at 800-1000 °C, dual-fuel syngas oxidation), Solar energy conversion (Silicon p-n junction PV built-in depletion field, Photoelectrochemical PEC liquid-junction LJSC & PES cells, Grätzel Dye-Sensitized Solar Cell DSSC 5 components and 4-step I-/I3- cycle, 10-point comparison table), and Solved Numericals 2.1–2.4 + Official Question Bank Blueprints Q1–Q14.",
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
        {
          "id": "bchy-t2-1",
          "title": "M2S1: Electrochemical vs. Electrolytic Cells & Salt Bridge",
          "theory": "8-point comparison table. Daniell cell Zn/Cu reactions. 3 salt bridge functions: complete internal circuit, maintain electroneutrality, eliminate liquid junction potential Ej. Opposing voltage Eext behavior."
        },
        {
          "id": "bchy-t2-2",
          "title": "M2S2: Nernst Equation & Industrial Electrolysis",
          "theory": "Step-by-step thermodynamic derivation from van 't Hoff isotherm. Downs cell molten NaCl electrolysis (>4.07 V) with steel gauze diaphragm. Acidic and alkaline water splitting mechanisms (2:1 H2:O2)."
        },
        {
          "id": "bchy-t2-3",
          "title": "M2S3: Semiconductor Electrodes & 3-Stage Silicon Growth",
          "theory": "Intrinsic Group IV (Si/Ge) vs Extrinsic n-type (P donor) and p-type (B acceptor). III-V and II-VI compound semiconductors. Polymorphs c-Si, mc-Si, a-Si:H. 3-stage purification: Siemens distillation -> Zone refining (k < 1) -> Czochralski 1425 °C boule pulling."
        },
        {
          "id": "bchy-t2-4",
          "title": "M2S4: Lithium-Ion Secondary Batteries (LIB)",
          "theory": "3 reasons why Li is ideal. Architecture: Graphite/Cu anode, LiCoO2/Al cathode, LiPF6 in EC+DMC, SEI passivating layer. Rocking-chair equations. 7 advantages. 3 causes of thermal runaway. 6 cathode/anode variants (LCO, LMO, LFP, NMC, NCA, LTO)."
        },
        {
          "id": "bchy-t2-5",
          "title": "M2S5: Fuel Cells: PEMFC & SOFC",
          "theory": "Primary vs secondary vs fuel cells. 8 fuel cell families. Low-temp PEMFC (Nafion membrane, Pt catalyst, CO poisoning, water management). High-temp SOFC (dense YSZ ceramic, O2- vacancy hopping, Ni-YSZ anode, dual-fuel syngas oxidation)."
        },
        {
          "id": "bchy-t2-6",
          "title": "M2S6: Solar Conversion: Silicon p-n PV, PEC & Grätzel DSSC",
          "theory": "Silicon p-n junction built-in depletion field. Photoelectrochemical liquid junction (LJSC) and photoelectrosynthetic (PES) cells. Dye-sensitized solar cell (DSSC): 5 components and 4-step operating cycle. 10-point comparison table."
        }
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
      ]
    },
    {
      "id": "bchy-m3",
      "moduleNum": 3,
      "pdfUrl": "/pdfs/chemistry/Chemistry_MOD-3.pdf",
      "title": "Functional Materials and Coolants",
      "co": "CO: 2",
      "examScope": "CAT-2 & FAT",
      "weightage": "15-20 Marks in FAT",
      "status": "yet_to_start",
      "scope": "Sections M3S1–M3S8: Ohm's law (macroscopic V = IR, microscopic J = σE), Resistance vs Resistivity (extrinsic geometry vs intrinsic material property), 6 Governing factors of electrical resistivity (electronic structure, temperature PTC/NTC, Matthiessen's rule alloying Cu vs Nichrome, cold working dislocations, annealing heat treatment, grain boundaries), Energy band theory of solids (Pauli exclusion splitting, VB, CB, bandgap Eg), 10-point comparison table of Conductors vs Semiconductors vs Insulators, Low-resistivity conductors (Copper [Ar]3d10 4s1 FCC structure, Hard-drawn vs Annealed copper, Aluminum & ACSR concentric cable design), 5 Classes of electrical insulators (dry air, SF6, mineral oil, XLPE/PTFE, porcelain/mica), Complete typewise semiconductors (Intrinsic Group IV, Extrinsic n-type vs p-type, Compound III-V GaAs/InP/GaN & II-VI CdS/ZnO, 8-point comparison table), Superconductors (Kamerlingh Onnes Hg at 4.2 K, Cooper pairs BCS theory, Meissner effect B = 0, χ = -1, Type-I soft vs Type-II hard mixed Abrikosov state, High-Tc ceramic YBCO YBa2Cu3O7-δ Tc = 92 K solid-state synthesis from Y2O3+BaCO3+CuO, triple-layered perovskite CuO2 planes & Cu-O chains, oxygen stoichiometry δ = 0.07-0.15, 6 engineering applications MRI/Maglev/SQUIDs), Magnetic materials (orbital, spin, and nuclear origins, spin-only formula μeff = √[n(n+2)] μB, 5 magnetic classes: Dia, Para, Ferro, Antiferro, Ferrimagnetic), Soft vs Hard magnets, 4 Magnetic data storage technologies (HDD Co-Cr-Pt, Tape γ-Fe2O3, Magneto-Optical MO discs Curie-point writing & Kerr effect readout, MRAM MTJ with MgO barrier and TMR), Nanomaterials (exponential S/V ratio, quantum confinement & SPR in gold nanoparticles and CdSe QDs, Top-down planetary ball milling vs Bottom-up Stöber Sol-Gel synthesis of nano-SiO2 from TEOS), Liquid coolants for high-power electronics (100-1000 W/cm² heat flux, 6 mandatory criteria, 4 classes: Aqueous DI water + BTA inhibitor, Glycol-water antifreeze 50:50, Potassium formate HCOOK brines, Dielectric fluorocarbons PFCs vs zero-ODP HFEs Novec 7100), and Solved Numericals 3.1–3.3 + Official Question Bank Blueprints Q1–Q9.",
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
        {
          "id": "bchy-t3-1",
          "title": "M3S1: Ohm's Law, Resistance vs Resistivity & 6 Factors",
          "theory": "Macroscopic vs microscopic Ohm's law. Extrinsic resistance vs intrinsic resistivity. 6 governing factors: nature/electronic configuration, temperature PTC/NTC, Matthiessen's rule alloying, cold working, annealing, mechanical stress."
        },
        {
          "id": "bchy-t3-2",
          "title": "M3S2: Energy Band Theory & Material Classification",
          "theory": "Pauli exclusion band splitting. Valence band, conduction band, forbidden bandgap Eg. 10-point comparison table of Conductors vs Semiconductors vs Insulators."
        },
        {
          "id": "bchy-t3-3",
          "title": "M3S3: Low-Resistivity Conductors & Electrical Insulators",
          "theory": "Why Cu is exceptional ([Ar]3d10 4s1, FCC, 401 W/(m·K)). Hard-drawn vs annealed Cu. Aluminum and ACSR cable architecture. 5 classes of electrical insulators (dry air, SF6, mineral oil, XLPE/PTFE, porcelain/mica)."
        },
        {
          "id": "bchy-t3-4",
          "title": "M3S4: Semiconductors: Typewise Classification & Lattices",
          "theory": "Type 1: Intrinsic Group IV (Si/Ge). Type 2: Extrinsic n-type (P donor, Ed) and p-type (B acceptor, Ea). Type 3: Compound III-V (GaAs, InP, GaN) and II-VI (CdS, ZnO). 8-point comparison table."
        },
        {
          "id": "bchy-t3-5",
          "title": "M3S5: Superconductors: Meissner Effect & High-Tc YBCO",
          "theory": "Kamerlingh Onnes (1911) zero DC resistivity. Cooper pairs BCS theory. Meissner effect B = 0 => χ = -1. Type-I vs Type-II mixed state. YBCO YBa2Cu3O7-δ 1:2:3 perovskite, solid-state synthesis, oxygen stoichiometry δ = 0.07-0.15, 6 applications."
        },
        {
          "id": "bchy-t3-6",
          "title": "M3S6: Magnetic Materials & 4 Data Storage Technologies",
          "theory": "Orbital, spin, and nuclear magnetic dipoles. Spin-only formula μeff = √[n(n+2)] μB. 5 magnetic classes (Dia, Para, Ferro, Antiferro, Ferri). Soft vs hard magnets. 4 storage systems: HDD Co-Cr-Pt, Tape, MO discs Curie-point writing, MRAM MTJ."
        },
        {
          "id": "bchy-t3-7",
          "title": "M3S7: Nanomaterials & Advanced Liquid Coolants",
          "theory": "Exponential S/V ratio and quantum confinement. Surface plasmon resonance in gold and CdSe QDs. Top-down planetary ball milling vs Bottom-up Stöber sol-gel TEOS synthesis. Liquid cooling 1000 W/cm²: DI+BTA, glycols, brines, dielectric HFEs."
        }
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
      ]
    },
    {
      "id": "bchy-m4",
      "moduleNum": 4,
      "pdfUrl": "/pdfs/chemistry/Chemistry_MOD-4.pdf",
      "title": "Spectroscopic and Diffraction Techniques",
      "co": "CO: 3",
      "examScope": "CAT-2 & FAT",
      "weightage": "15-20 Marks in FAT",
      "status": "strong",
      "scope": "Sections M4S1–M4S6: Electromagnetic radiation and 7-region EM spectrum, 6 ways EM radiation interacts with matter, Atomic line spectroscopy vs Molecular broad band spectroscopy, Space exploration spectrometers: NASA Mars Exploration Rovers (Mini-TES, Mössbauer, APXS) & ISRO Chandrayaan-3 Lunar South Pole Mission (LIBS laser plasma breakdown on Pragyan Rover discovering Sulfur, APXS, ChaSTE, ILSA, RAMBHA-LP, SHAPE), UV-Visible spectroscopy: 4 electronic transitions (σ->σ*, n->σ*, π->π*, n->π*), strict energy order and selection rules (spin rule ΔS = 0, Laporte/spatial overlap rule: why π->π* is intense and n->π* is weak), Chromophores vs Auxochromes, 4 Spectral shifts: Bathochromic (red), Hypsochromic (blue), Hyperchromic (↑ε), Hypochromic (↓ε), Official slide case 1: Aniline acid blue shift (280 nm -> 265 nm), Case 2: Pyridine vs 2-methylpyridine, Complementary color wheel and visible dyes, Beer-Lambert law (A = ε L c) and deviations from linearity, UV-Vis spectrophotometer instrumentation (Deuterium UV + Tungsten visible lamp, monochromator grating, fused quartz cuvettes mandatory below 320 nm, double-beam chopper advantages), 5 Key analytical applications (trace quantitative analysis, keto-enol tautomerism in ethyl acetoacetate: keto 275 nm ε ≈ 16 vs enol 245 nm ε ≈ 18,000, cis vs trans stilbene, Vitamin A1 vs A2, chemical kinetics), X-Ray generation (continuous Bremsstrahlung λmin = 12,400/V + characteristic Cu Kα 1.5406 Å and Kβ 1.392 Å, Ni β-filter), Crystalline vs Amorphous SiO2 (quartz vs silica glass halo), Bragg's law step-by-step geometric derivation (2 d_hkl sin θ = n λ, 5-mark proof), θ-2θ Bragg-Brentano powder diffractometer, Microstructural hierarchy (Unit cell vs Crystallite vs Grain vs Particle), Debye-Scherrer equation for nanocrystallite size (D = (k λ) / (β cos θ) with mandatory FWHM radian conversion), and Solved Numericals 4.1–4.3 + Official Question Bank Blueprints Q1–Q5.",
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
        {
          "id": "bchy-t4-1",
          "title": "M4S1: EM Spectrum & Space Exploration Spectrometers",
          "theory": "7-region EM spectrum. 6 ways EM interacts with matter. Atomic line vs Molecular band spectra. NASA Mars Rovers (Mini-TES, Mössbauer, APXS) & ISRO Chandrayaan-3 Pragyan Rover LIBS detecting Sulfur on lunar south pole."
        },
        {
          "id": "bchy-t4-2",
          "title": "M4S2: UV-Vis: 4 Transitions, Selection Rules & Shifts",
          "theory": "Strict energy order: σ->σ* > n->σ* ≈ π->π* > n->π*. Selection rules: spin ΔS = 0 and Laporte spatial overlap. Chromophore vs auxochrome. 4 shifts: bathochromic, hypsochromic, hyperchromic, hypochromic. Aniline acid shift. Color wheel."
        },
        {
          "id": "bchy-t4-3",
          "title": "M4S3: Beer-Lambert Law, Instrumentation & Applications",
          "theory": "A = log(I0/I) = ε L c. Limitations and deviations. Double-beam spectrophotometer chopper optical layout. Fused quartz cuvette rule. 5 applications: trace analysis, keto-enol tautomerism in ethyl acetoacetate, cis/trans stilbene."
        },
        {
          "id": "bchy-t4-4",
          "title": "M4S4: X-Ray Generation, Crystalline Order & Bragg's Law",
          "theory": "X-ray tube Bremsstrahlung continuous vs characteristic Cu Kα (1.5406 Å) lines. Crystalline quartz vs amorphous silica halo. Step-by-step 5-mark geometric proof of Bragg's law 2d sin θ = nλ."
        },
        {
          "id": "bchy-t4-5",
          "title": "M4S5: Powder Diffractometer & Debye-Scherrer Equation",
          "theory": "θ-2θ Bragg-Brentano goniometer. Hierarchy: unit cell, crystallite, grain, particle. Debye-Scherrer equation D = (kλ)/(β cos θ). Strengths and limitations of powder XRD."
        }
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
      ]
    },
    {
      "id": "bchy-m5",
      "moduleNum": 5,
      "pdfUrl": "/pdfs/chemistry/Chemistry_MOD-5_6.pdf",
      "title": "Introduction to Computational Chemistry",
      "co": "CO: 4",
      "examScope": "FAT Only",
      "weightage": "15-20 Marks in FAT",
      "status": "not_confident",
      "scope": "Sections M5S1–M5S4: Classification of computational chemistry (Quantum Mechanics QM vs Classical Mechanics MM/MD vs Hybrid QM/MM), 7 Merits over experiment (characterizes fleeting transition states ~10^-13 s, zero chemical waste, extreme conditions, visualizes MOs/MEP, screens thousands of candidates), Time-Dependent vs Time-Independent Schrödinger equation (TDSE vs TISE), Born-Oppenheimer approximation (Mnucleus >= 1836 me decouples nuclear and electronic motion, generating PES E(R)), Electronic structure methods (Hartree-Fock HF ~N^4 mean field, Density Functional Theory DFT ~N^3 workhorse B3LYP/M06-2X, MP2 ~N^5, CI, CCSD(T) ~N^7 gold standard, CASSCF multi-reference), 6 Basis set families (Minimal STO-3G, Split-valence 6-31G/6-311G, Polarization * or d,p, Diffuse + or ++, Correlation-consistent Dunning cc-pVDZ, Effective Core Potential ECP LANL2DZ), Atomic orbitals & 3 LCAO criteria (comparable energy, spatial overlap, identical symmetry), Homonuclear H2 (BO = 1.0, diamagnetic) vs Heteronuclear NO (11 valence e-, oxygen 2s/2p lower in energy, polarized MOs, BO = 2.5, paramagnetic radical with 1 unpaired electron in π*2p SOMO), Potential Energy Curves (1D PEC) vs Potential Energy Surfaces (Multi-D PES 3N-6 / 3N-5), Harmonic vs Anharmonic Morse potential (De = D0 + ZPE), PES stationary points criteria (Gradient g = ∇E = 0; Minima have 0 imaginary frequencies; Transition States have EXACTLY 1 imaginary frequency), Ozone O3 PES (open C2v 120.9° vs cyclic D3h 60° iso-ozone) & Water H2O PES, Molecular Electrostatic Potential (MEP) of NH3 (Red negative lone-pair electrophilic attack site vs Blue positive H atoms), 4-Step geometry optimization loop (Z-matrix, SCF energy gradient F = -∂E/∂R, convergence criteria, Newton-Raphson/BFGS coordinate updates), Vibrational normal mode counts (H2O: 3, CO2: 4, NH3: 6, CH4: 9, C6H6: 30), 5-Step reaction mechanism protocol, SN2 reaction profile Cl- + CH3Cl -> ClCH3 + Cl- (Gas-phase double-well with stable ion-dipole complex vs Aqueous solution unimodal single barrier), and Official Model Question Bank Q1–Q5.",
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
        {
          "id": "bchy-t5-1",
          "title": "M5S1: Computational Chemistry Hierarchy & Methods",
          "theory": "QM vs Classical MM/MD vs Hybrid QM/MM. 7 merits over experiment. TDSE vs TISE. Born-Oppenheimer approximation. HF, DFT (B3LYP), MP2, CI, CCSD(T), CASSCF. 6 basis set families: STO-3G, 6-31G, 6-31G(d,p), 6-31+G(d,p), cc-pVDZ, LANL2DZ."
        },
        {
          "id": "bchy-t5-2",
          "title": "M5S2: Atomic Orbitals & LCAO-MO Theory (H2 vs NO)",
          "theory": "3 LCAO rules: comparable energy, spatial overlap, identical symmetry. Bonding vs antibonding. Homonuclear H2 (BO = 1.0, diamagnetic). Heteronuclear NO (11 valence e-, oxygen lower, polarized MOs, BO = 2.5, paramagnetic radical)."
        },
        {
          "id": "bchy-t5-3",
          "title": "M5S3: Potential Energy Curves (PEC) vs Surfaces (PES)",
          "theory": "1D PEC (H2, HCl) vs Multi-D PES (Ozone open C2v vs cyclic D3h, Water H2O). Harmonic parabola vs Anharmonic Morse potential. Stationary points: Minima (0 imag freq) vs Transition States (1 imag freq)."
        },
        {
          "id": "bchy-t5-4",
          "title": "M5S4: MEP Maps, Geometry Optimization & SN2 Profiles",
          "theory": "MEP surface of NH3 (Red lone pair cap, Blue H atoms). 4-step geometry optimization loop. Vibrational modes 3N-6 / 3N-5. 5-step mechanism protocol. Cl- + CH3Cl gas-phase double-well vs aqueous unimodal profile."
        }
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
      ]
    },
    {
      "id": "bchy-m6",
      "moduleNum": 6,
      "pdfUrl": "/pdfs/chemistry/Chemistry_MOD-5_6.pdf",
      "title": "Contemporary Topics: AI in Material Discovery",
      "co": "CO: 2",
      "examScope": "FAT Only",
      "weightage": "5-10 Marks in FAT",
      "status": "strong",
      "scope": "Sections M5S5–M5S6: Why combine DFT with AI / Machine Learning (10^6× speedup, screening millions of candidate crystals in milliseconds), 8 Target semiconductor properties predicted by AI (bandgap Eg direct vs indirect, thermodynamic stability Ehull & ΔHf, carrier effective masses m*e/m*h and mobilities, dielectric constant & breakdown field, optical absorption α(ω), dopability & defect tolerance, lattice thermal conductivity κL, elastic moduli), 6-Stage AI High-Throughput Discovery Workflow (Stage 1 Data curation from Materials Project/OQMD >150,000 compounds, Stage 2 Featurization into Magpie composition vectors and 3D crystal graphs, Stage 3 ML training of GNNs CGCNN/MEGNet/ALIGNN, Stage 4 High-throughput screening & inverse design filtering 10^6 compositions down to top 10-50 candidates, Stage 5 DFT verification with HSE06 hybrid functionals and phonon calculations, Stage 6 Robotic synthesis and active learning feedback loop), Molecular Electrostatic Potential (MEP) of NH3 (Red electrophilic lone pair cap vs Blue nucleophilic H atoms), Gas-phase vs Aqueous solution SN2 reaction profiles (Cl- + CH3Cl double-well vs unimodal single barrier), and Official Model Question Bank Q6 & Q7.",
      "blueprint": {
        "marksTotal": "5 to 10 Marks in FAT",
        "questionTypes": [
          {
            "type": "6-Stage AI Semiconductor Discovery Pipeline (10 Marks)",
            "desc": "Data curation, crystal graph featurization, GNN training, high-throughput screening, hybrid DFT validation, and robotic synthesis loop."
          },
          {
            "type": "MEP Surface & SN2 Reaction Profiles (10 Marks)",
            "desc": "Ammonia MEP color interpretation and why SN2 reactions exhibit a double-well profile in gas phase but a high single unimodal barrier in water."
          }
        ]
      },
      "formulaSheet": [
        {
          "name": "AI Computational Speedup",
          "formula": "\\text{Speedup} \\approx 10^6\\times \\quad (\\text{Milliseconds per structure vs. hours/days in DFT})",
          "note": "Enables screening 10^6 hypothetical compositions"
        },
        {
          "name": "Target Semiconductor Filter Criteria",
          "formula": "E_{\\text{hull}} < 25\\text{ meV/atom}, \\quad E_g = 1.3 - 1.5\\text{ eV (direct bandgap)}",
          "note": "Non-toxic, earth-abundant elements"
        },
        {
          "name": "Crystal Graph Representation",
          "formula": "\\mathcal{G} = (\\mathcal{V}, \\mathcal{E}), \\quad \\mathcal{V} = \\text{Atoms (Nodes)}, \\quad \\mathcal{E} = \\text{Chemical Bonds (Edges)}",
          "note": "Used in CGCNN, MEGNet, ALIGNN"
        }
      ],
      "examInsights": [
        {
          "title": "Why DFT Alone Fails for Mega-Screening",
          "desc": "First-principles DFT scales as O(N^3) to O(N^4), taking hours to days per unit cell. AI Graph Neural Networks approximate the DFT energy-force surface in milliseconds, allowing researchers to evaluate millions of solar cell and battery candidates in days."
        },
        {
          "title": "Active Learning Feedback Loop (Stage 6)",
          "desc": "In modern autonomous materials discovery, robotic synthesis platforms synthesize the top ML candidate hits. Experimental performance data is immediately fed back into the training set to iteratively improve model prediction accuracy."
        }
      ],
      "topics": [
        {
          "id": "bchy-t6-1",
          "title": "M5S5: AI & Machine Learning in Semiconductor Discovery",
          "theory": "Why combine DFT with AI. 8 target semiconductor properties. 6-stage high-throughput workflow: data curation -> crystal graph featurization -> GNN training -> high-throughput screening -> hybrid DFT verification -> robotic synthesis."
        },
        {
          "id": "bchy-t6-2",
          "title": "M5S6: Solved Model Questions Q6 & Q7",
          "theory": "NH3 MEP color mapping (Red negative, Blue positive). Gas phase double-well vs solution unimodal SN2 profiles. Complete exam blueprint for AI materials screening."
        }
      ],
      "pyqs": [
        {
          "id": "bchy-q6-1",
          "exam": "Official VIT Model Q6 & Q7 — NH3 MEP Map, SN2 Profile & AI Discovery — 10 Marks",
          "marks": "10 Marks",
          "question": "(a) Explain the Molecular Electrostatic Potential (MEP) surface of NH3 and its color scale.\n(b) Compare the potential energy profile of the bimolecular nucleophilic substitution reaction Cl- + CH3Cl -> ClCH3 + Cl- in the gas phase versus aqueous solution.\n(c) Describe the 6-stage AI/ML + DFT workflow for discovering new semiconductors.",
          "solution": "Part (a) MEP Surface of Ammonia (NH3):\n1. Definition: MEP V(r) maps the electrostatic interaction energy between a molecule's charge distribution (nuclei + electron density) and a unit positive test charge (+1e) projected onto an electron density isosurface.\n2. Color Scale: Red (Most Negative V < 0, electron-rich, electrophilic attack / H-bond acceptor site) < Green (Neutral V ≈ 0) < Blue (Most Positive V > 0, electron-deficient, nucleophilic attack / H-bond donor site).\n3. Ammonia Features: Intense Red cap centered over the Nitrogen lone pair (site of basic protonation) and Blue positive regions capping the three δ+ Hydrogen atoms.\n\nPart (b) Gas Phase vs. Aqueous Solution SN2 Reaction Profiles:\n1. Gas Phase (Double-Well Profile): As bare Cl- approaches CH3Cl in vacuum, strong ion-dipole attraction forms a stable pre-reaction complex [Cl-···CH3Cl] (energy minimum below reactants). It then crosses the central pentacoordinate trigonal-bipyramidal transition state [Cl···CH3···Cl]-‡ and falls into a post-reaction complex before separating. This creates a symmetric Double-Well with a low central barrier.\n2. Aqueous Solution (Unimodal Single Barrier): Water strongly solvates the compact charge of free Cl- via hydrogen bonding much more effectively than the charge-dispersed [Cl···CH3···Cl]-‡ transition state. Desolvating Cl- requires significant energy, abolishing the ion-dipole wells and creating a single, very high unimodal activation barrier (ΔG‡_aq >> ΔG‡_gas). Consequently, SN2 reactions proceed 10^12 to 10^15× slower in water than in the gas phase!\n\nPart (c) 6-Stage AI/ML + DFT High-Throughput Semiconductor Discovery Workflow:\n1. Stage 1 (Data Curation): Harvest 150,000+ DFT-calculated crystal structures from Materials Project / OQMD.\n2. Stage 2 (Featurization): Convert structures into Magpie elemental vectors and 3D crystal graphs (atoms = nodes, bonds = edges).\n3. Stage 3 (ML Training): Train Graph Neural Networks (CGCNN, MEGNet) using cross-validation.\n4. Stage 4 (Screening & Inverse Design): Screen 10^6 hypothetical crystal compositions down to top 10-50 candidates meeting targets (Ehull < 25 meV/atom, direct Eg = 1.3-1.5 eV, non-toxic elements).\n5. Stage 5 (DFT Verification): Validate top hits using hybrid HSE06 DFT and phonon band structures.\n6. Stage 6 (Robotic Synthesis & Active Learning): Synthesize candidates using automated robotic labs and feed experimental results back to refine the ML model."
        }
      ]
    }
  ]
};
