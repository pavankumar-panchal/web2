// Mobile nav toggle
const toggle = document.querySelector('.nav__toggle');
const menu = document.getElementById('navMenu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Portfolio filters
const filterButtons = document.querySelectorAll('.filters .chip');
const tiles = document.querySelectorAll('.portfolio__grid .tile');
filterButtons.forEach(btn => btn.addEventListener('click', () => {
  filterButtons.forEach(b => b.classList.remove('is-active'));
  btn.classList.add('is-active');
  const f = btn.getAttribute('data-filter');
  tiles.forEach(tile => {
    const cat = tile.getAttribute('data-cat');
    const show = f === 'all' || cat === f;
    tile.style.display = show ? '' : 'none';
  });
}));

// Testimonials slider
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.slider .prev');
const next = document.querySelector('.slider .next');
const dotsWrap = document.querySelector('.dots');
let current = 0;
const go = (i) => {
  slides[current].classList.remove('is-active');
  current = (i + slides.length) % slides.length;
  slides[current].classList.add('is-active');
  // dots
  dotsWrap.querySelectorAll('button').forEach((d, idx) => d.classList.toggle('is-active', idx === current));
};
if (dotsWrap) {
  slides.forEach((_, i) => {
    const b = document.createElement('button');
    b.setAttribute('aria-label', `Go to slide ${i+1}`);
    b.addEventListener('click', () => go(i));
    dotsWrap.appendChild(b);
  });
}
if (slides.length) {
  slides[0].classList.add('is-active');
}
prev?.addEventListener('click', () => go(current - 1));
next?.addEventListener('click', () => go(current + 1));

// Auto-advance every 6s
setInterval(() => go(current + 1), 6000);

// Reveal on scroll via IntersectionObserver
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      e.target.style.animationDelay = e.target.style.animationDelay || '0ms';
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Footer year
const y = document.getElementById('year');
if (y) y.textContent = String(new Date().getFullYear());
