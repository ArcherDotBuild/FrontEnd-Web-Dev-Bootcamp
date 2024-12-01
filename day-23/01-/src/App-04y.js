import './App.css'
import { useState } from 'react'

function App() {
 const [text, setText] = useState('ARCHER');

  console.log('app component rendered')

  let handleChange = (event) => {
    setText(event.target.value)
    // setState: triggers a rerender
    // it updates the state variable
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
