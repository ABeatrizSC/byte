import React from 'react'
import './style.css'
import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/css';
import ProductCard from '../../components/ProductCard';
import lancheImg from '../../components/Header/Components/CartProduct/lancheExemplo.jpg'
import BannerCarousel from './BannerCarousel';
import { Hero } from "../Home/Hero";
import BannerSlide from './BannerSlide';
import trojanBanner from './BannerSlide/trojanBanner.jpg';
import semanaBurguer from './BannerSlide/semana-hamburguer-banner.jpg';

export function MenuPage() {

    const productsMock = [
        {
            name: "Trojan",
            price: "44.99",
            id: 1,
            image: lancheImg,
            size: "MEDIUM"
        },
        {
            name: "João",
            price: "4400000000.99",
            id: 12,
            image: lancheImg,
            size: "MEDIUM"
        },
        {
            name: "Trojann",
            price: "44.99",
            id: 1,
            image: lancheImg,
            size: "MEDIUM"
        },
        {
            name: "Trojann",
            price: "44.99",
            id: 1,
            image: lancheImg,
            size: "MEDIUM"
        },
    ]

  return (
    <section className='menu-page-section'>
        <div className='title-container'>
            <BannerCarousel>
                <BannerSlide image={trojanBanner} />
                <BannerSlide image={semanaBurguer} />
            </BannerCarousel>

            <h3 aria-level={1}>Menu</h3>
            <h2 aria-level={2}>Lanches</h2>

            <Swiper spaceBetween={8} slidesPerView={2}>
                {productsMock.map((product, i) => (
                    <SwiperSlide key={i}><ProductCard {...product} /></SwiperSlide>
                ))}
            </Swiper>

      </div>
    </section>
  )
}
