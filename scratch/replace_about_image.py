import os
from PIL import Image

src = r"C:\Users\phill\.gemini\antigravity\brain\776d64c8-04cb-403c-bcee-83f9a573963a\.user_uploaded\media_1788224124429.jpg"
dst = r"C:\Users\phill\.gemini\antigravity\scratch\cafe-de-marco-website\public\images\about.png"

if os.path.exists(src):
    img = Image.open(src)
    print(f"Source image size: {img.size}, mode: {img.mode}")
    img.save(dst, format="PNG")
    print(f"Successfully saved {src} -> {dst}")
else:
    print("Source image not found!")
