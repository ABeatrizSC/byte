import "./style.css";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../../../components/ProductCard";
import { useCallback, useEffect, useState } from "react";
import useService from "../../../../hooks/useService";

export function MenuSection() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const { getAllProducts } = useService();

  const getData = useCallback(async () => {
    const response = await getAllProducts();
    setProducts(response);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    products.length && (
      <section className="home-section menu-section" id="menu">
        <div className="title-container menu-section__title">
          <h3>Experimente já</h3>
          <h2>Os mais pedidos</h2>
        </div>
        <div className="menu-container">
          {products.slice(0, 3).map((product, i) => (
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
    )
  );
}
