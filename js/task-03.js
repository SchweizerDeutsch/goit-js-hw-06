const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ulEl = document.querySelector(".gallery");

console.log(ulEl);

const imagesArr = images
  .map((image) => {
    return `<li> <img src = '${image.url}' alt = '${image.alt}' width = 750/>
    </li>`;
  })
  .join("");

console.log(imagesArr);

ulEl.insertAdjacentHTML("beforeend", imagesArr);
ulEl.style.display = "flex";
ulEl.style.flexDirection = "column";
ulEl.style.gap = "20px";
ulEl.style.alignItems = "center";
