import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { MenuPage } from "./MenuPage";
import { ProductDetails } from "./ProductDetails";
import { Checkout } from "./Checkout";
import { NotFound } from "../NotFound";

export const Store: React.FC = (props) => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<MenuPage />} />
        <Route path="/cardapio/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};
