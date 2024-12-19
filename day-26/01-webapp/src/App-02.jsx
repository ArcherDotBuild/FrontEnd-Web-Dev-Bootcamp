import React, { Component, useState } from 'react'
import './App.css'

// minuto 16
// preguntar a chat gpt como funciona este codigo
class ErrorBoundary extends Component {
  state = { error: null }
  static getDerivedStateFromError(error) {
    return { error }
  }
  render() {
    const { error } = this.state
    if (error) {
      // return (
      //   <div>
      //     <pre>{error.message}</pre>
      //   </div>
      // )
      return <this.props.FallbackComponent error={error} />
    }
    return this.props.children
  }
}

function FallbackComponent({ error }) {
  return (
    <div>
      <p>Something went wrong</p>
      <pre>{error.message}</pre>
    </div>
  )
}

function AppLevelFallbackComponent({ error }) {
  return (
    <div>
      <p>App level</p>
      <pre>{error.message}</pre>
    </div>
  )
}

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
      <ErrorBoundary FallbackComponent={AppLevelFallbackComponent}>
        {/* <ErrorBoundary> */}
        {/* <ErrorBoundary FallbackComponent={FallbackComponent}> */}
          <Breaker />
        {/* </ErrorBoundary> */}
        {/* <Breaker /> */}
        <AnotherComponent />
      </ErrorBoundary>
    </>
  )
}

export default App
