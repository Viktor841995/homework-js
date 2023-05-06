const rightEmail = "";
const rightPassword = "";

const form = document.querySelector(".login-form");

const emailInputRequired = form.firstElementChild.firstElementChild.setAttribute(
  "required",
  "@"
);

const passwordInputRequired = form.lastElementChild.previousElementSibling.firstElementChild.setAttribute(
  "required",
  " "
);
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;

  const mail = formElements.email.value;
  const password = formElements.password.value;
  const formData = {
    mail, password
  }
  console.log(formData);
}
