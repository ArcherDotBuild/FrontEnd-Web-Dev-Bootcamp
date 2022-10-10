// object literal syntax

let person = {
  firstName: 'Alberto',
  lastName: 'Guzman',
}

console.log(person)

console.log('\n')
let anotherPerson = new Object()
anotherPerson.firstName = 'Josue'
anotherPerson.lastName = 'Guzman'
console.log(anotherPerson)

console.log('\n')
// function constructor
function Person() {
  this.firstName = 'Yarelis'
  this.lastName = 'Diaz'
}
let yarelis = new Person()
console.log(yarelis)

console.log('\n')
// prototypal inheritance in JS

function Person2(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

let gohan = new Person2('gohan', 'hijo')
console.log(gohan)

console.log('\n')
let alberto = new Person2('Alberto', 'Guzman')
console.log(alberto)

console.log('\n')
// Extending, adding more properties and methods
// an it will be available on the object
Person2.prototype.printName = function () {
  return this.firstName + ' ' + this.lastName
}
console.log(alberto.printName())
console.log(alberto.firstName.toString())
console.log(gohan.printName())

// Array.prototype // run this in the browser console
