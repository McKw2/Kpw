const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* Scroll reveal */
const revealTargets = document.querySelectorAll(
  ".section-heading, .service-grid, .project-grid, .product-grid, .timeline, .split-grid, .testimonial-grid, .faq-list, .store-strip, .contact-grid, .hero-copy, .hero-panel"
);

if ("IntersectionObserver" in window && revealTargets.length) {
  revealTargets.forEach((el) => el.classList.add("reveal"));
  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealTargets.forEach((el) => revealObserver.observe(el));
}

/* Active nav highlighting */
const navLinks = Array.from(document.querySelectorAll(".site-nav a[href^='#']"));
const sectionIds = navLinks
  .map((link) => link.getAttribute("href"))
  .filter((href) => href && href.length > 1);
const sections = sectionIds
  .map((id) => document.querySelector(id))
  .filter(Boolean);

if ("IntersectionObserver" in window && sections.length) {
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = `#${entry.target.id}`;
          navLinks.forEach((link) =>
            link.classList.toggle("active", link.getAttribute("href") === id)
          );
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );
  sections.forEach((section) => navObserver.observe(section));
}

/* Back to top */
const backToTop = document.querySelector(".back-to-top");
if (backToTop) {
  const toggleBackToTop = () => {
    const show = window.scrollY > 600;
    backToTop.classList.toggle("is-visible", show);
    backToTop.toggleAttribute("hidden", !show);
  };
  toggleBackToTop();
  window.addEventListener("scroll", toggleBackToTop, { passive: true });
}

/* Quote form validation */
const form = document.querySelector("#quote-form");
const status = document.querySelector("#form-status");

if (form) {
  const setFieldError = (field, message) => {
    const wrapper = field.closest(".field");
    const errorEl = wrapper
      ? wrapper.querySelector(`.error[data-error-for="${field.id}"]`)
      : null;
    if (wrapper) wrapper.classList.toggle("invalid", Boolean(message));
    if (errorEl) errorEl.textContent = message || "";
  };

  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const validateField = (field) => {
    const value = field.value.trim();
    if (!value) {
      setFieldError(field, "This field is required.");
      return false;
    }
    if (field.type === "email" && !isValidEmail(value)) {
      setFieldError(field, "Enter a valid email address.");
      return false;
    }
    setFieldError(field, "");
    return true;
  };

  const fields = Array.from(form.querySelectorAll("input, select, textarea"));

  fields.forEach((field) => {
    field.addEventListener("blur", () => validateField(field));
    field.addEventListener("input", () => {
      const wrapper = field.closest(".field");
      if (wrapper && wrapper.classList.contains("invalid")) {
        validateField(field);
      }
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const results = fields.map((field) => validateField(field));
    const allValid = results.every(Boolean);

    if (!allValid) {
      if (status) {
        status.textContent = "Please fix the highlighted fields and try again.";
        status.className = "form-status error-text";
      }
      const firstInvalid = form.querySelector(".field.invalid input, .field.invalid select, .field.invalid textarea");
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    const name = form.querySelector("#name").value.trim();
    if (status) {
      status.textContent = `Thanks ${name}! Your request has been prepared — we'll be in touch shortly.`;
      status.className = "form-status success";
    }
    form.reset();
    fields.forEach((field) => setFieldError(field, ""));
  });
}
