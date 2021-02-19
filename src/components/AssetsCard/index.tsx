import { useEffect } from "react";
import useUserLogged from "../../hooks/useUserLogged";
import { findAssets } from "../../utils/api";

import { RadioChangeEvent } from "antd";
import useLoadFromApi from "../../hooks/useLoadFromApi";
import ListCard from "../ListCard";
import assetsColumnsScheme from "./columnsScheme";

const AssetsCard = () => {
  const { actualUser, isLogged } = useUserLogged();
  const { data, loading, apiRequest } = useLoadFromApi();

  useEffect(() => {
    if (isLogged && actualUser.id && actualUser.id >= 0)
      apiRequest(findAssets(1, actualUser.id));
  }, [actualUser, isLogged, apiRequest]);

  function onChange(event: RadioChangeEvent) {
    switch (event.target.value) {
      case "userUnit":
        apiRequest(findAssets(1, actualUser.id));
        break;
      default:
        apiRequest(findAssets(1));
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
    />
  );
};

export default AssetsCard;
