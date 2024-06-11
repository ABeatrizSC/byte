import React, { useCallback, useEffect, useState } from 'react'
import './style.css'
import { ManagementSection } from '../../Components/ManagementSection'
import { categoriesMock } from './categoriesMock'
import { CustomModal } from '../../../../components/CustomModal'
import { createCategory, deleteCategory, editCategory, getAllCategories } from '../../../../utils/services'

export  function Categories() {
  const [openProductModal, setOpenProductModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openChangeProductModal, setOpenChangeProductModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [id, setId] = useState("");

  const onOpenProductModal = () => setOpenProductModal(true);
  const onCloseProductModal = () => setOpenProductModal(false);
  const onOpenDeleteModal = (id) => {
    setOpenDeleteModal(true);
    console.log(id)
    setId(id);
  };
  const onCloseDeleteModal = () => setOpenDeleteModal(false);
  const onOpenChangeProductModal = () => setOpenChangeProductModal(true);
  const onCloseChangeProductModal = () => setOpenChangeProductModal(false);

  const getData = useCallback( async() => {
    const response = await getAllCategories();
    setCategories(response);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (categoryName !== "") {
      createCategory({name: categoryName, internal: false, active: true})
    }
  }

  const handleDelete = (e) => {
    e.preventDefault();
    if (id !== "") {
      deleteCategory(id);
    }
  }

  const handleEdit = (e) => {
    e.preventDefault();
    if (id !== "") {
      editCategory(id, {name: categoryName, active: true, internal: false});
    }
  }

  return categories.length && (
    <>
      <ManagementSection 
        title="Categorias" 
        subtitle="Categorias cadastradas" filterPlaceholder="Nome da categoria" 
        itemList={categories}
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
                <input 
                  type="text" 
                  id='new-product-name' 
                  name='new-product-name' 
                  required 
                  onChange={(e) => setCategoryName(e.target.value)}
                  value={categoryName}
                />
              </div>
              <button onClick={handleSubmit}>Adicionar</button>
            </form>
          </div>
        </div>
      </CustomModal>
      <CustomModal open={openDeleteModal} onCloseModal={onCloseDeleteModal}>
        <div className='modal-content-container'>
          <h3>Tem certeza que deseja excluir esta categoria?</h3>
          <div className='delete-modal-container'>
            <p className='delete-modal-container__message'>Esta ação não poderá ser desfeita.</p>
            <button className='delete-modal-container__button' onClick={handleDelete}>Excluir permanentemente</button>
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
                <input 
                  type="text" 
                  id='new-product-name' 
                  name='new-product-name' 
                  required 
                  onChange={(e) => setCategoryName(e.target.value)} 
                  value={categoryName} 
                />
              </div>
              <button onClick={handleEdit}>Alterar</button>
            </form>
          </div>
        </div>
      </CustomModal>
    </>
  )
}
