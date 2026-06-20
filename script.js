const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const themeToggle = document.querySelector(".theme-toggle");
const themeLabel = document.querySelector(".theme-toggle__label");
const navLinks = document.querySelectorAll(".site-nav a");

const storedTheme = window.localStorage.getItem("kpw-theme");
const preferredTheme =
  storedTheme ||
  (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");

applyTheme(preferredTheme);

navToggle?.addEventListener("click", () => {
  const isOpen = header?.dataset.open === "true";
  header?.setAttribute("data-open", String(!isOpen));
  navToggle.setAttribute("aria-expanded", String(!isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header?.setAttribute("data-open", "false");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

themeToggle?.addEventListener("click", () => {
  const nextTheme = document.body.dataset.theme === "light" ? "dark" : "light";
  applyTheme(nextTheme);
  window.localStorage.setItem("kpw-theme", nextTheme);
});

function applyTheme(theme) {
  document.body.dataset.theme = theme;
  themeLabel.textContent = theme === "light" ? "Dark" : "Light";
}
