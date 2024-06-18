import React, { useCallback, useEffect, useState } from "react";
import { ManagementSection } from "../../Components/ManagementSection";
import { CustomModal } from "../../../../components/CustomModal";
import useService from "../../../../hooks/useService";
import { CreateModal } from "./CreateModal";

export function Products() {
  const { createProduct, deleteProduct, editProduct, getAllProducts } = useService();
  const [openProductModal, setOpenProductModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openChangeProductModal, setOpenChangeProductModal] = useState(false);
  const [products, setProducts] = useState([]);

  const onOpenProductModal = () => setOpenProductModal(true);
  const onCloseProductModal = () => setOpenProductModal(false);
  const onOpenDeleteModal = () => setOpenDeleteModal(true);
  const onCloseDeleteModal = () => setOpenDeleteModal(false);
  const onOpenChangeProductModal = () => setOpenChangeProductModal(true);
  const onCloseChangeProductModal = () => setOpenChangeProductModal(false);

  const {} = useService();

  const getData = useCallback(async () => {
    const response = await getAllProducts();
    setProducts(response);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    products.length && (
      <>
        <ManagementSection
          title="Produtos"
          subtitle="Produtos cadastrados"
          filterPlaceholder="Nome do produto"
          itemList={products}
          onOpenProductModal={onOpenProductModal}
          onOpenDeleteModal={onOpenDeleteModal}
          onOpenChangeProductModal={onOpenChangeProductModal}
        />
        <CreateModal
          openProductModal={openProductModal}
          setOpenProductModal={setOpenProductModal}
          onCloseProductModal={onCloseProductModal}
        />
        <CustomModal open={openDeleteModal} onCloseModal={onCloseDeleteModal}>
          <div className="modal-content-container">
            <h3>Tem certeza que deseja excluir este produto?</h3>
            <div className="delete-modal-container">
              <p className="delete-modal-container__message">
                Esta ação não poderá ser desfeita.
              </p>
              <button className="delete-modal-container__button">
                Excluir permanentemente
              </button>
            </div>
          </div>
        </CustomModal>
        <CustomModal
          open={openChangeProductModal}
          onCloseModal={onCloseChangeProductModal}
        >
          <div className="modal-content-container">
            <h3>Alterar produto</h3>
            <div className="form-container">
              <form action="" className="form">
                <div className="form__input-container">
                  <label htmlFor="new-product-name">Nome do produto:</label>
                  <input
                    type="text"
                    id="new-product-name"
                    name="new-product-name"
                    required
                  />
                </div>
                <div className="form__input-container">
                  <label htmlFor="new-product-category">Categoria:</label>
                  <input
                    type="text"
                    id="new-product-category"
                    name="new-product-category"
                    required
                  />
                </div>
                <div className="form__input-container">
                  <label htmlFor="new-product-price">Preço:</label>
                  <input
                    type="number"
                    id="new-product-price"
                    name="new-product-price"
                    required
                  />
                </div>
                <div className="form__input-container">
                  <label htmlFor="new-product-image">URL da imagem:</label>
                  <input
                    type="text"
                    id="new-product-image"
                    name="new-product-image"
                    required
                  />
                </div>
                <div className="form__input-container">
                  <label htmlFor="new-product-description">Descrição:</label>
                  <input
                    type="text"
                    id="new-product-description"
                    name="new-product-description"
                    required
                  />
                </div>
                <button>Alterar</button>
              </form>
            </div>
          </div>
        </CustomModal>
      </>
    )
  );
}
