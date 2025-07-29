let somevariableJS = 'alberto'
console.log(somevariable)
somevariable = 'elfgodd'
console.log(somevariable)

// node app.js
/*
output:
alberto
elfgodd
*/

console.log(somevariable.toUpperCase())
somevariable = 17
// console.log(somevariable.toUpperCase())
// TypeError: somevariable.toUpperCase is not a function

function addNumbersJS(firstNumber, secondNumber) {
  return firstNumber + secondNumber
}
console.log(addNumbers(5, 10))
console.log(addNumbers(5, '10'))

const personJS = {
  name: 'Alberto',
  role: 'Mentor'
}

console.log(person.LastName) // undefined