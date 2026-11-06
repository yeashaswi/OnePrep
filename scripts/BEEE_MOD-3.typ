#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.3cm, right: 2.3cm),
  header: context {
    let p = counter(page).get().first()
    if p > 1 [
      #grid(
        columns: (1fr, 1fr),
        align: (left, right),
        text(size: 8pt, fill: rgb(101, 106, 118))[VIT BAEEE101 — Module 3: Engineering Graphics & CAD],
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
  #text(size: 13.5pt, weight: "bold", fill: rgb(139, 0, 0))[MODULE 3: ENGINEERING GRAPHICS AND COMPUTER-AIDED DESIGN (CO: 3)] \
  #v(2pt)
  #text(size: 10.5pt, weight: "bold")[Complete Comprehensive Textbook: Standards, Orthographic Projections, Isometric Scales, CAD & Solved VIT FAT Question Bank] \
  #v(1pt)
  #text(size: 8.5pt, fill: rgb(85, 85, 85))[Aligned with Official VIT BAEEE101 Course Syllabus, BIS Standards (SP 46:2003) & VIT FAT Examination Patterns]
]

#v(8pt)

#rect(width: 100%, fill: rgb(240, 244, 248), stroke: 1pt + rgb(180, 200, 220), radius: 4pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb(15, 23, 42))[Syllabus Scope & Competency Checklist (Module 3):] \
  #text(size: 9pt)[
    - *CAD Fundamentals & Applications:* Role of Computer-Aided Design in Mechanical and Civil engineering; 2D drafting vs 3D wireframe, surface, and parametric solid modeling; Building Information Modeling (BIM).
    - *Drawing Standards & Sheet Layout:* ISO / Bureau of Indian Standards (BIS SP 46:2003); standard paper sizes (A0 to A4); sheet borders, grid reference, title block layout ($185 times 65" mm"$) and essential entries.
    - *Line Types & Lettering Standards:* Continuous thick (visible outlines), continuous thin (dimension, leader, projection lines), dashed thin (hidden edges), long dash-dotted thin (centerlines, axes of symmetry), continuous freehand (short break); single-stroke lettering ($7:5$ or $5:4$ ratio, vertical or $75 degree$ inclined).
    - *Dimensioning Systems & Rules:* Elements (dimension line, extension line, leader line, arrowheads $3:1$ ratio); Aligned vs Unidirectional systems; operational rules (unambiguous, never cross dimension lines, avoid redundant over-dimensioning).
    - *Orthographic Projection Principles:* Dihedral angles and principal planes of projection (HP, VP, PP); First Angle Projection (Indian/ISO standard: object between observer and plane) vs Third Angle Projection (US standard: plane between observer and object); projection symbols.
    - *Projections of Regular Solids:* Prisms, pyramids, cylinders, and cones in simple positions (axis perpendicular to HP, axis perpendicular to VP, axis parallel to both HP and VP).
    - *Isometric Projection & Scales:* Isometric axes ($120 degree$), isometric lines vs non-isometric lines; derivation of Isometric Scale ratio ($sqrt(2/3) approx 0.816$); Isometric Projection vs Isometric View; Four-Center approximate method for circles in isometric planes.
    - *Perspective Projections:* Visual ray method for cube; Picture Plane (PP), Ground Plane (GP), Horizon Plane (HP), Station Point (SP), Vanishing Points.
    - *Civil Engineering Drawings:* Standard architectural symbols for building plans; drawing of a simple residential floor plan (1-BHK / 2-BHK), wall thicknesses ($230" mm"$ load-bearing, $115" mm"$ partition), doors, windows, and schedule of openings.
  ]
]

#v(10pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[1. Computer-Aided Design (CAD) & Drawing Sheet Standards]

