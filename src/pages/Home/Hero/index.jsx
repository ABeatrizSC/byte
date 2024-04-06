import React from 'react'
import './style.css'
import heroBg from '../../../assets/images/hero_img.jpg'

export function Hero() {
  return (
    <section className='hero-section'>
        <img className='hero-section__img' src={heroBg} alt="Hamburguer 'GameOver' pegando fogo em um fundo de madeira" />
        <div className='hero-section__text-container'>
            <div className='byte-container'>
                <div className='hr'/>
                <span>BYTE</span>
            </div>
            <h1>
              Sabores que vão além dos<br/>
              <span className='h1--highlight'>
                bites
              </span>
            </h1>
            <div className='subtitle-container'>
              <p>Temos um cardápio recheado de produtos de alta qualidade. Peça já o melhor hambúrguer da cidade!</p>
              <button>Ver cardápio</button>
            </div>
        </div>
    </section>
  )
}
