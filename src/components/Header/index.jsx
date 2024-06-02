import logo from '../../assets/images/logoByte.png';
import { Nav } from '../Nav'
import { Cart } from './Components/Cart'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import './style.css';

export function Header() {
    const [isCartOpened, setIsCartOpened] = useState(false)
    const navigate = useNavigate()

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
                <button className='header-button menu-mobile' onClick={() => setIsCartOpened(!isCartOpened)}>
                    <FontAwesomeIcon icon={faBars} className='header-icon' />
                </button>
            </div>
            <Cart isCartOpened={isCartOpened} setIsCartOpened={setIsCartOpened}/>
        </header>
    )
}