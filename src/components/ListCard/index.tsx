import { Card, Radio, Table } from "antd";
import { ReactElement } from "react";

type RadioButtonTypes = {
  title: string;
  value: string;
};

interface ListCardProps {
  title: string;
  radioButtons?: RadioButtonTypes[];
  onRadioChange?: any;
  columns: any[];
  dataSource: any[];
  loading: boolean;
  rowKey?: string;
  footerElement?: ReactElement;
}

const ListCard = (props: ListCardProps) => {
  const radioButtons = (
    <Radio.Group
      onChange={props.onRadioChange}
      defaultValue={props.radioButtons ? props.radioButtons[0].value : ""}
    >
      {props.radioButtons?.map((radioButton) => (
        <Radio.Button value={radioButton.value} key={radioButton.value}>
          {radioButton.title}
        </Radio.Button>
      ))}
    </Radio.Group>
  );

  return (
    <Card
      title={props.title}
      extra={radioButtons && radioButtons}
      style={{ marginTop: 8 }}
      actions={
        props.footerElement && [
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: 24,
            }}
          >
            {props.footerElement}
          </div>,
        ]
      }
    >
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
