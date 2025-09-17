document.getElementById("contact-form")?.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! We will get back to you shortly.");
  this.reset();
});
