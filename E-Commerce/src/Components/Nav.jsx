import Button from "./UI/Button";
import CartContext from "../Context/CartContext";
import { useContext } from "react";

const Nav = ({onShop, onHome}) => {
  const btnData = useContext(CartContext);
  const totalQuantity = btnData.items.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <nav className="nav" >
      <h1 onClick={onHome}>
        <span>Stride</span> Style
      </h1>

      <ul className="nav-ul">
        <li onClick={onShop}>Products</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>
          <Button>Cart ({totalQuantity})</Button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
