/*const nroItemUser = itmUser => {
  const primerDiv = document.querySelector("div");
  const inputs = document.querySelectorAll("div > input");
  for (let i = 0; i < itmUser; i += 1) {
    const listUser = document.createElement("li");

    listUser.innerText = [i + 1];
    primerDiv.appendChild(listasCreadas);
  }
}*/

const nroItemUser = itmUser => {
  const primerDiv = document.querySelector("div");
  const inputs = document.querySelectorAll("div > input");

  const inputText = [];

  for (let i = 0; i < inputs.length; i += 1) {
    inputText[i] = inputs[i].innerText;
  }
}