=== 1.1 Role of CAD in Engineering Practice
Computer-Aided Design (CAD) utilizes digital computing systems to assist in the creation, modification, analysis, and optimization of an engineering design:
- *Applications in Mechanical Engineering:* Part modeling, geometric tolerance specification (GD&T), finite element meshing (FEA), kinematic simulation of linkages, generation of CNC G-codes for automated machining, rapid prototyping STL generation.
- *Applications in Civil Engineering:* Structural layout drafting, structural detailing of reinforced concrete (RCC) beams and columns, architectural floor plans, digital elevation models (DEM), hydraulic pipe network routing, Building Information Modeling (BIM) for clash detection and lifecycle cost estimation.
- *Modeling Paradigms:*
  1. *Wireframe Modeling:* Earliest 3D CAD approach storing only vertices and interconnecting lines/curves. Ambiguous interpretation due to lack of surface topology.
  2. *Surface Modeling:* Defines mathematical outer skins (NURBS, Bezier patches) with zero volume. Crucial for aerodynamic automotive and aerospace body styling.
  3. *Solid Modeling (CSG & B-Rep):* Mathematically complete representation enclosing volume, enabling automatic computation of mass properties (volume, center of gravity, mass moments of inertia). Constructive Solid Geometry (CSG) uses Boolean operations ($union, inter, -$) on primitives.

=== 1.2 BIS & ISO Drawing Sheet Layout & Standards
All engineering drawings follow strict international standards codified by ISO 5457 and the Bureau of Indian Standards (BIS: SP 46:2003):
- *Standard Sheet Sizes (Trimmed):*
  Based on an aspect ratio of $1:sqrt(2)$ such that halving a sheet yields the next standard size with unchanged proportions:
  - $A 0: 841 times 1189" mm"$ (Area $= 1.0" m"^2$)
  - $A 1: 594 times 841" mm"$
  - $A 2: 420 times 594" mm"$
  - $A 3: 297 times 420" mm"$
  - $A 4: 210 times 297" mm"$
- *Sheet Margins & Borders:* A margin of $20" mm"$ on the left-hand filing edge for binding/perforation; margins of $10" mm"$ on top, bottom, and right edges (for A2, A3, A4 sheets; $20" mm"$ for A0, A1).
- *Title Block Specifications:* Standard size is strictly $185" mm"$ width by $65" mm"$ height, positioned at the extreme bottom right-hand corner of the drawing sheet. Essential contents include:
  1. Name of the institution / company.
  2. Title of the drawing.
  3. Drawing number / Sheet number.
  4. Scale of the drawing (e.g., $1:1, 1:2, 5:1$).
  5. Projection symbol (First Angle or Third Angle truncated cone symbol).
  6. Names and signatures of draughtsman, checker, and approver with dates.
  7. Tolerances and material specifications.

=== 1.3 Standard Line Types & Conventions
#table(
  columns: (1fr, 2fr, 1.2fr, 2.5fr),
  fill: (x, y) => if y == 0 { rgb(234, 236, 239) } else { none },
  stroke: 0.5pt + rgb(209, 213, 219),
  [Line Type], [Description & Appearance], [Thickness], [Designated Engineering Use],
  [Type A], [Continuous thick line], [$0.5 - 0.7" mm"$], [Visible outlines, edges of parts, crest of screw threads],
  [Type B], [Continuous thin line], [$0.25 - 0.35" mm"$], [Dimension lines, extension lines, leaders, hatching lines],
  [Type C / D], [Continuous thin freehand / zigzag], [$0.25" mm"$], [Limits of partial or interrupted views, short breaks],
  [Type E / F], [Dashed thin line (regular dashes)], [$0.35" mm"$], [Hidden outlines, hidden edges of internal features],
  [Type G], [Long dash-dotted thin line], [$0.25" mm"$], [Center lines, axes of symmetry, pitch circle of gears],
  [Type H], [Long dash-dotted thin, thick at ends], [$0.7" mm"$ ends], [Cutting plane paths indicating section views],
  [Type K], [Long dash-double-dotted thin], [$0.25" mm"$], [Centroidal lines, adjacent parts, alternate positions]
)

#v(8pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[2. Theory of Dimensioning: Principles, Systems & Operational Rules]

