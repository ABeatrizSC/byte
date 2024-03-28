import React from 'react'
import './style.css'
import lancheImg from './lancheExemplo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faMinus, faPlus, faXmarkCircle } from '@fortawesome/free-solid-svg-icons'

export function CartProduct() {
  return (
    <div className='product-container'>
      <img  className='product-container__img' src={lancheImg} alt="Imagem do produto" />
      <div className='product-container__information'>
        <h4 className='product-title'>TeraByte</h4>
        <p className='product-price'>R$ 41,99</p>
        <div className='button-qtd-container'>
          <button className='button-qtd-container__button'>
            <FontAwesomeIcon icon={faMinus} className='button-qtd-container__icon' />
          </button>
          <p className='button-qtd-container__p'>1</p>
          <button className='button-qtd-container__button'>
            <FontAwesomeIcon icon={faPlus} className='button-qtd-container__icon' />
          </button>
        </div>
        <button className='button-remove-product'>
          <FontAwesomeIcon icon={faXmarkCircle} className='button-remove-product__icon' />
        </button>
      </div>
    </div>
  )
}
