import { Col, Row } from "antd";

import AssetsCard from "../../components/AssetsCard/";

const Home = () => {
  return (
    <Row gutter={24} style={{ marginTop: 32 }}>
      <Col xs={24} lg={12}>
        <AssetsCard />
      </Col>
    </Row>
  );
};

export default Home;
