import { Spin } from "antd";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";
import useLoadFromApi from "../../hooks/useLoadFromApi";
import useUserLogged from "../../hooks/useUserLogged";
import { AssetProps } from "../../utils/types";
import initialOption from "./initialOption";

const ChartHealthscore = (props: HighchartsReact.Props) => {
  const [options, setOptions] = useState(initialOption);
  const { data, loading, setData, setLoading } = useLoadFromApi();
  const { actualUser, company } = useUserLogged();

  useEffect(() => {
    if (company.assets.length) {
      setData(company.assets);
      setLoading(false);
    }
  }, [company.assets, actualUser.unitId, setData, setLoading]);

  useEffect(() => {
    const series = data.map((asset: AssetProps) => {
      const healthScore = asset.healthscore;
      const assetName = asset.name;
      return { name: assetName, data: [healthScore] };
    });
    setOptions((previousOption) => ({ ...previousOption, series }));
  }, [data]);

  if (loading)
    return (
      <div style={{ display: "flex", padding: 16, justifyContent: "center" }}>
        <Spin />
      </div>
    );

  return (
    <HighchartsReact highcharts={Highcharts} options={options} {...props} />
  );
};

export default ChartHealthscore;
