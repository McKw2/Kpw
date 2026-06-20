const body = document.body;
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle?.querySelector("span");
const nav = document.getElementById("site-nav");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section[id]");
const currentYear = document.getElementById("year");
const headerOffset = 140;

const applyTheme = (theme) => {
  const isDark = theme === "dark";
  body.classList.toggle("dark", isDark);
  if (themeIcon) {
    themeIcon.textContent = isDark ? "☀️" : "🌙";
  }
};

const storedTheme = localStorage.getItem("theme") || "light";
applyTheme(storedTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = body.classList.contains("dark") ? "light" : "dark";
    localStorage.setItem("theme", nextTheme);
    applyTheme(nextTheme);
  });
}

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    nav.classList.toggle("open");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const targetId = link.getAttribute("href")?.replace("#", "");
    if (targetId) {
      navLinks.forEach((item) => {
        item.classList.toggle("active", item.getAttribute("href") === `#${targetId}`);
      });
    }
    nav?.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const highlightActiveSection = () => {
  let activeId = sections[0]?.id || "home";

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - headerOffset) {
      activeId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${activeId}`;
    link.classList.toggle("active", isActive);
  });
};

document.addEventListener("scroll", highlightActiveSection, { passive: true });
highlightActiveSection();

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}
