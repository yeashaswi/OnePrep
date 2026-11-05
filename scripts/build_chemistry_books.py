import subprocess
import os

CHEM_DIR = "/Users/yashaswivunnam/Desktop/Calculus/FATkilla/public/pdfs/chemistry"
os.makedirs(CHEM_DIR, exist_ok=True)

def compile_typ(name, content):
    typ_path = os.path.join(CHEM_DIR, f"{name}.typ")
    pdf_path = os.path.join(CHEM_DIR, f"{name}.pdf")
    with open(typ_path, "w", encoding="utf-8") as f:
        f.write(content)
    
    cmd = f'export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:$PATH"; typst compile "{typ_path}" "{pdf_path}"'
    res = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    if res.returncode != 0:
        print(f"Error compiling {name}: {res.stderr}")
    else:
        print(f"Successfully compiled {name}.pdf")

# ==================== MODULE 1 ====================
mod1_typ = """
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
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT BACHY101 --- Module 1: Thermodynamics & Kinetics] \\
  #v(2mm)
  #text(size: 15pt, weight: "black")[MODULE 1: CHEMICAL THERMODYNAMICS AND KINETICS] \\
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[(CO: 1)] \\
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Complete Study Textbook, Step-by-Step Derivations & VIT FAT Question Bank] \\
  #text(size: 9pt, fill: luma(100))[Aligned with Official VIT BACHY101 Course Page Syllabus, Question Bank, and Past FAT Papers]
]

#v(3mm)
#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 9pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Textbook (Official VIT Syllabus - All 9 Topics):]
  (1) Introduction terminologies, (2) Zeroth law - First law of thermodynamics, Enthalpy and heat capacity, (3) Applications of first law - Second law of thermodynamics, (4) Carnot cycle, (5) Third law of thermodynamics, Gibbs-Helmholtz equation, (6) Chemical kinetics: Rate equation, Order of reaction, Integral rate equations, Half-life time, (7) Collision theory of reaction rate, Effect of temperature and catalysts, (8) Worked Numericals - Part 1, and (9) Worked Numericals - Part 2.
]

#v(2mm)
= VIT FAT Exam Blueprint & Master Formula Sheet

In VIT Final Assessment Tests (BACHY101 FAT), Module 1 contributes *15 to 20 marks*. Typically, one 10-mark question appears on Thermodynamics (Carnot cycle efficiency or Gibbs-Helmholtz calculation) and one 10-mark question appears on Chemical Kinetics (Order determination, integral rate laws, or Arrhenius activation energy).

#table(
  columns: (1.5fr, 2fr, 2fr),
  inset: 6pt,
  stroke: 0.4pt + luma(180),
  align: (left, left, left),
  [*Concept / Law*], [*Governing Equation / Formula*], [*VIT Exam Key Insight*],
  [First Law of Thermodynamics], [$Delta U = q + w = q - P Delta V$], [Work of expansion: $w = - integral P_"ext" d V$ (IUPAC convention).],
  [Heat Capacity Relation], [$C_p - C_v = R = n R$ (ideal gas)], [$C_p = (partial H / partial T)_P$ and $C_v = (partial U / partial T)_V$.],
  [Carnot Cycle Efficiency], [$eta = (w_"net") / q_"in" = (T_H - T_C) / T_H = 1 - (T_C / T_H)$], [Temperatures $T_H, T_C$ MUST be in Kelvin!],
  [Gibbs Free Energy], [$Delta G = Delta H - T Delta S$], [Spontaneous if $Delta G < 0$, Equilibrium if $Delta G = 0$.],
  [Gibbs-Helmholtz Equation], [$Delta G = Delta H + T [ (partial (Delta G)) / (partial T) ]_P$], [Used to evaluate $Delta H$ from temperature dependence of $Delta G$.],
  [First-Order Rate Equation], [$k = 1/t ln(a / (a - x)) = (2.303) / t log_10 (a / (a - x))$], [$t_(1/2) = (ln 2) / k = (0.693) / k$ (independent of initial conc $a$).],
  [Second-Order Rate Law ($a = b$)], [$k = 1/t (x / (a (a - x)))$], [$t_(1/2) = 1 / (k a)$ (inversely proportional to initial conc).],
  [Arrhenius Equation], [$k = A e^(-E_a / (R T)) arrow.r.double ln(k_2 / k_1) = (E_a) / R (1 / T_1 - 1 / T_2)$], [$R = 8.314 "J" / ("mol" dot "K")$; activation energy $E_a$ is positive.]
)

= Thermodynamics: Laws, Carnot Cycle & Gibbs-Helmholtz

== Terminologies & The First Law of Thermodynamics
Thermodynamic systems are classified as:
- *Open System:* Exchanges both matter and energy with surroundings (e.g., open boiling flask).
- *Closed System:* Exchanges energy but not matter (e.g., sealed cylinder with piston).
- *Isolated System:* Exchanges neither matter nor energy (e.g., insulated thermos flask).

The *Zeroth Law* establishes thermal equilibrium and the concept of temperature: if body A is in thermal equilibrium with body B, and B with C, then A is in thermal equilibrium with C.

The *First Law of Thermodynamics* represents the conservation of energy: the internal energy $Delta U$ of an isolated system is constant:
$ Delta U = q + w $
For an infinitesimal reversible expansion against external pressure $P$:
$ d w = -P d V arrow.r.double d U = d q - P d V $
At constant volume ($d V = 0$), $q_v = Delta U$. At constant pressure, enthalpy is defined as $H = U + P V$, so $q_p = Delta H = Delta U + P Delta V$.

== Heat Capacities & Reversible Adiabatic Expansion
Heat capacity at constant volume is $C_v = (partial U / partial T)_V$ and at constant pressure is $C_p = (partial H / partial T)_P$. For one mole of an ideal gas:
$ H = U + R T arrow.r.double C_p - C_v = (d H) / (d T) - (d U) / (d T) = R $
For a reversible adiabatic process ($q = 0$):
$ P V^gamma = "constant", quad T V^(gamma - 1) = "constant", quad T^gamma P^(1 - gamma) = "constant" $
where adiabatic index $gamma = C_p / C_v$.

== The Carnot Cycle & The Second Law
A Carnot heat engine operates between a hot reservoir at $T_H$ and a cold sink at $T_C$ via four reversible steps:
1. *Isothermal Expansion (A $arrow.r$ B at $T_H$):* $q_H = -w_1 = R T_H ln(V_2 / V_1)$.
2. *Adiabatic Expansion (B $arrow.r$ C from $T_H$ to $T_C$):* $w_2 = C_v (T_C - T_H)$.
3. *Isothermal Compression (C $arrow.r$ D at $T_C$):* $q_C = -w_3 = R T_C ln(V_4 / V_3) = -R T_C ln(V_3 / V_4)$.
4. *Adiabatic Compression (D $arrow.r$ A from $T_C$ to $T_H$):* $w_4 = C_v (T_H - T_C)$.

The net work done per cycle is $w_"net" = q_H + q_C = R (T_H - T_C) ln(V_2 / V_1)$. The thermal efficiency $eta$ is:
$ eta = (w_"net") / q_H = (T_H - T_C) / T_H = 1 - (T_C / T_H) $
*Kelvin-Planck Statement:* It is impossible to construct a cyclic heat engine whose sole effect is to absorb heat from a reservoir and convert it completely into equivalent work.
*Clausius Statement:* Heat cannot spontaneously flow from a colder body to a hotter body without external work.

== Third Law & Gibbs-Helmholtz Equation
The *Third Law of Thermodynamics* states that the entropy of a pure, perfectly crystalline substance is zero at absolute zero temperature ($T = 0 "K"$): $lim_(T arrow.r 0) S = 0$.

Gibbs free energy is defined as $G = H - T S$. Since $d G = V d P - S d T$, at constant pressure:
$ [ (partial G) / (partial T) ]_P = -S $
Substituting $-S$ into $G = H - T S$:
$ G = H + T [ (partial G) / (partial T) ]_P $
For a chemical reaction ($Delta G = G_2 - G_1$):
$ Delta G = Delta H + T [ (partial (Delta G)) / (partial T) ]_P $
Dividing by $T^2$ yields the alternative derivative form frequently tested in VIT exams:
$ [ (partial (Delta G / T)) / (partial T) ]_P = - (Delta H) / T^2 $

= Chemical Kinetics: Rate Laws & Collision Theory

== Integrated Rate Equations & Half-Life
For a reaction $A arrow.r "Products"$:
- *Zero Order:* $- (d [A]) / (d t) = k_0 arrow.r.double [A]_0 - [A]_t = k_0 t$. Half-life: $t_(1/2) = [A]_0 / (2 k_0)$.
- *First Order:* $- (d [A]) / (d t) = k_1 [A] arrow.r.double ln([A]_0 / [A]_t) = k_1 t arrow.r.double k_1 = (2.303) / t log_10 ([A]_0 / [A]_t)$. Half-life: $t_(1/2) = (ln 2) / k_1 = (0.693) / k_1$.
- *Second Order ($2 A arrow.r "Products"$):* $- (d [A]) / (d t) = k_2 [A]^2 arrow.r.double 1 / [A]_t - 1 / [A]_0 = k_2 t$. Half-life: $t_(1/2) = 1 / (k_2 [A]_0)$.

== Collision Theory & The Arrhenius Equation
According to simple collision theory, the reaction rate depends on:
$ "Rate" = Z_(A B) e^(-E_a / (R T)) P $
where $Z_(A B)$ is the collision frequency, $e^(-E_a / (R T))$ is the Maxwell-Boltzmann fraction of collisions possessing energy $E >= E_a$, and $P$ is the steric (orientation) factor.
Svante Arrhenius formalized the temperature dependence of rate constant $k$:
$ k = A e^(-E_a / (R T)) $
Taking natural logarithms:
$ ln k = ln A - (E_a) / (R T) $
Plotting $ln k$ versus $1 / T$ gives a straight line with slope $= - E_a / R$ and intercept $= ln A$.
For two different temperatures $T_1$ and $T_2$:
$ log_10 (k_2 / k_1) = (E_a) / (2.303 R) [ (T_2 - T_1) / (T_1 T_2) ] $

*Effect of Catalyst:* A catalyst lowers the activation energy from $E_a$ to $E_a'$, accelerating both forward and backward rates equally without changing equilibrium constant $K_"eq"$ or $Delta G$.

= Worked VIT Question Bank & Past FAT Problems

#rect(width: 100%, stroke: 0.5pt + rgb("#0369a1"), radius: 3pt, fill: rgb("#f0f9ff"), inset: 8pt)[
  *Problem 1.1 (VIT FAT Past Paper - 10 Marks):*
  A heat engine operates between a boiler at $327 degree.c$ and a condenser at $27 degree.c$. (a) Calculate the maximum theoretical Carnot efficiency. (b) If the engine absorbs $4.5 times 10^5 "J"$ of heat from the boiler per cycle, how much mechanical work is output, and how much heat is rejected to the condenser?
]

*Solution:*
1. Convert temperatures to Kelvin:
   $T_H = 327 + 273.15 = 600.15 "K" approx 600 "K"$
   $T_C = 27 + 273.15 = 300.15 "K" approx 300 "K"$
2. Theoretical efficiency:
   $ eta = (T_H - T_C) / T_H = (600 - 300) / 600 = 300 / 600 = 0.50 quad (50%) $
3. Net mechanical work output:
   $ w_"net" = eta times q_"in" = 0.50 times (4.5 times 10^5 "J") = 2.25 times 10^5 "J" $
4. Heat discharged to the cold reservoir:
   $ q_"out" = q_"in" - w_"net" = 4.5 times 10^5 - 2.25 times 10^5 = 2.25 times 10^5 "J" $

#rect(width: 100%, stroke: 0.5pt + rgb("#0369a1"), radius: 3pt, fill: rgb("#f0f9ff"), inset: 8pt)[
  *Problem 1.2 (VIT Question Bank Q14 - 10 Marks):*
  The rate constant of a first-order chemical reaction is $1.5 times 10^(-3) "s"^(-1)$ at $300 "K"$ and increases to $6.0 times 10^(-3) "s"^(-1)$ at $320 "K"$. (a) Determine the activation energy $E_a$ of the reaction. (b) Find the rate constant at $350 "K"$. ($R = 8.314 "J" / ("mol" dot "K")$).
]

*Solution:*
1. Apply the two-temperature Arrhenius relation:
   $ ln(k_2 / k_1) = (E_a) / R [ (T_2 - T_1) / (T_1 T_2) ] $
   $ ln((6.0 times 10^(-3)) / (1.5 times 10^(-3))) = ln(4) = 1.3863 $
   $ (T_2 - T_1) / (T_1 T_2) = (320 - 300) / (300 times 320) = 20 / 96000 = 2.0833 times 10^(-4) "K"^(-1) $
2. Calculate $E_a$:
   $ E_a = (1.3863 times 8.314) / (2.0833 times 10^(-4)) = (11.5257) / (2.0833 times 10^(-4)) = 55323 "J/mol" = 55.32 "kJ/mol" $
3. Calculate $k$ at $T_3 = 350 "K"$:
   $ ln(k_3 / k_1) = (55323) / (8.314) [ (350 - 300) / (300 times 350) ] = 6654.2 times (50 / 105000) = 6654.2 times 4.7619 times 10^(-4) = 3.1687 $
   $ k_3 / k_1 = e^(3.1687) = 23.777 arrow.r.double k_3 = 23.777 times 1.5 times 10^(-3) = 3.57 times 10^(-2) "s"^(-1) $
"""

compile_typ("Chemistry_MOD-1", mod1_typ)
