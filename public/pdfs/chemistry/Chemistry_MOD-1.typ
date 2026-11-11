#set page(
  paper: "a4",
  margin: (top: 2cm, bottom: 2cm, left: 2.2cm, right: 2.2cm),
  header: context {
    if here().page() > 1 {
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8pt, fill: rgb("#475569"), weight: "bold")[VIT Applied Chemistry (BACHY105) --- Module 1: Thermodynamics & Chemical Kinetics]],
        align(right)[#text(size: 8pt, fill: rgb("#475569"), style: "italic")[Comprehensive Study Textbook & Exam Guide]]
      )
      line(length: 100%, stroke: 0.5pt + rgb("#cbd5e1"))
    }
  },
  footer: context {
    grid(
      columns: (1fr, 1fr),
      align(left)[#text(size: 8pt, fill: rgb("#94a3b8"))[Department of Chemistry, School of Advanced Sciences (SAS)]],
      align(right)[#text(size: 8pt, fill: rgb("#64748b"), weight: "bold")[Page #here().page()]]
    )
  }
)
#set text(font: "New Computer Modern", size: 10pt, fill: rgb("#0f172a"))
#set par(justify: true, leading: 0.78em)

#align(center)[
  #text(size: 9pt, weight: "bold", fill: rgb("#475569"), tracking: 1.5pt)[VELLORE INSTITUTE OF TECHNOLOGY --- APPLIED CHEMISTRY (BACHY105)] \
  #v(1.5mm)
  #text(size: 16pt, weight: "bold", fill: rgb("#1e3a8a"))[MODULE 1: CHEMICAL THERMODYNAMICS AND KINETICS] \
  #v(1mm)
  #text(size: 10.5pt, weight: "bold", fill: rgb("#b91c1c"))[Complete Unabridged Course Notes, Derivations, Diagrams & Topic-Wise CAT/FAT Solved Problems] \
  #v(1mm)
  #text(size: 8.5pt, fill: rgb("#64748b"))[Fully Aligned with Official VIT Faculty Lecture Decks (58 Slides), Department Question Bank, and Past FAT Papers (CO: 1)]
]

#v(2mm)

#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.8pt + rgb("#cbd5e1"), radius: 4pt, inset: 8pt)[
  #text(weight: "bold", fill: rgb("#0f172a"), size: 9pt)[Module 1 Detailed Syllabus Breakdown (100% Complete Coverage):] \
  #v(1mm)
  #text(size: 8.5pt, fill: rgb("#334155"))[
    *Part A: Thermodynamics:* Terminologies (Systems, Surroundings, Boundaries, State/Path Functions), Zeroth Law & Applications, First Law, Enthalpy & Heat Capacity ($C_p, C_v$), Mayer's Relation Derivation, Work done in Isothermal, Adiabatic, Isobaric, and Isochoric processes, Fire Extinguisher Effect, Second Law (Kelvin-Planck & Clausius statements), Entropy ($Delta S$ in reversible/irreversible processes), Carnot Cycle & Thermal Efficiency Derivation, Refrigerator COP, Free Energy (Helmholtz $A$ and Gibbs $G$), Gibbs-Helmholtz Equation Derivation, Spontaneity Criteria, Third Law of Thermodynamics & Residual Entropy. \
    *Part B: Chemical Kinetics:* Reaction Rates, Differential Rate Expressions, Order vs. Molecularity, Integrated Rate Equations (0th, 1st, 2nd Order), Half-Life Calculations, Rate Plots, Pseudo-First-Order Reactions, Collision Theory & Steric Factor, Activation Energy ($E_a$), Reaction Coordinate Diagrams, Arrhenius Equation & Derivations, Catalysis (Homogeneous vs Heterogeneous, Lowering of $E_a$, Industrial Processes).
  ]
]

#v(3mm)

= PART A: CHEMICAL THERMODYNAMICS

== 1. Basic Terminologies and Fundamental Concepts

Thermodynamics is the branch of physical science dealing with the quantitative relationships between heat, work, and other forms of energy in chemical and physical transformations.

=== 1.1 Thermodynamic Systems, Surroundings, and Boundaries
- *System:* That specific part of the universe selected for thermodynamic study or observation (e.g., reacting chemicals in a flask).
- *Surroundings:* The entire rest of the universe outside the boundaries of the system that can interact with it.
- *Boundary:* The real or imaginary surface separating the system from its surroundings. Boundaries may be:
  - *Rigid or Flexible:* Rigid boundaries cannot move ($Delta V = 0$, no boundary work); flexible boundaries allow volume changes ($Delta V eq.not 0$).
  - *Diathermal or Adiabatic:* Diathermal boundaries permit heat transfer ($d q eq.not 0$); adiabatic boundaries are perfectly thermally insulated ($d q = 0$).
  - *Permeable or Impermeable:* Permeable allows mass flow; impermeable prevents mass transfer.

#table(
  columns: (1.2fr, 1.2fr, 1.2fr, 2.4fr),
  fill: (x, y) => if y == 0 { rgb("#f1f5f9") } else { none },
  stroke: 0.5pt + rgb("#cbd5e1"),
  align: (left, center, center, left),
  [#text(weight: "bold")[System Type]], [#text(weight: "bold")[Mass Exchange?]], [#text(weight: "bold")[Energy Exchange?]], [#text(weight: "bold")[Physical Example]],
  [*Open System*], [Yes ($Delta m eq.not 0$)], [Yes ($Delta E eq.not 0$)], [Open beaker with boiling water; biological cells],
  [*Closed System*], [No ($Delta m = 0$)], [Yes ($Delta E eq.not 0$)], [Gas in a closed cylinder with movable piston; sealed beverage can],
  [*Isolated System*], [No ($Delta m = 0$)], [No ($Delta E = 0$)], [Liquid in a perfectly insulated vacuum Dewar flask; the Universe as a whole]
)

=== 1.2 State Functions vs. Path Functions
- *State Functions (Variables of State):* Properties that depend solely on the current thermodynamic state of the system, independent of the path or sequence of steps taken to reach that state.
  - Examples: Pressure ($P$), Volume ($V$), Temperature ($T$), Internal Energy ($U$), Enthalpy ($H$), Entropy ($S$), Gibbs Free Energy ($G$).
  - Mathematical property: Cyclic integral is zero: $integral.cont d X = 0$; change is $Delta X = X_"final" - X_"initial"$.
- *Path Functions:* Quantities whose magnitudes depend strictly on the particular path or mechanism followed during the transition.
  - Examples: Heat absorbed or evolved ($q$), Work performed ($w$).
  - Mathematical property: Inexact differentials: $integral.cont d q eq.not 0$, $integral.cont d w eq.not 0$.

=== 1.3 Intensive vs. Extensive Properties
- *Intensive Properties:* Values are independent of the total mass, size, or quantity of matter in the system.
  - Examples: Temperature ($T$), Pressure ($P$), Density ($rho = m/V$), Refractive index, Boiling pintegral.cont, Viscosity, Surface tension, Molar heat capacity ($C_m$).
