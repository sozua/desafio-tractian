import { Col, Row } from "antd";

import AssetsCard from "../../components/AssetsCard/";
import UnitInfoCard from "../../components/UnitInfoCard";
import UsersCard from "../../components/UsersCard";

const Home = () => {
  return (
    <Row gutter={24} style={{ marginTop: 32 }}>
      <Col xs={24} lg={12}>
        <AssetsCard />
      </Col>
      <Col xs={24} lg={12}>
        <UnitInfoCard />
        <UsersCard />
      </Col>
    </Row>
  );
};

export default Home;
