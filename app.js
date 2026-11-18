const products = [
  { id: 1, name: 'AMD Ryzen 5 5600', category: 'CPU', label: 'BỘ VI XỬ LÝ', spec: '6 nhân / 12 luồng · Socket AM4', price: 2990000, badge: 'PHỔ BIẾN', tone: 'peach', image: 'images/AMD_Ryzen_5_5600.png' },
  { id: 2, name: 'Intel Core i5-12400F', category: 'CPU', label: 'BỘ VI XỬ LÝ', spec: '6 nhân / 12 luồng · Socket LGA1700', price: 3290000, badge: '', tone: 'blue', image: 'images/Intel_Core_i5-12400F.png' },
  { id: 3, name: 'GeForce RTX 4060 8GB', category: 'GPU', label: 'CARD ĐỒ HỌA', spec: '8GB GDDR6 · Hiệu năng chơi game', price: 8290000, badge: 'NỔI BẬT', tone: 'sage', image: 'images/GeForce_RTX_4060_8GB.png' },
  { id: 4, name: 'Radeon RX 7600 8GB', category: 'GPU', label: 'CARD ĐỒ HỌA', spec: '8GB GDDR6 · Thiết kế hai quạt', price: 7490000, badge: '', tone: 'lavender', image: 'images/Radeon_RX_7600_8GB.png' },
  { id: 5, name: 'Kingston FURY Beast 16GB', category: 'RAM', label: 'BỘ NHỚ RAM', spec: '16GB DDR5 · 6000MHz', price: 2090000, badge: '', tone: 'yellow', image: 'images/Kingston_FURY_Beast_16GB.png' },
  { id: 6, name: 'Corsair Vengeance 16GB', category: 'RAM', label: 'BỘ NHỚ RAM', spec: '16GB DDR4 · 3200MHz', price: 1190000, badge: '', tone: 'peach', image: 'images/Corsair_Vengeance_16GB.png' },
  { id: 7, name: 'Kingston NV2 1TB', category: 'SSD', label: 'Ổ CỨNG SSD', spec: '1TB · M.2 NVMe PCIe 4.0', price: 1590000, badge: '', tone: 'blue', image: 'images/Kingston_NV2_1TB.png' },
  { id: 8, name: 'Samsung 980 1TB', category: 'SSD', label: 'Ổ CỨNG SSD', spec: '1TB · M.2 NVMe PCIe 3.0', price: 3590000, badge: '', tone: 'sage', image: 'images/Samsung_980_1TB.png' }
];

