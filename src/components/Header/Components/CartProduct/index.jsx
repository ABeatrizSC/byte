import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faMinus, faPlus, faXmarkCircle } from '@fortawesome/free-solid-svg-icons'

export function CartProduct( { id, name, price, image, quantity, removeItem, updateItemQuantity } ) {
  return (
    <div className='product-container'>
      <img  className='product-container__img' src={image} alt="Imagem do produto" />
      <div className='product-container__information'>
        <h4 className='product-title'>{name}</h4>
        <p className='product-price'>R$ {price}</p>
        <div className='button-qtd-container'>
          <button className='button-qtd-container__button'>
            <FontAwesomeIcon icon={faMinus} className='button-qtd-container__icon' onClick={() => updateItemQuantity(id, quantity - 1)} />
          </button>
          <p className='button-qtd-container__p'>{quantity}</p>
          <button className='button-qtd-container__button' onClick={() => updateItemQuantity(id, quantity + 1)}>
            <FontAwesomeIcon icon={faPlus} className='button-qtd-container__icon' />
          </button>
        </div>
        <button className='button-remove-product'>
          <FontAwesomeIcon icon={faXmarkCircle} className='button-remove-product__icon' onClick={() => removeItem(id)}/>
        </button>
      </div>
    </div>
  )
}
