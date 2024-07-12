import { createSlice } from "@reduxjs/toolkit";
import { Category } from "../../types";

const initialState: Category[] = [];

const CategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
});

export default CategorySlice;
