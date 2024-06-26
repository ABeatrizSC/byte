import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export function Item({ item, onOpenDeleteModal, onOpenChangeProductModal }) {
  const { name, price, description, image, category_id, id_product } = item;
  const alt = `Imagem do produto ${name}`;
  const itemID = id_product ?? category_id;

  return (
    <div className="item-container">
      <div className="item-information-container">
        {image && (
          <img
            className="item-information-container__img"
            src={image}
            alt={alt}
          />
        )}
        <div className="item-information-container__texts">
          <div>
            <span className="title">{name}</span>
            <span className="id"> #{itemID}</span>
          </div>
          {price ? <span>R$ {price} </span> : null}
          {description ? <span>{description} </span> : null}
        </div>
      </div>
      <div className="item-actions-container">
        <button
          className="item-actions-container__edit-button"
          onClick={() => onOpenChangeProductModal(itemID, item)}
        >
          <FontAwesomeIcon className="icon" icon={faEdit} />
        </button>
        <button
          className="item-actions-container__trash-button"
          onClick={() => onOpenDeleteModal(itemID)}
        >
          <FontAwesomeIcon className="icon" icon={faTrash} />
        </button>
      </div>
    </div>
  );
}
