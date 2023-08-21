import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogged: localStorage.length > 0
}



export const auth = createSlice({
    
    name: "auth",
    initialState,
    reducers:{
        login: (state) => {
           state.isLogged = true
        },
        logout: (state) => {
            state.isLogged = false
            
        }

    }
})

export const { login , logout} = auth.actions
export default auth.reducer