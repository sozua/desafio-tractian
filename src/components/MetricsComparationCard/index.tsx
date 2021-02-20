import { useState } from "react";
import { Card, Radio, RadioChangeEvent } from "antd";
import ChartTotalCollects from "../ChartTotalCollects";
import ChartTotalUptime from "../ChartTotalUptime";
import ChartHealthscore from "../ChartHealthscore";

const MetricsComparationCard = () => {
  const [chart, setChart] = useState("totalCollects");

  function onChange(event: RadioChangeEvent) {
    setChart(event.target.value);
  }

  const radioButtonsData = [
    { title: "Total de coletas", value: "totalCollects" },
    { title: "Total de horas de coleta", value: "totalUptime" },
    { title: "Saúde", value: "healthscore" },
  ];

  const radioButtons = (
    <Radio.Group
      onChange={onChange}
      defaultValue={radioButtonsData ? radioButtonsData[0].value : ""}
    >
      {radioButtonsData?.map((radioButton) => (
        <Radio.Button value={radioButton.value} key={radioButton.value}>
          {radioButton.title}
        </Radio.Button>
      ))}
    </Radio.Group>
  );

  return (
    <Card
      title="Métrica dos ativos de sua unidade"
      extra={radioButtons && radioButtons}
      style={{ marginTop: 8 }}
    >
      {chart === "totalCollects" && <ChartTotalCollects />}
      {chart === "totalUptime" && <ChartTotalUptime />}
      {chart === "healthscore" && <ChartHealthscore />}
    </Card>
  );
};

export default MetricsComparationCard;
