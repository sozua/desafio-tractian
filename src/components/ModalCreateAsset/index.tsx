import { UnitProps } from "../../utils/types";
import { useEffect, useState } from "react";
import useUserLogged from "../../hooks/useUserLogged";
import FormModal from "../FormModal";

import { findUnits, submitAsset } from "../../utils/api";

type ModalCreateAssetProps = {
  visible: boolean;
  setVisible: Function;
};

const ModalCreateAsset = ({ visible, setVisible }: ModalCreateAssetProps) => {
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
    name: "create_asset",
    inputs: [
      {
        name: "name",
        label: "Nome",
        required: true,
      },
      {
        name: "model",
        label: "Modelo",
        required: true,
      },
      {
        name: "sensors",
        label: "Sensor instalado",
        required: true,
      },
      {
        name: "image",
        label: "Imagem (URL)",
        addonBefore: "https://",
        type: "url",
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
      title="Adicionar unidade"
      visible={visible}
      handleOk={submitAsset}
      handleCancel={handleCancel}
      formObj={formObj}
      userCompanyId={actualUser.companyId || -1}
    />
  );
};

export default ModalCreateAsset;
