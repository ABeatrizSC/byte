import logo from '../../assets/images/logoByte.png';
import { Nav } from '../Nav'
import { Cart } from './Components/Cart'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './style.css';

export function Header() {
    const [isCartOpened, setIsCartOpened] = useState(false)
    const navigate = useNavigate()

    return (
        <header>
            <img className='logo' src={logo} alt="Logo Byte" onClick={() => navigate("/")} />
            <div className='links-container'>
                <Nav />
                <button className='button-cart' onClick={() => setIsCartOpened(!isCartOpened)}>
                    <FontAwesomeIcon icon={faCartShopping} className='button-cart__icon'/>
                </button>
            </div>
            <Cart isCartOpened={isCartOpened} setIsCartOpened={setIsCartOpened}/>
        </header>
    )
}