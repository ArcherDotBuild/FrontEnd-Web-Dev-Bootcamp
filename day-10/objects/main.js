function printText() {
  console.log('hello')
}

printText.areYouAnObject = true

let a = 2

let person = {
  firstName: 'Alberto',
  lastName: 'Guzman',
  getName: function () {
    console.log(this)
    return this.firstName + ' ' + this.lastName
  },
}

// console.log('\n')
// console.log(person)
// console.log('\n')
// console.log(person.getName())

// console.log('\n')
// function greetPerson() {
//   console.log('Namaste', person.getName())
// }

// bind
// Creates a new copy of the function that we calling bind on
// console.log('\n')
// let greetAlberto = greetPerson.bind(person)
// console.log(greetAlberto())

console.log('\n')
function greetPerson(greeting) {
  console.log(greeting, person.getName())
}
// call
// Doesn't create a copy
greetPerson.call(person, 'namaste')

// apply
// arguments
// function sum(x, y) {
//   // Arguments returns an array
//   console.log(arguments) // {"0": 2, "1": 3}
//   return x + y
// }
// sum(2, 3, 1)

function sum(x, y) {
  let total = 0
  for (let index = 0; index < arguments.length; index++) {
    total += arguments[index]
    console.log(index)
  }
  return 'total: ' + total
}
console.log(sum(2, 3, 4, 5))

console.log('\n')
// apply accepts an array of arguments
greetPerson.apply(person, ['hello', 'Mr'])
