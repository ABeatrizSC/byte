import React from 'react'
import { ManagementSection } from '../../Components/ManagementSection'
import { productsMock } from '../../../../components/ProductCard/productsMock'

export  function Products() {
  return (
    <ManagementSection 
      title="Produtos" 
      subtitle="Produtos cadastrados"
      filterPlaceholder="Nome do produto"
      itemList={productsMock}
    />
  )
}
