import { createSlice } from "@reduxjs/toolkit";

const data = require("./data.json");

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: data.products,
    activeCategory: undefined,
  },
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    updateProduct: (state, action) => {
      let productToBeUpdated = action.payload.product;
      const updatedProduct = {
        ...productToBeUpdated,
        inStock: productToBeUpdated.inStock - 1,
      };
      const index = state.products.findIndex(
        (product) => product.id === updatedProduct.id
      );
      state.products[index] = updatedProduct;
    },
  },
});

export const filteredProducts = ({ product: { activeCategory, products } }) =>
  activeCategory
    ? products.filter((product) => product.category === activeCategory)
    : products;

export default productSlice;
