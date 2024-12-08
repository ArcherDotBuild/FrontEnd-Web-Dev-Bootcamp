import './App.css'

function App() {
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
