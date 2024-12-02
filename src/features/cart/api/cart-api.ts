import { api } from "../../../shared/services/api";

export const cartApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (body) => ({
        url: "",
      }),
    }),
  }),
});
