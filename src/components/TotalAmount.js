import React, { PureComponent } from 'react'
import {productShape} from '../components/CartItem'
import PropTypes from 'prop-types'
import CheckoutButton from '../components/CheckoutButton'
import './TotalAmount.css'

export default class totalAmount extends PureComponent {
  static propTypes = {
    products: PropTypes.arrayOf(productShape).isRequired,
    onChange: PropTypes.func.isRequired,
    totalAmount: PropTypes.number.isRequired
  }

  incrementTotal = () => {
    const { products, onChange } = this.props
    let newTotal = 0
    products.forEach(function(element){
      newTotal += element.price * element.quantity
    })
    onChange(newTotal)

  }

  render() {
    const { totalAmount } = this.props
    return (
      <div>
        <p className="totalAmount">Total Value: {totalAmount}</p>
        <CheckoutButton onClick={this.incrementTotal} content="Checkout!"/>
      </div>
    )
  }
}
