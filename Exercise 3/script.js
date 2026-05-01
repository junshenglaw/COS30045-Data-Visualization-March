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

// ===== Data Story Slider =====
let currentSlide = 0;

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
  updateButtons();
});

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");

  slides.forEach(slide => {
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");

  updateButtons();
}

function nextSlide() {
  const slides = document.querySelectorAll(".slide");

  if (currentSlide < slides.length - 1) {
    currentSlide++;
    showSlide(currentSlide);
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
  }
}

function updateButtons() {
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  // Disable Previous at first slide
  if (currentSlide === 0) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }

  // Disable Next at last slide
  if (currentSlide === slides.length - 1) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
}