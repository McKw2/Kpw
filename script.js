const yearNode = document.querySelector("#year");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const contactForm = document.querySelector(".contact-form");

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = contactForm.querySelector("button[type='submit']");
    if (button) {
      button.textContent = "Thanks! We will reach out soon.";
      button.setAttribute("disabled", "true");
    }
    contactForm.reset();
  });
}
