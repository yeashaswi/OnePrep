#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.4cm, right: 2.4cm),
  header: context {
    if here().page() > 1 {
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: rgb("#64748b"))[VIT Applied Chemistry (BACHY101) --- Module 1: Thermodynamics & Kinetics]],
        align(right)[#text(size: 8.5pt, fill: rgb("#64748b"), style: "italic")[VIT FAT Comprehensive Study Textbook]]
      )
      line(length: 100%, stroke: 0.5pt + rgb("#cbd5e1"))
    }
  },
  footer: context {
    align(center)[#text(size: 9pt, fill: rgb("#64748b"))[Page #here().page()]]
  }
)
#set text(font: "New Computer Modern", size: 10.5pt, fill: rgb("#0f172a"))
#set par(justify: true, leading: 0.82em)

#align(center)[
  #text(size: 9.5pt, weight: "bold", fill: rgb("#64748b"), tracking: 1pt)[VIT VELLORE --- DEPARTMENT OF CHEMISTRY] \
  #v(2mm)
  #text(size: 16pt, weight: "bold", fill: rgb("#0f172a"))[MODULE 1: CHEMICAL THERMODYNAMICS AND KINETICS] \
  #v(1mm)
  #text(size: 11.5pt, weight: "bold", fill: rgb("#b91c1c"))[Official FAT Study Textbook & Step-by-Step Question Bank Solutions (CO: 1)] \
  #v(1mm)
  #text(size: 9pt, fill: rgb("#64748b"))[Aligned with Official VIT BACHY101 Syllabus, Department Question Bank, and Past FAT Papers]
]

#v(3mm)

#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.8pt + rgb("#cbd5e1"), radius: 5pt, inset: 11pt)[
  #text(weight: "bold", fill: rgb("#0f172a"), size: 10pt)[Scope of Module 1 (Official VIT Syllabus - All 9 Topics):] \
  #v(1.5mm)
  #text(size: 9.5pt, fill: rgb("#334155"))[
    (1) Introduction terminologies, (2) Zeroth law - First law of thermodynamics, Enthalpy and heat capacity, (3) Applications of first law - Second law of thermodynamics, (4) Carnot cycle, (5) Third law of thermodynamics, Gibbs-Helmholtz equation, (6) Chemical kinetics: Rate equation, Order of reaction, Integral rate equations, Half-life time, (7) Collision theory of reaction rate, Effect of temperature and catalysts, (8) Worked Numericals - Part 1, and (9) Worked Numericals - Part 2.
  ]
]

#v(4mm)

= 1. Core Syllabus Definitions & Theoretical Foundations (Line-by-Line)

#v(2mm)

*1. Open System* \
A thermodynamic system bounded by a permeable interface that freely exchanges both matter and energy with its surroundings (e.g. an open beaker containing boiling water).

#v(3.5mm)

*2. Closed System* \
A thermodynamic system that exchanges energy in the form of heat and boundary work with its surroundings but cannot exchange mass across its boundaries (e.g. gas enclosed in a cylinder with a tightly sealed movable piston).

#v(3.5mm)

*3. Isolated System* \
A thermodynamic system completely bounded by rigid, adiabatic, impermeable walls that exchanges neither matter nor energy with its surroundings (e.g. hot liquid enclosed in an ideal vacuum dewar flask).

#v(3.5mm)

*4. Intensive Properties* \
Physical or thermodynamic properties whose values are independent of the total quantity or mass of matter present in the system (e.g. Temperature $T$, Pressure $P$, Density $rho$, Refractive index, Boiling point, Molar heat capacity $C_m$).

#v(3.5mm)

*5. Extensive Properties* \
Thermodynamic properties whose values scale directly in proportion to the total quantity or mass of the system (e.g. Volume $V$, Mass $m$, Internal energy $U$, Enthalpy $H$, Entropy $S$, Total heat capacity $C$).

#v(3.5mm)

