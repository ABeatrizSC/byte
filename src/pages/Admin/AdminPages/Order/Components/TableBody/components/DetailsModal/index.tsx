import React from "react";
import { CustomModal } from "../../../../../../../../components/CustomModal";
import { DetailedOrder } from "../../../../../../../../types/models";
import * as COLORS from "../../../../../../../../constants/colors";
import useService from "../../../../../../../../hooks/useService";
import { NEXT_STATUS } from "../../../../../../../../constants/status";

interface DetailsModalProps {
  isOpen: boolean;
  setOpen: (state: boolean) => void;
  order: DetailedOrder;
}

const DetailsModal: React.FC<DetailsModalProps> = (props) => {
  const { isOpen, setOpen, order } = props;

  const { editOrderById } = useService();

  const cleanOrder = (order) => {
    const status = NEXT_STATUS[order.status];
    const editedOrder = { ...order };
    delete editedOrder.total;

    return { ...editedOrder, status };
  };

  const handleUpdateStatus = async () => {
    const editedOrder = cleanOrder(order);
    const response = await editOrderById(order.id, editedOrder);

    if (response.ok) {
      const result = await response.json();
      setOpen(false);
    }
  };

  return (
    order && (
      <CustomModal open={isOpen} onCloseModal={() => setOpen(false)}>
        <div className="modal-content-container">
          <h3>Pedido nº {order.id}</h3>
          <div className="order-modal-container">
            <div className="order-information">
              <span className="order-information__title">Nome do cliente:</span>
              <span>{order.client.name}</span>
            </div>
            <div className="order-information">
              <span className="order-information__title">Endereço:</span>
              <span>{order.address}</span>
            </div>
            <div className="order-information">
              <span className="order-information__title">Contato:</span>
              <span>{order.client.contact}</span>
            </div>
            <div className="order-information">
              <span className="order-information__title">
                Forma de pagamento:
              </span>
              <span>{order.payment_method.name}</span>
            </div>
            <div className="order-information">
              <span className="order-information__title">Total:</span>
              <span>R$ {order.total}</span>
            </div>
            <div className="order-information">
              <span className="order-information__title">Status:</span>
              <span
                style={{
                  backgroundColor: COLORS.STATUS[order.status],
                }}
              >
                {order.status}
              </span>
              <p
                className="order-modal__change-status"
                onClick={handleUpdateStatus}
              >
                Avançar status
              </p>
            </div>
            <div className="order-information order-list-container">
              <span className="order-information__title">Pedido:</span>
              {order.products.map((product) => (
                <div className="order-information__products-order">
                  <span>
                    <strong>Nome: </strong>
                    {product.name}
                  </span>
                  <span>
                    <strong>Quantidade: </strong>
                    {product.quantity}x
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CustomModal>
    )
  );
};

export default DetailsModal;
