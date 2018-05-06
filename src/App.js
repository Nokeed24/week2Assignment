import React, { Component } from 'react'
import Title from './components/Title'
import CartItem from './components/CartItem'
import CheckoutButton from './components/CheckoutButton'
import Board from './containers/Board'
import Clock from 'react-live-clock';
import './App.css'

const products = [
  {
    id: 1,
    name: "Prada Shoes",
    price: 570,
    quantity: 0
  },
  {
    id: 2,
    name: "Rolex Watch",
    price: 649,
    quantity: 0
  },
  {
    id: 3,
    name: "Paper clips",
    price: 0.1,
    quantity: 0
  }
]

class App extends Component {
  state = { products }

  updateProduct = (productId, updates) => {
    this.setState({
      products: this.state.products.map((product) => {
        if (product.id !== productId) return product
        return { ...product, ...updates }
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="Title">Shopping Cart</h1>
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Amsterdam'} />
        <Board
          products={this.state.products}
          updateProduct={this.updateProduct}
        />
        <CheckoutButton content="Checkout!"/>
      </div>
    )
  }
}

export default App
