import { Link } from 'react-router-dom'
import '../Nav/style.css'

export function Nav() {
    return (
        <ul className='nav-list'>
            <li className='nav-list__item'>
                <Link to="/" >Home</Link>
            </li>
            <li className='nav-list__item'>
                <Link to="/#aboutus">Quem somos</Link>
            </li>
            <li className='nav-list__item'>
                <Link to="/#menu">
                    Cardápio
                </Link>
            </li>
            <li className='nav-list__item'>
                <Link to="/#feedbacks">Feedbacks</Link>
            </li>
            <li>
                <Link to="/#chooseus">Vantagens</Link>
            </li>
            <li className='nav-list__item'>
                <Link to="/#contact">Contato</Link>
            </li>
        </ul> 
    )
}