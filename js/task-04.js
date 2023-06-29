let counterValue = 0;
const value = document.querySelector("#value");
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

const handlClickDecrement = () => {
  counterValue -= 1;
  return (value.textContent = counterValue);
};

const handlClickIncrement = () => {
  counterValue += 1;
  return (value.textContent = counterValue);
};
decrement.addEventListener("click", handlClickDecrement);
increment.addEventListener("click", handlClickIncrement);
