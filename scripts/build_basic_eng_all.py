import subprocess
import os

ENG_DIR = "/Users/yashaswivunnam/Desktop/Calculus/FATkilla/public/pdfs/basic_eng"
os.makedirs(ENG_DIR, exist_ok=True)

def compile_typ(name, content):
    typ_path = os.path.join(ENG_DIR, f"{name}.typ")
    pdf_path = os.path.join(ENG_DIR, f"{name}.pdf")
    with open(typ_path, "w", encoding="utf-8") as f:
        f.write(content)
    
    cmd = f'export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:$PATH"; typst compile "{typ_path}" "{pdf_path}"'
    res = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    if res.returncode != 0:
        print(f"Error compiling {name}: {res.stderr}")
        return False
    else:
        print(f"Successfully compiled {name}.pdf")
        return True

def get_header(mod_num, title, co, short_title):
    return f"""
#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.2cm, right: 2.2cm),
  header: context {{
    if here().page() > 1 {{
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: luma(90))[VIT BACEE101 --- Module {mod_num}: {short_title}]],
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
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT BACEE101 --- Module {mod_num}: {short_title}] \\
  #v(2mm)
  #text(size: 15pt, weight: "black")[MODULE {mod_num}: {title.upper()}] \\
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[({co})] \\
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Complete Study Textbook, Step-by-Step Derivations & VIT FAT Question Bank] \\
  #text(size: 9pt, fill: luma(100))[Aligned with Official VIT BACEE101 Course Page Syllabus, Question Bank, and Past FAT Papers]
]

#v(3mm)
"""

# ==================== MODULE 1 ====================
mod1 = get_header(1, "Principles of Electrical Engineering: Circuits & Power Conversion Equipment", "CO: 1", "Electrical Circuits & Machines") + """
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
"""

# ==================== MODULE 2 ====================
mod2 = get_header(2, "Foundations of Electronics and Communication Systems", "CO: 2", "Electronics & Communications") + """
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
"""

