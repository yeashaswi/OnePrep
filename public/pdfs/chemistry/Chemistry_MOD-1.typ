
#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.2cm, right: 2.2cm),
  header: context {
    if here().page() > 1 {
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: luma(90))[VIT BACHY101 --- Module 1: Thermodynamics & Kinetics]],
        align(right)[#text(size: 8.5pt, fill: luma(90), style: "italic")[VIT FAT Study Textbook]]
      )
      line(length: 100%, stroke: 0.4pt + luma(180))
    }
  },
  footer: context {
    align(center)[#text(size: 9pt)[#here().page()]]
  }
)
#set text(font: "New Computer Modern", size: 10pt)
#set par(justify: true, leading: 0.65em)
#set heading(numbering: "1.1")

#align(center)[
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT BACHY101 --- Module 1: Thermodynamics & Kinetics] \
  #v(2mm)
  #text(size: 15pt, weight: "black")[MODULE 1: CHEMICAL THERMODYNAMICS AND KINETICS] \
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[(CO: 1)] \
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Complete Study Textbook, Step-by-Step Derivations & VIT FAT Question Bank] \
  #text(size: 9pt, fill: luma(100))[Aligned with Official VIT BACHY101 Course Page Syllabus, Question Bank, and Past FAT Papers]
]

#v(3mm)

#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 9pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Textbook (Official VIT Syllabus - All 9 Topics):]
  (1) Introduction terminologies, (2) Zeroth law - First law of thermodynamics, Enthalpy and heat capacity, (3) Applications of first law - Second law of thermodynamics, (4) Carnot cycle, (5) Third law of thermodynamics, Gibbs-Helmholtz equation, (6) Chemical kinetics: Rate equation, Order of reaction, Integral rate equations, Half-life time, (7) Collision theory of reaction rate, Effect of temperature and catalysts, (8) Worked Numericals - Part 1, and (9) Worked Numericals - Part 2.
]

#v(2mm)
= VIT FAT Exam Blueprint & Master Formula Sheet

In VIT Final Assessment Tests (BACHY101 FAT), Module 1 carries *15 to 20 marks*. Typically, one 10-mark question focuses on Chemical Thermodynamics (Carnot cycle efficiency, Gibbs-Helmholtz derivation, or enthalpy/entropy calculations) and another 10-mark question appears on Chemical Kinetics (integral rate law derivations, half-life problems, or Arrhenius activation energy determinations).

#table(
  columns: (1.5fr, 2fr, 2fr),
  inset: 6pt,
  stroke: 0.4pt + luma(180),
  align: (left, left, left),
  [*Concept / Law*], [*Governing Equation / Formula*], [*VIT Exam Key Insight*],
  [First Law of Thermodynamics], [$Delta U = q + w = q - P Delta V$], [Work of expansion: $w = - integral P_"ext" d V$ (IUPAC sign convention).],
  [Heat Capacity Relation], [$C_p - C_v = R = n R$ (ideal gas)], [$C_p = (partial H / partial T)_P$ and $C_v = (partial U / partial T)_V$.],
  [Carnot Engine Efficiency], [$eta = (w_"net") / q_"in" = (T_H - T_C) / T_H = 1 - (T_C / T_H)$], [Temperatures $T_H, T_C$ MUST strictly be converted to Kelvin!],
  [Gibbs Free Energy], [$Delta G = Delta H - T Delta S$], [Spontaneous if $Delta G < 0$, at equilibrium if $Delta G = 0$.],
  [Gibbs-Helmholtz Equation], [$Delta G = Delta H + T [ (partial (Delta G)) / (partial T) ]_P$], [Alternatively: $[ partial (Delta G / T) / partial T ]_P = - Delta H / T^2$.],
  [First-Order Rate Law], [$k = (2.303) / t log_10 (a / (a - x))$], [Half life $t_(1/2) = (0.693) / k$ is completely independent of initial conc $a$.],
  [Second-Order Rate Law], [$k = 1 / t (x / (a (a - x)))$], [Half life $t_(1/2) = 1 / (k a)$ is inversely proportional to initial conc $a$.],
  [Arrhenius Equation], [$k = A e^(-E_a / (R T)) arrow.r.double ln(k_2 / k_1) = (E_a) / R (1 / T_1 - 1 / T_2)$], [$R = 8.314 "J" / ("mol" dot "K")$; activation energy $E_a$ is strictly positive.]
)

= Chemical Thermodynamics: Laws, Carnot Engine & Free Energy

== Thermodynamic Systems & The First Law
Thermodynamic systems are classified into open (exchanges matter and energy), closed (exchanges energy only), and isolated (exchanges neither matter nor energy). The *Zeroth Law* establishes thermal equilibrium and the empirical definition of temperature: if body A is in thermal equilibrium with B, and B with C, then A and C are in mutual thermal equilibrium.

