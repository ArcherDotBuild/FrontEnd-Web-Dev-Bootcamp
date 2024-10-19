//** ******************** */
//** Execution Context */

//  Example 1
// // This is an execution context
// var a = 2
// // This is another execution context
// function printMe() {
//   console.log(a)
// }

// console.log('printMe(): ', printMe())
// console.log('a: ', a)
// console.log('window.a: ', window.a)
// console.log('window.printMe(): ', window.printMe)
// console.log('this: ', this)
// console.log('this.a: ', this.a)
// console.log('this.printMe(): ', this.printMe)

//** #################### */
//  Example 2
// Lexical environment
// function printMe() {
//   var a = 2
//   console.log(a)
// }

// printMe()
// console.log(a) // Example 2: Uncaught ReferenceError: a is not defined

//** #################### */

// Execution Context
// 1 base level: global object: means that is accessible to everyone
// 2 this, keyword
// 3 reference to outer enviroment

//** #################### */
//** Hoisting */
// Example 3
// Calling a variable before declaring it

// console.log(someVariable) // undefined
// someFunction() // undefined

// function someFunction() {
//   console.log('from someFunction', someVariable) // 'from someFunction' undefined
// }

// var someVariable = 'archer' // declaration

// console.log(someVariable) // 'archer'
// someFunction() // 'from someFunction' archer

//** #################### */
// Execution context created
// 2 phases

// 1. Creation phase
// loads variables and functions in memory

// 2. Execution phase
// executes the statements line by line

//** #################### */
// Example 4

// var myName = 'Alberto'
// function printName() {
//   console.log('3. myName', myName)
//   printAnotherName()
// }

// function printAnotherName() {
//   var myName = 'Josue'
//   console.log('4. myName', myName)
//   printSomeOtherName()
// }

// function printSomeOtherName() {
//   var myName = 'Yarelis'
//   console.log('5. myName', myName) // reference to outer enviroment, in case var myName = 'Yarelis' is missing
// }

// console.log('1. myName: ', myName)
// console.log('2. this.myName: ', this.myName)
// console.log('6. printName(): ', printName())
// console.log('7. printAnotherName(): ', printAnotherName())
// console.log('8. printSomeOtherName(): ', printSomeOtherName())

//** #################### */
// Example 5

// var myName = 'Alberto'
// function printName() {
//   // var myName = 'Josue'
//   console.log('1. myName', myName)
//   // nested function
//   function printAnotherName() {
//     console.log('2. myName', myName)
//   }
//   printAnotherName()
// }
//  printName()

//** #################### */
// Example 6

// let someVar
// console.log('1. someVar: ', someVar)
// someFunc()
// function someFunc() {
//   someVar = 'elfgodd'
//   console.log('from someFunc: ', someVar)
// }
// console.log('2. someVar: ', someVar)
