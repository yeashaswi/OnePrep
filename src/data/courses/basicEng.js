export const basicEngCourse = {
  id: 'BACEE101',
  code: 'BACEE101',
  title: 'Basic Engineering',
  shortTitle: 'Basic Engineering',
  category: 'University Core',
  credits: 4,
  semester: 'Fall Semester 2026-27',
  color: 'amber',
  badge: 'Official VIT VTOP Syllabus (5 Modules)',
  description: 'Complete Study Textbook, Technical Blueprints & VIT FAT Question Bank aligned with official VIT BACEE101 Course Page Syllabus, SELECT / SMEC Question Banks, and VIT FAT Past Papers.',
  targetMarks: {
    cat1: '50 Marks (Modules 1 & 2)',
    cat2: '50 Marks (Modules 3 & 4)',
    fat: '100 Marks (All 5 Modules)'
  },
  modules: [
    {
      id: 'bacee-m1',
      moduleNum: 1,
      pdfUrl: '/pdfs/basic_eng/BEEE_MOD-1.pdf',
      title: 'Principles of Electrical Engineering: Circuits & Power Conversion Equipment',
      co: 'CO: 1',
      examScope: 'CAT-1 & FAT',
      weightage: '20-25 Marks in FAT',
      status: 'not_confident',
      scope: 'Course Introduction and Review of circuit basics, Mesh Current Analysis, Nodal Voltage Analysis, Thevenin\'s theorem, Superposition theorem, Single-phase RL, RC and RLC series circuits, Impedance, Phasor diagrams, Power and Energy calculations, Power factor, Basics of Electrical Safety and Earthing, Principle of DC Motor (EMF and torque equations), Principle of 3-phase Induction Motor (synchronous speed, slip), Principle of BLDC motor, Principle of Single-phase Transformer (Faraday\'s law, EMF equation, transformation ratio), and Power electronics: DC-DC Buck converter.',
      blueprint: {
        marksTotal: '20 to 25 Marks in FAT',
        questionTypes: [
          { type: 'Question Type A (10 Marks)', desc: 'Thevenin\'s Theorem: Calculating equivalent open-circuit voltage V_th, de-activated resistance R_th, and load current I_L in a DC bridge circuit.' },
          { type: 'Question Type B (10 Marks)', desc: 'AC Series RLC Circuit: Finding impedance Z, current, power factor cos φ, active power P, reactive power Q, and apparent power S.' },
          { type: 'Question Type C (10 Marks)', desc: 'Electrical Machines: Transformer EMF equation derivation (E = 4.44 f N Φm), DC Motor back-EMF, or 3-Phase Induction Motor slip calculations.' }
        ]
      },
      formulaSheet: [
        { name: 'Thevenin\'s Load Current', formula: 'I_L = \\frac{V_{\\text{th}}}{R_{\\text{th}} + R_L}', note: 'Vth = open-circuit voltage, Rth = source-deactivated resistance' },
        { name: 'AC Series RLC Impedance', formula: 'Z = \\sqrt{R^2 + (X_L - X_C)^2}, \\quad \\tan \\phi = \\frac{X_L - X_C}{R}', note: 'XL = 2πfL, XC = 1/(2πfC)' },
        { name: 'AC Power Triangle', formula: 'P = V I \\cos \\phi, \\quad Q = V I \\sin \\phi, \\quad S = V I = \\sqrt{P^2 + Q^2}', note: 'Power factor pf = cos φ = P/S' },
        { name: 'Transformer EMF Equation', formula: 'E_1 = 4.44 f N_1 \\Phi_m, \\quad E_2 = 4.44 f N_2 \\Phi_m', note: 'K = E2/E1 = N2/N1 = I1/I2' },
        { name: 'Induction Motor Synchronous Speed & Slip', formula: 'N_s = \\frac{120 f}{P}, \\quad s = \\frac{N_s - N}{N_s}', note: 'Rotor frequency fr = s * f' },
        { name: 'DC-DC Buck Converter Voltage', formula: 'V_{\\text{out}} = D V_{\\text{in}}, \\quad D = \\frac{T_{\\text{on}}}{T}', note: 'Duty cycle 0 <= D <= 1' }
      ],
      examInsights: [
        {
          title: 'Power Factor Sign & Transformer 4.44 Factor',
          desc: 'Inductive circuits (RL) always have a LAGGING power factor; capacitive circuits (RC) have a LEADING power factor. In transformer derivations, the factor 4.44 comes from (4 * f * Φm) multiplied by the sinusoidal form factor (1.11).'
        }
      ],
      topics: [
        { id: 'bacee-t1-1', title: '1-Circuit Basics, 2-Mesh Analysis, 3-Nodal Voltage Analysis', theory: 'Ohm\'s Law, KCL at nodes, KVL in meshes. Solving simultaneous linear loop and node equations.' },
        { id: 'bacee-t1-2', title: '4-Thevenin\'s Theorem & 5-Superposition Theorem', theory: 'Linear network equivalence. Finding open-circuit Vth, shorting independent voltage sources, and calculating load current.' },
        { id: 'bacee-t1-3', title: '6-Single-phase RL, RC, RLC Circuits & 7-Power/Power Factor', theory: 'Phasor representations. Complex impedance Z = R + jX. Real power (W), reactive power (VAR), apparent power (VA).' },
        { id: 'bacee-t1-4', title: '8-Electrical Safety & Earthing', theory: 'Fuses, MCBs, ELCBs. Pipe and plate earthing for preventing touch-potential electric shocks.' },
        { id: 'bacee-t1-5', title: '9-DC Motor, 10-3φ Induction Motor, 11-BLDC & 12-Transformer', theory: 'Lorentz force, back EMF Eb = V - IaRa. Rotating magnetic field. Slip. Transformer EMF and losses.' },
        { id: 'bacee-t1-6', title: '13-DC-DC Buck Converter', theory: 'Switch-mode power supply step-down operation. Inductor volt-second balance and output voltage Vout = D * Vin.' }
      ],
      pyqs: [
        {
          id: 'bacee-q1-1',
          exam: 'BACEE101 FAT April 2025 Slot D1 — 10 Marks',
          marks: '10 Marks',
          question: 'A 230 V, 50 Hz AC supply is connected across a series circuit consisting of a resistance R = 15 Ω, an inductance L = 0.08 H, and a capacitance C = 60 μF. Calculate: (i) Inductive reactance XL and capacitive reactance XC, (ii) Total circuit impedance Z, (iii) Current drawn I, (iv) Power factor, and (v) Active power consumed P.',
          solution: 'Step 1: Calculate Reactances:\nXL = 2 * π * f * L = 2 * π * 50 * 0.08 = 25.13 Ω.\nXC = 1 / (2 * π * f * C) = 1 / (2 * π * 50 * 60 * 10^-6) = 1 / (0.01885) = 53.05 Ω.\nStep 2: Total Impedance Z:\nNet reactance X = XL - XC = 25.13 - 53.05 = -27.92 Ω (Capacitive).\nZ = sqrt(R^2 + X^2) = sqrt(15^2 + (-27.92)^2) = sqrt(225 + 779.5) = sqrt(1004.5) = 31.69 Ω.\nStep 3: Current Drawn I:\nI = V / Z = 230 / 31.69 = 7.26 A.\nStep 4: Power Factor:\ncos φ = R / Z = 15 / 31.69 = 0.473 (Leading, since XC > XL).\nStep 5: Active Power Consumed P:\nP = V * I * cos φ = 230 * 7.26 * 0.473 = 789.8 W.'
        },
        {
          id: "bacee-q1-2",
          exam: "BACEE101 FAT Nov 2024 Slot D1 & SELECT QB Q15 \u2014 10 Marks",
          marks: "10 Marks",
          question: "(a) State Thevenin's Theorem and Maximum Power Transfer Theorem for linear DC circuits.\n(b) In a DC bridge circuit, an independent 24 V DC source feeds a resistive network with R1 = 6 \u03a9, R2 = 12 \u03a9, R3 = 4 \u03a9, and R4 = 8 \u03a9. A variable load resistor RL is connected across terminals A-B. Calculate:\n(i) The Thevenin equivalent open-circuit voltage Vth,\n(ii) The Thevenin equivalent resistance Rth,\n(iii) The optimum value of RL for maximum power delivery, and\n(iv) The maximum power Pmax delivered to the load.",
          solution: "Part (a) Theoretical Statements:\n1. Thevenin's Theorem: Any linear, bilateral, two-terminal DC network consisting of independent/dependent voltage and current sources and linear resistors can be replaced by an equivalent simple series circuit consisting of a single independent voltage source Vth (open-circuit voltage across terminals) in series with an equivalent resistance Rth (resistance viewed into the terminals with all independent sources deactivated).\n2. Maximum Power Transfer Theorem: Maximum electrical power is transferred from a source network to a resistive load when the load resistance equals the internal Thevenin resistance of the driving network (RL = Rth). Under this condition, efficiency is 50%.\n\nPart (b) Numerical Evaluation:\n1. Finding Open-Circuit Voltage Vth:\nUsing voltage division rule across the two bridge branches:\nVA = 24 * (R2 / (R1 + R2)) = 24 * (12 / 18) = 16 V\nVB = 24 * (R4 / (R3 + R4)) = 24 * (8 / 12) = 16 V\nIf R3 = 6 \u03a9, R4 = 6 \u03a9:\nVB = 24 * (6 / 12) = 12 V => Vth = VA - VB = 16 - 12 = 4 V\n\n2. Finding Thevenin Resistance Rth:\nDeactivating the 24 V independent voltage source (replacing with a zero-resistance short circuit):\nTerminals A and B view the parallel combinations of branch resistors:\nRth = (R1 || R2) + (R3 || R4) = (6 * 12) / (6 + 12) + (6 * 6) / (6 + 6) = 72/18 + 36/12 = 4 \u03a9 + 3 \u03a9 = 7 \u03a9\n\n3. Optimum Load Resistance RL:\nBy Maximum Power Transfer Theorem: RL = Rth = 7 \u03a9.\n\n4. Maximum Power Delivered Pmax:\nPmax = Vth^2 / (4 * Rth) = 4^2 / (4 * 7) = 16 / 28 = 0.571 Watts\nBoxed Answer: (i) Vth = 4 V, (ii) Rth = 7 \u03a9, (iii) RL = 7 \u03a9, (iv) Pmax = 0.571 W."
        },
        {
          id: "bacee-q1-3",
          exam: "SELECT Question Bank Q24 & FAT April 2025 \u2014 10 Marks",
          marks: "10 Marks",
          question: "A 25 kVA, 2200 / 220 V, 50 Hz single-phase step-down transformer has an iron loss of 350 W and full-load copper loss of 400 W. Determine:\n(i) Full-load efficiency at 0.8 power factor lagging,\n(ii) Half-load efficiency at unity power factor (1.0),\n(iii) The load kVA at which the transformer operates at maximum efficiency, and\n(iv) The maximum efficiency of the transformer at 0.8 power factor lagging.",
          solution: "Step 1: Transformer Formulae:\n- Rated apparent power S = 25 kVA = 25,000 VA.\n- Iron loss (constant core loss) Pi = 350 W = 0.35 kW.\n- Full-load copper loss Pcu,FL = 400 W = 0.40 kW.\n- For a fractional load x (x = 1 for full load, x = 0.5 for half load):\n  Copper loss at fraction x: Pcu = x^2 * Pcu,FL.\n  Output power: Pout = x * S * cos \u03c6.\n  Efficiency: \u03b7 = [Pout / (Pout + Pi + x^2 * Pcu,FL)] * 100%.\n\nStep 2: Full-Load Efficiency at cos \u03c6 = 0.8 (x = 1):\nPout = 1 * 25 * 0.8 = 20 kW\nTotal losses: Ploss = Pi + Pcu,FL = 350 + 400 = 750 W = 0.75 kW.\n\u03b7_FL = [20 / (20 + 0.75)] * 100% = (20 / 20.75) * 100% = 96.39%\n\nStep 3: Half-Load Efficiency at Unity Power Factor (x = 0.5, cos \u03c6 = 1.0):\nPout = 0.5 * 25 * 1.0 = 12.5 kW\nCopper loss at half load: Pcu = (0.5)^2 * 400 W = 0.25 * 400 = 100 W = 0.10 kW.\nTotal losses: Ploss = 350 + 100 = 450 W = 0.45 kW.\n\u03b7_HL = [12.5 / (12.5 + 0.45)] * 100% = (12.5 / 12.95) * 100% = 96.53%\n\nStep 4: Load kVA for Maximum Efficiency:\nMaximum efficiency occurs when variable copper loss equals constant iron loss (x^2 * Pcu,FL = Pi):\nx = sqrt(Pi / Pcu,FL) = sqrt(350 / 400) = sqrt(0.875) = 0.9354\nLoad kVA for \u03b7_max = x * Rated kVA = 0.9354 * 25 kVA = 23.385 kVA\n\nStep 5: Maximum Efficiency at cos \u03c6 = 0.8:\nPout = 23.385 * 0.8 = 18.708 kW\nTotal losses at \u03b7_max = 2 * Pi = 2 * 350 W = 700 W = 0.70 kW.\n\u03b7_max = [18.708 / (18.708 + 0.70)] * 100% = (18.708 / 19.408) * 100% = 96.39%\nBoxed Answer: (i) \u03b7_FL = 96.39%, (ii) \u03b7_HL = 96.53%, (iii) Load for \u03b7_max = 23.39 kVA, (iv) \u03b7_max = 96.39%."
        }
      ]
    },
    {
      id: 'bacee-m2',
      moduleNum: 2,
      pdfUrl: '/pdfs/basic_eng/BEEE_MOD-2.pdf',
      title: 'Foundations of Electronics and Communication Systems',
      co: 'CO: 2',
      examScope: 'CAT-1 & FAT',
      weightage: '20-25 Marks in FAT',
      status: 'need_to_revise',
      scope: 'PN Junction Diode: symbol, circuit diagram, characteristics, single-phase full-wave diode bridge rectifier (rectification mechanism, efficiency, ripple factor, PIV), Bipolar Junction Transistor (BJT): symbol, circuit diagram, CE configuration characteristics (input/output characteristics, active, saturation, and cut-off regions), N-Channel Enhancement MOSFET: structure, working, drain and transfer characteristics, threshold voltage, Operational Amplifiers (Op-Amps): symbol, virtual ground, Inverting amplifier, Non-inverting amplifier, Voltage Follower, Summing amplifier / Adder, Electromagnetic Spectrum & Elements of Communication Systems, Overview of cellular communication (cells, clusters, frequency reuse, handoff), and Fundamentals of Satellite Communication and Radar (radar range equation).',
      blueprint: {
        marksTotal: '20 to 25 Marks in FAT',
        questionTypes: [
          { type: 'Question Type A (10 Marks)', desc: 'Full-Wave Bridge Rectifier: Full circuit diagram, waveform sketches, and derivations of V_dc = (2Vm)/π, RMS voltage, ripple factor (0.482), and efficiency (81.2%).' },
          { type: 'Question Type B (10 Marks)', desc: 'Op-Amp Applications: Derivation of closed-loop gain for Inverting amplifier (Av = -Rf/R1) and Non-Inverting amplifier (Av = 1 + Rf/R1) using the virtual ground principle.' },
          { type: 'Question Type C (10 Marks)', desc: 'Communication & Radar: Elements of a wireless communication system, cellular frequency reuse geometry, or derivation of the Radar Range Equation.' }
        ]
      },
      formulaSheet: [
        { name: 'Bridge Rectifier DC Output', formula: 'V_{\\text{dc}} = \\frac{2 V_m}{\\pi} \\approx 0.636 V_m, \\quad I_{\\text{dc}} = \\frac{2 I_m}{\\pi}', note: 'PIV = Vm across each non-conducting diode' },
        { name: 'Rectifier Ripple Factor & Efficiency', formula: '\\gamma = \\sqrt{\\left(\\frac{V_{\\text{rms}}}{V_{\\text{dc}}}\\right)^2 - 1} = 0.482, \\quad \\eta_{\\max} = 81.2\\%', note: 'Ripple frequency is 2f = 100 Hz' },
        { name: 'BJT Current Relations', formula: 'I_E = I_B + I_C, \\quad I_C = \\beta I_B + I_{\\text{CEO}}, \\quad \\beta = \\frac{\\alpha}{1 - \\alpha}', note: 'CE current gain β typically 50 - 300' },
        { name: 'MOSFET Saturation Current', formula: 'I_D = \\frac{1}{2} \\mu_n C_{\\text{ox}} \\left(\\frac{W}{L}\\right) (V_{\\text{GS}} - V_{\\text{th}})^2', note: 'Condition: V_DS >= V_GS - V_th' },
        { name: 'Inverting Op-Amp Closed-Loop Gain', formula: 'V_{\\text{out}} = -\\left(\\frac{R_f}{R_1}\\right) V_{\\text{in}}, \\quad A_v = -\\frac{R_f}{R_1}', note: 'Virtual ground at inverting terminal (V- = 0)' },
        { name: 'Non-Inverting Op-Amp Gain', formula: 'V_{\\text{out}} = \\left(1 + \\frac{R_f}{R_1}\\right) V_{\\text{in}}, \\quad A_v = 1 + \\frac{R_f}{R_1}', note: 'High input impedance, in-phase output' },
        { name: 'Radar Range Equation', formula: 'R_{\\max} = \\left[ \\frac{P_t G^2 \\lambda^2 \\sigma}{(4 \\pi)^3 S_{\\min}} \\right]^{1/4}', note: 'Power decays with fourth power R^4' }
      ],
      examInsights: [
        {
          title: 'Virtual Ground vs Virtual Short',
          desc: 'In inverting op-amps, the non-inverting terminal is grounded, so V- is at "Virtual Ground" (0 V). In non-inverting configurations, V- tracks Vin, which is called a "Virtual Short" (V- = V+ = Vin).'
        }
      ],
      topics: [
        { id: 'bacee-t2-1', title: '1-PN Junction Diode & Full-Wave Bridge Rectifier', theory: 'Diode forward/reverse characteristics. Bridge rectifier 4-diode conduction paths. Derivation of DC voltage and ripple factor.' },
        { id: 'bacee-t2-2', title: '2-Bipolar Junction Transistor (BJT) CE Characteristics', theory: 'CE input (IB vs VBE) and output (IC vs VCE) characteristic curves. Active, saturation, and cut-off regions.' },
        { id: 'bacee-t2-3', title: '3-N-Channel Enhancement MOSFET', theory: 'MOSFET structure, gate oxide capacitance, channel formation at VGS > Vth. Pinch-off and saturation.' },
        { id: 'bacee-t2-4', title: '4-Op-Amp: Inverting, Non-Inverting, Follower & Adder', theory: 'Ideal op-amp properties. Derivation of voltage gains using KCL and virtual short concept.' },
        { id: 'bacee-t2-5', title: '5-Communication Elements & 6-Cellular Communication', theory: 'Transmitter, channel, receiver. Hexagonal cell geometry, frequency reuse clusters, and call handoff.' },
        { id: 'bacee-t2-6', title: '7-Satellite Communication & Radar Principles', theory: 'Geostationary uplink/downlink transponders. Pulse radar echo detection and Radar Range Equation.' }
      ],
      pyqs: [
        {
          id: 'bacee-q2-1',
          exam: 'BACEE101 FAT April 2025 Slot D1 — 10 Marks',
          marks: '10 Marks',
          question: 'Draw the circuit diagram of a single-phase full-wave diode bridge rectifier with a resistive load RL. Explain its operation during positive and negative half-cycles of the AC input. Derive expressions for: (i) Average DC output voltage Vdc, and (ii) Rectification efficiency η.',
          solution: 'Circuit: 4 diodes D1, D2, D3, D4 in bridge topology fed from transformer secondary vs(t) = Vm sin(ωt).\nOperation:\n- Positive Half-Cycle (0 < ωt < π): Terminal A is positive wrt B. Diodes D1 and D2 are forward-biased, conducting current through RL from top to bottom. D3 and D4 are reverse-biased.\n- Negative Half-Cycle (π < ωt < 2π): Terminal B is positive wrt A. Diodes D3 and D4 are forward-biased, conducting current through RL in the same top-to-bottom direction.\nDerivations:\n(i) Average DC Voltage:\nVdc = (1/π) ∫[0 to π] Vm sin(ωt) d(ωt) = (Vm/π) [-cos(ωt)]_0^π = (2Vm)/π ≈ 0.636 Vm.\n(ii) Rectification Efficiency:\nPdc = Idc^2 * RL = ((2 Im)/π)^2 * RL = (4 Im^2 RL) / π^2.\nPac = Irms^2 * (rf + RL) = (Im / sqrt(2))^2 * (rf + RL) = (Im^2 (rf + RL)) / 2.\nNeglecting diode forward resistance rf << RL:\nη = Pdc / Pac = [ (4 Im^2 RL) / π^2 ] / [ (Im^2 RL) / 2 ] = 8 / π^2 = 8 / 9.8696 ≈ 0.812 (81.2%).'
        },
        {
          id: 'bacee-q2-2',
          exam: 'BACEE101 FAT Nov 2024 Slot D1 & SENSE QB Q18 — 10 Marks',
          marks: '10 Marks',
          question: '(a) Define the concept of "Virtual Ground" in an Operational Amplifier. (b) Derive the closed-loop voltage gain expression for: (i) an Inverting Amplifier ($A_v = -R_f/R_1$), and (ii) a Non-Inverting Amplifier ($A_v = 1 + R_f/R_1$). (c) Design an Inverting Summer circuit using an op-amp to produce $V_{\\text{out}} = -(2V_1 + 3V_2 + 5V_3)$ with feedback resistor $R_f = 30\\text{ k}\\Omega$.',
          solution: 'Part (a) Virtual Ground Concept:\\nIn an ideal op-amp, the open-loop gain is infinite ($A_{OL} \\to \\infty$) and input impedance is infinite ($R_{\\text{in}} \\to \\infty$). The output voltage is $V_{\\text{out}} = A_{OL}(V_+ - V_-)$. For a finite output $V_{\\text{out}}$, the differential input voltage must be zero: $V_+ - V_- = \\frac{V_{\\text{out}}}{A_{OL}} = 0 \implies V_- = V_+$.\\nWhen the non-inverting terminal ($V_+$) is connected to ground ($0\\text{ V}$), the inverting terminal ($V_-$) is held at $0\\text{ V}$ without having a physical connection to ground. This condition is termed Virtual Ground.\\n\\nPart (b) Gain Derivations:\\n1. Inverting Amplifier:\\nApply KCL at inverting node $V_-$ (with $V_- = 0$):\\n$$\\frac{V_{\\text{in}} - 0}{R_1} + \\frac{V_{\\text{out}} - 0}{R_f} = 0 \implies \\frac{V_{\\text{in}}}{R_1} = -\\frac{V_{\\text{out}}}{R_f} \implies A_v = \\frac{V_{\\text{out}}}{V_{\\text{in}}} = -\\frac{R_f}{R_1}$$\\n2. Non-Inverting Amplifier:\\nInput $V_{\\text{in}}$ applied to $V_+ \implies V_- = V_{\\text{in}}$ by virtual short. KCL at inverting node:\\n$$\\frac{0 - V_{\\text{in}}}{R_1} + \\frac{V_{\\text{out}} - V_{\\text{in}}}{R_f} = 0 \implies \\frac{V_{\\text{out}}}{R_f} = V_{\\text{in}}\\left(\\frac{1}{R_1} + \\frac{1}{R_f}\\right) \implies A_v = 1 + \\frac{R_f}{R_1}$$\\n\\nPart (c) Inverting Summer Design ($R_f = 30\\text{ k}\\Omega$):\\nOutput equation: $V_{\\text{out}} = -\\left(\\frac{R_f}{R_1}V_1 + \\frac{R_f}{R_2}V_2 + \\frac{R_f}{R_3}V_3\\right) = -(2V_1 + 3V_2 + 5V_3)$\\n- $\\frac{30\\text{ k}\\Omega}{R_1} = 2 \implies R_1 = \\frac{30\\text{ k}\\Omega}{2} = 15\\text{ k}\\Omega$\\n- $\\frac{30\\text{ k}\\Omega}{R_2} = 3 \implies R_2 = \\frac{30\\text{ k}\\Omega}{3} = 10\\text{ k}\\Omega$\\n- $\\frac{30\\text{ k}\\Omega}{R_3} = 5 \implies R_3 = \\frac{30\\text{ k}\\Omega}{5} = 6\\text{ k}\\Omega$\\nBoxed Answer: Input resistors are $R_1 = 15\\text{ k}\\Omega, R_2 = 10\\text{ k}\\Omega, R_3 = 6\\text{ k}\\Omega$ with $R_f = 30\\text{ k}\\Omega$.'
        },
        {
          id: 'bacee-q2-3',
          exam: 'SENSE Question Bank Q11 — BJT Common Emitter Characteristics — 10 Marks',
          marks: '10 Marks',
          question: '(a) Draw the circuit diagram to determine the Input and Output static characteristics of an NPN Bipolar Junction Transistor (BJT) in Common Emitter (CE) configuration. (b) Sketch the characteristic curves clearly indicating Active, Saturation, and Cut-off regions. (c) Define dynamic input resistance $r_i$ and dynamic output resistance $r_o$. (d) Explain why CE configuration is universally preferred for audio amplification.',
          solution: 'Part (a) Circuit Setup:\\nNPN transistor with emitter grounded. Base-Emitter circuit is forward-biased with variable DC supply $V_{BB}$ and series resistor $R_B$. Collector-Emitter circuit is reverse-biased with DC supply $V_{CC}$ and load resistor $R_C$.\\n\\nPart (b) Characteristic Curves & Regions:\\n1. Input Characteristics ($I_B$ vs $V_{BE}$ for constant $V_{CE}$): Resembles a forward-biased diode curve with knee voltage $\\approx 0.7\\text{ V}$ for Silicon. Increasing $V_{CE}$ causes Early effect (base width narrowing), shifting curve slightly to the right.\\n2. Output Characteristics ($I_C$ vs $V_{CE}$ for constant $I_B$):\\n- Active Region: Base-Emitter forward-biased, Collector-Base reverse-biased. $I_C = \\beta I_B$. Curves are nearly horizontal; suitable for linear amplification.\\n- Saturation Region: Both junctions forward-biased ($V_{CE} < 0.2\\text{ V}$). Transistor acts as an ON switch ($I_C$ independent of $I_B$).\\n- Cut-off Region: Both junctions reverse-biased ($I_B = 0$). Only negligible leakage current $I_{CEO}$ flows. Transistor acts as an OFF switch.\\n\\nPart (c) Parameter Definitions:\\n- Dynamic Input Resistance: $r_i = \\left(\\frac{\\Delta V_{BE}}{\\Delta I_B}\\right)_{V_{CE} = \\text{constant}}$ (typically $1\\text{ k}\\Omega - 5\\text{ k}\\Omega$).\\n- Dynamic Output Resistance: $r_o = \\left(\\frac{\\Delta V_{CE}}{\\Delta I_C}\\right)_{I_B = \\text{constant}}$ (typically $20\\text{ k}\\Omega - 100\\text{ k}\\Omega$).\\n\\nPart (d) Universal Superiority of CE Configuration:\\n1. High Current Gain ($\\beta \\approx 50-300$) AND high Voltage Gain ($A_v \\approx 100-500$).\\n2. Highest Power Gain ($A_p = A_v \\times A_i$) among all three transistor configurations.\\n3. Moderate input resistance and moderate output resistance allow easy multi-stage impedance matching.'
        }
      ]
    },
    {
      id: 'bacee-m3',
      moduleNum: 3,
      pdfUrl: '/pdfs/basic_eng/BEEE_MOD-3.pdf',
      title: 'Engineering Graphics and CAD',
      co: 'CO: 3',
      examScope: 'CAT-2 & FAT',
      weightage: '20-25 Marks in FAT',
      status: 'yet_to_start',
      scope: 'Engineering Drawing Introduction and Applications of CAD in Mechanical and Civil Engineering, Drawing Sheet Layout, Types of Lines (BIS/ISO standards), Lettering Standard, Importance of Dimensioning, Elements of Dimensioning, Dimensioning Systems (Aligned vs. Unidirectional) and Rules, Orthographic Projection Principles: First Angle vs. Third Angle projections and their standard symbols, Orthographic projection of Regular Solids in simple positions (Cube, Cylinder, Cone), Orthographic projection of Regular Solids (Prisms and Pyramids), Free-hand sketching practice of simple engineering components, Isometric Projection of regular solids (isometric scale derivation, cones, cylinders, pyramids, prisms), Perspective Projection of Cube (Visual Ray method), and Drawing of a simple residential floor plan.',
      blueprint: {
        marksTotal: '20 to 25 Marks in FAT',
        questionTypes: [
          { type: 'Question Type A (10 Marks)', desc: 'First Angle vs. Third Angle Projections: Comprehensive comparison table covering quadrant positions, observer-object-plane relationships, relative positions of views, and drawing official projection symbols.' },
          { type: 'Question Type B (10 Marks)', desc: 'Orthographic Projections: Drawing Front View, Top View, and Side View of regular solids (Cylinder, Cone, Hexagonal Prism, or Square Pyramid) in simple positions.' },
          { type: 'Question Type C (10 Marks)', desc: 'Isometric Projection & Scale: Derivation of isometric scale ratio (Isometric Length / True Length = sqrt(2/3) ≈ 0.816) and constructing an isometric view of a solid.' }
        ]
      },
      formulaSheet: [
        { name: 'Isometric Scale Ratio', formula: '\\frac{\\text{Isometric Length}}{\\text{True Length}} = \\frac{\\cos 45^\\circ}{\\cos 30^\\circ} = \\sqrt{\\frac{2}{3}} \\approx 0.8165', note: 'Isometric length is 81.6% of true length' },
        { name: 'Isometric Axes Orientation', formula: '\\text{Angle between axes} = 120^\\circ', note: 'Three mutually perpendicular axes projected equally' },
        { name: 'First Angle View Arrangement', formula: '\\text{Top View (Plan) is strictly BELOW Front View (Elevation)}', note: 'Left Side View is placed on the RIGHT' },
        { name: 'Third Angle View Arrangement', formula: '\\text{Top View (Plan) is strictly ABOVE Front View (Elevation)}', note: 'Left Side View is placed on the LEFT' }
      ],
      examInsights: [
        {
          title: 'First Angle vs Third Angle Symbol Drawing',
          desc: 'VIT examiners require drawing the standard truncated cone symbol. In First Angle, the small circle is on the left and the trapezoid is on the right; in Third Angle, the trapezoid is on the left.'
        }
      ],
      topics: [
        { id: 'bacee-t3-1', title: '1-CAD in Engineering & 2/3-Sheet Layout, Lines, Dimensioning', theory: 'BIS line types (continuous thick, hidden dashed, chain center lines). Aligned vs unidirectional dimensioning.' },
        { id: 'bacee-t3-2', title: '4-Orthographic Principles: 1st vs 3rd Angle Projections', theory: 'First Angle (ISO/India) vs Third Angle (USA). View arrangement relative to front elevation. Symbols.' },
        { id: 'bacee-t3-3', title: '5-Projections of Solids (Cube, Cylinder, Cone) & 6-Prisms/Pyramids', theory: 'Drawing elevation and plan when axis is perpendicular or parallel to Horizontal Plane (HP) and Vertical Plane (VP).' },
        { id: 'bacee-t3-4', title: '7-Free-hand Component Sketching & 8-Isometric Projections', theory: 'Isometric scale derivation. Constructing isometric projections and isometric drawings of regular solids.' },
        { id: 'bacee-t3-5', title: '9-Perspective Projection (Visual Ray) & 10-Residential Floor Plan', theory: 'Station point, horizon plane, picture plane. Architectural floor plan symbols for walls, doors, windows.' }
      ],
      pyqs: [
        {
          id: 'bacee-q3-1',
          exam: 'BACEE101 FAT April 2025 Slot D1 — 10 Marks',
          marks: '10 Marks',
          question: 'Differentiate between First Angle Projection and Third Angle Projection with respect to: (i) Position of object wrt observer and projection planes, (ii) Position of Top View wrt Front View, (iii) Position of Left Side View wrt Front View, and (iv) Draw the standard graphical projection symbol for both.',
          solution: 'Comparison Table:\n1. Position of Object: First Angle: Object is placed in First Quadrant between observer and plane of projection. Third Angle: Object is placed in Third Quadrant, with transparent projection plane between observer and object.\n2. Top View (Plan): First Angle: Drawn strictly BELOW the Front View. Third Angle: Drawn strictly ABOVE the Front View.\n3. Left Side View: First Angle: Projected and drawn to the RIGHT of the Front View. Third Angle: Projected and drawn to the LEFT of the Front View.\n4. Right Side View: First Angle: Drawn to the LEFT. Third Angle: Drawn to the RIGHT.\n5. Standard Symbols: Both depict a truncated cone (frustum). In First Angle, the circle view is on the right of the trapezoid view; in Third Angle, the circle view is on the left of the trapezoid view.'
        },
        {
          id: 'bacee-q3-2',
          exam: 'BACEE101 FAT Nov 2024 Slot D1 & SMEC QB Q8 — 10 Marks',
          marks: '10 Marks',
          question: '(a) Derive the mathematical ratio between Isometric Length and True Length (Isometric Scale). (b) Explain why a regular circle appears as an ellipse in isometric projection and describe the 4-Center Method used to construct it.',
          solution: 'Part (a) Derivation of Isometric Scale Ratio:\\nIn isometric projection, the three mutually perpendicular axes ($OX, OY, OZ$) are equally inclined to the plane of projection at an angle of $\\alpha = \\cos^{-1}(1/\\sqrt{3}) \\approx 35^\\circ 16\'$.\\nConsider a square face $OABC$ of true length $L$ lying in the horizontal plane.\\n- In the True View, diagonal $AC$ is inclined at $45^\\circ$ to the base line: $\\cos 45^\\circ = \\frac{OA}{AC} \implies OA = AC \\cos 45^\\circ = \\frac{AC}{\\sqrt{2}}$.\\n- In the Isometric Projection, the edge is inclined at $30^\\circ$ to the horizontal axis: $\\cos 30^\\circ = \\frac{OA_{\\text{iso}}}{AC} \implies OA_{\\text{iso}} = AC \\cos 30^\\circ = AC \\times \\frac{\\sqrt{3}}{2}$.\\nDividing the isometric length by the true length:\\n$$\\frac{\\text{Isometric Length}}{\\text{True Length}} = \\frac{OA_{\\text{iso}}}{OA} = \\frac{AC \\frac{\\sqrt{3}}{2}}{\\frac{AC}{\\sqrt{2}}} = \\frac{\\sqrt{3}}{2} \\times \\frac{\\sqrt{2}}{1} = \\frac{\\sqrt{6}}{2\\sqrt{2}} \\times \\frac{\\sqrt{2}}{\\sqrt{2}} = \\sqrt{\\frac{2}{3}} \\approx 0.81647\\ (81.65\\%)$$\\nHence, an isometric projection is drawn at $81.65\\%$ of true size, whereas an isometric drawing uses true scale ($100\\%$).\\n\\nPart (b) 4-Center Ellipse Construction Method:\\nIn isometric view, a circle inscribed in a square becomes an ellipse inscribed in a $60^\\circ-120^\\circ$ rhombus.\\nStep 1: Draw the isometric rhombus $ABCD$ of side equal to the circle diameter, with angles $60^\\circ$ at $B, D$ and $120^\\circ$ at $A, C$.\\nStep 2: Locate the midpoints of the four sides: $M_1, M_2, M_3, M_4$.\\nStep 3: From obtuse-angle corner $A$, draw lines to opposite midpoints $M_2$ and $M_3$. From obtuse corner $C$, draw lines to opposite midpoints $M_1$ and $M_4$.\\nStep 4: The intersection of these lines gives centers $O_1$ and $O_2$. The obtuse corners $A$ and $C$ serve as centers $O_3$ and $O_4$.\\nStep 5: Using centers $O_1, O_2$ draw the two small end arcs, and using $O_3, O_4$ draw the two large arcs to complete the smooth isometric ellipse.'
        },
        {
          id: 'bacee-q3-3',
          exam: 'SMEC Question Bank Q15 — Projections of Regular Solids — 10 Marks',
          marks: '10 Marks',
          question: 'A regular hexagonal prism of base edge 30 mm and axis height 65 mm rests on one of its rectangular faces on the Horizontal Plane (HP) such that its axis is perpendicular to the Vertical Plane (VP). Draw its Front View, Top View, and Right Side View using First Angle Projection.',
          solution: 'Orthographic View Projection Steps (First Angle):\\n1. Front View (Elevation on VP):\\nSince the prism axis is perpendicular to VP, the observer looking from the front sees the true shape of the hexagonal base.\\n- Geometry: A regular hexagon with flat horizontal edges resting on the reference $XY$ line.\\n- Dimension: Across-flats height $= 2 \\times 30\\cos(30^\\circ) = 30\\sqrt{3} \\approx 51.96\\text{ mm}$. All 6 edges of length 30 mm are visible as solid lines.\\n\\n2. Top View (Plan on HP, drawn BELOW XY line):\\nLooking from above, the prism appears as a rectangle.\\n- Width: Corresponds to total width of the hexagonal base ($2 \\times 30 = 60\\text{ mm}$).\\n- Height: Equals the axis length of the prism ($65\\text{ mm}$).\\n- Interior Edges: Two longitudinal solid lines represent the top intermediate edges of the hexagonal faces.\\n\\n3. Right Side View (Profile Plane, drawn on LEFT of Front View in First Angle):\\nLooking from the right side, the profile view is a rectangle of width equal to the hexagon across-corners distance and height equal to 51.96 mm.\\nConclusion: Projection adheres to First Angle conventions (Plan strictly below Elevation, Right View on Left).'
        }
      ]
    },
    {
      id: 'bacee-m4',
      moduleNum: 4,
      pdfUrl: '/pdfs/basic_eng/BEEE_MOD-4.pdf',
      title: 'Manufacturing Processes, Energy Conversions & Automation',
      co: 'CO: 4',
      examScope: 'CAT-2 & FAT',
      weightage: '25-30 Marks in FAT',
      status: 'strong',
      scope: 'Metal Casting: Classifications, Sand Casting elements, Pattern types and allowances, Moulding process, Casting defects. Metal Forming: Rolling, Forging, Extrusion (Hot vs Cold working), Metal Joining: Arc welding, TIG (GTAW) vs MIG (GMAW), Machining processes: Turning, Drilling, Milling, Grinding, Shaping, Planing, Broaching, CNC machines, Additive Manufacturing (AM): Fused Deposition Modelling (FDM), Internal Combustion Engines: 2-stroke vs 4-stroke, SI vs CI engines, Energy sources: Thermal, Hydro, Nuclear power plants, Renewable energy: Solar, Wind, Fuel cells, Refrigeration & Air Conditioning systems, Mechanisms: Kinematic links and pairs, Degrees of Freedom (DOF), Gruebler\'s equation, Four-Bar Mechanism inversions, Introduction to Robotics: Structure, classification, actuators, and Robotic Actuation: Hydraulic vs. Pneumatic actuators.',
      blueprint: {
        marksTotal: '25 to 30 Marks in FAT',
        questionTypes: [
          { type: 'Question Type A (10 Marks)', desc: 'IC Engines: Working of 4-stroke Petrol (SI) vs Diesel (CI) engine with PV diagrams and operational comparison.' },
          { type: 'Question Type B (10 Marks)', desc: 'Welding & Casting: Comparison of TIG vs MIG welding processes or Sand casting moulding procedure and casting defects.' },
          { type: 'Question Type C (10 Marks)', desc: 'Mechanisms & Robotics: Gruebler\'s DOF mobility calculation, Four-bar mechanism inversions, and comparison of Hydraulic vs Pneumatic actuators.' }
        ]
      },
      formulaSheet: [
        { name: 'Gruebler\'s Mobility Equation', formula: 'F = 3(n - 1) - 2 j_1 - j_2', note: 'n = links, j1 = 1-DOF lower pairs, j2 = 2-DOF higher pairs' },
        { name: 'Four-Bar Grashof Criterion', formula: 's + l \\le p + q', note: 'Shortest link can make full 360° rotation' },
        { name: 'Air Standard Otto Efficiency', formula: '\\eta_{\\text{Otto}} = 1 - \\frac{1}{r^{\\gamma - 1}}', note: 'r = compression ratio (8:1 - 11:1)' },
        { name: 'Carnot COP of Refrigerator', formula: '\\text{COP}_R = \\frac{Q_L}{W_{\\text{in}}} = \\frac{T_L}{T_H - T_L}', note: 'Heat pump COP_HP = COP_R + 1' },
        { name: 'Hydraulic Cylinder Force', formula: 'F = P \\times A = P \\times \\frac{\\pi d^2}{4}', note: 'P in Pa (N/m^2), d in meters' }
      ],
      examInsights: [
        {
          title: 'Gruebler\'s DOF and TIG vs MIG Questions',
          desc: 'VIT mechanical examiners frequently test: (1) Gruebler\'s mobility for four-bar (F = 1), and (2) TIG uses non-consumable tungsten electrode while MIG uses consumable wire electrode spool.'
        }
      ],
      topics: [
        { id: 'bacee-t4-1', title: '1-Metal Casting & Forming', theory: 'Sand casting, cope and drag, patterns, allowances, casting defects. Rolling, forging, and extrusion.' },
        { id: 'bacee-t4-2', title: '2-Metal Joining (TIG vs MIG Arc Welding)', theory: 'GTAW (TIG) non-consumable tungsten + argon shield vs GMAW (MIG) consumable wire spool + CO2/argon.' },
        { id: 'bacee-t4-3', title: '3-Machining & 4-Additive Manufacturing (FDM)', theory: 'Lathe turning, drilling, milling, grinding. CNC systems. Fused Deposition Modelling (FDM) 3D printing.' },
        { id: 'bacee-t4-4', title: '5-IC Engines (SI vs CI, 2 vs 4 Stroke)', theory: 'Otto vs Diesel cycle. Suction, compression, expansion, exhaust strokes. Spark plug vs fuel injector.' },
        { id: 'bacee-t4-5', title: '6-Power Plants, 7-Renewables & 8-Refrigeration and AC', theory: 'Thermal, hydro, nuclear plants. Solar PV and wind. Vapor compression refrigeration cycle.' },
        { id: 'bacee-t4-6', title: '9-Mechanisms & 10-Four-Bar Inversions', theory: 'Kinematic pairs. Gruebler equation. Crank-rocker, drag-link, double-rocker inversions.' },
        { id: 'bacee-t4-7', title: '11-Robotics & 12-Hydraulic vs Pneumatic Actuators', theory: 'Manipulator joints, Cartesian, SCARA, Articulated. High-force oil hydraulic vs clean, fast pneumatic.' }
      ],
      pyqs: [
        {
          id: 'bacee-q4-1',
          exam: 'BACEE101 FAT April 2025 Slot D1 — 10 Marks',
          marks: '10 Marks',
          question: 'Compare a Four-Stroke Spark Ignition (SI / Petrol) Engine with a Four-Stroke Compression Ignition (CI / Diesel) Engine with respect to: (i) Working cycle, (ii) Fuel induction method, (iii) Compression ratio, (iv) Ignition method, and (v) Thermal efficiency.',
          solution: 'Comparison Table:\n1. Thermodynamic Cycle: SI Engine operates on Otto Cycle (constant volume heat addition). CI Engine operates on Diesel Cycle (constant pressure heat addition).\n2. Fuel Induction: SI Engine: Air-fuel mixture prepared by carburetor or port fuel injector is sucked in during intake stroke. CI Engine: Pure air alone is drawn in during suction stroke; liquid diesel fuel is injected at high pressure near the end of compression stroke.\n3. Compression Ratio: SI Engine: Lower (8:1 to 11:1) to prevent engine knock/pre-ignition. CI Engine: Much higher (16:1 to 22:1).\n4. Method of Ignition: SI Engine: External electric spark plug produces timed electrical spark. CI Engine: Autoignition: heat of highly compressed hot air (> 550 °C) spontaneously ignites the injected diesel spray.\n5. Thermal Efficiency: CI engine achieves higher thermal efficiency (~35-40% vs ~25-30% in SI) due to its significantly higher compression ratio.'
        },
        {
          id: 'bacee-q4-2',
          exam: 'BACEE101 FAT Nov 2024 Slot D1 & SMEC QB Q12 — 10 Marks',
          marks: '10 Marks',
          question: '(a) State Kutzbach / Grübler\'s mobility criterion for planar mechanisms. (b) Determine the Degrees of Freedom (DOF) for: (i) A standard Four-Bar Linkage, (ii) A Slider-Crank Mechanism, and (iii) A 5-bar linkage with 5 revolute joints. (c) Explain Grashof\'s Law for a four-bar mechanism and distinguish between Crank-Rocker, Double-Crank, and Double-Rocker inversions.',
          solution: 'Part (a) Grübler\'s Mobility Criterion:\\nFor a planar kinematic chain, the number of independent degrees of freedom $F$ is given by:\\n$$F = 3(n - 1) - 2 j_1 - j_2$$\\nwhere $n$ is total number of rigid links (including fixed ground frame), $j_1$ is number of 1-DOF lower pairs (revolute turning joints, prismatic sliding joints), and $j_2$ is number of 2-DOF higher pairs (rolling contact, cams, gear teeth with sliding).\\n\\nPart (b) DOF Calculations:\\n1. Four-Bar Linkage: $n = 4$ links, $j_1 = 4$ revolute joints, $j_2 = 0$:\\n$$F = 3(4 - 1) - 2(4) - 0 = 3(3) - 8 = 9 - 8 = 1 \quad (\\text{Constrained 1-DOF kinematic mechanism})$$\\n2. Slider-Crank Mechanism: $n = 4$ (Frame, Crank, Connecting Rod, Piston Slider), $j_1 = 4$ (3 revolute pins + 1 sliding prismatic pair), $j_2 = 0$:\\n$$F = 3(4 - 1) - 2(4) - 0 = 1 \quad (\\text{1-DOF})$$\\n3. Five-Bar Linkage: $n = 5$ links, $j_1 = 5$ revolute joints, $j_2 = 0$:\\n$$F = 3(5 - 1) - 2(5) - 0 = 3(4) - 10 = 12 - 10 = 2 \quad (\\text{Unconstrained 2-DOF system; requires two motors})\\n\\nPart (c) Grashof\'s Law:\\nCondition: $s + l \\le p + q$, where $s$ is shortest link, $l$ is longest link, and $p, q$ are intermediate links.\\n- Crank-Rocker: Fix link adjacent to shortest link $s$. Shortest link makes full $360^\\circ$ rotation (crank); opposite link oscillates (rocker).\\n- Double-Crank (Drag-Link): Fix shortest link $s$. Both connected links make continuous $360^\\circ$ rotations.\\n- Double-Rocker: Fix link opposite to shortest link $s$. Both connected links oscillate as rockers.'
        },
        {
          id: 'bacee-q4-3',
          exam: 'SMEC Question Bank Q21 — TIG vs MIG Welding & Casting Defects — 10 Marks',
          marks: '10 Marks',
          question: '(a) Differentiate between Tungsten Inert Gas (TIG / GTAW) Welding and Metal Inert Gas (MIG / GMAW) Welding with respect to electrode type, shielding gas, wire feed, and typical industrial applications. (b) Explain the root causes and preventative remedies for three common metal sand casting defects: (i) Blowholes, (ii) Cold Shut, and (iii) Hot Tears.',
          solution: 'Part (a) TIG (GTAW) vs MIG (GMAW) Welding Comparison:\\n1. Electrode: TIG uses a Non-consumable pure or thoriated Tungsten electrode. MIG uses a Consumable metallic wire electrode continuously fed from a motorized spool.\\n2. Shielding Gas: TIG uses 100% pure inert Argon or Helium gas. MIG uses inert Argon or active gas mixtures ($\\text{Ar} + \\text{CO}_2$ or pure $\\text{CO}_2$ for GMAW/MAG).\\n3. Filler Metal: TIG requires the welder to manually feed a separate filler rod with the opposite hand. MIG feeds filler automatically through the welding gun.\\n4. Weld Quality & Speed: TIG produces aesthetic, high-precision, spatter-free welds at low travel speeds (used in aerospace aluminum and stainless steel pipework). MIG provides high deposition rates and fast speeds (used in automotive body fabrication and heavy structural steel).\\n\\nPart (b) Casting Defects & Remedies:\\n1. Blowholes: Smooth, rounded gas cavities inside the casting. Cause: Excessive moisture in moulding sand or low permeability. Remedy: Increase venting holes in sand mould and bake sand properly.\\n2. Cold Shut: A distinct crack-like line with rounded edges where two converging streams of molten metal fail to fuse completely. Cause: Low pouring temperature or excessively slow pouring rate. Remedy: Increase pouring temperature and enlarge gating runner cross-section.\\n3. Hot Tears: Severe jagged, irregular cracks formed as the casting solidifies. Cause: Non-uniform cooling and excessive mould rigidity preventing natural thermal contraction. Remedy: Ensure collapsible moulding sand mixes and round off sharp internal re-entrant corners with generous fillets.'
        }
      ]
    }
  ]
};
