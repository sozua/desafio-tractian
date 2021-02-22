import { Col, Row } from "antd";

import AssetsInDowntimeCard from "../../components/AssetsInDowntimeCard/";
import AssetsInAlertCard from "../../components/AssetsInAlertCard/";
import MetricsComparationCard from "../../components/MetricsComparationCard";
import AssetsCard from "../../components/AssetsCard";

const AssetsPage = () => {
  return (
    <Row gutter={24} style={{ marginTop: 32 }}>
      <Col xs={24}>
        <MetricsComparationCard />
      </Col>
      <Col xs={24} lg={12}>
        <AssetsCard />
      </Col>
      <Col xs={24} lg={12}>
        <AssetsInDowntimeCard />
        <AssetsInAlertCard />
      </Col>
    </Row>
  );
};

export default AssetsPage;