// Thông tin chi tiết được dùng chung cho tất cả các trang.
const productDetails = {
  1: {
    description: 'AMD Ryzen 5 5600 là mẫu bộ vi xử lý quốc dân trong phân khúc tầm trung với cấu hình 6 nhân 12 luồng trên nền tảng Socket AM4. Sở hữu kiến trúc Zen 3 tối ưu cùng bộ nhớ đệm L3 lớn lên tới 32MB, con chip này mang lại hiệu năng đơn nhân mạnh mẽ, xử lý mượt mà các tựa game eSports lẫn AAA phổ biến ở độ phân giải Full HD, đồng thời tối ưu chi phí nhờ tương thích tốt với các dòng bo mạch chủ B450/B550 giá mềm.',
    specs: [['Danh mục', 'Bộ vi xử lý (CPU)'], ['Kiến trúc', 'AMD Zen 3 (Tiến trình 7nm)'], ['Số nhân / Số luồng', '6 nhân / 12 luồng'], ['Xung nhịp cơ bản / Boost', '3.5 GHz / Lên đến 4.4 GHz'], ['Bộ nhớ đệm (Cache)', '32MB L3 Cache'], ['Socket', 'AM4'], ['Mức tiêu thụ điện (TDP)', '65W']]
  },
  2: {
    description: 'Intel Core i5-12400F là lựa chọn hàng đầu cho các bộ PC gaming và làm việc đa nhiệm nhờ 6 nhân hiệu năng cao (P-cores) cùng 12 luồng xử lý trên nền tảng Socket LGA1700. Việc lược bỏ nhân đồ họa tích hợp giúp tối ưu mức giá thành đáng kể trong khi vẫn giữ trọn sức mạnh kiến trúc Alder Lake, đảm bảo khả năng khai thác tối đa hiệu suất của các dòng card đồ họa tầm trung như RTX 4060 hay RX 7600.',
    specs: [['Danh mục', 'Bộ vi xử lý (CPU)'], ['Kiến trúc', 'Intel Alder Lake (Intel 7)'], ['Số nhân / Số luồng', '6 nhân P-core / 12 luồng'], ['Xung nhịp cơ bản / Turbo', '2.5 GHz / Lên đến 4.4 GHz'], ['Bộ nhớ đệm (Cache)', '18MB Intel Smart Cache'], ['Socket', 'LGA1700'], ['Mức tiêu thụ điện (TDP)', '65W (Tối đa 117W khi Turbo)']]
  },
  3: {
    description: 'GeForce RTX 4060 8GB mang đến bước nhảy vọt về hiệu năng chơi game ở độ phân giải 1080p nhờ kiến trúc NVIDIA Ada Lovelace tiên tiến. Với dung lượng 8GB GDDR6 cùng công nghệ DLSS 3 tích hợp tính năng tạo khung hình bằng AI (Frame Generation), mẫu card đồ họa này giúp tăng tốc độ khung hình đáng kể trong các tựa game nặng bật Ray Tracing mà vẫn duy trì mức điện năng tiêu thụ cực kỳ mát mẻ.',
    specs: [['Danh mục', 'Card đồ họa (GPU)'], ['Kiến trúc GPU', 'NVIDIA Ada Lovelace'], ['Nhân CUDA', '3.072 nhân'], ['Dung lượng bộ nhớ', '8GB GDDR6'], ['Giao diện bộ nhớ (Bus)', '128-bit'], ['Xung nhịp Boost', '~2460 MHz – 2505 MHz'], ['Công nghệ hỗ trợ', 'DLSS 3, Ray Tracing thế hệ 3, NVIDIA Reflex'], ['Nguồn đề xuất', '550W (1 đầu cấp nguồn 8-pin)']]
  },
  4: {
    description: 'Radeon RX 7600 8GB là giải pháp card đồ họa tối ưu hiệu năng trên giá thành dành cho game thủ chuộng hiệu suất thuần (Rasterization). Sở hữu 8GB bộ nhớ GDDR6 tốc độ cao kết hợp thiết kế hai quạt tản nhiệt gọn gàng, sản phẩm dễ dàng lắp đặt trong nhiều kích thước vỏ case và đáp ứng mượt mà nhu cầu chiến game Full HD thiết lập cao cũng như xử lý đồ họa, dựng video cơ bản.',
    specs: [['Danh mục', 'Card đồ họa (GPU)'], ['Kiến trúc GPU', 'AMD RDNA 3'], ['Bộ xử lý luồng', '2.048 Stream Processors'], ['Dung lượng bộ nhớ', '8GB GDDR6'], ['Giao diện bộ nhớ (Bus)', '128-bit'], ['Xung nhịp Boost', '2250 MHz / Lên đến 2655 MHz'], ['Hệ thống tản nhiệt', 'Thiết kế hai quạt (Dual-Fan)'], ['Nguồn đề xuất', '550W (1 đầu cấp nguồn 8-pin)']]
  },
  5: {
    description: 'Kingston FURY Beast 16GB chuẩn DDR5 mang lại băng thông vượt trội với tốc độ bus lên tới 6000MHz, giúp tăng tốc độ tải ứng dụng và cải thiện độ ổn định khung hình cho các dàn PC thế hệ mới. Sản phẩm được trang bị giáp tản nhiệt nhôm cứng cáp cùng dải đèn LED RGB đồng bộ ánh sáng mượt mà, hỗ trợ sẵn cấu hình ép xung Intel XMP 3.0 và AMD EXPO chỉ với một thao tác bật trong BIOS.',
    specs: [['Danh mục', 'Bộ nhớ RAM'], ['Dung lượng', '16GB'], ['Chuẩn RAM', 'DDR5'], ['Tốc độ Bus', '6000MHz'], ['Độ trễ (CAS Latency)', 'CL36'], ['Điện áp hoạt động', '1.35V'], ['Sự tương thích', 'Hỗ trợ Intel XMP 3.0 & AMD EXPO, LED RGB']]
  },
  6: {
    description: 'Corsair Vengeance 16GB là dòng RAM DDR4 nổi tiếng về độ bền bỉ và tính tương thích cao với hầu hết các hệ thống sử dụng bo mạch chủ DDR4. Hoạt động ở mức xung nhịp tiêu chuẩn 3200MHz, thanh RAM này cung cấp khả năng đa nhiệm trơn tru cho nhu cầu chơi game, làm việc văn phòng nặng và mở hàng chục tab trình duyệt cùng lúc mà không gặp tình trạng giật lag.',
    specs: [['Danh mục', 'Bộ nhớ RAM'], ['Dung lượng', '16GB'], ['Chuẩn RAM', 'DDR4'], ['Tốc độ Bus', '3200MHz'], ['Độ trễ (CAS Latency)', 'CL16'], ['Điện áp hoạt động', '1.35V'], ['Sự tương thích', 'Hỗ trợ Intel XMP 2.0']]
  },
  7: {
    description: 'Kingston NV2 1TB là mẫu ổ cứng SSD M.2 NVMe sử dụng giao tiếp PCIe 4.0 x4 giúp rút ngắn tối đa thời gian khởi động hệ điều hành và tải màn chơi game. Với mức dung lượng rộng rãi 1TB cùng thiết kế một mặt chip mỏng nhẹ, ổ cứng dễ dàng tương thích với cả PC để bàn lẫn laptop mỏng nhẹ mà vẫn giữ mức nhiệt độ vận hành mát mẻ.',
    specs: [['Danh mục', 'Ổ cứng SSD'], ['Dung lượng', '1TB'], ['Chuẩn kích thước', 'M.2 2280'], ['Giao tiếp', 'PCIe 4.0 x4 NVMe'], ['Tốc độ đọc', 'Lên đến 3.500 MB/s'], ['Tốc độ ghi', 'Lên đến 2.100 MB/s'], ['Độ bền (TBW)', '320 TBW']]
  },
  8: {
    description: 'Samsung 980 1TB là dòng ổ cứng SSD NVMe cao cấp nổi bật với độ ổn định lâu dài và hiệu suất duy trì bền bỉ ngay cả khi xử lý các tệp dữ liệu dung lượng lớn. Dù sử dụng giao tiếp PCIe 3.0, công nghệ Intelligent TurboWrite 2.0 và bộ điều khiển độc quyền của Samsung giúp ổ cứng đạt tốc độ đọc ghi chạm ngưỡng tối đa của chuẩn kết nối, đi kèm độ bền lên tới 600 TBW.',
    specs: [['Danh mục', 'Ổ cứng SSD'], ['Dung lượng', '1TB'], ['Chuẩn kích thước', 'M.2 2280'], ['Giao tiếp', 'PCIe 3.0 x4 NVMe 1.4'], ['Tốc độ đọc', 'Lên đến 3.500 MB/s'], ['Tốc độ ghi', 'Lên đến 3.000 MB/s'], ['Độ bền (TBW)', '600 TBW']]
  }
};

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
const initialCategory = new URLSearchParams(location.search).get('category');
let category = ['CPU', 'GPU', 'RAM', 'SSD'].includes(initialCategory) ? initialCategory : 'all';
let previousFocus = null;
let cart = {};
try {
  const saved = JSON.parse(localStorage.getItem('tin-pc-cart') || '{}');
  if (saved && typeof saved === 'object' && !Array.isArray(saved)) cart = saved;
} catch (_) { /* The demo still works when storage is unavailable. */ }
function art(type) {
  if (type === 'CPU') return `<svg viewBox="0 0 240 180" aria-hidden="true"><g transform="translate(47 16) rotate(-8 72 72)"><rect x="5" y="5" width="140" height="140" rx="7" fill="#343f3a"/><rect x="13" y="13" width="124" height="124" rx="3" fill="#b6c5b4"/><rect x="21" y="21" width="108" height="108" rx="5" fill="#dce1d5"/><rect x="29" y="29" width="92" height="92" rx="3" fill="#a8b2a9"/><path d="M45 49h60M45 57h60M45 93h38" stroke="#89958e" stroke-width="3"/><text x="75" y="82" text-anchor="middle" fill="#3c4b44" font-size="18" font-weight="800" font-family="sans-serif">CPU</text></g></svg>`;
  if (type === 'GPU') return `<svg viewBox="0 0 240 180" aria-hidden="true"><g transform="translate(16 39) rotate(-8 105 50)"><rect x="3" y="10" width="205" height="87" rx="10" fill="#222e2b"/><path d="M12 20h187v65H12z" fill="#3c4d47"/><circle cx="58" cy="53" r="31" fill="#1a2522"/><circle cx="157" cy="53" r="31" fill="#1a2522"/><g fill="none" stroke="#91a79c" stroke-width="5"><circle cx="58" cy="53" r="23"/><circle cx="157" cy="53" r="23"/></g><g stroke="#91a79c" stroke-width="4"><path d="M58 29v48M34 53h48M41 36l34 34M75 36L41 70M157 29v48M133 53h48M140 36l34 34M174 36l-34 34"/></g><path d="M36 97h120v9H36z" fill="#c7a65e"/></g></svg>`;
  if (type === 'RAM') return `<svg viewBox="0 0 240 180" aria-hidden="true"><g transform="translate(20 49) rotate(-10 100 40)"><path d="M3 5h194v66H3z" fill="#2a3732"/><path d="M12 13h176v44H12z" fill="#596e62"/><path d="M18 20h164M18 27h164" stroke="#9bb1a2" stroke-width="3"/><path d="M15 71h170v9H15z" fill="#c9ae6b"/><path d="M28 71v9m12-9v9m12-9v9m12-9v9m12-9v9m12-9v9m12-9v9m12-9v9m12-9v9m12-9v9m12-9v9m12-9v9m12-9v9" stroke="#4b5548" stroke-width="2"/><text x="100" y="49" text-anchor="middle" fill="#e3e9df" font-size="13" font-weight="800" font-family="sans-serif">MEMORY / DDR4</text></g></svg>`;
  return `<svg viewBox="0 0 240 180" aria-hidden="true"><g transform="translate(23 53) rotate(-10 95 32)"><rect x="0" y="0" width="190" height="64" rx="4" fill="#344a3d"/><rect x="13" y="8" width="146" height="48" fill="#26352e"/><rect x="25" y="15" width="40" height="34" fill="#63776c"/><rect x="74" y="15" width="40" height="34" fill="#63776c"/><rect x="123" y="15" width="26" height="34" fill="#63776c"/><path d="M167 4h23v56h-23z" fill="#c6ab66"/><path d="M171 4v56m6-56v56m6-56v56" stroke="#766b42" stroke-width="2"/><text x="95" y="38" text-anchor="middle" fill="#edf2e9" font-size="12" font-weight="800" font-family="sans-serif">NVMe SSD</text></g></svg>`;
}
function renderProducts() {
  if (!grid || !search) return;
  const query = search.value.trim().toLocaleLowerCase('vi');
  const filtered = products.filter(p => (category === 'all' || p.category === category) && `${p.name} ${p.label} ${p.spec}`.toLocaleLowerCase('vi').includes(query));
  grid.innerHTML = filtered.map(p => `<article class="product-card"><div class="product-image ${p.tone}">${p.badge ? `<span class="product-badge">✳ ${p.badge}</span>` : ''}${p.image ? `<img src="${p.image}" alt="" loading="lazy">` : art(p.category)}<span class="product-index">TIN / 0${p.id}</span></div><div class="product-info"><p class="product-category">${p.label}</p><h2 class="product-name"><a class="product-link" href="product.html?id=${p.id}">${p.name}</a></h2><p class="product-spec">${p.spec}</p><div class="product-bottom"><strong class="product-price">${formatPrice(p.price)}</strong><button class="add-button" type="button" data-add="${p.id}" aria-label="Thêm ${p.name} vào giỏ hàng">+</button></div></div></article>`).join('');
  document.querySelector('#product-count').textContent = `${String(filtered.length).padStart(2, '0')} SẢN PHẨM`;
  document.querySelector('#empty-state').hidden = filtered.length > 0;
  document.querySelectorAll('.category-tab').forEach(tab => {
    const active = tab.dataset.category === category;
    tab.classList.toggle('is-active', active);
    tab.setAttribute('aria-pressed', String(active));
  });
}
function renderProductDetail() {
  const container = document.querySelector('#product-detail');
  if (!container) return;
  const id = new URLSearchParams(location.search).get('id');
  const product = products.find(p => String(p.id) === id);
  if (!product || !productDetails[product.id]) {
    document.querySelector('#product-breadcrumb').textContent = 'Không tìm thấy';
    container.innerHTML = '<div class="detail-not-found"><h1>Không tìm thấy sản phẩm.</h1><p>Sản phẩm này không tồn tại hoặc đường dẫn không chính xác.</p><a class="button button-primary" href="products.html">Xem tất cả sản phẩm ↗</a></div>';
    return;
  }
  const detail = productDetails[product.id];
  document.title = `${product.name} — MAT UY TIN PC`;
  document.querySelector('#product-breadcrumb').textContent = product.name;
  container.innerHTML = `<div class="product-detail"><div class="detail-image ${product.tone}"><img src="${product.image}" alt="${product.name}"></div><div class="detail-copy"><p class="section-kicker">${product.label}</p><h1>${product.name}</h1><p class="detail-spec">${product.spec}</p><p class="detail-price">${formatPrice(product.price)}</p><p class="detail-description">${detail.description}</p><div class="detail-actions"><button class="button button-dark" type="button" data-add="${product.id}">Thêm vào giỏ hàng <span>+</span></button><button class="button button-primary" type="button" data-buy="${product.id}">Mua ngay <span>↗</span></button></div><p class="demo-note">* Sản phẩm và giá chỉ mang tính minh họa. Mua hàng là trải nghiệm thử.</p></div></div><div class="specs-section"><div><p class="section-kicker">CHI TIẾT SẢN PHẨM</p><h2>Thông số kỹ thuật</h2></div><div class="specs-table-wrap"><table class="specs-table"><caption class="visually-hidden">Thông số kỹ thuật của ${product.name}</caption><tbody>${detail.specs.map(([name, value]) => `<tr><th scope="row">${name}</th><td>${value}</td></tr>`).join('')}</tbody></table></div></div>`;
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
function openCart() {
  previousFocus = document.activeElement;
  showCartScreen();
  overlay.hidden = false;
  drawer.classList.add('is-open');
  overlay.classList.add('is-open');
  drawer.setAttribute('aria-hidden', 'false');
  document.body.classList.add('cart-open');
  drawer.querySelector('.close-cart').focus();
}
function closeCart() {
  drawer.classList.remove('is-open');
  overlay.classList.remove('is-open');
  overlay.hidden = true;
  drawer.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('cart-open');
  showCartScreen();
  if (previousFocus && previousFocus.isConnected) previousFocus.focus();
}
function startCheckout() {
  if (checkoutButton.disabled) return;
  cartItems.hidden = true;
  cartSummary.hidden = true;
  checkoutSuccess.hidden = true;
  checkoutForm.hidden = false;
  document.querySelector('#cart-title').textContent = 'Đặt hàng thử.';
  document.querySelector('#checkout-total').textContent = document.querySelector('#cart-total').textContent;
  checkoutForm.querySelector('input').focus();
}
document.querySelectorAll('.category-tab').forEach(button => button.addEventListener('click', () => {
  category = button.dataset.category;
  const url = new URL(location.href);
  if (category === 'all') url.searchParams.delete('category');
  else url.searchParams.set('category', category);
  history.replaceState(null, '', url);
  renderProducts();
}));
if (search) search.addEventListener('input', renderProducts);
document.addEventListener('click', event => {
  const button = event.target.closest('[data-add], [data-buy]');
  if (!button) return;
  const id = button.dataset.add || button.dataset.buy;
  if (!products.some(p => String(p.id) === id)) return;
  cart[id] = (Number.isInteger(cart[id]) && cart[id] > 0 ? cart[id] : 0) + 1;
  renderCart();
  openCart();
  if (button.dataset.buy) startCheckout();
});
cartItems.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;
  const id = button.dataset.increase || button.dataset.decrease || button.dataset.remove;
  if (button.dataset.increase) cart[id]++;
  else if (button.dataset.decrease) { cart[id]--; if (cart[id] <= 0) delete cart[id]; }
  else delete cart[id];
  renderCart();
});
document.querySelector('.cart-trigger').addEventListener('click', openCart);
document.querySelector('.close-cart').addEventListener('click', closeCart);
document.querySelector('.continue-shopping').addEventListener('click', closeCart);
checkoutButton.addEventListener('click', startCheckout);
document.querySelector('.checkout-back').addEventListener('click', () => { showCartScreen(); checkoutButton.focus(); });
checkoutForm.addEventListener('submit', event => {
  event.preventDefault();
  const payment = checkoutForm.querySelector('input[name="payment"]:checked');
  if (!payment || !products.some(p => Number.isInteger(cart[p.id]) && cart[p.id] > 0)) return;
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
document.addEventListener('keydown', event => {
  if (!drawer.classList.contains('is-open')) return;
  if (event.key === 'Escape') { closeCart(); return; }
  if (event.key !== 'Tab') return;
  const controls = [...drawer.querySelectorAll('button:not([disabled]), input:not([disabled]), a[href]')].filter(el => el.getClientRects().length);
  if (!controls.length) return;
  if (event.shiftKey && document.activeElement === controls[0]) { event.preventDefault(); controls[controls.length - 1].focus(); }
  else if (!event.shiftKey && document.activeElement === controls[controls.length - 1]) { event.preventDefault(); controls[0].focus(); }
});
renderProducts();
renderProductDetail();
renderCart();
