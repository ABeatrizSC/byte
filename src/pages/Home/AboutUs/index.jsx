import React from 'react'
import aboutUsImg from '../../../assets/images/teste.jpg'
import aboutUsImg2 from '../../../assets/images/teste2.jpg'
import './style.css'

export function AboutUs() {
  return (
    <section className='home-section aboutUs-section'>
        <div className='aboutUs-section__image-container'>
          <img src={aboutUsImg2} alt="" />
        </div>
        <div className='aboutUs-section__content'>
            <div className='title-container'>
                <div className='subtitle-container'>
                  <div className='subtitle-hr' />
                  <h3>Nossa história</h3>
                </div>
                <h2>Quem somos</h2>
            </div>
            <p>Fundada há três anos com uma paixão ardente por ingredientes frescos e sabores autênticos, a Byte nasceu da ideia de oferecer uma experiência gastronômica única para os amantes de hambúrgueres artesanais.</p>
        </div>
    </section>
  )
}
