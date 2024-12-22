import { useContext } from "react";
import { currencyFormatter } from "../utils/fotmatter";
import CartContext from "../Context/CartContext";

const ShopList = ({ data }) => {
  const mealItem = useContext(CartContext);

  const handleAddItem = () => {
    mealItem.addItem(data);
  };
  return (
    <li>
      <img src={data.image_url} alt="" />
      <p>{data.name}</p>
      <p>{currencyFormatter.format(data.price)}</p>
      <button onClick={handleAddItem}>Add To Cart</button>
    </li>
  );
};

export default ShopList;
