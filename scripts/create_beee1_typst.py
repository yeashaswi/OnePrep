import subprocess
import os

typst_code = """#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.3cm, right: 2.3cm),
  header: context {
    let p = counter(page).get().first()
    if p > 1 [
      #grid(
        columns: (1fr, 1fr),
        align: (left, right),
        text(size: 8pt, fill: rgb(101, 106, 118))[VIT BAEEE101 — Module 1: Electrical Circuits & Power Conversion],
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
  #text(size: 13.5pt, weight: "bold", fill: rgb(139, 0, 0))[MODULE 1: PRINCIPLES OF ELECTRICAL ENGINEERING: CIRCUITS & POWER CONVERSION EQUIPMENT (CO: 1)] \\
  #v(2pt)
  #text(size: 10.5pt, weight: "bold")[Complete Comprehensive Textbook, Circuit Theorems, AC Resonance, Motors, Transformers & Solved VIT FAT Question Bank] \\
  #v(1pt)
  #text(size: 8.5pt, fill: rgb(85, 85, 85))[Aligned with Official VIT BAEEE101 Course Syllabus, Department Question Bank & VIT FAT Examination Patterns]
]

#v(8pt)

#rect(width: 100%, fill: rgb(240, 244, 248), stroke: 1pt + rgb(180, 200, 220), radius: 4pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb(15, 23, 42))[Syllabus Scope & Competency Checklist (Module 1):] \\
  #text(size: 9pt)[
    - *Circuit Fundamentals & Analysis:* Ohm's Law, Kirchhoff's Current Law (KCL), Kirchhoff's Voltage Law (KVL), Mesh Current Analysis, Node Voltage Analysis with independent and dependent sources.
    - *Network Theorems:* Thévenin's Theorem ($V_"th"$, $R_"th"$, load current), Superposition Theorem (independent and dependent source handling, power non-linearity).
    - *Single-Phase AC Circuits:* Series RL, RC, and RLC circuits; sinusoidal phasor representation, complex impedance ($Z = R + j X$), resonance frequency ($f_0 = 1 / (2 pi sqrt(L C))$), Quality factor ($Q$), bandwidth.
    - *Power & Energy in AC Circuits:* Instantaneous power, Active power ($P = V I cos phi$), Reactive power ($Q = V I sin phi$), Apparent power ($S = V I$), Power factor ($cos phi$), power triangle, power factor improvement.
    - *Electrical Safety & Earthing:* Electric shock physiological effects, earthing principles (pipe, plate), Earth Leakage Circuit Breakers (ELCB / RCCB), miniature circuit breakers (MCB).
    - *Electrical Machines:* Principle of operation, construction, EMF equation, and torque of DC Motors; 3-phase Induction Motor operating principle, rotating magnetic field (RMF), synchronous speed, slip ($s = (N_s - N)/N_s$); Brushless DC Motor (BLDC) structure, electronic commutation, Hall sensors.
    - *Power Transformers:* Single-phase transformer principle, core and shell types, EMF equation ($E = 4.44 f N Phi_m$), transformation ratio ($K$), equivalent circuit, losses (core/iron and copper), efficiency ($eta$).
    - *Power Electronics:* DC-DC Buck Converter topology, step-down voltage transfer ratio ($V_o = D V_"in"$), continuous conduction mode (CCM), inductor and capacitor filter design.
  ]
]

#v(10pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[1. Fundamental Circuit Laws & Network Analysis Techniques]

#v(4pt)
=== 1.1 Kirchhoff's Current Law (KCL) & Kirchhoff's Voltage Law (KVL)
Modern electrical engineering begins with the two fundamental conservation laws formulated by Gustav Kirchhoff:
1. *Kirchhoff's Current Law (KCL - Conservation of Electric Charge):* The algebraic sum of all electric currents entering any junction (node) in an electric circuit is identically zero.
$ sum_(k=1)^n I_k = 0 quad ==> quad sum I_"entering" = sum I_"leaving" $
At macroscopic frequencies, charges cannot accumulate indefinitely at a junction; charge accumulation would create an unbounded electric potential gradient.

2. *Kirchhoff's Voltage Law (KVL - Conservation of Energy):* The algebraic sum of all electric potential differences (voltages) around any closed loop or mesh in a circuit is identically zero.
$ sum_(k=1)^m V_k = 0 quad ==> quad sum V_"rises" = sum V_"drops" $
Moving a unit test charge around a closed path in a static or quasi-static electric field returns it to its initial state, meaning the net conservative line integral of the electric field vanishes: $integral.cont bold(E) dot.c d bold(l) = 0$.

=== 1.2 Mesh Current Analysis
Mesh current analysis applies KVL to planar circuits containing $M = B - N + 1$ independent loops (where $B$ is the number of circuit branches and $N$ is the number of essential nodes).
- *Procedure:*
  1. Assign a clockwise circulating current ($I_1, I_2, ..., I_M$) to each fundamental mesh.
  2. For branch shared between mesh $j$ and mesh $k$, the net current flowing in mesh $j$'s reference direction is $(I_j - I_k)$.
  3. Write KVL for each mesh in standard matrix form:
  $ mat(R_(11), -R_(12), dots, -R_(1M); -R_(21), R_(22), dots, -R_(2M); dots.v, dots.v, dots.down, dots.v; -R_(M 1), -R_(M 2), dots, R_(M M)) mat(I_1; I_2; dots.v; I_M) = mat(sum V_(s 1); sum V_(s 2); dots.v; sum V_(s M)) $
  where $R_(j j)$ is the total resistance around mesh $j$ (self-resistance), and $R_(j k)$ is the mutual resistance shared strictly between mesh $j$ and mesh $k$.
  4. *Supermesh:* If an ideal current source is shared between two adjacent meshes, remove the current source to form a supermesh. Apply KVL around the combined outer loop and write an auxiliary constraint equation: $I_"right" - I_"left" = I_"source"$.

=== 1.3 Node Voltage Analysis
Node voltage analysis applies KCL at all essential nodes with respect to an arbitrary reference node (datum/ground, $V_0 = 0" V"$).
- *Procedure:*
  1. Identify all $N$ essential nodes; designate one as the reference node ($0" V"$).
  2. Define node voltages $V_1, V_2, ..., V_(N-1)$ relative to ground.
  3. Formulate matrix admittance equations:
  $ mat(G_(11), -G_(12), dots, -G_(1(N-1)); -G_(21), G_(22), dots, -G_(2(N-1)); dots.v, dots.v, dots.down, dots.v; -G_((N-1)1), -G_((N-1)2), dots, G_((N-1)(N-1))) mat(V_1; V_2; dots.v; V_(N-1)) = mat(sum I_(s 1); sum I_(s 2); dots.v; sum I_(s(N-1))) $
  where $G_(j j)$ is the sum of conductances connected to node $j$, and $G_(j k)$ is the mutual conductance connected directly between node $j$ and node $k$.
  4. *Supernode:* When an ideal voltage source is connected between two non-reference nodes without an intervening series resistance, enclose both nodes in a generalized boundary (supernode). Apply KCL for currents leaving the supernode boundary and write the voltage constraint: $V_a - V_b = V_"source"$.

#v(8pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[2. Network Theorems & Rigorous Solved Procedures]

=== 2.1 Thévenin's Theorem
*Formal Statement:* Any linear, bilateral, two-terminal electrical network containing independent and/or dependent voltage and current sources and linear resistors can be completely replaced at its terminals $(A-B)$ by an equivalent circuit consisting of a single ideal voltage source $V_"th"$ connected in series with an internal equivalent resistance $R_"th"$.
- *Determining $V_"th"$ (Open-Circuit Voltage):*
  Remove the external load resistance $R_L$. Calculate the open-circuit voltage appearing across terminals $A-B$ using standard nodal or mesh analysis:
  $ V_"th" = V_(A B) |_(I_L = 0) $
- *Determining $R_"th"$ (Thévenin Equivalent Resistance):*
  - *Case I (Circuits with Independent Sources Only):* Deactivate all independent sources:
    - Replace ideal independent voltage sources with short circuits ($V_s = 0$).
    - Replace ideal independent current sources with open circuits ($I_s = 0$).
    Calculate the net equivalent resistance seen looking into terminals $A-B$.
  - *Case II (Circuits with Dependent Sources):* Deactivate only independent sources (keep dependent sources active!). Connect an external test source $V_"test"$ (e.g., $1" V"$) across terminals $A-B$, determine the resulting current $I_"test"$ delivered by the test source, and evaluate:
    $ R_"th" = V_"test" / I_"test" quad "or alternately" quad R_"th" = V_"oc" / I_"sc" $
- *Load Current Calculation:* When load resistance $R_L$ is reconnected:
  $ I_L = V_"th" / (R_"th" + R_L) $
- *Maximum Power Transfer Theorem:* Maximum power is transferred from the source network to the load when the load resistance equals the Thévenin resistance:
  $ R_L = R_"th" quad ==> quad P_(L,"max") = V_"th"^2 / (4 R_"th") $

=== 2.2 Superposition Theorem
*Formal Statement:* In any linear, active, bilateral network containing multiple independent energy sources, the net current through or voltage across any element equals the algebraic sum of the individual currents or voltages produced by each independent source acting alone, with all other independent sources deactivated (voltage sources short-circuited, current sources open-circuited).
- *Strict Operational Caveat:*
  - Dependent sources are controlled by circuit variables; they *must never be deactivated*. They remain active throughout each sub-step!
  - *Power is Non-Linear:* Superposition applies *only* to linear variables (voltages and currents). It *does not apply directly to power* because power is quadratic:
  $ P != P_1 + P_2 quad ("since " (I_1 + I_2)^2 R != I_1^2 R + I_2^2 R) $
  To compute power, first superpose the currents $I_"total" = sum I_k$, then calculate $P = I_"total"^2 R$.

#v(8pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[3. Single-Phase AC Circuits, Phasors & Resonance]

=== 3.1 Sinusoidal AC Quantities & Complex Impedance
For a sinusoidal excitation $v(t) = V_m sin(omega t + phi)$, the Root Mean Square (RMS) effective voltage is:
$ V_"rms" = V_m / sqrt(2) approx 0.707 V_m $
In the frequency domain using Steinmetz phasor transform:
- *Resistor:* $bold(Z)_R = R angle 0 degree = R + j 0 Omega$. Voltage and current are in phase ($phi = 0$).
- *Inductor:* $bold(Z)_L = j omega L = omega L angle +90 degree Omega$. Inductive reactance $X_L = omega L = 2 pi f L$. Voltage *leads* current by $90 degree$.
- *Capacitor:* $bold(Z)_C = 1 / (j omega C) = -j / (omega C) = 1 / (omega C) angle -90 degree Omega$. Capacitive reactance $X_C = 1 / (omega C) = 1 / (2 pi f C)$. Current *leads* voltage by $90 degree$ (voltage lags current).

=== 3.2 Series RLC Circuit & Resonance
In a series RLC branch connected to a sinusoidal voltage source $bold(V) = V angle 0 degree$:
$ bold(Z) = R + j (X_L - X_C) = R + j (omega L - 1 / (omega C)) $
The impedance magnitude and phase angle are:
$ |bold(Z)| = sqrt(R^2 + (omega L - 1 / (omega C))^2), quad phi = arctan((omega L - 1 / (omega C)) / R) $

#table(
  columns: (1.5fr, 1.5fr, 2fr, 2fr),
  fill: (x, y) => if y == 0 { rgb(234, 236, 239) } else { none },
  stroke: 0.5pt + rgb(209, 213, 219),
  [Operating Regime], [Condition], [Impedance & Current], [Power Factor],
  [Inductive Dominance ($omega > omega_0$)], [$X_L > X_C$], [$bold(Z) = R + j X_"net"$, Current lags voltage], [Lagging ($0 < cos phi < 1$)],
  [Capacitive Dominance ($omega < omega_0$)], [$X_C > X_L$], [$bold(Z) = R - j X_"net"$, Current leads voltage], [Leading ($0 < cos phi < 1$)],
  [*Resonance Condition ($omega = omega_0$)*], [*$X_L = X_C$*], [*$bold(Z) = R$ (Minimum), $I_0 = V / R$ (Maximum)*], [*Unity ($cos phi = 1.0$)*]
)

- *Resonant Frequency:* Equating $omega_0 L = 1 / (omega_0 C)$ yields:
$ omega_0 = 1 / sqrt(L C) " rad/s" quad ==> quad f_0 = 1 / (2 pi sqrt(L C)) " Hz" $
- *Quality Factor ($Q$-Factor):* Defined as the ratio of reactive power stored to real power dissipated per cycle:
$ Q = (omega_0 L) / R = 1 / (omega_0 C R) = 1 / R sqrt(L / C) $
The voltage magnification across the inductor or capacitor at resonance is $V_L = V_C = Q V_"source"$. High-$Q$ circuits generate dangerous over-voltages across reactive components!
- *Bandwidth ($"BW"$):* The frequency interval between half-power points ($I = I_0 / sqrt(2)$):
$ "BW" = f_2 - f_1 = f_0 / Q = R / (2 pi L) " Hz" $

#v(8pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[4. AC Power Relations & Power Factor Correction]

=== 4.1 The Power Triangle: Real, Reactive & Apparent Power
In alternating current circuits delivering current $I$ at phase displacement $phi$ relative to voltage $V$:
1. *Active (Real) Power ($P$):* The actual rate of energy conversion to mechanical work or heat:
$ P = V I cos phi " Watts (W or kW)" $
2. *Reactive (Quadrature) Power ($Q$):* The rate of alternating energy exchange between magnetic and electric fields of inductors and capacitors and the source without net work done:
$ Q = V I sin phi " Volt-Amperes Reactive (VAR or kVAR)" $
3. *Apparent Power ($S$):* The vector combination of active and reactive power:
$ bold(S) = bold(V) bold(I)^* = P + j Q, quad |bold(S)| = V I = sqrt(P^2 + Q^2) " Volt-Amperes (VA or kVA)" $
4. *Power Factor ($"PF"$):* The ratio of real power converted to apparent power supplied:
$ "PF" = cos phi = P / S = P / sqrt(P^2 + Q^2) = R / |bold(Z)| $

=== 4.2 Power Factor Correction
Industrial inductive loads (induction motors, welders, transformers) operate at lagging power factors ($0.70 - 0.85$ lag), demanding excessive line currents ($I = P / (V cos phi)$). This causes high $I^2 R$ transmission line losses, severe voltage drops ($Delta V = I R$), and utility penalties.
- *Shunt Capacitor Compensation:* A capacitor bank is connected in parallel with the load to supply leading reactive power $Q_C$, reducing the net reactive power drawn from the utility from $Q_1$ to $Q_2$:
$ Q_C = P (tan phi_1 - tan phi_2) $
The required shunt capacitance value per phase at line angular frequency $omega$ is:
$ C = Q_C / (omega V^2) = (P (tan phi_1 - tan phi_2)) / (2 pi f V^2) $

#v(8pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[5. Electrical Safety & Protective Earthing Systems]

=== 5.1 Physiological Effects of Electric Shock
The severity of injury caused by electric shock depends on current magnitude, frequency, path through the human body, and exposure duration:
- $1" mA"$: Threshold of perception (mild tingling).
- $5 - 10" mA"$: Maximum harmless current (let-go threshold).
- $10 - 20" mA"$: Painful shock, loss of muscular control; person cannot release the energized conductor.
- $50 - 100" mA"$: Ventricular fibrillation of the heart; lethal within seconds unless defibrillated.
- $> 1" A"$: Sustained myocardial contraction, extensive tissue burns, instantaneous respiratory paralysis.

=== 5.2 Principles and Types of Equipment Earthing
*Earthing (Grounding)* is the intentional connection of metallic, non-current-carrying enclosures of electrical apparatus to the general mass of the Earth via an ultra-low impedance conductor ($R_"earth" < 5 Omega$ for industrial systems, $< 1 Omega$ for substations).
- *Function:* In the event of an insulation breakdown where a phase wire contacts the metallic chassis:
  1. It provides an immediate low-resistance return path to ground, causing a large short-circuit current ($I_"fault" = V_"phase" / R_"earth"$) to flow.
  2. This heavy fault current instantly trips the Miniature Circuit Breaker (MCB) or blows the fuse within milliseconds ($t < 40" ms"$).
  3. It limits the touch potential on the chassis to a safe level ($V_"touch" = I_"fault" R_"earth" < 50" V"$), preventing electrocution of personnel touching the device.
- *Standard Earthing Methodologies:*
  1. *Pipe Earthing:* A perforated GI (galvanized iron) pipe of diameter $38 - 50" mm"$ and length $2.5 - 3" m"$ is placed vertically in a pit surrounded by alternate layers of charcoal (moisture retention) and salt (ionic conductivity enhancement). A funnel with wire mesh is provided at the surface for periodic watering.
  2. *Plate Earthing:* A copper plate ($600 times 600 times 3.18" mm"$) or GI plate ($600 times 600 times 6.35" mm"$) is buried vertically at a depth of not less than $3" m"$, surrounded by packed charcoal and salt.
- *Earth Leakage Circuit Breaker (ELCB / RCCB):*
  A Residual Current Circuit Breaker (RCCB) monitors the vector sum of line and neutral currents using a Core Balance Current Transformer (CBCT). Under normal conditions:
  $ bold(I)_L + bold(I)_N = 0 quad ==> quad Phi_"net" = 0 $
  If an insulation fault or human body contact causes leakage to earth, $bold(I)_L + bold(I)_N = bold(I)_"leak" != 0$. The resultant magnetic flux induces a voltage in the sensing secondary winding, triggering the trip mechanism when $I_"leak" >= 30" mA"$ within $30" ms"$.

#v(8pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[6. Electric Machines: DC Motors, 3-Phase Induction Motors & BLDC Motors]

=== 6.1 Principle & Characteristics of DC Motors
A DC motor converts direct current electrical energy into mechanical rotational torque via Lorentz force law:
$ bold(F) = I (bold(L) times bold(B)) $
- *Back-EMF ($E_b$):* As the armature conductors rotate through the main stator magnetic field, an internal counter-electromotive force is induced in accordance with Faraday's law:
$ E_b = (Phi Z N P) / (60 A) $
where $Phi$ is flux per pole (Webers), $Z$ is total number of armature conductors, $N$ is rotational speed in RPM, $P$ is number of poles, and $A$ is number of parallel paths ($A = 2$ for wave winding, $A = P$ for lap winding).
- *Armature Voltage Equation:*
$ V = E_b + I_a R_a quad ==> quad I_a = (V - E_b) / R_a $
- *Electromagnetic Torque:* Developed mechanical power equals internal electrical power:
$ P_"mech" = E_b I_a = omega_m T_e = ((2 pi N) / 60) T_e quad ==> quad T_e = 1 / (2 pi) ((P Z) / A) Phi I_a = K_t Phi I_a $
Thus, developed torque is directly proportional to the product of magnetic flux and armature current ($T_e prop Phi I_a$).
- *Speed Regulation Equation:*
$ N = ((V - I_a R_a) / (K_t Phi)) $

=== 6.2 Principle of 3-Phase Induction Motors (Asynchronous Machines)
The three-phase induction motor is the workhorse of industrial automation due to its ruggedness, absence of brushes, and self-starting capability.
- *Production of Rotating Magnetic Field (RMF):*
  When a balanced 3-phase sinusoidal current supply (separated by $120 degree$ electrical time phase) flows through a 3-phase stator winding distributed $120 degree$ apart in space, it establishes a resultant magnetic flux of constant magnitude rotating at synchronous speed:
  $ Phi_"res" = 1.5 Phi_m = 3 / 2 Phi_m $
  The synchronous speed $N_s$ is governed by supply frequency $f$ and number of poles $P$:
  $ N_s = (120 f) / P " RPM" $
- *Operating Principle & Slip ($s$):*
  The rotating magnetic field cuts the stationary rotor conductors, inducing EMF and heavy circulating currents according to Faraday's and Lenz's laws. The interaction between rotor currents and the RMF produces electromagnetic torque driving the rotor in the direction of the field.
  The rotor can never reach synchronous speed $N_s$; if $N = N_s$, the relative motion between rotor conductors and RMF would become zero, cutting of magnetic lines would cease, induced EMF would vanish, and torque would drop to zero.
  The relative difference in speed is termed *Slip ($s$)*:
  $ s = (N_s - N) / N_s quad ==> quad N = N_s (1 - s) $
  - At standstill (start): $N = 0, s = 1.0$.
  - At full rated load: $s approx 0.02 - 0.05$ ($2 - 5\%$).
  - Rotor frequency: $f_r = s f$.

=== 6.3 Brushless DC Motors (BLDC)
A Brushless DC (BLDC) motor reverses the construction of a conventional brushed DC motor:
- *Rotor:* Permanent magnets (NdFeB or SmCo) mounted on the rotating shaft, eliminating slip rings and mechanical carbon brushes.
- *Stator:* Polyphase (typically 3-phase) copper coils wound on laminated iron slots.
- *Electronic Commutation:* Solid-state three-phase inverter bridge (using 6 MOSFETs or IGBTs) switches stator coil excitation in synchronization with rotor position.
- *Rotor Position Sensing:* Three Hall effect sensors embedded in the stator spaced at $120 degree$ electrical intervals detect rotor magnetic pole transitions, providing digital feedback to the microcontroller for precise 6-step trapezoidal commutation.
- *Advantages over Brushed Motors:* Zero brush wear and mechanical friction, higher power density and efficiency ($> 90\%$), maintenance-free operation, superior heat dissipation (heat generated in outer stator), and zero sparking (safe in explosive environments).

#v(8pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[7. Single-Phase Transformers: Operating Principle & Performance]

=== 7.1 Principle of Operation & Ideal Transformation Ratio
A transformer is a static electromagnetic device that transfers electrical energy between two or more circuits through mutual magnetic induction without a change in frequency.
- *EMF Equation Derivation:*
  Let the sinusoidal core flux be $Phi(t) = Phi_m sin(omega t) = Phi_m sin(2 pi f t)$.
  By Faraday's law of electromagnetic induction, the instantaneous induced EMF in primary winding of $N_1$ turns is:
  $ e_1 = -N_1 (d Phi) / (d t) = -N_1 (2 pi f Phi_m cos(2 pi f t)) = 2 pi f N_1 Phi_m sin(2 pi f t - 90 degree) $
  The peak induced EMF is $E_(m 1) = 2 pi f N_1 Phi_m$. The RMS value of induced EMF is:
  $ E_1 = E_(m 1) / sqrt(2) = (2 pi) / sqrt(2) f N_1 Phi_m = 4.44 f N_1 Phi_m " Volts" $
  Similarly, for the secondary winding:
  $ E_2 = 4.44 f N_2 Phi_m " Volts" $
- *Transformation Ratio ($K$):*
  $ K = E_2 / E_1 = N_2 / N_1 = V_2 / V_1 = I_1 / I_2 $
  - If $K > 1$: Step-up transformer ($V_2 > V_1, I_2 < I_1$).
  - If $K < 1$: Step-down transformer ($V_2 < V_1, I_2 > I_1$).

=== 7.2 Transformer Losses & Efficiency
1. *Core (Iron) Losses ($P_i$):* Constant losses independent of load current:
  - *Hysteresis Loss ($P_h$):* Due to cyclic magnetic domain reversal in the iron core:
    $ P_h = eta B_m^(1.6) f V " (Steinmetz formula)" $
    Minimized by using high-grade silicon steel with narrow hysteresis loops.
  - *Eddy Current Loss ($P_e$):* Induced circulating currents in the conductive core:
    $ P_e = K_e B_m^2 f^2 t^2 V $
    Minimized by constructing the core from thin, insulated laminations ($t approx 0.35 - 0.5" mm"$).
2. *Copper (Ohmic) Losses ($P_"cu"$):* Variable $I^2 R$ loss in primary and secondary copper windings:
  $ P_"cu" = I_1^2 R_1 + I_2^2 R_2 = I_2^2 R_(02) $
  At fractional load $x$ of full rated capacity: $P_"cu"("x") = x^2 P_("cu","FL")$.
3. *Efficiency ($eta$):*
  $ eta = "Output Power" / "Input Power" = (V_2 I_2 cos phi) / (V_2 I_2 cos phi + P_i + x^2 P_("cu","FL")) times 100\% $
  *Condition for Maximum Efficiency:* Differentiating $eta$ with respect to load current shows that efficiency is maximized when variable copper loss equals constant iron loss:
  $ P_"cu" = P_i quad ==> quad x = sqrt(P_i / P_("cu","FL")) $

#v(8pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[8. Power Electronics: DC-DC Buck Converter]

=== 8.1 Circuit Topology & Continuous Conduction Mode (CCM)
A Buck converter is a step-down switch-mode DC-DC converter that efficiently steps down an input voltage $V_"in"$ to a lower regulated output voltage $V_o$ with minimal power dissipation ($eta > 90\%$).
- *Components:* Controlled semiconductor switch (Power MOSFET $S$), fast-recovery freewheeling diode ($D$), filter inductor ($L$), and smoothing output capacitor ($C$).
- *Operating States in Continuous Conduction Mode (CCM):*
  1. *Switch ON Interval ($0 < t < D T_s$):*
     MOSFET conducts; diode $D$ is reverse-biased. The input source supplies energy to the load and charges the inductor:
     $ v_L = V_"in" - V_o = L (d i_L) / (d t) quad ==> quad Delta I_(L,+"on") = ((V_"in" - V_o) / L) D T_s $
  2. *Switch OFF Interval ($D T_s < t < T_s$):*
     MOSFET turns off. The inductor voltage reverses polarity to maintain current flow, forward-biasing freewheeling diode $D$. The stored magnetic energy discharges into the load:
     $ v_L = -V_o = L (d i_L) / (d t) quad ==> quad Delta I_(L,-"off") = -(V_o / L) (1 - D) T_s $
- *Volt-Second Balance:* In periodic steady state, the net volt-seconds across an ideal inductor over one complete switching cycle $T_s$ must be zero:
  $ (V_"in" - V_o) D T_s + (-V_o) (1 - D) T_s = 0 $
  $ V_"in" D T_s - V_o D T_s - V_o T_s + V_o D T_s = 0 quad ==> quad V_o = D V_"in" $
  where the duty cycle is defined as $D = T_"on" / T_s$ ($0 < D < 1$).
- *Component Design Equations:*
  - Critical Inductance for Continuous Conduction Mode:
    $ L_"min" = ((1 - D) R) / (2 f_s) $
  - Output Voltage Ripple ($Delta V_o$):
    $ (Delta V_o) / V_o = (1 - D) / (8 L C f_s^2) $

#v(10pt)
#line(length: 100%, stroke: 0.5pt + rgb(180, 200, 220))
#v(6pt)

#text(size: 12pt, weight: "bold", fill: rgb(139, 0, 0))[VIT FAT Solved Question Bank: Step-by-Step Numerical Derivations]

#v(6pt)
#rect(width: 100%, fill: rgb(249, 250, 251), stroke: 1pt + rgb(220, 225, 230), radius: 4pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb(15, 23, 42))[FAT Problem 1: Thévenin's Theorem with Multiple Independent Sources] \\
  *Question (10 Marks):* In the bridge network shown below, a DC source of $V_s = 100" V"$ energizes a circuit with $R_1 = 20 Omega, R_2 = 30 Omega, R_3 = 40 Omega$, and $R_4 = 10 Omega$. A load resistor $R_L = 15 Omega$ is connected across the bridge terminals $A$ and $B$. By applying Thévenin's theorem, determine:
  ("i") The Thévenin equivalent voltage $V_"th"$,
  ("ii") The Thévenin equivalent resistance $R_"th"$,
  ("iii") The actual current $I_L$ passing through the $15 Omega$ load, and
  ("iv") The power dissipated across the load resistor.

  #v(4pt)
  #text(weight: "bold", fill: rgb(139, 0, 0))[Complete Step-by-Step Solution:] \\
  *Step 1: Determine Open-Circuit Voltage $V_"th" = V_(A B)$:*
  Disconnect the load resistor $R_L$ from terminals $A$ and $B$.
  Terminal $A$ is the midpoint of branch $R_1 - R_3$, and terminal $B$ is the midpoint of branch $R_2 - R_4$.
  Using the voltage divider rule:
  $ V_A = V_s (R_3 / (R_1 + R_3)) = 100 times (40 / (20 + 40)) = 100 times (40 / 60) = 66.67" V" $
  $ V_B = V_s (R_4 / (R_2 + R_4)) = 100 times (10 / (30 + 10)) = 100 times (10 / 40) = 25.00" V" $
  The Thévenin open-circuit voltage across terminals $A-B$ is:
  $ V_"th" = V_A - V_B = 66.67 - 25.00 = 41.67" V" $

  *Step 2: Determine Thévenin Equivalent Resistance $R_"th"$:*
  Deactivate the independent voltage source by replacing it with an ideal short circuit ($V_s = 0$).
  Looking into open terminals $A-B$, branch 1-3 is connected in parallel to ground, and branch 2-4 is connected in parallel to ground:
  $ R_"th" = (R_1 || R_3) + (R_2 || R_4) $
  $ R_1 || R_3 = (20 times 40) / (20 + 40) = 800 / 60 = 13.33 Omega $
  $ R_2 || R_4 = (30 times 10) / (30 + 10) = 300 / 40 = 7.50 Omega $
  $ R_"th" = 13.33 + 7.50 = 20.83 Omega $

  *Step 3: Calculate Load Current $I_L$:*
  Reconnecting the load $R_L = 15 Omega$ across the Thévenin equivalent circuit:
  $ I_L = V_"th" / (R_"th" + R_L) = 41.67 / (20.83 + 15) = 41.67 / 35.83 = 1.163" A" $

  *Step 4: Calculate Power Dissipated across Load:*
  $ P_L = I_L^2 R_L = (1.163)^2 times 15 = 1.3526 times 15 = 20.29" W" $

  *Boxed Final Answers:*
  $ ("i") V_"th" = 41.67" V", quad ("ii") R_"th" = 20.83 Omega, quad ("iii") I_L = 1.163" A", quad ("iv") P_L = 20.29" W". $
]

#v(8pt)
#rect(width: 100%, fill: rgb(249, 250, 251), stroke: 1pt + rgb(220, 225, 230), radius: 4pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb(15, 23, 42))[FAT Problem 2: Series RLC AC Resonance & Power Calculations] \\
  *Question (10 Marks):* A series RLC circuit consists of a non-inductive resistor $R = 10 Omega$, a variable inductor $L$, and a capacitor $C = 25 mu"F"$. The circuit is connected to a $230" V", 50" Hz"$ sinusoidal supply.
  ("i") Calculate the value of inductance $L$ required to bring the circuit into electrical resonance at $50" Hz"$.
  ("ii") Under resonance conditions, find the circuit current $I_0$, the voltage across the inductor $V_L$, and the voltage across the capacitor $V_C$.
  ("iii") Determine the Quality factor $Q$ and the half-power bandwidth in Hertz.
  ("iv") Calculate active power $P$, reactive power $Q$, and power factor.

  #v(4pt)
  #text(weight: "bold", fill: rgb(139, 0, 0))[Complete Step-by-Step Solution:] \\
  *Step 1: Calculate Resonant Inductance $L$:*
  At resonance, inductive reactance equals capacitive reactance ($omega_0 L = 1 / (omega_0 C)$):
  $ omega_0 = 2 pi f = 2 times pi times 50 = 314.159" rad/s" $
  $ L = 1 / (omega_0^2 C) = 1 / ((314.159)^2 times 25 times 10^(-6)) = 1 / (98696 times 25 times 10^(-6)) = 1 / 2.4674 = 0.4053" H" = 405.3" mH" $

  *Step 2: Circuit Current and Component Voltages at Resonance:*
  Since $X_L = X_C$, net impedance is purely resistive ($Z_0 = R = 10 Omega$):
  $ I_0 = V / Z_0 = 230 / 10 = 23.0" A" $
  Reactance at resonance:
  $ X_L = omega_0 L = 314.159 times 0.4053 = 127.32 Omega $
  $ V_L = I_0 X_L = 23.0 times 127.32 = 2928.36" V" approx 2.93" kV" $
  $ V_C = I_0 X_C = 23.0 times 127.32 = 2928.36" V" approx 2.93" kV" $
  *Critical Observation:* Both $V_L$ and $V_C$ are over 12 times the applied supply voltage ($230" V"$)! Because they are $180 degree$ out of phase, they cancel algebraically: $bold(V)_L + bold(V)_C = +j 2928.36 - j 2928.36 = 0$.

  *Step 3: Quality Factor & Bandwidth:*
  $ Q = (omega_0 L) / R = 127.32 / 10 = 12.732 $
  $ "BW" = f_0 / Q = 50 / 12.732 = 3.927" Hz" $

  *Step 4: Power and Power Factor:*
  $ P = V I_0 cos phi = 230 times 23.0 times 1.0 = 5290" W" = 5.29" kW" $
  $ Q = V I_0 sin phi = 230 times 23.0 times 0 = 0" VAR" $
  $ "Power Factor" = cos phi = 1.0 " (Unity)" $

  *Boxed Final Answers:*
  $ ("i") L = 405.3" mH", quad ("ii") I_0 = 23" A", V_L = V_C = 2928.4" V", quad ("iii") Q = 12.73, "BW" = 3.93" Hz", quad ("iv") P = 5.29" kW", "PF" = 1.0. $
]

#v(8pt)
#rect(width: 100%, fill: rgb(249, 250, 251), stroke: 1pt + rgb(220, 225, 230), radius: 4pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb(15, 23, 42))[FAT Problem 3: Transformer Maximum Efficiency & 3-Phase Induction Motor Slip] \\
  *Question (10 Marks):*
  *(Part A - Transformer):* A $25" kVA", 2200/220" V", 50" Hz"$ single-phase distribution transformer has an iron loss of $350" W"$ and a full-load copper loss of $400" W"$. Calculate:
  ("i") The transformer efficiency at full load operating at $0.8$ power factor lagging.
  ("ii") The fraction of full load ($x$) at which maximum efficiency occurs, and the maximum efficiency at unity power factor.
  *(Part B - Induction Motor):* A 4-pole, 3-phase induction motor is fed from a $50" Hz"$ supply. When running at full load, the motor shaft speed is $1440" RPM"$. Calculate:
  ("i") Synchronous speed $N_s$, ("ii") Slip $s$, ("iii") Rotor current frequency $f_r$.

  #v(4pt)
  #text(weight: "bold", fill: rgb(139, 0, 0))[Complete Step-by-Step Solution:] \\
  *Part A: Transformer Calculations:*
  ("i") Full load output at $0.8$ PF:
  $ P_"out" = S times cos phi = 25000 times 0.8 = 20000" W" = 20" kW" $
  Total losses at full load:
  $ P_"loss" = P_i + P_("cu","FL") = 350 + 400 = 750" W" = 0.75" kW" $
  $ eta_("FL") = P_"out" / (P_"out" + P_"loss") times 100\% = 20000 / (20000 + 750) times 100\% = 20000 / 20750 times 100\% = 96.386\% $

  ("ii") Maximum efficiency occurs when variable copper loss equals constant iron loss ($x^2 P_("cu","FL") = P_i$):
  $ x = sqrt(P_i / P_("cu","FL")) = sqrt(350 / 400) = sqrt(0.875) = 0.9354 quad (93.54\% " of rated full load") $
  Load output at maximum efficiency with unity power factor ($cos phi = 1.0$):
  $ P_"out,max" = x times S times cos phi = 0.9354 times 25000 times 1.0 = 23385" W" $
  At maximum efficiency, total loss is $2 P_i = 2 times 350 = 700" W"$:
  $ eta_"max" = 23385 / (23385 + 700) times 100\% = 23385 / 24085 times 100\% = 97.094\% $

  *Part B: 3-Phase Induction Motor Calculations:*
  ("i") Synchronous speed:
  $ N_s = (120 f) / P = (120 times 50) / 4 = 6000 / 4 = 1500" RPM" $
  ("ii") Slip:
  $ s = (N_s - N) / N_s = (1500 - 1440) / 1500 = 60 / 1500 = 0.04 quad (4.0\%) $
  ("iii") Rotor current frequency:
  $ f_r = s times f = 0.04 times 50 = 2.0" Hz" $

  *Boxed Final Answers:*
  $ eta_("FL") = 96.39\%, quad x = 0.9354, quad eta_"max" = 97.09\%, quad N_s = 1500" RPM", quad s = 0.04, quad f_r = 2.0" Hz". $
]
"""

with open("scripts/BEEE_MOD-1.typ", "w") as f:
    f.write(typst_code)

res = subprocess.run(["/opt/homebrew/bin/typst", "compile", "scripts/BEEE_MOD-1.typ", "public/pdfs/basic_eng/BEEE_MOD-1.pdf"], capture_output=True, text=True)
if res.returncode == 0:
    print("SUCCESS: Compiled public/pdfs/basic_eng/BEEE_MOD-1.pdf")
else:
    print("ERROR:", res.stderr)
