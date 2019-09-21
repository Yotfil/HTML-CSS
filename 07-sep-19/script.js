// const chair = function(nCols, nRows, col, row) {
//   const resultCols = nCols - col + 1;
//   const resultRows = nRows - row;
//   const finalResult = resultCols * resultRows;
//   return finalResult;
// }

const finalOperation = function(a, b, c) {
  const op1 = a + b + c;
  const op2 = a * b * c;
  const op3 = a + b * c;
  const op4 = a * b + c;
  const op5 = (a + b) * c;
  const op6 = a * (b + c);
  const op7 = a * (b * c);
  const op8 = (a * b) * c;

  const operatorList = [op1, op2, op3, op4, op5, op6, op7, op8];

  let higherResult = "";
  for (let cont = 0; cont < operatorList.length; cont += 1) {
    if (operatorList[cont] > higherResult) {
      higherResult = operatorList[cont];
    }
  }
  console.log(higherResult);
}