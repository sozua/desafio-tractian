import { useDispatch, useSelector } from "react-redux";
import { StoreTypes } from "../../state/store";
import useUserLogged from "../../hooks/useUserLogged";

import { Dropdown, Menu } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { changeActualUser } from "../../state/company/slicer";
import { findSingleUser } from "../../utils/api";

const HeaderDropdown = () => {
  const { isLogged, actualUser } = useUserLogged();
  const company = useSelector((state: StoreTypes) => state.company);
  const dispatch = useDispatch();

  async function handleChangeUser(userId: number = 0) {
    const newUserData = await findSingleUser(userId);
    dispatch(changeActualUser(newUserData));
  }

  if (!isLogged) return null;

  const menu = (
    <Menu>
      <Menu.ItemGroup title={company.name}>
        {company.users.map((user) => (
          <Menu.Item
            disabled={user.id === company.actualUser.id}
            onClick={() => handleChangeUser(user.id)}
            key={user.id}
          >
            {user.name}
          </Menu.Item>
        ))}
      </Menu.ItemGroup>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <div>
        <Avatar style={{ marginRight: ".5rem" }}>
          {actualUser.name?.slice(0, 1)}
        </Avatar>
        {actualUser.name}
      </div>
    </Dropdown>
  );
};

export default HeaderDropdown;
