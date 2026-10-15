document.addEventListener("DOMContentLoaded", function () {
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