=== 2.1 Essential Elements of Dimensioning
Dimensioning is the art of writing numerical values and units on an engineering drawing to convey exact geometric sizes and locations of features:
1. *Dimension Line:* Continuous thin line (Type B) indicating the extent and direction of a dimension, terminated by arrowheads. It must never be crossed by any other line.
2. *Extension (Projection) Line:* Continuous thin line extending perpendicular to the feature being dimensioned, starting with a visible gap ($approx 1 - 2" mm"$) from the feature outline and extending $2 - 3" mm"$ past the dimension line.
3. *Leader Line:* Thin line leading from a note or dimension to a specific surface or feature, terminated with an arrowhead (if pointing to an edge) or a dot (if pointing within a surface area).
4. *Arrowheads:* Standard length-to-width ratio is strictly $3:1$. The arrowhead must be filled solid black and touch the extension line cleanly.

=== 2.2 Dimensioning Systems: Aligned vs Unidirectional
- *Aligned System:*
  Dimension values are placed parallel to their respective dimension lines, positioned above and slightly separated from the dimension line, readable from the bottom of the sheet or from the right-hand edge. Oblique dimension lines follow the standard orientation quadrant rule.
- *Unidirectional System:*
  Dimension values are oriented horizontally regardless of the angle of the dimension line, readable strictly from the bottom of the drawing sheet. Horizontal dimension lines have values placed above; non-horizontal lines are interrupted in the middle to insert the horizontal text. Widely preferred in modern CAD and large architectural sheets.

=== 2.3 Cardinal Rules of Dimensioning
1. Dimension values represent the true finished size of the component, completely independent of the drawing scale.
2. Dimensions should be placed *outside* the view outlines wherever practicable; place dimensions inside views only when clarity is markedly improved.
3. Never use a centerline or an outline of the part as a dimension line.
4. *Chain Dimensioning vs Baseline Dimensioning:* Chain dimensioning accumulates manufacturing tolerances ($plus.minus delta_1 plus.minus delta_2 dots$). Where precision is mandatory, use baseline (datum) dimensioning from a common reference edge.
5. All linear dimensions on mechanical drawings are understood to be in *millimeters (mm)* without writing the unit symbol "mm".

#v(8pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[3. Orthographic Projections: Principles, Planes & Angle Systems]

=== 3.1 Fundamental Principles of Orthographic Projection
Orthographic projection is a parallel projection technique where projectors are mutually parallel to each other and perpendicular ($90 degree$) to the plane of projection.
- *Principal Reference Planes:*
  1. *Horizontal Plane (HP):* Horizontal reference surface. Projection of an object onto HP yields the *Top View (TV)* or *Plan*.
  2. *Vertical Plane (VP):* Frontal vertical reference surface perpendicular to HP. Projection onto VP yields the *Front View (FV)* or *Elevation*.
  3. *Profile Plane (PP):* Auxiliary vertical plane perpendicular to both HP and VP. Projection onto PP yields the *Side View (SV)* or *Profile View*.
  The line of intersection of HP and VP is called the *Reference Line ($X-Y$ line)*.
  The line of intersection of VP and PP is called the $X_1-Y_1$ line.

=== 3.2 First Angle Projection vs Third Angle Projection
The space surrounding the intersection of HP and VP is divided into four dihedral quadrants:
#table(
  columns: (1.5fr, 2.5fr, 2.5fr),
  fill: (x, y) => if y == 0 { rgb(234, 236, 239) } else { none },
  stroke: 0.5pt + rgb(209, 213, 219),
  [Comparison Criterion], [First Angle Projection], [Third Angle Projection],
  [Position of Object], [Object is placed in Quadrant 1 (Above HP, In front of VP)], [Object is placed in Quadrant 3 (Below HP, Behind VP)],
  [Observer - Object - Plane], [Object lies *between* observer and projection plane], [Projection plane lies *between* observer and object],
  [Nature of Planes], [Planes of projection are assumed *opaque*], [Planes of projection are assumed *transparent*],
  [Front View Position], [Elevation (FV) is projected *Above* $X-Y$ line], [Elevation (FV) is projected *Below* $X-Y$ line],
  [Top View Position], [Plan (TV) is projected *Below* $X-Y$ line], [Plan (TV) is projected *Above* $X-Y$ line],
  [Left Hand Side View], [Projected on Right side of Front View], [Projected on Left side of Front View],
  [Standard Adoption], [Mandatory Standard in India (BIS SP 46), UK, Europe, ISO], [Standard in USA, Canada, Japan (ANSI / ASME)]
)

