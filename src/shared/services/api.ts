import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  retry,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { ErrorT } from "../types/error-types";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:1337/api",
  prepareHeaders: (headers, { getState }) => {
    const token =
      (getState() as RootState).authSlice.user?.jwt ||
      localStorage.getItem("jwt");

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

export const api = createApi({
  reducerPath: "splitApi",
  baseQuery: baseQueryWithRetry as BaseQueryFn<
    string | FetchArgs,
    unknown,
    ErrorT,
    {}
  >,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});
