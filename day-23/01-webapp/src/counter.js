import React from 'react'
import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('initial')
  console.log('counter rendered', count)

  // const handleClick = () => {
  //   // setCount(count + 1)
  //   // setCount(count + 4)

  //! This won't work, it only will trigger one count+1
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

    setText(`${text} ${count}`)

    console.log('after click', count)
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Counter</button>
      <p>{text}</p>
    </div>
  )
}

export default Counter
