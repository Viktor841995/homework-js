const rightEmail = "";
const rightPassword = "";

const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", event => {
    event.preventDefault();
    const emailValue = loginForm.elements.email.value;
    const passwordValue = loginForm.elements.password.value;

    if (emailValue !== rightEmail && passwordValue !== rightPassword) {
      return console.log({
        elementsEmail: emailValue,
        elementsPassword: passwordValue,
      });
    } else if (emailValue == "" || passwordValue == "") {
        alert("Fill up all the forms!")   
        loginForm.reset();
    }
});
