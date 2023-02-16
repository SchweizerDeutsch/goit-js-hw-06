const itemEl = document.querySelectorAll(".item");
const itemElQuantity = itemEl.length;
console.log("Number of categories: ", itemElQuantity);

itemEl.forEach((item) => {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements", item.querySelectorAll("li").length);
});
