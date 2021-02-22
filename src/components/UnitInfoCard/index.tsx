import { useEffect, useState } from "react";
import useUserLogged from "../../hooks/useUserLogged";
import StatsCard from "../StatsCard";

const initialDataState = [
  { title: "Nome", value: "" },
  { title: "Ativos em sua unidade", value: 0 },
  { title: "Funcionários em sua unidade", value: 0 },
];

const UnitInfoCard = () => {
  const { actualUser, isLogged, company } = useUserLogged();
  const [data, setData] = useState(initialDataState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isLogged && actualUser.unitId) {
      const userUnit = company.units[actualUser.unitId - 1];
      const unitName = userUnit.name || "";
      const usersInUnit = company.users.filter(
        (user) => user.unitId === actualUser.unitId
      ).length;
      const assetsInUnit = company.assets.length;

      setData([
        { title: "Nome", value: unitName },
        { title: "Ativos em sua unidade", value: assetsInUnit },
        { title: "Funcionários em sua unidade", value: usersInUnit },
      ]);
      setLoading(false);
    }
  }, [
    isLogged,
    actualUser.companyId,
    actualUser.unitId,
    company.units,
    company.assets.length,
    company.users,
  ]);

  return (
    <StatsCard
      title="Informações da sua unidade"
      loading={loading}
      stats={data}
    />
  );
};

export default UnitInfoCard;
