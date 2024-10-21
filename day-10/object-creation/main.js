//** ******************** */
//** #################### */

//** object literal syntax */
console.log('object literal syntax:')
console.log('\n')

// example 1
let person = {
  firstName: 'Alberto',
  lastName: 'Guzman',
}

console.log('1. person: ', person)

console.log('\n')
console.log('####################')
// example 2
let anotherPerson = new Object()
anotherPerson.firstName = 'Josue'
anotherPerson.lastName = 'Guzman'
console.log('2. anotherPerson: ', anotherPerson)

console.log('\n')
console.log('####################')
// example 3
// function constructor
function Person() {
  this.firstName = 'Yarelis'
  this.lastName = 'Diaz'
}

let yarelis = new Person()
console.log('3. yarelis: ', yarelis)

console.log('\n')
console.log('####################')
// example 4
// prototypal inheritance in JavaScript

function PersonObject(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

let josue = new PersonObject('Josue', 'Guzman')
console.log('4. josue: ', josue)

let alberto = new PersonObject('Alberto', 'Guzman')
console.log('5. alberto: ', alberto)

console.log('\n')
console.log('####################')
// example 5

// Extending, adding more properties and methods
// an it will be available on the object
PersonObject.prototype.printFullName = function () {
  return this.firstName + ' ' + this.lastName
}
console.log('6. alberto.printName(): ', alberto.printFullName())
console.log('7. alberto.firstName.toString(): ', alberto.firstName.toString())
console.log('8. josue.printName(): ', josue.printFullName())
