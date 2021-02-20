import { Col, PageHeader } from "antd";
import { ReactNode } from "react";

interface AppPageHeaderProps {
  title: string;
  extra: ReactNode;
  loading?: boolean;
}

const AppPageHeader = ({ title, extra, loading }: AppPageHeaderProps) => {
  return (
    <Col xs={24}>
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title={loading ? "Carregando..." : title}
        extra={!loading && extra}
      />
    </Col>
  );
};

export default AppPageHeader;
