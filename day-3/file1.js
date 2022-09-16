console.log('data types')
console.log('\n')

// numbers
console.log(12)
console.log(12.4)

// strings
console.log('archer')

// boolean
console.log(true)
console.log(false)

var firstName = 'alberto'
let foo = 'archer'
console.log(foo)

foo = 10
console.log(foo)

// type of value that a variable holds it is not fix in javascript
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
console.log(1 - 'a') // NaN

// Symbol data type
// BigInt data type

// Creating an Object
let person = { firstName: 'Alberto', lastName: 'doe', age: 35 }
// Access indivual properties within an object
console.log(person.firstName)
console.log(lastName)
console.log(person.age)

person.isLearningFrontEnd = true
console.log(person)
// {firstName: 'Alberto', lastName: 'doe', age: 35, isLearningFrontEnd: true}

// ####################
// operators in JS
// addition, subtraction, multiplication, division, exponentiation, and modulus operations.

// + addition
let num1 = 10
let num2 = 20
num1 + num2 // 30

// post increment
num1++ // 30
// 31 , num1 = num1 + 1

// pre increment
++num1 // 32

// shorthand operator
num1 += 1 // num1 = num1 + 1, 33

// - subtraction
num2 - num1 // 23

num2-- // 23
num2 // 22

// * multiplication
// restart nums
// num1 = 10, num2 = 20

num1 * num2 // 200

// / division
num2 / num1 // 2

// type conversion, converting one data type to another
num1.toString() // '10'
parseInt(num1) // 10
false.toString() // 'false'
Boolean(0) // false
Boolean(1) // true
Boolean(7) // true, anything other than 0 is consider true value
Boolean('') // false
Boolean(' ') // true
Boolean('a') // true

// ####################
// type coercion

// concatenation
"Alberto's age is " + 30 // "Alberto's age is 35"

let str1 = 'abc',
  str2 = 'def'
stri1 + stri2 // 'abcdef

// plus operator converts thins to strings
'1' + 1 // '11'
parseInt('1') + 1 // 2

// subtraction operator converts into numbers
'1' - 1 // 0

'2' - 'a' // NaN

'1' - -1 // 2

'1' + -1 // 1-1'

// ####################
// Conditional operators
// restart nums
// num1 = 10, num2 = 20

num1 > num2 // false
num2 > num1 // true
num1 < num2 // true
num1 >= num2 // false
num1 == num2 // false
1 = 1 // true
2 >= 2 // true