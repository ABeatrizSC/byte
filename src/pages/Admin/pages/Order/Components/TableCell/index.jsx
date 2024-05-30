import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'
import { statusColors } from '../../statusColors';

export function TableCell( item ) {
  const { id, client, address, contact, paymentMethod, total, status } = item;
  return (
    <>
      <td>#{id}</td>
      <td>{client}</td>
      <td>{address}</td>
      <td>{contact}</td>
      <td>{paymentMethod}</td>
      <td>R$ {total}</td>
      <td>
        <NavLink to="#">Exibir</NavLink>
      </td>
      <td className='status'>
        <span style={{backgroundColor: statusColors[status]}}>
          {status}
        </span>
      </td>
    </>
  )
}
