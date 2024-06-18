import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Login";
import { AdminPages } from "../Admin/AdminPages";
import { NotFound } from "../NotFound";
import TokenProvider from "../../providers/TokenProvider";

export function Admin() {
  return (
    <TokenProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<AdminPages />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TokenProvider>
  );
}
