from PIL import Image
import os

dest = r"C:\Users\phill\.gemini\antigravity\scratch\cafe-de-marco-website\public\images"
for f in ["menu_page_1.jpg", "menu_page_2.jpg", "menu_page_3.jpg"]:
    fp = os.path.join(dest, f)
    try:
        with Image.open(fp) as img:
            img.verify()
        print(f"{f}: OK, format={img.format}, size={img.size}")
    except Exception as e:
        print(f"{f}: ERROR {e}")
