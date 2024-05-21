import React from "react";
import { Header } from "./components/Header";
import { Home } from "./pages/Home"; 
import { MenuPage } from "./pages/MenuPage";
import { ProductDetails } from "./pages/ProductDetails";
import { Checkout } from "./pages/Checkout"
import { Footer } from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cardapio" element={<MenuPage />}/>
          <Route path="/cardapio/:id" element={<ProductDetails />}/>
          <Route path="/checkout" element={<Checkout />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}