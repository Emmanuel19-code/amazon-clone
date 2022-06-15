import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basketSlice";
import authReducer from './authSlice';
const store=configureStore({
    reducer:{
     basket:basketReducer,
     user:authReducer
    } 
})


export default store;











