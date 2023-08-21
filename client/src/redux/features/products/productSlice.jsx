import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    products: []
}

export const getProducts = createAsyncThunk("getProducts", async () => {
    const {data} = await axios.get("http://localhost:5000/api/products")
    return data
})

export const productSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending,(state) => {
            state.loading = true
        })
        builder.addCase(getProducts.fulfilled,(state,action) => {
            state.products = action.payload
            state.loading = false
        })
    }
})

export default productSlice.reducer