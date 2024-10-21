// Array.prototype // run this in the browser console

console.log('\n')
let firstSet = [1, 3, 5, 8, 10]
let anotherSet = [2, 6, 9, 12, 45, 30, 27]

firstSet.length

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
let somePerson = Object.create(org, { name: { value: 'Sword' } })
// console.log(Object.create(org, { name: { value: 'sword' } }))
console.log(somePerson)
org.location = 'Barranquilla'
console.log(somePerson)

Object.hasOwn(somePerson, 'name')
console.log(Object.hasOwn(somePerson, 'name'))
console.log(Object.hasOwn(somePerson, 'location'))

console.log('\n')
// Object.assign()
let someP = { name: 'Alberto' }
let carP = { car: 'SomeCar' }

console.log(Object.assign({}, someP, carP))

// this need to be reviewed
// console.log(Object.assign({}, somePerson, { car: 'BMW' }))
// console.log(somePerson)

console.log('\n')
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
console.log(rectangle)
console.log(rectangle.area())

class Square extends Shape {
  constructor(dimension) {
    super(dimension, dimension)
  }
}

console.log(new Square(10))
console.log(new Square(10).area())

// ES6 ES2015

// template literal syntax

const firstName = 'Alberto'
const age = 35

console.log('Hi my name is ' + firstName + ' and my age is ' + age)
console.log(`Hi my name is ${firstName} and my age is ${age}`)
console.log(`Hi my name is "${firstName}" and my age is ${age}`)

console.log('\n')
// shorthand property

// instead of writing this property twice
let personOld = { firstName: firstName, age: age }
// the names of the variables and properties are going to be the same
// let personNew = { firstName, age }

let printMe = function () {
  console.log(this.firstName, this.age)
}
let personNew = {
  firstName,
  age,
  printMe() {
    console.log(this.firstName, this.age)
  },
}
console.log(personNew)

console.log('\n')
// destructuring

let anotherPerson = {
  firstName: 'Alberto',
  lastName: 'Guzman',
  address: {
    city: 'Barranquilla',
    state: 'BAQ',
  },
}

// let { firstName } = anotherPerson
let { firstName: firstDes } = anotherPerson
console.log(firstDes)
let {
  address: { city },
} = anotherPerson

let { address } = anotherPerson
console.log(city)
console.log(address)

console.log('\n')
// destructure arrays

const fruits = ['banana', 'pear', 'mango', 'pineapple']
console.log(fruits)
const [, pear] = fruits
console.log(pear)
const [, , , pineapple] = fruits
console.log(pineapple)

// fruits.at(0) // ('banana')
// fruits.at(-1) // ('pineapple')
// fruits.at(-2) // ('mango')

console.log('\n')
// alias
let { firstName: givenName } = anotherPerson
console.log(givenName)

console.log('\n')
// rest operator - ... => ellipsis notation

const { firstName: nameRest, ...remaining } = anotherPerson
console.log(nameRest, remaining)
console.log(nameRest)
console.log(remaining)

const [apple, ...rem] = fruits
console.log(apple, rem)

console.log('\n')
// spread operator
const moreFruits = [fruits]
console.log('moreFruits: ', moreFruits)
let spreadFruits = [...fruits]
console.log('spreadFruits: ', spreadFruits)
const anotherListOfFruits = ['Strawberry', 'Cherry']
spreadFruits = [...spreadFruits, ...anotherListOfFruits]
console.log(spreadFruits)
console.log({ ...anotherPerson, country: 'Colombia' })

console.log('\n')
// arrow functions
sum = (firstNum, secondNum) => {
  return firstNum + secondNum
}
console.log(sum(100, 50))

let multiplyArrow = (firstNum, secondNum) => console.log(firstNum * secondNum)
multiplyArrow(7, 3)

let sumArrow = (firstNum, secondNum) => {
  console.log(this) // window
  // console.log(arguments) we don't have access to arguments
  let result
  if (firstNum > secondNum) {
    result = firstNum + secondNum
  } else {
    result = 0
  }
  return result
}
console.log(sumArrow(5, 4))

fruits.at()

// pass multiple arguments using arrow function
let sumAll = (firstNum, secondNum, ...others) => {
  return firstNum + secondNum + others
}
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9)) // 33,4,5,6,7,8,9

console.log('\n')
// optional chaining
let human = {
  firstName: 'Josue',
  secondName: 'Guzman',
  age: 16,
}

if (human && human.age) {
  console.log(human.age)
}

// If the value is available it will be logged to the console
if (anotherPerson?.address?.city) {
  // if (anotherPerson && anotherPerson.address && anotherPerson.address.city) {
  console.log(anotherPerson.address.city)
}
if (human?.address?.city) {
  console.log(anotherPerson.address.city)
}

console.log('\n')
// nullish coalescing operator

let age1 = human.age || 20
console.log(age1) // 16
let age2 = anotherPerson.age || 20
console.log(age2) // 20

// if age is 0 it will drop 20 so lets do this
// let age1 = human.age && 20
