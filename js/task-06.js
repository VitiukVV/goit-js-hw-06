const validationInput = document.querySelector("#validation-input");
const data = Number(validationInput.getAttribute("data-length"));
console.log(data);

validationInput.addEventListener("blur", onBlur);

function onBlur() {
  if (validationInput.value.length === data) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else if (validationInput.value.trim() === "") {
    validationInput.classList.remove("invalid");
    validationInput.classList.remove("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
}
