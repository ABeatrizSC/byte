import React from 'react'
import './style.css'
import { orderMock } from '../../orderMock'
import { TableCell } from '../TableCell'

export function TableBody() {
  return (
    <tbody>
      {orderMock.map((item, index) => (
        <tr key={index}>
          <TableCell {...item}/>
        </tr>
      ))}
    </tbody>
  )
}
