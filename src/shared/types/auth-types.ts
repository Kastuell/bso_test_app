import { UserT } from "./user-types";

export type AuthResponseT = {
  user: UserT;
  jwt: string;
};

export type RegisterRequestT = {
  identitifier: string;
  password: string;
};
