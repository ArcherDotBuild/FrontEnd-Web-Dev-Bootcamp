function compareNumbers(firstNumber, secondNumber) {
  if (firstNumber > secondNumber) {
    console.log(firstNumber + ' is greater than ' + secondNumber)
  } else if (firstNumber < secondNumber) {
    console.log(firstNumber + ' is less than ' + secondNumber)
  } else {
    console.log('Both the numbers are equal')
    console.log('This is another statement')
  }
}

compareNumbers(5, 10) // Calling our function
compareNumbers(10, 5) // Calling our function again
console.log('\n')
compareNumbers(10, 10)

console.log('\n')
function print() {
  console.log('this is printed in the console')
}
print()

console.log('\n')
function addNumber(firstNumber, secondNumber) {
  return firstNumber + secondNumber
}
console.log('addNumber: ' + addNumber(50, 20))

console.log('\n')
// function expresion syntax
const multiply = function multiplyNumber(firstNumber, secondNumber) {
  return firstNumber * secondNumber
}
console.log('multiply: ' + multiply(12, 24))

console.log('\n')
// anonymous functions
const subtractTwoNumbers = function (firstNumber, secondNumber) {
  return firstNumber - secondNumber
}
console.log('subtract: ' + subtractTwoNumbers(30, 35))

console.log('\n')
//
const person = {
  firstName: 'Alberto',
  lastName: 'Guzman',
  print: function () {
    console.log('this function is a property of an object')
  },
}
person.print()

console.log('\n')
// coding conventions in js
// camelCase
// give always meaningful names
