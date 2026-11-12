const products = [
  { id: 1, name: 'AMD Ryzen 5 5600', category: 'CPU', label: 'BỘ VI XỬ LÝ', spec: '6 nhân / 12 luồng · Socket AM4', price: 2990000, badge: 'PHỔ BIẾN', tone: 'peach', image: 'ryzen5_5600.png' },
  { id: 2, name: 'Intel Core i5-12400F', category: 'CPU', label: 'BỘ VI XỬ LÝ', spec: '6 nhân / 12 luồng · Socket LGA1700', price: 3290000, badge: '', tone: 'blue', image: 'intel5.png'  },
  { id: 3, name: 'GeForce RTX 4060 8GB', category: 'GPU', label: 'CARD ĐỒ HỌA', spec: '8GB GDDR6 · Hiệu năng chơi game', price: 8290000, badge: 'NỔI BẬT', tone: 'sage', image: '4060.png'},
  { id: 4, name: 'Radeon RX 7600 8GB', category: 'GPU', label: 'CARD ĐỒ HỌA', spec: '8GB GDDR6 · Thiết kế hai quạt', price: 7490000, badge: '', tone: 'lavender', image: 'RX7600.png' },
  { id: 5, name: 'Kingston FURY Beast 16GB', category: 'RAM', label: 'BỘ NHỚ RAM', spec: '16GB DDR4 · 3200MHz', price: 1090000, badge: '', tone: 'yellow', image: 'DDR4.png' },
  { id: 6, name: 'Corsair Vengeance 16GB', category: 'RAM', label: 'BỘ NHỚ RAM', spec: '16GB DDR4 · 3200MHz', price: 1190000, badge: '', tone: 'peach', image: 'DDR42.png' },
  { id: 7, name: 'Kingston NV2 1TB', category: 'SSD', label: 'Ổ CỨNG SSD', spec: '1TB · M.2 NVMe PCIe 4.0', price: 1590000, badge: '', tone: 'blue', image: 'SSD1.jpg' },
  { id: 8, name: 'Samsung 980 1TB', category: 'SSD', label: 'Ổ CỨNG SSD', spec: '1TB · M.2 NVMe PCIe 3.0', price: 1890000, badge: '', tone: 'sage', image: 'SSD2.jpg' }
];
const formatPrice = value => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', maximumFractionDigits: 0 }).format(value);
const grid = document.querySelector('#product-grid');
const search = document.querySelector('#search');
const drawer = document.querySelector('#cart-drawer');
const overlay = document.querySelector('#cart-overlay');
const cartItems = document.querySelector('#cart-items');
const cartSummary = document.querySelector('#cart-summary');
const checkoutForm = document.querySelector('#checkout-form');
const checkoutSuccess = document.querySelector('#checkout-success');
const checkoutButton = document.querySelector('.checkout-button');
let category = 'all';
let previousFocus = null;
let cart = {};
try { const saved = JSON.parse(localStorage.getItem('tin-pc-cart') || '{}'); if (saved && typeof saved === 'object' && !Array.isArray(saved)) cart = saved; } catch (_) { /* The demo still works when storage is unavailable. */ }

