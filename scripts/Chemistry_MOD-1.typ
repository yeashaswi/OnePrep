#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.3cm, right: 2.3cm),
  header: context {
    let p = counter(page).get().first()
    if p > 1 [
      #grid(
        columns: (1fr, 1fr),
        align: (left, right),
        text(size: 8pt, fill: rgb(101, 106, 118))[VIT BACHY105 — Module 1: Chemical Thermodynamics & Kinetics],
        text(size: 8pt, fill: rgb(101, 106, 118))[VIT FAT Study Textbook]
      )
      #v(-4pt)
      #line(length: 100%, stroke: 0.5pt + rgb(209, 213, 219))
    ]
  },
  footer: context {
    let p = counter(page).get().first()
    align(center, text(size: 8.5pt, fill: rgb(101, 106, 118))[#p])
  }
)

#set text(font: "Times New Roman", size: 9.8pt)
#set par(justify: true, leading: 0.65em)

#align(center)[
  #text(size: 13.5pt, weight: "bold", fill: rgb(139, 0, 0))[MODULE 1: CHEMICAL THERMODYNAMICS AND KINETICS (CO: 1)] \
  #v(2pt)
  #text(size: 10.5pt, weight: "bold")[Complete Comprehensive Textbook: Laws of Thermodynamics, Carnot Cycle, Gibbs-Helmholtz, Rate Laws & Solved VIT FAT Question Bank] \
  #v(1pt)
  #text(size: 8.5pt, fill: rgb(85, 85, 85))[Aligned with Official VIT BACHY105 Applied Chemistry Course Syllabus, Department Question Bank & VIT FAT Papers]
]

#v(8pt)

#rect(width: 100%, fill: rgb(240, 244, 248), stroke: 1pt + rgb(180, 200, 220), radius: 4pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb(15, 23, 42))[Syllabus Scope & Competency Checklist (Module 1):] \
  #text(size: 9pt)[
    - *Thermodynamics Terminologies:* System (open, closed, isolated), surroundings, boundary; state functions ($U, H, S, G$) vs path functions ($w, q$); extensive vs intensive properties; reversible vs irreversible processes.
    - *Zeroth & First Laws of Thermodynamics:* Thermal equilibrium; mathematical formulation of First Law ($d U = d q + d w$); internal energy, expansion work ($w = - integral P_"ext" d V$); enthalpy ($H = U + P V$); heat capacities ($C_v = (partial U / partial T)_v, C_p = (partial H / partial T)_p$); Mayer's relation ($C_p - C_v = R$).
    - *Gas Expansions:* Reversible and irreversible isothermal expansion of ideal gas ($w_"rev" = -n R T ln(V_2 / V_1)$); adiabatic expansion ($d q = 0, P V^gamma = "const", T V^(gamma - 1) = "const", w = n C_v (T_2 - T_1)$).
    - *Second Law of Thermodynamics & Carnot Engine:* Limitations of First Law; Kelvin-Planck and Clausius statements; Carnot cycle 4-stage operation (isothermal expansion, adiabatic expansion, isothermal compression, adiabatic compression); Carnot efficiency ($eta = (T_H - T_C) / T_H = w_"net" / q_H$); Carnot theorem.
    - *Entropy, Free Energies & Third Law:* Clausius inequality ($integral.cont d q_"rev" / T = 0$); entropy changes ($Delta S$); Helmholtz energy ($A = U - T S$); Gibbs free energy ($G = H - T S$); criterion for spontaneity ($Delta G_(T,P) < 0$); Nernst heat theorem and Third Law of Thermodynamics ($lim_(T -> 0) S = 0$ for perfect crystals).
    - *Gibbs-Helmholtz Equation:* Derivation of $Delta G = Delta H + T (partial (Delta G) / partial T)_p$ and $[partial (Delta G / T) / partial T]_p = -Delta H / T^2$; temperature dependence of equilibrium constants (van 't Hoff isochore).
    - *Chemical Kinetics & Rate Laws:* Reaction rate definitions; differential rate laws; reaction order vs molecularity; integrated rate equations and half-life periods for 0th, 1st, and 2nd order reactions; pseudo-first-order reactions.
    - *Collision Theory & Catalysis:* Bimolecular collision theory, collision frequency ($Z_(A B)$), steric/orientation factor ($P$); Arrhenius equation ($k = A e^(-E_a / (R T))$); determination of activation energy ($E_a$); homogeneous and heterogeneous catalysis mechanisms.
  ]
]

