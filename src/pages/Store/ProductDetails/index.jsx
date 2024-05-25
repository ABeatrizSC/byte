import React from "react";
import "./style.css";
import gameOver from "./gameOverDetails.png";
import containerBg from "../../../assets/images/productDetails_bg.png";
import { useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import { productsMock } from "../../../components/ProductCard/productsMock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

export function ProductDetails() {
  const { addItem } = useCart();
  const { id } = useParams();
  const productSelected = productsMock.filter((product) => product.id == id);

  return (
    <section className="productDetails-section">
      <div className="product-image-container">
        <img className="product-bg-img" src={containerBg} alt="" />
        <img className="product-img" src={gameOver} alt="" />
      </div>
      <div className="product-information-container">
        <div className="title-container productDetails-title">
          <h3>{productSelected[0].name}</h3>
          <h2>{productSelected[0].name}</h2>
        </div>
        <span className="ingredients-span">Ingredientes:</span>
        <p>{productSelected[0].description}</p>
        <span className="price-span">R$ {productSelected[0].price}</span>
        <button
          className="add-cart-button"
          onClick={() => addItem(productSelected[0])}
        >
          <FontAwesomeIcon icon={faCartPlus} />
          Adicionar ao carrinho
        </button>
      </div>
    </section>
  );
}
