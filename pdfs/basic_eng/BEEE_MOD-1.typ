
#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.2cm, right: 2.2cm),
  header: context {
    if here().page() > 1 {
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: luma(90))[VIT BACEE101 --- Module 1: Electrical Circuits & Machines]],
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
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT BACEE101 --- Module 1: Electrical Circuits & Machines] \
  #v(2mm)
  #text(size: 15pt, weight: "black")[MODULE 1: PRINCIPLES OF ELECTRICAL ENGINEERING: CIRCUITS & POWER CONVERSION EQUIPMENT] \
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[(CO: 1)] \
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Complete Study Textbook, Step-by-Step Derivations & VIT FAT Question Bank] \
  #text(size: 9pt, fill: luma(100))[Aligned with Official VIT BACEE101 Course Page Syllabus, Question Bank, and Past FAT Papers]
]

#v(3mm)

#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 9pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Textbook (Official VIT Syllabus - All 13 Topics):]
  (1) Course Introduction & Review of circuit basics, (2) Mesh Current Analysis, (3) Nodal Voltage Analysis, (4) Thevenin's theorem, (5) Superposition theorem, (6) Single-phase RL, RC and RLC series circuits, (7) Power and Energy calculations, Power factor, (8) Basics of Electrical Safety and Earthing, (9) Principle of DC Motor, (10) Principle of 3-phase Induction Motor, (11) Principle of BLDC Motor, (12) Principle of Single-phase Transformer, and (13) Power electronics concepts: DC-DC Buck converter.
]

#v(2mm)
= VIT FAT Exam Blueprint & Master Formula Sheet

Module 1 carries *20 to 25 marks* in BACEE101 FAT:
1. *Question Type A (10 Marks):* Circuit Analysis: Finding branch currents/voltages using Mesh/Nodal analysis or Thevenin's Theorem with resistive loads.
2. *Question Type B (10 Marks):* AC Series RLC Circuit: Impedance triangle, phasor diagram, active ($P$), reactive ($Q$), apparent ($S$) power, and power factor correction.
3. *Question Type C (10 Marks):* Electrical Machines: Operating principle, EMF/Torque equations of DC Motor, 3-Phase Induction Motor (slip calculations), Single-phase Transformer, or DC-DC Buck converter duty cycle.

#table(
  columns: (1.5fr, 2fr, 2fr),
  inset: 6pt,
  stroke: 0.4pt + luma(180),
  align: (left, left, left),
  [*Topic / Concept*], [*Governing Equation / Formula*], [*VIT Exam Key Insight*],
  [Thevenin Equivalent], [$I_L = V_"th" / (R_"th" + R_L)$], [$V_"th"$ = open circuit voltage; $R_"th"$ found by deactivating independent sources.],
  [AC Series RLC Impedance], [$Z = sqrt(R^2 + (X_L - X_C)^2), quad tan phi = (X_L - X_C) / R$], [$X_L = 2 pi f L$, $X_C = 1 / (2 pi f C)$; resonance when $X_L = X_C$.],
  [AC Power Relations], [$P = V I cos phi, quad Q = V I sin phi, quad S = V I = sqrt(P^2 + Q^2)$], [Power factor is $cos phi = P / S$; lagging for inductive, leading for capacitive.],
  [DC Motor Back-EMF], [$E_b = (P Phi Z N) / (60 A) = V - I_a R_a$], [Torque $T prop Phi I_a$; speed $N prop E_b / Phi$.],
  [Induction Motor Slip], [$N_s = (120 f) / P, quad s = (N_s - N) / N_s, quad f_r = s f$], [Rotor speed $N$ is always strictly less than synchronous speed $N_s$.],
  [Transformer EMF Equation], [$E_1 = 4.44 f N_1 Phi_m, quad E_2 = 4.44 f N_2 Phi_m$], [Transformation ratio $K = E_2 / E_1 = N_2 / N_1 = I_1 / I_2$.],
  [DC-DC Buck Converter], [$V_"out" = D V_"in", quad D = T_"on" / T = T_"on" / (T_"on" + T_"off")$], [Step-down DC voltage; duty cycle $D$ satisfies $0 <= D <= 1$.]
)

