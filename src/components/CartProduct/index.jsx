import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faMinus, faPlus, faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import { Toaster, toast } from 'sonner';

export function CartProduct( { id, name, price, image, quantity, removeItem, updateItemQuantity, isCartProduct, isCheckoutProduct } ) {
  const alt = `Imagem do produto ${name}`
  return (
    <div className='product-container'>
      <Toaster richColors={true} />
      <img  className='product-container__img' src={image} alt={alt} />
      <div className='product-container__information'>
        <h4 className='product-title'>{name}</h4>
        <p className='product-price'>R$ {price}</p>
        <div className='button-qtd-container'>
          { isCartProduct && 
            <button className='button-qtd-container__button'>
              <FontAwesomeIcon icon={faMinus} className='button-qtd-container__icon' onClick={() => updateItemQuantity(id, quantity - 1)} />
            </button>
          }
          <p className='button-qtd-container__p'>
            {quantity}
            {isCheckoutProduct && 'x'}
          </p>
          { isCartProduct &&
            <button className='button-qtd-container__button' onClick={() => updateItemQuantity(id, quantity + 1)}>
              <FontAwesomeIcon icon={faPlus} className='button-qtd-container__icon' />
            </button>
          }
        </div>
        { isCartProduct &&
          <button className='button-remove-product'>
            <FontAwesomeIcon icon={faXmarkCircle} className='button-remove-product__icon' onClick={() => {removeItem(id); toast.error('Produto removido do carrinho')}} />
          </button>
      }
      </div>
    </div>
  )
}
