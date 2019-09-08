/*const tabla = paramTabla => {
  const number = Number.parseInt(paramTabla)
  for (let cont = 0; cont <= 10; cont += 1) {
    document.write(number + "x" + cont + "=" + cont * number + "</br>");
  }
}

const pedirTabla = prompt("¿Cúal tabla quieres ver?", "4")

tabla(pedirTabla);*/

/*
const sumador = listNumber => {
  const array = listNumber.split(",");
  for (let cont = 0; cont < array.length; cont += 1) {
    array[cont] = Number.parseInt(array[cont])
  }
  let cuenta = 0;
  for (let cont = 0; cont < array.length; cont += 1) {
    cuenta = cuenta + array[cont];
  }
  document.write(cuenta)
}
const pedirNumeros = prompt("Cúales números quieres sumar?")
sumador(pedirNumeros);*/

// const listWord = userList => {
//   for (let cont = 0; cont < userList.length; cont += 1) {
//     console.log(userList[cont])
//   }
// }

const listWord = userList => {
  let palabraLarga = "";
  for (let cont = 0; cont < userList.length; cont += 1) {
    if (userList[cont].length > palabraLarga.length) {
      palabraLarga = userList[cont];
    }
  }
  console.log(palabraLarga);
}