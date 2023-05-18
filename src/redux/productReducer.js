import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../App";

const token = sessionStorage.getItem('token');

//createAsyncThunk function to fetch data from database and update the state
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    try {
        let response = await axios.get(`${url}/product-details`,{
          headers: {
            Authorization: `Bearer ${token}`,
          }
        })
        return response;
        
    } catch (error) {
        console.log(error);
    }
}
)



export const productReducer = createSlice({
    name: "products",
    initialState:{
       products: [],
       loading:true
    },
    reducers: {},

     //we use extra reducer when we get data from database will receive as a promise  
    extraReducers:{
      [fetchProducts.pending] : (state, action)=>{
        state.loading=true;
      },
      [fetchProducts.fulfilled] : (state, action)=>{
        state.loading=false;
        state.products = action.payload; 
      },
      [fetchProducts.rejected] : (state, action)=>{
        state.loading=true;
      }
    }    
});



export default productReducer.reducer;





