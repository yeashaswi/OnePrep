
#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.2cm, right: 2.2cm),
  header: context {
    if here().page() > 1 {
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: luma(90))[VIT BACEE101 --- Module 3: Graphics & CAD]],
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
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT BACEE101 --- Module 3: Graphics & CAD] \
  #v(2mm)
  #text(size: 15pt, weight: "black")[MODULE 3: ENGINEERING GRAPHICS AND CAD] \
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[(CO: 3)] \
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Complete Study Textbook, Step-by-Step Derivations & VIT FAT Question Bank] \
  #text(size: 9pt, fill: luma(100))[Aligned with Official VIT BACEE101 Course Page Syllabus, Question Bank, and Past FAT Papers]
]

#v(3mm)

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
