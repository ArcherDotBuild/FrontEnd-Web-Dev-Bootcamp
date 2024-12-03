import React from 'react'
import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    // setCount(count + 1)
    setCount(count + 4)
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Counter</button>
    </div>
  )
}

export default Counter
