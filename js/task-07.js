const fontSizeControl = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

fontSizeControl.addEventListener("input", onRange);

function onRange(event) {
  spanText.style.fontSize = `${event.currentTarget.value}px`;
}
