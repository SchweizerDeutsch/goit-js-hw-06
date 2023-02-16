// document.getElementById("validation-input").onblur = function () {
//   console.log(this.value.length);
//   if (this.getAttribute("data-length") < this.value.length) {
//     this.classList.remove("valid");
//     this.classList.add("invalid");
//   } else {
//     this.classList.remove("invalid");
//     this.classList.add("valid");
//   }
// };

const elems = document.getElementsByTagName("input");
for (var i = 0; i < elems.length; i++) {
  elems[i].addEventListener("blur", func);
}

function func() {
  const correctLength = this.dataset.length; //правильна кількість
  const inputDataLength = this.value.length; //вбита в інпут кількість
  if (correctLength == inputDataLength) {
    this.style.borderColor = "#4caf50";
  } else {
    this.style.borderColor = "#f44336";
  }
}
