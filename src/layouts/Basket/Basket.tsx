import React from "react";
import BasketProduct from "../../components/BasketProduct/BasketProduct";
import "./Basket.scss";
import white11 from  "../../images/itemBasket.jpeg";
import purple12 from  "../../images/purple12.png";
import white12 from  "../../images/white12.png";

export const Basket = () => {
  return (
    <div className="basket">
      
      <h2>Səbət</h2>
      <div className="basket-main">
        <div className="basket-main__left">
          <BasketProduct srcValue={white11} nameValue={"iPhone 11 64 GB | White (ağ)"} priceValue={1380.00} typeValue={"Smartfon"} count={1} />
          <BasketProduct srcValue={purple12} nameValue={"iPhone 12 Mini 64 GB | Purple (bənövşəyi)"} priceValue={1550.00} typeValue={"Smartfon"} count={1} />
          <BasketProduct srcValue={white12} nameValue={"iPhone 12 Mini 64 GB | White (ağ)"} priceValue={1550.00} typeValue={"Smartfon"} count={1} />
        </div>
        <div className="basket-main__right">
          <div className="complete-order">
            <div className="discount">
              <h4>Endirim</h4>
              <span> 0 AZN</span>
            </div>
            <div className="shipping">
              <h4>Çatdırılma</h4>
              <span> 0 AZN</span>
            </div> 
            <div className="total-price">
              <h3>Toplam</h3>
              <span> 3260.00 ₼</span>
            </div>
            <button className="order-btn"></button>
          </div>
        </div>
      </div>
    </div>
  );
};
