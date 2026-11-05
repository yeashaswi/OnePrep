#!/usr/bin/env python3
import subprocess, os

BEEE_MODULES = [
    {
        "num": 1,
        "code": "BEEE102L",
        "title": "DC CIRCUIT ANALYSIS & NETWORK THEOREMS",
        "short_title": "DC Circuits",
        "co": "CO: 1",
        "scope": "(1) Electrical circuit elements (R, L, C, independent and dependent voltage/current sources), (2) Ohm's Law and Kirchhoff's Laws (KVL, KCL), (3) Mesh (Loop) Current Analysis and Nodal Voltage Analysis, (4) Star-Delta (Y-Delta) network transformations, (5) Thevenin's Theorem, (6) Norton's Theorem, and (7) Maximum Power Transfer Theorem for DC resistive networks.",
        "blueprint": """In VIT Final Assessment Tests (BEEE102L FAT Papers), Module 1 carries 20 Marks across two 10-mark questions:
1. *Question Type A (10 Marks):* Mesh Current Analysis or Nodal Voltage Analysis on planar multi-loop resistive circuits containing 2 or 3 independent voltage/current sources.
2. *Question Type B (10 Marks):* Thevenin's and Norton's Equivalent Circuits: Finding $V_"th"$, $R_"th"$, $I_N$, and determining the load resistor $R_L$ for Maximum Power Transfer and calculating $P_"max"$.""",
        "table_headers": ("Theorem / Technique", "Governing Equation / Transformation", "FAT Problem Benchmark"),
        "table_rows": [
            ('Kirchhoff\'s Laws', '$sum I_"node" = 0$ (KCL), $sum V_"loop" = 0$ (KVL)', 'Fundamental basis of all circuit solutions'),
            ('Star to Delta (Y to Delta)', '$R_12 = R_1 + R_2 + (R_1 R_2) / R_3$', 'Simplifies bridged resistive networks'),
            ('Delta to Star (Delta to Y)', '$R_1 = (R_12 R_31) / (R_12 + R_23 + R_31)$', 'Product of adjacent divided by sum of three'),
            ('Thevenin\'s Equivalent', '$V_"th" = V_"open-circuit"$, $R_"th" = V_"oc" / I_"sc"$', 'All independent sources deactivated ($V arrow.r$ short, $I arrow.r$ open)'),
            ('Norton\'s Equivalent', '$I_N = I_"short-circuit" = V_"th" / R_"th"$', 'Parallel current source with internal resistor $R_"th"$'),
            ('Max Power Transfer', '$R_L = R_"th"$, $P_"max" = V_"th"^2 / (4 R_"th")$', 'Maximum efficiency is exactly 50%')
        ],
        "sections": [
            ("Topic 1: Kirchhoff's Laws, Mesh & Nodal Analysis", """
=== Kirchhoff's Current Law (KCL) & Kirchhoff's Voltage Law (KVL)
1. *KCL (Conservation of Charge):* The algebraic sum of currents entering any node in an electrical circuit is zero:
$ sum_(k=1)^n I_k = 0 $
2. *KVL (Conservation of Energy):* The algebraic sum of all potential differences (voltages) around any closed loop is zero:
$ sum_(k=1)^m V_k = 0 $

=== Mesh Current Analysis Formulation
For a planar circuit with $M$ meshes, we define circulating loop currents $I_1, I_2, dots, I_M$. Applying KVL around each mesh produces the matrix equation:
$ mat(R_11, -R_12, dots, -R_1M; -R_21, R_22, dots, -R_2M; dots.v, dots.v, dots.down, dots.v; -R_M 1, -R_M 2, dots, R_MM) mat(I_1; I_2; dots.v; I_M) = mat(V_1; V_2; dots.v; V_M) $
where $R_"ii"$ is the sum of resistances around mesh $i$, $R_"ij"$ is the mutual resistance shared between mesh $i$ and mesh $j$, and $V_i$ is the algebraic sum of source EMFs driving current in mesh $i$.

=== Nodal Voltage Analysis Formulation
Selecting one node as reference (ground, $V_0 = 0" V"$), for each non-reference node $k$, applying KCL gives:
$ mat(G_11, -G_12, dots, -G_1N; -G_21, G_22, dots, -G_2N; dots.v, dots.v, dots.down, dots.v; -G_N 1, -G_N 2, dots, G_NN) mat(V_1; V_2; dots.v; V_N) = mat(I_1; I_2; dots.v; I_N) $
where $G_"kk"$ is the sum of conductances connected to node $k$, $G_"kj"$ is the conductance connecting node $k$ and node $j$, and $I_k$ is the net current injected into node $k$ by independent sources.
"""),
            ("Topic 2: Network Theorems & Maximum Power Transfer", """
=== Thevenin's Theorem
*Statement:* Any linear bilateral two-terminal resistive network containing independent and dependent sources can be replaced across its load terminals $A-B$ by an equivalent circuit consisting of a single independent voltage source $V_"th"$ in series with an equivalent resistance $R_"th"$:
1. $V_"th"$ (Thevenin Voltage): The open-circuit voltage across terminals $A-B$ with load resistor $R_L$ removed.
2. $R_"th"$ (Thevenin Resistance): The resistance measured between terminals $A-B$ when all independent voltage sources are replaced by short circuits ($0" V"$) and all independent current sources by open circuits ($0" A"$).

=== Norton's Theorem
*Statement:* Any linear two-terminal network can be equivalently represented by an independent current source $I_N$ in parallel with resistance $R_N = R_"th"$, where $I_N$ is the short-circuit current flowing from terminal $A$ to terminal $B$:
$ I_N = (V_"th") / (R_"th") $

=== Maximum Power Transfer Theorem
*Statement:* A resistive load $R_L$ connected across a DC network receives maximum electrical power when the resistance of the load equals the Thevenin internal resistance of the network:
$ R_L = R_"th" $
*Derivation:*
The current through load $R_L$ is $I_L = V_"th" / (R_"th" + R_L)$. The power absorbed by the load is:
$ P_L = I_L^2 R_L = (V_"th"^2 R_L) / ((R_"th" + R_L)^2) $
To find the value of $R_L$ that maximizes $P_L$, set $(d P_L) / (d R_L) = 0$:
$ (d P_L) / (d R_L) = V_"th"^2 [ ((R_"th" + R_L)^2(1) - R_L(2)(R_"th" + R_L)) / (R_"th" + R_L)^4 ] = 0 $
$ (R_"th" + R_L) - 2 R_L = 0 =⇒ R_L = R_"th" $
The maximum power delivered is:
$ P_"max" = (V_"th"^2 R_"th") / ((2 R_"th")^2) = (V_"th"^2) / (4 R_"th") $
The efficiency at maximum power transfer is:
$ eta = (P_"load") / (P_"total") = (I^2 R_L) / (I^2 (R_"th" + R_L)) = R_"th" / (2 R_"th") = 50% $.
"""),
            ("Topic 3: Worked VIT FAT Question Bank Problems", """
*Problem 1.1 (BEEE102L FAT April 2025 --- 10 Marks):* In the circuit below, find the Thevenin equivalent circuit across terminals $A-B$, determine the value of load resistor $R_L$ for maximum power transfer, and calculate the maximum power delivered.
The circuit consists of: a $20" V"$ voltage source in series with a $4 Omega$ resistor, connected in parallel with a $6 Omega$ resistor, followed by a series $2 Omega$ resistor leading to terminal $A$. Terminal $B$ connects to the negative return line.

*Solution:*
- *Step 1 (Find Open-Circuit Voltage $V_"th"$):*
  With $A-B$ open, no current flows through the $2 Omega$ resistor. The voltage across the $6 Omega$ resistor is simply given by voltage divider:
  $ V_"th" = V_"AB" = 20 times 6 / (4 + 6) = 20 times 6 / 10 = 12" V" $
- *Step 2 (Find Thevenin Resistance $R_"th"$):*
  Deactivate the $20" V"$ source by replacing it with a short circuit:
  The $4 Omega$ and $6 Omega$ resistors are now in parallel, and their combination is in series with the $2 Omega$ resistor:
  $ R_"th" = 2 + (4 times 6) / (4 + 6) = 2 + 24 / 10 = 2 + 2.4 = 4.4 Omega $
- *Step 3 (Maximum Power Transfer Condition):*
  For maximum power transfer, the load resistance must match:
  $ R_L = R_"th" = 4.4 Omega $
- *Step 4 (Calculate $P_"max"$):*
  $ P_"max" = (V_"th"^2) / (4 R_"th") = (12^2) / (4 times 4.4) = 144 / 17.6 = 8.18" Watts" $.
"""),
            ("VIT Faculty Exam Insights & Common Traps", """
- *Deactivating Sources Trap:* Never remove resistors when finding $R_"th"$! Voltage sources become zero-resistance short-circuits (straight wires); current sources become infinite-resistance open-circuits (cut branches).
- *Dependent Sources:* If the circuit contains dependent sources, you CANNOT deactivate them. You must determine $R_"th"$ by applying a test voltage $V_"test" = 1" V"$ and calculating $I_"test"$, so $R_"th" = V_"test" / I_"test"$.
- *Maximum Power Efficiency:* Remember that maximum power transfer does NOT mean maximum efficiency! At $P_"max"$, efficiency is only 50%, with the remaining 50% dissipated as heat inside the internal resistance $R_"th"$.
"""),
            ("Quick Self-Test Checklist Before Your Exam", """
1. Can you write KCL and KVL matrix equations directly by inspection?
2. Can you state and derive Thevenin's and Norton's theorem statements?
3. Can you differentiate between independent and dependent source deactivations?
4. Do you know why maximum power transfer efficiency in a DC circuit is exactly 50%?
""")
        ]
    },
    {
        "num": 2,
        "code": "BEEE102L",
        "title": "AC CIRCUITS, SINGLE-PHASE SYSTEMS & RESONANCE",
        "short_title": "AC Circuits",
        "co": "CO: 2",
        "scope": "(1) Generation of sinusoidal AC voltage, instantaneous value, peak value, cycle, time period, and frequency, (2) RMS value, average value, form factor ($K_f = 1.11$), and peak factor ($K_p = 1.414$), (3) Phasor representation and complex j-notation, (4) AC through pure R, pure L, and pure C, (5) Series R-L, R-C, and R-L-C circuits, (6) Power triangle: Active (P), Reactive (Q), Apparent (S) power and Power Factor, and (7) Series and parallel electrical resonance, bandwidth, and quality factor.",
        "blueprint": """In VIT Final Assessment Tests, Module 2 carries 20 to 25 marks:
1. *Question Type A (10 Marks):* Derivation of RMS and Average value of sinusoidal waveform, Form Factor ($1.11$) and Peak Factor ($1.414$).
2. *Question Type B (10 Marks):* Series R-L-C circuit analysis: Finding total impedance $Z$, circuit current phasor $I$, power factor $cos phi$, active power $P$, and drawing complete phasor diagram.
3. *Question Type C (10 Marks):* Series Resonance: Deriving resonant frequency $f_0 = 1/(2 pi sqrt(L C))$, Quality factor $Q$, half-power frequencies $f_1, f_2$, and Bandwidth $B W$.""",
        "table_headers": ("AC Parameter / Circuit", "Mathematical Formula", "Physical Benchmark"),
        "table_rows": [
            ('RMS Value (Effective)', '$V_"rms" = V_m / sqrt(2) approx 0.707 V_m$', 'Equivalent DC heating effect over full cycle'),
            ('Average Value (Half-Cycle)', '$V_"avg" = (2 V_m) / pi approx 0.637 V_m$', 'Average charge transferred over half cycle'),
            ('Form Factor ($K_f$)', '$K_f = V_"rms" / V_"avg" = (V_m / sqrt(2)) / ((2 V_m) / pi) = pi / (2 sqrt(2)) approx 1.11$', 'Waveform distortion metric'),
            ('Peak Factor ($K_p$)', '$K_p = V_m / V_"rms" = V_m / (V_m / sqrt(2)) = sqrt(2) approx 1.414$', 'Ratio of crest to effective value'),
            ('Impedance ($Z$)', '$Z = R + j(X_L - X_C) = |Z| angle phi$', '$X_L = omega L$, $X_C = 1 / (omega C)$'),
            ('Power Triangle', '$S = P + j Q = V I^*$, $P = V I cos phi$, $Q = V I sin phi$', '$S^2 = P^2 + Q^2$; $cos phi$ is Power Factor'),
            ('Resonant Frequency', '$omega_0 = 1 / sqrt(L C) =⇒ f_0 = 1 / (2 pi sqrt(L C))$', '$X_L = X_C$, $Z_"min" = R$, $I_"max" = V / R$, unity p.f.')
        ],
        "sections": [
            ("Topic 1: RMS, Average & Waveform Factors", """
=== Derivation of RMS (Root Mean Square) Value
The RMS value of an alternating current is defined as that steady direct current which, when flowing through a given resistor for a given time, generates the exact same quantity of heat as the alternating current:
For $v(t) = V_m sin(omega t)$:
$ V_"rms"^2 = 1 / (2 pi) integral_0^(2 pi) v^2(theta) d theta = 1 / (2 pi) integral_0^(2 pi) V_m^2 sin^2(theta) d theta $
Using trigonometric identity $sin^2 theta = (1 - cos 2 theta) / 2$:
$ V_"rms"^2 = (V_m^2) / (4 pi) integral_0^(2 pi) (1 - cos 2 theta) d theta = (V_m^2) / (4 pi) [ theta - (sin 2 theta) / 2 ]_0^(2 pi) = (V_m^2) / (4 pi) (2 pi) = (V_m^2) / 2 $
$ V_"rms" = V_m / sqrt(2) approx 0.707 V_m $

=== Derivation of Average Value
The average value over a full symmetrical sinusoidal cycle is zero. Hence, the average value is computed over a positive half-cycle ($0$ to $pi$):
$ V_"avg" = 1 / pi integral_0^pi V_m sin theta d theta = (V_m) / pi [ -cos theta ]_0^pi = (V_m) / pi [ -(-1) - (-1) ] = (2 V_m) / pi approx 0.637 V_m $

=== Form Factor & Peak Factor
- *Form Factor ($K_f$):* Ratio of RMS value to Average value:
$ K_f = (V_"rms") / (V_"avg") = (V_m / sqrt(2)) / ((2 V_m) / pi) = pi / (2 sqrt(2)) = 1.1107 approx 1.11 $
- *Peak (Crest) Factor ($K_p$):* Ratio of Maximum peak value to RMS value:
$ K_p = (V_m) / (V_"rms") = (V_m) / (V_m / sqrt(2)) = sqrt(2) approx 1.414 $.
"""),
            ("Topic 2: Series RLC Circuit & The Power Triangle", """
=== Series RLC Circuit Analysis
When a sinusoidal voltage $v(t) = V_m sin(omega t)$ is applied across series $R, L, C$:
$ bold(Z) = R + j(X_L - X_C) = |Z| angle phi $
where:
- Inductive reactance: $X_L = omega L = 2 pi f L$ ($Omega$)
- Capacitive reactance: $X_C = 1 / (omega C) = 1 / (2 pi f C)$ ($Omega$)
- Net reactance: $X = X_L - X_C$
- Impedance magnitude: $|Z| = sqrt(R^2 + (X_L - X_C)^2)$
- Phase angle: $phi = tan^(-1) ( (X_L - X_C) / R )$

=== The Three Operating Regimes
1. *Inductive Regime ($X_L > X_C$):* $phi > 0$, current lags voltage by angle $phi$, lagging power factor.
2. *Capacitive Regime ($X_C > X_L$):* $phi < 0$, current leads voltage by angle $phi$, leading power factor.
3. *Resonance ($X_L = X_C$):* $phi = 0$, current in phase with voltage, unity power factor ($cos phi = 1$).

=== The Power Triangle
- *Active (Real) Power ($P$):* Useful work done:
$ P = V_"rms" I_"rms" cos phi quad ("Watts, W or kW") $
- *Reactive Power ($Q$):* Power oscillating between source and reactive fields:
$ Q = V_"rms" I_"rms" sin phi quad ("Volt-Amperes Reactive, VAR or kVAR") $
- *Apparent Power ($S$):* Total complex power supplied:
$ S = V_"rms" I_"rms" = sqrt(P^2 + Q^2) quad ("Volt-Amperes, VA or kVA") $
- *Power Factor:* $p.f. = cos phi = P / S = R / |Z|$.
"""),
            ("Topic 3: Electrical Resonance & Quality Factor", """
=== Series Resonance
Resonance occurs in a series RLC circuit when the inductive reactance and capacitive reactance cancel each other:
$ X_L = X_C =⇒ omega_0 L = 1 / (omega_0 C) =⇒ omega_0^2 = 1 / (L C) =⇒ omega_0 = 1 / sqrt(L C) $
$ f_0 = 1 / (2 pi sqrt(L C)) "Hz" $
*Salient Features of Series Resonance:*
1. Net impedance is minimum and purely resistive: $Z_0 = R$.
2. Circuit current is maximum: $I_0 = V / R$.
3. Power factor is strictly unity ($cos phi = 1$).
4. Voltage magnification across L and C: $V_L = V_C = Q times V_"supply"$.

=== Quality Factor ($Q$) & Bandwidth
The Quality Factor ($Q$) measures sharpness of resonance:
$ Q = (omega_0 L) / R = 1 / (omega_0 C R) = 1 / R sqrt(L / C) $
The Bandwidth ($B W$) between the lower and upper half-power frequencies ($f_1, f_2$, where $P = P_"max" / 2$ and $I = I_0 / sqrt(2)$):
$ B W = f_2 - f_1 = f_0 / Q = R / (2 pi L) $.
"""),
            ("VIT Faculty Exam Insights & Common Traps", """
- *Average Value Integration Limits:* Never integrate $sin theta$ from $0$ to $2 pi$ to find average value because the answer is identically zero! You must clearly state that average value is defined over the half cycle ($0$ to $pi$).
- *Lagging vs Leading Power Factor:* An inductive circuit has a *lagging* p.f. (current lags voltage), while a capacitive circuit has a *leading* p.f. (current leads voltage).
"""),
            ("Quick Self-Test Checklist Before Your Exam", """
1. Can you derive $V_"rms" = V_m / sqrt(2)$ and $V_"avg" = 2 V_m / pi$ step-by-step?
2. Can you draw the complete phasor diagram for a lagging series R-L circuit?
3. What is the formula for the Quality factor $Q$ in terms of $R, L, C$?
4. How do you find the half-power frequencies $f_1$ and $f_2$ from bandwidth?
""")
        ]
    },
    {
        "num": 3,
        "code": "BEEE102L",
        "title": "THREE-PHASE SYSTEMS & ELECTRICAL MACHINES",
        "short_title": "3-Phase & Machines",
        "co": "CO: 3",
        "scope": "(1) Advantages of 3-phase systems over 1-phase systems, (2) Star (Y) and Delta (Delta) balanced connections, line and phase relations, (3) Three-phase power equation, (4) Measurement of 3-phase power by Two-Wattmeter method, (5) Single-phase Transformer: working principle, EMF equation, transformation ratio, equivalent circuit, losses, and efficiency, and (6) DC Motors and Three-Phase Induction Motors: working principle, slip, and torque-speed characteristics.",
        "blueprint": """In VIT Final Assessment Tests, Module 3 carries 20 to 25 marks:
1. *Question Type A (10 Marks):* Derivation of line vs phase voltage and current relations for balanced Star and Delta connections with phasor diagrams.
2. *Question Type B (10 Marks):* Two-Wattmeter Method: Derivation of total active power $P = W_1 + W_2$ and power factor angle $tan phi = sqrt(3)(W_1 - W_2)/(W_1 + W_2)$.
3. *Question Type C (10 Marks):* Single-Phase Transformer: EMF equation derivation $E = 4.44 f N Phi_m$, core vs copper losses, and condition for maximum efficiency.""",
        "table_headers": ("System / Machine", "Governing Equation / Relation", "FAT Exam Landmark"),
        "table_rows": [
            ('Star Connection (Y)', '$V_L = sqrt(3) V_"ph" angle 30^degree$, $I_L = I_"ph"$', 'Neutral wire available; Line voltage leads phase by 30°'),
            ('Delta Connection (Delta)', '$V_L = V_"ph"$, $I_L = sqrt(3) I_"ph" angle -30^degree$', 'Used for heavy motor loads; Line current leads phase by 30°'),
            ('3-Phase Active Power', '$P = sqrt(3) V_L I_L cos phi = 3 V_"ph" I_"ph" cos phi$', 'Identical for both Star and Delta configurations'),
            ('Two-Wattmeter Power', '$P = W_1 + W_2$, $tan phi = sqrt(3) (W_1 - W_2) / (W_1 + W_2)$', 'If $W_2 = 0$, $p.f. = 0.5$; If $W_1 = W_2$, $p.f. = 1.0$'),
            ('Transformer EMF Eq.', '$E_1 = 4.44 f N_1 Phi_m$, $E_2 = 4.44 f N_2 Phi_m$', 'Constant flux device; $Phi_m = B_m A_i$'),
            ('Max Efficiency Rule', '$W_"cu" = W_i$ (Variable copper loss = Constant core loss)', 'Load fraction for $eta_"max"$: $x = sqrt(W_i / W_"cu,FL")$')
        ],
        "sections": [
            ("Topic 1: Three-Phase Star & Delta Systems", """
=== Star (Wye, Y) Connected Balanced System
In a balanced 3-phase 4-wire star connection:
- *Line Current vs Phase Current:* The same current flows through each line wire and phase winding:
$ I_L = I_"ph" $
- *Line Voltage vs Phase Voltage:* By KVL between lines $R$ and $Y$:
$ bold(V)_"RY" = bold(V)_"RN" - bold(V)_"YN" $
Since $bold(V)_"RN" = V_"ph" angle 0^degree$ and $bold(V)_"YN" = V_"ph" angle -120^degree$:
$ |V_"RY"| = sqrt(V_"ph"^2 + V_"ph"^2 - 2 V_"ph"^2 cos 120^degree) = sqrt(V_"ph"^2 + V_"ph"^2 + V_"ph"^2) = sqrt(3) V_"ph" $
Thus:
$ V_L = sqrt(3) V_"ph" $
The line voltage leads the corresponding phase voltage by $30^degree$.

=== Delta (Mesh, Delta) Connected Balanced System
In a balanced 3-phase delta connection:
- *Line Voltage vs Phase Voltage:* The terminals of each phase winding are directly connected between pairs of lines:
$ V_L = V_"ph" $
- *Line Current vs Phase Current:* By KCL at node $R$:
$ bold(I)_R = bold(I)_"RY" - bold(I)_"BR" $
Taking phasor magnitudes with $120^degree$ separation:
$ I_L = sqrt(3) I_"ph" $
The line current lags the corresponding phase current by $30^degree$.

=== Total Power in Three-Phase Circuits
For both star and delta connected balanced loads:
$ P = 3 V_"ph" I_"ph" cos phi = 3 (V_L / sqrt(3)) I_L cos phi = sqrt(3) V_L I_L cos phi quad ("Watts") $
$ Q = sqrt(3) V_L I_L sin phi quad ("VAR"), quad S = sqrt(3) V_L I_L quad ("VA") $.
"""),
            ("Topic 2: Measurement of 3-Phase Power by Two-Wattmeter Method", """
=== Circuit Connections and Derivation
In the Two-Wattmeter method, current coils of wattmeters $W_1$ and $W_2$ are placed in lines $R$ and $B$, while potential coils are connected between line $R$ and line $Y$, and line $B$ and line $Y$ respectively.
1. Reading of Wattmeter $W_1$:
$ W_1 = V_"RY" I_R cos(angle bold(V)_"RY", bold(I)_R) = V_L I_L cos(30^degree - phi) $
2. Reading of Wattmeter $W_2$:
$ W_2 = V_"BY" I_B cos(angle bold(V)_"BY", bold(I)_B) = V_L I_L cos(30^degree + phi) $

=== Sum and Difference of Readings
- *Sum of Readings:*
$ W_1 + W_2 = V_L I_L [ cos(30^degree - phi) + cos(30^degree + phi) ] = V_L I_L [ 2 cos 30^degree cos phi ] = sqrt(3) V_L I_L cos phi = P_"total" $
Thus, the sum of the two wattmeter readings always gives the total active power!
- *Difference of Readings:*
$ W_1 - W_2 = V_L I_L [ cos(30^degree - phi) - cos(30^degree + phi) ] = V_L I_L [ 2 sin 30^degree sin phi ] = V_L I_L sin phi $
Dividing difference by sum:
$ (W_1 - W_2) / (W_1 + W_2) = (V_L I_L sin phi) / (sqrt(3) V_L I_L cos phi) = (tan phi) / sqrt(3) $
$ tan phi = sqrt(3) (W_1 - W_2) / (W_1 + W_2) $
$ "Power Factor" = cos phi = cos [ tan^(-1) ( sqrt(3) (W_1 - W_2) / (W_1 + W_2) ) ] $.

=== Special Cases for Power Factor
1. *Unity Power Factor ($phi = 0^degree$):* $W_1 = W_2$ (Both meters read equal positive values).
2. *Power Factor = 0.5 ($phi = 60^degree$):* $cos(30^degree + 60^degree) = cos 90^degree = 0$, so $W_2 = 0$. One wattmeter reads the entire power!
3. *Power Factor < 0.5 ($phi > 60^degree$):* $W_2$ reads negative! The potential coil connections of $W_2$ must be reversed to obtain a positive reading, which is then subtracted.
"""),
            ("Topic 3: Single-Phase Transformer Principles & Efficiency", """
=== Operating Principle & EMF Equation Derivation
A transformer is a static machine that transfers electrical energy between circuits through mutual electromagnetic induction without changing frequency.
Let sinusoidal alternating flux in the core be:
$ Phi(t) = Phi_m sin(omega t) = Phi_m sin(2 pi f t) $
By Faraday's Law of Induction, instantaneous induced EMF in primary winding of $N_1$ turns is:
$ e_1 = -N_1 (d Phi) / (d t) = -N_1 (d) / (d t) [ Phi_m sin(2 pi f t) ] = -N_1 (2 pi f Phi_m) cos(2 pi f t) = 2 pi f N_1 Phi_m sin(2 pi f t - 90^degree) $
The maximum induced EMF is $E_"m1" = 2 pi f N_1 Phi_m$. The RMS induced EMF is:
$ E_1 = (E_"m1") / sqrt(2) = (2 pi) / sqrt(2) f N_1 Phi_m = 4.44 f N_1 Phi_m $
Similarly for the secondary winding of $N_2$ turns:
$ E_2 = 4.44 f N_2 Phi_m $
The voltage transformation ratio is $K = E_2 / E_1 = N_2 / N_1 = I_1 / I_2$.

=== Losses & Condition for Maximum Efficiency
Total transformer losses:
1. *Core / Iron Losses ($W_i$):* Constant at all loads ($W_i = W_"hysteresis" + W_"eddy"$).
2. *Copper Losses ($W_"cu"$):* Variable with load ($W_"cu" = I_2^2 R_02 = x^2 W_"cu,FL"$).
*Efficiency Equation:*
$ eta = (x times S_"rated" times cos phi) / (x times S_"rated" times cos phi + W_i + x^2 W_"cu,FL") $
Differentiating with respect to load current $I_2$ and setting to zero yields the classic condition:
$ "Condition for Maximum Efficiency:" quad W_"cu" = W_i $
$ "Load fraction for maximum efficiency:" quad x = sqrt(W_i / W_"cu,FL") $.
"""),
            ("VIT Faculty Exam Insights & Common Traps", """
- *Negative Wattmeter Reading:* If one wattmeter reads backward during a 2-wattmeter experiment, DO NOT say "power is negative." Explain that the load power factor is $< 0.5$ ($phi > 60^degree$), reverse the pressure coil terminals, and record the reading as $-W_2$.
- *Transformer Frequency:* Emphasize that a transformer changes voltage and current, but frequency ($f$) and power ($S$) remain invariant (in an ideal transformer).
"""),
            ("Quick Self-Test Checklist Before Your Exam", """
1. Can you prove $V_L = sqrt(3) V_"ph"$ for star and $I_L = sqrt(3) I_"ph"$ for delta with phasor diagrams?
2. Can you derive the Two-Wattmeter power factor formula $tan phi = sqrt(3)(W_1 - W_2)/(W_1 + W_2)$?
3. Can you derive the transformer EMF equation $E = 4.44 f N Phi_m$?
4. What is the mathematical condition for a transformer to achieve maximum efficiency?
""")
        ]
    },
    {
        "num": 4,
        "code": "BEEE102L",
        "title": "SEMICONDUCTOR DIODES, RECTIFIERS & REGULATORS",
        "short_title": "Diodes & Rectifiers",
        "co": "CO: 4",
        "scope": "(1) Intrinsic and extrinsic semiconductors, (2) P-N junction diode under forward and reverse bias, (3) Diode V-I characteristics and Shockley equation, (4) Zener diode and breakdown mechanisms (Zener vs Avalanche), (5) Zener voltage regulator design, (6) Half-wave and Full-wave bridge rectifiers, and (7) Rectifier efficiency, ripple factor, and capacitor filter action.",
        "blueprint": """In VIT Final Assessment Tests, Module 4 carries 20 Marks:
1. *Question Type A (10 Marks):* Full-Wave Bridge Rectifier: Circuit diagram, working during positive/negative half-cycles, derivations of efficiency $eta = 81.2%$, ripple factor $gamma = 0.482$, and Peak Inverse Voltage (PIV).
2. *Question Type B (10 Marks):* Zener Diode as a Voltage Regulator: Circuit operation under fluctuating input voltage and varying load resistance, calculating current limits and series resistance $R_s$.
3. *Question Type C (10 Marks):* Zener Breakdown vs Avalanche Breakdown: Doping density, electric field intensity, temperature coefficient of breakdown voltage.""",
        "table_headers": ("Parameter / Rectifier", "Half-Wave Rectifier", "Center-Tapped Full-Wave", "Full-Wave Bridge Rectifier"),
        "table_rows": [
            ('Number of Diodes', '1 Diode', '2 Diodes (Needs center tap)', '4 Diodes (No center tap needed)'),
            ('DC Output Voltage', '$V_"dc" = V_m / pi approx 0.318 V_m$', '$V_"dc" = (2 V_m) / pi approx 0.637 V_m$', '$V_"dc" = (2 V_m) / pi approx 0.637 V_m$'),
            ('Ripple Factor ($gamma$)', '$gamma = 1.21$ (Very high)', '$gamma = 0.482$', '$gamma = 0.482$'),
            ('Rectification Efficiency', '$eta_"max" = 40.6%$', '$eta_"max" = 81.2%$', '$eta_"max" = 81.2%$'),
            ('Peak Inverse Voltage (PIV)', '$"PIV" = V_m$', '$"PIV" = 2 V_m$', '$"PIV" = V_m$ (Key bridge advantage!)'),
            ('Output Ripple Frequency', '$f_"out" = f_"in" = 50" Hz"$', '$f_"out" = 2 f_"in" = 100" Hz"$', '$f_"out" = 2 f_"in" = 100" Hz"$')
        ],
        "sections": [
            ("Topic 1: P-N Junction Diode & Shockley Equation", """
=== P-N Junction Physics
When P-type and N-type semiconductor regions meet, majority carriers diffuse across the junction (holes from P to N, electrons from N to P). Uncompensated acceptor ions ($-$) on the P-side and donor ions ($+$) on the N-side create a *depletion region* with a built-in barrier potential:
$ V_0 = (k T) / q ln ( (N_A N_D) / n_i^2 ) approx 0.7" V for Silicon", quad 0.3" V for Germanium" $

=== Diode V-I Characteristics & The Shockley Equation
The current-voltage relationship of a semiconductor diode is given by the Shockley Diode Equation:
$ I = I_0 [ e^(V / (eta V_T)) - 1 ] $
where:
- $I_0$ is the reverse saturation current ($approx 10^(-12)" A"$ for Si, $10^(-6)" A"$ for Ge)
- $V$ is the voltage applied across the diode
- $eta$ is the ideality factor ($eta = 1$ for Ge, $eta = 1$ to $2$ for Si)
- $V_T$ is the thermal voltage:
$ V_T = (k T) / q = T / 11600 approx 25.86" mV at " 298" K" $.
- *Forward Bias ($V > 0$):* Barrier potential lowers; current increases exponentially.
- *Reverse Bias ($V < 0$):* Barrier widens; current equals tiny saturation current $-I_0$.
"""),
            ("Topic 2: Full-Wave Bridge Rectifier Derivations", """
=== Circuit Operation
A bridge rectifier uses 4 diodes ($D_1, D_2, D_3, D_4$) arranged in a closed loop bridge:
- *Positive Half-Cycle:* Terminal A is positive, B is negative. Diodes $D_1$ and $D_3$ are forward biased and conduct; $D_2$ and $D_4$ are reverse biased. Current flows through $R_L$ from top to bottom.
- *Negative Half-Cycle:* Terminal B is positive, A is negative. Diodes $D_2$ and $D_4$ are forward biased and conduct; $D_1$ and $D_3$ are reverse biased. Current still flows through $R_L$ in the exact same downward direction!

=== Derivation of Rectification Efficiency ($eta$)
The average (DC) load current:
$ I_"dc" = 1 / pi integral_0^pi I_m sin theta d theta = (2 I_m) / pi $
The RMS load current:
$ I_"rms" = sqrt( 1 / pi integral_0^pi I_m^2 sin^2 theta d theta ) = I_m / sqrt(2) $
DC power delivered to load:
$ P_"dc" = I_"dc"^2 R_L = ( (2 I_m) / pi )^2 R_L = (4 I_m^2) / pi^2 R_L $
AC input power supplied to the circuit:
$ P_"ac" = I_"rms"^2 (R_L + 2 r_d) approx (I_m / sqrt(2))^2 R_L = (I_m^2) / 2 R_L $
The theoretical maximum efficiency is:
$ eta = (P_"dc") / (P_"ac") = ( (4 I_m^2 / pi^2) R_L ) / ( (I_m^2 / 2) R_L ) = 8 / pi^2 = 0.8105 approx 81.2% $.

=== Derivation of Ripple Factor ($gamma$)
The ripple factor measures AC ripple content in the DC output:
$ gamma = sqrt( (I_"rms" / I_"dc")^2 - 1 ) = sqrt( ( (I_m / sqrt(2)) / (2 I_m / pi) )^2 - 1 ) = sqrt( (pi / (2 sqrt(2)))^2 - 1 ) = sqrt( (1.11)^2 - 1 ) = sqrt(1.232 - 1) = 0.482 $.
"""),
            ("Topic 3: Zener Diode & Voltage Regulator Design", """
=== Zener Breakdown vs Avalanche Breakdown
- *Zener Breakdown ($V_Z < 6" V"$):* Occurs in heavily doped diodes with a very narrow depletion layer ($< 10" nm"$). The intense electric field ($> 10^7" V/m"$) directly ruptures covalent bonds, pulling electrons into conduction band (quantum tunneling). Negative temperature coefficient.
- *Avalanche Breakdown ($V_Z > 6" V"$):* Occurs in lightly doped diodes with a wide depletion layer. Accelerated minority carriers collide with lattice atoms, knocking out secondary electron-hole pairs (impact ionization avalanche multiplication). Positive temperature coefficient.

=== Zener Voltage Regulator Circuit
A Zener diode connected in reverse breakdown maintains a constant output voltage $V_"out" = V_Z$ across load $R_L$ despite variations in supply voltage $V_"in"$ or load current $I_L$:
$ V_"out" = V_Z $
$ I_S = (V_"in" - V_Z) / R_S = I_Z + I_L $
- *Design Equations for Series Resistor $R_S$:*
$ R_S,max = (V_"in,min" - V_Z) / (I_"Z,min" + I_"L,max") $
$ R_S,min = (V_"in,max" - V_Z) / (I_"Z,max" + I_"L,min") $.
"""),
            ("VIT Faculty Exam Insights & Common Traps", """
- *Peak Inverse Voltage (PIV) in Rectifiers:* The PIV of a center-tapped full-wave rectifier is $2 V_m$, whereas for a bridge rectifier it is only $V_m$. Explain this difference clearly to secure full marks in comparison questions!
- *Zener Operating Condition:* The Zener diode must ALWAYS operate in its reverse breakdown region ($V_"in" > V_Z$ and $I_Z > I_"Z,min"$) to regulate voltage.
"""),
            ("Quick Self-Test Checklist Before Your Exam", """
1. Can you draw the full bridge rectifier circuit with conduction paths for both half cycles?
2. Can you derive $eta = 81.2%$ and $gamma = 0.482$ from integration fundamentals?
3. What is the fundamental difference between Zener tunneling and Avalanche multiplication?
4. Can you calculate $R_S$ for a Zener regulator given input fluctuations and load range?
""")
        ]
    },
    {
        "num": 5,
        "code": "BEEE102L",
        "title": "BIPOLAR JUNCTION TRANSISTORS & DIGITAL LOGIC",
        "short_title": "BJT & Digital",
        "co": "CO: 5",
        "scope": "(1) Bipolar Junction Transistor (BJT): NPN and PNP configurations, (2) Common Base (CB), Common Emitter (CE), and Common Collector (CC) modes, (3) Current relationships: $alpha$, $beta$, $gamma$, (4) CE input and output characteristics, operating regions, and Transistor as a switch, (5) Digital logic gates: AND, OR, NOT, NAND, NOR, XOR, (6) Boolean algebra laws and De Morgan's theorems, and (7) Combinational logic: Half Adder and Full Adder.",
        "blueprint": """In VIT Final Assessment Tests, Module 5 carries 20 Marks:
1. *Question Type A (10 Marks):* Common Emitter (CE) BJT: Input and output characteristics curves, Cut-off, Active, and Saturation regions, and mathematical relation between $alpha$ and $beta$.
2. *Question Type B (10 Marks):* Transistor as an electronic switch: Calculating base resistor $R_B$ and collector resistor $R_C$ to ensure deep saturation.
3. *Question Type C (10 Marks):* Combinational Digital Logic: Realizing Half Adder and Full Adder using basic gates and universal NAND gates with truth tables and Boolean expressions.""",
        "table_headers": ("Parameter / Logic Concept", "Governing Equation / Relation", "FAT Key Landmark"),
        "table_rows": [
            ('BJT Current Law', '$I_E = I_B + I_C$', 'Emitter current is the sum of base and collector currents'),
            ('Alpha ($alpha$)', '$alpha = I_C / I_E = beta / (1 + beta)$', '$alpha < 1$ (typically $0.95-0.998$) in CB mode'),
            ('Beta ($beta$)', '$beta = I_C / I_B = alpha / (1 - alpha)$', '$beta$ typically $50-300$ in CE mode'),
            ('Transistor Saturation', '$V_"CE(sat)" approx 0.2" V"$, $V_"BE(sat)" approx 0.7-0.8" V"$', 'Both junctions forward biased; ON state of switch'),
            ('De Morgan\'s Law 1', '$overline(A dot B) = overline(A) + overline(B)$', 'NAND equivalent to inverted-input OR'),
            ('De Morgan\'s Law 2', '$overline(A + B) = overline(A) dot overline(B)$', 'NOR equivalent to inverted-input AND'),
            ('Half Adder Circuit', '$"Sum" = A xor B$, $"Carry" = A dot B$', '1 XOR gate + 1 AND gate; adds two 1-bit numbers')
        ],
        "sections": [
            ("Topic 1: BJT Fundamentals & CE Characteristics", """
=== BJT Operating Configurations
A Bipolar Junction Transistor consists of three doped regions: Emitter (heavily doped), Base (very thin, lightly doped), and Collector (moderately doped, largest physical area).
1. *Common Base (CB):* Current gain $alpha = I_C / I_E < 1$. Low input impedance, high output impedance.
2. *Common Emitter (CE):* Current gain $beta = I_C / I_B$. Moderate input/output impedance; provides both voltage and current gain. Most widely used configuration.
3. *Common Collector (CC):* Voltage gain $approx 1$, very high input impedance. Used as buffer / impedance matching (emitter follower).

=== Derivation of Relationship Between $alpha$ and $beta$
From basic charge conservation in the transistor:
$ I_E = I_B + I_C $
Dividing throughout by $I_C$:
$ I_E / I_C = I_B / I_C + 1 $
Since $alpha = I_C / I_E$ and $beta = I_C / I_B$:
$ 1 / alpha = 1 / beta + 1 = (1 + beta) / beta $
Inverting both sides:
$ alpha = beta / (1 + beta) $
Solving for $beta$:
$ alpha(1 + beta) = beta =⇒ alpha + alpha beta = beta =⇒ alpha = beta(1 - alpha) =⇒ beta = alpha / (1 - alpha) $.

=== CE Output Characteristics & Operating Regions
Plotting collector current $I_C$ versus collector-emitter voltage $V_"CE"$ for constant base currents $I_B$:
1. *Cutoff Region ($V_"BE" < 0.7" V", I_B = 0$):* Both junctions reverse biased. $I_C approx 0$. Transistor is OFF (open switch).
2. *Active Region ($V_"BE" approx 0.7" V", V_"CE" > 1" V"$):* Emitter-Base junction forward biased, Collector-Base junction reverse biased. $I_C = beta I_B$. Transistor acts as linear amplifier.
3. *Saturation Region ($V_"CE" < 0.2" V"$):* Both junctions forward biased. $I_C$ independent of $I_B$. Transistor is fully ON (closed switch).
"""),
            ("Topic 2: Transistor as an Electronic Switch", """
=== Operation as a Switch
When driving a digital load (relay, LED, motor):
- *OFF State (Input $V_"in" = 0" V"$):* $I_B = 0$, transistor in cutoff, $I_C = 0$, $V_"out" = V_"CC"$.
- *ON State (Input $V_"in" = 5" V"$):* Sufficient base current is injected to drive the transistor into deep saturation:
$ I_"C(sat)" = (V_"CC" - V_"CE(sat)") / R_C approx (V_"CC") / R_C $
To ensure reliable saturation over temperature, design with an overdrive factor ($O D F = 2$ to $5$):
$ I_B >= (I_"C(sat)") / beta_"min" times O D F $
The required base resistance is:
$ R_B = (V_"in" - V_"BE(sat)") / I_B $.
"""),
            ("Topic 3: Digital Logic Gates, De Morgan & Adders", """
=== Universal Logic Gates (NAND & NOR)
NAND and NOR gates are called universal gates because any combinational Boolean function (AND, OR, NOT, XOR) can be constructed using only NAND gates or only NOR gates.
- *De Morgan's First Theorem:* The complement of a product equals the sum of the complements:
$ overline(A dot B) = overline(A) + overline(B) $
- *De Morgan's Second Theorem:* The complement of a sum equals the product of the complements:
$ overline(A + B) = overline(A) dot overline(B) $

=== Half Adder and Full Adder Circuits
1. *Half Adder:* Adds two 1-bit inputs $A$ and $B$:
  - $"Sum" (S) = A overline(B) + overline(A) B = A xor B$
  - $"Carry" (C) = A dot B$
  Realized with one 2-input XOR gate and one 2-input AND gate.
2. *Full Adder:* Adds three 1-bit inputs ($A, B, C_"in"$):
  - $"Sum" (S) = A xor B xor C_"in"$
  - $"Carry" (C_"out") = A B + B C_"in" + A C_"in" = A B + C_"in"(A xor B)$
  Constructed using two Half Adders and one OR gate.
"""),
            ("VIT Faculty Exam Insights & Common Traps", """
- *BJT Saturation Condition:* Never assume $I_C = beta I_B$ in the saturation region! In saturation, $I_C < beta I_B$; the collector current is limited entirely by the external collector resistor $R_C$ and supply voltage $V_"CC"$.
- *De Morgan's Inversion Line:* When applying De Morgan's theorem, "break the line and change the sign": a NAND over-bar splits into separate inverted bars connected by an OR sign ($+$).
"""),
            ("Quick Self-Test Checklist Before Your Exam", """
1. Can you derive $beta = alpha / (1 - alpha)$ from fundamental current equations?
2. Can you sketch and label the three operating regions on CE output characteristics?
3. How do you design $R_B$ and $R_C$ for a transistor operating as an LED switch?
4. Can you draw the full schematic of a Full Adder using two Half Adders and an OR gate?
""")
        ]
    }
]