- *Extensive Properties:* Values are directly additive and proportional to the total mass or quantity of matter in the system.
  - Examples: Mass ($m$), Volume ($V$), Total Internal Energy ($U$), Enthalpy ($H$), Entropy ($S$), Heat capacity ($C$).
  - *Key Rule:* The ratio of any two extensive properties is an intensive property (e.g., $m / V = "Density"$).

=== 1.4 Thermodynamic Processes
- *Isothermal Process:* Conducted at strictly constant temperature ($d T = 0, Delta T = 0$). For an ideal gas, $Delta U = 0$ and $Delta H = 0$.
- *Adiabatic Process:* Perfectly thermally insulated system where no heat enters or leaves ($d q = 0, q = 0$).
- *Isobaric Process:* Carried out at constant pressure ($d P = 0, Delta P = 0$). Work done is $w = -P Delta V$.
- *Isochoric Process:* Carried out at constant volume ($d V = 0, Delta V = 0$). Expansion work is zero ($w = 0$).
- *Cyclic Process:* System undergoes a series of operations and returns exactly to its initial state ($Delta U = 0, Delta H = 0$).

=== 1.5 Reversible vs. Irreversible Processes
#table(
  columns: (2fr, 2.5fr, 2.5fr),
  fill: (x, y) => if y == 0 { rgb("#f1f5f9") } else { none },
  stroke: 0.5pt + rgb("#cbd5e1"),
  align: (left, left, left),
  [#text(weight: "bold")[Parameter]], [#text(weight: "bold")[Reversible Process]], [#text(weight: "bold")[Irreversible Process]],
  [*Driving Force vs Opposing Force*], [Driving force exceeds opposing force by an infinitesimal amount ($d P$).], [Driving force is significantly greater than opposing force ($Delta P >> 0$).],
  [*Equilibrium*], [Thermodynamic equilibrium is maintained at every intermediate stage.], [Equilibrium exists only at the initial and final states.],
  [*Time Required*], [Proceeds infinitely slowly; takes infinite time to reach completion.], [Proceeds at a measurable, finite speed.],
  [*Work Obtained*], [Yields the maximum possible expansion work ($w_"max"$).], [Yields substantially less work due to dissipative losses (friction, turbulence).],
  [*Direction Reversal*], [Can be reversed at any pintegral.cont by an infinitesimal change in external conditions.], [Cannot be reversed without leaving permanent changes in the surroundings.],
  [*Natural Occurrence*], [Ideal, hypothetical construct; cannot be fully realized in practice.], [All real, spontaneous natural processes are strictly irreversible.]
)

#v(2mm)

#rect(width: 100%, fill: rgb("#eff6ff"), stroke: 1pt + rgb("#3b82f6"), radius: 4pt, inset: 8pt)[
  #text(weight: "bold", fill: rgb("#1e40af"))[[CAT-1 Exam Question --- 5 Marks]] \
  #text(weight: "bold")[Question:] Differentiate between reversible and irreversible processes with at least five distinct comparative pintegral.conts and suitable examples. \
  #text(weight: "bold", fill: rgb("#166534"))[Model Answer Breakdown:]
  1. *Definition & Force:* In reversible, $P_"ext" = P_"int" plus.minus d P$ (driving and opposing forces differ infinitesimally). In irreversible, $P_"ext" << P_"int"$ or $P_"ext" >> P_"int"$. (1 Mark)
  2. *Equilibrium State:* Reversible processes pass through continuous quasi-static equilibrium states; irreversible processes do not. (1 Mark)
  3. *Speed:* Reversible takes infinite time; irreversible occurs in finite time. (1 Mark)
  4. *Work Output:* Reversible expansion produces maximum work ($|w_"rev"| > |w_"irrev"|$). (1 Mark)
  5. *Examples:* Reversible: Frictionless piston expansion with infinitesimal sand grain removal. Irreversible: Free expansion of gas into a vacuum, heat flow from hot to cold body, neutralization of strong acid and strong base. (1 Mark)
]

#v(3mm)

== 2. The Zeroth Law of Thermodynamics

#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.8pt + rgb("#94a3b8"), radius: 4pt, inset: 7pt)[
  *Formal Statement of Zeroth Law:* \
  "If two physical bodies (A and B) are each in thermal equilibrium with a third body (C), then they are in mutual thermal equilibrium with each other."
]

- *Concept of Thermal Equilibrium:* Two systems are in thermal equilibrium when no net thermal energy flows between them when placed in diathermal contact.
- *Physical Significance:* The Zeroth Law introduces the concept and objective definition of *Temperature* as a thermodynamic scalar state variable. If $T_A = T_C$ and $T_B = T_C$, then $T_A = T_B$.
- *Industrial & Practical Applications:*
  1. *Temperature Measurement (Thermometry):* A thermometer acts as "Body C". When placed in contact with system A, it reaches equilibrium, establishing a reading. When placed in system B and shows the same reading, $T_A = T_B$.
  2. *Calibration Standards:* Used to calibrate clinical thermometers, thermocouples, resistance temperature detectors (RTDs), and optical pyrometers against standard fixed pintegral.conts (e.g., the triple pintegral.cont of water at $273.16 "K"$, $0.01 degree "C"$, and $611.65 "Pa"$).

#v(3mm)

== 3. The First Law of Thermodynamics and Enthalpy

#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.8pt + rgb("#94a3b8"), radius: 4pt, inset: 7pt)[
  *Formal Statement of First Law (Conservation of Energy):* \
  "Energy can neither be created nor destroyed; it can only be transformed from one form to another. The total energy of an isolated system remains strictly constant."
]

=== 3.1 Mathematical Formulation and Sign Conventions (IUPAC)
$ Delta U = q + w $
where:
- $Delta U = U_2 - U_1$ is the change in internal energy (State Function, in Joules).
- $q$ is heat absorbed by the system ($q > 0$: endothermic; $q < 0$: exothermic).
- $w$ is work done on the system ($w > 0$: compression; $w < 0$: expansion).
- For an infinitesimal change: $d U = d q + d w = d q - P_"ext" d V$.

=== 3.2 Enthalpy ($H$)
Enthalpy represents the total heat content of a thermodynamic system at constant pressure, defined as:
$ H = U + P V $
Taking the differential: $d H = d U + P d V + V d P$.
At constant pressure ($d P = 0$):
$ d H = d U + P d V $
From the First Law, $d U = d q - P d V$, hence:
$ d H = (d q - P d V) + P d V = d q_p $
*Key Theorem:* The heat exchanged at constant pressure is equal to the change in enthalpy ($q_p = Delta H$), whereas the heat exchanged at constant volume is equal to the change in internal energy ($q_v = Delta U$).

