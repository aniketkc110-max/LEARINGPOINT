// ── Scroll-triggered card animations ──
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.dataset.index || 0) * 80;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

cards.forEach((card) => observer.observe(card));


// ── Research topic pop animation on click ──
const topics = document.querySelectorAll('.r-topic');

topics.forEach((topic) => {
  topic.addEventListener('click', () => {
    topic.style.transform = 'scale(0.95)';
    setTimeout(() => {
      topic.style.transform = '';
    }, 150);
  });
});


// ── Dynamic year in footer ──
const footerP = document.querySelector('footer p');
if (footerP) {
  const year = new Date().getFullYear();
  footerP.textContent = `© ${year} Aniket · Zero2Maker Portfolio`;
}


// ── Smooth header entrance ──
window.addEventListener('load', () => {
  document.querySelector('header').style.animationPlayState = 'running';
  document.querySelector('.intro').style.animationPlayState = 'running';
});
