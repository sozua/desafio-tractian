import formatDate from "../../utils/formatDate";
import { AssetProps } from "../../utils/types";
import StatsCard from "../StatsCard";

interface MetricsCardProps {
  assetData: AssetProps;
  loading?: boolean;
}

const MetricsCard = ({ assetData, loading }: MetricsCardProps) => {
  return (
    <StatsCard
      title="Métricas"
      loading={loading}
      stats={[
        {
          title: "Total de coletas",
          value: assetData.metrics?.totalCollectsUptime
            ? `${assetData.metrics?.totalCollectsUptime} coletas`
            : "-",
        },
        {
          title: "Tempo total de coleta",
          value: assetData.metrics?.totalUptime
            ? `${Math.floor(assetData.metrics?.totalUptime)} horas`
            : "-",
        },
        {
          title: "Data da ultima coleta",
          value: assetData.metrics?.lastUptimeAt
            ? formatDate(assetData.metrics?.lastUptimeAt)
            : "-",
        },
      ]}
    />
  );
};

export default MetricsCard;
