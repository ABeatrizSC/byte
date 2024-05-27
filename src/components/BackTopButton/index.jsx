import './style.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { backToTop } from './backToTop'

export function BackTopButton() {
    return (
        <button id='back-top-button' onClick={backToTop}>
            <FontAwesomeIcon className='arrow-icon' icon={faArrowUp} />
        </button>
    )
}
