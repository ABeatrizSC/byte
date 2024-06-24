import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";

export function OrderConfirmation() {
  return <section className="order-confirmation-section">
    <FontAwesomeIcon icon={faBurger} className="shippIcon" />
    <h2>Pedido realizado!</h2>
    <div className="text-container">
      <p>Agradecemos pelo seu pedido. Agora, é só aguardar!</p>
      <p>Nossa estimativa de entrega é de <span className="text-highlight">40 minutos à 1 hora e 30 minutos.</span></p>
      <p>Para maiores informações ou cancelamento, <Link to={'/#contact'}>entre em contato conosco</Link>.</p> 
      <p>O tempo máximo para o cancelamento é de <span className="text-highlight">15 minutos a partir do momento em que o pedido foi realizado.</span></p>
    </div>
  </section>
}
