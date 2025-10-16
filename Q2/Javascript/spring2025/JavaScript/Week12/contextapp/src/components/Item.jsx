import { CartContext } from "../context/Cart";
import { useContext } from "react";

const Item = ({ name, price }) => {
  const cart = useContext(CartContext);
  console.log("Cart", cart);
  return (
    <div>
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <button
        onClick={() =>
          cart.setItems([...cart.items, { name: name, price: price }])
        }
      >
        Add to Cart
      </button>
    </div>
  );
};
export default Item;
