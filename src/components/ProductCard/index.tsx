import React from "react";
import "./style.css";
import { ProductCardProps } from "./type";


const ProductCard: React.FC<ProductCardProps> = (props) => {
    const {id, name, price, size, image} = props;
    const productAlt = `Imagem promocional do nosso lanche chamado ${name}`;
    const handleRedirect = () => {
        location.href = `produto/${id}`;
    };

    return (
        <div className={`product-card product-card--${size}`}>
            <img className='card__img' src={image} alt={productAlt} />
            
            <div className='card__information-container'>
                <span className='card__name'>{name}</span>
                <span className='card__price'>R$ {price}</span>
            </div>

            <button className='card__button' onClick={handleRedirect}>
                Detalhes
            </button>
        </div>
    )
}

export default ProductCard;