The *First Law of Thermodynamics* represents the principle of conservation of energy:
$ Delta U = q + w $
where $U$ is internal energy (a state function), $q$ is heat absorbed by the system, and $w$ is work performed on the system. For a quasi-static reversible expansion of an ideal gas against external pressure $P$:
$ d w = -P d V arrow.r.double d U = d q - P d V $
At constant pressure, enthalpy $H$ is defined as $H = U + P V$. Differentiating at constant pressure gives $d H = d U + P d V = q_p$. Hence the heat transferred at constant pressure equals the enthalpy change $Delta H$.

== Heat Capacities & Adiabatic Expansion
The molar heat capacities are defined as:
$ C_v = (partial U / partial T)_V quad "and" quad C_p = (partial H / partial T)_P $
For an ideal gas where $H = U + R T$:
$ C_p - C_v = (d H) / (d T) - (d U) / (d T) = R $
For a reversible adiabatic process ($d q = 0$):
$ d U = d w arrow.r.double C_v d T = -P d V = - (R T) / V d V arrow.r.double C_v (d T) / T = - R (d V) / V $
Integrating gives the classic Poisson adiabatic relations:
$ P V^gamma = "constant", quad T V^(gamma - 1) = "constant", quad T^gamma P^(1 - gamma) = "constant" $
where the adiabatic index $gamma = C_p / C_v$.

== The Carnot Cycle & The Second Law
A Carnot heat engine operates between a hot reservoir at $T_H$ and a cold sink at $T_C$ via four reversible steps:
1. *Isothermal Expansion (1 $arrow.r$ 2 at $T_H$):* Heat absorbed $q_H = R T_H ln(V_2 / V_1)$. Internal energy change $Delta U_1 = 0$.
2. *Adiabatic Expansion (2 $arrow.r$ 3 from $T_H$ to $T_C$):* Heat $q = 0$. Work done $w_2 = C_v (T_C - T_H)$.
3. *Isothermal Compression (3 $arrow.r$ 4 at $T_C$):* Heat rejected $q_C = R T_C ln(V_4 / V_3) = -R T_C ln(V_3 / V_4)$.
4. *Adiabatic Compression (4 $arrow.r$ 1 from $T_C$ to $T_H$):* Heat $q = 0$. Work done $w_4 = C_v (T_H - T_C)$.

The net work output per complete cycle is:
$ w_"net" = q_H + q_C = R (T_H - T_C) ln(V_2 / V_1) $
The thermal efficiency $eta$ is the ratio of work extracted to heat input:
$ eta = (w_"net") / q_H = (T_H - T_C) / T_H = 1 - (T_C / T_H) $
*The Second Law of Thermodynamics Statements:*
- *Kelvin-Planck Statement:* It is impossible to construct a cyclic heat engine that operates solely by absorbing heat from a single reservoir and producing an equivalent amount of work without rejecting heat to a cold sink.
- *Clausius Statement:* It is impossible to construct a cyclic machine whose sole effect is the transfer of heat from a body at a lower temperature to a body at a higher temperature.

== The Third Law of Thermodynamics & Gibbs-Helmholtz Equation
The *Third Law of Thermodynamics* states that the entropy of a pure, perfectly crystalline substance at absolute zero ($T = 0 "K"$) is exactly zero ($S_0 = 0$).

Gibbs free energy $G$ combines enthalpy and entropy: $G = H - T S$. Since $d G = V d P - S d T$, at constant pressure ($d P = 0$):
$ [ (partial G) / (partial T) ]_P = -S $
Substituting $-S$ into $G = H - T S$:
$ G = H + T [ (partial G) / (partial T) ]_P $
For any chemical or physical transformation ($Delta G = G_"products" - G_"reactants"$):
$ Delta G = Delta H + T [ (partial (Delta G)) / (partial T) ]_P $
This is the celebrated *Gibbs-Helmholtz Equation*. Dividing by $T^2$ yields the differential form:
$ [ (partial (Delta G / T)) / (partial T) ]_P = - (Delta H) / T^2 $

= Chemical Kinetics: Rate Laws & Collision Theory

== Rate of Reaction, Order & Integral Rate Laws
For a general reaction $a A + b B arrow.r "Products"$, the differential rate is:
$ "Rate" = - 1/a (d [A]) / (d t) = k [A]^m [B]^n $
The overall order of reaction is $n_"total" = m + n$.
- *First-Order Kinetics:* $- (d [A]) / (d t) = k_1 [A]$.
  Integrating from $t = 0$ ($[A] = [A]_0 = a$) to time $t$ ($[A] = a - x$):
  $ - integral_a^(a-x) (d [A]) / [A] = k_1 integral_0^t d t arrow.r.double ln(a / (a - x)) = k_1 t arrow.r.double k_1 = (2.303) / t log_10 (a / (a - x)) $
  The half-life $t_(1/2)$ (time when $x = a/2$) is:
  $ t_(1/2) = (ln 2) / k_1 = (0.693) / k_1 $
