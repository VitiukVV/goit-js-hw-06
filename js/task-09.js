function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const nameColor = document.querySelector(".color");
const body = document.body;

changeColorBtn.addEventListener("click", onClick);
// варінт коли в стилі і в значенні показує однаковий колір rgb
function onClick() {
  body.style.backgroundColor = getRandomHexColor();
  nameColor.textContent = body.style.backgroundColor;
}

// варіант коли в стилі колір rgb а в значенні hex
// function onClick() {
//   const randomColor = getRandomHexColor();
//   body.style.backgroundColor = randomColor;
//   nameColor.textContent = randomColor;
// }
