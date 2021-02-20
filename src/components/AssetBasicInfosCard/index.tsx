import convertStatus from "../../utils/convertStatus";
import { AssetProps } from "../../utils/types";
import StatsWithImageCard from "../StatsWithImageCard";

interface AssetBasicInfosCardProps {
  title: string;
  loading?: boolean;
  data: AssetProps;
}

const AssetBasicInfosCard = ({
  title,
  loading,
  data,
}: AssetBasicInfosCardProps) => {
  return (
    <StatsWithImageCard
      title={title}
      loading={loading}
      imageSrc={data.image}
      imageAlt={`Foto do ${data.name}`}
      stats={[
        {
          title: "Modelo",
          value: data.model ? data.model : "-",
        },
        {
          title: "Status",
          value: data.status ? convertStatus(data.status) : "-",
        },
        {
          title: "Saúde",
          value: data.healthscore ? `${data.healthscore}%` : "-",
        },
        {
          title: "Unidade responsável",
          value: data.unitName ? data.unitName : "-",
        },
      ]}
    />
  );
};

export default AssetBasicInfosCard;
