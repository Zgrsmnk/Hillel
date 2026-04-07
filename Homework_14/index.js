const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let currentIndex = 0;

dots.forEach(function (dot, i) {
  dot.addEventListener("click", function () {
    currentIndex = i;
    showSlide(currentIndex);
  });
});

function showSlide(index) {
  slides.forEach(function (slide, i) {
    slide.classList.toggle("active", i === index);
  });

  dots.forEach(function (dot, i) {
    dot.classList.toggle("activeDot", i === index);
  });

  prev.classList.toggle("hidden", index === 0);
  next.classList.toggle("hidden", index === slides.length - 1);
}

next.addEventListener("click", function () {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    showSlide(currentIndex);
  }
});

prev.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
    showSlide(currentIndex);
  }
});

showSlide(currentIndex);
