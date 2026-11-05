
#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.2cm, right: 2.2cm),
  header: context {
    if here().page() > 1 {
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: luma(90))[VIT BCHY102 / EST1001 --- Module 4: Laws & Clean Energy]],
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
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT BCHY102 / EST1001 --- Module 4: Laws & Clean Energy] \
  #v(2mm)
  #text(size: 15pt, weight: "black")[MODULE 4: ENVIRONMENTAL LAWS, POLICIES & RENEWABLE ENERGY] \
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[(CO: 4)] \
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Complete CBT Study Textbook, High-Yield MCQ Bank & Step-by-Step Rationales] \
  #text(size: 9pt, fill: luma(100))[Aligned with VIT BCHY102 Online CBT Exam Syllabus, VTOP / Moodle Question Bank & Past Papers]
]

#v(3mm)
#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 9pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Textbook (Official VIT Syllabus):]
  (1) Constitutional provisions for environmental protection in India (Articles 48A and 51A(g)), (2) Major Indian Environmental Acts: The Water (Prevention and Control of Pollution) Act 1974, The Air Act 1981, The Environment (Protection) Act 1986, The Wildlife Protection Act 1972, and The Forest (Conservation) Act 1980, (3) Central and State Pollution Control Boards (CPCB and SPCB) powers and functions, (4) International environmental agreements: Montreal Protocol (ODS phase-out), Kyoto Protocol (CDM and carbon credits), and Paris Agreement (1.5 deg C limit), (5) UN Sustainable Development Goals (SDGs 1-17), and (6) Renewable and clean energy technologies: Solar photovoltaic, Wind turbines, Hydroelectric, Geothermal, Biomass, Hydrogen fuel, and Electric Vehicles (EVs).
]

#v(2mm)
#outline(title: "Contents", depth: 2, indent: auto)
#v(2mm)

= VIT CBT Exam Blueprint & Master Key Facts for Module 4

VIT Examination Format: 100% CBT Multiple Choice Questions (MCQs).
Module 4 accounts for 20% of the CBT Question Pool:
- Core Focus: Environmental legislation enactment years (Wildlife Act = 1972, Water Act = 1974, Air Act = 1981, Environment Protection Act = 1986), Montreal Protocol targets (CFCs / ozone-depleting substances), Kyoto Protocol greenhouse gases (6 gases: CO2, CH4, N2O, HFCs, PFCs, SF6), and specific UN Sustainable Development Goals.

#v(2mm)
#table(
  columns: (2.2fr, 3.2fr, 2.6fr),
  stroke: 0.5pt + luma(180),
  inset: 6.5pt,
  [*Environmental Act / Protocol*], [*Year Enacted*], [*Primary Legal Mandate / Target*],
  [Wildlife Protection Act], [1972], [Schedules I-VI governing protected animal and plant species],
  [Water (Prevention & Control) Act], [1974], [Established Central and State Pollution Control Boards (CPCB & SPCB)],
  [Air (Prevention & Control) Act], [1981], [Expanded in 1987 to include noise pollution as an air pollutant],
  [Environment (Protection) Act], [1986], [Umbrella legislation enacted after the 1984 Bhopal Gas Tragedy],
  [Montreal Protocol], [1987], [Phasing out Chlorofluorocarbons (CFCs) and Ozone-Depleting Substances],
  [Kyoto Protocol], [1997], [Legally binding greenhouse gas emission reductions and Clean Development Mechanism (CDM)],
  [Paris Climate Agreement], [2015], [Holding global temperature increase well below $2^degree"C"$, aiming for $1.5^degree"C"$],

)

= Topic 1: Indian Environmental Legislation & Global Protocols

=== Milestone Indian Environmental Acts
1. *The Wildlife (Protection) Act, 1972:* Established legal framework for National Parks and Sanctuaries; classifies protected species across Schedules I to VI.
2. *The Water Act, 1974:* Created Central Pollution Control Board (CPCB) and State Pollution Control Boards (SPCBs) with regulatory authority to monitor industrial effluents and establish water quality standards.
3. *The Air Act, 1981:* Regulates industrial stack emissions. *Amended in 1987 to officially include Noise Pollution as an air pollutant!*
4. *The Environment (Protection) Act, 1986 (EPA):* Enacted under Article 253 of the Constitution following the 1984 Bhopal Gas Tragedy. Serves as "umbrella" legislation empowering the Central Government to set nationwide emission standards and mandate Environmental Impact Assessments (EIA).

=== International Protocols & UN SDGs
- *Montreal Protocol (1987):* The most successful environmental treaty; phased out CFCs, halons, and carbon tetrachloride to restore the stratospheric ozone layer.
- *Kyoto Protocol (1997):* Targeted 6 greenhouse gases ($"CO"_2, "CH"_4, "N"_2"O", "HFCs", "PFCs", "SF"_6$) with market mechanisms (Carbon Credits, Emissions Trading, Clean Development Mechanism).
- *Sustainable Development Goals (SDGs):* 17 goals adopted by the UN in 2015 for 2030 (SDG 6: Clean Water, SDG 7: Affordable Clean Energy, SDG 13: Climate Action).


= Topic 2: High-Yield VIT CBT Multiple Choice Question (MCQ) Bank

*MCQ 4.1:* The Environment (Protection) Act in India was enacted in which year following the Bhopal Gas Tragedy?
(A) 1974 (B) 1981 (C) 1986 (D) 1992 *Correct Answer:* *(C)* *Rationale:* Enacted in 1986 as an umbrella act in response to the December 1984 Bhopal toxic gas disaster.

*MCQ 4.2:* In which year was the Air (Prevention and Control of Pollution) Act amended to include *noise* as an air pollutant?
(A) 1981 (B) 1986 (C) 1987 (D) 1990 *Correct Answer:* *(C)* *Rationale:* Enacted in 1981 and amended in 1987 to include noise within the statutory definition of air pollutants.

*MCQ 4.3:* The Montreal Protocol (1987) is an international environmental agreement specifically aimed at:
(A) Limiting global carbon dioxide emissions (B) Phasing out Ozone-Depleting Substances (CFCs) (C) Regulating transboundary hazardous electronic waste (D) Protecting wetlands of international importance *Correct Answer:* *(B)* *Rationale:* The Montreal Protocol successfully mandated the phased worldwide elimination of chlorofluorocarbons (CFCs) and halons.

*MCQ 4.4:* Which United Nations Sustainable Development Goal (SDG) specifically addresses "Climate Action"?
(A) SDG 6 (B) SDG 7 (C) SDG 11 (D) SDG 13 *Correct Answer:* *(D)* *Rationale:* SDG 13 is dedicated to Climate Action; SDG 6 is Clean Water and Sanitation; SDG 7 is Affordable and Clean Energy.


= Quick Self-Test Checklist Before Your Online CBT Exam

1. State the enactment years for the 4 major Indian Environmental Acts.
2. In which year was noise officially classified as an air pollutant under Indian law?
3. Name the 6 greenhouse gases regulated under the Kyoto Protocol.
4. Match SDG 6, SDG 7, and SDG 13 to their respective sustainable development mandates.
