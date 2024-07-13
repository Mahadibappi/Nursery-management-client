import { createSlice } from "@reduxjs/toolkit";
import { TCategory } from "../../types";

const initialState: TCategory[] = [];

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
