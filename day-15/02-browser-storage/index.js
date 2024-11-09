//** ******************** */
//** #################### */
//** Browser storage */

// !
// ?

// TODO: Example 1

document.addEventListener('DOMContentLoaded', () => {
  // If value 'name' is there, if nothing ''
  document.getElementById('name').value = sessionStorage.getItem('name') ?? ''
  document.getElementById('save').addEventListener('click', () => {
    const name = document.getElementById('name').value
    sessionStorage.setItem('name', name)
  })
})

console.log('----- END -----')

console.log('\n')
console.log('####################')
// TODO: example 2