# ==================== MODULE 3 ====================
mod3 = get_header(3, "Engineering Graphics and CAD", "CO: 3", "Graphics & CAD") + """
#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 9pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Textbook (Official VIT Syllabus - All 10 Topics):]
  (1) Engineering Drawing Introduction & Applications of CAD in Mechanical and Civil Engineering, (2) Drawing Sheet Layout, Types of Lines, Lettering Standard, Importance of Dimensioning, (3) Elements of Dimensioning, Dimensioning Systems, Rules & Practice, (4) Orthographic Projection Principles: First Angle vs. Third Angle, (5) Orthographic projection of Regular Solids in simple positions (Cube, Cylinder, Cone), (6) Orthographic projection of Prisms and Pyramids, (7) Free-hand sketching practice of simple components, (8) Isometric Projection of regular solids, (9) Perspective Projection of Cube (Visual Ray method), and (10) Drawing of a simple residential floor plan.
]

#v(2mm)
= VIT FAT Exam Blueprint & Master Principles

Module 3 carries *20 to 25 marks* in BACEE101 FAT:
1. *First Angle vs Third Angle Projections (10 Marks):* Comparison table, quadrants, relative positions of object, observer, and plane, and drawing the standard projection symbols.
2. *Orthographic Views of Solids (10 Marks):* Front View (Elevation), Top View (Plan), and Side View (End view) of cubes, cylinders, cones, pyramids, and prisms with axis perpendicular or parallel to reference planes.
3. *Isometric Projections (10 Marks):* Constructing isometric scale ($"Isometric Length" = sqrt(2/3) times "True Length" approx 0.816 times "True Length"$) and drawing isometric views of cones, cylinders, and stepped blocks.

#table(
  columns: (2fr, 2fr, 2fr),
  inset: 6pt,
  stroke: 0.4pt + luma(180),
  align: (left, left, left),
  [*Feature*], [*First Angle Projection (ISO/Indian Std)*], [*Third Angle Projection (USA/AASHTO)*],
  [Object Location], [Object lies in First Quadrant (between observer and plane).], [Object lies in Third Quadrant (plane between observer and object).],
  [Plane of Projection], [Opaque plane; views projected onto opposite side.], [Transparent plane; views projected directly onto nearest plane.],
  [Top View (Plan)], [Drawn STRICTLY BELOW Front View.], [Drawn STRICTLY ABOVE Front View.],
  [Left Hand Side View], [Drawn to the RIGHT of Front View.], [Drawn to the LEFT of Front View.],
  [Right Hand Side View], [Drawn to the LEFT of Front View.], [Drawn to the RIGHT of Front View.],
  [Standard Symbol], [Frustum of cone with small circle on left and trapezoid on right.], [Trapezoid on left and small circle on right.]
)

= Drawing Standards & Dimensioning Rules

== Bureau of Indian Standards (BIS / ISO) Line Types
- *Continuous Thick Line (0.5 mm):* Visible outlines and visible edges of the object.
- *Continuous Thin Line (0.2 mm):* Dimension lines, extension lines, leader lines, hatching lines for section planes.
- *Dashed Medium Line (0.3 mm):* Hidden outlines and hidden edges.
- *Chain Thin Line (0.2 mm, long dash - short dash):* Center lines, axes of symmetry, pitch circles.
- *Continuous Freehand Line (0.2 mm):* Break line for irregular boundaries.

== Dimensioning Systems & Rules
1. *Aligned System:* Dimensions are placed perpendicular to the dimension line such that they can be read from the bottom or right-hand edge of the drawing sheet.
2. *Unidirectional System:* Dimensions are placed horizontally such that all values can be read exclusively from the bottom of the drawing sheet.
3. *Fundamental Dimensioning Rules:*
   - Dimension lines should never cross each other or extension lines.
   - Dimensions must be placed outside the view outlines whenever possible.
   - Never duplicate dimensions across multiple views.
   - Center lines should never be used as dimension lines.

= Orthographic, Isometric & Perspective Projections

== Orthographic Projection of Solids
- *Cube / Square Prism:* Front view is a square/rectangle; Top view is a square showing base vertices.
- *Cylinder:* Axis perpendicular to HP: Front view is a rectangle of width $D$ and height $H$; Top view is a true circle of diameter $D$. Axis parallel to HP: Front view is a circle; Top view is a rectangle.
- *Cone:* Axis perpendicular to HP: Front view is an isosceles triangle of base $D$ and height $H$; Top view is a circle with a central apex point.

== Isometric Projection & Isometric Scale
An isometric projection represents a 3D object on a single 2D plane by orienting all three mutually perpendicular coordinate axes at equal angles of $120 degree$ to each other.
- The three axes are called *Isometric Axes*. Lines parallel to these axes are *Isometric Lines*.
- Foreshortening Derivation:
  $ "Isometric Length" / "True Length" = cos(45 degree) / cos(30 degree) = (1 / sqrt(2)) / (sqrt(3) / 2) = sqrt(2 / 3) approx 0.8165 $
- In *Isometric Projection*, dimensions are drawn to the foreshortened isometric scale ($81.6%$). In *Isometric View (Isometric Drawing)*, true dimensions are used directly for drafting convenience.

== Perspective Projection: Visual Ray Method
In perspective projection, the eye of the observer is at a finite distance (Station Point, SP) from the Picture Plane (PP). Lines drawn from the station point to different points on the object are *Visual Rays*. Where these rays pierce the picture plane determines the perspective projection. Objects farther from the observer appear proportionally smaller, closely mimicking human visual perception.
"""

