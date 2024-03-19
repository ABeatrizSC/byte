import logo from '../../assets/images/logoByte.png';
import './style.css';
import { Nav } from '../Nav'

export function Header() {
    return (
        <header>
            <img className='logo' src={logo} alt="Logo Byte" />
            <div className='links-container'>
                <Nav />
                <button className='button-cart'>
                    <span className="fa-solid fa-cart-shopping"></span>
                </button>
            </div>
        </header>
    )
}