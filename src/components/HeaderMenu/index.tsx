import { Menu, Row } from "antd";

import { Header } from "antd/lib/layout/layout";

import { Link } from "react-router-dom";
import HeaderDropdown from "../HeaderDropdown";

const HeaderMenu = () => {
  return (
    <Header style={{ background: "white" }}>
      <Row justify="space-between" align="middle">
        <Link to="/" style={{ display: "flex" }}>
          <img
            src="https://tractian.com/wp-content/uploads/tractian-logo-1974x269.png"
            alt="Logo da Tractian"
            style={{ height: 20 }}
          />
        </Link>
        <Menu mode="horizontal">
          <Menu.Item key="1">
            <Link to="/">Visão geral</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/ativos">Ativos</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <HeaderDropdown />
          </Menu.Item>
        </Menu>
      </Row>
    </Header>
  );
};

export default HeaderMenu;
