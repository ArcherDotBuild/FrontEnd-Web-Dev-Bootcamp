import { publicVariable } from './somefile.js'
// import { privateVariable } from './somefile.js'

console.log('publicVariable: ', publicVariable)

console.log('\n')
// ! privateVariable is not defined
// console.log('privateVariable: ', privateVariable)

console.log('\n')
import { usefulFunction } from './somefile.js'
console.log(`${usefulFunction()} ${publicVariable}`)

console.log('\n')
import { exportAsYouDefine } from './somefile.js'
console.log(exportAsYouDefine())

console.log('\n')
import defaultFunctionABC from './somefile.js'
console.log('defaultFunctionABC: ', defaultFunctionABC())

console.log('\n')
// * import multiple things
// ? import defaultFunctionABC, { usefulFunction } from './somefile.js'
import { exportOne, exportTwo } from './somefile.js'
console.log(exportOne, exportTwo)

console.log('\n')
// * rename the import as something else
// using (as) keyword you can give an alias to a named import
import { renameImport as ReNaMeImPoRt } from './somefile.js'
console.log(ReNaMeImPoRt())

