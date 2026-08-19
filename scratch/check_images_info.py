import os
from PIL import Image

p = r"C:\Users\phill\.gemini\antigravity\scratch\cafe-de-marco-website\public\images"
for f in sorted(os.listdir(p)):
    if f.endswith(('.png', '.jpg', '.jpeg')):
        fp = os.path.join(p, f)
        img = Image.open(fp)
        print(f"{f}: size={img.size}, mode={img.mode}")
