// Footer me thank you message add karne ka JS code
window.addEventListener("DOMContentLoaded", function () {
  const footer = document.querySelector("footer");
  const thankYouMsg = document.createElement("p");
  thankYouMsg.textContent = " Thank you for visiting MeemNoon Technology!";
  thankYouMsg.style.color = "#aaa";
  thankYouMsg.style.fontSize = "0.9rem";
  thankYouMsg.style.marginTop = "8px";
  thankYouMsg.style.textAlign = "center";
  footer.appendChild(thankYouMsg);
});

