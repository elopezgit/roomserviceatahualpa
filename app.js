// ─── ESTADO DE LA APLICACIÓN ───────────────────────────────────────
let cart = {};                  // Estructura: { id_producto: cantidad }
let currentCat = 'todos';       // Categoría gastronómica activa
let toastTimer;
let heroSlideIndex = 0;

// ─── ETIQUETAS DE TAGS PREMIUM ─────────────────────────────────────
function tagLabel(t) {
  const map = {
    'exclusivo': '⭐ Exclusivo',
    'completo': '🍽️ Completo',
    'saludable': '🍃 Saludable',
    'fit': '🥑 Fit',
    'recomendado': '🏆 Recomendado',
    'clasico': '☕ Clásico',
    'relajante': '🫖 Relajante',
    'tucumano': '🇦🇷 Regional Tucumano',
    'imperdible': '🔥 Imperdible',
    'tradicional': '🌽 Tradicional',
    'vegetariano': '🌿 Vegetariano',
    'gourmet': '🍷 Gourmet',
    'destacado': '✨ Destacado',
    'braseado': '🔥 Braseado lentamente',
    'casero': '🍝 Casero',
    'pasta-fresca': '🍝 Pasta Fresca',
    'sabor-unico': ' Sandwich Gourmet',
    'abundante': '🍽️ Abundante',
    'para-compartir': '👥 Para Compartir',
    'premium': '⭐ Premium',
    'favorito': '❤️ Favorito',
    'chocolate': '🍫 Puro Chocolate',
    'regional-tucumano': '🇦🇷 Autóctono',
    'refrescante': '🍋 Refrescante',
    'natural': '🌿 Natural',
    'hidratante': '💧 Hidratante',
    'de-autor': '🍸 De Autor',
    'seleccion-valles': '🍷 Valles Calchaquíes',
    'argentino': '🇦🇷 Argentino'
  };
  return map[t] || t;
}

// ─── FORMATEO DE PRECIO (MONEDA ARGENTINA) ──────────────────────────
function formatPrice(n) {
  return '$' + n.toLocaleString('es-AR');
}

// ─── CONTROL DE IMÁGENES GOURMET CON SKELETON ─────────────────────
function photoHTML(src, emoji, alt = '') {
  const hasImage = src && src.trim() !== '';
  if (!hasImage) {
    return `<div class="item-photo-fallback show">${emoji}</div>`;
  }
  return `
    <div class="img-skeleton"></div>
    <img
      src="${src}"
      alt="${alt}"
      loading="lazy"
      onload="this.previousElementSibling.remove()"
      onerror="this.previousElementSibling.remove(); this.style.display='none'; this.nextElementSibling.style.opacity='1';"
    >
    <div class="item-photo-fallback" style="opacity:0">${emoji}</div>
  `;
}

// ─── GENERADOR DE CÓDIGO DE ORDEN ROOM SERVICE ────────────────────
function generateOrderId() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 4; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `#RS-${code}`;
}

// ─── CARRUSEL AUTOMÁTICO DE HERO (IMÁGENES DEL HOTEL) ──────────────
function initHeroCarousel() {
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length <= 1) return;
  
  setInterval(() => {
    slides[heroSlideIndex].classList.remove('active');
    heroSlideIndex = (heroSlideIndex + 1) % slides.length;
    slides[heroSlideIndex].classList.add('active');
  }, 6000); // Cambia cada 6 segundos de forma cinematográfica
}

// ─── PERSISTENCIA DE DATOS DEL HUÉSPED (LOCAL STORAGE) ──────────────
function saveClientData() {
  const habitacion = document.getElementById('fHabitacion') ? document.getElementById('fHabitacion').value.trim() : '';
  const nombre = document.getElementById('fNombre') ? document.getElementById('fNombre').value.trim() : '';
  const apellido = document.getElementById('fApellido') ? document.getElementById('fApellido').value.trim() : '';
  const email = document.getElementById('fEmail') ? document.getElementById('fEmail').value.trim() : '';
  const tel = document.getElementById('fTel') ? document.getElementById('fTel').value.trim() : '';
  
  localStorage.setItem('rs_habitacion', habitacion);
  localStorage.setItem('rs_nombre', nombre);
  localStorage.setItem('rs_apellido', apellido);
  localStorage.setItem('rs_email', email);
  localStorage.setItem('rs_tel', tel);
}

