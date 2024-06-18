import { useCallback, useEffect, useState } from "react";
import useService from "../../../hooks/useService";
import "swiper/css";
import "./style.css";
import ProductCard from "../../../components/ProductCard";
import BannerCarousel from "./BannerCarousel";
import BannerSlide from "./BannerSlide";
import combosBanner from "../../../assets/images/banners/combos_banner.jpg";
import dataDinnerBanner from "../../../assets/images/banners/data-dinner_banner.jpg";
import diaHamburguerBanner from "../../../assets/images/banners/dia-hamburguer_banner.jpg";
import trojanBanner from "../../../assets/images/banners/trojan-burguer_banner.jpg";

export function MenuPage() {
  const { getAllProducts } = useService();
  const [products, setProducts] = useState([]);

  const getData = useCallback(async () => {
    const response = await getAllProducts();
    setProducts(response);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="menu-page-section">
      <BannerCarousel>
        <BannerSlide image={dataDinnerBanner} key={4} />
        <BannerSlide image={diaHamburguerBanner} key={3} />
        <BannerSlide image={combosBanner} key={1} />
        <BannerSlide image={trojanBanner} key={2} />
      </BannerCarousel>
      <div className="title-container menu-page-section__title-container">
        <h3>Menu</h3>
        <h2>Nosso cardápio</h2>
      </div>
      <div className="menu-page-section__filters-container">
        <div className="radio-filter-container">
          <input type="radio" name="filter" id="all" value="all" />
          <label htmlFor="all">Todos</label>
        </div>
        <div className="radio-filter-container">
          <input type="radio" name="filter" id="burger" value="burger" />
          <label htmlFor="burger">Lanches</label>
        </div>
        <div className="radio-filter-container">
          <input type="radio" name="filter" id="combos" value="combos" />
          <label htmlFor="combos">Combos</label>
        </div>
        <div className="radio-filter-container">
          <input type="radio" name="filter" id="drinks" value="drinks" />
          <label htmlFor="drinks">Bebidas</label>
        </div>
        <div className="radio-filter-container">
          <input type="radio" name="filter" id="desserts" value="desserts" />
          <label htmlFor="desserts">Sobremesas</label>
        </div>
      </div>
      <div className="menu-page-section__menu-container">
        {products.map((product, i) => (
          <ProductCard key={i} {...product} />
        ))}
      </div>
    </section>
  );
}
