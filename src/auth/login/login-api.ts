import { postCallApi } from "@/api";
import { Login } from "./login.interface";

const saveAccessToken = (accessToken: string) =>
  localStorage.setItem("TOKEN", accessToken);

export const logIn = async ({ email, password }: Login) => {
  const { accessToken } = await postCallApi("auth/login", { email, password });

  saveAccessToken(accessToken);
};
