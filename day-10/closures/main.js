function add(firstNum) {
  return function (secondNum) {
    return firstNum + secondNum
  }
}

let addWith = add(5)
console.log(addWith(2))
console.log(addWith(7))

console.log('\n')
// callback function

// document.addEventListener('DOMContentLoaded', function () {
//   console.log('this function gets called back when the event occurs')
// })

function callMeOnceDone(fn) {
  console.log('Im done')
  fn()
}

function printText() {
  console.log('hello')
}

callMeOnceDone(printText)

console.log('\n')
function printTextDelay(text) {
  setTimeout(function () {
    console.log(text)
  }, 2000)
}
printTextDelay('Im printed with delay')
