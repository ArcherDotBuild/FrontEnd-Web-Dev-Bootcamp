![image info](./welcome-day-23.png)

# Welcome to Day 23

## **Intro to hooks - useState & useEffect**

## Resources:

- Intro to react: https://reactjs.org/docs/hello-world.html
- Components: https://reactjs.org/docs/components-and-props.html
- JSX: https://reactjs.org/docs/introducing-jsx.html
- Rendering Elements: https://reactjs.org/docs/rendering-elements.html

- Using CRA: https://github.com/facebook/create-react-app#creating-an-app
- Virtual DOM: https://reactjs.org/docs/faq-internals.html
- useState hook: https://gauravsen.com/use-state-hook/
- useEffect: https://beta.reactjs.org/apis/react/useEffect#fetching-data-with-effects

### Extra resources:

- Fake Store API: [fakestoreapi.com/docs](https://fakestoreapi.com/docs) - Fake store rest API for your e-commerce or shopping website prototype

### Roadmap

- 1: create-react-app
- 2: useState
- 2: useEffect

#### 1. Create react app boilerplate

`npx create-react-app my-app`

#### 2. useState

In React, the `useState` hook is used to add state to functional components. It lets you store and update values over time, like managing form inputs or toggling a modal.

**Syntax:**

```javascript
const [state, setState] = useState(initialValue)
```

- `state`: The current value.
- `setState`: Function to update the value.
- `initialValue`: Initial state value.

**Example:**

```javascript
import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

export default Counter
```

In this example, clicking the button increases the count state by 1.

#### 3. useEffect

In React, the `useEffect` hook lets you run side effects (like fetching data or updating the DOM) in functional components. It runs after the component renders.

**Syntax:**

```javascript
useEffect(() => {
  // Effect logic
  return () => {
    // Cleanup (optional)
  }
}, [dependencies])
```

- **Effect logic:** Code to run.
- **Cleanup:** Code to run when the component unmounts or before the effect re-runs.
- **Dependencies:** Array of values that trigger the effect when changed.

**Example:**

```javascript
import React, { useState, useEffect } from 'react'

function Timer() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(interval) // Cleanup on unmount
  }, [])

  return <p>Seconds: {seconds}</p>
}

export default Timer
```

This example starts a timer that increments every second and cleans up the interval when the component unmounts.
