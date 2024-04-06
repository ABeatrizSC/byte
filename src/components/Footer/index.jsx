import logo from '../../assets/images/logoByte.png'; 
import './style.css';
import { Nav } from '../Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
    return (
        <footer>
            <section className='footer__information-section'>
                <div className='footer-columns column-byte'>
                    <img className='logo' src={logo} alt="Logo Byte" />
                    <p>A cada mordida, uma explosão de bites.</p>
                </div>
                <div className='footer-columns'>
                    <h3>Navegue</h3>
                    <Nav />
                </div>
                <div className='footer-columns'>
                    <h3>Entre em contato</h3>
                    <ul className='contact-list'>
                        <li>
                            (14) 91234-5678
                        </li>
                        <li>
                            contato@byte.com.br
                        </li>
                        <li>
                            Rua Exemplo, 123,
                            Botucatu-SP
                        </li>
                    </ul>
                </div>
            </section>
            <section className='footer__copyright-section'>
                <div>
                    <p>Copyright © 2024 Byte | Todos os Direitos Reservados</p>
                </div>
                <ul className='social-media-list'>
                    <li className='social-media-list__item'>
                        <a href="#">
                            <FontAwesomeIcon icon={faFacebookF} className='social-media-icons'/>
                        </a>
                    </li>
                    <li className='social-media-list__item'>
                        <a href="#">
                            <FontAwesomeIcon icon={faInstagram} className='social-media-icons'/>
                        </a>
                    </li>
                     <li className='social-media-list__item'>
                        <a href="#">
                        <FontAwesomeIcon icon={faWhatsapp} className='social-media-icons'/>
                        </a>
                    </li>
                </ul>
            </section>
        </footer>
    )
}