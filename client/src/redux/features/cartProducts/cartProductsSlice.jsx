import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartSize: 0,
    cartItems: [],
    cartSum :0 
}

export const cartProduct = createSlice({
    name: "cartProduct",
    initialState,
    reducers:{
        addTocart: (state,action) => {
            const newitem = {
                product: action.payload,
                quantity: 1
            }
            console.log(newitem);

            const existingItem = state.cartItems.find(item => item.product._id == action.payload._id);

            if (existingItem) {
                existingItem.quantity += 1;
                state.cartSum += existingItem.product.price
            } else {
                state.cartSum += newitem.product.price
                state.cartSize += 1;
                state.cartItems.push(newitem);
            }
        },

        removeFormCart: (state,action) => {
            
            state.cartItems.map((e,index) => {
                if(e.product._id == action.payload.product._id){
                    state.cartItems.splice(index,1)
                    state.cartSum -= action.payload.product.price * action.payload.quantity
                    state.cartSize -= 1
                }
            })


        },
        decreaseAmount: (state,action) => {
            
            state.cartItems.map((e,index) => {
                if(e.product._id == action.payload.product._id){
                    if(e.quantity > 1 ){
                        e.quantity -= 1
                        state.cartSum -= action.payload.product.price * 1

                    }
                    else if(e.quantity == 1){
                        state.cartItems.splice(index,1)
                        state.cartSum -= action.payload.product.price * action.payload.quantity
                        state.cartSize -= 1

                    }
                }
            })


        },
        increaseAmount: (state,action) => {
            
            state.cartItems.map((e) => {
                if(e.product._id == action.payload.product._id){
                    e.quantity += 1
                    state.cartSum += action.payload.product.price * 1
                }
            })


        },

        removeAll: (state) => {
            
                state.cartItems = [];
                state.cartSum = 0;
                state.cartSize = 0;
            }


        }

    }
)

export const { addTocart ,removeFormCart ,decreaseAmount , increaseAmount,removeAll} = cartProduct.actions
export default cartProduct.reducer