import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Sidebar } from "../../../components/Sidebar"
import { Products } from "../AdminPages/Products";
import { Order } from "../AdminPages/Order";
import { Categories } from "../AdminPages/Categories";
import { NotFound } from '../../NotFound';

export function AdminPages() {
  return (
    <Sidebar>
      <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/order" element={<Order />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </Sidebar>
  )
}
