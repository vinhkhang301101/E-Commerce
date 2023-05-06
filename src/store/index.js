import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authReducer";
import { cartReducer, cartSaga, getCartAction } from "./cart";
import createSagaMiddleware from "redux-saga"

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
  devTools: import.meta.env.VITE_NODE_ENV === "development",
  middleware: getMiddleware => getMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(cartSaga);

store.dispatch(getCartAction());