- *Second-Order Kinetics ($2 A arrow.r "Products"$):*
  $ - (d [A]) / (d t) = k_2 [A]^2 arrow.r.double 1 / (a - x) - 1 / a = k_2 t arrow.r.double k_2 = 1/t (x / (a (a - x))) $
  The half-life is $t_(1/2) = 1 / (k_2 a)$.

== Collision Theory & Arrhenius Equation
According to the Collision Theory of bimolecular gas reactions:
$ "Rate" = Z_(A B) e^(-E_a / (R T)) P $
where $Z_(A B)$ is collision frequency, $e^(-E_a / (R T))$ is the fraction of molecules with kinetic energy exceeding activation energy $E_a$, and $P$ is the steric orientation factor.
The Arrhenius equation describes the exponential increase of rate constant $k$ with absolute temperature $T$:
$ k = A e^(-E_a / (R T)) $
Taking logarithms:
$ ln k = ln A - (E_a) / (R T) quad <===> quad log_10 k = log_10 A - (E_a) / (2.303 R T) $
Between two temperatures $T_1$ and $T_2$:
$ log_10 (k_2 / k_1) = (E_a) / (2.303 R) [ (T_2 - T_1) / (T_1 T_2) ] $

= Worked VIT Question Bank & Past FAT Problems

#rect(width: 100%, stroke: 0.5pt + rgb("#0369a1"), radius: 3pt, fill: rgb("#f0f9ff"), inset: 8pt)[
  *Problem 1.1 (VIT FAT Classic - 10 Marks):*
  A Carnot heat engine absorbs $600 "kJ"$ of heat from a reservoir at $400 degree upright("C")$ and rejects heat to a sink at $30 degree upright("C")$. Calculate: (i) the Carnot efficiency, (ii) work done per cycle, and (iii) the heat rejected to the sink.
]

*Solution:*
1. Convert operating temperatures to Kelvin:
   $T_H = 400 + 273.15 = 673.15 "K"$, $T_C = 30 + 273.15 = 303.15 "K"$
2. Carnot efficiency:
   $ eta = (T_H - T_C) / T_H = (673.15 - 303.15) / 673.15 = 370 / 673.15 = 0.5496 quad (54.96%) $
3. Work output per cycle:
   $ w_"net" = eta times q_H = 0.5496 times 600 "kJ" = 329.76 "kJ" $
4. Heat discharged to the sink:
   $ q_C = q_H - w_"net" = 600 - 329.76 = 270.24 "kJ" $

#rect(width: 100%, stroke: 0.5pt + rgb("#0369a1"), radius: 3pt, fill: rgb("#f0f9ff"), inset: 8pt)[
  *Problem 1.2 (VIT Question Bank - 10 Marks):*
  A first-order decomposition reaction has rate constants $k_1 = 3.2 times 10^(-4) "s"^(-1)$ at $25 degree upright("C")$ and $k_2 = 1.6 times 10^(-3) "s"^(-1)$ at $45 degree upright("C")$. Calculate the activation energy $E_a$ and the frequency factor $A$. ($R = 8.314 "J" / ("mol" dot "K")$).
]

*Solution:*
1. Convert temperatures: $T_1 = 298.15 "K"$, $T_2 = 318.15 "K"$.
2. Ratio of rate constants:
   $ k_2 / k_1 = (1.6 times 10^(-3)) / (3.2 times 10^(-4)) = 5.0 $
   $ ln(5.0) = 1.6094 $
3. Temperature difference factor:
   $ 1 / T_1 - 1 / T_2 = (318.15 - 298.15) / (298.15 times 318.15) = 20 / 94856.4 = 2.1085 times 10^(-4) "K"^(-1) $
4. Compute activation energy $E_a$:
   $ E_a = (R ln(k_2 / k_1)) / (1/T_1 - 1/T_2) = (8.314 times 1.6094) / (2.1085 times 10^(-4)) = 63462 "J/mol" = 63.46 "kJ/mol" $
5. Compute Arrhenius pre-exponential factor $A$:
   $ ln A = ln k_1 + (E_a) / (R T_1) = ln(3.2 times 10^(-4)) + (63462) / (8.314 times 298.15) = -8.047 + 25.602 = 17.555 $
   $ A = e^(17.555) = 4.20 times 10^7 "s"^(-1) $
