import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export function SearchFilter({ filterPlaceholder, filter, setFilter }) {
  return (
    <div className="filter-container">
      <label htmlFor="product-search">Pesquisar</label>
      <input
        id="product-search"
        type="text"
        placeholder={filterPlaceholder}
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      />
      <button className="filter-container__search-button">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
}
