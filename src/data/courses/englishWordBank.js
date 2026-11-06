/**
 * BAENG101 - Technical English Communication
 * Official VIT Word Bank for Definitions (100 Words)
 * Formula: Term = Class (Genus) + Differentia (Distinguishing Characteristics)
 * Ordered by Semantic Clusters & Easily-Confused / Similar Word Pairs
 */

export const englishWordBank = [
  {
    "id": 1,
    "term": "Phishing",
    "class": "A deceptive social engineering cyberattack",
    "differentia": "wherein an adversary masquerades as a trustworthy entity via email or spoofed websites to induce victims into disclosing passwords, credit card credentials, or 2FA tokens.",
    "formalDefinition": "Phishing is a fraudulent cyberattack where attackers impersonate legitimate organizations to trick victims into revealing sensitive authentication credentials.",
    "cluster": "Cybersecurity & Software",
    "confusableWith": "Malware"
  },
  {
    "id": 2,
    "term": "Malware",
    "class": "Malicious executable software code",
    "differentia": "intentionally engineered to compromise, damage, disrupt, or gain illicit unauthorized access to computer systems and confidential digital networks.",
    "formalDefinition": "Malware is malicious software engineered to infiltrate, damage, or exploit vulnerable computer systems without the user's consent.",
    "cluster": "Cybersecurity & Software",
    "confusableWith": "Phishing"
  },
  {
    "id": 3,
    "term": "Biometric Authentication",
    "class": "An identity verification cybersecurity mechanism",
    "differentia": "that validates user identity through automated analysis of unique physiological traits (fingerprints, facial geometry, retina/iris scans) or behavioral markers.",
    "formalDefinition": "Biometric authentication is an identity verification technique that identifies individuals based on distinct physiological characteristics such as fingerprints or retinal patterns.",
    "cluster": "Cybersecurity & Software",
    "confusableWith": "Authentication"
  },
  {
    "id": 4,
    "term": "Authentication",
    "class": "A security verification protocol",
    "differentia": "that confirms the claimed identity of a user, workstation, or data packet through verification of factors like passwords, biometrics, or hardware tokens.",
    "formalDefinition": "Authentication is the security process of verifying that a system user or entity is genuinely who they purport to be through credential validation.",
    "cluster": "Cybersecurity & Software",
    "confusableWith": "Biometric Authentication"
  },
  {
    "id": 5,
    "term": "Password",
    "class": "A secret cryptographic string of characters",
    "differentia": "utilized for identity authentication to restrict unauthorized access to computer systems, networks, or encrypted resources.",
    "formalDefinition": "A password is a secret string of characters utilized for user authentication to verify identity and restrict unauthorized system access.",
    "cluster": "Cybersecurity & Software",
    "confusableWith": "Username"
  },
  {
    "id": 6,
    "term": "Username",
    "class": "A unique alphanumeric identifier string",
    "differentia": "assigned to or selected by an individual to identify their specific user account on a computing system or digital service.",
    "formalDefinition": "A username is a unique alphanumeric string used to identify and distinguish a specific user account within an electronic network.",
    "cluster": "Cybersecurity & Software",
    "confusableWith": "Password"
  },
  {
    "id": 7,
    "term": "Cybersecurity",
    "class": "The technical and operational discipline",
    "differentia": "focused on defending networked computer hardware, software applications, communication protocols, and sensitive digital data from unauthorized infiltration, cyberattacks, and exploitation.",
    "formalDefinition": "Cybersecurity is the discipline focused on protecting computing systems, digital networks, and electronic data from unauthorized intrusion, damage, or cyberattacks.",
    "cluster": "Cybersecurity & Software",
    "confusableWith": "Authentication"
  },
  {
    "id": 8,
    "term": "Software",
    "class": "A collection of computer programs, scripts, and executable instructions",
    "differentia": "that direct a computer processor to perform specific data processing, hardware management, or computational tasks.",
    "formalDefinition": "Software is a collection of programmed machine-readable instructions and documentation that directs computing hardware to execute defined operations.",
    "cluster": "Cybersecurity & Software",
    "confusableWith": "Database"
  },
  {
    "id": 9,
    "term": "Database",
    "class": "A structured, electronically stored collection of data",
    "differentia": "organized systematically and managed via a Database Management System (DBMS) to enable rapid querying, indexing, updating, and transactional consistency.",
    "formalDefinition": "A database is a structured collection of digital information organized systematically and managed via a DBMS to enable efficient querying, indexing, and transactional integrity.",
    "cluster": "Cybersecurity & Software",
    "confusableWith": "Software"
  },
  {
    "id": 10,
    "term": "Debugging",
    "class": "A software engineering diagnostic troubleshooting procedure",
    "differentia": "that systematically isolates, traces, and eliminates software coding bugs, syntax errors, and logical discrepancies from source code.",
    "formalDefinition": "Debugging is the systematic engineering process of detecting, isolating, and rectifying defects and logic errors within computer software.",
    "cluster": "Cybersecurity & Software",
    "confusableWith": "Testing"
  },
  {
    "id": 11,
    "term": "Hyperlink",
    "class": "An interactive digital electronic reference link",
    "differentia": "embedded in a hypertext document that redirects the user directly to another file, webpage, or specific coordinate when clicked.",
    "formalDefinition": "A hyperlink is a clickable reference anchor in a digital document that automatically navigates the user to a targeted external or internal resource.",
    "cluster": "Cybersecurity & Software",
    "confusableWith": "Browser"
  },
  {
    "id": 12,
    "term": "Artificial Intelligence (AI)",
    "class": "A subfield of computer science",
    "differentia": "dedicated to engineering software algorithms and neural networks capable of executing tasks that typically require human cognitive intelligence, such as pattern recognition, natural language reasoning, and autonomous decision-making.",
    "formalDefinition": "Artificial Intelligence (AI) is a subfield of computer science dedicated to engineering software algorithms and neural networks capable of executing cognitive tasks like reasoning, pattern recognition, and autonomous decision-making.",
    "cluster": "Cybersecurity & Software",
    "confusableWith": "Software"
  },
  {
    "id": 13,
    "term": "Emoji",
    "class": "A standardized digital ideogram or pictogram",
    "differentia": "embedded in electronic communication to express emotional states, gestures, concepts, or objects in informal text-based messaging.",
    "formalDefinition": "An emoji is a standardized visual digital pictogram used in electronic text communication to convey emotion, tone, or physical objects.",
    "cluster": "Digital Media & Identity",
    "confusableWith": "Emoticon"
  },
  {
    "id": 14,
    "term": "Emoticon",
    "class": "A typographic facial representation",
    "differentia": "constructed from typographical punctuation symbols and characters (e.g., :-) or :-D) to signify emotional nuance in text communication.",
    "formalDefinition": "An emoticon is a typographic sequence of punctuation glyphs used to represent human facial expressions and tone in written messaging.",
    "cluster": "Digital Media & Identity",
    "confusableWith": "Emoji"
  },
  {
    "id": 15,
    "term": "Bionote",
    "class": "A concise professional biographical profile",
    "differentia": "written in the third person (typically 50-100 words) highlighting an author's, researcher's, or speaker's credentials, current role, and prominent achievements.",
    "formalDefinition": "A bionote is a concise, third-person biographical summary highlighting a professional's credentials, institutional affiliation, and notable achievements.",
    "cluster": "Digital Media & Identity",
    "confusableWith": "Biography"
  },
  {
    "id": 16,
    "term": "Biography",
    "class": "A non-fiction written narrative account",
    "differentia": "of an individual's life history, career milestones, achievements, and legacy, authored by an external biographer.",
    "formalDefinition": "A biography is a non-fictional literary work detailing the life history, achievements, and legacy of an individual, composed by another person.",
    "cluster": "Digital Media & Identity",
    "confusableWith": "Autobiography"
  },
  {
    "id": 17,
    "term": "Autobiography",
    "class": "A non-fiction self-authored literary work",
    "differentia": "in which a person writes a chronological and introspective account of their own life experiences, career, and reflections.",
    "formalDefinition": "An autobiography is a self-authored literary narrative chronicling the writer's own life experiences and personal reflections.",
    "cluster": "Digital Media & Identity",
    "confusableWith": "Biography"
  },
  {
    "id": 18,
    "term": "Resum\u00e9",
    "class": "A formal professional career document",
    "differentia": "summarizing an applicant's education, employment history, technical skill set, and accomplishments to secure an interview.",
    "formalDefinition": "A resum\u00e9 is a structured, concise professional document summarizing a job applicant's educational background, work experience, and technical competencies.",
    "cluster": "Digital Media & Identity",
    "confusableWith": "Portfolio"
  },
  {
    "id": 19,
    "term": "Portfolio",
    "class": "A curated systematic collection",
    "differentia": "of financial investments, professional projects, design artifacts, or academic works demonstrating an individual's or institution's competencies and assets.",
    "formalDefinition": "A portfolio is a curated collection of financial assets, professional accomplishments, or creative artifacts demonstrating competence and value.",
    "cluster": "Digital Media & Identity",
    "confusableWith": "Wallet"
  },
  {
    "id": 20,
    "term": "Communication",
    "class": "A dynamic reciprocal transmission process",
    "differentia": "where information, ideas, messages, or emotions are exchanged between a sender and receiver through verbal, non-verbal, or electronic mediums.",
    "formalDefinition": "Communication is the reciprocal process of transferring information and shared meaning between a sender and a recipient through symbolic codes or mediums.",
    "cluster": "Digital Media & Identity",
    "confusableWith": "Podcast"
  },
  {
    "id": 21,
    "term": "Podcast",
    "class": "An episodic digital audio program",
    "differentia": "streamed or downloaded over the internet via RSS syndication feeds for playback on personal media devices.",
    "formalDefinition": "A podcast is an episodic series of spoken-word digital audio recordings distributed online for asynchronous user streaming or downloading.",
    "cluster": "Digital Media & Identity",
    "confusableWith": "Communication"
  },
  {
    "id": 22,
    "term": "Browser",
    "class": "A client-side software application",
    "differentia": "used to retrieve, render, and navigate hypertext markup, multimedia assets, and web applications hosted across the World Wide Web via HTTP/HTTPS protocols.",
    "formalDefinition": "A browser is a software application that interprets HTML/CSS and fetches web resources over HTTP/HTTPS to render interactive web pages for users.",
    "cluster": "Digital Media & Identity",
    "confusableWith": "Hyperlink"
  },
  {
    "id": 23,
    "term": "Airdrop",
    "class": "A wireless proprietary file-sharing protocol or supply drop",
    "differentia": "that transmits digital files peer-to-peer over close-range Wi-Fi and Bluetooth without an active external internet connection.",
    "formalDefinition": "Airdrop is a close-range wireless transfer protocol that enables encrypted peer-to-peer transmission of digital files between adjacent devices.",
    "cluster": "Digital Media & Identity",
    "confusableWith": "USB drive"
  },
  {
    "id": 24,
    "term": "Folder",
    "class": "A graphical user interface container or physical cardboard binder",
    "differentia": "employed to categorize, group, and store digital files or paper documents systematically for streamlined retrieval.",
    "formalDefinition": "A folder is a physical binder or digital directory container employed to organize and store related documents systematically.",
    "cluster": "Digital Media & Identity",
    "confusableWith": "Storage"
  },
  {
    "id": 25,
    "term": "Quick commerce",
    "class": "A high-speed e-commerce logistics and fulfillment model",
    "differentia": "designed to deliver low-weight FMCG groceries and essential commodities to consumers within 10 to 30 minutes utilizing hyper-local dark stores.",
    "formalDefinition": "Quick commerce is an e-commerce fulfillment model that delivers essential consumer goods within 10 to 30 minutes using distributed hyper-local micro-warehouses.",
    "cluster": "Commerce & Finance",
    "confusableWith": "Internet banking"
  },
  {
    "id": 26,
    "term": "Internet banking",
    "class": "An electronic financial banking platform",
    "differentia": "allowing customers to perform retail banking operations, bill payments, and fund transfers remotely via a secure web portal without visiting a physical branch.",
    "formalDefinition": "Internet banking is a web-based banking facility enabling account holders to execute financial transactions and fund transfers remotely via secure portals.",
    "cluster": "Commerce & Finance",
    "confusableWith": "UPI (Unified Payments Interface)"
  },
  {
    "id": 27,
    "term": "UPI (Unified Payments Interface)",
    "class": "An instantaneous real-time payment architecture",
    "differentia": "developed by NPCI in India that facilitates immediate inter-bank peer-to-peer and peer-to-merchant fund transfers via mobile devices without exposing bank account numbers.",
    "formalDefinition": "UPI is a real-time mobile payment architecture that facilitates instant inter-bank monetary transactions without revealing sensitive account credentials.",
    "cluster": "Commerce & Finance",
    "confusableWith": "Internet banking"
  },
  {
    "id": 28,
    "term": "Wallet",
    "class": "A pocket-sized flat folding case or digital software application",
    "differentia": "used to store currency, payment cards, identification documents, or cryptographic authentication keys.",
    "formalDefinition": "A wallet is a pocket-sized flat folding case or digital software application used to securely store currency, payment cards, or cryptographic keys.",
    "cluster": "Commerce & Finance",
    "confusableWith": "Portfolio"
  },
  {
    "id": 29,
    "term": "Revenue",
    "class": "The total monetary gross income",
    "differentia": "generated by an enterprise through the sale of goods, provision of services, or commercial operations before deducting manufacturing and operating expenses.",
    "formalDefinition": "Revenue is the total gross monetary income generated by an enterprise through commercial sales or services prior to deducting operating expenses.",
    "cluster": "Commerce & Finance",
    "confusableWith": "Tax"
  },
  {
    "id": 30,
    "term": "Tax",
    "class": "A compulsory financial levy or fiscal charge",
    "differentia": "imposed by a governmental authority on individuals, corporate transactions, or assets to fund public infrastructure and state expenditures.",
    "formalDefinition": "A tax is a compulsory fiscal levy imposed by a sovereign government on citizens and commercial entities to fund public services and infrastructure.",
    "cluster": "Commerce & Finance",
    "confusableWith": "Revenue"
  },
  {
    "id": 31,
    "term": "Sensor",
    "class": "An input electrical or electronic transducer",
    "differentia": "that detects a physical parameter (such as temperature, light, pressure, or motion) and transforms it into a readable, quantifiable electrical signal.",
    "formalDefinition": "A sensor is an electronic transducer that detects environmental physical stimuli and translates them into measurable electrical signals.",
    "cluster": "Hardware, Electronics & Instruments",
    "confusableWith": "Microphone"
  },
  {
    "id": 32,
    "term": "Microphone",
    "class": "An acoustic electroacoustic transducer",
    "differentia": "that converts sound pressure wave oscillations in air into corresponding analog or digitized electrical audio signals.",
    "formalDefinition": "A microphone is an electroacoustic transducer that converts sound pressure wave oscillations into proportional electrical audio signals.",
    "cluster": "Hardware, Electronics & Instruments",
    "confusableWith": "Sensor"
  },
  {
    "id": 33,
    "term": "Headphones",
    "class": "A personal electroacoustic listening device",
    "differentia": "featuring a pair of miniature audio speakers worn over or inside the user's ears to reproduce audio privately.",
    "formalDefinition": "Headphones are a pair of small electroacoustic audio drivers worn over or inside the ears for private sound listening.",
    "cluster": "Hardware, Electronics & Instruments",
    "confusableWith": "Microphone"
  },
  {
    "id": 34,
    "term": "Smartphone",
    "class": "A handheld cellular mobile communications device",
    "differentia": "integrating a high-resolution touchscreen, mobile operating system, internet connectivity, and hardware sensors to run diverse software applications.",
    "formalDefinition": "A smartphone is a handheld mobile computing device that combines cellular telephony with computing capabilities, internet access, and multi-sensor touchscreen hardware.",
    "cluster": "Hardware, Electronics & Instruments",
    "confusableWith": "Smart watch"
  },
  {
    "id": 35,
    "term": "Smart watch",
    "class": "A wearable wrist-mounted computing device",
    "differentia": "featuring a touchscreen display, biometric sensors (heart rate, SpO2, accelerometer), and wireless smartphone connectivity.",
    "formalDefinition": "A smart watch is a wearable wrist device that combines digital timekeeping with biometric health tracking and wireless smartphone synchronization.",
    "cluster": "Hardware, Electronics & Instruments",
    "confusableWith": "Smartphone"
  },
  {
    "id": 36,
    "term": "USB drive",
    "class": "A portable solid-state flash memory data storage peripheral",
    "differentia": "integrating a Universal Serial Bus connector to enable rewritable plug-and-play data interchange across computing platforms.",
    "formalDefinition": "A USB drive is a portable solid-state flash memory device fitted with a USB interface for rewritable digital data storage and transfer.",
    "cluster": "Hardware, Electronics & Instruments",
    "confusableWith": "Storage"
  },
  {
    "id": 37,
    "term": "Storage",
    "class": "A persistent or volatile electronic computer memory medium",
    "differentia": "engineered to record, retain, and retrieve digital bytes and program binaries indefinitely or during active power delivery.",
    "formalDefinition": "Storage is a computer hardware medium engineered to retain digital binary information and data files for subsequent computation.",
    "cluster": "Hardware, Electronics & Instruments",
    "confusableWith": "USB drive"
  },
  {
    "id": 38,
    "term": "Circuit",
    "class": "A closed conducting loop or interconnection",
    "differentia": "consisting of active and passive electrical components providing an uninterrupted path for continuous electric current flow.",
    "formalDefinition": "A circuit is an interconnected closed loop of electrical components through which electric charge can continuously flow under a potential difference.",
    "cluster": "Hardware, Electronics & Instruments",
    "confusableWith": "Device"
  },
  {
    "id": 39,
    "term": "Calculator",
    "class": "An electronic or mechanical calculating appliance",
    "differentia": "designed to execute arithmetic operations, scientific functions, and algebraic computations with prompt algorithmic accuracy.",
    "formalDefinition": "A calculator is a dedicated electronic device engineered to perform mathematical and scientific calculations rapidly.",
    "cluster": "Hardware, Electronics & Instruments",
    "confusableWith": "Computer"
  },
  {
    "id": 40,
    "term": "Projector",
    "class": "An optical display output peripheral device",
    "differentia": "that projects magnified video, computer imagery, or presentation slides onto a large reflective screen or flat surface using high-lumen light sources.",
    "formalDefinition": "A projector is an optoelectronic display device that projects computer-generated visual media onto a large projection surface.",
    "cluster": "Hardware, Electronics & Instruments",
    "confusableWith": "Screen"
  },
  {
    "id": 41,
    "term": "3D Printing",
    "class": "An additive manufacturing process",
    "differentia": "that synthesizes three-dimensional physical objects layer upon layer directly from a 3D digital CAD model using polymers, resins, or metallic powders.",
    "formalDefinition": "3D printing is an additive manufacturing fabrication technique that deposits successive layers of material guided by a 3D computer CAD file to build physical objects.",
    "cluster": "Hardware, Electronics & Instruments",
    "confusableWith": "Prototype"
  },
  {
    "id": 42,
    "term": "Microscope",
    "class": "An optical or electronic laboratory instrument",
    "differentia": "employing lenses or electron beams to produce highly magnified, high-resolution visual images of microscopic specimens imperceptible to the naked eye.",
    "formalDefinition": "A microscope is an optical or electron instrument designed to produce magnified images of minute biological specimens or crystalline structures.",
    "cluster": "Hardware, Electronics & Instruments",
    "confusableWith": "Analysis"
  },
  {
    "id": 43,
    "term": "Equipment",
    "class": "A set of physical tools, machinery, or apparatus",
    "differentia": "designed and provisioned for performing a specific task, technical operation, or laboratory experiment.",
    "formalDefinition": "Equipment is a set of physical tools, machinery, or apparatus designed and provisioned for performing a specific technical operation or laboratory experiment.",
    "cluster": "Hardware, Electronics & Instruments",
    "confusableWith": "Device"
  },
  {
    "id": 44,
    "term": "Satellite",
    "class": "An artificial celestial object or spacecraft",
    "differentia": "placed intentionally into orbit around the Earth or another planet to relay telecommunications, conduct meteorological observation, or gather scientific telemetry data.",
    "formalDefinition": "A satellite is an artificial spacecraft placed intentionally into orbit around a planet to relay telecommunications, conduct meteorological observation, or gather scientific telemetry data.",
    "cluster": "Aviation, Transport & Infrastructure",
    "confusableWith": "Drone"
  },
  {
    "id": 45,
    "term": "Drone",
    "class": "An unmanned aerial vehicle (UAV)",
    "differentia": "navigated remotely by a human pilot or autonomously guided by onboard inertial sensors, GPS, and microprocessors.",
    "formalDefinition": "A drone is an unmanned aerial vehicle (UAV) steered remotely or guided autonomously by onboard sensors, GPS, and flight-control microprocessors.",
    "cluster": "Aviation, Transport & Infrastructure",
    "confusableWith": "Satellite"
  },
  {
    "id": 46,
    "term": "Aircraft",
    "class": "A heavier-than-air or lighter-than-air vehicle",
    "differentia": "capable of sustained flight through atmospheric air via aerodynamic lift generated from fixed wings, rotating airfoils, or buoyant aerostatic gas.",
    "formalDefinition": "An aircraft is any vehicular machine capable of sustained atmospheric flight supported by aerodynamic lift or aerostatic buoyancy.",
    "cluster": "Aviation, Transport & Infrastructure",
    "confusableWith": "Airline"
  },
  {
    "id": 47,
    "term": "Airline",
    "class": "A commercial enterprise",
    "differentia": "that provides scheduled or chartered air transportation services for passengers and cargo utilizing certified commercial aircraft fleets.",
    "formalDefinition": "An airline is a commercial transportation enterprise that provides scheduled air carriage services for passengers and freight using aircraft fleets.",
    "cluster": "Aviation, Transport & Infrastructure",
    "confusableWith": "Aircraft"
  },
  {
    "id": 48,
    "term": "Walkalator",
    "class": "A motorized passenger conveyance system",
    "differentia": "consisting of a flat, continuous, horizontal or slightly inclined moving beltway designed to transport pedestrians across lengthy transit terminals and concourses.",
    "formalDefinition": "A walkalator is a continuous power-driven moving horizontal walkway designed to convey pedestrians across long airport or transit corridors.",
    "cluster": "Aviation, Transport & Infrastructure",
    "confusableWith": "Dias"
  },
  {
    "id": 49,
    "term": "Dias",
    "class": "A low elevated wooden or stone platform",
    "differentia": "installed at the front of an auditorium or hall to elevate dignitaries, speakers, or performers above the general audience.",
    "formalDefinition": "A dias is an elevated platform positioned in an auditorium or assembly hall to honor or provide visibility for speakers and dignitaries.",
    "cluster": "Aviation, Transport & Infrastructure",
    "confusableWith": "Walkalator"
  },
  {
    "id": 50,
    "term": "Clog",
    "class": "An obstruction or heavy wooden footwear",
    "differentia": "that impedes the continuous fluid flow through a pipe, conduit, or drainage canal due to accumulated solid debris.",
    "formalDefinition": "A clog is an accumulated physical blockage that impedes or halts the fluid flow through an engineering pipe or channel.",
    "cluster": "Aviation, Transport & Infrastructure",
    "confusableWith": "Cylinder"
  },
  {
    "id": 51,
    "term": "Cylinder",
    "class": "A fundamental three-dimensional geometric solid",
    "differentia": "bounded by two congruent parallel circular bases connected by a continuous curved lateral surface equidistant from a central axis.",
    "formalDefinition": "A cylinder is a geometric three-dimensional solid formed by two congruent, parallel circular bases joined by a curved surface.",
    "cluster": "Aviation, Transport & Infrastructure",
    "confusableWith": "Clog"
  },
  {
    "id": 52,
    "term": "Cement",
    "class": "A fine mineral binder and hydraulic construction material",
    "differentia": "manufactured by calcining limestone and clay which sets, hardens, and adheres to aggregate stones upon hydration with water to form concrete.",
    "formalDefinition": "Cement is a fine hydraulic mineral binder made from calcined limestone that chemically hydrates with water to bind aggregates into solid concrete.",
    "cluster": "Aviation, Transport & Infrastructure",
    "confusableWith": "Material"
  },
  {
    "id": 53,
    "term": "Installation",
    "class": "The physical commissioning or software configuration procedure",
    "differentia": "wherein an apparatus, machinery, or software package is mounted, connected, and initialized into operational readiness within an environment.",
    "formalDefinition": "Installation is the technical process of setting up, mounting, and configuring an apparatus or software system into active operational readiness.",
    "cluster": "Aviation, Transport & Infrastructure",
    "confusableWith": "Equipment"
  },
  {
    "id": 54,
    "term": "Prototype",
    "class": "An early preliminary working model or sample",
    "differentia": "built to evaluate, benchmark, and iteratively validate the feasibility, ergonomics, and technical functionality of a product design prior to mass manufacturing.",
    "formalDefinition": "A prototype is an early working model built to benchmark, test, and validate the functionality and feasibility of a design before full-scale manufacturing.",
    "cluster": "Engineering Concepts & Scientific Methods",
    "confusableWith": "Patent"
  },
  {
    "id": 55,
    "term": "Patent",
    "class": "A sovereign legal intellectual property grant",
    "differentia": "conferring exclusive commercial monopoly rights to an inventor over a novel, non-obvious, and industrially applicable invention for a designated period (usually 20 years).",
    "formalDefinition": "A patent is an exclusive legal intellectual property right granted by a government to an inventor for a novel, useful invention for a term of 20 years.",
    "cluster": "Engineering Concepts & Scientific Methods",
    "confusableWith": "Prototype"
  },
  {
    "id": 56,
    "term": "Innovation",
    "class": "The practical implementation and deployment",
    "differentia": "of a novel idea, methodology, or technology that creates demonstrable value, efficiencies, or functional improvements in existing processes.",
    "formalDefinition": "Innovation is the practical introduction of novel methods, inventions, or workflows that significantly elevate technical efficiency, value, or utility.",
    "cluster": "Engineering Concepts & Scientific Methods",
    "confusableWith": "Design"
  },
  {
    "id": 57,
    "term": "Design",
    "class": "A creative engineering specification and planning process",
    "differentia": "that formulates blueprints, architectural schematics, and functional parameters to solve a practical technical challenge.",
    "formalDefinition": "Design is the systematic engineering process of conceptualizing, formulating, and specifying the structure and parameters of a solution to fulfill defined requirements.",
    "cluster": "Engineering Concepts & Scientific Methods",
    "confusableWith": "Innovation"
  },
  {
    "id": 58,
    "term": "Component",
    "class": "A modular constituent part or sub-assembly",
    "differentia": "that integrates alongside other modular units to assemble a larger functioning machine, electronic system, or software application.",
    "formalDefinition": "A component is an individual modular constituent part that integrates with other elements to form a complete functioning apparatus.",
    "cluster": "Engineering Concepts & Scientific Methods",
    "confusableWith": "Device"
  },
  {
    "id": 59,
    "term": "Device",
    "class": "A physical piece of equipment or mechanism",
    "differentia": "engineered and fabricated to perform a specific dedicated functional purpose, often powered electrically or mechanically.",
    "formalDefinition": "A device is an engineered instrument, appliance, or mechanism designed to execute a defined physical or computational function.",
    "cluster": "Engineering Concepts & Scientific Methods",
    "confusableWith": "Component"
  },
  {
    "id": 60,
    "term": "Structure",
    "class": "The geometric physical arrangement and organization",
    "differentia": "of interconnected structural elements or molecules that withstands applied loads and establishes spatial stability.",
    "formalDefinition": "A structure is the organized spatial arrangement of interconnected supporting elements designed to bear loads and maintain stable equilibrium.",
    "cluster": "Engineering Concepts & Scientific Methods",
    "confusableWith": "System"
  },
  {
    "id": 61,
    "term": "System",
    "class": "An interconnected network of interacting entities or components",
    "differentia": "functioning collaboratively according to established rules to accomplish a cohesive, overarching unified objective.",
    "formalDefinition": "A system is an organized set of interacting physical or logical components operating collectively to fulfill a designated common objective.",
    "cluster": "Engineering Concepts & Scientific Methods",
    "confusableWith": "Structure"
  },
  {
    "id": 62,
    "term": "Process",
    "class": "A systematic series of sequential operations or steps",
    "differentia": "executed in a prescribed order to transform input materials or raw parameters into a designated end-product or outcome.",
    "formalDefinition": "A process is a structured sequence of interconnected activities or chemical steps designed to transform raw inputs into a finished output.",
    "cluster": "Engineering Concepts & Scientific Methods",
    "confusableWith": "Method"
  },
  {
    "id": 63,
    "term": "Method",
    "class": "An established systematic procedure or technique",
    "differentia": "employed to accomplish a designated analytical, scientific, or practical objective with repeatable precision.",
    "formalDefinition": "A method is a standardized, repeatable procedure executed to solve a specific scientific problem or accomplish a practical technical task.",
    "cluster": "Engineering Concepts & Scientific Methods",
    "confusableWith": "Process"
  },
  {
    "id": 64,
    "term": "Measurement",
    "class": "A quantitative physical experimental evaluation",
    "differentia": "that determines the magnitude, dimension, capacity, or quantity of an unknown variable compared against a standardized international SI reference unit.",
    "formalDefinition": "Measurement is the process of quantifying a physical dimension or property by comparing it against an established standard unit of evaluation.",
    "cluster": "Engineering Concepts & Scientific Methods",
    "confusableWith": "Analysis"
  },
  {
    "id": 65,
    "term": "Analysis",
    "class": "A systematic method of examination",
    "differentia": "that decomposes a complex entity or dataset into its constituent elements to determine its underlying structure, behavior, and relationships.",
    "formalDefinition": "Analysis is a systematic method of examination that decomposes a complex entity or dataset into its constituent elements to determine its underlying structure and behavior.",
    "cluster": "Engineering Concepts & Scientific Methods",
    "confusableWith": "Measurement"
  },
  {
    "id": 66,
    "term": "Testing",
    "class": "An empirical verification and validation procedure",
    "differentia": "carried out to benchmark the reliability, performance, safety margins, and specification compliance of a component or software program under stressed conditions.",
    "formalDefinition": "Testing is an empirical experimental procedure executed to verify whether a system meets specified performance criteria and functions reliably.",
    "cluster": "Engineering Concepts & Scientific Methods",
    "confusableWith": "Experiment"
  },
  {
    "id": 67,
    "term": "Experiment",
    "class": "A controlled empirical scientific test or trial",
    "differentia": "conducted by intentionally manipulating independent variables while monitoring dependent variables to test an empirical hypothesis.",
    "formalDefinition": "An experiment is a controlled empirical scientific procedure designed to test a hypothesis by manipulating variables under monitored conditions.",
    "cluster": "Engineering Concepts & Scientific Methods",
    "confusableWith": "Testing"
  },
  {
    "id": 68,
    "term": "Research",
    "class": "A disciplined, methodical intellectual investigation",
    "differentia": "conducted to discover new empirical facts, formulate scientific hypotheses, expand academic knowledge, and resolve technical challenges.",
    "formalDefinition": "Research is a disciplined systematic inquiry aimed at discovering new empirical principles, revising accepted theories, or solving technological problems.",
    "cluster": "Engineering Concepts & Scientific Methods",
    "confusableWith": "Experiment"
  },
  {
    "id": 69,
    "term": "Material",
    "class": "A physical substance or composite matter",
    "differentia": "possessing specific mechanical, thermal, electrical, and structural properties utilized to fabricate industrial components and artifacts.",
    "formalDefinition": "A material is any tangible substance with defined physical and chemical properties utilized for engineering fabrication and synthesis.",
    "cluster": "Engineering Concepts & Scientific Methods",
    "confusableWith": "Cement"
  },
  {
    "id": 70,
    "term": "Network",
    "class": "An interconnected infrastructure of communication nodes",
    "differentia": "linked through physical transmission cables or wireless channels to exchange data packets and share computational resources via common protocols.",
    "formalDefinition": "A network is an interconnected group of autonomous computer nodes linked by communication media to exchange digital data and share computing resources.",
    "cluster": "Engineering Concepts & Scientific Methods",
    "confusableWith": "System"
  },
  {
    "id": 71,
    "term": "Solar panel",
    "class": "An integrated photovoltaic assembly of solar cells",
    "differentia": "that directly converts incident solar electromagnetic radiation into direct-current (DC) electricity via the internal photovoltaic effect.",
    "formalDefinition": "A solar panel is an assembly of interconnected photovoltaic cells that converts solar radiant energy directly into direct-current electrical energy.",
    "cluster": "Energy, Environment & Physics",
    "confusableWith": "Battery"
  },
  {
    "id": 72,
    "term": "Battery",
    "class": "An electrochemical energy storage device",
    "differentia": "consisting of one or more galvanic cells that convert stored chemical energy into electrical energy through spontaneous redox reactions.",
    "formalDefinition": "A battery is an electrochemical storage device comprising galvanic cells that converts stored chemical energy into electrical current via redox reactions.",
    "cluster": "Energy, Environment & Physics",
    "confusableWith": "Solar panel"
  },
  {
    "id": 73,
    "term": "Renewable Energy",
    "class": "Usable power derived from natural replenishment sources",
    "differentia": "that are naturally replenished on a human timescale (such as solar radiation, wind kinetics, hydroelectric flow, geothermal heat, and biomass) without depleting finite reserves.",
    "formalDefinition": "Renewable energy is power harnessed from naturally recurring environmental phenomena (solar, wind, hydro) that are replenished indefinitely without exhaustible depletion.",
    "cluster": "Energy, Environment & Physics",
    "confusableWith": "Energy"
  },
  {
    "id": 74,
    "term": "Photosynthesis",
    "class": "A biological biochemical anabolic process",
    "differentia": "by which autotrophic green plants and cyanobacteria convert light photon energy into chemical energy, synthesizing glucose from water and carbon dioxide while releasing molecular oxygen.",
    "formalDefinition": "Photosynthesis is a biological anabolic process in which autotrophic organisms convert light energy into chemical energy, synthesizing glucose from carbon dioxide and water with the release of oxygen.",
    "cluster": "Energy, Environment & Physics",
    "confusableWith": "Renewable Energy"
  },
  {
    "id": 75,
    "term": "Sustainability",
    "class": "An ecological and socio-economic governance paradigm",
    "differentia": "that meets present societal and economic requirements without compromising the capacity of future generations to meet their own resource needs.",
    "formalDefinition": "Sustainability is the practice of consuming resources responsibly to meet present human needs without impairing the ecological capacity of future generations.",
    "cluster": "Energy, Environment & Physics",
    "confusableWith": "Recycling"
  },
  {
    "id": 76,
    "term": "Recycling",
    "class": "A waste management and resource recovery process",
    "differentia": "that reprocesses discarded municipal or industrial materials into new usable products or raw feedstocks to diminish virgin resource extraction and pollution.",
    "formalDefinition": "Recycling is a waste recovery process that converts discarded solid waste materials into reusable raw commodities to mitigate resource depletion and environmental degradation.",
    "cluster": "Energy, Environment & Physics",
    "confusableWith": "Sustainability"
  },
  {
    "id": 77,
    "term": "Pollution",
    "class": "The introduction of contaminants or harmful substances",
    "differentia": "into the natural biosphere (air, water, or soil) causing ecological disruption, physiological harm to organisms, or environmental degradation.",
    "formalDefinition": "Pollution is the contamination of the physical environment by xenobiotic or harmful substances that cause adverse ecological and biological consequences.",
    "cluster": "Energy, Environment & Physics",
    "confusableWith": "Sustainability"
  },
  {
    "id": 78,
    "term": "Pressure",
    "class": "A scalar physical quantity",
    "differentia": "defined as the perpendicular force applied per unit surface area of an object (measured in Pascals or N/m\u00b2).",
    "formalDefinition": "Pressure is a scalar physical quantity defined as the perpendicular force exerted per unit surface area of an object.",
    "cluster": "Energy, Environment & Physics",
    "confusableWith": "Measurement"
  },
  {
    "id": 79,
    "term": "Temperature",
    "class": "A macroscopic thermodynamic state variable",
    "differentia": "that measures the average kinetic energy of molecular microscopic motion within a substance (measured in Kelvin or Celsius).",
    "formalDefinition": "Temperature is a thermodynamic state variable that measures the average microscopic translational kinetic energy of constituent particles in matter.",
    "cluster": "Energy, Environment & Physics",
    "confusableWith": "Measurement"
  },
  {
    "id": 80,
    "term": "Voltage",
    "class": "The electric potential difference",
    "differentia": "between two spatial points in an electric field representing the work needed per unit electric charge to displace a test charge between them (measured in Volts).",
    "formalDefinition": "Voltage is the difference in electrical potential between two points, denoting the work required per unit charge to transport electric current.",
    "cluster": "Energy, Environment & Physics",
    "confusableWith": "Circuit"
  },
  {
    "id": 81,
    "term": "Solar eclipse",
    "class": "An astronomical celestial alignment event",
    "differentia": "occurring when the Moon passes directly between the Sun and Earth, thereby fully or partially obstructing the Sun's light from reaching the terrestrial surface.",
    "formalDefinition": "A solar eclipse is an astronomical event occurring when the Moon traverses between the Sun and Earth, temporarily casting its shadow on the Earth.",
    "cluster": "Energy, Environment & Physics",
    "confusableWith": "Satellite"
  },
  {
    "id": 82,
    "term": "Optimist",
    "class": "An individual characterized by a psychological disposition",
    "differentia": "that anticipates favorable results, positive outcomes, and constructive growth even in adverse or uncertain circumstances.",
    "formalDefinition": "An optimist is an individual characterized by a cognitive disposition that consistently expects favorable outcomes and constructive solutions despite adversity.",
    "cluster": "Social, Psychology & General",
    "confusableWith": "Pessimist"
  },
  {
    "id": 83,
    "term": "Pessimist",
    "class": "An individual possessing a cognitive disposition",
    "differentia": "that habitually anticipates undesirable outcomes, failures, or the most unfavorable aspects of any given situation.",
    "formalDefinition": "A pessimist is an individual with a psychological tendency to anticipate failure, disadvantageous consequences, and adverse developments.",
    "cluster": "Social, Psychology & General",
    "confusableWith": "Optimist"
  },
  {
    "id": 84,
    "term": "Philanthropist",
    "class": "An affluent benevolent individual",
    "differentia": "who systematically donates financial wealth, time, and resources to promote human welfare, educational institutions, and charitable causes.",
    "formalDefinition": "A philanthropist is a charitable individual who donates substantial personal capital and resources to elevate human welfare and social progress.",
    "cluster": "Social, Psychology & General",
    "confusableWith": "Volunteer"
  },
  {
    "id": 85,
    "term": "Volunteer",
    "class": "An individual",
    "differentia": "who freely renders time, labor, or services for charitable, humanitarian, or community causes without financial compensation or legal coercion.",
    "formalDefinition": "A volunteer is a person who willingly undertakes humanitarian or community services without remuneration or contractual obligation.",
    "cluster": "Social, Psychology & General",
    "confusableWith": "Philanthropist"
  },
  {
    "id": 86,
    "term": "Celebrity",
    "class": "A high-profile person",
    "differentia": "who commands widespread public recognition, fame, and media scrutiny within society due to achievements in entertainment, sports, or public life.",
    "formalDefinition": "A celebrity is a prominent public figure who commands extensive social recognition and media attention due to public accomplishments.",
    "cluster": "Social, Psychology & General",
    "confusableWith": "Philanthropist"
  },
  {
    "id": 87,
    "term": "Convocation",
    "class": "A formal university academic assembly and ceremony",
    "differentia": "convened to officially confer collegiate degrees, diplomas, and honors upon graduating students in the presence of academic dignitaries.",
    "formalDefinition": "A convocation is a formal academic ceremony held by a university to officially confer earned degrees and honors upon its graduates.",
    "cluster": "Social, Psychology & General",
    "confusableWith": "Tournament"
  },
  {
    "id": 88,
    "term": "Tournament",
    "class": "A structured athletic or academic sports competition",
    "differentia": "involving multiple contested rounds and elimination stages to determine a definitive supreme winner or champion.",
    "formalDefinition": "A tournament is an organized series of competitive matches in which multiple participants or teams contest successive stages to determine a champion.",
    "cluster": "Social, Psychology & General",
    "confusableWith": "Convocation"
  },
  {
    "id": 89,
    "term": "Restaurant",
    "class": "A commercial hospitality establishment",
    "differentia": "where prepared culinary food and beverages are sold and served to patrons for on-premises consumption or takeaway delivery.",
    "formalDefinition": "A restaurant is a commercial establishment where culinary food and beverages are prepared, purchased, and served to dining customers.",
    "cluster": "Social, Psychology & General",
    "confusableWith": "Dessert"
  },
  {
    "id": 90,
    "term": "Dessert",
    "class": "A sweet culinary confectionery course",
    "differentia": "traditionally served at the conclusion of a formal dinner or lunch meal (e.g., pastries, fruits, custards, or confections).",
    "formalDefinition": "Dessert is a sweet culinary dish served as the culminating course of a formal meal.",
    "cluster": "Social, Psychology & General",
    "confusableWith": "Restaurant"
  },
  {
    "id": 91,
    "term": "Fountainpen",
    "class": "A handheld writing instrument",
    "differentia": "that utilizes capillary action and gravity to deliver water-based liquid ink from an internal refillable reservoir to a metallic nib.",
    "formalDefinition": "A fountainpen is a handheld writing instrument that utilizes capillary action to deliver liquid ink from an internal reservoir to a metallic nib.",
    "cluster": "Social, Psychology & General",
    "confusableWith": "Equipment"
  },
  {
    "id": 92,
    "term": "Square",
    "class": "A two-dimensional regular quadrilateral polygon",
    "differentia": "possessing four sides of equal length and four internal right angles measuring exactly 90 degrees.",
    "formalDefinition": "A square is a planar regular quadrilateral with four congruent sides and four internal right angles.",
    "cluster": "Social, Psychology & General",
    "confusableWith": "Structure"
  },
  {
    "id": 93,
    "term": "Virtual Reality (VR)",
    "class": "A computer-generated immersive simulation technology",
    "differentia": "that replicates a realistic three-dimensional interactive environment experienced through head-mounted displays and sensory tracking hardware.",
    "formalDefinition": "Virtual Reality (VR) is an interactive computer-generated technology that immerses the user within an artificial 3D simulated environment via specialized head-mounted displays.",
    "cluster": "General & Academic Terms",
    "confusableWith": "None"
  },
  {
    "id": 94,
    "term": "Data",
    "class": "Unprocessed raw facts, statistics, or qualitative observations",
    "differentia": "collected for reference, statistical analysis, or algorithmic computational processing into structured actionable information.",
    "formalDefinition": "Data consists of raw, uninterpreted factual symbols, values, or measurements collected for computational processing and analysis.",
    "cluster": "General & Academic Terms",
    "confusableWith": "None"
  },
  {
    "id": 95,
    "term": "Telemedicine",
    "class": "A remote medical clinical healthcare discipline",
    "differentia": "that utilizes telecommunications and digital video platforms to provide remote patient diagnosis, health monitoring, and medical consultations across physical distances.",
    "formalDefinition": "Telemedicine is the delivery of medical healthcare and clinical diagnosis across distances using real-time digital telecommunication technologies.",
    "cluster": "General & Academic Terms",
    "confusableWith": "None"
  },
  {
    "id": 96,
    "term": "3D Printing (Additive)",
    "class": "A precision digital rapid-prototyping manufacturing technology",
    "differentia": "that constructs three-dimensional solid geometries through iterative computer-controlled deposition of fused materials layer by layer.",
    "formalDefinition": "3D printing is a computerized fabrication method that creates solid physical objects by building consecutive layers of material based on digital models.",
    "cluster": "General & Academic Terms",
    "confusableWith": "None"
  },
  {
    "id": 97,
    "term": "Revenue (Commercial)",
    "class": "The total aggregate financial turnover",
    "differentia": "derived from operational product sales, royalty accruals, and client invoices prior to any deductions for cost of goods sold.",
    "formalDefinition": "Revenue is the aggregate gross financial proceeds earned by an organization through its primary business operations and service deliveries.",
    "cluster": "General & Academic Terms",
    "confusableWith": "None"
  },
  {
    "id": 98,
    "term": "Airdrop (Military/Logistical)",
    "class": "An aerial logistical delivery maneuver",
    "differentia": "where military supplies, humanitarian aid, or personnel are discharged from flying aircraft using aerodynamic parachutes into remote zones.",
    "formalDefinition": "An airdrop is an aviation delivery operation that drops emergency humanitarian relief or military provisions to the ground via parachute.",
    "cluster": "General & Academic Terms",
    "confusableWith": "None"
  },
  {
    "id": 99,
    "term": "Function",
    "class": "The assigned operational purpose or mathematical mapping",
    "differentia": "that defines the specific utility, role, or input-output relationship executed by a system component or algorithm.",
    "formalDefinition": "A function is the dedicated operational role, duty, or algorithmic mapping executed by an engineering mechanism or mathematical entity.",
    "cluster": "General & Academic Terms",
    "confusableWith": "None"
  },
  {
    "id": 100,
    "term": "Energy",
    "class": "A fundamental scalar physical capacity",
    "differentia": "that quantifies the ability of a system to perform work, exert force, or liberate thermal heat (governed by the Law of Conservation of Energy, measured in Joules).",
    "formalDefinition": "Energy is a fundamental scalar physical property that quantifies the quantitative capacity of a system to perform work or produce heat.",
    "cluster": "General & Academic Terms",
    "confusableWith": "None"
  }
];

