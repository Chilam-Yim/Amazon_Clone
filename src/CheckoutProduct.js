import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, price, title, rating }) {

    const [{ basket }, dispatch] = useStateValue();

  
      const removeFromBasket = () => {
        dispatch({
          type: "removeFromBasket",
          id: id,
        });
      };
    

    

  return (
    <div className="checkoutProduct">
      
      <img className="checkoutPageImage" src={image} />

      <div className="checkoutProductInfo">
        <p className="checkoutProductTitle">{title}</p>
        <p className="checkoutProductPrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProductRating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
