import { configureStore } from "@reduxjs/toolkit";

import counterSlice from './slicer'

export const store =configureStore({
    reducer:{
        counter:counterSlice,
    }, 
})