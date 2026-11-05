
#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.2cm, right: 2.2cm),
  header: context {
    if here().page() > 1 {
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: luma(90))[VIT BACEE101 --- Module 4: Manufacturing & Automation]],
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
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT BACEE101 --- Module 4: Manufacturing & Automation] \
  #v(2mm)
  #text(size: 15pt, weight: "black")[MODULE 4: MANUFACTURING PROCESSES, ENERGY CONVERSIONS AND MECHANICAL AUTOMATION] \
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[(CO: 4)] \
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Complete Study Textbook, Step-by-Step Derivations & VIT FAT Question Bank] \
  #text(size: 9pt, fill: luma(100))[Aligned with Official VIT BACEE101 Course Page Syllabus, Question Bank, and Past FAT Papers]
]

#v(3mm)

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