#v(10pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[1. Basic Concepts & The First Law of Thermodynamics]

=== 1.1 Thermodynamic Systems, Variables & States
- *System and Surroundings:* A thermodynamic system is the specific macroscopically macroscopic portion of the universe under physical or chemical investigation, delimited by real or imaginary boundaries:
  1. *Open System:* Can exchange both matter and thermal energy with its surroundings (e.g., an open reaction flask, a biological cell).
  2. *Closed System:* Can exchange energy (heat, work) but *not* matter with surroundings (e.g., a sealed chemical bomb calorimeter).
  3. *Isolated System:* Exchanges neither energy nor matter with surroundings ($d q = 0, d w = 0, d m = 0$) (e.g., a perfectly insulated thermos flask, the universe as a totality).
- *Properties of Systems:*
  - *Extensive Properties:* Depend directly on the quantity of matter present (Mass $m$, Volume $V$, Internal Energy $U$, Enthalpy $H$, Entropy $S$, Heat Capacity $C$).
  - *Intensive Properties:* Independent of the mass or extent of the system (Temperature $T$, Pressure $P$, Density $rho$, Refractive Index $n$, Specific Heat $c$, Molar Enthalpy $H_m$).
- *State Functions vs Path Functions:*
  - *State Functions:* Thermodynamic variables whose values depend exclusively on the present equilibrium state of the system, completely independent of the historical path taken ($Delta U = U_2 - U_1, Delta H = H_2 - H_1, Delta G = G_2 - G_1$). Mathematically, their differentials are exact ($integral.cont d X = 0$).
  - *Path Functions:* Quantities whose magnitudes depend on the specific path or mechanism followed during the transition between states ($q$ heat, $w$ work). Their differentials are inexact ($delta q, delta w$).

=== 1.2 The First Law of Thermodynamics & Enthalpy
- *Mathematical Statement (Conservation of Energy):* Energy can neither be created nor destroyed; it can only be transformed from one form into another:
$ d U = delta q + delta w $
where $d U$ is the change in internal energy, $delta q$ is infinitesimal heat absorbed by the system ($+q$ for endothermic, $-q$ for exothermic), and $delta w$ is work done *on* the system by surroundings under IUPAC sign convention ($delta w = -P_"ext" d V$).
- *Expansion Work (PV Work):*
$ w = - integral_(V_1)^(V_2) P_"ext" d V $
  - Free Expansion into Vacuum ($P_"ext" = 0$): $w = 0$.
  - Reversible Isothermal Expansion of Ideal Gas ($P_"ext" = P_"int" = n R T / V$):
  $ w_"rev" = - integral_(V_1)^(V_2) (n R T) / V d V = -n R T ln(V_2 / V_1) = -n R T ln(P_1 / P_2) = -2.303 n R T log_10(V_2 / V_1) $
  Because $P_"int"$ is maintained marginally higher than $P_"ext"$ throughout the expansion, *maximum work* is obtained during a reversible process.
- *Enthalpy ($H$) & Heat Capacities:*
  Enthalpy is defined as the heat content at constant pressure:
  $ H = U + P V quad ==> quad d H = d U + P d V + V d P $
  At constant volume ($d V = 0$): $d q_v = d U = C_v d T$, where $C_v = (partial U / partial T)_v$.
  At constant pressure ($d P = 0$): $d q_p = d H = C_p d T$, where $C_p = (partial H / partial T)_p$.
