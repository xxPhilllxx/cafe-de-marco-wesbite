import os

downloads = r"C:\Users\phill\Downloads"
print("Searching Downloads for menu files:")
try:
    for root, dirs, files in os.walk(downloads):
        for f in files:
            if any(k in f.lower() for k in ['menu', 'starters', 'salad', 'marco', 'demarco', 'scan']):
                fp = os.path.join(root, f)
                try:
                    sz = os.path.getsize(fp)
                    print(f"{fp} ({sz} bytes)")
                except:
                    pass
except Exception as e:
    print("Error:", e)
