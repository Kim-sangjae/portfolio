// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("is-open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("is-open"));
  });
}

// Accordion (project detail pages)
document.querySelectorAll(".accordion-trigger").forEach((trigger) => {
  const accordion = trigger.closest(".accordion");
  const panel = accordion.querySelector(".accordion-panel");

  trigger.addEventListener("click", () => {
    const isOpen = accordion.classList.contains("is-open");

    accordion.classList.toggle("is-open", !isOpen);
    panel.style.maxHeight = isOpen ? null : `${panel.scrollHeight}px`;
  });
});
