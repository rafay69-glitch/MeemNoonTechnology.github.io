// Smooth scrolling for nav links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Toggle fade-in on service boxes on click
document.addEventListener("DOMContentLoaded", function () {
  const serviceBoxes = document.querySelectorAll(".service-box");

  serviceBoxes.forEach(box => {
    box.addEventListener("click", function () {
      if (this.classList.contains("fade-in-toggle")) {
        this.classList.remove("fade-in-toggle");
        this.style.animation = "none";
        void this.offsetWidth; // trigger reflow
        this.style.opacity = "1";
        this.style.transform = "none";
      } else {
        this.classList.add("fade-in-toggle");
      }
    });
  });
});

// Add thank you message to footer
window.addEventListener("DOMContentLoaded", function () {
  const footer = document.querySelector("footer");
  const thankYouMsg = document.createElement("p");
  thankYouMsg.textContent = "Thank you for visiting MeemNoon Technology!";
  thankYouMsg.style.color = "#aaa";
  thankYouMsg.style.fontSize = "0.9rem";
  thankYouMsg.style.marginTop = "8px";
  thankYouMsg.style.textAlign = "center";
  footer.appendChild(thankYouMsg);
});

