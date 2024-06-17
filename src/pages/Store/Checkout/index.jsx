import React, {useState} from "react";
import "./style.css";
import { useCart } from "react-use-cart";
import { CartProduct } from "../../../components/CartProduct";
import { CustomModal } from '../../../components/CustomModal';

export function Checkout() {
  const { items, cartTotal } = useCart();
  const [modal, setModal] = useState(false);
  
  const onOpenModal = (e) => {
    e.preventDefault();
    setModal(true);
  };
  const onCloseModal = () => setModal(false);
  
  const [formData] = useState({
    name: '',
    tel: 0,
    cpf: 0,
    email: '',
    paymentMethod: '',
    street: '',
    neighborhood: '',
    houseNumber: 0,
    cep: 0,
    complemento: ''
  })
  
  const setFormData = (key, content) => {
    formData[key] = content;
  };

  return (
    <section className="section-checkout">
      <form action="" className="form">
        <div className="form-wrapper">
          <h2>Seus dados</h2>
          <div className="form-wrapper__input-container">
            <label htmlFor="name">Nome completo:</label>
            <input 
              type="text" 
              id="name" 
              maxLength={200} 
              required
              onChange={(e) => setFormData(e.target.id, e.target.value)} 
            />
          </div>
          <div className="form-wrapper_input-group">
            <div className="form-wrapper__input-container">
              <label htmlFor="tel">Telefone:</label>
              <input
                type="number"
                id="tel"
                placeholder="(14) 00000-0000"
                minLength={11}
                maxLength={11}
                required
                onChange={(e) => setFormData(e.target.id, e.target.value)}
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
                onChange={(e) => setFormData(e.target.id, e.target.value)}
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
              onChange={(e) => setFormData(e.target.id, e.target.value)}
            />
          </div>
        </div>
        <div className="form-wrapper">
          <h2>Forma de pagamento</h2>
          <p className="form-wrapper__p">
            *O pagamento será realizado somente no momento da entrega*
          </p>
          <div className="form-wrapper__payment-container" onClick={() => setFormData('paymentMethod', document.querySelector('[name="paymentMethod"]:checked').value)}>
            <div className="payment-container__input-group">
              <input
                type="radio"
                name="paymentMethod"
                id="credit"
                value="Cartão de Crédito"
              />
              <label htmlFor="credit">Cartão de crédito</label>
            </div>
            <div className="payment-container__input-group">
              <input
                type="radio"
                name="paymentMethod"
                id="debit"
                value="Cartão de Débito"
              />
              <label htmlFor="debit">Cartão de débito</label>
            </div>
            <div className="payment-container__input-group">
              <input
                type="radio"
                name="paymentMethod"
                id="money"
                value="Dinheiro"
              />
              <label htmlFor="money">Dinheiro</label>
            </div>
            <div className="payment-container__input-group">
              <input 
                type="radio" 
                name="paymentMethod" 
                id="pix" 
                value="Pix" 
              />
              <label htmlFor="pix">Pix</label>
            </div>
          </div>
          <h2>Endereço de entrega</h2>
          <div className="form-wrapper__delivery-container">
            <div className="form-wrapper__input-container">
              <label htmlFor="street">Rua:</label>
              <input 
                type="text" 
                id="street" 
                required
                onChange={(e) => setFormData(e.target.id, e.target.value)}
              />
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
                  onChange={(e) => setFormData(e.target.id, e.target.value)}
                />
              </div>
              <div className="form-wrapper__input-container">
                <label htmlFor="neighborhood">Bairro:</label>
                <input 
                  type="text"  
                  id="neighborhood" 
                  required
                  onChange={(e) => setFormData(e.target.id, e.target.value)}
                />
              </div>
            </div>
            <div className="form-wrapper_input-group">
              <div className="form-wrapper__input-container">
                <label htmlFor="houseNumber">Número:</label>
                <input 
                  type="number"
                  id="houseNumber"
                  required
                  maxLength={4} 
                  onChange={(e) => setFormData(e.target.id, e.target.value)}
                />
              </div>
              <div className="form-wrapper__input-container">
                <label htmlFor="complemento">Complemento:</label>
                <input 
                  type="text" 
                  id="complemento" 
                  placeholder="Ex: Apto 23" 
                  onChange={(e) => setFormData(e.target.id, e.target.value)}
                />
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
          {(items.length) ? 
            <button className="finalize-puchase-button" onClick={onOpenModal}>Finalizar pedido</button>
            : null
          }
        </div>
      </form>
      <CustomModal open={modal} onCloseModal={onCloseModal}>
        <div className='modal-content-container'>
          <h3>Seus dados estão corretos?</h3>
          <p>Certifique-se de que tudo foi digitado corretamente antes de finalizar o pedido.</p>
          <div className='order-modal-container'>
            <div className='order-information'>
              <span className='order-information__title'>Nome:</span>
              <span>{formData.name}</span>
            </div>
            <div className='order-information checkout'>
              <div>
                <span className='order-information__title'>Telefone:</span>
                <span>{formData.tel}</span>
              </div>
              <div>
                <span className='order-information__title'>CPF:</span>
                <span>{formData.cpf}</span>
              </div>
            </div>
            <div className='order-information'>
              <span className='order-information__title'>Email:</span>
              <span>{formData.email}</span>
            </div>
            <div className='order-information'>
              <span className='order-information__title'>Rua:</span>
              <span>{formData.street}</span>
            </div>
            <div className='order-information checkout'>
              <div>
                <span className='order-information__title'>CEP:</span>
                <span>{formData.cep}</span>
              </div>
              <div>
                <span className='order-information__title'>Bairro:</span>
                <span>{formData.neighborhood}</span>
              </div>
            </div>
            <div className='order-information checkout'>
              <div>
                <span className='order-information__title'>Número:</span>
                <span>{formData.houseNumber}</span>
              </div>
              <div>
                <span className='order-information__title'>Complemento:</span>
                <span>{formData.complemento ? formData.complemento : "-"}</span>
              </div>
            </div>
            <div className='order-information'>
              <span className='order-information__title'>Forma de pagamento:</span>
              <span>{formData.paymentMethod}</span>
            </div>
            <div className='order-information'>
              <span className='order-information__title'>Total do pedido:</span>
              <span>R$ {cartTotal}</span>
            </div>
          </div>
          <button className="button-change-informations" onClick={onCloseModal}>Alterar informações</button>
          <button className="button-sent-order">Enviar pedido</button>
        </div>
      </CustomModal>
    </section>
  );
}
