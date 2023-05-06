import { cartService } from "@/services/cart";
import { getToken } from "@/utils";
import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { takeLatest, call, put, delay } from "redux-saga/effects"

export const updateCartItemAction = createAction("cart/addCartItem")
export const removeCartItemAction = createAction("cart/removeItem")

// export const updateCartItemAction = createAsyncThunk(
//   "cart/addCartItem",
//   async (data, thunkApi) => {
//     try {
//       await cartService.addItem(data.productId, data.quantity);
//       thunkApi.dispatch(getCartAction());
//       if(data.showPopover) {
//         thunkApi.dispatch(cartActions.togglePopover(true));

//         window.scroll({
//           top: 0,
//           behavior: "smooth",
//         });
//       }
//     } catch (err) {
//       throw err.response.data;
//     }
//   }
// );

export const getCartAction = createAsyncThunk(
  "cart/getCart",
  async (_, thunkApi) => {
    try {
      if (getToken()) {
        const cart = await cartService.getCart();
        thunkApi.dispatch(cartActions.setCart(cart.data));
        return cart;
      }
    } catch (err) {
      console.log(err);
    }
  }
);

export const { reducer: cartReducer, actions: cartActions } = createSlice({
  name: "cart",
  initialState: {
    cart: null,
    openCartOver: false
  },
  reducers: {
    setCart(state, action) {
      state.cart = action.payload;
    },
    togglePopover(state, action) {
      state.openCartOver = action.payload
    }
  },
});

function* fetchCardItem(action) {
  try {
    yield delay(300)
    yield call(cartService.addItem, action.payload.productId, action.payload.quantity);
    // thunkApi.dispatch(getCartAction());
    yield put(getCartAction())
    if (action.payload.showPopover) {
      thunkApi.dispatch(cartActions.togglePopover(true));

      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    }
  } catch (err) {
    // throw err.response.data;
    console.log(err);
  }
}

function* fetchRemoveItem() {
  try {
    
  } catch (err) {
    console.log(err);
  }
}

export function* cartSaga() {
  yield takeLatest(updateCartItemAction, fetchCardItem)
  yield takeLatest(removeCartItemAction, fetchRemoveItem)
}