*6. State Functions* \
Thermodynamic equilibrium properties whose values depend exclusively on the present equilibrium state of the system, irrespective of the historical path or mechanism taken to reach that state (e.g. $P, V, T, U, H, S, G$).

#v(3.5mm)

*7. Path Functions* \
Thermodynamic quantities whose magnitudes depend directly on the specific transformation pathway followed during the thermodynamic transition (e.g. Heat absorbed $q$, Boundary work done $w$).

#v(3.5mm)

*8. Zeroth Law of Thermodynamics* \
If body A is in thermal equilibrium with body B, and body B is simultaneously in thermal equilibrium with body C, then body A and body C are in mutual thermal equilibrium. This provides the absolute scientific foundation for temperature measurement.

#v(3.5mm)

*9. First Law of Thermodynamics* \
The principle of conservation of energy: Energy cannot be created or destroyed, only transformed between equivalent forms:
$ Delta U = q + w $
where $Delta U$ is internal energy change, $q$ is heat absorbed by the system, and $w$ is work performed on the system ($w = -P_"ext" Delta V$). For free expansion into a vacuum ($P_"ext" = 0$), work done is strictly zero ($w_"vacuum" = 0$).

#v(3.5mm)

*10. Enthalpy & Mayer's Relation* \
Enthalpy represents total thermal heat content defined as $H = U + P V$. At constant pressure $q_p = Delta H$; at constant volume $q_v = Delta U$. For one mole of an ideal gas ($P V = R T$), differentiating $H = U + R T$ with respect to temperature at constant pressure yields Mayer's proof:
$ C_p - C_v = R $

#v(3.5mm)

*11. Reversible Adiabatic Expansion* \
A thermodynamic process with zero heat exchange with the surroundings ($d q = 0$). The system performs boundary expansion work strictly at the expense of its own internal energy ($Delta U = w < 0$), causing the temperature to drop:
$ P V^gamma = "constant", quad T V^(gamma - 1) = "constant" $
Sudden discharge from a high-pressure $C O_2$ fire extinguisher produces rapid adiabatic expansion and cooling, freezing into solid dry ice snow.

#v(3.5mm)

*12. Second Law of Thermodynamics* \
Natural spontaneous processes occur with an increase in total entropy of the universe. Clausius statement: Heat cannot spontaneously flow from a colder reservoir to a hotter reservoir without external work. Kelvin-Planck statement: No cyclic heat engine can absorb heat from a single thermal reservoir and convert it completely into equivalent mechanical work without waste heat rejected to a sink.

#v(3.5mm)

*13. Carnot Cycle & Thermal Efficiency* \
An idealized four-stroke reversible cyclic heat engine operating between hot reservoir $T_H$ and cold sink $T_C$ (Isothermal expansion $arrow.r$ Adiabatic expansion $arrow.r$ Isothermal compression $arrow.r$ Adiabatic compression). The maximum theoretical thermal efficiency is:
$ eta = (T_H - T_C) / T_H = 1 - (T_C / T_H) $

#v(3.5mm)

*14. Third Law of Thermodynamics* \
The entropy of a pure, perfectly crystalline substance at absolute zero ($T = 0 "K"$) is exactly zero:
$ lim_(T arrow.r 0) S = 0 $
This provides an absolute reference datum for evaluating standard molar entropies $S^circle$.

#v(3.5mm)

*15. Gibbs Free Energy & Reaction Spontaneity* \
A thermodynamic state function defined as $G = H - T S$. Governed at constant temperature and pressure by the Gibbs-Helmholtz relation:
$ Delta G = Delta H - T Delta S $
- $Delta G < 0$: Spontaneous process (thermodynamically favored).
- $Delta G = 0$: Dynamic equilibrium state (crossover temperature $T_"eq" = Delta H / Delta S$).
- $Delta G > 0$: Non-spontaneous process (requires external driving force).

#v(3.5mm)

