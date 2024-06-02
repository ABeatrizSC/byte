import React from 'react'
import './style.css'
import { Nav } from '../Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export function MenuMobile({ isMenuOpened, setIsMenuOpened }) {
    return (
    <div className={['menu-mobile-container', isMenuOpened ? 'opened' : ''].join(' ')}>
        <Nav isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
        <button className='menu-mobile-container__button' onClick={() => setIsMenuOpened(!isMenuOpened)}>
            <FontAwesomeIcon icon={faXmark} className='menu'/>
        </button>
    </div>
    )
}
