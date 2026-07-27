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

// Project tabs (general vs AI-assisted)
const tabBtns = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll("[data-tab-panel]");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.tab;

    tabBtns.forEach((b) => {
      b.classList.toggle("is-active", b === btn);
      b.setAttribute("aria-selected", b === btn ? "true" : "false");
    });

    tabPanels.forEach((panel) => {
      panel.classList.toggle("is-hidden", panel.dataset.tabPanel !== target);
    });
  });
});

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