*16. Rate of Chemical Reaction* \
The instantaneous rate of change in concentration of reactants or products per unit time: $"Rate" = -d[A]/d t = k[A]^n$, where $k$ is the specific rate constant and $n$ is reaction order.

#v(3.5mm)

*17. Zero-Order Kinetics* \
The reaction rate is completely independent of reactant concentration ($"Rate" = k$). Integrated rate law: $[A]_t = [A]_0 - k t$. Half-life: $t_(1/2) = [A]_0 / (2 k)$.

#v(3.5mm)

*18. First-Order Kinetics* \
The reaction rate is directly proportional to the first power of reactant concentration. Integrated rate law: $ln([A]_0 / [A]_t) = k t$ or $k = (2.303 / t) log_10([A]_0 / [A]_t)$. The half-life is strictly constant and independent of initial concentration: $t_(1/2) = 0.693 / k$.

#v(3.5mm)

*19. Second-Order Kinetics* \
The reaction rate depends on the square of one reactant concentration or the product of two concentrations. Integrated rate law: $1 / [A]_t = 1 / [A]_0 + k t$. The half-life is inversely proportional to initial concentration: $t_(1/2) = 1 / (k [A]_0)$.

#v(3.5mm)

*20. Arrhenius Equation & Activation Energy* \
Governs the exponential dependence of reaction rate constant $k$ on absolute temperature $T$:
$ k = A e^(-E_a / (R T)) $
where $A$ is the pre-exponential frequency factor, $R = 8.314 "J/(mol"dot"K)"$, and $E_a$ is the threshold activation energy. Comparing rate constants at two temperatures:
$ ln(k_2 / k_1) = (E_a / R) [ (T_2 - T_1) / (T_1 T_2) ] $

#v(5mm)

= 2. In-Depth Chemical Theory & Step-by-Step Derivations

#v(2mm)

== Derivation of Mayer's Relation ($C_p - C_v = R$)
For one mole of an ideal gas, enthalpy is defined as:
$ H = U + P V = U + R T $
Differentiating with respect to temperature $T$ at constant pressure:
$ (partial H / partial T)_P = (partial U / partial T)_P + R $
Since internal energy $U$ of an ideal gas depends solely on temperature: $(partial U / partial T)_P = (partial U / partial T)_V = C_v$.
By definition, $(partial H / partial T)_P = C_p$.
Substituting yields the celebrated relation:
$ C_p = C_v + R arrow.r.double bold(C_p - C_v = R) $

#v(3mm)

== The 4-Stroke Carnot Cycle & Efficiency Derivation
A Carnot heat engine operates between $T_H$ and $T_C$ through four reversible stages:
1. *Stroke 1 (Isothermal Expansion, A $arrow.r$ B at $T_H$):*
   Gas absorbs heat $q_H$ from reservoir: $q_H = -w_1 = R T_H ln(V_B / V_A)$. Internal energy change $Delta U_1 = 0$.
2. *Stroke 2 (Adiabatic Expansion, B $arrow.r$ C from $T_H$ to $T_C$):*
   Thermally insulated ($q = 0$). Gas expands doing work: $w_2 = C_v (T_C - T_H) = -C_v (T_H - T_C)$.
3. *Stroke 3 (Isothermal Compression, C $arrow.r$ D at $T_C$):*
   Heat $q_C$ rejected to cold sink: $q_C = -w_3 = R T_C ln(V_D / V_C) = -R T_C ln(V_C / V_D)$.
4. *Stroke 4 (Adiabatic Compression, D $arrow.r$ A from $T_C$ to $T_H$):*
   Thermally insulated ($q = 0$). Work performed on gas: $w_4 = C_v (T_H - T_C)$.

