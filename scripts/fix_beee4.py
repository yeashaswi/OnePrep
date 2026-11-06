with open('scripts/BEEE_MOD-4.typ', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace(r'[*Hot Working ($T > T_{"rec}}$)*]', '[*Hot Working ($T > T_"rec"$)*]')
text = text.replace(r'[*Cold Working ($T < T_{"rec}}$)*]', '[*Cold Working ($T < T_"rec"$)*]')
text = text.replace('$70" to }350" bar"$ ($1000-5000" PSI"$)', '70 to 350 bar (1000-5000 PSI)')
text = text.replace('$4" to }10" bar"$ ($60-150" PSI"$)', '4 to 10 bar (60-150 PSI)')
text = text.replace('$1" TR} = 3.517" kW"$', '1 TR = 3.517 kW')
text = text.replace(r'$1" TR} = 3.517" kW"$', '1 TR = 3.517 kW')

with open('scripts/BEEE_MOD-4.typ', 'w', encoding='utf-8') as f:
    f.write(text)

print('Updated BEEE_MOD-4.typ successfully')
