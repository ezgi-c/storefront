import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    setCartItems: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
    },

    removeCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.product.id !== action.payload
      );
      console.log(state.cartItems);
    },
  },
});

export const { setCartItems, removeCartItem } = cartSlice.actions;
export default cartSlice;
