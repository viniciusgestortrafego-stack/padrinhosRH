document.getElementById('year').textContent = new Date().getFullYear();

const heroVideo = document.querySelector('.hero-video video');
if (heroVideo && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  heroVideo.pause();
  heroVideo.removeAttribute('autoplay');
}
