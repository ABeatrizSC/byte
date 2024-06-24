import { useCallback, useEffect, useState } from "react";
import "./style.css";
import { useCart } from "react-use-cart";
import { CartProduct } from "../../../components/CartProduct";
import { CustomModal } from "../../../components/CustomModal";
import PaymentRadio from "./components/PaymentRadio";
import useService from "../../../hooks/useService";
import { formatFormData } from "./utils";
import { Toaster, toast } from "sonner";

export function Checkout() {
  const { items, cartTotal, emptyCart } = useCart();
  const [modal, setModal] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState();
  const [paymentMethodId, setPaymentMethodId] = useState();

  const { getAllPaymentMethods, createOrder } = useService();

  const getPaymentMethods = useCallback(async () => {
    const response = await getAllPaymentMethods();
    response?.length && setPaymentMethods(response);
  }, []);

  useEffect(() => {
    getPaymentMethods();
  }, []);

  const onOpenModal = () => {
    setModal(true);
  };
  const onCloseModal = () => setModal(false);

  const [formData] = useState({
    name: "",
    tel: 0,
    cpf: 0,
    email: "",
    paymentMethod: "",
    street: "",
    neighborhood: "",
    houseNumber: 0,
    cep: 0,
    complemento: "",
  });

  const setFormData = (key, content) => {
    formData[key] = content;
  };

  const formDataValidation = () => {
    const datas = Object.values(formData);

    for (let i = 0; i < datas.length - 1; i++) {
      if (datas[i].length == 0 || datas[i].length == undefined) {
        return false;
      }
    }
    return true;
  };

  const selectPaymentMethod = (e) => {
    const { value, id } = e.target;
    setPaymentMethodId(id);
    setFormData("paymentMethod", value);
  };

  const submitOrder = async () => {
    const orderInfo = { ...formData, paymentMethod: paymentMethodId, items };
    const requestBody = formatFormData(orderInfo);

    const response = await createOrder(requestBody);

    if (response.ok) {
      console.log("response: ", response);
      const result = await response.json();
      const { id } = result;
      toast.success("Pedido enviado!");
      emptyCart();
      let url = window.location.href;
      const regex = /https?:\/\/[^/]+/g;
      const redirect = url.match(regex) + `/confirmacaoPedido/${id}`;
      window.location.href = redirect;
    } else {
      toast.error("Não foi possível enviar o pedido. Tente novamente.");
    }
  };

  const handleCheck = (e) => {
    e.preventDefault();
    if (formDataValidation()) {
      onOpenModal();
    } else {
      toast.error(
        "Por favor, preencha os campos marcados com * (obrigatório)."
      );
    }
  };

  return (
    <>
      <Toaster richColors={true} />
      <section className="section-checkout">
        <form action="" className="form">
          <div className="form-wrapper">
            <h2>Seus dados</h2>
            <div className="form-wrapper__input-container">
              <label htmlFor="name">Nome completo*:</label>
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
                <label htmlFor="tel">Telefone*:</label>
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
                <label htmlFor="cpf">CPF*:</label>
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
              <label htmlFor="email">E-mail*:</label>
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
            <h2>Forma de pagamento*</h2>
            <p className="form-wrapper__p">
              *O pagamento será realizado somente no momento da entrega*
            </p>
            <div className="form-wrapper__payment-container">
              {paymentMethods?.map((paymentMethod) => (
                <PaymentRadio
                  {...paymentMethod}
                  key={paymentMethod.id_payment_method}
                  handleSelect={selectPaymentMethod}
                  selected={paymentMethodId}
                />
              ))}
            </div>
            <h2>Endereço de entrega</h2>
            <div className="form-wrapper__delivery-container">
              <div className="form-wrapper__input-container">
                <label htmlFor="street">Rua*:</label>
                <input
                  type="text"
                  id="street"
                  required
                  onChange={(e) => setFormData(e.target.id, e.target.value)}
                />
              </div>
              <div className="form-wrapper_input-group">
                <div className="form-wrapper__input-container">
                  <label htmlFor="cep">CEP*:</label>
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
                  <label htmlFor="neighborhood">Bairro*:</label>
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
                  <label htmlFor="houseNumber">Número*:</label>
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
              Total: R$ {cartTotal.toFixed(2).replace(".", ",")}
            </span>
            {items.length ? (
              <button
                className="finalize-puchase-button"
                onClick={(e) => handleCheck(e)}
              >
                Finalizar pedido
              </button>
            ) : null}
          </div>
        </form>
        <CustomModal open={modal} onCloseModal={onCloseModal}>
          <div className="modal-content-container">
            <h3>Seus dados estão corretos?</h3>
            <p>
              Certifique-se de que tudo foi digitado corretamente antes de
              finalizar o pedido.
            </p>
            <div className="order-modal-container">
              <div className="order-information">
                <span className="order-information__title">Nome:</span>
                <span>{formData.name}</span>
              </div>
              <div className="order-information checkout">
                <div>
                  <span className="order-information__title">Telefone:</span>
                  <span>{formData.tel}</span>
                </div>
                <div>
                  <span className="order-information__title">CPF:</span>
                  <span>{formData.cpf}</span>
                </div>
              </div>
              <div className="order-information">
                <span className="order-information__title">Email:</span>
                <span>{formData.email}</span>
              </div>
              <div className="order-information">
                <span className="order-information__title">Rua:</span>
                <span>{formData.street}</span>
              </div>
              <div className="order-information checkout">
                <div>
                  <span className="order-information__title">CEP:</span>
                  <span>{formData.cep}</span>
                </div>
                <div>
                  <span className="order-information__title">Bairro:</span>
                  <span>{formData.neighborhood}</span>
                </div>
              </div>
              <div className="order-information checkout">
                <div>
                  <span className="order-information__title">Número:</span>
                  <span>{formData.houseNumber}</span>
                </div>
                <div>
                  <span className="order-information__title">Complemento:</span>
                  <span>
                    {formData.complemento ? formData.complemento : "-"}
                  </span>
                </div>
              </div>
              <div className="order-information">
                <span className="order-information__title">
                  Forma de pagamento:
                </span>
                <span>{formData.paymentMethod}</span>
              </div>
              <div className="order-information">
                <span className="order-information__title">
                  Total do pedido:
                </span>
                <span>R$ {cartTotal}</span>
              </div>
            </div>
            <button
              className="button-change-informations"
              onClick={onCloseModal}
            >
              Alterar informações
            </button>
            <button className="button-sent-order" onClick={submitOrder}>
              Enviar pedido
            </button>
          </div>
        </CustomModal>
      </section>
    </>
  );
}
