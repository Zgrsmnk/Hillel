import "../scss/style.scss";

const input = document.querySelector(".js--form__input");
const form = document.querySelector(".js--form");
const ul = document.querySelector(".js--todos-wrapper");

const API_URL = "http://localhost:8080";

let todos = [];

getTodos();

async function getTodos() {
  try {
    const result = await fetch(API_URL);
    todos = await result.json();
    render();
  } catch (error) {
    console.log(error);
  }
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    const text = input.value.trim();

    if (!text) {
      return;
    }

    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        done: false,
      }),
    });

    input.value = "";

    getTodos();
  } catch (error) {
    console.log(error);
  }
});

function render() {
  ul.innerHTML = "";

  todos.forEach(function (item) {
    const li = document.createElement("li");
    li.classList.add("todo-item");

    const newInput = document.createElement("input");
    newInput.type = "checkbox";
    newInput.dataset.id = item._id;
    li.append(newInput);
    newInput.checked = item.done;

    const span = document.createElement("span");
    span.textContent = item.text;
    li.append(span);
    span.classList.add("todo-item__description");
    span.classList.toggle("todo-item--checked", item.done);

    const button = document.createElement("button");
    button.textContent = "Видалити";
    li.append(button);
    button.classList.add("todo-item__delete");
    button.dataset.id = item._id;
    ul.append(li);
  });
}

ul.addEventListener("click", async (event) => {
  if (event.target.classList.contains("todo-item__delete")) {
    try {
      const id = event.target.dataset.id;

      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      getTodos();
    } catch (error) {
      console.log(error);
    }
  }
});

ul.addEventListener("change", async (event) => {
  if (event.target.type === "checkbox") {
    try {
      const id = event.target.dataset.id;

      const todo = todos.find((item) => item._id === id);

      await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: todo.text,
          done: !todo.done,
        }),
      });

      getTodos();
    } catch (error) {
      console.log(error);
    }
  }
});
