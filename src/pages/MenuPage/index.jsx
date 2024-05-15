import "./style.css";
import "swiper/css";
import ProductCard from "../../components/ProductCard";
import lancheImg from "../../components/Header/Components/CartProduct/lancheExemplo.jpg";
import BannerCarousel from "./BannerCarousel";
import BannerSlide from "./BannerSlide";
import trojanBanner from "./BannerSlide/trojanBanner.jpg";
import semanaBurguer from "./BannerSlide/semana-hamburguer-banner.jpg";

export function MenuPage() {
  const productsMock = [
    {
      name: "Trojan",
      price: "34.99",
      id: 1,
      image: lancheImg,
      size: "MEDIUM",
    },
    {
      name: "Byte burguer",
      price: "29.99",
      id: 12,
      image: lancheImg,
      size: "MEDIUM",
    },
    {
      name: "Game Over",
      price: "24.99",
      id: 1,
      image: lancheImg,
      size: "MEDIUM",
    },
    {
      name: "Ctrl + Eat",
      price: "49.99",
      id: 1,
      image: lancheImg,
      size: "MEDIUM",
    },
  ];

  return (
    <section className="menu-page-section">
      <div className="title-container">
        <BannerCarousel>
          <BannerSlide image={trojanBanner} />
          <BannerSlide image={semanaBurguer} />
        </BannerCarousel>

        <h3 aria-level={1}>Menu</h3>
        <h2 aria-level={2}>Lanches</h2>

        {productsMock.map((product, i) => (
          <ProductCard key={i} {...product} />
        ))}
      </div>
    </section>
  );
}
