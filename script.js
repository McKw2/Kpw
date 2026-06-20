(function () {
  "use strict";

  const root = document.documentElement;
  const THEME_KEY = "kpw-theme";

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    const toggle = document.getElementById("themeToggle");
    if (toggle) toggle.setAttribute("aria-pressed", String(theme === "dark"));
  }

  function initialTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "dark" || saved === "light") return saved;
    const prefersDark =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  }

  applyTheme(initialTheme());

  document.addEventListener("DOMContentLoaded", () => {
    // Theme toggle
    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        const current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
        const next = current === "dark" ? "light" : "dark";
        applyTheme(next);
        try {
          localStorage.setItem(THEME_KEY, next);
        } catch (_) {
          // ignore storage errors (private mode, etc.)
        }
      });
    }

    // Mobile nav
    const menuToggle = document.getElementById("menuToggle");
    const mobileNav = document.getElementById("mobileNav");
    if (menuToggle && mobileNav) {
      const closeMenu = () => {
        mobileNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open menu");
      };

      menuToggle.addEventListener("click", () => {
        const open = mobileNav.classList.toggle("is-open");
        menuToggle.setAttribute("aria-expanded", String(open));
        menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      });

      mobileNav
        .querySelectorAll("a")
        .forEach((a) => a.addEventListener("click", closeMenu));

      const desktopMQ = window.matchMedia("(min-width: 721px)");
      const onChange = (e) => {
        if (e.matches) closeMenu();
      };
      if (desktopMQ.addEventListener) {
        desktopMQ.addEventListener("change", onChange);
      } else if (desktopMQ.addListener) {
        desktopMQ.addListener(onChange);
      }
    }

    // Current year
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    // Reveal on scroll
    const revealTargets = document.querySelectorAll(
      ".section, .hero-inner, .card, .posts li"
    );
    revealTargets.forEach((el) => el.classList.add("reveal"));

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
      );
      revealTargets.forEach((el) => io.observe(el));
    } else {
      revealTargets.forEach((el) => el.classList.add("is-visible"));
    }
  });
})();
