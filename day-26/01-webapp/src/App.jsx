import React, { Component, useState } from 'react'
import './App.css'

function Breaker() {
  const [count, setCount] = useState(0)

  /*
  When you call (setCount) with an _updater function_, React:
  - Automatically passes the _current state value_ as the argument to the function.
  - React ensures this value is the most recent state, preventing stale state issues during batched updates.
  
  Inside your callback:
  - (prev) represents the current state ((count) in this case).
  - You can use (prev) to calculate and return the new state value.
  */
  function handleClick() {
    // When setCount is called:
    // React passes the current count value as prev.
    setCount((prev) => {
      // Throws an error if the count is greater than 2
      if (prev > 2) {
        throw new Error('Boom 💥')
      }
      // Otherwise, increment the count
      // Returns the updated state (prev + 1) if no error occurs.
      return prev + 1
    })
  }
  return <button onClick={handleClick}>{count}</button>
}

function AnotherComponent() {
  return <h1>Component for displaying some other info</h1>
}
function App() {
  return (
    <>
      <Breaker />
      <AnotherComponent />
    </>
  )
}

export default App
