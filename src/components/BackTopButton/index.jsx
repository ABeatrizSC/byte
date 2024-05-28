import './style.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

export function BackTopButton() {
    return (
        <button id='back-top-button' onClick={() => window.scrollTo(0, 0)}>
            <FontAwesomeIcon className='arrow-icon' icon={faArrowUp} />
        </button>
    )
}
