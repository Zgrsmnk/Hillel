const button1 = document.querySelector(".add");
const button2 = document.querySelector(".go");
let reference = "";

button1.addEventListener("click", function () {
  reference = prompt("Please enter your reference");
});

button2.addEventListener("click", function () {
  window.location.href = reference;
});