def generate_typst_file(module_data, output_path):
    table_headers_str = ", ".join(f"[*{h}*]" for h in module_data["table_headers"])
    table_rows_str = ""
    for r in module_data["table_rows"]:
        if len(r) == 3:
            table_rows_str += f"  [{r[0]}], [{r[1]}], [{r[2]}],\n"
        elif len(r) == 4:
            table_rows_str += f"  [{r[0]}], [{r[1]}], [{r[2]}], [{r[3]}],\n"

    sections_str = ""
    for s_title, s_body in module_data["sections"]:
        sections_str += f"\n= {s_title}\n\n{s_body}\n"

    cols = "(2fr, 3fr, 2.5fr)" if len(module_data["table_headers"]) == 3 else "(2fr, 2fr, 2fr, 2fr)"

    typst_content = f"""
#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.2cm, right: 2.2cm),
  header: context {{
    if here().page() > 1 {{
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: luma(90))[VIT {module_data["code"]} --- Module {module_data["num"]}: {module_data["short_title"]}]],
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
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT {module_data["code"]} --- Module {module_data["num"]}: {module_data["short_title"]}] \\
  #v(2mm)
  #text(size: 15pt, weight: "black")[MODULE {module_data["num"]}: {module_data["title"]}] \\
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[({module_data["co"]})] \\
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Complete Study Textbook, Step-by-Step Derivations & VIT FAT Question Bank] \\
  #text(size: 9pt, fill: luma(100))[Aligned with VIT {module_data["code"]} Official Syllabus, VIT Department Question Bank, and VIT FAT Past Papers]
]

#v(3mm)
#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 9pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Textbook (All Syllabus Topics):]
  {module_data["scope"]}
]

#v(2mm)
#outline(title: "Contents", depth: 2, indent: auto)
#v(2mm)

= VIT FAT Exam Blueprint & Master Formula Sheet for Module {module_data["num"]}

{module_data["blueprint"]}

#v(2mm)
#table(
  columns: {cols},
  stroke: 0.5pt + luma(180),
  inset: 6.5pt,
  {table_headers_str},
{table_rows_str}
)

{sections_str}
"""
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(typst_content)

def main():
    os.makedirs("public/pdfs/basic_eng", exist_ok=True)
    for m in BEEE_MODULES:
        typ_path = f"public/pdfs/basic_eng/BEEE_MOD-{m['num']}.typ"
        pdf_path = f"public/pdfs/basic_eng/BEEE_MOD-{m['num']}.pdf"
        generate_typst_file(m, typ_path)
        print(f"Generated {typ_path}")
        cmd = f"/opt/homebrew/bin/typst compile '{typ_path}' '{pdf_path}'"
        res = subprocess.run(cmd, shell=True, capture_output=True, text=True)
        if res.returncode != 0:
            print(f"Error compiling {typ_path}:", res.stderr)
        else:
            print(f"Successfully compiled {pdf_path}")

if __name__ == "__main__":
    main()
