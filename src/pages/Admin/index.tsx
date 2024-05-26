import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { ProductCreate } from "./ProductCreate";
import { NotFound } from "../NotFound";

export const Admin: React.FC = (props) => {
  return (
    <Routes>
      <Route path="/product" element={<ProductCreate />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