- *Mayer's Relation Derivation:*
  For an ideal gas, $H = U + P V = U + n R T$.
  Differentiating with respect to temperature $T$:
  $ (d H) / (d T) = (d U) / (d T) + n R quad ==> quad C_p - C_v = n R quad (C_(p,m) - C_(v,m) = R approx 8.314" J/(mol K)") $

=== 1.3 Reversible Adiabatic Expansion of an Ideal Gas
In an adiabatic process, the system is thermally insulated from surroundings ($delta q = 0$):
$ d U = delta w = -P d V $
Since $d U = C_v d T$ and $P = (R T) / V$ for one mole:
$ C_v d T = - (R T) / V d V quad ==> quad C_v (d T) / T = -R (d V) / V $
Integrating between states $(T_1, V_1)$ and $(T_2, V_2)$ with $R = C_p - C_v$ and defining $gamma = C_p / C_v$:
$ C_v ln(T_2 / T_1) = -(C_p - C_v) ln(V_2 / V_1) quad ==> quad ln(T_2 / T_1) = (1 - gamma) ln(V_2 / V_1) = ln((V_1 / V_2)^(gamma - 1)) $
$ T_2 V_2^(gamma - 1) = T_1 V_1^(gamma - 1) quad ==> quad T V^(gamma - 1) = "constant" $
Substituting $T = (P V) / R$ yields the classic Poisson relation:
$ P V^gamma = "constant", quad T^gamma P^(1 - gamma) = "constant" $
Work done in reversible adiabatic expansion:
$ w_"adi" = Delta U = n C_v (T_2 - T_1) = (n R (T_2 - T_1)) / (gamma - 1) = (P_2 V_2 - P_1 V_1) / (gamma - 1) $

#v(8pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[2. The Second Law of Thermodynamics & The Carnot Cycle]

=== 2.1 Limitations of the First Law & Need for Second Law
The First Law asserts energy conservation but fails to dictate the *direction of spontaneous change* (e.g., heat flows spontaneously from hot to cold bodies, gas expands to fill a vacuum, but the reverse never occurs spontaneously without external work, despite conserving energy).
- *Second Law Statements:*
  1. *Kelvin-Planck Statement:* It is impossible for any cyclic device to receive heat from a single thermal reservoir and deliver an equivalent amount of work without producing any other effect ($eta < 100\%$; a 100% efficient heat engine is a physical impossibility).
  2. *Clausius Statement:* It is impossible to construct a cyclic device whose sole effect is the transfer of heat from a cooler body to a hotter body without an input of external work (refrigerators require power).

=== 2.2 The Carnot Cycle & Maximum Thermal Efficiency
Sadi Carnot (1824) devised an idealized theoretical engine operating on a closed reversible thermodynamic cycle using one mole of an ideal gas acting between a hot thermal source at temperature $T_H$ and a cold sink at temperature $T_C$ ($T_H > T_C$).
- *The Four Reversible Stages:*
  1. *Stage 1: Reversible Isothermal Expansion ($A -> B$ at $T_H$):*
     Gas absorbs heat $q_H$ from the source at constant $T_H$, expanding from $V_1$ to $V_2$:
     $ Delta U_1 = 0, quad q_H = -w_1 = R T_H ln(V_2 / V_1) $
  2. *Stage 2: Reversible Adiabatic Expansion ($B -> C$, $T_H -> T_C$):*
     Gas is insulated ($q = 0$), expanding from $V_2$ to $V_3$ while its temperature drops from $T_H$ to $T_C$:
     $ w_2 = C_v (T_C - T_H) = -C_v (T_H - T_C) $
  3. *Stage 3: Reversible Isothermal Compression ($C -> D$ at $T_C$):*
     Gas is placed on the cold sink at $T_C$ and compressed from $V_3$ to $V_4$, rejecting heat $q_C$:
     $ Delta U_3 = 0, quad -q_C = w_3 = -R T_C ln(V_3 / V_4) $
  4. *Stage 4: Reversible Adiabatic Compression ($D -> A$, $T_C -> T_H$):*
     Gas is thermally insulated and compressed from $V_4$ to $V_1$, restoring temperature to $T_H$:
     $ w_4 = C_v (T_H - T_C) $
