import os
from PIL import Image

paths = [
    r"C:\Users\phill\.gemini\antigravity\scratch\cafe-de-marco-website\public\images\menu_page_1.jpg",
    r"C:\Users\phill\.gemini\antigravity\scratch\cafe-de-marco-website\public\images\menu_page_2.jpg",
    r"C:\Users\phill\.gemini\antigravity\scratch\cafe-de-marco-website\public\images\menu_page_3.jpg",
    r"C:\Users\phill\.gemini\antigravity\brain\776d64c8-04cb-403c-bcee-83f9a573963a\.user_uploaded\media_1787101955547.jpg",
]

for p in paths:
    if os.path.exists(p):
        with Image.open(p) as img:
            print(f"{os.path.basename(p)}: size={img.size}, mode={img.mode}, file_size={os.path.getsize(p)} bytes")
    else:
        print(f"{p}: NOT FOUND")
