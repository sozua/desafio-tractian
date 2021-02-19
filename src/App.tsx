import Layout, { Content } from "antd/lib/layout/layout";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import GlobalRoutes from "./components/AppRoutes/GlobalRoutes/";
import { default as Footer } from "./components/Footer";
import HeaderMenu from "./components/HeaderMenu";
import {
  changeActualUser,
  changeName,
  changeUnities,
  changeUsers,
} from "./state/company/slicer";
import { findCompany, findUnities, findUsers } from "./utils/api";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function loginCompany(companyId: number) {
      const company = await findCompany(companyId);
      const unities = await findUnities(companyId);
      const users = await findUsers(companyId)();

      dispatch(changeName(company.name));
      dispatch(changeUnities(unities));
      dispatch(changeUsers(users));
      if (users.length > 0) dispatch(changeActualUser(1));
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
