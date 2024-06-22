import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { AddCartButton } from "../addCartButton";
import { Product } from "../../types/models";

const ProductCard: React.FC<Product> = (props) => {
  const { id_product, name, price, image } = props;
  const productAlt = `Imagem promocional do nosso lanche chamado ${name}`;
  const navigate = useNavigate();

  return (
    <div className={`product-card`}>
      <img className="card__img" src={image} alt={productAlt} />
      <div className="card__information-container">
        <span className="card__name">{name}</span>
        <span className="card__price">R$ {price}</span>
      </div>
      <div className="card__buttons-container">
        <button
          className="details-button"
          onClick={() => {
            navigate(`/cardapio/${id_product}`);
          }}
        >
          Detalhes
        </button>
        <AddCartButton props={props} text={false} />
      </div>
    </div>
  );
};

export default ProductCard;
