import { createSlice } from "@reduxjs/toolkit";
import { Category } from "../../types";

const initialState: Category[] = [];

const CategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addCategory } = CategorySlice.actions;
export default CategorySlice.reducer;
