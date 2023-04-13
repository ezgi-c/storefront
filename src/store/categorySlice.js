import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadCategories = createAsyncThunk("categories/load", async () => {
  const response = await fetch(process.env.REACT_APP_API + "/categories");
  const json = await response.json();

  return json.results;
});

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadCategories.fulfilled, (state, { payload }) => {
      state.categories = payload;
    });
  },
});

export default categorySlice;
