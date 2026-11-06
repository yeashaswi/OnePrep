import re

with open('scripts/BEEE_MOD-4.typ', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace any \"...} with \"...\"
text = re.sub(r'\"([^\"]*?)\}', r'"\1"', text)
text = text.replace(r'\frac', '')
text = re.sub(r'\{([^{}]*?)\}', r'(\1)', text)
text = text.replace(r'\to', '->')
text = text.replace(r'\longrightarrow', '-->')

# Specifically fix known equations:
text = text.replace('$ "COP}_{"refrig"} = (("Desired Cooling Effect")) / (("Work Input")) = (q_{"in"}) / (w_c) = (h_1 - h_4) / (h_2 - h_1) $', 
                    '$ "COP"_"refrig" = "Desired Cooling Effect" / "Work Input" = q_"in" / w_c = (h_1 - h_4) / (h_2 - h_1) $')

text = text.replace('$ 1 " Ton of Refrigeration (TR)" = 3.517" kW" = 210" kJ/min" $',
                    '1 Ton of Refrigeration (TR) = 3.517 kW = 210 kJ/min')

text = text.replace('$ P = eta dot.c rho dot.c g dot.c Q dot.c H   "[Watts]" $',
                    '$ P = eta dot.c rho dot.c g dot.c Q dot.c H $ [Watts]')

text = text.replace('$ eta_"thermal" prop (1 - (1) / (r^(gamma - 1))) $',
                    '$ eta_"thermal" prop (1 - 1 / r^(gamma - 1)) $')

text = text.replace('$ "COP" = (q_"in") / (w_c) = (155) / (40) = 3.875 $',
                    '$ "COP" = q_"in" / w_c = 155 / 40 = 3.875 $')

text = text.replace('$ dot(m) = ("Total Cooling Capacity") / (q_"in") = (17.585" kJ/s") / (155" kJ/kg") = 0.1135" kg/s" = 6.81" kg/min" $',
                    '$ dot(m) = "Total Cooling Capacity" / q_"in" = (17.585 "kJ/s") / (155 "kJ/kg") = 0.1135 "kg/s" = 6.81 "kg/min" $')

text = text.replace('$ F = 3(4 - 1) - 2(4) - 0 = 9 - 8 = 1   "[1 DOF]" $',
                    '$ F = 3(4 - 1) - 2(4) - 0 = 9 - 8 = 1 $ [1 DOF]')

text = text.replace('$ F = 3(4 - 1) - 2(4) - 0 = 3(3) - 8 = 9 - 8 = 1   "[Constrained 1-DOF mechanism]" $',
                    '$ F = 3(4 - 1) - 2(4) - 0 = 3(3) - 8 = 9 - 8 = 1 $ [Constrained 1-DOF mechanism]')

text = text.replace('$ F = 3(4 - 1) - 2(4) - 0 = 1   "[1-DOF mechanism]" $',
                    '$ F = 3(4 - 1) - 2(4) - 0 = 1 $ [1-DOF mechanism]')

text = text.replace('$ F = 3(5 - 1) - 2(5) - 0 = 3(4) - 10 = 12 - 10 = 2   "[Unconstrained 2-DOF; requires 2 motors]" $',
                    '$ F = 3(5 - 1) - 2(5) - 0 = 3(4) - 10 = 12 - 10 = 2 $ [Unconstrained 2-DOF]')

# Clean up any remaining units in math
text = re.sub(r'\$([0-9\.\-]+)\s*\"([^\"]+)\"\$', r'\1 \2', text)

with open('scripts/BEEE_MOD-4.typ', 'w', encoding='utf-8') as f:
    f.write(text)

print("Sanitized BEEE_MOD-4.typ!")
