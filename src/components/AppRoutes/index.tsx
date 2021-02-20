import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../../pages/Home";
import AssetsPage from "../../pages/Assets";
import SingleAsset from "../../pages/SingleAsset";

const GlobalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="ativos" element={<AssetsPage />} />
      <Route path="ativos/:id" element={<SingleAsset />} />
    </Routes>
  );
};

export default GlobalRoutes;
