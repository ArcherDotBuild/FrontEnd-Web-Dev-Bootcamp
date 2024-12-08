import React, { useEffect, useState } from 'react'

const Products = () => {
  console.log('products componente called')
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)

  function getProductByCategory() {
    fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
      .then((res) => res.json())
      .then((products) => {
        console.log('products fetched: ', products)
        setProducts(products)
      })
  }

  function getAllCategories() {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setCategories(json)
      })
  }

  useEffect(() => {
    console.log('without dependency', categories)
    getAllCategories()
  }, [])

  useEffect(() => {
    console.log(
      'useEffect will be called when the category is modified',
      selectedCategory
    )
    if (selectedCategory) {
      // Function depended on selectedCategory
      getProductByCategory()
    }
  }, [selectedCategory])

  function handleChange(e) {
    setSelectedCategory(e.target.value)
  }

  return (
    <div>
      <select name='categories' id='categories' onChange={handleChange}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category.toUpperCase()}
          </option>
        ))}
      </select>

      <h1>{selectedCategory}</h1>
      <section className='product'>
        {products.map((product) => (
          <section className='product-item' key={product.id}>
            <img
              style={{ height: 200, width: 200, objectFit: 'contain'}}
              src={product.image}
              alt={product.title}
            />
            <section>
              <h2>{product.title}</h2>
              {/* <h3>{product.description}</h3> */}
            </section>
          </section>
        ))}
      </section>
    </div>
  )
}

export default Products
