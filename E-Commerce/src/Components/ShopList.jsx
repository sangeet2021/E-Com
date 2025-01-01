import { useContext } from "react";
import { currencyFormatter } from "../utils/fotmatter";
import CartContext from "../Context/CartContext";

const ShopList = ({ data, onItemClick }) => {
  const mealItem = useContext(CartContext);

  const handleAddItem = () => {
    mealItem.addItem(data);
  };

  // const handleItemClick = () => {
  //   onItemClick(data);
  // };
  return (
    <li onClick={onItemClick}>
      <img src={data.image_url} alt="" />
      <p>{data.name}</p>
      <p>{currencyFormatter.format(data.price)}</p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleAddItem();
        }}
      >
        Add To Cart
      </button>
    </li>
  );
};

export default ShopList;
