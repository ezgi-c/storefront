import { createSlice } from "@reduxjs/toolkit";

const data = require("./data.json");

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: data.products,
    categories: data.categories,
    activeCategory: undefined,
  },
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
});

export const filteredProducts = ({ product: { activeCategory, products } }) =>
  activeCategory
    ? products.filter((product) => product.category === activeCategory)
    : products;

export default productSlice;