function loadClientData() {
  const habitacion = localStorage.getItem('rs_habitacion') || '';
  const nombre = localStorage.getItem('rs_nombre') || '';
  const apellido = localStorage.getItem('rs_apellido') || '';
  const email = localStorage.getItem('rs_email') || '';
  const tel = localStorage.getItem('rs_tel') || '';
  
  if (document.getElementById('fHabitacion')) document.getElementById('fHabitacion').value = habitacion;
  if (document.getElementById('fNombre')) document.getElementById('fNombre').value = nombre;
  if (document.getElementById('fApellido')) document.getElementById('fApellido').value = apellido;
  if (document.getElementById('fEmail')) document.getElementById('fEmail').value = email;
  if (document.getElementById('fTel')) document.getElementById('fTel').value = tel;

  updateWalletDisplay();
}

function updateWalletDisplay() {
  const habitacion = document.getElementById('fHabitacion') ? document.getElementById('fHabitacion').value.trim() : '';
  const nombre = document.getElementById('fNombre') ? document.getElementById('fNombre').value.trim() : '';
  const apellido = document.getElementById('fApellido') ? document.getElementById('fApellido').value.trim() : '';

  const roomDisplay = document.getElementById('walletRoomDisplay');
  const guestDisplay = document.getElementById('walletGuestDisplay');

  if (roomDisplay) {
    roomDisplay.textContent = habitacion ? `Habitación: ${habitacion}` : 'Habitación: --';
  }
  if (guestDisplay) {
    guestDisplay.textContent = (nombre || apellido) ? `${nombre} ${apellido}` : 'Huésped Distinguido';
  }
}

function saveLastOrder() {
  localStorage.setItem('rs_last_cart', JSON.stringify(cart));
}

function checkLastOrderHistory() {
  const lastCartStr = localStorage.getItem('rs_last_cart');
  const banner = document.getElementById('historyBanner');
  if (lastCartStr && banner) {
    try {
      const lastCart = JSON.parse(lastCartStr);
      const keys = Object.keys(lastCart);
      if (keys.length > 0) {
        let descItems = [];
        keys.slice(0, 3).forEach(key => {
          const item = MENU.find(i => i.id === parseInt(key));
          if (item) {
            descItems.push(item.name);
          }
        });
        if (keys.length > 3) descItems.push('y otros platos...');
        
        const descEl = document.getElementById('historyOrderDesc');
        if (descEl) descEl.textContent = descItems.join(', ');
        banner.style.display = 'flex';
      } else {
        banner.style.display = 'none';
      }
    } catch (e) {
      banner.style.display = 'none';
    }
  } else if (banner) {
    banner.style.display = 'none';
  }
}

function loadLastOrder(event) {
  if (event) event.stopPropagation();
  const lastCartStr = localStorage.getItem('rs_last_cart');
  if (lastCartStr) {
    try {
      cart = JSON.parse(lastCartStr);
      // Actualizar toda la interfaz gastronómica
      renderMenu(currentCat === 'todos' ? MENU : MENU.filter(i => i.cat === currentCat));
      updateCartBadge();
      showToast('🛎️ ¡Último pedido gourmet cargado al carrito!');
      document.getElementById('historyBanner').style.display = 'none';
      openCart();
    } catch (e) {
      showToast('⚠️ Error al recuperar el pedido anterior');
    }
  }
}

// ─── HORARIOS DE COCINA REALTIME ──────────────────────────────────
function checkStoreSchedule() {
  const now = new Date();
  const hour = now.getHours();
  
  // Abierto de 07:00 AM a 01:30 AM del día siguiente para Room Service premium
  const isOpen = (hour >= 7 || hour < 2);
  
  const label = document.getElementById('storeStatusText');
  const indicator = document.querySelector('.status-indicator-dot');
  if (label && indicator) {
    if (isOpen) {
      indicator.className = 'status-indicator-dot open';
      label.textContent = 'Servicio Disponible · Cocina Abierta';
    } else {
      indicator.className = 'status-indicator-dot closed';
      label.textContent = 'Cocina Cerrada · Disponible desde las 07:00hs';
    }
  }
  
  const waBtn = document.querySelector('.wa-btn');
  if (waBtn) {
    if (isOpen) {
      waBtn.innerHTML = '<span class="wa-icon">🛎️</span> Confirmar y Enviar Pedido a Cocina';
    } else {
      waBtn.innerHTML = '<span class="wa-icon">📅</span> Agendar Pedido para la Apertura';
    }
  }
  
  return isOpen;
}

