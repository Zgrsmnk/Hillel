const container = document.querySelector(".button_container");

container.addEventListener("click", function (event) {
  const button = event.target;
  if (button.tagName === "BUTTON") {
    alert("Клік по кнопці: " + button.textContent);
  }
});
