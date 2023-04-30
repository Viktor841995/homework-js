const rightEmail = "";
const rightPassword = "";
const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    const emailValue = formElements.email.value;
    const passwordValue = formElements.password.value;
    if(emailValue == rightEmail && passwordValue == rightPassword) {
      return console.log({
        elementsEmail: rightEmail,
        elementsPassword: rightPassword,});
    } else if(emailValue == "" || passwordValue == "") {
        alert("Fill up all the forms")
    }
}