// ─── RENDERIZADO DEL MENÚ GASTRONÓMICO ─────────────────────────────
function renderMenu(items) {
  const list = document.getElementById('menuList');
  if (!list) return;
  list.innerHTML = '';

  items.forEach(item => {
    const qty = cart[item.id] || 0;
    const inCart = qty > 0;

    // Controles interactivos
    const controls = inCart
      ? `<button class="qty-btn" onclick="changeQty(${item.id},-1,event)">−</button>
         <div class="qty-num" id="qn-${item.id}">${qty}</div>
         <button class="qty-btn" onclick="changeQty(${item.id},1,event)">+</button>`
      : `<button class="qty-add-btn" onclick="addItem(${item.id},event)">+</button>`;

    const tags = item.tags
      ? item.tags.map(t => `<div class="item-tag">${tagLabel(t)}</div>`).join('')
      : '';

    list.innerHTML += `
      <div class="menu-item ${inCart ? 'in-cart' : ''}" id="mi-${item.id}">
        <div class="item-photo">
          ${photoHTML(item.img, item.emoji, item.name)}
        </div>
        <div class="item-info">
          <div>
            <div class="item-name">${item.name}</div>
            <div class="item-desc">${item.desc}</div>
            <div class="item-tags">${tags}</div>
          </div>
          <div class="item-footer">
            <div class="item-price">${formatPrice(item.price)}</div>
            <div class="item-controls" id="ctrl-${item.id}">${controls}</div>
          </div>
        </div>
      </div>`;
  });
}

// ─── FILTRADO POR CATEGORÍAS GOURMET ───────────────────────────────
function filterCat(cat) {
  currentCat = cat;

  document.querySelectorAll('.cat-pill').forEach(p => {
    p.classList.toggle('active', p.dataset.cat === cat);
  });

  const items = cat === 'todos' ? MENU : MENU.filter(i => i.cat === cat);
  const labels = {
    todos: '🍽️ Selección Completa',
    desayunos: '🥐 Desayunos de la Yunga',
    cafeteria: '☕ Cafetería de Especialidad',
    regionales: '🥟 Platos Regionales Tucumanos',
    carnes: '🥩 Carnes Premium de la Hostería',
    pastas: '🍝 Pastas Caseras y Salsas',
    minutas: ' Sandwichería y Minutas Deluxe',
    snacks: '🧀 Tablas y Snacks Exclusivos',
    postres: '🍮 Postres Artesanales Regionales',
    bebidas: '🍋 Bebidas y Jugos Naturales',
    tragos: '🍸 Tragos de Autor y Vinos'
  };

  const titleEl = document.getElementById('menuTitle');
  if (titleEl) titleEl.textContent = labels[cat] || '🍽️ Menú';
  renderMenu(items);
}

// ─── FILTRADO POR BÚSQUEDA ─────────────────────────────────────────
function filterMenu() {
  const q = document.getElementById('searchInput').value.toLowerCase();
  const titleEl = document.getElementById('menuTitle');
  if (!q) { 
    filterCat(currentCat); 
    return; 
  }

  const items = MENU.filter(i =>
    i.name.toLowerCase().includes(q) || 
    i.desc.toLowerCase().includes(q) || 
    (i.ingredients && i.ingredients.toLowerCase().includes(q))
  );
  if (titleEl) titleEl.textContent = `🔍 Resultados para "${q}"`;
  renderMenu(items);
}

// ─── ACCIONES DEL CARRITO DE COMPRAS ───────────────────────────────
function addItem(id, event) {
  if (event) event.stopPropagation();

  const item = MENU.find(i => i.id === id);
  if (!item) return;

  cart[id] = (cart[id] || 0) + 1;

  updateAll(id);
  spawnParticle(id);
  showToast(`🛎️ ${item.name} agregado a la habitación`);
}

function changeQty(id, delta, event) {
  if (event) event.stopPropagation();

  cart[id] = Math.max(0, (cart[id] || 0) + delta);
  if (cart[id] === 0) delete cart[id];

  updateAll(id);
}

function changeQtyByKey(id, delta) {
  cart[id] = Math.max(0, (cart[id] || 0) + delta);
  if (cart[id] === 0) delete cart[id];

  updateAll(parseInt(id));
}

