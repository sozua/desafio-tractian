import { EditOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppPageHeader from "../../components/PageHeader";
import MetricsCard from "../../components/MetricsCards";
import SpecificationsCard from "../../components/SpecificationsCard";
import useLoadFromApi from "../../hooks/useLoadFromApi";
import { findSingleAsset, findSingleUnit } from "../../utils/api";
import AssetBasicInfosCard from "../../components/AssetBasicInfosCard";
import ModalEditAsset from "../../components/ModalEditAsset";

const SingleAsset = () => {
  const { id } = useParams();
  const { data, loading, apiRequest, setData } = useLoadFromApi();
  const [assetModalVisible, setAssetModalVisible] = useState(false);

  useEffect(() => {
    async function getUnitName() {
      const unitName = (await findSingleUnit(data.unitId)).name || "";
      setData((oldData: any) => ({ ...oldData, unitName }));
    }
    apiRequest(findSingleAsset(id));
    getUnitName();
  }, [apiRequest, id, setData, data.unitId]);

  function handleEdit() {
    setAssetModalVisible(true);
  }

  return (
    <>
      <Row gutter={24} style={{ marginTop: 32 }}>
        <AppPageHeader
          title={data.name}
          loading={loading}
          extra={[
            <Button key="1" type="primary" onClick={handleEdit}>
              <EditOutlined />
              Editar
            </Button>,
          ]}
        />
        <Col xs={24} lg={12}>
          <AssetBasicInfosCard
            title="Informações básicas"
            loading={loading}
            data={data}
          />
        </Col>
        <Col xs={24} lg={12}>
          <SpecificationsCard assetData={data} loading={loading} />
          <MetricsCard assetData={data} loading={loading} />
        </Col>
      </Row>
      <ModalEditAsset
        visible={assetModalVisible}
        setVisible={setAssetModalVisible}
        initialData={{
          ...data,
        }}
      />
    </>
  );
};

export default SingleAsset;
