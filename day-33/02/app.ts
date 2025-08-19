let somevariableTS = 'alberto'
console.log(somevariableTS)
somevariableTS = 'elfgodd'
console.log(somevariableTS)

console.log(somevariableTS.toUpperCase())
// somevariable = 17 // Type 'number' is not assignable to type 'string'

function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber
}

console.log(addNumbers(5, 10))
console.log(addNumbers(5, '9'))

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

// 28m