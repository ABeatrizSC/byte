import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { ProductCreate } from "./pages/ProductCreate";
import { Home } from "./pages/Home";
import { NotFound } from "../NotFound"

export const Admin: React.FC = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/product" element={<ProductCreate />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
