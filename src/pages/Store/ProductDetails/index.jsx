import "./style.css";
import containerBg from "../../../assets/images/backgrounds/productDetails_bg.png";
import { useParams } from "react-router-dom";
import { AddCartButton } from "../../../components/addCartButton";
import { useCallback, useEffect, useState } from "react";
import useService from "../../../hooks/useService";

export function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState();

  const { getProductById } = useService(id);

  const getData = useCallback(async () => {
    const response = await getProductById(id);
    setProduct(response);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  if (!product) return <></>;

  const { name, description, price, detailed_image } = product;

  return (
    <section className="productDetails-section">
      <div className="product-image-container">
        <img
          className="product-bg-img"
          src={containerBg}
          alt="Fundo ilustrando uma mostarda esparramada"
        />
        <img
          className="product-img"
          src={detailed_image}
          alt={`imagem promocional do produto: ${name}`}
        />
      </div>
      <div className="product-information-container">
        <div className="title-container productDetails-title">
          <h3>{name}</h3>
          <h2>{name}</h2>
        </div>
        <span className="ingredients-span">Descrição:</span>
        <p>{description}</p>
        <span className="price-span">R$ {price}</span>
        <AddCartButton props={product} text />
      </div>
    </section>
  );
}
