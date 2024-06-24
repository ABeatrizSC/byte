import React from "react";
import { CustomModal } from "../../../../../../../../components/CustomModal";
import { DetailedOrder } from "../../../../../../../../types/models";
import * as COLORS from "../../../../../../../../constants/colors";

interface DetailsModalProps {
  isOpen: boolean;
  setOpen: (state: boolean) => void;
  order: DetailedOrder;
}

const DetailsModal: React.FC<DetailsModalProps> = (props) => {
  const { isOpen, setOpen, order } = props;
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
         {/*    <div className="order-information">
              <span className="order-information__title">Data:</span>
              <span>TODO</span>
            </div> */}
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
            </div>
            <div className="order-information order-list-container">
              <span className="order-information__title">Pedido:</span>
              <div className="order-information__products-order">
                <span>
                  <strong>Nome: </strong> 
                  Lanche
                </span>
                <span>
                  <strong>Quantidade: </strong> 
                  1x
                </span>
              </div>
            </div>
          </div>
        </div>
      </CustomModal>
    )
  );
};

export default DetailsModal;
