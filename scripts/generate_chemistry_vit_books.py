#!/usr/bin/env python3
import subprocess, os

CHEMISTRY_VIT_MODULES = [
    {
        "num": 1,
        "code": "BCHY101L",
        "title": "CHEMICAL THERMODYNAMICS AND KINETICS",
        "short_title": "Thermodynamics & Kinetics",
        "co": "CO: 1",
        "scope": "(1) First and Second Laws of Thermodynamics, (2) Entropy change for isothermal, isobaric, and phase transition processes, (3) Spontaneity criteria, Gibbs free energy ($Delta G$) and Helmholtz free energy ($Delta A$), (4) Heat transfer and Kirchhoff's thermochemical equations, (5) Chemical Kinetics: Energy barrier, collision theory, and Arrhenius activation energy derivation, (6) Catalysis: Homogeneous vs Heterogeneous catalysis, and (7) Enzyme Kinetics: Michaelis-Menten mechanism, Lineweaver-Burk derivation, and $K_m$ significance.",
        "blueprint": """In VIT Final Assessment Tests (BCHY101L FAT Papers), Module 1 carries 15 to 20 marks:
1. *Question Type A (10 Marks):* Michaelis-Menten Enzyme Kinetics: Derivation of the rate equation $v = (V_"max" [S]) / (K_m + [S])$, double reciprocal Lineweaver-Burk plot, and physiological interpretation of Michaelis constant $K_m$.
2. *Question Type B (10 Marks):* Arrhenius equation derivation and calculations of activation energy $E_a$ and rate constants at two temperatures ($T_1, T_2$), or Entropy change ($Delta S$) calculations for ideal gas expansions and phase transitions.""",
        "table_headers": ("Concept / Law", "Mathematical Formula / Derivation", "FAT Key Significance"),
        "table_rows": [
            ("Entropy Change ($Delta S$)", '$Delta S = n C_p ln(T_2 / T_1) - n R ln(P_2 / P_1)$', 'Governs spontaneity; for isolated system $Delta S_"univ" >= 0$'),
            ("Gibbs Free Energy", '$Delta G = Delta H - T Delta S$, $Delta G^0 = -R T ln K_p$', '$Delta G < 0$ for spontaneous irreversible processes at const $T, P$'),
            ("Arrhenius Equation", '$ln(k_2 / k_1) = (E_a / R) (1 / T_1 - 1 / T_2)$', 'Determines activation energy barrier $E_a$ from temperature dependence'),
            ("Michaelis-Menten Equation", '$v = (V_"max" [S]) / (K_m + [S])$', 'Enzyme-substrate saturation curve; hyperbola transitioning to order 0'),
            ("Michaelis Constant ($K_m$)", '$K_m = (k_(-1) + k_2) / k_1$', '$K_m$ is the substrate concentration $[S]$ at which $v = V_"max" / 2$'),
            ("Lineweaver-Burk Plot", '$1 / v = (K_m / V_"max") (1 / [S]) + 1 / V_"max"$', 'Linear double-reciprocal plot; slope $= K_m / V_"max"$, y-intercept $= 1 / V_"max"$')
        ],
        "sections": [
            ("Topic 1: Thermodynamics, Entropy & Gibbs Free Energy", """
=== First & Second Laws of Thermodynamics
1. *First Law:* $Delta U = q + w = q - P Delta V$. Internal energy is a state function.
2. *Second Law & Entropy:* Clausius inequality defines entropy change:
$ d S = (d q_"rev") / T $
For an ideal gas undergoing a state transformation from $(P_1, V_1, T_1)$ to $(P_2, V_2, T_2)$:
$ Delta S = n C_v ln(T_2 / T_1) + n R ln(V_2 / V_1) = n C_p ln(T_2 / T_1) - n R ln(P_2 / P_1) $
For a phase change at equilibrium transition temperature $T_"tr"$:
$ Delta S_"fusion" = (Delta H_"fusion") / T_"mp", quad Delta S_"vap" = (Delta H_"vap") / T_"bp" $

=== Gibbs Free Energy and Spontaneity Criteria
Defined as $G = H - T S$. At constant temperature and pressure:
$ Delta G = Delta H - T Delta S $
- *Criterion of Spontaneity:*
  - If $Delta G < 0$: Spontaneous, feasible, exergonic process.
  - If $Delta G = 0$: Dynamic chemical equilibrium.
  - If $Delta G > 0$: Non-spontaneous, endergonic process (requires external work).
"""),
            ("Topic 2: Chemical Kinetics & Arrhenius Activation Energy", """
=== Collision Theory & Arrhenius Equation
For molecules to react, reactant particles must collide with sufficient kinetic energy exceeding the activation energy threshold ($E_a$) and proper steric orientation:
$ k = A e^(- E_a / (R T)) $
Taking natural logarithm:
$ ln k = ln A - E_a / (R T) $
Between two temperatures $T_1$ and $T_2$:
$ ln(k_2 / k_1) = (E_a / R) [ 1 / T_1 - 1 / T_2 ] = (E_a / R) [ (T_2 - T_1) / (T_1 T_2) ] $
$ log_10(k_2 / k_1) = (E_a) / (2.303 R) [ (T_2 - T_1) / (T_1 T_2) ] $
"""),
            ("Topic 3: Enzyme Kinetics & Michaelis-Menten Derivation", """
=== Michaelis-Menten Mechanism
Enzyme-catalyzed reactions follow the reversible formation of an enzyme-substrate complex ($E S$) followed by irreversible breakdown into product:
$ E + S limits(<->)^(k_1)_(k_(-1)) E S limits(arrow.r)^(k_2) E + P $
Applying the Briggs-Haldane Steady-State Approximation:
The rate of formation of $E S$ equals its rate of breakdown:
$ (d [E S]) / (d t) = k_1 [E] [S] - k_(-1) [E S] - k_2 [E S] = 0 $
$ k_1 [E] [S] = (k_(-1) + k_2) [E S] $
Define the *Michaelis Constant ($K_m$)*:
$ K_m = (k_(-1) + k_2) / k_1 $
Thus:
$ [E] [S] = K_m [E S] =⇒ [E] = (K_m [E S]) / [S] $
Total enzyme concentration is conserved: $[E]_0 = [E] + [E S]$:
$ [E]_0 = (K_m [E S]) / [S] + [E S] = [E S] [ (K_m + [S]) / [S] ] $
$ [E S] = ([E]_0 [S]) / (K_m + [S]) $
The reaction velocity is $v = k_2 [E S]$. When all enzyme is bound ($[E S] = [E]_0$), velocity achieves its maximum $V_"max" = k_2 [E]_0$:
$ v = (k_2 [E]_0 [S]) / (K_m + [S]) = (V_"max" [S]) / (K_m + [S]) $

=== Lineweaver-Burk Double Reciprocal Plot
Inverting the Michaelis-Menten equation:
$ 1 / v = (K_m + [S]) / (V_"max" [S]) = (K_m / V_"max") (1 / [S]) + 1 / V_"max" $
Plotting $1 / v$ vs $1 / [S]$ yields a straight line:
- Slope $= K_m / V_"max"$
- y-intercept $= 1 / V_"max"$
- x-intercept $= - 1 / K_m$.
"""),
            ("Topic 4: Worked VIT FAT Question Bank Problems", """
*Problem 1.1 (BCHY101L FAT April 2025 --- 10 Marks):* In an enzyme-catalyzed reaction, the initial velocity was measured at different substrate concentrations. The maximum velocity $V_"max"$ was found to be $100 mu"mol/L"dot"min"$ and the Michaelis constant $K_m$ was $2.0 times 10^(-3)" mol/L"$. Calculate:
1. The reaction velocity when substrate concentration $[S] = 2.0 times 10^(-3)" mol/L"$.
2. The reaction velocity when $[S] = 1.0 times 10^(-2)" mol/L"$.
3. The substrate concentration required to achieve $90%$ of $V_"max"$.

*Solution:*
1. When $[S] = K_m = 2.0 times 10^(-3)" mol/L"$:
  $ v = (V_"max" [S]) / (K_m + [S]) = (100 times K_m) / (2 K_m) = V_"max" / 2 = 50 mu"mol/L"dot"min" $.
2. When $[S] = 1.0 times 10^(-2)" mol/L"$:
  $ v = (100 times 1.0 times 10^(-2)) / (2.0 times 10^(-3) + 1.0 times 10^(-2)) = (1.0) / (0.012) = 83.33 mu"mol/L"dot"min" $.
3. To reach $v = 0.90 V_"max" = 90 mu"mol/L"dot"min"$:
  $ 90 = (100 [S]) / (2.0 times 10^(-3) + [S]) =⇒ 90(2.0 times 10^(-3) + [S]) = 100 [S] $
  $ 0.18 + 90 [S] = 100 [S] =⇒ 10 [S] = 0.18 =⇒ [S] = 0.018" mol/L" = 1.8 times 10^(-2)" mol/L" $.
"""),
            ("VIT Faculty Exam Insights & Common Traps", """
- *Steady-State vs Equilibrium Trap:* In Michaelis-Menten derivations, state clearly that you are applying the *Briggs-Haldane Steady-State Assumption* ($d"[""ES""]"/dt = 0$), NOT thermodynamic equilibrium, to receive full marks from VIT examiners!
- *Activation Energy Units:* Always ensure $R = 8.314" J/mol"dot"K"$ matches $E_a$ in Joules. If $E_a$ is given in kJ/mol, multiply by 1000 before inserting into the Arrhenius equation.
"""),
            ("Quick Self-Test Checklist Before Your Exam", """
1. Can you write down the 5 steps to derive the Michaelis-Menten rate equation from steady-state assumptions?
2. What are the slope and intercepts of the Lineweaver-Burk double reciprocal plot?
3. How do you calculate activation energy $E_a$ using rate constants at two different temperatures?
4. What is the physical and biological significance of $K_m$?
""")
        ]
    },
    {
        "num": 2,
        "code": "BCHY101L",
        "title": "METAL COMPLEXES AND ORGANOMETALLICS",
        "short_title": "Complexes & Organometallics",
        "co": "CO: 2",
        "scope": "(1) Inorganic coordination complexes: Werner's theory, Valence Bond Theory (VBT), and Crystal Field Theory (CFT), (2) Octahedral and tetrahedral crystal field splitting ($Delta_o, Delta_t$), (3) High-spin vs Low-spin configurations and spectrochemical series, (4) Organometallic chemistry: 18-electron rule, metal carbonyls ($Ni(CO)_4, Fe(CO)_5, Cr(CO)_6$), synergistic $M-C$ bonding ($sigma$-donation and $pi$-backbonding), (5) Ferrocene: sandwich structure, synthesis, and aromatic character, (6) Grignard reagents ($R-Mg-X$): preparation and synthetic applications, and (7) Bioinorganic chemistry: Hemoglobin ($Fe$) and Chlorophyll ($Mg$) coordination structures.",
        "blueprint": """In VIT Final Assessment Tests, Module 2 carries 15 to 20 marks:
1. *Question Type A (10 Marks):* Crystal Field Theory (CFT): Crystal field splitting in octahedral complexes ($t_(2g)$ vs $e_g$), calculation of Crystal Field Stabilization Energy (CFSE), and pairing energy criteria ($Delta_o > P$).
2. *Question Type B (10 Marks):* Organometallic Chemistry: Synergistic bonding mechanism in metal carbonyls with molecular orbital orbital overlap diagrams, or Ferrocene sandwich structure and 18-electron rule verification.""",
        "table_headers": ("Concept / Compound", "Electronic Configuration / Principle", "FAT Diagnostic Feature"),
        "table_rows": [
            ("Crystal Field Splitting", '$Delta_o$: $t_(2g)$ lowered by $0.4 Delta_o$, $e_g$ raised by $0.6 Delta_o$', 'Ligand lone pairs repel d-orbitals along Cartesian axes'),
            ("CFSE Formula", '$"CFSE" = [-0.4 n_(t_2g) + 0.6 n_(e_g)] Delta_o + m P$', 'Negative value represents extra stabilization energy'),
            ("18-Electron Rule", '$"Total Valence Electrons (TVE)" = V + L + Q = 18$', 'Predicts stability of transition metal organometallics'),
            ("Synergistic Carbonyl Bond", '$M limits(arrow.l)^sigma C equiv O$ and $M limits(arrow.r)^pi C equiv O$', '$pi$-backbonding weakens $C equiv O$ bond; lowers IR stretching frequency'),
            ("Ferrocene ($Fe(C_5 H_5)_2$)", '$Fe^(2+) (d^6) + 2 (eta^5-C_5 H_5^-) = 6 + 12 = 18 e^-$', 'Sandwich aromatic complex; undergoes electrophilic substitution'),
            ("Hemoglobin Structure", 'Octahedral $Fe^(2+)$ protoporphyrin IX with proximal histidine', 'Reversible $O_2$ transport; cooperativity sigmoid binding curve')
        ],
        "sections": [
            ("Topic 1: Crystal Field Theory (CFT) & CFSE Calculations", """
=== Octahedral Crystal Field Splitting
In an isolated gaseous transition metal cation, all five $d$-orbitals ($d_(x y), d_(y z), d_(z x), d_(x^2-y^2), d_(z^2)$) are degenerate.
When six ligands approach along the $x, y, z$ axes to form an octahedral complex:
- Orbitals directed along the axes ($d_(x^2-y^2), d_(z^2)$) experience greater electrostatic repulsion and split to a higher energy level denoted as $e_g$ ($+0.6 Delta_o$).
- Orbitals directed between the axes ($d_(x y), d_(y z), d_(z x)$) experience lesser repulsion and split to a lower energy level denoted as $t_(2g)$ ($-0.4 Delta_o$).
The energy separation between $t_(2g)$ and $e_g$ is $Delta_o$ ($10" Dq"$).

=== High-Spin vs Low-Spin Complexes & Pairing Energy ($P$)
- *Strong-field ligands (e.g., $"CN"^-, "CO", "NO"_2^-$):* Produce large $Delta_o$. When $Delta_o > P$ (Pairing Energy), electrons pair up in the lower $t_(2g)$ orbitals first, producing *Low-Spin (inner orbital)* complexes.
- *Weak-field ligands (e.g., $"I"^-, "Br"^-, "Cl"^-, "F"^-, "H"_2"O"$):* Produce small $Delta_o$. When $Delta_o < P$, electrons occupy $e_g$ before pairing, producing *High-Spin (outer orbital)* complexes.
- *Spectrochemical Series:*
$ "I"^- < "Br"^- < "Cl"^- < "F"^- < "OH"^- < "H"_2"O" < "NH"_3 < "en" < "NO"_2^- < "CN"^- < "CO" $
"""),
            ("Topic 2: Organometallic Chemistry & Synergistic Bonding", """
=== The 18-Electron Rule
Transition metal organometallic complexes achieve thermodynamic stability when their total valence shell electron count equals the 18 electrons of the next noble gas:
$ "Total Valence Electron Count (TVE)" = "Group number of metal" + sum "Electrons donated by ligands" - "Charge" $
- *Nickel Tetracarbonyl ($Ni(CO)_4$):* $Ni (d^(10)) + 4 times 2 (CO) = 10 + 8 = 18 e^-$. (Stable tetrahedral).
- *Iron Pentacarbonyl ($Fe(CO)_5$):* $Fe (d^8) + 5 times 2 (CO) = 8 + 10 = 18 e^-$. (Stable trigonal bipyramidal).

=== Synergistic Bonding Mechanism in Metal Carbonyls
The bonding between a transition metal and carbon monoxide ($M - C equiv O$) consists of two synergistic cooperative components:
1. *Forward $sigma$-Donation:* The filled lone pair orbital on carbon ($sigma$-HOMO) donates electron density into an empty hybrid $d$-orbital of the metal atom:
$ M limits(arrow.l)^sigma :C equiv O: $
2. *Reverse $pi$-Backbonding:* Filled, non-bonding $d$-orbitals of the transition metal ($t_(2g)$) donate electron density into the empty degenerate anti-bonding $pi^*$-orbitals of the carbon monoxide molecule:
$ M limits(arrow.r)^pi pi^*(C equiv O) $
*Consequences of Synergistic Backbonding:*
- Increases metal-carbon ($M-C$) bond strength and shortens the $M-C$ bond distance.
- Reduces electron density in the $C equiv O$ bonding region, weakening the $C-O$ bond and shifting its IR vibrational stretching frequency from $2143" cm"^(-1)$ (free CO) down to $1850-2050" cm"^(-1)$!
"""),
            ("Topic 3: Ferrocene & Bioinorganic Systems", """
=== Ferrocene ($Fe(eta^5-C_5 H_5)_2$)
Ferrocene consists of an $Fe^(2+)$ cation sandwiched symmetrically between two parallel cyclopentadienyl anion rings ($Cp^-$):
- *18-Electron Count:* $Fe^(2+) (6 e^-) + 2 times (eta^5-C_5H_5^-) (12 e^-) = 18 e^-$.
- *Aromaticity:* Undergoes rapid electrophilic aromatic substitutions (Friedel-Crafts acylation, sulfonation, alkylation) $10^6$ times faster than benzene!

=== Metals in Biology: Hemoglobin & Chlorophyll
1. *Hemoglobin:* Tetrameric metalloprotein containing iron(II) protoporphyrin IX. Iron is coordinated to 4 porphyrin pyrrole nitrogens and 1 proximal histidine imidazole nitrogen in a square pyramidal geometry. Molecular oxygen ($O_2$) reversibly binds at the sixth axial position, causing low-spin $Fe^(2+)$ to shift into the porphyrin plane (*allosteric cooperativity*).
2. *Chlorophyll:* Magnesium(II) complex with a modified porphyrin ring (chlorin) containing a fused cyclopentanone ring and a hydrophobic phytol tail. Absorbs red and blue light to drive photosynthetic water splitting.
"""),
            ("VIT Faculty Exam Insights & Common Traps", """
- *CFSE Pairing Term Trap:* In CFSE calculations, remember to add $m P$ only for extra pairs formed beyond the free ion configuration!
- *Carbonyl IR Frequency:* In questions asking why metal carbonyls show lower IR frequencies than free CO, the exact keyword evaluators look for is *"d-to-pi-star back-donation"*.
"""),
            ("Quick Self-Test Checklist Before Your Exam", """
1. Can you calculate CFSE for $d^4, d^5, d^6$ systems in both high-spin and low-spin octahedral fields?
2. Can you sketch the orbital overlap diagram for $sigma$-donation and $pi$-backbonding in metal carbonyls?
3. How do you verify that Ferrocene satisfies the 18-electron rule?
4. What is the coordination geometry of $Fe^(2+)$ in deoxygenated vs oxygenated hemoglobin?
""")
        ]
    },
    {
        "num": 3,
        "code": "BCHY101L",
        "title": "ORGANIC INTERMEDIATES AND REACTION TRANSFORMATIONS",
        "short_title": "Organic Reactions",
        "co": "CO: 3",
        "scope": "(1) Reactive organic intermediates: Carbocations, Carbanions, and Free Radicals, (2) Factors determining intermediate stability: inductive effect, resonance, hyperconjugation, and steric effects, (3) Aromaticity and Huckel's $(4n+2) pi$ rule, (4) Heterocyclic chemistry: 3-, 4-, 5-, and 6-membered heterocycles (furan, pyrrole, thiophene, pyridine), (5) Organic reaction mechanisms: Addition, Elimination ($E_1, E_2$), Nucleophilic substitution ($S_N 1, S_N 2$), and (6) Pharmaceutical synthesis of target drugs (Paracetamol, Aspirin) and azo dyes (Methyl Orange).",
        "blueprint": """In VIT Final Assessment Tests, Module 3 carries 15 to 20 marks:
1. *Question Type A (10 Marks):* Reactive Intermediates: Comparative stability order of carbocations, carbanions, and radicals with orbital hybridization diagrams and hyperconjugation structures.
2. *Question Type B (10 Marks):* Synthesis of Drugs & Dyes: Complete chemical reaction mechanism for synthesizing Paracetamol from 4-aminophenol or Aspirin from salicylic acid, and diazotization/coupling for Methyl Orange.""",
        "table_headers": ("Intermediate / Molecule", "Hybridization & Geometry", "Stability Order / Diagnostic Rule"),
        "table_rows": [
            ("Carbocation ($R_3 C^+$)", '$sp"sp"^2 planar with empty p-orbital', '$3^degree > 2^degree > 1^degree > "CH"_3^+$; stabilized by hyperconjugation and $+I$ effect'),
            ("Carbanion ($R_3 C^-$)", '$sp"sp"^3 pyramidal with lone pair', '$"CH"_3^- > 1^degree > 2^degree > 3^degree$; stabilized by $-I$ effect and electron-withdrawing groups'),
            ("Free Radical ($R_3 C^dot$)", '$sp"sp"^2 or shallow pyramidal with unpaired electron', '$3^degree > 2^degree > 1^degree > "CH"_3^dot$; stabilized by hyperconjugation resonance'),
            ("Huckel's Rule", 'Planar, cyclic, conjugated ring with $(4n+2) pi$ electrons', '$n = 0 (2 pi), n = 1 (6 pi), n = 2 (10 pi)$; enhanced resonance stability'),
            ("Pyridine Heterocycle", '$6 pi$-electron aromatic system; basic lone pair on N', 'Undergoes electrophilic substitution at C-3 position'),
            ("Paracetamol Synthesis", '4-aminophenol + acetic anhydride', 'Selective N-acetylation; antipyretic and analgesic drug')
        ],
        "sections": [
            ("Topic 1: Carbocations, Carbanions & Free Radicals", """
=== Reactive Organic Intermediates
1. *Carbocations ($R_3 C^+$):*
  - Central carbon is $sp"sp"^2 hybridized with trigonal planar geometry ($120^degree$ bond angles) and an empty unhybridized $p_z$ orbital.
  - *Stability Hierarchy:*
    $ "Tertiary" (3^degree) > "Secondary" (2^degree) > "Primary" (1^degree) > "Methyl" ("CH"_3^+) $
    - *Hyperconjugation:* $3^degree$ carbocation ($(CH_3)_3 C^+$) has 9 $alpha$-hydrogens, allowing 9 hyperconjugative canonical structures ($sigma_(C-H) arrow.r p_z$ delocalization).
    - *Inductive Effect:* Three electron-donating alkyl groups ($+I$) disperse the formal positive charge.
    - *Allylic & Benzylic:* Exceptionally stable due to extended $pi$-resonance delocalization.
2. *Carbanions ($R_3 C^-$):*
  - Central carbon is $sp"sp"^3 hybridized with trigonal pyramidal geometry and a non-bonding lone pair.
  - *Stability Hierarchy:*
    $ "Methyl" ("CH"_3^-) > "Primary" (1^degree) > "Secondary" (2^degree) > "Tertiary" (3^degree) $
    Alkyl groups ($+I$) intensify negative charge, destabilizing tertiary carbanions.
3. *Carbon Free Radicals ($R_3 C^dot$):*
  - Seven valence electrons; stabilized by hyperconjugation and resonance similar to carbocations ($3^degree > 2^degree > 1^degree$).
"""),
            ("Topic 2: Aromaticity, Huckel's Rule & Heterocycles", """
=== Criteria for Aromaticity (Huckel's Rule)
A compound is aromatic if:
1. It is cyclic and planar (all ring atoms $sp"sp"^2 hybridized).
2. Completely conjugated cyclic $pi$-system.
3. Contains $(4n + 2) pi$ delocalized electrons (where $n = 0, 1, 2, dots$).
Examples: Benzene ($n = 1, 6 pi$), Pyridine ($6 pi$), Cyclopentadienyl anion ($6 pi$), Tropylium cation ($6 pi$), Naphthalene ($n = 2, 10 pi$).

=== Five-Membered & Six-Membered Heterocycles
- *Pyrrole, Furan, Thiophene:* The heteroatom ($N-H, O, S$) donates its unshared lone pair into the ring to complete the $6 pi$-electron aromatic sextet. Aromaticity order: $"Thiophene" > "Pyrrole" > "Furan"$.
- *Pyridine:* Nitrogen contributes one $p$-electron to the $pi$-system; its lone pair resides in an $sp"sp"^2 orbital orthogonal to the $pi$-cloud, making pyridine basic ($p K_b = 8.75$).
"""),
            ("Topic 3: Pharmaceutical Drug & Dye Synthesis", """
=== Synthesis of Paracetamol (Acetaminophen)
Synthesized by selective nucleophilic acylation of 4-aminophenol using acetic anhydride in aqueous medium:
$ "HO"- "C"_6"H"_4- "NH"_2 + ("CH"_3"CO")_2"O" arrow.r "HO"- "C"_6"H"_4- "NH"-"CO"-"CH"_3 + "CH"_3"COOH" $
Because the amino group ($-NH_2$) is substantially more nucleophilic than the phenolic hydroxyl group ($-OH$), N-acetylation occurs with $> 95%$ selectivity without requiring protection of the -OH group.

=== Synthesis of Aspirin (Acetylsalicylic Acid)
Synthesized by esterification of salicylic acid with acetic anhydride using catalytic concentrated sulfuric acid:
$ "HO"- "C"_6"H"_4- "COOH" + ("CH"_3"CO")_2"O" limits(arrow.r)^("H"_2"SO"_4) "CH"_3"COO"- "C"_6"H"_4- "COOH" + "CH"_3"COOH" $

=== Synthesis of Methyl Orange (Azo Dye)
1. *Diazotization:* Sulfanilic acid reacts with sodium nitrite and $HCl$ at $0-5 degree"C"$ to form diazonium zwitterion.
2. *Azo Coupling:* The diazonium salt couples with N,N-dimethylaniline at the para-position to form bright orange azo dye Methyl Orange.
"""),
            ("VIT Faculty Exam Insights & Common Traps", """
- *Paracetamol Nucleophilicity:* Always state why only the $-NH_2$ group undergoes acetylation while $-OH$ remains free: Nitrogen has lower electronegativity than oxygen, rendering its lone pair far more nucleophilic!
- *Huckel Rule Traps:* Cyclooctatetraene ($8 pi$ electrons) is NOT anti-aromatic; it adopts a non-planar tub conformation to remain non-aromatic.
"""),
            ("Quick Self-Test Checklist Before Your Exam", """
1. Can you explain why the tertiary carbocation is more stable than the primary carbocation using hyperconjugation?
2. What are the 4 requirements for a molecule to be classified as aromatic?
3. Write down the complete balanced chemical equation for the synthesis of Aspirin.
4. Why does Pyrrole exhibit acidic properties whereas Pyridine is basic?
""")
        ]
    },
    {
        "num": 4,
        "code": "BCHY101L",
        "title": "ENERGY DEVICES",
        "short_title": "Energy Devices",
        "co": "CO: 4",
        "scope": "(1) Electrochemical vs Electrolytic cells, (2) Electrode-electrolyte interface and Nernst equation, (3) Secondary storage batteries: Lead-Acid accumulator and Lithium-ion battery ($LiCoO_2 / C$), (4) Supercapacitors: Electrical Double Layer Capacitors (EDLCs) and pseudocapacitors, (5) Fuel Cells: Hydrogen-Oxygen fuel cell and Solid Oxide Fuel Cells (SOFC), and (6) Photovoltaic devices: Silicon solar cells and Dye-Sensitized Solar Cells (DSSCs).",
        "blueprint": """In VIT Final Assessment Tests, Module 4 carries 15 to 20 marks:
1. *Question Type A (10 Marks):* Lithium-Ion Battery: Rocking-chair intercalation chemistry, half-cell charging/discharging redox equations, electrolyte chemistry ($LiPF_6$ in EC/DMC), and performance parameters.
2. *Question Type B (10 Marks):* Dye-Sensitized Solar Cells (DSSCs) or Hydrogen-Oxygen Fuel Cell: Working mechanism, component functions ($TiO_2$, ruthenium dye, $I^-/I_3^-$ redox mediator, Pt counter electrode), and efficiency calculation.""",
        "table_headers": ("Energy Device", "Redox Reactions / Mechanism", "Engineering Benchmark"),
        "table_rows": [
            ("Lithium-Ion Battery", '$"LiCoO"_2 + "C"_6 <-> "Li"_(1-x)"CoO"_2 + "Li"_x "C"_6$', 'Nominal 3.7 V/cell, energy density $150-250" Wh/kg"$'),
            ("Lead-Acid Storage Cell", '$"Pb" + "PbO"_2 + 2"H"_2"SO"_4 arrow.r 2"PbSO"_4 + 2"H"_2"O"$', '2.0 V/cell; specific gravity drops from 1.28 to 1.15 g/mL'),
            ("H2-O2 Fuel Cell", '$2"H"_2 + "O"_2 arrow.r 2"H"_2"O"$, $Delta G^0 = -237.2" kJ/mol"$', 'Direct chemical-to-electrical conversion; theoretical $eta approx 83%$'),
            ("Solid Oxide Fuel Cell", '$O^(2-)$ conducted across $Y_2O_3$-stabilized $ZrO_2$ (YSZ) at $800-1000°C$', 'High efficiency ($> 60%$), uses hydrocarbon fuels directly'),
            ("EDLC Supercapacitor", 'Non-faradaic electrostatic charge accumulation at porous carbon double layer', 'Ultra-high power density ($> 10,000" W/kg"$), $> 500,000$ cycles'),
            ("Dye-Sensitized Solar Cell", 'Photoexcitation of Ru-dye -> electron injection into $TiO_2$ conduction band', 'Low-cost photovoltaic conversion; regenerates via $I^-/I_3^-$ mediator')
        ],
        "sections": [
            ("Topic 1: Lithium-Ion Battery & Secondary Accumulators", """
=== The Lithium-Ion "Rocking Chair" Battery
Operating on reversible intercalation of lithium ions into host crystal lattices without metallic lithium plating:
- *Anode (Negative Electrode):* Graphitic carbon intercalation compound ($Li_x C_6$).
- *Cathode (Positive Electrode):* Layered transition metal oxide ($Li_(1-x)CoO_2$).
- *Electrolyte:* 1 M $LiPF_6$ dissolved in non-aqueous organic carbonate solvents (Ethylene Carbonate + Dimethyl Carbonate).
- *Redox Reactions:*
  - *Discharge:*
    - Anode (Oxidation): $"Li"_x "C"_6 arrow.r "C"_6 + x "Li"^+ + x e^-$
    - Cathode (Reduction): $"Li"_(1-x)"CoO"_2 + x "Li"^+ + x e^- arrow.r "LiCoO"_2$
    - Overall: $"Li"_x "C"_6 + "Li"_(1-x)"CoO"_2 arrow.r "C"_6 + "LiCoO"_2$
  - *Recharge:* External DC voltage reverses the reaction, de-intercalating $Li^+$ from $LiCoO_2$ back into graphite.
"""),
            ("Topic 2: Fuel Cells (H2-O2 & SOFC)", """
=== Hydrogen-Oxygen Alkaline Fuel Cell
- *Anode:* $2"H"_2"(g)" + 4"OH"^- arrow.r 4"H"_2"O(l)" + 4e^-$
- *Cathode:* $"O"_2"(g)" + 2"H"_2"O(l)" + 4e^- arrow.r 4"OH"^-$
- *Net Reaction:* $2"H"_2"(g)" + "O"_2"(g)" arrow.r 2"H"_2"O(l)"$
Theoretical Efficiency: $eta = (Delta G^0 / Delta H^0) times 100 = (-237.2 / -285.8) times 100 = 83%$.

=== Solid Oxide Fuel Cells (SOFC)
Operates at high temperatures ($800-1000 degree"C"$) utilizing an yttria-stabilized zirconia (YSZ) ceramic solid electrolyte that conducts oxide ions ($O^(2-)$):
- Cathode: $"O"_2 + 4e^- arrow.r 2"O"^(2-)$
- Anode: $2"H"_2 + 2"O"^(2-) arrow.r 2"H"_2"O" + 4e^-$
No liquid electrolyte leakage; tolerant to CO fuel (can use syngas or reformed methane).
"""),
            ("Topic 3: Dye-Sensitized Solar Cells (DSSCs)", """
=== Working Mechanism of Gratzel DSSC
1. *Light Absorption:* A ruthenium polypyridyl dye sensitizer ($D$) anchored to mesoporous nanocrystalline titanium dioxide ($TiO_2$) absorbs a solar photon:
$ D + h nu arrow.r D^* quad ("Photoexcited Dye") $
2. *Electron Injection:* The excited dye injects an electron into the conduction band of $TiO_2$:
$ D^* arrow.r D^+ + e^-_("CB") (TiO_2) $
The electron percolates through the $TiO_2$ nanoparticle network to the transparent conducting oxide (FTO) anode, driving the external load.
3. *Dye Regeneration:* The oxidized dye ($D^+$) is reduced back to ground state by iodide ions in the electrolyte:
$ 2 D^+ + 3"I"^- arrow.r 2 D + "I"_3^- $
4. *Cathode Reduction:* Triiodide ($"I"_3^-$) diffuses to the platinum counter electrode where it is reduced back to iodide:
$ "I"_3^- + 2e^- limits(arrow.r)^"Pt" 3"I"^- $.
"""),
            ("VIT Faculty Exam Insights & Common Traps", """
- *DSSC Component Functions:* In descriptive questions, define the distinct function of all 4 components: $TiO_2$ (electron transporter), Dye (light harvester), $I^-/I_3^-$ (electrolyte regenerator), and Pt (catalytic counter electrode).
- *Supercapacitor vs Battery:* Differentiate clearly: Batteries store energy chemically via Faradaic bulk phase redox; EDLCs store energy electrostatically via non-Faradaic Helmholtz double layers.
"""),
            ("Quick Self-Test Checklist Before Your Exam", """
1. Can you write the complete charging and discharging equations for a Lithium-ion cell?
2. What is the role of YSZ in a solid oxide fuel cell?
3. Sketch the complete electron flow cycle in a Dye-Sensitized Solar Cell.
4. Why do supercapacitors possess significantly higher power density than secondary batteries?
""")
        ]
    },
    {
        "num": 5,
        "code": "BCHY101L",
        "title": "FUNCTIONAL MATERIALS",
        "short_title": "Functional Materials",
        "co": "CO: 5",
        "scope": "(1) Advanced functional oxides: $"AB"$ and $"AB"_2$ type structures, (2) Conducting polymers: Polyacetylene and Polyaniline (protonic acid doping mechanism), (3) High-performance engineering polymers and Kevlar, (4) Nanomaterials: Top-down vs bottom-up synthesis, (5) Quantum dots and size-dependent bandgap tunability, (6) Carbon nanotubes (SWCNTs and MWCNTs): structure, chirality, and CVD synthesis, and (7) Smart shape-memory materials.",
        "blueprint": """In VIT Final Assessment Tests, Module 5 carries 15 to 20 marks:
1. *Question Type A (10 Marks):* Conducting Polymers: Structural doping mechanism of polyaniline (protonic acid doping of emeraldine base to emeraldine salt) and polyacetylene polarons/bipolarons.
2. *Question Type B (10 Marks):* Carbon Nanomaterials: Carbon Nanotubes (chiral indices $(n, m)$, armchair vs zigzag), CVD synthesis mechanism, and quantum confinement in quantum dots.""",
        "table_headers": ("Material Class", "Structural Feature / Synthesis", "Core Technical Property"),
        "table_rows": [
            ("Polyaniline (PANI)", 'Emeraldine base doped with $1" M HCl"$ (Protonic acid doping)', 'Conductivity jumps by $10^8$ to $10-100" S/cm"$; EMI shielding'),
            ("Polyacetylene", '$(-"CH"="CH"-)_n$ doped with $I_2$ (p-doping) or $"Na"$ (n-doping)', 'Delocalized $pi$-conjugation; soliton charge carriers'),
            ("Kevlar (PPTA)", 'Poly(p-phenylene terephthalamide); interchain H-bonding', '5x stronger than steel by weight; ballistic armor'),
            ("Carbon Nanotubes", 'Rolled graphene cylinders; SWCNT ($1-2" nm"$) & MWCNT', 'Tensile strength $> 50" GPa"$, ballistic electronic transport'),
            ("Quantum Dots", 'Nanocrystal semiconductors ($2-10" nm"$); Brus equation', 'Size-dependent emission: smaller size = blue shift')
        ],
        "sections": [
            ("Topic 1: Conducting Polymers & Polyaniline Doping", """
=== Protonic Acid Doping of Polyaniline
Polyaniline exists in three distinct oxidation states:
- *Leucoemeraldine:* Fully reduced, completely insulating.
- *Pernigraniline:* Fully oxidized, quinoid-rich, insulating.
- *Emeraldine Base:* Half-oxidized state composed of alternating amine ($-NH-$) and imine ($=N-$) units.
When emeraldine base is treated with an aqueous protonic acid (e.g., $1" M HCl"$):
- Protons selectively coordinate to the imine nitrogen atoms without altering the number of $pi$-electrons.
- A stable delocalized polaron radical cation lattice is created across the conjugated backbone.
- Electrical conductivity jumps by 8 orders of magnitude from $10^(-10)" S/cm"$ to $10-100" S/cm"$!
"""),
            ("Topic 2: Nanomaterials, Carbon Nanotubes & Quantum Dots", """
=== Top-Down vs Bottom-Up Synthesis
- *Top-Down:* Mechanical attrition, ball milling, lithography (reducing bulk to nano).
- *Bottom-Up:* Chemical Vapor Deposition (CVD), sol-gel, hydrothermal synthesis (assembling atoms/molecules into nanostructures).

=== Carbon Nanotubes (CNTs)
Constructed by rolling up a graphene sheet along a chiral vector $bold(C)_h = n bold(a)_1 + m bold(a)_2$:
- *Armchair ($n = m$):* Chiral angle $theta = 30^degree$. Metallic behavior at all temperatures.
- *Zigzag ($n, 0$):* Chiral angle $theta = 0^degree$. Metallic if $n$ is a multiple of 3; otherwise semiconducting.
- *Chiral ($n != m$):* Semiconducting if $n - m != 3k$.
*CVD Synthesis:* Hydrocarbon precursor ($"CH"_4, "C"_2"H"_2$) decomposes over transition metal nanoparticles ($"Fe, Co, Ni"$) at $700-1000 degree"C"$.

=== Quantum Dots & The Brus Equation
When semiconductor particle diameter approaches the exciton Bohr radius ($2-10" nm"$), quantum confinement increases the effective bandgap:
$ E_g^* = E_g^"bulk" + (h^2) / (8 R^2) [ 1 / m_e^* + 1 / m_h^* ] - (1.8 e^2) / (4 pi epsilon_0 epsilon_r R) $
Decreasing nanoparticle radius $R$ blue-shifts optical emission!
"""),
            ("VIT Faculty Exam Insights & Common Traps", """
- *Armchair vs Chiral CNTs:* Always remember the rule: Armchair nanotubes ($n = m$) are ALWAYS metallic conductors, which is why they are selected for nano-interconnects!
"""),
            ("Quick Self-Test Checklist Before Your Exam", """
1. How does protonic acid doping differ from redox oxidative doping in conducting polymers?
2. What are the chiral indices for armchair, zigzag, and chiral carbon nanotubes?
3. State the Brus equation and explain why quantum dots exhibit size-tunable luminescence.
""")
        ]
    },
    {
        "num": 6,
        "code": "BCHY101L",
        "title": "SPECTROSCOPIC, DIFFRACTION & MICROSCOPIC TECHNIQUES",
        "short_title": "Spectroscopy & Characterization",
        "co": "CO: 6",
        "scope": "(1) Electromagnetic spectrum and fundamental principles of spectroscopy, (2) UV-Visible spectroscopy: Beer-Lambert's law derivation, electronic transitions ($sigma arrow.r sigma^*, pi arrow.r pi^*, n arrow.r pi^*$), chromophores, and auxochromes, (3) X-Ray Diffraction (XRD): Bragg's law derivation and crystal structure determination, (4) Infrared (IR) spectroscopy: Hooke's law, selection rules, and functional group frequencies, and (5) Microscopic techniques: Scanning Electron Microscopy (SEM) and Transmission Electron Microscopy (TEM).",
        "blueprint": """In VIT Final Assessment Tests, Module 6 carries 15 to 20 marks:
1. *Question Type A (10 Marks):* X-Ray Diffraction (XRD): Derivation of Bragg's Law ($2 d sin theta = n lambda$), calculating interplanar spacing $d$ and lattice parameters for cubic crystals.
2. *Question Type B (10 Marks):* UV-Visible & IR Spectroscopy: Beer-Lambert's law derivation, calculation of bond force constants using Hooke's Law with reduced mass $mu$, and SEM vs TEM working comparisons.""",
        "table_headers": ("Technique", "Governing Equation / Law", "Analytical Application"),
        "table_rows": [
            ("Beer-Lambert Law", '$A = -log_10(I / I_0) = epsilon b c$', 'Quantitative concentration determination of metal ions and organics'),
            ("Bragg's Law (XRD)", '$2 d sin theta = n lambda$, $d = a / sqrt(h^2 + k^2 + l^2)$', 'Crystal structure, phase identification, crystallite size via Scherrer formula'),
            ("Hooke's Law (IR)", '$bar(nu) = 1 / (2 pi c) sqrt(k / mu)$', 'Identification of functional groups ($>C=O$ at $1715-1750" cm"^(-1)$)'),
            ("SEM Microscopy", 'Scattered secondary electrons from surface ($5-20" kV"$)', '3D surface topography; resolution $1-5" nm"$'),
            ("TEM Microscopy", 'Transmitted electrons through ultra-thin specimen ($< 100" nm"$)', 'Internal atomic crystal lattices, dislocations; resolution $< 0.2" nm"$')
        ],
        "sections": [
            ("Topic 1: UV-Visible Spectrophotometry & Beer-Lambert's Law", """
=== Derivation of Beer-Lambert's Law
When monochromatic radiation passes through an absorbing solution of concentration $c$ and path length $b$:
$ - (d I) / (d x) = k' c I =⇒ integral_(I_0)^(I_t) (d I) / I = - k' c integral_0^b d x $
$ ln(I_0 / I_t) = k' c b =⇒ 2.303 log_10(I_0 / I_t) = k' c b $
$ A = log_10(I_0 / I_t) = epsilon b c $
where $A$ is absorbance, $epsilon$ is molar absorptivity ($"L"dot"mol"^(-1)dot"cm"^(-1)$), $b$ is cell length ($"cm"$), and $c$ is molar concentration.
"""),
            ("Topic 2: X-Ray Diffraction (XRD) & Bragg's Law", """
=== Derivation of Bragg's Law
Consider parallel crystal lattice planes with interplanar spacing $d$. When a monochromatic X-ray beam of wavelength $lambda$ strikes the surface at glancing angle $theta$:
- The path difference between waves reflected from adjacent planes is:
$ Delta = A B + B C = d sin theta + d sin theta = 2 d sin theta $
For constructive interference, this path difference must equal an integral number of wavelengths:
$ 2 d sin theta = n lambda $
For a cubic crystal of lattice parameter $a$ with Miller indices $(h, k, l)$:
$ d_(h k l) = a / sqrt(h^2 + k^2 + l^2) $
*Scherrer Formula for Crystallite Size:*
$ D = (K lambda) / (beta cos theta) $
where $beta$ is the full width at half maximum (FWHM) in radians.
"""),
            ("Topic 3: Microscopic Techniques (SEM vs TEM)", """
=== Scanning Electron Microscopy (SEM) vs Transmission Electron Microscopy (TEM)
1. *SEM:* A focused electron beam raster-scans the sample surface. Emitted secondary electrons and backscattered electrons are detected to produce high-depth-of-field 3D images of surface morphology and fracture surfaces.
2. *TEM:* High-energy electrons ($100-300" kV"$) pass through an ultra-thin specimen ($< 100" nm"$). Transmitted and diffracted electrons form high-resolution 2D projections of internal crystal defects, grain boundaries, and atomic columns down to $0.1" nm"$.
"""),
            ("VIT Faculty Exam Insights & Common Traps", """
- *Bragg's Angle vs Scattering Angle:* In XRD problems, the goniometer records $2 theta$! Always divide the instrument peak angle by 2 to get the glancing angle $theta$ before computing $sin theta$.
"""),
            ("Quick Self-Test Checklist Before Your Exam", """
1. Can you derive Bragg's law $2 d sin theta = n lambda$ with a clear geometric sketch?
2. Calculate the interplanar spacing $d_(110)$ for a cubic crystal with lattice constant $a = 0.408" nm"$.
3. What are the fundamental operational differences between SEM and TEM?
""")
        ]
    },
    {
        "num": 7,
        "code": "BCHY101L",
        "title": "WATER TECHNOLOGY AND CORROSION ENGINEERING",
        "short_title": "Water & Corrosion",
        "co": "CO: 7",
        "scope": "(1) Water hardness: temporary vs permanent, units ($ppm, degree\"Fr\", degree\"Clark\"$), (2) EDTA complexometric titration mechanism, (3) Boiler troubles: scale, sludge, caustic embrittlement, and priming/foaming, (4) External water softening: Zeolite process and Ion-Exchange demineralization, (5) Desalination by Reverse Osmosis (RO), (6) Chemical and electrochemical corrosion: Hydrogen evolution and Oxygen absorption, (7) Differential aeration corrosion (waterline and pitting), and (8) Corrosion control: Cathodic protection (Sacrificial Anode & Impressed Current) and Galvanizing vs Tinning.",
        "blueprint": """In VIT Final Assessment Tests, Module 7 carries 20 to 25 marks:
1. *Question Type A (10 Marks):* Hardness calculations using EDTA titration data in ppm and $degree$French, or Zeolite softener regeneration capacity.
2. *Question Type B (10 Marks):* Corrosion Engineering: Mechanism of wet electrochemical corrosion ($H_2$ evolution vs $O_2$ absorption) and differential aeration corrosion (waterline and pitting).
3. *Question Type C (10 Marks):* Water Treatment: Ion-Exchange demineralization process with service/regeneration reactions, or Reverse Osmosis membrane desalination.""",
        "table_headers": ("Topic / Process", "Governing Equation / Chemical Reaction", "FAT Exam Significance"),
        "table_rows": [
            ("CaCO_3 Equivalents", '$("Mass of salt (mg/L)" times 50) / "Eq. Wt"$', 'Benchmark: $"Ca(HCO"_3")"_2 = 81, "CaCl"_2 = 55.5, "MgSO"_4 = 60$'),
            ("EDTA Titration", '$1" mL 0.01 M EDTA" equiv 1" mg CaCO"_3$', 'EBT indicator: wine red to steel blue at pH 10'),
            ("Caustic Embrittlement", '$"Na"_2"CO"_3 + "H"_2"O" arrow.r 2"NaOH" + "CO"_2 arrow.t$', 'Stress-corrosion cracking at boiler rivets by localized concentration cell'),
            ("Ion-Exchange Resins", '$2 R-"SO"_3"H" + "Ca"^(2+) arrow.r (R-"SO"_3)_2"Ca" + 2"H"^+$', 'Produces 100% demineralized water; regenerated by 5% HCl and 5% NaOH'),
            ("Wet Oxygen Absorption", '$"O"_2 + 2"H"_2"O" + 4e^- arrow.r 4"OH"^-$', 'Dominates rusting in neutral/alkaline aerated water'),
            ("Galvanizing (Zn on Fe)", '$E^0("Zn"^(2+)/"Zn") = -0.76" V" < E^0("Fe"^(2+)/"Fe") = -0.44" V"$', 'Sacrificial anode protection; protects iron even when deeply scratched')
        ],
        "sections": [
            ("Topic 1: Water Hardness & Complexometric Titrations", """
=== Hardness Calculations & Equivalents
Water hardness is expressed in terms of calcium carbonate ($"CaCO"_3$) equivalents because $"CaCO"_3$ has a convenient molecular weight of 100 and equivalent weight of 50.
$ "CaCO"_3" equivalent" = ("Mass of salt (mg/L)" times 50) / "Equivalent Weight of salt" $
- *Conversion of Units:*
$ 1" ppm" = 1" mg/L" = 0.1 degree"French" = 0.07 degree"Clark" $

=== EDTA Titration Mechanism
At pH 9--10 (buffered with $"NH"_4"OH" + "NH"_4"Cl"$), Eriochrome Black T (EBT) forms an unstable wine-red complex with metal ions. Titration with disodium EDTA displaces the indicator, forming a stable colorless $[M-"EDTA"]^(2-)$ chelate and releasing free steel-blue indicator:
$ ["M-EBT"]^- ("Wine Red") + "H"_2"Y"^(2-) arrow.r ["M-Y"]^(2-) ("Colorless") + "HEBT"^(2-) ("Steel Blue") + "H"^+ $.
"""),
            ("Topic 2: Boiler Troubles & External Softening", """
=== Boiler Troubles
1. *Scale and Sludge:* Sludge is loose and slimy (formed by $"MgCO"_3, "CaCl"_2$); scale is hard and adherent (formed by $"CaSO"_4$, silicates). Scale reduces thermal conductivity, leading to boiler plate explosion.
2. *Caustic Embrittlement:* Intercrystalline cracking at boiler rivets caused by alkaline concentration cells:
$ "Fe | Concentrated NaOH (Anode - Rivets) || Dilute NaOH (Cathode) | Fe" $

=== External Softening by Ion-Exchange (Demineralization)
- Cation resin ($R-SO_3H$) replaces all cations ($Ca^(2+), Mg^(2+), Na^+$) with $H^+$.
- Anion resin ($R-OH$) replaces all anions ($Cl^-, SO_4^(2-)$) with $OH^-$.
- $H^+ + OH^- arrow.r H_2O$. Demineralized water has conductivity $< 0.1 mu"S/cm"$.
"""),
            ("Topic 3: Electrochemical Corrosion & Protection", """
=== Wet Electrochemical Corrosion
- *Anode (Oxidation):* Metal dissolves: $"Fe" arrow.r "Fe"^(2+) + 2e^-$.
- *Cathode (Reduction):*
  - Acidic medium: $2"H"^+ + 2e^- arrow.r "H"_2 arrow.t$ (Hydrogen evolution).
  - Neutral / aerated medium: $"O"_2 + 2"H"_2"O" + 4e^- arrow.r 4"OH"^-$ (Oxygen absorption).

=== Cathodic Protection Engineering
1. *Sacrificial Anode:* Attaching blocks of active metals ($"Mg, Zn"$) to steel structures. The active metal corrodes, keeping steel cathodic.
2. *Galvanizing vs Tinning:* Zinc coating ($"Zn"$) protects iron sacrificially even when scratched because $E^0("Zn") = -0.76" V" < E^0("Fe") = -0.44" V"$. Tin coating ($"Sn"$) protects iron only when intact; if scratched, iron corrodes rapidly because $E^0("Sn") = -0.14" V" > E^0("Fe")$.
"""),
            ("VIT Faculty Exam Insights & Common Traps", """
- *Galvanizing vs Tinning Rule:* Galvanized iron is used for roofing sheets and water pipes (sacrificial protection), but NEVER for food cans (zinc is toxic). Tinned iron is non-toxic and ideal for food containers.
"""),
            ("Quick Self-Test Checklist Before Your Exam", """
1. Can you calculate Total, Temporary, and Permanent hardness in ppm and $degree"Fr"$?
2. Write the complete ion-exchange service and regeneration reactions.
3. Why does iron undergo waterline corrosion just below the meniscus?
4. What is the electrochemical reason galvanized iron protects even when scratched?
""")
        ]
    }
]

