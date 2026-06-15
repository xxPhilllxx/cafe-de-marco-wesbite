import os
import json

image_dir = r"C:\Users\phill\.gemini\antigravity\scratch\cafe-de-marco-website\public\images"
images = [f for f in os.listdir(image_dir) if f.lower().endswith(('.png', '.jpg', '.jpeg', '.jfif'))]
images.sort()

preview_path = r"C:\Users\phill\.gemini\antigravity\scratch\cafe-de-marco-website\public\preview.html"

with open(preview_path, 'r', encoding='utf-8') as f:
    html = f.read()

# Replace the images array inside the script tag
# We look for: const images = [ ... ];
start_marker = "const images = ["
end_marker = "];"

start_idx = html.find(start_marker)
if start_idx != -1:
    end_idx = html.find(end_marker, start_idx)
    if end_idx != -1:
        new_array_str = f"const images = {json.dumps(images, indent=6)}"
        html = html[:start_idx] + new_array_str + html[end_idx + 1:]
        
        with open(preview_path, 'w', encoding='utf-8') as f:
            f.write(html)
        print("Updated preview.html successfully with new image list.")
    else:
        print("Could not find end marker.")
else:
    print("Could not find start marker.")
