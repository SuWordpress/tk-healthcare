// TK Healthcare — Product Catalog
// Uses real Unsplash pharmacy/medicine images

const PRODUCTS = [
  {
    id: 1,
    name: "Amoxicillin 500mg",
    category: "Antibiotics",
    desc: "Broad-spectrum penicillin antibiotic. 100 capsules per pack.",
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80",
    retailPrice: 480,
    wholesalePrice: 320,
    wholesaleUnit: "per carton (24 packs)",
    retailUnit: "per pack",
    inStock: true,
    tags: ["prescription", "antibiotic"]
  },
  {
    id: 2,
    name: "Paracetamol 500mg",
    category: "Analgesics",
    desc: "Pain relief and fever reducer. 500 tablets per pack.",
    img: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&q=80",
    retailPrice: 220,
    wholesalePrice: 140,
    wholesaleUnit: "per carton (20 packs)",
    retailUnit: "per pack",
    inStock: true,
    tags: ["otc", "painkiller"]
  },
  {
    id: 3,
    name: "Vitamin C 1000mg",
    category: "Supplements",
    desc: "High-strength immune support. 60 effervescent tablets.",
    img: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&q=80",
    retailPrice: 650,
    wholesalePrice: 420,
    wholesaleUnit: "per carton (12 packs)",
    retailUnit: "per pack",
    inStock: true,
    tags: ["supplement", "otc"]
  },
  {
    id: 4,
    name: "Metformin 500mg",
    category: "Diabetes Care",
    desc: "First-line oral antidiabetic medication. 60 tablets per pack.",
    img: "https://images.unsplash.com/photo-1563213126-a4273aed2016?w=400&q=80",
    retailPrice: 950,
    wholesalePrice: 620,
    wholesaleUnit: "per carton (10 packs)",
    retailUnit: "per pack",
    inStock: true,
    tags: ["prescription", "diabetes"]
  },
  {
    id: 5,
    name: "Artemether-Lumefantrine",
    category: "Antimalarials",
    desc: "First-line malaria treatment. 6 tablets per blister pack.",
    img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&q=80",
    retailPrice: 1200,
    wholesalePrice: 820,
    wholesaleUnit: "per carton (30 packs)",
    retailUnit: "per pack",
    inStock: true,
    tags: ["prescription", "antimalarial"]
  },
  {
    id: 6,
    name: "Amlodipine 5mg",
    category: "Cardiovascular",
    desc: "Calcium channel blocker for hypertension. 30 tablets.",
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80",
    retailPrice: 780,
    wholesalePrice: 510,
    wholesaleUnit: "per carton (15 packs)",
    retailUnit: "per pack",
    inStock: true,
    tags: ["prescription", "cardiovascular"]
  },
  {
    id: 7,
    name: "Omeprazole 20mg",
    category: "Gastroenterology",
    desc: "Proton pump inhibitor for acid reflux. 28 capsules per pack.",
    img: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&q=80",
    retailPrice: 560,
    wholesalePrice: 370,
    wholesaleUnit: "per carton (18 packs)",
    retailUnit: "per pack",
    inStock: true,
    tags: ["otc", "gastro"]
  },
  {
    id: 8,
    name: "Multivitamin Complex",
    category: "Supplements",
    desc: "Complete daily vitamin & mineral formula. 90 tablets.",
    img: "https://images.unsplash.com/photo-1622227922682-56c92d000ecc?w=400&q=80",
    retailPrice: 1100,
    wholesalePrice: 730,
    wholesaleUnit: "per carton (10 packs)",
    retailUnit: "per pack",
    inStock: true,
    tags: ["supplement", "otc"]
  },
  {
    id: 9,
    name: "Ibuprofen 400mg",
    category: "Analgesics",
    desc: "Anti-inflammatory pain relief. 100 tablets per pack.",
    img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&q=80",
    retailPrice: 340,
    wholesalePrice: 220,
    wholesaleUnit: "per carton (24 packs)",
    retailUnit: "per pack",
    inStock: true,
    tags: ["otc", "painkiller"]
  },
  {
    id: 10,
    name: "Ciprofloxacin 500mg",
    category: "Antibiotics",
    desc: "Fluoroquinolone antibiotic. 10 tablets per pack.",
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80",
    retailPrice: 890,
    wholesalePrice: 580,
    wholesaleUnit: "per carton (20 packs)",
    retailUnit: "per pack",
    inStock: false,
    tags: ["prescription", "antibiotic"]
  },
  {
    id: 11,
    name: "Folic Acid 5mg",
    category: "Mother & Child",
    desc: "Essential prenatal supplement. 100 tablets per pack.",
    img: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=400&q=80",
    retailPrice: 290,
    wholesalePrice: 185,
    wholesaleUnit: "per carton (30 packs)",
    retailUnit: "per pack",
    inStock: true,
    tags: ["otc", "prenatal"]
  },
  {
    id: 12,
    name: "ORS Sachets",
    category: "Mother & Child",
    desc: "Oral rehydration salts for dehydration. 10 sachets per pack.",
    img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&q=80",
    retailPrice: 180,
    wholesalePrice: 110,
    wholesaleUnit: "per carton (50 packs)",
    retailUnit: "per pack",
    inStock: true,
    tags: ["otc", "child"]
  }
];

