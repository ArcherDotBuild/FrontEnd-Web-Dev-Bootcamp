//* 💻 primitive data types */
console.log('********************')
console.log('data types')

// numbers
console.log(12)
console.log(12.4)

// strings
console.log('archer')

// boolean
console.log(true)
console.log(false)

//* 💻 variables  */
console.log('********************')
console.log('variables')

var firstName = 'alberto'
let foo = 'archer'
console.log(foo)

foo = 10
console.log(foo)

// type of value that a variable holds it is not fixed in javascript
// it is dynamic in nature
foo = true
console.log(foo)

// variables whos value can not be change
const a = 10
// a = 20 // TypeError: Assigment to constant variable

let baz
console.log(baz) // undefined

baz = null
console.log(baz) // null

console.log(1 + 1) // 2
console.log(1 - 'a') // NaN not a valid number, data type

// Symbol data type
// BigInt data type

//* 💻 objects   */
console.log('********************')
console.log('objects')

// Creating an Object
// key: value pairs
let person = { firstName: 'Alberto', lastName: 'Guzman', age: 37 }

// Access indivual properties within an object
console.log(person.firstName) // 'Alberto'
// console.log(lastName) // ReferenceError: lastName is not defined
console.log(person.age)

person.isLearningFrontEnd = true
console.log(person) // person object
// {firstName: 'Alberto', lastName: 'Guzman', age: 37, isLearningFrontEnd: true}

//* 💻 operators in JS   */
console.log('********************')
console.log('operators in JS')
// addition, subtraction, multiplication, division, exponentiation, and modulus operations.

// + addition
let num1 = 10
let num2 = 20
console.log('num1 + num2:', num1 + num2) // 30

// post increment
console.log('num1++: ', num1++) // 10
console.log('num1: ', num1) // 31 , num1 = num1 + 1

// pre increment
console.log('++num1: ', ++num1) // 12

// shorthand operator
console.log('num1 += 1: ', (num1 += 1)) // num1 = num1 + 12 = 13

// - subtraction
console.log('num2 - num1: ', num2 - num1) // 7

console.log('--num2: ', --num2) // 19

// multiplication
console.log('num1 * num2: ', num1 * num2) // 247

// division
console.log('num2 / num1: ', num2 / num1) // 1.46

//* 💻 type conversion   */
console.log('********************')
console.log('type conversion')
// converting one data type to another
console.log('num1.toString(): ', num1.toString()) // '13'
console.log('parseInt(num1): ', parseInt(num1)) // 13

console.log('false: ', false) // false
console.log('false.toString(): ', false.toString()) // 'false'
// anything other than 0 is consider true value
console.log('Boolean(0); ', Boolean(0)) // false
console.log('Boolean(1): ', Boolean(1)) // true
console.log('Boolean(7): ', Boolean(7)) // true
console.log('Boolean(""): ', Boolean('')) // false
console.log('Boolean(" "): ', Boolean(' ')) // true
console.log('Boolean("a"): ', Boolean('a')) // true

//* 💻 type coercion  */
console.log('********************')
console.log('type coercion')

// concatenation
console.log("Alberto's age is " + 37) // "Alberto's age is 37"

let str1 = 'abc',
  str2 = 'def'
console.log('str1, str2: ', str1, str2)
console.log('str1 + str2: ', str1 + str2) // 'abcdef

// plus operator converts things to strings
console.log("'1' + 1: ", '1' + 1) // '11'
console.log("parseInt('1'): ", parseInt('1') + 1) // 2

// subtraction operator converts into numbers
console.log("'1' - 1: ", '1' - 1) // 0
console.log("'2' - 'a': ", '2' - 'a') // NaN
console.log("'1' - -1: ", '1' - -1) // 2
console.log("'1' + -1: ", '1' + -1) // 1-1

//* 💻 Conditional operators  */
console.log('********************')
console.log('Conditional operators')
;(num1 = 10), (num2 = 20)
console.log('num1: ', num1)
console.log('num2: ', num2)
console.log('num1 > num2: ', num1 > num2) // false
console.log('num2 > num1: ', num2 > num1) // true
console.log('num1 < num2: ', num1 < num2) // true
console.log('num1 >= num2: ', num1 >= num2) // false
console.log('num1 == num2: ', num1 == num2) // false
console.log('1 == 1: ', 1 == 1) // true
console.log('2 >= 2: ', 2 >= 2) // true
