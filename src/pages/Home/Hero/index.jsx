import React from 'react'
import './style.css'
import heroImg from '../Hero/ultimo.jpg'
import heroImg2 from '../Hero/lanchefogo_v01.jpg'
import heroImg3 from '../Hero/lanchefogo_v02.jpg'

export function Hero() {
  return (
    <section className='hero-section'>
        <img className='hero-section__img' src={heroImg3} alt="" />
        <div className='hero-section__text-container'>
            <div className='byte-container'>
                <div className='hr'/>
                <p>BYTE</p>
            </div>
            <h1>
              <span className='h1--highlight'>
                Sabores que vão além dos 
              </span>
              bites
            </h1>
            <div className='subtitle-container'>
              <p>Temos um cardápio recheado de produtos de alta qualidade. Peça já o melhor hambúrguer da cidade!</p>
              <button>Ver cardápio</button>
            </div>
        </div>
    </section>
  )
}
