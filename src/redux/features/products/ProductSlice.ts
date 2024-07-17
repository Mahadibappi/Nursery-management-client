import { TProduct } from "./../../../types/index";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TProduct[] = [];
console.log(initialState);

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProduct: (state, action) => {
      state.push(action.payload);
    },
    createProduct: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { getProduct, createProduct } = ProductSlice.actions;
export default ProductSlice.reducer;
