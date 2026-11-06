import subprocess

typst_code = """#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.3cm, right: 2.3cm),
  header: context {
    let p = counter(page).get().first()
    if p > 1 [
      #grid(
        columns: (1fr, 1fr),
        align: (left, right),
        text(size: 8pt, fill: rgb(101, 106, 118))[VIT BACEE101 — Module 4: Manufacturing Processes, Energy & Automation],
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
  #text(size: 13.5pt, weight: "bold", fill: rgb(139, 0, 0))[MODULE 4: MANUFACTURING PROCESSES, ENERGY CONVERSIONS AND MECHANICAL AUTOMATION (CO: 4)] \
  #v(2pt)
  #text(size: 10.5pt, weight: "bold")[Complete Comprehensive Textbook, Step-by-Step Theory, Schematics & Solved VIT FAT Question Bank] \
  #v(1pt)
  #text(size: 8.5pt, fill: rgb(85, 85, 85))[Aligned with Official VIT BACEE101 / BAEEE101 Syllabus, SMEC Question Bank & Past FAT Papers]
]

#v(6pt)
#rect(width: 100%, fill: rgb(248, 249, 250), stroke: 0.8pt + rgb(209, 213, 219), radius: 3pt, inset: 8pt)[
  #text(size: 8.5pt)[*Scope of This Comprehensive Textbook (All 13 Syllabus Topics):*
  (1) Metal Casting: Sand casting elements, Pattern types, Moulding, Casting defects; Metal Forming: Rolling, Forging, Extrusion, Hot vs. Cold working, Forging operations & defects;
  (2) Metal Joining: Arc welding, TIG (GTAW) vs. MIG (GMAW) principles & comparison, Weld joints;
  (3) Machining Processes: Turning, Drilling, Milling, Grinding, Shaping, Planing, Sawing, Broaching, CNC G/M-codes;
  (4) Additive Manufacturing: FDM 3D printing working principle, materials, slicing, infill;
  (5) Internal Combustion Engines: 4-Stroke SI vs CI engines, Otto vs Diesel cycles, 2-Stroke vs 4-Stroke;
  (6) Energy Sources and Power Plants: Layouts of Thermal, Hydro-Electric, and Nuclear power stations;
  (7) Sustainable & Renewable Energy: Solar PV, Wind Mills, Fuel Cells;
  (8) Refrigeration and Air Conditioning: VCRS cycle, COP, AC systems;
  (9) Mechanisms & Mobility: Kinematic links and pairs, Grübler's mobility equation;
  (10) Four-Bar Mechanisms: Grashof's law, Crank-Rocker, Double-Crank, Double-Rocker, Slider-Crank inversions;
  (11) Robotics: Configurations (Cartesian, SCARA, Articulated), DOF, Work envelope;
  (12) Actuators: Hydraulic vs. Pneumatic actuation, force density, stiffness, applications;
  (13) Solved VIT FAT Past Examination Questions with step-by-step solutions.]
]

#v(4pt)
#outline(indent: 1.2em)
#v(8pt)

= 1. VIT FAT Exam Blueprint & High-Yield Strategy for Module 4

In the VIT Final Assessment Test (BACEE101 / BAEEE101 100-mark paper), Module 4 is universally recognized as the largest single module by syllabus breadth. In the exam blueprint:
- *Question Type A (10 Marks):* Comparison between Four-Stroke SI (Otto) and Four-Stroke CI (Diesel) engines, or working layout of Thermal / Nuclear / Hydroelectric power plants.
- *Question Type B (10 Marks):* Kutzbach / Grübler mobility criterion ($F = 3(n-1) - 2 j_1 - j_2$) with DOF calculation for 4-bar linkage or slider-crank, Grashof's theorem, and inversions.
- *Question Type C (10 Marks):* Manufacturing processes: Sand casting elements and defects (blowholes, cold shut, hot tears) OR comparative analysis of TIG (GTAW) vs MIG (GMAW) welding.
- *Question Type D (10 Marks):* Robotics configurations (Cartesian, SCARA, Articulated) and Hydraulic vs. Pneumatic actuation technology selection.

#table(
  columns: (1.5fr, 2.5fr, 2fr),
  fill: (x, y) => if y == 0 { rgb(234, 236, 239) } else { none },
  stroke: 0.5pt + rgb(209, 213, 219),
  inset: 6pt,
  [*FAT Topic Area*], [*Key Concepts & Equations*], [*Common Exam Traps / Guidance*],
  [Metal Casting & Forming], [Cope/Drag flask, gating ratio, riser design, Chvorinov's Rule, Hot vs Cold working], [Differentiate clearly between Blowholes (gas porosity) and Shrinkage Cavities.],
  [Welding & Joining], [TIG non-consumable tungsten, MIG continuous wire spool, shielding gases (Ar, He, CO2)], [Never state TIG uses consumable electrode; explain polarity correctly.],
  [IC Engines], [Otto vs Diesel cycle, compression ratio r = (Vc + Vs)/Vc, spark vs auto-ignition], [Thermal efficiency of CI is higher than SI due to higher compression ratio (16-22 vs 8-11).],
  [Kinematic Mobility], [Grübler: F = 3(n-1) - 2 j1 - j2, Grashof: s + l <= p + q], [Count fixed frame as link 1; a slider is a 1-DOF prismatic lower pair.],
  [Power Plants & HVAC], [Rankine steam cycle, VCRS COP = Q_L / W_in, 1 TR = 3.517 kW], [Explain purpose of economizer and superheater in boilers; know phase changes.],
  [Robotics & Actuators], [Cartesian, SCARA, Articulated 6-DOF, Hydraulic (Pascal law) vs Pneumatic], [Hydraulic provides huge force density but has leak hazards; Pneumatic is clean and fast.]
)

= 2. Metal Casting Processes, Sand Moulding & Casting Defects

== 2.1 Sand Casting Fundamentals and Foundry Flask Architecture
Metal casting is a primary manufacturing process wherein molten liquid metal is poured into a prepared refractory mold cavity conforming to the external contour of the desired component, followed by controlled cooling, solidification, and extraction.

=== Elements of a Standard Sand Mold Assembly:
1. *Flask:* The rigid metal or wood container holding the molding sand. It is split horizontally into the upper half (*Cope*) and lower half (*Drag*). When an intermediate section is needed for complex geometries, it is termed the *Cheek*.
2. *Parting Line:* The physical separation interface dividing the cope and drag halves of the flask.
3. *Pouring Basin (Cup):* A flared reservoir at the top of the cope that receives the molten stream from the ladle and minimizes turbulence.
4. *Sprue:* A vertically tapered conical channel conducting molten metal downward from the pouring basin into the runner. Tapering prevents aspiration of atmospheric air into the stream.
5. *Runner & Runner Extension:* Horizontal distribution channels at the parting line that transport molten metal to the ingates. The runner extension acts as a trap capturing slag, dross, and oxide inclusions.
6. *Ingates (Gates):* Specialized orifices connecting the runner directly to the mold cavity, regulating liquid metal velocity.
7. *Riser (Feeder):* A reservoir of liquid metal that acts as a thermal buffer, feeding molten metal back into the casting cavity to compensate for liquid and solidification volumetric shrinkage (4% to 8%). The riser must solidify *after* the main casting.
8. *Core:* A separate insert made of baked resin-bonded sand placed inside the mold cavity to form hollow internal passages, bores, or undercuts.
9. *Core Prints & Chaplets:* Core prints are recesses supporting the core ends. *Chaplets* are small metallic structural supports (made of the same metal as the casting) placed inside the cavity to prevent core deflection under buoyant ferrostatic forces. They fuse permanently into the solidifying casting.
10. *Venting Holes:* Narrow perforations punctured into the cope sand to allow steam, volatilized binder gases, and displaced air to exhaust safely into the atmosphere.

== 2.2 Types of Patterns and Allowances
A *pattern* is a physical replica of the exterior of the component, modified by dimensional allowances:
- *Shrinkage Allowance:* Patterns are enlarged (1% to 2%) to compensate for contraction during cooling from solidification temperature to room temperature.
- *Draft (Taper) Allowance:* Vertical surfaces receive a 1° to 2° slope to facilitate clean pattern withdrawal from compacted sand without wall erosion.
- *Machining (Finish) Allowance:* Extra material (2 to 5 mm) provided on surfaces intended for subsequent precision machining.
- *Shake (Rapping) Allowance:* Slight negative allowance compensating for mold cavity enlargement caused by rapping the pattern during extraction.

=== Pattern Classifications:
1. *Solid (Single-Piece) Pattern:* Simple geometry, entirely located within one mold half (drag).
2. *Split Pattern:* Complex components split along the parting plane into cope and drag segments aligned with dowel pins.
3. *Match-Plate Pattern:* Cope and drag pattern halves permanently affixed to opposite sides of a rigid metal or wood plate, utilized in high-volume automated molding machines.
4. *Gated Pattern:* Integral pattern assembly containing sprues, runners, and gates directly attached.
5. *Sweep Pattern:* A contoured wooden template swept around a central vertical spindle to generate large rotationally symmetric molds (e.g., bells, kettles).

== 2.3 Comprehensive Classification of Casting Defects
1. *Blowholes & Pinholes:* Smooth, spherical or oval internal gas cavities (blowholes) or fine surface pinholes. *Root Cause:* High moisture content in molding sand, low sand permeability, inadequate venting, or dissolved gases in melt. *Remedy:* Increase sand permeability, dry sand properly, and punch adequate vent holes.
2. *Cold Shut & Misrun:* A *Misrun* occurs when molten metal solidifies prematurely before completely filling the mold cavity. A *Cold Shut* appears as a seam or crack where two converging streams of molten metal meet but fail to fuse due to insufficient thermal energy. *Root Cause:* Low pouring temperature, excessively thin wall sections, slow pouring rate, or choked gating. *Remedy:* Increase pouring temperature, widen gating cross-sections, and accelerate pouring rate.
3. *Hot Tears (Hot Cracking):* Severe, jagged, irregular internal or external tears formed during late stages of solidification. *Root Cause:* Severe restraint to natural thermal contraction exerted by an overly rigid mold or core, or sharp re-entrant internal corners causing stress concentration. *Remedy:* Use collapsible sand formulations (adding wood flour/organic starch), and incorporate generous fillet radii.
4. *Shrinkage Cavity:* Void or depression formed near heavy sections or hot spots. *Root Cause:* Inadequate or prematurely frozen risers. *Remedy:* Apply Chvorinov's rule to design adequate directional solidification and enlarge riser modulus.
5. *Sand Wash and Scabs:* Rough irregular projections of excess metal caused by erosion of mold sand walls by turbulent metal stream. *Remedy:* Improve sand compaction, apply mold wash coatings, and streamline runner entry.

= 3. Metal Forming Processes: Hot vs. Cold Working, Forging & Extrusion

Metal forming exploits the plastic deformation capability of metallic alloys above their yield point without fracturing, conserving workpiece mass.

== 3.1 Hot Working versus Cold Working
The fundamental dividing line between hot and cold mechanical working is the *Recrystallization Temperature* ($T_"rec" approx 0.4 "to" 0.5 T_m$ in Kelvin):

#table(
  columns: (2fr, 2.5fr, 2.5fr),
  fill: (x, y) => if y == 0 { rgb(234, 236, 239) } else { none },
  stroke: 0.5pt + rgb(209, 213, 219),
  inset: 6pt,
  [*Characteristic*], [*Hot Working ($T > T_"rec"$)*], [*Cold Working ($T < T_"rec"$)*],
  [Operating Temperature], [Above recrystallization temp (0.5 to 0.75 $T_m$). Steel: 950°C to 1250°C.], [Below recrystallization temp; typically ambient room temperature (25°C to 150°C).],
  [Strain Hardening], [Zero strain hardening; continuous dynamic recrystallization anneals grains.], [Pronounced strain hardening / work hardening occurs; dislocation density increases.],
  [Deformation Force & Power], [Low yield strength at high temperature requires significantly smaller press forces.], [High yield strength requires massive press tonnage and heavy, rigid machine frames.],
  [Mechanical Properties], [Refines coarse cast dendritic grain structure, eliminates porosity, improves ductility.], [Increases yield strength, tensile strength, and surface hardness; decreases ductility.],
  [Surface Finish & Tolerances], [Poor surface finish due to rapid surface oxidation forming thick oxide scale.], [Pristine, smooth, shiny surface finish with ultra-tight dimensional tolerances (+-0.02 mm).],
  [Residual Stresses], [Negligible residual stresses remaining inside component.], [Substantial internal residual stresses induced; often requires stress relief annealing.]
)

== 3.2 Primary Forming Operations: Forging, Rolling & Extrusion
1. *Forging:* Controlled plastic shaping of metal workpieces using compressive impact blows (hammers) or continuous mechanical/hydraulic press pressure:
   - *Open-Die Forging (Smith Forging):* Workpiece is deformed between flat or simple contoured dies without lateral constraint. Used for massive shafts and low volumes.
   - *Closed-Die (Impression-Die) Forging:* Preheated billet is compressed inside precision machined cavity dies. Excess metal flows into a peripheral gutter forming *flash*, which restricts lateral escape, forcing metal into intricate die corners. Flash is subsequently trimmed off.
   - *Basic Forging Operations:* *Fullering* (reducing cross-section while distributing length), *Edging* (gathering metal into localized regions), *Bending*, *Upsetting* (increasing cross-sectional area while reducing axial height), and *Punching*.
2. *Rolling:* Compressing a metal ingot, bloom, slab, or billet between two counter-rotating cylindrical rolls to reduce thickness while elongating length. Produces plates, sheets, rails, and I-beams.
3. *Extrusion:* Forcing a heated metal billet contained inside a heavy chamber through a die orifice under enormous hydraulic ram pressure:
   - *Direct (Forward) Extrusion:* Billet moves in the same direction as the advancing ram; severe container wall friction.
   - *Indirect (Backward) Extrusion:* Die is mounted on a hollow ram moving into the billet; zero container wall friction, requiring lower extrusion forces. Used for structural aluminum sections, tubes, and rods.

= 4. Metal Joining Processes: Arc Welding, TIG vs. MIG & Weld Joints

Welding produces a permanent metallurgical coalescence of materials by heating them to welding temperature, with or without application of pressure and filler metal.

== 4.1 Master Comparison: TIG (GTAW) versus MIG (GMAW) Welding
In VIT FAT papers, this direct comparative analysis is tested repeatedly for 10 marks:

#table(
  columns: (1.8fr, 2.6fr, 2.6fr),
  fill: (x, y) => if y == 0 { rgb(234, 236, 239) } else { none },
  stroke: 0.5pt + rgb(209, 213, 219),
  inset: 6pt,
  [*Parameter*], [*Tungsten Inert Gas Welding (TIG / GTAW)*], [*Metal Inert Gas Welding (MIG / GMAW)*],
  [Electrode Type], [Non-consumable pure or thoriated/zirconiated Tungsten electrode ($W$, melting point 3422°C).], [Consumable bare metallic wire electrode continuously fed from a motorized reel.],
  [Filler Metal Addition], [Separately fed by the welder's second hand or automated external cold-wire feeder.], [The consumable continuous wire electrode *itself* melts into the weld puddle as filler metal.],
  [Shielding Gas], [Strictly 100% pure inert gas: Argon (Ar) or Helium (He). Never reactive gases.], [Inert gases (pure Ar, He) for non-ferrous, or active mixtures (Ar + CO2 or pure CO2 for MAG steel).],
  [Deposition Rate & Speed], [Low deposition rate; slow travel speed. High operator manual dexterity needed.], [High deposition rate (3 to 5 times faster than TIG); continuous feed enables high productivity.],
  [Weld Quality & Aesthetics], [Exceptional precision, flawless surface aesthetics, zero weld spatter, ultra-clean joint.], [Good mechanical strength; produces moderate surface spatter requiring post-weld cleaning.],
  [Thickness Capability], [Best for thin sheets (< 6 mm), root passes in pipes, and precision micro-welds.], [Suitable for medium to heavy plates (> 3 mm to thick structural steel).],
  [Industrial Applications], [Aerospace airframes, titanium rocket casings, nuclear reactor tubing, bicycle frames.], [Automotive body assembly, heavy structural steel fabrication, pressure vessel seams.]
)

== 4.2 Standard Weld Joint Configurations
Five fundamental geometry configurations recognized by the American Welding Society (AWS):
1. *Butt Joint:* Two members lying in roughly the same plane joined at adjoining edges (Square, Single-V, Double-V, U-groove).
2. *Lap Joint:* Two overlapping plates joined with fillet welds on one or both edges.
3. *Tee (T) Joint:* Two members oriented at 90° to one another in the shape of a 'T'.
4. *Corner Joint:* Two plates joined at right angles along their outer or inner edges forming an 'L' shape.
5. *Edge Joint:* Two parallel plates with coincident edges joined along the seam.

= 5. Machining Processes & Machine Tools

Machining is a subtractive manufacturing process where sharp cutting tools mechanically shear away unwanted material in the form of chips to produce parts with micron-level tolerances.

== 5.1 Overview of Primary Machine Tools & Operations
1. *Lathe (The Mother of Machine Tools):* Workpiece rotates about a horizontal spindle axis while a single-point cutting tool moves linearly parallel (longitudinal turning) or perpendicular (facing) to the axis:
   - *Straight Turning:* Generates cylindrical outer surfaces.
   - *Facing:* Produces a flat, smooth perpendicular end face.
   - *Taper Turning:* Done via compound rest swiveling, tailstock offset, or taper turning attachment.
   - *Knurling:* Cold-forming diamond or straight textured gripping patterns on cylindrical handles using hardened rollers.
   - *Parting Off (Grooving):* Slicing finished components off bar stock.
2. *Drilling Machine:* Tool rotates and feeds axially into a stationary workpiece to generate round holes. Subsequent finishing operations:
   - *Boring:* Enlarging an existing hole using a single-point tool to achieve precise diameter and concentricity.
   - *Reaming:* Sizing and finishing an existing drilled hole with a multi-fluted tool to high precision (+-0.005 mm).
   - *Counterboring:* Stepping hole entrance with a flat-bottomed cylindrical recess for socket-head cap screws.
   - *Countersinking:* Beveling the hole entrance cone (82° to 90°) to accept flat-head screws flush.
   - *Tapping:* Cutting internal female screw threads using a tap tool.
3. *Milling Machine:* Workpiece is clamped to a multi-axis table while a multi-tooth rotating cutter removes metal:
   - *Up-Milling (Conventional):* Cutter teeth rotate *against* table feed direction. Chip thickness increases from zero to maximum; tool rubs initially, causing wear, but safe on older backlash-prone tables.
   - *Down-Milling (Climb):* Cutter teeth rotate *with* table feed direction. Chip thickness starts at maximum and tapers to zero. Superior surface finish and lower tool wear; requires backlash eliminator.
4. *Grinding Machine:* A finishing process utilizing an abrasive bonded wheel rotating at high peripheral speeds (30 m/s) to achieve surface roughness $R_a < 0.2 mu m$.
5. *Shaping vs. Planing:*
   - *Shaper:* Single-point cutting tool reciprocates horizontally over a stationary table during forward cutting stroke (using quick-return mechanism), table feeds incrementally. Best for small parts (< 600 mm).
   - *Planer:* Workpiece rests on a massive reciprocating table that traverses underneath stationary heavy cross-rail tools. Used for massive machine beds (several meters long).
6. *Introduction to Computer Numerical Control (CNC):*
   Modern CNC machine tools automate multi-axis toolpaths using alphanumeric programmed instructions:
   - *G-Codes (Preparatory):* Govern motion geometry: G00 (Rapid traverse), G01 (Linear interpolation with feed rate), G02 (Circular interpolation CW), G03 (Circular interpolation CCW), G28 (Return to machine reference home).
   - *M-Codes (Miscellaneous):* Auxiliary machine controls: M03 (Spindle ON clockwise), M05 (Spindle STOP), M08 (Coolant ON), M09 (Coolant OFF), M30 (Program end & reset).

= 6. Additive Manufacturing (AM) & Fused Deposition Modelling (FDM)

Additive manufacturing (3D printing) constructs physical 3D artifacts directly from computer-aided design (CAD) solid models by joining material layer-upon-layer, eliminating custom tooling and cutting dies.

== 6.1 Fused Deposition Modelling (FDM / FFF) Working Principle
FDM is the most widely deployed material extrusion 3D printing technology:
1. *Digital Workflow:* Solid CAD model -> export as standard triangulated mesh (.STL / .OBJ) -> Slicing software (Cura, PrusaSlicer) dissects model into horizontal slices (typical layer height 0.1 to 0.3 mm) -> generates toolpath G-code instructions.
2. *Extrusion Hardware Architecture:*
   - *Filament Spool:* Solid thermoplastic filament (diameter 1.75 mm or 2.85 mm).
   - *Cold End Drive Extruder:* Stepper motor with knurled hobbed gear driving filament forward.
   - *Hot End Assembly:* Thermal heat sink, PTFE/metal heat break, heater block with heating cartridge and thermistor, and brass/hardened steel orifice nozzle (0.4 mm).
   - *Heated Build Platform:* Bed heated to glass transition temperature ($T_g$) to ensure first-layer adhesion and prevent warping caused by thermal shrinkage.
3. *Material Deposition:* The filament is heated into a semi-molten viscoelastic state (200°C to 250°C) and extruded through the nozzle. The nozzle traverses in the $X-Y$ plane, depositing thin beads (*roads*) that fuse thermomechanically with adjacent roads and the underlying solidified layer.
4. *Layer-by-Layer Build:* Once a layer completes, the build platform lowers along the $Z$-axis by one layer height, and the subsequent layer is deposited.
5. *Support Structures & Infill:* Overhanging features steeper than 45° require temporary support structures. Solid internal volumes are printed as cellular infill patterns (Gyroid, Grid, Honeycomb) with programmable density (15% to 100%) to optimize strength-to-weight ratio.
6. *Common FDM Materials:*
   - *PLA (Polylactic Acid):* Biodegradable plant starch polymer, low melting point (190°C to 210°C), zero warping, excellent dimensional accuracy, brittle.
   - *ABS (Acrylonitrile Butadiene Styrene):* High impact resistance, heat deflection to 90°C, requires heated enclosure to prevent thermal shrinkage delamination.
   - *PETG:* Excellent chemical resistance, waterproof, ductile, easy printability.

= 7. Internal Combustion (IC) Engines: 4-Stroke SI vs. CI & Cycles

An Internal Combustion Engine converts chemical bond energy stored in hydrocarbon fuel into thermal energy via enclosed combustion, and subsequently into mechanical shaft work.

== 7.1 Engine Nomenclature
- *Bore ($D$):* Internal nominal cylinder diameter.
- *Stroke ($L$):* Linear distance traversed by piston between extreme dead centers ($L = 2 r_"crank"$).
- *Top Dead Center (TDC):* Piston position closest to cylinder head (minimum volume).
- *Bottom Dead Center (BDC):* Piston position furthest from cylinder head (maximum volume).
- *Swept Volume ($V_s$):* Cylinder displacement volume swept by piston: $V_s = (pi / 4) D^2 L$.
- *Clearance Volume ($V_c$):* Enclosed cylinder volume remaining above piston crown at TDC.
- *Total Cylinder Volume ($V_t$):* $V_t = V_s + V_c$.
- *Compression Ratio ($r$):* $r = V_t / V_c = (V_s + V_c) / V_c$.

== 7.2 Working Cycle of Four-Stroke SI (Otto) Engine
Operates on the theoretical Otto cycle (two reversible adiabatics and two constant-volume processes):
1. *Suction Stroke (Piston moves TDC -> BDC):* Inlet valve opens, exhaust valve closed. Downward piston motion creates a partial vacuum, drawing in a homogeneous air-fuel mixture from the intake manifold.
2. *Compression Stroke (Piston moves BDC -> TDC):* Both valves closed. Piston compresses the air-fuel mixture into clearance volume $V_c$. Near the end of stroke, cylinder pressure rises to 8-12 bar and temperature to 350°C-450°C.
3. *Combustion & Expansion / Power Stroke (Piston moves TDC -> BDC):* Just before TDC, a high-voltage electric spark (15-25 kV) across spark plug electrodes ignites the mixture. Pressure spikes instantaneously to 40-60 bar at constant volume. Hot expanding combustion gases drive piston downward, delivering net positive mechanical torque to the crankshaft via connecting rod.
4. *Exhaust Stroke (Piston moves BDC -> TDC):* Exhaust valve opens. Upward sweeping piston expels burnt combustion gases into the exhaust manifold, resetting the cycle.

== 7.3 Working Cycle of Four-Stroke CI (Diesel) Engine
Operates on the theoretical Diesel cycle (constant-pressure heat addition):
1. *Suction Stroke:* Only *pure fresh atmospheric air* is drawn into the cylinder.
2. *Compression Stroke:* Both valves closed. Piston compresses air through a massive compression ratio ($r = 16:1 "to" 22:1$). Cylinder air pressure exceeds 35-45 bar and temperature exceeds 600°C-700°C (far above the auto-ignition threshold of diesel fuel, ~210°C).
3. *Injection & Power Stroke:* At TDC, high-pressure diesel fuel is atomized directly into the scorching hot air through a fuel injector at 1500-2000 bar. Fuel auto-ignites spontaneously without any external spark plug. Expanding gases drive piston downward.
4. *Exhaust Stroke:* Burnt combustion gases are scavenged through exhaust valve.

== 7.4 Master Comparison: Four-Stroke SI vs. Four-Stroke CI Engines

#table(
  columns: (1.8fr, 2.6fr, 2.6fr),
  fill: (x, y) => if y == 0 { rgb(234, 236, 239) } else { none },
  stroke: 0.5pt + rgb(209, 213, 219),
  inset: 6pt,
  [*Design Parameter*], [*Spark Ignition (SI / Petrol) Engine*], [*Compression Ignition (CI / Diesel) Engine*],
  [Thermodynamic Cycle], [Otto Cycle (constant-volume heat addition)], [Diesel Cycle (constant-pressure heat addition)],
  [Suction Charge], [Air + Fuel homogeneous mixture (via carburetor or port fuel injector)], [Pure atmospheric air alone],
  [Compression Ratio ($r$)], [Low: $r = 7:1 "to" 11:1$ (limited strictly to prevent knocking/pre-ignition)], [High: $r = 16:1 "to" 22:1$ (must generate sufficient compression heat for auto-ignition)],
  [Ignition Source], [External electric spark plug], [Auto-ignition due to high temperature and pressure of compressed air],
  [Thermal Efficiency], [Lower (~25% to 30%) due to lower compression ratio limit], [Higher (~35% to 42%) due to high compression ratio],
  [Operating Engine Speed], [High engine speeds (4000 to 7000 RPM); lightweight reciprocating parts], [Lower engine speeds (1500 to 3500 RPM); heavier, robust structural build],
  [Engine Construction & Weight], [Lighter block construction; lower peak cylinder pressures], [Heavy, reinforced cast iron cylinder block to withstand peak pressures (> 100 bar)],
  [Exhaust Emissions], [Carbon monoxide (CO), Unburnt Hydrocarbons (HC), and NOx], [Particulate Matter (soot/PM), Nitrogen oxides (NOx)],
  [Typical Applications], [Passenger cars, motorcycles, sports vehicles, light aircraft], [Heavy commercial trucks, buses, locomotives, ships, industrial generators]
)

== 7.5 Two-Stroke versus Four-Stroke Engines
In a *Two-Stroke Engine*, the complete thermodynamic cycle (suction, compression, expansion, exhaust) is executed in *two piston strokes* (360° of crank rotation, 1 revolution), compared to *four strokes* (720°, 2 revolutions) in a four-stroke engine.
- *Ports vs Valves:* Two-stroke engines replace mechanical cam-actuated poppet valves with cylinder wall *ports* (Inlet, Transfer, Exhaust ports) opened and closed directly by the reciprocating piston skirt.
- *Power Output:* Theoretically, a 2-stroke produces twice the power of a 4-stroke of equivalent displacement; practically ~1.5 times due to incomplete scavenging.
- *Scavenging Loss:* Fresh air-fuel charge entering via transfer port can short-circuit straight out through the open exhaust port, lowering fuel economy and increasing hydrocarbon emissions.

= 8. Power Plants & Renewable Energy Systems

== 8.1 Thermal (Steam) Power Plant
Operates on the closed thermodynamic *Rankine Cycle*:
1. *Coal Handling & Boiler:* Pulverized coal combusts in the furnace, heating treated demineralized water circulating inside water-wall tubes into high-pressure saturated steam.
2. *Superheater:* Elevates saturated steam temperature above boiling point to produce dry superheated steam, preventing blade droplet erosion in the turbine.
3. *Steam Turbine:* High-pressure, high-temperature superheated steam expands across multi-stage blades (HP, IP, LP turbines), converting enthalpy into mechanical shaft rotation.
4. *Synchronous Generator:* Coupled to turbine shaft, spinning at 3000 RPM (for 50 Hz grid) to generate 3-phase alternating electricity (11 to 25 kV).
5. *Surface Condenser:* Low-pressure exhaust steam leaves turbine and condenses back into liquid water over cooling tubes, maintaining high vacuum (0.08 bar) to maximize turbine expansion enthalpy drop.
6. *Cooling Tower:* Evaporative cooling transfers heat from condenser circulating water into the atmosphere.
7. *Thermodynamic Efficiency Boosters:*
   - *Economizer:* Recovers waste heat from flue gases to preheat boiler feed water.
   - *Air Preheater (APH):* Heats incoming combustion air using flue gases.

== 8.2 Hydro-Electric Power Plant
Converts potential energy of elevated water into kinetic energy, and then shaft electricity:
1. *Catchment Basin & Reservoir:* Impounds massive water volume during monsoon.
2. *Dam:* Concrete gravity or rock-fill barrier providing hydraulic head ($H$).
3. *Penstock:* Heavy steel conduits conducting water down to power station.
4. *Surge Tank:* Open vertical tank situated near penstock base absorbing severe *water hammer* pressure transients when turbine gates close abruptly during sudden electrical load rejections.
5. *Hydraulic Turbines:*
   - *Pelton Wheel:* Impulse turbine for very high heads ($H > 300" m"$) and low flow.
   - *Francis Turbine:* Inward-flow reaction turbine for medium heads ($30-300" m"$).
   - *Kaplan Turbine:* Axial-flow propeller reaction turbine for low heads ($H < 30" m"$) and high flow.
6. *Hydroelectric Power Equation:*
   $ P = eta dot.c rho dot.c g dot.c Q dot.c H $ [Watts]
   where $rho = 1000 "kg/m"^3, g = 9.81 "m/s"^2$, $Q$ is flow rate in $"m"^3"/s"$, and $H$ is net head in meters.

== 8.3 Nuclear Power Plant
Utilizes controlled nuclear fission of heavy nuclei ($attach(U, tl: 235)$ or $attach(P u, tl: 239)$):
$ attach(U, tl: 235) + n arrow.r attach(B a, tl: 141) + attach(K r, tl: 92) + 3 n + 200 "MeV Energy" $
=== Primary Components of Nuclear Reactor:
1. *Reactor Core & Fuel Rods:* Zircaloy tubes enclosing sintered ceramic uranium dioxide ($U O_2$) pellets enriched to 3% to 5% $attach(U, tl: 235)$.
2. *Moderator:* Slows energetic fast fission neutrons down to thermal energies (0.025 eV) to sustain chain reaction. Materials: Heavy water ($D_2 O$), high-purity graphite, or light water ($H_2 O$).
3. *Control Rods:* High neutron-absorption cross-section materials (Cadmium, Boron carbide). Inserted or withdrawn to regulate reactor power ($k=1$ critical state) or scram reactor instantly ($k < 1$).
4. *Coolant:* Circulates through core absorbing fission thermal energy (liquid water, liquid sodium, pressurized helium).
5. *Biological Containment Shield:* Multi-meter thick reinforced concrete shell preventing radiation leakage.

= 9. Refrigeration, Air Conditioning & Sustainable Energy

== 9.1 Vapor Compression Refrigeration System (VCRS)
The fundamental cooling cycle used in domestic refrigerators, split air conditioners, and deep freezers.

=== 4 Primary Processes of VCRS:
1. *Isentropic Compression (Compressor, Process 1 -> 2):* Low-pressure, low-temperature saturated vapor refrigerant is compressed to high-pressure, superheated vapor, consuming compressor shaft work ($w_c = h_2 - h_1$).
2. *Constant-Pressure Condensation (Condenser, Process 2 -> 3):* Superheated refrigerant rejects heat $q_"out" = h_2 - h_3$ to ambient air/water, condensing completely into high-pressure liquid.
3. *Isenthalpic Throttling Expansion (Expansion Valve, Process 3 -> 4):* High-pressure liquid passes through a narrow capillary tube or thermostatic expansion valve (TEV). Pressure and saturation temperature drop drastically across constant enthalpy process ($h_3 = h_4$).
4. *Constant-Pressure Evaporation (Evaporator, Process 4 -> 1):* Low-temperature liquid-vapor mixture absorbs heat $q_"in" = h_1 - h_4$ from the refrigerated cold space, boiling into dry vapor and generating the desired cooling effect.

=== Coefficient of Performance (COP):
$ "COP"_"refrig" = "Desired Cooling Effect" / "Work Input" = q_"in" / w_c = (h_1 - h_4) / (h_2 - h_1) $
$ 1 " Ton of Refrigeration (TR)" = 3.517 "kW" = 210 "kJ/min" $ (heat extraction rate needed to freeze 1 US short ton of water at 0°C into ice in 24 hours).

= 10. Mechanisms: Kinematic Pairs, Grübler Mobility & Inversions

A *mechanism* is a constrained kinematic chain where one link is fixed to the reference ground frame, designed to transmit deterministic motion and force.

== 10.1 Kinematic Pairs & Degrees of Freedom
- *Kinematic Link:* A rigid body possessing nodal points connecting to other links.
- *Lower Pairs (Surface / Area Contact):* 1 Degree of Freedom:
  - *Revolute / Turning Pair ($R$):* Pure rotation about an axis (1 DOF).
  - *Prismatic / Sliding Pair ($P$):* Pure rectilinear translation (1 DOF).
  - *Screw Pair ($S$):* Helical coupled rotation-translation (1 DOF).
- *Higher Pairs (Point or Line Contact):* 2 Degrees of Freedom:
  - Cam and follower, meshing gear teeth, ball on plate (rolling + sliding, 2 DOF).

== 10.2 Kutzbach and Grübler's Mobility Criterion
For any planar mechanism confined to motion in a 2D plane:
$ F = 3(n - 1) - 2 j_1 - j_2 $
where:
- $F$ = Total independent Degrees of Freedom (Mobility).
- $n$ = Total number of rigid links (including the single fixed ground frame).
- $j_1$ = Number of single-DOF kinematic pairs (revolute pins + prismatic sliders).
- $j_2$ = Number of two-DOF higher pairs (cams, gears).

=== Physical Interpretation of Mobility $F$:
- *If $F = 1$:* Constrained mechanism. Driving one link produces unique, deterministic motion in all other links (ideal machinery).
- *If $F = 0$:* Statically determinate kinematic structure / rigid frame (no relative motion possible).
- *If $F < 0$:* Statically indeterminate, pre-stressed superstructure (redundant constraints).
- *If $F >= 2$:* Unconstrained mechanism; requires multiple independent drive motors to prescribe motion.

== 10.3 Four-Bar Kinematic Mechanism & Grashof's Criterion
A four-bar chain has $n = 4$ links and $j_1 = 4$ revolute joints:
$ F = 3(4 - 1) - 2(4) - 0 = 9 - 8 = 1 $ [1 DOF]

=== Grashof's Law:
Let $s$ = shortest link, $l$ = longest link, $p, q$ = intermediate links.
If $s + l <= p + q$ (Grashof mechanism), continuous full relative rotation is possible:
1. *Crank-Rocker Mechanism:* Fix a link *adjacent* to the shortest link $s$. Shortest link $s$ makes continuous 360° rotation (acting as driver crank); opposite connected link oscillates back and forth (acting as rocker). Applied in windscreen wipers, sewing machines.
2. *Double-Crank (Drag-Link) Mechanism:* Fix the *shortest link $s$* itself. Both connected side links can execute continuous 360° full rotations at varying angular velocity ratios.
3. *Double-Rocker Mechanism:* Fix the link *opposite* to the shortest link $s$. Both connecting links oscillate as rockers, while floating coupler makes full rotation.
4. *Non-Grashof Chain ($s + l > p + q$):* No link can make a complete 360° rotation; all inversions are double-rockers.

== 10.4 Inversions of Slider-Crank Mechanism
A slider-crank has 3 revolute joints and 1 sliding pair ($n=4, j_1=4 => F = 1$):
1. *Inversion 1 (Cylinder/Frame 1 Fixed):* Standard Reciprocating IC Engine (piston reciprocating motion -> crank rotation) or reciprocating compressor.
2. *Inversion 2 (Crank 2 Fixed):* Gnome rotary aircraft engine (cylinders rotate around fixed crank) or Whitworth quick-return mechanism.
3. *Inversion 3 (Connecting Rod 3 Fixed):* Crank and Slotted-Lever Quick-Return Mechanism (used in shaping machines to accelerate non-cutting return stroke) or Oscillating Cylinder Engine.
4. *Inversion 4 (Slider 4 Fixed):* Hand pump (Bull engine) where cylinder reciprocates over fixed piston rod.

= 11. Robotics & Automation Systems

A robot is a reprogrammable, multifunctional manipulator designed to move materials, parts, tools, or specialized devices through variable programmed motions.

== 11.1 Robot Anatomy & Coordinate Configurations
1. *Cartesian (Rectangular / Gantry) Robot ($P P P$):* Three linear orthogonal prismatic axes ($X, Y, Z$). Work envelope is a rectangular box. High rigidity, easy visualization, large payload, but cannot reach around obstacles. Used in CNC machining centers, 3D printers, Pick-and-Place.
2. *Cylindrical Robot ($R P P$):* Base rotation axis ($theta$) with vertical height ($Z$) and horizontal radial extension ($R$). Work envelope is a cylindrical sector. Used in assembly, conveyor loading.
3. *Spherical (Polar) Robot ($R R P$):* Base rotation, shoulder pitch tilt, and telescoping radial arm. Work envelope is a portion of a sphere. Used in die casting unloading, forging manipulation.
4. *SCARA (Selective Compliance Articulated Robot Arm) ($R R P$):* Two parallel revolute joints providing horizontal compliance in $X-Y$ plane, with a rigid vertical $Z$ axis. Extremely fast, stiff vertically for precision electronic component insertion (PCB assembly).
5. *Articulated (Anthromorphic / Jointed-Arm) Robot ($R R R$):* Consists of rotating base, shoulder, elbow, and multi-axis wrist (typically 6 revolute axes, 6 DOF). Mimics human arm dexterity; spherical work envelope, able to reach over obstacles. Used in automotive spot welding, spray painting, aerospace sealing.

= 12. Actuation Technologies: Hydraulic vs. Pneumatic Systems

Actuators are the muscles of automated machinery, converting fluid or electrical potential energy into mechanical motion.

== 12.1 Detailed Comparison: Hydraulic vs. Pneumatic Actuators

#table(
  columns: (1.8fr, 2.6fr, 2.6fr),
  fill: (x, y) => if y == 0 { rgb(234, 236, 239) } else { none },
  stroke: 0.5pt + rgb(209, 213, 219),
  inset: 6pt,
  [*Selection Parameter*], [*Hydraulic Actuator Systems*], [*Pneumatic Actuator Systems*],
  [Operating Fluid], [Incompressible petroleum-based mineral oil or synthetic hydraulic fluid.], [Compressible atmospheric air, filtered, regulated, and lubricated (FRL unit).],
  [Operating Pressure], [Very high: 70 to 350 bar (1000 to 5000 PSI).], [Moderate/Low: 4 to 10 bar (60 to 150 PSI).],
  [Force & Power Density], [Enormous force output per unit actuator volume; can lift multi-ton loads with compact cylinders.], [Moderate to low force output; limited by compressed air pressure.],
  [Positional Accuracy & Stiffness], [Extremely high stiffness and precise positioning due to zero fluid compressibility; holds position indefinitely.], [Low stiffness; spongy, springy response due to air compressibility; poor intermediate positioning.],
  [Speed of Operation], [Moderate to low cycle speeds due to oil viscosity and line flow resistance.], [Ultra-fast cycle speeds and high acceleration; air exhausts directly to atmosphere.],
  [Safety & Cleanliness], [Messy; hazardous oil leaks present slip risks, environmental contamination, and fire hazards.], [Pristine cleanliness; non-toxic exhaust air; intrinsically safe in explosive atmospheres.],
  [System Circuit Architecture], [Closed recirculating loop: requires oil reservoir, return piping, filters, high-pressure pumps.], [Open loop: compressor draws ambient air; actuator exhausts directly into ambient air (no return pipe).],
  [Operating Cost], [High capital cost, expensive precision pumps, high maintenance.], [Low initial installation cost; widely available shop air lines in every factory.],
  [Typical Industrial Applications], [Earthmovers, excavators, aerospace landing gear, heavy forging presses.], [Food packaging lines, pharmaceutical sorting, robotic grippers, pneumatic nailers.]
)

= 13. Worked VIT Question Bank & Past FAT Examination Problems

== Problem 4.1 (BACEE101 FAT April 2025 Slot D1 — 10 Marks)
*Question:* Compare a Four-Stroke Spark Ignition (SI / Petrol) Engine with a Four-Stroke Compression Ignition (CI / Diesel) Engine with respect to: (i) Working cycle, (ii) Fuel induction method, (iii) Compression ratio, (iv) Ignition method, and (v) Thermal efficiency.

*Solution:*
1. *Thermodynamic Cycle:* SI engines operate on the constant-volume Otto cycle (heat addition occurs instantaneously at constant volume during spark discharge). CI engines operate on the constant-pressure Diesel cycle (heat addition occurs over a finite piston displacement period as fuel is injected).
2. *Fuel Induction Method:* SI engine draws in a homogeneous air-fuel mixture prepared externally by a carburetor or port fuel injector during the suction stroke. CI engine draws in pure atmospheric air alone; high-pressure liquid diesel is atomized directly into the combustion chamber at the end of the compression stroke.
3. *Compression Ratio:* SI engine compression ratio is limited to $r = 8:1 "to" 11:1$ to prevent engine knock/pre-ignition. CI engine operates at much higher compression ratios ($r = 16:1 "to" 22:1$) because air alone is compressed, eliminating pre-ignition risk.
4. *Method of Ignition:* SI engine uses an external timed electric spark generated by a spark plug (15-25 kV). CI engine relies on *auto-ignition*: the high compression ratio elevates air temperature above 600°C, causing injected fuel to ignite spontaneously.
5. *Thermal Efficiency:* CI engine achieves superior thermal efficiency (35% to 42% vs 25% to 30% in SI) because thermodynamic efficiency is fundamentally an increasing function of compression ratio:
$ eta_"thermal" prop (1 - 1 / r^(gamma - 1)) $

== Problem 4.2 (BACEE101 FAT Nov 2024 Slot D1 & SMEC QB Q12 — 10 Marks)
*Question:* (a) State Kutzbach / Grübler's mobility criterion for planar mechanisms. (b) Determine the Degrees of Freedom (DOF) for: (i) A standard Four-Bar Linkage, (ii) A Slider-Crank Mechanism, and (iii) A 5-bar linkage with 5 revolute joints. (c) State Grashof's Law and explain the conditions for Crank-Rocker and Double-Crank inversions.

*Solution:*
*Part (a) Grübler's Mobility Criterion:*
For planar kinematic mechanisms:
$ F = 3(n - 1) - 2 j_1 - j_2 $
where $n$ is total number of rigid links (including the ground frame), $j_1$ is number of 1-DOF lower pairs (revolute turning joints, prismatic sliding joints), and $j_2$ is number of 2-DOF higher pairs (rolling contact, cams, gear teeth).

*Part (b) DOF Calculations:*
1. *Four-Bar Linkage:* $n = 4$ links, $j_1 = 4$ revolute joints, $j_2 = 0$:
$ F = 3(4 - 1) - 2(4) - 0 = 3(3) - 8 = 9 - 8 = 1 $ [Constrained 1-DOF mechanism]
2. *Slider-Crank Mechanism:* $n = 4$ (Frame, Crank, Connecting Rod, Slider), $j_1 = 4$ (3 revolute pins + 1 sliding pair), $j_2 = 0$:
$ F = 3(4 - 1) - 2(4) - 0 = 1 $ [1-DOF mechanism]
3. *Five-Bar Linkage:* $n = 5$ links, $j_1 = 5$ revolute joints, $j_2 = 0$:
$ F = 3(5 - 1) - 2(5) - 0 = 3(4) - 10 = 12 - 10 = 2 $ [Unconstrained 2-DOF; requires 2 motors]

*Part (c) Grashof's Law & Inversions:*
Condition for at least one full revolute rotation: $s + l <= p + q$ (where $s$ = shortest, $l$ = longest, $p, q$ = intermediate links).
- *Crank-Rocker Inversion:* Fix either link adjacent to the shortest link $s$. Shortest link $s$ makes continuous 360° rotation (crank); opposite link oscillates (rocker).
- *Double-Crank (Drag-Link) Inversion:* Fix shortest link $s$ to ground. Both connected links execute continuous 360° rotations.

== Problem 4.3 (SMEC Question Bank Q21 — TIG vs MIG Welding & Casting Defects — 10 Marks)
*Question:* (a) Differentiate between Tungsten Inert Gas (TIG / GTAW) Welding and Metal Inert Gas (MIG / GMAW) Welding with respect to electrode type, shielding gas, wire feed, and typical industrial applications. (b) Explain the root causes and preventative remedies for three common metal sand casting defects: (i) Blowholes, (ii) Cold Shut, and (iii) Hot Tears.

*Solution:*
*Part (a) TIG vs MIG Welding Comparison:*
1. *Electrode:* TIG uses a non-consumable Tungsten electrode ($W$, melting point 3422°C). MIG uses a consumable continuous metallic wire electrode fed automatically from a spool.
2. *Shielding Gas:* TIG uses 100% pure inert Argon or Helium gas. MIG uses inert Argon/Helium for non-ferrous metals, or active gas mixtures (Ar + CO2 or pure CO2) for steel.
3. *Filler Metal Feed:* TIG requires manual feeding of a separate filler rod by the welder's second hand. MIG feeds filler automatically through the welding gun nozzle.
4. *Weld Quality & Productivity:* TIG yields ultra-clean, spatter-free, aesthetic welds at low deposition rates (aerospace, stainless pipework). MIG provides high deposition rates, high travel speed, and high productivity (structural steel, automotive chassis).

*Part (b) Casting Defects & Remedies:*
1. *Blowholes:* Smooth rounded internal gas cavities. *Cause:* Excessive moisture in sand, low sand permeability, inadequate venting. *Remedy:* Dry molding sand thoroughly, improve sand grain permeability, punch vent holes in cope.
2. *Cold Shut:* A visible line or seam where two converging streams of molten metal meet but fail to fuse. *Cause:* Low pouring temperature, excessively thin sections, slow pouring rate. *Remedy:* Elevate pouring temperature, enlarge gating cross-sections, accelerate pouring.
3. *Hot Tears:* Severe jagged cracks formed during late solidification. *Cause:* Non-uniform cooling and excessive mold rigidity preventing natural thermal contraction. *Remedy:* Ensure collapsible sand mixtures (add organic flour) and incorporate generous fillet radii on corners.

== Problem 4.4 (SMEC Question Bank Q14 — Refrigeration & Power Plants — 10 Marks)
*Question:* A Vapor Compression Refrigeration System operating on R-134a produces 5 Tons of Refrigeration (TR). The enthalpy of refrigerant at compressor inlet is $h_1 = 250 "kJ/kg"$, at compressor outlet is $h_2 = 290 "kJ/kg"$, and at condenser outlet is $h_3 = 95 "kJ/kg"$. Calculate: (i) Refrigerating effect per kg, (ii) Mass flow rate of refrigerant ($"kg/s"$), (iii) Compressor power input ($"kW"$), and (iv) Coefficient of Performance (COP).

*Solution:*
*Step 1: Determine State Enthalpies:*
- Compressor inlet: $h_1 = 250 "kJ/kg"$
- Compressor outlet: $h_2 = 290 "kJ/kg"$
- Condenser outlet: $h_3 = 95 "kJ/kg"$
- Throttling process is isenthalpic: $h_4 = h_3 = 95 "kJ/kg"$

*Step 2: Calculate Specific Quantities:*
1. *Refrigerating Effect ($q_"in"$):*
$ q_"in" = h_1 - h_4 = 250 - 95 = 155 "kJ/kg" $
2. *Compressor Work Input ($w_c$):*
$ w_c = h_2 - h_1 = 290 - 250 = 40 "kJ/kg" $

*Step 3: Mass Flow Rate ($dot(m)$):*
Given cooling capacity = $5 "TR" = 5 times 3.517 "kW" = 17.585 "kW" = 17.585 "kJ/s"$.
$ dot(m) = "Total Cooling Capacity" / q_"in" = (17.585 "kJ/s") / (155 "kJ/kg") = 0.1135 "kg/s" = 6.81 "kg/min" $

*Step 4: Compressor Power Input ($P_"comp"$):*
$ P_"comp" = dot(m) times w_c = 0.1135 "kg/s" times 40 "kJ/kg" = 4.54 "kW" $

*Step 5: Coefficient of Performance (COP):*
$ "COP" = q_"in" / w_c = 155 / 40 = 3.875 $
*Boxed Answer:* (i) $q_"in" = 155 "kJ/kg"$, (ii) $dot(m) = 0.1135 "kg/s"$, (iii) $P = 4.54 "kW"$, (iv) $"COP" = 3.875$.

#v(10pt)
#rect(width: 100%, fill: rgb(254, 242, 242), stroke: 1pt + rgb(220, 38, 38), radius: 4pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb(153, 27, 27))[Quick Self-Test Checklist Before Your Exam:] \
  1. Can you draw the 5 standard weld joints and state the 4 differences between TIG and MIG welding? \
  2. Can you apply Grübler's formula $F = 3(n-1) - 2j_1 - j_2$ to find the DOF of any mechanism? \
  3. Do you remember that four-stroke diesel engines compress *air alone* through a ratio of 16-22:1? \
  4. Did you memorize that $1 "TR" = 3.517 "kW"$ for refrigeration calculations? \
  5. Can you contrast Hydraulic vs Pneumatic actuators across operating pressure, stiffness, and safety?
]
"""

with open("scripts/BEEE_MOD-4.typ", "w", encoding="utf-8") as f:
    f.write(typst_code)

print("Saved scripts/BEEE_MOD-4.typ, compiling...")
cmd = 'export PATH="/opt/homebrew/bin:$PATH"; typst compile scripts/BEEE_MOD-4.typ public/pdfs/basic_eng/BEEE_MOD-4.pdf'
res = subprocess.run(cmd, shell=True, capture_output=True, text=True)
if res.returncode == 0:
    print("SUCCESS: Compiled public/pdfs/basic_eng/BEEE_MOD-4.pdf")
else:
    print("FAILED:", res.stderr)
