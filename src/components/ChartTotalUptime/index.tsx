import { Spin } from "antd";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";
import useLoadFromApi from "../../hooks/useLoadFromApi";
import useUserLogged from "../../hooks/useUserLogged";
import { findAssets } from "../../utils/api";
import { AssetProps } from "../../utils/types";
import initialOption from "./initialOption";

const ChartTotalUptime = (props: HighchartsReact.Props) => {
  const [options, setOptions] = useState(initialOption);
  const { data, loading, apiRequest } = useLoadFromApi();
  const { actualUser } = useUserLogged();

  useEffect(() => {
    if (actualUser.companyId) {
      apiRequest(findAssets(actualUser.companyId, actualUser.unitId));
    }
  }, [actualUser.companyId, actualUser.unitId, apiRequest]);

  useEffect(() => {
    const series = data.map((asset: AssetProps) => {
      const totalCollectUptime = asset.metrics.totalUptime;
      const assetName = asset.name;
      return { name: assetName, data: [Math.floor(totalCollectUptime)] };
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

export default ChartTotalUptime;
