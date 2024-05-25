import { useRef, useState } from 'react'
import './style.css'
import { TestimonyCard } from './Components/TestimonyCard'
import { clientsData } from './Components/TestimonyCard/clientsData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'

export function Feedbacks() {
  const carousel = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleNextFeedback = () => {
    carousel.current.scrollLeft += carousel.current.offsetWidth;
    setCurrentSlide(currentSlide+1);
  }

  const handleBeforeFeedback = () => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
    if (currentSlide == 0) {
      return
    }
    setCurrentSlide(currentSlide-1);
  }

  return (
    <section className='home-section feedback-section' id='feedbacks'>
      <div className='title-container feedback-section__title'>
        <h3>Depoimentos</h3>
        <h2>O quê nossos clientes dizem</h2>
      </div>
      <button className={['arrow arrow--left', (currentSlide == 0) ? 'button-disabled' : ''].join(' ')} onClick={() => handleBeforeFeedback()}>
        <FontAwesomeIcon icon={faCircleChevronLeft} />
      </button>
      <div className='feedback-section__carousel' ref={carousel}>
        <div className='carousel__testimony-card-container'>
          {clientsData.map(client => {
            return (
              <TestimonyCard 
                key={client.id}
                name={client.name}
                testimony={client.testimony} 
              />)
          })}
        </div>
      </div>
      <button className={['arrow arrow--right', (currentSlide == clientsData.length-1) ? 'button-disabled' : ''].join(' ')} onClick={() => handleNextFeedback()}>
        <FontAwesomeIcon icon={faCircleChevronRight} />
      </button>
    </section>
  )
}
