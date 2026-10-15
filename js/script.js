document.addEventListener("DOMContentLoaded", function () {
  // Keep the page fully visible if motion is unavailable or reduced by the visitor. 
  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion && "IntersectionObserver" in window) {
    const revealTargets = document.querySelectorAll(".section-heading, .feature-card, .how-art, .steps-list .step-item, .quote-card, .plan-card, .faq-accordion, .signup-card");
    document.body.classList.add("js-motion");
    revealTargets.forEach(function (element, index) {
      element.classList.add("reveal-on-scroll");
      if (element.classList.contains("feature-card") || element.classList.contains("plan-card")) {
        element.dataset.revealDelay = String((index % 3) + 1);
      }
    });
    const revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
    revealTargets.forEach(function (element) { revealObserver.observe(element); });
  }
  const year = document.getElementById("currentYear");
  if (year) year.textContent = new Date().getFullYear();

  const feedback = document.getElementById("formFeedback");
  const emailInput = document.getElementById("emailAddress");
  const form = document.getElementById("signupForm");

  document.querySelectorAll(".plan-select").forEach(function (button) {
    button.addEventListener("click", function () {
      const selectedPlan = button.dataset.plan;
      if (feedback) {
        feedback.textContent = selectedPlan
          ? selectedPlan + " selected — connect a real sign-up or checkout flow to continue."
          : "Connect a sign-up flow to continue.";
      }
    });
  });

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const email = emailInput.value.trim();
      if (feedback) {
        feedback.textContent = "Thanks! This is a front-end demo, so " + email + " has not been saved. Connect an email service to collect sign-ups.";
      }
      form.reset();
    });
  }

  document.querySelectorAll("#mainNav .nav-link, #mainNav .nav-cta").forEach(function (link) {
    link.addEventListener("click", function () {
      const menu = document.getElementById("mainNav");
      if (menu && menu.classList.contains("show") && window.bootstrap) {
        window.bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });
});
