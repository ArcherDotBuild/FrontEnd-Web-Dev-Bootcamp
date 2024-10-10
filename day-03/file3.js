console.log('\n')
//* 💻 loops */
console.log('********************')
console.log('loops')

// while
// while(condition is true) {
//   do something
// }

let index = 1
while (index <= 5) {
  console.log('while loop: ', index)
  // index++
  index += 1
}

// the differences between while and do while
// is that in do while the first piece of code will be executed
// do while
// do {
//   do something
// }
// while(condition is true)
console.log('\n')
index = 1
do {
  // do something
  index++
  console.log('do while loop: ', index)
} while (index <= 5)

console.log('\n')
console.log('********************')

// for loop
// for(declaration; condition; update)
for (let index = 1; index <= 5; index++) {
  console.log('for loop: ', index)
}

console.log('\n')
let text = 'archer'
for (let index = 0; index < text.length; index++) {
  // console.log(text[index]) // same result as chartAt
  console.log(text.charAt(index))
}

console.log('\n')
//* 💻 arrays */
console.log('********************')
console.log('arrays')
// arrays work's with indexes, indexes start at 0
// arrays let us define collections, of similar data types
// like numbers, strings, a list of user's object's, collection of booleans etc

const fruits = ['Apple', 'Orange', 'Kiwi']
console.log('fruits: ', fruits)
console.log('fruits[0]: ', fruits[0]) // 'Apple'
console.log('fruits[1]: ', fruits[1]) // 'Orange'
console.log('fruits[2]: ', fruits[2]) // 'Kiwi'
console.log('fruits[3]: ', fruits[3]) // Undefined

console.log('\n')
let numbers = [1, 2, 3, 4, 5, 6, 7]
console.log('numbers: ', numbers) // [1, 2, 3, 4, 5, 6, 7]
console.log('numbers.length: ', numbers.length) // 7

console.log('\n')
let random = [1, 5, 7] // => [1, 3, 7]
console.log('random: ', random) // [1, 5, 7]
console.log('random[1] = 3: ', (random[1] = 3))
console.log('random: ', random) // [(1, 3, 7)]

console.log('\n')
// multiply data types
const multipleDataTypes = ['string', 2, false]
console.log('multipleDataTypes: ', multipleDataTypes)

console.log('\n')
let sum = 0
for (let index = 0; index < numbers.length; index++) {
  console.log((sum = sum + numbers[index]))
  // sum = sum + numbers[index]
}

numbers.push(25) // adds value to the end of the array
console.log('numbers: ', numbers)
numbers.push(99, 40, 1)
console.log('numbers: ', numbers)
numbers.pop() // removes last value of the array
numbers.pop()
numbers.pop()
console.log('numbers.length: ', numbers.length)
console.log('numbers: ', numbers)

console.log('\n')
//* 💻 loops pt2 */
console.log('********************')
console.log('loops pt2')

console.log('\n')
// for of
numbers = [1, 2, 3, 4, 5, 6, 10, 20, 25, 45]
let evenNumbers = []
let oddNumbers = []

// no index++ value here, it automatically increments the value
// num = numbers[index]
for (let num of numbers) {
  if (num % 2 == 0) {
    evenNumbers.push(num)
  } else {
    oddNumbers.push(num)
  }
}

console.log('numbers: ', numbers)
console.log('evenNumbers: ', evenNumbers)
console.log('oddNumbers: ', oddNumbers)

console.log('\n')
// for in
// prints the indexes
for (let index in numbers) {
  console.log('index: ', index)
  console.log('index value: ', numbers[index])
}

console.log('\n')
// merge arrays
console.log('numbers: ', numbers)
let mergedArrays = evenNumbers.concat(oddNumbers) // (10) [2, 4, 6, 10, 20, 1, 3, 5, 25, 45]
console.log('mergedArrays: ', mergedArrays)

// numbers = [1, 2, 3, 4, 5, 6, 10, 20, 25, 45]
let splitTheArray = numbers.slice(0, 4) // starting from 0, the fourth element is excluded
console.log('splitTheArray: ', splitTheArray) // (4) [1, 2, 3, 4]

let splitTheArray2 = numbers.slice(4, numbers.length)
console.log('splitTheArray2: ', splitTheArray2) // (6) [5, 6, 10, 20, 25, 45]

// negative indexing
let negativeSplit = numbers.slice(-1)
console.log('negativeSplit: ', negativeSplit) // [45]

let negativeSplit2 = numbers.slice(-3)
console.log('negativeSplit2: ', negativeSplit2) // (3) [20, 25, 45]