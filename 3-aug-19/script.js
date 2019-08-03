const list = $("li");



//EM6
const listjs = document.querySelectorAll("ul:first-child :nth-child(1)");



//Jquery
list.on("click", function() {
  console.log("Nos hicieron click")
})



//EM6
listjs[0].addEventListener("click", function() {
  console.log("Click al estilo JS!");
});


//Jquery
list.on.addEventListener("click", function() {
  list.addClass("juanito");
  list.removeClass("juanito");
  list.toggleClass("juanito");
})

//EM6
listjs[0].addEventListener("click", function() {
  //change class js
  //listjs[0].classList.add("nice");
  //listjs[0].classList.remove("nice");
  listjs[0].classList.toggle("nice");
})