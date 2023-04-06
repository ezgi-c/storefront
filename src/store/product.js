import { createSlice } from "@reduxjs/toolkit";

const data = require("./data.json");

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: data.products,
    }
});

export default productSlice;
