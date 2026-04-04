const form = document.querySelector("form");

const inputName = document.querySelector("input[name='name']");
const inputMessage = document.querySelector("textarea[name='message']");
const inputPhone = document.querySelector("input[name='phone']");
const inputEmail = document.querySelector("input[name='e-mail']");

const errorName = document.querySelector(".error_name");
const errorMessage = document.querySelector(".error_message");
const errorPhone = document.querySelector(".error_number");
const errorEmail = document.querySelector(".error_email");

const nameReg = /^[a-zA-ZА-Я]{2,}$/i;
const messageReg = /^.{5,}$/;
const numberReg = /^\+380\d{9}$/;
const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let isValid = true;

  if (!nameReg.test(inputName.value)) {
    errorName.classList.add("error_visible");
    isValid = false;
  } else {
    errorName.classList.remove("error_visible");
  }

  if (!messageReg.test(inputMessage.value)) {
    errorMessage.classList.add("error_visible");
    isValid = false;
  } else {
    errorMessage.classList.remove("error_visible");
  }

  if (!numberReg.test(inputPhone.value)) {
    errorPhone.classList.add("error_visible");
    isValid = false;
  } else {
    errorPhone.classList.remove("error_visible");
  }

  if (!emailReg.test(inputEmail.value)) {
    errorEmail.classList.add("error_visible");
    isValid = false;
  } else {
    errorEmail.classList.remove("error_visible");
  }

  if (isValid) {
    const formData = new FormData(event.target);
    const formObj = {};
    formData.forEach((value, key) => (formObj[key] = value));
    console.log(formObj);
  }
});
