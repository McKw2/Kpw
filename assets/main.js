(function () {
  "use strict";

  var STORAGE_KEY = "kpw-theme";
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", theme === "dark" ? "#0b0d12" : "#fbfbfd");
    }
  }

  function preferredTheme() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "dark" || stored === "light") return stored;
    } catch (e) {
      // ignore storage errors (private mode, etc.)
    }
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      return "light";
    }
    return "dark";
  }

  applyTheme(preferredTheme());

  if (toggle) {
    toggle.addEventListener("click", function () {
      var next =
        root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (e) {
        // ignore
      }
    });
  }

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Smooth in-page links also close any potential focus rings cleanly.
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href");
      if (!id || id === "#") return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", id);
    });
  });
})();
