import React, { useContext } from "react";
import Modal from "./Modal";
import CartContext from "../Context/CartContext";
import OpenCloseContext from "../Context/OpenCloseContext";
import CartItem from "./CartItem";
import { currencyFormatter } from "../utils/fotmatter";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const progCtx = useContext(OpenCloseContext);

  const handleCloseCart = () => {
    progCtx.hideCart();
    console.log(progCtx.progress);
  };

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  const progState = progCtx.progress === "open";

  return (
    <Modal open={progState} onClose={progState ? handleCloseCart : null}>
      <h2>Your Items</h2>
      <ul>
        <div className="heading">
          <p>Item</p>
          <p>Price</p>
          <p>Quantity</p>
        </div>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onAdd={() => cartCtx.addItem(item)}
            onMinus={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <h3>Total: {currencyFormatter.format(cartTotal)}</h3>
    </Modal>
  );
};

export default Cart;