function art(type) {
  if (type === 'CPU') return `<svg viewBox="0 0 240 180" aria-hidden="true"><g transform="translate(47 16) rotate(-8 72 72)"><rect x="5" y="5" width="140" height="140" rx="7" fill="#343f3a"/><rect x="13" y="13" width="124" height="124" rx="3" fill="#b6c5b4"/><rect x="21" y="21" width="108" height="108" rx="5" fill="#dce1d5"/><rect x="29" y="29" width="92" height="92" rx="3" fill="#a8b2a9"/><path d="M45 49h60M45 57h60M45 93h38" stroke="#89958e" stroke-width="3"/><text x="75" y="82" text-anchor="middle" fill="#3c4b44" font-size="18" font-weight="800" font-family="sans-serif">CPU</text></g></svg>`;
  if (type === 'GPU') return `<svg viewBox="0 0 240 180" aria-hidden="true"><g transform="translate(16 39) rotate(-8 105 50)"><rect x="3" y="10" width="205" height="87" rx="10" fill="#222e2b"/><path d="M12 20h187v65H12z" fill="#3c4d47"/><circle cx="58" cy="53" r="31" fill="#1a2522"/><circle cx="157" cy="53" r="31" fill="#1a2522"/><g fill="none" stroke="#91a79c" stroke-width="5"><circle cx="58" cy="53" r="23"/><circle cx="157" cy="53" r="23"/></g><g stroke="#91a79c" stroke-width="4"><path d="M58 29v48M34 53h48M41 36l34 34M75 36L41 70M157 29v48M133 53h48M140 36l34 34M174 36l-34 34"/></g><path d="M36 97h120v9H36z" fill="#c7a65e"/></g></svg>`;
  if (type === 'RAM') return `<svg viewBox="0 0 240 180" aria-hidden="true"><g transform="translate(20 49) rotate(-10 100 40)"><path d="M3 5h194v66H3z" fill="#2a3732"/><path d="M12 13h176v44H12z" fill="#596e62"/><path d="M18 20h164M18 27h164" stroke="#9bb1a2" stroke-width="3"/><path d="M15 71h170v9H15z" fill="#c9ae6b"/><path d="M28 71v9m12-9v9m12-9v9m12-9v9m12-9v9m12-9v9m12-9v9m12-9v9m12-9v9m12-9v9m12-9v9m12-9v9m12-9v9" stroke="#4b5548" stroke-width="2"/><text x="100" y="49" text-anchor="middle" fill="#e3e9df" font-size="13" font-weight="800" font-family="sans-serif">MEMORY / DDR4</text></g></svg>`;
  return `<svg viewBox="0 0 240 180" aria-hidden="true"><g transform="translate(23 53) rotate(-10 95 32)"><rect x="0" y="0" width="190" height="64" rx="4" fill="#344a3d"/><rect x="13" y="8" width="146" height="48" fill="#26352e"/><rect x="25" y="15" width="40" height="34" fill="#63776c"/><rect x="74" y="15" width="40" height="34" fill="#63776c"/><rect x="123" y="15" width="26" height="34" fill="#63776c"/><path d="M167 4h23v56h-23z" fill="#c6ab66"/><path d="M171 4v56m6-56v56m6-56v56" stroke="#766b42" stroke-width="2"/><text x="95" y="38" text-anchor="middle" fill="#edf2e9" font-size="12" font-weight="800" font-family="sans-serif">NVMe SSD</text></g></svg>`;
}
function renderProducts() {
  const query = search.value.trim().toLocaleLowerCase('vi');
  const filtered = products.filter(p => (category === 'all' || p.category === category) && `${p.name} ${p.label} ${p.spec}`.toLocaleLowerCase('vi').includes(query));
  grid.innerHTML = filtered.map(p => `<article class="product-card"><div class="product-image ${p.tone}">${p.badge ? `<span class="product-badge">✳ ${p.badge}</span>` : ''}${p.image ? `<img src="${p.image}" alt="${p.name}" loading="lazy">` : art(p.category)}<span class="product-index">TIN / 0${p.id}</span></div><div class="product-info"><p class="product-category">${p.label}</p><h3 class="product-name">${p.name}</h3><p class="product-spec">${p.spec}</p><div class="product-bottom"><strong class="product-price">${formatPrice(p.price)}</strong><button class="add-button" type="button" data-add="${p.id}" aria-label="Thêm ${p.name} vào giỏ hàng">+</button></div></div></article>`).join('');
  document.querySelector('#product-count').textContent = `${String(filtered.length).padStart(2, '0')} SẢN PHẨM`;
  document.querySelector('#empty-state').hidden = filtered.length > 0;
}
function saveCart() { try { localStorage.setItem('tin-pc-cart', JSON.stringify(cart)); } catch (_) {} }
function renderCart() {
  const entries = products.filter(p => Number.isInteger(cart[p.id]) && cart[p.id] > 0);
  const count = entries.reduce((sum, p) => sum + cart[p.id], 0);
  document.querySelector('.cart-count').textContent = count;
  cartItems.innerHTML = entries.length ? entries.map(p => `<div class="cart-item"><div class="cart-item-art ${p.tone}">${p.image ? `<img src="${p.image}" alt="${p.name}">` : art(p.category)}</div><div class="cart-item-info"><strong>${p.name}</strong><small>${formatPrice(p.price)}</small><div class="quantity-control"><button type="button" data-decrease="${p.id}" aria-label="Giảm số lượng ${p.name}">−</button><span>${cart[p.id]}</span><button type="button" data-increase="${p.id}" aria-label="Tăng số lượng ${p.name}">+</button></div></div><button class="remove-item" type="button" data-remove="${p.id}" aria-label="Xóa ${p.name}">×</button></div>`).join('') : '<div class="cart-empty"><span>✳</span><strong>Giỏ hàng còn trống.</strong><p>Chiếc máy trong mơ đang chờ những mảnh ghép đầu tiên.</p></div>';
  document.querySelector('#cart-total').textContent = formatPrice(entries.reduce((sum, p) => sum + p.price * cart[p.id], 0));
  checkoutButton.disabled = count === 0;
  saveCart();
}
function showCartScreen() {
  cartItems.hidden = false;
  cartSummary.hidden = false;
  checkoutForm.hidden = true;
  checkoutSuccess.hidden = true;
  document.querySelector('#cart-title').textContent = 'Giỏ hàng của bạn.';
}
function openCart() { previousFocus = document.activeElement; overlay.hidden = false; drawer.classList.add('is-open'); overlay.classList.add('is-open'); drawer.setAttribute('aria-hidden', 'false'); document.body.classList.add('cart-open'); drawer.querySelector('.close-cart').focus(); }
function closeCart() { drawer.classList.remove('is-open'); overlay.classList.remove('is-open'); overlay.hidden = true; drawer.setAttribute('aria-hidden', 'true'); document.body.classList.remove('cart-open'); showCartScreen(); if (previousFocus) previousFocus.focus(); }
document.querySelectorAll('.category-tab').forEach(button => button.addEventListener('click', () => { category = button.dataset.category; document.querySelectorAll('.category-tab').forEach(tab => tab.classList.toggle('is-active', tab === button)); renderProducts(); }));
search.addEventListener('input', renderProducts);
grid.addEventListener('click', event => { const button = event.target.closest('[data-add]'); if (!button) return; const id = button.dataset.add; cart[id] = (Number.isInteger(cart[id]) ? cart[id] : 0) + 1; renderCart(); openCart(); });
cartItems.addEventListener('click', event => { const button = event.target.closest('button'); if (!button) return; const id = button.dataset.increase || button.dataset.decrease || button.dataset.remove; if (button.dataset.increase) cart[id]++; else if (button.dataset.decrease) { cart[id]--; if (cart[id] <= 0) delete cart[id]; } else delete cart[id]; renderCart(); });
document.querySelector('.cart-trigger').addEventListener('click', openCart);
document.querySelector('.close-cart').addEventListener('click', closeCart);
document.querySelector('.continue-shopping').addEventListener('click', closeCart);
checkoutButton.addEventListener('click', () => {
  if (checkoutButton.disabled) return;
  cartItems.hidden = true;
  cartSummary.hidden = true;
  checkoutSuccess.hidden = true;
  checkoutForm.hidden = false;
  document.querySelector('#cart-title').textContent = 'Đặt hàng thử.';
  document.querySelector('#checkout-total').textContent = document.querySelector('#cart-total').textContent;
  checkoutForm.querySelector('input').focus();
});
document.querySelector('.checkout-back').addEventListener('click', () => { showCartScreen(); checkoutButton.focus(); });
checkoutForm.addEventListener('submit', event => {
  event.preventDefault();
  const payment = checkoutForm.querySelector('input[name="payment"]:checked');
  if (!payment || !Object.values(cart).some(quantity => Number.isInteger(quantity) && quantity > 0)) return;
  const total = document.querySelector('#checkout-total').textContent;
  document.querySelector('#confirmation-details').textContent = `${payment.value} · Tổng đơn thử: ${total}`;
  cart = {};
  renderCart();
  checkoutForm.hidden = true;
  checkoutSuccess.hidden = false;
  document.querySelector('#cart-title').textContent = 'Hoàn tất.';
  document.querySelector('.success-close').focus();
});
document.querySelector('.success-close').addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);
document.addEventListener('keydown', event => { if (event.key === 'Escape' && drawer.classList.contains('is-open')) closeCart(); });
renderProducts(); renderCart();
