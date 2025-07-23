window.addEventListener('scroll', function () {
  parallaxScroll();
  revealSections();
  animateFloatingImages();
});

function animateFloatingImages() {
  const scrollY = window.scrollY;
  document.querySelectorAll('.floating-img').forEach((img, index) => {
    const offset = scrollY * (0.05 + index * 0.01);
    img.style.transform = `translateY(${offset}px)`;
  });
}
