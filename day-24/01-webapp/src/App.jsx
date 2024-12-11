import { useState, useEffect } from 'react'
import './App.css'
import Counter from './Counter'
import Stopwatch from './Stopwatch'
import KittyGallery from './KittyGallery'
import DemoCounter from './DemoCounter'
import useLocalStorage from './useLocalStorage'
import Header from './header'

function App() {
  // Custom hook
  const [username, setUsername] = useLocalStorage('username', '')
  const [showHeader, setShowHeader] = useState(false)

  // ----------
  console.log('%c 01. App: render start', 'color: hotpink')

  const [showCounter, setShowCounter] = useState(() => {
    console.log('%c 02. App: useState', 'color:coral')
    return false
  })

  useEffect(() => {
    console.log('%c 03. App: useEffect no deps called', 'color:royalblue')

    return () => {
      console.log('%c 04. App: useEffect no deps clean up', 'color:darkred')
    }
  })
  useEffect(() => {
    console.log('%c 05. App: useEffect empty deps called', 'color:royalblue')

    return () => {
      console.log('%c 06. App: useEffect empty deps clean up', 'color:darkred')
    }
  }, [])
  useEffect(() => {
    console.log('%c 07. App: useEffect with deps called', 'color:royalblue')

    return () => {
      console.log('%c 08. App: useEffect with deps clean up', 'color:darkred')
    }
  }, [showCounter])

  function subitForm(e) {
    e.preventDefault()
    // updater function syntax, whatever was the previous value we want to do opposite of that
    setShowHeader(prev => !prev)
  }
  const element = (
    <>
      {showHeader && <Header />}
      <main className='app'>
        <label htmlFor='showCounter'>Show Counter</label>
        <input
          type='checkbox'
          name='showCounter'
          id='showCounter'
          onChange={(e) => setShowCounter(e.target.checked)}
        />
        {showCounter && <DemoCounter />}
        {/* <Counter /> */}
        {/* <Stopwatch /> */}
        {/* <KittyGallery /> */}
        <form action='' onSubmit={subitForm}>
          <fieldset>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </fieldset>
          <button type='submit'>Login</button>
        </form>
      </main>
    </>
  )
  console.log('%c 09. App: render end', 'color: hotpink')

  return element
}

export default App
