import subprocess
import os

beee_modules = {
    3: {
        "title": "MODULE 3: MAGNETIC CIRCUITS",
        "short_title": "Module 3: Magnetic Circuits",
        "co": "CO: 3",
        "scope": "(1) Magnetic field fundamentals, magnetic flux, and flux density (B), (2) Toroidal core magnetic circuit analysis and flux linkage, (3) Magnetic circuit with air gap and fringing effect, (4) Magnetic reluctance (S) in series and parallel paths, (5) Self-inductance (L), mutual inductance (M), and coefficient of coupling (k), and (6) Magnetic circuits in electrical machines and transformer turns ratio.",
        "blueprint": """In VIT Final Assessment Tests, Module 3 carries 15 to 20 marks:
1. *Question Type A (10 Marks):* Magnetic Circuit with Air Gap: Calculating total MMF ($F = N I$), reluctance of iron path and air gap, total magnetic flux ($Phi = F / S_"total"$), and required exciting current.
2. *Question Type B (10 Marks):* Inductance & Coupling: Derivation of self-inductance $L = (N^2 mu A) / l$, mutual inductance $M = k sqrt(L_1 L_2)$, and series aiding/opposing configurations.""",
        "table": """  [*Magnetic Concept*], [*Governing Equation*], [*Diagnostic Significance*],
  [Magnetomotive Force (MMF)], [$F = N I = Phi S$], [Analogous to EMF in electric circuits; units: A-t (Ampere-turns)],
  [Magnetic Reluctance ($S$)], [$S = l / (mu_0 mu_r A)$], [Analogous to resistance $R = rho l / A$; units: A-t/Wb],
  [Air Gap Reluctance], [$S_g = l_g / (mu_0 A_g)$], [Dominates magnetic reluctance because $mu_r$ of air is strictly 1],
  [Self-Inductance ($L$)], [$L = (N Phi) / I = (N^2 mu_0 mu_r A) / l$], [Proportional to square of turns $N^2$],
  [Mutual Inductance ($M$)], [$M = (N_2 Phi_12) / I_1 = k sqrt(L_1 L_2)$], [Coupling factor $k in [0, 1]$; for ideal core $k approx 1$],
  [Coupled Inductors], [$L_"eq" = L_1 + L_2 plus.minus 2 M$], [+$2M$ for series aiding, -$2M$ for series opposing],
""",
        "content": """= Topic 1: Magnetic Field & Toroidal Core Circuit Analysis

=== Magnetic Field Fundamentals & Analogy to Electric Circuits
Magnetic circuits channel magnetic flux $Phi$ through high-permeability ferromagnetic cores:
- *Magnetic Flux ($Phi$):* Surface integral of magnetic flux density $bold(B)$ over core cross-sectional area $A$:
$ Phi = B A quad ("Webers, Wb") $
- *Magnetomotive Force (MMF):* The driving force generating magnetic flux:
$ F = N I = integral.cont bold(H) dot d bold(l) = H l quad ("Ampere-turns, A-t") $
- *Hopkinson's Law (Ohm's Law for Magnetic Circuits):*
$ Phi = F / S = (N I) / S $
Where reluctance $S$ opposes magnetic flux:
$ S = l / (mu A) = l / (mu_0 mu_r A) $
Here $mu_0 = 4 pi times 10^(-7)" H/m"$ (permeability of free space) and $mu_r$ is relative permeability of the iron core ($1000 - 5000$).

=== Series Magnetic Circuit with Air Gap
When a narrow air gap of length $l_g$ is cut into a toroidal ring of mean core circumference $l_c$:
1. Total Reluctance is the sum of iron core reluctance and air gap reluctance:
$ S_"total" = S_c + S_g = (l_c) / (mu_0 mu_r A_c) + (l_g) / (mu_0 A_g) $
2. *Fringing Effect:* At the air gap, magnetic flux lines bulge outwards into surrounding air, causing effective gap area $A_g > A_c$ and slightly reducing flux density in the gap. In VIT problems, fringing is neglected ($A_g = A_c$) unless specified.
3. Total required MMF:
$ N I = H_c l_c + H_g l_g = (B / (mu_0 mu_r)) l_c + (B / mu_0) l_g $


= Topic 2: Self-Inductance, Mutual Inductance & Coupling

=== Self-Inductance ($L$)
Self-inductance measures the voltage induced in a coil opposing a change in its own current (Faraday's & Lenz's Law):
$ e = -N (d Phi) / (d t) = -L (d i) / (d t) $
Equating the two formulations gives:
$ L = (N Phi) / I = (N (B A)) / I = (N (mu_0 mu_r N I / l) A) / I = (N^2 mu_0 mu_r A) / l $
*Key Result:* Inductance scales quadratically with turns: $L prop N^2$!

=== Mutual Inductance ($M$) and Coupling Coefficient ($k$)
When two coils of turns $N_1$ and $N_2$ share magnetic flux:
$ M = (N_2 Phi_12) / I_1 = k sqrt(L_1 L_2) $
Where $k$ is the coefficient of coupling ($0 <= k <= 1$).
- *Series Aiding:* $L_"aiding" = L_1 + L_2 + 2M$
- *Series Opposing:* $L_"opposing" = L_1 + L_2 - 2M$
Subtracting both gives the standard VIT laboratory method to find $M$:
$ M = (L_"aiding" - L_"opposing") / 4 $


= Topic 3: Worked VIT FAT Question Bank Problems

*Problem 3.1 (BEEE102L FAT Classic --- 10 Marks):* A mild steel ring has a mean circumference of $50" cm"$ and a cross-sectional area of $4" cm"^2$. A radial air gap of $1" mm"$ is cut into the ring. The ring is wound uniformly with $500" turns"$ of insulated wire. Calculate the current required to produce a magnetic flux of $0.4" mWb"$ across the air gap. Take relative permeability of steel $mu_r = 1000$ and neglect fringing.

*Solution:*
1. Cross-sectional area $A = 4" cm"^2 = 4 times 10^(-4)" m"^2$.
2. Magnetic flux $Phi = 0.4" mWb" = 0.4 times 10^(-3)" Wb"$.
3. Magnetic flux density $B = Phi / A = (0.4 times 10^(-3)) / (4 times 10^(-4)) = 1.0" T"$.
4. Iron path length $l_c = 50" cm" - 0.1" cm" = 49.9" cm" = 0.499" m"$.
5. MMF required for iron core:
$ (N I)_c = (B l_c) / (mu_0 mu_r) = (1.0 times 0.499) / (4 pi times 10^(-7) times 1000) = (0.499) / (1.2566 times 10^(-3)) = 397.1" A-t" $
6. Air gap path length $l_g = 1" mm" = 1 times 10^(-3)" m"$.
7. MMF required for air gap:
$ (N I)_g = (B l_g) / mu_0 = (1.0 times 10^(-3)) / (4 pi times 10^(-7)) = 795.8" A-t" $
8. Total MMF: $N I = 397.1 + 795.8 = 1192.9" A-t"$.
9. Required Current:
$ I = (N I) / N = (1192.9) / 500 = 2.386" A" $.
*Answer:* Current required $I = 2.39" A"$.


= VIT Faculty Exam Insights & Common Traps

- *Air Gap Dominance Rule:* Even though the air gap length $l_g$ is less than 1% of the core length, its reluctance accounts for $> 65%$ of the total circuit MMF because $mu_r$ of steel is 1000 while $mu_r$ of air is only 1!
- *Series Inductance Sign:* Verify dot notation: if currents enter both dotted terminals, flux aids ($+2M$); if current enters one dot and leaves the other, flux opposes ($-2M$).
""",
        "checklist": """1. Can you calculate the total reluctance of a magnetic core with an air gap?
2. Derive the formula for self-inductance $L = N^2 / S$.
3. How do you determine mutual inductance $M$ using the series aiding and opposing connections?
4. Why does an air gap prevent magnetic saturation in transformer chokes?"""
    },
    4: {
        "title": "MODULE 4: ELECTRICAL MACHINES",
        "short_title": "Module 4: Electrical Machines",
        "co": "CO: 4",
        "scope": "(1) Construction, classification, and working principle of DC Generators and DC Motors, (2) Back EMF equation and torque equation of DC motor, (3) Single-phase Transformer: working principle, EMF equation, losses (hysteresis, eddy current), equivalent circuit, and efficiency, (4) Three-phase induction motor: rotating magnetic field (RMF), slip, and torque-slip characteristics, (5) Synchronous generators: working principle and synchronous speed, and (6) Special electrical machines: Stepper motors, Universal motors, and Brushless DC (BLDC) motors.",
        "blueprint": """In VIT Final Assessment Tests, Module 4 carries 20 to 25 marks:
1. *Question Type A (10 Marks):* Single-Phase Transformer: EMF equation derivation $E = 4.44 f N Phi_m$, equivalent circuit referred to primary/secondary, and condition for maximum efficiency ($P_"cu" = P_i$).
2. *Question Type B (10 Marks):* DC Motor & Induction Motor: Back EMF derivation $E_b = (P Phi Z N) / (60 A)$, torque equation $T = 0.159 Phi I_a (P Z / A)$, or 3-phase induction motor slip and rotor frequency calculations.""",
        "table": """  [*Machine Type*], [*Core Characteristic Equation*], [*Key VIT Operational Rule*],
  [DC Motor Back EMF], [$E_b = (P Phi Z N) / (60 A)$], [$A = 2$ for wave winding, $A = P$ for lap winding],
  [DC Motor Torque], [$T = (1 / (2 pi)) ((P Z) / A) Phi I_a = 0.159 ((P Z) / A) Phi I_a$], [Series motor: $T prop I_a^2$; Shunt motor: $T prop I_a$],
  [Transformer EMF], [$E_1 = 4.44 f N_1 Phi_m, quad E_2 = 4.44 f N_2 Phi_m$], [Frequency $f$ is constant across primary and secondary],
  [Maximum Efficiency], [$P_"copper" = P_"iron" quad (I_2^2 R_02 = P_i)$], [Fraction of load at max $eta$: $x = sqrt(P_i / P_"cu,FL")$],
  [Synchronous Speed], [$N_s = (120 f) / P$], [Speed of stator rotating magnetic field (RMF)],
  [Induction Motor Slip], [$s = (N_s - N) / N_s, quad f_r = s f$], [At standstill $s = 1$; at synchronous speed $s = 0$],
""",
        "content": """= Topic 1: Single-Phase Transformers & Maximum Efficiency

=== Working Principle & EMF Equation
A transformer is a static electromagnetic device transferring electrical energy between circuits through mutual induction:
1. Primary applied voltage $v_1(t)$ sets up alternating core flux $Phi(t) = Phi_m sin(omega t)$.
2. By Faraday's Law, induced EMF in primary:
$ e_1 = -N_1 (d Phi) / (d t) = -N_1 (d) / (d t)[Phi_m sin(omega t)] = -omega N_1 Phi_m cos(omega t) = 2 pi f N_1 Phi_m sin(omega t - 90^degree) $
3. The RMS value of induced EMF:
$ E_1 = (2 pi f N_1 Phi_m) / sqrt(2) = sqrt(2) pi f N_1 Phi_m = 4.44 f N_1 Phi_m $
Similarly, secondary induced EMF is:
$ E_2 = 4.44 f N_2 Phi_m $
Transformation ratio:
$ K = E_2 / E_1 = N_2 / N_1 = I_1 / I_2 $

=== Condition for Maximum Transformer Efficiency
Efficiency $eta$ at power factor $cos phi$:
$ eta = ("Output Power") / ("Output Power" + "Iron Loss" (P_i) + "Copper Loss" (P_"cu")) = (x S cos phi) / (x S cos phi + P_i + x^2 P_"cu,FL") $
Differentiating $eta$ with respect to load current $I_2$ and equating to zero:
$ P_i = x^2 P_"cu,FL" = P_"cu" $
*Golden Rule:* A transformer achieves maximum efficiency when its variable copper loss equals its constant core iron loss!


= Topic 2: DC Motors & Three-Phase Induction Motors

=== DC Motor Back EMF & Operating Principle
When current-carrying armature conductors rotate in a magnetic field, an EMF is induced opposing the terminal supply voltage $V$:
$ V = E_b + I_a R_a =⇒ I_a = (V - E_b) / R_a $
Where back EMF is given by:
$ E_b = (P Phi Z N) / (60 A) $
- $P$ = number of poles
- $Phi$ = flux per pole (Wb)
- $Z$ = total armature conductors
- $N$ = speed in RPM
- $A$ = number of parallel paths ($A = 2$ for wave, $A = P$ for lap).
Armature torque developed:
$ T_a = (E_b I_a) / omega = (E_b I_a) / ((2 pi N) / 60) = (P Z) / (2 pi A) Phi I_a = 0.159 ((P Z) / A) Phi I_a quad ("N-m") $

=== Three-Phase Induction Motor & Slip
A balanced 3-phase stator winding produces a constant-magnitude magnetic field rotating at synchronous speed:
$ N_s = (120 f) / P quad ("RPM") $
The rotor rotates at speed $N < N_s$. The fractional difference is the slip:
$ s = (N_s - N) / N_s $
- Rotor induced frequency: $f_r = s f$.
- Rotor standstill slip $s = 1$; full-load slip typically $2% - 5%$ ($s = 0.02 - 0.05$).


= Topic 3: Special Electrical Machines

1. *Stepper Motor:* Brushless DC motor dividing a full $360^degree$ rotation into equal discrete angular steps. Driven by sequential stator pulsing; essential for 3D printers and robotic joints.
2. *Universal Motor:* Series-wound commutator motor operating on both AC and DC supplies. Characterized by very high starting torque and high speed ($> 10,000" RPM"$); used in domestic vacuum cleaners and blenders.
3. *Brushless DC (BLDC) Motor:* Uses permanent magnets on the rotor and electronically commutated stator coils via Hall-effect sensors, achieving high efficiency ($> 90%$) and long operating life; used in electric vehicles and drones.
""",
        "checklist": """1. Derive the transformer EMF equation $E = 4.44 f N Phi_m$.
2. State the condition for maximum transformer efficiency and calculate the optimal load factor.
3. Derive the back EMF and torque equations of a DC motor.
4. Calculate synchronous speed and rotor frequency of a 4-pole 50 Hz induction motor running at 1440 RPM."""
    },
    5: {
        "title": "MODULE 5: DIGITAL SYSTEMS",
        "short_title": "Module 5: Digital Systems",
        "co": "CO: 5",
        "scope": "(1) Number systems: Binary, Octal, Decimal, and Hexadecimal base conversions, (2) Signed numbers: 1's and 2's complement arithmetic, (3) Boolean algebra theorems and De Morgan's laws, (4) Logic gates: Universal gates (NAND and NOR) and exclusive gates (XOR, XNOR), (5) Karnaugh Map (K-map) minimization: 2, 3, and 4-variable K-maps, SOP and POS minimization, Don't care conditions, and (6) Combinational logic circuits: Half Adder, Full Adder, Multiplexers (MUX 4:1, 8:1), and Demultiplexers (DEMUX).",
        "blueprint": """In VIT Final Assessment Tests, Module 5 carries 20 to 25 marks:
1. *Question Type A (10 Marks):* K-Map Minimization: Simplifying a 4-variable Boolean function in Sum-of-Products (SOP) form with Don't Care conditions ($d$), and realizing the minimal expression using universal NAND gates only.
2. *Question Type B (10 Marks):* Combinational Circuit Design: Design and logic diagram of a Full Adder using two Half Adders and an OR gate, or realizing a Boolean function using an 8:1 Multiplexer.""",
        "table": """  [*Digital Concept*], [*Boolean Expression / Rule*], [*VIT Implementation Landmark*],
  [De Morgan's First Law], [$(A + B)' = A' dot B'$], [NOR is equivalent to bubbled AND],
  [De Morgan's Second Law], [$(A dot B)' = A' + B'$], [NAND is equivalent to bubbled OR],
  [Universal Gates], [NAND and NOR], [Any Boolean function can be implemented using NAND alone],
  [Half Adder], [$"Sum" = A xor B, quad "Carry" = A B$], [Adds two 1-bit binary digits],
  [Full Adder], [$"Sum" = A xor B xor C_"in", quad C_"out" = A B + B C_"in" + C_"in" A$], [Implemented using 2 Half Adders + 1 OR gate],
  [Multiplexer (MUX)], [$Y = sum_(i=0)^(2^n-1) m_i D_i$], [Data selector; $n$ select lines choose 1 of $2^n$ inputs],
""",
        "content": """= Topic 1: Number Systems & Boolean Algebra

=== Base Conversions & 2's Complement
Digital computers operate on binary radix ($r = 2$):
- *Hexadecimal to Binary:* Each hex digit maps to 4 binary bits (e.g., $(3"F")_16 = (0011 1111)_2$).
- *2's Complement Representation:* Used for signed arithmetic:
$ "2's Complement" = "1's Complement (bit-flip)" + 1 $
Subtractions ($A - B$) are executed as binary additions: $A + ("2's complement of " B)$. If an end-carry is generated, the result is positive; if no carry, take 2's complement of result and attach a negative sign.

=== De Morgan's Laws & Universal Logic Realization
1. $(A + B)' = A' B'$ (The complement of a sum is the product of complements).
2. $(A B)' = A' + B'$ (The complement of a product is the sum of complements).
Because NAND and NOR are universal gates:
- NOT via NAND: $(A dot A)' = A'$.
- AND via NAND: $((A dot B)')' = A dot B$.
- OR via NAND: $(A' dot B')' = A'' + B'' = A + B$.


= Topic 2: Karnaugh Map (K-Map) Minimization

=== 4-Variable K-Map Grouping Rules
A 4-variable K-map contains $2^4 = 16$ cells arranged in Gray code sequence ($00, 01, 11, 10$):
1. Group adjacent 1s into powers of two ($1, 2, 4, 8, 16$).
2. Larger groups eliminate more variables (group of 2 eliminates 1 variable, group of 4 eliminates 2, group of 8 eliminates 3).
3. Utilize wrap-around grouping across edges and four corners ($m_0, m_2, m_8, m_10$).
4. *Don't Care ($d$):* Treat as 1 if it helps form a larger group; otherwise ignore as 0.


= Topic 3: Combinational Logic Circuits (Adders & Multiplexers)

=== Full Adder Architecture
A Full Adder adds three 1-bit inputs: augend ($A$), addend ($B$), and carry-in ($C_"in"$):
$ "Sum" = A xor B xor C_"in" $
$ C_"out" = A B + C_"in" (A xor B) = A B + B C_"in" + C_"in" A $
*Two Half-Adder Realization:*
- Half Adder 1: $S_1 = A xor B$, $C_1 = A B$.
- Half Adder 2: $"Sum" = S_1 xor C_"in" = A xor B xor C_"in"$, $C_2 = S_1 C_"in" = (A xor B) C_"in"$.
- Final Carry: $C_"out" = C_1 + C_2 = A B + (A xor B) C_"in"$.

=== Multiplexers (Data Selectors)
An $n$-to-1 MUX routes one of $2^n$ inputs to a single output line controlled by $n$ select lines:
In a 4:1 MUX ($S_1, S_0$):
$ Y = S_1' S_0' I_0 + S_1' S_0 I_1 + S_1 S_0' I_2 + S_1 S_0 I_3 $.
""",
        "checklist": """1. Convert $(247)_10$ into binary, octal, and hexadecimal.
2. Minimize a 4-variable Boolean function with don't care conditions using K-map.
3. Draw the logic diagram of a Full Adder using only 2-input NAND gates.
4. Implement a 3-variable logic function using a 4:1 multiplexer and NOT gate."""
    },
    6: {
        "title": "MODULE 6: SEMICONDUCTOR DEVICES AND APPLICATIONS",
        "short_title": "Module 6: Semiconductor Devices",
        "co": "CO: 6",
        "scope": "(1) Intrinsic and extrinsic semiconductor physics, drift and diffusion current, (2) P-N Junction Diode: Forward and reverse bias V-I characteristics, dynamic resistance, (3) Zener diode: breakdown mechanisms (Zener vs Avalanche) and shunt voltage regulator design, (4) Power rectifiers: Half-wave, Center-tapped, and Full-wave bridge rectifiers (efficiency, ripple factor, PIV), (5) Bipolar Junction Transistor (BJT): CE input/output characteristics, operating regions, and Transistor switch, (6) Metal-Oxide-Semiconductor Field-Effect Transistor (MOSFET): Enhancement vs Depletion mode, and (7) Operational Amplifiers (Op-Amps): Inverting, non-inverting, summing, and differential configurations.",
        "blueprint": """In VIT Final Assessment Tests, Module 6 carries 20 to 25 marks:
1. *Question Type A (10 Marks):* Full-Wave Bridge Rectifier: Derivation of DC load current $I_"dc" = (2 I_m) / pi$, RMS current $I_"rms" = I_m / sqrt(2)$, rectification efficiency $eta = 81.2%$, and ripple factor $gamma = 0.482$.
2. *Question Type B (10 Marks):* Zener Diode Voltage Regulator: Calculation of series limiting resistor $R_s$, maximum and minimum Zener current ($I_"Z,min", I_"Z,max"$), or Op-Amp closed-loop gain derivations.""",
        "table": """  [*Device / Parameter*], [*Half-Wave Rectifier*], [*Full-Wave Bridge Rectifier*],
  [DC Load Voltage ($V_"dc"$)], [$V_m / pi approx 0.318 V_m$], [$(2 V_m) / pi approx 0.636 V_m$],
  [RMS Load Voltage ($V_"rms"$)], [$V_m / 2 = 0.5 V_m$], [$V_m / sqrt(2) approx 0.707 V_m$],
  [Rectification Efficiency ($eta$)], [$40.6%$], [$81.2%$],
  [Ripple Factor ($gamma$)], [$1.21$], [$0.482$],
  [Peak Inverse Voltage (PIV)], [$V_m$], [$V_m$ (Bridge) vs $2V_m$ (Center-Tapped)],
  [Output Ripple Frequency], [$f$ (50 Hz)], [$2f$ (100 Hz)],
""",
        "content": """= Topic 1: P-N Junction Diode & Full-Wave Rectification

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
""",
        "checklist": """1. Derive the ripple factor and efficiency of a full-wave bridge rectifier.
2. Why is PIV of a center-tapped full wave rectifier double that of a bridge rectifier?
3. Design a Zener diode voltage regulator given input voltage fluctuations and load range.
4. Derive the voltage gain of an inverting and non-inverting operational amplifier."""
    }
}

