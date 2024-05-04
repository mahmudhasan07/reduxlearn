import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Counter";


const Store = configureStore(
    {
        reducer: { counter: counterSlice }
    }
)

export default Store