import { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { Nav } from '../Nav'
import { Cart } from './Components/Cart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import { MenuMobile } from '../MenuMobile';
import { useCart } from 'react-use-cart'
import logo from '../../assets/images/logoByte.png';

export function Header() {
    const { totalItems } = useCart();
    const [isCartOpened, setIsCartOpened] = useState(false);
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const navigate = useNavigate();

    return (
        <header>
            <img className='logo' src={logo} alt="Logo Byte" onClick={() => navigate("/")} />
            <div className='links-container'>
                <div className='nav-header-container'>
                    <Nav />
                </div>
                { !(window.location.href.indexOf('checkout') > 0) && 
                    <button className='header-button' onClick={() => setIsCartOpened(!isCartOpened)}>
                        <FontAwesomeIcon icon={faCartShopping} className='header-icon'/>
                    </button>
                }
                <button className='header-button menu-mobile' onClick={() => setIsMenuOpened(!isMenuOpened)}>
                    <FontAwesomeIcon icon={faBars} className='header-icon' />
                </button>
                {totalItems && !(window.location.href.indexOf('checkout') > 0) ?
                    <div className='cart-quantity'>
                        {totalItems}
                    </div> 
                    : null
                }
            </div>
            <MenuMobile isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
            <Cart isCartOpened={isCartOpened} setIsCartOpened={setIsCartOpened}/>
        </header>
    )
}