for mod_num, data in beee_modules.items():
    typst_code = f"""
#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.2cm, right: 2.2cm),
  header: context {{
    if here().page() > 1 {{
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: luma(90))[VIT BEEE102L --- {data['short_title']}]],
        align(right)[#text(size: 8.5pt, fill: luma(90), style: "italic")[VIT FAT Study Textbook]]
      )
      line(length: 100%, stroke: 0.4pt + luma(180))
    }}
  }},
  footer: context {{
    align(center)[#text(size: 9pt)[#here().page()]]
  }}
)
#set text(font: "New Computer Modern", size: 10pt)
#set par(justify: true, leading: 0.65em)
#set heading(numbering: "1.1")

#align(center)[
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT BEEE102L --- {data['short_title']}] \\
  #v(2mm)
  #text(size: 15pt, weight: "black")[{data['title']}] \\
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[({data['co']})] \\
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Complete Study Textbook, Step-by-Step Derivations & VIT FAT Question Bank] \\
  #text(size: 9pt, fill: luma(100))[Aligned with VIT BEEE102L Official Syllabus, VIT Department Question Bank, and VIT FAT Past Papers]
]

#v(3mm)
#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 9pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Textbook (All Syllabus Topics):]
  {data['scope']}
]

#v(2mm)
#outline(title: "Contents", depth: 2, indent: auto)
#v(2mm)

= VIT FAT Exam Blueprint & Master Formula Sheet for Module {mod_num}

{data['blueprint']}

#v(2mm)
#table(
  columns: (2.2fr, 3.2fr, 2.6fr),
  stroke: 0.5pt + luma(180),
  inset: 6.5pt,
{data['table']}
)

{data['content']}

= Quick Self-Test Checklist Before Your Exam

{data['checklist']}
"""
    fname_typ = f"public/pdfs/basic_eng/BEEE_MOD-{mod_num}.typ"
    fname_pdf = f"public/pdfs/basic_eng/BEEE_MOD-{mod_num}.pdf"
    with open(fname_typ, "w") as f:
        f.write(typst_code)
    print(f"Wrote {fname_typ}")
    res = subprocess.run(["/opt/homebrew/bin/typst", "compile", fname_typ, fname_pdf], capture_output=True, text=True)
    if res.returncode == 0:
        print(f"SUCCESS: Compiled {fname_pdf}")
    else:
        print(f"ERROR on {fname_pdf}:\n{res.stderr}")
