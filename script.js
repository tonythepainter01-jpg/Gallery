document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      const action = form.getAttribute("action") || "";
      if (action.includes("YOUR-EMAIL-HERE")) {
        event.preventDefault();
        alert("Before this form can send, replace YOUR-EMAIL-HERE in the HTML file with the email address that should receive requests and testimonials.");
      }
    });
  });
});
