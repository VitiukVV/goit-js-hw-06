const fontSizeControl = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

fontSizeControl.addEventListener("change", onRange);

function onRange(event) {
  spanText.style.fontSize = `${event.currentTarget.value}px`;
}
