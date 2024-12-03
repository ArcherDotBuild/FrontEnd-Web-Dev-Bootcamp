import React, { useState } from 'react'
import './index.css'

const List = () => {
  const getItems = () => {
    console.log('%c list.js: getItems called', 'color: royalblue')
    return Array(50).fill(0)
  }

  // const [items, setItems] = useState(getItems()) // ❌
  // Initializer function
  // const [items, setItems] = useState(getItems) // ✅
  const [items, setItems] = useState(() => getItems()) // ✅

  return (
    <div className='card'>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{index + 1}</li>
        ))}
      </ul>
      <button onClick={() => setItems([...items, 0])}>Add item</button>
    </div>
  )
}

export default List
