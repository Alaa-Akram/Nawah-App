import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slices/UserSlice";
import FarmerSlice from "./Slices/FarmerSlice";
import ProductSlice from "./Slices/ProductSlice";


export const Store = configureStore(
   { reducer:{
    UserSlice,
    FarmerSlice,
    ProductSlice,
    }}
)