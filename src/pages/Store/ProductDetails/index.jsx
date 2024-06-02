import React from "react";
import "./style.css";
import gameOver from "./gameOverDetails.png";
import containerBg from "../../../assets/images/backgrounds/productDetails_bg.png";
import { useParams } from "react-router-dom";
import { productsMock } from "../../../components/ProductCard/productsMock";
import { AddCartButton } from "../../../components/addCartButton";

export function ProductDetails() {
  const { id } = useParams();
  const productSelected = productsMock.filter( product => product.id == id)[0];
  const alt = `imagem promocional do lanche ${productSelected.name}`;

  return (
    <section className="productDetails-section">
      <div className="product-image-container">
        <img className="product-bg-img" src={containerBg} alt="Fundo que simula uma mostarda esparramad" />
        <img className="product-img" src={gameOver} alt={alt} />
      </div>
      <div className="product-information-container">
        <div className="title-container productDetails-title">
          <h3>{productSelected.name}</h3>
          <h2>{productSelected.name}</h2>
        </div>
        <span className="ingredients-span">Ingredientes:</span>
        <p>{productSelected.description}</p>
        <span className="price-span">R$ {productSelected.price}</span>
        <AddCartButton props={productSelected} text/>
      </div>
    </section>
  );
}
