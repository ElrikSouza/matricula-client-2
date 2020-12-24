import { postCallApi } from "@/api";
import { SignUp } from "./signup.interface";

export const signUp = async (register: SignUp) => {
  await postCallApi("auth/signup", register);
};
