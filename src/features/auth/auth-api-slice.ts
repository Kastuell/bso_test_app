import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { AuthResponseT, RegisterRequestT } from "../../shared/types/auth-types";

export const authApiSlice = createApi({
  reducerPath: "auth_api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_URL! + "/auth",
    prepareHeaders: (headers) => {
      headers.set("method", "POST");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponseT, any>({
      query: (credentials) => ({ url: "login", body: credentials }),
    }),
    register: builder.mutation<AuthResponseT, RegisterRequestT>({
      query: (credentials) => ({ url: "register", body: credentials }),
    }),
  }),
});

export const {} = authApiSlice;
