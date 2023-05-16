import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import "./payment.css";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useNavigate } from "react-router-dom";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./Reducer";
import axios from "./axios";
import { db } from "./firebase.js";

function Payment() {
  const navigate = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  //
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  //create 2 states, one for disable the button and another for capturing any errors
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  //
  const [clientSecret, setClientSecret] = useState(true);

  //heads up!!!extremely important.
  //This snippet of code means that whenever the basket changes,
  //it will make the request and update the special stripe secret
  //which allow us to customize the correct amount
  useEffect(() => {
    //generate special stripe secret which allows us to charge the customer

    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        //Stripe expects the total in a currencies subunits
        //i.e. 10 dollars shoule be written in 1000
        url: `/payments/create?total=${(getBasketTotal(basket) * 1000) / 10}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log("The secret is>>>", clientSecret);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //paymentIntent = payment confirmation

        db.collection("users")
          .doc(user?.id)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "empty_basket",
        });

        //throw the user to order page
        navigate("/orders");
      });
  };

  const handleChange = (e) => {
    //listen for changes in the cardELement
    //display any errors if the use type wrong card info

    //if the event is empty, it will disable the button.
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="container">
        <h1>
          Checkout (<Link to="/checkout"> {basket.length} items </Link>)
        </h1>
        <div className="checkoutBody">
          <div className="row">
            <h4 className="left">Delivery Address</h4>
            <div className="address">{user?.email}</div>
          </div>

          <div className="row">
            <h4 className="left">Review items and delievery</h4>
            <div className="items">
              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          </div>

          <div className="row">
            <div className="left">
              <h4>Payment Method</h4>
            </div>
            <div className="stripe">
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />
                <div className="priceContainer">
                  <CurrencyFormat
                    renderText={(value) => (
                      <>
                        <p>
                          <strong>Order total: $ {value}</strong>
                        </p>
                      </>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                  <button disabled={processing || disabled || succeeded}>
                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                  </button>
                </div>
                {/* && means only if the former exists then the later will be moving forward*/}
                {error && <div>{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
