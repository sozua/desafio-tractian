import { Menu, Row } from "antd";

import { Header } from "antd/lib/layout/layout";
import { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";
import HeaderDropdown from "../HeaderDropdown";

const HeaderMenu = () => {
  const [pathname, setPathname] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setPathname(location.pathname);
  }, [location.pathname]);

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
        <span>
          <Menu
            mode="horizontal"
            style={{ display: "inline-block" }}
            selectable={false}
            selectedKeys={[pathname]}
          >
            <Menu.Item key="/">
              <Link to="/">Visão geral</Link>
            </Menu.Item>
            <Menu.Item key="/ativos">
              <Link to="ativos">Ativos</Link>
            </Menu.Item>
          </Menu>
          <div
            style={{
              display: "inline-block",
              cursor: "pointer",
              marginLeft: 16,
            }}
          >
            <HeaderDropdown />
          </div>
        </span>
      </Row>
    </Header>
  );
};

export default HeaderMenu;
