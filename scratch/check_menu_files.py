import os

p = r"C:\Users\phill\.gemini\antigravity\scratch\cafe-de-marco-website\public\images"
for f in sorted(os.listdir(p)):
    fp = os.path.join(p, f)
    if os.path.isfile(fp):
        print(f"{f}: size={os.path.getsize(fp)} bytes")
