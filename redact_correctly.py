import os
from PIL import Image

image_path = r"C:\Users\phill\.gemini\antigravity\scratch\cafe-de-marco-website\public\images\Messenger_creation_DD8FD49C-7B7B-4150-BB43-19790310C933~2.jpeg"
output_path = r"C:\Users\phill\.gemini\antigravity\scratch\cafe-de-marco-website\public\images\menu_redacted_1.jpg"

print(f"Loading original menu image: {os.path.basename(image_path)}")
try:
    with Image.open(image_path) as img:
        img_rgb = img.convert('RGB')
        w, h = img_rgb.size
        print(f"Dimensions: {w}x{h}")
        
        # Define the sample range (clean right margin where there are no prices or text)
        sample_x_start = int(w * 0.85)
        sample_x_end = int(w * 0.92)
        
        # Define the redact range (the column of prices)
        redact_x_start = int(w * 0.775)
        redact_x_end = int(w * 0.835)
        
        print(f"Redacting row-by-row from x={redact_x_start} to x={redact_x_end} (sampling from x={sample_x_start} to x={sample_x_end})")
        
        pixels = img_rgb.load()
        
        # Redact row-by-row to perfectly match any lighting gradient/shadow on the paper
        for y in range(h):
            # Sample background pixels in this specific row
            row_samples = []
            for x in range(sample_x_start, sample_x_end):
                row_samples.append(img_rgb.getpixel((x, y)))
            
            # Compute average color for this specific row
            avg_r = int(sum(p[0] for p in row_samples) / len(row_samples))
            avg_g = int(sum(p[1] for p in row_samples) / len(row_samples))
            avg_b = int(sum(p[2] for p in row_samples) / len(row_samples))
            row_bg_color = (avg_r, avg_g, avg_b)
            
            # Apply row background color to the redact range in this row
            for x in range(redact_x_start, redact_x_end):
                pixels[x, y] = row_bg_color
                
        # Save the redacted image
        img_rgb.save(output_path, "JPEG", quality=95)
        print(f"Successfully saved seamless row-by-row redaction as: {os.path.basename(output_path)}")
        
        # Also copy it to dist/images if the build folder exists
        dist_path = r"C:\Users\phill\.gemini\antigravity\scratch\cafe-de-marco-website\dist\images\menu_redacted_1.jpg"
        if os.path.exists(os.path.dirname(dist_path)):
            img_rgb.save(dist_path, "JPEG", quality=95)
            print("Successfully copied redacted image to dist/images/")
            
except Exception as e:
    print(f"Error during redaction: {e}")
