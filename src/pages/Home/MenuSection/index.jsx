import './style.css'
import lancheImg from '../../../components/Header/Components/CartProduct/lancheExemplo.jpg'
import { Link } from 'react-router-dom'

export function MenuSection() {
  return (
    <section className='home-section menu-section'>
      <div className='title-container menu-section__title'>
        <h3>Experimente já</h3>
        <h2>Os mais pedidos</h2>
      </div>
      <div className='menu-container'>
        <div className='product'>
          <img className='product__img' src={lancheImg} alt="Nome do lanche" />
          <div className='product__information-container'>
            <span className='product-name'>TeraByte</span>
            <span className='product-price'>R$ 41,99</span>
          </div>
          <button className='product__button' onClick={() => {location.href = "#"}}>
            Detalhes
          </button>
        </div>
        <div className='product'>
          <img className='product__img' src={lancheImg} alt="Nome do lanche" />
          <div className='product__information-container'>
            <span className='product-name'>TeraByte</span>
            <span className='product-price'>R$ 41,99</span>
          </div>
          <button className='product__button' onClick={() => {location.href = "#"}}>
            Detalhes
          </button>
        </div>
        <div className='product'>
          <img className='product__img' src={lancheImg} alt="Nome do lanche" />
          <div className='product__information-container'>
            <span className='product-name'>TeraByte</span>
            <span className='product-price'>R$ 41,99</span>
          </div>
          <button className='product__button' onClick={() => {location.href = "#"}}>
            Detalhes
          </button>
        </div>
        <div className='product'>
          <img className='product__img' src={lancheImg} alt="Nome do lanche" />
          <div className='product__information-container'>
            <span className='product-name'>TeraByte</span>
            <span className='product-price'>R$ 41,99</span>
          </div>
          <button className='product__button' onClick={() => {location.href = "#"}}>
            Detalhes
          </button>
        </div>
      </div>
      <Link to='/cardapio'>
        <button className='menu-section__button-menu'>
          Ver cardápio completo
        </button>
      </Link>
    </section>
  )
}
