import { EditOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import { Link } from "react-router-dom";

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
    render: (record: any) => (
      <Space size="middle">
        <Link to={`/editar-usuario/${record.id}`}>
          <Button type="primary" ghost>
            <EditOutlined />
          </Button>
        </Link>
      </Space>
    ),
  },
];

export default usersColumnsScheme;