# ==================== MODULE 4 ====================
mod4 = get_header(4, "Manufacturing Processes, Energy Conversions and Mechanical Automation", "CO: 4", "Manufacturing & Automation") + """
#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 9pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Textbook (Official VIT Syllabus - All 13 Topics):]
  (1) Metal Casting: Sand casting, patterns, moulding, defects. Metal Forming: Rolling, Forging, Extrusion, (2) Metal Joining: Arc welding, TIG, MIG, (3) Machining: Turning, Drilling, Milling, Grinding, Shaper, CNC, (4) Additive Manufacturing: FDM, (5) IC Engines: 2-stroke vs 4-stroke, CI vs SI, (6) Energy Sources: Thermal, Hydro, Nuclear power plants, (7) Renewable Energy: Solar, Wind, Fuel cells, (8) Refrigeration & AC, (9) Mechanisms: Kinematic links, pairs, Gruebler's equation, (10) Four-Bar Mechanism inversions, (11) Robotics: Structure & classifications, (12) Robotic Actuation: Hydraulic vs Pneumatic, and (13) Contemporary Topics.
]

#v(2mm)
= VIT FAT Exam Blueprint & Master Principles

Module 4 is the largest mechanical/automation module, carrying *25 to 30 marks* in BACEE101 FAT:
1. *Manufacturing & Joining (10 Marks):* Sand casting process, patterns, gating system, casting defects (blowholes, shrinkage cavity), or TIG vs MIG arc welding comparison.
2. *Thermal Systems & Engines (10 Marks):* Working of 4-stroke SI (Petrol) vs CI (Diesel) engines, PV and TS indicator diagrams, or Thermal/Nuclear power plant layout.
3. *Mechanisms & Robotics (10 Marks):* Kinematic pairs, Gruebler's DOF mobility criterion ($F = 3(n - 1) - 2 j_1 - j_2$), Four-Bar inversions, and comparison between Hydraulic vs Pneumatic robotic actuators.

#table(
  columns: (1.5fr, 2fr, 2fr),
  inset: 6pt,
  stroke: 0.4pt + luma(180),
  align: (left, left, left),
  [*Topic*], [*Governing Equation / Core Mechanism*], [*VIT Exam Key Insight*],
  [Gruebler's Mobility Equation], [$F = 3(n - 1) - 2 j_1 - j_2$], [$n$ = number of links, $j_1$ = lower pairs with 1 DOF, $j_2$ = higher pairs with 2 DOF.],
  [Grashof's Law (Four-Bar)], [$s + l <= p + q$], [At least one link can fully rotate $360 degree$ if sum of shortest and longest links $<=$ sum of others.],
  [SI vs CI Engines], [Otto cycle (constant volume heat addition) vs Diesel cycle (constant pressure heat addition)], [SI uses spark plug + carburetor/port fuel injection; CI uses fuel injector + high compression ($16:1 - 22:1$).],
  [TIG vs MIG Welding], [TIG: Non-consumable tungsten electrode + argon shield; MIG: Consumable wire spool electrode + $C O_2$/argon], [TIG produces cleanest aerospace welds; MIG offers high deposition rate for mass production.],
  [COP of Refrigerator], [$"COP"_R = Q_L / W_"in" = T_L / (T_H - T_L)$ (Carnot Limit)], [Coefficient of Performance $> 1$; heat pump $"COP"_"HP" = "COP"_R + 1$.],
  [Hydraulic vs Pneumatic], [Hydraulic: Incompressible oil, high pressure ($> 200 "bar"$), high payload; Pneumatic: Compressible air ($6 - 10 "bar"$), fast, clean], [Hydraulic delivers immense force but prone to fluid leaks; pneumatic is bouncy, fast, and spark-safe.]
)

= Manufacturing Processes: Casting, Forming, Joining & AM

== Metal Casting & Sand Moulding
Metal casting pours molten metal into a refractory cavity to solidify into near-net-shape components:
- *Moulding Flask:* Consists of the upper *Cope* and lower *Drag*, separated by the *Parting Line*.
- *Pattern:* Replica of the final part, scaled up to incorporate pattern allowances:
  1. *Shrinkage Allowance:* Compensates for volumetric contraction during liquid-to-solid phase change and solid thermal cooling.
  2. *Draft Allowance:* Taper ($1 degree - 3 degree$) provided on vertical pattern faces to facilitate clean withdrawal from sand without destroying cavity walls.
  3. *Machining Allowance:* Extra stock for post-casting surface finishing.
- *Gating System:* Pouring basin $arrow.r$ Down sprue $arrow.r$ Runner $arrow.r$ Ingate $arrow.r$ Mould Cavity $arrow.r$ Riser (reservoir of molten metal that feeds shrinking metal until solidification completes).
- *Casting Defects:* Blowholes (trapped gas/steam), Shrinkage cavities (inadequate riser feeding), Cold shut (incomplete fusion between two colliding metal streams), and Sand wash.

== Metal Forming & Welding Processes
- *Metal Forming:* Bulk plastic deformation without material removal. *Rolling* passes metal between rotating rolls to reduce thickness; *Forging* hammers or presses billets into dies (hot or cold); *Extrusion* pushes metal through a shaped die orifice (like toothpaste).
- *TIG (Tungsten Inert Gas / GTAW):* Uses a non-consumable tungsten electrode under argon gas shielding. Filler rod is fed manually. Produces exceptionally clean, high-precision welds on stainless steel, aluminum, and titanium.
- *MIG (Metal Inert Gas / GMAW):* Uses a continuous consumable wire spool electrode automatically fed through the welding torch with shielding gas ($A r / C O_2$). Faster deposition, ideal for structural steel fabrication.

== Additive Manufacturing: Fused Deposition Modelling (FDM)
A layer-by-layer 3D printing process where thermoplastic filament (PLA, ABS, PETG) is driven into an extrusion nozzle heated above glass transition temperature, extruded through a fine orifice ($0.4 "mm"$), and deposited onto a build plate along toolpaths generated by slicer software (G-code).

= Energy Systems, Kinematics & Robotics

== 4-Stroke SI vs CI Internal Combustion Engines
1. *Suction Stroke:* SI admits air-fuel mixture through intake valve; CI admits pure air only.
2. *Compression Stroke:* SI compresses mixture to ratio $8:1 - 11:1$; CI compresses air to $16:1 - 22:1$, raising air temperature above the autoignition temperature of diesel fuel ($> 550 degree upright("C")$).
3. *Power (Expansion) Stroke:* SI ignites fuel via electric spark plug; CI injects atomized liquid diesel through high-pressure fuel injector, spontaneously igniting upon contact with hot compressed air.
4. *Exhaust Stroke:* Piston sweeps combustion exhaust gases out through open exhaust valve.

== Kinematic Mechanisms & Gruebler's Mobility
A *Kinematic Link* is a rigid body. A *Kinematic Pair* connects two links permitting relative motion:
- *Lower Pair:* Surface contact (turning/revolute pair, sliding/prismatic pair, screw pair).
- *Higher Pair:* Point or line contact (cams, gears, ball bearings).
By Gruebler's Criterion, the Degree of Freedom (mobility $F$) of a planar mechanism is:
$ F = 3(n - 1) - 2 j_1 - j_2 $
For a standard Four-Bar Chain ($n = 4$ links, $j_1 = 4$ revolute hinges, $j_2 = 0$):
$ F = 3(4 - 1) - 2(4) - 0 = 9 - 8 = 1 quad ("Single degree of freedom constraint") $

*Four-Bar Mechanism Inversions:*
1. *Crank-Rocker Mechanism:* Shortest link adjacent to fixed link rotates fully ($360 degree$), driving the opposite link to oscillate back and forth.
2. *Double-Crank (Drag-Link) Mechanism:* Shortest link is fixed; both connected links rotate complete $360 degree$ circles.
3. *Double-Rocker Mechanism:* Link opposite to shortest link is fixed; both connected links merely oscillate.
"""

