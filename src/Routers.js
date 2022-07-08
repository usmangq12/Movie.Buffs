import React from "react";
import { MainPage } from "./pages/HomePage";
import { Deatail } from "./pages/Datail";
import { Routes, Route } from "react-router-dom";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/detail/:id" element={<Deatail />} />
    </Routes>
  );
};
