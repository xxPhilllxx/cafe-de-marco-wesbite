import os

search_dir = r"C:\Users\phill\.gemini\antigravity\scratch\cafe-de-marco-website\src"
print("Searching src/ for risotto...")

for root, dirs, files in os.walk(search_dir):
    for f in files:
        if f.endswith(('.js', '.jsx', '.json', '.html', '.css')):
            fp = os.path.join(root, f)
            with open(fp, 'r', encoding='utf-8', errors='ignore') as file:
                lines = file.readlines()
                for i, line in enumerate(lines, 1):
                    if "risotto" in line.lower():
                        print(f"{f}:{i} -> {line.strip()}")
