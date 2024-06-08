import React from 'react'
import './style.css'
import { statusColors } from '../../statusColors';

export function TableCell( {item, onOpenOrderModal} ) {
  const { id, date, client, address, contact, status, paymentMethod, total } = item;

  function getOrderInformation() {
    return item
  }

  return (
    <>
      <td>#{id}</td>
      <td>{date}</td>
      <td>{client}</td>
      <td>{address}</td>
      <td>{contact}</td>
      <td>
        <button onClick={() => onOpenOrderModal(item)}>Exibir</button>
      </td>
      <td className='status'>
        <span style={{backgroundColor: statusColors[status]}}>
          {status}
        </span>
      </td>
    </>
  )
}