- *Standard Projection Symbols:*
  Represented by the orthographic views of a truncated right circular cone with its axis horizontal:
  - *First Angle Symbol:* Frustum with large base on left; Front View shows trapezoid, Left Side View (projected on right) shows two concentric circles (inner small circle solid, outer large circle solid).
  - *Third Angle Symbol:* Frustum with small base on left; Front View shows trapezoid, Right Side View (projected on right) shows two concentric circles.

#v(8pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[4. Projections of Regular Solids in Simple & Inclined Orientations]

=== 4.1 Classification of Regular Engineering Solids
1. *Polyhedra:* Solids bounded by plane polygonal surfaces:
   - *Prisms:* Two identical parallel polygonal end faces (bases) connected by rectangular lateral faces (e.g., triangular, square, pentagonal, hexagonal).
   - *Pyramids:* A single polygonal base connected to a common apex point by triangular lateral faces.
2. *Solids of Revolution:* Formed by rotating a plane figure around a fixed central axis:
   - *Cylinder:* Generated by revolving a rectangle around one of its sides (circular parallel bases).
   - *Cone:* Generated by revolving a right-angled triangle around its vertical side (circular base, apex).
   - *Sphere:* Generated by revolving a semicircle around its diameter.

=== 4.2 Projections of Solids in Simple Positions
- *Case 1: Axis Perpendicular to HP and Parallel to VP:*
  - The true shape and dimensions of the base appear in the *Top View (TV)* on the Horizontal Plane.
  - The Front View (FV) on the Vertical Plane shows the height/axis as true length: a rectangle for prisms/cylinders, a triangle for pyramids/cones.
  - *Rule:* Always draw the view that shows the *true shape of the base first*!
- *Case 2: Axis Perpendicular to VP and Parallel to HP:*
  - The true shape of the base appears in the *Front View (FV)* above the $X-Y$ line.
  - The Top View (TV) shows true length: rectangle or triangle.
- *Case 3: Axis Inclined to One Plane and Parallel to the Other:*
  Solved using the *Two-Stage (Change of Position) Method*:
  1. *Stage 1 (Simple Position):* Assume the axis is perpendicular to the reference plane to which it is actually inclined. Draw TV and FV.
  2. *Stage 2 (Tilted Position):* Tilt the solid by rotating the view containing the axis by the specified inclination angle ($theta$ to HP or $phi$ to VP). Project the corresponding points to obtain the final view.

#v(8pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[5. Isometric Projections: Principles, Scales & Four-Center Ellipse Method]

