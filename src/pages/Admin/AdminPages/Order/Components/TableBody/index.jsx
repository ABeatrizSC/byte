import React, { useState } from 'react'
import './style.css'
import { orderMock } from '../../orderMock'
import { TableCell } from '../TableCell'
import { CustomModal } from '../../../../../../components/CustomModal'
import { statusColors } from '../../statusColors'

export function TableBody() {
  const [openOrderModal, setOpenOrderModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const onOpenOrderModal = (item) => {
    setSelectedOrder(item);
    setOpenOrderModal(true);
  };

  const onCloseOrderModal = () => {
    setSelectedOrder(null);
    setOpenOrderModal(false);
  };

  return (
    <tbody>
      {orderMock.map((item, index) => (
        <tr key={index}>
          <TableCell item={item} onOpenOrderModal={() => onOpenOrderModal(item)} />
        </tr>
      ))}
      {selectedOrder && (
        <CustomModal open={openOrderModal} onCloseModal={onCloseOrderModal}>
          <div className='modal-content-container'>
            <h3>Pedido nº {selectedOrder.id}</h3>
            <div className='order-modal-container'>
              <div className='order-information'>
                <span className='order-information__title'>Nome do cliente:</span>
                <span>{selectedOrder.client}</span>
              </div>
              <div className='order-information'>
                <span className='order-information__title'>Data:</span>
                <span>{selectedOrder.date}</span>
              </div>
              <div className='order-information'>
                <span className='order-information__title'>Endereço:</span>
                <span>{selectedOrder.address}</span>
              </div>
              <div className='order-information'>
                <span className='order-information__title'>Contato:</span>
                <span>{selectedOrder.contact}</span>
              </div>
              <div className='order-information'>
                <span className='order-information__title'>Forma de pagamento:</span>
                <span>{selectedOrder.paymentMethod}</span>
              </div>
              <div className='order-information'>
                <span className='order-information__title'>Total:</span>
                <span>R$ {selectedOrder.total}</span>
              </div>
              <div className='order-information'>
                <span className='order-information__title'>Status:</span>
                <span style={{backgroundColor: statusColors[selectedOrder.status]}}>{selectedOrder.status}</span>
              </div>
            </div>
          </div>
        </CustomModal>  
      )}
    </tbody>
  )
}
