import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.css";

import { Provider } from "react-redux";
import store from "./state/store";

import { ConfigProvider } from "antd";
import ptBR from "antd/lib/locale/pt_BR";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider locale={ptBR}>
        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