=== 3.3 Molar Heat Capacities ($C_p$ and $C_v$)
- *Heat Capacity ($C$):* The quantity of heat required to raise the temperature of a system by 1 Kelvin: $C = d q / d T$.
- *At Constant Volume ($C_v$):* Since $d q_v = d U$,
  $ C_v = (frac(partial U, partial T))_V $
- *At Constant Pressure ($C_p$):* Since $d q_p = d H$,
  $ C_p = (frac(partial H, partial T))_P $

=== 3.4 Derivation of Mayer's Relation: $C_p - C_v = R$
For 1 mole of an ideal gas:
1. By definition, enthalpy is: $H = U + P V$.
2. For an ideal gas, the equation of state is: $P V = R T$.
3. Substituting $P V = R T$:
   $ H = U + R T $
4. Differentiating both sides with respect to temperature $T$ at constant pressure:
   $ (frac(partial H, partial T))_P = (frac(partial U, partial T))_P + R $
5. For an ideal gas, internal energy $U$ depends solely on temperature (Joule's Law: $(partial U / partial V)_T = 0$), so $(partial U / partial T)_P = (partial U / partial T)_V = C_v$.
6. Since $(partial H / partial T)_P = C_p$, substitution gives:
   $ C_p = C_v + R ==> C_p - C_v = R $

*Physical Reason why $C_p > C_v$:* \
At constant volume, all absorbed heat is utilized exclusively to increase internal energy ($Delta U$) and raise temperature. At constant pressure, the gas expands against external atmospheric pressure; thus, absorbed heat must not only raise the internal energy ($Delta U$) but also perform external $P Delta V$ work. Hence, extra heat equivalent to $R$ is required per mole per Kelvin.

#v(2mm)

#rect(width: 100%, fill: rgb("#eff6ff"), stroke: 1pt + rgb("#3b82f6"), radius: 4pt, inset: 8pt)[
  #text(weight: "bold", fill: rgb("#1e40af"))[[CAT-1 / FAT Exam Derivation --- 5 Marks]] \
  #text(weight: "bold")[Question:] Prove that for 1 mole of an ideal gas, $C_p - C_v = R$. Explain why the molar heat capacity at constant pressure is always greater than that at constant volume. \
  #text(weight: "bold", fill: rgb("#166534"))[Step-by-Step Model Scoring Guide:]
  - State definitions $H = U + P V$ and $P V = R T$: (1 Mark)
  - Substitute to obtain $H = U + R T$: (1 Mark)
  - Differentiate with respect to $T$ at constant $P$ to yield $(partial H / partial T)_P = (partial U / partial T)_P + R$: (1 Mark)
  - Identify $C_p = (partial H / partial T)_P$ and apply Joule's law $(partial U / partial T)_P = C_v$: (1 Mark)
  - Conclude $C_p - C_v = R$ and provide physical justification regarding expansion work: (1 Mark)
]

#v(3mm)

== 4. Application of First Law to Expansion Work

=== 4.1 Reversible Isothermal Expansion of an Ideal Gas
For an isothermal process of an ideal gas, $T = "constant" ==> Delta U = 0$.
From the First Law: $q = -w$.
Work done during an expansion from $V_1$ to $V_2$:
$ w_"rev" = - integral_(V_1)^(V_2) P_"ext" d V = - integral_(V_1)^(V_2) (frac(n R T, V)) d V = - n R T ln(frac(V_2, V_1)) $
Converting to base-10 logarithm and using Boyle's Law ($P_1 V_1 = P_2 V_2 ==> V_2 / V_1 = P_1 / P_2$):
$ w_"rev" = - 2.303 n R T log_10(frac(V_2, V_1)) = - 2.303 n R T log_10(frac(P_1, P_2)) $

=== 4.2 Irreversible Isothermal Expansion Against Constant External Pressure
If gas expands suddenly against a constant opposing pressure $P_"ext"$:
$ w_"irrev" = - P_"ext" (V_2 - V_1) = - P_"ext" (frac(n R T, P_2) - frac(n R T, P_1)) $
*Note:* Since $P_"ext" < P_"int"$ during expansion, $|w_"rev"| > |w_"irrev"|$. Reversible work represents the maximum theoretical work.

=== 4.3 Free Expansion into Vacuum ($w_"vacuum" = 0$)
When a gas expands into an evacuated chamber, the external opposing pressure is strictly zero ($P_"ext" = 0$).
$ w = - integral 0 dot d V = 0 $
If the expansion is also adiabatic ($q = 0$), then from First Law $Delta U = q + w = 0$. Since $Delta U = n C_v Delta T = 0$, $Delta T = 0$ (no temperature change for an ideal gas).

=== 4.4 Reversible Adiabatic Expansion
In an adiabatic process, no heat enters or leaves the system: $d q = 0$.
From First Law: $d U = d w = - P d V$.
Since $d U = n C_v d T$, we have:
$ n C_v d T = - (frac(n R T, V)) d V ==> frac(C_v, T) d T = - frac(R, V) d V $
Integrating between states $(T_1, V_1)$ and $(T_2, V_2)$ and setting $gamma = C_p / C_v$ ($R = C_p - C_v$):
$ ln(frac(T_2, T_1)) = - (gamma - 1) ln(frac(V_2, V_1)) ==> T_1 V_1^(gamma - 1) = T_2 V_2^(gamma - 1) $
Substituting $T = P V / n R$:
$ P_1 V_1^gamma = P_2 V_2^gamma = "constant" $
*Work Done in Adiabatic Expansion:*
$ w_"adiabatic" = Delta U = n C_v (T_2 - T_1) = frac(n R (T_2 - T_1), gamma - 1) = frac(P_2 V_2 - P_1 V_1, gamma - 1) $
Since $V_2 > V_1$ in an expansion, $T_2 < T_1$ (temperature drops; the system cools down because it performs boundary work at the expense of its own internal energy).

=== 4.5 Real-World Case Study: The Fire Extinguisher Effect
- Inside a $C O_2$ fire extinguisher, carbon dioxide is stored under high pressure ($approx 55 - 60 "bar"$) in liquid-vapor equilibrium.
- When the valve is opened, the gas rushes out through the nozzle into atmospheric pressure ($1 "bar"$).
- This expansion occurs so rapidly that heat exchange with the surrounding air is negligible ($d q approx 0$, adiabatic expansion).
- The gas performs extensive mechanical work pushing against atmospheric pressure at the expense of its own internal kinetic energy.
- The sudden temperature plunge ($Delta T << 0$) drops the temperature well below the sublimation pintegral.cont ($-78.5 degree "C"$), immediately converting the gaseous $C O_2$ into solid dry ice snow flakes, creating an effective cooling and oxygen-displacing blanket.

#v(2mm)

