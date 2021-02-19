import { Card, Radio, Table } from "antd";

type RadioButtonTypes = {
  title: string;
  value: string;
};

interface ListCardProps {
  title: string;
  radioButtons: RadioButtonTypes[];
  onRadioChange: any;
  columns: any[];
  dataSource: any[];
  loading: boolean;
  rowKey?: string;
}

const ListCard = (props: ListCardProps) => {
  const radioButtons = (
    <Radio.Group onChange={props.onRadioChange} defaultValue="userUnit">
      {props.radioButtons.map((radioButton) => (
        <Radio.Button value={radioButton.value} key={radioButton.value}>
          {radioButton.title}
        </Radio.Button>
      ))}
    </Radio.Group>
  );

  return (
    <Card title={props.title} extra={radioButtons}>
      <Table
        bordered
        columns={props.columns}
        dataSource={props.dataSource}
        loading={props.loading}
        rowKey={props.rowKey || "id"}
      />
    </Card>
  );
};

export default ListCard;
