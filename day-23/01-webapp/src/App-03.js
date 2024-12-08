import './App.css'
import { useState } from 'react'

function App() {
  const state = useState('ARCHER')

  const text = state[0]
  const updateText = state[1]

  console.log('app component rendered')

  let handleChange = (event) => {
    updateText(event.target.value)
    console.log('updated value of text: ', text)
  }
  return (
    <div className='App'>
      <input type='text' name='content' id='content' onChange={handleChange} />
      {text}
    </div>
  )
}

export default App
