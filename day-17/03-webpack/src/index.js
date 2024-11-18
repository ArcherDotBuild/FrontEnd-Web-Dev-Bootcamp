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

console.log('\n')
// * Importing everything
import * as everything from './somefile.js'
console.log('everything: ', everything)
everything.usefulFunction()
everything.exportAsYouDefine
console.log('publicVariable: ', everything.publicVariable)

// import _ from 'lodash'
import join from 'lodash/join'
// import './styles.css'
import './styles.scss'

const element = document.createElement('article')

// element.textContent = _.join(['Hello', 'Webpack'], ' ')
element.textContent = join(['Hello', 'Webpack'], ' ')
element.classList.add('blue')
document.body.appendChild(element)

/*
 "devDependencies": {
    "css-loader": "^6.7.1",
    "html-webpack-plugin": "^5.5.0",
    "sass": "^1.55.0",
    "sass-loader": "^13.1.0",
    "style-loader": "^3.3.1",
    "webpack": "^5.74.0",
    "webpack-cli": "^4.10.0",
    "webpack-dev-server": "^4.11.1"
  },
*/
