// ── MOBILE MENU ──
const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
burgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});
function closeMobile() {
    mobileMenu.classList.remove('open');
}

// ── CAROUSEL ──
const track = document.getElementById('carouselTrack');
const wrapper = document.getElementById('carouselWrapper');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('carouselDots');
const cards = track.querySelectorAll('.book-card');
const totalCards = cards.length;

let currentIndex = 0;
let autoTimer = null;
let isDragging = false;
let dragStartX = 0;
let dragDelta = 0;

function getVisibleCount() {
    const w = window.innerWidth;
    if (w <= 768) return 1;
    if (w <= 1024) return 3;
    return 4;
}

function getCardWidth() {
    return cards[0].offsetWidth;
}

function getTotalSlides() {
    return totalCards - getVisibleCount() + 1;
}

function clampIndex(idx) {
    const maxIdx = Math.max(0, totalCards - getVisibleCount());
    return Math.max(0, Math.min(idx, maxIdx));
}

function buildDots() {
    dotsContainer.innerHTML = '';
    const totalSlides = getTotalSlides();
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot' + (i === currentIndex ? ' active' : '');
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
    }
}

function updateDots() {
    const dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
}

function goTo(idx, animate = true) {
    currentIndex = clampIndex(idx);
    const cardWidth = getCardWidth();
    const gap = 20;
    const offset = currentIndex * (cardWidth + gap);
    track.style.transition = animate ? 'transform .5s cubic-bezier(.4,0,.2,1)' : 'none';
    track.style.transform = `translateX(-${offset}px)`;
    updateDots();
}

function next() {
    const maxIdx = Math.max(0, totalCards - getVisibleCount());
    goTo(currentIndex >= maxIdx ? 0 : currentIndex + 1);
}

function prev() {
    const maxIdx = Math.max(0, totalCards - getVisibleCount());
    goTo(currentIndex <= 0 ? maxIdx : currentIndex - 1);
}

function startAuto() {
    stopAuto();
    autoTimer = setInterval(next, 3000);
}

function stopAuto() {
    if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
}

function resetAuto() {
    stopAuto();
    startAuto();
}

prevBtn.addEventListener('click', () => { prev(); resetAuto(); });
nextBtn.addEventListener('click', () => { next(); resetAuto(); });

// Keyboard arrows
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { prev(); resetAuto(); }
    if (e.key === 'ArrowRight') { next(); resetAuto(); }
});

// Touch/swipe support
wrapper.addEventListener('touchstart', (e) => {
    isDragging = true;
    dragStartX = e.touches[0].clientX;
    dragDelta = 0;
    stopAuto();
}, { passive: true });

wrapper.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    dragDelta = e.touches[0].clientX - dragStartX;
}, { passive: true });

wrapper.addEventListener('touchend', () => {
    if (!isDragging) return;
    isDragging = false;
    if (Math.abs(dragDelta) > 50) {
        dragDelta < 0 ? next() : prev();
    }
    startAuto();
});

// Mouse drag for desktop
wrapper.addEventListener('mousedown', (e) => {
    isDragging = true;
    dragStartX = e.clientX;
    dragDelta = 0;
    stopAuto();
    e.preventDefault();
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    dragDelta = e.clientX - dragStartX;
});

document.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    if (Math.abs(dragDelta) > 60) {
        dragDelta < 0 ? next() : prev();
    }
    startAuto();
});

// Pause on hover
wrapper.addEventListener('mouseenter', stopAuto);
wrapper.addEventListener('mouseleave', startAuto);

function init() {
    buildDots();
    goTo(currentIndex, false);
}

let currentWindowWidth = window.innerWidth;

window.addEventListener('resize', () => {
    if (window.innerWidth !== currentWindowWidth) {
        currentWindowWidth = window.innerWidth;

        const maxIdx = Math.max(0, totalCards - getVisibleCount());
        if (currentIndex > maxIdx) currentIndex = maxIdx;
        init();
    }
});

init();
startAuto();

// ── NAV ACTIVE ──
const sections = document.querySelectorAll('section[id], footer[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(a => {
                a.style.color = a.getAttribute('href') === '#' + entry.target.id ? 'var(--brown)' : '';
            });
        }
    });
}, { rootMargin: '-40% 0px -40% 0px' });
sections.forEach(s => observer.observe(s));

// ── LANG BUTTONS ──
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});