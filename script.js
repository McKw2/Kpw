const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const quoteForm = document.querySelector("[data-quote-form]");
const formNote = document.querySelector("[data-form-note]");
const year = document.querySelector("[data-year]");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

if (quoteForm && formNote) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!(quoteForm instanceof HTMLFormElement) || !quoteForm.reportValidity()) {
      return;
    }

    const data = new FormData(quoteForm);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const service = String(data.get("service") || "").trim();
    const message = String(data.get("message") || "").trim();

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Service: ${service}`,
      "",
      "Project details:",
      message,
    ].join("\n");

    const mailto = new URL("mailto:info@kpwbuild.co.uk");
    mailto.searchParams.set("subject", `Quote request from ${name || "KPW Build website"}`);
    mailto.searchParams.set("body", body);

    formNote.textContent = "Your email app is opening with the quote request ready to send.";
    formNote.classList.add("is-success");
    window.location.href = mailto.toString();
  });
}
