import React, { useEffect, useState } from 'react'

const Products = () => {
  const [categories, setCategories] = useState([])

  // Infinite loop
  // function getAllCategories() {
  //   fetch('https://fakestoreapi.com/products/category/jewelery')
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setCategories(json)
  //       console.log(json)
  //     })
  // }
  // getAllCategories()

  return (
    <div>
      <select name='categories' id='categories' onChange={handleChange}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Products
