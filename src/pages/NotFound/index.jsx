import React from 'react'
import './style.css'
import { phrases404 } from './phrases404';
import NotFoundBurger from '../../assets/images/notFound_img.png'

export function NotFound() {
    function getAPhraseNumber(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    }

    return (
        <section className='not-found-section'>
            <h1><span>Erro 404:</span> Página não encontrada</h1>
            <p>
                {phrases404[getAPhraseNumber(0, phrases404.length)]}
            </p>
            <img src={NotFoundBurger} alt="Animação de um hamburguer com óculos de sol e sorridente." />
        </section>
    )
}
