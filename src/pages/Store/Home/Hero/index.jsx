import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export function Hero() {
  const navigate = useNavigate();
  return (
    <section className='home-section hero-section' id='home'>
      <div className="hero-section__text-container">
        <div className="byte-container">
          <div className="hr" />
          <span>BYTE</span>
        </div>
        <h1>
          Sabores que vão além dos
          <br />
          <span className="h1--highlight">bites</span>
        </h1>
        <div className="subtitle-container">
          <p>
            Temos um cardápio recheado de produtos de alta qualidade. Peça já o
            melhor hambúrguer da cidade!
          </p>
          <button onClick={() => navigate("/cardapio")}>Ver cardápio</button>
        </div>
      </div>
    </section>
  );
}
