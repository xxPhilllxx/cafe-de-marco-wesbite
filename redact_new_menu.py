import os
from PIL import Image

image_path = r"C:\Users\phill\.gemini\antigravity\scratch\cafe-de-marco-website\public\images\Messenger_creation_DD8FD49C-7B7B-4150-BB43-19790310C933~2.jpeg"
output_path = r"C:\Users\phill\.gemini\antigravity\scratch\cafe-de-marco-website\public\images\menu_redacted_1.jpg"

print(f"Loading menu image: {os.path.basename(image_path)}")
try:
    with Image.open(image_path) as img:
        img_rgb = img.convert('RGB')
        w, h = img_rgb.size
        print(f"Dimensions: {w}x{h}")
        
        # Sample background color in the right margin (between 78% and 82% width)
        sample_x_start = int(w * 0.78)
        sample_x_end = int(w * 0.82)
        
        bg_pixels = []
        for y in range(0, h, 10): # sample vertically
            for x in range(sample_x_start, sample_x_end, 5):
                bg_pixels.append(img_rgb.getpixel((x, y)))
                
        avg_r = int(sum(p[0] for p in bg_pixels) / len(bg_pixels))
        avg_g = int(sum(p[1] for p in bg_pixels) / len(bg_pixels))
        avg_b = int(sum(p[2] for p in bg_pixels) / len(bg_pixels))
        bg_color = (avg_r, avg_g, avg_b)
        
        print(f"Detected background color (RGB): {bg_color}")
        
        # Redact the rightmost 18% (from 82% width to 100% width)
        redact_x_start = int(w * 0.82)
        
        pixels = img_rgb.load()
        for y in range(h):
            for x in range(redact_x_start, w):
                pixels[x, y] = bg_color
                
        # Save as JPEG
        img_rgb.save(output_path, "JPEG", quality=95)
        print(f"Successfully redacted and saved as menu_redacted_1.jpg")
except Exception as e:
    print(f"Error during redaction: {e}")
