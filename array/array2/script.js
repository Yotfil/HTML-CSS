// const array = [1, 2, 3];
// const multiplicar = (elemento) => {
//     console.log(elemento * 2);
// };
// array.forEach(multiplicar);

// const textArray = ["arroz", "papa", "carne"];
// const revertTextArray = (element) => {
//     const arrayElement = element.split("");
//     const reverseElement = arrayElement.reverse();
//     const joinElement = reverseElement.join("");
//     console.log(joinElement);
// };
// textArray.forEach(revertTextArray);

// const numberArray = [1, 5, 20, 45, 110, -1];
// let cuenta = numberArray[0];
// const comparar = (element) => {
//     if (element > cuenta) {
//         cuenta = element;
//     }
// };
// numberArray.forEach(comparar);
// console.log(cuenta);

// const people = [
//     {
//         name: "Juan",
//         age: 18,
//         type: "male"
//     },
//     {
//         name: "Jose",
//         age: 14,
//         type: "male"
//     },
//     {
//         age: 19,
//         name: "Natalia",
//         type: "female"
//     },
//     {
//         name: "Lola",
//         age: 19,
//         type: "female"
//     },
//     {
//         name: "Camila",
//         type: "female",
//         age: 15
//     },
//     {
//         age: 17,
//         name: "Juana",
//         type: "female"
//     }
// ];

// const isOverage = (age) => {
//     return age >= 18;
// };
// const personCanDrink = [];
// const comparar = (element) => {
//     if (isOverage(element.age)) {
//         personCanDrink.push(element.name);
//     }
// };
// people.forEach(comparar);
// console.log(personCanDrink);

const abcdario = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "ñ",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
];
const encripPalabra = (palabra, encrip) => {
    const palabraArray = palabra.split("");
    for (let i = 0; i < palabraArray.length; i += 1) {
        const posicion = abcdario.indexOf(palabraArray[i]);
        const masEncrip = posicion + encrip;
        const letraEncrip = abcdario[masEncrip];
    }
};
