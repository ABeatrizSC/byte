import React from 'react'
import { CartProduct } from '../CartProduct'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export function Cart({ isCartOpened, setIsCartOpened }) {
    return (
        <aside className={['cart', isCartOpened ? 'opened' : ''].join(' ')}>
            <div className='cart__header'>
                <h2 className='cart-title'>Meu carrinho</h2>
                <button 
                className='close-cart-button' onClick={() => setIsCartOpened(!isCartOpened)}>
                    <FontAwesomeIcon icon={faXmark} className='close-cart-button__icon' />
                </button>
            </div>
            <div className='cart__content'>
                <CartProduct />
            </div>
            <div className='cart__footer'>
                <p className='cart-price'>Total: R$ 00,00</p>
                <button className='button-finalize-cart' onClick={() => {window.location.href="/checkout"}}>Finalizar carrinho</button>
            </div>
        </aside>
    )
}