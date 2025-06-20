import {configureStore} from "@reduxjs/toolkit"
import { todoSlice } from "../slice";

export const store = configureStore({
    reducer: {
        todo: todoSlice
    },
})

export default store;