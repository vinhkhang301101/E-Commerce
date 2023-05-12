import { cartService } from "@/services/cart";
import { getToken, setCart } from "@/utils";
import { call, delay, put, race, select, take } from "redux-saga/effects";
import { authActions } from "../auth";
import { cartActions, getCartAction } from ".";

export function* fetchCardItem(action) {
  try {
    yield delay(300);
    if (action.payload.quantity >= 1) {
      yield call(
        cartService.addItem,
        action.payload.productId,
        action.payload.quantity
      );
      yield put(getCartAction());

      if (action.payload.showPopover) {
        yield put(cartActions.togglePopover(true));
        window.scroll({
          top: 0,
          behavior: "smooth",
        });
      }
    } else {
      yield put(removeCartItemAction(action.payload.productId));
    }
  } catch (err) {
    // throw err.response.data;
    console.log(err);
  }
}

export function* fetchRemoveItem(action) {
  try {
    yield put(
      cartActions.toggleProductLoading({
        productId: action.payload,
        loading: true,
      })
    );
    yield call(cartService.removeItem, action.payload);
    yield put(getCartAction());
    yield put(
      cartActions.toggleProductLoading({
        productId: action.payload,
        loading: false,
      })
    );
  } catch (err) {
    console.log(err);
  }
}

export function* fetchCart() {
  if (getToken()) {
    const { cart, logout } = yield race({
      cart: call(cartService.getCart),
      logout: take(authActions.logout),
    });

    if (cart) {
      yield put(cartActions.setCart(cart.data));
    }
  }
}

export function* fetchPreCheckout() {
  try {
    let { cart: { preCheckoutData } } = yield select()
    const res = yield call(cartService.preCheckout, preCheckoutData)
    yield put(cartActions.setPreCheckoutResponse(res.data))
  } catch(err) {
    handleError(err)
  }
}

export function* clearCart() {
  yield put(cartActions.setCart(null));
}

export function* setCartSaga(action) {
  setCart(action.payload);
}