#rect(width: 100%, fill: rgb("#eff6ff"), stroke: 1pt + rgb("#3b82f6"), radius: 4pt, inset: 8pt)[
  #text(weight: "bold", fill: rgb("#1e40af"))[[CAT-1 Numerical Problem --- 5 Marks]] \
  #text(weight: "bold")[Problem:] 2 moles of an ideal gas at $300 "K"$ and $10 "atm"$ expand isothermally and reversibly to a final pressure of $2 "atm"$. Calculate (i) the work done ($w$), (ii) heat absorbed ($q$), and (iii) change in internal energy ($Delta U$). ($R = 8.314 "J K"^(-1) "mol"^(-1)$). \
  #text(weight: "bold", fill: rgb("#166534"))[Step-by-Step Solution:]
  1. *Change in Internal Energy ($Delta U$):* For an isothermal process of an ideal gas, $Delta T = 0$, so:
     $ Delta U = n C_v Delta T = bold(0 "J") $
  2. *Reversible Work Done ($w$):*
     $ w = - 2.303 n R T log_10(frac(P_1, P_2)) $
     $ w = - 2.303 times 2 times 8.314 times 300 times log_10(frac(10, 2)) $
     $ w = - 11488.3 times log_10(5) = - 11488.3 times 0.69897 = bold(- 8030.0 "J" = - 8.03 "kJ") $
     *(Negative sign indicates work is done BY the system on surroundings).*
  3. *Heat Absorbed ($q$):* From First Law: $Delta U = q + w ==> q = Delta U - w = 0 - (- 8030 "J") = bold(+ 8030 "J" = + 8.03 "kJ")$.
]

#v(3mm)

== 5. The Second Law of Thermodynamics and Entropy

=== 5.1 Limitations of the First Law
The First Law states that energy is conserved in any process, but it fails to answer:
1. *Direction of Spontaneity:* Why heat flows spontaneously from a hot to a cold body, but never spontaneously from cold to hot.
2. *Completeness of Conversion:* Why mechanical work can be completely converted into heat (e.g., via friction), but heat cannot be completely converted into mechanical work without leaving changes in the surroundings.

=== 5.2 Classical Statements of the Second Law
1. *Kelvin-Planck Statement:* "It is impossible for any cyclic device to absorb heat from a single thermal reservoir and convert it completely into equivalent mechanical work without rejecting some waste heat to a lower-temperature sink." (A 100% efficient heat engine is impossible).
2. *Clausius Statement:* "It is impossible to construct a cyclic machine whose sole effect is the transfer of heat from a cooler body to a hotter body without an input of external mechanical work." (Heat cannot spontaneously flow uphill).

=== 5.3 The Concept of Entropy ($S$)
Entropy is a thermodynamic state function that quantifies the degree of molecular disorder, randomness, or thermal energy dispersal in a system.
For a reversible process at absolute temperature $T$:
$ d S = frac(d q_"rev", T) $
- *Units:* $"J K"^(-1)$ or $"J K"^(-1) "mol"^(-1)$ (molar entropy).

=== 5.4 Clausius Inequality and Entropy Changes
- For any cyclic process:
  $ integral.cont frac(d q, T) lt.eq 0 quad ("=" thin "reversible," thin "<" thin "irreversible") $
- *For an isolated system ($d q = 0$):*
  $ d S_"isolated" gt.eq 0 $
- *Total Entropy Change of the Universe ($Delta S_"total"$):*
  $ Delta S_"total" = Delta S_"system" + Delta S_"surroundings" $
  - Reversible Process: $Delta S_"total" = 0$.
  - Spontaneous (Irreversible) Process: $Delta S_"total" > 0$.
  - Impossible Process: $Delta S_"total" < 0$.

=== 5.5 Entropy Change in Isothermal Expansion of a Perfect Gas
For an isothermal expansion from $V_1$ to $V_2$ at temperature $T$:
1. *System Entropy Change:*
   Since $d q_"rev" = - d w_"rev" = P d V = (n R T / V) d V$:
   $ Delta S_"sys" = integral_(V_1)^(V_2) frac(d q_"rev", T) = integral_(V_1)^(V_2) frac(n R, V) d V = n R ln(frac(V_2, V_1)) $
2. *Surroundings Entropy Change (Irreversible expansion against $P_"ext"$):*
   $Delta S_"surr" = - q_"actual" / T = - P_"ext"(V_2 - V_1) / T$.
3. *Free Expansion ($P_"ext" = 0$):*
   $q = 0 ==> Delta S_"surr" = 0$.
   $Delta S_"total" = Delta S_"sys" + Delta S_"surr" = n R ln(V_2 / V_1) + 0 > 0$ (Confirms spontaneity).

#v(3mm)

== 6. The Carnot Cycle and Heat Engines

A heat engine is a thermodynamic device that cyclically absorbs thermal energy from a high-temperature source, converts a fraction into mechanical work, and rejects the remainder to a low-temperature sink.

=== 6.1 Architecture and 4-Stroke Cycle
The Carnot cycle consists of 4 reversible operations using 1 mole of an ideal gas inside a cylinder fitted with a frictionless, non-conducting piston:

#rect(width: 100%, fill: rgb("#fafafa"), stroke: 0.8pt + rgb("#64748b"), radius: 4pt, inset: 8pt)[
  *Carnot Engine PV Indicator Diagram (Schematic Representation):* \
  #align(center)[
    ```
    Pressure (P)
        ^
        |     A (P1, V1, Th)
        |       *
        |        \  Stroke 1: Isothermal Expansion at Th (q_h absorbed)
        |         \
        |          * B (P2, V2, Th)
        |           \
        |            \  Stroke 2: Reversible Adiabatic Expansion (q = 0, Th -> Tc)
        |             \
        |              * C (P3, V3, Tc)
        |             /
        |   Stroke 4 /  Stroke 3: Isothermal Compression at Tc (q_c rejected)
        |   Adiabatic/
        |  Comp.    * D (P4, V4, Tc)
        |
        +----------------------------------------------------> Volume (V)
    ```
  ]
  *Stroke 1 (Curve AB):* Reversible Isothermal Expansion at source temperature $T_h$.
  - Heat absorbed from source: $q_h = - w_1 = R T_h ln(V_2 / V_1)$.
  *Stroke 2 (Curve BC):* Reversible Adiabatic Expansion from $T_h$ to $T_c$.
  - Heat exchange: $q = 0$. Temperature drops to $T_c$. Work done by gas: $w_2 = C_v (T_c - T_h)$.
  *Stroke 3 (Curve CD):* Reversible Isothermal Compression at sink temperature $T_c$.
  - Heat rejected to sink: $q_c = - w_3 = - R T_c ln(V_3 / V_4)$. Work done on gas: $w_3 = - R T_c ln(V_3 / V_4)$.
  *Stroke 4 (Curve DA):* Reversible Adiabatic Compression restoring initial state $(P_1, V_1, T_h)$.
  - Heat exchange: $q = 0$. Work done on gas: $w_4 = C_v (T_h - T_c)$.
]

