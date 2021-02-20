import { Card, Col, Image, Row, Statistic } from "antd";
import SkeletonImage from "antd/lib/skeleton/Image";
import { StatsProps } from "../../utils/types";

interface StatsWithImageCardProps {
  title: string;
  loading?: boolean;
  stats: StatsProps[];
  imageSrc: string;
  imageAlt?: string;
}

const StatsWithImageCard = ({
  title,
  stats,
  loading,
  imageSrc,
  imageAlt,
}: StatsWithImageCardProps) => {
  return (
    <Card title={title} style={{ marginTop: 8 }}>
      <Row gutter={16}>
        <Col span={24}>
          {loading ? (
            <SkeletonImage />
          ) : (
            <Image
              src={imageSrc}
              alt={imageAlt}
              style={{ maxHeight: 360, objectFit: "cover" }}
            />
          )}
        </Col>
        {stats.map((singleStats) => (
          <Col flex="auto" key={singleStats.title} style={{ marginTop: 24 }}>
            <Card>
              <Statistic
                title={singleStats.title}
                value={singleStats.value}
                loading={loading}
                style={{ textTransform: "capitalize" }}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default StatsWithImageCard;
