from PIL import Image
import os

base = r"C:\Users\phill\.gemini\antigravity\scratch\cafe-de-marco-website\public\images"
for f in ["gallery_tuna_tartare.jpg", "gallery_patio.jpg", "gallery_stained_glass.jpg"]:
    p = os.path.join(base, f)
    if os.path.exists(p):
        with Image.open(p) as img:
            print(f, "-> Size:", img.size, "Aspect:", img.size[0] / img.size[1])
