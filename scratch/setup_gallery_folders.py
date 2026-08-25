import os
import shutil

base_images = r"C:\Users\phill\.gemini\antigravity\scratch\cafe-de-marco-website\public\images"
gallery_base = os.path.join(base_images, "gallery")

categories = [
    "specials",
    "starters",
    "seafood",
    "land_lovers",
    "desserts",
    "wine",
    "kids_menu",
    "ambience"
]

for cat in categories:
    d = os.path.join(gallery_base, cat)
    os.makedirs(d, exist_ok=True)
    # Create a .gitkeep so empty folders are preserved in git
    with open(os.path.join(d, ".gitkeep"), "w") as f:
        pass
    print(f"Created category folder: {d}")

# Copy image mappings
copies = [
    # Specials
    (os.path.join(base_images, "gallery_prawns.jpg"), os.path.join(gallery_base, "specials", "jumbo_prawns.jpg")),
    (os.path.join(base_images, "specialty_crab_legs.png"), os.path.join(gallery_base, "specials", "king_crab_legs.png")),
    
    # Starters
    (os.path.join(base_images, "specialty_oysters.png"), os.path.join(gallery_base, "starters", "oysters_rockefeller.png")),
    (os.path.join(base_images, "gallery_tuna_tartare.jpg"), os.path.join(gallery_base, "starters", "tuna_tartare.jpg")),
    (os.path.join(base_images, "gallery_mussels.jpg"), os.path.join(gallery_base, "starters", "steamed_mussels.jpg")),
    
    # Seafood
    (os.path.join(base_images, "gallery_lobster.jpg"), os.path.join(gallery_base, "seafood", "broiled_lobster_tail.jpg")),
    
    # Land Lovers
    (os.path.join(base_images, "gallery_steak_mushrooms.jpg"), os.path.join(gallery_base, "land_lovers", "filet_mignon.jpg")),
    (os.path.join(base_images, "gallery_steak.jpg"), os.path.join(gallery_base, "land_lovers", "tomahawk_steak.jpg")),
    
    # Desserts
    (os.path.join(base_images, "gallery_cannoli.jpg"), os.path.join(gallery_base, "desserts", "cannoli.jpg")),
    (os.path.join(base_images, "specialty_cheesecake.png"), os.path.join(gallery_base, "desserts", "ricotta_cheesecake.png")),
    
    # Ambience
    (os.path.join(base_images, "gallery_patio.jpg"), os.path.join(gallery_base, "ambience", "outdoor_patio.jpg")),
    (os.path.join(base_images, "gallery_stained_glass.jpg"), os.path.join(gallery_base, "ambience", "stained_glass_entrance.jpg")),
    (os.path.join(base_images, "hero_3.png"), os.path.join(gallery_base, "ambience", "historic_cottage_exterior.png")),
    (os.path.join(base_images, "about.png"), os.path.join(gallery_base, "ambience", "main_dining_room.png")),
    (os.path.join(base_images, "gallery_11.jpeg"), os.path.join(gallery_base, "ambience", "intimate_dining.jpeg")),
]

for src, dst in copies:
    if os.path.exists(src):
        shutil.copy2(src, dst)
        print(f"Copied {os.path.basename(src)} -> {dst}")
    else:
        print(f"Source not found: {src}")

print("Folder setup and image organization complete!")
