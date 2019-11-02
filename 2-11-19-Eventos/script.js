//Cargar todos los archivos de un archivo despuès que haya cargado todo el archivo
// document.addEventListener("DOMContentLoaded", () => {
//     const button = document.getElementById("button");
//     button.addEventListener("click", () => {
//         console.log("Me Clickearon Ñero");
//     });
// });

//ESTA ES OTRA FUNCION
// const background = (e) => {
//     e.target.style.background = "#ccc";
//     //e = todo el evento y .target da el elemento que pasa el evento
// };
// document.addEventListener("DOMContentLoaded", () => {
//     const buttons = document.querySelectorAll("button");
//     buttons.forEach((elemento, index, array) => {
//         elemento.addEventListener("click", background);
//     });
// });
//ESTA ES OTRA FUNCION
// const background = (e) => {
//     e.target.style.background = "#ccc";
//     //e = todo el evento y .target da el elemento que pasa el evento
// };
// document.addEventListener("DOMContentLoaded", () => {
//     document.body.addEventListener("click", background);
// }

// const background = (e) => {
//     e.preventDefault();
//     console.log(e)
//     //e = todo el evento y .target da el elemento que pasa el evento
// };
// document.addEventListener("DOMContentLoaded", () => {
//     document.body.addEventListener("click", background);
// })
const getName = (e) => {
    const valorInput = e.target.value;
    printName(valorInput);
};
const printName = (name) => {
    if (!document.querySelector("p")) {
        const newName = document.createElement("p");
        newName.innerText = name;
        document.body.appendChild(newName);
    } else {
        const newName = document.querySelector("p");
        newName.innerText = name;
        document.body.appendChild(newName);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    const name = document.getElementById("name");
    name.addEventListener("change", getName);
    name.addEventListener("keyup", getName);
});
