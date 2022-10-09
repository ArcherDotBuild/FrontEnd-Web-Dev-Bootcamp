// Execution Context

// ##########
//  Example 1
// var a = 2
// function printMe() {
//   // var a = 2
//   console.log(a)
// }

// printMe()
// console.log(a)

// 1 global object = means that is accessible to everyone
// 2 this
// 3 reference to outer enviroment

// ##########
// Example 2 Hoisting
// Calling a variable before declaring it

// console.log(someVariable) // undefined
// someFunction()

// function someFunction() {
//   console.log('from someFunction', someVariable) // undefined
// }

// var someVariable = 'elfgodd'

// console.log(someVariable) // elfgodd
// someFunction() // from someFunction elfgodd

// Execution context created
// 2 phases

// Creation phase
// loads variables and functions in memory

// Execution phase
// it executes the statements line by line

// ##########
// Example 3

// var myName = 'elfgodd'
// function printName() {
//   console.log(myName)
//   printAnotherName()
// }

// function printAnotherName() {
//   var myName = 'Josue'
//   console.log(myName)
//   printSomeOtherName()
// }

// function printSomeOtherName() {
//   // var myName = 'Yarelis'
//   console.log(myName)
// }

// console.log(myName)
// printName()
//printAnotherName()
//printSomeOtherName()

// Example 4
let someVar
console.log(someVar)
someFunc()
function someFunc() {
  someVar = 'elfgodd'
  console.log('from someFunc', someVar)
}
console.log(someVar)
