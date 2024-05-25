import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Store } from "./Store";
import { Admin } from "./Admin";

export function Pages() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/*" element={<Store />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
