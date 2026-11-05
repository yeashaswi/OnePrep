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
        }
      ]
    },
    {
      id: 'bacee-m5',
      moduleNum: 5,
      pdfUrl: '/pdfs/basic_eng/BEEE_MOD-5.pdf',
      title: 'Bio-Inspired Design in Engineering',
      co: 'CO: 5',
      examScope: 'FAT Only',
      weightage: '10-15 Marks in FAT',
      status: 'yet_to_start',
      scope: 'Principles of Biomimicry and Bio-Inspired Design in Engineering, Case studies of nature\'s engineering: Self-cleaning superhydrophobic surfaces (The Lotus Effect - Cassie-Baxter state), Aerodynamic and hydrodynamic drag reduction (Shark-skin denticles and riblet micro-grooves, Kingfisher beak biomimicry in Shinkansen bullet train nose design), Dry reversible adhesion (Gecko footpad nanoscale spatulae and van der Waals forces), Structural lightweight design (Bee honeycomb hexagonal sandwich composite panels), and Biomimetic robotics.',
      blueprint: {
        marksTotal: '10 to 15 Marks in FAT',
        questionTypes: [
          { type: 'Question Type A (10 Marks)', desc: 'Bio-Inspired Engineering Case Studies: Explain with neat diagrams any two bio-inspired designs (e.g. Lotus effect self-cleaning surfaces and Gecko footpad dry adhesion) and their modern engineering applications.' }
        ]
      },
      formulaSheet: [
        { name: 'Cassie-Baxter Superhydrophobicity', formula: '\\cos \\theta^* = f_1 \\cos \\theta - f_2', note: 'Contact angle θ > 150°, roll-off angle < 5°' },
        { name: 'Van der Waals Gecko Adhesion', formula: 'F_{\\text{adh}} \\approx \\frac{A_H R}{6 D^2}', note: 'Billions of nanoscale spatulae conforming to surface' }
      ],
      examInsights: [
        {
          title: 'Structure-Function Engineering Mapping',
          desc: 'VIT examiners require students to clearly state: (1) The Biological Organism, (2) The Natural Physical/Chemical Mechanism, and (3) The Commercial Engineering Implementation.'
        }
      ],
      topics: [
        { id: 'bacee-t5-1', title: '1-Bio-Inspired Design & Biomimicry Principles', theory: 'Translating biological evolution adaptations into sustainable engineering solutions. 5-step biomimetic design spiral.' },
        { id: 'bacee-t5-2', title: 'Case Studies: Lotus Effect, Shark Skin, Gecko Adhesion, Kingfisher', theory: 'Lotus leaf micro-papillae, shark denticle drag reduction, gecko van der Waals dry adhesion, bullet train nose.' }
      ],
      pyqs: [
        {
          id: 'bacee-q5-1',
          exam: 'BACEE101 FAT April 2025 Slot D1 — 10 Marks',
          marks: '10 Marks',
          question: 'Explain the scientific principle behind the "Lotus Effect" and discuss how it has been applied to design self-cleaning and anti-icing surfaces in modern engineering.',
          solution: 'Scientific Principle: The leaves of the sacred lotus (Nelumbo nucifera) exhibit extreme water repellency (superhydrophobicity). Scanning electron microscopy reveals a dual-scale hierarchy: microscopic epidermal papillae (10-20 μm) coated with hydrophobic epicuticular wax nanostructures (100 nm).\nAccording to the Cassie-Baxter model, air is trapped in the valleys between papillae beneath the water droplet. This minimizes the solid-liquid contact area to less than 2-3%, resulting in a contact angle exceeding 150° and a roll-off tilt angle under 5°.\nSelf-Cleaning Mechanism: As spherical water droplets roll off effortlessly under slight gravity or wind, they pick up dirt and debris particles rather than sliding across them, keeping the leaf pristine.\nEngineering Applications:\n1. Self-cleaning exterior building glass and architectural facade coatings.\n2. Anti-icing and de-icing surfaces on commercial aircraft wings and wind turbine blades.\n3. Superhydrophobic anti-fouling coatings for marine ship hulls to reduce biological slime accumulation.'
        }
      ]
    }
  ]
};
