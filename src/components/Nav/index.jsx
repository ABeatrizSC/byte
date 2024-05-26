import '../Nav/style.css'

export function Nav() {
    return (
        <ul className='nav-list'>
            <li className='nav-list__item'>
                <a href="https://byte-theta.vercel.app/#home">Home</a>
            </li>
            <li className='nav-list__item'>
                <a href="https://byte-theta.vercel.app/#aboutus">Quem somos</a>
            </li>
            <li className='nav-list__item'>
                <a href="https://byte-theta.vercel.app/#menu">Cardápio</a>
            </li>
            <li className='nav-list__item'>
                <a href="https://byte-theta.vercel.app/#feedbacks">Feedbacks</a>
            </li>
            <li>
                <a href="https://byte-theta.vercel.app/#chooseus">Vantagens</a>
            </li>
            <li className='nav-list__item'>
                <a href="https://byte-theta.vercel.app/#contact">Contato</a>
            </li>
        </ul> 
    )
}