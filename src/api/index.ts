import { ApiError } from "./api-error";

const baseURl = process.env.VUE_APP_BASE_URL;
const accessTokenKey = "TOKEN";

export const callApi = async (url: string, options: RequestInit = {}) => {
  const accessToken = localStorage.getItem(accessTokenKey) as string;

  const response = await fetch(`${baseURl}/${url}`, {
    headers: { authorization: accessToken },
    ...options,
  }).then(response => response.json());

  if (response.ok) {
    return response;
  }

  throw new ApiError(response.message);
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
