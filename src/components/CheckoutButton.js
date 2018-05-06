import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './CheckoutButton.css'

export default class CheckoutButton extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }

  render() {
    return (
      <button className="CheckoutButton">{this.props.content}</button>
    )
  }
}
