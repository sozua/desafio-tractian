import { useEffect, useState } from "react";
import useUserLogged from "../../hooks/useUserLogged";
import { findUsers } from "../../utils/api";

import { Button, RadioChangeEvent } from "antd";
import useLoadFromApi from "../../hooks/useLoadFromApi";
import ListCard from "../ListCard";
import assetsColumnsScheme from "./columnsScheme";
import ModalCreateUser from "../ModalCreateUser";

const UsersCard = () => {
  const { actualUser, isLogged } = useUserLogged();
  const { data, loading, apiRequest } = useLoadFromApi();
  const [createUserModalActived, setCreateUserModalActived] = useState(false);

  useEffect(() => {
    if (isLogged && actualUser.id && actualUser.id >= 0 && actualUser.companyId)
      apiRequest(findUsers(actualUser.companyId, actualUser.unitId));
  }, [actualUser, isLogged, apiRequest]);

  function onChange(event: RadioChangeEvent) {
    if (actualUser.companyId)
      switch (event.target.value) {
        case "userUnit":
          apiRequest(findUsers(actualUser.companyId, actualUser.unitId));
          break;
        default:
          apiRequest(findUsers(actualUser.companyId));
      }
  }

  const radioButtons = [
    { title: "Ativos da sua unidade", value: "userUnit" },
    { title: "Todos os ativos", value: "all" },
  ];

  return (
    <>
      <ListCard
        title="Painel de funcionários"
        radioButtons={radioButtons}
        onRadioChange={onChange}
        columns={assetsColumnsScheme}
        dataSource={data}
        loading={loading}
        footerElement={
          <Button
            type="primary"
            onClick={() => setCreateUserModalActived(true)}
          >
            Adicionar um novo funcionário
          </Button>
        }
      />
      <ModalCreateUser
        visible={createUserModalActived}
        setVisible={setCreateUserModalActived}
      />
    </>
  );
};

export default UsersCard;
