/* eslint-disable no-undef */
import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products:[],
        quantity:0,
        total: 0
    },
    reducers:{
        addProduct: (state, action) =>{
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price   * action.payload.quantity;
        },
        removeProduct : (state, action) =>{
            state.quantity -=1
            state.products.pop(action.payload);
            state.total -=action.payload.price * action.payload.quantity;
        },
        resetProduct : (state) => {
            state.quantity = 0;
            state.products = [];
            state.total = 0;
        }
    },
});
export const {addProduct, removeProduct, resetProduct} = cartSlice.actions;
export default cartSlice.reducer;