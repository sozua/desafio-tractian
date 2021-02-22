import { useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";

import ModalEditUser from "../ModalEditUser";

const EditButton = (record: any) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Space size="middle">
        <Button type="primary" ghost onClick={() => setVisible(true)}>
          <EditOutlined />
        </Button>
      </Space>
      <ModalEditUser
        visible={visible}
        setVisible={setVisible}
        initialData={{
          id: record.id,
          name: record.name,
          email: record.email,
          unitId: record.unitId,
        }}
      />
    </>
  );
};

const usersColumnsScheme = [
  {
    title: "Nome",
    dataIndex: "name",
    key: "name",
    width: "100%",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: false,
    key: "options",
    render: EditButton,
  },
];

export default usersColumnsScheme;
