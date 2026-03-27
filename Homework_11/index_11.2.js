const button = document.querySelector(".btn");
const text_p = document.querySelector(".red");

button.addEventListener("click", function () {
  text_p.classList.toggle("blue");
});
