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

// ####################
// ternary operator
// restart nums
// num1 = 5, num2 = 2
num1 > num2 ? 'num1 is greater than num2' : 'num2 is greater than num1'
