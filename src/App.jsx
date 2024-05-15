import React from "react";
import { Header } from "./components/Header";
/* import { Home } from "./pages/Home"; */
import { Footer } from "./components/Footer";
import { MenuPage } from "./pages/MenuPage";

export function App() {

  return (
    <>
      <Header />
      <MenuPage />
      <Footer />
    </>
  )
}