=== 6.2 Net Cyclic Work and Efficiency Derivation
Total net work done by the engine in one complete cycle:
$ w_"net" = w_1 + w_2 + w_3 + w_4 $
Notice that $w_2 + w_4 = C_v (T_c - T_h) + C_v (T_h - T_c) = 0$.
Therefore:
$ w_"net" = - R T_h ln(frac(V_2, V_1)) - R T_c ln(frac(V_4, V_3)) $
From adiabatic relations for curves BC and DA:
$ T_h V_2^(gamma - 1) = T_c V_3^(gamma - 1) quad "and" quad T_h V_1^(gamma - 1) = T_c V_4^(gamma - 1) $
Dividing the two equations:
$ (frac(V_2, V_1))^(gamma - 1) = (frac(V_3, V_4))^(gamma - 1) ==> frac(V_2, V_1) = frac(V_3, V_4) $
Substituting into the work equation:
$ w_"net" = - R (T_h - T_c) ln(frac(V_2, V_1)) $
The thermal efficiency $eta$ is defined as the fraction of absorbed heat converted into useful work:
$ eta = frac(|w_"net"|, q_h) = frac(R (T_h - T_c) ln(V_2 / V_1), R T_h ln(V_2 / V_1)) = frac(T_h - T_c, T_h) = 1 - frac(T_c, T_h) $

=== 6.3 Key Thermodynamic Deductions from Carnot Efficiency
1. *Temperature Limit:* Since absolute zero ($T_c = 0 "K"$) is unattainable by Third Law, $eta < 1$ (100% efficiency is physically impossible).
2. *Working Substance Independence:* The efficiency depends strictly on the operating temperatures of the hot source ($T_h$) and cold sink ($T_c$), completely independent of the working substance (Carnot's Theorem).
3. *Coefficient of Performance (COP) for Refrigerators and Heat Pumps:*
   - *Refrigerator COP ($beta$):* Measures cooling efficiency:
     $ "COP"_"ref" = frac(q_c, |w_"net"|) = frac(T_c, T_h - T_c) $
   - *Heat Pump COP:* Measures heating efficiency:
     $ "COP"_"HP" = frac(q_h, |w_"net"|) = frac(T_h, T_h - T_c) = "COP"_"ref" + 1 $

#v(2mm)

#rect(width: 100%, fill: rgb("#eff6ff"), stroke: 1pt + rgb("#3b82f6"), radius: 4pt, inset: 8pt)[
  #text(weight: "bold", fill: rgb("#1e40af"))[[FAT Comprehensive 10-Mark Exam Question]] \
  #text(weight: "bold")[Question:] With the aid of a neat PV indicator diagram, describe the four stages of a Carnot cycle and derive the expression for its thermal efficiency. A Carnot heat engine operates between $800 "K"$ and $300 "K"$. If it absorbs $2400 "J"$ of heat from the source per cycle, calculate: (i) Thermal efficiency, (ii) Work done per cycle, and (iii) Heat rejected to the sink. \
  #text(weight: "bold", fill: rgb("#166534"))[Step-by-Step Scoring Solution:]
  1. *Diagram & 4 Stages Description:* Draw PV curves AB, BC, CD, DA. Explain strokes 1 to 4 with heat and work expressions. (4 Marks)
  2. *Efficiency Derivation:* Derive $w_"net" = -R(T_h - T_c)ln(V_2/V_1)$ and $eta = (T_h - T_c)/T_h$. (3 Marks)
  3. *Numerical Calculation:* (3 Marks)
     - $eta = 1 - T_c / T_h = 1 - 300 / 800 = 1 - 0.375 = bold(0.625 quad (62.5%))$.
     - $|w_"net"| = eta times q_h = 0.625 times 2400 "J" = bold(1500 "J")$.
     - $q_c = q_h - |w_"net"| = 2400 - 1500 = bold(900 "J")$.
]

#v(3mm)

== 7. Free Energy and Chemical Spontaneity

=== 7.1 Helmholtz Free Energy ($A$) and Gibbs Free Energy ($G$)
- *Helmholtz Free Energy ($A = U - T S$):* Measures maximum total work obtainable from a system in a reversible isothermal process ($w_"max" = - Delta A$).
- *Gibbs Free Energy ($G = H - T S$):* Measures maximum non-expansion (useful electrical/chemical) work obtainable at constant temperature and pressure:
  $ w_"useful" = - Delta G $

=== 7.2 Derivation of the Gibbs-Helmholtz Equation
By definition: $G = H - T S$.
Taking the total differential:
$ d G = d H - T d S - S d T $
Since $H = U + P V$, $d H = d U + P d V + V d P$.
From First Law, $d U = d q - P d V = T d S - P d V$ (for a reversible process).
Substituting into $d H$: $d H = T d S + V d P$.
Therefore:
$ d G = (T d S + V d P) - T d S - S d T = V d P - S d T $
At constant pressure ($d P = 0$):
$ (frac(partial G, partial T))_P = - S $
For a finite process: $(partial (Delta G) / partial T)_P = - Delta S$.
Substituting $- Delta S = (Delta G - Delta H) / T$ yields the standard *Gibbs-Helmholtz Equation:*
$ Delta G = Delta H + T (frac(partial (Delta G), partial T))_P $
Or in its equivalent derivative quotient form:
$ [frac(partial, partial T) (frac(Delta G, T))]_P = - frac(Delta H, T^2) $

=== 7.3 Spontaneity Criteria and the 4 Thermodynamic Regimes
Under constant temperature and pressure:
$ Delta G = Delta H - T Delta S $
- *Spontaneous Reaction:* $Delta G < 0$ (Exergonic process; system releases free energy).
- *Equilibrium State:* $Delta G = 0$ (No net driving force).
- *Non-Spontaneous Reaction:* $Delta G > 0$ (Endergonic process; forward reaction requires continuous energy input).

#table(
  columns: (1fr, 1fr, 2.5fr, 1.8fr),
  fill: (x, y) => if y == 0 { rgb("#f1f5f9") } else { none },
  stroke: 0.5pt + rgb("#cbd5e1"),
  align: (center, center, left, left),
  [#text(weight: "bold")[$Delta H$]], [#text(weight: "bold")[$Delta S$]], [#text(weight: "bold")[Spontaneity Regime ($Delta G$)]], [#text(weight: "bold")[Example]],
  [$-$ (Exo)], [$+$ (Disorder)], [*Always Spontaneous ($Delta G < 0$)* at all temperatures.], [Combustion of propane; decomposition of $H_2 O_2$],
  [$+$ (Endo)], [$-$ (Order)], [*Always Non-Spontaneous ($Delta G > 0$)* at all temperatures.], [Photosynthesis ($6 C O_2 + 6 H_2 O arrow.r C_6 H_12 O_6 + 6 O_2$)],
  [$-$ (Exo)], [$-$ (Order)], [*Spontaneous at LOW temperatures* ($|Delta H| > |T Delta S|$); non-spontaneous at high $T$.], [Haber synthesis ($N_2 + 3 H_2 arrow.r 2 N H_3$); freezing of water],
  [$+$ (Endo)], [$+$ (Disorder)], [*Spontaneous at HIGH temperatures* ($|T Delta S| > |Delta H|$); non-spontaneous at low $T$.], [Thermal decomposition of $C a C O_3$; vaporization of water]
)

