const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if ((email.value.trim() && password.value.trim()) === "") {
    alert("The fields must be completed!");
  } else {
    const data = {
      email: email.value,
      password: password.value,
    };
    console.log(data);
    event.currentTarget.reset();
  }
}
