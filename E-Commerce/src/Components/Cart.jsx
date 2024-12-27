import React, { useContext } from "react";
import Modal from "./Modal";
import CartContext from "../Context/CartContext";
import OpenCloseContext from "../Context/OpenCloseContext";
import CartItem from "./CartItem";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const progCtx = useContext(OpenCloseContext);

  console.log("Cart re-rendered. progCtx.progress:", progCtx.progress); // Debug

  const handleCloseCart = () => {
    progCtx.hideCart();
    console.log(progCtx.progress);
  };

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
          />
        ))}
      </ul>
    </Modal>
  );
};

export default Cart;
