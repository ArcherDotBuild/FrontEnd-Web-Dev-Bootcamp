//** ******************** */
//** #################### */
//** Event loop */

// !
// ?

// TODO: Example 1

// synchronous
console.log('first event')
console.log('second event')
console.log('third event')

console.log('----- END -----')

console.log('\n')
console.log('####################')
// TODO: example 2

/*
// Optional Check: If you want to avoid potential errors in case the element is missing, you could add a conditional check:
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#clickable')
  if (button) {
    button.addEventListener('click', handleClick)
  }
})
*/

/*
const longRunningFn = () => {
  console.log('longRunningFn func started')
  const duration = Date.now() + 3000
  while (Date.now() <= duration) {}
  console.log('longRunningFn func ended')
}

const handleClick = () => {
  console.log('button clicked')
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#clickable').addEventListener('click', handleClick)
})
*/

// TODO: example 3
const longRunningFn = () => {
  console.log('longRunningFn func started')
  const duration = Date.now() + 3000
  while (Date.now() <= duration) {}
  console.log('longRunningFn func ended')
}

const anotherFn = () => {
  console.log('another fun loaded')
  longRunningFn()
}

const someFunction = () => {
  anotherFn()
}

const handleClick = () => {
  console.log('button clicked')
}

const fnWithTimeout = () => {
  console.log('called with a timer')
  setTimeout(function timer() {
    console.log("i'm called after a delay")
  }, 2000)
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#clickable').addEventListener('click', handleClick)
  fnWithTimeout()
  someFunction()
})
