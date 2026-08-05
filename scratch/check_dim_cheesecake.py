from PIL import Image
import os

path = r"C:\Users\phill\.gemini\antigravity\scratch\cafe-de-marco-website\public\images\specialty_cheesecake.png"
if os.path.exists(path):
    with Image.open(path) as img:
        print("Dimensions:", img.size)
        print("Aspect ratio:", img.size[0] / img.size[1])
else:
    print("Not found")
