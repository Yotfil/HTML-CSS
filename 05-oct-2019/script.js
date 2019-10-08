/* const nroItemUser = itmUser => {
  const primerDiv = document.querySelector("div");
  const inputs = document.querySelectorAll("div > input");
  for (let i = 0; i < itmUser; i += 1) {
    const listUser = document.createElement("li");

    listUser.innerText = [i + 1];
    primerDiv.appendChild(listasCreadas);
  }
} */

const nroItemUser = () => {
  const primerDiv = document.querySelector('div');
  const inputs = document.querySelectorAll('div > input');

  const inputText = [];

  for (let i = 0; i < inputs.length; i += 1) {
    inputText[i] = inputs[i].value; // innerText para textos estàticos, y .value para los inputs
  }
  const inputsJoined = inputText.join(' ');
  console.log(inputsJoined);
  let ulGlobal;
  if (!document.querySelector('ul')) {
    const newUl = document.createElement('ul');
    primerDiv.appendChild(newUl);
    ulGlobal = newUl;
  } else {
    ulGlobal = document.querySelector('ul');
  }
  const newLi = document.createElement('li');
  newLi.innerText = inputsJoined;
  ulGlobal.appendChild(newLi);
};
