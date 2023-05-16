import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import {useStateValue} from "./StateProvider"
import userEvent from "@testing-library/user-event";

function Checkout() {
 
  const [{basket,user},dispatch] = useStateValue ();
  

  return (
    <div className="checkout">
      <div className="checkoutLeft">
        <img
          className="checkoutAd"
          src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_NotApproved._TTW_.jpg"
        ></img>

        <div>
          <h3>Hello, {user?user?.email:'guest'}</h3>
          <h2 className="checkoutTitle">Your shopping basket {basket.length==0?" is empty":""}</h2>
        </div>
     

      
      
       {basket.map (item=>(
        <CheckoutProduct 
        id={item.id}
        title={item.title}
        image = {item.image}
        price={item.price}
        rating = {item.rating}
         />
       ))}


        {/*CheckoutProduct*/}
  
      
      </div>

      <div className="checkoutRight">
        <Subtotal/>
      </div>
    </div>
  );
}

export default Checkout;
