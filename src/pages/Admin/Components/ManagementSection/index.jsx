import "./style.css";
import { Item } from "../Item";
import { SearchFilter } from "../SearchFilter";
import { useState } from "react";

export function ManagementSection({
  title,
  filterPlaceholder,
  filter,
  setFilter,
  subtitle,
  itemList,
  onOpenProductModal,
  onOpenChangeProductModal,
  onOpenDeleteModal,
}) {

  return (
    <section className="management-section">
      <h1 className="management-section__title">{title}</h1>
      <div className="management-section__controls-container">
        <SearchFilter
          filterPlaceholder={filterPlaceholder}
          filter={filter}
          setFilter={setFilter}
        />
        <button
          className="controls-container__add-product-button"
          onClick={onOpenProductModal}
        >
          Adicionar {title}
        </button>
      </div>
      <div className="management-section__products-list-container">
        <h2>{subtitle}:</h2>
        {itemList.length ?
          <ul>
            {itemList.map((item, index) => (
              <li key={index}>
                <Item
                  item={item}
                  onOpenChangeProductModal={onOpenChangeProductModal}
                  onOpenDeleteModal={onOpenDeleteModal}
                />
              </li>
            ))}
          </ul>
          :
          <p style={{textAlign: 'center'}}>Execute o Banco de Dados para visualizar/criar/remover produtos e categorias.</p>
        }
      </div>
    </section>
  );
}
