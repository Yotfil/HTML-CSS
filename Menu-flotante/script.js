const firstIcon = document.querySelector(".first-icon");
const secondIcon = document.querySelector(".second-icon");
const thirdIcon = document.querySelector(".third-icon");
const individual = document.querySelector(".int-idividual");

function isElementTotallyVisible(individual) {
    var anchoViewport = window.innerWidth || document.documentElement.clientWidth;
    var alturaViewport = window.innerHeight || document.documentElement.clientHeight;
    //Posición de la caja del elemento
    var caja = individual.getBoundingClientRect();
    return ( caja.top >= 0 && 
            caja.bottom <= alturaViewport &&
            caja.left >= 0 &&
            caja.right <= anchoViewport );
}

const active = ()=>{
    if(isElementTotallyVisible(individual) === true){
            firstIcon.classList.add("active");    
            secondIcon.classList.remove("active");
            thirdIcon.classList.remove("active");        
    }  
}
// function isElementPartiallyVisible(individual) {
//     var anchoViewport = window.innerWidth || document.documentElement.clientWidth;
//     var alturaViewport = window.innerHeight || document.documentElement.clientHeight;
//     //Posición de la caja del elemento
//     var caja = individual.getBoundingClientRect();
//     var cajaDentroH = (caja.left >= 0 && caja.left <= anchoViewport) ||
//                     (caja.right >= 0 && caja.right <= anchoViewport);
//     var cajaDentroV = (caja.top >= 0 && caja.top <= alturaViewport) ||  
//                     (caja.bottom>= 0 && caja.bottom <= alturaViewport);  
//     return (cajaDentroH && cajaDentroV);
// }
const change1 = function() {
    firstIcon.classList.add("active");    
    secondIcon.classList.remove("active");
    thirdIcon.classList.remove("active");    
}
const change2 = function() {
    secondIcon.classList.add("active");
    firstIcon.classList.remove("active"); 
    thirdIcon.classList.remove("active"); 
}
const change3 = function() {
    thirdIcon.classList.add("active");
    firstIcon.classList.remove("active");
    secondIcon.classList.remove("active");
}

individual.addEventListener("click", active);
firstIcon.addEventListener("click", change1);
secondIcon.addEventListener("click", change2);
thirdIcon.addEventListener("click", change3);
