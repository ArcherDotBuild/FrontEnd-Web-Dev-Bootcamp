import React, { Component } from 'react'

export default class Products extends Component {
  constructor() {
    console.log('constructor called')
    super()
    // Initial value for the state
    this.state = {
      categories: [],
      products: [],
      selectedCategory: null,
    }
  }

  // Component is loaded or mounted
  // useEffect similar with empty dependencies
  componentDidMount() {
    console.log('componentDidMount')
    this.getAllCategories()
  }

  // Component clean up logic will come inside this function
  // useEffect similar with clean up code
  componentWillUnmount() {}

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevProps, prevState, snapshot)
    // Comparison with the previous state to prevent infinite loop
    // only if previous state is not equal to current state in that case we make API call
    if (this.state.selectedCategory !== prevState.selectedCategory) {
      this.getProductsBySelectedCategory()
    }
  }
  // Fetch all categories
  getAllCategories() {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        // Modifying the state
        this.setState({
          categories: json,
        })
      })
  }

  getProductsBySelectedCategory() {
    fetch(
      `https://fakestoreapi.com/products/category/${this.state.selectedCategory}`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        this.setState({ products: json })
      })
  }

  handleCategoryChange = (e) => {
    this.setState({ selectedCategory: e.target.value })
  }

  render() {
    return (
      <div>
        <select
          name='categories'
          id='categories'
          onChange={this.handleCategoryChange}
        >
          {this.state.categories.map((category) => (
            <option key={category} value={category}>
              {category.toUpperCase()}
            </option>
          ))}
        </select>
        <section className='product'>
          {this.state.products.map((prod) => {
            return (
              <section className='product-item'>
                <img
                  style={{ height: 200, width: 200 }}
                  src={prod.image}
                  alt={prod.title}
                />
                <section>
                  <h2>{prod.title}</h2>
                </section>
              </section>
            )
          })}
        </section>
      </div>
    )
  }
}
