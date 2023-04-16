import { createSlice } from "@reduxjs/toolkit";

const savedCart = localStorage.getItem("cartItems");
// console.log(savedCart);

const initialState = {
  cartItems: savedCart ? JSON.parse(savedCart) : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.product._id !== action.payload.product._id
      );
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { setCartItems, removeCartItem } = cartSlice.actions;
export default cartSlice;
