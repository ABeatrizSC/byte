import React from 'react'
import './style.css'

export function TableHeader() {
  return (
    <thead>
        <tr>
            <th>Id</th>
            <th>Data</th>
            <th>Cliente</th>
            <th>Endereço</th>
            <th>Contato</th>
            <th>Itens</th>
            <th>Status</th>
        </tr>
    </thead>
  )
}
