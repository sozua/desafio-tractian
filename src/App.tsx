import Layout, { Content, Footer } from "antd/lib/layout/layout";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalRoutes from "./components/AppRoutes/GlobalRoutes/";
import TopbarMenu from "./components/TopbarMenu";

function App() {
  return (
    <BrowserRouter>
      <Layout className="layout">
        <TopbarMenu />
        <Content style={{ padding: "0 50px" }}>
          <GlobalRoutes />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Footer aqui
        </Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
