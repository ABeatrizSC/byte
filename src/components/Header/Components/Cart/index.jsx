import React from 'react'
import { CartProduct } from '../../../CartProduct'
import './style.css'
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
                    <p className='cart-price'>R$ {(cartTotal) ? cartTotal : '00,00'}</p>
                    <button className='button-finalize-cart' disabled={isEmpty} onClick={() => {window.location.href="/checkout"}}>
                        Finalizar carrinho
                    </button>
                </div>
                : 
                <></>
            }
        </aside>
    )
}