const apiURI = "https://my-json-server.typicode.com/tractian/fake-api/";

export async function loadCompany(id: number) {
  const data = await fetch(`${apiURI}/companies/${id}`);
  const json = await data.json();
  return json;
}

export async function loadUnities(companyId: number) {
  const data = await fetch(`${apiURI}/units?companyId=${companyId}`);
  const json = await data.json();
  return json;
}

export async function loadUsers(companyId: number) {
  const data = await fetch(`${apiURI}/users?companyId=${companyId}`);
  const json = await data.json();
  return json;
}

export async function loadAssets(companyId: number, unitId?: number) {
  let data;
  const apiAssetsURI = `${apiURI}/assets?companyId=${companyId}`;

  if (unitId) data = await fetch(apiAssetsURI);
  else data = await fetch(`${apiAssetsURI}&unitId=${unitId}`);

  const json = await data.json();
  return json;
}

export async function loadInAlertAssets(companyId: number, unitId?: number) {
  let data;
  const apiAssetsURI = `${apiURI}/assets?companyId=${companyId}&status=inAlert`;

  if (unitId) data = await fetch(apiAssetsURI);
  else data = await fetch(`${apiAssetsURI}&unitId=${unitId}`);

  const json = await data.json();
  return json;
}

export async function loadInDowntimeAssets(companyId: number, unitId?: number) {
  let data;
  const apiAssetsURI = `${apiURI}/assets?companyId=${companyId}&status=inDowntime`;

  if (unitId) data = await fetch(apiAssetsURI);
  else data = await fetch(`${apiAssetsURI}&unitId=${unitId}`);

  const json = await data.json();
  return json;
}
