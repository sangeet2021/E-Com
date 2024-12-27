import React from 'react'
import { currencyFormatter } from '../utils/fotmatter'

const CartItem = ({name, price, quantity}) => {

    const adPrice = price * quantity
  return (
    <li className='cart-items'>
        
        <p>{name}</p>
        <p>{currencyFormatter.format(adPrice)}</p>
        <p>{quantity}</p>
    </li>
  )
}

export default CartItem