*Crossover Equilibrium Temperature ($T_"eq"$):* \
When $Delta G = 0$:
$ 0 = Delta H - T_"eq" Delta S ==> bold(T_"eq" = frac(Delta H, Delta S)) $

#v(3mm)

== 8. The Third Law of Thermodynamics and Residual Entropy

#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.8pt + rgb("#94a3b8"), radius: 4pt, inset: 7pt)[
  *Third Law (Nernst Heat Theorem / Planck Statement):* \
  "The entropy of every pure, perfectly crystalline substance approaches zero as the absolute temperature approaches zero Kelvin ($0 "K"$):"
  $ lim_(T arrow.r 0) S = 0 $
]

=== 8.1 Determination of Absolute Entropies
Because the absolute entropy is zero at $0 "K"$, the absolute molar entropy $S_T$ of a substance at any temperature $T$ can be directly calculated by integrating its heat capacity:
$ S_T = integral_0^T frac(C_p, T) d T = integral_0^T C_p d (ln T) $
If phase transitions occur between $0 "K"$ and $T$, latent heat terms ($Delta H_"trans" / T_"trans"$) are added.

=== 8.2 Residual Entropy
A pure substance that does not form a perfect crystal at $0 "K"$ retains a non-zero entropy called *residual entropy*, caused by structural or orientational disorder frozen into the crystal lattice:
$ S_"residual" = k_B ln Omega $
where $k_B$ is Boltzmann's constant and $Omega$ is the number of accessible microstates.
- *Carbon Monoxide ($C O$):* In the solid lattice, dipole moment is very small ($0.11 "D"$). Dipoles freeze in random $C-O$ and $O-C$ orientations ($Omega = 2^N$), giving:
  $ S_"residual" = R ln 2 approx bold(5.76 "J K"^(-1) "mol"^(-1)) $
- *Nitrous Oxide ($N_2 O$):* Linear molecule freezes randomly as $N-N-O$ or $O-N-N$ ($S_"residual" approx 5.8 "J K"^(-1) "mol"^(-1)$).
- *Water Ice ($H_2 O$):* Residual entropy arises from hydrogen bonding arrangement disorder (Pauling calculated $S_"residual" = R ln(3/2) approx bold(3.37 "J K"^(-1) "mol"^(-1))$).

#v(4mm)

= PART B: CHEMICAL KINETICS

== 9. Reaction Rates, Rate Laws, Order, and Molecularity

Chemical kinetics investigates the speeds or rates of chemical reactions, the factors influencing these rates, and the molecular mechanisms involved.

=== 9.1 Rate of Reaction
For a general reaction: $a A + b B arrow.r c C + d D$
The instantaneous rate of reaction is defined as:
$ "Rate" = - frac(1, a) frac(d [A], d t) = - frac(1, b) frac(d [B], d t) = + frac(1, c) frac(d [C], d t) = + frac(1, d) frac(d [D], d t) $
- *Negative sign:* Reactant concentrations decrease over time.
- *Positive sign:* Product concentrations increase over time.

=== 9.2 The Differential Rate Law
$ "Rate" = k [A]^m [B]^n $
where:
- $k$ is the specific reaction rate constant.
- $m$ is the partial order with respect to reactant A.
- $n$ is the partial order with respect to reactant B.
- $n_"total" = m + n$ is the overall order of the reaction.
*Critical Note:* Reaction orders ($m, n$) are experimentally determined. They CANNOT be deduced from stoichiometric coefficients ($a, b$) of the balanced equation.

=== 9.3 Comprehensive Comparison: Order vs. Molecularity
#table(
  columns: (2fr, 2.5fr, 2.5fr),
  fill: (x, y) => if y == 0 { rgb("#f1f5f9") } else { none },
  stroke: 0.5pt + rgb("#cbd5e1"),
  align: (left, left, left),
  [#text(weight: "bold")[Feature]], [#text(weight: "bold")[Order of Reaction]], [#text(weight: "bold")[Molecularity of Reaction]],
  [*Definition*], [Sum of powers of concentration terms in the experimental rate law.], [Number of reacting species (atoms/ions/molecules) colliding simultaneously in an elementary step.],
  [*Determination*], [Purely experimental quantity; cannot be guessed from stoichiometry.], [Theoretical quantity deduced from the mechanism of an elementary step.],
  [*Values Possible*], [Can be zero, positive, negative, or fractional ($0, 1, 2, 3, 1/2, 3/2$).], [Can ONLY be positive whole integers ($1, 2, 3$). Cannot be zero or fractional.],
  [*Applicability*], [Applies to both elementary and complex multi-step reactions.], [Applies ONLY to individual elementary steps; meaningless for overall complex reactions.],
  [*Pressure/Temp Dependence*], [Can change with experimental temperature, pressure, or concentration.], [Constant and characteristic for a given elementary reaction step.]
)

#v(3mm)

== 10. Integrated Rate Equations and Half-Life Derivations

#table(
  columns: (1fr, 1.8fr, 1.8fr, 1.4fr, 1.5fr),
  fill: (x, y) => if y == 0 { rgb("#f1f5f9") } else { none },
  stroke: 0.5pt + rgb("#cbd5e1"),
  align: (center, left, left, center, left),
  [#text(weight: "bold")[Order]], [#text(weight: "bold")[Differential Law]], [#text(weight: "bold")[Integrated Rate Equation]], [#text(weight: "bold")[Half-Life ($t_(1/2)$)]], [#text(weight: "bold")[Units of $k$]],
  [*0*], [$- d [A]/d t = k$], [$[A]_t = [A]_0 - k t$], [$frac([A]_0, 2 k)$], [$"mol L"^(-1) "s"^(-1)$],
  [*1*], [$- d [A]/d t = k [A]$], [$ln(frac([A]_0, [A]_t)) = k t ==> k = frac(2.303, t) log_10(frac([A]_0, [A]_t))$], [$frac(ln 2, k) = frac(0.693, k)$], [$"s"^(-1)$],
  [*2*], [$- d [A]/d t = k [A]^2$], [$frac(1, [A]_t) = frac(1, [A]_0) + k t$], [$frac(1, k [A]_0)$], [$"L mol"^(-1) "s"^(-1)$]
)

=== 10.1 Step-by-Step Derivation: First-Order Reaction
1. Differential rate expression:
   $ - frac(d [A], d t) = k [A] ==> frac(d [A], [A]) = - k d t $
