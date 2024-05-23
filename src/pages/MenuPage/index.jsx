import "./style.css";
import "swiper/css";
import ProductCard from "../../components/ProductCard";
import { productsMock } from "../../components/ProductCard/productsMock";
import BannerCarousel from "./BannerCarousel";
import BannerSlide from "./BannerSlide";
import BannerByteBurguer from "../../assets/images/banners/byte-burguer-banner.png";
import BannerTrojanBurguer from "../../assets/images/banners/trojan-burguer-banner.png";
import BannerCtrlEat from "../../assets/images/banners/ctrlEat-banner.png";

export function MenuPage() {
  return (
    <section className="menu-page-section">
      <BannerCarousel>
        <BannerSlide image={BannerByteBurguer} key={1}/>
        <BannerSlide image={BannerTrojanBurguer} key={4}/>
        <BannerSlide image={BannerCtrlEat} key={3}/>
      </BannerCarousel>
      <div className="title-container menu-page-section__title-container">
        <h3>Menu</h3>
        <h2>Nosso cardápio</h2>
      </div>
      <div className="menu-page-section__filters-container">
        <div>
          <input type="radio" name='filter' id='all' value='all'/>
          <label htmlFor="all">Todos</label>
        </div>
        <div>
          <input type="radio" name='filter' id='burger' value='burger'/>
          <label htmlFor="burger">Lanches</label>
        </div>
        <div>
          <input type="radio" name='filter' id='combos' value='combos'/>
          <label htmlFor="combos">Combos</label>
        </div>
        <div>
          <input type="radio" name='filter' id='drinks' value='drinks'/>
          <label htmlFor="drinks">Bebidas</label>
        </div>
        <div>
          <input type="radio" name='filter' id='desserts' value='desserts'/>
          <label htmlFor="desserts">Sobremesas</label>
        </div>
      </div>
      <div className="menu-page-section__menu-container">
        {productsMock.map((product, i) => (
          <ProductCard key={i} {...product} />
        ))}
      </div>
    </section>
  );
}
