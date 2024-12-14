![image info](./welcome-day-25.png)

# Welcome to Day 25

## **Rendering Lists with Keys, Memoization, Class based Components**

## Resources:

- Why react needs keys: https://beta.reactjs.org/learn/rendering-lists#why-does-react-need-keys
- Memo: https://beta.reactjs.org/apis/react/memo
- Class components: https://www.w3schools.com/react/react_class.asp
- Context: https://beta.reactjs.org/apis/react/useContext
- Reducer: https://beta.reactjs.org/apis/react/useReducer

### Extra resources:

- Fake Store API: [fakestoreapi.com/docs](https://fakestoreapi.com/docs) - Fake store rest API for your e-commerce or shopping website prototype

### Roadmap

- 1: memo
- 2: Class Components VS Functional Components
- 3: Task: React Display Posts
- 4: Task: React User Details

#### 1. memo

`memo`: A higher-order component that prevents unnecessary re-renders of a component if its props don't change.

```jsx
import React, { useState, memo } from 'react'

// A memoized component
const Counter = memo(({ value }) => {
  console.log('Counter component rendered!')
  return <h1>Count: {value}</h1>
})

const App = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Alice')

  return (
    <div>
      <Counter value={count} />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setName(name === 'Alice' ? 'Bob' : 'Alice')}>
        Change Name
      </button>
    </div>
  )
}

export default App
```

**How It Works**

1. **Initial Render:**
   - The `App` component renders, and the `Counter` component also renders because `value` is passed as a prop.
   - The console logs: `Counter component rendered!`.
2. **Click "Increment Count":**
   - The `count` state updates, causing `App` to re-render.
   - Since the `value` prop passed to `Counter` changes, `Counter` re-renders, and the console logs: `Counter component rendered!`.
3. **Click "Change Name":**
   - The `name` state updates, causing `App` to re-render.
   - However, the `value` prop passed to `Counter` does **not** change, so `memo` prevents `Counter` from re-rendering, and there’s **no log**.

---

**Key Takeaways**

- `memo` skips rendering the component if its props haven’t changed.
- Useful for optimizing components that don’t depend on parent re-renders unless their props are updated.

#### 2. Class Components VS Functional Components

**Class Components**
Class components are the traditional way of writing components in React. They are based on ES6 classes and require extending `React.Component`. State and lifecycle methods are built into the class structure.

**Key Points:**

- Use `this.state` for state management and `this.setState` to update the state.
- Lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` are used for handling side effects.
- Syntax is more verbose, requiring a `render()` method.

**Example: Class Component**

```jsx
import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  componentDidMount() {
    console.log('Component mounted')
  }

  componentWillUnmount() {
    console.log('Component will unmount')
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return <button onClick={this.increment}>{this.state.count}</button>
  }
}
```

---

**Functional Components**
Functional components are simpler and use plain JavaScript functions. They have become the standard way to write React components, especially with the introduction of **hooks**.

**Key Points:**

Use hooks like `useState` for state management and `useEffect` for lifecycle-like behavior.
Cleaner and easier to read compared to class components.
Do not require the `this` keyword or a `render()` method.

**Example: Functional Component with Hooks**

```jsx
import React, { useState, useEffect } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('Component mounted')

    return () => {
      console.log('Component will unmount')
    }
  }, []) // Empty dependency array means it runs only once.

  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

#### 3. Task: React Display Posts

1.  In this task you’re given a Functional Component Posts and a url for an API that returns random data for 100 Posts in response to a GET request.

**Structure of Data:**

```javascript
posts = [
    {
        "id": ...,
        "title": ...,
        "body": ...,
    },
    {
        "id": ...,
        "title": ...,
        "body": ...,
    },
]
```

You have to return **first 10** these posts inside the div with class **posts-container**.

Each post should be returned as:

```html
<div>
  <h1>{title}</h1>
  <p>{body}</p>
</div>
```

**Note:**

- Send the get request to `url` using fetch api
- useState, useEffect are already imported
- use `id` given in data as unique `key` when rendering props in JS. Learn more about key: https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key

```jsx
import { useCallback, useEffect, useState } from 'react'
import url from './misc'

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // Fetch posts from the API when the component mounts
    const fetchPosts = async () => {
      try {
        const response = await fetch(url) // Example API
        const data = await response.json()
        setPosts(data.slice(0, 10)) // Get only the first 10 posts
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }

    fetchPosts()
  }, []) // Empty dependency array ensures it runs only once

  return (
    <div className='posts-container'>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Posts
```

**Explanation:**

1. `useState`:

Initializes posts as an empty array. This will store the data fetched from the API.

2. `useEffect`:

- Runs on component mount to fetch data from the API using `fetch()`.
- The `fetchPosts` function:
  - Sends a `GET` request to the provided API.
  - Parses the response as JSON and stores the first 10 posts in the posts state using `setPosts`.
- The empty dependency array (`[]`) ensures that the fetch runs only once when the component mounts.

3. **Rendering Posts:**

- The `posts` array is mapped to render the first 10 posts inside `<div>` elements.
- Each `<div>` uses the unique `id` as a `key` to help React identify individual elements during updates.

---

#### 4. Task: React User Details

In this task, you are given a Functional Component `UserDetails`.

This component returns a form that takes user details as input. The form is having two inputs i.e. **Display Name** and _Username_ and a textarea i.e _Bio_.

The inputs and textarea inside the form are using state objects managed by a reducer for their respective values.

You have to complete the **reducer function** and add appropriate **onChange** functions to elements in the form such that the inputs and textarea works correctly.

**Note:**
Learn more about useReducer hook: https://react.dev/reference/react/useReducer

```jsx
import { useReducer } from 'react'

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_NAME':
      return { ...state, name: action.payload }
    case 'UPDATE_USERNAME':
      return { ...state, username: action.payload }
    case 'UPDATE_BIO':
      return { ...state, bio: action.payload }
    default:
      return state
  }
}

function UserDetails() {
  const initialState = {
    name: 'Display Name',
    username: 'Username',
    bio: 'Bio',
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className='user-details-container'>
      <h1>User Details</h1>
      <form>
        {/* Input for Display Name */}
        <input
          type='text'
          value={state.name}
          placeholder='Display Name'
          onChange={(e) =>
            dispatch({ type: 'UPDATE_NAME', payload: e.target.value })
          }
        />
        {/* Input for Username */}
        <input
          type='text'
          value={state.username}
          placeholder='Username'
          onChange={(e) =>
            dispatch({ type: 'UPDATE_USERNAME', payload: e.target.value })
          }
        />
        {/* Textarea for Bio */}
        <textarea
          value={state.bio}
          placeholder='Bio'
          onChange={(e) =>
            dispatch({ type: 'UPDATE_BIO', payload: e.target.value })
          }
        />
      </form>
    </div>
  )
}

export default UserDetails
```