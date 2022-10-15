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
