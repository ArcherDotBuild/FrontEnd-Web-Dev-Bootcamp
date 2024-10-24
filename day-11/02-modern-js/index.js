//** ******************** */
//** #################### */
//** ECMAScript ES6 / ES2015 */

console.log('\n')
console.log('####################')
// example 1
// template literal syntax

const firstName = 'Alberto'
const age = 37
// ES5
console.log('1. Hi my name is ' + firstName + ' and my age is ' + age)
// ES6
console.log(`2. Hi my name is ${firstName} and my age is ${age}`)
console.log(
  `3. Hi my name is "${firstName}" and my age is ${
    age > 30 ? 'greater than 30' : 'less than 30'
  }`
)

console.log('\n')
console.log('####################')
// example 2
// shorthand property

// instead of writing this property twice
let personLHP = { firstName: firstName, age: age }
console.log('4. personLHP: ', personLHP)
// the names of the variables and properties are going to be the same
let personSHP = { firstName, age }
console.log('5. personSHP: ', personSHP)

console.log('\n')
console.log('####################')
// example 3
let person = {
  firstName,
  age,
  printMe: function () {
    console.log(this.firstName, this.age)
  },
}

console.log('6. ', person)
console.log('6. ', person.printMe())

console.log('\n')
console.log('####################')
// example 4
let personNew = {
  firstName,
  age,
  printMe() {
    console.log(this.firstName, this.age)
  },
}
console.log('7. ', personNew)
console.log('7. ', personNew.printMe())

console.log('\n')
console.log('####################')
// example 5
// destructuring

let anotherPerson = {
  firstNameDes: 'Alberto',
  lastName: 'Guzman',
  address: {
    city: 'Barranquilla',
    state: 'BAQ',
  },
}

console.log(anotherPerson)
let { firstNameDes } = anotherPerson
console.log('8. firstName2: ', firstNameDes)

// example 6
let {
  address: { city },
} = anotherPerson

let { address } = anotherPerson
console.log('10. city: ', city)
console.log('11. address: ', address)

console.log('\n')
console.log('####################')
// example 7
// alias
let { lastName: lastDes } = anotherPerson
console.log('9. lastName: lastDes: ', lastDes)

console.log('\n')
console.log('####################')
// example 8
// destructure arrays

const fruits = ['banana', 'mango', 'pear', 'pineapple']
console.log('12. fruits: ', fruits)
const [banana] = fruits
console.log('13. banana: ', banana)
const [, mango] = fruits
console.log('14. mango: ', mango)
const [, , , pineapple] = fruits
console.log('15. pineapple: ', pineapple)

// Run this in the console dev tools for new syntax .at for arrays
// fruits.at(0) // ('banana')
// fruits.at(-1) // ('pineapple')
// fruits.at(-2) // ('pear')

console.log('\n')
console.log('####################')
// example 9
// rest operator - ... => ellipsis notation

const { firstNameDes: nameRest, ...remaining } = anotherPerson
console.log('16. nameRest, remaining: ', nameRest, remaining)
console.log('17. nameRest: ', nameRest)
console.log('18. remaining: ', remaining)

console.log('fruits: ', fruits)
// banana alone, and the rest of the fruits in a new array
const [banana2, ...rem] = fruits
console.log('19. banana, rem: ', banana2, rem)

console.log('\n')
console.log('####################')
// example 10
// spread operator

// Array of arrays syntax
const moreFruits = [fruits]
console.log('20. moreFruits: ', moreFruits)
// Individual values syntax (spread)
let spreadFruits = [...fruits]
console.log('21. spreadFruits: ', spreadFruits)

// example 11
const anotherListOfFruits = ['Strawberry', 'Cherry']
spreadFruits = [...spreadFruits, ...anotherListOfFruits]
console.log('22. anotherListOfFruits: ', anotherListOfFruits)
console.log('23. spreadFruits: ', spreadFruits)

// example 12
// Adding a new property
console.log('24. Adding country: ', { ...anotherPerson, country: 'Colombia' })
// example 13
console.log('25. Spread address: ', {
  ...anotherPerson.address,
  country: 'Colombia',
})

console.log('\n')
console.log('####################')
// example 13
// arrow functions

function sum(firstNum, secondNum) {
  return firstNum + secondNum
}
let arrowSum = (firstNum, secondNum) => {
  return firstNum + secondNum
}
console.log('26. sum(100, 50): ', sum(100, 50))
console.log('26. arrowSum(100, 50): ', arrowSum(100, 50))

// example 14
let multiplyArrow = (firstNum, secondNum) => console.log(firstNum * secondNum)
console.log('27. multiplyArrow(7, 3): ', multiplyArrow(7, 3))

// example 15
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
console.log('28. sumArrow(5, 4): ', sumArrow(5, 4))

// example 16
// pass multiple arguments using arrow function
let sumAll = (firstNum, secondNum, ...others) => {
  return firstNum + secondNum + others
}
console.log(
  '29. sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9): ',
  sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9)
) // 33,4,5,6,7,8,9

console.log('\n')
console.log('####################')
// example 17
// optional chaining
let human = {
  firstName: 'Josue',
  secondName: 'Guzman',
  age: 18,
  address: [(city = 'Barranquilla')],
}

// & optional operator
// If the value is available it will be logged to the console
if (human && human.age) {
  console.log('30. ', human.age)
}

// ! question mark operator
// whatever comes before this question mark, it will check whether this value
// is defined or not, only then it will try and access that property
if (anotherPerson?.address?.city) {
  // long way condition
  // if (anotherPerson && anotherPerson.address && anotherPerson.address.city) {
  console.log('31. anotherPerson.address.city: ', anotherPerson.address.city)
}
if (human?.address?.[0]) {
  console.log('32. anotherPerson.address.city: ', anotherPerson.address.city)
}

// ! optional chaining (?.)
/* 
function devsnest(object) {
  return object?.person?.name;
}

Explanation:
object?.person?.name uses optional chaining to check each step:
- If object is undefined, it will return undefined without throwing an error.
- If object.person is undefined, it will return undefined.
- If both object and object.person are defined but object.person.name is undefined, it
will return undefined.

This approach guarantees that the function returns undefined in any case where object,
object.person, or object.person.name is undefined.
*/

console.log('\n')
console.log('####################')
// example 18
// nullish coalescing operator

let age1 = human.age || 20
console.log('33. age1: ', age1) // 18
let age2 = anotherPerson.age || 37
console.log('33. age2: ', age2) // 20

console.log('####################')
// example 19
// only if value is null or undefined the value will be assigned
let ageDoubleQuestion
let age3 = ageDoubleQuestion ?? 77
console.log('34. age3: ', age3)
ageDoubleQuestion = null
console.log('35. age3: ', age3)

console.log('####################')
// example 20
// if age is 0 it will drop 20 so lets do this

let ageZero = 10
let age4 = ((ageZero === 0 || ageZero === false) && 20) || ageZero
console.log('36. age4', age4)
