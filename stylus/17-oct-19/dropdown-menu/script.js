const hamburger = document.querySelector(".main");
const click = document.querySelector(".hamburger");

const open = function() {
    hamburger.classList.toggle("main--open");
};

click.addEventListener("click", open);
