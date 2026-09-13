import os
from PIL import Image

src = r"C:\Users\phill\.gemini\antigravity\brain\776d64c8-04cb-403c-bcee-83f9a573963a\.user_uploaded\media_1789340806715.jpg"
dst1 = r"C:\Users\phill\.gemini\antigravity\scratch\cafe-de-marco-website\public\images\gallery\land_lovers\ny_strip_steak.jpg"
dst2 = r"C:\Users\phill\.gemini\antigravity\scratch\cafe-de-marco-website\public\images\gallery_ny_strip_steak.jpg"

if os.path.exists(src):
    img = Image.open(src)
    print(f"Uploaded NY strip image size: {img.size}, mode: {img.mode}")
    img.save(dst1, quality=98)
    img.save(dst2, quality=98)
    print(f"Successfully saved:\n  -> {dst1}\n  -> {dst2}")
else:
    print("Source image not found!")
