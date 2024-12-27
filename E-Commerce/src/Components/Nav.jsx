import Button from "./UI/Button";
import CartContext from "../Context/CartContext";
import { useContext } from "react";
import OpenCloseContext from "../Context/OpenCloseContext";

const Nav = ({ onShop, onHome, onAbout }) => {
  const btnData = useContext(CartContext);
  const userCtx = useContext(OpenCloseContext);
  const totalQuantity = btnData.items.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const openCart = () => {
    userCtx.showCart();
    // console.log("logged")
    console.log(userCtx.progress)
  };
  return (
    <nav className="nav">
      <h1 onClick={onHome}>
        <span>Stride</span> Style
      </h1>

      <ul className="nav-ul">
        <li onClick={onShop}>Products</li>
        <li onClick={onAbout}>About Us</li>
        <li>Contact</li>
        <li>
          <Button onClick={openCart}>Cart ({totalQuantity})</Button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
