// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navMenu   = document.getElementById('navLinks');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });
  // Close on outside click
  document.addEventListener('click', e => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('open');
    }
  });
}

// Active nav link based on current path
(function markActiveLink() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const lPath = new URL(link.href, location.href).pathname.replace(/\/$/, '') || '/';
    if (lPath === path) link.classList.add('active');
  });
})();

// Filter tabs
document.querySelectorAll('.filter-tabs').forEach(tabGroup => {
  tabGroup.addEventListener('click', e => {
    const tab = e.target.closest('.filter-tab');
    if (!tab) return;

    tabGroup.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const filter = tab.dataset.filter;
    const target = document.querySelector('[data-filterable]');
    if (!target) return;

    target.querySelectorAll('[data-category]').forEach(item => {
      item.style.display = (filter === 'all' || item.dataset.category === filter) ? '' : 'none';
    });
  });
});

// Lightbox for media items
document.querySelectorAll('.media-item[data-lightbox]').forEach(item => {
  item.addEventListener('click', () => openLightbox(item.dataset.lightbox, item.dataset.caption || ''));
});

function openLightbox(src, caption) {
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = `
    <div class="lightbox-inner">
      <button class="lightbox-close" aria-label="Close">&times;</button>
      <img src="${src}" alt="${caption}">
      ${caption ? `<p class="lightbox-caption">${caption}</p>` : ''}
    </div>`;
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';

  function close() {
    overlay.remove();
    document.body.style.overflow = '';
  }
  overlay.addEventListener('click', e => {
    if (e.target === overlay || e.target.closest('.lightbox-close')) close();
  });
  document.addEventListener('keydown', function handler(e) {
    if (e.key === 'Escape') { close(); document.removeEventListener('keydown', handler); }
  });
}
