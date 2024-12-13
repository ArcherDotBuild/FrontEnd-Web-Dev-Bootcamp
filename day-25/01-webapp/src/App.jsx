import { useState } from 'react'
import './App.css'
import PizzaToppings from './PizzaToppings'
import MemoizedEx from './MemoizedEx'
import Products from './Products'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className='App'>Rendering lists</div>
      {/* <PizzaToppings /> */}
      {/* <MemoizedEx /> */}
      <Products />
    </>
  )
}

export default App
