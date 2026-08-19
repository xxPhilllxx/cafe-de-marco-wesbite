import os

p = r"C:\Users\phill\.gemini\antigravity\scratch\cafe-de-marco-website\public\images"
print("Files in public/images:")
for f in sorted(os.listdir(p)):
    print(f)
