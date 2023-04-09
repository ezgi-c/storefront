import { createSlice } from "@reduxjs/toolkit";

// const data = require("./data.json");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    // selectedItem: undefined,
  },
  reducers: {
    // setSelectedItem: (state, action) => {
    //   state.selectedItem = action.payload;
    //   console.log(state.selectedItem)
    // },
    setCartItems: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
      console.log(state.cartItems);
    },
    
    removeCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter(item => !action.payload)
      console.log(state.cartItems);
    },
  },
});

export default cartSlice;
