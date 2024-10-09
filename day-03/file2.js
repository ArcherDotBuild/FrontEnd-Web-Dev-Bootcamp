// ####################
// flow statements
// if and else keywords
let num1 = 5,
  num2 = 2

// if (num2 > num1) {
//   console.log(num2 + ' is greater than ' + num1)
// }

// if (num2 > num1) {
//   console.log(num2 + ' is greater than ' + num1)
// } else {
//   console.log(num2 + ' is not greater than ' + num1)
// }

if (num2 > num1) {
  console.log(num2 + ' is greater than ' + num1)
} else if (num2 < num1) {
  console.log(num2 + ' is less than ' + num1)
} else {
  console.log('both the numbers are equal')
  console.log('this is another statement')
}

console.log('\n')
// ####################
// ternary operator
// restart nums
// num1 = 5, num2 = 2

// (condition) ? "if true executed" : "if false executed"
console.log(
  num1 > num2 ? 'num1 is greater than num2' : 'num2 is greater than num1'
)
num2 = 10
// with concatenation
console.log(
  num1 > num2 ? 'num1 is greater than ' + num2 : 'num2 is greater than num1'
)
// (condition) ? "if true executed" : "else if" ? "true" : "false"
console.log('\n')
num1 = 10
console.log(
  num1 > num2
    ? 'num 1 is greater than num2'
    : num1 < num2
    ? 'num1 is less than num2'
    : 'both are equal'
)

console.log('\n')
// ####################
// switch case
// restart nums(num1 = 5), (num2 = 2)
// console.log(num1, num2)
let dayOfTheWeek = 1
switch (dayOfTheWeek) {
  case 1:
    console.log('sunday')
    break
  case 2:
    console.log('monday')
    break
  case 3:
    console.log('tuesday')
    break
  case 4:
    console.log('wednestday')
    break
  case 5:
    console.log('thursday')
    break
  case 6:
    console.log('saturday')
    break
  default:
    console.log('invalid input for day')
}

console.log('\n')
// ####################
// loops

// while
// while(condition is true) {
//   do something
// }

let index = 1
while (index <= 10) {
  console.log(index)
  // index++
  index += 1
}

// the differences between while and do while
// is that in do while the first piece of code will be executed
console.log('\n')
index = 1
do {
  // do something
  console.log(index)
  index++
} while (index <= 10)

// for loop
// for(CSSStyleDeclaration; condition; update)
for (let index = 1; index <= 10; index++) {
  console.log(index)
}

console.log('\n')
let text = 'archer'
for (let index = 0; index < text.length; index++) {
  // console.log(text[index]) // same result as chartAt
  console.log(text.charAt(index))
}

console.log('\n')
// ####################
// arrays
// arrays work's with indexes, indexes start with 0
// arrays let us define collections, of similar data types
// like numbers, strings, a list of user's object's, collection of booleans etc

const fruits = ['Apple', 'Orange', 'Kiwi']
console.log(fruits[0]) // 'Apple'
console.log(fruits[1]) // 'Orange'
console.log(fruits[2]) // 'Kiwi'
console.log(fruits[3]) // Undefined

console.log('\n')
const numbers = [1, 2, 3, 4, 5, 6, 7]
console.log(numbers) // [1, 2, 3, 4, 5, 6, 7]
console.log(numbers.length) // 7

console.log('\n')
let random = [1, 5, 7] // => [1, 3, 7]
console.log(random) // [1, 5, 7]
console.log((random[1] = 3))
console.log(random) // [(1, 3, 7)]

console.log('\n')
// multiply data types
const dataTypesMultiply = ['string', 2, false]
console.log(dataTypesMultiply)

console.log('\n')
let sum = 0
for (let index = 0; index < numbers.length; index++) {
  sum = sum + numbers[index]
}
numbers.push(25) // adds values to the array
console.log(numbers)
numbers.push(24, 23, 22)
console.log(numbers)
numbers.pop() // removes values of the array
numbers.pop()
numbers.pop()
console.log(numbers.length)

// for of
console.log('\n')
numbers = [1, 2, 3, 4, 5, 6, 10, 20, 25, 45]
console.log(numbers)
let evenNumbers = []
let oddNumbers = []
for (let num of numbers) {
  if (num % 2 == 0) {
    evenNumbers.push(num)
  } else {
    oddNumbers.push(num)
  }
}

// for in
console.log('\n')
for (let index in numbers) {
  console.log(index)
  console.log(numbers[index])
}

// merge arrays
let mergedArrays = evenNumbers.concat(oddNumbers) // (10) [2, 4, 6, 10, 20, 1, 3, 5, 25, 45]
console.log(mergedArrays)

// split the array [1, 2, 3, 4, 5, 6, 10, 20, 25, 45]
let splitTheArray = numbers.slice(0, 4)
console.log(splitTheArray) // (4) [1, 2, 3, 4]

let splitTheArray2 = numbers.slice(4, numbers.length)
console.log(splitTheArray2) // (6) [5, 6, 10, 20, 25, 45]

// negative indexing
let negativeSplit = numbers.slice(-1)
console.log(negativeSplit) // [45]

let negativeSplit2 = numbers.slice(-3)
console.log(negativeSplit2) // (3) [20, 25, 45]
