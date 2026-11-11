
#set page(
  paper: "a4",
  margin: (top: 2cm, bottom: 2cm, left: 2cm, right: 2cm),
  header: context {
    if here().page() > 1 {
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8pt, fill: rgb("#64748b"))[VIT BAENG101 --- Technical English Communication]],
        align(right)[#text(size: 8pt, fill: rgb("#64748b"), style: "italic")[Official VIT FAT Study Textbook]]
      )
      v(-2pt)
      line(length: 100%, stroke: 0.4pt + rgb("#cbd5e1"))
    }
  },
  footer: context {
    line(length: 100%, stroke: 0.4pt + rgb("#e2e8f0"))
    v(2pt)
    grid(
      columns: (1fr, 1fr),
      align(left)[#text(size: 8pt, fill: rgb("#94a3b8"))[OnePrep • VIT Vellore Exam Preparation Platform]],
      align(right)[#text(size: 8pt, weight: "bold", fill: rgb("#0f172a"))[Page #here().page()]]
    )
  }
)
#set text(font: "New Computer Modern", size: 9pt)
#set par(justify: true, leading: 0.55em)
#set heading(numbering: "1.1")
#show heading.where(level: 1): it => block(spacing: 12pt)[
  #text(fill: rgb("#0f172a"), weight: "black", size: 12pt)[#it]
  #v(2pt)
  #line(length: 100%, stroke: 1pt + rgb("#dc2626"))
]
#show heading.where(level: 2): it => block(spacing: 8pt)[
  #text(fill: rgb("#1e293b"), weight: "bold", size: 10pt)[#it]
]

#align(center)[
  #text(size: 10pt, weight: "bold", tracking: 0.5pt, fill: rgb("#64748b"))[VIT BAENG101 --- Module 3: Reading & Definitions] \
  #v(1.5mm)
  #text(size: 14pt, weight: "black", fill: rgb("#0f172a"))[MODULE 3: READING, TECHNICAL DEFINITIONS & 100-WORD MASTER BANK] \
  #text(size: 11pt, weight: "bold", fill: rgb("#dc2626"))[(CO: 4 | Weightage: 20 Marks in FAT --- Question 5 Mandatory & Question 6 Choice)] \
  #v(1mm)
  #text(size: 9.5pt, weight: "bold")[Complete Study Textbook, 3-Part Architecture, Complete 100-Word Bank & IMRAD Research Deconstruction] \
  #text(size: 8pt, fill: rgb("#64748b"))[Aligned with Official VIT BAENG101 Question Bank, Definition Blueprints, and Past FAT Papers]
]

#v(2mm)

#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 7pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Module (Official Syllabus & FAT Blueprint):] \
  (1) Analysing Definitions: Types of Definitions (Formal, Semi-formal, Informal), (2) Methods for Expanding Definitions (Etymology, Operating Principle, Physical Description, Analogy, Exemplification), (3) Complete Master Word Bank of all 100 Official Terms, (4) Reading Comprehension & Analytical Inferences from Scientific Texts, (5) Structure and Deconstruction of a Research Article (IMRAD Framework).
]

= 1. VIT FAT Exam Blueprint: Questions 5 & 6 Breakdown

Module 3 governs two major 10-mark questions in your FAT exam:

#table(
  columns: (1fr, 1.3fr, 2.4fr, 1fr),
  inset: 5pt,
  stroke: 0.4pt + rgb("#cbd5e1"),
  align: (center, left, left, center),
  [*Question*], [*Exam Focus*], [*Exact Testing Requirements & Rubric*], [*Marks*],
  [*Question 5*], [Technical Definitions (100-Word Bank)], [Mandatory question. Five words (2M each) or ten words (1M each) are selected *strictly from the official 100-word bank*. You MUST state: Term, Class (Genus), and Differentia, followed by the complete formal sentence.], [10 Marks],
  [*Question 6*], [Reading Comp / IMRAD Analysis], [Internal choice with Question 7. Reading an unfamiliar scientific text, answering fact and inference questions, and dissecting the author's research gap and experimental claims.], [10 Marks]
)

= 2. The Architecture of Technical Definitions

== 2.1 The Three Types of Definitions
1. *Informal Definition:* A brief synonym or explanatory gloss placed in parentheses or apposition:
   - *Example:* "The tachometer (a rotational speed meter) recorded 3,000 RPM."
2. *Semi-Formal Definition:* An expanded phrase or relative clause clarifying meaning:
   - *Example:* "An accelerometer is a sensor which monitors dynamic acceleration forces."
3. *Formal Definition (The Exam Gold Standard):* A rigorous single-sentence statement structured according to Aristotle's classical taxonomy:
   $ "Term" = "Class (Genus)" + "Differentia (Distinguishing Characteristics)" $
   - *Term:* The specific technical entity being defined (e.g., *Satellite*).
   - *Class (Genus):* The broader category or family of objects to which the term belongs (e.g., *is an artificial spacecraft*).
   - *Differentia:* The precise characteristics, operating principles, or functions that distinguish this term from all other members of the same class (e.g., *placed intentionally into orbit around a planet to relay telecommunications or gather scientific telemetry data*).

