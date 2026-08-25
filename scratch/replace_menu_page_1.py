import os
from PIL import Image

uploaded_file = r"C:\Users\phill\.gemini\antigravity\brain\776d64c8-04cb-403c-bcee-83f9a573963a\.user_uploaded\media_1787628378489.jpg"
dest_image = r"C:\Users\phill\.gemini\antigravity\scratch\cafe-de-marco-website\public\images\menu_page_1.jpg"
dest_images_dir = r"C:\Users\phill\.gemini\antigravity\scratch\cafe-de-marco-website\public\images"
dest_docs_dir = r"C:\Users\phill\.gemini\antigravity\scratch\cafe-de-marco-website\public\docs"

if os.path.exists(uploaded_file):
    img = Image.open(uploaded_file)
    print(f"Uploaded file size: {img.size}, mode: {img.mode}")
    
    # Save high quality copy
    img.save(dest_image, quality=98)
    print(f"Copied {uploaded_file} -> {dest_image}")

# Recompile multi-page PDF with all 3 pages
img_files = ["menu_page_1.jpg", "menu_page_2.jpg", "menu_page_3.jpg"]
pil_images = []
for name in img_files:
    fp = os.path.join(dest_images_dir, name)
    if os.path.exists(fp):
        pil_images.append(Image.open(fp).convert('RGB'))

pdf_path = os.path.join(dest_docs_dir, "cafe-de-marco-menu.pdf")
if pil_images:
    pil_images[0].save(pdf_path, save_all=True, append_images=pil_images[1:], resolution=150.0, quality=95)
    print(f"Recompiled multi-page PDF -> {pdf_path}")
