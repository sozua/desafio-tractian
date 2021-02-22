import { useEffect } from "react";
import useUserLogged from "../../hooks/useUserLogged";
import { findInAlertAssets } from "../../utils/api";

import { RadioChangeEvent } from "antd";
import useLoadFromApi from "../../hooks/useLoadFromApi";
import ListCard from "../ListCard";
import assetsColumnsScheme from "./columnsScheme";

const AssetsInAlertCard = () => {
  const { actualUser, isLogged, company } = useUserLogged();
  const { data, loading, apiRequest, setData, setLoading } = useLoadFromApi();

  useEffect(() => {
    if (isLogged && actualUser.companyId)
      apiRequest(findInAlertAssets(actualUser.companyId, actualUser.unitId));
  }, [actualUser, isLogged, apiRequest]);

  useEffect(() => {
    if (isLogged && actualUser.companyId) {
      const inAlertAssets = company.assets.map(
        (asset) => asset.status === "inAlert"
      );
      setData(inAlertAssets);
      setLoading(false);
    }
  }, [actualUser, isLogged, company.assets, setData, setLoading]);

  function onChange(event: RadioChangeEvent) {
    if (actualUser.companyId)
      switch (event.target.value) {
        case "userUnit":
          const inAlertAssets = company.assets.map(
            (asset) => asset.status === "inAlert"
          );
          setData(inAlertAssets);
          break;
        default:
          apiRequest(findInAlertAssets(actualUser.companyId));
      }
  }

  const radioButtons = [
    { title: "Ativos da sua unidade", value: "userUnit" },
    { title: "Todos os ativos", value: "all" },
  ];

  return (
    <ListCard
      title="Ativos em alerta"
      radioButtons={radioButtons}
      onRadioChange={onChange}
      columns={assetsColumnsScheme}
      dataSource={data}
      loading={loading}
    />
  );
};

export default AssetsInAlertCard;