export const topTrickyDefinitions = [
  {
    "id": 1,
    "term": "Phishing",
    "class": "A deceptive social engineering cyberattack",
    "differentia": "wherein an adversary masquerades as a trustworthy entity via email or spoofed websites to induce victims into disclosing passwords, credit card credentials, or 2FA tokens.",
    "formalDefinition": "Phishing is a fraudulent cyberattack where attackers impersonate legitimate organizations to trick victims into revealing sensitive authentication credentials.",
    "cluster": "Cybersecurity & Software",
    "confusableWith": "Malware"
  },
  {
    "id": 3,
    "term": "Biometric Authentication",
    "class": "An identity verification cybersecurity mechanism",
    "differentia": "that validates user identity through automated analysis of unique physiological traits (fingerprints, facial geometry, retina/iris scans) or behavioral markers.",
    "formalDefinition": "Biometric authentication is an identity verification technique that identifies individuals based on distinct physiological characteristics such as fingerprints or retinal patterns.",
    "cluster": "Cybersecurity & Software",
    "confusableWith": "Authentication"
  },
  {
    "id": 14,
    "term": "Emoticon",
    "class": "A typographic facial representation",
    "differentia": "constructed from typographical punctuation symbols and characters (e.g., :-) or :-D) to signify emotional nuance in text communication.",
    "formalDefinition": "An emoticon is a typographic sequence of punctuation glyphs used to represent human facial expressions and tone in written messaging.",
    "cluster": "Digital Media & Identity",
    "confusableWith": "Emoji"
  },
  {
    "id": 15,
    "term": "Bionote",
    "class": "A concise professional biographical profile",
    "differentia": "written in the third person (typically 50-100 words) highlighting an author's, researcher's, or speaker's credentials, current role, and prominent achievements.",
    "formalDefinition": "A bionote is a concise, third-person biographical summary highlighting a professional's credentials, institutional affiliation, and notable achievements.",
    "cluster": "Digital Media & Identity",
    "confusableWith": "Biography"
  },
  {
    "id": 25,
    "term": "Quick commerce",
    "class": "A high-speed e-commerce logistics and fulfillment model",
    "differentia": "designed to deliver low-weight FMCG groceries and essential commodities to consumers within 10 to 30 minutes utilizing hyper-local dark stores.",
    "formalDefinition": "Quick commerce is an e-commerce fulfillment model that delivers essential consumer goods within 10 to 30 minutes using distributed hyper-local micro-warehouses.",
    "cluster": "Commerce & Finance",
    "confusableWith": "Internet banking"
  },
  {
    "id": 48,
    "term": "Walkalator",
    "class": "A motorized passenger conveyance system",
    "differentia": "consisting of a flat, continuous, horizontal or slightly inclined moving beltway designed to transport pedestrians across lengthy transit terminals and concourses.",
    "formalDefinition": "A walkalator is a continuous power-driven moving horizontal walkway designed to convey pedestrians across long airport or transit corridors.",
    "cluster": "Aviation, Transport & Infrastructure",
    "confusableWith": "Dias"
  },
  {
    "id": 49,
    "term": "Dias",
    "class": "A low elevated wooden or stone platform",
    "differentia": "installed at the front of an auditorium or hall to elevate dignitaries, speakers, or performers above the general audience.",
    "formalDefinition": "A dias is an elevated platform positioned in an auditorium or assembly hall to honor or provide visibility for speakers and dignitaries.",
    "cluster": "Aviation, Transport & Infrastructure",
    "confusableWith": "Walkalator"
  },
  {
    "id": 50,
    "term": "Clog",
    "class": "An obstruction or heavy wooden footwear",
    "differentia": "that impedes the continuous fluid flow through a pipe, conduit, or drainage canal due to accumulated solid debris.",
    "formalDefinition": "A clog is an accumulated physical blockage that impedes or halts the fluid flow through an engineering pipe or channel.",
    "cluster": "Aviation, Transport & Infrastructure",
    "confusableWith": "Cylinder"
  },
  {
    "id": 54,
    "term": "Prototype",
    "class": "An early preliminary working model or sample",
    "differentia": "built to evaluate, benchmark, and iteratively validate the feasibility, ergonomics, and technical functionality of a product design prior to mass manufacturing.",
    "formalDefinition": "A prototype is an early working model built to benchmark, test, and validate the functionality and feasibility of a design before full-scale manufacturing.",
    "cluster": "Engineering Concepts & Scientific Methods",
    "confusableWith": "Patent"
  },
  {
    "id": 55,
    "term": "Patent",
    "class": "A sovereign legal intellectual property grant",
    "differentia": "conferring exclusive commercial monopoly rights to an inventor over a novel, non-obvious, and industrially applicable invention for a designated period (usually 20 years).",
    "formalDefinition": "A patent is an exclusive legal intellectual property right granted by a government to an inventor for a novel, useful invention for a term of 20 years.",
    "cluster": "Engineering Concepts & Scientific Methods",
    "confusableWith": "Prototype"
  },
  {
    "id": 74,
    "term": "Photosynthesis",
    "class": "A biological biochemical anabolic process",
    "differentia": "by which autotrophic green plants and cyanobacteria convert light photon energy into chemical energy, synthesizing glucose from water and carbon dioxide while releasing molecular oxygen.",
    "formalDefinition": "Photosynthesis is a biological anabolic process in which autotrophic organisms convert light energy into chemical energy, synthesizing glucose from carbon dioxide and water with the release of oxygen.",
    "cluster": "Energy, Environment & Physics",
    "confusableWith": "Renewable Energy"
  },
  {
    "id": 75,
    "term": "Sustainability",
    "class": "An ecological and socio-economic governance paradigm",
    "differentia": "that meets present societal and economic requirements without compromising the capacity of future generations to meet their own resource needs.",
    "formalDefinition": "Sustainability is the practice of consuming resources responsibly to meet present human needs without impairing the ecological capacity of future generations.",
    "cluster": "Energy, Environment & Physics",
    "confusableWith": "Recycling"
  },
  {
    "id": 82,
    "term": "Optimist",
    "class": "An individual characterized by a psychological disposition",
    "differentia": "that anticipates favorable results, positive outcomes, and constructive growth even in adverse or uncertain circumstances.",
    "formalDefinition": "An optimist is an individual characterized by a cognitive disposition that consistently expects favorable outcomes and constructive solutions despite adversity.",
    "cluster": "Social, Psychology & General",
    "confusableWith": "Pessimist"
  },
  {
    "id": 83,
    "term": "Pessimist",
    "class": "An individual possessing a cognitive disposition",
    "differentia": "that habitually anticipates undesirable outcomes, failures, or the most unfavorable aspects of any given situation.",
    "formalDefinition": "A pessimist is an individual with a psychological tendency to anticipate failure, disadvantageous consequences, and adverse developments.",
    "cluster": "Social, Psychology & General",
    "confusableWith": "Optimist"
  },
  {
    "id": 95,
    "term": "Telemedicine",
    "class": "A remote medical clinical healthcare discipline",
    "differentia": "that utilizes telecommunications and digital video platforms to provide remote patient diagnosis, health monitoring, and medical consultations across physical distances.",
    "formalDefinition": "Telemedicine is the delivery of medical healthcare and clinical diagnosis across distances using real-time digital telecommunication technologies.",
    "cluster": "General & Academic Terms",
    "confusableWith": "None"
  }
];

export const wordBankClusters = [
  "All (100)",
  "Cybersecurity & Software",
  "Digital Media & Identity",
  "Commerce & Finance",
  "Hardware, Electronics & Instruments",
  "Aviation, Transport & Infrastructure",
  "Engineering Concepts & Scientific Methods",
  "Energy, Environment & Physics",
  "Social, Psychology & General"
];
