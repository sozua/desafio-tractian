import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../../pages/Home";
import AssetsPage from "../../pages/Assets";

const GlobalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="ativos" element={<AssetsPage />} />
    </Routes>
  );
};

export default GlobalRoutes;
