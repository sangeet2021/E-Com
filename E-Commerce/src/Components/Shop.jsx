import { forwardRef, useState } from "react";
import useFetch from "../Hooks/useFetch";
import ShopList from "./ShopList";
import Modal from "./Modal";
import { currencyFormatter } from "../utils/fotmatter";

const Shop = forwardRef((props, ref) => {
  const { data, error, isPending } = useFetch(
    "http://localhost:5000/shoes",
    []
  );
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="shop-page" ref={ref}>
      <div className="sub-shop">
        <h1>Browse Products</h1>

        <ul className="shop-list">
          {data.map((item) => (
            <ShopList
              key={item.id || item.name}
              data={item}
              onItemClick={() => handleItemClick(item)}
            />
          ))}
        </ul>
      </div>
      {selectedItem && (
        <Modal open={isModalOpen} onClose={handleCloseModal}>
          <div className="selected-item">
            <img src={selectedItem.image_url} alt={selectedItem.name} />
            <div className="subselect">
              <h2>{selectedItem.name}</h2>
              <p>{selectedItem.description}</p>
              <p>Price: {currencyFormatter.format(selectedItem.price)}</p>
              <p>Sizes: {selectedItem.sizes.join(", ")}</p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
});

export default Shop;
