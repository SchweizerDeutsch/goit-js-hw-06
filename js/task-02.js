const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.getElementById("ingredients");

const arrIngredients = [];

for (const ingredient of ingredients) {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = ingredient;
  arrIngredients.push(liEl);
}

ulEl.append(...arrIngredients);

console.log(ulEl);
