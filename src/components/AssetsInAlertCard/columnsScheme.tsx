import { Link } from "react-router-dom";
import convertStatus from "../../utils/convertStatus";

const assetsColumnsScheme = [
  {
    title: "Nome",
    dataIndex: "name",
    key: "name",
    render: (text: string, record: any) => (
      <Link to={`/ativos/${record.id}`}>{text}</Link>
    ),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status: string) => (status ? convertStatus(status) : "-"),
  },
  {
    title: "Saúde",
    dataIndex: "healthscore",
    key: "healthscore",
    render: (percentage: number) => (percentage ? `${percentage}%` : "-"),
  },
];

export default assetsColumnsScheme;
