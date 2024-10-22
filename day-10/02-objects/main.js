//** ******************** */
//** #################### */

//** objects */
console.log('objects:')
console.log('\n')

// example 1
// function printText() {
//   console.log('hello')
// }

// printText.areYouAndObject = true

// console.log('1. printText: ', printText)
// console.log('2. printText(): ', printText())
// printText()
// console.log('3. printText.areYouAndObject: ', printText.areYouAndObject)
// printText.areYouAndObject
// // printText.areYouAndObject() // Uncaught TypeError: printText.areYouAndObject is not a function

// console.log('\n')
// console.log('printText.name: ', printText.name)

console.log('\n')
console.log('####################')
// example 2
let a = 2

let person = {
  firstName: 'Alberto',
  lastName: 'Guzman',
  getName: function () {
    console.log(this)
    return this.firstName + ' ' + this.lastName
  },
}

console.log('1. person: ', person)
console.log('2. person.getName(): ', person.getName())

console.log('\n')
function greetPerson() {
  console.log('3. Namaste', person.getName())
}

console.log('####################')
//* bind
console.log('bind:')
// Creates a new copy of the function that we calling bind on
let greetAlberto = greetPerson.bind(person)
console.log('4. greetAlberto(): ', greetAlberto())
// greetAlberto()

// example 3
console.log('\n')
console.log('####################')
console.log('\n')
function greetPerson(greeting) {
  console.log(greeting, person.getName())
}

console.log('####################')
//* call
console.log('call:')
// Doesn't create a copy
greetPerson.call(person, 'namaste')

// example 4
console.log('####################')
//* apply
console.log('apply:')
// arguments
function sum1(x, y) {
  // Arguments returns an array
  console.log('Arguments: ', arguments) // {"0": 2, "1": 3}
  return x + y
}
console.log(sum1(2, 3, 1, 10))

console.log('\n')
// example 5
console.log('####################')
function sum2(x, y) {
  let total = 0
  for (let index = 0; index < arguments.length; index++) {
    total += arguments[index]
    // console.log('index: ', index + ': ' + parseInt(arguments[index]))
    console.log('index: ', index + ': ' + +arguments[index])
  }
  return 'total: ' + total
}
console.log(sum2(2, 3, 4, 5))

console.log('\n')
// apply accepts an array of arguments
greetPerson.apply(person, ['hello', 'Mr'])


//* * .call example */
console.log('\n')
console.log('####################')
let fruitObject = {
  fruitName: 'Apple',
}

function getFruitName() {
  return this.fruitName
}

let result
result = getFruitName.call(fruitObject)

console.log(result)