== 2.2 The Fatal Circular Definition Trap (Zero Marks!)
A definition is circular if the differentia repeats the root word or a derivative of the term being defined. Examiners deduct all marks for circularity:
- *Fatal Circular Error:* "A *transformer* is an electrical device that *transforms* voltage." ==> *0 Marks!*
- *Correct Formal Standard:* "A *transformer* is a passive electrical device [Class] that transfers electrical energy between two or more circuits through electromagnetic induction, stepping AC voltage up or down at constant frequency [Differentia]." ==> *Full 10/10!*

== 2.3 Methods of Expanding Definitions
In Section B of Question 5 (or when asked to "expand one definition"), you must use one or more of these expansion methods:
1. *By Operating Principle:* Explain the physical law underlying operation (e.g. photovoltaic effect for solar cells, piezoelectric effect for quartz sensors).
2. *By Physical Description & Components:* Enumerate sub-assemblies, dimensions, and material composition.
3. *By Exemplification:* Cite industry standards, commercial models, or chemical formulas.
4. *By Comparison & Contrast:* Differentiate the item from adjacent technologies (e.g., ROM vs. RAM).

= 3. The Official 100-Word Master Definition Bank (Complete Printed Vault)

Below is the complete, unabridged catalog of all 100 terms from the official BAENG101 Word Bank. Memorize these exact three-part structures for Question 5:

#table(
  columns: (0.4fr, 1.2fr, 1.8fr, 3.2fr),
  inset: 4.5pt,
  stroke: 0.35pt + rgb("#cbd5e1"),
  align: (center, left, left, left),
  [*S.No.*], [*Term*], [*Class (Genus)*], [*Differentia & Formal Exam Definition*],
