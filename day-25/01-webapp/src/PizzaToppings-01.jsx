import React, { useState } from 'react'

const pizzaToppings = [
  { id: 'z', topping: 'onion' },
  { id: 'x', topping: 'margherita' },
  { id: 'c', topping: 'jalapeno' },
  { id: 'v', topping: 'pineapple' },
]

const PizzaToppings = () => {
  const [toppings, setToppings] = useState(pizzaToppings)

  function removeTopping(topping) {
    setToppings(toppings.filter((i) => i !== topping))
  }

  return (
    <>
      <ul>
        {toppings.map((item) => (
          <li key={item.id}>
            <label htmlFor={item.topping}>{item.topping}</label>
            <input
              type='text'
              name={item.topping}
              id={item.id}
              defaultValue={item.topping}
            />
            <button onClick={() => removeTopping(item)}>X</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default PizzaToppings
