const fontSizeControl = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");
fontSizeControl.addEventListener("input", (event)=> {
    fontSizeControl.value === textSize.fontSize;
    textSize.style.fontSize = fontSizeControl.value + "px";
});