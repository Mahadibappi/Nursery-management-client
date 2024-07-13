import { baseApi } from "../../api/BaseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllProductsQuery } = productApi;
