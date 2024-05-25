import { React } from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'


export function TestimonyCard( { name, testimony }) {
    return (
        <div className='testimony-container'>
            <p className='testimony-container__p'>
                {testimony}
            </p>
            <div className='testimony-container__client-information-container'>
                <div>
                    <h4>{name}</h4>
                    <p>Cliente</p>
                </div>
                <span className='rating-container'>
                    <FontAwesomeIcon className='star-rating-icon' icon={faStar} />
                    <FontAwesomeIcon className='star-rating-icon' icon={faStar} />
                    <FontAwesomeIcon className='star-rating-icon' icon={faStar} />
                    <FontAwesomeIcon className='star-rating-icon' icon={faStar} />
                    <FontAwesomeIcon className='star-rating-icon' icon={faStar} />
                </span>
            </div>
        </div>
    )
}
