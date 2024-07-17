import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://nursery-management.onrender.com/api/v1",
    credentials: "include",
  }),

  endpoints: () => ({}),
});
