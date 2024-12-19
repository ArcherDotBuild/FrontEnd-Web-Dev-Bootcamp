import React, { useReducer } from 'react'
import reducer from './counterReducer'

// function reducer(state, action) {
//   if(action === 'increase') {
//     return state + 1
//   } else if(action === 'decrease') {
//     return state - 1
//   }
//   return state
// }
const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, 0)

  function increaseCounter() {
    console.log('increaseCounter');
    console.log('distach action!!');
    dispatch('increase')
  }
  function decreaseCounter() {
    console.log('decreaseCounter');
    console.log('distach action!!')
    dispatch('decrease')

  }
  return (
    <>
      <button onClick={increaseCounter}>+</button>
      {state}
      <button onClick={decreaseCounter}>-</button>
    </>
  )
}

export default CounterReducer