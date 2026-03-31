const input = document.querySelector(".input");
const button_add = document.querySelector(".todo_button");
const list = document.querySelector(".ul_list");

button_add.addEventListener("click", function () {
  const value = input.value;
  const li = document.createElement("li");
  const button = document.createElement("button");
  li.textContent = value;
  button.textContent = "Видалити";
  li.appendChild(button);
  list.appendChild(li);
});

list.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    event.target.parentElement.remove();
  }
});
