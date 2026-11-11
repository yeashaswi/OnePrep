
#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.2cm, right: 2.2cm),
  header: context {
    if here().page() > 1 {
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: luma(90))[VIT BCHY102 / EST1001 --- Module 2: Biodiversity & Quality]],
        align(right)[#text(size: 8.5pt, fill: luma(90), style: "italic")[VIT CBT Exam Textbook]]
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
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT BCHY102 / EST1001 --- Module 2: Biodiversity & Quality] \
  #v(2mm)
  #text(size: 15pt, weight: "black")[MODULE 2: BIODIVERSITY AND ENVIRONMENTAL QUALITY] \
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[(CO: 2)] \
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Complete CBT Study Textbook, High-Yield MCQ Bank & Step-by-Step Rationales] \
  #text(size: 9pt, fill: luma(100))[Aligned with VIT BCHY102 Online CBT Exam Syllabus, VTOP / Moodle Question Bank & Past Papers]
]

#v(3mm)
#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 9pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Textbook (Official VIT Syllabus):]
  (1) Biodiversity: Definition, levels (Genetic, Species, Ecosystem diversity), (2) Values and significance of biodiversity (consumptive, productive, social, ethical, aesthetic), (3) Global biodiversity hotspots and Megadiverse nations (criteria for hotspot designation), (4) Threats to biodiversity: Habitat fragmentation, Overexploitation, Invasive alien species, Climate change, and Poaching, (5) IUCN Red Data Book classifications (Extinct, Critically Endangered, Endangered, Vulnerable), (6) Conservation strategies: In-situ conservation (National Parks, Wildlife Sanctuaries, Biosphere Reserves) vs Ex-situ conservation (Botanical gardens, Zoological parks, Gene/Seed banks, Cryopreservation), and (7) Genetically Modified (GM) crops and environmental biosafety.
]

#v(2mm)
#outline(title: "Contents", depth: 2, indent: auto)
#v(2mm)

= VIT CBT Exam Blueprint & Master Key Facts for Module 2

VIT Examination Format: 100% CBT Multiple Choice Questions (MCQs).
Module 2 accounts for 20% of the CBT Question Pool:
- Core Focus: Hotspot identification criteria (Myers: >=1500 endemic vascular plants and >=70% habitat loss), Indian hotspots (Western Ghats, Indo-Burma, Himalayas, Sundaland), difference between National Parks and Wildlife Sanctuaries (human activities prohibited in National Parks), and IUCN Red List categories.

#v(2mm)
#table(
  columns: (2.2fr, 3.2fr, 2.6fr),
  stroke: 0.5pt + luma(180),
  inset: 6.5pt,
  [*Conservation Category*], [*Definition & Legal Framework*], [*CBT Exam Hallmark*],
  [Hotspot Criteria (Myers)], [At least 1500 endemic vascular plant species + lost $>= 70%$ primary habitat], [There are 36 global biodiversity hotspots; 4 cover India],
  [Indian Hotspots], [Western Ghats & Sri Lanka, Eastern Himalayas, Indo-Burma, Sundaland], [Western Ghats exhibits exceptional amphibian and reptile endemism],
  [In-Situ Conservation], [Protecting species within natural habitat (National Parks, Biosphere Reserves)], [Preserves evolutionary ecological interactions],
  [Ex-Situ Conservation], [Protecting outside natural habitat (Gene banks, Botanical gardens, Cryopreservation)], [Emergency rescue for critically endangered genetic lines],
  [National Park], [IUCN Category II; strictly protected; grazing/forestry totally prohibited], [Created by central/state legislation; high protection level],
  [Wildlife Sanctuary], [IUCN Category IV; regulated human activities (traditional grazing) permitted], [Focuses on conservation of specific target fauna species],

)

= Topic 1: Levels of Biodiversity & Hotspot Criteria

=== Levels of Biological Diversity
1. *Genetic Diversity:* Variation of genes within a single species (e.g., over 50,000 distinct genetic strains of rice in India). Enables evolutionary adaptation.
2. *Species Diversity:* Richness (number of species) and evenness (relative abundance) in an ecological region.
3. *Ecosystem Diversity:* Variety of ecological habitats, biomes, and biological communities (coral reefs, mangroves, tropical rainforests).

=== Norman Myers' Hotspot Criteria
To qualify as a global biodiversity hotspot, a geographical region must meet two strict criteria:
1. It must contain at least *1,500 species of vascular plants* as endemics ($> 0.5%$ of the world total).
2. It must have lost at least *70% of its original primary native habitat* ($<= 30%$ original natural vegetation remaining).
There are currently *36 recognized global hotspots*. Four cover parts of India:
- *Western Ghats & Sri Lanka*
- *Eastern Himalayas*
- *Indo-Burma (North-East India)*
- *Sundaland (Nicobar Islands)*.


= Topic 2: High-Yield VIT CBT Multiple Choice Question (MCQ) Bank

*MCQ 2.1:* To qualify as a global biodiversity hotspot under Norman Myers' criteria, an area must contain at least how many endemic vascular plant species?
(A) 500 (B) 1,000 (C) 1,500 (D) 2,500 *Correct Answer:* *(C)* *Rationale:* A biodiversity hotspot must harbor >= 1500 endemic species of vascular plants and have lost >= 70% of its primary vegetation.

*MCQ 2.2:* Which of the following is an example of *ex-situ* conservation?
(A) Kaziranga National Park (B) Nilgiri Biosphere Reserve (C) National Gene Bank and Seed Vault (D) Periyar Wildlife Sanctuary *Correct Answer:* *(C)* *Rationale:* Ex-situ conservation protects organisms outside their natural habitat, such as gene banks, seed banks, cryobanks, and botanical gardens.

*MCQ 2.3:* Which Indian biodiversity hotspot includes the Nicobar group of islands?
(A) Western Ghats (B) Indo-Burma (C) Sundaland (D) Eastern Himalayas *Correct Answer:* *(C)* *Rationale:* The Nicobar Islands are an extension of the Sundaland hotspot, which also includes Malaysia, Indonesia, and Singapore.

*MCQ 2.4:* The IUCN Red Data Book classifies a taxon facing an extremely high risk of extinction in the wild as:
(A) Vulnerable (B) Endangered (C) Critically Endangered (D) Extinct in the Wild *Correct Answer:* *(C)* *Rationale:* Critically Endangered (CR) is the highest risk category assigned by the IUCN Red List before extinction in the wild.


= Quick Self-Test Checklist Before Your Online CBT Exam

1. State the two numerical criteria required to designate a global biodiversity hotspot.
2. Name all four biodiversity hotspots that extend into Indian territory.
3. Differentiate between In-Situ and Ex-Situ conservation with 2 examples each.
4. Why is commercial timber harvesting and grazing prohibited in National Parks?
