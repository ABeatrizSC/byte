import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Order } from "./pages/Order"
import { Categories } from "./pages/Categories"
import { Analytics } from "./pages/Analytics"
import { NotFound } from "../NotFound"
import { Sidebar } from "../../components/Sidebar";

export function Admin() {
  return (
    <>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/order" element={<Order />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Sidebar>
    </>
  );
};
