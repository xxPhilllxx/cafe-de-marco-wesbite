import os

gallery_root = r"C:\Users\phill\.gemini\antigravity\scratch\cafe-de-marco-website\public\images\gallery"
for root, dirs, files in os.walk(gallery_root):
    rel = os.path.relpath(root, gallery_root)
    indent = "  " * rel.count(os.sep) if rel != "." else ""
    folder_name = os.path.basename(root) if rel != "." else "public/images/gallery"
    print(f"{indent}[DIR] {folder_name}/")
    for f in sorted(files):
        if not f.startswith('.'):
            print(f"{indent}   - {f}")