function updateAll(changedId) {
  const qty = cart[changedId] || 0;
  const ctrl = document.getElementById('ctrl-' + changedId);
  const mi = document.getElementById('mi-' + changedId);

  if (ctrl && mi) {
    if (qty > 0) {
      ctrl.innerHTML = `
        <button class="qty-btn" onclick="changeQty(${changedId},-1,event)">−</button>
        <div class="qty-num" id="qn-${changedId}">${qty}</div>
        <button class="qty-btn" onclick="changeQty(${changedId},1,event)">+</button>`;
      mi.classList.add('in-cart');
    } else {
      ctrl.innerHTML = `<button class="qty-add-btn" onclick="addItem(${changedId},event)">+</button>`;
      mi.classList.remove('in-cart');
    }
  }

  // Actualizar indicadores visuales de compra
  updateCartBadge();

  // Si el panel de Room Service está desplegado, refrescarlo
  if (document.getElementById('cartPanel').classList.contains('open')) {
    renderCartPanel();
  }
}

function getTotals() {
  let count = 0, total = 0;
  Object.entries(cart).forEach(([idStr, qty]) => {
    const item = MENU.find(i => i.id === parseInt(idStr));
    if (item) {
      count += qty;
      total += item.price * qty;
    }
  });
  return { count, total };
}

function updateCartBadge() {
  const { count, total } = getTotals();

  const cartCountEl = document.getElementById('cartCount');
  const btnCountEl = document.getElementById('btnCount');
  const btnTotalEl = document.getElementById('btnTotal');
  const orderBtnEl = document.getElementById('orderBtn');

  if (cartCountEl) cartCountEl.textContent = count;
  if (btnCountEl) btnCountEl.textContent = count;
  if (btnTotalEl) btnTotalEl.textContent = formatPrice(total);
  if (orderBtnEl) orderBtnEl.classList.toggle('active', count > 0);

  if (cartCountEl) {
    cartCountEl.classList.remove('bump');
    void cartCountEl.offsetWidth;
    cartCountEl.classList.add('bump');
  }
}