[1], [*Satellite*], [An artificial celestial object or spacecraft], [placed intentionally into orbit around the Earth or another planet to relay telecommunications, conduct meteorological observation, or gather scientific telemetry data. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A satellite is an artificial spacecraft placed intentionally into orbit around a planet to relay telecommunications, conduct meteorological observation, or gather scientific telemetry data."]],
[2], [*Equipment*], [A set of physical tools, machinery, or apparatus], [designed and provisioned for performing a specific task, technical operation, or laboratory experiment. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "Equipment is a set of physical tools, machinery, or apparatus designed and provisioned for performing a specific technical operation or laboratory experiment."]],
[3], [*Wallet*], [A pocket-sized flat folding case or digital software application], [used to store currency, payment cards, identification documents, or cryptographic authentication keys. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A wallet is a pocket-sized flat folding case or digital software application used to securely store currency, payment cards, or cryptographic keys."]],
[4], [*Analysis*], [A systematic method of examination], [that decomposes a complex entity or dataset into its constituent elements to determine its underlying structure, behavior, and relationships. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "Analysis is a systematic method of examination that decomposes a complex entity or dataset into its constituent elements to determine its underlying structure and behavior."]],
[5], [*Artificial Intelligence (AI)*], [A subfield of computer science], [dedicated to engineering software algorithms and neural networks capable of executing tasks that typically require human cognitive intelligence, such as pattern recognition, natural language reasoning, and autonomous decision-making. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "Artificial Intelligence (AI) is a subfield of computer science dedicated to engineering software algorithms and neural networks capable of executing cognitive tasks like reasoning, pattern recognition, and autonomous decision-making."]],
[6], [*Fountainpen*], [A handheld writing instrument], [that utilizes capillary action and gravity to deliver water-based liquid ink from an internal refillable reservoir to a metallic nib. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A fountainpen is a handheld writing instrument that utilizes capillary action to deliver liquid ink from an internal reservoir to a metallic nib."]],
[7], [*Database*], [A structured, electronically stored collection of data], [organized systematically and managed via a Database Management System (DBMS) to enable rapid querying, indexing, updating, and transactional consistency. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A database is a structured collection of digital information organized systematically and managed via a DBMS to enable efficient querying, indexing, and transactional integrity."]],
[8], [*Pressure*], [A scalar physical quantity], [defined as the perpendicular force applied per unit surface area of an object (measured in Pascals or N/m²). 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "Pressure is a scalar physical quantity defined as the perpendicular force exerted per unit surface area of an object."]],
[9], [*Revenue*], [The total monetary gross income], [generated by an enterprise through the sale of goods, provision of services, or commercial operations before deducting manufacturing and operating expenses. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "Revenue is the total gross monetary income generated by an enterprise through commercial sales or services prior to deducting operating expenses."]],
[10], [*Drone*], [An unmanned aerial vehicle (UAV)], [navigated remotely by a human pilot or autonomously guided by onboard inertial sensors, GPS, and microprocessors. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A drone is an unmanned aerial vehicle (UAV) steered remotely or guided autonomously by onboard sensors, GPS, and flight-control microprocessors."]],
[11], [*Photosynthesis*], [A biological biochemical anabolic process], [by which autotrophic green plants and cyanobacteria convert light photon energy into chemical energy, synthesizing glucose from water and carbon dioxide while releasing molecular oxygen. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "Photosynthesis is a biological anabolic process in which autotrophic organisms convert light energy into chemical energy, synthesizing glucose from carbon dioxide and water with the release of oxygen."]],
[12], [*Password*], [A secret cryptographic string of characters], [utilized for identity authentication to restrict unauthorized access to computer systems, networks, or encrypted resources. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A password is a secret string of characters utilized for user authentication to verify identity and restrict unauthorized system access."]],
[13], [*Prototype*], [An early preliminary working model or sample], [built to evaluate, benchmark, and iteratively validate the feasibility, ergonomics, and technical functionality of a product design prior to mass manufacturing. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A prototype is an early working model built to benchmark, test, and validate the functionality and feasibility of a design before full-scale manufacturing."]],
[14], [*Airline*], [A commercial enterprise], [that provides scheduled or chartered air transportation services for passengers and cargo utilizing certified commercial aircraft fleets. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "An airline is a commercial transportation enterprise that provides scheduled air carriage services for passengers and freight using aircraft fleets."]],
[15], [*Recycling*], [A waste management and resource recovery process], [that reprocesses discarded municipal or industrial materials into new usable products or raw feedstocks to diminish virgin resource extraction and pollution. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "Recycling is a waste recovery process that converts discarded solid waste materials into reusable raw commodities to mitigate resource depletion and environmental degradation."]],
[16], [*Microphone*], [An acoustic electroacoustic transducer], [that converts sound pressure wave oscillations in air into corresponding analog or digitized electrical audio signals. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A microphone is an electroacoustic transducer that converts sound pressure wave oscillations into proportional electrical audio signals."]],
[17], [*Optimist*], [An individual characterized by a psychological disposition], [that anticipates favorable results, positive outcomes, and constructive growth even in adverse or uncertain circumstances. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "An optimist is an individual characterized by a cognitive disposition that consistently expects favorable outcomes and constructive solutions despite adversity."]],
[18], [*UPI (Unified Payments Interface)*], [An instantaneous real-time payment architecture], [developed by NPCI in India that facilitates immediate inter-bank peer-to-peer and peer-to-merchant fund transfers via mobile devices without exposing bank account numbers. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "UPI is a real-time mobile payment architecture that facilitates instant inter-bank monetary transactions without revealing sensitive account credentials."]],
[19], [*Cybersecurity*], [The technical and operational discipline], [focused on defending networked computer hardware, software applications, communication protocols, and sensitive digital data from unauthorized infiltration, cyberattacks, and exploitation. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "Cybersecurity is the discipline focused on protecting computing systems, digital networks, and electronic data from unauthorized intrusion, damage, or cyberattacks."]],
[20], [*Portfolio*], [A curated systematic collection], [of financial investments, professional projects, design artifacts, or academic works demonstrating an individual's or institution's competencies and assets. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A portfolio is a curated collection of financial assets, professional accomplishments, or creative artifacts demonstrating competence and value."]],
[21], [*Cement*], [A fine mineral binder and hydraulic construction material], [manufactured by calcining limestone and clay which sets, hardens, and adheres to aggregate stones upon hydration with water to form concrete. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "Cement is a fine hydraulic mineral binder made from calcined limestone that chemically hydrates with water to bind aggregates into solid concrete."]],
[22], [*Browser*], [A client-side software application], [used to retrieve, render, and navigate hypertext markup, multimedia assets, and web applications hosted across the World Wide Web via HTTP/HTTPS protocols. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A browser is a software application that interprets HTML/CSS and fetches web resources over HTTP/HTTPS to render interactive web pages for users."]],
[23], [*Solar panel*], [An integrated photovoltaic assembly of solar cells], [that directly converts incident solar electromagnetic radiation into direct-current (DC) electricity via the internal photovoltaic effect. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A solar panel is an assembly of interconnected photovoltaic cells that converts solar radiant energy directly into direct-current electrical energy."]],
[24], [*Biography*], [A non-fiction written narrative account], [of an individual's life history, career milestones, achievements, and legacy, authored by an external biographer. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A biography is a non-fictional literary work detailing the life history, achievements, and legacy of an individual, composed by another person."]],
[25], [*Battery*], [An electrochemical energy storage device], [consisting of one or more galvanic cells that convert stored chemical energy into electrical energy through spontaneous redox reactions. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A battery is an electrochemical storage device comprising galvanic cells that converts stored chemical energy into electrical current via redox reactions."]],
[26], [*Quick commerce*], [A high-speed e-commerce logistics and fulfillment model], [designed to deliver low-weight FMCG groceries and essential commodities to consumers within 10 to 30 minutes utilizing hyper-local dark stores. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "Quick commerce is an e-commerce fulfillment model that delivers essential consumer goods within 10 to 30 minutes using distributed hyper-local micro-warehouses."]],
[27], [*Sensor*], [An input electrical or electronic transducer], [that detects a physical parameter (such as temperature, light, pressure, or motion) and transforms it into a readable, quantifiable electrical signal. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A sensor is an electronic transducer that detects environmental physical stimuli and translates them into measurable electrical signals."]],
[28], [*Restaurant*], [A commercial hospitality establishment], [where prepared culinary food and beverages are sold and served to patrons for on-premises consumption or takeaway delivery. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A restaurant is a commercial establishment where culinary food and beverages are prepared, purchased, and served to dining customers."]],
[29], [*3D Printing*], [An additive manufacturing process], [that synthesizes three-dimensional physical objects layer upon layer directly from a 3D digital CAD model using polymers, resins, or metallic powders. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "3D printing is an additive manufacturing fabrication technique that deposits successive layers of material guided by a 3D computer CAD file to build physical objects."]],
[30], [*Folder*], [A graphical user interface container or physical cardboard binder], [employed to categorize, group, and store digital files or paper documents systematically for streamlined retrieval. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A folder is a physical binder or digital directory container employed to organize and store related documents systematically."]],
[31], [*Pollution*], [The introduction of contaminants or harmful substances], [into the natural biosphere (air, water, or soil) causing ecological disruption, physiological harm to organisms, or environmental degradation. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "Pollution is the contamination of the physical environment by xenobiotic or harmful substances that cause adverse ecological and biological consequences."]],
[32], [*Aircraft*], [A heavier-than-air or lighter-than-air vehicle], [capable of sustained flight through atmospheric air via aerodynamic lift generated from fixed wings, rotating airfoils, or buoyant aerostatic gas. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "An aircraft is any vehicular machine capable of sustained atmospheric flight supported by aerodynamic lift or aerostatic buoyancy."]],
[33], [*Emoji*], [A standardized digital ideogram or pictogram], [embedded in electronic communication to express emotional states, gestures, concepts, or objects in informal text-based messaging. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "An emoji is a standardized visual digital pictogram used in electronic text communication to convey emotion, tone, or physical objects."]],
[34], [*Software*], [A collection of computer programs, scripts, and executable instructions], [that direct a computer processor to perform specific data processing, hardware management, or computational tasks. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "Software is a collection of programmed machine-readable instructions and documentation that directs computing hardware to execute defined operations."]],
[35], [*Tax*], [A compulsory financial levy or fiscal charge], [imposed by a governmental authority on individuals, corporate transactions, or assets to fund public infrastructure and state expenditures. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A tax is a compulsory fiscal levy imposed by a sovereign government on citizens and commercial entities to fund public services and infrastructure."]],
[36], [*Smartphone*], [A handheld cellular mobile communications device], [integrating a high-resolution touchscreen, mobile operating system, internet connectivity, and hardware sensors to run diverse software applications. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A smartphone is a handheld mobile computing device that combines cellular telephony with computing capabilities, internet access, and multi-sensor touchscreen hardware."]],
[37], [*Convocation*], [A formal university academic assembly and ceremony], [convened to officially confer collegiate degrees, diplomas, and honors upon graduating students in the presence of academic dignitaries. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A convocation is a formal academic ceremony held by a university to officially confer earned degrees and honors upon its graduates."]],
[38], [*Airdrop*], [A wireless proprietary file-sharing protocol or supply drop], [that transmits digital files peer-to-peer over close-range Wi-Fi and Bluetooth without an active external internet connection. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "Airdrop is a close-range wireless transfer protocol that enables encrypted peer-to-peer transmission of digital files between adjacent devices."]],
[39], [*Microscope*], [An optical or electronic laboratory instrument], [employing lenses or electron beams to produce highly magnified, high-resolution visual images of microscopic specimens imperceptible to the naked eye. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A microscope is an optical or electron instrument designed to produce magnified images of minute biological specimens or crystalline structures."]],
[40], [*Phishing*], [A deceptive social engineering cyberattack], [wherein an adversary masquerades as a trustworthy entity via email or spoofed websites to induce victims into disclosing passwords, credit card credentials, or 2FA tokens. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "Phishing is a fraudulent cyberattack where attackers impersonate legitimate organizations to trick victims into revealing sensitive authentication credentials."]],
[41], [*Bionote*], [A concise professional biographical profile], [written in the third person (typically 50-100 words) highlighting an author's, researcher's, or speaker's credentials, current role, and prominent achievements. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A bionote is a concise, third-person biographical summary highlighting a professional's credentials, institutional affiliation, and notable achievements."]],
[42], [*Communication*], [A dynamic reciprocal transmission process], [where information, ideas, messages, or emotions are exchanged between a sender and receiver through verbal, non-verbal, or electronic mediums. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "Communication is the reciprocal process of transferring information and shared meaning between a sender and a recipient through symbolic codes or mediums."]],
[43], [*Cylinder*], [A fundamental three-dimensional geometric solid], [bounded by two congruent parallel circular bases connected by a continuous curved lateral surface equidistant from a central axis. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A cylinder is a geometric three-dimensional solid formed by two congruent, parallel circular bases joined by a curved surface."]],
[44], [*Virtual Reality (VR)*], [A computer-generated immersive simulation technology], [that replicates a realistic three-dimensional interactive environment experienced through head-mounted displays and sensory tracking hardware. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "Virtual Reality (VR) is an interactive computer-generated technology that immerses the user within an artificial 3D simulated environment via specialized head-mounted displays."]],
[45], [*Volunteer*], [An individual], [who freely renders time, labor, or services for charitable, humanitarian, or community causes without financial compensation or legal coercion. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A volunteer is a person who willingly undertakes humanitarian or community services without remuneration or contractual obligation."]],
[46], [*Patent*], [A sovereign legal intellectual property grant], [conferring exclusive commercial monopoly rights to an inventor over a novel, non-obvious, and industrially applicable invention for a designated period (usually 20 years). 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A patent is an exclusive legal intellectual property right granted by a government to an inventor for a novel, useful invention for a term of 20 years."]],
[47], [*Internet banking*], [An electronic financial banking platform], [allowing customers to perform retail banking operations, bill payments, and fund transfers remotely via a secure web portal without visiting a physical branch. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "Internet banking is a web-based banking facility enabling account holders to execute financial transactions and fund transfers remotely via secure portals."]],
[48], [*Dessert*], [A sweet culinary confectionery course], [traditionally served at the conclusion of a formal dinner or lunch meal (e.g., pastries, fruits, custards, or confections). 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "Dessert is a sweet culinary dish served as the culminating course of a formal meal."]],
[49], [*Authentication*], [A security verification protocol], [that confirms the claimed identity of a user, workstation, or data packet through verification of factors like passwords, biometrics, or hardware tokens. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "Authentication is the security process of verifying that a system user or entity is genuinely who they purport to be through credential validation."]],
[50], [*Podcast*], [An episodic digital audio program], [streamed or downloaded over the internet via RSS syndication feeds for playback on personal media devices. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A podcast is an episodic series of spoken-word digital audio recordings distributed online for asynchronous user streaming or downloading."]],
[51], [*Renewable Energy*], [Usable power derived from natural replenishment sources], [that are naturally replenished on a human timescale (such as solar radiation, wind kinetics, hydroelectric flow, geothermal heat, and biomass) without depleting finite reserves. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "Renewable energy is power harnessed from naturally recurring environmental phenomena (solar, wind, hydro) that are replenished indefinitely without exhaustible depletion."]],
[52], [*Clog*], [An obstruction or heavy wooden footwear], [that impedes the continuous fluid flow through a pipe, conduit, or drainage canal due to accumulated solid debris. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A clog is an accumulated physical blockage that impedes or halts the fluid flow through an engineering pipe or channel."]],
[53], [*Data*], [Unprocessed raw facts, statistics, or qualitative observations], [collected for reference, statistical analysis, or algorithmic computational processing into structured actionable information. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "Data consists of raw, uninterpreted factual symbols, values, or measurements collected for computational processing and analysis."]],
[54], [*Resumé*], [A formal professional career document], [summarizing an applicant's education, employment history, technical skill set, and accomplishments to secure an interview. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A resumé is a structured, concise professional document summarizing a job applicant's educational background, work experience, and technical competencies."]],
[55], [*Projector*], [An optical display output peripheral device], [that projects magnified video, computer imagery, or presentation slides onto a large reflective screen or flat surface using high-lumen light sources. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A projector is an optoelectronic display device that projects computer-generated visual media onto a large projection surface."]],
[56], [*Biometric Authentication*], [An identity verification cybersecurity mechanism], [that validates user identity through automated analysis of unique physiological traits (fingerprints, facial geometry, retina/iris scans) or behavioral markers. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "Biometric authentication is an identity verification technique that identifies individuals based on distinct physiological characteristics such as fingerprints or retinal patterns."]],
[57], [*Pessimist*], [An individual possessing a cognitive disposition], [that habitually anticipates undesirable outcomes, failures, or the most unfavorable aspects of any given situation. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A pessimist is an individual with a psychological tendency to anticipate failure, disadvantageous consequences, and adverse developments."]],
[58], [*Walkalator*], [A motorized passenger conveyance system], [consisting of a flat, continuous, horizontal or slightly inclined moving beltway designed to transport pedestrians across lengthy transit terminals and concourses. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A walkalator is a continuous power-driven moving horizontal walkway designed to convey pedestrians across long airport or transit corridors."]],
[59], [*Circuit*], [A closed conducting loop or interconnection], [consisting of active and passive electrical components providing an uninterrupted path for continuous electric current flow. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A circuit is an interconnected closed loop of electrical components through which electric charge can continuously flow under a potential difference."]],
[60], [*Celebrity*], [A high-profile person], [who commands widespread public recognition, fame, and media scrutiny within society due to achievements in entertainment, sports, or public life. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A celebrity is a prominent public figure who commands extensive social recognition and media attention due to public accomplishments."]],
[61], [*USB drive*], [A portable solid-state flash memory data storage peripheral], [integrating a Universal Serial Bus connector to enable rewritable plug-and-play data interchange across computing platforms. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A USB drive is a portable solid-state flash memory device fitted with a USB interface for rewritable digital data storage and transfer."]],
[62], [*Innovation*], [The practical implementation and deployment], [of a novel idea, methodology, or technology that creates demonstrable value, efficiencies, or functional improvements in existing processes. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "Innovation is the practical introduction of novel methods, inventions, or workflows that significantly elevate technical efficiency, value, or utility."]],
[63], [*Telemedicine*], [A remote medical clinical healthcare discipline], [that utilizes telecommunications and digital video platforms to provide remote patient diagnosis, health monitoring, and medical consultations across physical distances. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "Telemedicine is the delivery of medical healthcare and clinical diagnosis across distances using real-time digital telecommunication technologies."]],
[64], [*Username*], [A unique alphanumeric identifier string], [assigned to or selected by an individual to identify their specific user account on a computing system or digital service. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A username is a unique alphanumeric string used to identify and distinguish a specific user account within an electronic network."]],
[65], [*Solar eclipse*], [An astronomical celestial alignment event], [occurring when the Moon passes directly between the Sun and Earth, thereby fully or partially obstructing the Sun's light from reaching the terrestrial surface. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A solar eclipse is an astronomical event occurring when the Moon traverses between the Sun and Earth, temporarily casting its shadow on the Earth."]],
[66], [*Malware*], [Malicious executable software code], [intentionally engineered to compromise, damage, disrupt, or gain illicit unauthorized access to computer systems and confidential digital networks. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "Malware is malicious software engineered to infiltrate, damage, or exploit vulnerable computer systems without the user's consent."]],
[67], [*Square*], [A two-dimensional regular quadrilateral polygon], [possessing four sides of equal length and four internal right angles measuring exactly 90 degrees. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A square is a planar regular quadrilateral with four congruent sides and four internal right angles."]],
[68], [*Headphones*], [A personal electroacoustic listening device], [featuring a pair of miniature audio speakers worn over or inside the user's ears to reproduce audio privately. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "Headphones are a pair of small electroacoustic audio drivers worn over or inside the ears for private sound listening."]],
[69], [*Autobiography*], [A non-fiction self-authored literary work], [in which a person writes a chronological and introspective account of their own life experiences, career, and reflections. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "An autobiography is a self-authored literary narrative chronicling the writer's own life experiences and personal reflections."]],
[70], [*Smart watch*], [A wearable wrist-mounted computing device], [featuring a touchscreen display, biometric sensors (heart rate, SpO2, accelerometer), and wireless smartphone connectivity. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A smart watch is a wearable wrist device that combines digital timekeeping with biometric health tracking and wireless smartphone synchronization."]],
[71], [*Debugging*], [A software engineering diagnostic troubleshooting procedure], [that systematically isolates, traces, and eliminates software coding bugs, syntax errors, and logical discrepancies from source code. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "Debugging is the systematic engineering process of detecting, isolating, and rectifying defects and logic errors within computer software."]],
[72], [*Hyperlink*], [An interactive digital electronic reference link], [embedded in a hypertext document that redirects the user directly to another file, webpage, or specific coordinate when clicked. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A hyperlink is a clickable reference anchor in a digital document that automatically navigates the user to a targeted external or internal resource."]],
[73], [*Dias*], [A low elevated wooden or stone platform], [installed at the front of an auditorium or hall to elevate dignitaries, speakers, or performers above the general audience. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A dias is an elevated platform positioned in an auditorium or assembly hall to honor or provide visibility for speakers and dignitaries."]],
[74], [*Emoticon*], [A typographic facial representation], [constructed from typographical punctuation symbols and characters (e.g., :-) or :-D) to signify emotional nuance in text communication. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "An emoticon is a typographic sequence of punctuation glyphs used to represent human facial expressions and tone in written messaging."]],
[75], [*Sustainability*], [An ecological and socio-economic governance paradigm], [that meets present societal and economic requirements without compromising the capacity of future generations to meet their own resource needs. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "Sustainability is the practice of consuming resources responsibly to meet present human needs without impairing the ecological capacity of future generations."]],
[76], [*Calculator*], [An electronic or mechanical calculating appliance], [designed to execute arithmetic operations, scientific functions, and algebraic computations with prompt algorithmic accuracy. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A calculator is a dedicated electronic device engineered to perform mathematical and scientific calculations rapidly."]],
[77], [*Tournament*], [A structured athletic or academic sports competition], [involving multiple contested rounds and elimination stages to determine a definitive supreme winner or champion. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A tournament is an organized series of competitive matches in which multiple participants or teams contest successive stages to determine a champion."]],
[78], [*Philanthropist*], [An affluent benevolent individual], [who systematically donates financial wealth, time, and resources to promote human welfare, educational institutions, and charitable causes. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A philanthropist is a charitable individual who donates substantial personal capital and resources to elevate human welfare and social progress."]],
[79], [*3D Printing (Additive)*], [A precision digital rapid-prototyping manufacturing technology], [that constructs three-dimensional solid geometries through iterative computer-controlled deposition of fused materials layer by layer. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "3D printing is a computerized fabrication method that creates solid physical objects by building consecutive layers of material based on digital models."]],
[80], [*Revenue (Commercial)*], [The total aggregate financial turnover], [derived from operational product sales, royalty accruals, and client invoices prior to any deductions for cost of goods sold. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "Revenue is the aggregate gross financial proceeds earned by an organization through its primary business operations and service deliveries."]],
[81], [*Airdrop (Military/Logistical)*], [An aerial logistical delivery maneuver], [where military supplies, humanitarian aid, or personnel are discharged from flying aircraft using aerodynamic parachutes into remote zones. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "An airdrop is an aviation delivery operation that drops emergency humanitarian relief or military provisions to the ground via parachute."]],
[82], [*Material*], [A physical substance or composite matter], [possessing specific mechanical, thermal, electrical, and structural properties utilized to fabricate industrial components and artifacts. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A material is any tangible substance with defined physical and chemical properties utilized for engineering fabrication and synthesis."]],
[83], [*Process*], [A systematic series of sequential operations or steps], [executed in a prescribed order to transform input materials or raw parameters into a designated end-product or outcome. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A process is a structured sequence of interconnected activities or chemical steps designed to transform raw inputs into a finished output."]],
[84], [*Method*], [An established systematic procedure or technique], [employed to accomplish a designated analytical, scientific, or practical objective with repeatable precision. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A method is a standardized, repeatable procedure executed to solve a specific scientific problem or accomplish a practical technical task."]],
[85], [*System*], [An interconnected network of interacting entities or components], [functioning collaboratively according to established rules to accomplish a cohesive, overarching unified objective. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A system is an organized set of interacting physical or logical components operating collectively to fulfill a designated common objective."]],
[86], [*Device*], [A physical piece of equipment or mechanism], [engineered and fabricated to perform a specific dedicated functional purpose, often powered electrically or mechanically. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A device is an engineered instrument, appliance, or mechanism designed to execute a defined physical or computational function."]],
[87], [*Structure*], [The geometric physical arrangement and organization], [of interconnected structural elements or molecules that withstands applied loads and establishes spatial stability. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A structure is the organized spatial arrangement of interconnected supporting elements designed to bear loads and maintain stable equilibrium."]],
[88], [*Function*], [The assigned operational purpose or mathematical mapping], [that defines the specific utility, role, or input-output relationship executed by a system component or algorithm. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A function is the dedicated operational role, duty, or algorithmic mapping executed by an engineering mechanism or mathematical entity."]],
[89], [*Component*], [A modular constituent part or sub-assembly], [that integrates alongside other modular units to assemble a larger functioning machine, electronic system, or software application. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A component is an individual modular constituent part that integrates with other elements to form a complete functioning apparatus."]],
[90], [*Measurement*], [A quantitative physical experimental evaluation], [that determines the magnitude, dimension, capacity, or quantity of an unknown variable compared against a standardized international SI reference unit. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "Measurement is the process of quantifying a physical dimension or property by comparing it against an established standard unit of evaluation."]],
[91], [*Design*], [A creative engineering specification and planning process], [that formulates blueprints, architectural schematics, and functional parameters to solve a practical technical challenge. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "Design is the systematic engineering process of conceptualizing, formulating, and specifying the structure and parameters of a solution to fulfill defined requirements."]],
[92], [*Testing*], [An empirical verification and validation procedure], [carried out to benchmark the reliability, performance, safety margins, and specification compliance of a component or software program under stressed conditions. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "Testing is an empirical experimental procedure executed to verify whether a system meets specified performance criteria and functions reliably."]],
[93], [*Research*], [A disciplined, methodical intellectual investigation], [conducted to discover new empirical facts, formulate scientific hypotheses, expand academic knowledge, and resolve technical challenges. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "Research is a disciplined systematic inquiry aimed at discovering new empirical principles, revising accepted theories, or solving technological problems."]],
[94], [*Experiment*], [A controlled empirical scientific test or trial], [conducted by intentionally manipulating independent variables while monitoring dependent variables to test an empirical hypothesis. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "An experiment is a controlled empirical scientific procedure designed to test a hypothesis by manipulating variables under monitored conditions."]],
[95], [*Energy*], [A fundamental scalar physical capacity], [that quantifies the ability of a system to perform work, exert force, or liberate thermal heat (governed by the Law of Conservation of Energy, measured in Joules). 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "Energy is a fundamental scalar physical property that quantifies the quantitative capacity of a system to perform work or produce heat."]],
[96], [*Temperature*], [A macroscopic thermodynamic state variable], [that measures the average kinetic energy of molecular microscopic motion within a substance (measured in Kelvin or Celsius). 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "Temperature is a thermodynamic state variable that measures the average microscopic translational kinetic energy of constituent particles in matter."]],
[97], [*Voltage*], [The electric potential difference], [between two spatial points in an electric field representing the work needed per unit electric charge to displace a test charge between them (measured in Volts). 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "Voltage is the difference in electrical potential between two points, denoting the work required per unit charge to transport electric current."]],
[98], [*Network*], [An interconnected infrastructure of communication nodes], [linked through physical transmission cables or wireless channels to exchange data packets and share computational resources via common protocols. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "A network is an interconnected group of autonomous computer nodes linked by communication media to exchange digital data and share computing resources."]],
[99], [*Storage*], [A persistent or volatile electronic computer memory medium], [engineered to record, retain, and retrieve digital bytes and program binaries indefinitely or during active power delivery. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "Storage is a computer hardware medium engineered to retain digital binary information and data files for subsequent computation."]],
[100], [*Installation*], [The physical commissioning or software configuration procedure], [wherein an apparatus, machinery, or software package is mounted, connected, and initialized into operational readiness within an environment. 
#text(size: 7.5pt, fill: rgb("#0369a1"), style: "italic")[Formal: "Installation is the technical process of setting up, mounting, and configuring an apparatus or software system into active operational readiness."]],
)

= 4. Reading Comprehension & Structure of a Research Article (IMRAD)

== 4.1 The IMRAD Framework (IEEE Standard)
Every scientific and engineering research paper adheres strictly to the four-part IMRAD architecture:
- *I --- Introduction:* What problem was investigated, what is the existing scholarship, and what is the specific *Research Gap* and thesis?
- *M --- Methods:* How was the study conducted? Detailed apparatus specifications, sample preparation, numerical parameters, and reproducible protocols.
- *R --- Results:* What empirical facts were discovered? Unbiased statistical data, stress-strain curves, XRD patterns, without subjective speculation.
- *D --- Discussion:* What do the results mean? Interpretation of mechanisms, comparison with prior published findings, limitations, and future research recommendations.

== 4.2 Drawing Analytical Inferences vs. Explicit Facts
- *Explicit Fact:* Directly stated in the text (e.g. "The reaction occurred at 85 °C").
- *Analytical Inference:* A logical conclusion deduced from synthesis of data points (e.g. "Because yield peaked at 85 °C and plummeted at 95 °C, the enzyme experiences thermal denaturation above 85 °C").

= 5. Worked FAT Question Bank Problems (Full 10/10 Model Solutions)

== Problem 3.1: Full FAT Question 5 Model Answer (10 Marks)
*Question:* Write formal three-part definitions for any FIVE of the following terms selected from the official word bank, clearly identifying the Term, Class, and Differentia:
(a) Drone, (b) Cybersecurity, (c) 3D Printing, (d) Phishing, (e) Renewable Energy.

*Model 10/10 Answer:*
#rect(width: 100%, stroke: 0.4pt + rgb("#94a3b8"), inset: 6pt, fill: rgb("#fafafa"))[
  *1. Drone:* \
  - *Term:* Drone \
  - *Class:* An unmanned aerial vehicle (UAV) \
  - *Differentia:* steered remotely by a human pilot or guided autonomously by onboard inertial sensors, GPS, and flight-control microprocessors. \
  - *Formal Definition:* A drone is an unmanned aerial vehicle (UAV) steered remotely or guided autonomously by onboard sensors, GPS, and microprocessors. \
  \
  *2. Cybersecurity:* \
  - *Term:* Cybersecurity \
  - *Class:* The technical and operational discipline \
  - *Differentia:* focused on defending networked computer hardware, software applications, and sensitive digital data from unauthorized infiltration, cyberattacks, and exploitation. \
  - *Formal Definition:* Cybersecurity is the technical discipline focused on defending computing systems, networks, and electronic data from unauthorized intrusion or cyberattacks. \
  \
  *3. 3D Printing:* \
  - *Term:* 3D Printing \
  - *Class:* An additive manufacturing fabrication process \
  - *Differentia:* that constructs three-dimensional physical objects layer upon layer directly from a 3D digital CAD model using polymers, resins, or metallic powders. \
  - *Formal Definition:* 3D printing is an additive manufacturing fabrication technique that deposits successive layers of material guided by a 3D CAD model to build solid physical objects. \
  \
  *4. Phishing:* \
  - *Term:* Phishing \
  - *Class:* A deceptive social engineering cyberattack \
  - *Differentia:* wherein an adversary masquerades as a trustworthy entity to trick victims into disclosing confidential passwords, credit card credentials, or authentication tokens. \
  - *Formal Definition:* Phishing is a fraudulent cyberattack where attackers impersonate legitimate entities to deceive victims into disclosing sensitive authentication credentials. \
  \
  *5. Renewable Energy:* \
  - *Term:* Renewable Energy \
  - *Class:* Usable power derived from natural replenishment sources \
  - *Differentia:* that are naturally replenished on a human timescale (such as solar, wind, and hydro) without exhaustible reserve depletion. \
  - *Formal Definition:* Renewable energy is power harnessed from recurring environmental phenomena that are replenished indefinitely without resource depletion.
]
