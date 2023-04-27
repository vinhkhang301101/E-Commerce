import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authReducer";
import { cartReducer } from "./cart";

// const reducers = combineReducers({
//     auth: authReducer
// })

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
  devTools: import.meta.env.VITE_NODE_ENV === "development",
});