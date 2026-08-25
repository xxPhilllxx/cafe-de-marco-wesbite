import os

gallery_root = r"C:\Users\phill\.gemini\antigravity\scratch\cafe-de-marco-website\public\images\gallery"
preview_html_path = r"C:\Users\phill\.gemini\antigravity\scratch\cafe-de-marco-website\public\preview.html"

categories = [
    ("specials", "Specials"),
    ("starters", "Appetizers & Starters"),
    ("seafood", "Seafood Selections"),
    ("land_lovers", "Land Lovers Selections"),
    ("desserts", "Desserts"),
    ("wine", "Wine"),
    ("kids_menu", "Kids Menu"),
    ("ambience", "Atmosphere & Dining")
]

cards_html = []
for cat_id, cat_name in categories:
    cat_dir = os.path.join(gallery_root, cat_id)
    if os.path.exists(cat_dir):
        files = [f for f in sorted(os.listdir(cat_dir)) if not f.startswith('.')]
        if files:
            cards_html.append(f'<div style="grid-column: 1 / -1; margin-top: 2rem; border-bottom: 1px solid rgba(197,168,128,0.3); padding-bottom: 0.5rem;"><h2 style="color: #c5a880; font-family: serif; font-size: 1.5rem; margin: 0;">{cat_name} <span style="font-size: 0.9rem; color: #888; font-family: sans-serif;">(/images/gallery/{cat_id}/)</span></h2></div>')
            for f in files:
                rel_path = f"/images/gallery/{cat_id}/{f}"
                title = f.replace('_', ' ').replace('.jpg', '').replace('.jpeg', '').replace('.png', '').title()
                cards_html.append(f'''
                <div class="card">
                    <img src="{rel_path}" alt="{title}" loading="lazy">
                    <div class="card-info">
                        <div class="card-title">{title}</div>
                        <div class="card-tag">{cat_name}</div>
                        <div class="card-path">{rel_path}</div>
                    </div>
                </div>
                ''')

html_content = f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Café de Marco - Categorized Image Asset Preview</title>
  <style>
    body {{
      background-color: #0d0d11;
      color: #e5e5e5;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      margin: 0;
      padding: 2rem;
    }}
    .header {{
      text-align: center;
      margin-bottom: 3rem;
      border-bottom: 1px solid rgba(197, 168, 128, 0.2);
      padding-bottom: 1.5rem;
    }}
    h1 {{
      color: #c5a880;
      font-family: Georgia, serif;
      margin-bottom: 0.5rem;
      font-size: 2.2rem;
    }}
    .grid {{
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.5rem;
      max-width: 1400px;
      margin: 0 auto;
    }}
    .card {{
      background-color: #16161a;
      border: 1px solid rgba(197, 168, 128, 0.2);
      border-radius: 8px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      box-shadow: 0 4px 15px rgba(0,0,0,0.5);
    }}
    .card img {{
      width: 100%;
      height: 220px;
      object-fit: cover;
      background-color: #000;
    }}
    .card-info {{
      padding: 1rem;
    }}
    .card-title {{
      font-weight: 600;
      color: #ffffff;
      font-size: 1.05rem;
      margin-bottom: 0.3rem;
    }}
    .card-tag {{
      display: inline-block;
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      background-color: rgba(197, 168, 128, 0.15);
      color: #c5a880;
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
      margin-bottom: 0.5rem;
    }}
    .card-path {{
      font-family: monospace;
      font-size: 0.75rem;
      color: #888888;
      word-break: break-all;
    }}
  </style>
</head>
<body>
  <div class="header">
    <h1>Café de Marco - Image Asset Directory</h1>
    <p>Categorized image folder structure under <code>public/images/gallery/</code></p>
  </div>
  <div class="grid">
    {''.join(cards_html)}
  </div>
</body>
</html>
'''

with open(preview_html_path, "w", encoding="utf-8") as f:
    f.write(html_content)

print("Updated preview.html successfully with categorized layout!")
