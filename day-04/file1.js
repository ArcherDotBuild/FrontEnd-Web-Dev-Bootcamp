//* 💻 functions */
console.log('********************')
console.log('functions')

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

console.log('compareNumbers(5, 10)')
compareNumbers(5, 10) // Calling our function

console.log('\n')
console.log('compareNumbers(10, 5)')
compareNumbers(10, 5)

console.log('\n')
console.log('compareNumbers(10, 10)')
compareNumbers(10, 10)

console.log('\n')
console.log('********************')
function print() {
  console.log('this is printed in the console')
}
print()

console.log('\n')
console.log('********************')
function addNumber(firstNumber, secondNumber) {
  return firstNumber + secondNumber // returning something with the return keyword
}
const result = addNumber(2, 3)
console.log('result: ', result)

console.log('\n')
console.log('********************')
// function expresion: store a function inside a variable
const multiply = function multiplyNumber(firstNumber, secondNumber) {
  return firstNumber * secondNumber
}
console.log('multiply: ' + multiply(6, 5))

console.log('\n')
console.log('********************')
// anonymous functions: function which does not have a name
const subtract = function (firstNumber, secondNumber) {
  return firstNumber - secondNumber
}
console.log('subtract: ' + subtract(30, 35))

console.log('\n')
console.log('********************')
const person = {
  firstName: 'Alberto',
  lastName: 'Guzman',
  print: function () {
    console.log('this function is a property of an object')
  },
}
person.print()

console.log('\n')
console.log('********************')
// coding conventions in js

// camelCase camel casing

// give always meaningful names to variables
