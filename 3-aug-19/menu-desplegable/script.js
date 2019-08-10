const hamburger = document.querySelector(".hamburger");

const open = function() {
    hamburger.classList.toggle("open");
}

hamburger.addEventListener("click", open)