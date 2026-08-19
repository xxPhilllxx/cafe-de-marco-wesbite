import os
from PIL import Image

uploaded_dir = r"C:\Users\phill\.gemini\antigravity\brain\776d64c8-04cb-403c-bcee-83f9a573963a\.user_uploaded"
dest_images_dir = r"C:\Users\phill\.gemini\antigravity\scratch\cafe-de-marco-website\public\images"
dest_docs_dir = r"C:\Users\phill\.gemini\antigravity\scratch\cafe-de-marco-website\public\docs"

os.makedirs(dest_images_dir, exist_ok=True)
os.makedirs(dest_docs_dir, exist_ok=True)

img_files = [
    os.path.join(uploaded_dir, "media_1787101955547.jpg"),
    os.path.join(uploaded_dir, "media_1787101955553.jpg"),
    os.path.join(uploaded_dir, "media_1787101955707.jpg")
]

dest_names = ["menu_page_1.jpg", "menu_page_2.jpg", "menu_page_3.jpg"]

pil_images = []
for src, name in zip(img_files, dest_names):
    dest_path = os.path.join(dest_images_dir, name)
    img = Image.open(src)
    # Save a high quality copy to public/images
    img.save(dest_path, quality=95)
    print(f"Copied {src} -> {dest_path}")
    # Convert to RGB for PDF export
    pil_images.append(img.convert('RGB'))

# Compile into public/docs/cafe-de-marco-menu.pdf
pdf_path = os.path.join(dest_docs_dir, "cafe-de-marco-menu.pdf")
if pil_images:
    pil_images[0].save(pdf_path, save_all=True, append_images=pil_images[1:], resolution=100.0, quality=95)
    print(f"Compiled multi-page PDF -> {pdf_path}")
