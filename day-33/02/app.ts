let somevariableTS = 'alberto'
console.log(somevariableTS)
somevariableTS = 'elfgodd'
console.log(somevariableTS)

console.log(somevariableTS.toUpperCase())
// somevariable = 17 // Type 'number' is not assignable to type 'string'

function addNumbers(firstNumber: number, secondNumber: number) {
  return firstNumber + secondNumber
}

console.log(addNumbers(5, 10))
// console.log(addNumbers(5, '9'))

function addNumbersTS(firstNumber: number, secondNumber: number): number {
  return firstNumber + secondNumber
}

console.log(addNumbersTS(2, 4))
// Argument of type 'string' is not assignable to parameter of type 'number'.
// console.log(addNumbersTS(3, '7'))

const personTS = {
  name: 'Alberto',
  role: 'Mentor',
}

// console.log(person.lastName) // Property 'lastName' does not exist on type '{ name: string; role: string; }'.

const firstName: string = 'Alberto'
const someBoolean: boolean = true
const fruits: string[] = ['banana', 'pear', 'orange']
const fruits2: Array<string> = ['banana', 'pear', 'orange'] // Generics in TS

// interfaces, types, classes

type Person = {
  firstName: string
  lastName: string
  age: number
  city?: string // optional property
}

// const user: Person = {}
// Type '{}' is missing the following properties from type 'Person': firstName, lastName, age

const user: Person = {
  firstName: 'Elf',
  lastName: 'Godd',
  age: 38,
}

interface User {
  firstName: string
  lastName: string
  age: number
}

const anotherUser: User = {
  firstName: 'Elf2',
  lastName: 'Godd2',
  age: 382,
}

class Employee implements User {
  firstName: string
  lastName: string
  age: number

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }
}

const employee = new Employee('Elf3', 'Godd3', 383)
console.log('employee: ', employee)

class Manager extends Employee {
  role: string
  constructor(firstName: string, lastName: string, age: number, role: string) {
    // this will call the Employee base class
    // constructor of the parent class
    super(firstName, lastName, age)
    this.role = role
  }
}

const manager = new Manager('fuz', 'baz', 36, 'Manager')

// type inference
// looking at the value determines the type of the variable

// implicit type inference
let username = 'test'
console.log('username: ', username)

// explicit type inference
let usernameExplicit: string = 'test2'
console.log('usernameExplicit: ', usernameExplicit)

// type any
// skips type checking
// it is a way to opt-out of type checking
// any type can be anything, it is not type checked
// it is not recommended to use any type, but it can be useful in some cases
let objectAny: any = { x: 0 }
objectAny.x
objectAny.y = 10 // no error, but it is not type checked
objectAny.foo() // no error, but it is not type checked

// generics
type Box<T> = {
  content: T
}

const stringBox: Box<string> = { content: 'abc' }
const numberBox: Box<number> = { content: 1 }

// literal types

// type action = 'add'
// Type '"subtract"' is not assignable to type '"add"'
// let addAction: action = 'subtract'

// union types
type action = 'add' | 'remove' | 'update'

let addAction: action = 'add'
let removeAction: action = 'remove'
// Type '"edit"' is not assignable to type 'action'
// let editAction: action = 'edit'
let editAction: action = 'update'

/* Error example
function getProperty(objectAny, key) {
 return obj[key]
}

let x = {a: 1, b: 2, c: 3, d: 4}

getProperty(x, 'b')
getProperty(x, 'e') // no error, but it is not type checked
*/

// keyof operator
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  // function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

let x = { a: 1, b: 2, c: 3, d: 4 }

getProperty(x, 'b')
// Argument of type '"e"' is not assignable to parameter of type '"b" | "a" | "c" | "d"'
// getProperty(x, 'e')

// typeof operator
const someUser = { name: 'jane', country: 'somecountry' }

type SomeUserType = typeof someUser

const anotherSomeUser: SomeUserType = {name: 'john', country: 'anothercountry'}

// 50 min
