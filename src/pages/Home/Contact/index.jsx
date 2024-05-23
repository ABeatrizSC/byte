import React from 'react'
import './style.css'
import whatsappIcon from '../../../assets/images/whatsapp-icon.png'
import instagramIcon from '../../../assets/images/instagram-icon.png'
import facebookIcon from '../../../assets/images/facebook-icon.png'

export function Contact() {
    return (
        <section className='home-section contact-section' id='contact'>
            <div className='title-container'>
                <h3>Fale conosco</h3>
                <h2>Contato</h2>
            </div>
            <div className='contact-section__content'>
                <div className='content__contacts'>
                    <ul className='social-media-list'>
                        <li className='social-media-list__li'>
                            <img className="social-media-img" src={whatsappIcon} alt="WhatsApp Icon" />
                            <a target="_blank" href="https://web.whatsapp.com/">
                                (14) 91234-5678
                            </a>
                        </li>
                        <li className='social-media-list__li'>
                            <img className="social-media-img" src={instagramIcon} alt="Instagram Icon" />
                            <a target="_blank" href="https://www.instagram.com/">
                                @byteburger
                            </a>
                        </li>
                        <li className='social-media-list__li'>
                            <img className="social-media-img" src={facebookIcon} alt="Facebook icon" />
                            <a target="_blank" href="https://www.facebook.com/">
                                @byteburgerofc
                            </a>
                        </li>
                    </ul>
                    <div className='store-infos'>
                        <h4>Horários de Funcionamento:</h4>
                        <div className='store-infos__content'>
                            <p>Terça à Domingo: 18h às 00h</p>
                            <p>Rua Exemplo, 123, Botucatu-SP.</p>
                        </div>
                    </div>
                </div>
                <div className='content__localization'>
                    <iframe className='localization__map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.5199758619515!2d-48.46372842544741!3d-22.93106973873787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c6df7bdb8e6f37%3A0xd98991982dd352a7!2sFatec%20-%20Faculdade%20de%20Tecnologia%20de%20Botucatu!5e0!3m2!1spt-BR!2sbr!4v1715123955400!5m2!1spt-BR!2sbr" allowFullScreen={false} loading={'lazy'} referrerPolicy={'no-referrer-when-downgrade'}></iframe>
                </div>
            </div>
        </section>
    )
}
