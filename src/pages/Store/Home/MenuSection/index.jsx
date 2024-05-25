import "./style.css";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../../../components/ProductCard";
import { productsMock } from "../../../../components/ProductCard/productsMock";

export function MenuSection() {
  const navigate = useNavigate();

  return (
    <section className="home-section menu-section" id="menu">
      <div className="title-container menu-section__title">
        <h3>Experimente já</h3>
        <h2>Os mais pedidos</h2>
      </div>
      <div className="menu-container">
        {productsMock.slice(0, 4).map((product, i) => (
          <ProductCard key={i} {...product} />
        ))}
      </div>
      <button
        className="menu-section__button-menu"
        onClick={() => {
          navigate("/cardapio");
        }}
      >
        Ver cardápio completo
      </button>
    </section>
  );
}
