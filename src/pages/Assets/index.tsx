import { Col, Row } from "antd";

import AssetsInDowntimeCard from "../../components/AssetsInDowntimeCard/";
import AssetsInAlertCard from "../../components/AssetsInAlertCard/";
import MetricsComparationCard from "../../components/MetricsComparationCard";

const AssetsPage = () => {
  return (
    <Row gutter={24} style={{ marginTop: 32 }}>
      <Col xs={24} lg={12}>
        <MetricsComparationCard />
      </Col>
      <Col xs={24} lg={12}>
        <AssetsInDowntimeCard />
        <AssetsInAlertCard />
      </Col>
    </Row>
  );
};

export default AssetsPage;
