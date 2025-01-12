import React, { useContext } from "react";
import Modal from "./Modal";
import OpenCloseContext from "../Context/OpenCloseContext";
import { useActionState } from "react"; // Ensure this is correctly imported

const Checkout = () => {
  const progCtx = useContext(OpenCloseContext);

  // Define the action to handle form submission
  const checkOut = (prevState, formData) => {
    const customerData = Object.fromEntries(formData.entries());
    
  };

  // Use useActionState hook
  const [formState, formAction, pending] = useActionState(checkOut, null);

  return (
    <Modal
      open={progCtx.progress === "checkout"}
      onClose={progCtx.hideCheckout}
    >
      <h2>Checkout</h2>
      <form action={formAction}>
        <div className="sub-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="sub-form">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="sub-form">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            rows="3"
            required
            placeholder="Enter your address"
          ></textarea>
        </div>

        <button type="submit" disabled={pending} className="checkout-btn2">
          {pending ? "Submitting..." : "Submit"}
        </button>
      </form>
    </Modal>
  );
};

export default Checkout;
