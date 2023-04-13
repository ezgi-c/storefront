import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadProducts = createAsyncThunk("products/load", async () => {
  const response = await fetch(process.env.REACT_APP_API + "/products");
  const json = await response.json();

  return json.results;
});

export const updateProductStock = createAsyncThunk(
  "product/updateStock",
  async ({ product, stock }) => {
    const updatedProduct = {
      ...product,
      inStock: product.inStock + stock,
    };

    const response = await fetch(
      `${process.env.REACT_APP_API}/products/${product._id}`,
      {
        method: "PUT",
        body: JSON.stringify(updatedProduct),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    return { updatedProduct: json };
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    activeCategory: undefined,
  },
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.fulfilled, (state, { payload }) => {
        state.products = payload;
      })
      .addCase(updateProductStock.fulfilled, (state, { payload }) => {
        const { updatedProduct } = payload;
        const index = state.products.findIndex(
          (product) => product._id === updatedProduct._id
        );
        state.products[index] = updatedProduct;
      });
  },
});

export const filteredProducts = ({ product: { activeCategory, products } }) =>
  activeCategory
    ? products.filter((product) => product.category === activeCategory)
    : products;

export default productSlice;
