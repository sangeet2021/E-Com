import { forwardRef } from "react";
import useFetch from "../Hooks/useFetch";
import ShopList from "./ShopList";

const Shop = forwardRef((props, ref) => {
  const { data, error, isPending } = useFetch(
    "http://localhost:5000/shoes",
    []
  );

  return (
    <div className="shop-page" ref={ref}>
      <div className="sub-shop">
        <h1>Browse Products</h1>

        <ul className="shop-list">
          {data.map((item) => (
            <ShopList key={item.id || item.name} data={item} />
          ))}
        </ul>
      </div>
    </div>
  );
});

export default Shop;
