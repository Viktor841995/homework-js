const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
nameInput.addEventListener("input", onAddTextInput);
function onAddTextInput(event) {
    let name = event.target.value;
    if(name === "") {
      name = "Anonymous";
    }
    spanEl.textContent = name;
  };