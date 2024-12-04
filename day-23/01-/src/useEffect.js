import React, { useState, useEffect } from 'react'

const UseEffectExample = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  window.addEventListener('pointermove', (e) => {
    setCursorPosition({ x: e.target.clientX, y: e.target.clientY })
  })
  return (
    <div>
      x: {cursorPosition.x} y: {cursorPosition.y}
    </div>
  )
}

export default UseEffectExample
