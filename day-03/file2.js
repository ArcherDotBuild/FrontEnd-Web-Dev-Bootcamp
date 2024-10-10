//* 💻 flow statements */
console.log('********************')
console.log('flow statements')

// if and else keywords
let num1 = 5,
  num2 = 2

if (num2 > num1) {
  console.log(num2 + ' is greater than ' + num1)
}

num2 = 99
if (num2 > num1) {
  console.log(num2 + ' is greater than ' + num1)
} else {
  console.log(num2 + ' is not greater than ' + num1)
}

num2 = 5
if (num2 > num1) {
  console.log(num2 + ' is greater than ' + num1)
} else if (num2 < num1) {
  console.log(num2 + ' is less than ' + num1)
} else {
  console.log('both the numbers are equal')
  console.log('this is another statement')
}

console.log('\n')
//* 💻 ternary operator */
console.log('********************')
console.log('ternary operator')

// restart nums
;(num1 = 5), (num2 = 2)

// (condition) ? "if true, executed" : "if false, executed"
console.log(
  num1 > num2 ? 'num1 is greater than num2' : 'num2 is greater than num1'
)
num2 = 10
// with concatenation
console.log(
  num1 > num2
    ? num1 + ' is greater than ' + num2
    : num2 + ' is greater than ' + num1
)
// (condition) ? "if true, executed" : "else if" ? "true" : "false"
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
//* 💻 switch case */
console.log('********************')
console.log('switch case')
// restart nums
;(num1 = 5), (num2 = 2)

console.log('num1, num2: ', num1, num2)
let dayOfTheWeek = 1
switch (dayOfTheWeek) {
  case 1:
    console.log('sunday')
    break // break out of this case
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
