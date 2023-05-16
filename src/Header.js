import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import {auth} from "./firebase";


function Header() {
  const [{ basket,user }, dispatch] = useStateValue();

  const handleAuth = () =>{
    if(user) {auth.signOut();}
  }
 
  return (
    <>
      <div className="header">
        <Link to="/">
          <img
            id="backtoTop"
            className="headerLogo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>

        <div className="headerSearch">
          <input
            className="headerSerachInput"
            placeholder="Search here..."
            type="text"
          ></input>
          <SearchIcon className="headerSearchIcon" />
        </div>

        <div className="headerNav">
          <Link to={!user && "/login"}>
            <div onClick={handleAuth} className="headerButton">
              <span className="button1">
                Hello {user ? user.email : "Guest"}
              </span>
              <span className="button2"> {user ? "Sign out" : "Sign In"}</span>
            </div>
          </Link>
          <div className="headerButton">
            <span className="button1">Returns</span>
            <span className="button2"> & Orders</span>
          </div>

          <div className="headerButton">
            <span className="button1">Your</span>
            <span className="button2"> Prime</span>
          </div>
        </div>

        <Link to="/checkout">
          <div class="basket">
            <ShoppingBasketIcon />
            <span className="button2 basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
      <div className="menuBar">
        <div className="menuIcon">
          <MenuOutlinedIcon style={{ color: "white" }} /> 
        </div>
        <div>Best Sellers</div>
        <div>Deal Store</div>
        <div>New Releases</div>
        <div>Customer Service</div>
        <div>Prime</div>
        <div>Gift Ideas</div>
        <div>Electronics</div>
        <div>Home</div>
        <div>Books</div>
        <div>Sell</div>
        <div>Gift Cards</div>
        <div>Coupons</div>
      </div>
    </>
  );
}

function getId() {
  
    const id = document.getElementById("backToTop");

}

export {getId};
export default Header;
