from PIL import Image, ImageEnhance, ImageFilter
import os

p1 = r"C:\Users\phill\.gemini\antigravity\scratch\cafe-de-marco-website\public\images\menu_page_1.jpg"
out_p1 = r"C:\Users\phill\.gemini\antigravity\scratch\cafe-de-marco-website\public\images\menu_page_1.jpg"

if os.path.exists(p1):
    img = Image.open(p1)
    
    # 1. Upscale 2x using Lanczos for crisp rendering
    new_w = img.width * 2
    new_h = img.height * 2
    upscaled = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # 2. Sharpen text
    # UnsharpMask(radius=2, percent=150, threshold=3)
    sharpened = upscaled.filter(ImageFilter.UnsharpMask(radius=2, percent=160, threshold=2))
    
    # 3. Enhance Contrast slightly to make text pop against background
    enhancer = ImageEnhance.Contrast(sharpened)
    contrast_img = enhancer.enhance(1.15)
    
    # 4. Enhance Sharpness
    sharp_enhancer = ImageEnhance.Sharpness(contrast_img)
    final_img = sharp_enhancer.enhance(1.2)
    
    final_img.save(out_p1, quality=98)
    print(f"Enhanced menu_page_1.jpg: new size = {final_img.size}")

# Recompile PDF
dest_docs_dir = r"C:\Users\phill\.gemini\antigravity\scratch\cafe-de-marco-website\public\docs"
dest_images_dir = r"C:\Users\phill\.gemini\antigravity\scratch\cafe-de-marco-website\public\images"
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