=== 5.1 Fundamentals of Isometric Projection
Isometric projection is an axonometric orthographic projection where the three mutually perpendicular coordinate axes of an object ($X, Y, Z$) are equally inclined to the projection plane ($approx 35 degree 16'$).
- *Isometric Axes:* The projections of the three axes intersect at a common origin point, mutually spaced at equal angles of $120 degree$:
  - One vertical axis representing height ($Z$).
  - Two receding axes inclined at $30 degree$ to the horizontal reference line representing length ($X$) and breadth ($Y$).
- *Isometric Lines vs Non-Isometric Lines:*
  - *Isometric Lines:* Lines parallel to the isometric axes. Their lengths are foreshortened equally and can be measured directly using the isometric scale.
  - *Non-Isometric Lines:* Lines not parallel to any isometric axis (e.g., edges of pyramids, diagonals). They *cannot* be measured directly; their endpoints must be plotted using coordinates along isometric lines (Box Method).

=== 5.2 Mathematical Derivation of Isometric Scale
Consider a cube resting on a corner with its body diagonal perpendicular to the vertical plane:
In true projection, the face of the cube is an inclined square.
Let $A B C D$ be the true square face and $A B_1 C_1 D_1$ be its isometric projection:
In the true square, diagonal $A C$ is horizontal and maintains true length. Angle of side $A B$ with diagonal is $45 degree$.
In isometric projection, side $A B_1$ makes an angle of $30 degree$ with the horizontal diagonal $A C$.
From trigonometry in the right-angled triangles sharing half-diagonal $A O$:
$ A O = A B cos 45 degree quad ("in true square") $
$ A O = A B_1 cos 30 degree quad ("in isometric projection") $
Equating the shared length $A O$:
$ A B_1 cos 30 degree = A B cos 45 degree $
$ "Isometric Length" / "True Length" = (A B_1) / (A B) = (cos 45 degree) / (cos 30 degree) = (1 / sqrt(2)) / (sqrt(3) / 2) = 2 / (sqrt(2) sqrt(3)) = sqrt(2 / 3) = sqrt(2) / sqrt(3) $
Evaluating numerically:
$ sqrt(2 / 3) = 1.4142 / 1.7320 approx 0.8165 quad (approx 81.65\% " or " 9 / 11) $
- *Isometric Projection vs Isometric View:*
  - *Isometric Projection:* Drawn using the foreshortened *Isometric Scale* ($0.816 times "True Dimension"$). Represents the exact optical projection.
  - *Isometric View (Isometric Drawing):* Drawn using the actual *True Scale* ($1:1$) along the $30 degree$ axes. Dimensions are easier to construct directly with standard scales. It is geometrically similar to the isometric projection but enlarged by a factor of $sqrt(3/2) approx 1.225$ ($22.5\%$ larger in area).

=== 5.3 Four-Center Approximate Ellipse Method
A circle of diameter $D$ located in any of the three isometric planes (horizontal, vertical left, vertical right) appears as an ellipse. The four-center method constructs an accurate approximation using four circular arcs:
- *Step-by-Step Procedure:*
  1. Enclose the circle of diameter $D$ in an isometric rhombus (parallelogram with sides equal to diameter $D$ inclined at isometric angles).
  2. Identify the two *obtuse-angled vertices* ($A$ and $C$, angles $= 120 degree$) and the two acute-angled vertices ($B$ and $D$, angles $= 60 degree$).
  3. Locate the midpoints of the four sides of the rhombus: $M_1, M_2, M_3, M_4$.
  4. From obtuse vertex $A$, draw lines connecting to opposite midpoints $M_1$ and $M_2$.
  5. From obtuse vertex $C$, draw lines connecting to opposite midpoints $M_3$ and $M_4$.
  6. The intersection of line $A-M_1$ with diagonal $B-D$ defines center point $O_1$.
     The intersection of line $A-M_2$ with diagonal $B-D$ defines center point $O_2$.
  7. Centers $A$ and $C$ serve as centers for large arcs:
     - With center $A$ and radius $R_1 = A-M_1$, draw arc between $M_1$ and $M_2$.
     - With center $C$ and radius $R_1 = C-M_3$, draw arc between $M_3$ and $M_4$.
  8. Centers $O_1$ and $O_2$ serve as centers for small end arcs:
     - With center $O_1$ and radius $R_2 = O_1-M_1$, draw arc between $M_1$ and $M_4$.
     - With center $O_2$ and radius $R_2 = O_2-M_2$, draw arc between $M_2$ and $M_3$.
  The four arcs join smoothly with continuous tangency, forming the complete isometric ellipse.

#v(8pt)
#text(size: 11.5pt, weight: "bold", fill: rgb(15, 23, 42))[6. Perspective Projections & Civil Engineering Residential Floor Plans]

=== 6.1 Fundamentals of Perspective Projection (Visual Ray Method)
Perspective projection produces pictorial views as perceived by human vision or a camera lens, where parallel receding lines converge at *vanishing points*.
- *Key Planes and Reference Elements:*
  - *Ground Plane (GP):* Horizontal plane on which the observer stands and objects typically rest.
  - *Picture Plane (PP):* Transparent vertical plane placed between observer and object onto which the perspective is projected.
  - *Station Point (SP):* Position of the observer's eye in space.
  - *Horizon Plane (HP):* Horizontal plane passing through the station point SP.
  - *Ground Line (GL):* Line of intersection between PP and GP.
  - *Horizon Line (HL):* Line of intersection between PP and HP. Height of HL above GL represents observer's eye level.
- *Visual Ray Method for a Cube:*
  Projectors (visual rays) are drawn connecting station point SP to every vertex of the object in both Top View and Front View. The intersection points where these visual rays pierce the Picture Plane (PP) are projected vertically and horizontally to establish the true perspective image. Objects positioned behind PP appear smaller than true size; objects in front of PP appear magnified.

=== 6.2 Residential Building Floor Plans & Civil Drafting Conventions
A building floor plan is a horizontal section view cut through the building at window sill level ($approx 1.2 - 1.5" m"$ above finished floor level) looking downwards:
1. *Structural Wall Thickness Conventions:*
   - External Load-Bearing Walls: $230" mm"$ ($9" inches"$) brickwork masonry in $1:6$ cement mortar, plus $15" mm"$ internal and external cement plaster ($"Total" = 260" mm"$).
   - Internal Partition Walls: $115" mm"$ ($4.5" inches"$) half-brick masonry walls.
   - RCC Columns: Standard sizes $230 times 300" mm"$ or $230 times 450" mm"$.
2. *Standard Opening Nomenclature & Dimensions:*
   - *Main Entrance Door ($D$):* $1000 times 2100" mm"$ ($1.0 times 2.1" m"$).
   - *Bedroom / Internal Doors ($D_1$):* $900 times 2100" mm"$.
   - *Bathroom / Water Closet Doors ($D_2$):* $750 times 2100" mm"$.
   - *Living Room Windows ($W$):* $1500 times 1200" mm"$, sill height $900" mm"$.
   - *Kitchen / Bedroom Windows ($W_1$):* $1200 times 1200" mm"$.
   - *Ventilator ($V$):* $600 times 450" mm"$ placed at lintel level ($2100" mm"$).
3. *Area Definitions:*
   - *Carpet Area:* Net usable floor area inside apartments (excluding wall thicknesses, duct areas, common staircases).
   - *Plinth (Built-Up) Area:* Total covered area measured to the outer face of external walls ($approx 1.15 - 1.20 times "Carpet Area"$).
   - *Super Built-Up Area:* Plinth area plus proportionate share of common areas (staircase, lifts, lobbies, amenities) ($approx 1.25 - 1.35 times "Plinth Area"$).

#v(10pt)
#line(length: 100%, stroke: 0.5pt + rgb(180, 200, 220))
#v(6pt)

#text(size: 12pt, weight: "bold", fill: rgb(139, 0, 0))[VIT FAT Solved Question Bank: Step-by-Step Graphical & Numerical Derivations]

#v(6pt)
#rect(width: 100%, fill: rgb(249, 250, 251), stroke: 1pt + rgb(220, 225, 230), radius: 4pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb(15, 23, 42))[FAT Problem 1: Projection of Hexagonal Pyramid Inclined to Reference Planes] \
  *Question (10 Marks):* A regular hexagonal pyramid of base edge $a = 30" mm"$ and axis height $h = 65" mm"$ rests on one of its base edges on the Horizontal Plane (HP). The axis of the pyramid is inclined at $45 degree$ to the HP and is parallel to the Vertical Plane (VP).
  ("i") Draw the orthographic projections (Front View and Top View) of the pyramid in its initial simple position.
  ("ii") Draw the final Front View and Top View showing all visible and hidden edges clearly.
  ("iii") Determine the apparent inclination of the base to the Horizontal Plane.

  #v(4pt)
  #text(weight: "bold", fill: rgb(139, 0, 0))[Complete Step-by-Step Solution:] \
  *Step 1: Stage 1 (Initial Simple Position):*
  Assume the pyramid rests with its base flat on HP with axis perpendicular to HP:
  - *Top View (TV):* Construct a true regular hexagon of side $30" mm"$. Since the pyramid will subsequently tilt on a base edge, draw the hexagon such that one edge (say $c-d$) is perpendicular to the $X-Y$ reference line. Locate the apex $o$ at the geometric center. Draw six triangular lateral edge lines from corners to apex $o$.
  - *Front View (FV):* Project points up to the $X-Y$ line to form the base line $a' b' c' d' e' f'$ on $X-Y$. Measure true axis height $h = 65" mm"$ vertically along the centerline to locate apex $o'$. Connect $o'$ to base corners to complete the triangular front view.

  *Step 2: Stage 2 (Tilted Position - Axis Inclined at $45 degree$ to HP):*
  - The pyramid tilts about the base edge resting on HP. In the Front View, redraw the entire triangular shape of Stage 1 such that the axis $o'-o_1'$ makes an angle of $45 degree$ with the $X-Y$ reference line, with base corner on $X-Y$.
  - Since base is perpendicular to the axis, the base line makes an angle of $90 degree - 45 degree = 45 degree$ with the $X-Y$ line.

  *Step 3: Projecting the Final Top View:*
  - Project horizontal projection lines from the Stage 1 Top View and vertical projectors down from the Stage 2 tilted Front View.
  - Locate intersecting points for all six base vertices ($a_1, b_1, c_1, d_1, e_1, f_1$) and apex $o_1$.
  - *Visibility Rules:*
    1. Draw the complete outer boundary of the top view using continuous thick lines (Type A); the outer boundary of any view is always visible.
    2. Apex $o_1$ is at the top; the three slant edges radiating from $o_1$ to the visible upper corners are drawn as continuous thick lines.
    3. The base edge resting on the ground ($c_1-d_1$) is covered by the body of the pyramid; it must be drawn as a dashed thin line (Type E) indicating a hidden edge.

  *Boxed Final Answers:*
  $ "Base inclination to HP" = 45 degree, quad "Stage 1 base on " X-Y, quad "Final TV shows foreshortened hexagonal base with hidden edge on ground". $
]

