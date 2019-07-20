// console.log('hola!')

// function myFn() {
//   return "lo hice"
// }
// const myObj = {
//   juanito: myFn
// }

// const array = ["hola", myObj, false]
// const array = ["hola", {
//   juanito: myFn
// }, false]


// function myFnGlobal() {
//   return array
// }

//console.log(myFnGlobal()[1].juanito())

function myFnGlobal() {
  const a = ["hola", {
    juanito: function myFn() {
      return "lo hice"
    }
  }, false];

  return a;
}

function myFnGlobal() {
  return ["hola", {
    juanito: function myFn() {
      return "lo hice"
    }
  }, false];
}


console.log(myFnGlobal()[1].juanito())