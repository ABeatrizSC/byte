import React from 'react'
import './style.css'
import { ManagementSection } from '../../Components/ManagementSection'
import { categoriesMock } from './categoriesMock'

export  function Categories() {
  return (
    <ManagementSection 
      title="Categorias" 
      subtitle="Categorias cadastradas" filterPlaceholder="Nome da categoria" 
      itemList={categoriesMock}
    />
  )
}
