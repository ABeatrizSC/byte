import React from 'react'
import './style.css'
import { faFacebookSquare, faInstagramSquare, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Contact() {
    return (
        <section className='home-section contact-section'>
            <div className='title-container'>
                <h3>Fale conosco</h3>
                <h2>Contato</h2>
            </div>
            <div className='contact-section__content'>
                <div>
                    <ul className='social-media-list'>
                        <li className='social-media-list__li'>
                            <a href="#">
                                <FontAwesomeIcon icon={faWhatsappSquare} />
                                WhatsApp
                            </a>
                        </li>
                        <li className='social-media-list__li'>
                            <a href="#">
                                <FontAwesomeIcon icon={faInstagramSquare} />
                                Instagram
                            </a>
                        </li>
                        <li className='social-media-list__li'>
                            <a href="#">
                                <FontAwesomeIcon icon={faFacebookSquare} />
                                Facebook
                            </a>
                        </li>
                    </ul>
                    <div>
                        <h4>Horários de Funcionamento:</h4>
                        <p>Terça à Domingo: 18h às 00h</p>
                    </div>
                </div>
                <div className='localization'>
                    <p>Rua Exemplo, 123, Botucatu-SP</p>
                </div>
            </div>
        </section>
    )
}
