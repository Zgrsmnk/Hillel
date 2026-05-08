import "../scss/styles.scss";
import $ from "jquery";
import "bootstrap";

const input = $(".js--form__input");
const form = $(".js--form");
const ul = $(".js--todos-wrapper");

const saved = localStorage.getItem("todoList");
const isArray = saved ? JSON.parse(saved) : [];
render();

form.on("submit", function (event) {
  event.preventDefault();

  const value = input.val();

  isArray.push({ text: value, uuid: +new Date(), done: false });

  input.val("");

  localStorage.setItem("todoList", JSON.stringify(isArray));

  render();
});

function render() {
  ul.html("");

  isArray.forEach(function (item) {
    const li = $("<li>");
    li.addClass("todo-item");
    li.attr("data-uuid", item.uuid);

    const newInput = $("<input>");
    newInput.attr("type", "checkbox");
    li.append(newInput);
    newInput.attr("data-uuid", item.uuid);
    newInput.prop("checked", item.done);

    const span = $("<span>");
    span.text(item.text);
    li.append(span);
    span.addClass("todo-item__description");
    span.toggleClass("todo-item--checked", item.done);

    const button = $("<button>");
    button.text("Видалити");
    li.append(button);
    button.addClass("todo-item__delete");
    button.attr("data-uuid", item.uuid);
    ul.append(li);
  });
}

ul.on("click", function (event) {
  if ($(event.target).is(".todo-item__delete")) {
    const uuid = +$(event.target).attr("data-uuid");
    const index = isArray.findIndex(function (item) {
      return item.uuid === uuid;
    });
    isArray.splice(index, 1);

    localStorage.setItem("todoList", JSON.stringify(isArray));

    render();
  }
});

ul.on("change", function (event) {
  if ($(event.target).attr("type") === "checkbox") {
    const uuid = +$(event.target).attr("data-uuid");
    const item = isArray.find(function (item) {
      return item.uuid === uuid;
    });
    item.done = !item.done;

    localStorage.setItem("todoList", JSON.stringify(isArray));

    render();
  }
});

ul.on("click", function (event) {
  const target = $(event.target);

  if (target.is(".todo-item__delete") || target.is(":checkbox")) {
    return;
  }
  const uuid = +target.closest(".todo-item").attr("data-uuid");

  const item = isArray.find(function (item) {
    return item.uuid === uuid;
  });

  $(".modal-title").text("Задача");
  $(".modal-task-text").text(item.text);

  const modal = new bootstrap.Modal(document.getElementById("taskModal"));
  modal.show();
});
