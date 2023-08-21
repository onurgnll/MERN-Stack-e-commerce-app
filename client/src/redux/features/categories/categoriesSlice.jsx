import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import  axios  from "axios";
const initialState = {
    categories: [],
    loading: false
}


export const getCategories = createAsyncThunk("getCategories" , async() => {
    const {data} = await axios.get("http://localhost:5000/api/categories")
    return data
})



export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    extraReducers: (builder) => {
        
        builder.addCase(getCategories.pending,(state) => {
            state.loading = true
        })
        builder.addCase(getCategories.fulfilled,(state,action) => {
            state.categories = action.payload
            state.loading = false
        })
        
    }
    


})

export default categoriesSlice.reducer