const CATEGORIES = [
  { name: "Antibiotics", icon: "💊", count: 120 },
  { name: "Analgesics", icon: "🔴", count: 85 },
  { name: "Cardiovascular", icon: "❤️", count: 92 },
  { name: "Diabetes Care", icon: "🩺", count: 74 },
  { name: "Antimalarials", icon: "🧪", count: 45 },
  { name: "Supplements", icon: "🌿", count: 130 },
  { name: "Mother & Child", icon: "👶", count: 88 },
  { name: "Gastroenterology", icon: "💉", count: 63 },
];

function formatNaira(n) {
  return '₦' + n.toLocaleString();
}

function productCardHTML(p, mode = 'wholesale') {
  const price = mode === 'wholesale' ? p.wholesalePrice : p.retailPrice;
  const unit = mode === 'wholesale' ? p.wholesaleUnit : p.retailUnit;
  const otherPrice = mode === 'wholesale' ? p.retailPrice : null;
  return `
  <div class="product-card" data-id="${p.id}">
    <img class="product-img" src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80'">
    <div class="product-body">
      <div class="product-cat">${p.category}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-desc">${p.desc}</div>
      <div style="display:flex;align-items:flex-end;justify-content:space-between;gap:8px;">
        <div>
          ${otherPrice && mode==='wholesale' ? `<div class="price-retail">Retail: <span>${formatNaira(otherPrice)}</span></div>` : ''}
          <div class="price-wholesale" style="color:${mode==='retail'?'var(--amber)':'var(--green)'};">${formatNaira(price)}</div>
          <div class="price-unit">${unit}</div>
        </div>
        <button class="product-add" onclick="addToCart(${p.id})" style="background:${mode==='retail'?'var(--amber)':'var(--green)'};" title="Add to cart" ${!p.inStock?'disabled style="opacity:.4;cursor:not-allowed;"':''}>+</button>
      </div>
      ${!p.inStock ? '<div style="font-size:11px;color:#c00;margin-top:8px;">Out of stock</div>' : ''}
    </div>
  </div>`;
}

function addToCart(id) {
  const cart = JSON.parse(localStorage.getItem('tk_cart') || '[]');
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty += 1;
  else cart.push({ id, qty: 1 });
  localStorage.setItem('tk_cart', JSON.stringify(cart));
  updateCartBadge();
  showToast('Added to cart!');
}

function updateCartBadge() {
  const cart = JSON.parse(localStorage.getItem('tk_cart') || '[]');
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('.cart-badge').forEach(el => {
    el.textContent = total;
    el.style.display = total > 0 ? 'flex' : 'none';
  });
}

function showToast(msg) {
  const t = document.createElement('div');
  t.textContent = msg;
  t.style.cssText = `position:fixed;bottom:28px;right:28px;background:#0F6E56;color:white;padding:12px 20px;border-radius:10px;font-size:14px;font-weight:500;z-index:9999;animation:slideUp .3s ease;box-shadow:0 4px 20px rgba(15,110,86,.3)`;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2400);
}

// CSS for toast animation
const style = document.createElement('style');
style.textContent = `@keyframes slideUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}`;
document.head.appendChild(style);
