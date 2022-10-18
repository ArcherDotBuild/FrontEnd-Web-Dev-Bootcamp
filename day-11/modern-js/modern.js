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
