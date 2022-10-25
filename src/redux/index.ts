import { combineReducers, configureStore } from "@reduxjs/toolkit";
import paintings from "./reducers/paintings";

const rootReducer = combineReducers({
    paintings : paintings,
})

export const store = configureStore({
    reducer:rootReducer,
})