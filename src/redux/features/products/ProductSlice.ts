import { TProduct } from "./../../../types/index";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TProduct[] = [];

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProduct: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { getProduct } = ProductSlice.actions;
export default ProductSlice.reducer;
