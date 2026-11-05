
#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.2cm, right: 2.2cm),
  header: context {
    if here().page() > 1 {
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: luma(90))[VIT BEEE102L --- Module 6: Semiconductor Devices]],
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
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT BEEE102L --- Module 6: Semiconductor Devices] \
  #v(2mm)
  #text(size: 15pt, weight: "black")[MODULE 6: SEMICONDUCTOR DEVICES AND APPLICATIONS] \
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[(CO: 6)] \
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Complete Study Textbook, Step-by-Step Derivations & VIT FAT Question Bank] \
  #text(size: 9pt, fill: luma(100))[Aligned with VIT BEEE102L Official Syllabus, VIT Department Question Bank, and VIT FAT Past Papers]
]

#v(3mm)
#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 9pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Textbook (All Syllabus Topics):]
  (1) Intrinsic and extrinsic semiconductor physics, drift and diffusion current, (2) P-N Junction Diode: Forward and reverse bias V-I characteristics, dynamic resistance, (3) Zener diode: breakdown mechanisms (Zener vs Avalanche) and shunt voltage regulator design, (4) Power rectifiers: Half-wave, Center-tapped, and Full-wave bridge rectifiers (efficiency, ripple factor, PIV), (5) Bipolar Junction Transistor (BJT): CE input/output characteristics, operating regions, and Transistor switch, (6) Metal-Oxide-Semiconductor Field-Effect Transistor (MOSFET): Enhancement vs Depletion mode, and (7) Operational Amplifiers (Op-Amps): Inverting, non-inverting, summing, and differential configurations.
]

#v(2mm)
#outline(title: "Contents", depth: 2, indent: auto)
#v(2mm)

= VIT FAT Exam Blueprint & Master Formula Sheet for Module 6

In VIT Final Assessment Tests, Module 6 carries 20 to 25 marks:
1. *Question Type A (10 Marks):* Full-Wave Bridge Rectifier: Derivation of DC load current $I_"dc" = (2 I_m) / pi$, RMS current $I_"rms" = I_m / sqrt(2)$, rectification efficiency $eta = 81.2%$, and ripple factor $gamma = 0.482$.
2. *Question Type B (10 Marks):* Zener Diode Voltage Regulator: Calculation of series limiting resistor $R_s$, maximum and minimum Zener current ($I_"Z,min", I_"Z,max"$), or Op-Amp closed-loop gain derivations.

#v(2mm)
#table(
  columns: (2.2fr, 3.2fr, 2.6fr),
  stroke: 0.5pt + luma(180),
  inset: 6.5pt,
  [*Device / Parameter*], [*Half-Wave Rectifier*], [*Full-Wave Bridge Rectifier*],
  [DC Load Voltage ($V_"dc"$)], [$V_m / pi approx 0.318 V_m$], [$(2 V_m) / pi approx 0.636 V_m$],
  [RMS Load Voltage ($V_"rms"$)], [$V_m / 2 = 0.5 V_m$], [$V_m / sqrt(2) approx 0.707 V_m$],
  [Rectification Efficiency ($eta$)], [$40.6%$], [$81.2%$],
  [Ripple Factor ($gamma$)], [$1.21$], [$0.482$],
  [Peak Inverse Voltage (PIV)], [$V_m$], [$V_m$ (Bridge) vs $2V_m$ (Center-Tapped)],
  [Output Ripple Frequency], [$f$ (50 Hz)], [$2f$ (100 Hz)],

)

= Topic 1: P-N Junction Diode & Full-Wave Rectification

=== The P-N Junction & Shockley Diode Equation
Under thermal equilibrium, carrier diffusion creates a depletion region with a built-in potential barrier $V_0 approx 0.7" V"$ (Silicon):
$ I = I_s (e^(V / (eta V_T)) - 1) $
Where thermal voltage $V_T = (k T) / q approx 26" mV"$ at room temperature.
- *Forward Bias:* Applied voltage reduces the barrier, causing exponential diffusion current.
- *Reverse Bias:* Applied voltage widens the depletion layer; current is limited to reverse saturation current $I_s$ ($approx "nA"$).

