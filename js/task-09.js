function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

const changeColorEl = document.querySelector(".change.color");
const textColorEl = document.querySelector(".color");

changeColorEl.addEventListener("click", onChangeColor);
function onChangeColor() {
    document.body.style.backgroundColor = getRandomHexColor();
    textColorEl.textContent = document.body.getAttribute(backgroundColor);
}