- *Total Net Work & Thermal Efficiency Derivation:*
  The adiabatic work terms cancel identically ($w_2 + w_4 = -C_v (T_H - T_C) + C_v (T_H - T_C) = 0$).
  Net work done per cycle:
  $ w_"net" = -w_1 - w_3 = R T_H ln(V_2 / V_1) - R T_C ln(V_3 / V_4) $
  From adiabatic relationships for stages 2 and 4:
  $ T_H V_2^(gamma - 1) = T_C V_3^(gamma - 1) quad "and" quad T_H V_1^(gamma - 1) = T_C V_4^(gamma - 1) $
  Dividing the two equations:
  $ (V_2 / V_1)^(gamma - 1) = (V_3 / V_4)^(gamma - 1) quad ==> quad V_2 / V_1 = V_3 / V_4 $
  Substituting this volume equality into the work equation:
  $ w_"net" = R (T_H - T_C) ln(V_2 / V_1) $
  Thermal efficiency $eta$:
  $ eta = w_"net" / q_H = (R (T_H - T_C) ln(V_2 / V_1)) / (R T_H ln(V_2 / V_1)) = (T_H - T_C) / T_H = 1 - T_C / T_H $
- *Carnot's Theorems:*
  1. No heat engine operating between two given temperatures can be more efficient than a reversible Carnot engine operating between the same two temperatures.
  2. All reversible engines operating between the same two thermal reservoirs have identical efficiencies, completely independent of the working substance.

#v(8pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[3. Entropy, Free Energy & The Gibbs-Helmholtz Equation]

=== 3.1 Concept of Entropy ($S$) & Third Law of Thermodynamics
From the Carnot cycle efficiency $eta = 1 - q_C / q_H = 1 - T_C / T_H$:
$ q_H / T_H - q_C / T_C = 0 quad ==> quad sum_(k) q_k / T_k = 0 quad ==> quad integral.cont (d q_"rev") / T = 0 $
This line integral around a closed path vanishes, proving that $(d q_"rev") / T$ is an exact differential of a state function termed *Entropy ($S$)*:
$ d S = (d q_"rev") / T $
- *Physical Interpretation:* Entropy is a quantitative measure of microscopic molecular disorder or randomness in a system (Boltzmann relation: $S = k_B ln Omega$).
- *Third Law of Thermodynamics (Nernst Heat Theorem):*
  The entropy of every pure, perfectly crystalline substance approaches zero as absolute temperature approaches zero Kelvin:
  $ lim_(T -> 0" K") S = 0 $
  This enables the determination of absolute standard entropies ($S degree$) of chemical substances by numerical integration of heat capacity data: $S_T = integral_0^T (C_p / T) d T$.

=== 3.2 Gibbs Free Energy & Derivation of Gibbs-Helmholtz Equation
Gibbs Free Energy is defined to describe spontaneity at constant temperature and pressure:
$ G = H - T S $
- *Spontaneity Criteria at Constant $T$ and $P$:*
  $ Delta G = Delta H - T Delta S $
  - If $Delta G < 0$: Process is spontaneous (exergonic).
  - If $Delta G = 0$: System is at dynamic thermodynamic equilibrium.
  - If $Delta G > 0$: Process is non-spontaneous in the forward direction (endergonic).
