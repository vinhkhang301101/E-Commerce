import { cartService } from "@/services/cart";
import { getToken, handleError, setCart } from "@/utils";
import { call, delay, put, race, select, take } from "redux-saga/effects";
import { authActions } from "../auth";
import { cartActions, getCartAction, removeCartItemAction, updateCartItemAction } from ".";

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

export function* fetchSelectCartItem(action) {
  try {
    let {
      cart: {
        preCheckoutData: { listItems },
      },
    } = yield select();
    listItems = [...listItems];

    const { productId, checked } = action.payload;

    if (checked) {
      listItems.push(productId);
    } else {
      listItems = listItems.filter((e) => e !== productId);
    }

    yield put(
      cartActions.setPreCheckoutData({
        listItems,
      })
    );
  } catch (err) {
    handleError(err);
  }
}

export function* fetchPreCheckout(action) {
  try {
    let { cart: { preCheckoutData } } = yield select()
    if (action.type === cartActions.setPreCheckoutData.toString()) {
      const res = yield call(cartService.preCheckout, preCheckoutData)

      yield put(cartActions.setPreCheckoutResponse(res.data))
    } else if (action.type === updateCartItemAction.toString()) {
      let { productId } = action.payload

      if (preCheckoutData.listItems.find(e => e === productId)) {
        const res = yield call(cartService.preCheckout, preCheckoutData)
        yield put(cartActions.setPreCheckoutResponse(res.data))
      }
    } else if (action.type === removeCartItemAction.toString()) {
      if (preCheckoutData.listItems.find(e => e === action.payload)) {
        const res = yield call(cartService.preCheckout, preCheckoutData)
        yield put(cartActions.setPreCheckoutResponse(res.data))
      }
    }
    
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
