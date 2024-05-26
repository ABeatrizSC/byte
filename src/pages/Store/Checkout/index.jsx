import React from "react";
import "./style.css";
import { useCart } from "react-use-cart";
import { CartProduct } from "../../../components/CartProduct";

export function Checkout() {
  const { items, cartTotal } = useCart();
  return (
    <section class="section-checkout">
      <form action="" class="form">
        <div className="form-wrapper">
          <h2>Seus dados</h2>
          <div className="form-wrapper__input-container">
            <label htmlFor="name">Nome completo:</label>
            <input type="text" id="name" maxLength={200} required />
          </div>
          <div className="form-wrapper_input-group">
            <div className="form-wrapper__input-container">
              <label htmlFor="cel">Telefone:</label>
              <input
                type="number"
                id="cel"
                placeholder="(14) 00000-0000"
                minLength={11}
                maxLength={11}
                required
              />
            </div>
            <div className="form-wrapper__input-container">
              <label htmlFor="cpf">CPF:</label>
              <input
                type="number"
                id="cpf"
                placeholder="333.333.333-33"
                minLength={11}
                maxLength={11}
                required
              />
            </div>
          </div>
          <div className="form-wrapper__input-container">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              placeholder="email@dominio.com"
              required
            />
          </div>
        </div>
        <div className="form-wrapper">
          <h2>Forma de pagamento</h2>
          <p className="form-wrapper__p">
            *O pagamento será realizado somente no momento da entrega*
          </p>
          <div className="form-wrapper__payment-container">
            <div className="payment-container__input-group">
              <input
                type="radio"
                name="paymentMethod"
                id="credit"
                value="credit"
              />
              <label htmlFor="credit">Cartão de crédito</label>
            </div>
            <div className="payment-container__input-group">
              <input
                type="radio"
                name="paymentMethod"
                id="debit"
                value="debit"
              />
              <label htmlFor="debit">Cartão de débito</label>
            </div>
            <div className="payment-container__input-group">
              <input
                type="radio"
                name="paymentMethod"
                id="money"
                value="money"
              />
              <label htmlFor="money">Dinheiro</label>
            </div>
            <div className="payment-container__input-group">
              <input type="radio" name="paymentMethod" id="pix" value="pix" />
              <label htmlFor="pix">Pix</label>
            </div>
          </div>
          <h2>Endereço de entrega</h2>
          <div className="form-wrapper__delivery-container">
            <div className="form-wrapper__input-container">
              <label htmlFor="street">Rua:</label>
              <input type="text" id="street" required />
            </div>
            <div className="form-wrapper_input-group">
              <div className="form-wrapper__input-container">
                <label htmlFor="cep">CEP:</label>
                <input
                  type="number"
                  id="cep"
                  maxLength={8}
                  minLength={8}
                  required
                />
              </div>
              <div className="form-wrapper__input-container">
                <label htmlFor="neighborhood">Bairro:</label>
                <input type="text" id="neighborhood" required />
              </div>
            </div>
            <div className="form-wrapper_input-group">
              <div className="form-wrapper__input-container">
                <label htmlFor="houseNumber">Número:</label>
                <input type="number" id="houseNumber" required maxLength={4} />
              </div>
              <div className="form-wrapper__input-container">
                <label htmlFor="complemento">Complemento:</label>
                <input type="text" id="complemento" placeholder="Ex: Apto 23" />
              </div>
            </div>
          </div>
        </div>
        <div className="form-wrapper">
          <h2>Produtos selecionados</h2>
          <div className="form-wrapper__products-container">
            {items.map((product, i) => (
              <CartProduct
                key={i}
                {...product}
                isCartProduct={false}
                isCheckoutProduct
              />
            ))}
          </div>
          <span className="total-cart">
            Total:
            R$ {cartTotal.toFixed(2).replace('.', ',')}
          </span>
          <button class="finalize-puchase-button">Finalizar pedido</button>
        </div>
      </form>
    </section>
  );
}
