import { useEffect } from "react";
import useUserLogged from "../../hooks/useUserLogged";
import { findInAlertAssets } from "../../utils/api";

import { RadioChangeEvent } from "antd";
import useLoadFromApi from "../../hooks/useLoadFromApi";
import ListCard from "../ListCard";
import assetsColumnsScheme from "./columnsScheme";

const AssetsInAlertCard = () => {
  const { actualUser, isLogged } = useUserLogged();
  const { data, loading, apiRequest } = useLoadFromApi();

  useEffect(() => {
    if (isLogged && actualUser.id && actualUser.id >= 0 && actualUser.companyId)
      apiRequest(findInAlertAssets(actualUser.companyId, actualUser.id));
  }, [actualUser, isLogged, apiRequest]);

  function onChange(event: RadioChangeEvent) {
    if (actualUser.companyId)
      switch (event.target.value) {
        case "userUnit":
          apiRequest(findInAlertAssets(actualUser.companyId, actualUser.id));
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
