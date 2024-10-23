//** ******************** */
//** #################### */
// Array.prototype // run this in the browser console

//** Array */
console.log('Array:')
console.log('\n')

// example 1
let firstSet = [1, 3, 5, 8, 10]
let anotherSet = [2, 6, 9, 12, 45, 30, 27]

console.log('1. firstSet.length: ', firstSet.length)

console.log('####################')
// It defines a new method (evenNumbers) for all arrays.
// When called, this method returns a new array containing only the even numbers from the original array.
Array.prototype.evenNumbers = function () {
  return this.filter(function (item) {
    return item % 2 === 0
  })
}

// This creates a new array containing only the even numbers from the original array.
console.log('2. firstSet.evenNumbers():')
console.log(firstSet.evenNumbers()) // [8, 10]
console.log('3. anotherSet.evenNumbers():')
console.log(anotherSet.evenNumbers()) // [2, 6, 12, 30]

console.log('\n')
console.log('####################')
// Convert a native filter function
// example 2
let originalFilter = Array.prototype.filter
Array.prototype.filter = console.log
console.log('4. firstSet.filter(57):')
firstSet.filter(57)

console.log('\n')
console.log('####################')
// call by value
// example 3
let a = 2
let b = a
console.log('5. a: ', a) // 2
console.log('5. b: ', b) // 2
a = 10
console.log('5. a: ', a) // 10
console.log('5. b: ', b) // 2

console.log('\n')
console.log('####################')
// call by reference
// example 4

let user = {
  firstName: 'Alberto',
}
let sayayin = user
user.firstName = 'Super Guzman'
console.log('6. sayayin: ', sayayin) // {firstName: 'Super Guzman'}
console.log('7. user: ', user) // {firstName: 'Super Guzman'}

console.log('\n')
console.log('####################')
// Object.create
// example 5
// function Accepts an object as a parameter and it uses it to create a new object
// prototypical inheritance
let org = { org: 'Archer' }
let teacher = Object.create(org, { firstName: { value: 'Alberto' } })
// console.log(Object.create(org, { name: { value: 'sword' } }))
console.log('8. teacher: ', teacher)
org.location = 'Barranquilla'
console.log('9. teacher: ', teacher) // location shows up in the prototype, in the console devtools

// Check whether a property
Object.hasOwn(teacher, 'firstName')
console.log(Object.hasOwn(teacher, 'firstName')) // true
console.log(Object.hasOwn(teacher, 'location')) // false

console.log('\n')
console.log('####################')
// Object.assign()
// example 6
let person = { name: 'Alberto' }
let carBrand = { car: 'Mazda' }

console.log('10.')
console.log(Object.assign({}, person, carBrand))

console.log('\n')
console.log('####################')
// class
// example 7
class Shape {
  constructor(height, width) {
    this.height = height
    this.width = width
  }
  area() {
    return this.height * this.width
  }
}

let rectangle = new Shape(10, 20)
console.log('11. rectangle: ', rectangle)
console.log('11. rectangle.area(): ', rectangle.area())

console.log('\n')
console.log('####################')
class Square extends Shape {
  constructor(dimension) {
    super(dimension, dimension)
  }
}

console.log('12a. new Square(10): ', new Square(10))
console.log('12b. new Square(10).area(): ', new Square(10).area())