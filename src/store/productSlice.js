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
    // export const updateProduct = createAsyncThunk(
    //   "products/update",
    //   async ({ product, stockAmount }) => {
    //     const updatedProduct = {
    //       ...product,
    //       inStock: product.inStock - stockAmount,
    //     };
    //     // PUT to the API at products/{id}

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
    //     const response = await fetch(
    //       `${process.env.REACT_APP_API}/products/${product._id}`,
    //       {
    //         method: "PUT",
    //         contentType: "application/json",
    //         body: JSON.stringify(updatedProduct),
    //       }
    //     );
    const json = await response.json();
    return { updatedProduct: json };
    //     return response.json();
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
    // decreaseStock: (state, action) => {
    //   let productToBeUpdated = action.payload.product;
    //   const updatedProduct = {
    //     ...productToBeUpdated,
    //     inStock: productToBeUpdated.inStock - 1,
    //   };
    //   const index = state.products.findIndex(
    //     (product) => product.id === updatedProduct.id
    //   );
    //   state.products[index] = updatedProduct;
    // },
    // increaseStock: (state, action) => {
    //   let productToBeUpdated = action.payload.product;
    //   const updatedProduct = {
    //     ...productToBeUpdated,
    //     inStock: productToBeUpdated.inStock,
    //   };
    //   const index = state.products.findIndex(
    //     (product) => product.id === updatedProduct.id
    //   );
    //   state.products[index] = updatedProduct;
    // },
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
    // .addCase(updateProduct.fulfilled, (state, { payload }) => {
    //   // console.log(`updateProduct.fulfilled`, payload);
    //   const product = state.products.find(
    //     (product) => product._id === payload._id
    //   );
    //   product.inStock = payload.inStock;
    // });
  },
});

export const filteredProducts = ({ product: { activeCategory, products } }) =>
  activeCategory
    ? products.filter((product) => product.category === activeCategory)
    : products;

export default productSlice;
