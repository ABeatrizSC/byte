import '../Nav/style.css'

export function Nav() {
    return (
        <ul className='nav-list'>
            <li className='nav-list__item'>
                <a href="#">Home</a>
            </li>
            <li className='nav-list__item'>
                <a href="#">Cardápio</a>
            </li>
            <li className='nav-list__item'>
                <a href="#">Quem somos</a>
            </li>
            <li className='nav-list__item'>
                <a href="#">Feedbacks</a>
            </li>
            <li className='nav-list__item'>
                <a href="#">Contato</a>
            </li>
        </ul> 
    )
}