// ─── DESPLIEGUE DEL PANEL DE ROOM SERVICE ──────────────────────────
function openCart() {
  document.getElementById('cartPanel').classList.add('open');
  document.getElementById('panelOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  renderCartPanel();
}

function closeCart() {
  document.getElementById('cartPanel').classList.remove('open');
  document.getElementById('panelOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function renderCartPanel() {
  const { count, total } = getTotals();
  const content = document.getElementById('cartContent');
  const form = document.getElementById('cartForm');

  if (count === 0) {
    if (content) {
      content.innerHTML = `
        <div class="cart-empty">
          <div class="cart-empty-emoji">🛎️</div>
          <div class="cart-empty-text">No ha seleccionado ningún plato aún.<br>Explore nuestra carta exclusiva.</div>
        </div>`;
    }
    if (form) form.style.display = 'none';
    return;
  }

  let rows = '<div class="cart-list">';
  Object.entries(cart).forEach(([idStr, qty]) => {
    const item = MENU.find(i => i.id === parseInt(idStr));
    if (!item) return;

    rows += `
      <div class="cart-row">
        <div class="cart-row-photo">
          ${item.img ? `<img src="${item.img}" alt="${item.name}">` : `<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:24px">${item.emoji}</div>`}
        </div>
        <div class="cart-row-info">
          <div class="cart-row-name">${item.name}</div>
          <div class="cart-row-price">${formatPrice(item.price * qty)}</div>
        </div>
        <div class="cart-row-controls">
          <button class="qty-btn" onclick="changeQtyByKey('${item.id}',-1)">−</button>
          <div class="qty-num">${qty}</div>
          <button class="qty-btn" onclick="changeQtyByKey('${item.id}',1)">+</button>
        </div>
      </div>`;
  });
  rows += '</div>';

  rows += `<div class="cart-subtotal" style="margin-top:20px"><span>Subtotal Gastronomía</span><span>${formatPrice(total)}</span></div>`;
  rows += `<div class="cart-subtotal"><span>Cargo de Servicio</span><span>Gratis (Huésped)</span></div>`;
  rows += `<div class="cart-total"><span>Total Final</span><span>${formatPrice(total)}</span></div>`;
  rows += '<div style="height:15px"></div>';

  if (content) content.innerHTML = rows;
  if (form) form.style.display = 'block';
}

// ─── ENVÍO DE PEDIDO DE ROOM SERVICE VÍA WHATSAPP ─────────────────
function sendWhatsApp() {
  const habitacion = document.getElementById('fHabitacion').value.trim();
  const nombre = document.getElementById('fNombre').value.trim();
  const apellido = document.getElementById('fApellido').value.trim();
  const email = document.getElementById('fEmail').value.trim();
  const tel = document.getElementById('fTel').value.trim();
  const nota = document.getElementById('fNota').value.trim();

  // Validación estricta y premium
  if (!habitacion) { showToast('⚠️ Por favor ingrese su número de habitación'); return; }
  if (!nombre || !apellido) { showToast('⚠️ Por favor ingrese su Nombre y Apellido'); return; }
  if (!email) { showToast('⚠️ Por favor ingrese su dirección de correo'); return; }
  if (!tel) { showToast('⚠️ Por favor ingrese su número celular'); return; }

  const { total } = getTotals();
  const orderId = generateOrderId();

  // Armado premium del mensaje de Room Service
  let msg = `🛎️ *SOLICITUD DE ROOM SERVICE* 🛎️\n`;
  msg += `*Hostería Municipal Atahualpa Yupanqui*\n`;
  msg += `───────────────────────────\n\n`;
  msg += `🚪 *Habitación:* ${habitacion.toUpperCase()}\n`;
  msg += `👤 *Huésped:* ${nombre} ${apellido}\n`;
  msg += `📞 *Celular:* ${tel}\n`;
  msg += `📧 *Email:* ${email}\n\n`;
  
  msg += `🛒 *Detalle de la Orden (${orderId}):*\n`;

  Object.entries(cart).forEach(([idStr, qty]) => {
    const item = MENU.find(i => i.id === parseInt(idStr));
    if (item) {
      msg += `  • ${qty}x ${item.emoji} _${item.name}_ — ${formatPrice(item.price * qty)}\n`;
    }
  });

  msg += `\n💵 *TOTAL FINAL A ABONAR: ${formatPrice(total)}*\n`;
  msg += `_(Se cargará directamente a su cuenta de habitación)_\n`;
  
  if (nota) {
    msg += `\n📝 *Indicaciones Especiales:* ${nota}\n`;
  }
  
  msg += `\n🛎️ _Pedido realizado desde el portal digital de Room Service_`;

  // Guardar datos en el navegador para agilizar futuras órdenes del huésped
  saveClientData();
  saveLastOrder();

  // Redirección
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  showToast(`📲 Redirigiendo a Room Service de Hostería...`);
  
  // Actualizar historial
  setTimeout(checkLastOrderHistory, 1000);
}

// ─── TOAST NOTIFICATION PREMIUM ────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2500);
}

// ─── ANIMACIÓN DE PARTICULAS (Micro-animations) ─────────────────────
function spawnParticle(id) {
  const ctrl = document.getElementById('ctrl-' + id);
  if (!ctrl) return;
  
  const rect = ctrl.getBoundingClientRect();
  const p = document.createElement('div');
  p.className = 'particle';
  
  const item = MENU.find(i => i.id === id);
  p.textContent = item ? item.emoji : '🛎️';
  
  p.style.left = (rect.left + rect.width / 2 - 12) + 'px';
  p.style.top = (rect.top + window.scrollY) + 'px';
  document.body.appendChild(p);
  setTimeout(() => p.remove(), 800);
}

// ─── OBSERVERS DE INTERSECCIÓN (FADE-IN AL HACER SCROLL) ───────────
function initScrollObserver() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.fade-section').forEach(el => observer.observe(el));
}

// ─── INICIALIZACIÓN ────────────────────────────────────────────────
function init() {
  // Animación del Splash Screen
  const splash = document.getElementById('splash');
  if (splash) {
    setTimeout(() => {
      splash.classList.add('fade-out');
    }, 2200); // 2.2 segundos para una entrada cinematográfica
  }

  // Inicializar componentes
  renderMenu(MENU);
  initHeroCarousel();
  initScrollObserver();
  loadClientData();
  checkLastOrderHistory();
  checkStoreSchedule();
  
  // Enlazar eventos de entrada de la billetera en tiempo real (Suite Card)
  const inputsToBind = ['fHabitacion', 'fNombre', 'fApellido'];
  inputsToBind.forEach(id => {
    const input = document.getElementById(id);
    if (input) {
      input.addEventListener('input', updateWalletDisplay);
      input.addEventListener('keyup', updateWalletDisplay);
    }
  });

  // Verificar horario de cocina cada 30 segundos
  setInterval(checkStoreSchedule, 30000);
}

// Iniciar aplicación al cargar
window.addEventListener('DOMContentLoaded', init);