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
import CategoryRadio from "./CategoryRadio";

export function MenuPage() {
  const { getAllProducts, getAllCategories } = useService();
  const [products, setProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState();
  const [categories, setCategories] = useState();

  const getProducts = useCallback(async () => {
    const formatedCategory = categoryFilter === "all" ? null : categoryFilter;
    const params = new URLSearchParams(
      formatedCategory && { category_id: categoryFilter }
    );

    const response = await getAllProducts(params);
    setProducts(response);
  }, [categoryFilter]);

  const getCategories = useCallback(async () => {
    if (categories) return;

    const response = await getAllCategories();
    setCategories(response);
  }, []);

  useEffect(() => {
    getProducts();
    getCategories();
  }, [categoryFilter]);

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };

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
          <input
            type="radio"
            name="filter"
            id="all"
            value="all"
            checked={categoryFilter === "all"}
            onChange={handleCategoryChange}
          />
          <label htmlFor="all">Todos</label>
        </div>
        {categories?.map((category) => (
          <CategoryRadio
            {...category}
            key={category.category_id}
            handleSelect={handleCategoryChange}
            selectedCategory={categoryFilter}
          />
        ))}
      </div>
      <div className="menu-page-section__menu-container">
        {products.length ? null : <p style={{color: 'white'}}>Execute o Banco de Dados para visualizar/criar/remover produtos.</p>}
        {products.map((product, i) => (
          <ProductCard key={i} {...product} />
        ))}
      </div>
    </section>
  );
}
