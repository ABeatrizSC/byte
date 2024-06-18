import React from "react";
import { SearchFilter } from "../../../../Components/SearchFilter";

const Filter = () => {
  return (
    <div className="filters-container">
      <SearchFilter filterPlaceholder="Id, cliente, endereço..." />
      <div className="status-filter-container">
        <label htmlFor="statusFilter">Filtrar por status:</label>
        <select name="statusFilter" id="statusFilter">
          <option value="pending">Pendente</option>
          <option value="preparing">Em preparação</option>
          <option value="onTheWay">Em rota</option>
          <option value="delivered">Entregue</option>
          <option value="canceled">Cancelado</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
