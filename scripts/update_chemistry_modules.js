import fs from 'fs';
import path from 'path';

const chemPath = '/Users/yashaswivunnam/Desktop/FATkilla/src/data/courses/chemistry.js';

// Import existing chemistry course
import(chemPath).then(({ chemistryCourse }) => {
  const m1 = chemistryCourse.modules.find(m => m.id === 'bchy-m1');
  const m2 = chemistryCourse.modules.find(m => m.id === 'bchy-m2');
  const m3 = chemistryCourse.modules.find(m => m.id === 'bchy-m3');
  const m4 = chemistryCourse.modules.find(m => m.id === 'bchy-m4');
  const m5 = chemistryCourse.modules.find(m => m.id === 'bchy-m5');

  // Module 1: Chemical Thermodynamics & Kinetics
  m1.scope = "Zeroth, First, Second & Third Laws of Thermodynamics, Mayer's Relation, Carnot Cycle & Efficiency, Gibbs Free Energy & Spontaneity, Chemical Kinetics: Rate Laws, Half-Life & Arrhenius Activation Energy.";
  m1.summary = "Energy transformations, heat capacities, Carnot cyclic engine efficiency, Gibbs-Helmholtz spontaneity criteria, and reaction rate laws with Arrhenius temperature dependence.";
  m1.theoryNotes = `1. Open System — A thermodynamic system that freely exchanges both matter and energy with its surroundings across a permeable boundary (e.g. an open beaker of boiling water).

2. Closed System — A thermodynamic system that exchanges energy (heat and work) but cannot exchange matter with its surroundings (e.g. gas enclosed in a cylinder with a movable piston).

3. Isolated System — A thermodynamic system enclosed by rigid adiabatic walls that exchanges neither matter nor energy with its surroundings (e.g. hot tea inside an ideal vacuum dewar flask).

4. Intensive Properties — Physical and chemical properties whose values do not depend on the quantity or mass of matter present in the system (e.g. Temperature T, Pressure P, Density ρ, Refractive index, Boiling point, Molar heat capacity).

5. Extensive Properties — Physical properties whose values scale directly in proportion to the total quantity or mass of the system (e.g. Total Volume V, Mass m, Internal energy U, Enthalpy H, Entropy S, Heat capacity C).

6. State Functions — Thermodynamic equilibrium properties whose values depend exclusively on the present state of the system, irrespective of the historical path or mechanism taken to reach that state (e.g. P, V, T, U, H, S, G).

7. Path Functions — Thermodynamic quantities whose values depend directly on the specific transformation pathway followed during the thermodynamic transition (e.g. Heat absorbed q, Work done w).

8. Zeroth Law of Thermodynamics — If system A is in thermal equilibrium with system B, and system B is simultaneously in thermal equilibrium with system C, then system A and system C are in mutual thermal equilibrium. This establishes the absolute physical basis for thermometry and temperature scales.

9. First Law of Thermodynamics — The fundamental law of conservation of energy: Energy cannot be created or destroyed, only transformed between equivalent forms:
ΔU = q + w
Where ΔU is change in internal energy, q is heat absorbed by the system, and w is work performed on the system (w = -P_ex ΔV). For free expansion into a vacuum (P_ex = 0), work done is strictly zero (w_vacuum = 0).

10. Enthalpy & Mayer's Relation — Enthalpy is defined as total thermal heat content H = U + PV. Under constant pressure conditions q_P = ΔH; under constant volume conditions q_V = ΔU. For one mole of an ideal gas (PV = RT), differentiating H = U + RT with respect to temperature at constant pressure yields Mayer's proof:
Cp - Cv = R

11. Reversible Adiabatic Expansion — A rapid or thermally insulated thermodynamic process with zero heat exchange with the surroundings (dq = 0). The system performs boundary work strictly by depleting its own internal energy (ΔU = w < 0), causing its temperature to drop:
PV^γ = constant, and TV^(γ-1) = constant
Sudden discharge from a high-pressure CO2 fire extinguisher causes rapid adiabatic expansion and cooling, precipitating into solid dry ice snow.

12. Second Law of Thermodynamics — Natural spontaneous processes occur with an increase in total entropy of the universe. Clausius statement: Heat cannot spontaneously flow from a colder reservoir to a hotter reservoir without external work. Kelvin-Planck statement: No cyclic heat engine can absorb heat from a single thermal reservoir and convert it completely into equivalent mechanical work.

13. Carnot Cycle & Maximum Engine Efficiency — An idealized four-stroke reversible cyclic heat engine operating between hot reservoir T_h and cold sink T_c (Isothermal expansion -> Adiabatic expansion -> Isothermal compression -> Adiabatic compression). The maximum theoretical thermal efficiency is:
η = 1 - (T_c / T_h) = (T_h - T_c) / T_h

14. Third Law of Thermodynamics — The entropy of a pure, perfectly ordered crystalline substance approaches absolute zero as temperature approaches 0 Kelvin:
lim_{T -> 0} S = 0
This provides an absolute reference datum for evaluating standard molar entropies S°.

15. Gibbs Free Energy & Reaction Spontaneity — Thermodynamic potential defined as G = H - TS. Governed at constant temperature and pressure by the Gibbs-Helmholtz relation:
ΔG = ΔH - TΔS
- ΔG < 0: Process is spontaneous (thermodynamically favored).
- ΔG = 0: Dynamic equilibrium state; crossover temperature T_eq = ΔH / ΔS.
- ΔG > 0: Process is non-spontaneous (requires external driving force).

16. Rate of Chemical Reaction — The instantaneous rate of consumption of reactants or formation of products per unit time: Rate = -d[A]/dt = k[A]^n, where k is the specific rate constant and n is reaction order.

17. Zero-Order Kinetics — The rate of reaction is entirely independent of reactant concentration (Rate = k). Integrated rate law: [A]_t = [A]_0 - kt. The half-life is directly proportional to initial concentration: t_1/2 = [A]_0 / 2k.

18. First-Order Kinetics — The reaction rate is directly proportional to the first power of reactant concentration. Integrated rate law: ln([A]_0 / [A]_t) = kt or k = (2.303/t) log10([A]_0 / [A]_t). The half-life is strictly constant and independent of initial concentration: t_1/2 = 0.693 / k.

19. Second-Order Kinetics — The reaction rate depends on the square of one reactant concentration or the product of two concentrations. Integrated rate law: 1/[A]_t = 1/[A]_0 + kt. The half-life is inversely proportional to initial concentration: t_1/2 = 1 / (k [A]_0).

20. Arrhenius Equation & Activation Energy — Governs the exponential dependence of reaction rate constant k on absolute temperature T:
k = A exp(-E_a / RT)
Where A is the pre-exponential frequency factor, R is the universal gas constant (8.314 J/mol·K), and E_a is the activation energy barrier. Comparing rates at two temperatures:
ln(k2 / k1) = (E_a / R) × [(T2 - T1) / (T1 × T2)].`;

  // Module 2: Energy Devices & Semiconductor Electrodes
  m2.scope = "Galvanic & Electrolytic Cells, Salt Bridge, Nernst Equation, Industrial Electrolysis (Downs Cell & Water Splitting), Semiconductors, Lithium-Ion Batteries, Fuel Cells & Solar Conversion.";
  m2.summary = "Electrochemical cell thermodynamics, Nernst EMF calculations, commercial electrolysis, secondary lithium-ion batteries, fuel cells (PEMFC/SOFC), and solar photovoltaic conversion.";
  m2.theoryNotes = `1. Galvanic / Electrochemical Cell — Converts spontaneous chemical redox energy into usable electrical work (ΔG < 0, E_cell > 0). Oxidation occurs at the negative anode (LOAN rule: Left, Oxidation, Anode, Negative), while reduction occurs at the positive cathode.

2. Electrolytic Cell — Consumes external electrical energy from an applied DC power source (E_ext > E°_cell) to drive non-spontaneous chemical reactions (ΔG > 0). Anode is connected to the positive terminal of the power supply.

3. Salt Bridge — Inverted U-tube filled with agar-agar gel containing saturated inert electrolytes (KCl, KNO3, or NH4NO3) with equal ionic mobilities. Serves 3 critical functions: (1) Completes the internal electric circuit, (2) Maintains electroneutrality in both half-cells, and (3) Eliminates liquid junction potential (E_j ≈ 0).

4. Nernst Equation — Thermodynamic relationship linking cell EMF to temperature, standard reduction potentials, and the reaction quotient Q, derived from van 't Hoff reaction isotherm ΔG = ΔG° + RT ln Q:
E_cell = E°_cell - (0.05916 / n) log10 Q  (at 298.15 K)

5. Downs Cell Industrial Electrolysis — Continuous industrial process for extracting pure metallic sodium by electrolyzing molten NaCl at ~600 °C (lowered from 801 °C by CaCl2 flux) with a central graphite anode and cylindrical steel cathode separated by a wire-gauze diaphragm. Operating cell potential > 4.07 V.

6. Water Splitting Electrolysis — Stoichiometric decomposition of water into hydrogen and oxygen gases in a 2:1 molar ratio. Acidic mechanism uses Pt electrodes (Cathode: 2H+ + 2e- -> H2; Anode: 2H2O -> O2 + 4H+ + 4e-); Alkaline mechanism uses porous nickel electrodes with OH- migration.

7. Intrinsic Semiconductors — Extremely pure Group 14 crystalline elements (silicon, germanium) where electrical conductivity arises solely from thermal promotion of electrons across the bandgap Eg into the conduction band (n_e = n_h = n_i).

8. Extrinsic Semiconductors — Semiconductors doped with controlled trivalent or pentavalent impurity atoms:
- n-type Semiconductor: Doped with Group 15 donors (P, As, Sb), producing extra conduction electrons as majority charge carriers.
- p-type Semiconductor: Doped with Group 13 acceptors (B, Al, Ga), generating mobile electron holes in the valence band as majority carriers.

9. Three-Stage Silicon Purification — Industrial workflow for manufacturing electronic-grade hyperpure silicon (>99.9999999% purity):
- Stage 1: Siemens process (quartz carbothermic reduction, trichlorosilane SiHCl3 fractional distillation, and CVD reduction onto hot silicon filaments at 1100 °C).
- Stage 2: Zone refining (repeated RF induction heating creates a narrow molten zone sweeping impurities with segregation coefficient k < 1 to ingot ends).
- Stage 3: Czochralski crystal growth (dipping a seed crystal into 1425 °C molten silicon and pulling slowly under inert argon to grow dislocation-free single-crystal boules).

10. Lithium-Ion Battery (LIB) — High-energy rechargeable secondary battery operating via rocking-chair Li+ intercalation between host lattices:
- Anode: Graphitic carbon on copper foil collector (Li_x C6).
- Cathode: Layered lithium metal oxide (LiCoO2, LiFePO4, or NMC) on aluminum foil collector.
- Electrolyte: 1 M LiPF6 dissolved in organic ethylene carbonate (EC) + dimethyl carbonate (DMC).
- Solid Electrolyte Interphase (SEI): Passivating protective layer formed on anode surface during first charge cycle, preventing electrolyte degradation while allowing Li+ transport.

11. Proton Exchange Membrane Fuel Cell (PEMFC) — Low-temperature (60-80 °C) clean energy device using humidified H2 fuel and O2 oxidant across a perfluorosulfonic acid polymer membrane (Nafion):
- Anode (Pt catalyst): 2H2 -> 4H+ + 4e-
- Cathode (Pt catalyst): O2 + 4H+ + 4e- -> 2H2O
- Overall: 2H2 + O2 -> 2H2O + Electricity + Heat

12. Solid Oxide Fuel Cell (SOFC) — High-temperature (700-1000 °C) fuel cell using a dense ceramic yttria-stabilized zirconia (YSZ) solid electrolyte conducting O2- oxygen ions:
- Cathode: O2 + 4e- -> 2O2- (diffuses through YSZ lattice)
- Anode: 2H2 + 2O2- -> 2H2O + 4e- (and CO + O2- -> CO2 + 2e-)
- Advantage: Can directly reform hydrocarbon fuels and syngas without expensive noble metal catalysts.

13. Silicon p-n Junction Solar Cell — Photovoltaic device converting incident sunlight directly into electricity via internal built-in electric field in the depletion zone separating p-type and n-type silicon. Photons with energy hν >= Eg generate electron-hole pairs swept across junction to deliver photovoltage V_oc and photocurrent I_sc.

14. Dye-Sensitized Solar Cell (DSSC / Grätzel Cell) — Biomimetic photovoltaic device consisting of: (1) Fluorine-doped tin oxide (FTO) glass, (2) Nanoporous TiO2 semiconductor film, (3) Ruthenium polypyridyl dye sensitizer, (4) Liquid iodide/triiodide (I-/I3-) redox electrolyte, and (5) Platinum counter-electrode.`;

  // Module 3: Functional Materials & Liquid Coolants
  m3.scope = "Band Theory of Conduction, Resistivity & Temperature Coefficients, Superconductivity (Meissner Effect & YBCO), Magnetic Materials & Hysteresis, Nanomaterials & Advanced Coolants.";
  m3.summary = "Band theory of conduction, temperature coefficients, high-Tc ceramic superconductors (YBCO), magnetic classification, data storage hysteresis loops, and nanofluid coolants.";
  m3.theoryNotes = `1. Band Theory of Conduction — Quantum mechanical model based on overlapping atomic orbitals forming continuous energy bands:
- Valence Band (VB): Highest occupied energy band populated by valence electrons.
- Conduction Band (CB): Lowest unoccupied energy band where delocalized electrons can flow freely under an applied electric field.
- Forbidden Band Gap (Eg): Energy difference between the top of the valence band and the bottom of the conduction band. Metals have overlapping bands (Eg = 0 eV); Semiconductors have narrow gaps (0.1 < Eg < 3.0 eV); Insulators have wide gaps (Eg > 3.0 eV).

2. Electrical Conductivity & Resistivity — Ohm's law relationship ρ = R·A / l. Governed at microscopic level by charge carrier concentration n, fundamental electronic charge e, and carrier drift mobility μ:
Conductivity σ = n·e·μ

3. Temperature Coefficient of Resistance (TCR) — Rate of change of electrical resistance with temperature:
- Positive Temperature Coefficient (PTC): In metals, thermal vibrations of lattice ions increase electron scattering, causing resistance to increase as temperature rises (dR/dT > 0).
- Negative Temperature Coefficient (NTC): In semiconductors, thermal energy promotes exponential numbers of electrons across the bandgap into the conduction band, causing resistance to decrease sharply as temperature rises (dR/dT < 0).

4. Superconductivity — Phenomenon where electrical resistance vanishes completely (R = 0) below a critical transition temperature Tc, enabling continuous current flow without Joule heating dissipation (I^2 R = 0).

5. Meissner Effect — The complete expulsion of external magnetic flux lines from the interior of a superconductor when cooled below its critical temperature Tc:
B = 0, magnetic susceptibility χ = -1
Demonstrates that superconductors are perfect diamagnets, distinct from ideal zero-resistance conductors.

6. High-Tc Ceramic Superconductors (YBCO) — Perovskite-derived cuprate ceramic material YBa2Cu3O7-x with critical temperature Tc = 93 K. Operates above the boiling point of liquid nitrogen (77 K), revolutionizing magnetic levitation, lossless power transmission, and MRI magnets.

7. Diamagnetic Materials — Substances with no unpaired electrons (paired electron spins); weakly repelled by external magnetic fields; magnetic susceptibility χ is small, negative, and independent of temperature (e.g. Cu, Bi, Au, H2O).

8. Paramagnetic Materials — Substances with permanent unpaired electron spins; weakly attracted into external magnetic fields; magnetic susceptibility χ is positive and inversely proportional to absolute temperature via Curie's law χ = C/T (e.g. Al, Pt, Mn, liquid O2).

9. Ferromagnetic Materials — Substances with strong parallel exchange coupling between unpaired spins forming macroscopic magnetic domains; strongly attracted to magnetic fields and retain magnetization after field removal; characterized by B-H hysteresis loops (e.g. Fe, Co, Ni).

10. Magnetic Hysteresis Loop & Non-Volatile Data Storage — Plot of magnetic flux density B versus applied magnetic field H:
- Retentivity (Remanence Br): Residual magnetic flux remaining when external field H is reduced to zero; forms the basis for binary 0/1 data storage on magnetic hard disks and magnetic tape.
- Coercivity (Hc): Magnitude of reverse magnetic field required to demagnetize the material back to zero.
- Soft Magnetic Materials: Low coercivity Hc, high permeability, narrow hysteresis loop with minimal energy loss; used in transformer cores and electromagnets (e.g. soft iron, permalloy).
- Hard Magnetic Materials: High coercivity Hc, high retentivity, broad hysteresis loop; resistant to demagnetization; used in permanent magnets and hard disk platters (e.g. Alnico, NdFeB).

11. Nanomaterials & Quantum Confinement — Materials with structural features in the 1-100 nm nanoscale regime:
- Quantum Confinement: When physical particle dimensions become comparable to or smaller than the de Broglie wavelength of electrons, continuous energy bands collapse into discrete, quantized energy levels, widening the effective bandgap Eg.
- Surface-to-Volume Ratio: Drastic reduction in particle size causes the fraction of surface atoms to increase exponentially, greatly enhancing chemical reactivity, catalytic activity, and adsorption capacity.

12. Carbon Nanotubes (CNTs) & Graphene — Allotropes of sp2 hybridized carbon:
- Graphene: Two-dimensional honeycomb lattice of single-atom thickness with zero effective mass charge carriers (Dirac fermions) and record electrical conductivity and mechanical tensile strength (130 GPa).
- Single-Walled Carbon Nanotubes (SWCNTs): Seamless cylinder rolled from graphene sheet; exhibits metallic or semiconducting behavior depending on chiral vector indices (n, m).

13. Advanced Liquid Coolants — High-efficiency heat transfer fluids for electronic devices, EV battery packs, and nuclear reactors:
- Thermophysical Properties: High specific heat capacity Cp, high thermal conductivity k, low kinematic viscosity ν, non-corrosive, non-flammable, and high dielectric breakdown strength.
- Nanofluids: Colloidal suspensions of nanoscale metallic or metal oxide particles (Al2O3, CuO, CNTs) in conventional base fluids (water, ethylene glycol) providing 20-50% enhancement in convective heat transfer.`;

  // Module 4: Spectroscopic & Diffraction Techniques
  m4.scope = "Electromagnetic Spectrum, UV-Visible Spectroscopy, Beer-Lambert Law, Electronic Transitions, Chromophores & Auxochromes, Powder X-Ray Diffraction, Bragg's Law & Debye-Scherrer Equation.";
  m4.summary = "Light-matter interactions, UV-Visible spectroscopy, Beer-Lambert quantitative laws, auxochromic red/blue shifts, and Powder X-Ray Diffraction with Debye-Scherrer crystallite sizing.";
  m4.theoryNotes = `1. Electromagnetic Spectrum & Light-Matter Interaction — Radiation characterized by wavelength λ, frequency ν, and photon energy E = hν = hc/λ:
- UV-Visible Region: 200 nm to 800 nm (induces electronic transitions between molecular orbitals).
- Infrared (IR) Region: 2.5 μm to 15 μm (induces molecular bond vibrational transitions).
- X-Ray Region: 0.01 nm to 10 nm (induces core electron ejection and crystal lattice diffraction).

2. UV-Visible Spectroscopy & Beer-Lambert Law — Quantitative absorption spectroscopy based on light attenuation through an absorbing solution:
- Beer's Law: Absorbance is directly proportional to solute concentration c.
- Lambert's Law: Absorbance is directly proportional to optical path length l.
- Combined Beer-Lambert Law:
A = log10(I_0 / I) = ε · c · l
Where A is dimensionless absorbance, I_0 is incident light intensity, I is transmitted light intensity, c is molar concentration (mol/L), l is cuvette path length (usually 1.0 cm), and ε is molar extinction coefficient / molar absorptivity (L·mol^-1·cm^-1).

3. Electronic Transitions in UV-Visible — Promotion of an electron from an occupied molecular orbital to an unoccupied antibonding orbital:
- σ -> σ*: Requires high photon energy (far UV < 200 nm), observed in saturated alkanes (C-C, C-H bonds).
- n -> σ*: Moderate energy (150-250 nm), observed in saturated molecules containing non-bonding heteroatom lone pairs (C-O, C-N, C-Cl).
- π -> π*: High intensity absorption (200-400 nm), characteristic of unsaturated double bonds, alkenes, carbonyls, and conjugated polyenes.
- n -> π*: Low intensity, symmetry-forbidden transition (250-400 nm) occurring at longer wavelengths in carbonyl and azo compounds.

4. Chromophores — An unsaturated covalent functional group that absorbs radiation in the UV or visible region, imparting color to the molecule (e.g. -C=C-, -C≡C-, -C=O, -N=N-, -NO2, aromatic phenyl rings).

5. Auxochromes — A saturated substituent group with non-bonding lone pairs that does not absorb UV radiation on its own, but when attached directly to a chromophore shifts the absorption maximum to longer wavelengths (bathochromic shift) and enhances absorption intensity (e.g. -OH, -NH2, -OCH3, -SH, -Cl).

6. Bathochromic Shift (Red Shift) — The displacement of an absorption band maximum (λ_max) toward longer wavelengths (lower energy), caused by extended conjugation, auxochromic substitution, or solvent polarity changes.

7. Hypsochromic Shift (Blue Shift) — The displacement of an absorption band maximum (λ_max) toward shorter wavelengths (higher energy), typically caused by loss of orbital conjugation or specific solvent hydrogen bonding.

8. Hyperchromic & Hypochromic Effects —
- Hyperchromic Effect: An increase in absorption intensity (molar extinction coefficient ε_max increases).
- Hypochromic Effect: A decrease in absorption intensity (molar extinction coefficient ε_max decreases).

9. Powder X-Ray Diffraction (Powder XRD) — Non-destructive analytical technique for identifying crystal structures, phase purity, and crystallite size in polycrystalline materials:
- Monochromatic X-Ray Generation: Cu Kα radiation (λ = 1.5406 Å) generated by bombarding copper target with high-velocity electrons.
- Random Crystallite Orientation: Finely ground powder contains thousands of crystallites in all possible crystallographic orientations, satisfying the diffraction condition for every plane family.

10. Bragg's Law of Diffraction — Condition for constructive interference of X-rays scattered from parallel crystal planes:
2d · sin θ = n · λ
Where d is interplanar lattice spacing between adjacent (hkl) crystal planes, θ is glancing angle of incidence (Bragg angle), n is diffraction order (integer), and λ is X-ray wavelength.

11. Debye-Scherrer Equation for Crystallite Size — Relates peak broadening in the XRD diffractogram to sub-micrometer crystallite domain size:
D = (K · λ) / (β · cos θ)
Where D is mean crystallite diameter, K is dimensionless shape factor (typically K ≈ 0.9 for spherical crystallites), λ is X-ray wavelength (1.5406 Å for Cu Kα), β is full width at half maximum (FWHM) of the diffraction peak expressed in radians (after correcting for instrumental broadening: β^2 = β_measured^2 - β_inst^2), and θ is Bragg angle of the peak center.`;

  // Module 5: Computational Chemistry: Basic to Applications
  m5.scope = "Quantum vs Classical Mechanics, Schrödinger Equation, Born-Oppenheimer Approximation, Hartree-Fock SCF, DFT, Gaussian Basis Sets, LCAO Molecular Orbital Theory, PES & AI in Materials Discovery.";
  m5.summary = "Quantum vs classical mechanics, Born-Oppenheimer decoupling, ab initio Hartree-Fock, DFT, Gaussian basis sets, LCAO-MO theory (H2/NO), potential energy surfaces, and AI material screening.";
  m5.theoryNotes = `1. Computational Chemistry — The branch of chemistry that applies computer algorithms, numerical methods, and fundamental physical laws to calculate molecular geometries, energies, dipole moments, vibrational frequencies, and reaction mechanisms.

2. Quantum Mechanics (QM) — The microscopic approach that explicitly models electrons and atomic nuclei by solving the quantum Schrödinger wave equation without empirical parameter fitting (includes Ab Initio Hartree-Fock and Density Functional Theory DFT). Accurately simulates bond formation, bond breaking, chemical reactions, charge transfer, and electronic spectra at computational scaling of O(N^3) to O(N^7).

3. Classical Mechanics (Molecular Mechanics MM) — The macroscopic approach that treats atoms as classical Newtonian spheres (balls) interconnected by harmonic springs, completely omitting explicit quantum electrons. Solves Newton's second law F = ma using empirical force field equations (AMBER, CHARMM, GROMOS). Capable of simulating enormous biomolecular complexes, lipid bilayers, and polymers with millions of atoms across nanosecond-to-microsecond trajectories.

4. Hybrid QM/MM Methods — A multi-scale modeling strategy that treats the active catalytic core or ligand binding pocket with high-level Quantum Mechanics while representing the surrounding bulk protein scaffold and solvent with computationally inexpensive Classical Molecular Mechanics.

5. Schrödinger Wave Equation — The fundamental wave equation of non-relativistic quantum mechanics:
Ĥ Ψ = E Ψ
Where Ĥ is the Hamiltonian energy operator (consisting of kinetic energy operators for nuclei and electrons plus Coulombic potential energy attraction and repulsion terms), Ψ is the molecular wavefunction, and E is the total eigenenergy of the system.

6. Born-Oppenheimer Approximation — Fundamental simplifying approximation in quantum chemistry:
Because atomic nuclei are at least 1,836 times more massive than electrons (M_nucleus >> m_electron), nuclei move with negligible velocity compared to electrons. Electrons respond virtually instantaneously to any change in nuclear positions.
By fixing the nuclear coordinates (setting nuclear kinetic energy T_n = 0), the electronic Schrödinger equation decouples from nuclear motion:
Ĥ_elec Ψ_elec = E_elec Ψ_elec
Solving this electronic equation for systematic variations in nuclear coordinates generates the Potential Energy Surface (PES) on which the nuclei move.

7. Hartree-Fock Self-Consistent Field (HF-SCF) Method — Ab initio quantum method representing the N-electron wavefunction as a single Slater determinant of one-electron spin-orbitals. Each electron experiences an average mean-field electrostatic potential created by all other electrons. Iteratively refined until the field becomes self-consistent; neglects instantaneous dynamic electron correlation.

8. Density Functional Theory (DFT) — Hohenberg-Kohn and Kohn-Sham quantum approach proving that the ground-state properties and total energy of an electronic system are uniquely determined by the electron density distribution ρ(r) rather than the multi-dimensional 3N-variable wavefunction:
E[ρ] = T_s[ρ] + V_ext[ρ] + J[ρ] + E_xc[ρ]
Where E_xc[ρ] is the exchange-correlation functional. Scales favorably as O(N^3), making it the primary workhorse for modeling molecules and solid-state materials.

9. Gaussian Basis Sets — Mathematical functions used in linear combinations to build molecular orbitals (LCAO-MO: ψ_i = Σ c_μi φ_μ):
- Minimal Basis Set (STO-3G): Employs a single basis function per core and valence atomic orbital, fitting each Slater-type orbital with 3 primitive Gaussian-type orbitals.
- Split-Valence Basis Sets (6-31G, 6-311G): Inner core electrons are represented by 1 contraction of 6 primitives; valence electrons are split into two or three separate functions (e.g. 3 primitives + 1 primitive for 6-31G), giving the electron cloud flexibility to expand or contract.
- Polarization Functions (* or d,p): Adds higher angular momentum functions (d-functions on heavy atoms C/N/O and p-functions on hydrogen atoms, e.g. 6-31G(d,p)) to allow orbital shapes to polarize along chemical bonds.
- Diffuse Functions (+ or ++): Adds wide, radially diffuse Gaussian functions (e.g. 6-31+G(d,p)) essential for modeling lone pairs, anions, and weak non-covalent interactions.
- Effective Core Potentials (ECP / LANL2DZ): Replaces computationally demanding non-valence core electrons of heavy transition elements with pseudopotentials, accounting for relativistic effects.

10. Molecular Orbital Theory: LCAO Criteria & Diagrams —
- 3 Mandatory LCAO Criteria: (1) Comparable orbital energy, (2) Substantial spatial overlap, (3) Identical orbital symmetry along the internuclear bonding axis.
- Homonuclear H2: Combination of two 1s atomic orbitals forms bonding σ1s and antibonding σ*1s. Electron configuration: (σ1s)^2. Bond order = (2 - 0)/2 = 1.0. Diamagnetic.
- Heteronuclear Nitric Oxide (NO): 11 valence electrons (N: 2s² 2p³; O: 2s² 2p⁴). Oxygen is more electronegative than nitrogen, so oxygen atomic orbitals lie lower in energy. Configuration: (σ2s)^2 (σ*2s)^2 (π2px)^2 (π2py)^2 (σ2pz)^2 (π*2px)^1. Bond order = (8 - 3)/2 = 2.5. Paramagnetic due to 1 unpaired electron in π*2px orbital. Ionization to NO+ removes the antibonding electron, increasing bond order to 3.0.

11. Potential Energy Surfaces (PES) & Stationary Points — Multi-dimensional surface representing the total energy of a molecule as a function of nuclear coordinates:
- Degrees of Freedom: Linear molecules have 3N - 5 vibrational degrees of freedom; Non-linear molecules have 3N - 6 vibrational degrees of freedom.
- Gradient Vector: First derivative ∇E = 0 identifies stationary points.
- Local / Global Minima: Stationary points where all eigenvalues of the Hessian second-derivative matrix are strictly positive (all vibrational frequencies are real). Represents stable reactants, intermediates, or products.
- Transition State (TS): First-order saddle point where the Hessian matrix has EXACTLY ONE negative eigenvalue (corresponding to EXACTLY ONE imaginary vibrational frequency), with the eigenvector pointing along the minimum energy reaction coordinate.

12. Molecular Electrostatic Potential (MEP) Surfaces — 3D color-coded map of the electrostatic potential V(r) mapped onto the total electron density isosurface:
- Red (-V(r)): Region of high electron density and negative electrostatic potential (e.g. lone pair on Nitrogen in NH3), indicating nucleophilic sites preferred by electrophilic reagents.
- Blue (+V(r)): Region of low electron density and positive electrostatic potential (e.g. hydrogen atoms in NH3), indicating electrophilic sites preferred by nucleophilic attack.

13. AI & Machine Learning in Materials Discovery —
- Machine-Learned Interatomic Potentials (MLIPs): Deep neural networks trained on high-level DFT quantum calculation databases that predict molecular energies and atomic forces in milliseconds rather than hours.
- Applications: Rapid high-throughput screening of bandgaps, crystal structures, lithium-ion diffusion pathways in solid-state battery electrolytes, and solar cell perovskite compositions.`;

  // Write updated course back
  const fileContent = `export const chemistryCourse = ${JSON.stringify(chemistryCourse, null, 2)};\n`;
  fs.writeFileSync(chemPath, fileContent, 'utf-8');
  console.log('Successfully updated chemistryCourse in chemistry.js');
});
