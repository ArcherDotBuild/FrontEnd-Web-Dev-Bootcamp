// SAFE MODE This event tells the browser to run only
// When all elements have been loaded and the DOM tree has been constructed
// check the document.addEventListener('load') EVENT
document.addEventListener('DOMContentLoaded', function () {
  // Way 1
  // <button onclick="handleClick()">Click Me</button>
  // function handleClick() {
  //   alert('You have clicked the button')
  // }

  // Way 2 passing handleClick
  // <button id="clickme">Click Me</button>
  // JavaScript: function handleClick() {
  //   alert('You have clicked the button')
  // }
  // document.getElementById('clickme').onclick = handleClick

  // Way 3 recommended
  // <button id="clickme">Click Me</button>
  // function handleClick() {
  //   alert('You have clicked the button')
  // }
  // document.getElementById('clickme').addEventListener('click', handleClick)

  // Way 3 define the function inside the Listener
  // <button id='clickme'>Click Me</button>
  document
    .getElementById('clickme')
    .addEventListener('click', function handleClick() {
      alert('You have clicked the button')
    })

  function handleMouseOver(event) {
    console.log(event)
  }

  document
    .getElementById('start')
    .addEventListener('click', function handleClick() {
      // When this event occurs and its handlder is called
      // it is called with a parameter known as the event object
      // event object contains information about the event
      document.addEventListener('mouseover', handleMouseOver)
    })

  document
    .getElementById('stop')
    .addEventListener('click', function handleClick() {
      document.removeEventListener('mouseover', handleMouseOver)
    })

  // Basic key listener
  document.addEventListener('keyup', function (event) {
    console.log(event)
    console.log(event.key)
  })

  // Order of keys: 1. keydown, 2. keypress and 3. keyup
  // Preventing number 2 to be press
  document.addEventListener('keydown', function (event) {
    console.log('keydown')
    if (event.key == '2') {
      event.preventDefault()
      event.stopPropagation()
    }
  })

  document.addEventListener('keypress', function (event) {
    console.log('keypress')
    if (event.key == '2') {
      event.preventDefault()
      event.stopPropagation()
    }
  })

  document.addEventListener('keyup', function (event) {
    console.log('keyup')
    if (event.key == '2') {
      event.preventDefault()
      event.stopPropagation()
    }
  })

  // Input Event Listener
  document
    .getElementById('username')
    .addEventListener('focus', function (event) {
      console.log('focus event happened')
    })
  document
    .getElementById('username')
    .addEventListener('blur', function (event) {
      console.log('blur event happened')
    })

  // Events are captured
  // event bubbling that the event bubbles up from its child to its parent   
  document.querySelector('.parent').addEventListener('click', function (event) {
    console.log('parent clicked')
    // Preventing Event Bubbling
    event.stopPropagation()
  })

  document.querySelector('.child').addEventListener('click', function (event) {
    console.log('child clicked')
    event.stopPropagation()
  })

  // document.getElementById('subchild').addEventListener('click', function (event) {
  //   console.log('subchild clicked')
  //   event.stopPropagation()
  // })

  // Another way passing the flag false
  document.getElementById('subchild').addEventListener(
    'click',
    function (event) {
      console.log('subchild clicked')
      // event.stopPropagation()
    },
    false // capture phase
  )
})
