import React from 'react'
import './style.css'
import { CartProduct } from '../../../CartProduct'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useCart } from 'react-use-cart'

export function Cart({ isCartOpened, setIsCartOpened }) {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
    } = useCart();
    const navigate = useNavigate()

    return (
        <aside className={['cart', isCartOpened ? 'opened' : ''].join(' ')}>
            <div className='cart__header'>
                <h2 className='cart-title'>Meu carrinho ({totalUniqueItems})</h2>
                <button 
                className='close-cart-button' onClick={() => setIsCartOpened(!isCartOpened)}>
                    <FontAwesomeIcon icon={faXmark} className='close-cart-button__icon' />
                </button>
            </div>
            <div className='cart__content'>
                { (isEmpty) ? <p>Carrinho vazio. Selecione um item para continuar com a compra.</p> : items.map((product, i) => 
                    (
                        <CartProduct key={i} { ...product } removeItem={removeItem} updateItemQuantity={updateItemQuantity} isCartProduct />
                    )) 
                }
            </div>
            {!(isEmpty) ? 
                <div className='cart__footer'>
                    <p className='cart-price'>R$ {(cartTotal) ? cartTotal.toFixed(2).replace('.', ',') : '00,00'}</p>
                    <button className='button-finalize-cart' disabled={isEmpty} onClick={() => {navigate("/checkout"); setIsCartOpened(!isCartOpened);}}>
                        Finalizar carrinho
                    </button>
                </div>
                : 
                <></>
            }
            <div id='cart-overlay' onClick={() => setIsCartOpened(!isCartOpened)}></div>
        </aside>
    )
}