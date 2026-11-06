export const basicEngCourse = {
  "id": "BACEE101",
  "code": "BAEEE101",
  "title": "Basic Engineering",
  "shortTitle": "Basic Engineering",
  "category": "University Core",
  "credits": 4,
  "semester": "Fall Semester 2026-27",
  "color": "amber",
  "badge": "Official Master Textbooks (Modules 1-4)",
  "description": "Complete 62-Page Publication-Grade Textbooks, Derivations, Schematics, The 4-Way Mega Circuit, and Official VIT Question Bank Blueprints for Electrical, Electronics, CAD Graphics, and Manufacturing Engineering.",
  "targetMarks": {
    "cat1": "50 Marks (Modules 1 & 2)",
    "cat2": "50 Marks (Modules 3 & 4)",
    "fat": "100 Marks (All 4 Modules: Electrical, Electronics, CAD & Manufacturing)"
  },
  "modules": [
    {
      "id": "bacee-m1",
      "moduleNum": 1,
      "pdfUrl": "/pdfs/basic_eng/BEEE_MOD-1.pdf",
      "title": "Electrical Circuits, AC Phasors, Machines & Safety",
      "co": "CO: 1",
      "examScope": "CAT-1 & FAT",
      "weightage": "25 Marks in FAT",
      "status": "not_confident",
      "scope": "Electric circuit components (R, L, C water pipe analogy, active vs passive, bilateral vs unilateral, KCL charge conservation, KVL energy conservation, voltage & current divider rules), Method 1 Mesh Current Analysis (4-step process, shared mutual branches, Cramer's rule solution), Method 2 Node Voltage Analysis (reference ground, \"everyone leaves my node\" rule, current source handling, LCM clearing), Method 3 Superposition Theorem (deactivating voltage/current sources, partial currents with directional arrows, combining algebraically, power warning), Method 4 Thevenin's Theorem & Maximum Power Transfer (open-circuit Vth, deactivated Rth, series loop, Pmax = Vth^2/(4Rth)), The \"Mega Circuit Challenge\" (1 mixed-source circuit solved all 4 ways to yield IL = 1.724 A), Single-Phase AC Circuits (RL, RC, RLC series, CIVIL phase-angle rule, impedance triangle, power triangle: active P Watts, reactive Q VAR, apparent S VA, power factor cos φ, resonance fr = 1/(2π√LC), 30-day tariff calculation), Basics of Electrical Safety & Earthing (Fuse sacrificial Sn-Pb wire, MCB bimetallic + solenoid, RCCB/ELCB core-balance leakage protection in <30 ms at >30 mA, Pipe earthing perforated GI pipe in charcoal/salt vs Plate earthing 3 m deep, Megger testing), Electrical Machines (DC Motor construction, lap vs wave winding, split-ring commutator mechanical inverter, brushes, back-EMF Eb = (PΦZN)/(60A), torque Ta = 0.159 Φ Z Ia (P/A), speed N ∝ Eb/Φ, runaway risk at no-load; 3-Phase Induction Motor RMF ΦR = 1.5Φm at Ns = 120f/P, slip s = (Ns - Nr)/Ns, rotor frequency fr = s·f, squirrel-cage vs slip-ring wound rotor, why 1-phase IM is not self-starting and needs capacitor phase-split; Brushless DC BLDC Motor permanent magnet rotor, Hall sensors H1-H3, 6-MOSFET inverter bridge, 6-step trapezoidal commutation; Single-Phase Transformer mutual induction on CRGO silicon steel core, EMF equation E = 4.44 f N Φm, turns ratio K, why DC burns out transformer, core-type vs shell-type, constant iron losses Pi vs variable copper losses Pcu, maximum efficiency condition), Power Electronics Converters (Rectifier AC->DC, Inverter DC->AC, Chopper DC->DC buck/boost, Cycloconverter AC->AC, industrial drive architecture), and 10-Mark Multi-Concept Boss Problem (Transformer + RLC Load + Power Triangle + 30-Day Bill) + 3-Phase Induction Motor Speed/Slip Numerical.",
      "blueprint": {
        "marksTotal": "25 Marks in FAT",
        "questionTypes": [
          {
            "type": "DC Network Theorems (10 Marks)",
            "desc": "Solving a multi-source planar circuit using Mesh Analysis, Nodal Analysis, Superposition Theorem, or Thevenin's Equivalent (Vth, Rth, and load current IL)."
          },
          {
            "type": "Single-Phase AC Series RLC Circuit & Power (10 Marks)",
            "desc": "Calculating inductive/capacitive reactances (XL, XC), total impedance Z, current, power factor cos φ (leading/lagging), active power P, and 30-day electricity bill."
          },
          {
            "type": "Electrical Machines: Transformer or Motors (10 Marks)",
            "desc": "Transformer EMF equation derivation (E = 4.44 f N Φm) and core/copper losses; DC Motor back-EMF and torque; or 3-Phase Induction Motor RMF and slip."
          },
          {
            "type": "Electrical Safety & Earthing Systems (5 Marks)",
            "desc": "Operating principle of RCCB/ELCB vs MCB vs Fuse; and labeled cross-section of Pipe Earthing (IS 3043) with charcoal and salt layers."
          }
        ]
      },
      "formulaSheet": [
        {
          "name": "Ohm's Law, KCL & KVL",
          "formula": "V = I \\cdot R, \\quad \\sum I_{\\text{entering}} = \\sum I_{\\text{leaving}}, \\quad \\sum V_{\\text{rises}} = \\sum V_{\\text{drops}}",
          "note": "KCL: charge conservation; KVL: energy conservation"
        },
        {
          "name": "Thevenin's Theorem & Maximum Power",
          "formula": "I_L = \\frac{V_{\\text{Th}}}{R_{\\text{Th}} + R_L}, \\quad P_{\\max} = \\frac{V_{\\text{Th}}^2}{4 R_{\\text{Th}}} \\quad (\\text{when } R_L = R_{\\text{Th}})",
          "note": "Deactivate: Voltage->Short, Current->Open"
        },
        {
          "name": "AC Impedance & Power Triangle",
          "formula": "Z = \\sqrt{R^2 + (X_L - X_C)^2}, \\quad \\text{pf} = \\cos \\phi = \\frac{R}{Z}, \\quad P = V I \\cos \\phi, \\quad Q = V I \\sin \\phi",
          "note": "XL = 2πfL; XC = 1/(2πfC); CIVIL rule"
        },
        {
          "name": "Transformer EMF Equation",
          "formula": "E_1 = 4.44 f N_1 \\Phi_m, \\quad E_2 = 4.44 f N_2 \\Phi_m, \\quad K = \\frac{V_2}{V_1} = \\frac{N_2}{N_1} = \\frac{I_1}{I_2}",
          "note": "CRGO silicon steel core; zero moving parts"
        },
        {
          "name": "Transformer Maximum Efficiency",
          "formula": "x^2 \\cdot P_{\\text{cu(FL)}} = P_i \\implies \\text{kVA}_{\\eta,\\max} = \\text{kVA}_{\\text{FL}} \\cdot \\sqrt{\\frac{P_i}{P_{\\text{cu(FL)}}}}",
          "note": "Variable copper loss = Constant iron loss"
        },
        {
          "name": "DC Motor Back-EMF & Torque",
          "formula": "E_b = \\frac{P \\Phi Z N}{60 A}, \\quad V = E_b + I_a R_a, \\quad T_a = 0.159 \\cdot \\Phi Z I_a \\left(\\frac{P}{A}\\right) \\text{ N}\\cdot\\text{m}",
          "note": "Wave: A = 2; Lap: A = P; N ∝ Eb / Φ"
        },
        {
          "name": "3-Phase Induction Motor RMF & Slip",
          "formula": "N_s = \\frac{120 f}{P}, \\quad s = \\frac{N_s - N_r}{N_s}, \\quad f_r = s \\cdot f",
          "note": "RMF ΦR = 1.5 Φm; Nr always < Ns"
        }
      ],
      "examInsights": [
        {
          "title": "Power in Superposition Theorem (Critical Warning!)",
          "desc": "Never sum partial powers (P' + P\" ≠ Ptotal) because P = I²R is non-linear! Always calculate total superposition current first (Itotal = I' + I\"), and then calculate total power P = (Itotal)² · R at the very end."
        },
        {
          "title": "Why a Transformer Burns Out on DC (FAT Classic)",
          "desc": "On DC, frequency f = 0, so rate of change of flux dΦ/dt = 0 and back-EMF E1 = 0. Inductive reactance X1 = 2πfL1 = 0. The primary current is limited only by tiny winding resistance (I1 = VDC / R1), drawing huge current that roasts the insulation within seconds!"
        },
        {
          "title": "DC Series Motor No-Load Runaway Hazard",
          "desc": "In a DC series motor, field flux is produced by armature current (Φ ∝ Ia). At no load, Ia ≈ 0, so Φ → 0. Since speed N ∝ Eb / Φ, the motor speed shoots toward infinity (N → ∞), causing centrifugal destruction of the rotor!"
        }
      ],
      "topics": [
        {
          "id": "bacee-t1-1",
          "title": "M1T1: Electric Circuit Components, Ohm's Law, KCL & KVL",
          "theory": "R, L, C water pipe analogy. Active vs passive, bilateral vs unilateral. KCL charge conservation. KVL energy conservation. Voltage and current divider rules."
        },
        {
          "id": "bacee-t1-2",
          "title": "M1T2: Method 1 — Mesh Current Analysis",
          "theory": "4-step process. Clockwise loop currents, shared mutual branches, KVL by inspection, battery sign convention (+V rise on RHS), Cramer's rule solution."
        },
        {
          "id": "bacee-t1-3",
          "title": "M1T3: Method 2 — Node Voltage Analysis",
          "theory": "Reference ground (0 V). \"Everyone leaves my node\" rule for resistors: I = (V1 - Vother)/R. Direct current source treatment. Clearing fractions via LCM."
        },
        {
          "id": "bacee-t1-4",
          "title": "M1T4: Method 3 — Superposition Theorem",
          "theory": "Deactivating independent sources: Voltage source -> Short circuit; Current source -> Open circuit. Directional arrows for partial currents. Algebraic combination."
        },
        {
          "id": "bacee-t1-5",
          "title": "M1T5: Method 4 — Thevenin's Theorem & Max Power Transfer",
          "theory": "4-step process: remove RL, calculate open-circuit Vth, deactivate sources for Rth, series loop IL = Vth/(Rth + RL). Max power condition RL = Rth and Pmax = Vth^2/(4Rth)."
        },
        {
          "id": "bacee-t1-6",
          "title": "M1T6: The \"Mega Circuit Challenge\" — 4 Ways Separately",
          "theory": "Solving a 20V/4A mixed-source circuit across RL = 10 Ω using Mesh, Nodal, Superposition, and Thevenin to prove IL = 1.724 A identically across all four methods."
        },
        {
          "id": "bacee-t1-7",
          "title": "M1T7: Single-Phase AC Circuits & Power Triangle",
          "theory": "AC sine wave parameters. Reactances XL and XC. Impedance triangle. Power triangle: Active P (Watts), Reactive Q (VAR), Apparent S (VA). Power factor cos φ. Resonance fr = 1/(2π√LC). 30-day bill calculation."
        },
        {
          "id": "bacee-t1-8",
          "title": "M1T8: Electrical Safety & Earthing (Pipe vs Plate)",
          "theory": "Fuse Sn-Pb wire. MCB bimetallic + solenoid. RCCB/ELCB core-balance transformer tripping in <30 ms at >30 mA. Pipe earthing (38 mm GI pipe, 2.5 m deep) vs Plate earthing in charcoal & salt (soil resistance <2-5 Ω)."
        },
        {
          "id": "bacee-t1-9",
          "title": "M1T9: Electrical Machines Deep-Dive",
          "theory": "DC Motor: stator yoke/poles, slotted silicon-steel rotor, lap/wave windings, split-ring commutator mechanical inverter, brushes, back-EMF, torque, no-load runaway. 3-Phase IM: RMF ΦR = 1.5Φm at Ns = 120f/P, slip s, squirrel-cage vs slip-ring. BLDC: PM rotor, Hall sensors, 6-MOSFET inverter. Transformer: mutual induction, EMF equation E = 4.44 f N Φm, why DC burns out, core vs shell, iron vs copper losses, maximum efficiency."
        },
        {
          "id": "bacee-t1-10",
          "title": "M1T10: Power Electronics Converters & Industrial Drives",
          "theory": "Rectifier (AC->DC), Inverter (DC->AC), Chopper (DC->DC buck/boost), Cycloconverter (AC->AC). Industrial drive loop: source -> converter -> motor -> mechanical load with closed-loop sensor control."
        },
        {
          "id": "bacee-t1-11",
          "title": "M1T11: Multi-Concept Combined Problem & FAT PYQs",
          "theory": "Step-down transformer (2300V/230V) feeding series RLC motor-capacitor branch across 230V secondary. Full derivation of N2, Φm, XL, XC, Z, I2, I1, cos φ, P, Q, S, and 30-day energy bill."
        }
      ],
      "pyqs": [
        {
          "id": "bacee-q1-1",
          "exam": "Master 10-Mark Boss Problem — Transformer + Series RLC Load + Power Triangle + 30-Day Bill",
          "marks": "10 Marks",
          "question": "A 2300 V / 230 V, 50 Hz single-phase step-down transformer has N1 = 1,000 primary turns and feeds an industrial motor-capacitor branch modeled as a series RLC circuit with R = 12 Ω, L = 0.06 H, and C = 100 μF across its 230 V secondary. Calculate: (a) Secondary turns N2 and maximum core flux Φm, (b) Load reactances XL, XC and total impedance Z, (c) Secondary current I2 and primary current I1, (d) Load Power Factor cos φ and Active/Reactive/Apparent Power (P, Q, S), and (e) The 30-day electricity bill if this load runs 8 hours/day at ₹7.00 per unit (kWh).",
          "solution": "Part (a) Transformer Parameters (2 Marks):\n- Turns ratio: N2 = N1 × (V2 / V1) = 1,000 × (230 / 2300) = 100 turns.\n- Core Flux Φm: From EMF equation E2 = 4.44 · f · N2 · Φm:\n  230 = 4.44 × 50 × 100 × Φm = 22,200 × Φm\n  Φm = 230 / 22,200 = 0.01036 Wb = 10.36 mWb.\n\nPart (b) AC Reactances & Impedance (2 Marks):\n- Inductive Reactance: XL = 2πfL = 2 × 3.1416 × 50 × 0.06 = 18.85 Ω.\n- Capacitive Reactance: XC = 1 / (2πfC) = 1 / (2 × 3.1416 × 50 × 100 × 10^-6) = 1 / (0.031416) = 31.83 Ω.\n- Total Impedance: Z = √[R² + (XL - XC)²] = √[12² + (18.85 - 31.83)²] = √[144 + (-12.98)²] = √[144 + 168.48] = √312.48 = 17.68 Ω.\n\nPart (c) Secondary & Primary Currents (2 Marks):\n- Secondary load current: I2 = V2 / Z = 230 V / 17.68 Ω = 13.01 A.\n- Primary current: I1 = I2 × (N2 / N1) = 13.01 × (100 / 1,000) = 1.301 A.\n\nPart (d) Power Factor & Power Triangle (2 Marks):\n- Power Factor: cos φ = R / Z = 12 / 17.68 = 0.679 Leading (since XC > XL; capacitive circuit).\n  sin φ = |XL - XC| / Z = 12.98 / 17.68 = 0.734.\n- Active Power: P = V2 · I2 · cos φ = 230 × 13.01 × 0.679 = 2,031.8 W (2.032 kW).\n- Reactive Power: Q = V2 · I2 · sin φ = 230 × 13.01 × 0.734 = 2,196.4 VAR (2.196 kVAR).\n- Apparent Power: S = V2 · I2 = 230 × 13.01 = 2,992.3 VA (2.992 kVA).\n\nPart (e) 30-Day Energy Bill (2 Marks):\n- Total Energy in kWh (Units): E = P (kW) × Hours/day × Days = 2.0318 kW × 8 h/day × 30 days = 487.63 kWh (Units).\n- Total Cost at ₹7.00/unit: Cost = 487.63 × ₹7.00 = ₹3,413.41.\nBoxed Answer: (a) N2 = 100 turns, Φm = 10.36 mWb; (b) Z = 17.68 Ω; (c) I2 = 13.01 A, I1 = 1.301 A; (d) pf = 0.679 Leading, P = 2.032 kW, Q = 2.196 kVAR, S = 2.992 kVA; (e) Bill = ₹3,413.41."
        },
        {
          "id": "bacee-q1-2",
          "exam": "Argon Master Thevenin & 4-Way Mega Circuit — 10 Marks",
          "marks": "10 Marks",
          "question": "In the two-loop circuit, the left branch has a 28 V battery (+ on top) and R1 = 4 Ω, the right branch has R2 = 1 Ω and a 7 V battery (+ on top), and the shared center vertical branch has R3 = 2 Ω. (a) Find the Thevenin equivalent circuit (Vth and Rth) across the central 2 Ω resistor, (b) calculate the load current IL, and (c) find the maximum possible power that this network could deliver to an adjustable load.",
          "solution": "Step 1: Open Terminals A and B across R3 = 2 Ω:\nWith the middle branch open, the single outer loop contains 28 V, 4 Ω, 1 Ω, and opposing 7 V.\nClockwise current: I_outer = (28 - 7) / (4 + 1) = 21 / 5 = 4.2 A.\n\nStep 2: Open-Circuit Voltage Vth = VAB:\nWalking from ground B up the left branch: Vth = VA = 28 V - (4 Ω × 4.2 A) = 28 - 16.8 = 11.2 V.\n(Check via right branch: 7 V + 1 Ω × 4.2 A = 11.2 V — exact match!).\n\nStep 3: Thevenin Resistance Rth:\nDeactivate both voltage sources by replacing them with short circuits.\nLooking into open terminals A and B: the 4 Ω left resistor and 1 Ω right resistor are in parallel:\nRth = 4 Ω || 1 Ω = (4 × 1) / (4 + 1) = 4 / 5 = 0.8 Ω.\n\nStep 4: Load Current & Maximum Power:\n- Reconnect RL = 2 Ω in series with Vth = 11.2 V and Rth = 0.8 Ω:\n  IL = Vth / (Rth + RL) = 11.2 / (0.8 + 2.0) = 11.2 / 2.8 = 4.0 A (↓).\n- Maximum Power Transfer (when RL = Rth = 0.8 Ω):\n  Pmax = Vth² / (4 Rth) = (11.2)² / (4 × 0.8) = 125.44 / 3.2 = 39.2 W.\nBoxed Answer: (a) Vth = 11.2 V, Rth = 0.8 Ω; (b) IL = 4.0 A (↓); (c) Pmax = 39.2 W."
        },
        {
          "id": "bacee-q1-3",
          "exam": "VIT FAT Official Machine Numerical — 3-Phase Induction Motor — 5 Marks",
          "marks": "5 Marks",
          "question": "A 3-phase, 4-pole, 50 Hz squirrel-cage induction motor runs at a full-load rotor speed of 1,440 RPM. Calculate: (i) Synchronous speed Ns, (ii) Percentage slip %s, and (iii) Rotor current frequency fr.",
          "solution": "Part (i) Synchronous Speed Ns:\nNs = (120 · f) / P = (120 × 50 Hz) / 4 = 6000 / 4 = 1,500 RPM.\n\nPart (ii) Percentage Slip %s:\ns = (Ns - Nr) / Ns = (1500 - 1440) / 1500 = 60 / 1500 = 0.04 (or 4.0% Slip).\n\nPart (iii) Rotor Current Frequency fr:\nfr = s · f = 0.04 × 50 Hz = 2.0 Hz.\n(At standstill, s = 1 and fr = 50 Hz; at full load, fr drops to 2.0 Hz as the rotor catches up to the rotating magnetic field!).\nBoxed Answer: (i) Ns = 1,500 RPM, (ii) Slip = 4.0%, (iii) fr = 2.0 Hz."
        }
      ]
    },
    {
      "id": "bacee-m2",
      "moduleNum": 2,
      "pdfUrl": "/pdfs/basic_eng/BEEE_MOD-2.pdf",
      "title": "Semiconductors, Transistors, Op-Amps & Communications",
      "co": "CO: 2",
      "examScope": "CAT-1 & FAT",
      "weightage": "25 Marks in FAT",
      "status": "need_to_revise",
      "scope": "Semiconductor physics (Silicon Eg = 1.1 eV, N-type pentavalent vs P-type trivalent, PN junction formation, barrier voltage V0 = 0.7 V Si / 0.3 V Ge, forward bias knee voltage VK and Shockley equation, reverse saturation current I0), Zener diode & shunt voltage regulator (Zener breakdown VZ < 6V tunneling vs Avalanche breakdown VZ > 6V impact ionization, regulator equations IS, IL, IZ, PZ, line and load regulation), Bipolar Junction Transistor BJT (NPN/PNP active biasing, base <5% recombination, IE = IB + IC, CE configuration input/output curves, active, saturation VCE(sat) ≈ 0.2V, cut-off, current gain β = α/(1-α) ≈ 50-300, why CE beats CB/CC), MOSFET (voltage-controlled unipolar, gate oxide SiO2, Zin ≈ ∞, E-MOSFET normally OFF, inversion channel at VGS > Vth vs D-MOSFET normally ON dual mode), Rectifiers (Half-wave Vdc = 0.318 Vm, Center-tapped FWR, Bridge FWR 4 diodes Vdc = 0.636(Vm - 1.4V), efficiency 81.2%, ripple factor 0.482, PIV = Vm, 7-parameter comparison table), Operational Amplifiers IC 741 (ideal vs practical specs, 4-stage internal diagram: differential input, intermediate gain, level shifter to 0V, push-pull output; virtual short/ground rule V- = V+, inverting Av = -Rf/R1, non-inverting Av = 1 + Rf/R1, voltage follower, inverting summer), EM Spectrum & Communication Systems (frequency bands VLF to EHF, why voice signals MUST be modulated: antenna height L = λ/4 = 25 km at 3 kHz vs 0.75 m at 100 MHz, AM vs FM vs PM), Cellular Communication (hexagonal cell geometry, BTS and MTSO, cluster size N = i² + ij + j², frequency reuse factor 1/N, system capacity C = M·k·N, handoff vs roaming, 1G to 5G evolution), Satellite Communication (transponder 6 GHz uplink to 4 GHz downlink frequency translation rationale, dual polarization reuse, 5 housekeeping subsystems: power, TT&C, propulsion AKM, attitude momentum wheels, antennas; LEO, MEO, GEO orbits, why GPS needs 4 satellites), RADAR Systems (microwave T/R duplexer, range R = c·Δt/2, unambiguous range Runamb = c/(2·PRF), Radar Range Equation Rmax ∝ Pt^(1/4), CW Doppler radar fd = 2vr/λ), and Multi-Concept Solved PYQs (Bridge rectifier + Zener regulator, BJT gains + cascaded summing op-amp, Antenna height + cellular capacity + Doppler radar, BJT vs MOSFET + Satellite/GPS).",
      "blueprint": {
        "marksTotal": "25 Marks in FAT",
        "questionTypes": [
          {
            "type": "Bridge Rectifier & Zener Voltage Regulator (10 Marks)",
            "desc": "Full-wave bridge rectifier calculations (Vdc, Idc, PIV) coupled to a Zener shunt regulator circuit (IS, IL, IZ, and PZ)."
          },
          {
            "type": "Operational Amplifiers: Inverting, Non-Inverting & Summer (10 Marks)",
            "desc": "Virtual ground rule derivation of Av = -Rf/R1 and Av = 1 + Rf/R1, or multi-input summing amplifier resistor design."
          },
          {
            "type": "BJT vs. MOSFET & Transistor Biasing (10 Marks)",
            "desc": "Structure, carrier types, input impedance, thermal stability comparison; and CE output characteristics (Active, Saturation, Cut-off)."
          },
          {
            "type": "Wireless Communications, Satellite & RADAR (10 Marks)",
            "desc": "Why modulation reduces antenna size (L = λ/4); cellular frequency reuse clusters; satellite uplink/downlink translation; or radar range equation."
          }
        ]
      },
      "formulaSheet": [
        {
          "name": "Diode Shockley Equation",
          "formula": "I = I_0 \\left( e^{V_D / (n V_T)} - 1 \\right), \\quad V_T = \\frac{k T}{q} \\approx 26\\text{ mV at } 300\\text{ K}",
          "note": "Knee voltage VK: 0.7 V (Si), 0.3 V (Ge)"
        },
        {
          "name": "Zener Shunt Regulator Equations",
          "formula": "I_S = \\frac{V_{\\text{in}} - V_Z}{R_S}, \\quad I_L = \\frac{V_Z}{R_L}, \\quad I_Z = I_S - I_L, \\quad P_Z = V_Z \\cdot I_Z",
          "note": "Zener maintains constant VL = VZ"
        },
        {
          "name": "Bridge Rectifier Output & Ripple",
          "formula": "V_{\\text{dc}} = \\frac{2 V_m}{\\pi} \\approx 0.636 V_m, \\quad \\gamma = 0.482, \\quad \\eta_{\\max} = 81.2\\%, \\quad \\text{PIV} = V_m",
          "note": "Practical drop: Vdc = 0.636(Vm - 1.4 V)"
        },
        {
          "name": "BJT Current Gain Conversion",
          "formula": "\\beta = \\frac{\\alpha}{1 - \\alpha}, \\quad \\alpha = \\frac{\\beta}{\\beta + 1}, \\quad I_E = I_B + I_C, \\quad I_C = \\beta I_B",
          "note": "CE current gain β typically 50 - 300"
        },
        {
          "name": "Op-Amp Closed-Loop Gains",
          "formula": "A_{v,\\text{inv}} = -\\frac{R_f}{R_1}, \\quad A_{v,\\text{non-inv}} = 1 + \\frac{R_f}{R_1}, \\quad V_{\\text{out}} = -R_f\\left(\\frac{V_1}{R_1} + \\frac{V_2}{R_2} + \\frac{V_3}{R_3}\\right)",
          "note": "Virtual ground: V- = V+; input current I- = 0"
        },
        {
          "name": "Antenna Quarter-Wave Height",
          "formula": "L = \\frac{\\lambda}{4} = \\frac{c}{4 f}, \\quad c = 3 \\times 10^8\\text{ m/s}",
          "note": "Explains why voice must be modulated"
        },
        {
          "name": "Radar Range & Doppler Shift",
          "formula": "R = \\frac{c \\cdot \\Delta t}{2}, \\quad R_{\\max} = \\left[ \\frac{P_t G^2 \\lambda^2 \\sigma}{(4\\pi)^3 P_{r,\\min}} \\right]^{1/4}, \\quad f_d = \\frac{2 v_r}{\\lambda} = \\frac{2 v_r f_0}{c}",
          "note": "Rmax scales with fourth root of power"
        }
      ],
      "examInsights": [
        {
          "title": "Why Satellite Uplink (6 GHz) > Downlink (4 GHz)",
          "desc": "Free-space path loss and rain attenuation increase with frequency squared (Loss ∝ f²). The ground Earth station has unlimited AC grid power and huge parabolic dishes to blast 6 GHz through atmospheric loss. The satellite runs on limited solar arrays, so it transmits downward at 4 GHz for lower loss."
        },
        {
          "title": "Why 4 GPS Satellites Are Required for Navigation",
          "desc": "A GPS receiver must solve for 4 unknown variables simultaneously: 3D spatial position (Latitude X, Longitude Y, Altitude Z) plus the receiver's internal clock bias (Δt). Therefore, signals from at least 4 independent satellites are mathematically necessary."
        },
        {
          "title": "BJT vs MOSFET Thermal Runaway",
          "desc": "BJTs have a positive temperature coefficient of collector current; as they heat up, IC rises, leading to destructive thermal runaway. MOSFETs have a negative temperature coefficient at high currents; as temperature rises, carrier mobility drops and current decreases, preventing thermal runaway."
        }
      ],
      "topics": [
        {
          "id": "bacee-t2-1",
          "title": "M2T1: Semiconductor Physics & PN Junction Diode",
          "theory": "Silicon Eg = 1.1 eV. N-type vs P-type. Depletion barrier potential (0.7V Si, 0.3V Ge). Forward bias knee voltage VK and Shockley equation. Reverse saturation current I0."
        },
        {
          "id": "bacee-t2-2",
          "title": "M2T2: Zener Diode & Shunt Voltage Regulator",
          "theory": "Zener breakdown (VZ < 6V quantum tunneling) vs Avalanche breakdown (VZ > 6V impact ionization). Shunt regulator circuit and 4 design formulas."
        },
        {
          "id": "bacee-t2-3",
          "title": "M2T3: Bipolar Junction Transistor (BJT)",
          "theory": "NPN/PNP active biasing. IE = IB + IC. CB vs CE configurations. CE input and output characteristics (active, saturation, cut-off). Current gain α and β."
        },
        {
          "id": "bacee-t2-4",
          "title": "M2T4: MOSFET (E-MOSFET vs D-MOSFET)",
          "theory": "Unipolar voltage-controlled operation. SiO2 gate oxide giving Zin ≈ ∞. E-MOSFET inversion channel at VGS > Vth. D-MOSFET dual-mode operation."
        },
        {
          "id": "bacee-t2-5",
          "title": "M2T5: Rectifiers (HWR, Center-Tapped, Bridge FWR)",
          "theory": "Half-wave vs full-wave bridge rectifier conduction paths. DC output voltage, ripple factor 0.482, efficiency 81.2%, and PIV. 7-parameter comparison table."
        },
        {
          "id": "bacee-t2-6",
          "title": "M2T6: Operational Amplifiers (IC 741)",
          "theory": "Ideal vs practical specs. 4-stage internal diagram. Virtual ground rule. Inverting, non-inverting, voltage follower, and inverting summing amplifier circuits."
        },
        {
          "id": "bacee-t2-7",
          "title": "M2T7: EM Spectrum & Modulation",
          "theory": "Frequency bands VLF to EHF. Why modulation is mandatory (antenna height L = λ/4, multiplexing). AM vs FM vs PM comparison."
        },
        {
          "id": "bacee-t2-8",
          "title": "M2T8: Cellular Communication Systems",
          "theory": "Hexagonal cell tiling geometry. Cluster size N = i² + ij + j². Frequency reuse factor 1/N. System capacity C = M·k·N. Handoff vs roaming. 1G to 5G evolution."
        },
        {
          "id": "bacee-t2-9",
          "title": "M2T9: Satellite Communication & Orbits",
          "theory": "Transponder 6 GHz to 4 GHz down-conversion. Dual polarization reuse. 5 housekeeping subsystems. LEO, MEO, and GEO orbits. Why GPS needs 4 satellites."
        },
        {
          "id": "bacee-t2-10",
          "title": "M2T10: RADAR Systems & Doppler Effect",
          "theory": "Radar block diagram. Microwave T/R duplexer switch. Range R = cΔt/2. Radar Range Equation. CW Doppler radar velocity measurement."
        },
        {
          "id": "bacee-t2-11",
          "title": "M2T11: Multi-Concept Solved Problems & FAT PYQs",
          "theory": "Bridge rectifier + Zener regulator. BJT gains + cascaded inverting summer op-amp. Antenna height + cellular capacity + Doppler radar. BJT vs MOSFET + satellite link design."
        }
      ],
      "pyqs": [
        {
          "id": "bacee-q2-1",
          "exam": "Argon Solved PYQ 1 — Multi-Concept Power Supply: Bridge Rectifier + Zener Regulator — 10 Marks",
          "marks": "10 Marks",
          "question": "A 230 V, 50 Hz AC mains feeds a 10:1 step-down transformer connected to a Silicon Bridge Full-Wave Rectifier (VD = 0.7 V per diode). (a) Calculate the peak load voltage Vm(load) and average DC output Vdc across a 100 Ω load. (b) If a smoothed 24 V DC bus from a filter feeds a 10 V Zener shunt regulator via RS = 280 Ω connected to a load RL = 500 Ω, find IS, IL, IZ, and Zener power dissipation PZ.",
          "solution": "Part (a) Bridge Rectifier (5 Marks):\n- Transformer Secondary RMS Voltage: V2(rms) = 230 / 10 = 23 V.\n- Peak AC Voltage: Vm = 23 × √2 = 32.53 V.\n- Two series silicon diodes conduct in each half-cycle (total drop 2 × 0.7 V = 1.4 V):\n  Vm(load) = 32.53 - 1.4 = 31.13 V.\n- Average DC Output Voltage: Vdc = 2 Vm(load) / π = (2 × 31.13) / 3.1416 = 19.82 V.\n- DC Load Current: Idc = Vdc / RL = 19.82 V / 100 Ω = 198.2 mA.\n- RMS Load Current: Irms = (31.13 / 100) / √2 = 220.1 mA.\n\nPart (b) Zener Shunt Voltage Regulator (5 Marks):\n- Regulated Output Voltage: VL = VZ = 10 V.\n- Series Resistor Current: IS = (Vin - VZ) / RS = (24 V - 10 V) / 280 Ω = 14 / 280 = 0.05 A (50 mA).\n- Load Current: IL = VZ / RL = 10 V / 500 Ω = 0.02 A (20 mA).\n- Zener Current (by KCL at top node): IZ = IS - IL = 50 mA - 20 mA = 30 mA (0.03 A).\n- Zener Power Dissipation: PZ = VZ · IZ = 10 V × 0.03 A = 0.30 W (300 mW).\nBoxed Answer: (a) Vm(load) = 31.13 V, Vdc = 19.82 V; (b) IS = 50 mA, IL = 20 mA, IZ = 30 mA, PZ = 300 mW."
        },
        {
          "id": "bacee-q2-2",
          "exam": "Argon Solved PYQ 2 — BJT Gains & Cascaded Inverting Summer Op-Amp — 10 Marks",
          "marks": "10 Marks",
          "question": "(a) An NPN transistor in CE configuration has α = 0.985 and collector current IC = 3.94 mA. Find β, base current IB, and emitter current IE.\n(b) Three inputs V1 = +2 V, V2 = -3 V, V3 = +4 V feed an inverting summing Op-Amp via R1 = 20 kΩ, R2 = 30 kΩ, R3 = 40 kΩ with Rf = 60 kΩ. If its output feeds a Non-Inverting Op-Amp with R1 = 10 kΩ and Rf = 15 kΩ, find the final output voltage Vfinal.",
          "solution": "Part (a) BJT Current Parameters (4 Marks):\n- Common-Emitter Current Gain: β = α / (1 - α) = 0.985 / (1 - 0.985) = 0.985 / 0.015 = 65.67.\n- Base Current: IB = IC / β = 3.94 mA / 65.67 = 0.06 mA = 60 μA.\n- Emitter Current: IE = IB + IC = 0.06 mA + 3.94 mA = 4.00 mA.\n\nPart (b) Cascaded Op-Amp Circuit (6 Marks):\nStage 1 (Inverting Summer):\n- Vout1 = -Rf · (V1 / R1 + V2 / R2 + V3 / R3)\n- Vout1 = -60 kΩ · (2 V / 20 kΩ + (-3 V) / 30 kΩ + 4 V / 40 kΩ)\n- Vout1 = -60 · (0.1 - 0.1 + 0.1) = -60 · (0.1) = -6.0 V.\n\nStage 2 (Non-Inverting Amplifier fed by Vout1 = -6.0 V):\n- Voltage Gain: Av2 = 1 + (Rf / R1) = 1 + (15 kΩ / 10 kΩ) = 1 + 1.5 = 2.5.\n- Final Output Voltage: Vfinal = Av2 · Vout1 = 2.5 × (-6.0 V) = -15.0 V.\nBoxed Answer: (a) β = 65.67, IB = 60 μA, IE = 4.00 mA; (b) Vout1 = -6.0 V, Vfinal = -15.0 V."
        },
        {
          "id": "bacee-q2-3",
          "exam": "Argon Solved PYQ 3 — Antenna Height, Cellular Capacity & Pulsed/Doppler Radar — 10 Marks",
          "marks": "10 Marks",
          "question": "(a) Calculate the minimum quarter-wave antenna height required to radiate a 5 kHz audio signal directly versus a 150 MHz VHF carrier.\n(b) A cellular network with 42 MHz spectrum (50 kHz per duplex channel) uses a 7-cell cluster (i=2, j=1) repeated 12 times. Find channels per cell k and total system capacity C.\n(c) A 10 GHz police Doppler radar (λ = 0.03 m) measures an echo after Δt = 4 μs with a Doppler shift fd = 2,000 Hz. Find target range R and vehicle speed vr.",
          "solution": "Part (a) Quarter-Wave Antenna Height L = λ / 4 (3 Marks):\n- For 5 kHz audio signal: λ1 = c / f1 = (3 × 10^8 m/s) / (5 × 10^3 Hz) = 60,000 m = 60 km.\n  Required antenna height: L1 = λ1 / 4 = 60,000 / 4 = 15,000 m (15 km tall tower — physically impossible!).\n- For 150 MHz VHF wave: λ2 = c / f2 = (3 × 10^8) / (1.5 × 10^8) = 2.0 m.\n  Required antenna height: L2 = λ2 / 4 = 2.0 / 4 = 0.5 m (50 cm whip antenna — compact and practical!).\n\nPart (b) Cellular Network Capacity (3 Marks):\n- Total duplex channels: Total = Total Spectrum / Channel Bandwidth = 42,000 kHz / 50 kHz = 840 channels.\n- Channels per cell (N = 7): k = Total / N = 840 / 7 = 120 channels/cell.\n- Total System Capacity across M = 12 clusters: C = M · k · N = 12 × 120 × 7 = 10,080 simultaneous calls.\n\nPart (c) Pulsed & Doppler Radar (4 Marks):\n- Target Distance: R = (c · Δt) / 2 = (3 × 10^8 m/s × 4 × 10^-6 s) / 2 = 1,200 / 2 = 600 meters.\n- Vehicle Speed from Doppler Shift: fd = (2 · vr) / λ => vr = (fd · λ) / 2\n  vr = (2,000 Hz × 0.03 m) / 2 = 60 / 2 = 30 m/s.\n  In km/h: vr = 30 × 3.6 = 108 km/h.\nBoxed Answer: (a) L1 = 15 km (impractical) vs L2 = 0.5 m; (b) k = 120 channels/cell, C = 10,080 calls; (c) Range = 600 m, Speed = 30 m/s (108 km/h)."
        }
      ]
    },
    {
      "id": "bacee-m3",
      "moduleNum": 3,
      "pdfUrl": "/pdfs/basic_eng/BEEE_MOD-3.pdf",
      "title": "Engineering Graphics: Projections, Solids, Isometric & CAD",
      "co": "CO: 3",
      "examScope": "CAT-2 & FAT",
      "weightage": "20-25 Marks in FAT",
      "status": "yet_to_start",
      "scope": "Importance of Engineering Graphics & BIS Standards (IS 10711 / IS SP 46: universal graphic language, drawing sheet sizes A0 to A4 aspect ratio 1:√2, title block strictly 185 mm × 65 mm at bottom-right, Representative Fraction RF full/reducing/enlarging, BIS line conventions: continuous thick visible outline HB 0.5mm, continuous thin 2H 0.2mm dimension/extension/45° hatch, dashed thin hidden lines, chain thin center lines; precedence of overlapping lines; BIS lettering IS 9609 single-stroke gothic capital height-to-width 7:5/6:5 vertical or 75° inclined; dimensioning rules: 3:1 closed filled arrowhead, extension line 1mm gap extending 3mm beyond arrow, aligned system numbers above line vs unidirectional upright, chain vs parallel datum dimensioning, leader lines), Orthographic Projections (First Angle BIS/ISO vs Third Angle USA/ANSI, why 2nd and 4th angle are NEVER used: HP 90° clockwise rotation causes HP and VP to overlap on the same side of XY, superimposing Front View and Top View; 4-point comparison table, truncated cone projection symbols), Projection of Solids (regular Platonic solids: tetrahedron, cube, octahedron, dodecahedron, icosahedron; prisms; pyramids with apex/vertex; solids of revolution: cylinder, cone, sphere; Golden Rule: draw true shape of base first!), Isometric Projection & Perspective (isometric axes at 120° with base receding at 30°, mathematical derivation of isometric scale ratio Isometric Length / True Length = cos 45° / cos 30° = √(2/3) ≈ 0.8165, Isometric Projection 0.816 scale vs Isometric View 100% true length, box method, offset method, Four-Center Method for drawing circle as ellipse inside 30° rhombus, perspective projection converging projectors at station point and vanishing point VP), Freehand Sketching & IS SP7 Residential Floor Plan (horizontal section cut at window sill level 1.0-1.2 m looking straight down, outer brick walls 230 mm / 9 inches, inner partition walls 115 mm / 4.5 inches, minimum room sizes: Living 4.2m × 3.6m ≥ 9.5 m², Bedroom 3.6m × 3.0m ≥ 9.5 m², Kitchen 3.0m × 2.4m ≥ 5.0 m², Combined Bath & WC 1.8m × 2.1m ≥ 2.8 m², Verandah 1.8m × 3.0m, quarter-circle door swings opening against wall, North arrow, 5-row schedule of openings: main door D 1000×2100, room door D1 900×2100, bath D2 750×2100, window W 1200×1200, ventilator V 600×450), Introduction to CAD (AutoCAD, SolidWorks, CATIA, Fusion 360, Creo; 7 core applications: 2D drafting, 3D solid/surface modeling, assembly & clash detection, FEA/CFD simulation, generative optimization, cloud PDM/PLM, direct CNC G-code & .STL export), and Complete Solved FAT PYQs.",
      "blueprint": {
        "marksTotal": "20 to 25 Marks in FAT",
        "questionTypes": [
          {
            "type": "First Angle vs. Third Angle Projection (10 Marks)",
            "desc": "4-point comparison table, drawing standard BIS truncated cone symbols, and stating why second and fourth angle projections are never used."
          },
          {
            "type": "Projection of Regular Solids & Isometric Scale (10 Marks)",
            "desc": "Drawing Front View and Top View of regular prisms/pyramids/cylinders; mathematical derivation of isometric scale ratio (0.816); and Four-Center ellipse construction."
          },
          {
            "type": "1BHK Residential Floor Plan as per IS SP7 (10 Marks)",
            "desc": "Drawing a dimensioned double-line floor plan with outer 230 mm walls, inner 115 mm walls, room labels, door swings, and Schedule of Openings."
          },
          {
            "type": "CAD Applications & BIS Line Conventions (5-10 Marks)",
            "desc": "7 core stages of the modern CAD engineering design workflow and sketching 5 standard BIS line types with pencils and applications."
          }
        ]
      },
      "formulaSheet": [
        {
          "name": "Isometric Scale Ratio Derivation",
          "formula": "\\frac{\\text{Isometric Length}}{\\text{True Length}} = \\frac{\\cos 45^\\circ}{\\cos 30^\\circ} = \\frac{1/\\sqrt{2}}{\\sqrt{3}/2} = \\sqrt{\\frac{2}{3}} \\approx 0.8165 \\ (81.65\\%)",
          "note": "Isometric View uses 100% True Scale"
        },
        {
          "name": "Isometric Axes Geometry",
          "formula": "\\text{Mutual inclination } = 120^\\circ, \\quad \\text{Base edges recede at } 30^\\circ \\text{ to horizontal}",
          "note": "Vertical edges remain strictly vertical (90°)"
        },
        {
          "name": "Representative Fraction (RF)",
          "formula": "\\text{RF} = \\frac{\\text{Length on Drawing}}{\\text{Actual Object Length}} \\quad (\\text{Dimensionless Ratio})",
          "note": "Full 1:1, Reducing 1:50, Enlarging 5:1"
        },
        {
          "name": "BIS Drawing Sheet Aspect Ratio",
          "formula": "\\text{Length} : \\text{Width} = \\sqrt{2} : 1 \\approx 1.414 : 1, \\quad A_0 = 1\\text{ m}^2",
          "note": "Title Block: strictly 185 mm × 65 mm"
        }
      ],
      "examInsights": [
        {
          "title": "Why 2nd and 4th Angle Projections Are NEVER Used",
          "desc": "When the Horizontal Plane (HP) is rotated 90° clockwise to align with the Vertical Plane (VP), both planes overlap on the same side of the XY reference line (both above XY in 2nd quadrant; both below XY in 4th quadrant). This causes the Front View and Top View to superimpose and become completely illegible."
        },
        {
          "title": "The Four-Center Ellipse Method in Isometric Views",
          "desc": "In an isometric view, a circle becomes an ellipse inside a 30° rhombus. Join the two obtuse corners to the midpoints of opposite sides; the intersections give the 4 centers for drawing 4 smooth tangent circular arcs."
        },
        {
          "title": "IS SP7 Wall Thickness Standard",
          "desc": "Always draw double lines: external brick load-bearing walls must be 230 mm (9 inches) thick, while internal room partition walls must be 115 mm (4.5 inches) thick."
        }
      ],
      "topics": [
        {
          "id": "bacee-t3-1",
          "title": "M3T1: Importance of Graphics & BIS Standards (IS 10711)",
          "theory": "Universal graphic language. A0-A4 sheet sizes (1:√2). 185×65 mm title block. RF scales. Line conventions (thick HB vs thin 2H). Lettering IS 9609. Dimensioning rules (3:1 arrowhead, aligned vs unidirectional)."
        },
        {
          "id": "bacee-t3-2",
          "title": "M3T2: Orthographic Projections: 1st vs 3rd Angle",
          "theory": "Vertical and Horizontal planes. Why HP rotates 90° clockwise. Why 2nd & 4th angles fail. 4-point comparison table. Truncated cone BIS projection symbols."
        },
        {
          "id": "bacee-t3-3",
          "title": "M3T3: Projection of Solids, Isometric (0.816) & Perspective",
          "theory": "Polyhedra vs solids of revolution. Golden rule: base true shape first. Isometric axes (120°). Derivation of isometric scale 0.816. Isometric projection vs view. Four-Center ellipse method. Perspective projection (station point, VP)."
        },
        {
          "id": "bacee-t3-4",
          "title": "M3T4: Freehand Sketching, IS SP7 Floor Plan & CAD",
          "theory": "Pencil grip and line sketching. 1BHK residential floor plan (outer 230 mm, inner 115 mm walls, room sizes, door swings, Schedule of Openings). 7 Core CAD applications."
        },
        {
          "id": "bacee-t3-5",
          "title": "M3T5: Module 3 FAT PYQ Solved Questions",
          "theory": "First angle vs third angle + BIS lines. Projection of hexagonal prism + isometric cylinder/cone. Single-bedded residential floor plan blueprint. Isometric vs perspective + 7 CAD applications."
        }
      ],
      "pyqs": [
        {
          "id": "bacee-q3-1",
          "exam": "Argon Solved PYQ 1 — First Angle vs. Third Angle & BIS Line Conventions — 10 Marks",
          "marks": "10 Marks",
          "question": "(a) Differentiate between First Angle Projection and Third Angle Projection with neat BIS standard symbols and explain why Second and Fourth Angle projections are not used in engineering practice.\n(b) Sketch and state the application of five standard BIS line types as per IS SP 46.",
          "solution": "Part (a) First Angle vs. Third Angle Projection (5 Marks):\n1. Quadrant Location: First Angle: Object is in 1st Quadrant (Above HP, In front of VP). Order: Observer -> Object -> Projection Plane. Third Angle: Object is in 3rd Quadrant (Below HP, Behind VP). Order: Observer -> Transparent Plane -> Object.\n2. Projection Planes: First Angle: Assumed opaque (shadow on far screen). Third Angle: Assumed transparent glass box.\n3. Relative View Positions: First Angle: Top View (Plan) is strictly BELOW the Front View; Left Side View is drawn on the RIGHT of the Front View. Third Angle: Top View is strictly ABOVE the Front View; Left Side View is drawn on the LEFT of the Front View.\n4. Truncated Cone Symbols: In First Angle, the trapezoid is on the left and the two concentric circles are on the right. In Third Angle, the two concentric circles are on the left and the cone trapezoid points toward them on the right.\n5. Why 2nd and 4th Angle Projections Are NEVER Used: When the Horizontal Plane is rotated 90° clockwise to align with the Vertical Plane, both HP and VP overlap on the same side of the XY line (both above XY in 2nd quadrant; both below XY in 4th quadrant). Consequently, the Front View and Top View superimpose on each other and become unreadable!\n\nPart (b) 5 Standard BIS Line Types as per IS SP 46 (5 Marks):\n1. Continuous Thick (Type A, HB 0.5 mm): Used for visible outlines and external edges of components.\n2. Continuous Thin (Type B, 2H 0.2 mm): Used for dimension lines, extension lines, leader lines, and 45° section hatching.\n3. Dashed Thin (Type E/F, 2H): Used for hidden/invisible edges and internal cored contours.\n4. Chain Thin Long-Dashed Dotted (Type G, 2H): Used for center lines, axes of symmetry, and gear pitch circles.\n5. Chain Thin with Thick Ends (Type H, 2H with HB ends): Used for cutting planes showing cross-sectional views."
        },
        {
          "id": "bacee-q3-2",
          "exam": "Argon Solved PYQ 2 — Projection of Hexagonal Prism & Isometric Four-Center Ellipse — 10 Marks",
          "marks": "10 Marks",
          "question": "(a) A regular hexagonal prism of base side 25 mm and axis height 60 mm rests on its base on the Horizontal Plane (HP) with one base edge parallel to the Vertical Plane (VP). Describe the step-by-step First Angle construction.\n(b) Distinguish between Isometric Projection and Isometric View, and explain the Four-Center Method used to construct the isometric view of a cylinder or cone of base diameter 50 mm and height 70 mm.",
          "solution": "Part (a) Step-by-Step Hexagonal Prism Construction (5 Marks):\n1. Draw Reference Line XY: Since the prism axis is perpendicular to HP, the base rests on HP. By the Golden Rule, draw the Top View first below the XY line!\n2. Top View (below XY): Construct a regular hexagon of side 25 mm with two horizontal base edges parallel to XY. Label vertices a-b-c-d-e-f (top face) and 1-2-3-4-5-6 (bottom face).\n3. Project Verticals: Using a 2H pencil, project thin vertical lines from all 6 corners upward onto the reference line XY.\n4. Front View (above XY): Draw the base along XY and extend vertical edges 60 mm upward. The visible edges a'-1', b'-2', c'-3', d'-4' form a rectangle of width equal to across-corners distance and height 60 mm. Darken visible outlines with HB pencil and add aligned dimensions (25 mm side and 60 mm height).\n\nPart (b) Isometric Scale & Four-Center Method (5 Marks):\n1. Isometric Projection vs. Isometric View:\n- Isometric Projection foreshortens all dimensions along the 30° axes by the Isometric Scale = √(2/3) ≈ 0.8165 (81.6% of true length).\n- Isometric View (Isometric Drawing) uses 100% True Scale directly without foreshortening (appears ~22.5% larger).\n2. Four-Center Method for Circle/Cylinder Base (D = 50 mm):\n- Step 1: Draw an isometric rhombus ABCD of side 50 mm with base edges inclined at 30° to the horizontal.\n- Step 2: Mark midpoints M1, M2, M3, M4 of the four sides.\n- Step 3: From obtuse corner B, draw lines to opposite midpoints M1 and M2. From obtuse corner D, draw lines to midpoints M3 and M4.\n- Step 4: The intersections of these lines provide 4 centers (B, D, C1, C2) from which 4 smooth circular arcs are drawn tangent to the sides, completing the isometric ellipse!\n- Step 5 (For Cone/Cylinder): For a Cone, erect an axis of 70 mm from the rhombus center to Apex O and draw two tangent generators to the base ellipse; for a Cylinder, project the ellipse 70 mm higher and join with vertical tangents."
        },
        {
          "id": "bacee-q3-3",
          "exam": "Argon Solved PYQ 3 — Single-Bedded (1BHK) Residential Floor Plan as per IS SP7 — 10 Marks",
          "marks": "10 Marks",
          "question": "Draw a neat dimensioned double-line floor plan of a single-bedded (1BHK) residential building as per IS SP7 (National Building Code) showing Living Room, Bedroom, Kitchen, Combined Bath/WC, and Verandah, complete with standard architectural symbols and a Schedule of Openings.",
          "solution": "Complete Exam Blueprint (Full 10/10 marks):\nStep 1: Outer & Inner Walls (3 Marks):\n- Draw outer rectangular footprint using double lines with 230 mm (9-inch) outer wall thickness.\n- Partition into 5 functional spaces using 115 mm (4.5-inch) internal walls:\n  1. Verandah (1.8 m × 3.0 m) at entrance,\n  2. Living / Drawing Room (4.2 m × 3.6 m, Area = 15.12 m² ≥ NBC min 9.5 m²),\n  3. Bedroom (3.6 m × 3.0 m, Area = 10.8 m² ≥ NBC min 9.5 m²),\n  4. Kitchen (3.0 m × 2.4 m, Area = 7.2 m² ≥ NBC min 5.0 m²),\n  5. Combined Bath & WC (1.8 m × 2.1 m, Area = 3.78 m² ≥ NBC min 2.8 m²).\n\nStep 2: Architectural Symbols & Swings (4 Marks):\n- Doors: Draw quarter-circle swing arcs opening against the nearest wall (never blocking the room).\n- Windows: Draw centered double lines on external walls for natural cross-ventilation (W1, W2).\n- Ventilator: High ventilator (V) on outer wall of Bath/WC.\n- Label: Write Room Name and Dimensions (m × m) inside each room box, and place a North Arrow (↑ N) at top-right.\n\nStep 3: Schedule of Openings Table (3 Marks):\n- Main Door (D): 1000 mm × 2100 mm\n- Room Doors (D1): 900 mm × 2100 mm\n- Bath/WC Door (D2): 750 mm × 2100 mm\n- Windows (W1, W2): 1200 mm × 1200 mm\n- Ventilator (V): 600 mm × 450 mm."
        }
      ]
    },
    {
      "id": "bacee-m4",
      "moduleNum": 4,
      "pdfUrl": "/pdfs/basic_eng/BEEE_MOD-4.pdf",
      "title": "Manufacturing Processes, Energy Conversions & Mechanisms",
      "co": "CO: 4",
      "examScope": "CAT-2 & FAT",
      "weightage": "25-30 Marks in FAT",
      "status": "strong",
      "scope": "Metal Casting (green sand mold anatomy: cope, drag, cheek, parting line, pouring basin, sprue, runner, ingate, open & blind risers, dry sand cores, core prints, chaplets; 3 allowances: shrinkage, draft 1°-3°, machining; 6 pattern types: solid, split, match-plate, sweep, gated, skeleton; 6 major casting defects: shift, blowholes, penetration, shrinkage cavity, cold shut, hot tears; hot spots at intersections and 4 remedies: staggering T-junctions, internal chills, external chills, risers), Metal Forming (hot working > Trecryst vs cold working < Trecryst strain hardening; rolling: 4-high mill small work rolls + large backup rolls, 6-stage shape rolling of rails/I-beams; forging: unbroken continuous grain flow superiority, closed-die forging nomenclature: rib, boss, web, flash gutter; draft angles: external 3°-7° vs internal 7°-10°; extrusion: extrudability order, CCD, 4 types: direct/forward, indirect/backward with zero container wall friction, impact extrusion of cans/tubes, hydrostatic extrusion; flow pattern S vs pattern C dead metal zone; wire drawing through tapered carbide die), Metal Joining Processes (fusion weld 3 zones: Fusion Zone FZ, Heat Affected Zone HAZ grain coarsening - weakest zone where fracture initiates, Base Metal BM; power density spectrum: gas 10 W/cm², arc 10^3-10^4 W/cm², laser/electron beam 10,000+ W/cm² deep keyhole; welding positions 1G-4G & butt groove thickness selection; 3 arc polarities: DCEN 67% heat at workpiece deep penetration vs DCEP 67% heat at electrode with cathodic oxide cleaning action for Al/Mg vs AC 50/50; SMAW stick with flux, GTAW/TIG non-consumable tungsten with pure argon shield, GMAW/MIG consumable wire spool; soldering <450°C capillary action vs brazing >450°C vs welding), Metal Cutting & CNC (single-point tool rake angle α, clearance angle γ, 3 heat zones: primary shear zone carries 75-80% heat, secondary tool-chip 10-20%, tertiary flank 3-5%; 4 chip types: continuous, continuous with BUE, discontinuous, serrated saw-tooth; lathe operations: turning, facing, taper turning, boring, knurling; shaping tool reciprocates vs planing work reciprocates; twist drill anatomy 118° point angle, core/web, flutes, margins; hole sequence: drill -> bore -> ream -> tap; up milling chip 0 to max vs down climb milling chip max to 0; CNC G-codes G00/G01/G02/G03, M-codes, MCU, encoders; PTP vs contouring), Additive Manufacturing (cost vs complexity curve, 6-step workflow, .STL triangle mesh physics and stair-stepping, all 7 ASTM F2792 categories: FDM/FFF material extrusion anisotropic Z-axis, SLA vat photopolymerization, SLS/SLM powder bed fusion, Binder Jetting at room temp, Material Jetting PolyJet, DED/LENS blown powder laser repair, Sheet Lamination LOM/UAM), Thermal Systems & IC Engines (geometry: TDC, BDC, stroke L, bore D, swept volume Vs, clearance volume Vc, compression ratio r; anatomy: piston Al-Si alloy with 2 compression rings + 1 oil scraper ring, gudgeon pin, connecting rod, crankshaft, rim-type flywheel I = mR²; 4 strokes: suction, compression, power, exhaust; 4-stroke vs 2-stroke ports/scavenging; SI petrol Otto cycle spark ignition r = 6-10.5 vs CI diesel Diesel cycle fuel injector r = 14-22), Power Plants (coal-fired thermal Rankine cycle 4 circuits, 3 heat accessories: superheater, economizer preheating feedwater saving 10-12% fuel, air preheater; nuclear fission 1 kg U235 = 4500 tonnes coal, 200 MeV fission equation, moderator D2O, control rods Boron/Cadmium, PWR 155 bar two-loop vs BWR; hydroelectric P = ρgQHη, penstock, surge tank absorbing water hammer shockwaves, draft tube diverging pipe creating negative suction head; Pelton high head >250m, Francis medium 50-250m, Kaplan low <50m; solar PV vs CSP parabolic troughs; wind turbines P ∝ v³ Betz limit 59.3%), Refrigeration & AC (VCRS 4 components: evaporator, compressor, condenser, expansion capillary tube, receiver; COP = QL/Win, 1 TR = 3.517 kW; VARS aqua-ammonia heat-driven; AC controlling temp, humidity, purity, air velocity), Mechanisms & Kinematics (lower pairs 1-3 DOF vs higher pairs point/line contact; Gruebler mobility criterion F = 3(N-1) - 2P1 - P2; Grashof's law s + l ≤ p + q & 3 inversions: beam engine crank-rocker, coupled wheels double-crank, Watt's straight-line double-rocker; Stewart Platform Hexapod 6-DOF parallel manipulator surge/sway/heave/roll/pitch/yaw; gears: spur, helical, bevel, worm 20:1-100:1 self-locking, rack & pinion; cams & followers; bearings), and Robotics & Actuators (pneumatic compressed air 5-10 bar, springy, ultra-fast, clean vs hydraulic pressurized oil 100-300 bar, virtually incompressible, massive force 25× pneumatic, rock-solid stiffness for flight simulators & heavy machinery).",
      "blueprint": {
        "marksTotal": "25 to 30 Marks in FAT",
        "questionTypes": [
          {
            "type": "Manufacturing Process Selection & Sketches (10 Marks)",
            "desc": "Selecting between Sand Casting, Closed-Die Forging, TIG/MIG Welding, and Additive Manufacturing (SLM/FDM) for automotive components with mold/circuit sketches."
          },
          {
            "type": "Thermal Power Plants, VCRS Refrigeration & IC Engines (10 Marks)",
            "desc": "Specific function of Economizer, Nuclear Moderator/Control Rods, Surge Tank, VCRS 1.5 TR cooling COP numerical, and 4-stroke Otto vs Diesel engine."
          },
          {
            "type": "Mechanisms, Grashof's Law & Stewart Hexapod (10 Marks)",
            "desc": "Four-bar link mobility using Gruebler's criterion, Grashof condition (s + l ≤ p + q) inversions, and 6-DOF Stewart Platform parallel manipulator vs pneumatic actuators."
          }
        ]
      },
      "formulaSheet": [
        {
          "name": "Gruebler's Planar Mobility Criterion",
          "formula": "F = 3(N - 1) - 2 P_1 - 1 P_2",
          "note": "4-bar linkage: F = 3(3) - 2(4) = 1 DOF; 5-bar: F = 2 DOF"
        },
        {
          "name": "Grashof's Condition for 4-Bar Chain",
          "formula": "s + l \\le p + q",
          "note": "Shortest link s can revolve full 360°"
        },
        {
          "name": "Coefficient of Performance (COP)",
          "formula": "\\text{COP} = \\frac{\\text{Desired Cooling Effect } Q_L}{\\text{Work Input } W_{\\text{in}}}, \\quad Q_H = Q_L + W_{\\text{in}}",
          "note": "1 TR = 3.517 kW ≈ 210 kJ/min"
        },
        {
          "name": "Air-Standard Otto Efficiency",
          "formula": "\\eta_{\\text{Otto}} = 1 - \\frac{1}{r^{\\gamma - 1}}, \\quad r = \\frac{V_s + V_c}{V_c}",
          "note": "Compression ratio r ≈ 8 to 11"
        },
        {
          "name": "Hydroelectric & Wind Power Scaling",
          "formula": "P_{\\text{hydro}} = \\rho g Q H \\eta, \\quad P_{\\text{wind}} = \\frac{1}{2} \\rho A v^3 C_p \\quad (C_{p,\\max} = 59.3\\% \\text{ Betz})",
          "note": "Wind power scales with CUBE of wind speed v³!"
        }
      ],
      "examInsights": [
        {
          "title": "Grain Flow Superiority in Forging",
          "desc": "In casting, crystal grains are random and isotropic (brittle); in machining, tool paths cut across grain fibers (exposing ends to fatigue cracks); in forging, unbroken grain fibers deform continuously along the component contour, giving maximum fatigue and impact resistance."
        },
        {
          "title": "Cathodic Oxide Cleaning Action in DCEP Welding",
          "desc": "In DCEP (Reverse Polarity), the workpiece is negative. Heavy positive argon ions (Ar+) accelerate into the workpiece like sandblasting, shattering the stubborn refractory Al2O3 oxide film on aluminum and MgO on magnesium."
        },
        {
          "title": "Why Stewart Hexapods Beat Serial Robot Arms",
          "desc": "A Stewart Platform Hexapod uses 6 parallel extensible legs to position a platform in all 6 Spatial Degrees of Freedom. Because all 6 legs share the load simultaneously in parallel, it offers vastly higher stiffness, zero backlash, and 25× higher payload capacity than a serial cantilever arm."
        }
      ],
      "topics": [
        {
          "id": "bacee-t4-1",
          "title": "M4T1: Basic Metal Casting (Anatomy, Allowances, Defects)",
          "theory": "Cope, drag, cheek, gating system, open & blind risers, dry sand cores, chaplets. Shrinkage, draft, machining allowances. 6 pattern types. 6 casting defects. Hot spots and remedies."
        },
        {
          "id": "bacee-t4-2",
          "title": "M4T2: Metal Forming (Hot vs Cold, Rolling, Forging, Extrusion)",
          "theory": "Hot vs cold working. 4-high rolling mill. Unbroken grain flow in closed-die forging. Direct vs indirect extrusion (zero container wall friction). Wire drawing."
        },
        {
          "id": "bacee-t4-3",
          "title": "M4T3: Metal Joining Processes (Arc Welding: SMAW, TIG, MIG)",
          "theory": "3 weld zones (FZ, HAZ weakest zone, BM). DCEN deep penetration vs DCEP oxide cleaning vs AC. SMAW stick, TIG non-consumable tungsten, MIG continuous wire. Soldering vs brazing."
        },
        {
          "id": "bacee-t4-4",
          "title": "M4T4: Metal Cutting (Machining) & CNC Machining",
          "theory": "Single-point tool geometry (rake and clearance). 3 heat zones. 4 chip types. Lathe operations. Shaping vs planing. Twist drill anatomy. Up vs down climb milling. CNC G/M-codes and PTP vs contouring."
        },
        {
          "id": "bacee-t4-5",
          "title": "M4T5: Additive Manufacturing (All 7 ASTM Categories)",
          "theory": "Why AM: complexity is free. 6-step workflow. .STL mesh. 7 ASTM categories: FDM material extrusion, SLA vat photopolymerization, SLS/SLM powder bed, Binder Jetting, Material Jetting, DED blown powder, Sheet Lamination."
        },
        {
          "id": "bacee-t4-6",
          "title": "M4T6: Thermal Systems & Internal Combustion (IC) Engines",
          "theory": "TDC, BDC, stroke, bore, swept/clearance volume, compression ratio r. Piston rings, connecting rod, flywheel I = mR². 4 strokes. 4-stroke vs 2-stroke. Otto cycle petrol vs Diesel cycle diesel."
        },
        {
          "id": "bacee-t4-7",
          "title": "M4T7: Introduction to Power Plants (Thermal, Nuclear, Hydro, Wind)",
          "theory": "Coal plant 4 circuits & 3 accessories: superheater, economizer (preheats feedwater), air preheater. Nuclear fission 200 MeV, moderator D2O, control rods, PWR vs BWR. Hydroelectric penstock, surge tank (water hammer), draft tube; Pelton, Francis, Kaplan. Wind P ∝ v³."
        },
        {
          "id": "bacee-t4-8",
          "title": "M4T8: Refrigeration and Air Conditioning (VCRS & VARS)",
          "theory": "VCRS 4 components: evaporator, compressor, condenser, expansion valve, receiver. COP = QL/Win. 1 TR = 3.517 kW. VARS aqua-ammonia heat-driven. Air conditioning comfort parameters."
        },
        {
          "id": "bacee-t4-9",
          "title": "M4T9: Basics of Fuel Cells (Hydrogen PEMFC)",
          "theory": "Electrochemical energy conversion. Platinum anode H2 -> 2H+ + 2e-. Nafion proton exchange membrane. Cathode 1/2 O2 + 2H+ + 2e- -> H2O. Pure water byproduct, 60% efficiency."
        },
        {
          "id": "bacee-t4-10",
          "title": "M4T10: Mechanisms (Four-Bar, Inversions & Stewart Hexapod)",
          "theory": "Lower vs higher pairs. Gruebler mobility F = 3(N-1) - 2P1 - P2. Grashof's law & 3 inversions: beam engine crank-rocker, coupled wheels double-crank, Watt straight-line double-rocker. Stewart Platform 6-DOF hexapod parallel manipulator."
        },
        {
          "id": "bacee-t4-11",
          "title": "M4T11: Mechanical Components & Motion Control",
          "theory": "Gears: spur, helical, bevel 90°, worm 20:1-100:1 self-locking, rack & pinion. Cams and followers. Belt vs chain drives. Sliding vs rolling bearings."
        },
        {
          "id": "bacee-t4-12",
          "title": "M4T12: Robotics & Automation (Pneumatic vs Hydraulic)",
          "theory": "Sensors, controller, actuators, gripper. Pneumatic (compressed air 5-10 bar, springy, clean, ultra-fast) vs Hydraulic (pressurized oil 100-300 bar, virtually incompressible, massive force 25×, rock-solid stiffness)."
        },
        {
          "id": "bacee-t4-13",
          "title": "M4T13: Module 4 FAT PYQ Self-Assessment & Solved Problems",
          "theory": "Automotive manufacturing selection (casting, forging, TIG, SLM). Power plant accessories + VCRS 1.5 TR numerical. Grashof 4-bar mobility + Stewart hexapod hydraulic actuation."
        }
      ],
      "pyqs": [
        {
          "id": "bacee-q4-1",
          "exam": "Argon Solved PYQ 1 — Multi-Concept Manufacturing Process Selection — 10 Marks",
          "marks": "10 Marks",
          "question": "An automotive company is manufacturing four parts for a new hybrid vehicle: (i) A hollow cast-iron engine cylinder block with complex internal water jackets, (ii) A high-fatigue alloy-steel crankshaft, (iii) A thin 2 mm aluminium battery enclosure requiring leak-proof joints, and (iv) A custom patient-matched lattice titanium bracket (batch size = 1). Select the exact manufacturing process for each, sketch the mold/setup for (i) and (iii), and justify your choice.",
          "solution": "Complete Exam Blueprint (Full 10/10 marks):\n\nPart (i) Engine Cylinder Block -> Sand Casting with Dry Sand Cores (2.5 Marks):\n- Justification: Cast iron has high fluidity in the molten state and low volumetric shrinkage. The intricate internal hollow cooling water jackets cannot be machined from solid stock; they are formed using baked Dry Sand Cores supported by Chaplets and fed by an open Riser to prevent shrinkage cavities.\n\nPart (ii) Alloy-Steel Crankshaft -> Closed-Die Hot Forging (2.5 Marks):\n- Justification: Forging above the recrystallization temperature squeezes hot alloy steel between impression dies. This deforms the metal crystal grains into continuous, unbroken grain flow lines that follow the exact contour of the crank pins and webs, giving unmatched impact strength and fatigue resistance against cyclic combustion stresses.\n\nPart (iii) Thin 2 mm Aluminium Battery Enclosure -> GTAW / TIG Welding with AC/DCEP & Argon (2.5 Marks):\n- Justification: Thin aluminum sheets melt at a low temperature (~660 °C) and burn through easily while being coated with a tough, refractory Al2O3 oxide film (MP ~2072 °C). TIG welding with a non-consumable Tungsten electrode under pure Argon gas shielding allows independent, precise heat control. Using AC or DCEP provides Cathodic Oxide Cleaning Action to blast off the Al2O3 skin without spatter, producing a hermetic, leak-proof joint.\n\nPart (iv) Custom Lattice Titanium Bracket (Batch Size = 1) -> Additive Manufacturing (SLM / DMLS) (2.5 Marks):\n- Justification: For a batch size of 1 with complex internal hollow lattice geometry, creating custom forging dies or casting molds is cost-prohibitive. Selective Laser Melting (SLM) reads the 3D CAD .STL file directly and fuses Ti6Al4V powder layer-by-layer with zero tooling cost, producing lightweight topology-optimized structures impossible to machine by CNC."
        },
        {
          "id": "bacee-q4-2",
          "exam": "Argon Solved PYQ 2 — Power Plant Accessories + VCRS 1.5 TR Numerical — 10 Marks",
          "marks": "10 Marks",
          "question": "(a) Explain the specific function of the Economizer in a Steam Power Plant, the Moderator and Control Rods in a Nuclear Reactor, and the Surge Tank in a Hydroelectric Plant.\n(b) A domestic refrigerator working on the VCRS cycle extracts 1.5 TR of heat from a cold chamber while its compressor consumes 1.25 kW of electrical power. Calculate the heat rejected at the condenser (in kW) and the COP of the refrigerator.",
          "solution": "Part (a) Critical Power Plant Components (6 Marks):\n1. Economizer (Coal Steam Plant): Placed in the boiler flue gas duct between the superheater and air preheater. It extracts waste heat from hot flue gases leaving the boiler to preheat the incoming liquid feedwater before it enters the boiler drum. This saves 10%–12% coal fuel, prevents thermal shock cracking of the boiler drum, and boosts overall thermal efficiency.\n2. Moderator vs. Control Rods (Nuclear Reactor Core):\n- Moderator (Heavy Water D2O or High-Purity Graphite): Slows down fast fission neutrons (kinetic energy ~2 MeV) via elastic collisions to thermal equilibrium speeds (~0.025 eV) so they can be readily captured by U-235 nuclei to sustain the nuclear chain reaction.\n- Control Rods (Boron or Cadmium): Highly neutron-absorbing materials inserted into or withdrawn from the reactor core. Pushing them in absorbs excess thermal neutrons to decrease power or trigger emergency SCRAM shutdown; pulling them out increases neutron multiplication factor k.\n3. Surge Tank (Hydroelectric Power Plant): A tall vertical open-topped standpipe placed along the high-pressure Penstock pipe near the powerhouse. When the turbine governor rapidly closes the inlet gates during load rejection, the surge tank absorbs the violent kinetic shockwaves (Water Hammer), preventing penstock pipe rupture.\n\nPart (b) VCRS Refrigeration Numerical (4 Marks):\n- Given: Cooling capacity QL = 1.5 TR; Compressor work input Win = 1.25 kW.\n- Convert TR to kW: Since 1 Ton of Refrigeration (1 TR) = 3.517 kW (≈ 3.5 kW):\n  Refrigerating Effect QL = 1.5 × 3.517 kW = 5.275 kW (or 5.25 kW using 3.5 kW/TR).\n- Coefficient of Performance (COP):\n  COP = QL / Win = 5.275 kW / 1.25 kW = 4.22 (or 5.25 / 1.25 = 4.20).\n- Heat Rejected at the Condenser (QH):\n  By the First Law of Thermodynamics across the steady-state VCRS loop:\n  QH = QL + Win = 5.275 kW + 1.25 kW = 6.525 kW (or 5.25 + 1.25 = 6.50 kW).\nBoxed Answer: (a) Functions explained; (b) COP = 4.22, Heat Rejected at Condenser = 6.53 kW."
        },
        {
          "id": "bacee-q4-3",
          "exam": "Argon Solved PYQ 3 — Grashof 4-Bar Mobility, Stewart Hexapod & Hydraulic Actuators — 10 Marks",
          "marks": "10 Marks",
          "question": "(a) A planar four-bar linkage has link lengths of 40 mm, 100 mm, 70 mm, and 80 mm. Verify whether it satisfies Grashof's Law, compute its Degrees of Freedom using Grübler's criterion, and state the type of mechanism obtained when the 40 mm link is fixed vs. when a link adjacent to the 40 mm link is fixed.\n(b) Sketch and describe the 6-DOF Stewart Platform Hexapod and explain why Hydraulic actuators are chosen over Pneumatic actuators for heavy aircraft flight simulators.",
          "solution": "Part (a) Grashof's Law & Grübler's Mobility Numerical (5 Marks):\n1. Link Length Classification:\nShortest link s = 40 mm; Longest link l = 100 mm; Intermediate links p = 70 mm, q = 80 mm.\n- Sum of shortest and longest links: s + l = 40 + 100 = 140 mm.\n- Sum of other two links: p + q = 70 + 80 = 150 mm.\n- Check: Since s + l (140 mm) ≤ p + q (150 mm), the linkage SATISFIES Grashof's Law (Class I kinematic chain).\n2. Grübler's Degrees of Freedom (F):\nNumber of links N = 4; Number of 1-DOF revolute pin joints P1 = 4; Higher pairs P2 = 0.\nF = 3(N - 1) - 2 P1 - 1 P2 = 3(4 - 1) - 2(4) - 0 = 3(3) - 8 = 9 - 8 = 1 DOF.\n(A single input motor driving one crank completely defines the motion of all links!).\n3. Mechanism Inversions:\n- Case (i) Shortest link (40 mm) is FIXED as the frame -> Double-Crank (Drag-Link / Coupled Locomotive Wheels) mechanism: both links adjacent to the fixed frame rotate through a complete 360° continuously.\n- Case (ii) A link adjacent to the shortest link (70 mm or 80 mm) is FIXED -> Crank-Rocker (Beam Engine) mechanism: the shortest link (40 mm) acts as a revolving crank (360°), while the opposite link oscillates as a rocking lever.\n\nPart (b) Stewart Platform Hexapod & Hydraulic vs. Pneumatic Actuators (5 Marks):\n1. Stewart Platform Architecture:\nA parallel robotic manipulator consisting of a fixed base plate connected to a movable top payload platform (end-effector) via 6 independent extensible linear actuator legs attached with universal/spherical joints. Coordinated variation of the 6 leg lengths provides all 6 Spatial Degrees of Freedom: 3 translations (Surge X, Sway Y, Heave Z) + 3 rotations (Roll, Pitch, Yaw).\n2. Why Hydraulic Over Pneumatic for Multi-Ton Flight Simulators:\n- Incompressibility & Stiffness: Hydraulic mineral oil is virtually incompressible (bulk modulus ~1.5 GPa), providing rock-solid dynamic stiffness that holds heavy multi-ton flight simulator cockpits rigidly mid-air without sagging or drifting.\n- Elimination of Spongy Bounce: Air is highly compressible; a pneumatic actuator acts like a spongy air-spring, causing uncontrollable bouncing, overshoot, and dangerous positioning lag under oscillating cabin inertia.\n- Massive Force Density: Hydraulic systems operate at 100 to 300+ bar (generating 25× higher force for the same cylinder diameter), easily lifting multi-ton simulator cabins, whereas pneumatics are limited to 5 to 10 bar."
        }
      ]
    }
  ]
};
