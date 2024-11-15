// ! A function expression: storing a reference of a function in a variable

// let publicVariable = 10
// let privateVariable = 20

// IFFE - immediately invoked function expression
// restrictions in variables

// Object revealing pattern
let publicProps = (function () {
  // Restricting the access, making certain parts available
  let publicVariable = 10
  let privateVariable = 20

  return {
    value: publicVariable,
  }
})()

console.log('publicProps: ', publicProps)
