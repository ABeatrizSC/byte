import React from 'react'
import './style.css'

export function TableHeader() {
  return (
    <thead>
        <tr>
            <th>Id</th>
            <th>Cliente</th>
            <th>Endereço</th>
            <th>Contato</th>
            <th>F. Pag</th>
            <th>Total</th>
            <th>Itens</th>
            <th>Status</th>
        </tr>
    </thead>
  )
}
