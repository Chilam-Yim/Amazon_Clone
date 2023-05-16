import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import "./Home.css";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Footer from "./Footer";
import Orders from "./Orders";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51MJjCoHol0R0ogdTXdZtLl7MWWNVHXYUM8WrgymjtwLKQDYZpHCzg4f5lQXouz1cTc1f3y5NCmunMJzclxOqVJ6h00pqQkNLuH"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(
    () => {
      // run only once when the app component loads
      auth.onAuthStateChanged((authUser) => {
        //it is a listener
        console.log("THE USER IS >>> ", authUser);
        if (authUser) {
          //the user just logged in or the user was logged in
          // dispatch is an action of shooting the user data to data layer once the user logged in
          dispatch({
            type: "setUser",
            user: authUser,
          });
        } else {
          //the user is logged out
          dispatch({
            type: "setUser",
            user: null,
          });
        }
      });
    },
    [] //[user,basket] everytime user or basket changes, it will refire the code
  );
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header /> <Home /> <Footer />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header /> <Checkout /> <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>

                <Footer />
              </>
            }
          />

          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
