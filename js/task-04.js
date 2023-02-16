const btnDecrement = document.querySelector('[data-action="decrement"]');
console.log(btnDecrement);
const valueEl = document.querySelector("#value");
console.log(valueEl);
const btnIncrement = document.querySelector('[data-action="increment"]');
console.log(btnIncrement);

let counterClick = 0;

const decrement = () => {
  counterClick -= 1;
  valueEl.textContent = counterClick;
};

const increment = () => {
  counterClick += 1;
  valueEl.textContent = counterClick;
};
btnDecrement.addEventListener("click", decrement);
btnIncrement.addEventListener("click", increment);
