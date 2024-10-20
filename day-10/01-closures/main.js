//** ******************** */
//** #################### */

//** closures */
console.log('closures:')
//  Example 1
function add(firstNum) {
  return function (secondNum) {
    return firstNum + secondNum
  }
}

// This function is executed it creates a execution context
// then loaded onto the stack, once the function execution has been completed
// its execution is popped off the stack
let addWith = add(5)
console.log('addWith(2): ', addWith(2)) // 5 + 2 = 7
console.log('addWith(7): ', addWith(7)) // 5 + 7 = 12

console.log('\n')
//** #################### */
//** callback function */
console.log('callback function:')
//  Example 2

// document.addEventListener('DOMContentLoaded', function () {
//   console.log('this function gets called back when the event occurs')
// })

//  Example 3
function callMeOnceDone(fn) {
  console.log('Im done')
  fn()
}

function printText() {
  console.log('hello')
}

callMeOnceDone(printText)

console.log('\n')
//  Example 4
// callback cb with closures
console.log('\n')
function printTextDelay(text) {
  setTimeout(function () {
    console.log(text)
  }, 2000)
}

printTextDelay('Im printed with delay')