- *Rigorous Derivation of Gibbs-Helmholtz Equation:*
  From fundamental thermodynamic relation: $d G = V d P - S d T$.
  At constant pressure ($d P = 0$):
  $ (partial G / partial T)_P = -S $
  Substitute $S = - (partial G / partial T)_P$ into the definition $G = H - T S$:
  $ G = H + T (partial G / partial T)_P $
  For an initial state $1$ and final state $2$ of a chemical reaction:
  $ G_1 = H_1 + T (partial G_1 / partial T)_P quad "and" quad G_2 = H_2 + T (partial G_2 / partial T)_P $
  Subtracting state 1 from state 2 ($Delta G = G_2 - G_1, Delta H = H_2 - H_1$):
  $ Delta G = Delta H + T [ partial (Delta G) / partial T ]_P $
  *Alternate Form (Differential of $Delta G / T$):*
  Differentiating $(Delta G / T)$ with respect to $T$ at constant $P$ using quotient rule:
  $ [ partial / partial T (Delta G / T) ]_P = (T [partial (Delta G) / partial T]_P - Delta G) / T^2 $
  From Gibbs-Helmholtz equation, $T [partial (Delta G) / partial T]_P - Delta G = -Delta H$.
  Therefore:
  $ [ partial / partial T ((Delta G) / T) ]_P = - (Delta H) / T^2 $
  Since standard reaction free energy is linked to the equilibrium constant by $Delta G degree = -R T ln K_"eq"$, substituting yields the famous *van 't Hoff Isochore*:
  $ (d ln K_"eq") / (d T) = (Delta H degree) / (R T^2) quad ==> quad ln(K_2 / K_1) = (Delta H degree) / R [ 1 / T_1 - 1 / T_2 ] $

#v(8pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[4. Chemical Kinetics: Rate Laws, Reaction Orders & Collision Theory]

=== 4.1 Reaction Rates, Order & Molecularity
For a generalized chemical reaction $a A + b B -> c C + d D$:
$ "Rate" = - 1 / a (d [A]) / (d t) = - 1 / b (d [B]) / (d t) = + 1 / c (d [C]) / (d t) = + 1 / d (d [D]) / (d t) $
- *Rate Law:* An experimentally determined equation linking reaction rate to reactant concentrations:
$ "Rate" = k [A]^m [B]^n $
where $k$ is the specific reaction rate constant, and overall order is $n_"total" = m + n$.
- *Order vs Molecularity:*
  - *Order:* Experimental empirical quantity; sum of exponents in rate law; can be zero, fractional, or integer.
  - *Molecularity:* Theoretical concept; number of reacting species colliding simultaneously in an elementary step; strictly a positive whole integer ($1, 2, 3$).

=== 4.2 Integrated Rate Equations & Half-Life Derivations
#table(
  columns: (1fr, 1.5fr, 2fr, 1.5fr, 1fr),
  fill: (x, y) => if y == 0 { rgb(234, 236, 239) } else { none },
  stroke: 0.5pt + rgb(209, 213, 219),
  [Order], [Differential Rate Law], [Integrated Rate Equation], [Half-Life ($t_(1/2)$)], [Units of $k$],
  [Zero], [$- (d[A]) / (d t) = k$], [$[A]_t = [A]_0 - k t$], [$t_(1/2) = [A]_0 / (2 k)$], [$"mol L"^(-1)" s"^(-1)$],
  [First], [$- (d[A]) / (d t) = k [A]$], [$k = 1 / t ln([A]_0 / [A]_t) = 2.303 / t log_10([A]_0 / [A]_t)$], [$t_(1/2) = (ln 2) / k = 0.693 / k$], [$"s"^(-1)$],
  [Second ($2A -> P$)], [$- (d[A]) / (d t) = k [A]^2$], [$1 / [A]_t - 1 / [A]_0 = k t$], [$t_(1/2) = 1 / (k [A]_0)$], [$"L mol"^(-1)" s"^(-1)$]
)

- *Derivation of First-Order Rate Equation:*
  $ - (d [A]) / [A] = k d t quad ==> quad integral_([A]_0)^([A]_t) (d [A]) / [A] = -k integral_0^t d t $
  $ ln([A]_t / [A]_0) = -k t quad ==> quad [A]_t = [A]_0 e^(-k t) $
  Setting $[A]_t = [A]_0 / 2$ for half-life:
  $ ln(1 / 2) = -k t_(1/2) quad ==> quad t_(1/2) = (ln 2) / k = 0.69315 / k $
  Crucially, the half-life of a first-order reaction is *completely independent* of initial reactant concentration $[A]_0$.

