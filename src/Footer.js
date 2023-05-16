import React, { useEffect } from "react";
import "./Footer.css";
import getId from "./Header";

function footer() {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer">
      <div className="backToTop" onClick={backToTop}>
        <strong>Back to top</strong>
      </div>
      <div className="middle_footer">
        <div className="sub_middle_footer">
          <div className="sub_middle_footer_head">
            <strong>Get To Know Us</strong>
          </div>
          <div>Careers</div>
          <div>Amazon and Our Planet</div>
          <div>Investor Relations</div>
          <div>Press Releases</div>
          <div>Amazon Science</div>
        </div>
        <div className="sub_middle_footer">
          <div className="sub_middle_footer_head">
            <strong>Make Money with Us</strong>
          </div>
          <div>Sell on Amazon</div>
          <div>Supply to Amazon</div>
          <div>Amazon Associates</div>
          <div>Protect & Build Your Brand</div>
          <div>Sell on Amazon Handmade</div>
          <div>Advertise Your Products</div>
          <div>Independently Publish with Us</div>
          <div>Host an Amazon Hub</div>
        </div>
        <div className="sub_middle_footer">
          <div className="sub_middle_footer_head">
            <strong>Amazon Payment Products</strong>
          </div>
          <div>Amazon.ca Rewards Mastercard</div>
          <div>Shop with Points</div>
          <div>Reload Your Balance</div>
          <div>Amazon Currency Converter</div>
          <div>Gift Cards</div>
          <div>Amazon Cash</div>
        </div>
        <div className="sub_middle_footer">
          <div className="sub_middle_footer_head">
            <strong>Let Us Help You</strong>
          </div>
          <div>COVID-19 and Amazon</div>
          <div>Shipping Rates & Policies</div>
          <div>Amazon Prime</div>
          <div>Returns Are Easy</div>
          <div>Manage your Content and Devices</div>
          <div>Customer Service</div>
        </div>
      </div>
      <div className="bottomFooter">
        <div className="sub_bottom_footer">
          <div className="ssbf">
            <div className="bottomFooterHeader">Amazon Music</div>
            <div>Stream millions of songs</div>
          </div>
          <div className="ssbf">
            <div className="bottomFooterHeader">Book Depository</div>
            <div>Books With Free Delivery Worldwide</div>
          </div>
          <div className="ssbf">
            <div className="bottomFooterHeader">Warehouse Deals</div>
            <div>Open-Box Discounts</div>
          </div>
        </div>

        <div className="sub_bottom_footer">
          <div className="ssbf">
            <div className="bottomFooterHeader">Amazon Advertising</div>
            <div>Find, attract, and engage customers</div>
          </div>
          <div className="ssbf">
            <div className="bottomFooterHeader">Goodreads</div>
            <div>Book reviews & recommendations</div>
          </div>
          <div className="ssbf">
            <div className="bottomFooterHeader">Whole Foods Market</div>
            <div>We Believe in Real Food</div>
          </div>
        </div>

        <div className="sub_bottom_footer">
          <div className="ssbf">
            <div className="bottomFooterHeader">Amazon Business</div>
            <div>Everything for your business</div>
          </div>
          <div className="ssbf">
            <div className="bottomFooterHeader">IMDb</div>
            <div>Movies, TV & Celebrities</div>
          </div>
          <div className="ssbf">
            <div className="bottomFooterHeader"> Amazon Renewed</div>
            <div>Like-new products you can trust</div>
          </div>
        </div>

        <div className="sub_bottom_footer">
          <div className="ssbf">
            <div className="bottomFooterHeader">Amazon Drive</div>
            <div>Cloud storage from Amazon</div>
          </div>
          <div className="ssbf">
            <div className="bottomFooterHeader">Amazon Photos</div>
            <div>Unlimited Photo Storage Free With Prime</div>
          </div>
          <div className="ssbf">
            <div className="bottomFooterHeader"> Blink</div>
            <div>Smart Security for Every Home</div>
          </div>
        </div>

        <div className="sub_bottom_footer">
          <div className="ssbf">
            <div className="bottomFooterHeader">Amazon Web Services</div>
            <div>Scalable Cloud Computing Services</div>
          </div>
          <div className="ssbf">
            <div className="bottomFooterHeader">Shopbop</div>
            <div>Designer Fashion Brands</div>
          </div>
        </div>
      </div>
      <p className="disclaimer">
        Disclaimer: This is an <strong>Amazon clone demo</strong> for academic
        purpose only.
      </p>
    </div>
  );
}

export default footer;
