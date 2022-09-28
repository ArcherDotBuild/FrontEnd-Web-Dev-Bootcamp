// way 1 <button onclick="handleClick()">Click Me</button>
// way <button id="clickme">Click Me</button> passing handleClick
// function handleClick() {
//   alert('You have clicked the button')
// }

// way 2 rest of the code
// document.getElementById('clickme').onclick = handleClick

// way 3 and recommended
// document.getElementById('clickme').addEventListener('click', handleClick)
// way 3 define the function inside the Listener
// document
//   .getElementById('clickme')
//   .addEventListener('click', function handleClick() {
//     alert('You have clicked the button')
//   })

function handleMouseOver(event) {
  console.log(event)
}

document
  .getElementById('start')
  .addEventListener('click', function handleClick() {
    // event object contains information about the event
    document.addEventListener('mouseover', handleMouseOver)
  })

document
  .getElementById('stop')
  .addEventListener('click', function handleClick() {
    document.removeEventListener('mouseover', handleMouseOver)
  })

document.addEventListener('keyup', function (event) {
  console.log(event)
  console.log(event.key)
})
