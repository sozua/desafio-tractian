import Layout, { Content, Footer } from "antd/lib/layout/layout";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import GlobalRoutes from "./components/AppRoutes/GlobalRoutes/";
import HeaderMenu from "./components/HeaderMenu";
import { changeName, changeUnities, changeUsers } from "./state/company/slicer";
import { loadCompany, loadUnities, loadUsers } from "./utils/api";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function loginCompany(companyId: number) {
      const company = await loadCompany(companyId);
      const unities = await loadUnities(companyId);
      const users = await loadUsers(companyId);

      dispatch(changeName(company.name));
      dispatch(changeUnities(unities));
      dispatch(changeUsers(users));
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
        <Footer style={{ textAlign: "center" }}>Footer aqui</Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
