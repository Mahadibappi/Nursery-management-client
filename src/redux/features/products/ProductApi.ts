import { baseApi } from "../../api/BaseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
    crateProduct: builder.mutation({
      query: (newProduct) => ({
        url: "/products",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: newProduct,
      }),
    }),
  }),
});

export const { useGetAllProductsQuery, useCrateProductMutation } = productApi;
