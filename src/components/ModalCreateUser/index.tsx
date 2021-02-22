import { UnitProps } from "../../utils/types";
import { useEffect, useState } from "react";
import useUserLogged from "../../hooks/useUserLogged";
import FormModal from "../FormModal";

import { findUnits, submitUser } from "../../utils/api";

type ModalCreateUserProps = {
  visible: boolean;
  setVisible: Function;
};

const ModalCreateUser = ({ visible, setVisible }: ModalCreateUserProps) => {
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
        await setRadioLoading(false);
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
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        required: true,
      },
      {
        name: "unitId",
        label: "Unidade",
        type: "radio",
        radioGroup,
        loading: radioLoading,
        required: true,
      },
    ],
  };

  async function handleCancel() {
    setVisible(false);
  }

  return (
    <FormModal
      title="Adicionar funcionário"
      visible={visible}
      handleOk={submitUser}
      handleCancel={handleCancel}
      formObj={formObj}
      userCompanyId={actualUser.companyId || -1}
    />
  );
};

export default ModalCreateUser;
