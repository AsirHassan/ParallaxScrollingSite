window.addEventListener('scroll', function () {
  parallaxScroll();
  revealSections();
});

window.addEventListener('load', function () {
  revealSections();
});

function parallaxScroll() {
  const scrolled = window.scrollY;

  const overlays = document.querySelectorAll('.overlay');
  overlays.forEach((overlay, i) => {
    overlay.style.transform = `translateY(${scrolled * 0.1}px)`;
  });
}
