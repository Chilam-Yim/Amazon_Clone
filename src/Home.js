import React from 'react'
import Product from "./Product";
import CancelIcon from "@mui/icons-material/Cancel";
import "./Home.css";


function Home() {
 
setTimeout(() => {
  openAlertBox()
}, 500);

function openAlertBox (){
  const alert = document.getElementById("alertBox");
  alert.classList.add("open-alertBox");
}


 const cancelALert = ()=>{
  let alert = document.getElementById("alertContainer");
  alert.remove();
 }


  
  return (
    <div className="Home">
      <div className="homeContainer">
        <div className="alertContainer" id="alertContainer">
          <div className="alertBox" id="alertBox">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/OOjs_UI_icon_alert-yellow.svg/1024px-OOjs_UI_icon_alert-yellow.svg.png"
              className="alertIcon"
            />

            <div className="alertDetail">
              <h1>Disclaimer:</h1>
              <strong>This is an Amazon clone demo for academic purpose only.</strong>
            </div>
            <div className="cancelIcon" onClick={cancelALert}>
              <CancelIcon />
            </div>
          </div>
        </div>
        <img
          className="homeImage"
          src="https://m.media-amazon.com/images/I/61TU60wMTYL._SX3000_.jpg"
        ></img>
        <div className="homeRow">
         
          <Product
            id="131"
            title="Olympus OM-D digital cameras and lens"
            image="https://m.media-amazon.com/images/I/411vUPpbTWL._AC_SY230_.jpg"
            price={239}
            rating={5}
          />
          <Product
            id="479162"
            title="SHareconn 6ft Prelit Premium Artificial Hinged Christmas Tree with 330 Warm White & Multi-Color Lights"
            image="https://m.media-amazon.com/images/I/81jg2-L5rIL._AC_SX522_.jpg"
            price={140.0}
            rating={3}
          />
        </div>
        <div className="homeRow">
          <Product
            id="1789"
            title="RENPHO Back Massager with Heat, Ultra Slim Shiatsu Lower Back Neck Massage Pillow"
            image="https://m.media-amazon.com/images/I/719VINcd-vL.__AC_SX300_SY300_QL70_ML2_.jpg"
            price={50}
            rating={4}
          />
          <Product
            id="6834"
            title="SHEKINI Women's Halter Triangle Bikini Set Sexy Bathing Suit Brazilian Cheeky Two Piece Swimsuits"
            image="https://m.media-amazon.com/images/I/61tF5N9mv5L._AC_UL320_.jpg"
            price={29.99}
            rating={5}
          />
          <Product
            id="5135"
            title="Monopoly Game, Family Board Game for 2 to 6 Players"
            image="https://m.media-amazon.com/images/I/61FEMsKbAcL._AC_SY450_.jpg"
            price={19.99}
            rating={5}
          />
        </div>
        <Product
          id="479162"
          title="Samsung - 55' AU8000 LED 4K Ultra HD HDR Smart TV "
          image="https://m.media-amazon.com/images/I/810bgxzEWHL._AC_SX355_.jpg"
          price={579.99}
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home