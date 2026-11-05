
#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.2cm, right: 2.2cm),
  header: context {
    if here().page() > 1 {
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: luma(90))[VIT BACEE101 --- Module 5: Bio-Inspired Design]],
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
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT BACEE101 --- Module 5: Bio-Inspired Design] \
  #v(2mm)
  #text(size: 15pt, weight: "black")[MODULE 5: BIO-INSPIRED DESIGN IN ENGINEERING] \
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[(CO: 5)] \
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Complete Study Textbook, Step-by-Step Derivations & VIT FAT Question Bank] \
  #text(size: 9pt, fill: luma(100))[Aligned with Official VIT BACEE101 Course Page Syllabus, Question Bank, and Past FAT Papers]
]

#v(3mm)

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
