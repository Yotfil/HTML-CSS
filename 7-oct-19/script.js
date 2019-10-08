const pColor = () => {
  const firstP = document.querySelector('p');
  const blueP = 'blue';
  const yellowP = 'yellow';
  const redP = 'red';
  if (firstP.innerText === 'red') {
    firstP.innerText = blueP;
  } else if (firstP.innerText === 'blue') {
    firstP.innerText = yellowP;
  } else if (firstP.innerText === 'yellow') {
    firstP.innerText = redP;
  }
};