=== 4.3 Collision Theory & Arrhenius Equation
- *Bimolecular Collision Theory:*
  Reactant molecules must collide physically with proper orientation and sufficient kinetic energy equal to or exceeding the *Threshold Energy ($E_"threshold"$)*:
  $ "Rate" = P times Z_(A B) times e^(-E_a / (R T)) $
  where $Z_(A B)$ is collision frequency, $P$ is steric (orientation) factor ($0 < P <= 1$), and $e^(-E_a / (R T))$ is the Maxwell-Boltzmann fraction of collisions possessing energy $>= E_a$.
- *Arrhenius Equation:*
  $ k = A e^(-E_a / (R T)) quad ==> quad ln k = ln A - E_a / (R T) quad ==> quad log_10 k = log_10 A - E_a / (2.303 R T) $
  where $A = P Z_(A B)$ is the pre-exponential frequency factor, and $E_a$ is Activation Energy.
  Comparing two temperatures $T_1$ and $T_2$:
  $ ln(k_2 / k_1) = E_a / R [ 1 / T_1 - 1 / T_2 ] = (E_a (T_2 - T_1)) / (R T_1 T_2) $
- *Role of Catalysts:*
  A catalyst accelerates chemical reaction rates by providing an alternative reaction pathway with a lower activation energy ($E_a' < E_a$). It speeds up both forward and reverse reactions equally, leaving equilibrium constant $K_"eq"$ and reaction free energy $Delta G$ completely unchanged.

#v(10pt)
#line(length: 100%, stroke: 0.5pt + rgb(180, 200, 220))
#v(6pt)

#text(size: 12pt, weight: "bold", fill: rgb(139, 0, 0))[VIT FAT Solved Question Bank: Step-by-Step Numerical Derivations]

#v(6pt)
#rect(width: 100%, fill: rgb(249, 250, 251), stroke: 1pt + rgb(220, 225, 230), radius: 4pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb(15, 23, 42))[FAT Problem 1: Carnot Cycle Heat Engine Efficiency & Reversible Gas Work] \
  *Question (10 Marks):* A Carnot heat engine operates between a source at $T_H = 600 degree"C"$ and a sink at $T_C = 30 degree"C"$. In each cycle, the engine absorbs $2500" kJ"$ of heat from the high-temperature reservoir.
  ("i") Calculate the theoretical maximum thermal efficiency $eta$ of this engine.
  ("ii") Determine the mechanical work output $w_"net"$ produced per cycle in kilojoules.
  ("iii") Calculate the amount of heat $q_C$ discharged to the low-temperature reservoir per cycle.
  ("iv") If the same engine is operated in reverse as a Carnot refrigerator between the same two temperatures, determine its Coefficient of Performance ($"COP"_"ref"$).

  #v(4pt)
  #text(weight: "bold", fill: rgb(139, 0, 0))[Complete Step-by-Step Solution:] \
  *Step 1: Convert Temperatures to Absolute Scale (Kelvin):*
  $ T_H = 600 + 273.15 = 873.15" K" $
  $ T_C = 30 + 273.15 = 303.15" K" $

  *Step 2: Calculate Thermal Efficiency $eta$:*
  $ eta = (T_H - T_C) / T_H = (873.15 - 303.15) / 873.15 = 570 / 873.15 = 0.6528 quad (65.28\%) $

  *Step 3: Mechanical Work Output $w_"net"$ Per Cycle:*
  $ w_"net" = eta times q_H = 0.6528 times 2500" kJ" = 1632.0" kJ" $

  *Step 4: Heat Rejected to Cold Reservoir $q_C$:*
  From energy conservation ($w_"net" = q_H - q_C$):
  $ q_C = q_H - w_"net" = 2500 - 1632.0 = 868.0" kJ" $
  Verification: $q_C = q_H (T_C / T_H) = 2500 times (303.15 / 873.15) = 2500 times 0.3472 = 868.0" kJ"$. Matches perfectly.

  *Step 5: Coefficient of Performance as Refrigerator:*
  $ "COP"_"ref" = T_C / (T_H - T_C) = 303.15 / (873.15 - 303.15) = 303.15 / 570 = 0.5318 $

  *Boxed Final Answers:*
  $ ("i") eta = 65.28\%, quad ("ii") w_"net" = 1632.0" kJ", quad ("iii") q_C = 868.0" kJ", quad ("iv") "COP"_"ref" = 0.532. $
]

