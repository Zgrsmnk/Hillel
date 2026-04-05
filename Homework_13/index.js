const form = document.querySelector("form");

const fields = [
  {
    input: document.querySelector("input[name='name']"),
    error: document.querySelector(".error_name"),
    reg: /^[a-zA-ZА-Я]{2,}$/i,
  },
  {
    input: document.querySelector("textarea[name='message']"),
    error: document.querySelector(".error_message"),
    reg: /^.{5,}$/,
  },
  {
    input: document.querySelector("input[name='phone']"),
    error: document.querySelector(".error_number"),
    reg: /^\+380\d{9}$/,
  },
  {
    input: document.querySelector("input[name='e-mail']"),
    error: document.querySelector(".error_email"),
    reg: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let isValid = true;

  fields.forEach(function (field) {
    const valid = field.reg.test(field.input.value);

    if (!valid) {
      field.error.classList.add("error_visible");
      isValid = false;
    } else {
      field.error.classList.remove("error_visible");
    }
  });
  if (isValid) {
    const formData = new FormData(event.target);
    const formObj = {};
    formData.forEach((value, key) => (formObj[key] = value));
    console.log(formObj);
  }
});
