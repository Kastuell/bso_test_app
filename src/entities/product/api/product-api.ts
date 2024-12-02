import { api } from "../../../shared/services/api";

export const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
  }),
});

export const { useGetAllProductsQuery, useLazyGetAllProductsQuery } =
  productApi;
export const {
  endpoints: { getAllProducts },
} = productApi;
