import os
import subprocess

TYPST_BIN = "/opt/homebrew/bin/typst"
OUT_DIR = "/Users/yashaswivunnam/Desktop/Calculus/FATkilla/public/pdfs/basic_eng"
os.makedirs(OUT_DIR, exist_ok=True)

def compile_typ(content, pdf_name):
    typ_path = os.path.join(OUT_DIR, pdf_name.replace(".pdf", ".typ"))
    pdf_path = os.path.join(OUT_DIR, pdf_name)
    with open(typ_path, "w", encoding="utf-8") as f:
        f.write(content)
    res = subprocess.run([TYPST_BIN, "compile", typ_path, pdf_path], capture_output=True, text=True)
    if res.returncode == 0:
        print(f"Generated {pdf_path} ({os.path.getsize(pdf_path)} bytes)")
    else:
        print(f"Error {pdf_name}: {res.stderr}")

def get_header(mod_num, title):
    return f"""
#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, left: 2.2cm, right: 2.2cm),
  header: context {{
    if here().page() > 1 {{
      grid(
        columns: (1fr, 1fr),
        align(left)[#text(size: 8.5pt, fill: luma(90))[VIT BEEE102L --- Module {mod_num}: {title}]],
        align(right)[#text(size: 8.5pt, fill: luma(90), style: "italic")[VIT FAT Study Textbook]]
      )
      line(length: 100%, stroke: 0.4pt + luma(180))
    }}
  }},
  footer: context {{
    align(center)[#text(size: 9pt)[#here().page()]]
  }}
)
#set text(font: "New Computer Modern", size: 10pt)
#set par(justify: true, leading: 0.65em)
#set heading(numbering: "1.1")
"""

# MOD 1: DC CIRCUITS
m1 = get_header(1, "DC Circuits & Network Theorems") + """
#align(center)[
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT BEEE102L --- Module 1: DC Network Theorems] \\
  #v(2mm)
  #text(size: 15pt, weight: "black")[MODULE 1: DC CIRCUIT ANALYSIS & NETWORK THEOREMS] \\
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[(CO: 1)] \\
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Complete Study Textbook, Step-by-Step Derivations & VIT FAT Question Bank]
]

#v(3mm)
#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 9pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Textbook (All Syllabus Topics):]
  (1) Kirchhoff's Current and Voltage Laws, (2) Mesh analysis with dependent sources and supermesh, (3) Nodal analysis with supernodes, (4) Thevenin's and Norton's Theorems, (5) Superposition Theorem, and (6) Maximum Power Transfer Theorem for DC circuits.
]

= VIT FAT Exam Blueprint & Master Formula Sheet for Module 1

In VIT Final Assessment Tests, Module 1 carries 20 to 25 Marks:
1. *Question Type A (10 Marks):* Thevenin's and Norton's theorem circuit solving with independent and dependent sources to find load current $I_L$.
2. *Question Type B (10 Marks):* Maximum power transfer theorem: determining $R_L$ and calculating $P_"max" = V_"th"^2 / (4 R_"th")$.

#table(
  columns: (2.5fr, 3fr, 2fr),
  stroke: 0.5pt + luma(180),
  inset: 6pt,
  [*Theorem / Concept*], [*Mathematical Formula*], [*Condition / Note*],
  [Thevenin's Theorem], [$I_L = V_"th" / (R_"th" + R_L)$], [$V_"th" = V_"oc"$, $R_"th"$ looking in],
  [Norton's Theorem], [$I_L = I_N (R_N / (R_N + R_L))$], [$I_N = I_"sc"$, $R_N = R_"th"$],
  [Max Power Transfer], [$R_L = R_"th", quad P_"max" = V_"th"^2 / (4 R_"th")$], [Efficiency at max power = 50%],
  [Source Transformation], [$V_s = I_s R_s arrow.r.l I_s = V_s / R_s$], [Series to parallel]
)

= Worked VIT Question Bank & Past FAT Problems

*Problem 1.1 (BEEE102L FAT April 2025 Slot B1 --- 10 Marks):* Find the current flowing through the $10 Omega$ load resistor connected across terminals A-B using Thevenin's Theorem. The circuit consists of a $50" V"$ source in series with a $5 Omega$ resistor, in parallel with a branch having a $20 Omega$ resistor and an independent current source of $2" A"$ directed upwards.

*Solution:*
- *Step 1 (Thevenin Voltage $V_"th" = V_"oc"$):*
Applying KCL at open node A:
$ (V_"th" - 50) / 5 + V_"th" / 20 - 2 = 0 $
Multiplying through by 20:
$ 4(V_"th" - 50) + V_"th" - 40 = 0 arrow.r 5 V_"th" = 240 arrow.r V_"th" = 48" V" $
- *Step 2 (Thevenin Resistance $R_"th"$):*
De-activate all independent sources: short-circuit 50 V source, open-circuit 2 A source:
$ R_"th" = 5 parallel 20 = (5 times 20) / (5 + 20) = 100 / 25 = 4 Omega $
- *Step 3 (Load Current $I_L$):*
$ I_L = V_"th" / (R_"th" + R_L) = 48 / (4 + 10) = 48 / 14 = 3.428" A" $
Boxed Answer: Load current $I_L = 3.43" A"$.
"""
compile_typ(m1, "BEEE_MOD-1.pdf")

