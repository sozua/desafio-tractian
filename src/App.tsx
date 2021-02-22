import Layout, { Content } from "antd/lib/layout/layout";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import GlobalRoutes from "./components/AppRoutes/";
import { default as Footer } from "./components/Footer";
import HeaderMenu from "./components/HeaderMenu";
import {
  changeActualUser,
  changeAssets,
  changeName,
  changeUnits,
  changeUsers,
} from "./state/company/slicer";
import { StoreTypes } from "./state/store";
import {
  findAssets,
  findCompany,
  findSingleUser,
  findUnits,
  findUsers,
} from "./utils/api";

function App() {
  const dispatch = useDispatch();
  const company = useSelector((state: StoreTypes) => state.company);

  useEffect(() => {
    async function updateAssets(companyId: number, unitId: number) {
      const assets = await findAssets(companyId, unitId)();
      dispatch(changeAssets(assets));
    }
    if (company.actualUser.companyId && company.actualUser.unitId)
      updateAssets(company.actualUser.companyId, company.actualUser.unitId);
  }, [company.actualUser, dispatch]);

  useEffect(() => {
    async function loginCompany(companyId: number) {
      const company = await findCompany(companyId);
      const units = await findUnits(companyId);
      const users = await findUsers(companyId)();
      const actualUser = await findSingleUser(users[0].id || -1);

      dispatch(changeName(company.name));
      dispatch(changeUnits(units));
      dispatch(changeUsers(users));
      dispatch(changeActualUser(actualUser));
    }
    loginCompany(1);
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Layout>
        <HeaderMenu />
        <Content style={{ padding: "0 50px" }}>
          <GlobalRoutes />
        </Content>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
