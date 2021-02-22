import { UnitProps } from "../../utils/types";
import { useEffect, useState } from "react";
import useUserLogged from "../../hooks/useUserLogged";
import FormModal from "../FormModal";

import { editUser, findUnits } from "../../utils/api";
import { message } from "antd";

type ModalEditUserProps = {
  visible: boolean;
  setVisible: Function;
  initialData: any;
};

const ModalEditUser = ({
  visible,
  setVisible,
  initialData,
}: ModalEditUserProps) => {
  const { actualUser } = useUserLogged();
  const [radioGroup, setRadioGroup] = useState();
  const [radioLoading, setRadioLoading] = useState(true);

  useEffect(() => {
    async function getUnits() {
      if (actualUser.companyId) {
        const units = await findUnits(actualUser.companyId || -1);
        const mappedUnits = units.map((unit: UnitProps) => ({
          label: unit.name,
          value: unit.id,
        }));
        setRadioGroup(mappedUnits);
        setRadioLoading(false);
      }
    }
    getUnits();
  }, [actualUser.companyId]);

  const formObj = {
    name: "create_employeer",
    inputs: [
      {
        name: "name",
        label: "Nome",
        required: true,
        value: initialData.name || null,
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        required: true,
        value: initialData.email || null,
      },
      {
        name: "unitId",
        label: "Unidade",
        type: "radio",
        radioGroup,
        loading: radioLoading,
        required: true,
        value: initialData.unitId || null,
      },
    ],
  };

  const handleOk = (values: Object) => {
    return async () => {
      const response = await editUser(initialData.id || -1, values);
      if (response.ok) message.success("Usuário editado com sucesso!");
      else
        message.error(
          "Ocorreu um erro durante a modificação do usuário. Tente novamente mais tarde"
        );
    };
  };

  async function handleClose() {
    setVisible(false);
  }

  return (
    <FormModal
      title="Editar funcionário"
      visible={visible}
      handleOk={handleOk}
      handleClose={handleClose}
      formObj={formObj}
    />
  );
};

export default ModalEditUser;
