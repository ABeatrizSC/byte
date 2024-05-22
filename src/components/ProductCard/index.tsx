import React from "react";
import "./style.css";
import { ProductCardProps } from "./type";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';


const ProductCard: React.FC<ProductCardProps> = (props) => {
    const {id, name, price, image} = props;
    const productAlt = `Imagem promocional do nosso lanche chamado ${name}`;
    const navigate = useNavigate();
    const { addItem } = useCart();

    return (
        <div className={`product-card`}>
            <img className='card__img' src={image} alt={productAlt} />
            
            <div className='card__information-container'>
                <span className='card__name'>{name}</span>
                <span className='card__price'>R$ {price}</span>
            </div>
            <div className="card__buttons-container">
                <button className='details-button' onClick={() => {navigate(`/cardapio/${id}`)}}>
                    Detalhes
                </button>
                <button className='add-button' onClick={() => addItem(props)}>
                    <FontAwesomeIcon icon={faCartPlus}/>
                </button>
            </div>
        </div>
    )
}

export default ProductCard;