// Highlight current page dynamically
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll(".nav-links a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});


// Simple alert interaction
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");

  if (hero) {
    hero.addEventListener("click", () => {
      alert("Tip: Switch off appliances when not in use to save energy!");
    });
  }
});