#v(8pt)
#rect(width: 100%, fill: rgb(249, 250, 251), stroke: 1pt + rgb(220, 225, 230), radius: 4pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb(15, 23, 42))[FAT Problem 2: Gibbs-Helmholtz Equation & Reaction Spontaneity] \
  *Question (10 Marks):* For a chemical synthesis reaction at standard atmospheric pressure, the change in free energy is found to be $Delta G = -120.5" kJ"$ at $300" K"$ and $-115.2" kJ"$ at $310" K"$.
  ("i") Calculate the temperature coefficient of free energy $[partial (Delta G) / partial T]_P$ assuming linear variation over this temperature range.
  ("ii") Using the Gibbs-Helmholtz equation, determine the reaction enthalpy $Delta H$ at $300" K"$.
  ("iii") Calculate the standard entropy change of the reaction $Delta S$ at $300" K"$.
  ("iv") Comment on whether the reaction is endothermic or exothermic, and determine if it is enthalpy-driven or entropy-driven.

  #v(4pt)
  #text(weight: "bold", fill: rgb(139, 0, 0))[Complete Step-by-Step Solution:] \
  *Step 1: Calculate Temperature Coefficient of Free Energy:*
  $ [ partial (Delta G) / partial T ]_P approx (Delta G_2 - Delta G_1) / (T_2 - T_1) = (-115.2 - (-120.5)) / (310 - 300) = (+5.3" kJ") / (10" K") = +0.53" kJ/K" = +530" J/K" $

  *Step 2: Determine Reaction Enthalpy $Delta H$ using Gibbs-Helmholtz:*
  The Gibbs-Helmholtz equation states:
  $ Delta G = Delta H + T [ partial (Delta G) / partial T ]_P $
  Rearranging for enthalpy $Delta H$:
  $ Delta H = Delta G - T [ partial (Delta G) / partial T ]_P $
  Substitute $T = 300" K", Delta G = -120.5" kJ"$, and $[partial (Delta G) / partial T]_P = +0.53" kJ/K"$:
  $ Delta H = -120.5" kJ" - (300" K" times 0.53" kJ/K") = -120.5 - 159.0 = -279.5" kJ" $

  *Step 3: Calculate Entropy Change $Delta S$:*
  Since $[partial (Delta G) / partial T]_P = -Delta S$:
  $ Delta S = - [ partial (Delta G) / partial T ]_P = -0.53" kJ/K" = -530" J/K" $
  Verification using $Delta G = Delta H - T Delta S$:
  $ Delta G = -279.5 - (300 times (-0.53)) = -279.5 + 159.0 = -120.5" kJ" $. Verified.

  *Step 4: Spontaneity & Thermodynamic Driving Force:*
  - Since $Delta H = -279.5" kJ" < 0$, the reaction is strongly *exothermic*.
  - Since $Delta S = -530" J/K" < 0$, disorder decreases (disfavored by entropy).
  - The reaction is strictly *enthalpy-driven*; the large negative enthalpy term ($-279.5" kJ"$) overcomes the opposing positive entropy penalty ($-T Delta S = +159.0" kJ"$), driving $Delta G$ negative.

  *Boxed Final Answers:*
  $ [partial (Delta G)/partial T]_P = +0.53" kJ/K", quad Delta H = -279.5" kJ", quad Delta S = -530" J/K", quad "Strongly exothermic & enthalpy-driven". $
]

