// function borrowing

let person = {
  firstName: 'Alberto',
  lastName: 'Guzman',
  getName: function () {
    console.log(this)
    return this.firstName + ' ' + this.lastName
  },
}

let doctor = {
  firstName: 'Alberto',
  lastName: 'Guzman',
}

console.log(person.getName.call(doctor))

console.log('\n')
// function currying

function logData(date, data) {
  console.log(date, data)
}
logData(new Date(), 'this is data to be logged')

console.log('\n')
let logNow = logData.bind(null, new Date())
logNow('Date coming watch it')

console.log('\n')
let logNow2 = logData.bind(null, new Date(), 'second')
logNow2('Date coming watch it')

console.log('\n')
function add(firstNum) {
  return function (secondNum) {
    console.log(firstNum + secondNum)
    return firstNum + secondNum
  }
}
add(5)(2)
add(5)(7)
add(6)(9)

console.log('\n')
function addBind(firstNum, secondNum) {
  return firstNum + secondNum
}

const addWithBind = addBind.bind(null, 5)
console.log('bind: ', addWithBind(20))

// default values for params
console.log('\n')

function printSomeText(text = 'Erase') {
  console.log(text)
}
printSomeText()
printSomeText('ElfGodd')
