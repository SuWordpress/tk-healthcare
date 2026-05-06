# TK Healthcare Services Company Ltd — Website Demo

A full multi-page pharmacy website demo with **wholesale** and **retail** buying modes, product images, and doorstep delivery — ready to deploy on GitHub Pages.

---

## 📄 Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Landing page with hero, product preview, categories |
| Products | `pages/products.html` | Full catalog with search, filter, sort |
| Wholesale | `pages/wholesale.html` | Bulk buying info, tiers, application form |
| Retail | `pages/retail.html` | Single-pack buying, benefits, guarantees |
| Delivery | `pages/delivery.html` | Zones, tracking demo, policies |
| About | `pages/about.html` | Company info, certifications, FAQ, contact |

---

## 🚀 Deploy to GitHub Pages (Step-by-Step)

### Step 1 — Create a GitHub repository
1. Go to [github.com](https://github.com) and sign in
2. Click **"New repository"** (green button, top right)
3. Name it: `tk-healthcare` (or any name you like)
4. Set it to **Public**
5. Click **"Create repository"**

### Step 2 — Upload the files
**Option A — Upload via browser (easiest):**
1. On your new repo page, click **"uploading an existing file"**
2. Drag and drop ALL the files and folders from this project
3. Make sure the folder structure is preserved:
   ```
   index.html
   css/
     style.css
     home.css
   js/
     components.js
     products.js
   pages/
     products.html
     wholesale.html
     retail.html
     delivery.html
     about.html
   README.md
   ```
4. Scroll down, add commit message: `Initial website upload`
5. Click **"Commit changes"**

**Option B — Using Git (for developers):**
```bash
git init
git add .
git commit -m "Initial TK Healthcare website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/tk-healthcare.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. In your repository, click **"Settings"** (top menu)
2. Scroll down to **"Pages"** in the left sidebar
3. Under **"Source"**, select **"Deploy from a branch"**
4. Under **"Branch"**, select **"main"** and **"/ (root)"**
5. Click **Save**

### Step 4 — Get your live link
1. Wait ~2 minutes for GitHub to build your site
2. Refresh the Settings > Pages page
3. You'll see: **"Your site is live at https://YOUR_USERNAME.github.io/tk-healthcare/"**
4. Share this link with your client!

---

## 🎨 Customization

### Change business details
Edit `js/components.js` to update:
- Phone number
- Email address
- Office locations
- Social media links

### Add/edit products
Edit `js/products.js` — each product has:
```javascript
{
  id: 1,
  name: "Product Name",
  category: "Category",
  desc: "Description",
  img: "https://image-url.com/photo.jpg",  // Any image URL
  retailPrice: 480,      // in Naira
  wholesalePrice: 320,   // in Naira
  wholesaleUnit: "per carton (24 packs)",
  retailUnit: "per pack",
  inStock: true
}
```

### Change colors
Edit `css/style.css` — the `:root` section at the top:
```css
:root {
  --green: #0F6E56;     /* Primary brand color */
  --amber: #BA7517;     /* Retail accent color */
}
```

---

## 📦 File structure
```
tk-healthcare/
├── index.html          ← Homepage
├── README.md           ← This file
├── css/
│   ├── style.css       ← Shared styles (nav, footer, cards)
│   └── home.css        ← Homepage-specific styles
├── js/
│   ├── components.js   ← Shared nav & footer
│   └── products.js     ← Product data & cart logic
└── pages/
    ├── products.html   ← Product catalog
    ├── wholesale.html  ← Wholesale page
    ├── retail.html     ← Retail page
    ├── delivery.html   ← Delivery info
    └── about.html      ← About, contact, FAQ
```

---

## ✅ Features
- ✅ Multi-page website (6 pages)
- ✅ Wholesale vs Retail price toggle
- ✅ Product images from real pharmaceutical photos
- ✅ Search, filter, and sort on product catalog
- ✅ Add-to-cart with toast notifications
- ✅ Wholesale account application form
- ✅ Contact form
- ✅ Delivery zone map & order tracking demo
- ✅ FAQ with accordion
- ✅ Mobile responsive
- ✅ No frameworks needed — pure HTML/CSS/JS

---

*Built for TK Healthcare Services Company Ltd, Nigeria*
