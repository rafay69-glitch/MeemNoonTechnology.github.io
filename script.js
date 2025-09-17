// JavaScript is not required right now for menu
// But if needed in future, you can add toggle features here

// Example: Scroll to top on logo click (optional)
document.addEventListener("DOMContentLoaded", function () {
  const logo = document.querySelector(".logo");

  if (logo) {
    logo.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

