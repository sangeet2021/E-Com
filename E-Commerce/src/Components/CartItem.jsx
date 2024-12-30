import React from "react";
import { currencyFormatter } from "../utils/fotmatter";

const CartItem = ({ name, price, quantity, onAdd, onMinus }) => {
  const adPrice = price * quantity;
  return (
    <li className="cart-items">
      <p id="hehe">{name}</p>
      <p id="hh">{currencyFormatter.format(adPrice)}</p>
      <p className="quant">
        <button onClick={onMinus}>-</button>
        <p>{quantity}</p>
        <button onClick={onAdd}>+</button>
      </p>
    </li>
  );
};

export default CartItem;
