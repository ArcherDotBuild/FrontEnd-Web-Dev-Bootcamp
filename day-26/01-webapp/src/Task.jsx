import React, { createContext, useContext, useState } from 'react'

// Create Context
const TextContext = createContext()

function Parent() {
  const [text, setText] = useState('') // State for text

  return (
    <TextContext.Provider value={{ text, setText }}>
      <div className='parent-container'>
        <div>
          <h3>Input (A)</h3>
          <A />
        </div>
        <div>
          <h3>Display (B)</h3>
          <B />
        </div>
      </div>
    </TextContext.Provider>
  )
}

function A() {
  const { setText } = useContext(TextContext) // Access context

  const handleChange = (e) => {
    setText(e.target.value) // Update context value
  }

  return (
    <div className='a-container'>
      <textarea onChange={handleChange} placeholder='Type here...' />
    </div>
  )
}

function B() {
  const { text } = useContext(TextContext) // Access context

  return (
    <div className='b-container'>
      <p>{text || 'Nothing to display yet...'}</p> {/* Display context value */}
    </div>
  )
}

export default Parent