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

### Roadmap

- 1: memo
- 2:
- 3:

#### 1. memo

`memo`: A higher-order component that prevents unnecessary re-renders of a component if its props don't change.

```javascript
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
