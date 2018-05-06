import React, { PureComponent } from 'react'
import Title from '../components/Title'
import CartItem, {productShape} from '../components/CartItem'
import PropTypes from 'prop-types'
import './Board.css'

export default class Board extends PureComponent {
  static propTypes = {
    products: PropTypes.arrayOf(productShape).isRequired,
    updateProduct: PropTypes.func.isRequired
  }

  render() {
    const { products, updateProduct } = this.props
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
      </div>
    )
  }
}