#v(8pt)
#rect(width: 100%, fill: rgb(249, 250, 251), stroke: 1pt + rgb(220, 225, 230), radius: 4pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb(15, 23, 42))[FAT Problem 3: Arrhenius Activation Energy & First-Order Half-Life Kinetics] \
  *Question (10 Marks):* The rate constant for the thermal decomposition of a chemical propellant is $k_1 = 3.5 times 10^(-4)" s"^(-1)$ at $300" K"$ and $k_2 = 3.15 times 10^(-2)" s"^(-1)$ at $350" K"$.
  ("i") Determine the activation energy $E_a$ for the decomposition reaction in $"kJ/mol"$.
  ("ii") Calculate the Arrhenius frequency factor $A$.
  ("iii") Determine the rate constant $k$ and half-life $t_(1/2)$ at an operating temperature of $325" K"$.
  ("iv") Calculate the time required for $90\%$ decomposition of the propellant at $325" K"$.

  #v(4pt)
  #text(weight: "bold", fill: rgb(139, 0, 0))[Complete Step-by-Step Solution:] \
  *Step 1: Calculate Activation Energy $E_a$:*
  The integrated Arrhenius equation is:
  $ ln(k_2 / k_1) = E_a / R [ 1 / T_1 - 1 / T_2 ] = (E_a (T_2 - T_1)) / (R T_1 T_2) $
  $ k_2 / k_1 = (3.15 times 10^(-2)) / (3.5 times 10^(-4)) = 90.0 $
  $ ln(90.0) = 4.4998 $
  $ (T_2 - T_1) / (T_1 T_2) = (350 - 300) / (300 times 350) = 50 / 105000 = 4.7619 times 10^(-4)" K"^(-1) $
  With $R = 8.314" J/(mol K)"$:
  $ 4.4998 = (E_a times 4.7619 times 10^(-4)) / 8.314 $
  $ E_a = (4.4998 times 8.314) / (4.7619 times 10^(-4)) = 37.411 / (4.7619 times 10^(-4)) = 78563" J/mol" = 78.563" kJ/mol" $

  *Step 2: Determine Arrhenius Frequency Factor $A$:*
  From $k_1 = A e^(-E_a / (R T_1))$:
  $ ln A = ln k_1 + E_a / (R T_1) = ln(3.5 times 10^(-4)) + 78563 / (8.314 times 300) = -7.9576 + 78563 / 2494.2 = -7.9576 + 31.498 = 23.5404 $
  $ A = e^(23.5404) = 1.673 times 10^(10)" s"^(-1) $

  *Step 3: Rate Constant & Half-Life at $325" K"$ ($52 degree"C"$):*
  $ ln(k_3 / k_1) = E_a / R [ 1 / T_1 - 1 / T_3 ] = 78563 / 8.314 [ 1 / 300 - 1 / 325 ] = 9449.5 times [ (325 - 300) / (300 times 325) ] = 9449.5 times (25 / 97500) $
  $ ln(k_3 / k_1) = 9449.5 times 2.5641 times 10^(-4) = 2.423 $
  $ k_3 / k_1 = e^(2.423) = 11.279 $
  $ k_3 = 11.279 times (3.5 times 10^(-4)) = 3.948 times 10^(-3)" s"^(-1) $
  Half-life at $325" K"$:
  $ t_(1/2) = 0.69315 / k_3 = 0.69315 / (3.948 times 10^(-3)) = 175.57" seconds" approx 2.93" minutes" $

  *Step 4: Time for $90\%$ Decomposition:*
  For $90\%$ reaction, $[A]_t = 0.10 [A]_0$:
  $ t_(90\%) = 1 / k_3 ln([A]_0 / (0.10 [A]_0)) = (ln 10) / k_3 = 2.3026 / (3.948 times 10^(-3)) = 583.23" seconds" approx 9.72" minutes" $

  *Boxed Final Answers:*
  $ E_a = 78.56" kJ/mol", quad A = 1.67 times 10^(10)" s"^(-1), quad k_(325"K") = 3.95 times 10^(-3)" s"^(-1), quad t_(1/2) = 175.6" s", quad t_(90\%) = 583.2" s". $
]
