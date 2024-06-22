import React from "react";
import { SearchFilter } from "../../../../Components/SearchFilter";

const Filter = ({ filter, setFilter, status, setStatus }) => {
  return (
    <div className="filters-container">
      <SearchFilter
        filterPlaceholder="Id ou endereço"
        filter={filter}
        setFilter={setFilter}
      />
      <div className="status-filter-container">
        <label htmlFor="statusFilter">Filtrar por status:</label>
        <select
          value={status}
          name="statusFilter"
          id="statusFilter"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value={"none"}>Selecione um status</option>
          <option>Em preparação</option>
          <option>Em rota</option>
          <option>Entregue</option>
          <option>Cancelado</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
