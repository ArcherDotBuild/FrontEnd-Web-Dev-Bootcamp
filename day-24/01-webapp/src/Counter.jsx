import React, { useRef } from 'react'

const Counter = () => {
  console.log('counter rendered');
  const count = useRef(0)

  function handleClick() {
    // current: is a special property to access the value stored 
    count.current = count.current + 1
    alert('Click count: ' + count.current)
  }

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Counter
