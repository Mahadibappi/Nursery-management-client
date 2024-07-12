import { baseApi } from "../api/BaseApi";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => ({
        url: "/category",
        method: "GET",
      }),
    }),
  }),
});
