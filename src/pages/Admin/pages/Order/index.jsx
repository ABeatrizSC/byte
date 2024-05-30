import React from 'react'
import './style.css'
import { SearchFilter } from '../../Components/SearchFilter'
import { TableHeader } from './Components/TableHeader'
import { TableBody } from './Components/TableBody'

export  function Order() {
  return (
    <section className='management-section'>
      <h1 className='management-section__title'>Pedidos Efetuados</h1>
      <div className='filters-container'>
        <SearchFilter filterPlaceholder="Id, cliente, endereço..." />
        <div className='status-filter-container'>
          <label for="statusFilter">Filtrar por status:</label>
          <select name="statusFilter" id="statusFilter">
            <option value="pending">Pendente</option>
            <option value="preparing">Em preparação</option>
            <option value="onTheWay">Em rota</option>
            <option value="delivered">Entregue</option>
            <option value="canceled">Cancelado</option>
          </select>
        </div>
      </div>
      <div className='table-container'>
        <table>
          <TableHeader />
          <TableBody />
        </table>
      </div>
    </section>
  )
}
