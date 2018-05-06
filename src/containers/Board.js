import React, { PureComponent } from 'react'
import CartItem, {productShape} from '../components/CartItem'
// import CheckoutButton from '../components/CheckoutButton'
import TotalAmount from '../components/TotalAmount'
import PropTypes from 'prop-types'
import './Board.css'

export default class Board extends PureComponent {
  static propTypes = {
    products: PropTypes.arrayOf(productShape).isRequired,
    updateProduct: PropTypes.func.isRequired,
    updateTotal: PropTypes.func.isRequired,
    totalAmount: PropTypes.number.isRequired
  }

  render() {
    const { totalAmount, products, updateProduct, updateTotal } = this.props
    // products.sort(function(a,b) {
    //   return a.price - b.price;
    // });

    return (
      <div>
        <ul className="Board">
          {products.map((player, index) => (
            <CartItem key={index}
              onChange={updateProduct}
              { ...player } />
          ))}
        </ul>
        <TotalAmount onChange={updateTotal} products={products} totalAmount={totalAmount} />
      </div>
    )
  }
}
