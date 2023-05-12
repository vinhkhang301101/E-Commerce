import { createAction, createSlice } from "@reduxjs/toolkit";
import { takeLatest } from "redux-saga/effects";
import { loginSuccessAction, logoutAction } from "../auth";
import {
  clearCart,
  fetchCardItem,
  fetchCart,
  fetchPreCheckout,
  fetchRemoveItem,
  fetchSelectCartItem,
  setCartSaga,
} from "./saga";
import { getCart } from "@/utils";

export const {
  reducer: cartReducer,
  actions: cartActions,
  name,
  getInitialState,
} = createSlice({
  name: "cart",
  initialState: () => {
    return {
      cart: getCart(),
      openCartOver: false,
      preCheckoutData: {
        listItems: [],
      },
      preCheckoutResponse: null,
      preCheckoutLoading: false,
      loading: {
        // 223344: true,
      },
    };
  },
  reducers: {
    setCart(state, action) {
      state.cart = action.payload;
    },

    togglePopover(state, action) {
      state.openCartOver = action.payload;
    },

    toggleProductLoading(state, action) {
      state.loading[action.payload.productId] = action.payload.loading;
    },

    setPreCheckoutData(state, action) {
      state.preCheckoutData = action.payload;
    },

    setPreCheckoutResponse(state, action) {
      state.preCheckoutResponse = action.payload;
    },

    togglePreCheckoutLoading(state, action) {
      state.preCheckoutLoading = action.payload;
    },
  },
});

export const updateCartItemAction = createAction(`${name}/addCartItem`);
export const removeCartItemAction = createAction(`${name}/removeItem`);
export const getCartAction = createAction(`${name}/getCart`);
export const toggleCheckoutItemAction = createAction(`${name}/selectCartItem`);
export const updateItemQuantitySuccessAction = createAction(`${name}/updateItemQuantitySuccess`);

export function* cartSaga() {
  yield takeLatest(updateCartItemAction, fetchCardItem);
  yield takeLatest(removeCartItemAction, fetchRemoveItem);
  yield takeLatest([getCartAction, loginSuccessAction], fetchCart);
  yield takeLatest(logoutAction, clearCart);
  yield takeLatest(cartActions.setCart, setCartSaga);
  yield takeLatest(toggleCheckoutItemAction, fetchSelectCartItem);
  yield takeLatest([cartActions.setPreCheckoutData, updateItemQuantitySuccessAction], fetchPreCheckout);
}
