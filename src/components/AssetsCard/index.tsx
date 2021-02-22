import { useEffect, useState } from "react";
import useUserLogged from "../../hooks/useUserLogged";
import { findAssets } from "../../utils/api";

import { Button, RadioChangeEvent } from "antd";
import useLoadFromApi from "../../hooks/useLoadFromApi";
import ListCard from "../ListCard";
import assetsColumnsScheme from "./columnsScheme";
import ModalCreateAsset from "../ModalCreateAsset";

const AssetsCard = () => {
  const { actualUser, isLogged, company } = useUserLogged();
  const { data, loading, apiRequest, setData, setLoading } = useLoadFromApi();
  const [createAssetModalActived, setCreateAssetModalActived] = useState(false);

  useEffect(() => {
    if (isLogged && actualUser.companyId) {
      setData(company.assets);
      setLoading(false);
    }
  }, [actualUser, isLogged, company.assets, setData, setLoading]);

  function onChange(event: RadioChangeEvent) {
    if (actualUser.companyId)
      switch (event.target.value) {
        case "userUnit":
          setData(company.assets);
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
    <>
      <ListCard
        title="Visão geral dos ativos"
        radioButtons={radioButtons}
        onRadioChange={onChange}
        columns={assetsColumnsScheme}
        dataSource={data}
        loading={loading}
        footerElement={
          <Button
            type="primary"
            onClick={() => setCreateAssetModalActived(true)}
          >
            Adicionar um novo ativo
          </Button>
        }
      />
      <ModalCreateAsset
        visible={createAssetModalActived}
        setVisible={setCreateAssetModalActived}
      />
    </>
  );
};

export default AssetsCard;
