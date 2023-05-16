import { createAction, createSlice } from "@reduxjs/toolkit";
import { takeLatest } from "redux-saga/effects";
import { loginSuccessAction, logoutAction } from "../auth";
import {
  clearCart,
  fetchAddPromotion,
  fetchCardItem,
  fetchCart,
  fetchPreCheckout,
  fetchRemoveItem,
  fetchSelectCartItem,
  removePromotion,
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
        promotionCode: [],
        listItems: [],
        shippingMethods: "mien-phi",
        paymentMethods: "money",
      },
      preCheckoutResponse: {},
      preCheckoutLoading: false,
      promotionLoading: false,
      loading: {
        // 223344: true,
      },
    };
  },
  reducers: {
    clearCart(state) {
      return {
        ...state,
        openCartOver: false,
        preCheckoutData: {
          promotionCode: [],
          listItems: [],
          shippingMethods: "mien-phi",
          paymentMethods: "money",
        },
        preCheckoutResponse: {},
        preCheckoutLoading: false,
        promotionLoading: false,
        loading: {},
      };
    },

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

    togglePromotionCode(state, action) {
      if (action.payload) {
        state.preCheckoutData.promotionCode = [action.payload];
      } else {
        state.preCheckoutData.promotionCode = [];
      }
    },

    togglePromotionLoading(state, action) {
      state.promotionLoading = action.payload.loading;
    },
  },
});

export const updateCartItemAction = createAction(`${name}/addCartItem`);
export const removeCartItemAction = createAction(`${name}/removeItem`);
export const getCartAction = createAction(`${name}/getCart`);
export const toggleCheckoutItemAction = createAction(`${name}/selectCartItem`);
export const updateItemQuantitySuccessAction = createAction(`${name}/updateItemQuantitySuccess`);
export const addPromotionAction = createAction(`${name}/addPromotion`);
export const removePromotionAction = createAction(`${name}/removePromotion`);

export function* cartSaga() {
  yield takeLatest(updateCartItemAction, fetchCardItem);
  yield takeLatest(removeCartItemAction, fetchRemoveItem);
  yield takeLatest([getCartAction, loginSuccessAction, cartActions.clearCart], fetchCart);
  yield takeLatest(logoutAction, clearCart);
  yield takeLatest(cartActions.setCart, setCartSaga);
  yield takeLatest(toggleCheckoutItemAction, fetchSelectCartItem);
  yield takeLatest([cartActions.setPreCheckoutData, updateItemQuantitySuccessAction, cartActions.togglePromotionCode], fetchPreCheckout);
  yield takeLatest(addPromotionAction, fetchAddPromotion);
  yield takeLatest(removePromotionAction, removePromotion);
}
