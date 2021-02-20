export type AssetProps = {
  id: number;
  name: string;
  model: string;
  sensors: string[];
  image: string;
  healthscore?: number;
  status?: string;
  specifications: {
    maxTemp?: number;
    power?: number;
    rpm?: number;
  };
  metrics: {
    totalCollectsUptime: number;
    totalUptime: number;
    lastUptimeAt: string;
  };
  unitId?: number;
  unitName?: string;
  companyId?: number;
};

export type UnityProps = {
  id?: number;
  name?: string;
  companyId?: number;
};

export type UserProps = {
  id?: number;
  email?: string;
  name?: string;
  unitId?: number;
  companyId?: number;
};

export type StatsProps = {
  title?: string;
  value?: any;
};
