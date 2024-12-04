import React, { useState, useEffect } from 'react'

const UseEffectExample = () => {
  console.log('render')

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('addEventListener add for pointermover')
    window.addEventListener('pointermove', (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
      console.log('pointermove event')
    })
  }, [])

  return (
    <div>
      x: {cursorPosition.x} y: {cursorPosition.y}
    </div>
  )
}

export default UseEffectExample