# ==================== MODULE 5 ====================
mod5 = get_header(5, "Bio-Inspired Design in Engineering", "CO: 5", "Bio-Inspired Design") + """
#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 9pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Textbook (Official VIT Syllabus - All Topics):]
  (1) Principles of Biomimicry and Bio-Inspired Design in Engineering, (2) Self-cleaning surfaces (Lotus Effect), (3) Aerodynamic drag reduction (Shark-skin Denticles & Kingfisher Beak), (4) Dry reversible adhesion (Gecko Footpad van der Waals forces), (5) Structural lightweight engineering (Honeycomb sandwich structures), and (6) Biomimetic robotics.
]

#v(2mm)
= Principles of Biomimicry & Bio-Inspired Engineering

Biomimicry is the conscious emulation of nature's genius: translating biological adaptations perfected through millions of years of evolution into innovative human engineering solutions.

#table(
  columns: (1.5fr, 2fr, 2.5fr),
  inset: 6pt,
  stroke: 0.4pt + luma(180),
  align: (left, left, left),
  [*Biological Model*], [*Observed Natural Mechanism*], [*Engineering Application & Impact*],
  [Lotus Leaf (*Nelumbo nucifera*)], [Micro-papillae coated with epicuticular wax crystals, water contact angle $> 150 degree$.], [Self-cleaning glass, superhydrophobic non-wetting coatings, anti-icing aircraft wings.],
  [Shark Skin (*Denticles*)], [Riblet-shaped micro-grooves that channel water flow and suppress turbulent vortex formation.], [Drag-reducing competitive swimwear, fuel-saving marine hull paints, aircraft fuselage wraps.],
  [Kingfisher Beak], [Streamlined wedge-shaped beak designed for silent entry from air into dense water.], [Shinkansen 500 series bullet train nose cone, eliminating tunnel sonic boom noise and saving 15% energy.],
  [Gecko Footpad], [Millions of microscopic setae terminating in billions of nanoscale spatulae ($200 "nm"$).], [Dry adhesive tapes, space gripper mechanisms in zero-g vacuum, wall-climbing inspection robots.],
  [Bees Honeycomb], [Hexagonal columnar array with $120 degree$ dihedral angles, maximizing volume per boundary area.], [Aerospace lightweight sandwich composite panels, crash-absorbing automotive crumple zones.]
)

= High-Yield Bio-Inspired Engineering Case Studies

== The Lotus Effect: Superhydrophobicity & Self-Cleaning
- *Cassie-Baxter State:* Droplets rest on top of microscopic surface asperities with air pockets trapped underneath:
  $ cos theta^* = f_1 cos theta - f_2 $
  where $f_1$ is liquid-solid contact fraction and $f_2$ is liquid-air fraction.
- Water droplets remain almost perfectly spherical (contact angle $theta > 150 degree$, roll-off tilt angle $< 5 degree$). As droplets roll off under slight gravity, they collect dust particles and debris, keeping surfaces pristine without chemical detergents.

== Gecko Dry Adhesion: Van der Waals Nanotechnology
Unlike tree frogs that secrete wet mucus, geckos climb smooth vertical glass using purely dry, non-sticky physical forces:
- Each toe bears thousands of microscopic hairs (*setae*), which branch into hundreds of nanoscale tips (*spatulae*).
- When pressed against a surface, these billions of spatulae conform intimately to atomic surface irregularities, bringing atoms within sub-nanometer proximity where weak intermolecular *van der Waals attractions* accumulate into huge macroscopic holding forces ($> 20 "N"$ per toe).
- Release occurs instantly by changing the peeling angle ($> 30 degree$), which decouples the van der Waals bonds with zero mechanical residue.
"""

compile_typ("BEEE_MOD-1", mod1)
compile_typ("BEEE_MOD-2", mod2)
compile_typ("BEEE_MOD-3", mod3)
compile_typ("BEEE_MOD-4", mod4)
compile_typ("BEEE_MOD-5", mod5)
print("Finished compiling all Basic Engineering modules!")