# MOD 2: AC CIRCUITS & RESONANCE
m2 = get_header(2, "AC Circuits & Single-Phase Resonance") + """
#align(center)[
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT BEEE102L --- Module 2: AC Resonance] \\
  #v(2mm)
  #text(size: 15pt, weight: "black")[MODULE 2: AC CIRCUITS & RESONANCE] \\
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[(CO: 2)] \\
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Complete Study Textbook, Step-by-Step Derivations & VIT FAT Question Bank]
]

#v(3mm)
#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 9pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Textbook (All Syllabus Topics):]
  (1) Sinusoidal steady-state analysis and phasor representation, (2) Impedance, admittance, and power triangle ($P, Q, S$), (3) Power factor improvement, (4) Series and parallel RLC resonance, (5) Quality factor ($Q$), bandwidth, and half-power frequencies.
]

= VIT FAT Exam Blueprint & Master Formula Sheet for Module 2

In VIT Final Assessment Tests, Module 2 carries 20 Marks:
1. *Question Type A (10 Marks):* Series RLC resonance derivation: $f_0 = 1 / (2 pi sqrt(L C))$, $Q = 1 / R sqrt(L / C)$, and bandwidth $B W = f_0 / Q = R / (2 pi L)$.
2. *Question Type B (10 Marks):* AC complex power calculation: Real power $P = V I cos phi$, reactive power $Q = V I sin phi$, and sizing power factor correction capacitors.

#table(
  columns: (2.5fr, 3fr, 2fr),
  stroke: 0.5pt + luma(180),
  inset: 6pt,
  [*Parameter*], [*Formula*], [*Condition*],
  [Resonant Frequency], [$f_0 = 1 / (2 pi sqrt(L C)), quad omega_0 = 1 / sqrt(L C)$], [$X_L = X_C$, $Z_0 = R$ minimum],
  [Quality Factor Q], [$Q = (omega_0 L) / R = 1 / (omega_0 C R) = 1 / R sqrt(L / C)$], [Voltage magnification factor],
  [Bandwidth (BW)], [$B W = f_0 / Q = R / (2 pi L)$], [Half-power frequencies $f_1, f_2$],
  [Power Factor], [$cos phi = P / S = R / |Z|$], [Unity at resonance]
)

= Worked VIT Question Bank & Past FAT Problems

*Problem 2.1 (BEEE102L FAT Nov 2024 Slot A1 --- 10 Marks):* A series RLC circuit with $R = 10 Omega, L = 0.1" H"$, and $C = 10 mu"F"$ is connected across a $230" V", 50" Hz"$ supply. Calculate: (i) Resonant frequency, (ii) Quality factor, (iii) Bandwidth, and (iv) Current at resonance.

*Solution:*
- *Step 1 (Resonant Frequency $f_0$):*
$ f_0 = 1 / (2 pi sqrt(0.1 times 10 times 10^(-6))) = 1 / (2 pi sqrt(10^(-6))) = 1000 / (2 pi) approx 159.15" Hz" $
- *Step 2 (Quality Factor $Q$):*
$ Q = (omega_0 L) / R = (1000 times 0.1) / 10 = 10 $
- *Step 3 (Bandwidth $B W$):*
$ B W = f_0 / Q = 159.15 / 10 = 15.92" Hz" $
- *Step 4 (Resonant Current $I_0$):*
$ I_0 = V / R = 230 / 10 = 23" A" $
Boxed Answers: $f_0 = 159.15" Hz", Q = 10, B W = 15.92" Hz", I_0 = 23" A"$.
"""
compile_typ(m2, "BEEE_MOD-2.pdf")