=== Full-Wave Bridge Rectifier Derivations
Using a bridge configuration of 4 diodes:
1. *Average DC Current:*
$ I_"dc" = 1 / pi integral_0^pi I_m sin theta d theta = (2 I_m) / pi approx 0.636 I_m $
2. *RMS Current:*
$ I_"rms" = sqrt(1 / pi integral_0^pi (I_m sin theta)^2 d theta) = I_m / sqrt(2) approx 0.707 I_m $
3. *Rectification Efficiency ($eta$):*
$ eta = (P_"dc") / (P_"ac") = (I_"dc"^2 R_L) / (I_"rms"^2 (R_L + 2 R_f)) = (((2 I_m / pi))^2 R_L) / (((I_m / sqrt(2)))^2 R_L) = (8) / (pi^2) approx 81.2% $
4. *Ripple Factor ($gamma$):*
$ gamma = sqrt((I_"rms" / I_"dc")^2 - 1) = sqrt(((pi) / (2 sqrt(2)))^2 - 1) = sqrt(1.2337 - 1) = 0.482 $


= Topic 2: Zener Voltage Regulator & MOSFETs

=== Zener Diode Voltage Regulator Design
A Zener diode operated in its reverse breakdown region maintains a constant terminal voltage $V_Z$:
$ R_s = (V_"in,min" - V_Z) / (I_"L,max" + I_"Z,min") $
Power rating of Zener diode: $P_Z = V_Z I_"Z,max"$.

=== Operational Amplifiers (Op-Amps)
An ideal Op-Amp possesses infinite open-loop gain ($A_"OL" = infinity$), infinite input impedance ($R_"in" = infinity$), and zero output impedance ($R_"out" = 0$):
- *Inverting Amplifier:* $V_"out" = -(R_f / R_1) V_"in"$
- *Non-Inverting Amplifier:* $V_"out" = (1 + R_f / R_1) V_"in"$
- *Virtual Ground:* Due to infinite gain, $V_+ approx V_-$.


= Topic 3: Worked VIT FAT Question Bank Problems

*Problem 6.1 (BEEE102L FAT April 2025 --- 10 Marks):* A Zener diode with breakdown voltage $V_Z = 10" V"$ and minimum Zener current $I_"Z,min" = 5" mA"$ regulates a supply voltage varying between $15" V"$ and $25" V"$. If load resistance varies between $500 Omega$ and $1000 Omega$, calculate: (i) Value of series resistor $R_s$, and (ii) Maximum power dissipated in the Zener diode.

*Solution:*
1. Load currents:
$ I_"L,max" = V_Z / R_"L,min" = (10" V") / (500 Omega) = 20" mA" $
$ I_"L,min" = V_Z / R_"L,max" = (10" V") / (1000 Omega) = 10" mA" $
2. Design series resistor $R_s$ for worst-case minimum input voltage:
$ R_s = (V_"in,min" - V_Z) / (I_"L,max" + I_"Z,min") = (15 - 10) / (20 times 10^(-3) + 5 times 10^(-3)) = 5 / (25 times 10^(-3)) = 200 Omega $
3. Maximum Zener current occurs at maximum input voltage and minimum load current:
$ I_"total,max" = (V_"in,max" - V_Z) / R_s = (25 - 10) / 200 = 15 / 200 = 75" mA" $
$ I_"Z,max" = I_"total,max" - I_"L,min" = 75" mA" - 10" mA" = 65" mA" $
4. Maximum power dissipated:
$ P_"Z,max" = V_Z I_"Z,max" = 10" V" times 65 times 10^(-3)" A" = 0.65" W" = 650" mW" $.
*Answer:* $R_s = 200 Omega$, $P_"Z,max" = 0.65" W"$.


= Quick Self-Test Checklist Before Your Exam

1. Derive the ripple factor and efficiency of a full-wave bridge rectifier.
2. Why is PIV of a center-tapped full wave rectifier double that of a bridge rectifier?
3. Design a Zener diode voltage regulator given input voltage fluctuations and load range.
4. Derive the voltage gain of an inverting and non-inverting operational amplifier.
