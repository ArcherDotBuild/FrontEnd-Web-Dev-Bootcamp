import './App.css'
import { useState } from 'react'

function App() {
  const state = useState('ARCHER')

  console.log('state: ', state);
  console.log('state[0]: ', state[0]);
  console.log('state[1]: ', state[1]);

  console.log('app component rendered')
  let text = 'ARCHER'

  let handleChange = (event) => {
    text = event.target.value
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