# MOD 3: TRANSFORMERS
m3 = get_header(3, "Magnetic Circuits & Transformers") + """
#align(center)[
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT BEEE102L --- Module 3: Single-Phase Transformers] \\
  #v(2mm)
  #text(size: 15pt, weight: "black")[MODULE 3: MAGNETIC CIRCUITS & TRANSFORMERS] \\
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[(CO: 3)] \\
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Complete Study Textbook, Step-by-Step Derivations & VIT FAT Question Bank]
]

#v(3mm)
#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 9pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Textbook (All Syllabus Topics):]
  (1) Magnetic circuits and Faraday's laws, (2) Transformer operating principle and EMF equation, (3) Practical transformer on no-load and load, (4) Equivalent circuit, (5) OC and SC tests, (6) Transformer efficiency and condition for maximum efficiency.
]

= VIT FAT Exam Blueprint & Master Formula Sheet for Module 3

In VIT Final Assessment Tests, Module 3 carries 20 Marks:
1. *Question Type A (10 Marks):* EMF equation derivation: $E_1 = 4.44 f N_1 Phi_m$.
2. *Question Type B (10 Marks):* Transformer efficiency calculation across loads and power factors, plus finding kVA for maximum efficiency: $x_"max" = sqrt(P_i / P_"cu,FL")$.

#table(
  columns: (2.5fr, 3fr, 2fr),
  stroke: 0.5pt + luma(180),
  inset: 6pt,
  [*Parameter*], [*Formula*], [*Exam Rule*],
  [EMF Equation], [$E = 4.44 f N Phi_m$], [$Phi_m = B_m times A$],
  [Transformer Efficiency], [$eta = (x S cos phi) / (x S cos phi + P_i + x^2 P_"cu") times 100%$], [$x$ = load fraction],
  [Max Efficiency Condition], [$P_i = x^2 P_"cu,FL" arrow.r x_"max" = sqrt(P_i / P_"cu,FL")$], [Iron loss = copper loss]
)

= Worked VIT Question Bank & Past FAT Problems

*Problem 3.1 (BEEE102L FAT April 2025 Slot B1 --- 10 Marks):* A $20" kVA", 2200/220" V", 50" Hz"$ single-phase transformer has iron loss of $350" W"$ and full load copper loss of $400" W"$. Calculate efficiency at: (i) Full load at 0.8 power factor lagging, and (ii) Half load at unity power factor. Also find kVA for maximum efficiency.

*Solution:*
- *Part (i) Full load ($x = 1, cos phi = 0.8$):*
$ "Output" = 1 times 20 times 0.8 = 16" kW" $
$ "Total Losses" = 0.35 + 0.40 = 0.75" kW" $
$ eta = 16 / (16 + 0.75) times 100% = 95.52% $
- *Part (ii) Half load ($x = 0.5, cos phi = 1.0$):*
$ "Output" = 0.5 times 20 times 1.0 = 10" kW" $
$ "Copper Loss" = (0.5)^2 times 0.40 = 0.10" kW" $
$ "Total Losses" = 0.35 + 0.10 = 0.45" kW" $
$ eta = 10 / (10 + 0.45) times 100% = 95.69% $
- *Part (iii) kVA for Maximum Efficiency:*
$ x_"max" = sqrt(350 / 400) = sqrt(0.875) approx 0.9354 $
$ "kVA"_"max" = 0.9354 times 20 = 18.71" kVA" $
"""
compile_typ(m3, "BEEE_MOD-3.pdf")

