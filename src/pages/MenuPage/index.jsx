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
        <h2>Lanches</h2>
      </div>
      <div className="menu-page-section__menu-container">
        {productsMock.map((product, i) => (
          <ProductCard key={i} {...product} />
        ))}
      </div>
    </section>
  );
}
