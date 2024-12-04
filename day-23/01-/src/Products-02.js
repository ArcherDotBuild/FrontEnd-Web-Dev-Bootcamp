import React, { useEffect, useState } from 'react'

const Products = () => {
  console.log('products componente called')
  const [categories, setCategories] = useState([])

  function getAllCategories() {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((json) => {
        setCategories(json)
        console.log(json)
      })
  }

  useEffect(() => {
    getAllCategories()
  }, [])
  
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
