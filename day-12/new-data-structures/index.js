//** ******************** */
//** #################### */
//** New Data Structures */

//** Sets */
// TODO: example 1
let setOfNumbers = new Set()

setOfNumbers.add(2)
setOfNumbers.add(2)
setOfNumbers.add(2)

console.log('1. setOfNumbers: ', setOfNumbers)
console.log('2. setOfNumbers.has(3): ', setOfNumbers.has(3))
console.log('3. setOfNumbers.has(2): ', setOfNumbers.has(2))

setOfNumbers.add(5)
setOfNumbers.add(7)

console.log('\n')
setOfNumbers.delete(7)
console.log('4. setOfNumbers: ', setOfNumbers)

console.log('\n')
setOfNumbers.clear()
console.log('5. setOfNumbers: ', setOfNumbers)

console.log('\n')
console.log('####################')
// TODO: example 2

let listOfNumbers = [1, 2, 3, 4, 5, 6]
console.log('new Set(listOfNumbers): ', new Set(listOfNumbers))

// TODO: example 3
setOfNumbers[0] // undefined
console.log(setOfNumbers[0]) // undefined

console.log('6. setOfNumbers.values(): ', setOfNumbers.values())

// TODO: example 4
let newSet = new Set(listOfNumbers)
for (let item of newSet) {
  console.log('7. item: ', item)
}

console.log('\n')
console.log('####################')
// TODO: example 5

//** Maps */
// ! key value pairs

let map = new Map()
map.set('1', 'one')
console.log('8. map: ', map)

console.log('\n')
// TODO: example 6
// find the occurence of each letter in a sentence
let mapFind = new Map()
let sentence = 'This is a sentence'

// Loop through each character in the sentence after splitting it into an array of characters
for (let letter of sentence.split('')) {
  // Convert the character to lowercase to make the counting case-insensitive
  let caseInSensitiveLetter = letter.toLowerCase()

  // Check if the lowercase character already exists in the map
  if (mapFind.has(caseInSensitiveLetter)) {
    // If it exists, increment the count by 1 and update the map
    let count = mapFind.get(caseInSensitiveLetter)
    mapFind.set(caseInSensitiveLetter, count + 1)
  } else {
    // If the character is not in the map, add it with an initial count of 1
    mapFind.set(caseInSensitiveLetter, 1)
  }
}

console.log('9. mapFind: ', mapFind)
console.log('10. mapFind.keys(): ', mapFind.keys())
console.log('11. mapFind.values(): ', mapFind.values())

console.log('\n')
// TODO: example 7
//** Array */

// converting the mapFind (a Map object) into an array of values
// This function tells Array.from to include only the values (and ignore the keys) when building the new array.
let arrayMap = Array.from(mapFind, ([key, value]) => value)
console.log('12. arrayMap: ', arrayMap)

console.log('\n')
// TODO: example 8
// array of arrays
// produces an array of [key, value] pairs directly from the Map
let arrayOfArrays = Array.from(mapFind, (item) => item)
console.log('13. arrayOfArrays: ', arrayOfArrays)

console.log('\n')
// TODO: example 9
// array of objects
let arrayOfObjects = Array.from(mapFind, ([key, value]) => ({ key, value }))
console.log('14. :', arrayOfObjects)

console.log('\n')
// TODO: example 10
// Set array of values
let arrayOfSet = Array.from(newSet, (item) => item)
console.log('15. :', arrayOfSet)

console.log('\n')
// TODO: example 11
let array = [1, 2, 3, 4, 5]
console.log(
  '16. arr: ',
  array.some((item) => item % 2 === 0)
) // true
console.log(
  '17. arr: ',
  array.every((item) => item % 2 === 0)
) // false

console.log('\n')
// TODO: example 12
//map which converts one type of array to another type it
// returns it as new array

let kvArray = Array.from(mapFind, ([key, value]) => ({
  key,
  value,
}))

// console.log(newSet)
// console.log(mapFind)
console.log('18. kvArray: ', kvArray)
console.log(
  '19. kvArray: ',
  kvArray.map((currentItem) => currentItem.key)
)
console.log(
  '19. kvArray: ',
  kvArray.map((currentItem) => currentItem.value)
)

console.log('\n')
// TODO: example 13
// Array.filter modify it's default behaviour using the prototype

let originalFilterFn = Array.prototype.filter

Array.prototype.filter = function (cb) {
  // this reference to the array on which filter is being applied
  return originalFilterFn.call(this, (item) => {
    console.log(item)
    return cb(item)
  })
}

console.log(
  '20. ',
  [1, 2, 3, 4, 5].filter((item) => item % 2 === 0)
)

console.log('\n')
// TODO: example 14
//** Object.defineProperties */

let org = { org: 'Archer' }

let newObj = {}
Object.defineProperties(newObj, {
  age: {
    value: 37,
    enumerable: true, // look inside the object
    writable: false, // wont overwrite
  },
})

newObj.age = 100
// console.log(newObj.age// won't change from 37 to 100

console.log('21. Object.keys(newObj): ', Object.keys(newObj))
console.log('21. Object.values(newObj): ', Object.values(newObj))

console.log('\n')
console.log('####################')
// Object.assign()
// TODO: example 15

// let somePerson = Object.create(org, { firstName: { value: 'Alberto' } })
let somePerson = Object.create(org, {
  firstName: { value: 'Alberto', enumerable: true },
})
console.log('22. somePerson: ', somePerson)

let mergedObject = Object.assign({}, somePerson, { car: 'Mazda' })
// console.log('23. mergedObject: ', ) // NO: enumerable {firstName: 'Alberto'}
console.log('23. mergedObject: ', mergedObject) // {"firstName": "Alberto", "car": "Mazda"}

/* .assign Object.assign copies properties from one or more source objects
to a target object. It merges these properties into the target, returning the updated target object.

only copies enumerable and own properties from source objects to the target object.
*/

console.log('24. somePerson.hasOwnProperty("org"): ', somePerson.hasOwnProperty('org'))
console.log('24. somePerson.hasOwnProperty("firstName"): ', somePerson.hasOwnProperty('firstName'))
