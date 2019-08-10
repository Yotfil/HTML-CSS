// const tabla = function(num) {
//   if (typeof num === "number") {
//     for (let cont = 0; cont <= 10; cont += 1) {
//       console.log(num + "x" + cont + "=" + cont * num);
//     }
//   }
// }

// const tabla = function(num) {
//   if (typeof num === "number") {
//     for (let cont = 1; cont <= num; cont += 1) {
//       for (let con2 = 1; con2 <= 10; con2 += 1) {
//         console.log(cont + "x" + con2 + "=" + cont * con2);
//       }
//     }
//   } else {
//     console.log("No es un número lo que escribes, subnormal!")
//   }
// }

// const name = false;
// console.log(`Hola soy ${name || ""}!`);

// const frutas = ["Pera", "Manzana", "Papaya", "aseasd", "sdfsdf"];
//const primero = frutas[0]

//eslint-disable-next-line
// debugger;
// for (let cont = 0; cont < frutas.length; cont += 1) {
//   console.log(`me gusta la ${frutas[cont]}`);
// }

const listNumber = [10, 1, 2, 3, 4, 6, 54, 775];
let cuenta = 0;
for (let cont = 0; cont < listNumber.length; cont += 1) {
  cuenta = cuenta + listNumber[cont];
}
console.log(cuenta);