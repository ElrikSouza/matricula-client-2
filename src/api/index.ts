import { ApiError } from "./api-error";

const baseURl = process.env.VUE_APP_BASE_URL;
const accessTokenKey = "TOKEN";

export const callApi = async (url: string, options: RequestInit = {}) => {
  const accessToken = localStorage.getItem(accessTokenKey) as string;

  const response = await fetch(`${baseURl}/${url}`, {
    headers: { authorization: `Bearer ${accessToken}` },
    ...options,
  });

  const isResponseOk = response.ok;
  const jsonResult = await response.json();

  if (!isResponseOk) {
    throw new ApiError(jsonResult.message);
  }

  return jsonResult;
};

export const postCallApi = (
  url: string,
  body: object,
  options: RequestInit = {}
) => {
  const stringifiedBody = JSON.stringify(body);
  return callApi(url, {
    method: "POST",
    cache: "no-cache",
    body: stringifiedBody,
    headers: { "Content-Type": "application/json" },
    ...options,
  });
};
