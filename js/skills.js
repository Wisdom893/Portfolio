// Fade-in page
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "1";
});

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger?.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Fade-in sections on scroll
const faders = document.querySelectorAll(".fade-in");

function showFade() {
  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showFade);
showFade();
