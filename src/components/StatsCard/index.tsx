import { Card, Col, Row, Statistic } from "antd";
import { StatsProps } from "../../utils/types";

interface StatsCardProps {
  title: string;
  loading?: boolean;
  stats: StatsProps[];
}

const StatsCard = ({ title, stats, loading }: StatsCardProps) => {
  return (
    <Card title={title} style={{ marginTop: 8 }}>
      <Row gutter={16}>
        {stats.map((singleStats) => (
          <Col flex="auto" key={singleStats.title}>
            <Card>
              <Statistic
                title={singleStats.title}
                value={singleStats.value}
                loading={loading}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default StatsCard;