#v(8pt)
#rect(width: 100%, fill: rgb(249, 250, 251), stroke: 1pt + rgb(220, 225, 230), radius: 4pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb(15, 23, 42))[FAT Problem 2: Isometric Projection of Composite Solid (Frustum of Cone + Cylinder)] \
  *Question (10 Marks):* A composite solid consists of a frustum of a right circular cone surmounted centrally by a solid circular cylinder:
  - *Cone Frustum:* Bottom base diameter $D_1 = 60" mm"$, top base diameter $D_2 = 40" mm"$, height $H_1 = 40" mm"$.
  - *Cylinder:* Diameter $D_3 = 30" mm"$, height $H_2 = 30" mm"$.
  ("i") Construct the true Isometric Scale and state the conversion factor.
  ("ii") Calculate the reduced isometric dimensions for all diameters and heights.
  ("iii") Describe the Four-Center ellipse construction for the top and bottom circular bases.

  #v(4pt)
  #text(weight: "bold", fill: rgb(139, 0, 0))[Complete Step-by-Step Solution:] \
  *Step 1: Isometric Scale Calculation:*
  Conversion factor is $sqrt(2/3) approx 0.8165$.
  - *Cone Bottom Base ($D_1 = 60" mm"$):*
  $ D_(1,"iso") = 60 times 0.8165 = 48.99" mm" approx 49.0" mm" $
  - *Cone Top Base ($D_2 = 40" mm"$):*
  $ D_(2,"iso") = 40 times 0.8165 = 32.66" mm" approx 32.7" mm" $
  - *Cone Height ($H_1 = 40" mm"$):*
  $ H_(1,"iso") = 40 times 0.8165 = 32.66" mm" $
  - *Cylinder Diameter ($D_3 = 30" mm"$):*
  $ D_(3,"iso") = 30 times 0.8165 = 24.50" mm" $
  - *Cylinder Height ($H_2 = 30" mm"$):*
  $ H_(2,"iso") = 30 times 0.8165 = 24.50" mm" $
  - *Total Composite Height:*
  $ H_("total","iso") = 32.66 + 24.50 = 57.16" mm" $

  *Step 2: Four-Center Ellipse Construction for Bases:*
  1. For bottom base ($49.0" mm"$): Draw isometric rhombus of side $49" mm"$ at $30 degree$ to horizontal. Connect obtuse vertices to opposite midpoints to find 4 centers; draw 4 circular arcs.
  2. Measure isometric height $32.7" mm"$ vertically along central axis to establish top level of frustum.
  3. Construct smaller isometric rhombus of side $32.7" mm"$ centrally and draw the top base ellipse.
  4. Draw tangential outer contour lines connecting the bottom and top ellipses to form the cone frustum lateral surface.
  5. From center of frustum top, measure vertical cylinder height $24.5" mm"$. Draw cylinder top ellipse inside an isometric rhombus of side $24.5" mm"$. Draw vertical tangent generators.

  *Boxed Final Answers:*
  $ D_(1,"iso") = 49.0" mm", quad D_(2,"iso") = 32.7" mm", quad H_(1,"iso") = 32.7" mm", quad D_(3,"iso") = 24.5" mm", quad H_(2,"iso") = 24.5" mm". $
]

