import { useEffect, useState } from "react";
import useUserLogged from "../../hooks/useUserLogged";
import { findUsers, findAssets, findSingleUnit } from "../../utils/api";
import StatsCard from "../StatsCard";

const initialDataState = [
  { title: "Nome", value: "" },
  { title: "Ativos em sua unidade", value: 0 },
  { title: "Funcionários em sua unidade", value: 0 },
];

const UnitInfoCard = () => {
  const { actualUser, isLogged } = useUserLogged();
  const [data, setData] = useState(initialDataState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData(companyId: number, unitId: number) {
      try {
        setLoading(true);
        const unitName = (await findSingleUnit(unitId)).name;
        const usersInUnit = await findUsers(companyId, unitId)();
        const assetsInUnit = await findAssets(companyId, unitId)();
        setData([
          { title: "Nome", value: unitName },
          { title: "Ativos em sua unidade", value: assetsInUnit.length },
          { title: "Funcionários em sua unidade", value: usersInUnit.length },
        ]);
      } catch (err) {
        setData(initialDataState);
      } finally {
        setLoading(false);
      }
    }

    if (isLogged && actualUser.companyId && actualUser.unitId) {
      fetchData(actualUser.companyId, actualUser.unitId);
    }
  }, [isLogged, actualUser.companyId, actualUser.unitId]);

  return (
    <StatsCard
      title="Informações da sua unidade"
      loading={loading}
      stats={data}
    />
  );
};

export default UnitInfoCard;
