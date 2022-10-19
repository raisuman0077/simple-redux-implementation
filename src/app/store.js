import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/action/action'
export const store = configureStore(
    {
        reducer: {
            counter: counterReducer,
        }
    }
)