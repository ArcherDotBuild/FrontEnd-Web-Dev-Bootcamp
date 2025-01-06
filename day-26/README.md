![image info](./welcome-day-26.png)

# Welcome to Day 26

## **Error Boundaries, Todo App with useReducer hook, useContext hook**

## Resources:

- Error boundaries: https://reactjs.org/docs/error-boundaries.html
- React error boundary: https://www.npmjs.com/package/react-error-boundary
- useReducer: https://beta.reactjs.org/learn/extracting-state-logic-into-a-reducer
- Comparing useState & useReducer: https://beta.reactjs.org/learn/extracting-state-logic-into-a-reducer#comparing-usestate-and-usereducer
- useContext: https://beta.reactjs.org/learn/passing-data-deeply-with-context
- Dev Tools: https://chrome.google.com/webstore/detail/react-developer-tools/

### Extra resources:

-

### Roadmap

- 1: ErrorBoundary
- 2: useReducer
- 3: Prop Drilling
- 4: useContext

#### 1. ErrorBoundary

The `ErrorBoundary` class is a React **error boundary** component, which is a special type of component that helps catch JavaScript errors in its child component tree and provides a fallback UI instead of crashing the application.

**Detailed Functionality**

1. **State Initialization:**

- The component maintains an `error` state to track if any error occurs.

2. **Static Method `getDerivedStateFromError`:**

- React calls this lifecycle method when a descendant component throws an error.
- It updates the state (`error`) to allow the error boundary to render a fallback UI.

3. **`render` Method:**

- It checks if an error exists in the state.
- If an error is present, it renders a fallback UI (e.g., an error message).
- If no error exists, it renders the child components (`this.props.children`) as usual.

**Code with Comments**

```jsx
import React, { Component } from 'react'

class ErrorBoundary extends Component {
  // Initialize the error state to null (no error)
  state = { error: null }

  // Static lifecycle method to catch errors and update the state
  static getDerivedStateFromError(error) {
    // Update the error state when an error is caught
    return { error }
  }

  // The render method defines the component's UI
  render() {
    const { error } = this.state // Destructure the error from the state

    // If there's an error, render the fallback UI
    if (error) {
      return (
        <div>
          <pre>{error.message}</pre> {/* Display the error message */}
        </div>
      )
    }

    // If no error, render child components
    return this.props.children
  }
}

export default ErrorBoundary
```

**How It Works**

1. **Usage in a React App:**

- Wrap the `ErrorBoundary` around child components in your app to catch errors within their tree.

```jsx
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>
```

2. **Error Handling:**

- When a descendant component of `ErrorBoundary` throws an error, `getDerivedStateFromError` is called.
- The `error` state is updated, and the `render` method detects this and renders the fallback UI.

3. **Key Points:**

- This does not catch errors in:
  - Asynchronous code (e.g., `setTimeout` or `fetch` errors).
  - Event handlers (use `try...catch` for those).
- `this.props.children` renders the child components.

**Example of Child Error:**

If `MyComponent` throws an error like this:

```jsx
function MyComponent() {
  throw new Error('Something went wrong!')
}
```

The `ErrorBoundary` will catch the error and display:

```bash
Something went wrong!
```

This helps keep the app running gracefully without crashing.

#### 2. useReducer

`useReducer` is a React hook for managing complex state logic. It’s an alternative to `useState`, and is particularly useful when:

- The state logic involves multiple sub-values.
- The state transitions depend on the previous state.

It works by defining:

- A **reducer function**: This contains the state update logic.
- A **dispatch function**: This triggers actions to modify the state.

**Basic Example: Counter**
This example demonstrates a simple counter with increment and reset functionality.

```jsx
import React, { useReducer } from 'react'

// 1. Define the reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 } // Increment the count
    case 'reset':
      return { count: 0 } // Reset the count
    default:
      throw new Error('Unknown action type')
  }
}

const Counter = () => {
  // 2. Initialize useReducer with the reducer and initial state
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <div>
      <p>Count: {state.count}</p>
      {/* Dispatch an action to increment */}
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      {/* Dispatch an action to reset */}
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  )
}

export default Counter
```

**How It Works**

1. **Reducer Function:**

Defines how the state (`state`) changes based on the `action.type`.
It’s like a state machine: Input (state + action) → Output (new state).

2. `useReducer`:

- Takes the reducer function and an initial state (`{ count: 0 }`).
- Returns:
  - `state`: Current state value.
  - `dispatch`: Function to send actions (e.g., `{ type: 'increment' }`).

3. **State Updates:**

`dispatch({ type: 'increment' })` calls the reducer with `action.type` as `increment`, increasing `count` by 1.

**Output in Browser**:

- Initially: **Count: 0**
- Click **Increment:** Count increases by 1.
- Click **Reset:** Count resets to 0.

#### 3. Prop Drilling

Is the process of passing data from a parent component to a deeply nested child component through multiple intermediary components. It occurs when a component needs access to a prop but isn't directly related to the parent component that holds the data.

```jsx
function App() {
  const message = 'Hello from App!'

  return <Parent message={message} />
}

function Parent({ message }) {
  return <Child message={message} />
}

function Child({ message }) {
  return <GrandChild message={message} />
}

function GrandChild({ message }) {
  return <h1>{message}</h1>
}

export default App
```

In this example:

- The `message` prop is passed from the `App` component to the `GrandChild` component through `Parent` and `Child`.
- The intermediate components (`Parent` and `Child`) do not directly use the `message` prop but are responsible for passing it down.

**Downsides of Prop Drilling:**
- It can lead to cluttered and hard-to-maintain code, especially in deeply nested components.
- To mitigate this, Context API or state management libraries like Redux can be used.

#### 4. useContext

**Task:**

In this task, you’ve given three files Parent.jsx, A.jsx and B.jsx. Each exporting its respective Functional Component.

Description of A:

It contains a textarea inside a div with className a-container
Description of B:

It contains a div with className b-container
Description of Parent:

It returns components A and B wrapped inside divs to make it looks visually better.
You have to use Context API such that text changes in textarea of component A are displayed in a paragraph inside component B. (you’ll have to create this paragraph inside component B.

```jsx
import A from './A'
import B from './B'
import { createContext, useState } from "react";

function Parent() {
  return <div className="parent-container">
    <div>
      <h3>Input (A)</h3>
      <A/>
    </div>
    <div>
      <h3>Display (B)</h3>
      <B/>
    </div>
  </div>
}

export default Parent
```

**Solution:** Task file