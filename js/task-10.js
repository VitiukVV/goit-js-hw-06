function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.querySelector("#controls");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
const input = document.querySelector("input[type='number']");

createBtn.addEventListener("click", function () {
  const amount = Number(input.value);
  createBoxes(amount);
});
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let sizeEl = 30;
  let newDiv = "";
  for (let i = 0; i < amount; i += 1) {
    const sizeDiv = sizeEl + i * 10;
    const color = getRandomHexColor();
    newDiv += `<div style="background-color: ${color}; width: ${sizeDiv}px; height: ${sizeDiv}px;"></div>`;
  }
  boxes.innerHTML = newDiv;
}

function destroyBoxes() {
  boxes.innerHTML = "";
  input.value = "";
}
