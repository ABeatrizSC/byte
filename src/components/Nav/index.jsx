import { Link } from 'react-router-dom'
import '../Nav/style.css'

export function Nav({ isMenuOpened, setIsMenuOpened }) {
    const closeMenuMobile = () => isMenuOpened ? setIsMenuOpened(!isMenuOpened) : null;
    return (
        <ul className='nav-list'>
            <li className='nav-list__item' onClick={closeMenuMobile} >
                <Link to="/" >Home</Link>
            </li>
            <li className='nav-list__item' onClick={closeMenuMobile}>
                <Link to="/#aboutus">Quem somos</Link>
            </li>
            <li className='nav-list__item' onClick={closeMenuMobile}>
                <Link to="/#menu">
                    Cardápio
                </Link>
            </li>
            <li className='nav-list__item' onClick={closeMenuMobile}>
                <Link to="/#feedbacks">Feedbacks</Link>
            </li>
            <li className='nav-list__item' onClick={closeMenuMobile}>
                <Link to="/#chooseus">Vantagens</Link>
            </li>
            <li className='nav-list__item' onClick={closeMenuMobile}>
                <Link to="/#contact">Contato</Link>
            </li>
        </ul> 
    )
}