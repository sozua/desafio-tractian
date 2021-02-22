import { UnitProps } from "../../utils/types";
import { useEffect, useState } from "react";
import useUserLogged from "../../hooks/useUserLogged";
import FormModal from "../FormModal";

import { findUnits, submitAsset } from "../../utils/api";
import { message } from "antd";

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

  const handleOk = (values: Object) => {
    return async () => {
      const response = await submitAsset({
        ...values,
        companyId: actualUser.companyId,
      });
      if (response.ok) message.success("Ativo adicionada com sucesso!");
      else
        message.error(
          "Ocorreu um erro durante a adição do novo ativo. Tente novamente mais tarde"
        );
    };
  };

  async function handleClose() {
    setVisible(false);
  }

  return (
    <FormModal
      title="Adicionar ativo"
      visible={visible}
      handleOk={handleOk}
      handleClose={handleClose}
      formObj={formObj}
    />
  );
};

export default ModalCreateAsset;