= Circuit Analysis & Network Theorems

== Mesh Current & Node Voltage Analysis
- *Kirchhoff's Current Law (KCL):* Algebraic sum of currents entering any electrical node is zero: $sum I = 0$.
- *Kirchhoff's Voltage Law (KVL):* Algebraic sum of all potential differences around any closed circuit mesh is zero: $sum V = 0$.
- *Thevenin's Theorem:* Any linear bilateral two-terminal network consisting of voltage sources, current sources, and resistors can be replaced by an equivalent circuit containing an ideal voltage source $V_"th"$ in series with a resistance $R_"th"$.

== Single-Phase AC Series Circuits
For a series connection of resistor $R$, inductor $L$, and capacitor $C$ energized by an AC sinusoidal voltage $v(t) = V_m sin(omega t)$:
- Inductive reactance: $X_L = omega L = 2 pi f L$.
- Capacitive reactance: $X_C = 1 / (omega C) = 1 / (2 pi f C)$.
- Net impedance: $bold(Z) = R + j (X_L - X_C) = |Z| angle.arc phi$, where $|Z| = sqrt(R^2 + (X_L - X_C)^2)$ and phase angle $phi = arctan((X_L - X_C) / R)$.
- *Real Power (P):* $P = V_"rms" I_"rms" cos phi$ (measured in Watts, W).
- *Reactive Power (Q):* $Q = V_"rms" I_"rms" sin phi$ (measured in Volt-Amperes Reactive, VAR).
- *Apparent Power (S):* $S = V_"rms" I_"rms"$ (measured in Volt-Amperes, VA).

= Electrical Machines & Power Electronics

== Single-Phase Transformer
A static electrical device that transfers electrical power between two circuits via mutual electromagnetic induction without changing frequency.
- *Faraday's Law of Induction:* Induced EMF $e = -N (d Phi / d t)$.
- Assuming sinusoidal flux $Phi = Phi_m sin(omega t)$:
  $ e = -N (d / (d t) [Phi_m sin(omega t)]) = -N omega Phi_m cos(omega t) = N (2 pi f) Phi_m sin(omega t - pi/2) $
  RMS induced EMF:
  $ E = (2 pi f N Phi_m) / sqrt(2) = 4.44 f N Phi_m $
  $ E_1 = 4.44 f N_1 Phi_m quad "and" quad E_2 = 4.44 f N_2 Phi_m $

== DC Motors & BLDC Motors
- *DC Motor Principle:* Current-carrying conductor in a magnetic field experiences a Lorentz force $F = B I l$ (Fleming's Left-Hand Rule). Rotation induces back EMF $E_b = (P Phi Z N) / (60 A)$. Terminal voltage: $V = E_b + I_a R_a$.
- *BLDC (Brushless DC) Motor:* Replaces mechanical brushes and commutator segments with electronic switching (inverter bridge) and permanent magnet rotor. Hall effect sensors or back-EMF sensing monitor rotor position to trigger sequential stator windings, delivering high efficiency, low maintenance, and long lifespan.

== DC-DC Buck Converter
A switch-mode power supply topology that steps down an unregulated DC input voltage $V_"in"$ to a lower regulated DC output voltage $V_"out"$:
- *Switch ON ($0 < t < D T$):* Diode is reverse-biased; inductor current ramps up, storing magnetic energy: $v_L = V_"in" - V_"out"$.
- *Switch OFF ($D T < t < T$):* Diode freewheels; inductor discharges energy into load: $v_L = -V_"out"$.
- By volt-second balance across the inductor in steady-state:
  $ (V_"in" - V_"out") D T + (-V_"out") (1 - D) T = 0 arrow.r.double V_"out" = D V_"in" $
