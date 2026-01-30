// js/darkmode.js (or inline in your pages)

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkModeToggle");

  // Safety check: if toggle doesn't exist (rare, but good practice)
  if (!toggle) {
    console.warn("Dark mode toggle button not found");
    return;
  }

  // Load saved preference from localStorage (default to light mode)
  const savedMode = localStorage.getItem("darkMode");

  if (savedMode === "enabled") {
    document.body.classList.add("dark-mode");
    toggle.textContent = "☀️"; // sun = dark mode active
  } else {
    toggle.textContent = "🌙"; // moon = light mode
  }

  // Toggle on click
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
      toggle.textContent = "☀️";
    } else {
      localStorage.setItem("darkMode", "disabled");
      toggle.textContent = "🌙";
    }
  });
});