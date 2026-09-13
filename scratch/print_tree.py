import os

def print_tree(startpath, max_depth=3):
    for root, dirs, files in os.walk(startpath):
        # Skip node_modules and .git
        dirs[:] = [d for d in dirs if d not in ['node_modules', '.git', 'dist']]
        level = root.replace(startpath, '').count(os.sep)
        if level > max_depth:
            continue
        indent = ' ' * 4 * level
        print(f"{indent}{os.path.basename(root)}/")
        subindent = ' ' * 4 * (level + 1)
        for f in files:
            print(f"{subindent}{f}")

print("=== CAFE DE MARCO PROJECT TREE ===")
print_tree(r"C:\Users\phill\.gemini\antigravity\scratch\cafe-de-marco-website")
