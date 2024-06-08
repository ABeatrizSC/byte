import React, { useState } from 'react'
import './style.css'
import { ManagementSection } from '../../Components/ManagementSection'
import { categoriesMock } from './categoriesMock'
import { CustomModal } from '../../../../components/CustomModal'

export  function Categories() {
  const [openProductModal, setOpenProductModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openChangeProductModal, setOpenChangeProductModal] = useState(false);

  const onOpenProductModal = () => setOpenProductModal(true);
  const onCloseProductModal = () => setOpenProductModal(false);
  const onOpenDeleteModal = () => setOpenDeleteModal(true);
  const onCloseDeleteModal = () => setOpenDeleteModal(false);
  const onOpenChangeProductModal = () => setOpenChangeProductModal(true);
  const onCloseChangeProductModal = () => setOpenChangeProductModal(false);
  return (
    <>
      <ManagementSection 
        title="Categorias" 
        subtitle="Categorias cadastradas" filterPlaceholder="Nome da categoria" 
        itemList={categoriesMock}
        onOpenProductModal={onOpenProductModal}
        onOpenDeleteModal={onOpenDeleteModal}
        onOpenChangeProductModal={onOpenChangeProductModal}
      />
      <CustomModal open={openProductModal} onCloseModal={onCloseProductModal}>
        <div className='modal-content-container'>
          <h3>Criar nova categoria</h3>
          <div className='form-container'>
            <form action="" className='form'>
              <div className='form__input-container'>
                <label htmlFor="new-product-name">Nome da categoria</label>
                <input type="text" id='new-product-name' name='new-product-name' required />
              </div>
              <button>Adicionar</button>
            </form>
          </div>
        </div>
      </CustomModal>
      <CustomModal open={openDeleteModal} onCloseModal={onCloseDeleteModal}>
        <div className='modal-content-container'>
          <h3>Tem certeza que deseja excluir esta categoria?</h3>
          <div className='delete-modal-container'>
            <p className='delete-modal-container__message'>Esta ação não poderá ser desfeita.</p>
            <button className='delete-modal-container__button'>Excluir permanentemente</button>
          </div>
        </div>
      </CustomModal>
      <CustomModal open={openChangeProductModal} onCloseModal={onCloseChangeProductModal}>
        <div className='modal-content-container'>
          <h3>Alterar categoria</h3>
          <div className='form-container'>
            <form action="" className='form'>
              <div className='form__input-container'>
                <label htmlFor="new-product-name">Nome da categoria:</label>
                <input type="text" id='new-product-name' name='new-product-name' required />
              </div>
              <button>Alterar</button>
            </form>
          </div>
        </div>
      </CustomModal>
    </>
  )
}
