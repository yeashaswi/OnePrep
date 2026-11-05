
#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.2cm, right: 2.2cm),
  header: context {
    if here().page() > 1 {
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: luma(90))[VIT BACEE101 --- Module 2: Electronics & Communications]],
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
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT BACEE101 --- Module 2: Electronics & Communications] \
  #v(2mm)
  #text(size: 15pt, weight: "black")[MODULE 2: FOUNDATIONS OF ELECTRONICS AND COMMUNICATION SYSTEMS] \
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[(CO: 2)] \
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Complete Study Textbook, Step-by-Step Derivations & VIT FAT Question Bank] \
  #text(size: 9pt, fill: luma(100))[Aligned with Official VIT BACEE101 Course Page Syllabus, Question Bank, and Past FAT Papers]
]

#v(3mm)

#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 9pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Textbook (Official VIT Syllabus - All 8 Topics):]
  (1) PN Junction Diode: Symbol, circuit diagram, characteristics, single-phase full-wave diode bridge rectifier, (2) Bipolar Junction Transistor (BJT): Symbol, circuit diagram, characteristics (CE configuration), (3) MOSFET: Symbol, circuit diagram, characteristics (N-Channel Enhancement MOSFET), (4) Introduction to Operational Amplifiers: Symbol, Inverting, Non-inverting, Voltage Follower, Adder, (5) Electromagnetic Spectrum & Elements of Communication Systems, (6) Overview of cellular communication, (7) Fundamentals of Satellite Communication and Radar, and (8) Contemporary Issues.
]

#v(2mm)
= VIT FAT Exam Blueprint & Master Formula Sheet

Module 2 carries *20 to 25 marks* in BACEE101 FAT:
1. *Question Type A (10 Marks):* Diode Bridge Rectifier: Full circuit schematic, operation during positive and negative half-cycles, derivation of DC voltage ($V_"dc" = (2 V_m) / pi$), ripple factor ($gamma = 0.482$), and efficiency ($eta = 81.2%$).
2. *Question Type B (10 Marks):* Operational Amplifier circuits: Derivation of closed-loop voltage gain for Inverting amplifier ($A_v = -R_f / R_1$), Non-Inverting amplifier ($A_v = 1 + R_f / R_1$), Summing amplifier, and Voltage follower using the virtual short-circuit concept.
3. *Question Type C (10 Marks):* Communication Systems & Radar: Elements of communication block diagram, cellular frequency reuse, or Radar Range Equation derivation ($R_"max" = [ (P_t G^2 lambda^2 sigma) / ((4 pi)^3 S_"min") ]^(1/4)$).

#table(
  columns: (1.5fr, 2fr, 2fr),
  inset: 6pt,
  stroke: 0.4pt + luma(180),
  align: (left, left, left),
  [*Device / System*], [*Governing Equation / Formula*], [*VIT Exam Key Insight*],
  [Diode Bridge Rectifier], [$V_"dc" = (2 V_m) / pi approx 0.636 V_m, quad "PIV" = V_m$], [Ripple frequency is $2 f = 100 "Hz"$ (for $50 "Hz"$ AC mains); ripple factor $gamma = 0.482$.],
  [BJT Current Relation], [$I_E = I_B + I_C, quad I_C = beta I_B + I_"CEO", quad beta = alpha / (1 - alpha)$], [In CE active region, base-emitter is forward-biased, collector-base is reverse-biased.],
  [MOSFET Drain Current], [$I_D = 1/2 mu_n C_"ox" (W / L) (V_"GS" - V_"th")^2$], [Saturation occurs when $V_"DS" >= V_"GS" - V_"th"$; pinch-off condition.],
  [Inverting Op-Amp Gain], [$V_"out" = - (R_f / R_1) V_"in"$], [Virtual ground at inverting terminal: $V_- = V_+ = 0 "V"$.],
  [Non-Inverting Op-Amp Gain], [$V_"out" = (1 + R_f / R_1) V_"in"$], [Input impedance is extremely high ($> 10^12 Omega$), zero input bias current.],
  [Cellular Capacity], [$C = N times K, quad S / I = (sqrt(3 N))^gamma / i_0$], [Frequency reuse cluster size $N = i^2 + i j + j^2$ ($N = 3, 4, 7, 12$).],
  [Radar Range Equation], [$R_"max" = [ (P_t G^2 lambda^2 sigma) / ((4 pi)^3 S_"min") ]^(1/4)$], [Received echo power falls off inversely with the fourth power of target distance $R^4$.]
)

= Semiconductor Devices & Circuits

