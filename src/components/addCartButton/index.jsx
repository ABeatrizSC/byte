import React from 'react'
import './style.css'
import { useCart } from 'react-use-cart';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Toaster, toast } from 'sonner';

export function AddCartButton( { props, text } ) {
    const { addItem } = useCart();
    return (
        <>
            <Toaster richColors={true} />
            <button className={['add-cart-button', (text) ? 'details' : ''].join(' ')} onClick={() => {addItem(props); toast.success('Produto adicionado ao carrinho');}}>
                <FontAwesomeIcon icon={faCartPlus}/>
                {(text) ? 'Adicionar ao carrinho': ''}
            </button>
        </>
    )
}
