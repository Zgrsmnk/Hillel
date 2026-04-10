const input = document.querySelector(".js--form__input");
const form = document.querySelector(".js--form");
const ul = document.querySelector(".js--todos-wrapper");

const isArray = [];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const value = input.value;

  const li = document.createElement("li");
  li.classList.add("todo-item");

  const newInput = document.createElement("input");
  newInput.type = "checkbox";
  li.append(newInput);

  const span = document.createElement("span");
  span.textContent = value;
  li.append(span);
  span.classList.add("todo-item__description");

  const button = document.createElement("button");
  button.textContent = "Видалити";
  li.append(button);
  button.classList.add("todo-item__delete");

  ul.append(li);
});

ul.addEventListener("click", function (event) {
  if (event.target.classList.contains("todo-item__delete")) {
    event.target.closest("li").remove();
  }
});