2. Integrating both sides between limits $t = 0$ ($[A] = [A]_0$) and $t = t$ ($[A] = [A]_t$):
   $ integral_([A]_0)^([A]_t) frac(d [A], [A]) = - k integral_0^t d t $
   $ [ln [A]]_([A]_0)^([A]_t) = - k t ==> ln [A]_t - ln [A]_0 = - k t $
3. Rearranging into standard logarithmic forms:
   $ ln [A]_t = - k t + ln [A]_0 quad ("Plot of " ln [A]_t " vs " t " is linear with slope " -k) $
   $ k = frac(1, t) ln(frac([A]_0, [A]_t)) = bold(frac(2.303, t) log_10(frac([A]_0, [A]_t))) $
4. *Half-Life ($t_(1/2)$):* Time when $[A]_t = [A]_0 / 2$:
   $ t_(1/2) = frac(2.303, k) log_10(frac([A]_0, [A]_0 / 2)) = frac(2.303, k) log_10(2) = frac(2.303 times 0.30103, k) = bold(frac(0.693, k)) $
   *Crucial Exam Fact:* The half-life of a first-order reaction is completely independent of the initial reactant concentration $[A]_0$.

=== 10.2 Pseudo-First-Order Reactions
A reaction that is bimolecular or second-order overall, but conforms experimentally to first-order kinetics because one of the reactants is present in large stoichiometric excess, keeping its concentration virtually constant.
- *Example 1: Acid Hydrolysis of Methyl Acetate:*
  $ C H_3 C O O C H_3 + H_2 O ("excess") arrow.r^(H^+) C H_3 C O O H + C H_3 O H $
  $"Rate" = k' [C H_3 C O O C H_3] [H_2 O]$. Since $[H_2 O] >> [C H_3 C O O C H_3]$, $[H_2 O] approx "constant"$.
  $"Rate" = k [C H_3 C O O C H_3]$, where $k = k' [H_2 O]$ (pseudo-first-order rate constant).
- *Example 2: Inversion of Cane Sugar:*
  $ C_12 H_22 O_11 + H_2 O ("excess") arrow.r^(H^+) C_6 H_12 O_6 ("glucose") + C_6 H_12 O_6 ("fructose") $

#v(2mm)

#rect(width: 100%, fill: rgb("#eff6ff"), stroke: 1pt + rgb("#3b82f6"), radius: 4pt, inset: 8pt)[
  #text(weight: "bold", fill: rgb("#1e40af"))[[FAT Exam Numerical Problem --- 5 Marks]] \
  #text(weight: "bold")[Problem:] A first-order reaction is 50% complete in 25 minutes at $300 "K"$. Calculate: (i) the specific rate constant $k$, and (ii) the time required for 80% completion of the reaction. \
  #text(weight: "bold", fill: rgb("#166534"))[Step-by-Step Solution:]
  1. *Calculate $k$ from half-life:*
     $ k = frac(0.693, t_(1/2)) = frac(0.693, 25 "min") = bold(0.02772 "min"^(-1) = 4.62 times 10^(-4) "s"^(-1)) $
  2. *Calculate time for 80% completion:*
     When reaction is 80% complete, remaining reactant is $[A]_t = [A]_0 - 0.80 [A]_0 = 0.20 [A]_0$.
     $ t = frac(2.303, k) log_10(frac([A]_0, 0.20 [A]_0)) = frac(2.303, 0.02772) log_10(5) $
     $ t = frac(2.303, 0.02772) times 0.69897 = 83.08 times 0.69897 = bold(58.07 "minutes") $
]

#v(3mm)

== 11. Collision Theory and Reaction Dynamics

=== 11.1 Postulates of Collision Theory
Developed by Max Trautz and William Lewis:
1. Chemical reactions occur as a result of physical collisions between reacting molecules.
2. The rate of reaction is directly proportional to the collision frequency $Z$ (number of collisions per unit volume per unit time).
3. Not all collisions lead to chemical reaction. Only *effective collisions* produce products. An effective collision requires:
   - *Energy Factor (Activation Energy Barrier $E_a$):* Colliding molecules must possess a minimum threshold energy $E_"th"$. Fraction of molecules with $E >= E_a$ is given by Boltzmann factor: $f = e^(-E_a / R T)$.
   - *Orientation Factor (Steric Factor $P$):* Reacting molecules must collide with the proper spatial geometric orientation so that appropriate bonds break and form.
4. *Rate Equation from Collision Theory:*
   $ k = P times Z times e^(- frac(E_a, R T)) $

=== 11.2 Reaction Coordinate Energy Profiles
#align(center)[
  ```
  Potential Energy (E)
      ^                      Transition State (Activated Complex)
      |                             [A...B...C]#
      |                                  /\
      |                                 /  \
      |   Reactants (A + BC)           /    \      E_a(backward)
      |       +----------+            /      \
      |       |          |  E_(a, "fwd") /        \
      |       +----------+          /          \
      |                            /            +----------+ Products (AB + C)
      |                           /             |          |
      |                          /              +----------+
      |                         /
      |                        /    Delta H = E_(a, "fwd") - E_(a, "bwd") < 0 (Exothermic)
      +--------------------------------------------------------------------> Reaction Coordinate
  ```
]

- *Activation Energy ($E_a$):* The minimum excess energy above the ground state that reactant molecules must acquire to form the activated transition state:
  $ E_a = E_"threshold" - E_"reactants" $
- *For an Exothermic Reaction:* $E_"products" < E_"reactants" ==> Delta H = E_(a, "fwd") - E_(a, "bwd") < 0$.
- *For an Endothermic Reaction:* $E_"products" > E_"reactants" ==> Delta H = E_(a, "fwd") - E_(a, "bwd") > 0$.

#v(3mm)

== 12. Effect of Temperature and the Arrhenius Equation

In 1889, Svante Arrhenius formulated the quantitative mathematical relation governing the temperature dependence of reaction rates:
$ k = A e^(- frac(E_a, R T)) $
where:
- $k$ is the reaction rate constant.
- $A$ is the Arrhenius pre-exponential factor (frequency factor, same units as $k$).
- $E_a$ is the activation energy ($"J mol"^(-1)$ or $"kJ mol"^(-1)$).
- $R = 8.314 "J K"^(-1) "mol"^(-1)$ is the universal gas constant.
- $T$ is the absolute temperature in Kelvin.

=== 12.1 Logarithmic Forms and Graphical Determination
Taking natural logarithms of both sides:
$ ln k = ln A - frac(E_a, R T) $
Converting to common logarithm (base 10):
$ log_10 k = log_10 A - frac(E_a, 2.303 R T) $
- *Arrhenius Plot:* A plot of $log_10 k$ against $1/T$ produces a straight line:
  - $"Slope" = - frac(E_a, 2.303 R) ==> bold(E_a = - 2.303 times R times "Slope")$
  - $"Y-intercept" = log_10 A$

