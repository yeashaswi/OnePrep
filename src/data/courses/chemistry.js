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
        }
      ]
    }
  ]
};
