import React, { useState, useEffect } from 'react'

//
const pizzaToppings = [
  { id: 'z', topping: 'onion' },
  { id: 'x', topping: 'margherita' },
  { id: 'c', topping: 'jalapeno' },
  { id: 'v', topping: 'pineapple' },
]

function shuffle(originalArray) {
  // Create a shallow copy of the input array for shuffling
  const shuffledArray = [...originalArray]

  for (let index = shuffledArray.length - 1; index > 0; index--) {
    // Random index between 0 and shuffledArray.length
    // Generate a random integer between 0 and the current index (inclusive)
    let randomIndex = Math.floor(Math.random() * (index + 1))
    // Swap the elements at the current index and the random index
    ;[shuffledArray[index], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex],
      shuffledArray[index],
    ]
  }
  return shuffledArray
}

const PizzaToppings = () => {
  const [toppings, setToppings] = useState(pizzaToppings)

  function removeTopping(topping) {
    // Remove the selected topping from the toppings list
    setToppings(toppings.filter((i) => i !== topping))
  }

  useEffect(() => {
    // setInterval: Executes a function repeatedly after a specified delay (2 seconds in this case).
    const interval = setInterval(() => {
      // The shuffle(toppings) function is called, which shuffles the current toppings array.
      // setToppings: Updates the toppings state with the newly shuffled array.
      setToppings(shuffle(toppings))
    }, 2000)

    // This cleanup function runs when the component unmounts or before the effect is re-run.
    // clearInterval(interval): Stops the interval, ensuring no memory leaks or redundant intervals.
    return () => clearInterval(interval)

    // The absence of a dependencies array means the effect runs on every render of the component.
  })

  return (
    <>
      <ul>
        {toppings.map((item) => (
          <li key={item.id}>
            <input
              type='text'
              name={item.topping}
              id={item.id}
              defaultValue={item.topping}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export default PizzaToppings
