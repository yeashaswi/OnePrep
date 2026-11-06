import re, json

with open('src/data/courses/englishWordBank.js', 'r', encoding='utf-8') as f:
    text = f.read()

pattern = r'\{\s*id:\s*(\d+),\s*term:\s*\"(.*?)\",\s*class:\s*\"(.*?)\",\s*differentia:\s*\"(.*?)\",\s*formalDefinition:\s*\"(.*?)\"\s*\}'
matches = re.findall(pattern, text, re.DOTALL)

raw_dict = {}
for m in matches:
    w_id, term, w_class, diff, fdef = m
    raw_dict[term.strip()] = {
        "id": int(w_id),
        "term": term.strip(),
        "class": w_class.strip(),
        "differentia": diff.strip(),
        "formalDefinition": fdef.strip()
    }

# Mapping of clusters & confusable pairs
# We want words grouped by theme, with similar / confusable pairs placed directly side-by-side
cluster_order = [
    # 1. Cybersecurity, Identity & Software
    ("Cybersecurity & Software", [
        ("Phishing", "Malware"),
        ("Malware", "Phishing"),
        ("Biometric Authentication", "Authentication"),
        ("Authentication", "Biometric Authentication"),
        ("Password", "Username"),
        ("Username", "Password"),
        ("Cybersecurity", "Authentication"),
        ("Software", "Database"),
        ("Database", "Software"),
        ("Debugging", "Testing"),
        ("Hyperlink", "Browser"),
        ("Artificial Intelligence (AI)", "Software"),
    ]),
    # 2. Digital Media, Communication & Identity
    ("Digital Media & Identity", [
        ("Emoji", "Emoticon"),
        ("Emoticon", "Emoji"),
        ("Bionote", "Biography"),
        ("Biography", "Autobiography"),
        ("Autobiography", "Biography"),
        ("Resumé", "Portfolio"),
        ("Portfolio", "Wallet"),
        ("Communication", "Podcast"),
        ("Podcast", "Communication"),
        ("Browser", "Hyperlink"),
        ("Airdrop", "USB drive"),
        ("Folder", "Storage"),
    ]),
    # 3. Commerce, Payments & Finance
    ("Commerce & Finance", [
        ("Quick commerce", "Internet banking"),
        ("Internet banking", "UPI (Unified Payments Interface)"),
        ("UPI (Unified Payments Interface)", "Internet banking"),
        ("Wallet", "Portfolio"),
        ("Revenue", "Tax"),
        ("Tax", "Revenue"),
    ]),
    # 4. Hardware, Electronics & Instrumentation
    ("Hardware, Electronics & Instruments", [
        ("Sensor", "Microphone"),
        ("Microphone", "Sensor"),
        ("Headphones", "Microphone"),
        ("Smartphone", "Smart watch"),
        ("Smart watch", "Smartphone"),
        ("USB drive", "Storage"),
        ("Storage", "USB drive"),
        ("Circuit", "Device"),
        ("Calculator", "Computer"),
        ("Projector", "Screen"),
        ("3D Printing", "Prototype"),
        ("Microscope", "Analysis"),
        ("Equipment", "Device"),
    ]),
    # 5. Aviation, Transport & Civil Structures
    ("Aviation, Transport & Infrastructure", [
        ("Satellite", "Drone"),
        ("Drone", "Satellite"),
        ("Aircraft", "Airline"),
        ("Airline", "Aircraft"),
        ("Walkalator", "Dias"),
        ("Dias", "Walkalator"),
        ("Clog", "Cylinder"),
        ("Cylinder", "Clog"),
        ("Cement", "Material"),
        ("Installation", "Equipment"),
    ]),
    # 6. Engineering Methodology & Scientific Systems
    ("Engineering Concepts & Scientific Methods", [
        ("Prototype", "Patent"),
        ("Patent", "Prototype"),
        ("Innovation", "Design"),
        ("Design", "Innovation"),
        ("Component", "Device"),
        ("Device", "Component"),
        ("Structure", "System"),
        ("System", "Structure"),
        ("Process", "Method"),
        ("Method", "Process"),
        ("Measurement", "Analysis"),
        ("Analysis", "Measurement"),
        ("Testing", "Experiment"),
        ("Experiment", "Testing"),
        ("Research", "Experiment"),
        ("Material", "Cement"),
        ("Data", "Analysis"),
        ("Network", "System"),
    ]),
    # 7. Energy, Environment & Physics
    ("Energy, Environment & Physics", [
        ("Solar panel", "Battery"),
        ("Battery", "Solar panel"),
        ("Renewable Energy", "Energy"),
        ("Energy", "Renewable Energy"),
        ("Photosynthesis", "Renewable Energy"),
        ("Sustainability", "Recycling"),
        ("Recycling", "Sustainability"),
        ("Pollution", "Sustainability"),
        ("Pressure", "Measurement"),
        ("Temperature", "Measurement"),
        ("Voltage", "Circuit"),
        ("Solar eclipse", "Satellite"),
    ]),
    # 8. Social, Psychology & Miscellaneous
    ("Social, Psychology & General", [
        ("Optimist", "Pessimist"),
        ("Pessimist", "Optimist"),
        ("Philanthropist", "Volunteer"),
        ("Volunteer", "Philanthropist"),
        ("Celebrity", "Philanthropist"),
        ("Convocation", "Tournament"),
        ("Tournament", "Convocation"),
        ("Restaurant", "Dessert"),
        ("Dessert", "Restaurant"),
        ("Fountainpen", "Equipment"),
        ("Square", "Structure"),
    ])
]

