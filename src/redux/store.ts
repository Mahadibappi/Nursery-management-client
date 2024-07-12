import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./features/CategorySlice";
import { baseApi } from "./api/BaseApi";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
