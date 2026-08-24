from PIL import Image, ImageEnhance, ImageFilter
import os

dest_images_dir = r"C:\Users\phill\.gemini\antigravity\scratch\cafe-de-marco-website\public\images"
dest_docs_dir = r"C:\Users\phill\.gemini\antigravity\scratch\cafe-de-marco-website\public\docs"

uploaded_dir = r"C:\Users\phill\.gemini\antigravity\brain\776d64c8-04cb-403c-bcee-83f9a573963a\.user_uploaded"
uploads = [
    (os.path.join(uploaded_dir, "media_1787101955547.jpg"), "menu_page_1.jpg"),
    (os.path.join(uploaded_dir, "media_1787101955553.jpg"), "menu_page_2.jpg"),
    (os.path.join(uploaded_dir, "media_1787101955707.jpg"), "menu_page_3.jpg")
]

pil_images = []
for src, name in uploads:
    if os.path.exists(src):
        img = Image.open(src)
        # 2x High-res Lanczos scaling
        new_w = img.width * 2
        new_h = img.height * 2
        upscaled = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
        
        # Text sharpening
        sharpened = upscaled.filter(ImageFilter.UnsharpMask(radius=2.0, percent=175, threshold=2))
        
        # Contrast & Clarity
        enhancer = ImageEnhance.Contrast(sharpened)
        contrast_img = enhancer.enhance(1.15)
        
        sharp_enhancer = ImageEnhance.Sharpness(contrast_img)
        final_img = sharp_enhancer.enhance(1.25)
        
        out_p = os.path.join(dest_images_dir, name)
        final_img.save(out_p, quality=98)
        print(f"Enhanced {name} -> {final_img.size}")
        pil_images.append(final_img.convert('RGB'))

pdf_path = os.path.join(dest_docs_dir, "cafe-de-marco-menu.pdf")
if pil_images:
    pil_images[0].save(pdf_path, save_all=True, append_images=pil_images[1:], resolution=150.0, quality=95)
    print(f"Recompiled multi-page PDF -> {pdf_path}")
