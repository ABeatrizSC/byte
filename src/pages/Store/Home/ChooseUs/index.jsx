import React from "react";
import "./style.css";
import deliveryIcon from "../../../../assets/images/icons/delivery-icon.png";
import priceIcon from "../../../../assets/images/icons/price-icon.png";
import qualityIcon from "../../../../assets/images/icons/quality-icon.png";

export function ChooseUs() {
  return (
    <section className="home-section chooseUs-section" id="chooseus">
      <div className="title-container chooseUs-section__title">
        <h3>O que oferecemos</h3>
        <h2>Vantagens exclusivas</h2>
      </div>
      <div className="benefits-container">
        <div>
          <img src={qualityIcon} alt="Quality icon" />
          <span>Produtos de qualidade</span>
        </div>
        <div>
          <img src={deliveryIcon} alt="Delivery icon" />
          <span>Entrega rápida</span>
        </div>
        <div>
          <img src={priceIcon} alt="Price icon" />
          <span>Preço justo</span>
        </div>
      </div>
    </section>
  );
}
