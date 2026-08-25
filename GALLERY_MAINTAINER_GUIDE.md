# Café de Marco - Image Gallery & Menu Maintenance Guide

This guide explains how to add, remove, and update images in the visual gallery and menu sections.

---

## 📁 1. Organized Category Folders

All gallery images are organized inside `public/images/gallery/` into category folders:

| Category Folder | Description | Example Files |
| :--- | :--- | :--- |
| `public/images/gallery/specials/` | Chef & House Specialties | `jumbo_prawns.jpg`, `king_crab_legs.png` |
| `public/images/gallery/starters/` | Appetizers, Salads & Soups | `oysters_rockefeller.png`, `tuna_tartare.jpg`, `steamed_mussels.jpg` |
| `public/images/gallery/seafood/` | Seafood Selections | `broiled_lobster_tail.jpg` |
| `public/images/gallery/land_lovers/` | Steaks, Chops & Poultry | `filet_mignon.jpg`, `tomahawk_steak.jpg` |
| `public/images/gallery/desserts/` | Desserts & Sweets | `cannoli.jpg`, `ricotta_cheesecake.png` |
| `public/images/gallery/wine/` | Wine & Bar Selections | (Add any wine bottle or cellar photos here) |
| `public/images/gallery/kids_menu/` | Children's Menu | (Add kids pasta/tenders photos here) |
| `public/images/gallery/ambience/` | Dining Room & Patio Atmosphere | `outdoor_patio.jpg`, `stained_glass_entrance.jpg`, `historic_cottage_exterior.png` |

---

## 🖼️ 2. How to Add a New Image to the Gallery

1. **Place the Image File**:
   Copy your image file into the appropriate category folder above (e.g. `public/images/gallery/seafood/snapper_almondine.jpg`).

2. **Register the Image in `src/assetsConfig.js`**:
   Open `src/assetsConfig.js` and add an entry inside the `gallery` array:

   ```javascript
   {
     title: "Snapper Almondine",
     category: "seafood",
     categoryName: "Seafood Selections",
     image: "/images/gallery/seafood/snapper_almondine.jpg",
     description: "Pan-seared Gulf snapper crusted with sliced almonds in lemon butter beurre blanc."
   },
   ```

3. **Save and Build**:
   Run `npm run build` to package the website.

---

## 🗑️ 3. How to Remove an Image
1. Open `src/assetsConfig.js`.
2. Delete the corresponding object from the `gallery` array.
3. (Optional) Delete the image file from `public/images/gallery/<category>/`.

---

## 📄 4. How to Update Menu Pages
Print menu sheets are located in `public/images/`:
* `menu_page_1.jpg` (Starters & Land Lovers)
* `menu_page_2.jpg` (Seafood Selections & Specialties)
* `menu_page_3.jpg` (Children's Menu)

Simply replace any of these images with an updated version using the same file name, then run `npm run build`.
