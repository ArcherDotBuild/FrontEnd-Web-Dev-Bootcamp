console.log('####################')
//* function borrowing
console.log('function borrowing:')

let person = {
  firstName: 'Alberto',
  lastName: 'Guzman',
  getName: function () {
    console.log(this)
    return this.firstName + ' ' + this.lastName
  },
}

let doctor = {
  firstName: 'Consuelo',
  lastName: 'Leon',
}

console.log(person.getName.call(doctor))

console.log('\n')
// example 6
console.log('####################')
//* function currying
console.log('function currying:')

// Create a new function out of an existing function
function logData(date, data) {
  console.log(date, data)
}

console.log('1: ')
logData(new Date(), 'this is data to be logged')

console.log('2: ')
// fix the first parameter to this function
let logNow = logData.bind(null, new Date())
// let logNow = logData.bind(null, new Date(), 'second')
logNow('a. this is another info to be logged')
logNow('b. some other data')

console.log('\n')
// example 7
console.log('####################')

function add(firstNum) {
  return function (secondNum) {
    console.log(firstNum + secondNum)
    return firstNum + secondNum
  }
}

let addWith = add(5)
// console.log(addWith(2)) // 7
addWith(2) // 7
add(5)(2) // 7
// console.log(addWith(7)) // 12
addWith(7) // 7
add(5)(7) // 12

console.log('\n')
console.log('####################')
function addBind(firstNum, secondNum) {
  return firstNum + secondNum
}

const add5With = addBind.bind(null, 5)
console.log('add5With: ', add5With(20))

// default values for params
console.log('\n')

function printSomeText(text = 'Archer') {
  console.log(text)
}
printSomeText()
printSomeText('ElfGodd')
