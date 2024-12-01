import React from 'react'
import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  console.log('counter rendered', count)

  // const handleClick = () => {
  //   // setCount(count + 1)
  //   // setCount(count + 4)
  //   setCount(count + 1) // 0 + 1 = 1
  //   setCount(count + 1) // 0 + 1 = 1
  //   setCount(count + 1) // 0 + 1 = 1
  //   setCount(count + 1) // 0 + 1 = 1
  //   setCount(count + 1) // 0 + 1 = 1
  // }

  // updater Function
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
    console.log('after click', count)
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Counter</button>
    </div>
  )
}

export default Counter
