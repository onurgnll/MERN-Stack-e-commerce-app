import { configureStore } from "@reduxjs/toolkit";
import  productReducer  from "../features/products/productSlice";
import categoriesReducer from "../features/categories/categoriesSlice";
import cartProductReducer from "../features/cartProducts/cartProductsSlice";
import authSlice from "../features/auth/authSlice";



export const store = configureStore({
    reducer: {
        products: productReducer,
        categories: categoriesReducer,
        cartProduct: cartProductReducer,
        auth: authSlice
        
    }
})