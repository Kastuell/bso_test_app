import { AuthResponseT, RegisterRequestT } from "../types/auth-types";
import { api } from "./api";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponseT, any>({
      query: (body) => ({
        url: `/local`,
        method: "POST",
        body,
      }),
    }),
    register: builder.mutation<AuthResponseT, RegisterRequestT>({
      query: (body) => ({
        url: `/local/register`,
        method: "POST",
        body,
      }),
    }),
    current: builder.mutation({
      query: () => ({
        url: "/user/current",
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useCurrentMutation } =
  authApi;

export const {
  endpoints: { login, register, current },
} = authApi;
