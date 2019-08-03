const green = document.querySelector(".green");
const red = document.querySelector(".red");

const hide = function() {
  green.classList.toggle("hide");
  red.classList.toggle("hide");
}


green.addEventListener("click", hide)
red.addEventListener("click", hide)