#v(8pt)
#rect(width: 100%, fill: rgb(249, 250, 251), stroke: 1pt + rgb(220, 225, 230), radius: 4pt, inset: 10pt)[
  #text(weight: "bold", fill: rgb(15, 23, 42))[FAT Problem 3: Civil Architectural Floor Plan Analysis & Area Calculations] \
  *Question (10 Marks):* A proposed single-storey residential 1-BHK building has internal clear dimensions:
  - Living Room: $3.60" m" times 4.50" m"$
  - Bedroom: $3.00" m" times 3.60" m"$
  - Kitchen: $2.40" m" times 3.00" m"$
  - Bathroom / Toilet: $1.50" m" times 2.10" m"$
  All external load-bearing masonry walls are $230" mm"$ thick, and internal partition walls between rooms are $115" mm"$ thick.
  ("i") Calculate the total Carpet Area of the residence.
  ("ii") Assuming overall external building dimensions are $7.50" m" times 6.50" m"$, calculate the Plinth (Built-Up) Area.
  ("iii") Determine the wall area and compute the percentage ratio of wall area to plinth area.
  ("iv") Formulate the standard Doors and Windows opening schedule specifying standard sizes.

  #v(4pt)
  #text(weight: "bold", fill: rgb(139, 0, 0))[Complete Step-by-Step Solution:] \
  *Step 1: Calculate Carpet Area:*
  Carpet area is the sum of usable internal room areas:
  $ A_"Living" = 3.60 times 4.50 = 16.20" m"^2 $
  $ A_"Bedroom" = 3.00 times 3.60 = 10.80" m"^2 $
  $ A_"Kitchen" = 2.40 times 3.00 = 7.20" m"^2 $
  $ A_"Bath" = 1.50 times 2.10 = 3.15" m"^2 $
  $ "Total Carpet Area" = 16.20 + 10.80 + 7.20 + 3.15 = 37.35" m"^2 $

  *Step 2: Calculate Plinth (Built-Up) Area:*
  Measured to outer faces of perimeter external walls ($7.50" m" times 6.50" m"$):
  $ "Plinth Area" = 7.50 times 6.50 = 48.75" m"^2 $

  *Step 3: Wall Area & Percentage Ratio:*
  $ "Wall Area" = "Plinth Area" - "Carpet Area" = 48.75 - 37.35 = 11.40" m"^2 $
  $ "Wall Ratio" = ("Wall Area" / "Plinth Area") times 100\% = (11.40 / 48.75) times 100\% = 23.38\% $
  (Consistent with architectural benchmarks where brick wall footprints occupy $18 - 25\%$ of gross plinth area).

  *Step 4: Opening Schedule (Doors & Windows):*
  - Main Door ($D$): $1.00" m" times 2.10" m"$ (Living room entrance).
  - Internal Doors ($D_1$): $0.90" m" times 2.10" m"$ (Bedroom and Kitchen).
  - Toilet Door ($D_2$): $0.75" m" times 2.10" m"$.
  - Large Windows ($W$): $1.50" m" times 1.20" m"$ (Living room, sill $0.9" m"$).
  - Standard Windows ($W_1$): $1.20" m" times 1.20" m"$ (Bedroom and Kitchen).
  - Ventilator ($V$): $0.60" m" times 0.45" m"$ (Toilet, lintel level $2.1" m"$).

  *Boxed Final Answers:*
  $ "Carpet Area" = 37.35" m"^2, quad "Plinth Area" = 48.75" m"^2, quad "Wall Area" = 11.40" m"^2 (23.38\%), quad "Schedule complete". $
]
