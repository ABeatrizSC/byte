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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam harum sunt ipsum a recusandae dolorem quod deleniti deserunt? Dolor consequuntur iste corporis architecto debitis dignissimos sed ad quaerat voluptates ullam?</p>
            </div>
        </div>
    </section>
  )
}
