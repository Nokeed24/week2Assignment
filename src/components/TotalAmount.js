import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './TotalAmount.css'

export default class totalAmount extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    totalAmount: PropTypes.number.isRequired
  }


  render() {
    const { totalAmount } = this.props
    return (
      <p className="totalAmount">Total Value: {this.props.totalAmount}</p>
    )
  }
}
