import subprocess
import os
import re

typst_code = """#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.3cm, right: 2.3cm),
  header: context {
    let p = counter(page).get().first()
    if p > 1 [
      #grid(
        columns: (1fr, 1fr),
        align: (left, right),
        text(size: 8pt, fill: rgb(101, 106, 118))[VIT BAEEE101 — Module 2: Electronics & Communication Systems],
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
  #text(size: 13.5pt, weight: "bold", fill: rgb(139, 0, 0))[MODULE 2: FOUNDATIONS OF ELECTRONICS AND COMMUNICATION SYSTEMS (CO: 2)] \\
  #v(2pt)
  #text(size: 10.5pt, weight: "bold")[Complete Comprehensive Textbook: Semiconductor Devices, Op-Amps, Cellular Networks, Radar & Solved VIT FAT Question Bank] \\
  #v(1pt)
  #text(size: 8.5pt, fill: rgb(85, 85, 85))[Aligned with Official VIT BAEEE101 Course Syllabus, Department Question Bank & VIT FAT Examination Patterns]
]

#v(8pt)

#rect(width: 100%, fill: rgb(240, 244, 248), stroke: 1pt + rgb(180, 200, 220), radius: 4pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb(15, 23, 42))[Syllabus Scope & Competency Checklist (Module 2):] \\
  #text(size: 9pt)[
    - *Semiconductor Diodes & Applications:* PN junction physics, forward and reverse bias V-I characteristics, breakdown mechanisms (Zener vs Avalanche); Single-Phase Full-Wave Bridge Rectifier circuit, operation during alternate AC cycles, Peak Inverse Voltage (PIV), ripple factor ($gamma = 0.482$), efficiency ($eta = 81.2\%$).
    - *Bipolar Junction Transistors (BJT):* NPN and PNP structures, Common Emitter (CE) configuration, input and output characteristics, Active, Saturation, and Cutoff operating regions, current amplification factors ($alpha, beta$), DC load line and Q-point selection.
    - *MOSFETs (Metal-Oxide-Semiconductor Field-Effect Transistors):* Enhancement-mode N-channel MOSFET structure, threshold voltage ($V_"th"$), channel inversion, drain and transfer characteristics, Triode (Ohmic) and Saturation regions ($I_D prop (V_"GS" - V_"th")^2$), pinch-off condition.
    - *Operational Amplifiers (Op-Amps):* Ideal vs practical op-amp parameters (infinite $A_"OL"$, infinite $R_"in"$, zero $R_o$, infinite CMRR and slew rate); virtual ground and virtual short concepts; derivations of Inverting Amplifier, Non-Inverting Amplifier, Voltage Follower (Buffer), and Summing Amplifier (Adder).
    - *Communication Systems & EM Spectrum:* Block diagram of general communication system (source, transmitter, channel, noise, receiver); electromagnetic frequency bands (VLF to EHF); transmission media (twisted pair, coaxial, optical fiber, wireless RF).
    - *Cellular Mobile Networks:* Cellular geometry, frequency reuse concept, cluster size ($N = i^2 + i j + j^2$), co-channel reuse ratio ($q = D/R$), cell splitting, sectoring, handoff mechanisms (Hard vs Soft handoff).
    - *Radar & Satellite Systems:* Satellite orbits (LEO, MEO, GEO), transponders, uplink and downlink frequencies; Radar operating principle, pulse radar block diagram, radar range equation, Doppler shift for velocity detection.
  ]
]

#v(10pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[1. Semiconductor Diodes & Full-Wave Bridge Rectifiers]

=== 1.1 PN Junction Diode Physics & Characteristics
A PN junction is formed by joining p-type (acceptor doped, holes as majority carriers) and n-type (donor doped, electrons as majority carriers) semiconductor materials:
- *Depletion Region Formation:* Free electrons from the n-side diffuse across the metallurgical junction into the p-side, recombining with holes. This leaves unneutralized positive donor ions ($N_D^+$) on the n-side and negative acceptor ions ($N_A^-$) on the p-side, establishing an internal built-in electric field ($E_"bi"$) and potential barrier ($V_0 approx 0.7" V"$ for Silicon, $0.3" V"$ for Germanium).
- *Shockley Diode Equation:*
$ I_D = I_s (e^(V_D / (eta V_T)) - 1) $
where $I_s$ is reverse saturation current ($approx 10^(-12) - 10^(-9)" A"$), $eta$ is ideality factor ($eta = 1$ for Ge, $eta = 1 - 2$ for Si), and $V_T = (k T) / q$ is the thermal voltage ($approx 25.86" mV"$ at $300" K"$).
- *Biasing Regimes:*
  1. *Forward Bias ($V_D > 0$):* External positive terminal connected to p-side. Reduces the internal barrier width. When $V_D >= V_gamma$ (knee voltage $approx 0.7" V"$), current increases exponentially.
  2. *Reverse Bias ($V_D < 0$):* External positive connected to n-side. Broadens the depletion width, barring majority carrier flow. A minuscule reverse saturation current ($I_s$) flows due to thermally generated minority carriers.
  3. *Breakdown:* At high reverse voltage ($V_R = V_"BR"$):
    - *Zener Breakdown ($V_"BR" < 5 - 6" V"$):* Occurs in heavily doped junctions with narrow depletion layers ($< 10" nm"$). Intense electric field ($> 10^6" V/m"$) directly ruptures covalent bonds via quantum tunneling.
    - *Avalanche Breakdown ($V_"BR" > 6" V"$):* Occurs in lightly doped junctions with wide depletion layers. Minority carriers accelerated by the electric field gain sufficient kinetic energy to knock valence electrons out of crystal atoms via impact ionization, creating a cascading avalanche.

=== 1.2 Single-Phase Full-Wave Bridge Rectifier
A bridge rectifier converts bidirectional AC line voltage into unidirectional pulsating DC using four diodes ($D_1, D_2, D_3, D_4$) arranged in a closed ring bridge topology.
- *Operation During Positive Half-Cycle ($0 < omega t < pi$):*
  Secondary terminal $A$ is positive relative to terminal $B$. Diodes $D_1$ and $D_3$ are forward-biased and conduct current through load $R_L$ from top to bottom. Diodes $D_2$ and $D_4$ are reverse-biased (OFF).
- *Operation During Negative Half-Cycle ($pi < omega t < 2 pi$):*
  Secondary terminal $B$ becomes positive relative to terminal $A$. Diodes $D_2$ and $D_4$ become forward-biased, conducting current through load $R_L$ in the *exact same direction* (top to bottom). Diodes $D_1$ and $D_3$ are reverse-biased (OFF).
- *Performance Parameters Derivation:*
  - *DC Average Output Voltage ($V_"dc"$):*
  $ V_"dc" = 1 / pi integral_0^pi V_m sin(omega t) d(omega t) = (2 V_m) / pi approx 0.637 V_m $
  $ I_"dc" = (2 I_m) / pi $
  - *RMS Output Voltage ($V_"rms"$):*
  $ V_"rms" = sqrt(1 / pi integral_0^pi (V_m sin(omega t))^2 d(omega t)) = V_m / sqrt(2) approx 0.707 V_m $
  - *Ripple Factor ($gamma$):* Measures the AC harmonic content remaining in the rectified DC output:
  $ gamma = sqrt((V_"rms" / V_"dc")^2 - 1) = sqrt(((V_m / sqrt(2)) / ((2 V_m) / pi))^2 - 1) = sqrt((pi^2 / 8) - 1) = sqrt(1.2337 - 1) = 0.482 quad (48.2\%) $
  - *Rectification Efficiency ($eta$):*
  $ eta = P_"dc" / P_"ac" = (I_"dc"^2 R_L) / (I_"rms"^2 (R_L + 2 R_f)) approx ((2 I_m / pi)^2 R_L) / ((I_m / sqrt(2))^2 R_L) = 8 / pi^2 = 81.17\% $
  - *Peak Inverse Voltage (PIV):* Maximum reverse voltage across any non-conducting diode:
  $ "PIV" = V_m $
  (Significantly lower than center-tapped transformer rectifiers which require $"PIV" = 2 V_m$, making the bridge rectifier the industry standard).

#v(8pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[2. Bipolar Junction Transistors (BJT): Operation & Common Emitter Characteristics]

=== 2.1 BJT Structure & Physical Conduction Mechanism
A BJT is a three-terminal, current-controlled bipolar semiconductor device (utilizing both electrons and holes).
- *Three Regions:*
  1. *Emitter ($E$):* Heavily doped to inject maximum majority carriers into the base.
  2. *Base ($B$):* Extremely thin ($< 1 mu"m"$) and very lightly doped to minimize recombination ($< 2 - 5\%$).
  3. *Collector ($C$):* Moderately doped and physically largest in area to dissipate heat generated by carrier collection.
- *Current Relations:* By KCL for the entire transistor:
$ I_E = I_B + I_C $
- *Current Amplification Factors:*
  - Common Base current gain: $alpha = I_C / I_E$ ($0.95 <= alpha <= 0.998$).
  - Common Emitter current gain: $beta = I_C / I_B$ ($20 <= beta <= 500$).
  - Exact Relationship:
  $ I_E = I_B + alpha I_E quad ==> quad I_B = I_E (1 - alpha) quad ==> quad beta = I_C / I_B = (alpha I_E) / (I_E (1 - alpha)) = alpha / (1 - alpha) $
  $ alpha = beta / (1 + beta) $

=== 2.2 Common Emitter (CE) Configuration & Characteristics
In CE configuration, the emitter terminal is common to both input (base-emitter) and output (collector-emitter) circuits.
1. *Input Characteristics ($I_B$ vs $V_"BE"$ at constant $V_"CE"$):*
   Resembles a forward-biased diode. Below cut-in voltage ($0.6" V"$ for Si), $I_B approx 0$. Above $0.7" V"$, $I_B$ increases rapidly. Increasing $V_"CE"$ shifts the curve slightly to the right due to base-width modulation (Early effect).
   - Dynamic input resistance: $r_i = ((Delta V_"BE") / (Delta I_B)) |_(V_"CE" = "const")$.
2. *Output Characteristics ($I_C$ vs $V_"CE"$ at constant $I_B$):*
   - *Active Region:* Base-Emitter forward biased ($V_"BE" approx 0.7" V"$), Collector-Base reverse biased ($V_"CB" > 0$). Transistor acts as a linear current amplifier: $I_C = beta I_B + I_"CEO"$. Curves are nearly horizontal.
   - *Saturation Region ($V_"CE" < V_("CE","sat") approx 0.2" V"$):* Both junctions forward-biased. Collector current drops sharply regardless of $I_B$. The transistor behaves as a closed switch.
   - *Cutoff Region ($I_B <= 0, V_"BE" < 0$):* Both junctions reverse-biased. $I_C approx I_"CEO" approx 0$. Transistor behaves as an open switch.
3. *DC Load Line & Operating Point (Q-Point):*
   Applying KVL around the output collector loop ($V_"CC" = I_C R_C + V_"CE"$):
   $ I_C = -1 / R_C V_"CE" + V_"CC" / R_C $
   - Saturation point ($V_"CE" = 0$): $I_(C,"sat") = V_"CC" / R_C$.
   - Cutoff point ($I_C = 0$): $V_(C E,"cutoff") = V_"CC"$.
   The Q-point $(V_("CEQ"), I_("CQ"))$ is the intersection of the DC load line with the specific $I_B$ characteristic curve. For maximum symmetrical undistorted AC output voltage swing, the Q-point must be biased at the center of the active region: $V_("CEQ") = V_"CC" / 2$.

#v(8pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[3. MOSFETs: Structure & Operation of N-Channel Enhancement Mode]

=== 3.1 Device Architecture
A Metal-Oxide-Semiconductor Field-Effect Transistor (MOSFET) is a unipolar, voltage-controlled four-terminal device (Drain $D$, Gate $G$, Source $S$, Substrate/Body $B$).
- *Construction of N-Channel Enhancement MOSFET:*
  - Substrate: P-type silicon bulk.
  - Source and Drain: Two heavily doped $N^+$ regions diffused into the p-substrate.
  - Gate Dielectric: An ultra-thin layer of silicon dioxide ($"SiO"_2$, thickness $t_"ox" approx 2 - 10" nm"$) thermally grown over the channel region.
  - Gate Electrode: Heavily doped polysilicon or metal deposited on top of the $"SiO"_2$ layer. The gate is electrically insulated from the substrate, resulting in nearly infinite DC input impedance ($R_"in" > 10^(12) Omega$).

=== 3.2 Operating Modes & V-I Characteristics
1. *Inversion Layer Formation ($V_"GS" < V_"th"$ vs $V_"GS" >= V_"th"$):*
   - When $V_"GS" = 0$, back-to-back p-n junctions exist between drain and source; no current flows ($I_D = 0$).
   - When positive voltage is applied to the gate ($V_"GS" > 0$), electric field repels holes away from the $"SiO"_2$ interface, creating a depletion region of negative acceptor ions.
   - When $V_"GS"$ exceeds the *Threshold Voltage ($V_"th" approx 1 - 2" V"$)*, the positive gate attracts free electrons to the interface, creating an n-type conductive channel (inversion layer) connecting source to drain.
2. *Ohmic / Triode (Linear) Region ($V_"DS" < V_"GS" - V_"th"$):*
   The induced channel is continuous from source to drain. The drain current varies linearly with small $V_"DS"$:
   $ I_D = mu_n C_"ox" (W / L) [(V_"GS" - V_"th") V_"DS" - 1 / 2 V_"DS"^2] $
   where $mu_n$ is electron mobility, $C_"ox" = epsilon_"ox" / t_"ox"$ is gate oxide capacitance per unit area, $W$ is channel width, and $L$ is channel length.
3. *Saturation Region ($V_"DS" >= V_"GS" - V_"th"$):*
   As $V_"DS"$ increases, the voltage difference between gate and channel at the drain end becomes $V_"GD" = V_"GS" - V_"DS"$. When $V_"DS" = V_"GS" - V_"th"$, $V_"GD" = V_"th"$; the inversion layer thickness at the drain end shrinks to zero (*Pinch-off*).
   Electrons are swept across the depletion layer by the high electric field. Beyond pinch-off, $I_D$ becomes independent of $V_"DS"$:
   $ I_D = 1 / 2 mu_n C_"ox" (W / L) (V_"GS" - V_"th")^2 = 1 / 2 k_n (V_"GS" - V_"th")^2 $
   This square-law relationship makes the MOSFET ideal for analog amplification and digital CMOS logic switches.

#v(8pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[4. Operational Amplifiers (Op-Amps): Inverting, Non-Inverting & Summing Circuits]

=== 4.1 Ideal Op-Amp Characteristics & Golden Rules
An operational amplifier is a direct-coupled, high-gain differential amplifier with two inputs (Inverting $-$ and Non-Inverting $+$) and one single-ended output.
#table(
  columns: (2fr, 2fr, 2fr),
  fill: (x, y) => if y == 0 { rgb(234, 236, 239) } else { none },
  stroke: 0.5pt + rgb(209, 213, 219),
  [Parameter], [Ideal Op-Amp], [Practical IC 741],
  [Open-Loop Voltage Gain ($A_"OL"$)], [$oo$], [$2 times 10^5$ ($106" dB"$)],
  [Input Impedance ($R_"in"$)], [$oo$], [$2" M"Omega$],
  [Output Impedance ($R_o$)], [$0 Omega$], [$75 Omega$],
  [Bandwidth ($"BW"$)], [$oo$], [$1" MHz"$ (Unity-gain)],
  [Common Mode Rejection Ratio (CMRR)], [$oo$], [$90" dB"$],
  [Slew Rate ($"SR"$)], [$oo$], [$0.5" V"/mu"s"$],
  [Input Offset Voltage ($V_"os"$)], [$0" V"$], [$2" mV"$]
)

- *The Two Op-Amp Golden Rules (under negative feedback):*
  1. *Rule 1 (Infinite Input Impedance):* No current enters either input terminal:
  $ I_+ = I_- = 0 $
  2. *Rule 2 (Virtual Ground / Virtual Short):* The high open-loop gain ($A_"OL" -> oo$) forces the differential input voltage to zero ($V_d = V_+ - V_- = V_o / A_"OL" -> 0$):
  $ V_- = V_+ $

=== 4.2 Circuit Derivations
1. *Inverting Amplifier:*
   Non-inverting terminal grounded ($V_+ = 0$). By Rule 2, inverting terminal is at virtual ground ($V_- = 0$).
   Applying KCL at inverting node:
   $ (V_"in" - V_-) / R_1 + (V_o - V_-) / R_f = 0 quad ==> quad V_"in" / R_1 + V_o / R_f = 0 $
   $ V_o = - (R_f / R_1) V_"in" quad ==> quad "Gain " A_v = V_o / V_"in" = - R_f / R_1 $
   The negative sign represents a $180 degree$ phase inversion.
2. *Non-Inverting Amplifier:*
   Input $V_"in"$ connected to non-inverting terminal ($V_+ = V_"in"$).
   By Rule 2, $V_- = V_+ = V_"in"$.
   Applying voltage divider rule at feedback node:
   $ V_- = V_o (R_1 / (R_1 + R_f)) = V_"in" quad ==> quad V_o = (1 + R_f / R_1) V_"in" $
   $ "Gain " A_v = 1 + R_f / R_1 $
   Input and output are strictly in phase ($0 degree$ phase shift); gain is always $>= 1$.
3. *Voltage Follower (Unity-Gain Buffer):*
   Set $R_f = 0$ (direct short feedback) and $R_1 = oo$ (open circuit):
   $ V_o = V_"in", quad A_v = 1.0 $
   Used for impedance isolation to prevent source loading ($R_"in" -> oo, R_o -> 0$).
4. *Summing Amplifier (Inverting Adder):*
   Multiple input voltages ($V_1, V_2, V_3$) applied through resistors ($R_1, R_2, R_3$) to the inverting node:
   $ (V_1 - 0) / R_1 + (V_2 - 0) / R_2 + (V_3 - 0) / R_3 + (V_o - 0) / R_f = 0 $
   $ V_o = - [ (R_f / R_1) V_1 + (R_f / R_2) V_2 + (R_f / R_3) V_3 ] $
   If all input resistors are chosen equal to $R$ ($R_1 = R_2 = R_3 = R$):
   $ V_o = - R_f / R (V_1 + V_2 + V_3) $
   Setting $R_f / R = 1 / 3$ creates an exact analog *Averaging Amplifier*.

#v(8pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[5. Elements of Communication Systems & Electromagnetic Spectrum]

=== 5.1 Communication System Architecture
A communication system conveys information from a source to a physically separated destination:
1. *Information Source:* Generates message signals (voice, text, image, telemetry).
2. *Input Transducer:* Converts non-electrical messages into analog electrical baseband signals $m(t)$.
3. *Transmitter:* Modulates the baseband signal onto a high-frequency carrier wave ($c(t) = A_c cos(omega_c t)$) to enable radiation through antennas, minimizes antenna height ($h prop lambda / 4$), prevents signal interference, and amplifies RF power.
4. *Channel (Transmission Medium):*
   - *Guided Media:* Twisted pair cable (Ethernet), Coaxial cable (broadband RF), Optical fiber (total internal reflection, ultra-high bandwidth, zero EMI).
   - *Unguided (Wireless Media):* Atmosphere or free space using electromagnetic waves.
5. *Noise, Distortion & Attenuation:*
   - *Thermal Noise (Johnson-Nyquist):* Generated by random thermal motion of electrons: $P_n = k T B" Watts"$, where $k = 1.38 times 10^(-23)" J/K"$.
   - *Signal-to-Noise Ratio (SNR):* $"SNR" = P_"signal" / P_"noise"$.
   - *Shannon Channel Capacity Theorem:* Theoretical maximum error-free data rate:
   $ C = B log_2 (1 + "SNR") " bits per second (bps)" $
6. *Receiver:* Filters out-of-band noise, amplifies weak RF signals, demodulates the carrier to recover baseband signal, and drives output transducer (speaker, display).

=== 5.2 Electromagnetic Spectrum Allocations
#table(
  columns: (1fr, 1.5fr, 1.5fr, 2fr),
  fill: (x, y) => if y == 0 { rgb(234, 236, 239) } else { none },
  stroke: 0.5pt + rgb(209, 213, 219),
  [Band], [Frequency Range], [Wavelength ($lambda$)], [Primary Applications],
  [VLF / LF], [$3 - 300" kHz"$], [$100 - 1" km"$], [Submarine communications, Navigation],
  [MF], [$300 - 3000" kHz"$], [$1000 - 100" m"$], [AM Commercial Broadcasting, Maritime],
  [HF], [$3 - 30" MHz"$], [$100 - 10" m"$], [Skywave ionospheric shortwave radio],
  [VHF], [$30 - 300" MHz"$], [$10 - 1" m"$], [FM Radio, VHF TV, Air traffic control],
  [UHF], [$300 - 3000" MHz"$], [$1" m" - 10" cm"$], [Cellular 4G LTE, Wi-Fi (2.4 GHz), GPS],
  [SHF], [$3 - 30" GHz"$], [$10 - 1" cm"$], [Satellite communication, Radar, 5G Wi-Fi],
  [EHF], [$30 - 300" GHz"$], [$10 - 1" mm"$], [5G mmWave, Radio Astronomy, Imaging]
)

#v(8pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[6. Cellular Networks, Satellite Communications & Radar]

=== 6.1 Cellular Communication Concepts
1. *Cellular Architecture & Frequency Reuse:*
   Traditional high-power broadcast transmitters saturate geographic areas. Cellular networks partition geography into small contiguous hexagonal radio zones called *cells*, each serviced by a base station transceiver (BTS).
   - Adjacent cells use distinct frequency sets to prevent co-channel interference.
   - Non-adjacent cells separated by a minimum reuse distance $D$ reuse the same frequency set.
   - *Cluster Size ($N$):* The number of cells sharing the entire allocated radio spectrum without frequency reuse. Geometry dictates:
   $ N = i^2 + i j + j^2 quad (i, j " are non-negative integers") quad ==> quad N in {3, 4, 7, 12, ...} $
   - *Co-Channel Reuse Ratio ($q$):*
   $ q = D / R = sqrt(3 N) $
   where $R$ is cell radius. For $N = 7$, $q = sqrt(21) approx 4.58$.
2. *Capacity Expansion Techniques:*
   - *Cell Splitting:* Subdividing congested high-traffic cells into microcells with reduced transmitter power, increasing channel density per unit area.
   - *Cell Sectoring:* Utilizing $120 degree$ or $60 degree$ directional antennas instead of omnidirectional antennas at the base station to cut co-channel interference.
3. *Handoff (Handover) Mechanisms:*
   - *Hard Handoff ("Break-before-make"):* Characteristic of FDMA/TDMA (GSM). Mobile station breaks connection with current base station before establishing link with new base station.
   - *Soft Handoff ("Make-before-break"):* Characteristic of CDMA/WCDMA. Mobile station communicates simultaneously with two or more base stations on the same frequency during transition.

=== 6.2 Satellite Communication & Radar Systems
1. *Satellite Orbits & Communication Transponders:*
   - *Geostationary Earth Orbit (GEO):* Circular orbit at an altitude of $35,786" km"$ directly above the equator. Orbital period exactly equals Earth's rotational period ($23" h " 56" min " 4" s"$), making the satellite appear stationary to ground tracking dishes. Three GEO satellites spaced $120 degree$ apart provide global coverage (excluding polar zones).
   - *Transponder Function:* Receives uplink signal (e.g., $6" GHz"$ in C-band), amplifies it using a low-noise amplifier (LNA), translates frequency via a local oscillator mixer to downlink frequency (e.g., $4" GHz"$) to avoid feedback oscillation, and amplifies output power using Traveling Wave Tube Amplifiers (TWTA).
2. *Radar Operating Principle & Range Equation:*
   Radar (Radio Detection and Ranging) transmits short RF electromagnetic energy pulses and detects reflected echo signals from distant targets.
   - Target range is determined by round-trip propagation time $Delta t$:
   $ R = (c Delta t) / 2 $
   - *Radar Range Equation Derivation:*
     Transmitter power $P_t$ with antenna directive gain $G$ produces power density at distance $R$:
     $ S_1 = (P_t G) / (4 pi R^2) $
     Target with radar cross-section $sigma$ intercepts and reradiates power $P_r = S_1 sigma$. Reflected power density returning to radar antenna:
     $ S_2 = (P_t G sigma) / ((4 pi R^2) (4 pi R^2)) = (P_t G sigma) / (16 pi^2 R^4) $
     Effective antenna receiving aperture is $A_e = (G lambda^2) / (4 pi)$. Received echo power:
     $ P_r = S_2 A_e = (P_t G^2 lambda^2 sigma) / ((4 pi)^3 R^4) $
     Equating $P_r$ to the minimum detectable receiver sensitivity $S_"min"$ yields the maximum radar range:
     $ R_"max" = [ (P_t G^2 lambda^2 sigma) / ((4 pi)^3 S_"min") ]^(1/4) $
   - *Doppler Radar:* Moving targets induce a frequency shift $f_d$ proportional to radial velocity $v_r$:
   $ f_d = (2 v_r) / lambda = (2 v_r f_0) / c $

#v(10pt)
#line(length: 100%, stroke: 0.5pt + rgb(180, 200, 220))
#v(6pt)

#text(size: 12pt, weight: "bold", fill: rgb(139, 0, 0))[VIT FAT Solved Question Bank: Step-by-Step Numerical Derivations]

#v(6pt)
#rect(width: 100%, fill: rgb(249, 250, 251), stroke: 1pt + rgb(220, 225, 230), radius: 4pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb(15, 23, 42))[FAT Problem 1: Full-Wave Diode Bridge Rectifier Analysis with Filter] \\
  *Question (10 Marks):* A single-phase full-wave bridge rectifier is supplied from a $230" V", 50" Hz"$ AC mains through a step-down transformer having a turns ratio of $10:1$. The secondary resistance and forward diode resistances are negligible. The load resistor is $R_L = 500 Omega$.
  (i) Calculate the peak secondary voltage $V_m$, DC output voltage $V_"dc"$, and DC load current $I_"dc"$.
  (ii) Calculate the RMS output voltage $V_"rms"$, ripple factor $gamma$, and rectifier efficiency $eta$.
  (iii) Determine the Peak Inverse Voltage (PIV) rating required for each diode.
  (iv) If a shunt filter capacitor $C = 470 mu"F"$ is connected across $R_L$, calculate the new ripple factor and DC voltage.

  #v(4pt)
  #text(weight: "bold", fill: rgb(139, 0, 0))[Complete Step-by-Step Solution:] \\
  *Step 1: Transformer Secondary Voltages:*
  RMS secondary voltage:
  $ V_2 = V_1 / 10 = 230 / 10 = 23.0" V" $
  Peak secondary voltage:
  $ V_m = sqrt(2) times V_2 = 1.4142 times 23.0 = 32.527" V" $

  *Step 2: DC Values Without Filter:*
  $ V_"dc" = (2 V_m) / pi = (2 times 32.527) / pi = 65.054 / 3.14159 = 20.707" V" $
  $ I_"dc" = V_"dc" / R_L = 20.707 / 500 = 0.04141" A" = 41.41" mA" $

  *Step 3: RMS Values, Ripple Factor & Efficiency:*
  $ V_"rms" = V_m / sqrt(2) = 23.0" V" $
  $ gamma = sqrt((V_"rms" / V_"dc")^2 - 1) = sqrt((23.0 / 20.707)^2 - 1) = sqrt((1.1107)^2 - 1) = sqrt(1.2337 - 1) = 0.483 quad (48.3\%) $
  $ P_"dc" = V_"dc" I_"dc" = 20.707 times 0.04141 = 0.8575" W" $
  $ P_"ac" = V_"rms" I_"rms" = 23.0 times (23.0 / 500) = 23.0 times 0.0460 = 1.058" W" $
  $ eta = P_"dc" / P_"ac" times 100\% = 0.8575 / 1.058 times 100\% = 81.05\% $

  *Step 4: Peak Inverse Voltage (PIV):*
  $ "PIV" = V_m = 32.53" V" $

  *Step 5: Rectifier with Shunt Filter Capacitor ($C = 470 mu"F"$):*
  For a full-wave rectifier with capacitor filter at $f = 50" Hz"$ (ripple frequency $f_r = 2 f = 100" Hz"$):
  $ gamma = 1 / (4 sqrt(3) f C R_L) = 1 / (4 times 1.732 times 50 times 470 times 10^(-6) times 500) = 1 / (346.4 times 0.235) = 1 / 81.404 = 0.0123 quad (1.23\%) $
  $ V_"dc" = V_m - I_"dc" / (4 f C) = V_m - V_m / (1 + 4 f C R_L) approx V_m (1 - 1 / (4 f C R_L)) = 32.53 times (1 - 1 / (4 times 50 times 470 times 10^(-6) times 500)) $
  $ 4 f C R_L = 4 times 50 times (4.7 times 10^(-4)) times 500 = 47 $
  $ V_"dc" = 32.53 times (1 - 1 / 47) = 32.53 times 0.9787 = 31.84" V" $

  *Boxed Final Answers:*
  $ (i) V_m = 32.53" V", V_"dc" = 20.71" V", I_"dc" = 41.4" mA", quad (ii) gamma = 48.3\%, eta = 81.1\%, quad (iii) "PIV" = 32.53" V", quad (iv) gamma_"filter" = 1.23\%, V_("dc","filter") = 31.84" V". $
]

#v(8pt)
#rect(width: 100%, fill: rgb(249, 250, 251), stroke: 1pt + rgb(220, 225, 230), radius: 4pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb(15, 23, 42))[FAT Problem 2: Op-Amp Inverting Summing Amplifier Design] \\
  *Question (10 Marks):* Design an op-amp based summing amplifier circuit using an ideal IC 741 to produce an output voltage given by:
  $ V_o = -(2 V_1 + 5 V_2 + 0.5 V_3) $
  (i) Draw the complete circuit schematic labeling all input and feedback resistors.
  (ii) If feedback resistor is chosen as $R_f = 100" k"Omega$, determine the exact values of input resistors $R_1, R_2$, and $R_3$.
  (iii) If inputs are $V_1 = +1.5" V", V_2 = -0.8" V"$, and $V_3 = +4.0" V"$, compute the output voltage $V_o$.
  (iv) If the op-amp is powered by $plus.minus 15" V"$ DC supplies and saturates at $plus.minus 13.5" V"$, will the op-amp saturate if $V_1$ is increased to $+5.0" V"$? Verify with calculations.

  #v(4pt)
  #text(weight: "bold", fill: rgb(139, 0, 0))[Complete Step-by-Step Solution:] \\
  *Step 1: Circuit Derivation & Component Selection:*
  The output equation for an inverting summing amplifier is:
  $ V_o = - [ (R_f / R_1) V_1 + (R_f / R_2) V_2 + (R_f / R_3) V_3 ] $
  Equating coefficients with $V_o = -(2 V_1 + 5 V_2 + 0.5 V_3)$:
  $ R_f / R_1 = 2 quad ==> quad R_1 = R_f / 2 = (100" k"Omega) / 2 = 50" k"Omega $
  $ R_f / R_2 = 5 quad ==> quad R_2 = R_f / 5 = (100" k"Omega) / 5 = 20" k"Omega $
  $ R_f / R_3 = 0.5 quad ==> quad R_3 = R_f / 0.5 = (100" k"Omega) / 0.5 = 200" k"Omega $

  *Step 2: Output Voltage Computation:*
  Substitute $V_1 = 1.5" V", V_2 = -0.8" V", V_3 = 4.0" V"$:
  $ V_o = - [ 2(1.5) + 5(-0.8) + 0.5(4.0) ] = - [ 3.0 - 4.0 + 2.0 ] = - [ 1.0 ] = -1.0" V" $
  Since $|-1.0" V"| < 13.5" V"$, the op-amp operates linearly in the active region.

  *Step 3: Saturation Analysis:*
  When $V_1$ increases to $+5.0" V"$:
  $ V_o = - [ 2(5.0) + 5(-0.8) + 0.5(4.0) ] = - [ 10.0 - 4.0 + 2.0 ] = - [ 8.0" V" ] $
  Since $|-8.0" V"| < 13.5" V"$, the op-amp still does *not* saturate; output is cleanly $-8.0" V"$.
  *Saturation Threshold:* For negative saturation ($V_o = -13.5" V"$):
  $ 2 V_1 - 4.0 + 2.0 = 13.5 quad ==> quad 2 V_1 - 2.0 = 13.5 quad ==> quad 2 V_1 = 15.5 quad ==> quad V_1 = 7.75" V" $
  The op-amp will saturate only if $V_1$ exceeds $+7.75" V"$.

  *Boxed Final Answers:*
  $ R_1 = 50" k"Omega, quad R_2 = 20" k"Omega, quad R_3 = 200" k"Omega, quad V_o = -1.0" V", quad "Op-amp does not saturate at " V_1 = 5.0" V" (V_o = -8.0" V"). $
]

#v(8pt)
#rect(width: 100%, fill: rgb(249, 250, 251), stroke: 1pt + rgb(220, 225, 230), radius: 4pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb(15, 23, 42))[FAT Problem 3: Radar Range Equation & Cellular Cluster Sizing] \\
  *Question (10 Marks):*
  *(Part A - Radar):* A pulse radar operating at frequency $f = 9.0" GHz"$ has a peak transmitter power $P_t = 250" kW"$ and an antenna directive gain $G = 4000$ ($36" dB"$). The target has an effective radar cross section $sigma = 2.5" m"^2$. The minimum detectable signal of the receiver is $S_"min" = 10^(-12)" W"$. Calculate:
  (i) Operating wavelength $lambda$, (ii) Maximum theoretical radar range $R_"max"$ in kilometers.
  *(Part B - Cellular):* A cellular service provider designs a network using hexagonal cells of radius $R = 1.8" km"$. The required minimum carrier-to-interference ratio is $18" dB"$, requiring a cluster size of $N = 7$. Calculate:
  (i) Frequency reuse distance $D$, (ii) Co-channel reuse ratio $q$.

  #v(4pt)
  #text(weight: "bold", fill: rgb(139, 0, 0))[Complete Step-by-Step Solution:] \\
  *Part A: Radar Range Calculation:*
  (i) Wavelength:
  $ lambda = c / f = (3.0 times 10^8) / (9.0 times 10^9) = 1 / 30 = 0.03333" m" = 3.33" cm" $
  (ii) Maximum radar range:
  $ R_"max" = [ (P_t G^2 lambda^2 sigma) / ((4 pi)^3 S_"min") ]^(1/4) $
  Numerator:
  $ "Num" = (250 times 10^3) times (4000)^2 times (0.03333)^2 times 2.5 $
  $ 4000^2 = 1.6 times 10^7 $
  $ (0.03333)^2 = 1.111 times 10^(-3) $
  $ "Num" = (2.5 times 10^5) times (1.6 times 10^7) times (1.111 times 10^(-3)) times 2.5 = 4.0 times 10^(12) times 1.111 times 10^(-3) times 2.5 = 1.111 times 10^(10) $
  Denominator:
  $ "Den" = (4 pi)^3 times 10^(-12) = (12.566)^3 times 10^(-12) = 1984.4 times 10^(-12) = 1.9844 times 10^(-9) $
  Ratio:
  $ R_"max"^4 = (1.111 times 10^(10)) / (1.9844 times 10^(-9)) = 5.599 times 10^(18)" m"^4 $
  Taking fourth root:
  $ R_"max" = (5.599 times 10^(18))^(0.25) = (5.599)^(0.25) times 10^(4.5) = 1.538 times 31622.77 = 48636" m" = 48.64" km" $

  *Part B: Cellular Network Sizing:*
  (i) Co-channel reuse ratio $q$:
  $ q = sqrt(3 N) = sqrt(3 times 7) = sqrt(21) = 4.5826 $
  (ii) Frequency reuse distance $D$:
  $ D = q times R = 4.5826 times 1.8" km" = 8.249" km" $

  *Boxed Final Answers:*
  $ lambda = 3.33" cm", quad R_"max" = 48.64" km", quad q = 4.58, quad D = 8.25" km". $
]
"""

# Quote roman numerals in math mode
typst_code = re.sub(r'\(([i|v|x]+)\)', r'("\1")', typst_code)

with open("scripts/BEEE_MOD-2.typ", "w") as f:
    f.write(typst_code)

res = subprocess.run(["/opt/homebrew/bin/typst", "compile", "scripts/BEEE_MOD-2.typ", "public/pdfs/basic_eng/BEEE_MOD-2.pdf"], capture_output=True, text=True)
if res.returncode == 0:
    print("SUCCESS: Compiled public/pdfs/basic_eng/BEEE_MOD-2.pdf")
else:
    print("ERROR:", res.stderr)
