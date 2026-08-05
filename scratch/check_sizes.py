import os

img1 = r"C:\Users\phill\.gemini\antigravity\scratch\cafe-de-marco-website\public\images\hero_2.png"
img2 = r"C:\Users\phill\.gemini\antigravity\scratch\cafe-de-marco-website\public\images\specialty_oysters.png"

print("hero_2.png size:", os.path.getsize(img1) if os.path.exists(img1) else "Not found")
print("specialty_oysters.png size:", os.path.getsize(img2) if os.path.exists(img2) else "Not found")
