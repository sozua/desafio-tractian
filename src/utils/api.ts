import { UserProps } from "./types";

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

export async function findUsers(companyId: number) {
  const data = await fetch(`${apiURI}/users?companyId=${companyId}`);
  const json = await data.json();
  return json;
}

export async function findSingleUser(userId: number): Promise<UserProps> {
  const data = await fetch(`${apiURI}/users/${userId}`);
  const json = await data.json();
  return json;
}

export async function findAssets(companyId: number, unitId?: number) {
  let data;
  const apiAssetsURI = `${apiURI}/assets?companyId=${companyId}`;

  if (unitId) data = await fetch(apiAssetsURI);
  else data = await fetch(`${apiAssetsURI}&unitId=${unitId}`);

  const json = await data.json();
  return json;
}

export async function findInAlertAssets(companyId: number, unitId?: number) {
  let data;
  const apiAssetsURI = `${apiURI}/assets?companyId=${companyId}&status=inAlert`;

  if (unitId) data = await fetch(apiAssetsURI);
  else data = await fetch(`${apiAssetsURI}&unitId=${unitId}`);

  const json = await data.json();
  return json;
}

export async function findInDowntimeAssets(companyId: number, unitId?: number) {
  let data;
  const apiAssetsURI = `${apiURI}/assets?companyId=${companyId}&status=inDowntime`;

  if (unitId) data = await fetch(apiAssetsURI);
  else data = await fetch(`${apiAssetsURI}&unitId=${unitId}`);

  const json = await data.json();
  return json;
}
