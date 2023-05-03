function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

const changeColorEl = document.querySelector(".change-color");
const textColorEl = document.querySelector(".color");

changeColorEl.addEventListener("click", onChangeColor);

function onChangeColor() {
  const color = getRandomHexColor();
    textColorEl.textContent = color;
    document.body.style.backgroundColor = color;
};
