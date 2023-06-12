import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

const cartReducer = createSlice({
    name: 'cart',

    initialState,

    reducers: {
        addToCart(state, action) {
          
            //finding the product which is there or not
            let tempCart = state.cartItems.filter((item) => item.e.product_id === action.payload.e.product_id)

             //if the product should not send data more than one to addToCart function
            if (tempCart < 1) {
                state.cartItems.push(action.payload)
                state.cartTotalQuantity += 1;
                state.cartTotalAmount += action.payload.price;
            } else {
                state.cartStatus = false;
            }
        },

        deleteCart: (state, action) => {
            state.cartItems.splice(action.payload.index, 1)
            state.cartTotalAmount = state.cartTotalAmount - action.payload.price;
            state.cartTotalQuantity -= 1;
        },

        clearCart: (state, action) => {
            state.cartItems = []
            state.cartTotalQuantity = action.payload;
            state.cartTotalAmount = action.payload;
        },

    }

})

export const { addToCart, deleteCart, clearCart } = cartReducer.actions;
export default cartReducer.reducer;