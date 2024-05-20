import React from "react";
import "./style.css";
import { ProductCardProps } from "./type";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'


const ProductCard: React.FC<ProductCardProps> = (props) => {
    const {id, name, price, size, image} = props;
    const productAlt = `Imagem promocional do nosso lanche chamado ${name}`;
    const navigate = useNavigate()

    return (
        <div className={`product-card product-card--${size}`}>
            <img className='card__img' src={image} alt={productAlt} />
            
            <div className='card__information-container'>
                <span className='card__name'>{name}</span>
                <span className='card__price'>R$ {price}</span>
            </div>
            <div className="card__buttons-container">
                <button className='details-button' onClick={() => {navigate(`/cardapio/${id}`)}}>
                    Detalhes
                </button>
                <button className='add-button'>
                    <FontAwesomeIcon icon={faCartPlus}/>
                </button>
            </div>
        </div>
    )
}

export default ProductCard;