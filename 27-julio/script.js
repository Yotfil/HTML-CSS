// // if (false) {
// //   console.log("Soy verdadero")
// // }

// const clave1 = "password"
// let clave2 = "password"
// if (clave1 === clave2) {
//   console.log("verdadero")
// }
// //en consola votaria verdadero

// if (true) {
//   console.log("verdadero")
// } else {
//   console.log("falso")
// }

// const email = "nicolasm@nikodermus.media"
// const emailConf = "nicolasp@nikodermus.media"

// if (email !== emailConf) { //!== significa que es diferente
//   console.log("emails diferentes!!!")
// } else {
//   console.log("Todo bien parcerito")
// }

// if (email === emailConf) { //!== significa que es diferente
//   console.log("emails diferentes!!!")
// } else if (email === "presidente@gmail.com") {
//   console.log("siga mi presi")
// } else {
//   console.log("Todo bien parcerito")
// } //deberia dar como resultado "Todo bien parcerito"


// // dos formas de hacer comparadores
// if (email === emailConf) {
//   if (email.length >= 15) {
//     console.log("yeah!")
//   }
// } //esta es la forma larga



// function myFn(number) {
//   return "number par"
// }

// const myFn = function(pri, sec, ter) {
//   return sec[1];
// };

// const vaDeNuevo = function(pri, array,
//   retornar) {
//   return retornar[3];
// };

// const numMas = function(pri) {
//   return pri + 2;
// }

// const numMas = function(pri, sec) {
//   return pri + sec;
// }

// const numMas = function(sec) {
//   return "hola " + sec;
// };

// const numMas = function(sec) {
//   if (sec > 5) {
//     console.log("Es mayor que 5")
//   } else if (sec === 5) {
//     console.log("es igual que 5")
//   } else {
//     console.log("Es menor que 5")
//   }
// };

// const numMas = function(sec) {
//   if (sec % 2 === 0) {
//     console.log("Es par ")
//   } else {
//     console.log("Es impar")
//   }
// };

// const numMas = function(sec) {
//   if (typeof sec === "number") {
//     if (sec % 2 === 0) {
//       console.log("Es par ")
//     } else {
//       console.log("Es impar")
//     }
//   } else {
//     console.log("Agrega un numero, por favor por favor, numero")
//   }
// };

// const numMas = function(sec, num) {
//   if (typeof num === "number") {
//     if (sec % 2 === 0) {
//       console.log("Es par ")
//     } else {
//       console.log("Es impar")
//     }
//   } else {
//     console.log("Agrega un numero, por favor por favor, numero")
//   }
// };
const numMas = function(sec, num) {
  if (typeof num === "number") {
    if ((num * 3) % 4 === 0) {
      console.log("Querido " + sec + " el " + num + " x 3 es multiplo de 4")
    } else {
      console.log("Querido " + sec + " el " + num + " x 3 no es multiplo de 4")
    }
  } else {
    console.log("Agrega un numero, por favor por favor, numero")
  }
};