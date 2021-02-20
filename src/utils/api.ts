import { UnityProps, UserProps } from "./types";

const apiURI = "https://my-json-server.typicode.com/tractian/fake-api/";

export async function findCompany(id: number) {
  const data = await fetch(`${apiURI}/companies/${id}`);
  const json = await data.json();
  return json;
}

export async function findUnities(companyId: number) {
  const data = await fetch(`${apiURI}/units?companyId=${companyId}`);
  const json = await data.json();
  return json;
}

export async function findSingleUnity(unitId: number): Promise<UnityProps> {
  const data = await fetch(`${apiURI}/units/${unitId}`);
  const json = await data.json();
  return json;
}

export function findUsers(companyId: number, unitId?: number) {
  return async (): Promise<[]> => {
    let data;
    const apiAssetsURI = `${apiURI}/users?companyId=${companyId}`;

    if (unitId) data = await fetch(`${apiAssetsURI}&unitId=${unitId}`);
    else data = await fetch(apiAssetsURI);

    const json = await data.json();
    return json;
  };
}

export async function findSingleUser(userId: number): Promise<UserProps> {
  const data = await fetch(`${apiURI}/users/${userId}`);
  const json = await data.json();
  return json;
}

export function findAssets(companyId: number, unitId?: number) {
  return async () => {
    let data;
    const apiAssetsURI = `${apiURI}/assets?companyId=${companyId}`;

    if (unitId) data = await fetch(`${apiAssetsURI}&unitId=${unitId}`);
    else data = await fetch(apiAssetsURI);

    const json = await data.json();
    return json;
  };
}

export function findInAlertAssets(companyId: number, unitId?: number) {
  return async () => {
    let data;
    const apiAssetsURI = `${apiURI}/assets?companyId=${companyId}&status=inAlert`;

    if (unitId) data = await fetch(`${apiAssetsURI}&unitId=${unitId}`);
    else data = await fetch(apiAssetsURI);

    const json = await data.json();
    return json;
  };
}

export function findInDowntimeAssets(companyId: number, unitId?: number) {
  return async () => {
    let data;
    const apiAssetsURI = `${apiURI}/assets?companyId=${companyId}&status=inDowntime`;

    if (unitId) data = await fetch(`${apiAssetsURI}&unitId=${unitId}`);
    else data = await fetch(apiAssetsURI);

    const json = await data.json();
    return json;
  };
}

export function findSingleAsset(assetId: string) {
  return async () => {
    const data = await fetch(`${apiURI}/assets/${assetId}`);
    const json = await data.json();
    return json;
  };
}