=== 12.2 Two-Temperature Formula
Evaluating the Arrhenius equation at two different temperatures $T_1$ and $T_2$ ($T_2 > T_1$) with rate constants $k_1$ and $k_2$:
$ ln k_1 = ln A - frac(E_a, R T_1) quad "and" quad ln k_2 = ln A - frac(E_a, R T_2) $
Subtracting the first equation from the second:
$ ln(frac(k_2, k_1)) = frac(E_a, R) [frac(1, T_1) - frac(1, T_2)] = frac(E_a, R) [frac(T_2 - T_1, T_1 T_2)] $
In common logarithm:
$ bold(log_10(frac(k_2, k_1)) = frac(E_a, 2.303 R) [frac(T_2 - T_1, T_1 T_2)]) $

#v(2mm)

#rect(width: 100%, fill: rgb("#eff6ff"), stroke: 1pt + rgb("#3b82f6"), radius: 4pt, inset: 8pt)[
  #text(weight: "bold", fill: rgb("#1e40af"))[[High-Frequency FAT Exam Numerical Problem --- 10 Marks]] \
  #text(weight: "bold")[Problem:] The rate constant of a reaction is $1.60 times 10^(-3) "s"^(-1)$ at $300 "K"$ and increases to $6.40 times 10^(-3) "s"^(-1)$ at $320 "K"$. Calculate: (i) the activation energy ($E_a$) of the reaction, and (ii) the rate constant at $350 "K"$. ($R = 8.314 "J K"^(-1) "mol"^(-1)$). \
  #text(weight: "bold", fill: rgb("#166534"))[Step-by-Step Model Scoring Solution:]
  1. *Calculate Activation Energy ($E_a$):*
     $ log_10(frac(k_2, k_1)) = frac(E_a, 2.303 times 8.314) [frac(T_2 - T_1, T_1 T_2)] $
     $ log_10(frac(6.40 times 10^(-3), 1.60 times 10^(-3))) = frac(E_a, 19.147) [frac(320 - 300, 300 times 320)] $
     $ log_10(4) = frac(E_a, 19.147) [frac(20, 96000)] ==> 0.60206 = frac(E_a, 19.147) times 2.0833 times 10^(-4) $
     $ E_a = frac(0.60206 times 19.147, 2.0833 times 10^(-4)) = frac(11.5276, 2.0833 times 10^(-4)) = bold(55333 "J mol"^(-1) = 55.33 "kJ mol"^(-1)) $
  2. *Calculate Rate Constant at $T_3 = 350 "K"$ ($k_3$):*
     $ log_10(frac(k_3, k_1)) = frac(55333, 19.147) [frac(350 - 300, 300 times 350)] = 2890.0 times frac(50, 105000) = 2890.0 times 4.7619 times 10^(-4) = 1.3762 $
     $ frac(k_3, k_1) = 10^(1.3762) = 23.78 $
     $ k_3 = 23.78 times k_1 = 23.78 times (1.60 times 10^(-3) "s"^(-1)) = bold(3.80 times 10^(-2) "s"^(-1)) $
]

#v(3mm)

== 13. Catalysis and Mechanism of Rate Enhancement

A catalyst is a chemical substance that increases the rate of a chemical reaction without undergoing any permanent chemical or stoichiometric change itself.

=== 13.1 Mechanism of Catalytic Action
- A catalyst provides an *alternative reaction pathway* with a significantly lower activation energy ($E_a' < E_a$).
- Because the exponential factor in the Arrhenius equation is $e^(-E_a / R T)$, a modest decrease in $E_a$ leads to an exponential increase in the fraction of molecules possessing sufficient kinetic energy to react.
- *Crucial Thermodynamic Invariants:*
  1. A catalyst *does NOT change* the initial reactant energy or final product energy.
  2. Enthalpy change ($Delta H$), Gibbs free energy ($Delta G$), and equilibrium constant ($K_"eq"$) remain strictly unchanged.
  3. A catalyst speeds up both forward and reverse reaction rates by the exact same factor, thereby helping the system achieve dynamic equilibrium faster without altering equilibrium yield.

#align(center)[
  ```
  Potential Energy
      ^                  Uncatalyzed Transition State (E_a)
      |                         /\
      |                        /  \      Catalyzed Transition State (E_a')
      |                       /    \           /\
      |                      /      \         /  \
      |   Reactants         /        \       /    \
      |   [A + B]          /          \     /      \
      |    +----------+   /            \---/        \
      |    |          |  /       Intermediate        +----------+ Products
      |    +----------+ /                             |          | [C + D]
      |                                               +----------+
      +------------------------------------------------------------------> Reaction Coordinate
  ```
]

=== 13.2 Homogeneous vs. Heterogeneous Catalysis
#table(
  columns: (2fr, 2.5fr, 2.5fr),
  fill: (x, y) => if y == 0 { rgb("#f1f5f9") } else { none },
  stroke: 0.5pt + rgb("#cbd5e1"),
  align: (left, left, left),
  [#text(weight: "bold")[Parameter]], [#text(weight: "bold")[Homogeneous Catalysis]], [#text(weight: "bold")[Heterogeneous Catalysis]],
  [*Phase Relationship*], [Catalyst and reactants exist in the same physical phase (all liquid or all gas).], [Catalyst and reactants exist in different physical phases (typically solid catalyst with gaseous or liquid reactants).],
  [*Mechanism*], [Formation of an intermediate coordination complex throughout the bulk solution.], [Surface adsorption (physisorption followed by chemisorption), reaction on active sites, and desorption.],
  [*Industrial Separation*], [Difficult and costly to separate catalyst from reaction products.], [Simple separation via filtration, centrifugation, or fixed-bed reactors.],
  [*Industrial Example 1*], [Gas-phase decomposition of ozone catalyzed by chlorine radicals: $O_3 + C l^dot arrow.r C l O^. + O_2$.], [Haber Process for ammonia synthesis: solid porous Iron promoted with $K_2 O$ and $A l_2 O_3$: $N_2 (g) + 3 H_2 (g) arrow.r^("Fe") 2 N H_3 (g)$.],
  [*Industrial Example 2*], [Acid-catalyzed ester hydrolysis in aqueous solution: $C H_3 C O O R + H_2 O arrow.r^(H^+) C H_3 C O O H + R O H$.], [Contact Process for sulfuric acid: oxidation of $S O_2$ over solid Vanadium pentoxide: $2 S O_2 (g) + O_2 (g) arrow.r^(V_2 O_5) 2 S O_3 (g)$.],
  [*Industrial Example 3*], [Lead Chamber Process: oxidation of $S O_2$ catalyzed by gaseous nitric oxide: $2 S O_2 + O_2 arrow.r^("NO") 2 S O_3$.], [Ostwald Process for nitric acid: oxidation of ammonia over Platinum-Rhodium gauze: $4 N H_3 (g) + 5 O_2 (g) arrow.r^("Pt-Rh") 4 N O (g) + 6 H_2 O (g)$.]
)
