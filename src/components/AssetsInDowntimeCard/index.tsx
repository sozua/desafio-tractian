import { useEffect } from "react";
import useUserLogged from "../../hooks/useUserLogged";
import { findInDowntimeAssets } from "../../utils/api";

import { RadioChangeEvent } from "antd";
import useLoadFromApi from "../../hooks/useLoadFromApi";
import ListCard from "../ListCard";
import assetsColumnsScheme from "./columnsScheme";

const AssetsInDowntimeCard = () => {
  const { actualUser, isLogged, company } = useUserLogged();
  const { data, loading, apiRequest, setData, setLoading } = useLoadFromApi();

  useEffect(() => {
    if (isLogged && actualUser.companyId)
      apiRequest(findInDowntimeAssets(actualUser.companyId, actualUser.unitId));
  }, [actualUser, isLogged, apiRequest]);

  useEffect(() => {
    if (isLogged && actualUser.companyId) {
      const inDowntimeAssets = company.assets.map(
        (asset) => asset.status === "inDowntime"
      );
      setData(inDowntimeAssets);
      setLoading(false);
    }
  }, [actualUser, isLogged, company.assets, setData, setLoading]);

  function onChange(event: RadioChangeEvent) {
    if (actualUser.companyId)
      switch (event.target.value) {
        case "userUnit":
          const inDowntimeAssets = company.assets.map(
            (asset) => asset.status === "inDowntime"
          );
          setData(inDowntimeAssets);
          break;
        default:
          apiRequest(findInDowntimeAssets(actualUser.companyId));
      }
  }

  const radioButtons = [
    { title: "Ativos da sua unidade", value: "userUnit" },
    { title: "Todos os ativos", value: "all" },
  ];

  return (
    <ListCard
      title="Ativos em parada"
      radioButtons={radioButtons}
      onRadioChange={onChange}
      columns={assetsColumnsScheme}
      dataSource={data}
      loading={loading}
    />
  );
};

export default AssetsInDowntimeCard;
