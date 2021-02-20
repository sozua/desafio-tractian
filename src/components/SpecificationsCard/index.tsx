import { AssetProps } from "../../utils/types";
import StatsCard from "../StatsCard";

interface SpecificationsCardProps {
  assetData: AssetProps;
  loading?: boolean;
}

const SpecificationsCard = ({
  assetData,
  loading,
}: SpecificationsCardProps) => {
  return (
    <StatsCard
      title="Especificações"
      loading={loading}
      stats={[
        {
          title: "Temperatura máxima",
          value: assetData.specifications?.maxTemp
            ? `${assetData.specifications?.maxTemp} ºC`
            : "-",
        },
        {
          title: "Potência",
          value: assetData.specifications?.power
            ? `${assetData.specifications?.power} kWh`
            : "-",
        },
        {
          title: "Velocidade de rotação",
          value: assetData.specifications?.rpm
            ? `${assetData.specifications?.rpm} RPM`
            : "-",
        },
        { title: "ID do sensor", value: assetData.sensors },
      ]}
    />
  );
};

export default SpecificationsCard;
