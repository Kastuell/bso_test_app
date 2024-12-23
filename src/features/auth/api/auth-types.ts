import { UserT } from "../../../shared/types/user-types";

export type AuthResponseT = {
  user: UserT;
  jwt: string;
};

export type RegisterRequestT = {
  email: string;
  username: string;
  password: string;
};