# Build ordered list of words
ordered_words = []
used_terms = set()
new_id = 1

for cluster_name, term_pairs in cluster_order:
    for item in term_pairs:
        t, confusable = item
        # Match against raw_dict keys (handle terms like "Artificial Intelligence (AI)" or "UPI")
        matched_key = None
        for k in raw_dict:
            if k.lower() == t.lower() or t.lower() in k.lower():
                matched_key = k
                break
        if matched_key and matched_key not in used_terms:
            word_obj = raw_dict[matched_key].copy()
            word_obj["id"] = new_id
            word_obj["cluster"] = cluster_name
            word_obj["confusableWith"] = confusable
            ordered_words.append(word_obj)
            used_terms.add(matched_key)
            new_id += 1

# Add any remaining terms from raw_dict that were not in cluster_order
for k, v in raw_dict.items():
    if k not in used_terms:
        word_obj = v.copy()
        word_obj["id"] = new_id
        word_obj["cluster"] = "General & Academic Terms"
        word_obj["confusableWith"] = "None"
        ordered_words.append(word_obj)
        used_terms.add(k)
        new_id += 1

print(f"Total ordered words: {len(ordered_words)}")

# Top 15 Tricky Words for Skim Notes
tricky_terms = [
    "Bionote", "Walkalator", "Dias", "Clog", "Phishing", "Emoticon", 
    "Biometric Authentication", "Quick commerce", "Photosynthesis", 
    "Telemedicine", "Prototype", "Patent", "Optimist", "Pessimist", "Sustainability"
]
tricky_words = [w for w in ordered_words if w["term"] in tricky_terms or any(w["term"].lower() == t.lower() for t in tricky_terms)]
print(f"Matched {len(tricky_words)} tricky words")

# Generate new JS code
out_js = """/**
 * BAENG101 - Technical English Communication
 * Official VIT Word Bank for Definitions (100 Words)
 * Formula: Term = Class (Genus) + Differentia (Distinguishing Characteristics)
 * Ordered by Semantic Clusters & Easily-Confused / Similar Word Pairs
 */

export const englishWordBank = """ + json.dumps(ordered_words, indent=2) + """;

export const topTrickyDefinitions = """ + json.dumps(tricky_words, indent=2) + """;

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
"""

with open('src/data/courses/englishWordBank.js', 'w', encoding='utf-8') as f:
    f.write(out_js)

print("Updated englishWordBank.js successfully!")
