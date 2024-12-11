import { useState, useEffect } from 'react'
import './App.css'
import Counter from './Counter'
import Stopwatch from './Stopwatch'
import KittyGallery from './KittyGallery'
import DemoCounter from './DemoCounter'

function App() {
  console.log('%c App: render start', 'color: hotpink')

  const [showCounter, setShowCounter] = useState(() => {
    console.log('%c App: useState', 'color:coral')
    return false
  })

  useEffect(() => {
    console.log('%c App: useEffect no deps called', 'color:royalblue')

    return () => {
      console.log('%c App: useEffect no deps clean up', 'color:darkred')
    }
  })
  useEffect(() => {
    console.log('%c App: useEffect empty deps called', 'color:royalblue')

    return () => {
      console.log('%c App: useEffect empty deps clean up', 'color:darkred')
    }
  }, [])
  useEffect(() => {
    console.log('%c App: useEffect with deps called', 'color:royalblue')

    return () => {
      console.log('%c App: useEffect with deps clean up', 'color:darkred')
    }
  }, [showCounter])

  const element = (
    <>
      <div className='app'>
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
      </div>
    </>
  )
  console.log('%c App: render end', 'color: hotpink')

  return element
}

export default App
