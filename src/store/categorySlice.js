import { createSlice } from "@reduxjs/toolkit";

const data = require("./data.json");

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: data.categories,
  },
});

export default categorySlice;
