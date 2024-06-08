import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Login";
import { AdminPages} from '../Admin/AdminPages';
import { NotFound } from "../NotFound";

export function Admin() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<AdminPages />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
