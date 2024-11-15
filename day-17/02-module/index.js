import { publicVariable } from './somefile.js'
// import { privateVariable } from './somefile.js'

console.log('publicVariable: ', publicVariable)

// ! privateVariable is not defined
// console.log('privateVariable: ', privateVariable) 

import { usefulFunction } from './somefile.js'
console.log(`${usefulFunction()} ${publicVariable}`)
