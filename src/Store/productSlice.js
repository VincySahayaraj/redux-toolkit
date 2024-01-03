import React from 'react';
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import statusCode from '../utils/statusCode';
const initialState={
    data:[],
    status:statusCode.IDLE
};
const productSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        // fetchProducts(state,action){
        //  state.data=action.payload
        // }
    },
    extraReducers:(builder)=>{
      builder
      .addCase(getProducts.fulfilled,(state,action)=>{
        state.data=action.payload
        state.status=statusCode.IDLE
      })
      .addCase(getProducts.pending,(state,action)=>{
        state.status=statusCode.LOADING
      })
      .addCase(getProducts.rejected,(state,action)=>{
        state.status=statusCode.ERROR
      })
    }
})
export const {fetchProducts}=productSlice.actions;
export default productSlice.reducer;
export const getProducts=createAsyncThunk('products/thunk',async()=>{
    const data=await fetch('https://fakestoreapi.com/products');
    const result=await data.json();
    return result;
})

// export function getProducts(){
//     return async function getProductsthunk(dispatch,getState){
//         const data=await fetch('https://fakestoreapi.com/products');
//         const result=await data.json();
//         dispatch(fetchProducts(result))
       
//     }
// }
