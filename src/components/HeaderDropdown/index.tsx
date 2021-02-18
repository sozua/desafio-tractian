import { Dropdown, Menu } from "antd";
import Avatar from "antd/lib/avatar/avatar";

const HeaderDropdown = () => {
  const menu = (
    <Menu>
      <Menu.ItemGroup title="Empresa teste">
        <Menu.Item disabled>Testador Um</Menu.Item>
        <Menu.Item>Testador Dois</Menu.Item>
        <Menu.Item>Testador Três</Menu.Item>
        <Menu.Item>Testador Quatro</Menu.Item>
        <Menu.Item>Testador Cinco</Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <li>
        <Avatar style={{ marginRight: ".5rem" }}>T</Avatar>
        Testador Um
      </li>
    </Dropdown>
  );
};

export default HeaderDropdown;
