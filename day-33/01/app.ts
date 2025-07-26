let somevariable = 'alberto'
console.log(somevariable)
somevariable = 'elfgodd'
console.log(somevariable)

console.log(somevariable.toUpperCase())
// somevariable = 17 // Type 'number' is not assignable to type 'string'

function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

console.log(addNumbers(5, 10));
console.log(addNumbers(5, '9'));

function addNumbersTS(firstNumber: number, secondNumber: number): number {
  return firstNumber + secondNumber
}

console.log(addNumbersTS(2, 4))
// Argument of type 'string' is not assignable to parameter of type 'number'.
// console.log(addNumbersTS(3, '7'))

// 7m