Summing work over the entire cycle:
$ w_"net" = w_1 + w_2 + w_3 + w_4 = -R T_H ln(V_B / V_A) - R T_C ln(V_D / V_C) $
Since paths BC and DA are adiabatic: $T_H V_B^(gamma-1) = T_C V_C^(gamma-1)$ and $T_H V_A^(gamma-1) = T_C V_D^(gamma-1)$, which gives $V_B / V_A = V_C / V_D$.
Therefore:
$ |w_"net"| = R (T_H - T_C) ln(V_B / V_A) $
The thermal efficiency $eta$ is the ratio of useful net work output to heat absorbed at the hot reservoir:
$ eta = (|w_"net"|) / q_H = (R (T_H - T_C) ln(V_B / V_A)) / (R T_H ln(V_B / V_A)) = bold((T_H - T_C) / T_H = 1 - (T_C / T_H)) $

#v(5mm)

= 3. VIT FAT Exam Blueprint & Master Formula Sheet

Module 1 carries *15 to 20 marks* in BACHY101 FAT:
- *Question Type A (10 Marks):* Carnot engine efficiency derivation, heat absorbed, net cyclic work area, and refrigerator COP.
- *Question Type B (5-10 Marks):* Mayer's relation proof ($C_p - C_v = R$) and reversible adiabatic expansions ($P V^gamma = C$).
- *Question Type C (10 Marks):* Integrated rate equations for 0th, 1st, and 2nd order reactions, half-life problems, and Arrhenius activation energy calculations.

#v(2mm)

#table(
  columns: (1.5fr, 2.2fr, 2fr),
  inset: 7pt,
  stroke: 0.5pt + rgb("#cbd5e1"),
  align: (left, left, left),
  [*Concept / Law*], [*Governing Equation / Formula*], [*VIT Exam Key Insight*],
  [First Law of Thermodynamics], [$Delta U = q + w, quad w = - integral P_"ext" d V$], [Free expansion into vacuum: $P_"ext" = 0 arrow.r w = 0$.],
  [Heat Capacity Relation], [$C_p - C_v = R = 8.314 "J/(mol"dot"K)"$], [Applies strictly to ideal gases ($P V = n R T$).],
  [Carnot Engine Efficiency], [$eta = (T_H - T_C) / T_H = 1 - (T_C / T_H)$], [Temperatures $T_H, T_C$ MUST be converted to Kelvin!],
  [Gibbs Free Energy], [$Delta G = Delta H - T Delta S$], [Spontaneous if $Delta G < 0$; Equilibrium at $T_"eq" = Delta H / Delta S$.],
  [Gibbs-Helmholtz Equation], [$Delta G = Delta H + T [ (partial(Delta G)) / (partial T) ]_P$], [Alternatively: $[ (partial(Delta G / T)) / (partial T) ]_P = - Delta H / T^2$.],
  [First-Order Rate Law], [$k = (2.303 / t) log_10(a / (a - x))$], [Half life $t_(1/2) = 0.693 / k$ is independent of initial conc $a$.],
  [Second-Order Rate Law], [$k = (1 / t) (x / (a (a - x)))$], [Half life $t_(1/2) = 1 / (k a)$ is inversely proportional to $a$.],
  [Arrhenius Equation], [$k = A e^(-E_a / (R T)) arrow.r.double ln(k_2 / k_1) = (E_a / R) [ (T_2 - T_1) / (T_1 T_2) ]$], [$R = 8.314 "J/(mol"dot"K)"$; activation energy $E_a$ is in J/mol.]
)

#v(5mm)

= 4. Worked VIT Question Bank & Past FAT Numerical Problems

#v(2mm)

#rect(width: 100%, fill: rgb("#fef2f2"), stroke: 0.8pt + rgb("#f87171"), radius: 5pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb("#991b1b"))[VIT FAT Problem 1 (10 Marks): Carnot Engine Calculations] \
  #v(1mm)
  A reversible Carnot heat engine operates between $500 thin degree "C"$ and $100 thin degree "C"$. In each cycle, it absorbs $6000 "J"$ of heat from the higher-temperature source. \
  (a) Calculate the maximum thermal efficiency of this Carnot engine. \
  (b) Calculate the net useful mechanical work produced per cycle. \
  (c) Calculate the quantity of waste heat rejected to the cold sink per cycle.
]

