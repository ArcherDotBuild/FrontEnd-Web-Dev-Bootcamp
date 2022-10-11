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

console.log('\n')
let firstSet = [1, 3, 5, 8, 10]
let anotherSet = [2, 6, 9, 12, 45, 30, 27]

console.log(firstSet, anotherSet)

Array.prototype.evenNumbers = function () {
  return this.filter(function (item) {
    return item % 2 === 0
  })
}
console.log(firstSet.evenNumbers()) // [8, 10]
console.log(anotherSet.evenNumbers()) // [2, 6, 12, 30]

// Convert native func
// filter
let originalFilter = Array.prototype.filter
Array.prototype.filter = console.log
console.log(firstSet.filter(57))

console.log('\n')
// call by value && call by ref
let a = 2
let b = a
console.log(a) // 2
console.log(b) // 2
a = 10
console.log(b) // 2
console.log(a) // 10

console.log('\n')
// objects
let vegeta = {
  firstName: 'vegeta',
}
let trunk = vegeta
vegeta.firstName = 'super sayayin'
console.log(trunk) // {firstName: 'super sayayin'}
console.log(vegeta) // {firstName: 'super sayayin'}

console.log('\n')

// Object.create
// function Accepts an object as a parameter and it uses it to create a new object

let org = { org: 'Archer' }
// let anotherPersonForOrg = Object.create(org, { name: { value: 'Sword' } })
// console.log(anotherPersonForOrg)
console.log(Object.create(org, { name: { value: 'sword' } }))
