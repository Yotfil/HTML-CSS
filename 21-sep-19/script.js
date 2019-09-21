//DOM Document Object Model forma de leer el HTML
/*ID solo para elementos que no van a variar
document.querySelector("") es el más optimizado*/


//Agregar estilos a un elemento

// const changeDiv = document.querySelectorAll("div");
// for (i = 0; i < changeDiv.length; i += 1) {
//   debugger;
//   changeDiv[i].style.width = "200px";
//   changeDiv[i].style.backgroundColor = "blue";
// }


//lo mismo que arriba pero con un elemento específico

// const changeDiv = document.querySelectorAll("div>ul>li:first-child");
// for (i = 0; i < changeDiv.length; i += 1) {
//   changeDiv[i].style.width = "200px";
//   changeDiv[i].style.backgroundColor = "blue";
// }


//Cambiar un atributo

// const imgChange = document.querySelector("img")
// imgChange.setAttribute("src", "http://lorempixel.com/400/400/sports/");



//Sumar una lista de precios y ponerles clase de color

// const suma = document.querySelectorAll("div.pruebaData");
// let sumaPrecio = 0;
// for (let i = 0; i < suma.length; i += 1) {
//   const price = suma[i].dataset.price;
//   const priceNumber = Number(price);
//   sumaPrecio = sumaPrecio + priceNumber;
//   if (sumaPrecio % 2 === 0) {
//     suma[i].classList.add("red");
//   } else {
//     suma[i].classList.add("blue");
//   }
//   suma[i].innerText = sumaPrecio;
// }


//hacer un alert que el usuario agrege un num. y crear una cantidad de listas igual al numero ingresado
//document.createElement("h3")
//div.appendChild es crear un elemento hijo en el div
//h3.innerText escribe texto en un h3

const nroItemList = itemList => {
  const numItem = Number.parseInt(itemList)
  const primerDiv = document.querySelector("div");
  for (let i = 0; i < numItem; i += 1) {
    const listasCreadas = document.createElement("li");

    listasCreadas.innerText = [i + 1];
    primerDiv.appendChild(listasCreadas);

  }
}
const cuantasListas = prompt("¿Cuantas listas quieres crear?")
nroItemList(cuantasListas)

elementoTraidoDelQuerySelector.addEventListener("click", nombreFuncion)