#v(2mm)

*Step-by-Step Solution:*
- *Step 1: Absolute Temperature Conversion (Mandatory):*
  $ T_H = 500 + 273.15 = 773.15 "K" $
  $ T_C = 100 + 273.15 = 373.15 "K" $

- *Step 2: Maximum Carnot Efficiency:*
  $ eta = (T_H - T_C) / T_H = (773.15 - 373.15) / 773.15 = 400 / 773.15 = bold(0.5174) quad (bold(51.74%)) $

- *Step 3: Net Work Done ($w_"net"$):*
  $ |w_"net"| = eta dot q_H = 0.51736 times 6000 "J" = bold(3104.2 "J") $

- *Step 4: Heat Rejected to Cold Sink ($q_C$):*
  $ |q_C| = q_H - |w_"net"| = 6000 - 3104.2 = bold(2895.8 "J") $

#v(2mm)

#rect(width: 100%, fill: rgb("#f0fdf4"), stroke: 0.8pt + rgb("#86efac"), radius: 4pt, inset: 8pt)[
  *Boxed Final Answers:* \
  (a) Efficiency $eta = bold(51.74%)$ \
  (b) Net Mechanical Work $w_"net" = bold(3104.2 "J")$ \
  (c) Waste Heat Rejected $q_C = bold(2895.8 "J")$
]

#v(4mm)

#rect(width: 100%, fill: rgb("#fef2f2"), stroke: 0.8pt + rgb("#f87171"), radius: 5pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb("#991b1b"))[VIT FAT Problem 2 (10 Marks): First-Order Kinetics & Arrhenius Activation Energy] \
  #v(1mm)
  (a) In the first-order decomposition of $C_4 H_9 C l$, the concentration drops from $0.100 "M"$ to $0.050 "M"$ in $340 "s"$. Calculate the rate constant $k$. \
  (b) A reaction rate quadruples ($k_2 / k_1 = 4.0$) when the temperature increases from $300 "K"$ to $320 "K"$. Calculate the activation energy $E_a$ of the reaction in $"kJ/mol"$.
]

#v(2mm)

*Step-by-Step Solution:*
- *Part (a): Rate Constant Calculation:*
  The concentration drop from $0.100 "M"$ to $0.050 "M"$ represents exactly one half-life ($t_(1/2) = 340 "s"$):
  $ k = (ln 2) / t_(1/2) = (0.69315) / (340 "s") = bold(2.039 times 10^(-3) "s"^(-1)) $

- *Part (b): Activation Energy from Arrhenius Ratio:*
  $ ln(k_2 / k_1) = (E_a / R) [ (T_2 - T_1) / (T_1 T_2) ] $
  Substitute $k_2 / k_1 = 4$, $T_1 = 300 "K"$, $T_2 = 320 "K"$, and $R = 8.314 "J/(mol"dot"K)"$:
  $ ln(4.0) = 1.38629 = (E_a / 8.314) [ (320 - 300) / (300 times 320) ] $
  $ 1.38629 = (E_a / 8.314) [ 20 / 96000 ] = E_a times (2.5061 times 10^(-5)) $
  $ E_a = (1.38629) / (2.5061 times 10^(-5)) = 55317 "J/mol" = bold(55.32 "kJ/mol") $

#v(2mm)

#rect(width: 100%, fill: rgb("#f0fdf4"), stroke: 0.8pt + rgb("#86efac"), radius: 4pt, inset: 8pt)[
  *Boxed Final Answers:* \
  (a) First-Order Rate Constant $k = bold(2.04 times 10^(-3) "s"^(-1))$ \
  (b) Activation Energy $E_a = bold(55.32 "kJ/mol")$
]
