import { createSlice } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";


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
      const index = state.cartItems.indexOf(action.payload);
      state.cartItems.splice(index, 1);
      // borrowed the solution to splice at index from Stacy ^.^
      console.log(state.cartItems);
    },
  },
});

export const { setCartItems, removeCartItem } = cartSlice.actions;
export default cartSlice;