def generate_typst_file(module_data, output_path):
    table_headers_str = ", ".join(f"[*{h}*]" for h in module_data["table_headers"])
    table_rows_str = ""
    for r in module_data["table_rows"]:
        table_rows_str += f"  [{r[0]}], [{r[1]}], [{r[2]}],\n"

    sections_str = ""
    for s_title, s_body in module_data["sections"]:
        sections_str += f"\n= {s_title}\n\n{s_body}\n"

    typst_content = f"""
#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.2cm, right: 2.2cm),
  header: context {{
    if here().page() > 1 {{
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: luma(90))[VIT {module_data["code"]} --- Module {module_data["num"]}: {module_data["short_title"]}]],
        align(right)[#text(size: 8.5pt, fill: luma(90), style: "italic")[VIT FAT Study Textbook]]
      )
      line(length: 100%, stroke: 0.4pt + luma(180))
    }}
  }},
  footer: context {{
    align(center)[#text(size: 9pt)[#here().page()]]
  }}
)
#set text(font: "New Computer Modern", size: 10pt)
#set par(justify: true, leading: 0.65em)
#set heading(numbering: "1.1")

#align(center)[
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT {module_data["code"]} --- Module {module_data["num"]}: {module_data["short_title"]}] \\
  #v(2mm)
  #text(size: 15pt, weight: "black")[MODULE {module_data["num"]}: {module_data["title"]}] \\
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[({module_data["co"]})] \\
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Complete Study Textbook, Step-by-Step Derivations & VIT FAT Question Bank] \\
  #text(size: 9pt, fill: luma(100))[Aligned with Official VIT {module_data["code"]} Course Page Syllabus, Question Bank, and Past FAT Papers]
]

#v(3mm)
#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 9pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Textbook (Official VIT Syllabus):]
  {module_data["scope"]}
]

#v(2mm)
#outline(title: "Contents", depth: 2, indent: auto)
#v(2mm)

= VIT FAT Exam Blueprint & Master Formula Sheet for Module {module_data["num"]}

{module_data["blueprint"]}

#v(2mm)
#table(
  columns: (2.2fr, 3.2fr, 2.6fr),
  stroke: 0.5pt + luma(180),
  inset: 6.5pt,
  {table_headers_str},
{table_rows_str}
)

{sections_str}
"""
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(typst_content)

def main():
    os.makedirs("public/pdfs/chemistry", exist_ok=True)
    for m in CHEMISTRY_VIT_MODULES:
        typ_path = f"public/pdfs/chemistry/Chemistry_MOD-{m['num']}.typ"
        pdf_path = f"public/pdfs/chemistry/Chemistry_MOD-{m['num']}.pdf"
        generate_typst_file(m, typ_path)
        print(f"Generated {typ_path}")
        cmd = f"/opt/homebrew/bin/typst compile '{typ_path}' '{pdf_path}'"
        res = subprocess.run(cmd, shell=True, capture_output=True, text=True)
        if res.returncode != 0:
            print(f"Error compiling {typ_path}:", res.stderr)
        else:
            print(f"Successfully compiled {pdf_path}")

if __name__ == "__main__":
    main()
