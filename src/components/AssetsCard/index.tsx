import { useEffect } from "react";
import useUserLogged from "../../hooks/useUserLogged";
import { findAssets } from "../../utils/api";

import { Button, RadioChangeEvent } from "antd";
import useLoadFromApi from "../../hooks/useLoadFromApi";
import ListCard from "../ListCard";
import assetsColumnsScheme from "./columnsScheme";

const AssetsCard = () => {
  const { actualUser, isLogged } = useUserLogged();
  const { data, loading, apiRequest } = useLoadFromApi();

  useEffect(() => {
    if (isLogged && actualUser.companyId)
      apiRequest(findAssets(actualUser.companyId, actualUser.unitId));
  }, [actualUser, isLogged, apiRequest]);

  function onChange(event: RadioChangeEvent) {
    if (actualUser.companyId)
      switch (event.target.value) {
        case "userUnit":
          apiRequest(findAssets(actualUser.companyId, actualUser.unitId));
          break;
        default:
          apiRequest(findAssets(actualUser.companyId));
      }
  }

  const radioButtons = [
    { title: "Ativos da sua unidade", value: "userUnit" },
    { title: "Todos os ativos", value: "all" },
  ];

  return (
    <ListCard
      title="Visão geral dos ativos"
      radioButtons={radioButtons}
      onRadioChange={onChange}
      columns={assetsColumnsScheme}
      dataSource={data}
      loading={loading}
      footerElement={<Button type="primary">Adicionar um novo ativo</Button>}
    />
  );
};

export default AssetsCard;