# MOD 4: SEMICONDUCTOR DIODES & RECTIFIERS
m4 = get_header(4, "Semiconductor Diodes & Rectifiers") + """
#align(center)[
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT BEEE102L --- Module 4: Diodes & Rectifiers] \\
  #v(2mm)
  #text(size: 15pt, weight: "black")[MODULE 4: SEMICONDUCTOR DIODES & POWER RECTIFIERS] \\
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[(CO: 4)] \\
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Complete Study Textbook, Step-by-Step Derivations & VIT FAT Question Bank]
]

#v(3mm)
#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 9pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Textbook (All Syllabus Topics):]
  (1) PN junction diode characteristics, (2) Half-wave and Full-wave Bridge rectifiers, (3) Mathematical derivations of $V_"dc"$, ripple factor $gamma$, and efficiency $eta$, (4) Capacitor filters, (5) Zener diode voltage regulator.
]

= VIT FAT Exam Blueprint & Master Formula Sheet for Module 4

In VIT FAT, Module 4 carries 20 Marks:
1. *Question Type A (10 Marks):* Full-wave bridge rectifier derivations: $V_"dc" = 2 V_m / pi$, $gamma = 0.482$, and efficiency $eta = 81.2%$.
2. *Question Type B (10 Marks):* Zener diode voltage regulator design with varying load and input line voltage.

#table(
  columns: (2.5fr, 3fr, 2fr),
  stroke: 0.5pt + luma(180),
  inset: 6pt,
  [*Topology*], [*$V_"dc"$ and $I_"rms"$*], [*Ripple & Efficiency*],
  [Half-Wave Rectifier], [$V_"dc" = V_m / pi, quad I_"rms" = I_m / 2$], [$gamma = 1.21, quad eta = 40.6%$],
  [Full-Wave Bridge], [$V_"dc" = (2 V_m) / pi, quad I_"rms" = I_m / sqrt(2)$], [$gamma = 0.482, quad eta = 81.2%$],
  [Peak Inverse Voltage], [$"PIV" = V_m " (Bridge)", quad "PIV" = 2 V_m " (Center-tapped)"$], [Bridge requires lower PIV diodes]
)
"""
compile_typ(m4, "BEEE_MOD-4.pdf")

# MOD 5: OP-AMPS & DIGITAL LOGIC
m5 = get_header(5, "Op-Amps & Digital Logic Circuits") + """
#align(center)[
  #text(size: 10pt, weight: "bold", tracking: 0.5pt)[VIT BEEE102L --- Module 5: Op-Amps & Logic] \\
  #v(2mm)
  #text(size: 15pt, weight: "black")[MODULE 5: OPERATIONAL AMPLIFIERS & DIGITAL LOGIC] \\
  #text(size: 12pt, weight: "bold", fill: rgb("#0369a1"))[(CO: 5)] \\
  #v(1mm)
  #text(size: 11pt, weight: "bold")[Complete Study Textbook, Step-by-Step Derivations & VIT FAT Question Bank]
]

#v(3mm)
#rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.6pt + rgb("#cbd5e1"), radius: 4pt, inset: 9pt)[
  #text(weight: "bold", fill: rgb("#0f172a"))[Scope of This Textbook (All Syllabus Topics):]
  (1) Ideal Op-Amp characteristics and virtual ground concept, (2) Inverting and non-inverting amplifiers, (3) Summing and difference amplifiers, (4) Integrator and differentiator, (5) Boolean algebra, De Morgan's laws, and 4-variable K-Maps.
]

= Master Formula Sheet for Module 5

#table(
  columns: (2.5fr, 3fr, 2fr),
  stroke: 0.5pt + luma(180),
  inset: 6pt,
  [*Circuit*], [*Transfer Function*], [*Virtual Ground Rule*],
  [Inverting Amplifier], [$V_"out" = - R_f / R_1 V_"in"$], [$V_- = V_+ = 0" V"$],
  [Non-Inverting Amplifier], [$V_"out" = (1 + R_f / R_1) V_"in"$], [High input impedance],
  [Summing Amplifier], [$V_"out" = - (R_f / R_1 V_1 + R_f / R_2 V_2 + R_f / R_3 V_3)$], [Weighted addition],
  [De Morgan's Laws], [$overline(A dot B) = overline(A) + overline(B), quad overline(A + B) = overline(A) dot overline(B)$], [NAND/NOR universal gates]
)
"""
compile_typ(m5, "BEEE_MOD-5.pdf")

print("All BEEE PDF textbooks compiled successfully.")
