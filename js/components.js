// Shared nav HTML
function renderNav(activePage) {
  const pages = [
    { href: '../index.html', label: 'Home', key: 'home' },
    { href: '../pages/products.html', label: 'Products', key: 'products' },
    { href: '../pages/wholesale.html', label: 'Wholesale', key: 'wholesale' },
    { href: '../pages/retail.html', label: 'Retail', key: 'retail' },
    { href: '../pages/delivery.html', label: 'Delivery', key: 'delivery' },
    { href: '../pages/about.html', label: 'About', key: 'about' },
  ];

  // Adjust hrefs if we're at root
  const isRoot = !window.location.pathname.includes('/pages/');
  const navPages = pages.map(p => ({
    ...p,
    href: isRoot ? p.href.replace('../', '') : p.href
  }));

  const links = navPages.map(p =>
    `<li><a href="${p.href}" class="${p.key === activePage ? 'active' : ''}">${p.label}</a></li>`
  ).join('');

  return `
  <nav class="navbar">
    <a href="${isRoot ? 'index.html' : '../index.html'}" class="nav-logo">
      <div class="nav-logo-icon">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      </div>
      <div class="nav-brand">
        <div class="nav-brand-name">TK Healthcare</div>
        <div class="nav-brand-sub">Services Company Ltd</div>
      </div>
    </a>
    <ul class="nav-links">${links}</ul>
    <div class="nav-actions">
      <button class="btn-ghost" onclick="location.href='${isRoot ? 'pages/about.html' : '../pages/about.html'}'">Sign in</button>
      <button class="btn-primary" onclick="location.href='${isRoot ? 'pages/products.html' : '../pages/products.html'}'">Order now →</button>
    </div>
  </nav>`;
}

function renderFooter() {
  const isRoot = !window.location.pathname.includes('/pages/');
  const base = isRoot ? '' : '../';
  return `
  <footer>
    <div class="footer-grid">
      <div>
        <div class="footer-brand-name">TK Healthcare Services</div>
        <div class="footer-brand-sub">Company Limited · Nigeria</div>
        <p class="footer-desc">Your trusted partner for pharmaceutical products — wholesale and retail — delivered to your doorstep anywhere in Nigeria.</p>
        <div class="footer-badges">
          <span class="footer-badge">NAFDAC Registered</span>
          <span class="footer-badge">CAC Certified</span>
          <span class="footer-badge">GSM Compliant</span>
        </div>
      </div>
      <div class="footer-col">
        <h4>Shop</h4>
        <ul>
          <li><a href="${base}pages/products.html">All Products</a></li>
          <li><a href="${base}pages/wholesale.html">Wholesale</a></li>
          <li><a href="${base}pages/retail.html">Retail</a></li>
          <li><a href="${base}pages/products.html#categories">Categories</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="${base}pages/about.html">About us</a></li>
          <li><a href="${base}pages/delivery.html">Delivery info</a></li>
          <li><a href="${base}pages/about.html#contact">Contact</a></li>
          <li><a href="${base}pages/about.html#faq">FAQ</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="tel:+2348000000000">+234 800 000 0000</a></li>
          <li><a href="mailto:info@tkhealthcare.ng">info@tkhealthcare.ng</a></li>
          <li><a href="#">Lagos · Abuja · PH</a></li>
          <li><a href="#">Mon–Sat 8am–6pm</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 TK Healthcare Services Company Ltd. All rights reserved.</p>
      <p>Designed for Nigeria's healthcare ecosystem</p>
    </div>
  </footer>`;
}

// Inject nav and footer
document.addEventListener('DOMContentLoaded', () => {
  const navEl = document.getElementById('navbar');
  const footerEl = document.getElementById('footer');
  if (navEl) navEl.innerHTML = renderNav(navEl.dataset.page);
  if (footerEl) footerEl.innerHTML = renderFooter();
});
