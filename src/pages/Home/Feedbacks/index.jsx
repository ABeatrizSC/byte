import { React } from 'react'
import './style.css'
import { TestimonyCard } from './Components/TestimonyCard'
import { clientsData } from './Components/TestimonyCard/clientsData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'

export function Feedbacks() {

  return (
    <section className='home-section feedback-section'>
      <div className='title-container feedback-section__title'>
        <h3>Depoimentos</h3>
        <h2>O quê nossos clientes dizem</h2>
      </div>
      <button className='arrow arrow--left'>
        <FontAwesomeIcon icon={faCircleChevronLeft} />
      </button>
      <div className='feedback-section__content'>
        {clientsData.map(client => {
          return (
            <TestimonyCard 
              key={client.id}
              name={client.name}
              testimony={client.testimony} 
            />)
        })}
      </div>
      <button className='arrow arrow--right'>
        <FontAwesomeIcon icon={faCircleChevronRight} />
      </button>
    </section>
  )
}
