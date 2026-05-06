"use strict";

var input = document.querySelector(".js--form__input");
var form = document.querySelector(".js--form");
var ul = document.querySelector(".js--todos-wrapper");
var saved = localStorage.getItem("todoList");
var isArray = saved ? JSON.parse(saved) : [];
render();
form.addEventListener("submit", function (event) {
  event.preventDefault();
  var value = input.value;
  isArray.push({
    text: value,
    uuid: +new Date(),
    done: false
  });
  input.value = "";
  localStorage.setItem("todoList", JSON.stringify(isArray));
  render();
});
function render() {
  ul.innerHTML = "";
  isArray.forEach(function (item) {
    var li = document.createElement("li");
    li.classList.add("todo-item");
    var newInput = document.createElement("input");
    newInput.type = "checkbox";
    li.append(newInput);
    newInput.dataset.uuid = item.uuid;
    newInput.checked = item.done;
    var span = document.createElement("span");
    span.textContent = item.text;
    li.append(span);
    span.classList.add("todo-item__description");
    span.classList.toggle("todo-item--checked", item.done);
    var button = document.createElement("button");
    button.textContent = "Видалити";
    li.append(button);
    button.classList.add("todo-item__delete");
    button.dataset.uuid = item.uuid;
    ul.append(li);
  });
}
ul.addEventListener("click", function (event) {
  if (event.target.classList.contains("todo-item__delete")) {
    var uuid = +event.target.dataset.uuid;
    var index = isArray.findIndex(function (item) {
      return item.uuid === uuid;
    });
    isArray.splice(index, 1);
    localStorage.setItem("todoList", JSON.stringify(isArray));
    render();
  }
});
ul.addEventListener("change", function (event) {
  if (event.target.type === "checkbox") {
    var uuid = +event.target.dataset.uuid;
    var item = isArray.find(function (item) {
      return item.uuid === uuid;
    });
    item.done = !item.done;
    localStorage.setItem("todoList", JSON.stringify(isArray));
    render();
  }
});