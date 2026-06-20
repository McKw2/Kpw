/* ============================================================
   Kpw — site interactivity
   ============================================================ */
(function () {
  "use strict";

  const doc = document.documentElement;

  /* ---------- Theme toggle (persisted) ---------- */
  const themeToggle = document.getElementById("themeToggle");
  const stored = localStorage.getItem("kpw-theme");
  if (stored) {
    doc.setAttribute("data-theme", stored);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    doc.setAttribute("data-theme", "light");
  }
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const next = doc.getAttribute("data-theme") === "dark" ? "light" : "dark";
      doc.setAttribute("data-theme", next);
      localStorage.setItem("kpw-theme", next);
    });
  }

  /* ---------- Mobile nav ---------- */
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("primaryNav");
  function closeNav() {
    if (!nav) return;
    nav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
  }
  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      const open = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });
    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeNav();
    });
  }

  /* ---------- Sticky header shadow ---------- */
  const header = document.getElementById("siteHeader");
  function onScroll() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 8);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Scroll reveal ---------- */
  const revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Animated counters ---------- */
  const counters = Array.prototype.slice.call(document.querySelectorAll("[data-count]"));
  function animateCount(el) {
    const target = parseInt(el.getAttribute("data-count"), 10) || 0;
    const duration = 1400;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = String(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  if (counters.length && "IntersectionObserver" in window) {
    const co = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            co.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach(function (el) { co.observe(el); });
  }

  /* ---------- Active nav link on scroll ---------- */
  const sections = ["home", "about", "work", "skills", "contact"]
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);
  const navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));
  function setActive(id) {
    navLinks.forEach(function (link) {
      link.classList.toggle("active", link.getAttribute("href") === "#" + id);
    });
  }
  if (sections.length && "IntersectionObserver" in window) {
    const so = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach(function (s) { so.observe(s); });
  }

  /* ---------- Contact form validation ---------- */
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  function setError(field, message) {
    const wrap = field.closest(".field");
    const errEl = wrap.querySelector(".field-error");
    wrap.classList.toggle("invalid", Boolean(message));
    errEl.textContent = message || "";
  }
  function validEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = form.elements.name;
      const email = form.elements.email;
      const message = form.elements.message;
      let ok = true;

      if (!name.value.trim()) { setError(name, "Please enter your name."); ok = false; }
      else setError(name, "");

      if (!email.value.trim()) { setError(email, "Please enter your email."); ok = false; }
      else if (!validEmail(email.value.trim())) { setError(email, "Enter a valid email address."); ok = false; }
      else setError(email, "");

      if (!message.value.trim()) { setError(message, "Please enter a message."); ok = false; }
      else setError(message, "");

      if (!ok) {
        status.textContent = "";
        return;
      }
      status.textContent = "Thanks, " + name.value.trim() + "! Your message has been noted.";
      form.reset();
    });
    form.querySelectorAll("input, textarea").forEach(function (el) {
      el.addEventListener("input", function () { setError(el, ""); });
    });
  }

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
