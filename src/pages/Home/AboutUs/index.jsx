import React from 'react'
import aboutUsImg from '../../../assets/images/aboutUs_img.jpg'
import './style.css'

export function AboutUs() {
  return (
    <section className='home-section aboutUs-section'id='aboutus'>
        <div className='aboutUs-section__image-container'>
          <img src={aboutUsImg} alt="" />
        </div>
        <div className='aboutUs-section__content'>
            <div className='title-container'>
                <h3>Nossa história</h3>
                <h2>QUEM SOMOS</h2>
            </div>
            <div className='text-container'>
              <p>Fundada há três anos e com uma paixão ardente por ingredientes frescos e sabores autênticos, a <span className='text-highlight'>Byte</span> nasceu da ideia de oferecer uma experiência gastronômica única para os amantes de hambúrgueres artesanais.</p>
              <p>Nossa lanchonete temática entrega referências ao mundo da tecnologia através de cada item do nosso cardápio. Além disso, o nome <span className='text-highlight'>Byte</span> é um trocadilho que une a unidade básica de dados digitais ao ato de morder ("bite", em inglês).</p>
            </div>
        </div>
    </section>
  )
}
