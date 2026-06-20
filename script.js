const storageKey = "kpw-theme";

const themeToggle = document.querySelector("[data-theme-toggle]");
const yearTarget = document.querySelector("[data-current-year]");

const getPreferredTheme = () => {
  const savedTheme = window.localStorage.getItem(storageKey);
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
};

const applyTheme = (theme) => {
  document.body.dataset.theme = theme;

  if (themeToggle) {
    themeToggle.textContent = theme === "dark" ? "Light mode" : "Dark mode";
  }
};

if (themeToggle) {
  applyTheme(getPreferredTheme());

  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
    window.localStorage.setItem(storageKey, nextTheme);
    applyTheme(nextTheme);
  });
}

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}