== Full-Wave Diode Bridge Rectifier
A bridge rectifier uses four diodes ($D_1, D_2, D_3, D_4$) connected in a closed bridge loop across AC secondary voltage $v_s(t) = V_m sin(omega t)$:
- *Positive Half Cycle ($0 < omega t < pi$):* Terminal A is positive, B is negative. Diodes $D_1$ and $D_2$ are forward-biased, conducting current through load $R_L$ from top to bottom. Diodes $D_3$ and $D_4$ are reverse-biased.
- *Negative Half Cycle ($pi < omega t < 2 pi$):* Terminal B is positive, A is negative. Diodes $D_3$ and $D_4$ are forward-biased, directing current through load $R_L$ in the *exact same direction*.
- *Average DC Voltage:*
  $ V_"dc" = 1 / pi integral_0^pi V_m sin(omega t) d(omega t) = (2 V_m) / pi approx 0.636 V_m $
- *RMS Voltage:* $V_"rms" = V_m / sqrt(2) approx 0.707 V_m$.
- *Ripple Factor:* $gamma = sqrt((V_"rms" / V_"dc")^2 - 1) = sqrt((pi / (2 sqrt(2)))^2 - 1) = sqrt(1.2337 - 1) = 0.482$ ($48.2%$).
- *Peak Inverse Voltage (PIV):* Maximum reverse voltage across non-conducting diodes is $V_m$ (unlike center-tapped full-wave which requires $2 V_m$).

== Operational Amplifiers (Op-Amps)
An ideal operational amplifier possesses:
1. Infinite open-loop voltage gain ($A_"OL" arrow.r infinity$).
2. Infinite input impedance ($R_"in" arrow.r infinity arrow.r.double I_+ = I_- = 0$).
3. Zero output impedance ($R_"out" = 0$).
4. Infinite bandwidth and zero input offset voltage.

*Golden Rules of Op-Amps:*
- *Rule 1 (Virtual Short):* With negative feedback, the op-amp output drives the inverting input voltage to equal the non-inverting input voltage: $V_- = V_+$.
- *Rule 2 (Zero Input Current):* Due to infinite input impedance, no current enters or leaves the input terminals: $I_+ = I_- = 0$.

*1. Inverting Amplifier:*
Connect non-inverting terminal to ground ($V_+ = 0 "V"$). By Rule 1, inverting terminal is at virtual ground ($V_- = 0 "V"$). Applying KCL at the $V_-$ node:
$ (V_"in" - 0) / R_1 + (V_"out" - 0) / R_f = 0 arrow.r.double V_"out" / R_f = - V_"in" / R_1 arrow.r.double A_v = V_"out" / V_"in" = - R_f / R_1 $

*2. Non-Inverting Amplifier:*
Input signal $V_"in"$ is applied directly to $V_+$, so $V_+ = V_"in"$. By Rule 1, $V_- = V_"in"$. Applying KCL at the $V_-$ node:
$ (0 - V_"in") / R_1 + (V_"out" - V_"in") / R_f = 0 arrow.r.double V_"out" / R_f = V_"in" (1 / R_1 + 1 / R_f) arrow.r.double V_"out" = (1 + R_f / R_1) V_"in" $

*3. Voltage Follower (Buffer):*
Setting $R_f = 0$ and $R_1 arrow.r infinity$ yields $V_"out" = V_"in"$, providing unity gain ($A_v = 1$), infinite input resistance, and zero output resistance to prevent loading effects.

= Communication Systems, Cellular & Radar

== Elements of Communication Systems
Every electronic communication system contains:
1. *Information Source & Input Transducer:* Converts speech, video, or data into baseband electrical signals.
2. *Transmitter:* Modulates the baseband signal onto a high-frequency carrier wave for efficient radiation.
3. *Transmission Channel:* Physical medium (guided coax/fiber or unguided free-space wireless) that attenuates signal and introduces additive noise.
4. *Receiver:* Amplifies, filters, and demodulates the carrier to recover the original baseband signal.

== Cellular Concepts & Frequency Reuse
To serve millions of wireless subscribers within limited frequency spectrum:
- Geographic coverage is partitioned into hexagonal cells, each served by a base transceiver station (BTS).
- The available frequency band is divided into $N$ channel groups and assigned to adjacent cells forming a *cluster*.
- The exact frequency set is reused in cells located at distance $D = R sqrt(3 N)$, where $R$ is cell radius and $N$ is cluster size ($N = 3, 4, 7, 12$).

== Radar Principles & Radar Range Equation
RAdio Detection And Ranging (RADAR) transmits short microwave pulses and detects reflections from target objects:
$ R_"max" = [ (P_t G^2 lambda^2 sigma) / ((4 pi)^3 S_"min") ]^(1/4) $
where $P_t$ is transmitter peak power, $G$ is antenna directive gain, $lambda$ is wavelength, $sigma$ is target radar cross section, and $S_"min"$ is minimum detectable receiver signal.
